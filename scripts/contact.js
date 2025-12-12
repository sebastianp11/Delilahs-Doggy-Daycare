// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener('DOMContentLoaded', () => {
	const submitBtn = document.getElementById('submit-button');
	const contactPage = document.getElementById('contact-page');

	if (!submitBtn) return;
	if (!contactPage) return;

	submitBtn.addEventListener('click', (event) => {
		if (event && typeof event.preventDefault === 'function') {
			event.preventDefault();
		}

		// Clear existing content and show the thank-you message
		contactPage.innerHTML = '';
		const msg = document.createElement('p');
		msg.textContent = 'Thank you for your message';
		msg.style.fontSize = '24px';
		contactPage.appendChild(msg);
	});
});

