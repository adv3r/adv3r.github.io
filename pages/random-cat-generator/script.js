async function fetchCat() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
        const data = await response.json();

        if (data && data.length > 0) {
            const catUrl = data[0].url;
            document.getElementById('catImage').src = catUrl;
        }
    } catch (error) {
        console.error('Error fetching cat:', error);
    }
}

function autoRefresh() {
    fetchCat();
    setTimeout(autoRefresh, 120000);
}

window.onload = function () {
    fetchCat();
    autoRefresh();
};
