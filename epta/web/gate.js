/*
 * 비밀번호 잠금 화면. 세 페이지(목록·풀이·내 답안 보기)가 같이 쓴다.
 *
 *   window.eptaGate(onReady)  — 키가 있으면 바로 onReady(키), 없으면 잠금화면을 띄우고
 *                               비밀번호가 맞으면 서버에서 키를 받아 보관한 뒤 onReady(키)
 *   window.eptaToken()        — 지금 가진 키 (없으면 '')
 *   window.eptaForget()       — 키를 지우고 다시 잠근다
 *
 * 비밀번호 자체는 이 파일에 없다. 서버(/api/login)가 확인한다.
 */
(function () {
  var KEY = 'epta:token';

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null') || ''; } catch (e) { return ''; }
  }
  function write(v) {
    try { localStorage.setItem(KEY, JSON.stringify(v)); return read() === v; } catch (e) { return false; }
  }

  window.eptaToken = read;
  window.eptaForget = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
  };

  function style() {
    if (document.getElementById('epta-gate-css')) return;
    var s = document.createElement('style');
    s.id = 'epta-gate-css';
    s.textContent = [
      '#epta-gate{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;',
      'justify-content:center;background:var(--bg,#f4f5f7);padding:24px}',
      '#epta-gate .box{width:100%;max-width:300px;text-align:center}',
      '#epta-gate h2{font:600 19px/1.4 system-ui,-apple-system,"Segoe UI","Malgun Gothic",sans-serif;',
      'color:var(--text,#1d2330);margin:0 0 6px}',
      '#epta-gate p{font:14px/1.5 system-ui,sans-serif;color:var(--muted,#6b7384);margin:0 0 18px}',
      '#epta-gate input{width:100%;box-sizing:border-box;font:600 28px/1 system-ui,sans-serif;',
      'letter-spacing:.3em;text-align:center;padding:14px;border:1px solid var(--line,#e2e5ea);',
      'border-radius:10px;background:var(--card,#fff);color:var(--text,#1d2330)}',
      '#epta-gate button{width:100%;margin-top:10px;font:600 16px system-ui,sans-serif;padding:13px;',
      'border:0;border-radius:10px;background:var(--accent,#2459d6);color:#fff;cursor:pointer}',
      '#epta-gate button:disabled{opacity:.5;cursor:default}',
      '#epta-gate .msg{min-height:20px;margin-top:10px;font:13px system-ui,sans-serif;',
      'color:var(--warn,#b4531c)}',
    ].join('');
    document.head.appendChild(s);
  }

  window.eptaGate = function (onReady) {
    // 예전 방식 호환 — 주소에 #k=… 가 있으면 그대로 쓴다
    try {
      var fromHash = new URLSearchParams(location.hash.slice(1)).get('k');
      if (fromHash) {
        write(fromHash);
        history.replaceState(null, '', location.pathname + location.search);
      }
    } catch (e) {}

    var have = read();
    if (have) { onReady(have); return; }

    style();
    var gate = document.createElement('div');
    gate.id = 'epta-gate';
    gate.innerHTML =
      '<div class="box">' +
      '<h2>EPTA 연습</h2>' +
      '<p>비밀번호를 입력하세요</p>' +
      '<input id="epta-pin" type="password" inputmode="numeric" autocomplete="off" ' +
      'maxlength="8" placeholder="····">' +
      '<button id="epta-go">들어가기</button>' +
      '<div class="msg" id="epta-msg"></div>' +
      '</div>';
    document.body.appendChild(gate);

    var input = gate.querySelector('#epta-pin');
    var go = gate.querySelector('#epta-go');
    var msg = gate.querySelector('#epta-msg');
    input.focus();

    function submit() {
      var pin = input.value.trim();
      if (!pin) return;
      go.disabled = true;
      msg.textContent = '확인 중…';
      fetch('/api/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ pin: pin }),
      })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          go.disabled = false;
          if (!res.ok || !res.j.token) {
            msg.textContent = res.j.error || '들어갈 수 없습니다';
            input.value = '';
            input.focus();
            return;
          }
          var saved = write(res.j.token);
          msg.textContent = saved ? '' : '이 탭에서만 유지됩니다';
          gate.remove();
          onReady(res.j.token);
        })
        .catch(function () {
          go.disabled = false;
          msg.textContent = '서버에 연결할 수 없습니다';
        });
    }

    go.addEventListener('click', submit);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
  };
})();
