const myPics = document.getElementById("tutoriel");
const context = myPics.getContext("2d");
const eraser = document.querySelector(".fa-eraser");
const pen = document.querySelector("#pen");

eraser.addEventListener("click", (e) => {
  context.clearRect(0, 0, myPics.width, myPics.height);
});

// On récupère le décalage du canevas en x et y par rapport aux bords
// de la page
const rect = myPics.getBoundingClientRect();

if (pen.checked == true) {

    console.log("Pen checked");

    const palettecolors = document.querySelectorAll(".palette");

    palettecolors.forEach(btn => {

        btn.addEventListener('click', (event)=> {
         // ... event handled
         color = btn.id;
        //  console.log(color);
         return color;
        });
     });


  // On ajoute les gestionnaires d'évènements pour mousedown, mousemove
  // et mouseup
  myPics.addEventListener("mousedown", (e) => {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    isDrawing = true;
  });

  myPics.addEventListener("mousemove", (e) => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top,color);
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
  });

  window.addEventListener("mouseup", (e) => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top,color);
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });

  function drawLine(context, x1, y1, x2, y2,color) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }
} else {
  console.log("pen non check");
}
