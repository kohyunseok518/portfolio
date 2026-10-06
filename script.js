(function () {
  var overlay = document.getElementById("overlay");
  var body = document.getElementById("modal-body");
  var closeBtn = document.getElementById("modal-close");

  function open(id) {
    var template = document.getElementById(id);
    if (!template) return;
    body.innerHTML = "";
    body.appendChild(template.content.cloneNode(true));
    overlay.classList.add("is-open");
    overlay.scrollTop = 0;
    document.body.style.overflow = "hidden";
    history.replaceState(null, "", "#" + id);
  }

  function close() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname);
  }

  document.querySelectorAll("[data-detail]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      open(btn.getAttribute("data-detail"));
    });
  });

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
  });

  // 주소에 #detail-... 가 있으면 그 상세를 바로 연다(링크 공유용).
  if (location.hash && document.getElementById(location.hash.slice(1))) {
    open(location.hash.slice(1));
  }
})();
