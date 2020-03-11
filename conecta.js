let matriz = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];
let turno = 1;
let conTurno = 0;

escribir = (id, celda5, celda4, celda3, celda2, celda1, celda0, columna, turn) => {  
  let i = 5;
  let encontro = false;
      while (encontro === false) { 
        if (matriz[i][columna] === 0) {
          encontro = true;
        } else { 
          i--;
        } 
      } 
        if (i === 5) { 
        matriz[i][columna] = turno;
        celda5.innerHTML = turno
        conTurno = conTurno + 1;
        cambiarTurno();
        validacionHorizontal(i, columna);
        validarDesc(i, columna);
        validacionInclinada1(i, columna);
        if (conTurno === 42) { 
          alert("Empate");
          location.reload();
        }
        
      }
      if (i === 4) {
        matriz[i][columna] = turno;
        celda4.innerText = turno;
        conTurno = conTurno + 1;
        cambiarTurno();
        validacionHorizontal(i, columna);
        validarDesc(i, columna);
        validacionInclinada1(i, columna);
        if (conTurno === 42) {
          alert("Empate");
          location.reload();
        }
      }
      if (i === 3) {
        matriz[i][columna] = turno;
        celda3.innerText = turno;
        conTurno = conTurno + 1;
        cambiarTurno();
        validacionHorizontal(i, columna);
        validarDesc(i, columna);
        validacionInclinada1(i, columna);
        if (conTurno === 42) {
          alert("Empate");
          location.reload();
        }
      }
      if (i === 2) {
        matriz[i][columna] = turno;
        celda2.innerText = turno;
        conTurno = conTurno + 1;
        cambiarTurno();
        validacionHorizontal(i, columna);
        validarDesc(i, columna);
        validacionInclinada1(i, columna);
        if (conTurno === 42) {
          alert("Empate");
          location.reload();
        }
      }
      if (i === 1) {
        matriz[i][columna] = turno;
        celda1.innerText = turno;
        conTurno = conTurno + 1;
        cambiarTurno();
        validacionHorizontal(i, columna);
        validarDesc(i, columna);
        validacionInclinada1(i, columna);
        if (conTurno === 42) {
          alert("Empate");
          location.reload();
        }
      }
      if (i === 0) {
        matriz[i][columna] = turno;
        celda0.innerText = turno;
        conTurno = conTurno + 1;
        cambiarTurno();
        validacionHorizontal(i, columna);
        validarDesc(i, columna);
        validacionInclinada1(i, columna); 
        if (conTurno === 42) {
          alert("Empate");
          location.reload();
        }
      }  
}

cambiarTurno = () => { 
  if (turno === 1) {
    turno = 2;
  } else { 
    turno = 1;
  }
}

validacionHorizontal = (i, columna) => { 
  let valCelda = matriz[i][columna];
  if (columna + 3 <= 6) { 
    validarDerecha(i, columna);
  }
  if (columna - 3 >= 0) { 
    validarIzquierda(i,columna);
  }
  if (columna > 0 && ((columna + 2) <= 6)) { 
    if (matriz[i][columna - 1] === valCelda && matriz[i][columna + 1] === valCelda && matriz[i][columna + 2] === valCelda) { 
      alert("Victoria para el equipo " + valCelda);
      location.reload();
    }
  }
  if (columna >= 2 && (columna + 1) <= 6) { 
    if (matriz[i][columna - 1] === valCelda && matriz[i][columna - 2]=== valCelda && matriz[i][columna + 1] === valCelda) { 
      alert("Victoria para el equipo " + valCelda);
      location.reload();
    }
  }
}

