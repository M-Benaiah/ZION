import fs from 'fs';
import path from 'path';
import emailjs from '@emailjs/nodejs';

const dataPath = path.join(process.cwd(), 'data');
const filePath = path.join(dataPath, 'contacts.json');

function ensureDataFile() {
  if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath);
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, company, phone, service, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    // 1. Save to local JSON as backup
    try {
      ensureDataFile();
      const entries = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
      entries.push({
        id: Date.now(),
        name,
        email,
        subject,
        company,
        phone,
        service,
        message,
        createdAt: new Date().toISOString(),
      });
      fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
    } catch (fsErr) {
      console.error('Failed to save to JSON:', fsErr);
    }

    // 2. Send email via EmailJS
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (serviceId && templateId && publicKey && privateKey) {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: name,
          email: email,
          subject: subject || 'No Subject',
          company: company || 'Not provided',
          phone: phone || 'Not provided',
          service: service || 'Not specified',
          message: message,
          // In case the template uses these legacy variables:
          from_name: name,
          reply_to: email,
        },
        {
          publicKey: publicKey,
          privateKey: privateKey,
        }
      );
    } else {
      console.warn("EmailJS environment variables are missing. Email was not sent.");
    }

    return new Response(JSON.stringify({ ok: true }), { status: 201 });
  } catch (err) {
    console.error('Contact Form Error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), { status: 500 });
  }
}
