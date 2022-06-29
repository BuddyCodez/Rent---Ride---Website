
function rentCar(selectid, price,name) {
    var select = document.getElementById(selectid);
    var value = select.options[select.selectedIndex].value;
    let cartitle = document.getElementById(name)
    let carimg = cartitle.parentElement.parentElement.children[0].src;
    let image = `./static/${carimg.split("/static/")[1]}`;
    sessionStorage.setItem("vehicle_name", cartitle.textContent);
    sessionStorage.setItem("vehicle_price", price);
    sessionStorage.setItem("vehicle_options", value);
    sessionStorage.setItem("vehicle_img", image);

window.location.assign("paymentgateway.html");
}