function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("status").innerText = data.message;
    });
}
