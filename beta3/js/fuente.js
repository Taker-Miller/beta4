// Fuente
var changeFuente = () => {
    let btn = document.getElementById("btnFuente");
    let estado = btn.value;
    if (estado == '0') {
        btn.value = '1';
        let elements = document.getElementsByClassName("small");
        const largo = elements.length;
        for (let index = 0; index < largo; index++) {
            const element = elements[0];
            element.classList.add("medium");
            element.classList.remove("small");
        }
    } else if (estado == '1') {
        btn.value = '2';
        let elements = document.getElementsByClassName("medium");
        const largo = elements.length;
        for (let index = 0; index <largo; index++) {
            const element = elements[0];
            element.classList.add("large");
            element.classList.remove("medium");
        }
    } else if (estado == '2') {
        btn.value = '0';
        let elements = document.getElementsByClassName("large");
        const largo = elements.length;
        for (let index = 0; index < largo; index++) {
            const element = elements[0];
            element.classList.add("small");
            element.classList.remove("large");
        }
    }
  }

  
  document.getElementById("btnFuente").addEventListener("click", changeFuente);
  document.getElementById("btnContraste").addEventListener("click", cambiarContraste);

  var changeFuente = () => {
    let btn = document.getElementById("btnFuente");
    let estado = btn.value;
  
    // Obtén todos los elementos <h3>
    let h3Elements = document.getElementsByTagName("h3");
  
    // Obtén todos los elementos <a>
    let aElements = document.getElementsByTagName("a");
  
    if (estado == '0') {
      btn.value = '1';
  
      // Aplica el tamaño de fuente "medium" a todos los <h3> y <a>
      for (let i = 0; i < h3Elements.length; i++) {
        h3Elements[i].classList.remove("large");
        h3Elements[i].classList.add("medium");
      }
      for (let i = 0; i < aElements.length; i++) {
        aElements[i].classList.remove("large");
        aElements[i].classList.add("medium");
      }
    } else if (estado == '1') {
      btn.value = '2';
  
      // Aplica el tamaño de fuente "large" a todos los <h3> y <a>
      for (let i = 0; i < h3Elements.length; i++) {
        h3Elements[i].classList.remove("medium");
        h3Elements[i].classList.add("large");
      }
      for (let i = 0; i < aElements.length; i++) {
        aElements[i].classList.remove("medium");
        aElements[i].classList.add("large");
      }
    } else if (estado == '2') {
      btn.value = '0';
  
      // Aplica el tamaño de fuente "small" a todos los <h3> y <a>
      for (let i = 0; i < h3Elements.length; i++) {
        h3Elements[i].classList.remove("large");
        h3Elements[i].classList.remove("medium");
      }
      for (let i = 0; i < aElements.length; i++) {
        aElements[i].classList.remove("large");
        aElements[i].classList.remove("medium");
      }
    }
  }

  var changeFuente = () => {
    let btn = document.getElementById("btnFuente");
    let estado = btn.value;
  
    // Obtén todos los elementos <h2>
    let h2Elements = document.getElementsByTagName("h2");
  
    if (estado == '0') {
      btn.value = '1';
  
      // Aplica el tamaño de fuente "medium" a todos los <h2>
      for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].classList.remove("large");
        h2Elements[i].classList.add("medium");
      }
    } else if (estado == '1') {
      btn.value = '2';
  
      // Aplica el tamaño de fuente "large" a todos los <h2>
      for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].classList.remove("medium");
        h2Elements[i].classList.add("large");
      }
    } else if (estado == '2') {
      btn.value = '0';
  
      // Aplica el tamaño de fuente "small" a todos los <h2>
      for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].classList.remove("large");
        h2Elements[i].classList.remove("medium");
      }
    }
  }
  