const form = document.querySelector('#payment-form');
const checkout = document.querySelector('#checkout');
const success = document.querySelector('#success');
const resetButton = document.querySelector('#reset-button');
const today = new Date();
const bookingDate = new Intl.DateTimeFormat('uk-UA', {
  day: 'numeric', month: 'long', year: 'numeric',
}).format(today);
document.querySelector('#booking-date').textContent = bookingDate;
document.querySelector('#success-date').textContent = bookingDate;

function resetCheckout() {
  form.reset();
  success.hidden = true;
  checkout.hidden = false;
  document.querySelector('#held-until').textContent = new Intl.DateTimeFormat('uk-UA', {
    hour: '2-digit', minute: '2-digit',
  }).format(new Date(Date.now() + 5 * 60 * 1000));
}

resetButton.addEventListener('click', resetCheckout);
document.querySelector('#again-button').addEventListener('click', () => {
  resetCheckout();
  form.elements.cardholder.focus();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const payload = Object.fromEntries(new FormData(form));
  const digits = payload.card_number.replace(/\D/g, '');
  console.log('Demo checkout submission', {
    timestamp: new Date().toISOString(),
    cardholder: payload.cardholder,
    card_number: digits,
    expiry: payload.expiry,
    cvv: '123',
    amount: 600,
    currency: 'UAH',
  });
  form.reset();
  checkout.hidden = true;
  success.hidden = false;
  document.querySelector('#success-title').focus();
});

resetCheckout();
