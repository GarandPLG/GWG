function Roll()
{
    let ilosc = parseInt(document.getElementById("ilosc").value),
        minimum = parseInt(document.getElementById("minimum").value),
        maximum = parseInt(document.getElementById("maximum").value),
        modyfikator = parseInt(document.getElementById("modyfikator").value),
        sukces = parseInt(document.getElementById("sukces").value),
        udane = 0,
        roll = 0,
        suma = 0,
        wynik = `${Date()}<br>`;

    for(let i = 1; i <= ilosc; i++)
    {
        roll = Math.floor(Math.random() * (maximum - minimum) + minimum) + modyfikator;
        suma += roll;
        if(roll>=sukces)
        {
                wynik += `${i} -> ${roll} #<br>`;
                udane++;
        }
        else wynik += `${i} -> ${roll}<br>`;
    }
    wynik += `<br>Udane: ${udane}, ${(udane/ilosc*100).toFixed(2)/1}%<br><br>Suma: ${suma}<br>Średnia: ${(suma/ilosc).toFixed(2)/1}`;
    document.getElementById("wynik").innerHTML = wynik;

    if(document.getElementById("kopia").checked)
    {
        let blob = new Blob(
            [`${wynik}`
            ], 
              {type: "text"}
          );
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = `Rolle`;
          document.body.appendChild(a);
          a.click();    
          a.remove();
    }
}