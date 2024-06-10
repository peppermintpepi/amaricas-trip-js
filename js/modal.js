// Selecciona el modal y la imagen dentro del modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

// Selecciona todas las imágenes en la galería
var images = document.getElementsByClassName("open-AddImgDialog");

// Variable para el índice de la imagen actual
var slideIndex = 0;

// Añade evento de clic a cada imagen
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    slideIndex = i;
  });
}

// Selecciona el span que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cierra el modal cuando el usuario hace clic en el span
span.onclick = function () {
  modal.style.display = "none";
};

// Función para cerrar el modal al hacer clic fuera de él
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Obtén las flechas
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

// Agrega eventos de clic a las flechas
prev.addEventListener("click", function () {
  plusSlides(-1);
});
next.addEventListener("click", function () {
  plusSlides(1);
});

// Función para avanzar o retroceder las imágenes
function plusSlides(n) {
  slideIndex += n;

  // Ajusta slideIndex para que sea circular
  if (slideIndex >= images.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = images.length - 1;
  }

  // Actualiza la imagen del modal
  modalImg.src = images[slideIndex].src;
}
