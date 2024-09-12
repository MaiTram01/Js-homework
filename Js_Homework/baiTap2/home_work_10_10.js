var id = 0;
var total = 0;
const sell = () => {
  id++;
  var productName = document.querySelector("#name").value;
  var quantity = document.querySelector("#quantity").value;
  var unitPrice = document.querySelector("#unitPrice").value;
  var sub = quantity * unitPrice;
  total += sub;
  var row = "<tr>";
  row += "<td>" + id + "</td>";
  row += "<td>" + productName + "</td>";
  row += "<td>" + quantity + "</td>";
  row += "<td>" + unitPrice + "</td>";
  row += "<td>" + sub.toFixed(2) + "</td>";
  row += "</tr>";
  document.querySelector("#data").innerHTML += row;
  document.querySelector("#total").innerHTML =  total.toFixed(2);
};