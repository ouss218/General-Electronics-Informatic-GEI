// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Contact Form Route
app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.ADMIN_EMAIL,
      subject: `Contact Form - ${subject}`,
      text: `
Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Sujet: ${subject}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ success: false, message: "Échec de l'envoi. Réessayez plus tard." });
  }
});

// Newsletter Route
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS,
      },
    });

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: 'Nouvel abonnement à la newsletter',
      text: `Nouvelle inscription à la newsletter: ${email}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Merci pour votre inscription !" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'envoi du message." });
  }
});

// ✅ Start the server AFTER all routes are defined
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
