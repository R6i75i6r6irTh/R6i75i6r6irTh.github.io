document.getElementById('tattooForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var formData = new FormData(this);
    
    // Send form data using Fetch API
    fetch('https://script.google.com/macros/s/AKfycbzlmU1kjbzlF3QkJ-eaT4G63hYJNiipjAunS88yE8dGQgDywFx_kYImgrMn-BtJJcU/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => {
    if (response.ok) {
        document.getElementById('message').innerHTML = "<span class='icon'>&#10004;</span> Anfrage erfolgreich gesendet.";
        document.getElementById('message').classList.add('success');
    } else {
        document.getElementById('message').innerHTML = "<span class='icon'>&#10008;</span> Fehler beim Senden der Anfrage.";
        document.getElementById('message').classList.add('error');
    }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').innerHTML = "Fehler beim Senden der Anfrage.";
		document.getElementById('message').classList.add('error');

    });
});
