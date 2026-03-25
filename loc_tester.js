
// find new LOC total score based on each subcategory
function updateTotal() {
	var new_loc_total = 0;

	var subcategories = ["loc_behavioral", "loc_cognition", "loc_mobility", 
						"loc_eating", "loc_toileting", "loc_bathing", "loc_dressing", 
						"loc_rehabilitation", "loc_treatments", "loc_medications",
						"loc_mealprep", "loc_safety"]; 
	// check for invalid subtotal first then add to running total 
	for (var i = 0; i < subcategories.length; i++) {

		var temp = Number(document.getElementById(subcategories[i]).innerHTML);
		if (temp > 0) {
			new_loc_total += temp;
		} 
	}

	document.getElementById("new_loc_total").innerHTML = new_loc_total;
	
}


function LOCBehavioral() {
	var e3a = document.getElementById("E3a").value;
	var e3c = document.getElementById("E3c").value;
	var e3d = document.getElementById("E3d").value;
	var e3e = document.getElementById("E3e").value;
	var e3f = document.getElementById("E3f").value;
	var j3g = document.getElementById("J3g").value;
	var j3h = document.getElementById("J3h").value;
	var j3i = document.getElementById("J3i").value;
	var n7b = document.getElementById("N7b").value;

	var new_loc_behavioral = 0;

	if (n7b == 1 ||
		e3a == 1 || 
		e3c == 1 || 
		e3d == 1 || 
		e3e == 1 || 
		e3f == 1 || 
		j3g == 1 || 
		j3h == 1 || 
		j3i == 1) {

			new_loc_behavioral = 3;
	}

	if ((n7b == 2 || n7b == 3) ||
		(e3a == 2 || e3a == 3) || 
		(e3c == 2 || e3c == 3) ||
		(e3d == 2 || e3d == 3) ||
		(e3e == 2 || e3e == 3) ||
		(e3f == 2 || e3f == 3) || 
		(j3g == 2 || j3g == 3 || j3g == 4) || 
		(j3h == 2 || j3h == 3 || j3h == 4) || 
		(j3i == 2 || j3i == 3 || j3i == 4) ) {
		
		new_loc_behavioral = 6;
	}

	if ((n7b == 2 || n7b == 3) &&
		((e3a == 3) || 
		 (e3c == 3) ||
		 (e3d == 3) ||
		 (e3e == 3) ||
		 (e3f == 3) || 
		 (j3g == 3 || j3g == 4) || 
		 (j3h == 3 || j3h == 4) || 
		 (j3i == 3 || j3i == 4)) ) {

		new_loc_behavioral = 9;
	}

	document.getElementById("loc_behavioral").innerHTML = new_loc_behavioral;
	updateTotal();

} 

function LOCCognition() {
	var c1 = document.getElementById("C1").value;
	var c2a = document.getElementById("C2a").value;
	var c2b = document.getElementById("C2b").value;
	var c2c = document.getElementById("C2c").value;
	var c3c = document.getElementById("C3c").value;
	var d1 = document.getElementById("D1").value;
	var d2 = document.getElementById("D2").value;

	new_loc_cognition = 0;

	if ((c1 == 1 || c1 == 2) && 
		(c2a == 1 || 
		 c2b == 1 || 
		 c2c == 1 || 
		 (c3c == 1 || c3c == 2) ||
		 (d1 == 2 || d1 == 3 || d1 == 4) || 
		 (d2 == 2 || d2 == 3 || d2 == 4)) ) {

			new_loc_cognition = 3;
	}

	if (c1 == 3 && 
		(c2a == 1 || 
		 c2b == 1 || 
		 c2c == 1 || 
		 (c3c == 1 || c3c == 2) ||
		 d1 == 3 || 
		 d2 == 3)) {

			new_loc_cognition = 6;
	}

	if ((c1 == 3 && (d1 == 4 || d2 == 4)) || c1==4) {

		new_loc_cognition = 9;
	}

	if (c1 == 5) {
		new_loc_cognition = 18;
		document.getElementById("loc_cognition_trigger").innerHTML = "*TRIGGER";
	}
	else {
		document.getElementById("loc_cognition_trigger").innerHTML = "";
	}

	document.getElementById("loc_cognition").innerHTML = new_loc_cognition;
	updateTotal();

}

