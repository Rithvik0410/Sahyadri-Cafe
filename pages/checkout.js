document.addEventListener('DOMContentLoaded', function() {
    // Check if there are selected items in localStorage
    const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    const checkoutItems = document.getElementById('checkoutItems');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

    // Render the selected items on the checkout page
    selectedItems.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
        `;
        checkoutItems.appendChild(tr);
        totalPrice += parseFloat(item.price);
    });

    // Display total price
    totalPriceElement.innerText = totalPrice.toFixed(2);

    // Clear localStorage and redirect to payment page on button click
    document.querySelector('.proceed-to-payment').addEventListener('click', function() {
        localStorage.removeItem('selectedItems');
        window.location.href = 'payment.html';
    });
});

// Add event listener to select buttons on the product cards
document.querySelectorAll('.select-item').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.product-card');
        const itemName = card.getAttribute('data-name');
        const itemPrice = card.getAttribute('data-price');
        const selectedItem = { name: itemName, price: itemPrice };

        // Get existing selected items from localStorage
        let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
        selectedItems.push(selectedItem);
        
        // Save the updated selected items to localStorage
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

        // Redirect to checkout page
        window.location.href = 'checkout.html';
    });
});
