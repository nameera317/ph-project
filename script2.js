$.ajax({
    url: "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
    method: "GET",
    dataType: "json",
    success : function(data) {
     var tableData = document.getElementById("table-data");
     console.log(data);
     for(var i=0; i<data.length; i++) {
            var product = data[i];
      var dataRow = document.createElement("tr");
      var c1 = document.createElement("td");
      c1.classList.add("c1");
      c1.innerText = product.id;
      var c2 = document.createElement("td");
      c1.classList.add("c2");
      c2.innerText = product.customerName;
      var c3 = document.createElement("td");
      c3.innerText = product.orderDate; 
      c1.classList.add("c3");
      var c4 = document.createElement("td");
      c4.innerText = product.amount;
      c1.classList.add("c4");
      var c5 = document.createElement("td");
      c5.innerText = product.orderStatus;
      c1.classList.add("c5");

      dataRow.append(c1,c2,c3,c4,c5);
      tableData.append(dataRow);

     }


    }
})


$("#filter1").on("change", function() {
    var value = $(this).val().toLowerCase();
    $("#table-data tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  
$("#filter2").on("change", function() {
    var value = $(this).val().toLowerCase();
    $("#table-data tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  
$("#filter3").on("change", function() {
    var value = $(this).val().toLowerCase();
    $("#table-data tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  
$("#filter4").on("change", function() {
    var value = $(this).val().toLowerCase();
    $("#table-data tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


