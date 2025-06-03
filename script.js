function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formStatus = document.getElementById('formStatus');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Basic client-side validation
    if (!name || !email || !message) {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.style.color = 'red';
        return;
    }

    // Simulate form submission (in a real app, this would send data to a server)
    formStatus.textContent = 'Submitting...';
    formStatus.style.color = 'black';
    setTimeout(() => {
        formStatus.textContent = 'Message sent successfully!';
        formStatus.style.color = 'green';
        form.reset();
    }, 1000);
}