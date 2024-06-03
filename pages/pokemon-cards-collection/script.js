const tilesContainer = document.getElementById('tiles');
const resultsLimitSelect = document.getElementById('resultsLimit');

function renderTiles(filteredData) {
    tilesContainer.textContent = '';
    const resultsLimit = parseFloat(resultsLimitSelect.value);
    filteredData.slice(0, resultsLimit).forEach(card => {
        const tile = document.createElement('div');
        tile.classList.add('tile');

        tile.innerHTML = `
            <img src="${card.image_url}" alt="${card.product_name}">
            <div class="contents-hld">
               <h2>${card.product_name}</h2>
               <div class="info">
                  <span class="card-group">${card.catalog_group}</span>
                  <span class="card-number">${card.card_number}</span>
               </div>
               <div class="more-info">
                  <span class="quantity">Quantity</span>
                  <span class="quantity-num">${card.quantity}</span>
                  <span class="rarity">Rarity</span>
                  <span class="rarity-txt">${card.rarity}</span>
               </div>
            </div>
        `;

        tilesContainer.appendChild(tile);
    });
    updateCounter(filteredData.length, resultsLimit);
}

function updateCounter(totalCount, displayedCount) {
    const counter = document.getElementById('counter');
    if (displayedCount == 'Infinity') {
        displayedCount = totalCount;
    }
    counter.innerHTML = `Showing <b>${displayedCount}</b> out of <b>${totalCount}</b> cards`;
}

function getCardsCount(category, data) {
    return data.filter(card => card.catalog_group === category).length;
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('pokemon-collection.json')
        .then(response => response.json())
        .then(data => {
            const seriesSelect = document.getElementById('filterSeries');
            const quantitySelect = document.getElementById('filterQuantity');

            const seriesOptions = [...new Set(data.data.map(card => card.catalog_group))].sort((a, b) => {
                return getCardsCount(b, data.data) - getCardsCount(a, data.data);
            });

            seriesOptions.forEach(series => {
                const option = document.createElement('option');
                option.value = series;
                option.textContent = `${series} (${getCardsCount(series, data.data)})`;
                seriesSelect.appendChild(option);
            });

            seriesSelect.addEventListener('change', () => {
                updateQuantityOptions();
                filterData();
            });

            quantitySelect.addEventListener('change', () => {
                filterData();
            });

            function updateQuantityOptions() {
                const seriesValue = seriesSelect.value;
                const uniqueQuantities = [...new Set(data.data.filter(card => card.catalog_group === seriesValue || seriesValue === '').map(card => card.quantity))].sort((a, b) => a - b);
                quantitySelect.innerHTML = '<option value="">All Quantities</option>';
                uniqueQuantities.forEach(quantity => {
                    const option = document.createElement('option');
                    option.value = quantity;
                    option.textContent = quantity;
                    quantitySelect.appendChild(option);
                });
            }

            resultsLimitSelect.addEventListener('change', () => {
                filterData();
            });

            function filterData() {
                const seriesValue = seriesSelect.value;
                const quantityValue = quantitySelect.value;
                const filteredData = data.data.filter(card => (seriesValue === '' || card.catalog_group === seriesValue) && (quantityValue === '' || card.quantity === quantityValue));
                renderTiles(filteredData);
            }

            updateQuantityOptions();
            renderTiles(data.data);
        })
        .catch(error => console.error('Error fetching data:', error));
});
