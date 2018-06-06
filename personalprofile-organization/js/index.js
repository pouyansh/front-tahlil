var personalData = {
    "name": "بنیاد خیریه احسان",
    "age": "1390",
    "parvane": "88769-32",
    "phoneno": "021-44567321",
    "address": "تهران-خیابان شهید مهدوی- کوچه آذر-پلاک 34",
    "email": "ehsancharity@yahoo.com",
    "photo": "images/charity.jpg",
	"website": "www.ehsancharity.com"
}
var photo = document.getElementById("photo");
var im = document.createElement('img');
im.setAttribute('src',personalData.photo);
photo.appendChild(im);

var personal1 = document.getElementById("personal");
var sname = document.createElement('h3');
sname.innerHTML = "نام موسسه: " + personalData.name;
personal1.appendChild(sname);
var sage = document.createElement('h3');
sage.innerHTML = "سال ثبت: " + personalData.age;
personal1.appendChild(sage);
var sparvane = document.createElement('h3');
    sparvane.innerHTML = "پروانه فعالیت: " + personalData.parvane;
personal1.appendChild(sparvane);
var saddress = document.createElement('h3');
saddress.innerHTML = "آدرس: " + personalData.address;
personal1.appendChild(saddress);
var semail = document.createElement('h3');
semail.innerHTML = "پست الکترونیک: " + personalData.email;
personal1.appendChild(semail);
var sweb=document.createElement('h3');
sweb.innerHTML="وبسایت: "+personalData.website;
personal1.appendChild(sweb);
var sphone=document.createElement('h3');
sphone.innerHTML= "تلفن تماس: "+personalData.phoneno;
personal1.appendChild(sphone);

//////////////////////////////////
var projects=[
"یاری ایتام", "محک","کمیته امداد","صلیب سرخ"];
var realList= document.createElement('ul');
var projectsList=document.getElementById("projects");
for(var i=0; i<projects.length;i++){
	var projectsList2=document.createElement('li');
	projectsList2.innerText=projects[i];
	realList.appendChild(projectsList2);
}
projectsList.appendChild(realList);
/////////////////////////////////////	

//chart data
var chartjson = {
  "data": [{
    "name": "صداقت",
    "score": 90
  }, {
    "name": "تعهد",
    "score": 73
  }, {
    "name": "مسپولیت پذیری",
    "score": 80
  }, {
    "name": "وقت شناسی",
    "score": 89
  }, {
    "name": "علاقه به کار",
    "score": 64
  }],
  "xtitle": "Secured Marks",
  "ytitle": "Marks",
  "ymax": 100,
  "ykey": 'score',
  "xkey": "name",
  "prefix": "%"
}

//chart colors
var colors = ['one', 'two', 'three', 'four', 'five'];

//constants
var TROW = 'tr',
  TDATA = 'td';

var chart = document.createElement('div');
//create the chart canvas
var barchart = document.createElement('table');

chart.appendChild(barchart);

//create the bar row
var barrow = document.createElement(TROW);

//lets add data to the chart
for (var i = 0; i < chartjson.data.length; i++) {
  barrow.setAttribute('class', 'bars');
  var prefix = chartjson.prefix || '';
  //create the bar data
  var bardata = document.createElement(TDATA);
  var bar = document.createElement('div');
  bar.setAttribute('class', colors[i]);
  bar.innerText = chartjson.data[i][chartjson.ykey] + prefix; 
  bar.style.height = chartjson.data[i][chartjson.ykey] + prefix;
  bar.style.position = "absolute";
  bar.style.width = "100%";
  bar.style.bottom = "0";
  bardata.appendChild(bar);
  barrow.appendChild(bardata);
}

//create legends
var legendrow = document.createElement(TROW);
var legend = document.createElement(TDATA);
legend.setAttribute('class', 'legend');
legend.setAttribute('colspan', chartjson.data.length);

//add legend data
for (var i = 0; i < chartjson.data.length; i++) {
  var legbox = document.createElement('span');
  legbox.setAttribute('class', 'legbox');
  var barname = document.createElement('span');
  barname.setAttribute('class', colors[i] + ' xaxisname');
  var bartext = document.createElement('span');
  bartext.innerText = chartjson.data[i][chartjson.xkey];
  legbox.appendChild(barname);
  legbox.appendChild(bartext);
  legend.appendChild(legbox);
}
barrow.appendChild(legend);
barchart.appendChild(barrow);
barchart.appendChild(legendrow);
chart.appendChild(barchart);
document.getElementById('chart').innerHTML = chart.outerHTML;

var abilities = {
  "data": ["حسابداری", "آموزش", "خیاطی", "روابط عمومی"]
}
var ab = document.getElementById("abilities");
for (var i = 0; i < abilities.data.length; i++) {
    var s = document.createElement('span');
    s.setAttribute('class', 'abilitySpan');
    s.style.display = "block";
    s.style.margin = "2px 20px 2px 0";
    s.innerText = abilities.data[i];
    s.value = 1;
    s.onclick = function() {
        if (this.value == 1) {
            this.style.backgroundColor = "#C45AEC";
            this.value = 2;
        }
        else {
            this.style.backgroundColor = "rgba(0,0,0,0.4)";
            this.value = 1;
        }
    }
    ab.appendChild(s);
}

var projectsdone=[ "کمک به زلزله زدگان", "برگزاری افطاری در مناطق محروم", "خرید جهیزیه"];
var projectsdonee=document.getElementById("projectscurrent");
for(var i=0; i<projectsdone.length; i++){
	var ss=document.createElement('span');
	ss.setAttribute('class', 'abilitySpan');
	ss.style.display="block";
	ss.style.margin="2px 20px 2px 0";
	ss.innerText=projectsdone[i];
	ss.value=1;
	ss.onclick = function() {
        if (this.value == 1) {
            this.style.backgroundColor = "#C45AEC";
          this.value = 2;
       }
        else {
            this.style.backgroundColor = "rgba(0,0,0,0.4)";
            this.value = 1;
        }
    }
	projectsdonee.appendChild(ss);
}
	



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
