import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm, Files, Fields } from "formidable";
import { File } from "formidable";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const config = { api: { bodyParser: false } };

interface ProcessedForm {
  fields: Fields;
  files: Files;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = new IncomingForm();

  try {
    const { fields, files }: ProcessedForm = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    const attachments = Array.isArray(files.files)
      ? files.files.map((file: File) => ({
          content: Buffer.from(file.filepath).toString("base64"),
          filename: file.originalFilename || "attachment",
          type: file.mimetype || "application/octet-stream",
        }))
      : [];

    await sgMail.send({
      to: "friend@example.com", // Replace with target email
      from: "no-reply@yourdomain.com", // Must match SendGrid verified domain
      subject: `New Contact: ${fields.name}`,
      text: `
        Name: ${fields.name}
        Email: ${fields.email}
        Reference: ${fields.reference}
        Message: ${fields.message}
      `,
      attachments,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
