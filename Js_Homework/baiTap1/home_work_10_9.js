var id=0;
function sell(){
    id++;
    var pname =frm.pname.value;
    var qty =frm.qty.value;
    var price=frm.up.value;
    var dc=frm.dc.value;
    var sub =qty*price*(1-dc/100);
    var row ="<tr>";
    row += "<td>"+id+"</td>";
    row += "<td>"+pname+"</td>";
    row += "<td>"+qty+"</td>";
    row += "<td>"+price+"</td>";
    row += "<td>"+dc+"</td>";
    row += "<td>"+sub+"</td>";
    row += "</tr>";
    document.getElementById('tbl').innerHTML +=row;
}