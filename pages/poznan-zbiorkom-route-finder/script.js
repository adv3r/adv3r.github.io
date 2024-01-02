let startStopData = {};
let endStopData = {};

const debounce = (func, delay) => {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
};

const debouncedSearchLocation = debounce((type) => {
    searchLocation(type);
}, 1000);

function searchLocation(type) {
    const input = document.getElementById(type === 'start' ? 'startStop' : 'endStop');
    const resultsContainer = document.getElementById(type === 'start' ? 'startStopResults' : 'endStopResults');

    resultsContainer.innerHTML = '';

    fetch(`https://jakdojade.pl/api/http/v2/locations?citySymbol=POZNAN&max_res=5&query=${encodeURIComponent(input.value)}&locale=pl`)
        .then(response => response.json())
        .then(data => {
            if (data.locations && data.locations.length > 0) {
                data.locations.forEach(location => {
                    if (location.type === 'LOCATION_TYPE_STOP') {
                        const resultItem = document.createElement('div');
                        resultItem.innerHTML = `<a href="#" onclick="selectLocation('${type}', '${location.name}', '${location.locationCoordinate.x_lon}', '${location.locationCoordinate.y_lat}')">${location.name}</a>`;
                        resultsContainer.appendChild(resultItem);
                    }
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function selectLocation(type, stopName, xLon, yLat) {
    if (type === 'start') {
        startStopData = { stopName, xLon, yLat };
    } else {
        endStopData = { stopName, xLon, yLat };
    }

    document.getElementById(type === 'start' ? 'startStop' : 'endStop').value = stopName;
    document.getElementById(type === 'start' ? 'startStopResults' : 'endStopResults').innerHTML = '';
}

const generateLink = () => {
    const departureTimeInput = document.getElementById('departureTime');

    const { stopName: startStopNameRaw, xLon: startXLon, yLat: startYLat } = startStopData;
    const { stopName: endStopNameRaw, xLon: endXLon, yLat: endYLat } = endStopData;

    if (!startStopNameRaw || !endStopNameRaw) {
        alert('Select stops from the generated list!');
        return;
    }

    const startStopNameEncoded = encodeURIComponent(startStopNameRaw).replace(/%2F/g, '~2F');
    const endStopNameEncoded = encodeURIComponent(endStopNameRaw).replace(/%2F/g, '~2F');

    const link = `https://jakdojade.pl/poznan/${startStopNameEncoded}/${endStopNameEncoded}?fn=${startStopNameRaw}&tn=${endStopNameRaw}&fsn=${startStopNameRaw}&tsn=${endStopNameRaw}&fc=${startYLat}:${startXLon}&tc=${endYLat}:${endXLon}&ft=ADDRESS&tt=ADDRESS&d=${getCurrentDate()}&h=${departureTimeInput.value}&aac=true`;

    window.open(link, '_blank');
};

const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
    const year = now.getFullYear().toString().slice(2);
    return `${day}.${month}.${year}`;
};

const setCurrentTime = () => {
    const departureTimeInput = document.getElementById('departureTime');

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    departureTimeInput.value = `${hours}:${minutes}`;
};

window.onload = () => {
    setCurrentTime();

    document.getElementById('startStop').addEventListener('input', () => debouncedSearchLocation('start'));
    document.getElementById('endStop').addEventListener('input', () => debouncedSearchLocation('end'));
};

function clearFields() {
    document.getElementById('startStop').value = '';
    document.getElementById('endStop').value = '';

    document.getElementById('startStopResults').innerHTML = '';
    document.getElementById('endStopResults').innerHTML = '';

    document.getElementById('departureTime').value = '';

    startStopData = {};
    endStopData = {};
}
