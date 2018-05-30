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
            this.style.color = "#3498db";
            this.value = 2;
        }
        else {
            this.style.color = "rgb(0,0,0)";
            this.value = 1;
        }
    }
    ab.appendChild(s);
}

var week = {
    "data": [1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1],
    "day": ["شنبه", "یکشنبه", "دوشنبه" ,"سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
    "hour": [" ", "۸-۱۰", "۱۰-۱۲", "۱۲-۱۵", "۱۵-۱۷"]
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
        if (week.data[id] == 0) {
            span.setAttribute('class', 'free');
            span.value = 1;
            span.onclick = function() {
                if (this.value == 1) {
                    this.style.backgroundColor = "rgb(57,183,250)";
                    this.value = 2;
                }
                else {
                    this.style.backgroundColor = "rgb(191,215,157)";
                    this.value = 1;
                }
            };
        }
        if (week.data[id] == 1) {
            span.setAttribute('class', 'busy');
        }
        d.appendChild(span);
        row.appendChild(d);
    }
    table.appendChild(row);
}
dd.appendChild(table);

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
