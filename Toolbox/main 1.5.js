function Main()
{
    let nazkra = document.getElementById("nazkra").value,
        NazKra = "",
        tura = document.getElementById("tura").value,
        TECH = parseInt(document.getElementById("TECH").value),
        IPR = parseInt(document.getElementById("IPR").value),
        PRr = parseInt(document.getElementById("PRr").value),

        wies = parseInt(document.getElementById("wies").value), 
        miasto = parseInt(document.getElementById("miasto").value),
        POP = wies + miasto,
        ok_wies = parseInt(document.getElementById("ok_wies").value),
        ok_miasto = parseInt(document.getElementById("ok_miasto").value),
        ok_POP = ok_wies + ok_miasto,
        POP_suma = POP + ok_POP,
        pn = parseFloat(document.getElementById("pn").value)/100, 

        ska = parseFloat(document.getElementById("ska").value),
        ryn = parseInt(document.getElementById("ryn").value),
        DanWas = parseInt(document.getElementById("DanWas").value),
        psp = parseFloat(document.getElementById("psp").value),
        rep = parseInt(document.getElementById("rep").value),
        StDa = parseInt(document.getElementById("StDa").value),
        
        INF = parseInt(document.getElementById("INF").value),
        t_INF = "I",
        ARC = parseInt(document.getElementById("ARC").value),
        t_ARC = "I",
        CAV = parseInt(document.getElementById("CAV").value),
        t_CAV = "I",
        ART = parseInt(document.getElementById("ART").value),
        t_ART = "0",
        FLO = parseInt(document.getElementById("FLO").value),
        KON = parseInt(document.getElementById("KON").value),
        LP = parseFloat(document.getElementById("LP").value),

        pocz_Uni = parseFloat(document.getElementById("pocz_Uni").value),
        pocz_ObWo = parseFloat(document.getElementById("pocz_ObWo").value),
        Mipodr = parseFloat(document.getElementById("Mipodr").value),
        Mipowidr = parseFloat(document.getElementById("Mipowidr").value),
        Miposzmo = parseFloat(document.getElementById("Miposzmo").value),

        pocz_Pm = parseFloat(document.getElementById("pocz_Pm").value),
        pocz_Za = parseFloat(document.getElementById("pocz_Za").value),
        pocz_Mm = parseFloat(document.getElementById("pocz_Mm").value),
        pocz_Ry = parseFloat(document.getElementById("pocz_Ry").value),
        pocz_Cr = parseFloat(document.getElementById("pocz_Cr").value),
        pocz_Po = parseFloat(document.getElementById("pocz_Po").value),

        stab = parseFloat(document.getElementById("stab").value),
        ZPP = parseFloat(document.getElementById("ZPP").value),
        LGovCap = parseInt(document.getElementById("LGovCap").value),
        Ipro = parseInt(document.getElementById("Ipro").value),
        Imiast = parseInt(document.getElementById("Imiast").value),
        Ipik = parseInt(document.getElementById("Ipik").value),
        Ipir = parseInt(document.getElementById("Ipir").value),
        Ipnz = parseInt(document.getElementById("Ipnz").value),
        Im = parseInt(document.getElementById("Im").value),
        GovCap = Ipro * 1 + Imiast * 1 + Ipik * 1 + Ipir * 1 + Ipnz * 50 + Im * 500,
        GovCap_proc = ((GovCap / LGovCap)*100).toFixed(2)/1,

        ZAD = parseInt(document.getElementById("ZAD").value),
        Pocz_ZAD = ZAD,
        OPR = parseFloat(document.getElementById("OPR").value),

        BProd = parseInt(document.getElementById("BProd").value),
        ZProd = parseInt(document.getElementById("ZProd").value),
        BNmiasto = parseInt(document.getElementById("BNmiasto").value),
        op_BNmiasto = document.getElementById("op_BNmiasto").value,
        Drogi = parseInt(document.getElementById("Drogi").value),
        WDrogi = parseInt(document.getElementById("WDrogi").value),
        MDrogi = parseInt(document.getElementById("MDrogi").value),
        Uni = parseFloat(document.getElementById("Uni").value),
        ObWo = parseFloat(document.getElementById("ObWo").value),

        R_Tdf = parseInt(document.getElementById("R_Tdf").value),
        op_Tdf = document.getElementById("op_Tdf").value,
        R_Tr = parseInt(document.getElementById("R_Tr").value),
        op_Tr = document.getElementById("op_Tr").value,
        R_Ta = parseInt(document.getElementById("R_Ta").value),
        op_Ta = document.getElementById("op_Ta").value,
        R_Gr = parseInt(document.getElementById("R_Gr").value),
        op_Gr = document.getElementById("op_Gr").value,
        R_We = parseInt(document.getElementById("R_We").value),
        op_We = document.getElementById("op_We").value,
        R_Tu = parseInt(document.getElementById("R_Tu").value),
        op_Tu = document.getElementById("op_Tu").value,

        Pm = parseInt(document.getElementById("Pm").value),
        op_Pm = document.getElementById("op_Pm").value,
        Za = parseInt(document.getElementById("Za").value),
        op_Za = document.getElementById("op_Za").value,
        Mm = parseInt(document.getElementById("Mm").value),
        op_Mm = document.getElementById("op_Mm").value,
        Ry = parseInt(document.getElementById("Ry").value),
        op_Ry = document.getElementById("op_Ry").value,
        Cr = parseInt(document.getElementById("Cr").value),
        op_Cr = document.getElementById("op_Cr").value,
        Po = parseInt(document.getElementById("Po").value),
        op_Po = document.getElementById("op_Po").value,

        rINF = parseInt(document.getElementById("rINF").value),
        rARC = parseInt(document.getElementById("rARC").value),
        rCAV = parseInt(document.getElementById("rCAV").value),
        rART = parseInt(document.getElementById("rART").value),
        rFLO = parseInt(document.getElementById("rFLO").value),
        rKON = parseInt(document.getElementById("rKON").value),

        oINF = INF + rINF,
        oARC = ARC + rARC,
        oCAV = CAV + rCAV,
        oART = ART + rART,
        oFLO = FLO + rFLO,
        oKON = KON + rKON,
        
        WzPo = parseInt(document.getElementById("WzPo").value),
        PrZw = parseFloat(document.getElementById("PrZw").value),
        SpPo = parseInt(document.getElementById("SpPo").value),

        EKS = parseInt(document.getElementById("EKS").value),
        NAW = parseInt(document.getElementById("NAW").value),
        ZMK = parseInt(document.getElementById("ZMK").value),
        DR = parseInt(document.getElementById("DR").value),
        SPR = IPR + PRr + DR + pocz_Uni + Uni,
        prPRO = 0,
        nTECH = TECH,
        inpr = parseInt(document.getElementById("inpr").value),
        op_inpr = document.getElementById("op_inpr").value,
        inko = parseInt(document.getElementById("inko").value),
        op_inko = document.getElementById("op_inko").value,

        Limit_Uni = Math.floor(miasto/50000),
        Limit_ObWo = Math.floor(miasto/50000),
        no_LP = 0.00 + 0.05 * (ObWo + pocz_ObWo),
        sum_LP = (LP + no_LP).toFixed(2)/1,

        sum_Uni = pocz_Uni + Uni,
        sum_ObWo = pocz_ObWo + ObWo,
        sum_Pm = Pm + pocz_Pm,
        sum_Za = Za + pocz_Za,
        sum_Mm = Mm + pocz_Mm,
        sum_Ry = Ry + pocz_Ry,
        sum_Cr = Cr + pocz_Cr,
        sum_Po = Po + pocz_Po,
    
        Budynki_KiP =
          Mipodr * 250
        - pocz_Uni * 250
        - pocz_ObWo * 250
        + Mipowidr * 500
        + Miposzmo * 250
        + pocz_Pm * 150
        - pocz_Za * 100
        - pocz_Mm * 200
        + pocz_Ry * 500
        - pocz_Cr * 250
        + pocz_Po * 100,

        DwT = 
          BProd * 200  
        + ZProd * 150 
        + BNmiasto * 1500  
        + R_Tdf * 200 
        + R_Tr * 220 
        + R_Ta * 376  
        + R_Gr * 340 
        + R_We * 376 
        + R_Tu * 392 
        + Drogi * 250  
        + WDrogi * 500  
        + MDrogi * 250  
        + Uni * 1500 
        + ObWo * 1250 
        + Pm * 1500
        + Za * 1000 // +1 do czasu oblegania
        + Mm * 2000 // +2 do czasu oblegania
        + Ry * 2500
        + Cr * 2500
        + Po * 1000 // -1 do czasu oblegania
        + EKS * 100  
        + NAW * 100 
        + ZMK * 300 
        + DR * 350,

        plwies = (pn * wies).toFixed(0)/1, 
        plmiasto = (pn * miasto).toFixed(0)/1, 
        spn = plwies + plmiasto,
        plPOP = POP + plwies + plmiasto,
        cawies = plwies + wies,
        camiasto = plmiasto + miasto,
        
        ok_plwies = (pn/2 * ok_wies).toFixed(0)/1,
        ok_plmiasto = (pn/2 * ok_miasto).toFixed(0)/1, 
        ok_spn = ok_plwies + ok_plmiasto,
        ok_plPOP = ok_POP + ok_plwies + ok_plmiasto,
        ok_cawies = ok_plwies + ok_wies,
        ok_camiasto = ok_plmiasto + ok_miasto,

        plPOP_suma = plPOP + ok_plPOP,

        Wpod = ((psp * (plwies + wies))/50).toFixed(0)/1,
        Mpod = ((psp*4 * (plmiasto + miasto))/50).toFixed(0)/1,
        Lpod = Wpod + Mpod,
        
        ok_Wpod = ((psp/2 * (ok_plwies + ok_wies))/50).toFixed(0)/1,
        ok_Mpod = ((psp*2 * (ok_plmiasto + ok_miasto))/50).toFixed(0)/1,
        ok_Lpod = ok_Wpod + ok_Mpod,

        Pod_suma = Lpod + ok_Lpod,
        Nska = 0,
        Obil = 0,
        StabPod = (psp - 0.15).toFixed(2)/1,

        zstab = 0,
        nstab = 0,

        ARM = (FLO + rFLO) * 200 + (KON + rKON) * 25,
        KUA = FLO * 10 + KON * 2, 
        KRA = rFLO * 400 + rKON * 50,
        KA = 0,
        APP = 0.00,
        StabPob = -LP,

        Intrest = (ZAD * OPR/100).toFixed(0)/1,
        MaxZad = ((wies + miasto)*0.02).toFixed(0)/1,
        WskZad = 0,
        Ban = document.getElementById("Ban").innerHTML = "NIE",
        SuRoz = 0,
        Skdwt = 0,
        WarDa = 0;

    ZAD += WzPo + (WzPo * (PrZw/100)).toFixed(0)/1 - SpPo;
    WskZad = ((ZAD / MaxZad)*100).toFixed(2)/1;

    if(ZAD > MaxZad) Ban = "TAK";
    else             Ban = "NIE";

    Nska = ska + ryn + DanWas + Pod_suma + rep - Intrest + Budynki_KiP;

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

    if(StabPob > no_LP)
    {
        zstab += StabPob.toFixed(2)/1;
        KA = (((StabPob - no_LP)/10) * (KUA + KRA)).toFixed(0)/1;
    }

    if(ZPP < 90)
    {
        zstab += ((100 - ZPP)/5).toFixed(2)/1;
    }
    Nska -= KUA + KA;

    SuRoz = Nska - ska;
    Obil = Nska - DwT + WzPo - SpPo - KRA + inpr - inko;
    nstab = (stab - zstab).toFixed(2)/1;
    Skdwt = Obil - Nska;

    if(document.getElementById("JW").checked)
    {
        WarDa = ((Obil * StDa)/100).toFixed(0)/1;
        Obil -= WarDa;
    }
 
    if(nstab > 100) nstab = 100;

    nTECH += Math.floor(SPR/400);
    SPR -= 400 * Math.floor(SPR/400);
    prPRO = ((SPR/400)*100).toFixed(2)/1;

    document.getElementById("plwies").innerHTML = cawies;
    document.getElementById("plmiasto").innerHTML = camiasto;

    document.getElementById("ok_plwies").innerHTML = ok_cawies;
    document.getElementById("ok_plmiasto").innerHTML = ok_camiasto;

    document.getElementById("plPOP_suma").innerHTML = plPOP_suma;

    document.getElementById("Wpod").innerHTML = Wpod;
    document.getElementById("Mpod").innerHTML = Mpod;
    document.getElementById("Lpod").innerHTML = Lpod;

    document.getElementById("ok_Wpod").innerHTML = ok_Wpod;
    document.getElementById("ok_Mpod").innerHTML = ok_Mpod;
    document.getElementById("ok_Lpod").innerHTML = ok_Lpod;

    document.getElementById("Pod_suma").innerHTML = Pod_suma;

    document.getElementById("GovCap").innerHTML = GovCap;
    document.getElementById("%GovCap").innerHTML = GovCap_proc;

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

    document.getElementById("Limit_Uni").innerHTML = Limit_Uni;
    document.getElementById("Limit_ObWo").innerHTML = Limit_ObWo;
    document.getElementById("sum_Uni").innerHTML = sum_Uni;
    document.getElementById("sum_ObWo").innerHTML = sum_ObWo;
    document.getElementById("sum_LP").innerHTML = sum_LP;

    document.getElementById("sum_Pm").innerHTML = sum_Pm;
    document.getElementById("sum_Za").innerHTML = sum_Za;
    document.getElementById("sum_Mm").innerHTML = sum_Mm;
    document.getElementById("sum_Ry").innerHTML = sum_Ry;
    document.getElementById("sum_Cr").innerHTML = sum_Cr;
    document.getElementById("sum_Po").innerHTML = sum_Po;

    document.getElementById("oINF").innerHTML = oINF;
    document.getElementById("oARC").innerHTML = oARC;
    document.getElementById("oCAV").innerHTML = oCAV;
    document.getElementById("oART").innerHTML = oART;
    document.getElementById("oFLO").innerHTML = oFLO;
    document.getElementById("oKON").innerHTML = oKON;
    document.getElementById("ARM").innerHTML = ARM;
    document.getElementById("KRA").innerHTML = KRA;
    document.getElementById("APP").innerHTML = APP;
    document.getElementById("KUA").innerHTML = KUA;
    document.getElementById("KA").innerHTML = KA;

    document.getElementById("SPR").innerHTML = SPR;
    document.getElementById("nTECH").innerHTML = nTECH;
    document.getElementById("prPRO").innerHTML = prPRO;

    for(let i = 0; i < nazkra.length; i++)
    {
        if(nazkra[i] == "/" || nazkra[i] == "\\" || nazkra[i] == ":" || nazkra[i] == "*" || nazkra[i] == "?" || nazkra[i] == "\"" || nazkra[i] == "<" || nazkra[i] == ">" || nazkra[i] == "|") {}
        else NazKra += nazkra[i];
    }

    if(document.getElementById("kopia").checked)
    {
        let blob = new Blob(
          [`Wersja: 1.5`,
           `\n\n//////////////\n///I. INPUT///\n//////////////`,
           `\n\n---1. Kraj---`,
           `\nNazwa kraju: ${NazKra}`,
           `\nJestem wasalem: ${document.getElementById("JW").checked}`,
           `\nTura: ${tura}`,
           `\nTechnologia: ${TECH}`,
           `\nIlość punktów rozwoju: ${IPR}`,
           `\nPunkty rozwoju (roll): ${PRr}`,
           `\nPotrzebne punkty: 400`,
           `\n\n---2. Populacja początkowa---`,
           `\nWieś: ${wies}`,
           `\nMiasto: ${miasto}`,
           `\nŁącznie: ${POP}`,
           `\nOkupowana Wieś: ${ok_wies}`,
           `\nOkupowane Miasto: ${ok_miasto}`,
           `\nŁącznie: ${ok_POP}`,
           `\nSuma: ${POP_suma}`,
           `\nPrzyrost naturalny (%): ${pn*100}`,
           `\n\n---3. Rozliczenie---`,
           `\nSkarbiec: ${ska}`,
           `\nRynek: ${ryn}`,
           `\nDanina od Wasala/li: ${DanWas}`,
           `\nPodstawowa stawka podatku: ${psp}`,
           `\nReparacje wojenne: ${rep}`,
           `\nStawka daniny (%): ${StDa}`,
           `\n\n---4. Armia---`,
           `\nInfantry: ${INF}, T: ${t_INF}`,
           `\nArchers: ${ARC}, T: ${t_ARC}`,
           `\nCavalary: ${CAV}, T: ${t_CAV}`,
           `\nArtillary: ${ART}, T: ${t_ART}`,
           `\nMarynarka: ${FLO}`,
           `\nKonwoje: ${KON}`,
           `\nLimit poboru (%): ${LP}`,
           `\n\n---5. Pocz. ilość budynków / drogi---`,
           `\nUniwersytet: ${pocz_Uni}`,
           `\nObóz wojskowy: ${pocz_ObWo}`,
           `\nMiasta połączone drogami: ${Mipodr}`,
           `\nMiasta połączone wielkimi drogami: ${Mipowidr}`,
           `\nMiasta połączone szlakami morskimi: ${Miposzmo}`,
           `\n\n---6. Pocz. ilość budynków specjalnych miast---`,
           `\nPort morski: ${pocz_Pm}`,
           `\nZamek: ${pocz_Za}`,
           `\nMury miejskie: ${pocz_Mm}`,
           `\nRynek: ${pocz_Ry}`,
           `\nCentrum religijne: ${pocz_Cr}`,
           `\nPodmiasto: ${pocz_Po}`,
           `\n\n---7. Kraj---`,
           `\nStabilność: ${stab}`,
           `\nZaspokojenie potrzeb populacji: ${ZPP}`,
           `\nLimit GovCap: ${LGovCap}`,
           `\nIlość prowincji: ${Ipro}`,
           `\nIlość miast: ${Imiast}`,
           `\nIlość prowincji z inną kulturą: ${Ipik}`,
           `\nIlość prowincji z inną religią: ${Ipir}`,
           `\nIlość prowincji niezintegrowanych: ${Ipnz}`,
           `\nIlość pmarchii: ${Im}`,
           `\n\n---8. Długi---`,
           `\nZadłużenie: ${Pocz_ZAD}`,
           `\nOprocentowanie (%): ${OPR}`,

           `\n\n///////////////////////////\n///II. Działania w Turze///\n///////////////////////////`,
           `\n\n---1. Budynki---`,
           `\nZbudowane budynki: ${BProd}`,
           `\nZburzone budynki: ${ZProd}`,
           `\nDrogi: ${Drogi}`,
           `\nWielkie Drogi: ${WDrogi}`,
           `\nSzlaki morskie: ${MDrogi}`,
           `\nUniwersytet: ${Uni}`,
           `\nObóz wojskowy: ${ObWo}`,
           `\n\n---2. Założenie i rozbudowa miasta---`,
           `\nZałożenie Miasta: ${BNmiasto} > ${op_BNmiasto}`,
           `\nTemperate deciduous forest: ${R_Tdf} > ${op_Tdf}`,
           `\nTemperate rainforest: ${R_Tr} > ${op_Tr}`,
           `\nTaiga: ${R_Ta} > ${op_Ta}`,
           `\nGrassland: ${R_Gr} > ${op_Gr}`,
           `\nWetland: ${R_We} > ${op_We}`,
           `\nTundra: ${R_Tu} > ${op_Tu}`,
           `\n\n---3. Budynki specjalne miast---`,
           `\nPort morski: ${Pm} > ${op_Pm}`,
           `\nZamek: ${Za} > ${op_Za}`,
           `\nMury miejskie: ${Mm} > ${op_Mm}`,
           `\nRynek: ${Ry} > ${op_Ry}`,
           `\nCentrum religijne: ${Cr} > ${op_Cr}`,
           `\nPodmiasto: ${Po} > ${op_Po}`,
           `\n\n---4. Rekrutacja---`,
           `\nInfantry: ${rINF}`,
           `\nArchers: ${rARC}`,
           `\nCavalary: ${rCAV}`,
           `\nArtillery: ${rART}`,
           `\nMarynarka: ${rFLO}`,
           `\nKonwoje: ${rKON}`,
           `\n\n---5. Pożyczki---`,
           `\nWzięcie pożyczki: ${WzPo}`,
           `\n% Zwrotu: ${PrZw}`,
           `\nSpłacenie pożyczki: ${SpPo}`,
           `\n\n---6. Kraj---`,
           `\nEkspansja na niezajęte tereny: ${EKS}`,
           `\nNawracanie: ${NAW}`,
           `\nZmiana kultury: ${ZMK}`,
           `\nDofinansowanie rozwoju: ${DR}`,
           `\nInne przychody: ${inpr} > ${op_inpr}`,
           `\nInne koszta: ${inko} > ${op_inko}`,

           `\n\n/////////////////\n///III. Output///\n/////////////////`,
           `\n\n---1. Populacja---`,
           `\nWieś: ${cawies}`,
           `\nMiasto: ${camiasto}`,
           `\nPrzyrost o: ${spn}`,
           `\nŁącznie: ${plPOP}`,
           `\nOkupowana Wieś: ${ok_cawies}`,
           `\nOkupowane Miasto: ${ok_camiasto}`,
           `\nPrzyrost o: ${ok_spn}`,
           `\nŁącznie: ${ok_plPOP}`,
           `\nSuma: ${plPOP_suma}`,
           `\n\n---2. Podatki---`,
           `\nWieś: ${Wpod}`,
           `\nMiasto: ${Mpod}`,
           `\nŁącznie: ${Lpod}`,
           `\nOkupowana Wieś: ${ok_Wpod}`,
           `\nOkupowane Misto: ${ok_Mpod}`,
           `\nŁącznie: ${ok_Lpod}`,
           `\nSuma: ${Pod_suma}`,
           `\n\n---3. Zadłużenie---`,
           `\nZadłużenie na: ${ZAD}`,
           `\nKoszt oprocentowania: ${Intrest}`,
           `\nMaksymalne zadłużenie: ${MaxZad}`,
           `\nWskaźnik zadłużenia: ${WskZad}`,
           `\nBankructwo: ${Ban}`,
           `\n\n---4. Armia---`,
           `\nInfantry: ${INF + rINF}`,
           `\nArchers: ${ARC + rARC}`,
           `\nCavalary: ${CAV + rCAV}`,
           `\nArtillary: ${ART + rART}`,
           `\nMarynarka: ${FLO + rFLO}`,
           `\nKonwoje: ${KON + rKON}`,
           `\n\n---5. Armia---`,
           `\nŻołnierze i Marynarze: ${ARM}`,
           `\n% Poboru: ${APP}`,
           `\nLimit poboru (%): ${sum_LP}`,
           `\nKoszt utrzymania: ${KUA}`,
           `\nKoszt rekrutacji: ${KRA}`,
           `\nKara za rozmiar armii: ${KA}`,
           `\n\n---6. Budynki specjalne miast---`,
           `\nPort morski: ${sum_Pm}`,
           `\nZamek: ${sum_Za}`,
           `\nMury miejskie: ${sum_Mm}`,
           `\nRynek: ${sum_Ry}`,
           `\nCentrum religijne: ${sum_Cr}`,
           `\nPodmiasto: ${sum_Po}`,
           `\n\n---7. Budynki---`,
           `\nUniwersytet: ${sum_Uni}/${Limit_Uni}`,
           `\nObóz wojskowy: ${sum_ObWo}/${Limit_ObWo}`,
           `\n\n---8. Bilans---`,
           `\nSuma rozliczenia: ${SuRoz}`,
           `\nNowy skarbiec: ${Nska}`,
           `\n------`,
           `\nKoszt działań w turze: ${Skdwt}`,
           `\nOSTATECZNY BILANS: ${Obil}`,
           `\nDanina dla Suwerena: ${WarDa}`,
           `\n\n---9. Kraj---`,
           `\nZmaina stabilności: ${nstab}`,
           `\nIlość punktów rozwoju: ${SPR}`,
           `\nTechnologia: ${nTECH}`,
           `\nProgres rozwoju: ${prPRO}%`,
           `\nObecny GovCap: ${GovCap}`,
           `\n% GovCap: ${GovCap_proc}`,
           `\n\nKopia:             ${NazKra}|${tura}|${TECH}|${IPR}|${PRr}|${wies}|${miasto}|${ok_wies}|${ok_miasto}|${pn*100}|${ska}|${ryn}|${DanWas}|${psp}|${rep}|${StDa}|${INF}|${ARC}|${CAV}|${ART}|${FLO}|${KON}|${LP}|${pocz_Uni}|${pocz_ObWo}|${Mipodr}|${Mipowidr}|${Miposzmo}|${pocz_Pm}|${pocz_Za}|${pocz_Mm}|${pocz_Ry}|${pocz_Cr}|${pocz_Po}|${stab}|${ZPP}|${LGovCap}|${Ipro}|${Imiast}|${Ipik}|${Ipir}|${Ipnz}|${Im}|${Pocz_ZAD}|${OPR}|${BProd}|${ZProd}|${Drogi}|${WDrogi}|${MDrogi}|${Uni}|${ObWo}|${BNmiasto}|${op_BNmiasto}|${R_Tdf}|${op_Tdf}|${R_Tr}|${op_Tr}|${R_Ta}|${op_Ta}|${R_Gr}|${op_Gr}|${R_We}|${op_We}|${R_Tu}|${op_Tu}|${Pm}|${op_Pm}|${Za}|${op_Za}|${Mm}|${op_Mm}|${Ry}|${op_Ry}|${Cr}|${op_Cr}|${Po}|${op_Po}|${rINF}|${rARC}|${rCAV}|${rART}|${rFLO}|${rKON}|${WzPo}|${PrZw}|${SpPo}|${EKS}|${NAW}|${ZMK}|${DR}|${inpr}|${op_inpr}|${inko}|${op_inko}|`,
           `\nDo następnej tury: ${NazKra}|${++tura}|${nTECH}|${SPR}|${0}|${cawies}|${camiasto}|${ok_cawies}|${ok_camiasto}|${pn*100}|${Obil}|${0}|${0}|${psp}|${rep}|${StDa}|${oINF}|${oARC}|${oCAV}|${oART}|${oFLO}|${oKON}|${LP}|${sum_Uni}|${sum_ObWo}|${Mipodr}|${Mipowidr}|${Miposzmo}|${sum_Pm}|${sum_Za}|${sum_Mm}|${sum_Ry}|${sum_Cr}|${sum_Po}|${nstab}|${ZPP}|${LGovCap}|${Ipro+EKS}|${Imiast+BNmiasto}|${Ipik}|${Ipir}|${Ipnz}|${Im}|${ZAD}|${OPR}|${0}|${0}|${0}|${0}|${0}|${0}|${0}|${0}|${""}|${0}|${""}|${0}|${""}|${0}|${""}|${0}|${""}|${0}|${""}|${0}|${""}|${0}|${""}|${0}|${""}|${0}|${""}|${0}|${""}|${0}|${""}|${0}|${""}|${0}|${0}|${0}|${0}|${0}|${0}|${0}|${PrZw}|${0}|${0}|${0}|${0}|${0}|${inpr}|${op_inpr}|${inko}|${op_inko}|`
          ], 
            {type: "text"}
        );
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = `Raport_${NazKra}_${--tura}`;
        document.body.appendChild(a);
        a.click();    
        a.remove();
    }
}
function Import()
{
    let IMPO = document.getElementById("IMPO").value,
        wart = "",
        tab = []
        ind = 0
        xyz = 0;
    for(let i = 0; i < IMPO.length; i++)
    {
        if(IMPO[i]!="|")
        {
            wart += IMPO[i];
        }
        else
        {
            tab[ind] = wart;
            ind++;
            wart = "";
        }
    }

    document.getElementById("nazkra").value = tab[xyz++],
    document.getElementById("tura").value = tab[xyz++];
    document.getElementById("TECH").value = tab[xyz++];
    document.getElementById("IPR").value = tab[xyz++];
    document.getElementById("PRr").value = tab[xyz++];
    document.getElementById("wies").value = tab[xyz++];
    document.getElementById("miasto").value = tab[xyz++];
    document.getElementById("ok_wies").value = tab[xyz++];
    document.getElementById("ok_miasto").value = tab[xyz++];
    document.getElementById("pn").value = tab[xyz++];
    document.getElementById("ska").value = tab[xyz++];
    document.getElementById("ryn").value = tab[xyz++];
    document.getElementById("DanWas").value = tab[xyz++];
    document.getElementById("psp").value = tab[xyz++];
    document.getElementById("rep").value = tab[xyz++];
    document.getElementById("StDa").value = tab[xyz++];
    document.getElementById("INF").value = tab[xyz++];
    document.getElementById("ARC").value = tab[xyz++];
    document.getElementById("CAV").value = tab[xyz++];
    document.getElementById("ART").value = tab[xyz++];
    document.getElementById("FLO").value = tab[xyz++];
    document.getElementById("KON").value = tab[xyz++];
    document.getElementById("LP").value = tab[xyz++];
    document.getElementById("pocz_Uni").value = tab[xyz++];
    document.getElementById("pocz_ObWo").value = tab[xyz++];
    document.getElementById("Mipodr").value = tab[xyz++];
    document.getElementById("Mipowidr").value = tab[xyz++];
    document.getElementById("Miposzmo").value = tab[xyz++];
    document.getElementById("pocz_Pm").value = tab[xyz++];
    document.getElementById("pocz_Za").value = tab[xyz++];
    document.getElementById("pocz_Mm").value = tab[xyz++];
    document.getElementById("pocz_Ry").value = tab[xyz++];
    document.getElementById("pocz_Cr").value = tab[xyz++];
    document.getElementById("pocz_Po").value = tab[xyz++];
    document.getElementById("stab").value = tab[xyz++];
    document.getElementById("ZPP").value = tab[xyz++];
    document.getElementById("LGovCap").value = tab[xyz++];
    document.getElementById("Ipro").value = tab[xyz++];
    document.getElementById("Imiast").value = tab[xyz++];
    document.getElementById("Ipik").value = tab[xyz++];
    document.getElementById("Ipir").value = tab[xyz++];
    document.getElementById("Ipnz").value = tab[xyz++];
    document.getElementById("Im").value = tab[xyz++];
    document.getElementById("ZAD").value = tab[xyz++];
    document.getElementById("OPR").value = tab[xyz++];

    document.getElementById("BProd").value = tab[xyz++];
    document.getElementById("ZProd").value = tab[xyz++];
    document.getElementById("Drogi").value = tab[xyz++];
    document.getElementById("WDrogi").value = tab[xyz++];
    document.getElementById("MDrogi").value = tab[xyz++];
    document.getElementById("Uni").value = tab[xyz++];
    document.getElementById("ObWo").value = tab[xyz++];
    document.getElementById("BNmiasto").value = tab[xyz++];
    document.getElementById("op_BNmiasto").value = tab[xyz++];
    document.getElementById("R_Tdf").value = tab[xyz++];
    document.getElementById("op_Tdf").value = tab[xyz++];
    document.getElementById("R_Tr").value = tab[xyz++];
    document.getElementById("op_Tr").value = tab[xyz++];
    document.getElementById("R_Ta").value = tab[xyz++];
    document.getElementById("op_Ta").value = tab[xyz++];
    document.getElementById("R_Gr").value = tab[xyz++];
    document.getElementById("op_Gr").value = tab[xyz++];
    document.getElementById("R_We").value = tab[xyz++];
    document.getElementById("op_We").value = tab[xyz++];
    document.getElementById("R_Tu").value = tab[xyz++];
    document.getElementById("op_Tu").value = tab[xyz++];
    document.getElementById("Pm").value = tab[xyz++];
    document.getElementById("op_Pm").value = tab[xyz++];
    document.getElementById("Za").value = tab[xyz++];
    document.getElementById("op_Za").value = tab[xyz++];
    document.getElementById("Mm").value = tab[xyz++];
    document.getElementById("op_Mm").value = tab[xyz++];
    document.getElementById("Ry").value = tab[xyz++];
    document.getElementById("op_Ry").value = tab[xyz++];
    document.getElementById("Cr").value = tab[xyz++];
    document.getElementById("op_Cr").value = tab[xyz++];
    document.getElementById("Po").value = tab[xyz++];
    document.getElementById("op_Po").value = tab[xyz++];
    document.getElementById("rINF").value = tab[xyz++];
    document.getElementById("rARC").value = tab[xyz++];
    document.getElementById("rCAV").value = tab[xyz++];
    document.getElementById("rART").value = tab[xyz++];
    document.getElementById("rFLO").value = tab[xyz++];
    document.getElementById("rKON").value = tab[xyz++];
    document.getElementById("WzPo").value = tab[xyz++];
    document.getElementById("PrZw").value = tab[xyz++];
    document.getElementById("SpPo").value = tab[xyz++];
    document.getElementById("EKS").value = tab[xyz++];
    document.getElementById("NAW").value = tab[xyz++];
    document.getElementById("ZMK").value = tab[xyz++];
    document.getElementById("DR").value = tab[xyz++];
    document.getElementById("inpr").value = tab[xyz++];
    document.getElementById("op_inpr").value = tab[xyz++];
    document.getElementById("inko").value = tab[xyz++];
    document.getElementById("op_inko").value = tab[xyz++];
}