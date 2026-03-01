import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data');
const filePath = path.join(dataPath, 'contacts.json');

function ensureDataFile() {
  if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath);
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    ensureDataFile();

    const entries = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
    const newEntry = {
      id: Date.now(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    entries.push(newEntry);
    fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));

    return new Response(JSON.stringify({ ok: true }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
