function validateForm() {

    let name = document.getElementById("name").value.trim();

    if(name === "") {
        alert("Please enter your name.");
        return false;
    }

    alert("Booking Submitted Successfully!");

    return true;
}
