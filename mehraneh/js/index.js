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
var check = 0;
var p = document.getElementById('c1');
var ptop = p.style.top;
var p2 = document.getElementById('c2');
var ptop2 = p2.style.top;
var p3 = document.getElementById('c3');
var ptop3 = p3.style.top;
var p4 = document.getElementById('c4');
var ptop4 = p4.style.top;
var p5 = document.getElementById('c5');
var ptop5 = p5.style.top;
window.addEventListener("scroll", function(){
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
	if (scrollTop <= 920 && scrollTop >= 480 && (check == 0 || check == 2)){
		if (check == 0) {
			myLoop1(400);
		}
		else { 
			myLoop22(400);
		}
		check = 1;
	}
	if (scrollTop <= 480 && check==1){
		myLoop12(400);
		check = 0;
	}
	if (scrollTop <= 1400 && scrollTop >= 960 && (check == 1 || check == 3)){
		if (check == 1) {
			myLoop2(400);
		}
		else { 
			myLoop32(400);
		}
		check = 2;
	}
	if (scrollTop <= 1880 && scrollTop >= 1440 && (check == 2 || check == 4)){
		if (check == 2) {
			myLoop3(400);
		}
		else { 
			myLoop42(400);
		}
		check = 3;
	}
	if (scrollTop >= 1920 && check == 3 ){
		myLoop4(400);
		check = 4;
	}

}, false)

function myLoop1 (i) {          
   setTimeout(function () {   
   	  ptop = ptop-2;
      p.style.top = ptop+"px";     
      if (--i && ptop > -400) myLoop1(i); 
   }, 0.25)
}
function myLoop12 (i) {          
   setTimeout(function () {
   	  if (ptop < 0){
   	  ptop = ptop+2;
      p.style.top = ptop+"px";
      if (--i) myLoop12(i); }
   }, 0.25)
}
function myLoop2 (i) {          
   setTimeout(function () {
   	  ptop2 = ptop2-2;  
      p2.style.top = ptop2+"px";       
      if (--i && ptop2 > -400) myLoop2(i); 
   }, 0.25)
}
function myLoop22 (i) {          
   setTimeout(function () {
   	  if (ptop2 < 0){
   	  ptop2 = ptop2+2;  
      p2.style.top = ptop2+"px";       
      if (--i) myLoop22(i); }
   }, 0.25)
}
function myLoop3 (i) {          
   setTimeout(function () {
   	  ptop3 = ptop3-2;  
      p3.style.top = ptop3+"px";        
      if (--i && ptop3 > -400) myLoop3(i); 
   }, 0.25)
}
function myLoop32 (i) {          
   setTimeout(function () {
   	  if (ptop3 < 0){
   	  ptop3 = ptop3+2;  
      p3.style.top = ptop3+"px";        
      if (--i) myLoop32(i); }
   }, 0.25)
}
function myLoop4 (i) {          
   setTimeout(function () {
   	  ptop4 = ptop4-2;  
      p4.style.top = ptop4+"px";        
      if (--i && ptop4 > -400) myLoop4(i); 
   }, 0.25)
}
function myLoop42 (i) {          
   setTimeout(function () {
   	  if (ptop4 < 0){
   	  ptop4 = ptop4+2;  
      p4.style.top = ptop4+"px";        
      if (--i) myLoop42(i); }
   }, 0.25)
}
function myLoop5 (i) {          
   setTimeout(function () {
   	  ptop5 = ptop5-2;  
      p5.style.top = ptop5+"px";        
      if (--i && ptop5 > -400) myLoop5(i); 
   }, 0.25)
}
function myLoop52 (i) {          
   setTimeout(function () {
   	  if (ptop5 < 0){
   	  ptop5 = ptop5+2;  
      p5.style.top = ptop5+"px";        
      if (--i) myLoop52(i); }
   }, 0.25)
}

var organization = [
	{"name": "جمعیت امام علی", "ratings": [90,73,80,89,64], "projects": ["خرید کتاب برای کودکات مستضعف", "ساخت مدرسه ابتدایی"], "requierments": ["حسابداری", "آموزش"]},
	{"name": "جمعیت امام علی", "ratings": [90,73,80,89,64], "projects": ["خرید کتاب برای کودکات مستضعف", "ساخت مدرسه ابتدایی"], "requierments": ["حسابداری", "آموزش"]},
	{"name": "جمعیت امام علی", "ratings": [90,73,80,89,64], "projects": ["خرید کتاب برای کودکات مستضعف", "ساخت مدرسه ابتدایی"], "requierments": ["حسابداری", "آموزش"]},
	{"name": "جمعیت امام علی", "ratings": [90,73,80,89,64], "projects": ["خرید کتاب برای کودکات مستضعف", "ساخت مدرسه ابتدایی"], "requierments": ["حسابداری", "آموزش"]}
]


