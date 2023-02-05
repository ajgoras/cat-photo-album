let activePhoto;

document.querySelector("#albumdiv").addEventListener("click", () => {
  document.querySelectorAll(".photo").forEach((el) => {
    el.classList.remove("activePhoto");
    el.classList.add("photohover");
  });
});

document.querySelectorAll(".photo").forEach((el) => {
  el.addEventListener("click", function () {
    setTimeout(() => {
      el.classList.add("activePhoto");
      el.classList.remove("photohover");
      activePhoto = el;
    }, 1);
  });
});
document.querySelectorAll(".photo").forEach((el) => {
  el.addEventListener("click", function () {
    el.classList.add("photohover");
    if (el.classList.contains("activePhoto")) {
    } else {
      el.classList.remove("activePhoto");
    }
  });
});

setTimeout(() => {
  document.querySelector(".intro-right").classList.add("open");
  document.querySelector(".intro-left").classList.add("open");
}, 2000);
