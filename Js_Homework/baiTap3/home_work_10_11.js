var id = 0;
var total = 0;
function sell() {
    id++;
    var productName = frm.querySelector("#name").value;
    // lấy giá trị  có id là name 
    // getelementby id chỉ lấy id
    // còn queryselecttor lấy cả class, thẻ,..
    var quantity = frm.querySelector("#quantity").value;
    var unitPrice = frm.querySelector("#unitPrice").value;
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
    document.querySelector("#total").innerHTML = total.toFixed(2);
    // toFixed Định dạng một số với 2 chữ số thập phân và làm tròn nếu cần.//
};