// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener('DOMContentLoaded', function() {
	var submit_btn = document.getElementById('submit-button');
	var contact_page = document.getElementById('contact-page');

	if (!submit_btn) return;
	if (!contact_page) return;

	submit_btn.addEventListener('click', function(event) {
		if (event && typeof event.preventDefault === 'function') {
			event.preventDefault();
		}

		// Clear existing content and show the thank-you message
		contact_page.innerHTML = '';
		var thank_you_msg = document.createElement('p');
		thank_you_msg.textContent = 'Thank you for your message';
		thank_you_msg.style.fontSize = '24px';
		contact_page.appendChild(thank_you_msg);
	});
});

