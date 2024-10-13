function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        document.getElementById('result').innerText = `Ваш ИМТ: ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Пожалуйста, введите корректные значения.';
    }
    
    if ('serviceWorker' in navigator) { 
            navigator.serviceWorker.register('sw.js') 
                .then(registration => {
                    console.log('SW registred', registration)
                })
    
                .catch(error => {
                    console.log('SW failed', error)
                })
        }
}