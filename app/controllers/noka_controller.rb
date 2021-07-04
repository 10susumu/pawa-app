class NokaController < ApplicationController
  def index
    @yasai = 0

  end
  def show
  end
  def create
    kabu = 1
    imo = 10000
    toma = 0.001
    hou = 100000000
    # imo = 0
    # kabu = 0
    # toma = 0
    ren = imo + kabu
    nin = imo + ren
    nira = kabu + toma
    kyuu = hou + imo
    tama2 = imo + nin
    tama = kabu + ren
    kyabe2 = ren + toma
    kyabe = imo + kyuu
    nasu2 = nira + imo
    nasu = hou + kabu
    imoda4 = nira + toma
    imoda3 = imo + tama2
    imoda2 = imo + tama
    imoda = kabu + nin
    pase = imo + nasu
    pase2 = imo + nasu2
    pase3 = nin + toma
    pase4 = kabu + kyuu
    mero = kyabe + imo
    mero2 = kyabe2 + imo
    mero3 = nira + kabu
    meto4 = hou + ren
    gobo = imo + imoda
    gobo2 = imo + imoda2
    gobo3 = imo + imoda3
    gobo4 = imo + imoda4
    gobo5 = ren + nin
    gobo6 = kabu + tama
    gobo7 = kabu + tama2
    gobo8 = nira + toma
    remo = toma + kyuu
    kari6 =imo + mero3
    kari5 =imo + mero2
    kari4 =imo + mero
    kari3 =ren + kyuu
    kari2 = tama + toma
    kari = nasu + kabu
    kon8 = hou + nin
    kon5 = pase + imo
    kon2 = pase2 + imo
    kon3 = pase3 + imo
    kon4 = pase4 + imo
    kon7 = nira + ren
    kon6 = kyabe2 + kabu
    kon = kyabe + kabu
    kabo2 = kari2 + kon
    kabo = kari + kon
    mame = kabo + kon
    # piti = 1000000
    piti2 = kari2 + kabo
    piti = kari + kabo
    tou2 = kari2 + mame
    tou = kari + mame
    iti = kon + piti
    # waka = 1
    waka = kabo + iti
    # gari = 10000
    gari = mame + piti
    pai = kabo + tou
    take = kabo + gari
    konbu = tou + waka
    sui= tou + gari
    matu = konbu + sui
    tin = matu + sui
    dori = konbu + matu
    pima = konbu + tin
    kihu = konbu + dori
    habu = pima + tin
    king = habu + kihu
    begin
      @yasai = eval( yasai_params )
    rescue
      @yasai = 0
    end
    
    render :index
  end
  def yasai_params
    params.require(:yasai)
  end
end
