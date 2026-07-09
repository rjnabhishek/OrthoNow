# Booking Funnel dataLayer Push

## Step 1 – Clinic Location & Specialty Selected

```javascript
window.dataLayer.push({
    event: "booking_step_complete",
    step_number: 1,
    step_name: "location_specialty_selected",
    clinic_location: document.getElementById("city").value,
    specialty: document.getElementById("specialty").value
});
```

---

## Step 2 – Patient Details Entered

```javascript
window.dataLayer.push({
    event: "booking_step_complete",
    step_number: 2,
    step_name: "patient_details_entered",
    patient_name: document.getElementById("patientName").value,
    phone_number: document.getElementById("patientPhone").value,
    appointment_date: document.getElementById("appointmentDate").value
});
```

---

## Step 3 – Booking Confirmed

```javascript
window.dataLayer.push({
    event: "booking_step_complete",
    step_number: 3,
    step_name: "booking_confirmed",
    clinic_location: document.getElementById("city").value,
    specialty: document.getElementById("specialty").value,
    patient_name: document.getElementById("patientName").value,
    appointment_date: document.getElementById("appointmentDate").value
});
```