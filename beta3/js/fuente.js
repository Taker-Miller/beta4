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
  let btn = document.getElementById("btnFuente");
    let estado = btn.value;
    
    if (estado == '0') {
        btn.value = '1';
        let elements = document.getElementsByClassName("box");
        const largo = elements.length;
        
        for (let index = 0; index < largo; index++) {
            const element = elements[index];
            element.classList.add("medium");
            element.classList.remove("small");
        }
    } else if (estado == '1') {
        btn.value = '2';
        let elements = document.getElementsByClassName("box");
        const largo = elements.length;
        
        for (let index = 0; index < largo; index++) {
            const element = elements[index];
            element.classList.add("large");
            element.classList.remove("medium");
        }
    } else if (estado == '2') {
        btn.value = '0';
        let elements = document.getElementsByClassName("box");
        const largo = elements.length;
        
        for (let index = 0; index < largo; index++) {
            const element = elements[index];
            element.classList.add("small");
            element.classList.remove("large");
        }
    }
  document.getElementById("btnFuente").addEventListener("click", changeFuente);



