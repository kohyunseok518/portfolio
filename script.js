// 예전 상세 창 주소(#detail-...)로 들어오면 새 프로젝트 페이지로 보낸다.
(function () {
  var pages = {
    "#detail-facecook": "./projects/facecook.html",
    "#detail-firstfolio": "./projects/firstfolio.html",
    "#detail-sottaejap": "./projects/sottaejap.html"
  };
  if (pages[location.hash]) location.replace(pages[location.hash]);
})();
