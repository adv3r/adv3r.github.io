async function generateCats() {
    let catCount = document.querySelector('.cats-quantity').value;
    const catImageUrl = `https://api.thecatapi.com/v1/images/search?limit=${catCount}`;
    const api_key = "DEMO-API-KEY";
    const catsHld = document.querySelector('.cats-hld');
    catsHld.innerHTML = '';

    try {
        const response = await fetch(catImageUrl, {
            headers: {
                'x-api-key': api_key
            }
        });

        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            const catImgHld = document.createElement('div');
            catImgHld.classList.add('cat-img-hld');

            const catLink = document.createElement('a');
            catLink.href = data[i].url;
            catLink.target = '_blank';

            const catImg = document.createElement('img');
            catImg.src = data[i].url;
            catImg.classList.add('cat-img');

            catLink.appendChild(catImg);
            catImgHld.appendChild(catLink);
            catsHld.appendChild(catImgHld);
        }
    } catch (error) {
        console.error(error);
    }
}
