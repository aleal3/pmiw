//////////////////////////////////////////////////////////////////TP1 DE ALEJANDRO TAMAYO - LEGAJO 122913/2 - DOCUMENTO 82224120
///////////////////////////////////////////////////////////////// TP1 (PMIW) - Video explícativo: https://youtu.be/__fQa-cm7uM

/////////////////////////////////////////////////////// Errores principales del anterior TP (TP3):
/////////////////////////////////////////////////////// Imagen de referencia ubicada en la derecha, corregido.
/////////////////////////////////////////////////////// Botón "Restart" oculto o no visible, corregido.
let referencia;
let cols = 10;
let rows = 10;
let baseSize = 20;
let efectoOndas = true;
function preload() {
  referencia = loadImage("assets/referencia.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  referencia.filter(GRAY);
}

function draw() {
  background(255);
  
  let sectionWidth = width / 2;
  image(referencia, 0, 0, sectionWidth, height);
  dibujarOpArt(sectionWidth, 0, sectionWidth, height);

///////////////////////////////////////////////////boton restart
  fill(200, 100, 100);
  rect(200, 400, 120, 30);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Restart", 260, 415);
}

////////////////////////////////////////////////función que no retorna
function dibujarCirculo(x, y, diam) {
  fill(0);
  ellipse(x, y, diam, diam);
}

/////////////////////////////////////////////////////funcion que si retorna
function calcularDiametro(x, y) {
  let d = dist(x, y, mouseX, mouseY);
  let factor = efectoOndas ? sin(d * 0.05 + frameCount * 0.05) : cos(d * 0.05);
  return map(factor, -1, 1, 5, baseSize * 2);
}

function dibujarOpArt(x, y, w, h) {
  let cellW = w / cols;
  let cellH = h / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let cx = x + i * cellW + cellW / 2;
      let cy = y + j * cellH + cellH / 2;
      let diam = calcularDiametro(cx, cy);
      dibujarCirculo(cx, cy, diam);
    }
  }
}
//////////////////////////////////////////////////////letras interactivas:
//////////////////////////////////////////////////////R = restaurar todo
//////////////////////////////////////////////////////- = disminuir tamaño
//////////////////////////////////////////////////////+ = aumentar tamaño
//////////////////////////////////////////////////////  = cambio de funciones (estático o en movimiento).
function keyPressed() {
  if (key === ' ') {
    efectoOndas = !efectoOndas;
  } else if (key === '+') {
    baseSize += 2;
  } else if (key === '-') {
    baseSize = max(5, baseSize - 2);
  } else if (key === 'r' || key === 'R') {
    reiniciar();
  }
}
/////////////////////////////////////////////////seguimiento del mouse
function mousePressed() {
////////////////////////////////////coordenadas fijas
  if (mouseX > 200 && mouseX < 320 &&
      mouseY > 400 && mouseY < 430) {
    reiniciar();
  }
}
/////////////////////////////////////movimiento del mouse
function reiniciar() {
  baseSize = 20;
  efectoOndas = true;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
