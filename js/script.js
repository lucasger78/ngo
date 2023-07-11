// Muestra u oculta el botón Back to Top según la posición del scroll
window.addEventListener("scroll", function() {
    const button = document.querySelector(".back-to-top");
    button.classList.toggle("show", window.scrollY > 0);
  });
  
  // Scroll suave hacia el encabezado de la página cuando se hace click en el botón
  document.querySelector(".back-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  //Preview servicios

  document.addEventListener("DOMContentLoaded", function() {
    const masInfoButtons = document.querySelectorAll(".mas-info");
  
    for (let i = 0; i < masInfoButtons.length; i++) {
      masInfoButtons[i].addEventListener("click", function() {
        const targetId = this.getAttribute("data-target");
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.style.display = "block";
          this.parentNode.style.display = "none";
        }
      });
    }
  });

  
  