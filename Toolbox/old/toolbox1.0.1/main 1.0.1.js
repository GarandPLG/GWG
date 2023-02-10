function Main()
{
    let TECH = parseInt(document.getElementById("TECH").value),
        wies = parseInt(document.getElementById("wies").value), 
        miasto = parseInt(document.getElementById("miasto").value),
        pn = parseFloat(document.getElementById("pn").value)/100, 
        psp = parseFloat(document.getElementById("psp").value)/2,
        ska = parseFloat(document.getElementById("ska").value),
        ryn = parseInt(document.getElementById("ryn").value),
        stab = parseFloat(document.getElementById("stab").value),
        INF = parseInt(document.getElementById("INF").value),
        ARC = parseInt(document.getElementById("ARC").value),
        CAV = parseInt(document.getElementById("CAV").value),
        ART = parseInt(document.getElementById("ART").value),
        FLO = parseInt(document.getElementById("FLO").value),
        KON = parseInt(document.getElementById("KON").value),
        ZPP = parseFloat(document.getElementById("ZPP").value),

        BProd = parseInt(document.getElementById("BProd").value),
        BNmiasto = parseInt(document.getElementById("BNmiasto").value),
        BRmiasto = parseInt(document.getElementById("BRmiasto").value),
        BSmiasto = parseInt(document.getElementById("BSmiasto").value),
        Drogi = parseInt(document.getElementById("Drogi").value),
        WDrogi = parseInt(document.getElementById("WDrogi").value),
        MDrogi = parseInt(document.getElementById("MDrogi").value),
        EKS = parseInt(document.getElementById("EKS").value),
        NAW = parseInt(document.getElementById("NAW").value),
        ZMK = parseInt(document.getElementById("ZMK").value),
        KDwT = 
            BProd * 200 + 
            BNmiasto * 2000 + 
            BRmiasto + 
            BSmiasto * 1500 + 
            Drogi * 250 + 
            WDrogi * 500 + 
            MDrogi * 250 + 
            EKS * 200 + 
            NAW * 100 +
            ZMK * 300,

        ZAD = parseInt(document.getElementById("ZAD").value),
        OPR = parseFloat(document.getElementById("OPR").value),
        WzPo = parseInt(document.getElementById("WzPo").value),
        PrZw = parseFloat(document.getElementById("PrZw").value),
        SpPo = parseInt(document.getElementById("SpPo").value),
        Intrest = 0,
        MaxZad = ((wies + miasto)/10).toFixed(0)/1,
        Ban = document.getElementById("Ban").innerHTML = "NIE",

        LGovCap = parseInt(document.getElementById("LGovCap").value),
        Ipro = parseInt(document.getElementById("Ipro").value),
        Imiast = parseInt(document.getElementById("Imiast").value),
        Ipik = parseInt(document.getElementById("Ipik").value),
        Ipir = parseInt(document.getElementById("Ipir").value),
        Ipnz = parseInt(document.getElementById("Ipnz").value),
        GovCap = Ipro * 1 + Imiast * 1 + Ipik * 1 + Ipir * 1 + Ipnz * 5,

        rINF = parseInt(document.getElementById("rINF").value),
        rARC = parseInt(document.getElementById("rARC").value),
        rCAV = parseInt(document.getElementById("rCAV").value),
        rART = parseInt(document.getElementById("rART").value),
        rFLO = parseInt(document.getElementById("rFLO").value),
        rKON = parseInt(document.getElementById("rKON").value),

        t_INF = "I",
        t_ARC = "I",
        t_CAV = "I",
        t_ART = "0",

        POP = wies + miasto,
        plwies = parseInt((pn * wies).toFixed(0)/1), 
        plmiasto = parseInt((pn * miasto).toFixed(0)/1), 
        spn = plwies + plmiasto,
        plPOP = POP + plwies + plmiasto,
        Wpod = parseInt((psp * (plwies + wies)).toFixed(0)/50)/1,
        Mpod = parseInt(((psp * 2) * (plmiasto + miasto)).toFixed(0)/50)/1,
        Lpod = Wpod + Mpod,
        zstab = 0,
        ARM = FLO * 200 + KON * 25,
        KUA = FLO * 10 + KON * 1.25, 
        KRA = rFLO * 400 + rKON * 50,
        KA = 0,
        APP = 0,
        StabPob = APP - 3,
        StabPod = (psp - 0.15).toFixed(2),
        nstab = 0;

    ZAD += WzPo + (WzPo * (PrZw/100)).toFixed(0)/1 - SpPo;
    Intrest = (ZAD * OPR/100).toFixed(0)/1;

    if(ZAD > MaxZad) Ban = "TAK";
    else             Ban = "NIE";

    let Nska = ska + ryn + Lpod + WzPo;

    if(TECH>0 && TECH<=14)
    {
        document.getElementById("t_INF").innerHTML = "I";
        document.getElementById("t_ARC").innerHTML = "I";
        document.getElementById("t_CAV").innerHTML = "I";
        document.getElementById("t_ART").innerHTML = "0";
        t_INF = "I",
        t_ARC = "I",
        t_CAV = "I",
        t_ART = "0",
        KUA += INF * 20 + ARC * 20 + CAV * 20;
        ARM += INF * 500 + ARC * 500 + CAV * 500;
        KRA += rINF * 250 + rARC * 250 + rCAV * 250;
    }
    else if(TECH>14 && TECH<=19)
    {
        document.getElementById("t_INF").innerHTML = "II";
        document.getElementById("t_ARC").innerHTML = "II";
        document.getElementById("t_CAV").innerHTML = "II";
        document.getElementById("t_ART").innerHTML = "0";
        t_INF = "II",
        t_ARC = "II",
        t_CAV = "II",
        t_ART = "0",
        KUA += INF * 25 + ARC * 25 + CAV * 25;
        ARM += INF * 500 + ARC * 500 + CAV * 500;
        KRA += rINF * 250 + rARC * 250 + rCAV * 250;
    }
    else if(TECH>19 && TECH<=29)
    {
        document.getElementById("t_INF").innerHTML = "II";
        document.getElementById("t_ARC").innerHTML = "II";
        document.getElementById("t_CAV").innerHTML = "II";
        document.getElementById("t_ART").innerHTML = "I";
        t_INF = "II",
        t_ARC = "II",
        t_CAV = "II",
        t_ART = "I",
        KUA += INF * 25 + ARC * 25 + CAV * 25 + ART * 13;
        ARM += INF * 500 + ARC * 500 + CAV * 500 + ART * 250;
        KRA += rINF * 250 + rARC * 250 + rCAV * 250 + rART * 250;
    }
    else if(TECH>29 && TECH<=44)
    {
        document.getElementById("t_INF").innerHTML = "III";
        document.getElementById("t_ARC").innerHTML = "III";
        document.getElementById("t_CAV").innerHTML = "III";
        document.getElementById("t_ART").innerHTML = "II";
        t_INF = "III",
        t_ARC = "III",
        t_CAV = "III",
        t_ART = "II",
        KUA += INF * 30 + ARC * 30 + CAV * 30 + ART * 15;
        ARM += INF * 500 + ARC * 500 + CAV * 500 + ART * 250;
        KRA += rINF * 250 + rARC * 250 + rCAV * 250 + rART * 250;
    }
    else if(TECH>44 && TECH<=50)
    {
        document.getElementById("t_INF").innerHTML = "IV";
        document.getElementById("t_ARC").innerHTML = "IV";
        document.getElementById("t_CAV").innerHTML = "IV";
        document.getElementById("t_ART").innerHTML = "III";
        t_INF = "IV",
        t_ARC = "IV",
        t_CAV = "IV",
        t_ART = "III",
        KUA += INF * 35 + ARC * 35 + CAV * 35 + ART * 18;
        ARM += INF * 500 + ARC * 500 + CAV * 500 + ART * 250;
        KRA += rINF * 250 + rARC * 250 + rCAV * 250 + rART * 250;
    }

    ARM =  parseFloat(((ARM / POP)*100).toFixed(2)/1);

    if(StabPod > 0)
    {
        zstab += ((StabPod * 100));
    }
    else if(StabPod < 0)
    {
        zstab += ((StabPod * 100));
    }

    if(StabPob > 0)
    {
        zstab += StabPob/2;
        KA = ((StabPob/10) * KUA + KRA).toFixed(0)/1;
        KUA += KA;
    }

    if(ZPP < 90)
    {
        zstab += ((100 - ZPP)/5).toFixed(2)/1;
    }
    Nska -= KUA + KRA;
    nstab = stab - zstab;
        
    if(nstab > 100) nstab = 100;

    document.getElementById("plwies").innerHTML = plwies + wies;
    document.getElementById("plmiasto").innerHTML = plmiasto + miasto;

    document.getElementById("Wpod").innerHTML = Wpod;
    document.getElementById("Mpod").innerHTML = Mpod;
    document.getElementById("Lpod").innerHTML = Lpod;

    document.getElementById("GovCap").innerHTML = GovCap;
    document.getElementById("%GovCap").innerHTML = ((GovCap / LGovCap)*100).toFixed(2)/1;

    document.getElementById("ZADL").innerHTML = ZAD;
    document.getElementById("INTREST").innerHTML = Intrest;
    document.getElementById("MaxZad").innerHTML = MaxZad;

    document.getElementById("zstab").innerHTML = nstab;
    document.getElementById("POP").innerHTML = POP;
    document.getElementById("spn").innerHTML = spn;
    document.getElementById("plPOP").innerHTML = plPOP;

    document.getElementById("Nska").innerHTML = Nska;
    document.getElementById("Obil").innerHTML = Nska - KDwT - Intrest;

    document.getElementById("oINF").innerHTML = INF + rINF;
    document.getElementById("oARC").innerHTML = ARC + rARC;
    document.getElementById("oCAV").innerHTML = CAV + rCAV;
    document.getElementById("oART").innerHTML = ART + rART;
    document.getElementById("ARM").innerHTML = ARM;
    document.getElementById("APP").innerHTML = APP;
    document.getElementById("KUA").innerHTML = KUA;
    document.getElementById("KA").innerHTML = KA;

    if(document.getElementById("kopia").checked)
    {
        let blob = new Blob(
          ["///KRAJ///",
           "\n---Populacja początkowa---",
           `\nWieś: ${wies}`,
           `\nMiasto: ${miasto}`,
           `\nŁącznie: ${POP}`,
           `\nPrzyrost naturalny (%): ${pn*100}`,
           `\n---Rozliczenie---`,
           `\nSkarbiec: ${ska}`,
           `\nRynek: ${ryn}`,
           `\nPodstawowa stawka podatku: ${psp*2}`,
           `\n---Długi---`,
           `\nZadłużenie: ${ZAD}`,
           `\nOprocentowanie (%): ${OPR}`,
           `\n---Armia---`,
           `\nInfantry: ${INF}`,
           `\nTier: ${t_INF}`,
           `\n\nArchers: ${ARC}`,
           `\nTier: ${t_ARC}`,
           `\n\nCavalary: ${CAV}`,
           `\nTier: ${t_CAV}`,
           `\n\nArtillary: ${ART}`,
           `\nTier: ${t_ART}`,
           `\nMarynarka: ${FLO}`,
           `\nKonwoje: ${KON}`,
           `\n---Kraj---`,
           `\nStabilność: ${stab}`,
           `\nZaspokojenie potrzeb populacji: ${ZPP}`,
           `\n---Government capacity---`,
           `\nLimit GovCap: ${LGovCap}`,
           `\nIlość prowincji: ${Ipro}`,
           `\nIlość miast: ${Imiast}`,
           `\nIlość prowincji z inną kulturą: ${Ipik}`,
           `\nIlość prowincji z inną religią: ${Ipir}`,
           `\nIlość prowincji niezintegrowanych: ${Ipnz}`,

           `\n\n///KOSZT DZIAŁAŃ W TURZE///`,
           `\n---Budynki---`,
           `\nBudynki produkcyjne: ${BProd}`,
           `\nZałożenie Miasta: ${BNmiasto}`,
           `\nRozrost miast: ${BRmiasto}`,
           `\nBudynki specjalne miast: ${BSmiasto}`,
           `\nDrogi: ${Drogi}`,
           `\nWielkie Drogi: ${WDrogi}`,
           `\nSzlaki morskie: ${MDrogi}`,
           `\n---Pożyczki---`,
           `\nWzięcie pożyczki: ${WzPo}`,
           `\n% Zwrotu: ${PrZw}`,
           `\nSpłacenie pożyczki: ${SpPo}`,
           `\n---Rekrutacja---`,
           `\nInfantry: ${rINF}`,
           `\nArchers: ${rARC}`,
           `\nCavalary: ${rCAV}`,
           `\nArtillery: ${rART}`,
           `\nMarynarka: ${rFLO}`,
           `\nKonwoje: ${rKON}`,
           `\n---Kraj---`,
           `\nEkspansja na niezajęte tereny: ${EKS}`,
           `\nNawracanie: ${NAW}`,
           `\nZmiana kultury: ${ZMK}`,

           `\n\n///OUTPUT///`,
           `\n---Populacja---`,
           `\nWieś: ${plwies + wies}`,
           `\nMiasto: ${plmiasto + miasto}`,
           `\nPrzyrost o: ${spn}`,
           `\nŁącznie: ${plPOP}`,
           `\n---Podatki---`,
           `\nWieś: ${Wpod}`,
           `\nMiasto: ${Mpod}`,
           `\nŁącznie: ${Lpod}`,
           `\n---Armia---`,
           `\nInfantry: ${INF + rINF}`,
           `\nArchers: ${ARC + rARC}`,
           `\nCavalary: ${CAV + rCAV}`,
           `\nArchers: ${ART + rART}`,
           `\nKoszt utrzymania: ${KUA}`,
           `\nKara za rozmiar armii: ${KA}`,
           `\nŻołnierze: ${ARM}`,
           `\n% Poboru: ${APP}`,
           `\n---Zadłużenie---`,
           `\nZadłużenie na: ${ZAD}`,
           `\nKoszt oprocentowania: ${Intrest}`,
           `\nMaksymalne zadłużenie: ${MaxZad}`,
           `\nBankructwo: ${Ban}`,
           `\n---Bilans---`,
           `\nNowy skarbiec: ${Nska}`,
           `\nOstateczny bilans: ${Nska - KDwT}`,
           `\n---Kraj---`,
           `\nZmaina stabilności: ${nstab}`,
           `\n---Government capacity---`,
           `\nObecny GovCap: ${GovCap}`,
           `\n%: ${((GovCap / LGovCap)*100).toFixed(2)/1}`
          ], 
            {type: "text"}
        );
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = "Raport";
        document.body.appendChild(a);
        a.click();    
        a.remove();
    }
}