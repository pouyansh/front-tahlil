// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");

function addItem(){
    var ul = document.getElementById("dynamiclist");
    var candidate = document.getElementById("candidate").value;
    var li = document.createElement("li");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    li.setAttribute('id',candidate);
    li.appendChild(document.createTextNode(candidate));
    ul.appendChild(li);
    
    document.getElementById("candidate").value = "";

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function eduChanged() {
    var edu = document.getElementById("education");
    if (edu.value == "blank" || edu.value == "nothing") {
        document.getElementById("fieldOfEducation").style.display = "none";
    } else {
        document.getElementById("fieldOfEducation").style.display = "block";
    }
}

function participation() {
    var edu = document.getElementById("typeOfParticipation");
    if (edu.value == "atHome" || edu.value == "blank") {
        document.getElementById("tab").style.display = "none";
    } else {
        document.getElementById("tab").style.display = "block";
    }
}

function week(e) {
    document.getElementById(e).style.backgroundColor = "rgb(57,183,250)";
}

function f() {
    document.getElementById("add").addEventListener("click", function(event){
        event.preventDefault()
    });
    document.getElementById("education").addEventListener("change", function(event){
        event.preventDefault()
    });
} 
f();

var cities = ["تهران","مشهد","اصفهان","شیراز"]
var sel = document.getElementById('city');
for (i=0;i<cities.length;i++) {
	var opt = document.createElement('option');
	opt.setAttribute('value', cities[i]);
	opt.innerHTML = cities[i];
	sel.appendChild(opt);
}

var abilities = ["رانندگی","روابط عمومی","حسابداری","آموزش"]
var sel = document.getElementById('candidate');
for (i=0;i<abilities.length;i++) {
	var opt = document.createElement('option');
	opt.setAttribute('value', abilities[i]);
	opt.innerHTML = abilities[i];
	sel.appendChild(opt);
}
