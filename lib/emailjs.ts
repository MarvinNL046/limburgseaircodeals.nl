import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: "sjJ8kK6U9wFjY0zX9",
});

// EmailJS service and template IDs
export const EMAILJS_SERVICE_ID = "service_1rruujp";
export const EMAILJS_TEMPLATE_ID = "template_rkcpzhg";

const DEBUG_MODE = false; // Set to true for troubleshooting

// LeadFlow CRM configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_lRyHo1ENukt9VsG9gYT8EKeDA_nKuoQ1";

interface EmailFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  city?: string;
}

// Send via EmailJS
const sendViaEmailJS = async (formData: EmailFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      contact_number: Math.random() * 100000 | 0,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      if (DEBUG_MODE) {
        console.error('EmailJS failed:', response);
      }
      return false;
    }

    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('EmailJS error:', error);
    }
    return false;
  }
};

// Send data to LeadFlow CRM
const sendToLeadflow = async (data: EmailFormData): Promise<boolean> => {
  try {
    const nameParts = data.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadflowData = {
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: 'website-contact',
      customFields: {
        city: data.city || '',
        woonplaats: data.city || ''
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending data to Leadflow CRM:', leadflowData);
    }

    const response = await fetch(LEADFLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LEADFLOW_API_KEY
      },
      body: JSON.stringify(leadflowData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (DEBUG_MODE) {
        console.error(`Leadflow error (${response.status}):`, errorText);
      }
      return false;
    }

    if (DEBUG_MODE) {
      console.log('Leadflow submission successful');
    }
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Leadflow submission failed:', error);
    }
    return false;
  }
};

// Main send function with dual submission
export const sendEmail = async (formData: EmailFormData) => {
  const emailJSSuccess = await sendViaEmailJS(formData);
  const leadflowSuccess = await sendToLeadflow(formData);

  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSSuccess);
    console.log('Leadflow success:', leadflowSuccess);
  }

  // Only throw error if ALL methods fail
  if (!emailJSSuccess && !leadflowSuccess) {
    throw new Error('Failed to send contact form data');
  }

  // Return success if at least one method worked
  return { emailJSSuccess, leadflowSuccess };
};
