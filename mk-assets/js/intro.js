function domReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (document.readyState === "interactive" || document.readyState === "complete") {
    fn();
  }
}

domReady(() => {
  document
    .getElementsByClassName("ems")
    .item(0)
    .addEventListener("click", function () {
      document.getElementsByClassName("intro").item(0).classList.add("is-visible");
    });
  document
    .getElementsByClassName("intro")
    .item(0)
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("is-visible")) {
        e.target.classList.remove("is-visible");
      }
    });
});
