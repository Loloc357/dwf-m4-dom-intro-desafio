const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function eliminar() {
  const listaEl = document.getElementsByTagName("li");
  while (listaEl.length > 0) {
    listaEl[0].remove();
  }
}
function agregar() {
  cosasQueAprendimos.forEach(element => {
    const hijo = document.createElement("li")
    hijo.className=element.tema
    const padre= document.querySelector(".lista")
    padre.appendChild(hijo)
  });
}
  
function main() {
  eliminar();
  agregar()
}

main();
