function scrollToContent() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for signing up, ${email}!`);
    document.getElementById('signup-form').reset();
});

document.getElementById('savings-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dailyCommute = parseFloat(document.getElementById('daily-commute').value);
    const fuelPrice = parseFloat(document.getElementById('fuel-price').value);

    const annualDistance = dailyCommute * 365;
    const fuelEfficiency = 15; // Assumed average fuel efficiency in km/litre
    const fuelCostSavings = annualDistance / fuelEfficiency * fuelPrice * 5;
    const co2Reduction = annualDistance * 5 * 2.31 / 1000; // Assuming 2.31 kg CO2 per litre of petrol
    const treesPlanted = co2Reduction / 21.77; // Average CO2 absorption by a tree in kg per year

    document.getElementById('fuel-cost-savings').querySelector('span').textContent = fuelCostSavings.toFixed(2);
    document.getElementById('co2-reduction').querySelector('span').textContent = co2Reduction.toFixed(2);
    document.getElementById('trees-planted').textContent = Math.round(treesPlanted);

    document.getElementById('savings-results').style.display = 'block';
});