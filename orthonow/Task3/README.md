# Task 3 – Integration Design

## Objective

Design an end-to-end integration between the OrthoNow consultation landing page, HubSpot CRM, Karix WhatsApp Business API, and Google Ads conversion tracking.

## Integration Architecture

When a patient submits the consultation form, the request is sent to a backend API. The backend validates the submitted data and searches HubSpot CRM for an existing contact using the phone number. Since HubSpot does not deduplicate contacts by phone number by default, a custom phone number lookup is performed before creating a new contact. If the phone number already exists, the existing contact is updated; otherwise, a new contact is created.

After the CRM operation succeeds, the backend sends a WhatsApp confirmation message using the Karix WhatsApp Business API. The message confirms that the enquiry has been received and provides assurance that the OrthoNow team will contact the patient shortly.

At the same time, Google Tag Manager triggers the GA4 event `consultation_form_submitted`, which is imported into Google Ads as the primary conversion action. This allows Google Ads Smart Bidding to optimize campaigns using real lead submissions.

## Biggest Failure Point

The biggest failure point is the HubSpot contact creation process. Since HubSpot primarily deduplicates contacts using email addresses, duplicate contacts may be created when only phone numbers are collected. To prevent this, the backend should always search HubSpot using the submitted phone number before deciding whether to create or update a contact.

## WhatsApp SLA Monitoring

The WhatsApp confirmation should be sent within two minutes of form submission. Potential failures include API downtime, network issues, or rate limiting by the WhatsApp provider. These failures should be monitored through application logs, API response monitoring, retry mechanisms, and alert notifications to ensure timely message delivery.