for (var j = 0; j < organization.length; j++) {
	var div1 = document.createElement('div');
	div1.setAttribute('class', "organization");
	var h2name = document.createElement('h2');
	h2name.innerHTML = organization[j].name;
	div1.appendChild(h2name);
	//chart colors
	var colors = ['one', 'two', 'three', 'four', 'five'];
	var TROW = 'tr', TDATA = 'td';

	var chart = document.createElement('div');
	//create the chart canvas
	var barchart = document.createElement('table');

	chart.appendChild(barchart);

	//create the bar row
	var barrow = document.createElement(TROW);
	barrow.setAttribute('class', 'bars');

	//lets add data to the chart
	for (var i = 0; i < 5; i++) {
	  //create the bar data
	  var bardata = document.createElement(TDATA);
	  var bar = document.createElement('div');
	  bar.setAttribute('class', colors[i]);
	  bar.innerText = organization[j].ratings[i] + "%"; 
	  bar.style.height = organization[j].ratings[i] + "%";
	  bar.style.position = "absolute";
	  bar.style.width = "100%";
	  bar.style.bottom = "0";
	  bardata.appendChild(bar);
	  barrow.appendChild(bardata);
	}

	barchart.appendChild(barrow);
	chart.appendChild(barchart);
	div1.appendChild(chart);
	var projects1 = document.createElement('div');
	projects1.setAttribute('class', "projects");
	var h5title = document.createElement('h5');
	h5title.innerHTML = "آخرین پروژه‌های ثبت شده";
	projects1.appendChild(h5title);
	var ul1 = document.createElement('ul');
	for (var i = 0; i < organization[j].projects.length; i++) {
		var li1 = document.createElement('li');
		li1.innerText = organization[j].projects[i];
		ul1.appendChild(li1);
	}
	projects1.appendChild(ul1);
	div1.appendChild(projects1);
	var projects1 = document.createElement('div');
	projects1.setAttribute('class', "projects");
	var h5title = document.createElement('h5');
	h5title.innerHTML = "نیازمندی‌های غیرنقدی";
	projects1.appendChild(h5title);
	var ul1 = document.createElement('ul');
	for (var i = 0; i < organization[j].requierments.length; i++) {
		var li1 = document.createElement('li');
		li1.innerText = organization[j].requierments[i];
		ul1.appendChild(li1);
	}
	projects1.appendChild(ul1);
	div1.appendChild(projects1);
	document.getElementById("c3").appendChild(div1);
}

var benefactors = [
	{"name": "سید علی حسین‌زاده", "ratings": [90,73,80,89,64], "abilities": ["حسابداری", "آموزش"], "worked": ["جمعیت امام علی", "یاوران ایتام"]},
	{"name": "سید علی حسین‌زاده", "ratings": [90,73,80,89,64], "abilities": ["حسابداری", "آموزش"], "worked": ["جمعیت امام علی", "یاوران ایتام"]},
	{"name": "سید علی حسین‌زاده", "ratings": [90,73,80,89,64], "abilities": ["حسابداری", "آموزش"], "worked": ["جمعیت امام علی", "یاوران ایتام"]},
	{"name": "سید علی حسین‌زاده", "ratings": [90,73,80,89,64], "abilities": ["حسابداری", "آموزش"], "worked": ["جمعیت امام علی", "یاوران ایتام"]}
]

for (var j = 0; j < benefactors.length; j++) {
	var div1 = document.createElement('div');
	div1.setAttribute('class', "organization");
	var h2name = document.createElement('h2');
	h2name.innerHTML = benefactors[j].name;
	div1.appendChild(h2name);
	//chart colors
	var colors = ['one', 'two', 'three', 'four', 'five'];
	var TROW = 'tr', TDATA = 'td';

	var chart = document.createElement('div');
	//create the chart canvas
	var barchart = document.createElement('table');

	chart.appendChild(barchart);

	//create the bar row
	var barrow = document.createElement(TROW);
	barrow.setAttribute('class', 'bars');

	//lets add data to the chart
	for (var i = 0; i < 5; i++) {
	  //create the bar data
	  var bardata = document.createElement(TDATA);
	  var bar = document.createElement('div');
	  bar.setAttribute('class', colors[i]);
	  bar.innerText = benefactors[j].ratings[i] + "%"; 
	  bar.style.height = benefactors[j].ratings[i] + "%";
	  bar.style.position = "absolute";
	  bar.style.width = "100%";
	  bar.style.bottom = "0";
	  bardata.appendChild(bar);
	  barrow.appendChild(bardata);
	}

	barchart.appendChild(barrow);
	chart.appendChild(barchart);
	div1.appendChild(chart);
	var projects1 = document.createElement('div');
	projects1.setAttribute('class', "projects");
	var h5title = document.createElement('h5');
	h5title.innerHTML = "توانایی‌ها";
	projects1.appendChild(h5title);
	var ul1 = document.createElement('ul');
	for (var i = 0; i < benefactors[j].abilities.length; i++) {
		var li1 = document.createElement('li');
		li1.innerText = benefactors[j].abilities[i];
		ul1.appendChild(li1);
	}
	projects1.appendChild(ul1);
	div1.appendChild(projects1);
	var projects1 = document.createElement('div');
	projects1.setAttribute('class', "projects");
	var h5title = document.createElement('h5');
	h5title.innerHTML = "سابقه همکاری با";
	projects1.appendChild(h5title);
	var ul1 = document.createElement('ul');
	for (var i = 0; i < benefactors[j].worked.length; i++) {
		var li1 = document.createElement('li');
		li1.innerText = benefactors[j].worked[i];
		ul1.appendChild(li1);
	}
	projects1.appendChild(ul1);
	div1.appendChild(projects1);
	document.getElementById("c5").appendChild(div1);
}