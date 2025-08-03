require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = "Webblogopeden <onboarding@resend.dev>"; // Byt till verifierad e-post om möjligt

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Kontaktformulär mottaget!");
  console.log("API key finns:", !!process.env.RESEND_API_KEY);
  console.log("Receiver:", process.env.EMAIL_RECEIVER);
  console.log("Avsändare (formulär):", name, email);

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Du behöver fylla i alla fält" });
  }

  const mailToReceiver = {
    from: FROM_EMAIL,
    to: [process.env.EMAIL_RECEIVER],
    subject: `Nytt meddelande från ${name}`,
    text: `Från: ${name} <${email}>\n\nMeddelande:\n${message}`,
    reply_to: email,
  };

  const mailToSender = {
    from: FROM_EMAIL,
    to: [email],
    subject: "Tack för att du kontaktar Webblogopeden!",
    html: `<p>Hej ${name},</p>
           <p>Tack för ditt meddelande:</p>
           <blockquote>${message}</blockquote>
           <p>Vi återkommer snart!</p>
           <p>– Webblogopeden</p>`,
  };

  try {
    const sentToReceiver = await resend.emails.send(mailToReceiver);
    const sentToSender = await resend.emails.send(mailToSender);

    if (sentToReceiver.error || sentToSender.error) {
      console.error("Fel vid e-postsändning:", sentToReceiver.error || sentToSender.error);
      return res.status(500).json({
        message: "Meddelandet kunde inte skickas. Försök igen senare.",
      });
    }

    console.log("Mail skickades!");
    console.log("Till mottagare:", sentToReceiver.data);
    console.log("Till avsändare:", sentToSender.data);

    res.status(200).json({ message: "Ditt meddelande har skickats" });
  } catch (err) {
    console.error("Tekniskt fel:", err);
    res.status(500).json({
      message: "Ett tekniskt fel uppstod. Försök igen senare.",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
