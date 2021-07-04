window.onload = function() {
  let zokusei = parseInt(document.getElementById("zokusei").innerText);
  let level = parseInt(document.getElementById("level").innerText);
  let prevzoku = 0;
  let prevlevel = 0;
  let nextzoku = 0;
  let nextlevel = 0;

  let zougen = {
    jou: 0,
    fuhe: 0,
    kako: 0,
    jouplus: 0,
    jouminus: 0,
    fuheplus: 0,
    fuheminus: 0,
    kakoplus: 0,
    kakominus: 0,
  }

  let zoku = [0, 20, 8, 3, 15, 30, 5, 12, 7];
  i = 0;
  
  FinRun();
  document.getElementById("ide" + 1 ).onclick = function() { i = 1; Main(); FinRun();}
  document.getElementById("ide" + 2 ).onclick = function() { i = 2; Main(); FinRun();}
  document.getElementById("ide" + 3 ).onclick = function() { i = 3; Main(); FinRun();}
  document.getElementById("ide" + 4 ).onclick = function() { i = 4; Main(); FinRun();}
  document.getElementById("ide" + 5 ).onclick = function() { i = 5; Main(); FinRun();}
  document.getElementById("ide" + 6 ).onclick = function() { i = 6; Main(); FinRun();}
  document.getElementById("ide" + 7 ).onclick = function() { i = 7; Main(); FinRun();}
  document.getElementById("ide" + 8 ).onclick = function() { i = 8; Main(); FinRun();}
  

function Main(){
  let ide = document.getElementById('ide' + i );
  prevzoku = zokusei
  if(ide.className == "blank"){
    ide.className = "idenshi"
    zokusei = zokusei + zoku[i]
  }else if(ide.className == "idenshi"){
    ide.className = "blank"
    zokusei = zokusei - zoku[i]
  }
  document.getElementById("zokusei").innerText = prevzoku +"→"+ zokusei
  
  prevlevel = level
  level = Level(zokusei);
  document.getElementById("level").innerText = prevlevel +"→"+ level
  
  Object.keys(zougen).forEach(key => zougen[key] = 0 );
}

function FinRun(){
  for (var j=1; j<9; j++) {
    if (document.getElementById('ide' + j ).className == "idenshi"){
      nextzoku = zokusei - zoku[j]
    }else{
      nextzoku = zokusei + zoku[j]
    }
    nextlevel = Level(nextzoku);
    z = "";
    if(nextlevel > level ){
      document.getElementById("zou"+j).innerText = "上"
      z = "jou";
    }else if(nextlevel == level ){
      document.getElementById("zou"+j).innerText = "不"
      z = "fuhe";
    }else{
      document.getElementById("zou"+j).innerText = "下"
      z = "kako";
    }
    zougen[z] ++
    if (document.getElementById('ide' + j ).className == "idenshi"){
      zougen[z+"minus"] ++;
    }else{
      zougen[z+"plus"] ++;
    }
    Object.keys(zougen).forEach(key=> document.getElementById(key).innerText = zougen[key] );
  }
}
}

function Level(e){
  if (e == 100 ){
    return 4
  }else if (e >= 61){
    return 3
  }else if (e >= 31){
    return 2
  }else if (e >= 1){
    return 1
  }else if (e == 0){
    return 0
  }
}