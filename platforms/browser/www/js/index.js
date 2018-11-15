// displayCurrencies() function getting the JSON through the API key and loading to the screen 
function displayCurrencies(){
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    var http = new XMLHttpRequest();
    http.onreadystatechange=function() {
        if(http.readyState==4 && http.status==200){
            var obj = JSON.parse(this.responseText);
            var options='';
            for(key in obj.rates){
                options=options+ '<option>'+key+'</option>';
            }
            from.innerHTML=options;
            to.innerHTML=options;
        }
    }
    http.open('GET','http://data.fixer.io/api/latest?access_key=05a94ef6074e5adff7e4326f984214e5', true)
    http.send();
}

//convertCurrency() function converting the currencies
// parsing the FROM and TO elements using the API key 
//saves the result in a variable called result
function convertCurrency(){
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;
    var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange=function(){
            if(xHttp.readyState==4 && xHttp.status==200){
                var obj = JSON.parse(this.responseText);
                var el= obj.rates[from];
                var el2= obj.rates[to];
                if(el && el2!= undefined){
                    result = parseFloat(amount)*parseFloat(el)/parseFloat(el2);
                }
            }
        }
        xHttp.open('GET', 'http://data.fixer.io/api/latest?access_key=05a94ef6074e5adff7e4326f984214e5&base'+from+'&symbols'+to, true);
        xHttp.send();
}

// showResult() function printing the result of the convertion to the screen, which will be called on the Convert onClick Button. 
function showResult(){
    document.getElementById("show").innerHTML = '<b> Convertion Result: </b> '+ result;
}
