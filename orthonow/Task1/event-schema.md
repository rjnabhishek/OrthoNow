# OrthoNow GTM Event Schema

| Event Name | Trigger Type | Key Parameters | GA4 Report / Audience |
|------------|--------------|----------------|------------------------|
| book_appointment_click | Click Trigger | page_name, button_location, cta_text | CTA Performance Report |
| booking_step_complete | Custom Event (dataLayer) | step_number, step_name, clinic_location, specialty | Booking Funnel Exploration |
| appointment_booking_completed | Custom Event (dataLayer) | clinic_location, specialty, appointment_date | Conversion Report |
| call_now_click | Click Trigger | phone_number, page_name, button_location | Call CTA Performance |
| whatsapp_chat_click | Click Trigger | page_name, button_location, destination_url | WhatsApp Engagement Report |
| patient_guide_submit | Form Submission | form_name, lead_type, page_name | Lead Generation Report |
| clinic_page_view | Page View | clinic_location, page_title, page_url | Clinic Performance Report |
| blog_scroll_50 | Scroll Trigger (50%) | page_title, page_url, scroll_percentage | Content Engagement Report |
| blog_scroll_90 | Scroll Trigger (90%) | page_title, page_url, scroll_percentage | High Engagement Audience |
| consultation_form_submitted | Form Submission | patient_name, phone_number, clinic_location | Google Ads Conversion |