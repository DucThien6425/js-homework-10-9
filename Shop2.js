var id = 0;
var totalAmount = 0;

function Add() {
    
    var pname = document.getElementById("pname").value;
    var qty = parseInt(document.getElementById("qty").value);
    var price = parseInt(document.getElementById("up").value);

    if (pname === "" || isNaN(qty) || isNaN(price)) {
        alert("Please fill all fields with valid values.");
        return;
    }

    // Tính tổng tiền của sản phẩm hiện tại
    var subTotal = qty * price;
    totalAmount += subTotal;

    // Tạo một hàng mới
    var table = document.getElementById("tb1");
    var row = table.insertRow(table.rows.length - 1); 
    id++;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = id;
    cell2.innerHTML = pname;
    cell3.innerHTML = qty;
    cell4.innerHTML = price + "$";
    cell5.innerHTML = subTotal + "$";

    // Cập nhật tổng tiền
    document.getElementById("total").innerHTML = totalAmount + "$";

    // Xóa sau khi nhập
    document.getElementById("pname").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("up").value = "";
}