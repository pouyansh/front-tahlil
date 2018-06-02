function popup() {
    document.getElementById("test").style.display = "block";
    document.getElementById("testreg").style.display = "none";
}

function popdown() {
    document.getElementById("test").style.display = "none";
}
function popupregister() {
    document.getElementById("testreg").style.display = "block";
    document.getElementById("test").style.display = "none";
}

function popdownregister() {
    document.getElementById("testreg").style.display = "none";
}

function f(){
	document.getElementById("buttonreg").addEventListener("click", function(event){
		event.preventDefault()
	})
}
f();