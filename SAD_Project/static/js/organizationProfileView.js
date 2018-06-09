var personalData = {
  "username": "ehsancharity",
  "name": "بنیاد خیریه احسان",
  "age": "1390",
  "parvane": "88769-32",
  "phoneno": "021-44567321",
  "address": "تهران-خیابان شهید مهدوی- کوچه آذر-پلاک 34",
  "email": "ehsancharity@yahoo.com",
  "photo": "/static/images/charity.jpg",
  "openAtThursday": true,
  "openAtFriday": false,
	"website": "www.ehsancharity.com",
  "projects":["سید علی موسوی", "زهرا گلرویی","پویا آدمی"],
  "projectsdone": [ "کمک به زلزله زدگان", "برگزاری افطاری در مناطق محروم", "خرید جهیزیه"],
  "abilities" : {"data": ["حسابداری", "آموزش", "خیاطی", "روابط عمومی"]},
  "rating": [70,80,30,65,24],
  "data": ["صداقت","تعهد","مسپولیت پذیری","وقت شناسی","علاقه به کار"],
  "more": "بنیاد خیریه نور احسان، مؤسس­ه ای غیرانتفاعی ست که در سال 1379 با هدف حفظ سلامت و پایداری نهاد خانواده­ های نیازمند تاسیس شد. این مؤسسه، از سوی هیچ نهاد دولتی حمایت نمی­ شود و مخارج مددجویان خود را تنها از طریق کمک­های مردمی تامین می­ کند.بنیاد خیریه نور احسان، خانواده های بی سرپرست، بدسرپرست، بیمارسرپرست، زنان سرپرست خانوار، سالمندان نیازمند، مبتلایان به بیماری های خاص و نادر، افراد آسیب دیده از زلزله و قربانیان اسیدپاشی را تحت پوشش دارد."
}

var benefactor = {
  "week": [1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1]
}
var week = {
    "day": ["شنبه", "یکشنبه", "دوشنبه" ,"سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
    "hour": [" ", "۸-۱۰", "۱۰-۱۲", "۱۲-۱۵", "۱۵-۱۷"]
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

var h = document.createElement('p');
h.innerText = personalData.more;
document.getElementById("more").appendChild(h);

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
for (var i = 0; i < personalData.rating.length; i++) {
  barrow.setAttribute('class', 'bars');
  //create the bar data
  var bardata = document.createElement(TDATA);
  var bar = document.createElement('div');
  bar.setAttribute('class', colors[i]);
  bar.innerText = personalData.rating[i] + "%"; 
  bar.style.height = personalData.rating[i] + "%";
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
legend.setAttribute('colspan', personalData.rating.length);

//add legend data
for (var i = 0; i < personalData.data.length; i++) {
  var legbox = document.createElement('span');
  legbox.setAttribute('class', 'legbox');
  var barname = document.createElement('span');
  barname.setAttribute('class', colors[i] + ' xaxisname');
  var bartext = document.createElement('span');
  bartext.innerText = personalData.data[i];
  legbox.appendChild(barname);
  legbox.appendChild(bartext);
  legend.appendChild(legbox);
}
barrow.appendChild(legend);
barchart.appendChild(barrow);
barchart.appendChild(legendrow);
chart.appendChild(barchart);
document.getElementById('chart').innerHTML = chart.outerHTML;

var ab = document.getElementById("abilities");
for (var i = 0; i < personalData.abilities.data.length; i++) {
    var s = document.createElement('span');
    s.setAttribute('class', 'abilitySpan');
    s.style.width = "150px";
    s.style.textAlign = "center";
    s.style.backgroundColor = "rgba(0,0,0,0.4)";
    s.style.color = "#eeeeee";
    s.style.display = "block";
    s.style.margin = "2px 20px 2px 0";
    s.innerText = personalData.abilities.data[i];
    s.value = 1;
    s.onclick = function() {
        if (this.value == 1) {
            this.style.backgroundColor = "rgb(4,80,255)";
            this.value = 2;
        }
        else {
            this.style.backgroundColor = "rgba(0,0,0,0.4)";
            this.value = 1;
        }
    }
    ab.appendChild(s);
}

var projectsdonee=document.getElementById("projectscurrent");
for(var i=0; i<personalData.projectsdone.length; i++){
	var ss=document.createElement('span');
	ss.setAttribute('class', 'abilitySpan');
	ss.style.display="block";
	ss.style.margin="2px 20px 2px 0";
	ss.innerText=personalData.projectsdone[i];
	ss.value=1;
	projectsdonee.appendChild(ss);
}

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

var projectsList=document.getElementById("projects");
for(var i=0; i<personalData.projects.length;i++){
  var ss=document.createElement('span');
  ss.setAttribute('class', 'abilitySpan');
  ss.style.display="block";
  ss.style.margin="2px 20px 2px 0";
  ss.innerText=personalData.projects[i];
  projectsList.appendChild(ss);
}

var dd = document.getElementById('weeklyfreetime');
var table = document.createElement('table');
table.setAttribute('class','weektable');
var thead = document.createElement('tr');
for (var i = 0; i < week.hour.length; i++) {
    var th = document.createElement('td');
    th.innerText = week.hour[i];
    thead.appendChild(th);
}
table.appendChild(thead);
for (var i = 0; i < 7; i++) {
    var row = document.createElement('tr');
    var data = document.createElement('td');
    data.innerText = week.day[i];
    row.appendChild(data);
    for (var j = 0; j < 4; j++) {
        var d = document.createElement('td');
        var span = document.createElement('span');
        var id = i*4+j;
        span.id = id;
        if (benefactor.week[id] == 0 && (i < 5 || (i == 5 && personalData.openAtThursday) || (i == 6 && personalData.openAtFriday))) {
            span.setAttribute('class', 'free');
            span.value = 1;
            span.onclick = function() {
                if (this.value == 1) {
                    this.style.backgroundColor = "rgb(15,157,242)";
                    this.value = 2;
                }
                else {
                    this.style.backgroundColor = "rgb(191,215,157)";
                    this.value = 1;
                }
            };
        }
        else if (benefactor.week[id] == 1 && (i < 5 || (i == 5 && personalData.openAtThursday) || (i == 6 && personalData.openAtFriday))) {
            span.setAttribute('class', 'busy');
            span.value = 3;
            span.onclick = function() {
                if (this.value == 3) {
                    this.style.backgroundColor = "rgb(15,157,242)";
                    this.value = 4;
                }
                else {
                    this.style.backgroundColor = "rgb(150,150,150)";
                    this.value = 3;
                }
            };
        }
        else {
          span.style.backgroundColor = "rgb(205,205,205)";
        }
        d.appendChild(span);
        row.appendChild(d);
    }
    table.appendChild(row);
}
dd.appendChild(table);