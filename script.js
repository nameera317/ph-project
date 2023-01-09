$.ajax({
    url: "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
    method: "GET",
    dataType: "json",
    success : function(data) {
     var tableData = document.getElementById("table-data");
     console.log(data);
     for(var i=0; i<data.length; i++) {
            var product = data[i];
      var dataRow = document.createElement("tr");
      var c1 = document.createElement("td");
      c1.innerText = product.id;
      c1.classList.add("column1");
      var c2 = document.createElement("td");
      var img = document.createElement("img");
      img.src = product.profilePic;
      c2.append(img);
      c2.classList.add("column2");
      var c3 = document.createElement("td");
      c3.innerText = product.fullName; 
      c3.classList.add("column3");
      var c4 = document.createElement("td");
      c4.innerText = product.dob;
      c4.classList.add("column4");
      var c5 = document.createElement("td");
      c5.innerText = product.gender;
      c5.classList.add("column5");
      var c6 = document.createElement("td");
      c6.innerText = product.currentCity + "," + product.currentCountry;
      c5.classList.add("column6");
       dataRow.append(c1,c2,c3,c4,c5,c6);
      tableData.append(dataRow);

    }
    }
})
$("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  
var re = document.getElementById("btn");
re.addEventListener("click", onBoxClick);

function onBoxClick() {
    location.reload();
}

