window.dataLayer = window.dataLayer || [];
document.getElementById("guideForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Patient Guide Download Started!");

});

document.getElementById("bookBtn").addEventListener("click", function () {

    window.dataLayer.push({

        event: "book_appointment_click",

        button_location: "hero",

        page_name: "homepage",

        cta_text: "Book Appointment"

    });

    window.location.href = "appointment.html";

});

document.getElementById("callNow").addEventListener("click", function () {

    window.dataLayer.push({

        event: "call_now_click",

        button_location: "hero",

        phone_number: "+918989898989",

        page_name: "homepage"

    });

});

document.getElementById("guideForm").addEventListener("submit", function(e){

    e.preventDefault();

    window.dataLayer.push({

        event:"patient_guide_submit",

        form_name:"Patient Guide",

        page_name:"homepage",

        lead_type:"ebook"

    });

    alert("Guide Download Started");

});