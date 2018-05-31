var fields = {
  "data": ["پیشنهاد همکاری", "امتیازدهی", "کمک مالی"]
}
var sel = document.getElementById("field");
var opt = document.createElement('option');
opt.setAttribute('value', "blank")
opt.innerText = "زمینه فعالیت";
sel.appendChild(opt);
for (var i = 0; i < fields.data.length; i++) {
  var opt = document.createElement('option');
  opt.setAttribute('value',fields.data[i])
  opt.innerText = fields.data[i];
  sel.appendChild(opt);
}

function rate (e1,e2) {
  var id1 = "button" + e1;
  for (var i = 1; i <= e2; i++) {
    document.getElementById(id1+i).style.backgroundColor = "#E0B0FF";
  }
  for (var i = e2+1; i < 6; i++) {
    document.getElementById(id1+i).style.background = "none";
  }
}

var params = ["فعالیت اعضا", "مسءولیت پذیری", "صداقت", "تعهد", "جو"]
var hours = ["۸-۱۰", "۱۰-۱۲", "۱۲-۱۵", "۱۵-۱۷"]
var days = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه"]
var projects = {
  "projs": [
    {"benefactor": "پویان شیرزادیان", "organization": "جمعیت امام علی", "ttype": "امتیازدهی", 
    "disc": "خیلی کادر خوبی دارن و خیلی تجربه خوبی بود", "rate": [3,4,2,3,5], "first": 1},
    {"benefactor": "پویان شیرزادیان", "organization": "جمعیت امام علی", "ttype": "پیشنهاد همکاری", 
    "disc": "من میخوام بیام باهاتون کار کنم", "first": 1},
    {"benefactor": "پویان شیرزادیان", "organization": "جمعیت امام علی", "ttype": "پیشنهاد همکاری", 
    "disc": "بیاین با ما کار کنین", "week": [1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1], "first": 2},
    {"benefactor": "پویان شیرزادیان", "organization": "جمعیت امام علی", "ttype": "کمک مالی", 
    "disc": "پروژه خرید لباس برای کودکان", "payment" : 12000,"first": 1},
  ]
}

function show() {
var orgname = document.getElementById("orgName").value;
var sortType = document.getElementById("sortType").value;
var projectfield = document.getElementById("field").value;
var beneName = document.getElementById("beneName").value;
  var divv = document.getElementById("result");
  while(divv.hasChildNodes()){
    divv.removeChild(divv.childNodes[0])
  }
  for (var i = 0; i < projects.projs.length; i++) {
    if ((orgname=='' || orgname==projects.projs[i].organization)
      &&(projectfield=="blank" ||projects.projs[i].ttype==projectfield)
      &&(beneName=='' ||projects.projs[i].benefactor>=beneName)){
      var rep = document.createElement('div');
      rep.setAttribute('class', "report");
      var peop = document.createElement('div');
      peop.setAttribute('class', "people");
      var benef = document.createElement('span');
      benef.setAttribute('class', "benefactor");
      benef.innerText = projects.projs[i].benefactor;
      var org = document.createElement('span');
      org.setAttribute('class', "organization");
      org.innerText = projects.projs[i].organization;
      var typ = document.createElement('span');
      typ.setAttribute('class', "type");
      typ.innerText = projects.projs[i].ttype;
      if (projects.projs[i].first==1) {
        peop.appendChild(benef);
        peop.appendChild(org);
      } else {
        peop.appendChild(org);
        peop.appendChild(benef);
      }
      peop.appendChild(typ);
      rep.appendChild(peop);
      if(projects.projs[i].ttype=="امتیازدهی") {
          var rating = document.createElement('div');
          rating.setAttribute('class', "rating");
          var ratingtable = document.createElement('table');
          for (var k = 0; k < 5; k++) {
            var ttr = document.createElement('tr');
            var ttd = document.createElement('td');
            ttd.setAttribute('class', "firstTd");
            ttd.innerText = params[k];
            ttr.appendChild(ttd);
            for (var j = 0; j < projects.projs[i].rate[k]; j++) {
                var ttd = document.createElement('td');
                var bbutton = document.createElement('button');
                ttd.appendChild(bbutton);
                ttr.appendChild(ttd);
            }
            ratingtable.appendChild(ttr);
          }
          rating.appendChild(ratingtable);
          rep.appendChild(rating);
          var more = document.createElement('div');
          more.setAttribute('class', "more");
          var hh3 = document.createElement('h3');
          hh3.innerHTML = projects.projs[i].disc;
          more.appendChild(hh3);
          var bbutton = document.createElement('button');
          bbutton.setAttribute('class', "remove");
          bbutton.setAttribute('onclick', "remove(id)");
          bbutton.innerText = "حذف";
          rep.appendChild(more);
          rep.appendChild(bbutton);
          divv.appendChild(rep);
      }   
      else if (projects.projs[i].ttype=="پیشنهاد همکاری" && projects.projs[i].first==1) {
        var mmore = document.createElement('div');
        mmore.setAttribute('class', "more");
        var hh3 = document.createElement('h3');
        hh3.innerHTML = projects.projs[i].disc;
        mmore.appendChild(hh3);
        rep.appendChild(mmore);
        divv.appendChild(rep);
      }
      else if (projects.projs[i].ttype=="پیشنهاد همکاری" && projects.projs[i].first==2) {
        var wweek = document.createElement('div');
        wweek.setAttribute('class', "week");
        var ttable = document.createElement('table');
        ttable.setAttribute('class', "tab");
        var tthead = document.createElement('thead');
        var tth = document.createElement('th');
        tth.setAttribute('class', "firstCol");
        tth.innerText = "";
        tthead.appendChild(tth);
        for (var j = 0; j < 4; j++) {
          var tth = document.createElement('th');
          tth.innerText = hours[j];
          tthead.appendChild(tth);
        }
        ttable.appendChild(tthead);
        var ttbody = document.createElement('tbody');
        for (var j = 0; j <7; j++) {
          var ttr = document.createElement('tr');
          var ttd = document.createElement('td');
          ttd.setAttribute('class', "firstCol");
          ttd.innerText = days[j];
          ttr.appendChild(ttd);
          for (var k = 0; k < 4; k++) {
            var ttd = document.createElement('td');
            ttd.setAttribute('class', "otherCol");
            ttd.innerText = "";
            if (projects.projs[i].week[4*j+k]==1) {
              ttd.style.backgroundColor = "rgb(211,233,158)";
            } else {
              ttd.style.backgroundColor = "#999999";
            }
            ttr.appendChild(ttd);
          }
          ttbody.appendChild(ttr);
        }
        ttable.appendChild(ttbody);
        wweek.appendChild(ttable);
        rep.appendChild(wweek);

        var more = document.createElement('div');
        more.setAttribute('class', "more");
        var hh3 = document.createElement('h3');
        hh3.innerHTML = projects.projs[i].disc;
        more.appendChild(hh3);
        rep.appendChild(more);
        divv.appendChild(rep);
      }
      else {
        var ddiv = document.createElement('div');
        ddiv.setAttribute('class', "proj");
        var hh3 = document.createElement('h3');
        hh3.innerHTML = "مبلغ: " + projects.projs[i].payment;
        ddiv.appendChild(hh3);
        rep.appendChild(ddiv);

        var more = document.createElement('div');
        more.setAttribute('class', "more");
        var hh3 = document.createElement('h3');
        hh3.innerHTML = projects.projs[i].disc;
        more.appendChild(hh3);
        rep.appendChild(more);
        divv.appendChild(rep);
      }
    }
  }
}

show();
