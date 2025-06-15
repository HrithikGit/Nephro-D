// src/utils/sendMail.ts

export interface SendMailParams {
  name: string;
  phone: string;
  message: string;
  email?: string; // Optional, defaults to main contact email
  subject?: string; // Optional, for dynamic subject
}

const DEFAULT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "abhigba1426@gmail.com";
const CC_EMAIL = ""; // Optional CC email, can be set if needed

function toFormUrlEncoded(obj: Record<string, string>) {
  return Object.entries(obj)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
    .join('&');
}

export async function sendMail({ name, phone, message, email, subject }: SendMailParams): Promise<Response> {
  const recipient = email || DEFAULT_EMAIL;
  const formData: Record<string, string> = { name, phone, message, _captcha: 'false' , '_cc': CC_EMAIL };
  if (subject) formData._subject = subject;
  return fetch(`https://formsubmit.co/${recipient}`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: toFormUrlEncoded(formData),
  });
}
