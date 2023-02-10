function main()
{
    //p_ - produkcja
    //z_ - zapotrzebowanie
    //r_ - rozliczenie
    //p_r_ - rozliczenie dla populacji
    //p_z_ - zapotrzebowanie dla populacji
    //p_p_ - produkcja dla populacji
    let T = document.getElementById("T").value,       Kw = document.getElementById("Kw").value,   Kze = document.getElementById("Kze").value,    // Tartak, Kopalnia węgla, Kopalnia żelaza, 
        Ks = document.getElementById("Ks").value,     Kzl = document.getElementById("Kzl").value, Zsp = document.getElementById("Zsp").value,    // Kopalnia siarki, Kopalnia złota, Zakład spożywczy
        Fw = document.getElementById("Fw").value,     Fm = document.getElementById("Fm").value,   Hsz = document.getElementById("Hsz").value,    // Fabryka włókiennicza, Fabryka mebli, Huta szkła
        N = document.getElementById("N").value,       P = document.getElementById("P").value,     Zch = document.getElementById("Zch").value,    // Narzędziownia, Papiernia, Zakład chemiczny
        Zsy = document.getElementById("Zsy").value,   Hst = document.getElementById("Hst").value, Sd = document.getElementById("Sd").value,      // Zakład syntetyczny, Huta stali, Stocznia (Drewno)
        Ss = document.getElementById("Ss").value,     Zz = document.getElementById("Zz").value,   Za = document.getElementById("Za").value,      // Stocznia (Stal), Zakład zbrojeniowy, Zakład amunicyjny 
        Fz = document.getElementById("Fz").value,     Fps = document.getElementById("Fps").value, Fr = document.getElementById("Fr").value,      // Farma żyta, Farma pszenicy, Farma ryżu
        Fk = document.getElementById("Fk").value,     Fpr = document.getElementById("Fpr").value, R = document.getElementById("R").value,        // Farma kukucolspan="8"rydzy, Farma prosa, Ranczo
        Mr = document.getElementById("Mr").value,     Pk = document.getElementById("Pk").value,   Pbaw = document.getElementById("Pbaw").value,  // Molo rybackie, Plantacja kawy, Plantacja bawełny
        Pbar = document.getElementById("Pbar").value, Ph = document.getElementById("Ph").value,   Pt = document.getElementById("Pt").value,      // Plantacja barwników, Plantacja herbaty, Plantacja tytoniu	
        Pc = document.getElementById("Pc").value,     Po = document.getElementById("Po").value,   Pj = document.getElementById("Pj").value,      // Plantacja cukru, Plantacja owoców, Plantacja jedwabiu
        Ol = document.getElementById("Ol").value,                                                                                                // Kopalnia ołowiu
        POP = document.getElementById("POP").value,   ARM = 0,                                    APP = 0,                                       // Populacja, armia (%)
        INF = document.getElementById("INF").value,   CAV = document.getElementById("CAV").value, ART = document.getElementById("ART").value,    // Piechota, Kawaleria, Artyleria

        p_Ps = 0, z_Ps = 0, r_Ps = 0,   p_U = 0, z_U = 0, r_U = 0,         p_Me = 0, z_Me = 0, r_Me = 0,      p_R = 0, z_R = 0, r_R = 0,         // Produkty spożywcze, Ubranie, Mebel, Ryba
        p_Tk = 0, z_Tk = 0, r_Tk = 0,   p_Zb = 0, z_Zb = 0, r_Zb = 0,      p_Pa = 0, z_Pa = 0, r_Pa = 0,      p_D = 0, z_D = 0, r_D = 0,         // Tkanina, Zboże, Papier, Drewno
        p_Ze = 0, z_Ze = 0, r_Ze = 0,   p_We = 0, z_We = 0, r_We = 0,      p_Nar = 0, z_Nar = 0, r_Nar = 0,   p_Ba = 0, z_Ba = 0, r_Ba = 0,      // Żelazo, Węgiel, Narzędzia, Barwnik
        p_Mw = 0, z_Mw = 0, r_Mw = 0,   p_Naw = 0, z_Naw = 0, r_Naw = 0,   p_Sz = 0, z_Sz = 0, r_Sz = 0,      p_Td = 0, z_Td = 0, r_Td = 0,      // Materiały wybochowe, Nawóz, Szkło, Twarde drewno
        p_Ol = 0, z_Ol = 0, r_Ol = 0,   p_J = 0, z_J = 0, r_J = 0,         p_St = 0, z_St = 0, r_St = 0,      p_S = 0, z_S = 0, r_S = 0,         // Ołów, Jedwab, Stal, Siarka
        p_K = 0, z_K = 0, r_K = 0,      p_Ow = 0, z_Ow = 0, r_Ow = 0,      p_Zl = 0,           r_Zl = 0,      p_Al = 0, z_Al = 0, r_Al = 0,      // Kawa, Owoc, Złoto, Alkohol
        p_Ul = 0, z_Ul = 0, r_Ul = 0,   p_Ml = 0, z_Ml = 0, r_Ml = 0,      p_Mi = 0, z_Mi = 0, r_Mi = 0,      p_Po = 0, z_Po = 0, r_Po = 0,      // Ubranie luksusowe, Mebel luksusowe, Mięso, Porcelana
        p_C = 0, z_C = 0, r_C = 0,      p_H = 0, z_H = 0, r_H = 0,         p_Ty = 0, z_Ty = 0, r_Ty = 0,      p_Wi = 0, z_Wi = 0, r_Wi = 0,      // Cukier, Herbata, Tytoń, Wino
        p_Br = 0, z_Br = 0, r_Br = 0,   p_Ar = 0, z_Ar = 0, r_Ar = 0,      p_Am = 0, z_Am = 0, r_Am = 0,      p_Sta = 0, z_Sta = 0, r_Sta = 0;   // Broń, Artyleria, Amunicja, Statek
    
        p_r_Ps = 0, p_r_Tk = 0, p_r_K = 0, p_r_Ul = 0, p_r_C = 0, p_r_U = 0, p_r_Zb = 0, p_r_We = 0,
        p_r_Ow = 0, p_r_Ml = 0, p_r_H = 0, p_r_Me = 0, p_r_Pa = 0, p_r_Sz = 0, p_r_Mi = 0, p_r_Ty = 0,
        p_r_R = 0, p_r_D = 0, p_r_Al = 0, p_r_Wi = 0, p_r_Po = 0,

        //0.8  -----  80%
        KosBud =(parseInt(T)    * 800
               + parseInt(Kw)   * 440
               + parseInt(Kze)  * 504
               + parseInt(Ol)   * 504
               + parseInt(Ks)   * 760
               + parseInt(Kzl)  * 350
               + parseInt(Zsp)  * 440
               + parseInt(Fw)   * 1280
               + parseInt(Fm)   * 1080
               + parseInt(Hsz)  * 1400
               + parseInt(N)    * 800
               + parseInt(P)    * 1200
               + parseInt(Zch)  * 1480
               + parseInt(Zsy)  * 400
               + parseInt(Hst)  * 960
               + parseInt(Sd)   * 400
               + parseInt(Ss)   * 600
               + parseInt(Zz)   * 720
               + parseInt(Za)   * 560
               + parseInt(Fz)   * 1120
               + parseInt(Fps)  * 1160
               + parseInt(Fr)   * 1456
               + parseInt(Fk)   * 1120
               + parseInt(Fpr)  * 1456
               + parseInt(R)    * 1000
               + parseInt(Mr)   * 560
               + parseInt(Pk)   * 1040
               + parseInt(Pbaw) * 640
               + parseInt(Pbar) * 960
               + parseInt(Ph)   * 560
               + parseInt(Pt)   * 960
               + parseInt(Pc)   * 856
               + parseInt(Po)   * 1640
               + parseInt(Pj)   * 800 ),

    /*ZAPOTRZEBOWANIE POPULACJI*/
    /*Zboże*/                 p_z_Zb = ((POP / 6250).toFixed(0)/1),
    /*Alkohol*/               p_z_Al = ((POP / 18270).toFixed(0)/1),
    /*Ubrania*/               p_z_U = ((POP / 15835).toFixed(0)/1),
    /*Meble*/                 p_z_Me = ((POP / 20790).toFixed(0)/1),
    /*Drewno*/                p_z_D = ((POP / 35675).toFixed(0)/1),
    /*Tkaniny*/               p_z_Tk = ((POP / 28240).toFixed(0)/1),
    /*Ryba*/                  p_z_R = ((POP / 36055).toFixed(0)/1),
    /*Tytoń*/                 p_z_Ty = ((POP / 105905).toFixed(0)/1),
    /*Produkty sporzywcze*/   p_z_Ps = ((POP / 62760).toFixed(0)/1),
    /*Mięso*/                 p_z_Mi = ((POP / 53795).toFixed(0)/1),
    /*Papier*/                p_z_Pa = ((POP / 67780).toFixed(0)/1),
    /*Szkło*/                 p_z_Sz = ((POP / 83333).toFixed(0)/1),
    /*Wino*/                  p_z_Wi = ((POP / 53795).toFixed(0)/1),
    /*Meble luksusowe*/       p_z_Ml = ((POP / 76155).toFixed(0)/1),
    /*Ubrania luksusowe*/     p_z_Ul = ((POP / 76155).toFixed(0)/1),
    /*Węgiel*/                p_z_We = ((POP / 418395).toFixed(0)/1),
    /*Porcelana*/             p_z_Po = ((POP / 260690).toFixed(0)/1),
    /*Owoc*/                  p_z_Ow = ((POP / 3389000).toFixed(0)/1),
    /*Kawa*/                  p_z_K = ((POP / 1694500).toFixed(0)/1),
    /*Cukier*/                p_z_C = ((POP / 322761).toFixed(0)/1),
    /*Herbata*/               p_z_H = ((POP / 1329000).toFixed(0)/1);

function zapotrzebowania()
{
    /*BUDYNKI*/
    /*Tartak*/                p_D += 20 * T;      p_Td += 20 * T;     z_Nar += 5 * T;   
    /*Kopalnia wegla*/        p_We += 40 * Kw;    z_Nar += 10 * Kw;   z_Mw += 5 * Kw;   
    /*Kopalnie żelaza*/       p_Ze += 32 * Kze;   z_Nar += 10 * Kze;  z_Mw += 5 * Kze;   
    /*Kopalnia ołowiu*/       p_Ol += 32 * Ol;    z_Nar += 10 * Ol;   z_Mw += 5 * Ol;    
    /*Kopalnia siarki*/       p_S += 32 * Ks;     z_Nar += 10 * Ks;   z_Mw += 5 * Ks;    
    /*Kopalnia złota*/        p_Zl += 30 * Kzl;   z_Nar += 10 * Kzl;  z_Mw += 5 * Kzl;  
    /*Zakład spożywczy*/      p_Ps += 45 * Zsp;   z_Zb += 40 * Zsp;                           
    /*Fabryka włókiennicza*/  p_U += 40 * Fw;     p_Ul += 20 * Fw;    z_Tk += 30 * Fw;   z_J += 10 * Fw;    z_Ba += 5 * Fw;
    /*Fabryka mebli*/         p_Me += 45 * Fm;    p_Ml += 20 * Fm;    z_D += 20 * Fm;    z_Td += 10 * Fm;   z_Tk += 10 * Fm;  z_Nar += 5 * Fm;
    /*Huta szkła*/            p_Sz += 50 * Hsz;   p_Po += 25 * Hsz;   z_Ol += 35 * Hsz;  z_Ba += 15 * Hsz; 
    /*Narzędziownia*/         p_Nar += 60 * N;    z_D += 30 * N;      z_Ze += 20 * N;
    /*Papiernia*/             p_Pa += 100 * P;    z_D += 30 * P;      z_S += 10 * P;     z_Ba += 10 * P;
    /*Zakład chemiczny*/      p_Naw += 125 * Zch; p_Mw += 40 * Zch;   z_S += 45 * Zch;   z_Ze += 30 * Zch;  z_We += 15 * Zch;
    /*Zakład syntetyczny*/    p_Ba += 40 * Zsy;   p_J += 40 * Zsy;    z_D += 40 * Zsy;   z_Naw += 30 * Zsy; z_S += 20 * Zsy; 
    /*Huta stali*/            p_St += 90 * Hst;   z_Ze += 60 * Hst;   z_We += 30 * Hst;
    /*Stocznia (Drewno)*/     p_Sta += 35 * Sd;   z_D += 40 * Sd;     z_Tk += 20 * Sd;   z_Nar += 10 * Sd;
    /*Stocznia (Stal)*/       p_Sta += 55 * Ss;   z_St += 30 * Ss;    z_We += 10 * Ss;    z_Nar += 15 * Ss;
    /*Zakład zbrojeniowy*/    p_Br += 25 * Zz;    p_Ar += 15 * Zz;    z_St += 25 * Zz;   z_Td += 10 * Zz;
    /*Zakład amunicyjny*/     p_Am += 50 * Za;    z_Mw += 20 * Za;    z_Ol += 20 * Za;
    /*Farma żyta*/            p_Zb += 70 * Fz;    p_Al += 15 * Fz;    z_Naw += 15 * Fz;
    /*Farma pszenicy*/        p_Zb += 70 * Fps;   p_Wi += 10 * Fps;   z_Naw += 15 * Fps;
    /*Farma ryżu*/            p_Zb += 85 * Fr;    p_Ow += 6 * Fr;     p_C += 9 * Fr;     z_Naw += 15 * Fr;
    /*Farma kukurydzy*/       p_Zb += 70 * Fk;    p_Al += 15 * Fk;    z_Naw += 15 * Fk;
    /*Farma prosa*/           p_Zb += 85 * Fpr;   p_Ow += 6 * Fpr;    p_C += 9 * Fpr;    z_Naw += 15 * Fpr;
    /*Ranczo*/                p_Tk += 40 * R;     p_Mi += 25 * R;     p_Naw += 10 * R;   z_Zb += 10 * R;    z_Nar += 10 * R;
    /*Molo rybackie*/         p_R += 50 * Mr;     z_Sta += 5 * Mr;
    /*Plantacja kawy*/        p_K += 30 * Pk;     z_Nar += 5 * Pk;
    /*Plantacja bawełny*/     p_Tk += 60 * Pbaw;  z_Nar += 10 * Pbaw;
    /*Plantacja barwników*/   p_Ba += 35 * Pbar;  z_Nar += 5 * Pbar;
    /*Plantacja herbaty*/     p_H += 30 * Ph;     z_Nar += 5 * Ph;
    /*Plantacja tytoniu*/     p_Ty += 35 * Pt;    z_Nar += 5 * Pt;
    /*Plantacja cukru*/       p_C += 45 * Pc;     z_Nar += 7 * Pc;
    /*Plantacja owoców*/      p_Ow += 45 * Po;    z_Nar += 5 * Po;
    /*Plantacja jedwabiu*/    p_J += 30 * Pj;     z_Nar += 5 * Pj;

    /*ARMIA*/
    /*Piechota*/              ARM += 500 * INF;   z_Br += 1 * INF;    z_Am += 1 * INF;   z_U += 2 * INF;    z_Ps += 1 * INF;
    /*Kawaleria*/             ARM += 500 * CAV;   z_Br += 1 * CAV;    z_Am += 1 * CAV;   z_U += 2 * CAV;    z_Ps += 1 * CAV;
    /*Artyleria*/             ARM += 250 * ART;   z_Ar += 1 * ART;    z_Am += 1 * ART;   z_U += 1 * ART;    z_Ps += 1 * ART;
    /*% Poboru*/              APP = ((ARM / POP)*100).toFixed(2);
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
    if(sz_Zb == 0) document.getElementById("%_Zb").innerHTML = 100;
    else          document.getElementById("%_Zb").innerHTML = ((p_Zb/sz_Zb)*100).toFixed(0);
    p_Zb -= p_p_Zb;
    r_Zb = 20 * (p_Zb - z_Zb);
    p_r_Zb = 20 * (p_p_Zb - p_z_Zb);
    document.getElementById("r_Zb").innerHTML = r_Zb + p_r_Zb;

    //Alkohol
    let sz_Al = z_Al + p_z_Al;
    document.getElementById("p_Al").innerHTML = p_Al; 
    document.getElementById("z_Al").innerHTML = sz_Al;     
    document.getElementById("b_Al").innerHTML = p_Al - sz_Al;
    if(sz_Al == 0) document.getElementById("%_Al").innerHTML = 100;
    else          document.getElementById("%_Al").innerHTML = ((p_Al/sz_Al)*100).toFixed(0);
    p_Al -= p_p_Al;
    r_Al = 30 * (p_Al - z_Al);
    p_r_Al = 30 * (p_p_Al - p_z_Al);
    document.getElementById("r_Al").innerHTML = r_Al + p_r_Al;

    //Ubranie
    let sz_U = z_U + p_z_U;
    document.getElementById("p_U").innerHTML = p_U; 
    document.getElementById("z_U").innerHTML = sz_U;     
    document.getElementById("b_U").innerHTML = p_U - sz_U;
    if(sz_U == 0) document.getElementById("%_U").innerHTML = 100;
    else          document.getElementById("%_U").innerHTML = ((p_U/sz_U)*100).toFixed(0);
    p_U -= p_p_U;
    r_U = 30 * (p_U - z_U);
    p_r_U = 30 * (p_p_U - p_z_U);
    document.getElementById("r_U").innerHTML = r_U + p_r_U;

    //Meble
    let sz_Me = z_Me + p_z_Me;
    document.getElementById("p_Me").innerHTML = p_Me; 
    document.getElementById("z_Me").innerHTML = sz_Me;     
    document.getElementById("b_Me").innerHTML = p_Me - sz_Me;
    if(sz_Me == 0) document.getElementById("%_Me").innerHTML = 100;
    else          document.getElementById("%_Me").innerHTML = ((p_Me/sz_Me)*100).toFixed(0);
    p_Me -= p_p_Me;
    r_Me = 30 * (p_Me - z_Me);
    p_r_Me = 30 * (p_p_Me - p_z_Me);
    document.getElementById("r_Me").innerHTML = r_Me + p_r_Me;

    //Drewno
    let sz_D = z_D + p_z_D;
    document.getElementById("p_D").innerHTML = p_D; 
    document.getElementById("z_D").innerHTML = sz_D;     
    document.getElementById("b_D").innerHTML = p_D - sz_D;
    if(sz_D == 0) document.getElementById("%_D").innerHTML = 100;
    else          document.getElementById("%_D").innerHTML = ((p_D/sz_D)*100).toFixed(0);
    p_D -= p_p_D;
    r_D = 20 * (p_D - z_D);
    p_r_D = 20 * (p_p_D - p_z_D);
    document.getElementById("r_D").innerHTML = r_D + p_r_D;

    //Tkaniny
    let sz_Tk = z_Tk + p_z_Tk;
    document.getElementById("p_Tk").innerHTML = p_Tk; 
    document.getElementById("z_Tk").innerHTML = sz_Tk;     
    document.getElementById("b_Tk").innerHTML = p_Tk - sz_Tk;
    if(sz_Tk == 0) document.getElementById("%_Tk").innerHTML = 100;
    else          document.getElementById("%_Tk").innerHTML = ((p_Tk/sz_Tk)*100).toFixed(0);
    p_Tk -= p_p_Tk;
    r_Tk = 20 * (p_Tk - z_Tk);
    p_r_Tk = 20 * (p_p_Tk - p_z_Tk);
    document.getElementById("r_Tk").innerHTML = r_Tk + p_r_Tk;

    //Ryba
    let sz_R = z_R + p_z_R;
    document.getElementById("p_R").innerHTML = p_R; 
    document.getElementById("z_R").innerHTML = sz_R;     
    document.getElementById("b_R").innerHTML = p_R - sz_R;
    if(sz_R == 0) document.getElementById("%_R").innerHTML = 100;
    else          document.getElementById("%_R").innerHTML = ((p_R/sz_R)*100).toFixed(0);
    p_R -= p_p_R;
    r_R = 20 * (p_R - z_R);
    p_r_R = 20 * (p_p_R - p_z_R);
    document.getElementById("r_R").innerHTML = r_R + p_r_R;

    //Tytoń
    let sz_Ty = z_Ty + p_z_Ty;
    document.getElementById("p_Ty").innerHTML = p_Ty; 
    document.getElementById("z_Ty").innerHTML = sz_Ty;     
    document.getElementById("b_Ty").innerHTML = p_Ty - sz_Ty;
    if(sz_Ty == 0) document.getElementById("%_Ty").innerHTML = 100;
    else          document.getElementById("%_Ty").innerHTML = ((p_Ty/sz_Ty)*100).toFixed(0);
    p_Ty -= p_p_Ty;
    r_Ty = 40 * (p_Ty - z_Ty);
    p_r_Ty = 40 * (p_p_Ty - p_z_Ty);
    document.getElementById("r_Ty").innerHTML = r_Ty + p_r_Ty;

    //Produkty spożywcze
    let sz_Ps = z_Ps + p_z_Ps;
    document.getElementById("p_Ps").innerHTML = p_Ps; 
    document.getElementById("z_Ps").innerHTML = sz_Ps;     
    document.getElementById("b_Ps").innerHTML = p_Ps - sz_Ps;
    if(sz_Ps == 0) document.getElementById("%_Ps").innerHTML = 100;
    else          document.getElementById("%_Ps").innerHTML = ((p_Ps/sz_Ps)*100).toFixed(0);
    p_Ps -= p_p_Ps;
    r_Ps = 30 * (p_Ps - z_Ps);
    p_r_Ps = 30 * (p_p_Ps - p_z_Ps);
    document.getElementById("r_Ps").innerHTML = r_Ps + p_r_Ps;

    //Mięso
    let sz_Mi = z_Mi + p_z_Mi;
    document.getElementById("p_Mi").innerHTML = p_Mi; 
    document.getElementById("z_Mi").innerHTML = sz_Mi;     
    document.getElementById("b_Mi").innerHTML = p_Mi - sz_Mi;
    if(sz_Mi == 0) document.getElementById("%_Mi").innerHTML = 100;
    else          document.getElementById("%_Mi").innerHTML = ((p_Mi/sz_Mi)*100).toFixed(0);
    p_Mi -= p_p_Mi;
    r_Mi = 30 * (p_Mi - z_Mi);
    p_r_Mi = 30 * (p_p_Mi - p_z_Mi);
    document.getElementById("r_Mi").innerHTML = r_Mi + p_r_Mi;

    //Papier
    let sz_Pa = z_Pa + p_z_Pa;
    document.getElementById("p_Pa").innerHTML = p_Pa; 
    document.getElementById("z_Pa").innerHTML = sz_Pa;     
    document.getElementById("b_Pa").innerHTML = p_Pa - sz_Pa;
    if(sz_Pa == 0) document.getElementById("%_Pa").innerHTML = 100;
    else          document.getElementById("%_Pa").innerHTML = ((p_Pa/sz_Pa)*100).toFixed(0);
    p_Pa -= p_p_Pa;
    r_Pa = 30 * (p_Pa - z_Pa);
    p_r_Pa = 30 * (p_p_Pa - p_z_Pa);
    document.getElementById("r_Pa").innerHTML = r_Pa + p_r_Pa;

    //Szkło
    let sz_Sz = z_Sz + p_z_Sz;
    document.getElementById("p_Sz").innerHTML = p_Sz; 
    document.getElementById("z_Sz").innerHTML = sz_Sz;     
    document.getElementById("b_Sz").innerHTML = p_Sz - sz_Sz;
    if(sz_Sz == 0) document.getElementById("%_Sz").innerHTML = 100;
    else          document.getElementById("%_Sz").innerHTML = ((p_Sz/sz_Sz)*100).toFixed(0);
    p_Sz -= p_p_Sz;
    r_Sz = 40 * (p_Sz - z_Sz);
    p_r_Sz = 40 * (p_p_Sz - p_z_Sz);
    document.getElementById("r_Sz").innerHTML = r_Sz + p_r_Sz;

    //Wino
    let sz_Wi = z_Wi + p_z_Wi;
    document.getElementById("p_Wi").innerHTML = p_Wi; 
    document.getElementById("z_Wi").innerHTML = sz_Wi;     
    document.getElementById("b_Wi").innerHTML = p_Wi - sz_Wi;
    if(sz_Wi == 0) document.getElementById("%_Wi").innerHTML = 100;
    else          document.getElementById("%_Wi").innerHTML = ((p_Wi/sz_Wi)*100).toFixed(0);
    p_Wi -= p_p_Wi;
    r_Wi = 50 * (p_Wi - z_Wi);
    p_r_Wi = 50 * (p_p_Wi - p_z_Wi);
    document.getElementById("r_Wi").innerHTML = r_Wi + p_r_Wi;

    //Meble luksusowe
    let sz_Ml = z_Ml + p_z_Ml;
    document.getElementById("p_Ml").innerHTML = p_Ml; 
    document.getElementById("z_Ml").innerHTML = sz_Ml;     
    document.getElementById("b_Ml").innerHTML = p_Ml - sz_Ml;
    if(sz_Ml == 0) document.getElementById("%_Ml").innerHTML = 100;
    else          document.getElementById("%_Ml").innerHTML = ((p_Ml/sz_Ml)*100).toFixed(0);
    p_Ml -= p_p_Ml;
    r_Ml = 60 * (p_Ml - z_Ml);
    p_r_Ml = 60 * (p_p_Ml - p_z_Ml);
    document.getElementById("r_Ml").innerHTML = r_Ml + p_r_Ml;

    //Ubrania luksusowe
    let sz_Ul = z_Ul + p_z_Ul;
    document.getElementById("p_Ul").innerHTML = p_Ul; 
    document.getElementById("z_Ul").innerHTML = sz_Ul;     
    document.getElementById("b_Ul").innerHTML = p_Ul - sz_Ul;
    if(sz_Ul == 0) document.getElementById("%_Ul").innerHTML = 100;
    else          document.getElementById("%_Ul").innerHTML = ((p_Ul/sz_Ul)*100).toFixed(0);
    p_Ul -= p_p_Ul;
    r_Ul = 60 * (p_Ul - z_Ul);
    p_r_Ul = 60 * (p_p_Ul - p_z_Ul);
    document.getElementById("r_Ul").innerHTML = r_Ul + p_r_Ul;

    //Węgiel
    let sz_We = z_We + p_z_We;
    document.getElementById("p_We").innerHTML = p_We; 
    document.getElementById("z_We").innerHTML = sz_We;     
    document.getElementById("b_We").innerHTML = p_We - sz_We;
    if(sz_We == 0) document.getElementById("%_We").innerHTML = 100;
    else          document.getElementById("%_We").innerHTML = ((p_We/sz_We)*100).toFixed(0);
    p_We -= p_p_We;
    r_We = 30 * (p_We - z_We);
    p_r_We = 30 * (p_p_We - p_z_We);
    document.getElementById("r_We").innerHTML = r_We + p_r_We;

    //Porcelana
    let sz_Po = z_Po + p_z_Po;
    document.getElementById("p_Po").innerHTML = p_Po; 
    document.getElementById("z_Po").innerHTML = sz_Po;     
    document.getElementById("b_Po").innerHTML = p_Po - sz_Po;
    if(sz_Po == 0) document.getElementById("%_Po").innerHTML = 100;
    else          document.getElementById("%_Po").innerHTML = ((p_Po/sz_Po)*100).toFixed(0);
    p_Po -= p_p_Po;
    r_Po = 70 * (p_Po - z_Po);
    p_r_Po = 70 * (p_p_Po - p_z_Po);
    document.getElementById("r_Po").innerHTML = r_Po + p_r_Po;

    //Owoc
    let sz_Ow = z_Ow + p_z_Ow;
    document.getElementById("p_Ow").innerHTML = p_Ow; 
    document.getElementById("z_Ow").innerHTML = sz_Ow;     
    document.getElementById("b_Ow").innerHTML = p_Ow - sz_Ow;
    if(sz_Ow == 0) document.getElementById("%_Ow").innerHTML = 100;
    else          document.getElementById("%_Ow").innerHTML = ((p_Ow/sz_Ow)*100).toFixed(0);
    p_Ow -= p_p_Ow;
    r_Ow = 50 * (p_Ow - z_Ow);
    p_r_Ow = 50 * (p_p_Ow - p_z_Ow);
    document.getElementById("r_Ow").innerHTML = r_Ow + p_r_Ow;

    //Kawa
    let sz_K = z_K + p_z_K;
    document.getElementById("p_K").innerHTML = p_K; 
    document.getElementById("z_K").innerHTML = sz_K;     
    document.getElementById("b_K").innerHTML = p_K - sz_K;
    if(sz_K == 0) document.getElementById("%_K").innerHTML = 100;
    else          document.getElementById("%_K").innerHTML = ((p_K/sz_K)*100).toFixed(0);
    p_K -= p_p_K;
    r_K = 50 * (p_K - z_K);
    p_r_K = 50 * (p_p_K - p_z_K);
    document.getElementById("r_K").innerHTML = r_K + p_r_K;

    //Cukier
    let sz_C = z_C + p_z_C;
    document.getElementById("p_C").innerHTML = p_C; 
    document.getElementById("z_C").innerHTML = sz_C;     
    document.getElementById("b_C").innerHTML = p_C - sz_C;
    if(sz_C == 0) document.getElementById("%_C").innerHTML = 100;
    else          document.getElementById("%_C").innerHTML = ((p_C/sz_C)*100).toFixed(0);
    p_C -= p_p_C;
    r_C = 30 * (p_C - z_C);
    p_r_C = 30 * (p_p_C - p_z_C);
    document.getElementById("r_C").innerHTML = r_C + p_r_C;

    //Herbata
    let sz_H = z_H + p_z_H;
    document.getElementById("p_H").innerHTML = p_H; 
    document.getElementById("z_H").innerHTML = sz_H;     
    document.getElementById("b_H").innerHTML = p_H - sz_H;
    if(sz_H == 0) document.getElementById("%_H").innerHTML = 100;
    else          document.getElementById("%_H").innerHTML = ((p_H/sz_H)*100).toFixed(0);
    p_H -= p_p_H;
    r_H = 30 * (p_H - z_H);
    p_r_H = 30 * (p_p_H - p_z_H);
    document.getElementById("r_H").innerHTML = r_H + p_r_H;

    //RESZTA
    //Żelazo
    document.getElementById("p_Ze").innerHTML = p_Ze; 
    document.getElementById("z_Ze").innerHTML = z_Ze;     
    document.getElementById("b_Ze").innerHTML = p_Ze - z_Ze;
    if(z_Ze == 0) document.getElementById("%_Ze").innerHTML = 100;
    else          document.getElementById("%_Ze").innerHTML = ((p_Ze/z_Ze)*100).toFixed(0);
    r_Ze = 40 * (p_Ze - z_Ze);
    document.getElementById("r_Ze").innerHTML = r_Ze;

    //Narzędzia
    document.getElementById("p_Nar").innerHTML = p_Nar; 
    document.getElementById("z_Nar").innerHTML = z_Nar;     
    document.getElementById("b_Nar").innerHTML = p_Nar - z_Nar;
    if(z_Nar == 0) document.getElementById("%_Nar").innerHTML = 100;
    else          document.getElementById("%_Nar").innerHTML = ((p_Nar/z_Nar)*100).toFixed(0);
    r_Nar = 40 * (p_Nar - z_Nar);
    document.getElementById("r_Nar").innerHTML = r_Nar;

    //Barwnik
    document.getElementById("p_Ba").innerHTML = p_Ba; 
    document.getElementById("z_Ba").innerHTML = z_Ba;     
    document.getElementById("b_Ba").innerHTML = p_Ba - z_Ba;
    if(z_Ba == 0) document.getElementById("%_Ba").innerHTML = 100;
    else          document.getElementById("%_Ba").innerHTML = ((p_Ba/z_Ba)*100).toFixed(0);
    r_Ba = 40 * (p_Ba - z_Ba);
    document.getElementById("r_Ba").innerHTML = r_Ba;

    //Materiały wybuchowe
    document.getElementById("p_Mw").innerHTML = p_Mw; 
    document.getElementById("z_Mw").innerHTML = z_Mw;     
    document.getElementById("b_Mw").innerHTML = p_Mw - z_Mw;
    if(z_Mw == 0) document.getElementById("%_Mw").innerHTML = 100;
    else          document.getElementById("%_Mw").innerHTML = ((p_Mw/z_Mw)*100).toFixed(0);
    r_Mw = 50 * (p_Mw - z_Mw);
    document.getElementById("r_Mw").innerHTML = r_Mw;

    //Nawóż
    document.getElementById("p_Naw").innerHTML = p_Naw; 
    document.getElementById("z_Naw").innerHTML = z_Naw;     
    document.getElementById("b_Naw").innerHTML = p_Naw - z_Naw;
    if(z_Naw == 0) document.getElementById("%_Naw").innerHTML = 100;
    else          document.getElementById("%_Naw").innerHTML = ((p_Naw/z_Naw)*100).toFixed(0);
    r_Naw = 30 * (p_Naw - z_Naw);
    document.getElementById("r_Naw").innerHTML = r_Naw;

    //Twarde drewno
    document.getElementById("p_Td").innerHTML = p_Td; 
    document.getElementById("z_Td").innerHTML = z_Td;     
    document.getElementById("b_Td").innerHTML = p_Td - z_Td;
    if(z_Td == 0) document.getElementById("%_Td").innerHTML = 100;
    else          document.getElementById("%_Td").innerHTML = ((p_Td/z_Td)*100).toFixed(0);
    r_Td = 40 * (p_Td - z_Td);
    document.getElementById("r_Td").innerHTML = r_Td;

    //Ołów
    document.getElementById("p_Ol").innerHTML = p_Ol; 
    document.getElementById("z_Ol").innerHTML = z_Ol;     
    document.getElementById("b_Ol").innerHTML = p_Ol - z_Ol;
    if(z_Ol == 0) document.getElementById("%_Ol").innerHTML = 100;
    else          document.getElementById("%_Ol").innerHTML = ((p_Ol/z_Ol)*100).toFixed(0);
    r_Ol = 40 * (p_Ol - z_Ol);
    document.getElementById("r_Ol").innerHTML = r_Ol;

    //Jedwab
    document.getElementById("p_J").innerHTML = p_J; 
    document.getElementById("z_J").innerHTML = z_J;     
    document.getElementById("b_J").innerHTML = p_J - z_J;
    if(z_J == 0) document.getElementById("%_J").innerHTML = 100;
    else          document.getElementById("%_J").innerHTML = ((p_J/z_J)*100).toFixed(0);
    r_J = 40 * (p_J - z_J);
    document.getElementById("r_J").innerHTML = r_J;

    //Stal
    document.getElementById("p_St").innerHTML = p_St; 
    document.getElementById("z_St").innerHTML = z_St;     
    document.getElementById("b_St").innerHTML = p_St - z_St;
    if(z_St == 0) document.getElementById("%_St").innerHTML = 100;
    else          document.getElementById("%_St").innerHTML = ((p_St/z_St)*100).toFixed(0);
    r_St = 50 * (p_St - z_St);
    document.getElementById("r_St").innerHTML = r_St;

    //Siarka
    document.getElementById("p_S").innerHTML = p_S; 
    document.getElementById("z_S").innerHTML = z_S;     
    document.getElementById("b_S").innerHTML = p_S - z_S;
    if(z_S == 0) document.getElementById("%_S").innerHTML = 100;
    else          document.getElementById("%_S").innerHTML = ((p_S/z_S)*100).toFixed(0);
    r_S = 50 * (p_S - z_S);
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
    if(z_Br == 0) document.getElementById("%_Br").innerHTML = 100;
    else          document.getElementById("%_Br").innerHTML = ((p_Br/z_Br)*100).toFixed(0);
    r_Br = 60 * (p_Br - z_Br);
    document.getElementById("r_Br").innerHTML = r_Br;

    //Artyleria
    document.getElementById("p_Ar").innerHTML = p_Ar; 
    document.getElementById("z_Ar").innerHTML = z_Ar;     
    document.getElementById("b_Ar").innerHTML = p_Ar - z_Ar;
    if(z_Ar == 0) document.getElementById("%_Ar").innerHTML = 100;
    else          document.getElementById("%_Ar").innerHTML = ((p_Ar/z_Ar)*100).toFixed(0);
    r_Ar = 70 * (p_Ar - z_Ar);
    document.getElementById("r_Ar").innerHTML = r_Ar;

    //Amunicja
    document.getElementById("p_Am").innerHTML = p_Am; 
    document.getElementById("z_Am").innerHTML = z_Am;     
    document.getElementById("b_Am").innerHTML = p_Am - z_Am;
    if(z_Am == 0) document.getElementById("%_Am").innerHTML = 100;
    else          document.getElementById("%_Am").innerHTML = ((p_Am/z_Am)*100).toFixed(0);
    r_Am = 50 * (p_Am - z_Am);
    document.getElementById("r_Am").innerHTML = r_Am;

    //Statek
    document.getElementById("p_Sta").innerHTML = p_Sta; 
    document.getElementById("z_Sta").innerHTML = z_Sta;     
    document.getElementById("b_Sta").innerHTML = p_Sta - z_Sta;
    if(z_Sta == 0) document.getElementById("%_Sta").innerHTML = 100;
    else          document.getElementById("%_Sta").innerHTML = ((p_Sta/z_Sta)*100).toFixed(0);
    r_Sta = 60 * (p_Sta - z_Sta);
    if(r_Sta > 0) r_Sta = 0;
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

        Suma = r_Ps + r_U + r_R + r_Tk + r_Zb + r_Pa + r_D + r_Ze + r_We + r_Nar + r_Ba + r_Mw + r_Naw + r_Sz + r_Td + r_Ol + r_J + r_St + r_S + r_K + r_Ow + r_Zl + r_Al + r_Ul + r_Ml + r_Mi + r_Po + r_C + r_H + r_Ty + r_Wi + r_Br + r_Ar + r_Am + r_Sta + r_Me;

    document.getElementById("L_p").innerHTML = L_p;
    document.getElementById("L_m").innerHTML = L_m; 
    document.getElementById("Roz").innerHTML = L_p - L_m;
    document.getElementById("Suma").innerHTML = Suma;

    document.getElementById("L_pp_p").innerHTML = L_pp_p;
    document.getElementById("L_pp_m").innerHTML = L_pp_m;
    document.getElementById("Roz_pp").innerHTML = L_pp_p - L_pp_m;
    document.getElementById("Suma_pp").innerHTML = Suma_pp;
    document.getElementById("ZasPot").innerHTML = ZasPot;

    document.getElementById("Czysto").innerHTML = (Suma + Suma_pp) - KosBud;

    //Pobranie kopii w formie txt
    if(document.getElementById("kopia").checked)
    {
        let blob = new Blob(
           ["//BUDYNKI//", 
            "\n\n---Zasoby---", 
            "\nTartak: ", T,
            "\nKopalnia węgla: ", Kw,
            "\nKopalnia żelaza: ", Kze,
            "\nKopalnia ołowiu: ", Ol,
            "\nKopalnia siarki: ", Ks,
            "\nKopalnia złota: ", Kzl,
            "\n\n---Przemysł---",
            "\nZakład spożywczy: ", Zsp,
            "\nFabryka włókiennicza: ", Fw,
            "\nFabryka mebli: ", Fm,
            "\nHuta szkła: ", Hsz,
            "\nNarzędziownia: ", N,
            "\nPapiernia: ", P,
            "\nZakład chemiczny: ", Zch,
            "\nZakład syntetyczny: ", Zsy, 
            "\nHuta stali: ", Hst,
            "\nStocznia (drewno): ", Sd,
            "\nStocznia (stal): ", Ss,
            "\nZakład zbrojeniowy: ", Zz,
            "\nZakład amunicyjny: ", Za,
            "\n\n---Żywność---",
            "\nFarma żyta: ", Fz,
            "\nFarma pszenicy: ", Fps,
            "\nFarma ryżu: ", Fr,
            "\nFarma kukurydzy: ", Fk,
            "\nFarma prosa: ", Fpr,
            "\nRanczo: ", R,
            "\nMolo rybackie: ", Mr,
            "\n\n---Plantacje---",
            "\nPlantacja kawy: ", Pk,
            "\nPlantacja bawełny: ", Pbaw,
            "\nPlantacja barwników: ", Pbar,
            "\nPlantacja herbaty: ", Ph,
            "\nPlantacja tytoniu: ", Pt,
            "\nPlantacja cukru: ", Pc,
            "\nPlantacja owoców: ", Po,
            "\nPlantacja jedwabiu: ", Pj,
            "\n\n//KRAJ//",
            "\nPopulacja: ", POP,
            "\nZaspokojenie potrzeb populacji: ", ZasPot, " %",
            "\n---Armia---",
            "\nInfantry: ", INF,
            "\nCavalary: ", CAV,
            "\nArtillery: ", ART,
            "\nŻołnierze: ", ARM,
            "\n% Poboru: ", APP, " %",
            "\n\n//ROZLICZENIE//",
            "\nProdukt - Produkcja - Zapotrzebowanie - Bilans - Rozlicznie",
            "\n---Podstawowe dobra---",
            "\nProdukty spożywcze: ", `${p_Ps + p_p_Ps}, ${z_Ps + p_z_Ps}, ${(p_Ps + p_p_Ps) - (z_Ps + p_z_Ps)}, ${r_Ps + p_r_Ps}`,
            "\nUbranie: ", `${p_U + p_p_U}, ${z_U + p_z_U}, ${(p_U + p_p_U) - (z_U + p_z_U)}, ${r_U + p_r_U}`,
            "\nMebel: ", `${p_Me + p_p_Me}, ${z_Me + p_z_Me}, ${(p_Me + p_p_Me) - (z_Me + p_z_Me)}, ${r_Me + p_r_Me}`,
            "\nRyba: ", `${p_R + p_p_R}, ${z_R + p_z_R}, ${(p_R + p_p_R) - (z_R + p_z_R)}, ${r_R + p_r_R}`,
            "\nTkanina: ", `${p_Tk + p_p_Tk}, ${z_Tk + p_z_Tk}, ${(p_Tk + p_p_Tk) - (z_Tk + p_z_Tk)}, ${r_Tk + p_r_Tk}`,
            "\nZboże: ", `${p_Zb + p_p_Zb}, ${z_Zb + p_z_Zb}, ${(p_Zb + p_p_Zb) - (z_Zb + p_z_Zb)}, ${r_Zb + p_r_Zb}`,
            "\nPapier: ", `${p_Pa + p_p_Pa}, ${z_Pa + p_z_Pa}, ${(p_Pa + p_p_Pa) - (z_Pa + p_z_Pa)}, ${r_Pa + p_r_Pa}`,
            "\nDrewno: ", `${p_D + p_p_D}, ${z_D + p_z_D}, ${(p_D + p_p_D) - (z_D + p_z_D)}, ${r_D + p_r_D}`,
            "\n---Towary przemysłowe---",
            "\nŻelazo: ", `${p_Ze}, ${z_Ze}, ${p_Ze - z_Ze}, ${r_Ze}`,
            "\nWęgiel: ", `${p_We + p_p_We}, ${z_We + p_z_We}, ${(p_We + p_p_We) - (z_We + p_z_We)}, ${r_We + p_r_We}`,
            "\nNarzedzia: ", `${p_Nar}, ${z_Nar}, ${p_Nar - z_Nar}, ${r_Nar}`,
            "\nBarwnik: ", `${p_Ba}, ${z_Ba}, ${p_Ba - z_Ba}, ${r_Ba}`,
            "\nMateriały wybuchowe: ", `${p_Mw}, ${z_Mw}, ${p_Mw - z_Mw}, ${r_Mw}`,
            "\nNawóz: ", `${p_Naw}, ${z_Naw}, ${p_Naw - z_Naw}, ${r_Naw}`,
            "\nSzkło: ", `${p_Sz + p_p_Sz}, ${z_Sz + p_z_Sz}, ${(p_Sz + p_p_Sz) - (z_Sz + p_z_Sz)}, ${r_Sz + p_r_Sz}`,
            "\nTwarde drewno: ", `${p_Td}, ${z_Td}, ${p_Td - z_Td}, ${r_Td}`,
            "\nOłów: ", `${p_Ol}, ${z_Ol}, ${p_Ol - z_Ol}, ${r_Ol}`,
            "\nJedwab: ", `${p_J}, ${z_J}, ${p_J - z_J}, ${r_J}`,
            "\nStal: ", `${p_St}, ${z_St}, ${p_St - z_St}, ${r_St}`,
            "\nSiarka: ", `${p_S}, ${z_S}, ${p_S - z_S}, ${r_S}`,
            "\n---Towary luksusowe---",
            "\nKawa: ", `${p_K + p_p_K}, ${z_K + p_z_K}, ${(p_K + p_p_K) - (z_K + p_z_K)}, ${r_K + p_r_K}`,
            "\nOwoc: ", `${p_Ow + p_p_Ow}, ${z_Ow + p_z_Ow}, ${(p_Ow + p_p_Ow) - (z_Ow + p_z_Ow)}, ${r_Ow + p_r_Ow}`,
            "\nZłoto: ", `${p_Zl}, - , ${p_Zl}, ${r_Zl}`,
            "\nAlkohol: ", `${p_Al + p_p_Al}, ${z_Al + p_z_Al}, ${(p_Al + p_p_Al) - (z_Al + p_z_Al)}, ${r_Al + p_r_Al}`,
            "\nUbranie luksusowe: ", `${p_Ul + p_p_Ul}, ${z_Ul + p_z_Ul}, ${(p_Ul + p_p_Ul) - (z_Ul + p_z_Ul)}, ${r_Ul + p_r_Ul}`,
            "\nMebel luksusowy: ", `${p_Ml + p_p_Ml}, ${z_Ml + p_z_Ml}, ${(p_Ml + p_p_Ml) - (z_Ml + p_z_Ml)}, ${r_Ml + p_r_Ml}`,
            "\nMięso: ", `${p_Mi + p_p_Mi}, ${z_Mi + p_z_Mi}, ${(p_Mi + p_p_Mi) - (z_Mi + p_z_Mi)}, ${r_Mi + p_r_Mi}`,
            "\nPorcelana: ", `${p_Po + p_p_Po}, ${z_Po + p_z_Po}, ${(p_Po + p_p_Po) - (z_Po + p_z_Po)}, ${r_Po + p_r_Po}`,
            "\nCukier: ", `${p_C + p_p_C}, ${z_C + p_z_C}, ${(p_C + p_p_C) - (z_C + p_z_C)}, ${r_C + p_r_C}`,
            "\nHerbata: ", `${p_H + p_p_H}, ${z_H + p_z_H}, ${(p_H + p_p_H) - (z_H + p_z_H)}, ${r_H + p_r_H}`,
            "\nTytoń: ", `${p_Ty + p_p_Ty}, ${z_Ty + p_z_Ty}, ${(p_Ty + p_p_Ty) - (z_Ty + p_z_Ty)}, ${r_Ty + p_r_Ty}`, 
            "\nWino: ", `${p_Wi + p_p_Wi}, ${z_Wi + p_z_Wi}, ${(p_Wi + p_p_Wi) - (z_Wi + p_z_Wi)}, ${r_Wi + p_r_Wi}`,
            "\n---Towary wojskowe---",
            "\nBroń: ", `${p_Br}, ${z_Br}, ${p_Br - z_Br}, ${r_Br}`,
            "\nArtyleria: ", `${p_Ar}, ${z_Ar}, ${p_Ar - z_Ar}, ${r_Ar}`,
            "\nAmunicja: ", `${p_Am}, ${z_Am}, ${p_Am - z_Am}, ${r_Am}`,
            "\nStatek: ", `${p_Sta}, ${z_Sta}, ${p_Sta - z_Sta}, ${r_Sta}`,
            "\n\n//ŁĄCZNIE//",
            "\nŁącznie (potrzeby populacji): ", `${L_pp_p}, ${L_pp_m}, ${L_pp_p - L_pp_m}, ${Suma_pp}`,
            "\nŁącznie (produkcja): ", `${L_p}, ${L_m}, ${L_p - L_m}, ${Suma}`,
            "\nKoszt utrzymania: ", KosBud,
            "\nNa czysto: ", (Suma + Suma_pp) - KosBud,
           ], 
            {type: "text"}
        );
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = "Kopia";
        document.body.appendChild(a);
        a.click();    
        a.remove();
    }
}