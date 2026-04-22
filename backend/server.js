require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(express.json());
const allowedOrigins = [
  "http://localhost:8080",
  "http://localhost:5173",
  "https://www.bigbinaryerp.com",
  "https://big-binary-erp.vercel.app",
  "https://big-binary-erp-backend.vercel.app",
  "https://launchpad-to-expert-main-pl1n.vercel.app",
  "https://www.bbt.edu.pk",
  "https://bbt.edu.pk",
  process.env.FRONTEND_URL,
].filter(Boolean);

const allowAll = process.env.FRONTEND_URL === "*";

const corsOptions = {
  origin: allowAll
    ? "*"
    : (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// ─── Nodemailer Transporter ───────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify transporter on startup
transporter.verify((error) => {
  if (error) {
    console.error("❌ Mail transporter error:", error.message);
  } else {
    console.log("✅ Mail transporter is ready");
  }
});

// ─── Validation Helper ────────────────────────────────────────────────────────
function validateContactForm({ firstName, lastName, email, service, message }) {
  if (!firstName || firstName.trim().length < 2) return "First name is required.";
  if (!lastName || lastName.trim().length < 2) return "Last name is required.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Valid email is required.";
  if (!service || service.trim() === "") return "Please select a service.";
  if (!message || message.trim().length < 10) return "Message must be at least 10 characters.";
  return null;
}

// ─── POST /api/contact ────────────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body;

  // Validate
  const validationError = validateContactForm({ firstName, lastName, email, service, message });
  if (validationError) {
    return res.status(400).json({ success: false, error: validationError });
  }

  try {
    // ── Email to YOU (the business) ──
    await transporter.sendMail({
      from: `"Big Binary Tech" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Application: ${service} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0e1a;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #262261, #1a1836); padding: 36px 32px 28px; text-align: center; border-bottom: 2px solid #F6931D;">
            <div style="display: inline-block; background: rgba(246,147,29,0.15); border: 1px solid rgba(246,147,29,0.4); border-radius: 20px; padding: 4px 14px; margin-bottom: 14px;">
              <span style="color: #F6931D; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">April 2026 Cohort</span>
            </div>
            <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">New Enrollment Application</h1>
          </div>

          <!-- Body -->
          <div style="padding: 32px; background: #13111f;">
            <table style="width: 100%; border-collapse: collapse; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
              <tr style="background: rgba(246,147,29,0.05);">
                <td style="padding: 14px 18px; font-weight: 700; color: #F6931D; width: 35%; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.08);">Full Name</td>
                <td style="padding: 14px 18px; color: #e5e7eb; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.08);">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 14px 18px; font-weight: 700; color: #F6931D; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.08);">Email</td>
                <td style="padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.08);"><a href="mailto:${email}" style="color: #a78bfa; text-decoration: none; font-size: 14px;">${email}</a></td>
              </tr>
              <tr style="background: rgba(246,147,29,0.05);">
                <td style="padding: 14px 18px; font-weight: 700; color: #F6931D; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.08);">Phone</td>
                <td style="padding: 14px 18px; color: #e5e7eb; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.08);">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 14px 18px; font-weight: 700; color: #F6931D; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.08);">Track</td>
                <td style="padding: 14px 18px; color: #e5e7eb; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.08);">${service}</td>
              </tr>
              <tr style="background: rgba(246,147,29,0.05);">
                <td style="padding: 14px 18px; font-weight: 700; color: #F6931D; font-size: 13px; vertical-align: top;">Details</td>
                <td style="padding: 14px 18px; color: #e5e7eb; font-size: 14px; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          </div>

          <!-- Footer -->
          <div style="background: #0f0e1a; padding: 20px 32px; text-align: center; border-top: 1px solid rgba(255,255,255,0.08);">
            <p style="color: #6b7280; font-size: 11px; margin: 0; letter-spacing: 0.5px;">
              Big Binary Tech &nbsp;•&nbsp; Admissions Portal &nbsp;•&nbsp; ${new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" })} PKT
            </p>
          </div>
        </div>
      `,
    });

    // ── Auto-reply to the applicant ──
    await transporter.sendMail({
      from: `"Big Binary Tech" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Application Received — ${service} · Big Binary Tech`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0e1a;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #262261, #1a1836); padding: 36px 32px 28px; text-align: center; border-bottom: 2px solid #F6931D;">
            <div style="display: inline-block; background: rgba(246,147,29,0.15); border: 1px solid rgba(246,147,29,0.4); border-radius: 20px; padding: 4px 14px; margin-bottom: 14px;">
              <span style="color: #F6931D; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">Application Confirmed</span>
            </div>
            <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">We Got Your Application!</h1>
          </div>

          <!-- Body -->
          <div style="padding: 32px; background: #13111f;">
            <p style="color: #e5e7eb; font-size: 16px; line-height: 1.6; margin-top: 0;">Hi <strong style="color: #F6931D;">${firstName}</strong>,</p>
            <p style="color: #9ca3af; line-height: 1.7; font-size: 14px;">
              Thank you for applying to <strong style="color: white;">Big Binary Tech</strong>. We've received your application for the <strong style="color: #F6931D;">${service}</strong> track and our admissions team will reach out within <strong style="color: white;">24 hours</strong> to confirm your seat.
            </p>

            <div style="background: rgba(246,147,29,0.08); border-left: 3px solid #F6931D; padding: 16px 20px; border-radius: 0 10px 10px 0; margin: 24px 0;">
              <p style="margin: 0; color: #9ca3af; font-size: 13px; line-height: 1.6;">
                <strong style="color: #F6931D;">April 2026 Cohort</strong> — Limited seats available. Your spot will be reserved once confirmed by our team.
              </p>
            </div>

            <p style="color: #9ca3af; line-height: 1.7; font-size: 14px;">Questions? Contact us directly:</p>
            <p style="color: #9ca3af; font-size: 14px;">📞 <strong style="color: white;">0326-0188811</strong><br>📧 <strong style="color: white;">admissions@bbt.edu.pk</strong></p>
          </div>

          <!-- Footer -->
          <div style="background: #0f0e1a; padding: 20px 32px; text-align: center; border-top: 1px solid rgba(255,255,255,0.08);">
            <p style="color: #6b7280; font-size: 11px; margin: 0; letter-spacing: 0.5px;">
              © ${new Date().getFullYear()} Big Binary Tech &nbsp;•&nbsp; 444-Q Phase 2 DHA, Lahore, Pakistan
            </p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("❌ Email send error:", err.message);
    return res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
});

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;