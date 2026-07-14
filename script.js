function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            status.textContent = 'Sending message...';
            status.className = 'form-status';
            
            setTimeout(() => {
                console.log('Form submitted:', data);
                status.textContent = '✓ Message sent successfully! We will get back to you soon.';
                status.className = 'form-status success';
                form.reset();
            }, 1500);
        });
    }
}