function checkPrice(key) {
  if (key == 'cheap' || 'c') return 4500;
   if (key == "midrange" || "m" || 'mid') return 5500;
   if (key == "expensive" || "exp" || 'e') return 7000;
}
function rentCar(selectid, keys) {
    var select = document.getElementById(selectid);
    var value = select.options[select.selectedIndex].value;
    console.log(value)
  let price = checkPrice(keys);
  console.log(price)
window.location.assign("index.html");
}