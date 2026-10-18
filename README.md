# Standalone checkout demo

Static HTML, CSS, and JavaScript clone of the existing Courtly checkout.
No dependencies, backend, or frontend build required.

Open `index.html` directly in a browser to preview it locally.

For GitHub Pages, publish the repository root. The checkout is available at
https://courtiy.click/checkout/ and at the site root. CSS and JavaScript use
relative paths so repository subpaths work as well.

Submitting the form logs a demo entry to the browser's developer console, then
the page displays the demo success screen. Logs include
the entered cardholder, expiry, masked card number (last four digits), and a
redacted CVV. Form data stays in the browser and is not persisted.
Use only synthetic test data, such as `4242 4242 4242 4242`.

Booking details are fixed demo values; the date is today in the browser's timezone.
The five-minute hold text is illustrative. The return button resets the demo form.
This standalone page does not create bookings or process payments in the main app.
