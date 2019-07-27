//from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach((ufoseen) => {
    var row = tbody.append("tr");
    Object.entries(ufoseen).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", () => {
    var inputDate = d3.select("#datetime").property("value").trim();
    var inputCity = d3.select("#cities").property("value").trim();
    var inputState = d3.select("#state").property("value").trim();
    var inputCountry = d3.select("#country").property("value").trim();
    var inputShape = d3.select("#shape").property("value").trim();
    
    var dataFiltered = data
    //console.log(inputValue)

    if(inputDate){
        dataFiltered = dataFiltered.
        filter(data => 
            data.datetime === inputDate);
    }

    if(inputCity){
        dataFiltered = dataFiltered.
        filter(data => 
            data.city === inputCity);
    }

    if(inputState){
        dataFiltered = dataFiltered.
        filter(data => 
            data.state === inputState);
    }

    if(inputCountry){
        dataFiltered = dataFiltered.
        filter(data => 
            data.country === inputCountry);
    }

    if(inputShape){
        dataFiltered = dataFiltered.
        filter(data => 
            data.shape === inputShape);
    }
    

    tbody.html("")


    dataFiltered.forEach((ufoseen) => {
        var row = tbody.append("tr");
        Object.entries(ufoseen).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    })

});
   
