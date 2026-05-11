import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

/**
 * Send contact form data via EmailJS.
 * @param {{ fname: string, lname: string, email: string, phone: string, subject: string, message: string }} formData
 * @returns {Promise<void>}
 */
export async function sendContactForm(formData) {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    throw new Error(
      'EmailJS is not configured. Add VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID to your .env file.'
    );
  }

  emailjs.init(PUBLIC_KEY);

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    from_name: `${formData.fname} ${formData.lname}`.trim(),
    from_email: formData.email,
    phone: formData.phone ?? '',
    from_phone: formData.phone ?? '',
    subject: formData.subject,
    message: formData.message,
    fname: formData.fname,
    lname: formData.lname,
    email: formData.email,
  });
}