function LOCMobility() {
	// grab values from the form
	var g2f = document.getElementById("G2f").value;
	var g2i = document.getElementById("G2i").value;
	var g3a = document.getElementById("G3a").value;

	var new_loc_mobility = 0;

	if ((g2f == 3 || g2f == 4) ||
		(g2i == 3 || g2i == 4)) {
		new_loc_mobility = 3;
	}

	if (g2f == 5 || (g2i == 5 || g2i == 6)) {
		new_loc_mobility = 6;
	}

	if (g3a == 3 || g2f == 6) {
		new_loc_mobility = 18;
		document.getElementById("loc_mobility_trigger").innerHTML = "*TRIGGER";
	}
	else {
		document.getElementById("loc_mobility_trigger").innerHTML = "";
	}
	
	// display new LOC for subcategory and update total
	document.getElementById("loc_mobility").innerHTML = new_loc_mobility;
	updateTotal();
}

function LOCEating() {
	// grab values from the form
	var g2j = document.getElementById("G2j").value;
	var k2e = document.getElementById("K2e").value;

	var new_loc_eating = 0;

	// rules
	if ((g2j == 1 || g2j == 2 || g2j == 3) || 
		(k2e == 1)) {
		new_loc_eating = 3; 
	}

	if (g2j == 4) {
		new_loc_eating = 6;
	}

	if (g2j == 5) {
		new_loc_eating = 9;
	}

	if (g2j == 6) {
		new_loc_eating = 18;
		document.getElementById("loc_eating_trigger").innerHTML = "*TRIGGER";
	}
	else {
		document.getElementById("loc_eating_trigger").innerHTML = "";
	}
	
	// display new LOC for subcategory and update total
	document.getElementById("loc_eating").innerHTML = new_loc_eating;
	updateTotal();
}

function LOCToileting() {
	// grab values from the form
	var g2g = document.getElementById("G2g").value;
	var g2h = document.getElementById("G2h").value;

	var new_loc_toileting = 0;

	if ((g2g == 3 || g2g == 4) && 
		(g2h == 3 || g2h == 4)) {
		new_loc_toileting = 3;
	}

	if (g2g == 5 || g2h == 5) {
		new_loc_toileting = 6;
	}

	if (g2g == 6 || g2h == 6) {
		new_loc_toileting = 9;
	}

	// display new LOC for subcategory and update total
	document.getElementById("loc_toileting").innerHTML = new_loc_toileting;
	updateTotal();
}

function LOCBathing() {
	// grab values from the form
	var g2a = document.getElementById("G2a").value;

	var new_loc_bathing = 0;

	if (g2a == 3 || g2a == 4) {
		new_loc_bathing = 3;
	}
	
	if (g2a == 5 || g2a == 6) {
		new_loc_bathing = 6;
	}

	// display new LOC for subcategory and update total
	document.getElementById("loc_bathing").innerHTML = new_loc_bathing;
	updateTotal();
}

function LOCDressing() {
	// grab values from the form
	var g2b = document.getElementById("G2b").value;
	var g2c = document.getElementById("G2c").value;
	var g2d = document.getElementById("G2d").value;

	var new_loc_dressing = 0;

	if ((g2b == 3 || g2b == 4) ||
		(g2c == 3 || g2c == 4) ||
		(g2d == 3 || g2d == 4)) {
		new_loc_dressing = 3;
	}

	if ((g2b == 5 || g2b == 6) ||
		(g2c == 5 || g2c == 6) ||
		(g2d == 5 || g2d == 6)) {
		new_loc_dressing = 6;
	}

	// display new LOC for subcategory and update total
	document.getElementById("loc_dressing").innerHTML = new_loc_dressing;
	updateTotal();
}

