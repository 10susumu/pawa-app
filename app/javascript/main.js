window.onload = function() {
  const btn = document.getElementById('btn');
  btn.addEventListener('click', (e) => {
  // デフォルトのイベントをキャンセル
    e.preventDefault();
    
    const min = parseFloat(document.getElementById('min').value)
    const max = parseFloat(document.getElementById('max').value)
    const kishu = parseFloat(document.getElementById('busho_kishu').value)
    
    bushoJson = $('#enemy').data('json');
    enemyId = $('#enemy_id').val()-1;
    allyId = $('#ally_id').val()-1;
    console.log(bushoJson[enemyId])
    
    
    const enemySen = document.getElementById('enemy_sen');
    enemySen.innerHTML = bushoJson[enemyId].senjutsu
    const allySen = document.getElementById('ally_sen');
    allySen.innerHTML = bushoJson[allyId].senjutsu
    
    const enemyMy = bushoJson[enemyId].myrate
    const enemyOpp = bushoJson[enemyId].oppnentrate
    const allyMy = bushoJson[allyId].myrate
    const allyOpp = bushoJson[allyId].oppnentrate
    
    let tab010 = 0
    let tab011 = 0
    let tab020 = 0
    let tab021 = 0
    let tab030 = 0
    let tab031 = 0
    let tab040 = 0
    let tab041 = 0
    let tab050 = 0
    let tab051 = 0
    let tab060 = 0
    let tab061 = 0
    let tab070 = 0
    let tab071 = 0
    let tab080 = 0
    let tab081 = 0
    let tab090 = 0
    let tab091 = 0
    
    const yuMin = Math.ceil(min / 1.5) //切り上げ
    const yuMax = Math.ceil(max / 1.5) //切り上げ
    const huMin = Math.floor(min * 1.5) //切り捨て
    const huMax = Math.floor(max * 1.5) //切り捨て
    
    tab040 = Math.ceil(Math.ceil(yuMin * allyOpp) / allyMy)
    tab041 = Math.ceil(Math.ceil(yuMax * allyOpp) / allyMy)
    tab050 = Math.ceil(Math.ceil(min   * allyOpp) / allyMy)
    tab051 = Math.ceil(Math.ceil(max   * allyOpp) / allyMy)
    tab060 = Math.ceil(Math.ceil(huMin * allyOpp) / allyMy)
    tab061 = Math.ceil(Math.ceil(huMax * allyOpp) / allyMy)
    
    tab070 = yuMin + Math.ceil(Math.floor(yuMin * (enemyMy - 1)) * (1 - kishu ))
    tab071 = yuMax + Math.ceil(Math.floor(yuMax * (enemyMy - 1)) * (1 - kishu ))
    tab080 = min   + Math.ceil(Math.floor(min   * (enemyMy - 1)) * (1 - kishu ))
    tab081 = max   + Math.ceil(Math.floor(max   * (enemyMy - 1)) * (1 - kishu ))
    tab090 = huMin + Math.ceil(Math.floor(huMin * (enemyMy - 1)) * (1 - kishu ))
    tab091 = huMax + Math.ceil(Math.floor(huMax * (enemyMy - 1)) * (1 - kishu ))
    tab070 = Math.ceil((tab070 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    tab071 = Math.ceil((tab071 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    tab080 = Math.ceil((tab080 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    tab081 = Math.ceil((tab081 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    tab090 = Math.ceil((tab090 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    tab091 = Math.ceil((tab091 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    
    tab010 = yuMin 
    tab011 = yuMax
    tab020 = min 
    tab021 = max
    tab030 = huMin 
    tab031 = huMax 
    tab010 = Math.ceil(Math.floor(tab010  * (enemyMy - 1)) * (1 - kishu )) + tab010
    tab011 = Math.ceil(Math.floor(tab011  * (enemyMy - 1)) * (1 - kishu )) + tab011
    tab020 = Math.ceil(Math.floor(tab020  * (enemyMy - 1)) * (1 - kishu )) + tab020
    tab021 = Math.ceil(Math.floor(tab021  * (enemyMy - 1)) * (1 - kishu )) + tab021
    tab030 = Math.ceil(Math.floor(tab030  * (enemyMy - 1)) * (1 - kishu )) + tab030
    tab031 = Math.ceil(Math.floor(tab031  * (enemyMy - 1)) * (1 - kishu )) + tab031
    tab010 = Math.ceil((tab010 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    tab011 = Math.ceil((tab011 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    tab020 = Math.ceil((tab020 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    tab021 = Math.ceil((tab021 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    tab030 = Math.ceil((tab030 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    tab031 = Math.ceil((tab031 - 0.5 * kishu) / (1-( 1 - enemyOpp ) * (1 - kishu )))
    tab010 = Math.ceil(Math.ceil(tab010   * allyOpp) / allyMy)
    tab011 = Math.ceil(Math.ceil(tab011   * allyOpp) / allyMy)
    tab020 = Math.ceil(Math.ceil(tab020   * allyOpp) / allyMy)
    tab021 = Math.ceil(Math.ceil(tab021   * allyOpp) / allyMy)
    tab030 = Math.ceil(Math.ceil(tab030   * allyOpp) / allyMy)
    tab031 = Math.ceil(Math.ceil(tab031   * allyOpp) / allyMy)
    
    const tab01 = document.getElementById('tab01');
    const tab02 = document.getElementById('tab02');
    const tab03 = document.getElementById('tab03');
    const tab04 = document.getElementById('tab04');
    const tab05 = document.getElementById('tab05');
    const tab06 = document.getElementById('tab06');
    const tab07 = document.getElementById('tab07');
    const tab08 = document.getElementById('tab08');
    const tab09 = document.getElementById('tab09');
    const tab10 = document.getElementById('tab10');
    const tab11 = document.getElementById('tab11');
    const tab12 = document.getElementById('tab12');
    
      if(isNaN(tab010)){
        String(tab010)
        tab010 = ""
      }

    tab01.innerHTML = tab010 + "-" + tab011
    tab02.innerHTML = tab020 + "-" + tab021
    tab03.innerHTML = tab030 + "-" + tab031
    tab04.innerHTML = tab040 + "-" + tab041
    tab05.innerHTML = tab050 + "-" + tab051
    tab06.innerHTML = tab060 + "-" + tab061
    tab07.innerHTML = tab070 + "-" + tab071
    tab08.innerHTML = tab080 + "-" + tab081
    tab09.innerHTML = tab090 + "-" + tab091
    tab10.innerHTML = yuMin + "-" + yuMax
    tab11.innerHTML = min + "-" + max
    tab12.innerHTML = huMin + "-" + huMax
    
  });
}