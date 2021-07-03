window.onload = function() {
  let zokusei = parseInt(document.getElementById("zokusei").innerText);
  let level = parseInt(document.getElementById("level").innerText);

  let zoku = new Array(9);
  zoku[1] = 20;
  zoku[2] = 8;
  zoku[3] = 3;
  zoku[4] = 15;
  zoku[5] = 30;
  zoku[6] = 5;
  zoku[7] = 12;
  zoku[8] = 7;
  i = 0;
      
  document.getElementById("ide" + 1 ).onclick = function() { i = 1; aa(); FinRun();}
  document.getElementById("ide" + 2 ).onclick = function() { i = 2; aa(); FinRun();}
  document.getElementById("ide" + 3 ).onclick = function() { i = 3; aa(); FinRun();}
  document.getElementById("ide" + 4 ).onclick = function() { i = 4; aa(); FinRun();}
  document.getElementById("ide" + 5 ).onclick = function() { i = 5; aa(); FinRun();}
  document.getElementById("ide" + 6 ).onclick = function() { i = 6; aa(); FinRun();}
  document.getElementById("ide" + 7 ).onclick = function() { i = 7; aa(); FinRun();}
  document.getElementById("ide" + 8 ).onclick = function() { i = 8; aa(); FinRun();}

  let prevzoku = 0;
  let prevlevel = 0;

  function aa(){
    let ide = document.getElementById('ide' + i );
    if(ide.className == "" ){
      ide.className = "blank"
      prevzoku = zokusei
      zokusei = zokusei - zoku[i]
    }else if(ide.className == "blank"){
      ide.className = "idenshi"
      prevzoku = zokusei
      zokusei = zokusei + zoku[i]
    }else if(ide.className == "idenshi"){
      ide.className = "blank"
      prevzoku = zokusei
      zokusei = zokusei - zoku[i]
    }
    document.getElementById("zokusei").innerText = prevzoku +"→"+ zokusei

    
  }
  
  function FinRun(){
    prevlevel = level
    if (zokusei == 100 ){
      level = 4
      document.getElementById("level").innerText = prevlevel +"→"+ level
    }else if (zokusei >= 61){
      level = 3
      document.getElementById("level").innerText = prevlevel +"→"+ level
    }else if (zokusei >= 31){
      level = 2
      document.getElementById("level").innerText = prevlevel +"→"+ level
    }else if (zokusei >= 1){
      level = 1
      document.getElementById("level").innerText = prevlevel +"→"+ level
    }else if (zokusei == 0){
      level = 0
      document.getElementById("level").innerText = prevlevel +"→"+ level
    }

    let nextzoku = 0;
    let joushou = 0;
    let fuhen = 0;
    let kakou = 0;
    let nextlevel = 0;
    let jouplus = 0;
    let jouminus = 0;
    let fuheplus = 0;
    let fuheminus = 0;
    let kakoplus = 0;
    let kakominus = 0;

    for (var j=1; j<9; j++) {
      if(document.getElementById('ide' + j ).className == "" ){
        nextzoku = zokusei + zoku[j]
      }else if (document.getElementById('ide' + j ).className == "idenshi"){
        nextzoku = zokusei - zoku[j]
      }else{
        nextzoku = zokusei + zoku[j]
      }
      
      if (nextzoku == 100 ){
        nextlevel = 4
      }else if (nextzoku >= 61){
        nextlevel = 3
      }else if (nextzoku >= 31){
        nextlevel = 2
      }else if (nextzoku >= 1){
        nextlevel = 1
      }else if (nextzoku == 0){
        nextlevel = 0
      }

      if(nextlevel > level ){
        joushou += 1
        document.getElementById("zou"+j).innerText = "上"
        if(document.getElementById('ide' + j ).className == "" ){
          jouplus ++;
        }else if (document.getElementById('ide' + j ).className == "idenshi"){
          jouminus ++;
        }else{
          jouplus ++;
        }
      }else if(nextlevel == level ){
        fuhen += 1
        document.getElementById("zou"+j).innerText = "不"
        if(document.getElementById('ide' + j ).className == "" ){
          fuheplus ++;
        }else if (document.getElementById('ide' + j ).className == "idenshi"){
          fuheminus ++;
        }else{
          fuheplus ++;
        }
      }else{
        kakou += 1
        document.getElementById("zou"+j).innerText = "下"
        if(document.getElementById('ide' + j ).className == "" ){
          kakoplus ++;
        }else if (document.getElementById('ide' + j ).className == "idenshi"){
          kakominus ++;
        }else{
          kakoplus ++;
        }
      }
      document.getElementById("joushou").innerText = joushou
      document.getElementById("fuhen").innerText = fuhen
      document.getElementById("kakou").innerText = kakou
      document.getElementById("jouplus").innerText = jouplus
      document.getElementById("jouminus").innerText = jouminus
      document.getElementById("fuheplus").innerText = fuheplus
      document.getElementById("fuheminus").innerText = fuheminus
      document.getElementById("kakoplus").innerText = kakoplus
      document.getElementById("kakominus").innerText = kakominus
    }

  }  
}