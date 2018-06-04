var fields = {
  "data": ["کودکان", "سالمندان ", "زنان سرپرست خانوار", "بیماران", "غیره"]
}
var sel = document.getElementById("field");
var opt = document.createElement('option');
opt.setAttribute('value', "blank")
opt.innerText = "زمینه فعالیت";
sel.appendChild(opt);
for (var i = 0; i < fields.data.length; i++) {
  var opt = document.createElement('option');
  opt.setAttribute('value', i)
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

var projects = {
  "projs": [
    {"type": 0,"name": "جمعیت امام علی", "disc": "خرید پوشاک برای کودکان", "cost": 153000, "NOP": 10,"rate":3},
    {"type": 2,"name": "جمعیت امام علی", "disc": "خرید چرخ خیاطی برای زنان سرپرست خانوار", "cost": 3240000, "NOP": 10,"rate":3.5},
    {"type": 0,"name": "یاوران ایتام", "disc": "افطاری به کودکان یتیم", "cost": 1000000, "NOP": 10,"rate":2},
    {"type": 0,"name": "مهرانه", "disc": "خرید دفتر و کتاب برای کودکان", "cost": 500000, "NOP": 10,"rate":1.4},
    {"type": 4,"name": "یاوران ایتام", "disc": "جهیزیه ", "cost": 21000000, "NOP": 10,"rate":4},
    {"type": 0,"name": "جمعیت امام علی", "disc": "خرید پوشاک برای کودکان", "cost": 153000, "NOP": 10,"rate":5},
    {"type": 2,"name": "جمعیت امام علی", "disc": "خرید چرخ خیاطی برای زنان سرپرست خانوار", "cost": 3240000, "NOP": 10,"rate":3.3},
    {"type": 0,"name": "یاوران ایتام", "disc": "افطاری به کودکان یتیم", "cost": 1000000, "NOP": 10,"rate":1},
    {"type": 0,"name": "مهرانه", "disc": "خرید دفتر و کتاب برای کودکان", "cost": 500000, "NOP": 10,"rate":3},
    {"type": 4,"name": "یاوران ایتام", "disc": "جهیزیه ", "cost": 21000000, "NOP": 10,"rate":1.2}
  ]
}

function show() {
var orgname = document.getElementById("orgName").value;
var sortType = document.getElementById("sortType").value;
var projectfield = document.getElementById("field").value;
var minimumBudget = document.getElementById("minimumbudget").value;
var minimumtotalrating = document.getElementById("minimumtotalrating").value;
  var divv = document.getElementById("result");
  while(divv.hasChildNodes()){
    divv.removeChild(divv.childNodes[0])
  }
  for (var i = 0; i < projects.projs.length; i++) {
    if ((orgname=='' || orgname==projects.projs[i].name)
      &&(projectfield=="blank" ||projects.projs[i].type==projectfield)
      &&(minimumBudget=='' ||projects.projs[i].cost>=minimumBudget)
      &&(minimumtotalrating=='' ||projects.projs[i].rate>=minimumtotalrating)){
    var divProject = document.createElement('div');
    divProject.setAttribute('class', "project");
    var divspec = document.createElement('div');
    divspec.setAttribute('class', "specifications");
    var aname = document.createElement('a');
    aname.setAttribute('href', "#");
    aname.innerText = projects.projs[i].name;
    divspec.appendChild(aname);
    var h3disc = document.createElement('h3');
    h3disc.innerHTML = projects.projs[i].disc;
    divspec.appendChild(h3disc);
    divProject.appendChild(divspec);


    var divcost = document.createElement('div');
    divcost.setAttribute('class', "cost");
    var h3disc = document.createElement('h3');
    h3disc.innerHTML = "مبلغ مورد نیاز";
    divcost.appendChild(h3disc);
    var spancost = document.createElement('span');
    spancost.setAttribute('class', "budget");
    spancost.innerHTML = projects.projs[i].cost + "تومان";
    divcost.appendChild(spancost);
    divProject.appendChild(divcost);
    divv.appendChild(divProject);
  }
  }
}

show();
