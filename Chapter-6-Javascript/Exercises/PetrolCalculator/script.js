function calculate() {
    const petrolPrice = parseFloat(document.getElementById("Petrol_Price").value);
    const liters = parseFloat(document.getElementById("liters").value);

    if (!petrolPrice || !liters || petrolPrice < 0 || liters < 0) {
    document.getElementById("totalAmount").innerText = "0.00";
    return;
    }

  const total = petrolPrice * liters;
    document.getElementById("totalAmount").innerText = total.toFixed(2);
}

window.onload = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
    input.addEventListener("input", calculate);
    });
};