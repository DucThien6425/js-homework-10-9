var id = 0; 
function sell() {
    id++
    var pname = document.getElementById("pname").value;
    var qty = document.getElementById("qty").value;
    var price = document.getElementById("up").value;
    var dc = document.getElementById("dc").value;

    if (pname === "" || qty === "" || price === "" || dc === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Tính tổng tiền (subtotal)
    var sub = qty * price * (1 - dc / 100);

    
    var row = "<tr>";
    row += "<td>" + id + "</td>"; 
    row += "<td>" + pname + "</td>"; 
    row += "<td>" + qty + "</td>"; 
    row += "<td>" + price + "</td>"; 
    row += "<td>" + dc + "</td>"; 
    row += "<td>" + sub.toFixed(2) + "</td>"; 
    row += "</tr>";

    // Thêm hàng mới vào bảng có id là (tb1)
    document.getElementById("tb1").innerHTML += row;
}

function cancel() {
    document.getElementById("pname").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("up").value = "";
    document.getElementById("dc").value = "";
}