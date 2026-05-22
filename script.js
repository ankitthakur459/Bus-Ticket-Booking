function bookTicket() {

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let seats = document.getElementById("seats").value;
    let time = document.getElementById("time").value;

    let result = document.getElementById("result");

    // Passenger Name Validation
    let namePattern = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)*$/;

    if (!namePattern.test(name)) {
        result.innerHTML =
            "⚠ Enter name correctly (Example: Rahul Sharma)";
        return;
    }

    // Indian Mobile Number Validation
    let phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {
        result.innerHTML =
            "⚠ Enter a valid Indian mobile number";
        return;
    }

    // Route Validation
    if (from === to) {
        result.innerHTML =
            "⚠ From and To cannot be same";
        return;
    }

    // Route Fare System
    let fare = 0;

    if (
        (from === "Sarkaghat" && to === "Mandi") ||
        (from === "Mandi" && to === "Sarkaghat")
    ) {
        fare = 120;
    }

    else if (
        (from === "Sarkaghat" && to === "Sundar Nagar") ||
        (from === "Sundar Nagar" && to === "Sarkaghat")
    ) {
        fare = 80;
    }

    else if (
        (from === "Mandi" && to === "Sundar Nagar") ||
        (from === "Sundar Nagar" && to === "Mandi")
    ) {
        fare = 60;
    }

    else if (
        (from === "Joginder Nagar" && to === "Mandi") ||
        (from === "Mandi" && to === "Joginder Nagar")
    ) {
        fare = 140;
    }

    else if (
        (from === "Dharampur" && to === "Mandi") ||
        (from === "Mandi" && to === "Dharampur")
    ) {
        fare = 90;
    }

    else {
        fare = 100;
    }

    // Total Fare
    let total = fare * seats;

    // Booking Success Message
    result.innerHTML = `
        ✅ <h3>Ticket Booked Successfully</h3>

        👤 Name: ${name}<br>
        📞 Phone: ${phone}<br>
        🚌 Route: ${from} → ${to}<br>
        ⏰ Time: ${time}<br>
        💺 Seats: ${seats}<br>
        🎫 Fare Per Seat: ₹${fare}<br>
        💰 Total Fare: ₹${total}
    `;
}

function cancelTicket() {

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("seats").value = 1;

    document.getElementById("from").selectedIndex = 0;
    document.getElementById("to").selectedIndex = 0;
    document.getElementById("time").selectedIndex = 0;

    document.getElementById("result").innerHTML =
        "❌ Ticket Cancelled";
}
