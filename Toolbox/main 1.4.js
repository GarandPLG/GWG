function Main()
{
    let nazkra = document.getElementById("nazkra").value,
        NazKra = "",
        tura = document.getElementById("tura").value,
        TECH = parseInt(document.getElementById("TECH").value),
        IPR = parseInt(document.getElementById("IPR").value),
        PRr = parseInt(document.getElementById("PRr").value),
        DR = parseInt(document.getElementById("DR").value),
        SPR = IPR + PRr + DR,
        prPRO = 0,
        nTECH = TECH,
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
        BSmiasto = parseInt(document.getElementById("BSmiasto").value),
        Drogi = parseInt(document.getElementById("Drogi").value),
        WDrogi = parseInt(document.getElementById("WDrogi").value),
        MDrogi = parseInt(document.getElementById("MDrogi").value),

        R_Tdf = parseInt(document.getElementById("R_Tdf").value),
        R_Tr = parseInt(document.getElementById("R_Tr").value),
        R_Ta = parseInt(document.getElementById("R_Ta").value),
        R_Gr = parseInt(document.getElementById("R_Gr").value),
        R_We = parseInt(document.getElementById("R_We").value),
        R_Tu = parseInt(document.getElementById("R_Tu").value),

        EKS = parseInt(document.getElementById("EKS").value),
        NAW = parseInt(document.getElementById("NAW").value),
        ZMK = parseInt(document.getElementById("ZMK").value),
        inpr = parseInt(document.getElementById("inpr").value),
        inko = parseInt(document.getElementById("inko").value),
        KDwT = 
            BProd * 200 + 
            BNmiasto * 2000 + 
            R_Tdf * 750 +
            R_Tr * 825 +
            R_Ta * 1410 + 
            R_Gr * 1275 +
            R_We * 1410 +
            R_Tu * 1470 +
            BSmiasto * 1500 + 
            Drogi * 250 + 
            WDrogi * 500 + 
            MDrogi * 250 + 
            EKS * 200 + 
            NAW * 100 +
            ZMK * 300 +
            DR * 350,

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

        Wpod = ((psp * (plwies + wies))/50).toFixed(0)/1,
        Mpod = ((psp*2 * (plmiasto + miasto))/50).toFixed(0)/1,
        Lpod = Wpod + Mpod,
        
        ok_Wpod = ((psp/2 * (ok_plwies + ok_wies))/50).toFixed(0)/1,
        ok_Mpod = ((psp * (ok_plmiasto + ok_miasto))/50).toFixed(0)/1,
        ok_Lpod = ok_Wpod + ok_Mpod,

        Pod_suma = Lpod + ok_Lpod,
        Nska = 0,
        Obil = 0,
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

    Nska = ska + ryn + DanWas + Pod_suma + rep - Intrest;

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
    Obil = Nska - KDwT + WzPo - SpPo - KRA + inpr - inko;
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
          [`///INPUT///`,
           `\n\n---Kraj---`,
           `\nNazwa kraju: ${NazKra}`,
           `\nJestem wasalem: ${document.getElementById("JW").checked}`,
           `\nTura: ${tura}`,
           `\nTechnologia: ${TECH}`,
           `\nIlość punktów rozwoju: ${IPR}`,
           `\nPunkty rozwoju (roll): ${PRr}`,
           `\nPotrzebne punkty: 400`,
           `\n\n---Populacja początkowa---`,
           `\nWieś: ${wies}`,
           `\nMiasto: ${miasto}`,
           `\nŁącznie: ${POP}`,
           `\nOkupowana Wieś: ${ok_wies}`,
           `\nOkupowane Miasto: ${ok_miasto}`,
           `\nŁącznie: ${ok_POP}`,
           `\nSuma: ${POP_suma}`,
           `\nPrzyrost naturalny (%): ${pn*100}`,
           `\n\n---Rozliczenie---`,
           `\nSkarbiec: ${ska}`,
           `\nRynek: ${ryn}`,
           `\nDanina od Wasala/li: ${DanWas}`,
           `\nPodstawowa stawka podatku: ${psp}`,
           `\nReparacje wojenne: ${rep}`,
           `\nStawka daniny (%): ${StDa}`,
           `\n\n---Armia---`,
           `\nInfantry: ${INF}, T: ${t_INF}`,
           `\nArchers: ${ARC}, T: ${t_ARC}`,
           `\nCavalary: ${CAV}, T: ${t_CAV}`,
           `\nArtillary: ${ART}, T: ${t_ART}`,
           `\nMarynarka: ${FLO}`,
           `\nKonwoje: ${KON}`,
           `\nLimit poboru (%): ${LP}`,
           `\n\n---Kraj---`,
           `\nStabilność: ${stab}`,
           `\nZaspokojenie potrzeb populacji: ${ZPP}`,
           `\nLimit GovCap: ${LGovCap}`,
           `\nIlość prowincji: ${Ipro}`,
           `\nIlość miast: ${Imiast}`,
           `\nIlość prowincji z inną kulturą: ${Ipik}`,
           `\nIlość prowincji z inną religią: ${Ipir}`,
           `\nIlość prowincji niezintegrowanych: ${Ipnz}`,
           `\n\n---Długi---`,
           `\nZadłużenie: ${Pocz_ZAD}`,
           `\nOprocentowanie (%): ${OPR}`,

           `\n\n///KOSZT DZIAŁAŃ W TURZE///`,
           `\n\n---Budynki---`,
           `\nBudynki produkcyjne: ${BProd}`,
           `\nZałożenie Miasta: ${BNmiasto}`,
           `\nBudynki specjalne miast: ${BSmiasto}`,
           `\nDrogi: ${Drogi}`,
           `\nWielkie Drogi: ${WDrogi}`,
           `\nSzlaki morskie: ${MDrogi}`,
           `\n\n---Rozbudowa miasta na biomie---`,
           `\nTemperate deciduous forest: ${R_Tdf}`,
           `\nTemperate rainforest: ${R_Tr}`,
           `\nTaiga: ${R_Ta}`,
           `\nGrassland: ${R_Gr}`,
           `\nWetland: ${R_We}`,
           `\nTundra: ${R_Tu}`,
           `\n\n---Rekrutacja---`,
           `\nInfantry: ${rINF}`,
           `\nArchers: ${rARC}`,
           `\nCavalary: ${rCAV}`,
           `\nArtillery: ${rART}`,
           `\nMarynarka: ${rFLO}`,
           `\nKonwoje: ${rKON}`,
           `\n\n---Pożyczki---`,
           `\nWzięcie pożyczki: ${WzPo}`,
           `\n% Zwrotu: ${PrZw}`,
           `\nSpłacenie pożyczki: ${SpPo}`,
           `\n\n---Kraj---`,
           `\nEkspansja na niezajęte tereny: ${EKS}`,
           `\nNawracanie: ${NAW}`,
           `\nZmiana kultury: ${ZMK}`,
           `\nDofinansowanie rozwoju: ${DR}`,
           `\nInne przychody: ${inpr}`,
           `\nInne koszta: ${inko}`,

           `\n\n///OUTPUT///`,
           `\n\n---Populacja---`,
           `\nWieś: ${plwies + wies}`,
           `\nMiasto: ${plmiasto + miasto}`,
           `\nPrzyrost o: ${spn}`,
           `\nŁącznie: ${plPOP}`,
           `\nOkupowana Wieś: ${ok_plwies + ok_wies}`,
           `\nOkupowane Miasto: ${ok_plmiasto + ok_miasto}`,
           `\nPrzyrost o: ${ok_spn}`,
           `\nŁącznie: ${ok_plPOP}`,
           `\nSuma: ${plPOP_suma}`,
           `\n\n---Podatki---`,
           `\nWieś: ${Wpod}`,
           `\nMiasto: ${Mpod}`,
           `\nŁącznie: ${Lpod}`,
           `\nOkupowana Wieś: ${ok_Wpod}`,
           `\nOkupowane Misto: ${ok_Mpod}`,
           `\nŁącznie: ${ok_Lpod}`,
           `\nSuma: ${Pod_suma}`,
           `\n\n---Zadłużenie---`,
           `\nZadłużenie na: ${ZAD}`,
           `\nKoszt oprocentowania: ${Intrest}`,
           `\nMaksymalne zadłużenie: ${MaxZad}`,
           `\nWskaźnik zadłużenia: ${WskZad}`,
           `\nBankructwo: ${Ban}`,
           `\n\n---Armia---`,
           `\nInfantry: ${INF + rINF}`,
           `\nArchers: ${ARC + rARC}`,
           `\nCavalary: ${CAV + rCAV}`,
           `\nArtillary: ${ART + rART}`,
           `\nMarynarka: ${FLO + rFLO}`,
           `\nKonwoje: ${KON + rKON}`,
           `\n\n---Armia---`,
           `\nŻołnierze i Marynarze: ${ARM}`,
           `\n% Poboru: ${APP}`,
           `\nKoszt utrzymania: ${KUA}`,
           `\nKoszt rekrutacji: ${KRA}`,
           `\nKara za rozmiar armii: ${KA}`,
           `\n\n---Bilans---`,
           `\nSuma rozliczenia: ${SuRoz}`,
           `\nNowy skarbiec: ${Nska}`,
           `\n------`,
           `\nKoszt działań w turze: ${Skdwt}`,
           `\nOSTATECZNY BILANS: ${Obil}`,
           `\nDanina dla Suwerena: ${WarDa}`,
           `\n\n---Kraj---`,
           `\nZmaina stabilności: ${nstab}`,
           `\nIlość punktów rozwoju: ${SPR}`,
           `\nTechnologia: ${nTECH}`,
           `\n% progresu: ${prPRO}`,
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
function NEXTTURA()
{
    document.getElementById("tura").value = parseInt(document.getElementById("tura").value)+1;
    document.getElementById("TECH").value = parseInt(document.getElementById("nTECH").innerHTML);
    document.getElementById("IPR").value = parseInt(document.getElementById("SPR").innerHTML);
    document.getElementById("PRr").value = 0;
    document.getElementById("wies").value = 0;
    document.getElementById("miasto").value = 0;
    document.getElementById("POP").innerHTML = 0;
    document.getElementById("ok_wies").value = 0;
    document.getElementById("ok_miasto").value = 0;
    document.getElementById("ok_POP").innerHTML = 0;
    document.getElementById("POP_suma").innerHTML = 0;
    document.getElementById("ska").value = parseInt(document.getElementById("Obil").innerHTML);
    document.getElementById("ryn").value = 0;
    document.getElementById("DanWas").value = 0;
    document.getElementById("INF").value = parseInt(document.getElementById("oINF").innerHTML);
    document.getElementById("ARC").value = parseInt(document.getElementById("oARC").innerHTML);
    document.getElementById("CAV").value = parseInt(document.getElementById("oCAV").innerHTML);
    document.getElementById("ART").value = parseInt(document.getElementById("oART").innerHTML);
    document.getElementById("FLO").value = parseInt(document.getElementById("oFLO").innerHTML);
    document.getElementById("KON").value = parseInt(document.getElementById("oKON").innerHTML);
    document.getElementById("stab").value = parseFloat(document.getElementById("zstab").innerHTML);
    document.getElementById("ZAD").value = parseInt(document.getElementById("ZADL").innerHTML);

    document.getElementById("BProd").value = 0;
    document.getElementById("BNmiasto").value = 0;
    document.getElementById("BSmiasto").value = 0;
    document.getElementById("Drogi").value = 0;
    document.getElementById("WDrogi").value = 0;
    document.getElementById("MDrogi").value = 0;
    document.getElementById("R_Tdf").value = 0;
    document.getElementById("R_Tr").value = 0;
    document.getElementById("R_Ta").value = 0;
    document.getElementById("R_Gr").value = 0;
    document.getElementById("R_We").value = 0;
    document.getElementById("R_Tu").value = 0;
    document.getElementById("rINF").value = 0;
    document.getElementById("rARC").value = 0;
    document.getElementById("rCAV").value = 0;
    document.getElementById("rART").value = 0;
    document.getElementById("rFLO").value = 0;
    document.getElementById("rKON").value = 0;
    document.getElementById("WzPo").value = 0;
    document.getElementById("SpPo").value = 0;
    document.getElementById("EKS").value = 0;
    document.getElementById("NAW").value = 0;
    document.getElementById("ZMK").value = 0;
    document.getElementById("DR").value = 0;
    document.getElementById("inpr").value = 0;
    document.getElementById("inko").value = 0;

    document.getElementById("plwies").innerHTML = 0;
    document.getElementById("plmiasto").innerHTML = 0;
    document.getElementById("spn").innerHTML = 0;
    document.getElementById("plPOP").innerHTML = 0;
    document.getElementById("ok_plwies").innerHTML = 0;
    document.getElementById("ok_plmiasto").innerHTML = 0;
    document.getElementById("ok_spn").innerHTML = 0;
    document.getElementById("ok_plPOP").innerHTML = 0;
    document.getElementById("plPOP_suma").innerHTML = 0;
    document.getElementById("Wpod").innerHTML = 0;
    document.getElementById("Mpod").innerHTML = 0;
    document.getElementById("Lpod").innerHTML = 0;
    document.getElementById("ok_Wpod").innerHTML = 0;
    document.getElementById("ok_Mpod").innerHTML = 0;
    document.getElementById("ok_Lpod").innerHTML = 0;
    document.getElementById("Pod_suma").innerHTML = 0;
    document.getElementById("ZADL").innerHTML = 0;
    document.getElementById("INTREST").innerHTML = 0;
    document.getElementById("MaxZad").innerHTML = 0;
    document.getElementById("WskZad").innerHTML = 0;
    document.getElementById("oINF").innerHTML = 0;
    document.getElementById("oARC").innerHTML = 0;
    document.getElementById("oCAV").innerHTML = 0;
    document.getElementById("oART").innerHTML = 0;
    document.getElementById("oFLO").innerHTML = 0;
    document.getElementById("oKON").innerHTML = 0;
    document.getElementById("ARM").innerHTML = 0;
    document.getElementById("APP").innerHTML = 0;
    document.getElementById("KUA").innerHTML = 0;
    document.getElementById("KRA").innerHTML = 0;
    document.getElementById("KA").innerHTML = 0;
    document.getElementById("SuRoz").innerHTML = 0;
    document.getElementById("Nska").innerHTML = 0;
    document.getElementById("Skdwt").innerHTML = 0;
    document.getElementById("Obil").innerHTML = 0;
    document.getElementById("WarDa").innerHTML = 0;

    document.getElementById("zstab").innerHTML = 0;
    document.getElementById("SPR").innerHTML = 0;
    document.getElementById("prPRO").innerHTML = 0;
    document.getElementById("GovCap").innerHTML = 0;
    document.getElementById("%GovCap").innerHTML = 0;
}