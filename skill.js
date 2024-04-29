// tombol dark mode (toggle)
function Darkmode() {
  const dark = document.body;
  dark.classList.toggle("dark");
}

// javasc scrollnavbar
let lastKnownScrollPosition = 150;
let ticking = false;
document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      const elements = document.querySelectorAll("#navLink");
      if (lastKnownScrollPosition > 20) {
        // kita buat navbar jadi gelap

        document.getElementById("myNav").classList.remove("navbar-dark");
        document.getElementById("brand").classList.remove("text-white");
        document.getElementById("brand").classList.add("text-black");
        elements.forEach(function (el, index) {
          el.classList.remove("text-white");
          el.classList.add("text-black");
        });

        document.getElementById("myNav").classList.add("bg-body-secondary");
      } else {
        document.getElementById("myNav").classList.remove("bg-body-secondary");
        document.getElementById("brand").classList.add("text-white");
        document.getElementById("brand").classList.remove("text-black");

        elements.forEach(function (el, index) {
          el.classList.add("text-black");
          el.classList.remove("text-black");
        });

        document.getElementById("myNav").classList.add("navbar-dark");
      }

      ticking = false;
    });

    ticking = true;
  }
});
