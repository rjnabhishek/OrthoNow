// Initialize Data Layer
window.dataLayer = window.dataLayer || [];

const steps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".step");

let current = 0;

function showStep(index) {
    steps.forEach(step => step.classList.remove("active"));
    progressSteps.forEach(step => step.classList.remove("active"));

    steps[index].classList.add("active");

    for (let i = 0; i <= index; i++) {
        progressSteps[i].classList.add("active");
    }
}

// STEP 1
document.getElementById("next1").addEventListener("click", function () {

    window.dataLayer.push({
        event: "booking_step_complete",
        step_number: 1,
        step_name: "location_specialty_selected",
        clinic_location: document.getElementById("city").value,
        specialty: document.getElementById("specialty").value
    });

    current = 1;
    showStep(current);
});

// Back to Step 1
document.getElementById("back1").addEventListener("click", function () {
    current = 0;
    showStep(current);
});

// STEP 2
document.getElementById("next2").addEventListener("click", function () {

    window.dataLayer.push({
        event: "booking_step_complete",
        step_number: 2,
        step_name: "patient_details_entered",
        patient_name: document.getElementById("patientName").value,
        phone_number: document.getElementById("patientPhone").value,
        appointment_date: document.getElementById("appointmentDate").value
    });

    current = 2;
    showStep(current);
});

// Back to Step 2
document.getElementById("back2").addEventListener("click", function () {
    current = 1;
    showStep(current);
});

// Confirm Booking
document.getElementById("confirmBooking").addEventListener("click", function () {

    window.dataLayer.push({
        event: "booking_step_complete",
        clinic_location: document.getElementById("city").value,
        specialty: document.getElementById("specialty").value,
        patient_name: document.getElementById("patientName").value,
        appointment_date: document.getElementById("appointmentDate").value
    });

    window.location.href = "thank-you.html";
});