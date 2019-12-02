/**
 * Kurzbeschreibung
 *
 * @author  Mia Gudelj
 * @since   2019-12-01
 * @version 1.0
 */
 
$(document).ready(function() {
	
	// jquery event attachment 
	$("#calculate").click(calculate);
	$("#reset").click(reset);
	
	function calculate(){
		
		// inputs from user
		var sklaven = $("#skl").val();
		var rz = $("#rz").val();
		var rum = $("#rum").val();
		var bw = $("#bw").val();
		var kleidung = $("#kleidung").val();
		
		// values
		const dollarSkl = 50.25;
		const dollarRum = 110.038;
		const dollarRz = 0.23148;
		const dollarBw = 5.39;
		const dollarKleidung = 0.68508;
		
		const brot = 0.24;
		
		var preis = $("#dollar").val();
		
		console.log("INFOS: " + sklaven + ";" + rz + ";" + rum + ";" + bw + ";" + kleidung);
		
		if (sklaven > 0) {
			$("#dollar").val(sklaven * dollarSkl);
			$("#rz").val(preis / dollarRz);
			$("#rum").val(preis / dollarRum);
			$("#bw").val(preis / dollarBw);
			$("#kleidung").val(preis / dollarKleidung);
			$("#brot").val(preis / brot);
		}
		else if (rz > 0)	{
			$("#dollar").val(rz * dollarRz);
			$("#skl").val(preis / dollarSkl);
			$("#rum").val(preis / dollarRum);
			$("#bw").val(preis / dollarBw);
			$("#kleidung").val(preis / dollarKleidung);
			$("#brot").val(preis / brot);
		}
		else if (rum > 0)	{
			$("#dollar").val(rum * dollarRum);
			$("#skl").val(preis / dollarSkl);
			$("#rz").val(preis / dollarRz);
			$("#bw").val(preis / dollarBw);
			$("#kleidung").val(preis / dollarKleidung);
			$("#brot").val(preis / brot);
		}
		else if (bw > 0)	{
			$("#dollar").val(bw * dollarBw);
			$("#skl").val(preis / dollarSkl);
			$("#rz").val(preis / dollarRz);
			$("#rum").val(preis / dollarRum);
			$("#kleidung").val(preis / dollarKleidung);
			$("#brot").val(preis / brot);
		}
		else if(kleidung > 0)	{
			$("#dollar").val(kleidung * dollarKleidung);
			$("#skl").val(preis / dollarSkl);
			$("#rz").val(preis / dollarRz);
			$("#rum").val(preis / dollarRum);
			$("#bw").val(preis / dollarBw);
			$("#brot").val(preis / brot);
		}
		else {
			
		}
	}
	
	function reset() {
		brot = 0;
		preis = $("#dollar").val(0);
		sklaven = $("#skl").val(0);
		rz = $("#rz").val(0);
		rum = $("#rum").val(0);
		bw = $("#bw").val(0);
		kleidung = $("#kleidung").val(0);
		brot = $("#brot").val(0);
	}
});