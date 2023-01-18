function main()
{
    //p_ - produkcja
    //z_ - zapotrzebowanie
    //r_ - rozliczenie
    //c_ - realna cena
    //p_r_ - rozliczenie dla populacji
    //p_z_ - zapotrzebowanie dla populacji
    //p_p_ - produkcja dla populacji
    //m_ - mnożnik
    let TECH = parseInt(document.getElementById("TECH").value),
        tura = parseInt(document.getElementById("tura").value),
        CzUC = parseInt(document.getElementById("CzUC").value),
        T = parseInt(document.getElementById("T").value),       Kw = parseInt(document.getElementById("Kw").value),   Kze = parseInt(document.getElementById("Kze").value),    // Tartak, Kopalnia węgla, Kopalnia żelaza, 
        Ks = parseInt(document.getElementById("Ks").value),     Kzl = parseInt(document.getElementById("Kzl").value), Zsp = parseInt(document.getElementById("Zsp").value),    // Kopalnia siarki, Kopalnia złota, Zakład spożywczy
        Fw = parseInt(document.getElementById("Fw").value),     Fm = parseInt(document.getElementById("Fm").value),   Hsz = parseInt(document.getElementById("Hsz").value),    // Fabryka włókiennicza, Fabryka mebli, Huta szkła
        N = parseInt(document.getElementById("N").value),       P = parseInt(document.getElementById("P").value),     Zch = parseInt(document.getElementById("Zch").value),    // Narzędziownia, Papiernia, Zakład chemiczny
        Zsy = parseInt(document.getElementById("Zsy").value),   Hst = parseInt(document.getElementById("Hst").value), Sd = parseInt(document.getElementById("Sd").value),      // Zakład syntetyczny, Huta stali, Stocznia (Drewno)
        Ss = parseInt(document.getElementById("Ss").value),     Zz = parseInt(document.getElementById("Zz").value),   Za = parseInt(document.getElementById("Za").value),      // Stocznia (Stal), Zakład zbrojeniowy, Zakład amunicyjny 
        Fz = parseInt(document.getElementById("Fz").value),     Fps = parseInt(document.getElementById("Fps").value), Fr = parseInt(document.getElementById("Fr").value),      // Farma żyta, Farma pszenicy, Farma ryżu
        Fk = parseInt(document.getElementById("Fk").value),     Fpr = parseInt(document.getElementById("Fpr").value), R = parseInt(document.getElementById("R").value),        // Farma kukucolspan="8"rydzy, Farma prosa, Ranczo
        Mr = parseInt(document.getElementById("Mr").value),     Pk = parseInt(document.getElementById("Pk").value),   Pbaw = parseInt(document.getElementById("Pbaw").value),  // Molo rybackie, Plantacja kawy, Plantacja bawełny
        Pbar = parseInt(document.getElementById("Pbar").value), Ph = parseInt(document.getElementById("Ph").value),   Pt = parseInt(document.getElementById("Pt").value),      // Plantacja barwników, Plantacja herbaty, Plantacja tytoniu	
        Pc = parseInt(document.getElementById("Pc").value),     Po = parseInt(document.getElementById("Po").value),   Pj = parseInt(document.getElementById("Pj").value),      // Plantacja cukru, Plantacja owoców, Plantacja jedwabiu
        Ko = parseInt(document.getElementById("Ko").value),                                                                                                                    // Kopalnia ołowiu
        POP = parseInt(document.getElementById("POP").value),   ARM = 0,                                              APP = 0,                                                 // Populacja, Armia (ilość żołnierzy), % żołnierzy od populacji
        INF = parseInt(document.getElementById("INF").value),   CAV = parseInt(document.getElementById("CAV").value), ART = parseInt(document.getElementById("ART").value),    // Piechota, Kawaleria, Artyleria
        ARC = parseInt(document.getElementById("ARC").value),   FLO = parseInt(document.getElementById("FLO").value), KON = parseInt(document.getElementById("KON").value),    // Łucznicy, Marynarka, Konwoje 
        KosBud = 0,                                                                                                                                                            // Koszt utrzymania budynków
        Gor = 0, Rob = 0, Rol = 0, Pla = 0, pr_Gor = 0, pr_Rob = 0, pr_Rol = 0, pr_Pla = 0, pr_zaw = 0,                                                                        // Górnicy, Robotnicy, Rolnicy, Plantatorzy
        Pib = parseInt(document.getElementById("Pib").value),   Pik = parseInt(document.getElementById("Pik").value),                                                          // Początkowa ilość budynków, Początkowa ilość kopalnii
        Ub = parseInt(document.getElementById("Ub").value),     Uk = parseInt(document.getElementById("Uk").value),                                                            // Usuwanie budynków, Usuwanie kopalni


        p_Ps = 0, z_Ps = 0, r_Ps = 0, c_Ps = 0,  p_U = 0, z_U = 0, r_U = 0, c_U = 0,          p_Me = 0, z_Me = 0, r_Me = 0, c_Me = 0,      p_R = 0, z_R = 0, r_R = 0, c_R = 0,          // Produkty spożywcze, Ubranie, Mebel, Ryba
        p_Tk = 0, z_Tk = 0, r_Tk = 0, c_Tk = 0,  p_Zb = 0, z_Zb = 0, r_Zb = 0, c_Zb = 0,      p_Pa = 0, z_Pa = 0, r_Pa = 0, c_Pa = 0,      p_D = 0, z_D = 0, r_D = 0, c_D = 0,          // Tkanina, Zboże, Papier, Drewno
        p_Ze = 0, z_Ze = 0, r_Ze = 0, c_Ze = 0,  p_We = 0, z_We = 0, r_We = 0, c_We = 0,      p_Nar = 0, z_Nar = 0, r_Nar = 0, c_Nar = 0,  p_Ba = 0, z_Ba = 0, r_Ba = 0, c_Ba = 0,      // Żelazo, Węgiel, Narzędzia, Barwnik
        p_Mw = 0, z_Mw = 0, r_Mw = 0, c_Mw = 0,  p_Naw = 0, z_Naw = 0, r_Naw = 0, c_Naw = 0,  p_Sz = 0, z_Sz = 0, r_Sz = 0, c_Sz = 0,      p_Td = 0, z_Td = 0, r_Td = 0, c_Td = 0,      // Materiały wybuchowe, Nawóz, Szkło, Twarde drewno
        p_Ol = 0, z_Ol = 0, r_Ol = 0, c_Ol = 0,  p_J = 0, z_J = 0, r_J = 0, c_J = 0,          p_St = 0, z_St = 0, r_St = 0, c_St = 0,      p_S = 0, z_S = 0, r_S = 0, c_S = 0,          // Ołów, Jedwab, Stal, Siarka
        p_K = 0, z_K = 0, r_K = 0, c_K =0,       p_Ow = 0, z_Ow = 0, r_Ow = 0, c_Ow = 0,      p_Zl = 0,           r_Zl = 0,                p_Al = 0, z_Al = 0, r_Al = 0, c_Al = 0,      // Kawa, Owoc, Złoto, Alkohol
        p_Ul = 0, z_Ul = 0, r_Ul = 0, c_Ul = 0,  p_Ml = 0, z_Ml = 0, r_Ml = 0, c_Ml = 0,      p_Mi = 0, z_Mi = 0, r_Mi = 0, c_Mi = 0,      p_Po = 0, z_Po = 0, r_Po = 0, c_Po = 0,      // Ubranie luksusowe, Mebel luksusowe, Mięso, Porcelana
        p_C = 0, z_C = 0, r_C = 0, c_C = 0,      p_H = 0, z_H = 0, r_H = 0, c_H = 0,          p_Ty = 0, z_Ty = 0, r_Ty = 0, c_Ty = 0,      p_Wi = 0, z_Wi = 0, r_Wi = 0, c_Wi = 0,      // Cukier, Herbata, Tytoń, Wino
        p_Br = 0, z_Br = 0, r_Br = 0, c_Br = 0,  p_Ar = 0, z_Ar = 0, r_Ar = 0, c_Ar = 0,      p_Am = 0, z_Am = 0, r_Am = 0, c_Am = 0,      p_Sta = 0, z_Sta = 0, r_Sta = 0, c_Sta = 0,  // Broń, Artyleria, Amunicja, Statek
    
        p_r_Ps = 0, p_r_Tk = 0, p_r_K = 0, p_r_Ul = 0, p_r_C = 0, p_r_U = 0, p_r_Zb = 0, p_r_We = 0,
        p_r_Ow = 0, p_r_Ml = 0, p_r_H = 0, p_r_Me = 0, p_r_Pa = 0, p_r_Sz = 0, p_r_Mi = 0, p_r_Ty = 0,
        p_r_R = 0, p_r_D = 0, p_r_Al = 0, p_r_Wi = 0, p_r_Po = 0,

        m_Ps = parseFloat(document.getElementById("m_Ps").value), m_Tk = parseFloat(document.getElementById("m_Tk").value), m_K = parseFloat(document.getElementById("m_K").value), 
        m_Ul = parseFloat(document.getElementById("m_Ul").value), m_C = parseFloat(document.getElementById("m_C").value),   m_U = parseFloat(document.getElementById("m_U").value), 
        m_Zb = parseFloat(document.getElementById("m_Zb").value), m_We = parseFloat(document.getElementById("m_We").value), m_Ow = parseFloat(document.getElementById("m_Ow").value), 
        m_Ml = parseFloat(document.getElementById("m_Ml").value), m_H = parseFloat(document.getElementById("m_H").value),   m_Me = parseFloat(document.getElementById("m_Me").value), 
        m_Pa = parseFloat(document.getElementById("m_Pa").value), m_Sz = parseFloat(document.getElementById("m_Sz").value), m_Mi = parseFloat(document.getElementById("m_Mi").value),
        m_Ty = parseFloat(document.getElementById("m_Ty").value), m_R = parseFloat(document.getElementById("m_R").value),   m_D = parseFloat(document.getElementById("m_D").value), 
        m_Al = parseFloat(document.getElementById("m_Al").value), m_Wi = parseFloat(document.getElementById("m_Wi").value), m_Po = parseFloat(document.getElementById("m_Po").value),

    /*ZAPOTRZEBOWANIE POPULACJI*/
    /*Zboże*/                 p_z_Zb = 0, //((POP / 6250).toFixed(0)/1)
    /*Alkohol*/               p_z_Al = 0, //((POP / 18270).toFixed(0)/1)
    /*Ubrania*/               p_z_U = 0, //((POP / 15835).toFixed(0)/1)
    /*Meble*/                 p_z_Me = 0, //((POP / 20790).toFixed(0)/1)
    /*Drewno*/                p_z_D = 0, //((POP / 35675).toFixed(0)/1)
    /*Tkaniny*/               p_z_Tk = 0, //((POP / 28240).toFixed(0)/1)
    /*Ryba*/                  p_z_R = 0, //((POP / 36055).toFixed(0)/1)
    /*Tytoń*/                 p_z_Ty = 0, //((POP / 105905).toFixed(0)/1)
    /*Produkty sporzywcze*/   p_z_Ps = 0, //((POP / 62760).toFixed(0)/1)
    /*Mięso*/                 p_z_Mi = 0, //((POP / 53795).toFixed(0)/1)
    /*Papier*/                p_z_Pa = 0, //((POP / 67780).toFixed(0)/1)
    /*Szkło*/                 p_z_Sz = 0, //((POP / 83333).toFixed(0)/1)
    /*Wino*/                  p_z_Wi = 0, //((POP / 53795).toFixed(0)/1)
    /*Meble luksusowe*/       p_z_Ml = 0, //((POP / 76155).toFixed(0)/1)
    /*Ubrania luksusowe*/     p_z_Ul = 0, //((POP / 76155).toFixed(0)/1)
    /*Węgiel*/                p_z_We = 0, //((POP / 418395).toFixed(0)/1)
    /*Porcelana*/             p_z_Po = 0, //((POP / 260690).toFixed(0)/1)
    /*Owoc*/                  p_z_Ow = 0, //((POP / 3389000).toFixed(0)/1)
    /*Kawa*/                  p_z_K = 0, //((POP / 1694500).toFixed(0)/1)
    /*Cukier*/                p_z_C = 0, //((POP / 322761).toFixed(0)/1)
    /*Herbata*/               p_z_H = 0; //((POP / 1329000).toFixed(0)/1)

    if(TECH>0) 
    {
        p_z_Ps = ((POP / (25345 / m_Ps)).toFixed(0)/1);
        p_z_U  = ((POP / (15835 / m_U )).toFixed(0)/1);
        p_z_Me = ((POP / (18785 / m_Me)).toFixed(0)/1);
        p_z_R  = ((POP / (36055 / m_R )).toFixed(0)/1);
        p_z_Sz = ((POP / (46294 / m_Sz)).toFixed(0)/1);
        p_z_Pa = ((POP / (33400 / m_Pa)).toFixed(0)/1);
        p_z_Zb = ((POP / (4715  / m_Zb)).toFixed(0)/1);
        p_z_Tk = ((POP / (28240 / m_Tk)).toFixed(0)/1);
        p_z_Mi = ((POP / (38250 / m_Mi)).toFixed(0)/1);
        p_z_D  = ((POP / (35675 / m_D )).toFixed(0)/1);
    }
    if(TECH>2)
        p_z_We = ((POP / (418395/ m_We)).toFixed(0)/1);
    if(TECH>5)
    {
        p_z_Al = ((POP / (18270 / m_Al)).toFixed(0)/1);
        p_z_C  = ((POP / (59330 / m_C )).toFixed(0)/1);
        p_z_Ow = ((POP / (49095 / m_Ow)).toFixed(0)/1);
        p_z_Wi = ((POP / (31535 / m_Wi)).toFixed(0)/1);
    }
    if(TECH>9)
    {
        p_z_K  = ((POP / (84190 / m_K )).toFixed(0)/1);
        p_z_H  = ((POP / (86430 / m_H )).toFixed(0)/1);
        p_z_Ty = ((POP / (45910 / m_Ty)).toFixed(0)/1);
    }
    if(TECH>12)
        p_z_Po = ((POP / (31485 / m_Po)).toFixed(0)/1);
    if(TECH>15)
        p_z_Ul = ((POP / (21290 / m_Ul)).toFixed(0)/1);
    if(TECH>16)
        p_z_Ml = ((POP / (39655 / m_Ml)).toFixed(0)/1);

function zapotrzebowania()
{
    /*BUDYNKI*/
    /*Tartak*/                //p_D += 20 * T;      p_Td += 20 * T;     z_Nar += 5 * T;  
        if(TECH==1)
        {
            document.getElementById("T_p").innerHTML = "+30 Drewno";
            document.getElementById("T_z").innerHTML = "-5 Narzędzia";
            document.getElementById("T_l").innerHTML = 4500 * T;
            document.getElementById("T_t").innerHTML = "I";
            Gor += 4500 * T; 
            KosBud += 40 * T;
            p_D += 30 * T;
            z_Nar += 5 * T;
        }
        else if(TECH>1 && TECH<=31)
        {
            document.getElementById("T_p").innerHTML = "+40 Drewno<br>+10 Twarde drewno";
            document.getElementById("T_z").innerHTML = "-10 Narzędzia";
            document.getElementById("T_l").innerHTML = 3500 * T;
            document.getElementById("T_t").innerHTML = "II";
            Gor += 3500 * T; 
            KosBud += 80 * T;
            p_D += 40 * T; 
            p_Td += 10 * T; 
            z_Nar += 10 * T;
        } 
        else if(TECH>31 && TECH<=50)
        {
            document.getElementById("T_p").innerHTML = "+80 Drewno<br>+20 Twarde drewno";
            document.getElementById("T_z").innerHTML = "-30 Narzędzia";
            document.getElementById("T_l").innerHTML = 3400 * T;
            document.getElementById("T_t").innerHTML = "III";
            Gor += 3400 * T; 
            KosBud += 120 * T;
            p_D += 80 * T; 
            p_Td += 20 * T; 
            z_Nar += 30 * T;
        }
    /*Kopalnia wegla*/        //p_We += 40 * Kw;    z_Nar += 10 * Kw;   z_Mw += 5 * Kw; 
        if(TECH<3)
        {
            document.getElementById("Kw_p").innerHTML = "-";
            document.getElementById("Kw_z").innerHTML = "-";
            document.getElementById("Kw_l").innerHTML = "-";
            document.getElementById("Kw_t").innerHTML = "0";
        }
        else if(TECH>2 && TECH<=21)
        {
            document.getElementById("Kw_p").innerHTML = "+25 Węgiel";
            document.getElementById("Kw_z").innerHTML = "-5 Narzedzia";
            document.getElementById("Kw_l").innerHTML = 4500 * Kw;
            document.getElementById("Kw_t").innerHTML = "I";
            Gor += 4500 * Kw; 
            KosBud += 45 * Kw;
            p_We += 25 * Kw; 
            z_Nar += 5 * Kw;
        }
        else if(TECH>21 && TECH<=33)
        {
            document.getElementById("Kw_p").innerHTML = "+50 Węgiel";
            document.getElementById("Kw_z").innerHTML = "-15 Narzedzia<br>-5 Materiały wybuchowe";
            document.getElementById("Kw_l").innerHTML = 2750 * Kw;
            document.getElementById("Kw_t").innerHTML = "II";
            Gor += 2750 * Kw; 
            KosBud += 65 * Kw;
            p_We += 50 * Kw; 
            z_Nar += 15 * Kw; 
            z_Mw += 5 * Kw;
        }
        else if(TECH>33 && TECH<=40)
        {
            document.getElementById("Kw_p").innerHTML = "+80 Węgiel";
            document.getElementById("Kw_z").innerHTML = "-20 Narzedzia<br>-10 Materiały wybuchowe";
            document.getElementById("Kw_l").innerHTML = 2750 * Kw;
            document.getElementById("Kw_t").innerHTML = "III";
            Gor += 2750 * Kw; 
            KosBud += 110 * Kw;
            p_We += 80 * Kw; 
            z_Nar += 20 * Kw; 
            z_Mw += 10 * Kw;
        }
        else if(TECH>40 && TECH<=50)
        {
            document.getElementById("Kw_p").innerHTML = "+110 Węgiel";
            document.getElementById("Kw_z").innerHTML = "-30 Narzedzia<br>-15 Materiały wybuchowe";
            document.getElementById("Kw_l").innerHTML = 2750 * Kw;
            document.getElementById("Kw_t").innerHTML = "IV";
            Gor += 2750 * Kw; 
            KosBud += 135 * Kw;
            p_We += 110 * Kw; 
            z_Nar += 30 * Kw; 
            z_Mw += 15 * Kw;
        }
    /*Kopalnie żelaza*/       //p_Ze += 32 * Kze;   z_Nar += 10 * Kze;  z_Mw += 5 * Kze;   
        if(TECH>0 && TECH<=22)
        {
            document.getElementById("Kze_p").innerHTML = "+20 Żelazo";
            document.getElementById("Kze_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Kze_l").innerHTML = 4500 * Kze;
            document.getElementById("Kze_t").innerHTML = "I";
            Gor += 4500 * Kze; 
            KosBud += 60 * Kze;
            p_Ze += 20 * Kze;
            z_Nar += 5 * Kze
        }
        else if(TECH>22 && TECH<=33)
        {
            document.getElementById("Kze_p").innerHTML = "+52 Żelazo";
            document.getElementById("Kze_z").innerHTML = "-15 Narzędzia<br>-5 Materiały wybuchowe";
            document.getElementById("Kze_l").innerHTML = 2750 * Kze;
            document.getElementById("Kze_t").innerHTML = "II";
            Gor += 2750 * Kze; 
            KosBud += 123 * Kze;
            p_Ze += 52 * Kze;
            z_Nar += 15 * Kze;
            z_Mw += 5 * Kze;
        }
        else if(TECH>33 && TECH<=40)
        {
            document.getElementById("Kze_p").innerHTML = "+80 Żelazo";
            document.getElementById("Kze_z").innerHTML = "-20 Narzędzia<br>-10 Materiały wybuchowe<br>-5 Węgiel";
            document.getElementById("Kze_l").innerHTML = 2750 * Kze;
            document.getElementById("Kze_t").innerHTML = "III";
            Gor += 2750 * Kze; 
            KosBud += 175 * Kze;
            p_Ze += 80 * Kze;
            z_Nar += 20 * Kze;
            z_Mw += 10 * Kze;
            z_We += 5 * Kze;
        }
        else if(TECH>40 && TECH<=50)
        {
            document.getElementById("Kze_p").innerHTML = "+100 Żelazo";
            document.getElementById("Kze_z").innerHTML = "-30 Narzędzia<br>-15 Materiały wybuchowe<br>-10 Węgiel";
            document.getElementById("Kze_l").innerHTML = 2750 * Kze;
            document.getElementById("Kze_t").innerHTML = "IV";
            Gor += 2750 * Kze; 
            KosBud += 175 * Kze;
            p_Ze += 100 * Kze;
            z_Nar += 30 * Kze;
            z_Mw += 15 * Kze;
            z_We += 10 * Kze;
        }
    /*Kopalnia ołowiu*/       //p_Ol += 32 * Ko;    z_Nar += 10 * Ko;   z_Mw += 5 * Ko; 
        if(TECH<=11)
        {
            document.getElementById("Ko_p").innerHTML = "-";
            document.getElementById("Ko_z").innerHTML = "-";
            document.getElementById("Ko_l").innerHTML = "-";
            document.getElementById("Ko_t").innerHTML = "0";
        }
        else if(TECH>11 && TECH<=24)
        {
            document.getElementById("Ko_p").innerHTML = "+20 Ołów";
            document.getElementById("Ko_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Ko_l").innerHTML = 4500 * Ko;
            document.getElementById("Ko_t").innerHTML = "I";
            Gor += 4500 * Ko; 
            KosBud += 60 * Ko;
            p_Ol += 20 * Ko;
            z_Nar += 5 * Ko;
        }
        else if(TECH>24 && TECH<=34)
        {
            document.getElementById("Ko_p").innerHTML = "+52 Ołów";
            document.getElementById("Ko_z").innerHTML = "-15 Narzędzia<br>-5 Materiały wybuchowe";
            document.getElementById("Ko_l").innerHTML = 2750 * Ko;
            document.getElementById("Ko_t").innerHTML = "II";
            Gor += 2750 * Ko; 
            KosBud += 123 * Ko;
            p_Ol += 52 * Ko;
            z_Nar += 15 * Ko;
            z_Mw += 5 * Ko;
        }
        else if(TECH>34 && TECH<=42)
        {
            document.getElementById("Ko_p").innerHTML = "+80 Ołów";
            document.getElementById("Ko_z").innerHTML = "-20 Narzędzia<br>-10 Materiały wybuchowe<br>-5 Węgiel";
            document.getElementById("Ko_l").innerHTML = 2750 * Ko;
            document.getElementById("Ko_t").innerHTML = "III";
            Gor += 2750 * Ko; 
            KosBud += 175 * Ko;
            p_Ol += 80 * Ko;
            z_Nar += 20 * Ko;
            z_Mw += 10 * Ko;
            z_We += 5 * Ko;
        }
        else if(TECH>42 && TECH<=50)
        {
            document.getElementById("Ko_p").innerHTML = "+100 Ołów";
            document.getElementById("Ko_z").innerHTML = "-30 Narzędzia<br>-15 Materiały wybuchowe<br>-10 Węgiel";
            document.getElementById("Ko_l").innerHTML = 2750 * Ko;
            document.getElementById("Ko_t").innerHTML = "IV";
            Gor += 2750 * Ko; 
            KosBud += 175 * Ko;
            p_Ol += 100 * Ko;
            z_Nar += 30 * Ko;
            z_Mw += 15 * Ko;
            z_We += 10 * Ko;
        }  
    /*Kopalnia siarki*/       //p_S += 32 * Ks;     z_Nar += 10 * Ks;   z_Mw += 5 * Ks;
        if(TECH<3)
        {
            document.getElementById("Ks_p").innerHTML = "-";
            document.getElementById("Ks_z").innerHTML = "-";
            document.getElementById("Ks_l").innerHTML = "-";
            document.getElementById("Ks_t").innerHTML = "0";
        }
        else if(TECH>2 && TECH<=23)
        {
            document.getElementById("Ks_p").innerHTML = "+20 Siarka";
            document.getElementById("Ks_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Ks_l").innerHTML = 4500 * Ks;
            document.getElementById("Ks_t").innerHTML = "I";
            Gor += 4500 * Ks; 
            KosBud += 80 * Ks;
            p_S += 20 * Ks;
            z_Nar += 5 * Ks;
        }
        else if(TECH>23 && TECH<=34)
        {
            document.getElementById("Ks_p").innerHTML = "+50 Siarka";
            document.getElementById("Ks_z").innerHTML = "-15 Narzędzia<br>-5 Materiały wybuchowe";
            document.getElementById("Ks_l").innerHTML = 2750 * Ks;
            document.getElementById("Ks_t").innerHTML = "II";
            Gor += 2750 * Ks; 
            KosBud += 165 * Ks;
            p_S += 50 * Ks;
            z_Nar += 15 * Ks;
            z_Mw += 5 * Ks;
        }
        else if(TECH>34 && TECH<=42)
        {
            document.getElementById("Ks_p").innerHTML = "+80 Siarka";
            document.getElementById("Ks_z").innerHTML = "-20 Narzędzia<br>-10 Materiały wybuchowe<br>-5 Węgiel";
            document.getElementById("Ks_l").innerHTML = 2750 * Ks;
            document.getElementById("Ks_t").innerHTML = "III";
            Gor += 2750 * Ks; 
            KosBud += 255 * Ks;
            p_S += 80 * Ks;
            z_Nar += 20 * Ks;
            z_Mw += 10 * Ks;
            z_We += 5 * Ks;
        }
        else if(TECH>42 && TECH<=50)
        {
            document.getElementById("Ks_p").innerHTML = "+110 Siarka";
            document.getElementById("Ks_z").innerHTML = "-30 Narzędzia<br>-15 Materiały wybuchowe<br>-10 Węgiel";
            document.getElementById("Ks_l").innerHTML = 2750 * Ks;
            document.getElementById("Ks_t").innerHTML = "IV";
            Gor += 2750 * Ks; 
            KosBud += 325 * Ks;
            p_S += 110 * Ks;
            z_Nar += 30 * Ks;
            z_Mw += 15 * Ks;
            z_We += 10 * Ks;          
        }
    /*Kopalnia złota*/        //p_Zl += 30 * Kzl;   z_Nar += 10 * Kzl;  z_Mw += 5 * Kzl; 
        if(TECH>0 && TECH<=25)
        {
            document.getElementById("Kzl_p").innerHTML = "+10 Złoto";
            document.getElementById("Kzl_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Kzl_l").innerHTML = 4500 * Kzl;
            document.getElementById("Kzl_t").innerHTML = "I";
            Gor += 4500 * Kzl; 
            KosBud += 20 * Kzl;
            p_Zl += 10 * Kzl;
            z_Nar += 5 * Kzl;
        }
        else if(TECH>25 && TECH<=34)
        {
            document.getElementById("Kzl_p").innerHTML = "+25 Złoto";
            document.getElementById("Kzl_z").innerHTML = "-15 Narzędzia<br>-5 Materiały Wybuchowe";
            document.getElementById("Kzl_l").innerHTML = 2750 * Kzl;
            document.getElementById("Kzl_t").innerHTML = "II";
            Gor += 2750 * Kzl; 
            KosBud += 40 * Kzl;
            p_Zl += 25 * Kzl;
            z_Nar += 15 * Kzl;
            z_Mw += 5 * Kzl;
        }        
        else if(TECH>34 && TECH<=43)
        {
            document.getElementById("Kzl_p").innerHTML = "+40 Złoto";
            document.getElementById("Kzl_z").innerHTML = "-20 Narzędzia<br>-10 Materialy wybuchowe<br>-5 Węgiel";
            document.getElementById("Kzl_l").innerHTML = 2750 * Kzl;
            document.getElementById("Kzl_t").innerHTML = "III";
            Gor += 2750 * Kzl; 
            KosBud += 60 * Kzl;
            p_Zl += 40 * Kzl;
            z_Nar += 20 * Kzl;
            z_Mw += 10 * Kzl;
            z_We += 5 * Kzl;
        }
        else if(TECH>43 && TECH<=50)
        {
            document.getElementById("Kzl_p").innerHTML = "+50 Złoto";
            document.getElementById("Kzl_z").innerHTML = "-30 Narzędzia<br>-15 Materialy wybuchowe<br>-10 Węgiel";
            document.getElementById("Kzl_l").innerHTML = 2750 * Kzl;
            document.getElementById("Kzl_t").innerHTML = "IV";
            Gor += 2750 * Kzl; 
            KosBud += 80 * Kzl;
            p_Zl += 50 * Kzl;
            z_Nar += 30 * Kzl;
            z_Mw += 15 * Kzl;
            z_We += 10 * Kzl;
        }
    /*Zakład spożywczy*/      //p_Ps += 45 * Zsp;   z_Zb += 40 * Zsp;
        if(TECH>0 && TECH<=10)
        {
            document.getElementById("Zsp_p").innerHTML = "+45 Produkty sporzywcze";
            document.getElementById("Zsp_z").innerHTML = "-40 Zboże";
            document.getElementById("Zsp_l").innerHTML = 4500 * Zsp;
            document.getElementById("Zsp_t").innerHTML = "I";
            Rob += 4500 * Zsp; 
            KosBud += 45 * Zsp;
            p_Ps += 45 * Zsp;
            z_Zb += 40 * Zsp;
        }
        else if(TECH>10 && TECH<=45)
        {
            document.getElementById("Zsp_p").innerHTML = "+65 Produkty sporzywcze<br>+60 Alkohol";
            document.getElementById("Zsp_z").innerHTML = "-20 Zboże<br>-40 Cukier<br>-30 Ryba<br>-10 Żelazo<br>-10 Szkło<br>-10 Narzędzia";
            document.getElementById("Zsp_l").innerHTML = 2850 * Zsp;
            document.getElementById("Zsp_t").innerHTML = "II";
            Rob += 2850 * Zsp; 
            KosBud += 35 * Zsp;
            p_Ps += 65 * Zsp;
            p_Al += 60 * Zsp;
            z_Zb += 20 * Zsp;
            z_C += 40 * Zsp;
            z_R += 30 * Zsp;
            z_Ze += 10 * Zsp;
            z_Sz += 10 * Zsp;
            z_Nar += 10 * Zsp;
        }
        else if(TECH>45 && TECH<=50)
        {
            document.getElementById("Zsp_p").innerHTML = "+140 Produkty sporzywcze<br>+100 Alkohol";
            document.getElementById("Zsp_z").innerHTML = "-50 Zboże<br>-55 Cukier<br>-60 Ryba<br>-10 Stal<br>-10 Szkło<br>-10 Narzędzia";
            document.getElementById("Zsp_l").innerHTML = 3600 * Zsp;
            document.getElementById("Zsp_t").innerHTML = "III";
            Rob += 3600 * Zsp; 
            KosBud += 205 * Zsp;
            p_Ps += 140 * Zsp;
            p_Al += 100 * Zsp;
            z_Zb += 50 * Zsp;
            z_C += 55 * Zsp;
            z_R += 60 * Zsp;
            z_St += 10 * Zsp;
            z_Sz += 10 * Zsp;
            z_Nar += 10 * Zsp;
        }          
    /*Fabryka włókiennicza*/  //p_U += 40 * Fw;     p_Ul += 20 * Fw;    z_Tk += 30 * Fw;   z_J += 10 * Fw;    z_Ba += 5 * Fw;
        if(TECH>0 && TECH<=15)
        {
            document.getElementById("Fw_p").innerHTML = "+45 Ubranie";
            document.getElementById("Fw_z").innerHTML = "-40 Tkanina";
            document.getElementById("Fw_l").innerHTML = 4500 * Fw;
            document.getElementById("Fw_t").innerHTML = "I";
            Rob += 4500 * Fw; 
            KosBud += 45 * Fw;
            p_U += 45 * Fw;
            z_Tk += 40 * Fw;
        }
        else if(TECH>15 && TECH<=27)
        {
            document.getElementById("Fw_p").innerHTML = "+45 Ubranie<br>+20 Ubranie luksusowe";
            document.getElementById("Fw_z").innerHTML = "-30 Tkanina<br>-10 Jedwab<br>-5 Barwnik<br>-5 Narzędzia";
            document.getElementById("Fw_l").innerHTML = 3500 * Fw;
            document.getElementById("Fw_t").innerHTML = "II";
            Rob += 3500 * Fw;
            KosBud += 115 * Fw; 
            p_U += 45 * Fw;
            p_Ul += 20 * Fw;
            z_Tk += 30 * Fw;
            z_J += 10 * Fw;
            z_Ba += 5 * Fw;
            z_Nar += 5 * Fw;
        }
        else if(TECH>27 && TECH<=50)
        {
            document.getElementById("Fw_p").innerHTML = "+80 Ubranie<br>+35 Ubranie luksusowe";
            document.getElementById("Fw_z").innerHTML = "-50 Tkanina<br>-20 Jedwab<br>-10 Barwnik<br>-20 Narzędzia";
            document.getElementById("Fw_l").innerHTML = 3000 * Fw;
            document.getElementById("Fw_t").innerHTML = "III";
            Rob += 3000 * Fw; 
            KosBud += 150 * Fw;
            p_U += 80 * Fw;
            p_Ul += 35 * Fw;
            z_Tk += 50 * Fw;
            z_J += 20 * Fw;
            z_Ba += 10 * Fw;
            z_Nar += 20 * Fw;
        }
    /*Fabryka mebli*/         //p_Me += 45 * Fm;    p_Ml += 20 * Fm;    z_D += 20 * Fm;    z_Td += 10 * Fm;   z_Tk += 10 * Fm;  z_Nar += 5 * Fm;
        if(TECH>0 && TECH<=16)
        {
            document.getElementById("Fm_p").innerHTML = "+45 Meblel";
            document.getElementById("Fm_z").innerHTML = "-30 Drewno<br>-10 Tkanina";
            document.getElementById("Fm_l").innerHTML = 4500 * Fm;
            document.getElementById("Fm_t").innerHTML = "I";
            Rob += 4500 * Fm; 
            KosBud += 45 * Fm;
            p_Me += 45 * Fm;
            z_D += 30 * Fm;
            z_Tk += 10 * Fm;
        }
        else if(TECH>16 && TECH<=28)
        {
            document.getElementById("Fm_p").innerHTML = "+50 Meblel<br>+20 Meblel luksusowy";
            document.getElementById("Fm_z").innerHTML = "-20 Drewno<br>-10 Tkanina<br>-10 Twarde drewno<br>-10 Narzędzia<br>-5 Węgiel";
            document.getElementById("Fm_l").innerHTML = 3500 * Fm;
            document.getElementById("Fm_t").innerHTML = "II";
            Rob += 3500 * Fm; 
            KosBud += 115 * Fm;
            p_Me += 50 * Fm;
            p_Ml += 20 * Fm;
            z_D += 20 * Fm;
            z_Tk += 10 * Fm;
            z_Td += 10 * Fm;
            z_Nar += 10 * Fm;
            z_We += 5 * Fm;
        }
        else if(TECH>28 && TECH<=50)
        {
            document.getElementById("Fm_p").innerHTML = "+90 Meblel<br>+40 Meblel luksusowy";
            document.getElementById("Fm_z").innerHTML = "-30 Drewno<br>-10 Tkanina<br>-20 Twarde drewno<br>-25 Narzędzia<br>-10 Węgiel";
            document.getElementById("Fm_l").innerHTML = 3500 * Fm;
            document.getElementById("Fm_t").innerHTML = "III";
            Rob += 3500 * Fm; 
            KosBud += 220 * Fm;
            p_Me += 90 * Fm;
            p_Ml += 40 * Fm;
            z_D += 30 * Fm;
            z_Tk += 10 * Fm;
            z_Td += 20 * Fm;
            z_Nar += 25 * Fm;
            z_We += 10 * Fm;
        }
    /*Huta szkła*/            //p_Sz += 50 * Hsz;   p_Po += 25 * Hsz;   z_Ol += 35 * Hsz;  z_Ba += 15 * Hsz; 
        if(TECH>0 && TECH<=12)
        {
            document.getElementById("Hsz_p").innerHTML = "+30 Szkło";
            document.getElementById("Hsz_z").innerHTML = "-30 Drewno";
            document.getElementById("Hsz_l").innerHTML = 4500 * Hsz;
            document.getElementById("Hsz_t").innerHTML = "I";
            Rob += 4500 * Hsz; 
            KosBud += 60 * Hsz;
            p_Sz += 30 * Hsz;
            z_D += 30 * Hsz;
        }
        else if(TECH>12 && TECH<=45)
        {
            document.getElementById("Hsz_p").innerHTML = "+30 Szkło<br>+25 Porcelana";
            document.getElementById("Hsz_z").innerHTML = "-20 Drewno<br>-10 Ołów<br>-15 Barwnik<br>-5 Narzędzia<br>-10 Węgiel";
            document.getElementById("Hsz_l").innerHTML = 2500 * Hsz;
            document.getElementById("Hsz_t").innerHTML = "II";
            Rob += 2500 * Hsz; 
            KosBud += 105 * Hsz;
            p_Sz += 30 * Hsz;
            p_Po += 25 * Hsz;
            z_D += 20 * Hsz;
            z_Ol += 10 * Hsz;
            z_Ba += 15 * Hsz;
            z_Nar += 5 * Hsz;
            z_We += 10 * Hsz;
        }
        else if(TECH>45 && TECH<=50)
        {
            document.getElementById("Hsz_p").innerHTML = "+50 Szkło<br>+40 Porcelana";
            document.getElementById("Hsz_z").innerHTML = "-35 Ołów<br>-30 Barwnik<br>-5 Narzędzia<br>-10 Węgiel";
            document.getElementById("Hsz_l").innerHTML = 3000 * Hsz;
            document.getElementById("Hsz_t").innerHTML = "III";
            Rob += 3000 * Hsz; 
            KosBud += 170 * Hsz;
            p_Sz += 50 * Hsz;
            p_Po += 40 * Hsz;
            z_Ol += 35 * Hsz;
            z_Ba += 30 * Hsz;
            z_Nar += 5 * Hsz;
            z_We += 10 * Hsz;
        }
    /*Narzędziownia*/         //p_Nar += 60 * N;    z_D += 30 * N;      z_Ze += 20 * N;
        if(TECH>0 && TECH<=13)
        {
            document.getElementById("N_p").innerHTML = "+30 Narzędzia";
            document.getElementById("N_z").innerHTML = "-20 Drewno<br>-10 Żelazo";
            document.getElementById("N_l").innerHTML = 4500 * N;
            document.getElementById("N_t").innerHTML = "I";
            Rob += 4500 * N; 
            KosBud += 40 * N;
            p_Nar += 30 * N;
            z_D += 20 * N;
            z_Ze += 10 * N;
        }
        else if(TECH>13 && TECH<=28)
        {
            document.getElementById("N_p").innerHTML = "+60 Narzędzia";
            document.getElementById("N_z").innerHTML = "-30 Drewno<br>-20 Żelazo<br>-5 Węgiel";
            document.getElementById("N_l").innerHTML = 3000 * N;
            document.getElementById("N_t").innerHTML = "II";
            Rob += 3000 * N; 
            KosBud += 85 * N;
            p_Nar += 60 * N;
            z_D += 30 * N;
            z_Ze += 20 * N;
            z_We += 5 * N;
        }
        else if(TECH>28 && TECH<=50)
        {
            document.getElementById("N_p").innerHTML = "+80 Narzędzia";
            document.getElementById("N_z").innerHTML = "-30 Drewno<br>-20 Stal<br>-5 Węgiel";
            document.getElementById("N_l").innerHTML = 2500 * N;
            document.getElementById("N_t").innerHTML = "III";
            Rob += 2500 * N; 
            KosBud += 145 * N;
            p_Nar += 80 * N;
            z_D += 30 * N;
            z_St += 20 * N;
            z_We += 5 * N;
        }
    /*Papiernia*/             //p_Pa += 100 * P;    z_D += 30 * P;      z_S += 10 * P;     z_Ba += 10 * P;
        if(TECH>0 && TECH<=3)
        {
            document.getElementById("P_p").innerHTML = "+40 Papier";
            document.getElementById("P_z").innerHTML = "-30 Drewno";
            document.getElementById("P_l").innerHTML = 4500 * P;
            document.getElementById("P_t").innerHTML = "I";
            Rob += 4500 * P; 
            KosBud += 60 * P;
            p_Pa += 40 * P;
            z_D += 30 * P;
        }
        else if(TECH>3 && TECH<=27)
        {
            document.getElementById("P_p").innerHTML = "+70 Papier";
            document.getElementById("P_z").innerHTML = "-30 Drewno<br>-10 Siarka<br>-5 Narzędzia<br>-5 Węgiel";
            document.getElementById("P_l").innerHTML = 3000 * P;
            document.getElementById("P_t").innerHTML = "II";
            Rob += 3000 * P; 
            KosBud += 65 * P;
            p_Pa += 70 * P;
            z_D += 30 * P;
            z_S += 10 * P;
            z_Nar += 5 * P;
            z_We += 5 * P;
        }
        else if(TECH>27 && TECH<=50)
        {
            document.getElementById("P_p").innerHTML = "+100 Papier";
            document.getElementById("P_z").innerHTML = "-30 Drewno<br>-10 Siarka<br>-10 Barwnik<br>-5 Narzędzia<br>-5 Węgiel";
            document.getElementById("P_l").innerHTML = 2500 * P;
            document.getElementById("P_t").innerHTML = "III";
            Rob += 2500 * P; 
            KosBud += 115 * P;
            p_Pa += 100 * P;
            z_D += 30 * P;
            z_S += 10 * P;
            z_Ba += 10 * P;
            z_Nar += 5 * P;
            z_We += 5 * P;
        }
    /*Zakład chemiczny*/      //p_Naw += 125 * Zch; p_Mw += 40 * Zch;   z_S += 45 * Zch;   z_Ze += 30 * Zch;  z_We += 15 * Zch;
        if(TECH<=4)
        {
            document.getElementById("Zch_p").innerHTML = "-";
            document.getElementById("Zch_z").innerHTML = "-";
            document.getElementById("Zch_l").innerHTML = "-";
            document.getElementById("Zch_t").innerHTML = "0";
        }
        else if(TECH>4 && TECH<=17)
        {
            document.getElementById("Zch_p").innerHTML = "+30 Nawóz";
            document.getElementById("Zch_z").innerHTML = "-10 Siarka<br>-2 Żelazo";
            document.getElementById("Zch_l").innerHTML = 4500 * Zch;
            document.getElementById("Zch_t").innerHTML = "I";
            Rob += 4500 * Zch; 
            KosBud += 28 * Zch;
            p_Naw += 30 * Zch;
            z_S += 10 * Zch;
            z_Ze += 3 * Zch;
        }
        else if(TECH>17 && TECH<=31)
        {
            document.getElementById("Zch_p").innerHTML = "+45 Nawóz<br>+20 Materiały wybuchowe";
            document.getElementById("Zch_z").innerHTML = "-15 Siarka<br>-15 Żelazo<br>-5 Węgiel";
            document.getElementById("Zch_l").innerHTML = 4750 * Zch;
            document.getElementById("Zch_t").innerHTML = "II";
            Rob += 4750 * Zch; 
            KosBud += 85 * Zch;
            p_Naw += 45 * Zch;
            p_Mw += 20 * Zch;
            z_S += 15 * Zch;
            z_Ze += 15 * Zch;
            z_We += 5 * Zch;
        }
        else if(TECH>31 && TECH<=41)
        {
            document.getElementById("Zch_p").innerHTML = "+65 Nawóz<br>+40 Materiały wybuchowe";
            document.getElementById("Zch_z").innerHTML = "-25 Siarka<br>-20 Żelazo<br>-15 Węgiel";
            document.getElementById("Zch_l").innerHTML = 5000 * Zch;
            document.getElementById("Zch_t").innerHTML = "III";
            Rob += 5000 * Zch; 
            KosBud += 145 * Zch;
            p_Naw += 65 * Zch;
            p_Mw += 40 * Zch;
            z_S += 25 * Zch;
            z_Ze += 20 * Zch;
            z_We += 15 * Zch;
        }
        else if(TECH>41 && TECH<=50)
        {
            document.getElementById("Zch_p").innerHTML = "+55 Nawóz<br>+70 Materiały wybuchowe";
            document.getElementById("Zch_z").innerHTML = "-30 Siarka<br>-25 Żelazo<br>-20 Węgiel";
            document.getElementById("Zch_l").innerHTML = 5250 * Zch;
            document.getElementById("Zch_t").innerHTML = "IV";
            Rob += 5250 * Zch; 
            KosBud += 205 * Zch;
            p_Naw += 55 * Zch;
            p_Mw += 70 * Zch;
            z_S += 30 * Zch;
            z_Ze += 25 * Zch;
            z_We += 20 * Zch;  
        }
    /*Zakład syntetyczny*/    //p_Ba += 40 * Zsy;   p_J += 40 * Zsy;    z_D += 40 * Zsy;   z_Naw += 30 * Zsy; z_S += 20 * Zsy; 
        if(TECH<=26)
        {
            document.getElementById("Zsy_p").innerHTML = "-";
            document.getElementById("Zsy_z").innerHTML = "-";
            document.getElementById("Zsy_l").innerHTML = "-";
            document.getElementById("Zsy_t").innerHTML = "0";
        }
        else if(TECH>26 && TECH<=45)
        {
            document.getElementById("Zsy_p").innerHTML = "+80 Barwnik";
            document.getElementById("Zsy_z").innerHTML = "-20 Siarka<br>-30 Nawóz";
            document.getElementById("Zsy_l").innerHTML = 4500 * Zsy;
            document.getElementById("Zsy_t").innerHTML = "I";
            Rob += 4500 * Zsy; 
            KosBud += 130 * Zsy;
            p_Ba += 80 * Zsy;
            z_S += 20 * Zsy;
            z_Naw += 30 * Zsy;
        }
        else if(TECH>45 && TECH<=50)
        {
            document.getElementById("Zsy_p").innerHTML = "+40 Barwnik<br>+40 Jedwab";
            document.getElementById("Zsy_z").innerHTML = "-20 Siarka<br>-30 Nawóz<br>-40 Drewno";
            document.getElementById("Zsy_l").innerHTML = 4500 * Zsy;
            document.getElementById("Zsy_t").innerHTML = "II";
            Rob += 4500 * Zsy; 
            KosBud += 50 * Zsy;
            p_Ba += 40 * Zsy;
            p_J += 40 * Zsy;
            z_S += 20 * Zsy;
            z_Naw += 30 * Zsy;
            z_D += 40 * Zsy;
        }
    /*Huta stali*/            //p_St += 90 * Hst;   z_Ze += 60 * Hst;   z_We += 30 * Hst;
        if(TECH<=18)
        {
            document.getElementById("Hst_p").innerHTML = "-";
            document.getElementById("Hst_z").innerHTML = "-";
            document.getElementById("Hst_l").innerHTML = "-";
            document.getElementById("Hst_t").innerHTML = "0";
        }
        else if(TECH>18 && TECH<=30)
        {
            document.getElementById("Hst_p").innerHTML = "+65 Stal";
            document.getElementById("Hst_z").innerHTML = "-40 Żelazo<br>-30 Węgiel";
            document.getElementById("Hst_l").innerHTML = 4500 * Hst;
            document.getElementById("Hst_t").innerHTML = "I";
            Rob += 4500 * Hst; 
            KosBud += 75 * Hst;
            p_St += 65 * Hst;
            z_Ze += 40 * Hst;
            z_We += 30 * Hst;
        }
        else if(TECH>30 && TECH<=41)
        {
            document.getElementById("Hst_p").innerHTML = "+90 Stal";
            document.getElementById("Hst_z").innerHTML = "-60 Żelazo<br>-35 Węgiel<br>-5 Narzędzia";
            document.getElementById("Hst_l").innerHTML = 3000 * Hst;
            document.getElementById("Hst_t").innerHTML = "II";
            Rob += 3000 * Hst; 
            KosBud += 85 * Hst;
            p_St += 90 * Hst;
            z_Ze += 60 * Hst;
            z_We += 35 * Hst;
            z_Nar += 5 * Hst;
        }
        else if(TECH>41 && TECH<=50)
        {
            document.getElementById("Hst_p").innerHTML = "+120 Stal";
            document.getElementById("Hst_z").innerHTML = "-90 Żelazo<br>-40 Węgiel<br>-5 Narzędzia";
            document.getElementById("Hst_l").innerHTML = 2500 * Hst;
            document.getElementById("Hst_t").innerHTML = "III";
            Rob += 2500 * Hst; 
            KosBud += 100 * Hst;
            p_St += 120 * Hst;
            z_Ze += 90 * Hst;
            z_We += 40 * Hst;
            z_Nar += 5 * Hst;  
        }
    /*Stocznia (Drewno)*/     //p_Sta += 35 * Sd;   z_D += 40 * Sd;     z_Tk += 20 * Sd;   z_Nar += 10 * Sd;
        if(TECH>0 && TECH<=20)
        {
            document.getElementById("Sd_p").innerHTML = "+20 Statek";
            document.getElementById("Sd_z").innerHTML = "-40 Drewno<br>-20 Tkanina<br>-10 Narzędzia";
            document.getElementById("Sd_l").innerHTML = 4500 * Sd;
            document.getElementById("Sd_t").innerHTML = "I";
            Rob += 4500 * Sd; 
            KosBud += 40 * Sd;
            p_Sta += 20 * Sd;
            z_D += 40 * Sd;
            z_Tk += 20 * Sd;
            z_Nar += 10 * Sd;
        }
        else if(TECH>20 && TECH<=50)
        {
            document.getElementById("Sd_p").innerHTML = "+35 Statek";
            document.getElementById("Sd_z").innerHTML = "-40 Drewno<br>-20 Twarde drewno<br>-20 Tkanina<br>-15 Narzędzia";
            document.getElementById("Sd_l").innerHTML = 4500 * Sd;
            document.getElementById("Sd_t").innerHTML = "II";
            Rob += 4500 * Sd; 
            KosBud += 50 * Sd;
            p_Sta += 35 * Sd;
            z_D += 40 * Sd;
            z_Td += 20 * Sd;
            z_Tk += 20 * Sd;
            z_Nar += 15 * Sd;
        }
    /*Stocznia (Stal)*/       //p_Sta += 55 * Ss;   z_St += 30 * Ss;    z_We += 10 * Ss;    z_Nar += 15 * Ss;
        if(TECH<=30)
        {
            document.getElementById("Ss_p").innerHTML = "-";
            document.getElementById("Ss_z").innerHTML = "-";
            document.getElementById("Ss_l").innerHTML = "-";
            document.getElementById("Ss_t").innerHTML = "0";
        }
        else if(TECH>30 && TECH<=43)
        {
            document.getElementById("Ss_p").innerHTML = "+50 Statek";
            document.getElementById("Ss_z").innerHTML = "-30 Stal<br>-10 Węgiel<br>-20 Narzędzia";
            document.getElementById("Ss_l").innerHTML = 4500 * Ss;
            document.getElementById("Ss_t").innerHTML = "I";
            Rob += 4500 * Ss; 
            KosBud += 40 * Ss;
            p_Sta += 50 * Ss;
            z_St += 30 * Ss;
            z_We += 10 * Ss;
            z_Nar += 20 * Ss;
        }
        else if(TECH>43 && TECH<=50)
        {
            document.getElementById("Ss_p").innerHTML = "+65 Statek";
            document.getElementById("Ss_z").innerHTML = "-45 Stal<br>-15 Węgiel<br>-25 Narzędzia";
            document.getElementById("Ss_l").innerHTML = 4500 * Ss;
            document.getElementById("Ss_t").innerHTML = "II";
            Rob += 4500 * Ss; 
            KosBud += 20 * Ss;
            p_Sta += 65 * Ss;
            z_St += 45 * Ss;
            z_We += 15 * Ss;
            z_Nar += 25 * Ss;
        }
    /*Zakład zbrojeniowy*/    //p_Br += 25 * Zz;    p_Ar += 15 * Zz;    z_St += 25 * Zz;   z_Td += 10 * Zz;
        if(TECH>0 && TECH<=14)
        {
            document.getElementById("Zz_p").innerHTML = "-";
            document.getElementById("Zz_z").innerHTML = "-";
            document.getElementById("Zz_l").innerHTML = "-";
            document.getElementById("Zz_t").innerHTML = "0";
        }
        else if(TECH>14 && TECH<=19)
        {
            document.getElementById("Zz_p").innerHTML = "+25 Broń";
            document.getElementById("Zz_z").innerHTML = "-10 Żelazo<br>-10 Twarde drewno";
            document.getElementById("Zz_l").innerHTML = 4500 * Zz;
            document.getElementById("Zz_t").innerHTML = "I";
            Rob += 4500 * Zz; 
            KosBud += 70 * Zz;
            p_Br += 25 * Zz;
            z_Ze += 10 * Zz;
            z_Td += 10 * Zz;
        }
        else if(TECH>19 && TECH<=29)
        {
            document.getElementById("Zz_p").innerHTML = "+30 Broń<br>+15 Artyleria";
            document.getElementById("Zz_z").innerHTML = "-10 Stal<br>-10 Żelazo<br>-10 Twarde drewno<br>-5 Narzędzia";
            document.getElementById("Zz_l").innerHTML = 5000 * Zz;
            document.getElementById("Zz_t").innerHTML = "II";
            Rob += 5000 * Zz; 
            KosBud += 135 * Zz;
            p_Br += 30 * Zz;
            p_Ar += 15 * Zz;
            z_St += 10 * Zz;
            z_Ze += 10 * Zz;
            z_Td += 10 * Zz;
            z_Nar += 5 * Zz;
        }
        else if(TECH>29 && TECH<=44)
        {
            document.getElementById("Zz_p").innerHTML = "+40 Broń<br>+25 Artyleria";
            document.getElementById("Zz_z").innerHTML = "-35 Stal<br>-10 Żelazo<br>-10 Twarde drewno<br>-10 Narzędzia";
            document.getElementById("Zz_l").innerHTML = 5250 * Zz;
            document.getElementById("Zz_t").innerHTML = "III";
            Rob += 5250 * Zz; 
            KosBud += 120 * Zz;
            p_Br += 40 * Zz;
            p_Ar += 25 * Zz;
            z_St += 35 * Zz;
            z_Ze += 10 * Zz;
            z_Td += 10 * Zz;
            z_Nar += 10 * Zz;
        }
        else if(TECH>44 && TECH<=50)
        {
            document.getElementById("Zz_p").innerHTML = "+50 Broń<br>+40 Artyleria";
            document.getElementById("Zz_z").innerHTML = "-55 Stal<br>-10 Żelazo<br>-10 Twarde drewno<br>-30 Narzędzia";
            document.getElementById("Zz_l").innerHTML = 5500 * Zz;
            document.getElementById("Zz_t").innerHTML = "IV";
            Rob += 5500 * Zz; 
            KosBud += 105 * Zz;
            p_Br += 50 * Zz;
            p_Ar += 40 * Zz;
            z_St += 55 * Zz;
            z_Ze += 10 * Zz;
            z_Td += 10 * Zz;
            z_Nar += 30 * Zz;
        }
    /*Zakład amunicyjny*/     //p_Am += 50 * Za;    z_Mw += 20 * Za;    z_Ol += 20 * Za;
        if(TECH>0 && TECH<=29)
        {
            document.getElementById("Za_p").innerHTML = "-";
            document.getElementById("Za_z").innerHTML = "-";
            document.getElementById("Za_l").innerHTML = "-";
            document.getElementById("Za_t").innerHTML = "0";
        }
        else if(TECH>29 && TECH<=44)
        {
            document.getElementById("Za_p").innerHTML = "+50 Amunicja";
            document.getElementById("Za_z").innerHTML = "-20 Materiały wybuchowe<br>-20 Ołów";
            document.getElementById("Za_l").innerHTML = 4500 * Za;
            document.getElementById("Za_t").innerHTML = "I";
            Rob += 4500 * Za; 
            KosBud += 70 * Za;
            p_Am += 50 * Za;
            z_Mw += 20 * Za;
            z_Ol += 20 * Za;
        }
        else if(TECH>44 && TECH<=50)
        {
            document.getElementById("Za_p").innerHTML = "+90 Amunicja";
            document.getElementById("Za_z").innerHTML = "-40 Materiały wybuchowe<br>-30 Ołów";
            document.getElementById("Za_l").innerHTML = 5000 * Za;
            document.getElementById("Za_t").innerHTML = "II";
            Rob += 5000 * Za; 
            KosBud += 130 * Za;
            p_Am += 90 * Za;
            z_Mw += 40 * Za;
            z_Ol += 30 * Za;
        }
    /*Farma żyta*/            //p_Zb += 70 * Fz;    p_Al += 15 * Fz;    z_Naw += 15 * Fz;
        if(TECH>0 && TECH<=5)
        {
            document.getElementById("Fz_p").innerHTML = "+30 Zboże";
            document.getElementById("Fz_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Fz_l").innerHTML = 4900 * Fz;
            document.getElementById("Fz_t").innerHTML = "I";
            Rol += 4900 * Fz; 
            KosBud += 40 * Fz;
            p_Zb += 30 * Fz;
            z_Nar += 5 * Fz;
        }
        else if(TECH>5 && TECH<=35)
        {
            document.getElementById("Fz_p").innerHTML = "+40 Zboże<br>+15 Alkohol";
            document.getElementById("Fz_z").innerHTML = "-5 Nawóz<br>-5 Narzędzia";
            document.getElementById("Fz_l").innerHTML = 4400 * Fz;
            document.getElementById("Fz_t").innerHTML = "II";
            Rol += 4400 * Fz;
            KosBud += 90 * Fz;
            p_Zb += 40 * Fz;
            p_Al += 15 * Fz;
            z_Naw += 5 * Fz;
            z_Nar += 5 * Fz;
        }
        else if(TECH>35 && TECH<=46)
        {
            document.getElementById("Fz_p").innerHTML = "+50 Zboże<br>+15 Alkohol<br>+10 Owoc<br>+5 Cukier";
            document.getElementById("Fz_z").innerHTML = "-15 Nawóz<br>-5 Narzędzia<br>-5 Węgiel";
            document.getElementById("Fz_l").innerHTML = 3600 * Fz;
            document.getElementById("Fz_t").innerHTML = "III";
            Rol += 3600 * Fz;
            KosBud += 130 * Fz;
            p_Zb += 50 * Fz;
            p_Al += 15 * Fz;
            p_Ow += 10 * Fz;
            p_C += 5 * Fz;
            z_Naw += 15 * Fz;
            z_Nar += 5 * Fz;
            z_We += 5 * Fz;
        }
        else if(TECH>46 && TECH<=50)
        {
            document.getElementById("Fz_p").innerHTML = "+100 Zboże<br>+15 Alkohol<br>+10 Owoc<br>+5 Cukier";
            document.getElementById("Fz_z").innerHTML = "-40 Nawóz<br>-5 Narzędzia<br>-10 Węgiel";
            document.getElementById("Fz_l").innerHTML = 2700 * Fz;
            document.getElementById("Fz_t").innerHTML = "IV";
            Rol += 2700 * Fz;
            KosBud += 140 * Fz;
            p_Zb += 100 * Fz;
            p_Al += 15 * Fz;
            p_Ow += 10 * Fz;
            p_C += 5 * Fz;
            z_Naw += 40 * Fz;
            z_Nar += 5 * Fz;
            z_We += 10 * Fz;
        }
    /*Farma pszenicy*/        //p_Zb += 70 * Fps;   p_Wi += 10 * Fps;   z_Naw += 15 * Fps;
        if(TECH>0 && TECH<=5)
        {
            document.getElementById("Fps_p").innerHTML = "+30 Zboże";
            document.getElementById("Fps_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Fps_l").innerHTML = 4900 * Fps;
            document.getElementById("Fps_t").innerHTML = "I";
            Rol += 4900 * Fps; 
            KosBud += 40 * Fps;
            p_Zb += 30 * Fps;
            z_Nar += 5 * Fps;
        }
        else if(TECH>5 && TECH<=35)
        {
            document.getElementById("Fps_p").innerHTML = "+40 Zboże<br>+9 Owoc<br>+6 Cukier<br>+5 Wino";
            document.getElementById("Fps_z").innerHTML = "-5 Nawóz<br>-5 Narzędzia";
            document.getElementById("Fps_l").innerHTML = 4400 * Fps;
            document.getElementById("Fps_t").innerHTML = "II";
            Rol += 4400 * Fps;
            KosBud += 133 * Fps;
            p_Zb += 40 * Fps;
            p_Ow += 9 * Fps;
            p_C += 6 * Fps;
            p_Wi += 5 * Fps;
            z_Naw += 5 * Fps;
            z_Nar += 5 * Fps;
        }
        else if(TECH>35 && TECH<=46)
        {
            document.getElementById("Fps_p").innerHTML = "+50 Zboże<br>+9 Owoc<br>+6 Cukier<br>+10 Wino";
            document.getElementById("Fps_z").innerHTML = "-15 Nawóz<br>-5 Narzędzia<br>-5 Węgiel";
            document.getElementById("Fps_l").innerHTML = 3600 * Fps;
            document.getElementById("Fps_t").innerHTML = "III";
            Rol += 3600 * Fps;
            KosBud += 133 * Fps;
            p_Zb += 50 * Fps;
            p_Ow += 9 * Fps;
            p_C += 6 * Fps;
            p_Wi += 10 * Fps;
            z_Naw += 15 * Fps;
            z_Nar += 5 * Fps;
            z_We += 5 * Fps;
        }
        else if(TECH>46 && TECH<=50)
        {
            document.getElementById("Fps_p").innerHTML = "+100 Zboże<br>+9 Owoc<br>+6 Cukier<br>+10 Wino";
            document.getElementById("Fps_z").innerHTML = "-40 Nawóz<br>-5 Narzędzia<br>-10 Węgiel";
            document.getElementById("Fps_l").innerHTML = 2700 * Fps;
            document.getElementById("Fps_t").innerHTML = "IV";
            Rol += 2700 * Fps;
            KosBud += 143 * Fps;
            p_Zb += 100 * Fps;
            p_Ow += 9 * Fps;
            p_C += 6 * Fps;
            p_Wi += 10 * Fps;
            z_Naw += 40 * Fps;
            z_Nar += 5 * Fps;
            z_We += 10 * Fps;
        }
    /*Farma ryżu*/            //p_Zb += 70 * Fr;    p_Ow += 6 * Fr;     p_C += 9 * Fr;     z_Naw += 15 * Fr;
        if(TECH>0 && TECH<=6)
        {
            document.getElementById("Fr_p").innerHTML = "+35 Zboże";
            document.getElementById("Fr_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Fr_l").innerHTML = 4900 * Fr;
            document.getElementById("Fr_t").innerHTML = "I";
            Rol += 4900 * Fr; 
            KosBud += 50 * Fr;
            p_Zb += 35 * Fr;
            z_Nar += 5 * Fr;
        }
        else if(TECH>6 && TECH<=38)
        {
            document.getElementById("Fr_p").innerHTML = "+50 Zboże<br>+9 Owoc<br>+6 Cukier";
            document.getElementById("Fr_z").innerHTML = "-10 Nawóz<br>-5 Narzędzia";
            document.getElementById("Fr_l").innerHTML = 4400 * Fr;
            document.getElementById("Fr_t").innerHTML = "II";
            Rol += 4400 * Fr;
            KosBud += 113 * Fr;
            p_Zb += 50 * Fr;
            p_Ow += 9 * Fr;
            p_C += 6 * Fr;
            z_Naw += 10 * Fr;
            z_Nar += 5 * Fr;
        }
        else if(TECH>38 && TECH<=50)
        {
            document.getElementById("Fr_p").innerHTML = "+85 Zboże<br>+9 Owoc<br>+6 Cukier";
            document.getElementById("Fr_z").innerHTML = "-20 Nawóz<br>-5 Narzędzia<br>-5 Węgiel";
            document.getElementById("Fr_l").innerHTML = 3600 * Fr;
            document.getElementById("Fr_t").innerHTML = "III";
            Rol += 3600 * Fr;
            KosBud += 138 * Fr;
            p_Zb += 85 * Fr;
            p_Ow += 9 * Fr;
            p_C += 6 * Fr;
            z_Naw += 20 * Fr;
            z_Nar += 5 * Fr;
            z_We += 5 * Fr;
        }
    /*Farma kukurydzy*/       //p_Zb += 70 * Fk;    p_Al += 15 * Fk;    z_Naw += 15 * Fk;
        if(TECH>0 && TECH<=6)
        {
            document.getElementById("Fk_p").innerHTML = "+30 Zboże";
            document.getElementById("Fk_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Fk_l").innerHTML = 4900 * Fk;
            document.getElementById("Fk_t").innerHTML = "I";
            Rol += 4900 * Fk; 
            KosBud += 40 * Fk;
            p_Zb += 30 * Fk;
            z_Nar += 5 * Fk;
        }
        else if(TECH>6 && TECH<=36)
        {
            document.getElementById("Fk_p").innerHTML = "+40 Zboże<br>+10 Alkohol";
            document.getElementById("Fk_z").innerHTML = "-5 Nawóz<br>-5 Narzędzia";
            document.getElementById("Fk_l").innerHTML = 4400 * Fk;
            document.getElementById("Fk_t").innerHTML = "II";
            Rol += 4400 * Fk;
            KosBud += 75 * Fk;
            p_Zb += 40 * Fk;
            p_Al += 10 * Fk;
            z_Naw += 5 * Fk;
            z_Nar += 5 * Fk;
        }
        else if(TECH>36 && TECH<=47)
        {
            document.getElementById("Fk_p").innerHTML = "+55 Zboże<br>+10 Alkohol<br>+10 Owoc<br>+5 Cukier";
            document.getElementById("Fk_z").innerHTML = "-15 Nawóz<br>-5 Narzędzia<br>-5 Węgiel";
            document.getElementById("Fk_l").innerHTML = 3500 * Fk;
            document.getElementById("Fk_t").innerHTML = "III";
            Rol += 3500 * Fk;
            KosBud += 125 * Fk;
            p_Zb += 55 * Fk;
            p_Al += 10 * Fk;
            p_Ow += 10 * Fk;
            p_C += 5 * Fk;
            z_Naw += 15 * Fk;
            z_Nar += 5 * Fk;
            z_We += 5 * Fk;
        }
        else if(TECH>47 && TECH<=50)
        {
            document.getElementById("Fk_p").innerHTML = "+105 Zboże<br>+10 Alkohol<br>+10 Owoc<br>+5 Cukier";
            document.getElementById("Fk_z").innerHTML = "-40 Nawóz<br>-5 Narzędzia<br>-10 Węgiel";
            document.getElementById("Fk_l").innerHTML = 2600 * Fk;
            document.getElementById("Fk_t").innerHTML = "IV";
            Rol += 2600 * Fk;
            KosBud += 185 * Fk;
            p_Zb += 105 * Fk;
            p_Al += 10 * Fk;
            p_Ow += 10 * Fk;
            p_C += 5 * Fk;
            p_Wi += 10 * Fk;
            z_Naw += 40 * Fk;
            z_Nar += 5 * Fk;
            z_We += 10 * Fk;
        }
    /*Farma prosa*/           //p_Zb += 70 * Fpr;   p_Ow += 6 * Fpr;    p_C += 9 * Fpr;    z_Naw += 15 * Fpr;
        if(TECH>0 && TECH<=7)
        {
            document.getElementById("Fpr_p").innerHTML = "+30 Zboże";
            document.getElementById("Fpr_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Fpr_l").innerHTML = 4900 * Fpr;
            document.getElementById("Fpr_t").innerHTML = "I";
            Rol += 4900 * Fpr; 
            KosBud += 40 * Fpr;
            p_Zb += 30 * Fpr;
            z_Nar += 5 * Fpr;
        }
        else if(TECH>7 && TECH<=36)
        {
            document.getElementById("Fpr_p").innerHTML = "+45 Zboże<br>+6 Owoc<br>+9 Cukier";
            document.getElementById("Fpr_z").innerHTML = "-5 Nawóz<br>-5 Narzędzia";
            document.getElementById("Fpr_l").innerHTML = 4400 * Fpr;
            document.getElementById("Fpr_t").innerHTML = "II";
            Rol += 4400 * Fpr;
            KosBud += 112 * Fpr;
            p_Zb += 45 * Fpr;
            p_Ow += 6 * Fpr;
            p_C += 9 * Fpr;
            z_Naw += 5 * Fpr;
            z_Nar += 5 * Fpr;
        }
        else if(TECH>36 && TECH<=47)
        {
            document.getElementById("Fpr_p").innerHTML = "+75 Zboże<br>+6 Owoc<br>+9 Cukier";
            document.getElementById("Fpr_z").innerHTML = "-15 Nawóz<br>-5 Narzędzia<br>-5 Węgiel";
            document.getElementById("Fpr_l").innerHTML = 3400 * Fpr;
            document.getElementById("Fpr_t").innerHTML = "III";
            Rol += 3400 * Fpr;
            KosBud += 127 * Fpr;
            p_Zb += 75 * Fpr;
            p_Ow += 6 * Fpr;
            p_C += 9 * Fpr;
            z_Naw += 15 * Fpr;
            z_Nar += 5 * Fpr;
            z_We += 5 * Fpr;
        }
        else if(TECH>47 && TECH<=50)
        {
            document.getElementById("Fpr_p").innerHTML = "+125 Zboże<br>+6 Owoc<br>+9 Cukier";
            document.getElementById("Fpr_z").innerHTML = "-40 Nawóz<br>-5 Narzędzia<br>-10 Węgiel";
            document.getElementById("Fpr_l").innerHTML = 2500 * Fpr;
            document.getElementById("Fpr_t").innerHTML = "IV";
            Rol += 2500 * Fpr;
            KosBud += 187 * Fpr;
            p_Zb += 125 * Fpr;
            p_Ow += 6 * Fpr;
            p_C += 9 * Fpr;
            p_Wi += 10 * Fpr;
            z_Naw += 40 * Fpr;
            z_Nar += 5 * Fpr;
            z_We += 10 * Fpr;
        }
    /*Ranczo*/                //p_Tk += 40 * R;     p_Mi += 25 * R;     p_Naw += 10 * R;   z_Zb += 10 * R;    z_Nar += 10 * R;
        if(TECH>0 && TECH<=7)
        {
            document.getElementById("R_p").innerHTML = "+25 Tkanina<br>+5 Mięso";
            document.getElementById("R_z").innerHTML = "-5 Narzędzia";
            document.getElementById("R_l").innerHTML = 4900 * R;
            document.getElementById("R_t").innerHTML = "I";
            Rol += 4900 * R; 
            KosBud += 45 * R;
            p_Tk += 25 * R;
            p_Mi += 5 * R;
            z_Nar += 5 * R;
        }
        else if(TECH>7 && TECH<=37)
        {
            document.getElementById("R_p").innerHTML = "+40 Tkanina<br>+10 Nawóz<br>+15 Mięso";
            document.getElementById("R_z").innerHTML = "-10 Zboże<br>-5 Narzędzia<br>-5 Żelazo";
            document.getElementById("R_l").innerHTML = 3900 * R;
            document.getElementById("R_t").innerHTML = "II";
            Rol += 3900 * R;
            KosBud += 95 * R;
            p_Tk += 40 * R;
            p_Naw += 10 * R;
            p_Mi += 15 * R;
            z_Zb += 10 * R;
            z_Nar += 5 * R;
            z_Ze += 5 * R;
        }
        else if(TECH>37 && TECH<=50)
        {
            document.getElementById("R_p").innerHTML = "+50 Tkanina<br>+15 Nawóz<br>+25 Mięso";
            document.getElementById("R_z").innerHTML = "-15 Zboże<br>-10 Narzędzia<br>-10 Żelazo";
            document.getElementById("R_l").innerHTML = 3100 * R;
            document.getElementById("R_t").innerHTML = "III";
            Rol += 3100 * R;
            KosBud += 110 * R;
            p_Tk += 50 * R;
            p_Naw += 15 * R;
            p_Mi += 25 * R;
            z_Zb += 15 * R;
            z_Nar += 10 * R;
            z_Ze += 10 * R;
        }
    /*Molo rybackie*/         //p_R += 50 * Mr;     z_Sta += 5 * Mr;
        if(TECH>0 && TECH<=8)
        {
            document.getElementById("Mr_p").innerHTML = "+25 Ryba";
            document.getElementById("Mr_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Mr_l").innerHTML = 4500 * Mr;
            document.getElementById("Mr_t").innerHTML = "I";
            Rol += 4500 * Mr; 
            KosBud += 30 * Mr;
            p_R += 25 * Mr;
            z_Nar += 5 * Mr;
        }
        else if(TECH>8 && TECH<=37)
        {
            document.getElementById("Mr_p").innerHTML = "+50 Ryba";
            document.getElementById("Mr_z").innerHTML = "-5 Statek<br>-5 Narzędzia";
            document.getElementById("Mr_l").innerHTML = 3500 * Mr;
            document.getElementById("Mr_t").innerHTML = "II";
            Rol += 3500 * Mr; 
            KosBud += 50 * Mr;
            p_R += 50 * Mr;
            z_Sta += 5 * Mr;
            z_Nar += 5 * Mr;
        }
        else if(TECH>37 && TECH<=50)
        {
            document.getElementById("Mr_p").innerHTML = "+100 Ryba";
            document.getElementById("Mr_z").innerHTML = "-10 Statek<br>-15 Węgiel<br>-10 Narzędzia";
            document.getElementById("Mr_l").innerHTML = 2500 * Mr;
            document.getElementById("Mr_t").innerHTML = "III";
            Rol += 2500 * Mr; 
            KosBud += 55 * Mr;
            p_R += 100 * Mr;
            z_Sta += 10 * Mr;
            z_We += 15 * Mr;
            z_Nar += 10 * Mr;
        }
    /*Plantacja kawy*/        //p_K += 30 * Pk;     z_Nar += 5 * Pk;
        if(TECH>0 && TECH<=9)
        {
            document.getElementById("Pk_p").innerHTML = "-";
            document.getElementById("Pk_z").innerHTML = "-";
            document.getElementById("Pk_l").innerHTML = "-";
            document.getElementById("Pk_t").innerHTML = "0";
        }
        else if(TECH>9 && TECH<=39)
        {
            document.getElementById("Pk_p").innerHTML = "+20 Kawa";
            document.getElementById("Pk_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Pk_l").innerHTML = 4900 * Pk;
            document.getElementById("Pk_t").innerHTML = "I";
            Pla += 4900 * Pk; 
            KosBud += 80 * Pk;
            p_K += 20 * Pk;
            z_Nar += 5 * Pk;
        }
        else if(TECH>39 && TECH<=50)
        {
            document.getElementById("Pk_p").innerHTML = "+40 Kawa";
            document.getElementById("Pk_z").innerHTML = "-15 Narzędzia";
            document.getElementById("Pk_l").innerHTML = 3800 * Pk;
            document.getElementById("Pk_t").innerHTML = "II";
            Pla += 3800 * Pk; 
            KosBud += 140 * Pk;
            p_K += 40 * Pk;
            z_Nar += 15 * Pk;     
        }
    /*Plantacja bawełny*/     //p_Tk += 60 * Pbaw;  z_Nar += 10 * Pbaw;
        if(TECH>0 && TECH<=9)
        {
            document.getElementById("Pbaw_p").innerHTML = "-";
            document.getElementById("Pbaw_z").innerHTML = "-";
            document.getElementById("Pbaw_l").innerHTML = "-";
            document.getElementById("Pbaw_t").innerHTML = "0";
        }
        else if(TECH>9 && TECH<=32)
        {
            document.getElementById("Pbaw_p").innerHTML = "+40 Tkanina";
            document.getElementById("Pbaw_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Pbaw_l").innerHTML = 4900 * Pbaw;
            document.getElementById("Pbaw_t").innerHTML = "I";
            Pla += 4900 * Pbaw; 
            KosBud += 60 * Pbaw;
            p_Tk += 40 * Pbaw;
            z_Nar += 5 * Pbaw;
        }
        else if(TECH>32 && TECH<=50)
        {
            document.getElementById("Pbaw_p").innerHTML = "+100 Tkanina";
            document.getElementById("Pbaw_z").innerHTML = "-15 Narzędzia";
            document.getElementById("Pbaw_l").innerHTML = 3800 * Pbaw;
            document.getElementById("Pbaw_t").innerHTML = "II";
            Pla += 3800 * Pbaw; 
            KosBud += 140 * Pbaw;
            p_Tk += 100 * Pbaw;
            z_Nar += 15 * Pbaw;
        }
    /*Plantacja barwników*/   //p_Ba += 35 * Pbar;  z_Nar += 5 * Pbar;
        if(TECH>0 && TECH<=9)
        {
            document.getElementById("Pbar_p").innerHTML = "-";
            document.getElementById("Pbar_z").innerHTML = "-";
            document.getElementById("Pbar_l").innerHTML = "-";
            document.getElementById("Pbar_t").innerHTML = "0";
        }
        else if(TECH>9 && TECH<=32)
        {
            document.getElementById("Pbar_p").innerHTML = "+25 Barwniki";
            document.getElementById("Pbar_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Pbar_l").innerHTML = 4900 * Pbar;
            document.getElementById("Pbar_t").innerHTML = "I";
            Pla += 4900 * Pbar; 
            KosBud += 80 * Pbar;
            p_Ba += 25 * Pbar;
            z_Nar += 5 * Pbar;
        }
        else if(TECH>32 && TECH<=50)
        {
            document.getElementById("Pbar_p").innerHTML = "+50 Barwniki";
            document.getElementById("Pbar_z").innerHTML = "-15 Narzędzia";
            document.getElementById("Pbar_l").innerHTML = 3800 * Pbar;
            document.getElementById("Pbar_t").innerHTML = "II";
            Pla += 3800 * Pbar; 
            KosBud += 140 * Pbar;
            p_Ba += 50 * Pbar;
            z_Nar += 15 * Pbar;
        }
    /*Plantacja herbaty*/     //p_H += 30 * Ph;     z_Nar += 5 * Ph;
        if(TECH>0 && TECH<=9)
        {
            document.getElementById("Ph_p").innerHTML = "-";
            document.getElementById("Ph_z").innerHTML = "-";
            document.getElementById("Ph_l").innerHTML = "-";
            document.getElementById("Ph_t").innerHTML = "0";
        }
        else if(TECH>9 && TECH<=39)
        {
            document.getElementById("Ph_p").innerHTML = "+20 Herbata";
            document.getElementById("Ph_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Ph_l").innerHTML = 4900 * Ph;
            document.getElementById("Ph_t").innerHTML = "I";
            Pla += 4900 * Ph; 
            KosBud += 40 * Ph;
            p_H += 20 * Ph;
            z_Nar += 5 * Ph;
        }
        else if(TECH>39 && TECH<=50)
        {
            document.getElementById("Ph_p").innerHTML = "+40 Herbata";
            document.getElementById("Ph_z").innerHTML = "-15 Narzędzia";
            document.getElementById("Ph_l").innerHTML = 3800 * Ph;
            document.getElementById("Ph_t").innerHTML = "II";
            Pla += 3800 * Ph; 
            KosBud += 60 * Ph;
            p_H += 40 * Ph;
            z_Nar += 15 * Ph;
        }
    /*Plantacja tytoniu*/     //p_Ty += 35 * Pt;    z_Nar += 5 * Pt;
        if(TECH>0 && TECH<=9)
        {
            document.getElementById("Pt_p").innerHTML = "-";
            document.getElementById("Pt_z").innerHTML = "-";
            document.getElementById("Pt_l").innerHTML = "-";
            document.getElementById("Pt_t").innerHTML = "0";
        }
        else if(TECH>9 && TECH<=39)
        {
            document.getElementById("Pt_p").innerHTML = "+25 Tytoń";
            document.getElementById("Pt_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Pt_l").innerHTML = 4900 * Pt;
            document.getElementById("Pt_t").innerHTML = "I";
            Pla += 4900 * Pt; 
            KosBud += 80 * Pt;
            p_Ty += 25 * Pt;
            z_Nar += 5 * Pt;
        }
        else if(TECH>39 && TECH<=50)
        {
            document.getElementById("Pt_p").innerHTML = "+50 Tytoń";
            document.getElementById("Pt_z").innerHTML = "-15 Narzędzia";
            document.getElementById("Pt_l").innerHTML = 3800 * Pt;
            document.getElementById("Pt_t").innerHTML = "II";
            Pla += 3800 * Pt; 
            KosBud += 140 * Pt;
            p_Ty += 50 * Pt;
            z_Nar += 15 * Pt;
        }
    /*Plantacja cukru*/       //p_C += 45 * Pc;     z_Nar += 7 * Pc;
        if(TECH>0 && TECH<=9)
        {
            document.getElementById("Pc_p").innerHTML = "-";
            document.getElementById("Pc_z").innerHTML = "-";
            document.getElementById("Pc_l").innerHTML = "-";
            document.getElementById("Pc_t").innerHTML = "0";
        }
        else if(TECH>9 && TECH<=39)
        {
            document.getElementById("Pc_p").innerHTML = "+30 Cukier";
            document.getElementById("Pc_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Pc_l").innerHTML = 4900 * Pc;
            document.getElementById("Pc_t").innerHTML = "I";
            Pla += 4900 * Pc; 
            KosBud += 70 * Pc;
            p_C += 30 * Pc;
            z_Nar += 5 * Pc;
        }
        else if(TECH>39 && TECH<=50)
        {
            document.getElementById("Pc_p").innerHTML = "+60 Cukier";
            document.getElementById("Pc_z").innerHTML = "-15 Narzędzia";
            document.getElementById("Pc_l").innerHTML = 3800 * Pc;
            document.getElementById("Pc_t").innerHTML = "II";
            Pla += 3800 * Pc; 
            KosBud += 120 * Pc;
            p_C += 60 * Pc;
            z_Nar += 15 * Pc;
        }
    /*Plantacja owoców*/      //p_Ow += 45 * Po;    z_Nar += 7 * Po;
        if(TECH>0 && TECH<=9)
        {
            document.getElementById("Po_p").innerHTML = "-";
            document.getElementById("Po_z").innerHTML = "-";
            document.getElementById("Po_l").innerHTML = "-";
            document.getElementById("Po_t").innerHTML = "0";
        }
        else if(TECH>9 && TECH<=39)
        {
            document.getElementById("Po_p").innerHTML = "+30 Owoc";
            document.getElementById("Po_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Po_l").innerHTML = 4900 * Po;
            document.getElementById("Po_t").innerHTML = "I";
            Pla += 4900 * Po; 
            KosBud += 130 * Po;
            p_Ow += 30 * Po;
            z_Nar += 5 * Po;
        }
        else if(TECH>39 && TECH<=50)
        {
            document.getElementById("Po_p").innerHTML = "+60 Owoc";
            document.getElementById("Po_z").innerHTML = "-15 Narzędzia";
            document.getElementById("Po_l").innerHTML = 3800 * Po;
            document.getElementById("Po_t").innerHTML = "II";
            Pla += 3800 * Po; 
            KosBud += 240 * Po;
            p_Ow += 60 * Po;
            z_Nar += 15 * Po;
        }
    /*Plantacja jedwabiu*/    //p_J += 30 * Pj;     z_Nar += 5 * Pj;
        if(TECH>0 && TECH<=9)
        {
            document.getElementById("Pj_p").innerHTML = "-";
            document.getElementById("Pj_z").innerHTML = "-";
            document.getElementById("Pj_l").innerHTML = "-";
            document.getElementById("Pj_t").innerHTML = "0";
        }
        else if(TECH>9 && TECH<=32)
        {
            document.getElementById("Pj_p").innerHTML = "+20 Jedwab";
            document.getElementById("Pj_z").innerHTML = "-5 Narzędzia";
            document.getElementById("Pj_l").innerHTML = 4900 * Pj;
            document.getElementById("Pj_t").innerHTML = "I";
            Pla += 4900 * Pj; 
            KosBud += 60 * Pj;
            p_J += 20 * Pj;
            z_Nar += 5 * Pj;
        }
        else if(TECH>32 && TECH<=50)
        {
            document.getElementById("Pj_p").innerHTML = "+40 Jedwab";
            document.getElementById("Pj_z").innerHTML = "-15 Narzędzia";
            document.getElementById("Pj_l").innerHTML = 3800 * Pj;
            document.getElementById("Pj_t").innerHTML = "II";
            Pla += 3800 * Pj; 
            KosBud += 100 * Pj;
            p_J += 40 * Pj;
            z_Nar += 15 * Pj;
        }

    /*ARMIA*/
    /*Piechota*/              //ARM += 500 * INF;   z_Br += 1 * INF;    z_Am += 1 * INF;   z_U += 2 * INF;    z_Ps += 1 * INF;
        if(TECH>0 && TECH<=14)
        {
            document.getElementById("INF_t").innerHTML = "I";
            ARM += 500 * INF;
            z_U += 1 * INF;
        }
        else if(TECH>14 && TECH<=29)
        {
            document.getElementById("INF_t").innerHTML = "II";
            ARM += 500 * INF;
            z_Br += 1 * INF;
            z_U += 1 * INF;
        }
        else if(TECH>29 && TECH<=44)
        {
            document.getElementById("INF_t").innerHTML = "III";
            ARM += 500 * INF;
            z_Br += 2 * INF;
            z_Am += 1 * INF;
            z_U += 2 * INF;
            z_Ps += 1* INF;
        }
        else if(TECH>44 && TECH<=50)
        {
            document.getElementById("INF_t").innerHTML = "IV";
            ARM += 500 * INF;
            z_Br += 3 * INF;
            z_Am += 2 * INF;
            z_U += 3 * INF;
            z_Ps += 1* INF;
        }
    /*Łucznicy*/              //ARM += 500 * ARC;   
        if(TECH>0 && TECH<=14)
        {
            document.getElementById("ARC_t").innerHTML = "I";
            ARM += 500 * ARC;
            z_U += 1 * ARC;
        }
        else if(TECH>14 && TECH<=29)
        {
            document.getElementById("ARC_t").innerHTML = "II";
            ARM += 500 * ARC;
            z_Br += 1 * ARC;
            z_U += 1 * ARC;
        }
        else if(TECH>29 && TECH<=44)
        {
            document.getElementById("ARC_t").innerHTML = "III";
            ARM += 500 * ARC;
            z_Br += 2 * ARC;
            z_Am += 1 * ARC;
            z_U += 2 * ARC;
            z_Ps += 1* ARC;
        }
        else if(TECH>44 && TECH<=50)
        {
            document.getElementById("ARC_t").innerHTML = "IV";
            ARM += 500 * ARC;
            z_Br += 3 * ARC;
            z_Am += 2 * ARC;
            z_U += 3 * ARC;
            z_Ps += 1* ARC;
        }
    /*Kawaleria*/             //ARM += 500 * CAV;   z_Br += 1 * CAV;    z_Am += 1 * CAV;   z_U += 2 * CAV;    z_Ps += 1 * CAV;
        if(TECH>0 && TECH<=14)
        {
            document.getElementById("CAV_t").innerHTML = "I";
            ARM += 500 * CAV;
            z_U += 1 * CAV;
        }
        else if(TECH>14 && TECH<=29)
        {
            document.getElementById("CAV_t").innerHTML = "II";
            ARM += 500 * CAV;
            z_Br += 1 * CAV;
            z_U += 1 * CAV;
        }
        else if(TECH>29 && TECH<=44)
        {
            document.getElementById("CAV_t").innerHTML = "III";
            ARM += 500 * CAV;
            z_Br += 2 * CAV;
            z_Am += 1 * CAV;
            z_U += 2 * CAV;
            z_Ps += 1* CAV;
        }
        else if(TECH>44 && TECH<=50)
        {
            document.getElementById("CAV_t").innerHTML = "IV";
            ARM += 500 * CAV;
            z_Br += 3 * CAV;
            z_Am += 2 * CAV;
            z_U += 3 * CAV;
            z_Ps += 1* CAV;
        }
    /*Artyleria*/             //ARM += 250 * ART;   z_Ar += 1 * ART;    z_Am += 1 * ART;   z_U += 1 * ART;    z_Ps += 1 * ART;
        if(TECH>0 && TECH<=19)
        {
            document.getElementById("ART_t").innerHTML = "0";
        }
        else if(TECH>14 && TECH<=29)
        {
            document.getElementById("ART_t").innerHTML = "I";
            ARM += 250 * ART;
            z_Ar += 1 * ART;
            z_U += 1 * ART;
        }
        else if(TECH>29 && TECH<=44)
        {
            document.getElementById("ART_t").innerHTML = "II";
            ARM += 250 * ART;
            z_Ar += 2 * ART;
            z_Am += 1 * ART;
            z_U += 1 * ART;
            z_Ps += 1 * ART;
        }
        else if(TECH>44 && TECH<=50)
        {
            document.getElementById("ART_t").innerHTML = "III";
            ARM += 250 * ART;
            z_Ar += 3 * ART;
            z_Am += 1 * ART;
            z_U += 2 * ART;
            z_Ps += 1 * ART;
        }
    /*Marynarka*/
        ARM += 200 * FLO;
        z_Sta += 1 * FLO; 
    /*Konwoje*/
        ARM += 25 * KON;
        z_Sta += 1 * KON;

    /*% Poboru*/              APP = ((ARM / POP)*100).toFixed(2)/1;

    /*Górnicy*/               document.getElementById("Gor").innerHTML = Gor;
                              pr_Gor = ((Gor / POP)*100).toFixed(2)/1;
    /*% Górnicy*/             document.getElementById("%_Gor").innerHTML = pr_Gor;

    /*Robotnicy*/             document.getElementById("Rob").innerHTML = Rob;
                              pr_Rob = ((Rob / POP)*100).toFixed(2)/1;
    /*% Robotnicy*/           document.getElementById("%_Rob").innerHTML = pr_Rob;

    /*Rolnicy*/               document.getElementById("Rol").innerHTML = Rol;
                              pr_Rol = ((Rol / POP)*100).toFixed(2)/1;
    /*% Rolnicy*/             document.getElementById("%_Rol").innerHTML = pr_Rol;

    /*Plantatorzy*/           document.getElementById("Pla").innerHTML = Pla;
                              pr_Pla = ((Pla / POP)*100).toFixed(2)/1;
    /*% Plantatorzy*/         document.getElementById("%_Pla").innerHTML = pr_Pla;

    /*Suma*/                  pr_zaw = (pr_Gor + pr_Rob + pr_Rol + pr_Pla + APP).toFixed(2)/1;
                              document.getElementById("pr_zaw").innerHTML = pr_zaw;
}
zapotrzebowania();

    /*PRODUKCJA DLA POPULACJI*/
    /*Zboże*/             let p_p_Zb = (p_Zb >= p_z_Zb)? p_z_Zb : p_Zb,
    /*Alkohol*/               p_p_Al = (p_Al >= p_z_Al)? p_z_Al : p_Al,
    /*Ubrania*/               p_p_U  = (p_U  >= p_z_U)?  p_z_U  : p_U,
    /*Meble*/                 p_p_Me = (p_Me >= p_z_Me)? p_z_Me : p_Me,
    /*Drewno*/                p_p_D  = (p_D  >= p_z_D)?  p_z_D  : p_D,
    /*Tkaniny*/               p_p_Tk = (p_Tk >= p_z_Tk)? p_z_Tk : p_Tk,
    /*Ryba*/                  p_p_R  = (p_R  >= p_z_R)?  p_z_R  : p_R,
    /*Tytoń*/                 p_p_Ty = (p_Ty >= p_z_Ty)? p_z_Ty : p_Ty,
    /*Produkty sporzywcze*/   p_p_Ps = (p_Ps >= p_z_Ps)? p_z_Ps : p_Ps,
    /*Mięso*/                 p_p_Mi = (p_Mi >= p_z_Mi)? p_z_Mi : p_Mi,
    /*Papier*/                p_p_Pa = (p_Pa >= p_z_Pa)? p_z_Pa : p_Pa,
    /*Szkło*/                 p_p_Sz = (p_Sz >= p_z_Sz)? p_z_Sz : p_Sz,
    /*Wino*/                  p_p_Wi = (p_Wi >= p_z_Wi)? p_z_Wi : p_Wi,
    /*Meble luksusowe*/       p_p_Ml = (p_Ml >= p_z_Ml)? p_z_Ml : p_Ml,
    /*Ubrania luksusowe*/     p_p_Ul = (p_Ul >= p_z_Ul)? p_z_Ul : p_Ul,
    /*Węgiel*/                p_p_We = (p_We >= p_z_We)? p_z_We : p_We,
    /*Porcelana*/             p_p_Po = (p_Po >= p_z_Po)? p_z_Po : p_Po,
    /*Owoc*/                  p_p_Ow = (p_Ow >= p_z_Ow)? p_z_Ow : p_Ow,
    /*Kawa*/                  p_p_K  = (p_K  >= p_z_K)?  p_z_K  : p_K,
    /*Cukier*/                p_p_C  = (p_C  >= p_z_C)?  p_z_C  : p_C,
    /*Herbata*/               p_p_H  = (p_H  >= p_z_H)?  p_z_H  : p_H;

    document.getElementById("KosBud").innerHTML = KosBud;
    document.getElementById("ARM").innerHTML = ARM;
    document.getElementById("APP").innerHTML = APP;

function rozliczenie()
{ 
    //sz_ - Suma zapotrzebowań
    //DOBRA DLA POPULACJI
    //Zboże
    let sz_Zb = z_Zb + p_z_Zb;
    document.getElementById("p_Zb").innerHTML = p_Zb; 
    document.getElementById("z_Zb").innerHTML = sz_Zb;     
    document.getElementById("b_Zb").innerHTML = p_Zb - sz_Zb;
    if(sz_Zb == 0) document.getElementById("%_Zb").innerHTML = 0;
    else          document.getElementById("%_Zb").innerHTML = ((p_Zb/sz_Zb)*100).toFixed(0);
    c_Zb = Cena(20, sz_Zb, p_Zb);
    document.getElementById("c_Zb").innerHTML = c_Zb;
    p_Zb -= p_p_Zb;
    r_Zb = c_Zb * (p_Zb - z_Zb);
    p_r_Zb = c_Zb * (p_p_Zb - p_z_Zb);
    document.getElementById("r_Zb").innerHTML = r_Zb + p_r_Zb;

    //Alkohol
    let sz_Al = z_Al + p_z_Al;
    document.getElementById("p_Al").innerHTML = p_Al; 
    document.getElementById("z_Al").innerHTML = sz_Al;     
    document.getElementById("b_Al").innerHTML = p_Al - sz_Al;
    if(sz_Al == 0) document.getElementById("%_Al").innerHTML = 0;
    else          document.getElementById("%_Al").innerHTML = ((p_Al/sz_Al)*100).toFixed(0);
    c_Al = Cena(30, sz_Al, p_Al);
    document.getElementById("c_Al").innerHTML = c_Al;
    p_Al -= p_p_Al;
    r_Al = c_Al * (p_Al - z_Al);
    p_r_Al = c_Al * (p_p_Al - p_z_Al);
    document.getElementById("r_Al").innerHTML = r_Al + p_r_Al;

    //Ubranie
    let sz_U = z_U + p_z_U;
    document.getElementById("p_U").innerHTML = p_U; 
    document.getElementById("z_U").innerHTML = sz_U;     
    document.getElementById("b_U").innerHTML = p_U - sz_U;
    if(sz_U == 0) document.getElementById("%_U").innerHTML = 0;
    else          document.getElementById("%_U").innerHTML = ((p_U/sz_U)*100).toFixed(0);
    c_U = Cena(30, sz_U, p_U);
    document.getElementById("c_U").innerHTML = c_U;
    p_U -= p_p_U;
    r_U = c_U * (p_U - z_U);
    p_r_U = c_U * (p_p_U - p_z_U);
    document.getElementById("r_U").innerHTML = r_U + p_r_U;

    //Meble
    let sz_Me = z_Me + p_z_Me;
    document.getElementById("p_Me").innerHTML = p_Me; 
    document.getElementById("z_Me").innerHTML = sz_Me;     
    document.getElementById("b_Me").innerHTML = p_Me - sz_Me;
    if(sz_Me == 0) document.getElementById("%_Me").innerHTML = 0;
    else          document.getElementById("%_Me").innerHTML = ((p_Me/sz_Me)*100).toFixed(0);
    c_Me = Cena(30, sz_Me, p_Me);
    document.getElementById("c_Me").innerHTML = c_Me;
    p_Me -= p_p_Me;
    r_Me = c_Me * (p_Me - z_Me);
    p_r_Me = c_Me * (p_p_Me - p_z_Me);
    document.getElementById("r_Me").innerHTML = r_Me + p_r_Me;

    //Drewno
    let sz_D = z_D + p_z_D;
    document.getElementById("p_D").innerHTML = p_D; 
    document.getElementById("z_D").innerHTML = sz_D;     
    document.getElementById("b_D").innerHTML = p_D - sz_D;
    if(sz_D == 0) document.getElementById("%_D").innerHTML = 0;
    else          document.getElementById("%_D").innerHTML = ((p_D/sz_D)*100).toFixed(0);
    c_D = Cena(20, sz_D, p_D);
    document.getElementById("c_D").innerHTML = c_D;
    p_D -= p_p_D;
    r_D = c_D * (p_D - z_D);
    p_r_D = c_D * (p_p_D - p_z_D);
    document.getElementById("r_D").innerHTML = r_D + p_r_D;

    //Tkaniny
    let sz_Tk = z_Tk + p_z_Tk;
    document.getElementById("p_Tk").innerHTML = p_Tk; 
    document.getElementById("z_Tk").innerHTML = sz_Tk;     
    document.getElementById("b_Tk").innerHTML = p_Tk - sz_Tk;
    if(sz_Tk == 0) document.getElementById("%_Tk").innerHTML = 0;
    else          document.getElementById("%_Tk").innerHTML = ((p_Tk/sz_Tk)*100).toFixed(0);
    c_Tk = Cena(20, sz_Tk, p_Tk);
    document.getElementById("c_Tk").innerHTML = c_Tk;
    p_Tk -= p_p_Tk;
    r_Tk = c_Tk * (p_Tk - z_Tk);
    p_r_Tk = c_Tk * (p_p_Tk - p_z_Tk);
    document.getElementById("r_Tk").innerHTML = r_Tk + p_r_Tk;

    //Ryba
    let sz_R = z_R + p_z_R;
    document.getElementById("p_R").innerHTML = p_R; 
    document.getElementById("z_R").innerHTML = sz_R;     
    document.getElementById("b_R").innerHTML = p_R - sz_R;
    if(sz_R == 0) document.getElementById("%_R").innerHTML = 0;
    else          document.getElementById("%_R").innerHTML = ((p_R/sz_R)*100).toFixed(0);
    c_R = Cena(20, sz_R, p_R);
    document.getElementById("c_R").innerHTML = c_R;
    p_R -= p_p_R;
    r_R = c_R * (p_R - z_R);
    p_r_R = c_R * (p_p_R - p_z_R);
    document.getElementById("r_R").innerHTML = r_R + p_r_R;

    //Tytoń
    let sz_Ty = z_Ty + p_z_Ty;
    document.getElementById("p_Ty").innerHTML = p_Ty; 
    document.getElementById("z_Ty").innerHTML = sz_Ty;     
    document.getElementById("b_Ty").innerHTML = p_Ty - sz_Ty;
    if(sz_Ty == 0) document.getElementById("%_Ty").innerHTML = 0;
    else          document.getElementById("%_Ty").innerHTML = ((p_Ty/sz_Ty)*100).toFixed(0);
    c_Ty = Cena(40, sz_Ty, p_Ty);
    document.getElementById("c_Ty").innerHTML = c_Ty;
    p_Ty -= p_p_Ty;
    r_Ty = c_Ty * (p_Ty - z_Ty);
    p_r_Ty = c_Ty * (p_p_Ty - p_z_Ty);
    document.getElementById("r_Ty").innerHTML = r_Ty + p_r_Ty;

    //Produkty spożywcze
    let sz_Ps = z_Ps + p_z_Ps;
    document.getElementById("p_Ps").innerHTML = p_Ps; 
    document.getElementById("z_Ps").innerHTML = sz_Ps;     
    document.getElementById("b_Ps").innerHTML = p_Ps - sz_Ps;
    if(sz_Ps == 0) document.getElementById("%_Ps").innerHTML = 0;
    else          document.getElementById("%_Ps").innerHTML = ((p_Ps/sz_Ps)*100).toFixed(0);
    c_Ps = Cena(30, sz_Ps, p_Ps);
    document.getElementById("c_Ps").innerHTML = c_Ps;
    p_Ps -= p_p_Ps;
    r_Ps = c_Ps * (p_Ps - z_Ps);
    p_r_Ps = c_Ps * (p_p_Ps - p_z_Ps);
    document.getElementById("r_Ps").innerHTML = r_Ps + p_r_Ps;

    //Mięso
    let sz_Mi = z_Mi + p_z_Mi;
    document.getElementById("p_Mi").innerHTML = p_Mi; 
    document.getElementById("z_Mi").innerHTML = sz_Mi;     
    document.getElementById("b_Mi").innerHTML = p_Mi - sz_Mi;
    if(sz_Mi == 0) document.getElementById("%_Mi").innerHTML = 0;
    else          document.getElementById("%_Mi").innerHTML = ((p_Mi/sz_Mi)*100).toFixed(0);
    c_Mi = Cena(30, sz_Mi, p_Mi);
    document.getElementById("c_Mi").innerHTML = c_Mi;
    p_Mi -= p_p_Mi;
    r_Mi = c_Mi * (p_Mi - z_Mi);
    p_r_Mi = c_Mi * (p_p_Mi - p_z_Mi);
    document.getElementById("r_Mi").innerHTML = r_Mi + p_r_Mi;

    //Papier
    let sz_Pa = z_Pa + p_z_Pa;
    document.getElementById("p_Pa").innerHTML = p_Pa; 
    document.getElementById("z_Pa").innerHTML = sz_Pa;     
    document.getElementById("b_Pa").innerHTML = p_Pa - sz_Pa;
    if(sz_Pa == 0) document.getElementById("%_Pa").innerHTML = 0;
    else          document.getElementById("%_Pa").innerHTML = ((p_Pa/sz_Pa)*100).toFixed(0);
    c_Pa = Cena(30, sz_Pa, p_Pa);
    document.getElementById("c_Pa").innerHTML = c_Pa;
    p_Pa -= p_p_Pa;
    r_Pa = c_Pa * (p_Pa - z_Pa);
    p_r_Pa = c_Pa * (p_p_Pa - p_z_Pa);
    document.getElementById("r_Pa").innerHTML = r_Pa + p_r_Pa;

    //Szkło
    let sz_Sz = z_Sz + p_z_Sz;
    document.getElementById("p_Sz").innerHTML = p_Sz; 
    document.getElementById("z_Sz").innerHTML = sz_Sz;     
    document.getElementById("b_Sz").innerHTML = p_Sz - sz_Sz;
    if(sz_Sz == 0) document.getElementById("%_Sz").innerHTML = 0;
    else          document.getElementById("%_Sz").innerHTML = ((p_Sz/sz_Sz)*100).toFixed(0);
    c_Sz = Cena(40, sz_Sz, p_Sz);
    document.getElementById("c_Sz").innerHTML = c_Sz;
    p_Sz -= p_p_Sz;
    r_Sz = c_Sz * (p_Sz - z_Sz);
    p_r_Sz = c_Sz * (p_p_Sz - p_z_Sz);
    document.getElementById("r_Sz").innerHTML = r_Sz + p_r_Sz;

    //Wino
    let sz_Wi = z_Wi + p_z_Wi;
    document.getElementById("p_Wi").innerHTML = p_Wi; 
    document.getElementById("z_Wi").innerHTML = sz_Wi;     
    document.getElementById("b_Wi").innerHTML = p_Wi - sz_Wi;
    if(sz_Wi == 0) document.getElementById("%_Wi").innerHTML = 0;
    else          document.getElementById("%_Wi").innerHTML = ((p_Wi/sz_Wi)*100).toFixed(0);
    c_Wi = Cena(50, sz_Wi, p_Wi);
    document.getElementById("c_Wi").innerHTML = c_Wi;
    p_Wi -= p_p_Wi;
    r_Wi = c_Wi * (p_Wi - z_Wi);
    p_r_Wi = c_Wi * (p_p_Wi - p_z_Wi);
    document.getElementById("r_Wi").innerHTML = r_Wi + p_r_Wi;

    //Meble luksusowe
    let sz_Ml = z_Ml + p_z_Ml;
    document.getElementById("p_Ml").innerHTML = p_Ml; 
    document.getElementById("z_Ml").innerHTML = sz_Ml;     
    document.getElementById("b_Ml").innerHTML = p_Ml - sz_Ml;
    if(sz_Ml == 0) document.getElementById("%_Ml").innerHTML = 0;
    else          document.getElementById("%_Ml").innerHTML = ((p_Ml/sz_Ml)*100).toFixed(0);
    c_Ml = Cena(60, sz_Ml, p_Ml);
    document.getElementById("c_Ml").innerHTML = c_Ml;
    p_Ml -= p_p_Ml;
    r_Ml = c_Ml * (p_Ml - z_Ml);
    p_r_Ml = c_Ml * (p_p_Ml - p_z_Ml);
    document.getElementById("r_Ml").innerHTML = r_Ml + p_r_Ml;

    //Ubrania luksusowe
    let sz_Ul = z_Ul + p_z_Ul;
    document.getElementById("p_Ul").innerHTML = p_Ul; 
    document.getElementById("z_Ul").innerHTML = sz_Ul;     
    document.getElementById("b_Ul").innerHTML = p_Ul - sz_Ul;
    if(sz_Ul == 0) document.getElementById("%_Ul").innerHTML = 0;
    else          document.getElementById("%_Ul").innerHTML = ((p_Ul/sz_Ul)*100).toFixed(0);
    c_Ul = Cena(60, sz_Ul, p_Ul);
    document.getElementById("c_Ul").innerHTML = c_Ul;
    p_Ul -= p_p_Ul;
    r_Ul = c_Ul * (p_Ul - z_Ul);
    p_r_Ul = c_Ul * (p_p_Ul - p_z_Ul);
    document.getElementById("r_Ul").innerHTML = r_Ul + p_r_Ul;

    //Węgiel
    let sz_We = z_We + p_z_We;
    document.getElementById("p_We").innerHTML = p_We; 
    document.getElementById("z_We").innerHTML = sz_We;     
    document.getElementById("b_We").innerHTML = p_We - sz_We;
    if(sz_We == 0) document.getElementById("%_We").innerHTML = 0;
    else          document.getElementById("%_We").innerHTML = ((p_We/sz_We)*100).toFixed(0);
    c_We = Cena(30, sz_We, p_We);
    document.getElementById("c_We").innerHTML = c_We;
    p_We -= p_p_We;
    r_We = c_We * (p_We - z_We);
    p_r_We = c_We * (p_p_We - p_z_We);
    document.getElementById("r_We").innerHTML = r_We + p_r_We;

    //Porcelana
    let sz_Po = z_Po + p_z_Po;
    document.getElementById("p_Po").innerHTML = p_Po; 
    document.getElementById("z_Po").innerHTML = sz_Po;     
    document.getElementById("b_Po").innerHTML = p_Po - sz_Po;
    if(sz_Po == 0) document.getElementById("%_Po").innerHTML = 0;
    else          document.getElementById("%_Po").innerHTML = ((p_Po/sz_Po)*100).toFixed(0);
    c_Po = Cena(70, sz_Po, p_Po);
    document.getElementById("c_Po").innerHTML = c_Po;
    p_Po -= p_p_Po;
    r_Po = c_Po * (p_Po - z_Po);
    p_r_Po = c_Po * (p_p_Po - p_z_Po);
    document.getElementById("r_Po").innerHTML = r_Po + p_r_Po;

    //Owoc
    let sz_Ow = z_Ow + p_z_Ow;
    document.getElementById("p_Ow").innerHTML = p_Ow; 
    document.getElementById("z_Ow").innerHTML = sz_Ow;     
    document.getElementById("b_Ow").innerHTML = p_Ow - sz_Ow;
    if(sz_Ow == 0) document.getElementById("%_Ow").innerHTML = 0;
    else          document.getElementById("%_Ow").innerHTML = ((p_Ow/sz_Ow)*100).toFixed(0);
    c_Ow = Cena(50, sz_Ow, p_Ow);
    document.getElementById("c_Ow").innerHTML = c_Ow;
    p_Ow -= p_p_Ow;
    r_Ow = c_Ow * (p_Ow - z_Ow);
    p_r_Ow = c_Ow * (p_p_Ow - p_z_Ow);
    document.getElementById("r_Ow").innerHTML = r_Ow + p_r_Ow;

    //Kawa
    let sz_K = z_K + p_z_K;
    document.getElementById("p_K").innerHTML = p_K; 
    document.getElementById("z_K").innerHTML = sz_K;     
    document.getElementById("b_K").innerHTML = p_K - sz_K;
    if(sz_K == 0) document.getElementById("%_K").innerHTML = 0;
    else          document.getElementById("%_K").innerHTML = ((p_K/sz_K)*100).toFixed(0);
    c_K = Cena(50, sz_K, p_K);
    document.getElementById("c_K").innerHTML = c_K;
    p_K -= p_p_K;
    r_K = c_K * (p_K - z_K);
    p_r_K = c_K * (p_p_K - p_z_K);
    document.getElementById("r_K").innerHTML = r_K + p_r_K;

    //Cukier
    let sz_C = z_C + p_z_C;
    document.getElementById("p_C").innerHTML = p_C; 
    document.getElementById("z_C").innerHTML = sz_C;     
    document.getElementById("b_C").innerHTML = p_C - sz_C;
    if(sz_C == 0) document.getElementById("%_C").innerHTML = 0;
    else          document.getElementById("%_C").innerHTML = ((p_C/sz_C)*100).toFixed(0);
    c_C = Cena(30, sz_C, p_C);
    document.getElementById("c_C").innerHTML = c_C;
    p_C -= p_p_C;
    r_C = c_C * (p_C - z_C);
    p_r_C = c_C * (p_p_C - p_z_C);
    document.getElementById("r_C").innerHTML = r_C + p_r_C;

    //Herbata
    let sz_H = z_H + p_z_H;
    document.getElementById("p_H").innerHTML = p_H; 
    document.getElementById("z_H").innerHTML = sz_H;     
    document.getElementById("b_H").innerHTML = p_H - sz_H;
    if(sz_H == 0) document.getElementById("%_H").innerHTML = 0;
    else          document.getElementById("%_H").innerHTML = ((p_H/sz_H)*100).toFixed(0);
    c_H = Cena(30, sz_H, p_H);
    document.getElementById("c_H").innerHTML = c_H;
    p_H -= p_p_H;
    r_H = c_H * (p_H - z_H);
    p_r_H = c_H * (p_p_H - p_z_H);
    document.getElementById("r_H").innerHTML = r_H + p_r_H;

    //RESZTA
    //Żelazo
    document.getElementById("p_Ze").innerHTML = p_Ze; 
    document.getElementById("z_Ze").innerHTML = z_Ze;     
    document.getElementById("b_Ze").innerHTML = p_Ze - z_Ze;
    if(z_Ze == 0) document.getElementById("%_Ze").innerHTML = 0;
    else          document.getElementById("%_Ze").innerHTML = ((p_Ze/z_Ze)*100).toFixed(0);
    c_Ze = Cena(40, z_Ze, p_Ze);
    document.getElementById("c_Ze").innerHTML = c_Ze;
    r_Ze = c_Ze * (p_Ze - z_Ze);
    document.getElementById("r_Ze").innerHTML = r_Ze;

    //Narzędzia
    document.getElementById("p_Nar").innerHTML = p_Nar; 
    document.getElementById("z_Nar").innerHTML = z_Nar;     
    document.getElementById("b_Nar").innerHTML = p_Nar - z_Nar;
    if(z_Nar == 0) document.getElementById("%_Nar").innerHTML = 0;
    else          document.getElementById("%_Nar").innerHTML = ((p_Nar/z_Nar)*100).toFixed(0);
    c_Nar = Cena(40, z_Nar, p_Nar);
    document.getElementById("c_Nar").innerHTML = c_Nar;
    r_Nar = c_Nar * (p_Nar - z_Nar);
    document.getElementById("r_Nar").innerHTML = r_Nar;

    //Barwnik
    document.getElementById("p_Ba").innerHTML = p_Ba; 
    document.getElementById("z_Ba").innerHTML = z_Ba;     
    document.getElementById("b_Ba").innerHTML = p_Ba - z_Ba;
    if(z_Ba == 0) document.getElementById("%_Ba").innerHTML = 0;
    else          document.getElementById("%_Ba").innerHTML = ((p_Ba/z_Ba)*100).toFixed(0);
    c_Ba = Cena(40, z_Ba, p_Ba);
    document.getElementById("c_Ba").innerHTML = c_Ba;
    r_Ba = c_Ba * (p_Ba - z_Ba);
    document.getElementById("r_Ba").innerHTML = r_Ba;

    //Materiały wybuchowe
    document.getElementById("p_Mw").innerHTML = p_Mw; 
    document.getElementById("z_Mw").innerHTML = z_Mw;     
    document.getElementById("b_Mw").innerHTML = p_Mw - z_Mw;
    if(z_Mw == 0) document.getElementById("%_Mw").innerHTML = 0;
    else          document.getElementById("%_Mw").innerHTML = ((p_Mw/z_Mw)*100).toFixed(0);
    c_Mw = Cena(50, z_Mw, p_Mw);
    document.getElementById("c_Mw").innerHTML = c_Mw;
    r_Mw = c_Mw * (p_Mw - z_Mw);
    document.getElementById("r_Mw").innerHTML = r_Mw;

    //Nawóż
    document.getElementById("p_Naw").innerHTML = p_Naw; 
    document.getElementById("z_Naw").innerHTML = z_Naw;     
    document.getElementById("b_Naw").innerHTML = p_Naw - z_Naw;
    if(z_Naw == 0) document.getElementById("%_Naw").innerHTML = 0;
    else          document.getElementById("%_Naw").innerHTML = ((p_Naw/z_Naw)*100).toFixed(0);
    c_Naw = Cena(30, z_Naw, p_Naw);
    document.getElementById("c_Naw").innerHTML = c_Naw;
    r_Naw = c_Naw * (p_Naw - z_Naw);
    document.getElementById("r_Naw").innerHTML = r_Naw;

    //Twarde drewno
    document.getElementById("p_Td").innerHTML = p_Td; 
    document.getElementById("z_Td").innerHTML = z_Td;     
    document.getElementById("b_Td").innerHTML = p_Td - z_Td;
    if(z_Td == 0) document.getElementById("%_Td").innerHTML = 0;
    else          document.getElementById("%_Td").innerHTML = ((p_Td/z_Td)*100).toFixed(0);
    c_Td = Cena(40, z_Td, p_Td);
    document.getElementById("c_Td").innerHTML = c_Td;
    r_Td = c_Td * (p_Td - z_Td);
    document.getElementById("r_Td").innerHTML = r_Td;

    //Ołów
    document.getElementById("p_Ol").innerHTML = p_Ol; 
    document.getElementById("z_Ol").innerHTML = z_Ol;     
    document.getElementById("b_Ol").innerHTML = p_Ol - z_Ol;
    if(z_Ol == 0) document.getElementById("%_Ol").innerHTML = 0;
    else          document.getElementById("%_Ol").innerHTML = ((p_Ol/z_Ol)*100).toFixed(0);
    c_Ol = Cena(40, z_Ol, p_Ol);
    document.getElementById("c_Ol").innerHTML = c_Ol;
    r_Ol = c_Ol * (p_Ol - z_Ol);
    document.getElementById("r_Ol").innerHTML = r_Ol;

    //Jedwab
    document.getElementById("p_J").innerHTML = p_J; 
    document.getElementById("z_J").innerHTML = z_J;     
    document.getElementById("b_J").innerHTML = p_J - z_J;
    if(z_J == 0) document.getElementById("%_J").innerHTML = 0;
    else          document.getElementById("%_J").innerHTML = ((p_J/z_J)*100).toFixed(0);
    c_J = Cena(40, z_J, p_J);
    document.getElementById("c_J").innerHTML = c_J;
    r_J = c_J * (p_J - z_J);
    document.getElementById("r_J").innerHTML = r_J;

    //Stal
    document.getElementById("p_St").innerHTML = p_St; 
    document.getElementById("z_St").innerHTML = z_St;     
    document.getElementById("b_St").innerHTML = p_St - z_St;
    if(z_St == 0) document.getElementById("%_St").innerHTML = 0;
    else          document.getElementById("%_St").innerHTML = ((p_St/z_St)*100).toFixed(0);
    c_St = Cena(50, z_St, p_St);
    document.getElementById("c_St").innerHTML = c_St;
    r_St = c_St * (p_St - z_St);
    document.getElementById("r_St").innerHTML = r_St;

    //Siarka
    document.getElementById("p_S").innerHTML = p_S; 
    document.getElementById("z_S").innerHTML = z_S;     
    document.getElementById("b_S").innerHTML = p_S - z_S;
    if(z_S == 0) document.getElementById("%_S").innerHTML = 0;
    else          document.getElementById("%_S").innerHTML = ((p_S/z_S)*100).toFixed(0);
    c_S = Cena(50, z_S, p_S);
    document.getElementById("c_S").innerHTML = c_S;
    r_S = c_S * (p_S - z_S);
    document.getElementById("r_S").innerHTML = r_S;

    //Złoto
    document.getElementById("p_Zl").innerHTML = p_Zl;      
    document.getElementById("b_Zl").innerHTML = p_Zl;
    r_Zl = 100 * p_Zl;
    document.getElementById("r_Zl").innerHTML = r_Zl;

    //Broń
    document.getElementById("p_Br").innerHTML = p_Br; 
    document.getElementById("z_Br").innerHTML = z_Br;     
    document.getElementById("b_Br").innerHTML = p_Br - z_Br;
    if(z_Br == 0) document.getElementById("%_Br").innerHTML = 0;
    else          document.getElementById("%_Br").innerHTML = ((p_Br/z_Br)*100).toFixed(0);
    c_Br = Cena(60, z_Br, p_Br);
    document.getElementById("c_Br").innerHTML = c_Br;
    r_Br = c_Br * (p_Br - z_Br);
    document.getElementById("r_Br").innerHTML = r_Br;

    //Artyleria
    document.getElementById("p_Ar").innerHTML = p_Ar; 
    document.getElementById("z_Ar").innerHTML = z_Ar;     
    document.getElementById("b_Ar").innerHTML = p_Ar - z_Ar;
    if(z_Ar == 0) document.getElementById("%_Ar").innerHTML = 0;
    else          document.getElementById("%_Ar").innerHTML = ((p_Ar/z_Ar)*100).toFixed(0);
    c_Ar = Cena(70, z_Ar, p_Ar);
    document.getElementById("c_Ar").innerHTML = c_Ar;
    r_Ar = c_Ar * (p_Ar - z_Ar);
    document.getElementById("r_Ar").innerHTML = r_Ar;

    //Amunicja
    document.getElementById("p_Am").innerHTML = p_Am; 
    document.getElementById("z_Am").innerHTML = z_Am;     
    document.getElementById("b_Am").innerHTML = p_Am - z_Am;
    if(z_Am == 0) document.getElementById("%_Am").innerHTML = 0;
    else          document.getElementById("%_Am").innerHTML = ((p_Am/z_Am)*100).toFixed(0);
    c_Am = Cena(50, z_Am, p_Am);
    document.getElementById("c_Am").innerHTML = c_Am;
    r_Am = c_Am * (p_Am - z_Am);
    document.getElementById("r_Am").innerHTML = r_Am;

    //Statek
    document.getElementById("p_Sta").innerHTML = p_Sta; 
    document.getElementById("z_Sta").innerHTML = z_Sta;     
    document.getElementById("b_Sta").innerHTML = p_Sta - z_Sta;            
    if(z_Sta == 0) document.getElementById("%_Sta").innerHTML = 0;
    else          document.getElementById("%_Sta").innerHTML = ((p_Sta/z_Sta)*100).toFixed(0);
    c_Sta = Cena(60, z_Sta, p_Sta);
    document.getElementById("c_Sta").innerHTML = c_Sta;
    r_Sta = c_Sta * (p_Sta - z_Sta);
    document.getElementById("r_Sta").innerHTML = r_Sta;
}
rozliczenie();

    //L_pp_p - Łącznie potrzeby populacji plus
    //L_pp_m - Łącznie potrzeby populacji minus
    //Suma_pp - Suma rozliczenia potrzeb populacji
    //ZasPot - Zaspokojenie potrzeb (w %)
    //L_p - Łącznie plus
    //L_m - Łącznie minus
    //Suma - Suma rozliczenia
    let L_pp_p = p_p_Zb + p_p_Al + p_p_U + p_p_Me + p_p_D + p_p_Tk + p_p_R + p_p_Ty + p_p_Ps + p_p_Mi + p_p_Pa + p_p_Sz + p_p_Wi + p_p_Ml + p_p_Ul + p_p_We + p_p_Po + p_p_Ow + p_p_K + p_p_C + p_p_H,

        L_pp_m = p_z_Zb + p_z_Al + p_z_U + p_z_Me + p_z_D + p_z_Tk + p_z_R + p_z_Ty + p_z_Ps + p_z_Mi + p_z_Pa + p_z_Sz + p_z_Wi + p_z_Ml + p_z_Ul + p_z_We + p_z_Po + p_z_Ow + p_z_K + p_z_C + p_z_H,

        Suma_pp = p_r_Zb + p_r_Al + p_r_U + p_r_Me + p_r_D + p_r_Tk + p_r_R + p_r_Ty + p_r_Ps + p_r_Mi + p_r_Pa + p_r_Sz + p_r_Wi + p_r_Ml + p_r_Ul + p_r_We + p_r_Po + p_r_Ow + p_r_K + p_r_C + p_r_H,

        ZasPot = ((L_pp_p / L_pp_m)*100).toFixed(2)/1,


        L_p = p_Ps + p_U + p_R + p_Tk + p_Zb + p_Pa + p_D + p_Ze + p_We + p_Nar + p_Ba + p_Mw + p_Naw + p_Sz + p_Td + p_Ol + p_J + p_St + p_S + p_K + p_Ow + p_Zl + p_Al + p_Ul + p_Ml + p_Mi + p_Po + p_C + p_H + p_Ty + p_Wi + p_Br + p_Ar + p_Am + p_Sta + p_Me,

        L_m = z_Ps + z_U + z_R + z_Tk + z_Zb + z_Pa + z_D + z_Ze + z_We + z_Nar + z_Ba + z_Mw + z_Naw + z_Sz + z_Td + z_Ol + z_J + z_St + z_S + z_K + z_Ow + z_Al + z_Ul + z_Ml + z_Mi + z_Po + z_C + z_H + z_Ty + z_Wi + z_Br + z_Ar + z_Am + z_Sta + z_Me, 

        Suma = r_Ps + r_U + r_R + r_Tk + r_Zb + r_Pa + r_D + r_Ze + r_We + r_Nar + r_Ba + r_Mw + r_Naw + r_Sz + r_Td + r_Ol + r_J + r_St + r_S + r_K + r_Ow + r_Zl + r_Al + r_Ul + r_Ml + r_Mi + r_Po + r_C + r_H + r_Ty + r_Wi + r_Br + r_Ar + r_Am + r_Sta + r_Me,

        Czysto = Suma + Suma_pp,

        UC = ((Czysto - KosBud)/CzUC).toFixed(0)/1;

        sum_kop = Kw + Kze + Ko + Ks + Kzl,

        sum_bud = T + Zsp + Fw + Fm + Hsz + N + P + Zch + Zsy + Hst + Sd + Ss + Zz + Za + Fz + Fps + Fr + Fk + Fpr + R + Mr + Pk + Pbaw + Pbar + Ph + Pt + Pc + Po + Pj,

        sum_sum = sum_bud + sum_kop,

        sum_pocz = Pib + Pik,

        bud_przy = sum_bud - Pib,

        kop_przy = sum_kop - Pik,

        sum_przy = (sum_bud + sum_kop) - (sum_pocz),

        sum_usu = Ub + Uk,

        pods_budy = sum_przy + sum_usu;

    document.getElementById("L_p").innerHTML = L_p;
    document.getElementById("L_m").innerHTML = L_m; 
    document.getElementById("Roz").innerHTML = L_p - L_m;
    document.getElementById("Suma").innerHTML = Suma;

    document.getElementById("L_pp_p").innerHTML = L_pp_p;
    document.getElementById("L_pp_m").innerHTML = L_pp_m;
    document.getElementById("Roz_pp").innerHTML = L_pp_p - L_pp_m;
    document.getElementById("Suma_pp").innerHTML = Suma_pp;
    document.getElementById("ZasPot").innerHTML = ZasPot;
    document.getElementById("Czysto").innerHTML = Czysto - KosBud;
    document.getElementById("UC").innerHTML = UC;

    document.getElementById("sum_kop").innerHTML = sum_kop;
    document.getElementById("sum_bud").innerHTML = sum_bud;
    document.getElementById("sum_sum").innerHTML = sum_sum;
    document.getElementById("sum_pocz").innerHTML = sum_pocz;
    document.getElementById("bud_przy").innerHTML = bud_przy;
    document.getElementById("kop_przy").innerHTML = kop_przy;
    document.getElementById("sum_przy").innerHTML = sum_przy;
    document.getElementById("sum_usu").innerHTML = sum_usu;
    document.getElementById("pods_budy").innerHTML = pods_budy;

    let NAZ = document.getElementById("NAZ").value,
        Nazwa = "";
    for(let i = 0; i < NAZ.length; i++)
    {
        if(NAZ[i] == "/" || NAZ[i] == "\\" || NAZ[i] == ":" || NAZ[i] == "*" || NAZ[i] == "?" || NAZ[i] == "\"" || NAZ[i] == "<" || NAZ[i] == ">" || NAZ[i] == "|") {}
        else Nazwa += NAZ[i];
    }
    //Pobranie kopii w formie txt
    if(document.getElementById("kopia").checked)
    {
        let blob = new Blob(
           [`Rynek 1.4.4`,
            `\n\nNazwa Kraju / Uni celnej: ${Nazwa}`,
            `\nIlość członków uni celnej: ${CzUC}`,
            `\nTechnologia: ${TECH}`,
            `\nTura: ${tura}`,
            `\nPopulacja: ${POP}`,
            `\nZaspokojenie potrzeb populacji: ${ZasPot}%`,
            `\n\nPoczątkowa ilość budynków: ${Pib}, Początkowa ilość kopalni: ${Pik}, Suma: ${sum_pocz}`,
            `\nIlość budynków: ${sum_bud},            Ilość kopalń: ${sum_kop},             Łącznie: ${sum_sum}`,
            `\nPrzyrost budynków: ${bud_przy},         Przyrost kopalń: ${kop_przy},          Przyrost o: ${sum_przy}`,
            `\nUsunięte budynki: ${Ub},          Usunięte kopalnie: ${Uk},        Łącznie: ${sum_usu}`,
            `\nDo Toolboxa: ${pods_budy}`,
            `\n\n//Zatrudnienie//`,
            `\nGórnicy: ${Gor}, ${pr_Gor}%`,
            `\nRobotnicy: ${Rob}, ${pr_Rob}%`,
            `\nRolnicy: ${Rol}, ${pr_Rol}%`,
            `\nPlantatorzy: ${Pla}, ${pr_Pla}%`,
            `\nŻołnierze i Marynarze: ${ARM}, ${APP}%`,
            `\nSuma punktów procentowych zawodów: ${pr_zaw}%`,
            `\n\n//BUDYNKI//`, 
            `\n---Zasoby---`, 
            `\nTartak: ${T}`,
            `\nKopalnia węgla: ${Kw}`,
            `\nKopalnia żelaza: ${Kze}`,
            `\nKopalnia ołowiu: ${Ko}`,
            `\nKopalnia siarki: ${Ks}`,
            `\nKopalnia złota: ${Kzl}`,
            `\n\n---Przemysł---`,
            `\nZakład spożywczy: ${Zsp}`,
            `\nFabryka włókiennicza: ${Fw}`,
            `\nFabryka mebli: ${Fm}`,
            `\nHuta szkła: ${Hsz}`,
            `\nNarzędziownia: ${N}`,
            `\nPapiernia: ${P}`,
            `\nZakład chemiczny: ${Zch}`,
            `\nZakład syntetyczny: ${Zsy}`, 
            `\nHuta stali: ${Hst}`,
            `\nStocznia (drewno): ${Sd}`,
            `\nStocznia (stal): ${Ss}`,
            `\nZakład zbrojeniowy: ${Zz}`,
            `\nZakład amunicyjny: ${Za}`,
            `\n\n---Żywność---`,
            `\nFarma żyta: ${Fz}`,
            `\nFarma pszenicy: ${Fps}`,
            `\nFarma ryżu: ${Fr}`,
            `\nFarma kukurydzy: ${Fk}`,
            `\nFarma prosa: ${Fpr}`,
            `\nRanczo: ${R}`,
            `\nMolo rybackie: ${Mr}`,
            `\n\n---Plantacje---`,
            `\nPlantacja kawy: ${Pk}`,
            `\nPlantacja bawełny: ${Pbaw}`,
            `\nPlantacja barwników: ${Pbar}`,
            `\nPlantacja herbaty: ${Ph}`,
            `\nPlantacja tytoniu: ${Pt}`,
            `\nPlantacja cukru: ${Pc}`,
            `\nPlantacja owoców: ${Po}`,
            `\nPlantacja jedwabiu: ${Pj}`,
            `\n\n//KRAJ//`,
            `\n---Armia---`,
            `\nInfantry: ${INF}`,
            `\nArchers: ${ARC}`,
            `\nCavalary: ${CAV}`,
            `\nArtillery: ${ART}`,
            `\nMarynarka: ${FLO}`,
            `\nKonwoje: ${KON}`,
            `\n\n---Mnożniki zapotrzebowań---`,
            `\nProdukty sporzywcze: ${m_Ps}`,
            `\nUbranie: ${m_U}`,
            `\nMebel: ${m_Me}`,
            `\nRyba: ${m_R}`,
            `\nTkanina: ${m_Tk}`,
            `\nZboże: ${m_Zb}`,
            `\nPapier: ${m_Pa}`,
            `\nDrewno: ${m_D}`,
            `\nWęgiel: ${m_We}`,
            `\nSzkło: ${m_Sz}`,
            `\nKawa: ${m_K}`,
            `\nOwoc: ${m_Ow}`,
            `\nAlkohol: ${m_Al}`,
            `\nUbranie luksusowe: ${m_Ul}`,
            `\nMebel luksusowy: ${m_Ml}`,
            `\nMięso: ${m_Mi}`,
            `\nPorcelana: ${m_Po}`,
            `\nCukier: ${m_C}`,
            `\nHerbata: ${m_H}`,
            `\nTytoń: ${m_Ty}`,
            `\n\n//ROZLICZENIE//`,
            `\nProdukt - Produkcja - Zapotrzebowanie - Bilans - Cena Realna - Rozlicznie`,
            `\n---Podstawowe dobra---`,
            `\nProdukty spożywcze: ${p_Ps + p_p_Ps}, ${z_Ps + p_z_Ps}, ${(p_Ps + p_p_Ps) - (z_Ps + p_z_Ps)}, ${c_Ps}, ${r_Ps + p_r_Ps}`,
            `\nUbranie: ${p_U + p_p_U}, ${z_U + p_z_U}, ${(p_U + p_p_U) - (z_U + p_z_U)}, ${c_U}, ${r_U + p_r_U}`,
            `\nMebel: ${p_Me + p_p_Me}, ${z_Me + p_z_Me}, ${(p_Me + p_p_Me) - (z_Me + p_z_Me)}, ${c_Me}, ${r_Me + p_r_Me}`,
            `\nRyba: ${p_R + p_p_R}, ${z_R + p_z_R}, ${(p_R + p_p_R) - (z_R + p_z_R)}, ${c_R}, ${r_R + p_r_R}`,
            `\nTkanina: ${p_Tk + p_p_Tk}, ${z_Tk + p_z_Tk}, ${(p_Tk + p_p_Tk) - (z_Tk + p_z_Tk)}, ${c_Tk}, ${r_Tk + p_r_Tk}`,
            `\nZboże: ${p_Zb + p_p_Zb}, ${z_Zb + p_z_Zb}, ${(p_Zb + p_p_Zb) - (z_Zb + p_z_Zb)}, ${c_Zb}, ${r_Zb + p_r_Zb}`,
            `\nPapier: ${p_Pa + p_p_Pa}, ${z_Pa + p_z_Pa}, ${(p_Pa + p_p_Pa) - (z_Pa + p_z_Pa)}, ${c_Pa}, ${r_Pa + p_r_Pa}`,
            `\nDrewno: ${p_D + p_p_D}, ${z_D + p_z_D}, ${(p_D + p_p_D) - (z_D + p_z_D)}, ${c_D}, ${r_D + p_r_D}`,
            `\n---Towary przemysłowe---`,
            `\nŻelazo: ${p_Ze}, ${z_Ze}, ${p_Ze - z_Ze}, ${c_Ze}, ${r_Ze}`,
            `\nWęgiel: ${p_We + p_p_We}, ${z_We + p_z_We}, ${(p_We + p_p_We) - (z_We + p_z_We)}, ${c_We}, ${r_We + p_r_We}`,
            `\nNarzedzia: ${p_Nar}, ${z_Nar}, ${p_Nar - z_Nar}, ${c_Nar}, ${r_Nar}`,
            `\nBarwnik: ${p_Ba}, ${z_Ba}, ${p_Ba - z_Ba}, ${c_Ba}, ${r_Ba}`,
            `\nMateriały wybuchowe: ${p_Mw}, ${z_Mw}, ${p_Mw - z_Mw}, ${c_Mw}, ${r_Mw}`,
            `\nNawóz: ${p_Naw}, ${z_Naw}, ${p_Naw - z_Naw}, ${c_Naw}, ${r_Naw}`,
            `\nSzkło: ${p_Sz + p_p_Sz}, ${z_Sz + p_z_Sz}, ${(p_Sz + p_p_Sz) - (z_Sz + p_z_Sz)}, ${c_Sz}, ${r_Sz + p_r_Sz}`,
            `\nTwarde drewno: ${p_Td}, ${z_Td}, ${p_Td - z_Td}, ${c_Td}, ${r_Td}`,
            `\nOłów: ${p_Ol}, ${z_Ol}, ${p_Ol - z_Ol}, ${c_Ol}, ${r_Ol}`,
            `\nJedwab: ${p_J}, ${z_J}, ${p_J - z_J}, ${c_J}, ${r_J}`,
            `\nStal: ${p_St}, ${z_St}, ${p_St - z_St}, ${c_St}, ${r_St}`,
            `\nSiarka: ${p_S}, ${z_S}, ${p_S - z_S}, ${c_S}, ${r_S}`,
            `\n---Towary luksusowe---`,
            `\nKawa: ${p_K + p_p_K}, ${z_K + p_z_K}, ${(p_K + p_p_K) - (z_K + p_z_K)}, ${c_K}, ${r_K + p_r_K}`,
            `\nOwoc: ${p_Ow + p_p_Ow}, ${z_Ow + p_z_Ow}, ${(p_Ow + p_p_Ow) - (z_Ow + p_z_Ow)}, ${c_Ow}, ${r_Ow + p_r_Ow}`,
            `\nZłoto: ${p_Zl}, - , ${p_Zl}, - , ${r_Zl}, -`,
            `\nAlkohol: ${p_Al + p_p_Al}, ${z_Al + p_z_Al}, ${(p_Al + p_p_Al) - (z_Al + p_z_Al)}, ${c_Al}, ${r_Al + p_r_Al}`,
            `\nUbranie luksusowe: ${p_Ul + p_p_Ul}, ${z_Ul + p_z_Ul}, ${(p_Ul + p_p_Ul) - (z_Ul + p_z_Ul)}, ${c_Ul}, ${r_Ul + p_r_Ul}`,
            `\nMebel luksusowy: ${p_Ml + p_p_Ml}, ${z_Ml + p_z_Ml}, ${(p_Ml + p_p_Ml) - (z_Ml + p_z_Ml)}, ${c_Ml}, ${r_Ml + p_r_Ml}`,
            `\nMięso: ${p_Mi + p_p_Mi}, ${z_Mi + p_z_Mi}, ${(p_Mi + p_p_Mi) - (z_Mi + p_z_Mi)}, ${c_Mi}, ${r_Mi + p_r_Mi}`,
            `\nPorcelana: ${p_Po + p_p_Po}, ${z_Po + p_z_Po}, ${(p_Po + p_p_Po) - (z_Po + p_z_Po)}, ${r_Po + p_r_Po}`,
            `\nCukier: ${p_C + p_p_C}, ${z_C + p_z_C}, ${(p_C + p_p_C) - (z_C + p_z_C)}, ${c_C}, ${r_C + p_r_C}`,
            `\nHerbata: ${p_H + p_p_H}, ${z_H + p_z_H}, ${(p_H + p_p_H) - (z_H + p_z_H)}, ${c_H}, ${r_H + p_r_H}`,
            `\nTytoń: ${p_Ty + p_p_Ty}, ${z_Ty + p_z_Ty}, ${(p_Ty + p_p_Ty) - (z_Ty + p_z_Ty)}, ${c_Ty}, ${r_Ty + p_r_Ty}`, 
            `\nWino: ${p_Wi + p_p_Wi}, ${z_Wi + p_z_Wi}, ${(p_Wi + p_p_Wi) - (z_Wi + p_z_Wi)}, ${c_Wi}, ${r_Wi + p_r_Wi}`,
            `\n---Towary wojskowe---`,
            `\nBroń: ${p_Br}, ${z_Br}, ${p_Br - z_Br}, ${c_Br}, ${r_Br}`,
            `\nArtyleria: ${p_Ar}, ${z_Ar}, ${p_Ar - z_Ar}, ${c_Ar}, ${r_Ar}`,
            `\nAmunicja: ${p_Am}, ${z_Am}, ${p_Am - z_Am}, ${c_Am}, ${r_Am}`,
            `\nStatek: ${p_Sta}, ${z_Sta}, ${p_Sta - z_Sta}, ${c_Sta}, ${r_Sta}`,
            `\n\n//ŁĄCZNIE//`,
            `\nŁącznie (potrzeby populacji): ${L_pp_p}, ${L_pp_m}, ${L_pp_p - L_pp_m}, ${Suma_pp}`,
            `\nŁącznie (produkcja): ${L_p}, ${L_m}, ${L_p - L_m}, ${Suma}`,
            `\nKoszt utrzymania: ${KosBud}`,
            `\nNa czysto: ${Czysto - KosBud}`,
            `\nPo podziale na członków uni celnej: ${UC}`
           ], 
            {type: "text"}
        );
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = `Rynek_${Nazwa}_${tura}`;
        document.body.appendChild(a);
        a.click();    
        a.remove();
    }
}
function Cena(BP, ZAP, PRO)
{
    let ret = 0;
    if(ZAP == 0) ret = BP/2;
    else if(PRO ==0) ret = BP*1.5;
    if(ZAP == 0 && PRO ==0) ret = BP;
    else
        ret = (BP * (1 + 0.75 * ((ZAP - PRO)/Math.min(ZAP, PRO)))).toFixed(0)/1;
    
    ret = (ret>BP*1.5)? BP*1.5 : ret;
    ret = (ret<BP/2)? BP/2 : ret;
    return ret;
    //return BP;
}