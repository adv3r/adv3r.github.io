function monit(){
    document.getElementById('loading').style.display = "block";
    setTimeout(showCat, 2000);
}
function showCat(){
    document.getElementById('loading').style.display = "none";
    document.getElementById('catSummary').style.display = "block";
    var catName = document.getElementById('catName').value;
    var catSize = document.getElementById('catSize').value;
    var sizeOpts = document.getElementById('catSize');
    var catSizeText = sizeOpts.options[sizeOpts.selectedIndex].text;
    var catBreed = document.getElementById('catBreed').value;
    var breedOpts = document.getElementById('catBreed');
    var catBreedText = breedOpts.options[breedOpts.selectedIndex].text;
    var catColor = document.getElementById('catColor').value;
    if(catName == ""){
        return alert('Nie wpisano imienia kićka... Nadaj mu imię!')
    }else{
        document.getElementById('catSum').innerHTML = `Wybrany przez Ciebie kot ma na imię <b>${catName}</b>, jest <b>${catSizeText} ${catBreedText}em</b> i jest koloru <span style='color:${catColor};font-weight:bold;'>${catColor}</span>!`;
        document.getElementById('catLink').innerHTML = "Wyświetl kota!"
        document.getElementById('catLink').href = `https://www.google.com/search?q=${catSize}+${catColor}+${catBreed}+cat+&hl=en&tbm=isch`;
        document.getElementById('catLink').target = "_blank";
        document.getElementById('catLink').style = `border-radius:10px; background-color:black;`;
    }
}