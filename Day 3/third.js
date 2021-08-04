// Day 3
function addText(){

    let name = document.querySelector('#n').value
    let city = document.querySelector('#c').value

    //console.log(name,city)

    document.querySelector("#area").innerHTML=`<h2>Welcome, ${name} from ${city}</h2>`;
}