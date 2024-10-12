document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('input[type="radio"]');
    
    boxes.forEach(box => {
        box.addEventListener('change', () => {
            const total = document.querySelector('.total');
            if (box.id === 'unit1') {
                total.textContent = 'Total: $10.00 USD';
            } else if (box.id === 'unit2') {
                total.textContent = 'Total: $18.00 USD';
            } else if (box.id === 'unit3') {
                total.textContent = 'Total: $24.00 USD';
            }
        });
    });
});
