/**
 * Kurzbeschreibung
 *
 * @author  Mia Gudelj
 * @since   2019-12-01
 * @version 1.0
 */
/*$(document).ready(function()    {
	
	$("#calculate").on("click", function() {
		
		// ajax call to https://api.exchangeratesapi.io/latest
		 $.ajax({
 
        // The URL for the request
        url: "https://api.exchangeratesapi.io/latest",
 
        // Whether this is a POST or GET request
        type: "GET",
 
        // The type of data we expect back
        dataType: "json",
		
		success: function (jsonData) {
			
	var currencyInput = $('#currency').val();

	if (currencyInput === "CHF") {
		$("#result").val($("#result")*$("#rate").val(jsonData.rates.CHF));
		$("#rate").val(jsonData.rates.CHF);
	}
		},
		
		error: function (xhr, status, errorThrown) {
			alert("Error");
		}
    });
	// // Code to run if the request succeeds (is done);
    // // The response is passed to the function
	// .done(function (jsonData) {
		// alert("hello");
	// });
	// // Code to run if the request fails; the raw request and
    // // status codes are passed to the function
	// .fail(function (xhr, status, errorThrown) {
		// alert("Error");
	// });
});

});*/
$(document).ready(function()    {
	
	// jquery event attachment 
	$("#currency").click(calculate);
	
	function calculate(){
		
		// inputs from user
		var sklaven = $("#skl").val();
		var rz = $("#rz").val();
		var rum = $("#rum").val();
		var bw = $("#bw").val();
		var kleidung = $("#kleidung").val();
		
		// values
		var dollerSkl = 50.25;
		var dollarRum = 110.038;
		var dollarRz = 0.23148;
		var dollarBw = 5.39;
		var dollarKleidung = 0.68508;
		
		var brot = 0.24;
		
		var dollar = $("#dollar").val();
		
		//console.log("INFOS: " + sklaven + ";" + rz + ";" + rum + ";" + bw + ";" + kleidung);
		
		if (sklaven >= 1) {
			
			$("#dollar").val() === sklaven*dollarSkl;
			$("#rz").val() == dollar/dollarRz;
			$("#rum").val() = dollar/dollarRum;
			$("#bw").val() = dollar/dollarBw;
			$("#kleidung").val() = dollar/dollarKleidung;
			
			/*if (pwValue === "1234") {
				$("fieldset").fadeOut(600, function () {
					location = "pages/home.html";
                        });
			}
			else {
				alert("Ungültiges Passwort");
			}*/
		}
		else {
			alert("Ungültiger Benutzername");
		}
	}
});
/*
/**
 * find the currency and calculate the amount
 * @param jsonData
 *
function convert(jsonData) {
	
}*/