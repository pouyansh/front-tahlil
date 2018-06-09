
function f(id) {
    document.getElementById(id).addEventListener("click", function(event){
        event.preventDefault()
    });
}

var projectss=[ {"name": "شایان شیرزادیان", "amount": "120000", "description": "ارسال غذا برای زلزله زدگان" , "total": "400000"}, 
				{"name": "پویان شیرزادیان", "amount": "300000" , "description": "کمک به خرید جهیزیه" , "total" : "560000"}];
var resultt=document.getElementById("result");
for(var j=0; j<projectss.length; j++){
	
	var report = document.createElement('div');
	report.setAttribute("class","report");
	var people = document.createElement('div');
	people.setAttribute("class", "people");
	var spann= document.createElement('span');
	spann.setAttribute("class", "benefactor");
	spann.innerText="نیکوکار: " + projectss[j].name;
	people.appendChild(spann);
	var proj=document.createElement('div');
	proj.setAttribute("class", "proj");
	var h3= document.createElement('h3');
	h3.innerText="مبلغ: "+projectss[j].amount + " تومان ";
	proj.appendChild(h3);
	var total=document.createElement('div');
	total.setAttribute("class", "total");
	total.innerText= "مجموع تا به این لحظه: "+ projectss[j].total + " تومان ";
	var more=document.createElement('div');
	more.setAttribute("class","more");
	var h4=document.createElement('h4');
	h4.innerText=projectss[j].description;
	more.appendChild(h4);
	report.appendChild(people);
	report.appendChild(proj);
	report.appendChild(more);
	report.appendChild(total);
	resultt.appendChild(report);
}
	
