var div = document.createElement("div")
div.style.textAlign = "center";

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.innerHTML = "Search";
button.addEventListener("click",foo);

let domains= document.createElement("div");
domains.setAttribute("Id", "domains");
let alpha_two_code = document.createElement("alpha_two_code");
alpha_two_code.setAttribute("Id", "alpha_two_code");
// let state-province= document.createElement("div");
// state-province.setAttribute("Id","state-province");

div.append(input,button,domains,alpha_two_code);
document.body.append(div);

async function foo() {

    let res = document.getElementById("country").value;
    var url = `http://universities.hipolabs.com/search?country/${res}`;

    let result = await fetch(url);
    let result1 = await result.json();
    let index = result1.length-1;
    console.log(result1[index].domains);
    domains.innerHTML =`domains:${result1[index].domains}`;

    console.log(result1[index].alpha_two_code);
    alpha_two_code.innerHTML =`alpha_two_code:${result1[index].alpha_two_code}`;

    // console.log(result1[index].state-province);
    // state-province.innerHTML =`total state-province:${result1[index].state-province}`;







}