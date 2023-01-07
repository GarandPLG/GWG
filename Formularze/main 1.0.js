function Kult()
{
    let KNazwa = document.getElementById("KNazwa").value,
        KTyp = document.getElementById("KTyp").value,
        KNB = document.getElementById("KNB").value,
        OK = document.getElementById("OK").value,
        MK1 = document.getElementById("1MK").value,
        MK2 = document.getElementById("2MK").value,
        MK3 = document.getElementById("3MK").value,
        KRGB = document.getElementById("KRGB").value,

        blob = new Blob(
          [
           `Nazwa kultury: ${KNazwa}`,
           `\nTyp: ${KTyp}`,
           `\nGrupa językowa: ${KNB}`,
           `\nOpis kultury: `,
           OK,
           `\n1. Modyfikator: ${MK1}`,
           `\n(Po odblokowaniu Tożsamości Narodowej)`,
           `\n2. Modyfikator: ${MK2}`,
           `\n3. Modyfikator: ${MK3}`,
           `\nRGB: ${KRGB}`
          ], 
            {type: "text"}
        );
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = "Kultura";
        document.body.appendChild(a);
        a.click();    
        a.remove();
}
function Rel()
{
    let RNazwa = document.getElementById("RNazwa").value,
        RTyp = document.getElementById("RTyp").value,
        RForma = document.getElementById("RForma").value,
        IB = document.getElementById("IB").value,
        TB = document.getElementById("TB").value,
        OR = document.getElementById("OR").value,
        RRGB = document.getElementById("RRGB").value,
        OMR = document.getElementById("OMR").value,
        PwMR = document.getElementById("PwMR").value,
        RIlo = parseInt(document.getElementById("RIlo").value) - 1,
        MRPw = parseFloat(PwMR) * (1.00 + 0.15 * RIlo),

        blob = new Blob(
          [
           `Nazwa: ${RNazwa}`,
           `\nTyp: ${RTyp}`,
           `\nForma: ${RForma}`,
           `\nImię bóstwa: ${IB}`,
           `\nTytuł bóstwa: ${TB}`,
           `\nOpis religii: \n`,
           OR,
           `\nRGB ${RRGB}`,
           `\nModyfikatory: `,
           `\nOgólny: ${OMR}`,
           `\nPowszechność wiary: ${PwMR}`,
           `\nIlość krajów: ${RIlo}`,
           `\nWartość modyfikatora za Powszechność wiary: ${MRPw}`,
          ], 
            {type: "text"}
        );
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = "Religia";
        document.body.appendChild(a);
        a.click();    
        a.remove();
    document.getElementById("MRPw").innerHTML = MRPw;
}
function Pan()
{
    let PNK = document.getElementById("PNK").value,
        PPNK = document.getElementById("PPNK").value,
        PTR = document.getElementById("PTR").value,
        Wladca = document.getElementById("Wladca").value,
        OP = document.getElementById("OP").value,
        PRGB = document.getElementById("PRGB").value,
        PS = document.getElementById("PS").value,
        PK = document.getElementById("PK").value,
        PR = document.getElementById("PR").value,
        blob = new Blob(
          [
           `Nazwa kraju: ${PNK}`,
           `\nPełna nazwa kraju: ${PPNK}`,
           `\nTyp rządu: ${PTR}`,
           `\nImię, tytuł i ród władcy: ${Wladca}`,
           `\nOpis kraju (lore): `,
           OP,
           `\nRGB: ${PRGB}`,
           `\nStolica: ${PS}`,
           `\nKultura: ${PK}`,
           `\nReligia: ${PR}`,
           `\nFlaga (w formacie SVG):`,
           `\nPołożenie (zaznaczona prowincja, z której zaczynasz):`
          ], 
            {type: "text"}
        );
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = "Państwo";
        document.body.appendChild(a);
        a.click();    
        a.remove();
}