function LOCRehabilitation() {
	// grab values from the form
	var n3ea = document.getElementById("N3ea").value;
	var n3fa = document.getElementById("N3fa").value;
	var n3ga = document.getElementById("N3ga").value;
	var n3ia = document.getElementById("N3ia").value;

	var new_loc_rehabilitation = 0;

	if (n3ea == 1 || n3fa == 1 || n3ga == 1 || n3ia == 1) {
		new_loc_rehabilitation = 3;
	}

	if ((n3ea == 2 || n3ea == 3) ||
		(n3fa == 2 || n3fa == 3) ||
		(n3ga == 2 || n3ga == 3) ||
		(n3ia == 2 || n3ia == 3)) {
		new_loc_rehabilitation = 6;
	}

	if ((n3ea == 4 || n3ea == 5 || n3ea == 6 || n3ea == 7) ||
		(n3fa == 4 || n3fa == 5 || n3fa == 6 || n3fa == 7) ||
		(n3ga == 4 || n3ga == 5 || n3ga == 6 || n3ga == 7) ||
		(n3ia == 4 || n3ia == 5 || n3ia == 6 || n3ia == 7)) {
		new_loc_rehabilitation = 9;
	}

	// display new LOC for subcategory and update total
	document.getElementById("loc_rehabilitation").innerHTML = new_loc_rehabilitation;
	updateTotal();
}

function LOCTreatments() {
	// grab values from the form
	var h1 = document.getElementById("H1").value;
	var h2 = document.getElementById("H2").value;
	var h3 = document.getElementById("H3").value;
	var k3 = document.getElementById("K3").value;
	var l1 = document.getElementById("L1").value;
	var l3 = document.getElementById("L3").value;
	var l4 = document.getElementById("L4").value;
	var l5 = document.getElementById("L5").value;
	var n2g = document.getElementById("N2g").value;
	var n2h = document.getElementById("N2h").value;
	var n2j = document.getElementById("N2j").value;
	var n2k = document.getElementById("N2k").value;

	var new_loc_treatments = 0;

	if (h1 == 1 ||
		(h2 == 1 || h2 == 2 || h2 == 3) || 
		(h3 == 1) ||
		(k3 == 5 || k3 == 6 || k3 == 7 || k3 == 8) ||
		(n2g == 1 || n2g == 2 || n2g == 3 || n2g == 4) ||
	    (n2h == 1 || n2h == 2 || n2h == 3 || n2h == 4) ||
		(n2j == 1 || n2j == 2 || n2j == 3 || n2j == 4) ||
		((n2k == 1 || n2k == 2 || n2k == 3 || n2k == 4) && 
		 	((l1 == 2 || l1 == 3 || l1 == 4 || l1 == 5 || l1 == 6) ||
		    l3 == 1 || l4 == 1 || l5 == 1))) {
		new_loc_treatments = 6;
	}

	// display new LOC for subcategory and update total
	document.getElementById("loc_treatments").innerHTML = new_loc_treatments;
	updateTotal();
}

function LOCMedications() {
	// grab values from the form
	var g1d = document.getElementById("G1d").value;

	var new_loc_medications = 0;

	if (g1d == 1 || g1d == 2 || g1d == 3 || g1d == 4) {
		new_loc_medications = 3;
	}
	
	if (g1d == 5 || g1d == 6) {
		new_loc_medications = 6;
	}	

	// display new LOC for subcategory and update total
	document.getElementById("loc_medications").innerHTML = new_loc_medications;
	updateTotal();
}

function LOCMealprep() {
	// grab values from the form
	var g1a = document.getElementById("G1a").value;

	var new_loc_mealprep = 0;

	if (g1a == 3 || g1a == 4) {
		new_loc_mealprep = 3;
	}	

	if (g1a == 5 || g1a == 6) {
		new_loc_mealprep = 6; 
	}

	// display new LOC for subcategory and update total
	document.getElementById("loc_mealprep").innerHTML = new_loc_mealprep;
	updateTotal();
}

