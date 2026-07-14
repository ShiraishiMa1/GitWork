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
                status.textContent = 'Message sent successfully! We will get back to you soon.';
                status.className = 'form-status success';
                form.reset();
            }, 1500);
        });
    }
}

function initProjects() {
    const projectButtons = document.querySelectorAll('.project-btn');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.project-card');
            const projectId = card.dataset.project;
            alert('Opening details for Project ' + projectId + '...\n\nThis would navigate to the project page in a real application.');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initProjects();
    initContactForm();
});