
/*
function getApi(){
var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange = function(){
if(this.readyState==4 && this.status==200){
document.querySelector("#demo").innerHTML = xhttp.responseText;

} 

}
  xhttp.open("GET","https://jsonplaceholder.typicode.com/photos");
xhttp.send();
}
*/
/*
function getApi(){

fetch("https://jsonplaceholder.typicode.com/photos ")
 .then(function(element){
    return element.json()
 })
.then(function(ahmed){
document.querySelector("#demo").innerHTML =ahmed[0].title

})
}

*/
    
/*
 async function getApi(){
var element = await fetch("https://jsonplaceholder.typicode.com/photos")
var ahmed = await element.json();
document.querySelector(".test img").src = ahmed[0].url;
document.querySelector(".test h3").innerHTML = ahmed[0].id;
document.querySelector(".test h5").innerHTML = ahmed[0].title;

}
getApi();
*/
async function getApi(){
  var element = await fetch("https://jsonplaceholder.typicode.com/photos")
  var ahmed = await element.json();
  var mytext ="";
   for(var i=0; i<ahmed.length;i++){ 
var cartoona = `<div class="col-md-4 text-center mb-4">
                <img src="${ahmed[i].url}" class="img-fluid">
                <h3>${ahmed[i].id}</h3>
                <h5>${ahmed[i].title}</h5>
                </div>
                `;

mytext = mytext + cartoona
 }
document.querySelector(".test").innerHTML = mytext;


              }
getApi();