validacionInclinada1 = (i, columna) => { 
  let valCelda = matriz[i][columna];
  if (columna + 3 <= 6) { 
    validarIncSupDer(i, columna);
    validarIncInfDer(i, columna);
  }
  if (columna - 3 >= 0) { 
    validarIncInfIzq(i, columna);
    validarIncSupIzq(i, columna);
  } 
  if (columna > 0 && (columna + 2) <= 6 && i - 2 >= 0 && columna - 1 >= 0 && i+1<=5) {
    if (matriz[i + 1][columna - 1] === valCelda && matriz[i - 1][columna + 1] === valCelda && matriz[i - 2][columna + 2] === valCelda) { 
      alert("Victoria para el equipo " + valCelda);
      location.reload();
    }
  }
  if (columna - 2 >= 0 && columna + 1 >= 0 && i+2<=5 && i-1>=0) { 
    if (matriz[i + 1][columna - 1] === valCelda && matriz[i + 2][columna - 2] === valCelda && matriz[i - 1][columna + 1] === valCelda) { 
      alert("Victoria para el equipo " + valCelda);
      location.reload();
    }
  }
  //Las inclinadas izquierdas
  if (columna + 2 <= 6 && columna - 1 >= 0 && i + 2 <= 5 && i - 1 >= 0) {
    if (matriz[i + 1][columna + 1] === valCelda && matriz[i + 2][columna + 2] == valCelda && matriz[i - 1][columna - 1] === valCelda) {
      alert("Victoria para el equipo " + valCelda);
      location.reload();
    }
  }
  if (columna + 1 <= 6 && columna - 2 >= 0 && i - 2 >= 0 && i + 1 <= 5) {
    if (matriz[i + 1][columna + 1] === valCelda && matriz[i - 1][columna - 1] === valCelda && matriz[i - 2][columna - 2] === valCelda) {
      alert("Victoria para el equipo " + valCelda);
      location.reload();
    }
  }
}

validarDesc = (i,columna) => { 
    let buscar = true;
    let cont = 1;
    let j = i + 1;
    while (buscar === true && j <= 5) {
      if (matriz[j][columna] === matriz[i][columna]) {
        buscar = true;
        cont = cont + 1;
        j = j + 1;
      } else {
        buscar = false;
      }
    }
    if (cont === 4) {
      alert("Victoria para el equipo " + matriz[i][columna]);
      location.reload();
    }
}

validarDerecha = (i, columna) => {
  let buscar = true;
  let cont = 1;
  let col = columna + 1;
  let gano = false;
  while (buscar === true && col<=6) {
    if (matriz[i][col] === matriz[i][columna]) {
      buscar = true;
      cont = cont + 1;
      col = col + 1;
    } else {
      buscar = false;
    }
  }
  if (cont === 4) {
    alert("Victoria para el equipo " + matriz[i][columna]);
    location.reload();
  }
}

validarIzquierda = (i, columna) => {
  let buscar = true;
  let cont = 1;
  let col = columna - 1;
  while (buscar === true && col >= 0) {
    if (matriz[i][col] === matriz[i][columna]) {
      buscar = true;
      cont = cont + 1;
      col = col - 1;
    } else {
      buscar = false;
    }
  }
  if (cont === 4) {
    alert("Victoria para el equipo " + matriz[i][columna]);
    location.reload();
  }
}

validarIncSupDer = (i, columna) => {
  let buscar = true;
  let cont = 1;
  let col = columna + 1;
  let j = i - 1;
  while (buscar === true && col <= 6 && j>=0) {
    if (matriz[j][col] === matriz[i][columna]) {
      buscar = true;
      cont = cont + 1;
      col = col + 1;
      j = j - 1;
    } else {
      buscar = false;
    }
  }
  if (cont === 4) {
    alert("Victoria para el equipo " + matriz[i][columna]);
    location.reload();
  }
}

validarIncInfDer = (i, columna) => {
  let buscar = true;
  let cont = 1;
  let col = columna + 1;
  let j = i + 1;
  while (buscar === true && col <=6 && j<=5) {
    if (matriz[j][col] === matriz[i][columna]) {
      buscar = true;
      cont = cont + 1;
      col = col + 1;
      j = j + 1;
    } else {
      buscar = false;
    }
  }
  if (cont === 4) {
    alert("Victoria para el equipo " + matriz[i][columna]);
    location.reload();
  }
}

validarIncSupIzq = (i, columna) => {
  let buscar = true;
  let cont = 1;
  let col = columna - 1;
  let j = i - 1;
  while (buscar === true && col >= 0 && j>=0) {
    if (matriz[j][col] === matriz[i][columna]) {
      buscar = true;
      cont = cont + 1;
      col = col - 1;
      j = j - 1;
    } else {
      buscar = false;
    }
  }
  if (cont === 4) {
    alert("Victoria para el equipo " + matriz[i][columna]);
    location.reload();
  }
}

validarIncInfIzq = (i, columna) => {
  let buscar = true;
  let cont = 1;
  let col = columna - 1;
  let j = i + 1;
  while (buscar === true && col >= 0 && j<=5) {
    if (matriz[j][col] === matriz[i][columna]) {
      buscar = true;
      cont = cont + 1;
      col = col - 1;
      j = j + 1;
    } else {
      buscar = false;
    }
  }
  if (cont === 4) {
    alert("Victoria para el equipo " + matriz[i][columna]);
    location.reload();
  }
}
