var apikey = localStorage['apikey'];

run();
click();

/// Check for valid key.
function click() {
	document.getElementById('bsub').onclick = function () {
		var ind = document.getElementById('data');
		key_test(ind.value, ind);
	}
}

/// Fills in the code the html page.
function run() {
	if (undefined == apikey) {
		document.getElementById('upload').innerHTML = "<div id='texterr'></div><input id='data' type='text' placeholder='update key here' ><button id='bsub' >Update Key</button>";
	}
	/// Try doing your analysis.
	else {
		document.getElementById('upload').innerHTML = "<p>" + apikey + "</p><div id='texterr'></div><input id='data' type='text' placeholder='update key here' ><button id='bsub' >Update Key</button><br><a id='link_history' href='#history'>Scan History</a>";
	}
}

function key_test(val, ind) {
	hash_data = '057db92f3d0c4c2490a95297b556b9a9';
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 401 || xmlhttp.readyState == 4 && xmlhttp.status == 403) {
			console.log("Invalid Key");
			document.getElementById('texterr').innerHTML = "Invalid Key : Please Try again";

		} else if (xmlhttp.readyState == 4 && xmlhttp.status != 401 || xmlhttp.readyState == 4 && xmlhttp.status != 403) {
			console.log("Valid Key");
			localStorage['apikey'] = ind.value;
			apikey = localStorage['apikey'];
			ind.value = '';
			console.log("Setting key");
			run();
			click();
			document.getElementById('texterr').innerHTML = "Valid Key Saved";
		}
	}

	xmlhttp.open("GET", "https://hashlookup.metascan-online.com/v2/hash/" + hash_data, true);
	xmlhttp.setRequestHeader("apikey", val);
	xmlhttp.send();
}

/// Check for auto scan request.
document.getElementById('auto_check').onclick = function () {
	if(this.checked){
		console.log("Automatic Scanning Enabled");
		localStorage['auto'] = '1';
	}
	else{
		console.log("Automatic Scanning Disabled");
		localStorage['auto'] = '0';
	}
	}
	
/// show auto scan request selection on load
var auto_option = document.getElementById('auto_check');
	if(localStorage['auto'] === '1'){
		auto_option.checked = true;
	}
	else{
		auto_option.checked = false;
	}
	
	
	
	
	
	
	
	
