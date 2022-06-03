function czas(){
    let time = new Date();
    let dzien = time.getDay();
    let msc = time.getMonth();
    let dzienNum = time.getDate();
    let rok = time.getFullYear();
    let miesiace = [
        'stycznia',
        'lutego',
        'marca',
        'kwietnia',
        'maja',
        'czerwca',
        'lipca',
        'sierpnia',
        'września',
        'października',
        'listopada',
        'grudnia'
    ];
    let dni = [
        'niedziela',
        'poniedziałek',
        'wtorek',
        'środa',
        'czwartek',
        'piątek',
        'sobota'
    ];
    // ||=======================================||

    let godz = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    if(sec<10){
        sec = '0'+sec;
    }
    if(min<10){
        min = '0'+min;
    }
    if(godz<10){
        godz = '0'+godz;
    }
    document.getElementById('czasInp').innerHTML = `${godz}:${min}:${sec}`;
    document.getElementById('dataInp').innerHTML = `${dni[dzien]}, ${dzienNum} ${miesiace[msc]} ${rok}`;

}setInterval(czas, 1000);

function stacja(){
    let przystanki = [
        'Poznań Główny',
        'Czapury',
        'Poznań-Antoninek',
        'Poznań-Smoluchowice',
        'Kicin Stacja',
        'Kicin-Wieś',
        'Olsztyn Główny',
        'Olsztyn-PKM',
        'Kotno',
        'Kotków',
        ''
    ];
    let i=-1;
    function przystanek(){
        i++;
        if(i>=przystanki.length-1){ 
            i=-1;
        }
        else{
            if(przystanki[i].length>10){
                document.getElementById('stacja').innerHTML = `<marquee scrollamount='10'>${przystanki[i]}</marquee>`;
            }else{
                document.getElementById('stacja').innerHTML = przystanki[i];
            }
        }
    }setInterval(przystanek,12000);
    przystanek();

    function nextS(){
        document.getElementById('nextStop1').style.display = 'block';
        function nextS2(){
            document.getElementById('nextStop2').innerHTML = przystanki[i+1];
        }setInterval(nextS2,4000);
        nextS2();
    }setInterval(nextS, 8000);
    nextS();
}