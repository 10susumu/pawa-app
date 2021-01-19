window.onload = function() {
  const btn = document.getElementById('btn');
  btn.addEventListener('click', (e) => {
  // デフォルトのイベントをキャンセル
    e.preventDefault();
    
    const min = parseFloat(document.getElementById('min').value)
    const max = parseFloat(document.getElementById('max').value)
    const kishu = parseFloat(document.getElementById('busho_kishu').value)
    
    bushoJson = $('#enemy').data('json');
    enemyId = $('#enemy_id').val() - 0;
    allyId = $('#ally_id').val() - 0;
    
    const enemySen = document.getElementById('enemy_sen');
    enemySen.innerHTML = bushoJson[enemyId].senjutsu
    const allySen = document.getElementById('ally_sen');
    allySen.innerHTML = bushoJson[allyId].senjutsu
    
    const enemyMy = bushoJson[enemyId].myrate
    const enemyOpp = bushoJson[enemyId].oppnentrate
    const allyMy = bushoJson[allyId].myrate
    const allyOpp = bushoJson[allyId].oppnentrate
    
    const yuMin = Math.ceil(min / 1.5) //切り上げ
    const yuMax = Math.ceil(max / 1.5) //切り上げ
    const huMin = Math.floor(min * 1.5) //切り捨て
    const huMax = Math.floor(max * 1.5) //切り捨て
    
    let power = new Array(24);
    for (var i=0; i<24; i++) {
      power[i] = 0;
    }
    
    power[18] = yuMin 
    power[19] = yuMax
    power[20] = min 
    power[21] = max
    power[22] = huMin 
    power[23] = huMax

    for (var i=0; i<6; i++) {
      power[i+6] = Math.ceil(Math.ceil(power[i+18] * allyOpp) / allyMy)
      power[i+12] = power[i+18] + Math.ceil(Math.floor(power[i+18] * (enemyMy - 1)) * (1 - kishu ))
      power[i+12] = Math.ceil((power[i+12] - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
      power[i] = power[i+18]
      power[i] = Math.ceil(Math.floor(power[i]  * (enemyMy - 1)) * (1 - kishu )) + power[i]
      power[i] = Math.ceil((power[i] - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
      power[i] = Math.ceil(Math.ceil(power[i]   * allyOpp) / allyMy)
    }
    
    for (var i=0; i<24; i++) {
      if(isNaN(power[i])){
        String(power[i])
        power[i] = ""
      }
    }

    let tab = new Array(12);
    for (var i=0; i<12; i++) {
      tab[i] = document.getElementById('tab'+ i );
      tab[i].innerHTML = power[i*2] + "-" +  power[i*2+1]
    }

    
    
  });
}