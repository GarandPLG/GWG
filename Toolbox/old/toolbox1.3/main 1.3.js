function Main()
{
    let nazkra = document.getElementById("nazkra").value,
        NazKra = "",
        tura = document.getElementById("tura").value,
        TECH = parseInt(document.getElementById("TECH").value),
        wies = parseInt(document.getElementById("wies").value), 
        miasto = parseInt(document.getElementById("miasto").value),
        ok_wies = parseInt(document.getElementById("ok_wies").value),
        ok_miasto = parseInt(document.getElementById("ok_miasto").value),
        POP_suma = wies + miasto + ok_wies + ok_miasto,
        pn = parseFloat(document.getElementById("pn").value)/100, 
        psp = parseFloat(document.getElementById("psp").value),
        rep = parseInt(document.getElementById("rep").value),
        ska = parseFloat(document.getElementById("ska").value),
        ryn = parseInt(document.getElementById("ryn").value),
        DanWas = parseInt(document.getElementById("DanWas").value),
        stab = parseFloat(document.getElementById("stab").value),
        INF = parseInt(document.getElementById("INF").value),
        ARC = parseInt(document.getElementById("ARC").value),
        CAV = parseInt(document.getElementById("CAV").value),
        ART = parseInt(document.getElementById("ART").value),
        FLO = parseInt(document.getElementById("FLO").value),
        KON = parseInt(document.getElementById("KON").value),
        ZPP = parseFloat(document.getElementById("ZPP").value),
        LP = parseFloat(document.getElementById("LP").value),

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
        inpr = parseInt(document.getElementById("inpr").value),
        inko = parseInt(document.getElementById("inko").value),
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
        Pocz_ZAD = ZAD,
        OPR = parseFloat(document.getElementById("OPR").value),
        WzPo = parseInt(document.getElementById("WzPo").value),
        PrZw = parseFloat(document.getElementById("PrZw").value),
        SpPo = parseInt(document.getElementById("SpPo").value),
        Intrest = 0,
        MaxZad = ((wies + miasto)/10).toFixed(0)/1,
        WskZad = 0,
        Ban = document.getElementById("Ban").innerHTML = "NIE",
        SuRoz = 0,
        Skdwt = 0,
        StDa = parseInt(document.getElementById("StDa").value),
        WarDa = 0,
        OBilWas = 0,

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
        plwies = (pn * wies).toFixed(0)/1, 
        plmiasto = (pn * miasto).toFixed(0)/1, 
        spn = plwies + plmiasto,
        plPOP = POP + plwies + plmiasto,
        
        ok_POP = ok_wies + ok_miasto,
        ok_plwies = (pn/2 * ok_wies).toFixed(0)/1,
        ok_plmiasto = (pn/2 * ok_miasto).toFixed(0)/1, 
        ok_spn = ok_plwies + ok_plmiasto,
        ok_plPOP = ok_POP + ok_plwies + ok_plmiasto,

        plPOP_suma = plPOP + ok_plPOP,

        Wpod = ((psp/2 * (plwies + wies))/50).toFixed(0)/1,
        Mpod = ((psp * (plmiasto + miasto))/50).toFixed(0)/1,
        Lpod = Wpod + Mpod,
        
        ok_Wpod = ((psp/4 * (ok_plwies + ok_wies))/50).toFixed(0)/1,
        ok_Mpod = ((psp/2 * (ok_plmiasto + ok_miasto))/50).toFixed(0)/1,
        ok_Lpod = ok_Wpod + ok_Mpod,

        Pod_suma = Lpod + ok_Lpod,

        StabPod = (psp - 0.15).toFixed(2)/1,

        zstab = 0,
        nstab = 0,

        ARM = FLO * 200 + KON * 25,
        KUA = FLO * 10 + KON * 2, 
        KRA = rFLO * 400 + rKON * 50,
        KA = 0,
        APP = 0,
        StabPob = -LP;
        
    Intrest = (ZAD * OPR/100).toFixed(0)/1;
    ZAD += WzPo + (WzPo * (PrZw/100)).toFixed(0)/1 - SpPo;
    WskZad = ((ZAD / MaxZad)*100).toFixed(2)/1;

    if(ZAD > MaxZad) Ban = "TAK";
    else             Ban = "NIE";

    let Nska = ska + ryn + DanWas + Pod_suma + rep - Intrest;

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
        ARM += (INF+rINF) * 500 + (ARC+rARC) * 500 + (CAV+rCAV) * 500;
        KRA += rINF * 125 + rARC * 125 + rCAV * 125;
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
        ARM += (INF+rINF) * 500 + (ARC+rARC) * 500 + (CAV+rCAV) * 500;
        KRA += rINF * 125 + rARC * 125 + rCAV * 125;
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
        ARM += (INF+rINF) * 500 + (ARC+rARC) * 500 + (CAV+rCAV) * 500 + (ART+rART) * 250;
        KRA += rINF * 125 + rARC * 125 + rCAV * 125 + rART * 125;
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
        ARM += (INF+rINF) * 500 + (ARC+rARC) * 500 + (CAV+rCAV) * 500 + (ART+rART) * 250;
        KRA += rINF * 125 + rARC * 125 + rCAV * 125 + rART * 125;
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
        ARM += (INF+rINF) * 500 + (ARC+rARC) * 500 + (CAV+rCAV) * 500 + (ART+rART) * 250;
        KRA += rINF * 125 + rARC * 125 + rCAV * 125 + rART * 125;
    }

    APP =  parseFloat(((ARM / POP)*100).toFixed(2)/1);
    StabPob += APP;

    if(StabPod > 0)
    {
        zstab += StabPod * 100;
    }
    else if(StabPod < 0)
    {
        zstab += StabPod * 100;
    }

    if(StabPob > 0)
    {
        zstab += StabPob.toFixed(2)/1;
        KA = ((StabPob/10) * (KUA + KRA)).toFixed(0)/1;
        KUA += KA;
    }

    if(ZPP < 90)
    {
        zstab += ((100 - ZPP)/5).toFixed(2)/1;
    }
    Nska -= KUA;

    SuRoz = Nska - ska;
    let Obil = Nska - KDwT + WzPo - SpPo - KRA + inpr - inko;
    Skdwt = Obil - Nska;
    WarDa = ((Obil * StDa)/100).toFixed(0)/1;
    OBilWas = Obil - WarDa;
    nstab = stab - zstab;
        
    if(nstab > 100) nstab = 100;

    document.getElementById("plwies").innerHTML = plwies + wies;
    document.getElementById("plmiasto").innerHTML = plmiasto + miasto;

    document.getElementById("ok_plwies").innerHTML = ok_plwies + ok_wies;
    document.getElementById("ok_plmiasto").innerHTML = ok_plmiasto + ok_miasto;

    document.getElementById("plPOP_suma").innerHTML = plPOP_suma;

    document.getElementById("Wpod").innerHTML = Wpod;
    document.getElementById("Mpod").innerHTML = Mpod;
    document.getElementById("Lpod").innerHTML = Lpod;

    document.getElementById("ok_Wpod").innerHTML = ok_Wpod;
    document.getElementById("ok_Mpod").innerHTML = ok_Mpod;
    document.getElementById("ok_Lpod").innerHTML = ok_Lpod;

    document.getElementById("Pod_suma").innerHTML = Pod_suma;

    document.getElementById("GovCap").innerHTML = GovCap;
    document.getElementById("%GovCap").innerHTML = ((GovCap / LGovCap)*100).toFixed(2)/1;

    document.getElementById("ZADL").innerHTML = ZAD;
    document.getElementById("INTREST").innerHTML = Intrest;
    document.getElementById("MaxZad").innerHTML = MaxZad;
    document.getElementById("WskZad").innerHTML = WskZad;
    document.getElementById("Ban").innerHTML = Ban;

    document.getElementById("zstab").innerHTML = nstab;
    document.getElementById("POP").innerHTML = POP;
    document.getElementById("ok_POP").innerHTML = ok_POP;
    document.getElementById("POP_suma").innerHTML = POP_suma;
    document.getElementById("spn").innerHTML = spn;
    document.getElementById("plPOP").innerHTML = plPOP;
    document.getElementById("ok_spn").innerHTML = ok_spn;
    document.getElementById("ok_plPOP").innerHTML = ok_plPOP;

    document.getElementById("Nska").innerHTML = Nska;
    document.getElementById("Obil").innerHTML = Obil;
    document.getElementById("SuRoz").innerHTML = SuRoz;
    document.getElementById("Skdwt").innerHTML = Skdwt;
    document.getElementById("WarDa").innerHTML = WarDa;
    document.getElementById("OBilWas").innerHTML = OBilWas;

    document.getElementById("oINF").innerHTML = INF + rINF;
    document.getElementById("oARC").innerHTML = ARC + rARC;
    document.getElementById("oCAV").innerHTML = CAV + rCAV;
    document.getElementById("oART").innerHTML = ART + rART;
    document.getElementById("oFLO").innerHTML = FLO + rFLO;
    document.getElementById("oKON").innerHTML = KON + rKON;
    document.getElementById("ARM").innerHTML = ARM;
    document.getElementById("KRA").innerHTML = KRA;
    document.getElementById("APP").innerHTML = APP;
    document.getElementById("KUA").innerHTML = KUA;
    document.getElementById("KA").innerHTML = KA;

    for(let i = 0; i < nazkra.length; i++)
    {
        if(nazkra[i] == "/" || nazkra[i] == "\\" || nazkra[i] == ":" || nazkra[i] == "*" || nazkra[i] == "?" || nazkra[i] == "\"" || nazkra[i] == "<" || nazkra[i] == ">" || nazkra[i] == "|") {}
        else NazKra += nazkra[i];
    }

    if(document.getElementById("kopia").checked)
    {
        let blob = new Blob(
          [`///KRAJ///`,
           `\nNazwa kraju: ${NazKra}`,
           `\nTura: ${tura}`,
           `\nTechnologia: ${TECH}`,
           `\n---Populacja początkowa---`,
           `\nWieś: ${wies}`,
           `\nMiasto: ${miasto}`,
           `\nŁącznie: ${POP}`,
           `\nOkupowana Wieś: ${ok_wies}`,
           `\nOkupowane Miasto: ${ok_miasto}`,
           `\nŁącznie: ${ok_POP}`,
           `\nSuma: ${POP_suma}`,
           `\nPrzyrost naturalny (%): ${pn*100}`,
           `\n---Rozliczenie---`,
           `\nSkarbiec: ${ska}`,
           `\nRynek: ${ryn}`,
           `\nDanina od Wasala/li: ${DanWas}`,
           `\nPodstawowa stawka podatku: ${psp}`,
           `\nReparacje wojenne: ${rep}`,
           `\n---Długi---`,
           `\nZadłużenie: ${Pocz_ZAD}`,
           `\nOprocentowanie (%): ${OPR}`,
           `\n---Armia---`,
           `\nInfantry: ${INF}, T: ${t_INF}`,
           `\nArchers: ${ARC}, T: ${t_ARC}`,
           `\nCavalary: ${CAV}, T: ${t_CAV}`,
           `\nArtillary: ${ART}, T: ${t_ART}`,
           `\nMarynarka: ${FLO}`,
           `\nKonwoje: ${KON}`,
           `\nLimit poboru (%): ${LP}`,
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
           `\nInne przychody: ${inpr}`,
           `\nInne koszta: ${inko}`,

           `\n\n///OUTPUT///`,
           `\n---Populacja---`,
           `\nWieś: ${plwies + wies}`,
           `\nMiasto: ${plmiasto + miasto}`,
           `\nPrzyrost o: ${spn}`,
           `\nŁącznie: ${plPOP}`,
           `\nOkupowana Wieś: ${ok_plwies + ok_wies}`,
           `\nOkupowane Miasto: ${ok_plmiasto + ok_miasto}`,
           `\nPrzyrost o: ${ok_spn}`,
           `\nŁącznie: ${ok_plPOP}`,
           `\nSuma: ${plPOP_suma}`,
           `\n---Podatki---`,
           `\nWieś: ${Wpod}`,
           `\nMiasto: ${Mpod}`,
           `\nŁącznie: ${Lpod}`,
           `\nOkupowana Wieś: ${ok_Wpod}`,
           `\nOkupowane Misto: ${ok_Mpod}`,
           `\nŁącznie: ${ok_Lpod}`,
           `\nSuma: ${Pod_suma}`,
           `\n---Armia---`,
           `\nInfantry: ${INF + rINF}`,
           `\nArchers: ${ARC + rARC}`,
           `\nCavalary: ${CAV + rCAV}`,
           `\nArtillary: ${ART + rART}`,
           `\nMarynarka: ${FLO + rFLO}`,
           `\nKonwoje: ${KON + rKON}`,
           `\nKoszt utrzymania: ${KUA}`,
           `\nKoszt rekrutacji: ${KRA}`,
           `\nKara za rozmiar armii: ${KA}`,
           `\nŻołnierze: ${ARM}`,
           `\n% Poboru: ${APP}`,
           `\n---Zadłużenie---`,
           `\nZadłużenie na: ${ZAD}`,
           `\nKoszt oprocentowania: ${Intrest}`,
           `\nMaksymalne zadłużenie: ${MaxZad}`,
           `\nWskaźnik zadłużenia: ${WskZad}`,
           `\nBankructwo: ${Ban}`,
           `\n---Bilans---`,
           `\nSuma rozliczenia: ${SuRoz}`,
           `\nNowy skarbiec: ${Nska}`,
           `\n------`,
           `\nKoszt działań w turze: ${Skdwt}`,
           `\nOSTATECZNY BILANS: ${Obil}`,
           `\n--- Jeśli jesteś czyimś Wasalem ---`,
           `\nStawka daniny (%): ${StDa}`,
           `\nWartość daniny dla Suwerena: ${WarDa}`,
           `\nOSTATECZNY BILANS: ${OBilWas}`,
           `\n-----------------------------------`,
           `\n---Kraj---`,
           `\nZmaina stabilności: ${nstab}`,
           `\nObecny GovCap: ${GovCap}`,
           `\n% GovCap: ${((GovCap / LGovCap)*100).toFixed(2)/1}`
          ], 
            {type: "text"}
        );
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = `Raport_${NazKra}_${tura}`;
        document.body.appendChild(a);
        a.click();    
        a.remove();
    }
}