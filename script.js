function bookTicket() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let seats = document.getElementById("seats").value;
    let time = document.getElementById("time").value;

    if (name === "" || phone === "") {
        document.getElementById("result").innerHTML =
            "Please enter name and phone number";
        return;
    }

    if (from === to) {
        document.getElementById("result").innerHTML =
            "From and To cannot be same";
        return;
    }

    let total = seats * 50;

    document.getElementById("result").innerHTML =
        `
        ✅ <h3>Ticket Booked Successfully</h3>

        👤 Name: ${name}<br>
        📞 Phone: ${phone}<br>
        🚌 Route: ${from} → ${to}<br>
        ⏰ Time: ${time}<br>
        💺 Seats: ${seats}<br>
        💰 Total Fare: ₹${total}
        `;
}

function cancelTicket() {

    document.getElementById("result").innerHTML =
        "Ticket Cancelled";

}
