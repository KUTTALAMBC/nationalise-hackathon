var myform = document.createElement("div");
myForm.innerHTML='<div><form id="userForm">  <input type="text" id="search" name="keyword" placeholder="search">  <button type="submit" value="Submit">search</button></input></form></div>'
var form =document.getElementById("userform")
form.addEventListener("submit",async function(element){

element.preventDefault();
const keywords = element.target.keyword.value;
var url=`https://api.nationalize.io/?name=${keywords}`
console.log(keywords)
try {
response = await fetch(url).then((res) => res.json());
} catch (error) {
alert("please use correct name")
}
var data = response.results;
console.log(data);


})