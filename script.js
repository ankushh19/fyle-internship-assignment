const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#container"),
  smooth: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const textDivs = document.querySelectorAll(".text");
  const mainImage = document.getElementById("main-image");

  textDivs.forEach((div) => {
    div.addEventListener("click", function () {
      textDivs.forEach((d) => d.classList.remove("active"));

      this.classList.add("active");

      const newImage = this.getAttribute("data-image");
      mainImage.src = newImage;
    });
  });
});
