var apikey = localStorage['apikey'];

run();
click();    
    



function click(){
document.getElementById('bsub').onclick = function(){
	var ind = document.getElementById('data');
	key_test(ind.value,ind);
	}
}


function run(){
if(undefined == apikey){
	document.getElementById('upload').innerHTML="<h1>Virus Link Scanner</h1><p>Thanks for installing.<br> Please enter your Metascan Online API key to begin using this extension.</p><div id='texterr'></div><input id='data' type='text' placeholder='Metascan Online API key key here' ><button id='bsub' >Update Key</button>";
    }
    /// Try doing your analysis.
    else{
	document.getElementById('upload').innerHTML="<h1>Virus Link Scanner</h1><p>"+apikey+"</p><div id='texterr'></div><input id='data' type='text' placeholder='Metascan Online API key key here' ><button id='bsub' >Update Key</button>";
    }

}



function key_test(val,ind) {
        hash_data = '057db92f3d0c4c2490a95297b556b9a9';
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
                if ( xmlhttp.readyState == 4 && xmlhttp.status == 401 || xmlhttp.readyState == 4 && xmlhttp.status == 403) {
                	console.log("Invalid Key");
			document.getElementById('texterr').innerHTML="Invalid Key : Please Try again";
                        
                }
                else if(xmlhttp.readyState == 4 && xmlhttp.status != 401 || xmlhttp.readyState == 4 && xmlhttp.status != 403){
                	console.log("Valid Key");
			localStorage['apikey']=ind.value;
			apikey = localStorage['apikey'];
			ind.value='';
			console.log("Setting key");
			run();
			click();
			document.getElementById('texterr').innerHTML="Valid Key : You may close this page now";
                }
        }

        xmlhttp.open("GET", "https://api.metascan-online.com/v1/hash/" + hash_data, true);
        xmlhttp.setRequestHeader("apikey", val);
        xmlhttp.send();
}