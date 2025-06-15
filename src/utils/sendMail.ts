// src/utils/sendMail.ts

export interface SendMailParams {
  name: string;
  phone: string;
  message: string;
  email?: string; // Optional, defaults to main contact email
  subject?: string; // Optional, for dynamic subject
}

// const DEFAULT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "abhigba1426@gmail.com";
// const CC_EMAIL = ""; // Optional CC email, can be set if needed

// function toFormUrlEncoded(obj: Record<string, string>) {
//   return Object.entries(obj)
//     .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
//     .join('&');
// }

// export async function sendMail({ name, phone, message, email, subject }: SendMailParams): Promise<Response> {
//   const recipient = email || DEFAULT_EMAIL;
//   const formData: Record<string, string> = { name, phone, message, _captcha: 'false' , '_cc': CC_EMAIL };
//   if (subject) formData._subject = subject;
//   return fetch(`https://formsubmit.co/ajax/${recipient}`, {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'X-Requested-With': 'XMLHttpRequest',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify((formData)),
//   });
// }

export async function sendMail({ name, phone, message, subject }: SendMailParams): Promise<Response> {
  const formData: Record<string, string> = { name, phone, message };
  if (subject) formData.subject = subject;
  formData.access_key = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || "bb6b6d43-0d0a-4464-9930-959b98fa0571";
  return fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
}
