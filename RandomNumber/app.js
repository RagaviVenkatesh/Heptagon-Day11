let out = document.getElementById("output");

function generate()
{
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let random = Math.floor(Math.random()*(max-min))+min;
    out.innerHTML = ` = ${random}`;
}

//Math.floor() -> Convert to lower value
//Math.ceil() -> Convert to higher value
//Math.random() -> generate random number
//random() -> 0 and 1 -> 0.6 *10 -> 6+10 -> 16

//Min - 100, Max - 200
//Max - Min = 100
//Math.random -> Between 0 and 1 -> 0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1
//Math.random()*(max-min) -> 0.4 * 100 -> 40.23456789
//Math.floor() -> 40.23456789 -> 40
// +min -> 40+100 -> 140