function LOCSafety() {
	// grab values from the form
	var d4 = document.getElementById("D4").value;
	var j1 = document.getElementById("J1").value;
	var j3a = document.getElementById("J3a").value;
	var j3b = document.getElementById("J3b").value;
	var j3c = document.getElementById("J3c").value;
	var j3d = document.getElementById("J3d").value;

	var a3 = document.getElementById("A3").value;
	var b4a = document.getElementById("B4a").value;
	var b4b = document.getElementById("B4b").value;
	var b4c = document.getElementById("B4c").value;
	var b4d = document.getElementById("B4d").value;
	var b4e = document.getElementById("B4e").value;

	var new_loc_safety1 = 0;
	var new_loc_safety2 = 0;

	if (d4 == 3 || 
		(j1 == 1 || j1 == 2 || j1 == 3) ||
		(j3a == 2 || j3a == 3 || j3a == 4) ||
		(j3b == 2 || j3b == 3 || j3b == 4) ||
		(j3c == 2 || j3c == 3 || j3c == 4) ||
		(j3d == 2 || j3d == 3 || j3d == 4)) {
		new_loc_safety1 = 3; 
	}

	// The state's algorithm as written is not clear on whether it's supposed to be
	// (A OR B) AND C, or A OR (B AND C). I am interpretting it as A OR (B AND C). 
	// The distinction would be if someone with no vision (D4=4) also needs to have
	// J3a/b/c/d in the 2-3 range to get points (first situation), or if no vision 
	// alone is enough for 6, but the Falls (J1) requires the extra problem frequency 
	// variable to get 6 points (second situation, and how I am coding it). 
	if (d4 == 4 || 
		((j1 == 1 || j1 == 2 || j1 == 3 || d4 == 3) && 
		 	((j3a == 2 || j3a == 3 || j3a == 4) ||
			 (j3b == 2 || j3b == 3 || j3b == 4) ||
			 (j3c == 2 || j3c == 3 || j3c == 4) ||
			 (j3d == 2 || j3d == 3 || j3d == 4)))) {
		new_loc_safety1 = 6;
	}

	// display new LOC for subcategory part 1
	document.getElementById("loc_safety1").innerHTML = new_loc_safety1;

	if (new_loc_safety1 == 0 && 
	   (a3 >= 75 || b4a == 1 || b4b == 1 || b4c == 1 || b4d == 1 || b4e == 1)) {
		new_loc_safety2 = 3; 
	}

	if (new_loc_safety1 == 0 && 
	   (a3 >= 75 && (b4a == 1 || b4b == 1 || b4c == 1 || b4d == 1 || b4e == 1))) {
		new_loc_safety2 = 6; 
	}

	if (new_loc_safety1 == 3 && 
	   (a3 >= 75 || (b4a == 1 || b4b == 1 || b4c == 1 || b4d == 1 || b4e == 1))) {
		new_loc_safety2 = 6; 
	}

	if (new_loc_safety1 == 6 && 
	   (b4a == 1 || b4b == 1 || b4c == 1 || b4d == 1 || b4e == 1)) {
		new_loc_safety2 = 9; 
	}

	if (new_loc_safety1 == 3 && 
	   (a3 >= 75 && (b4a == 1 || b4b == 1 || b4c == 1 || b4d == 1 || b4e == 1))) {
		new_loc_safety2 = 18; // trigger
	}

	if (new_loc_safety1 == 6 && a3 >= 75) {
		new_loc_safety2 = 18; // trigger 
	}
	
	// display new LOC for subcategory
	document.getElementById("loc_safety2").innerHTML = new_loc_safety2;

	// determine whether to display trigger
	if (new_loc_safety2 == 18) {
		document.getElementById("loc_safety_trigger").innerHTML = "*TRIGGER";
	}
	else {
		document.getElementById("loc_safety_trigger").innerHTML = "";
	}

	// fill in the final safety score based on whether they get points in part 2
	if (new_loc_safety2 == 0){
		document.getElementById("loc_safety").innerHTML = new_loc_safety1;
	}
	else {
		document.getElementById("loc_safety").innerHTML = new_loc_safety2;
	}

	updateTotal();
}

// takes user uploaded csv file and will run the preceeding functions on all rows 
// returns a table of elements that can be copied and pasted back into the spreadsheet
function BatchProcess() {
	// TODO
}

