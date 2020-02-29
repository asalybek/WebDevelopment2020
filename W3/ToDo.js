var plan = document.querySelector('.input');
var uList = document.querySelector('.plans');

function addItemToTheList() {
  var newItem = document.createElement("li");
  if (plan.value != ''){
  newItem.innerHTML = plan.value;
  plan.value = "";
  uList.appendChild(newItem);
}else {
    alert('Fill the input!!!');
  }
}
function deleteItem(){
  if (uList.hasChildNodes()) {
    uList.removeChild(uList.firstChild);
  }
  else {
    alert('Sorry,any plans yet to be completed');
    }
}