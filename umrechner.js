/**
 * Kurzbeschreibung
 *
 * @author  Mia Gudelj
 * @since   2019-12-01
 * @version 1.0
 */
$(document).ready(function()    {
	
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

});
$(document).ready(function()    {
	
	// jquery event attachment 
	$("#currency").click(calculate);
	
	function calculate(){
		
		//inputs from user
		var sklavenValue = $("#sklaven").val();
		var zuckerValue = $("#rohrzucker").val();
		var rumValue = $("#rum").val();
		var baumwolleValue = $("#baumwolle").val();
		var schmuckValue = $("#schmuck").val();
		
		var sklavenPreis = 357;
		var ZuckerPreis = 0.4;
		var rumPreis = 0.095;
		var baumwollePreis = 53;
		var brotPreis = 0.24;
		
		console.log("INFOS: " + sklavenValue + ";" + zuckerValue + ";" + rumValue + ";" + baumwolleValue + ";" + schmuckValue);
		if (sklavenValue) {
			
			if (pwValue === "1234") {
				$("fieldset").fadeOut(600, function () {
					location = "pages/home.html";
                        });
			}
			else {
				alert("Ungültiges Passwort");
			}
		}
		else {
			alert("Ungültiger Benutzername");
		}
	}
	
	
		
	
});

/**
 * find the currency and calculate the amount
 * @param jsonData
 */
function convert(jsonData) {
	
}