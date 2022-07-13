window.localStorage.setItem("i", +window.localStorage.getItem("i") || 0);
let elenum = document.createElement("h2");

function incremant() {
  let num = +window.localStorage.getItem("i");

  num++;

  window.localStorage.setItem("i", num);
  window.location.reload();
}
const newtext = document.createTextNode(
  window.localStorage.getItem("i") + " Day"
);
elenum.appendChild(newtext);
document.getElementById("numday").appendChild(elenum);
function clears() {
  localStorage.clear();
  window.location.reload();
}
