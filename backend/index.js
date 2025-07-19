const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Du behöver fylla i alla fält' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact from ${name}`,
      text: message,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Tack för att du kontaktar oss!',
      text: `Hi ${name},\n\nTack för att du kontaktar oss! Vi har mottagit ditt meddelande:\n\n"${message}"\n\nVi kommer kontakta dig så snart vi kan.\n\n- Webblogopeden`,
    });

    res.status(200).json({ message: 'Ditt meddelande har nu skickats' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Meddelandet kunde inte skickas. Försök igen senare.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
