function Validate(url, callback) {
 var domain = location.host;
 var license = document.getElementById("HTML303").innerHTML;

 var params = 'license='+license+'&domain='+domain; 
 var http = new XMLHttpRequest();

 http.open("GET", url+"?"+params, true);
 http.onreadystatechange = function()
 {
  if(http.readyState == 4 && http.status == 200) {
   callback(http.responseText);
  }
 };
 http.send(null);
}

// validate with json or db mysql
Validate("validate-method.php", function(result){
 if (result == "false") {
  alert('Tidak Valid');
  return false;
 }

 // enter you javascript code here

 console.log('Valid !');
});
