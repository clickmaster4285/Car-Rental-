const nodemailer = require("nodemailer");

// Escape HTML to prevent XSS
const escapeHtml = (text) =>
  String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// HTML template for admin email
const adminEmailHtml = (name, email, message, additionalInfo = {}) => `
<h1>New Contact Submission</h1>
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
${additionalInfo.phone ? `<p><strong>Phone:</strong> ${escapeHtml(additionalInfo.phone)}</p>` : ""}
${additionalInfo.company ? `<p><strong>Company:</strong> ${escapeHtml(additionalInfo.company)}</p>` : ""}
<p><strong>Message:</strong><br>${escapeHtml(message)}</p>
`;

// HTML template for auto-reply to user
const autoReplyHtml = (name) => `
<h1>Hi ${escapeHtml(name)},</h1>
<p>Thanks for contacting ClickMasters! We received your message and will respond within 24 hours.</p>
`;

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message, company, phone, services, budget } = req.body;
console.log("Received contact form data:", req.body);
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Name, email, and message are required" });
    }

    const additionalInfo = { company, phone, services, budget };

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.verify();

    // Admin email
    const adminMailOptions = {
      from: `"${process.env.ALIAS_NAME || "ClickMasters"}" <${process.env.ALIAS_EMAIL || process.env.SMTP_MAIL}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_MAIL,
      replyTo: email,
      subject: `📬 New Contact Form Submission from ${name}`,
      html: adminEmailHtml(name, email, message, additionalInfo),
    };

    // Auto-reply to user
    const userMailOptions = {
      from: `"${process.env.ALIAS_NAME || "ClickMasters"}" <${process.env.ALIAS_EMAIL || process.env.SMTP_MAIL}>`,
      to: email,
      subject: "✓ Thank You for Contacting ClickMasters",
      html: autoReplyHtml(name),
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
};

module.exports = { sendContactEmail };