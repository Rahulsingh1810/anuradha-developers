import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { type, name, email, phone, projectName, interest, budget, message, subject: bodySubject } = body

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone are required fields.' },
        { status: 400 }
      )
    }

    // SMTP Config from env variables
    const host = process.env.SMTP_HOST || 'smtp.gmail.com'
    const port = parseInt(process.env.SMTP_PORT || '587', 10)
    const user = process.env.SMTP_USER || process.env.EMAIL
    const pass = process.env.SMTP_PASS || process.env.EMAIL_PASSWORD
    const recipient = process.env.RECIPIENT_EMAIL || 'rahul181002singh@gmail.com'

    if (!user || !pass) {
      console.error('SMTP credentials are not configured in environment variables.')
      return NextResponse.json(
        { error: 'Mail server configuration missing.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for port 465, false for other ports like 587
      auth: {
        user,
        pass,
      },
    })

    const leadType = type === 'brochure' ? 'Brochure Download' : 'General Enquiry'
    const timeString = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    // Generate dynamic fields HTML
    let fieldsHtml = ''
    if (type === 'brochure') {
      fieldsHtml = `
        <tr>
          <td class="label">Lead Type</td>
          <td class="value"><span style="font-weight: bold; color: #5c2967;">Brochure Download</span></td>
        </tr>
        <tr>
          <td class="label">Project</td>
          <td class="value"><span style="color: #5c2967; font-weight: bold;">${projectName || 'Unknown Project'}</span></td>
        </tr>
        <tr>
          <td class="label">Name</td>
          <td class="value">${name}</td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="value"><a href="mailto:${email}" style="color: #5c2967; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="value"><a href="tel:${phone}" style="color: #5c2967; text-decoration: none;">${phone}</a></td>
        </tr>
        <tr>
          <td class="label">Date & Time</td>
          <td class="value">${timeString} (IST)</td>
        </tr>
      `
    } else {
      fieldsHtml = `
        <tr>
          <td class="label">Lead Type</td>
          <td class="value"><span style="font-weight: bold; color: #5c2967;">General Enquiry</span></td>
        </tr>
        <tr>
          <td class="label">Name</td>
          <td class="value">${name}</td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="value">${email ? `<a href="mailto:${email}" style="color: #5c2967; text-decoration: none;">${email}</a>` : 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="value"><a href="tel:${phone}" style="color: #5c2967; text-decoration: none;">${phone}</a></td>
        </tr>
        <tr>
          <td class="label">Subject</td>
          <td class="value">${bodySubject || interest || 'Not specified'}</td>
        </tr>
        <tr>
          <td class="label">Budget</td>
          <td class="value">${budget || 'Not specified'}</td>
        </tr>
        <tr>
          <td class="label">Message</td>
          <td class="value">
            ${message ? `<div class="message-text">${message.replace(/\n/g, '<br>')}</div>` : 'No message provided'}
          </td>
        </tr>
        <tr>
          <td class="label">Date & Time</td>
          <td class="value">${timeString} (IST)</td>
        </tr>
      `
    }

    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Lead - ${leadType}</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #faf8f5;
          color: #1a0d2e;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }
        .wrapper {
          background-color: #faf8f5;
          padding: 40px 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(92, 41, 103, 0.08);
          border: 1px solid rgba(92, 41, 103, 0.1);
        }
        .header {
          background-color: #5c2967;
          padding: 40px 30px;
          text-align: center;
        }
        .header h1 {
          color: #faf8f5;
          font-size: 26px;
          font-weight: 300;
          margin: 0;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .header h1 span {
          font-weight: 700;
          color: #F5D78E;
        }
        .badge {
          display: inline-block;
          padding: 6px 16px;
          background-color: rgba(245, 215, 142, 0.15);
          color: #F5D78E;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border-radius: 50px;
          margin-top: 15px;
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 16px;
          line-height: 1.6;
          color: #5c2967;
          margin-top: 0;
          margin-bottom: 10px;
          font-weight: 600;
        }
        .details-table {
          width: 100%;
          border-collapse: collapse;
          background-color: #faf8f5;
          border-radius: 16px;
          overflow: hidden;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        .details-table td {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(92, 41, 103, 0.06);
        }
        .details-table tr:last-child td {
          border-bottom: none;
        }
        .label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #5c2967;
          width: 35%;
          vertical-align: top;
        }
        .value {
          font-size: 14px;
          color: #1a0d2e;
          font-weight: 500;
          line-height: 1.5;
        }
        .message-text {
          background-color: #ffffff;
          border: 1px dashed rgba(92, 41, 103, 0.2);
          border-radius: 12px;
          padding: 15px;
          margin-top: 8px;
          font-style: italic;
          color: #5c2967;
          font-size: 13px;
          line-height: 1.6;
        }
        .footer {
          background-color: #1a0d2e;
          padding: 30px 20px;
          text-align: center;
        }
        .footer p {
          font-size: 12px;
          color: rgba(245, 215, 142, 0.6);
          margin: 5px 0;
        }
        .footer a {
          color: #F5D78E;
          text-decoration: none;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <h1>Anuradha <span>Developers</span></h1>
            <div class="badge">${leadType}</div>
          </div>
          <div class="content">
            <p class="greeting">Hello Team,</p>
            <p style="font-size: 14px; color: #666; margin-bottom: 25px; line-height: 1.5; margin-top: 0;">
              A new submission has been received from the website. Here are the details of the lead:
            </p>
            <table class="details-table">
              ${fieldsHtml}
            </table>
          </div>
          <div class="footer">
            <p>This is an automated notification from <a href="https://anuradhadevelopers.in" target="_blank">Anuradha Developers</a>.</p>
            <p>&copy; 2026 Anuradha Developers. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
    `

    const subject = type === 'brochure' 
      ? `Brochure Download Alert: ${projectName || 'Property'} - ${name}`
      : `New Website Enquiry: ${bodySubject || interest || 'General'} - ${name}`

    const mailOptions = {
      from: `Anuradha Developers Website <${user}>`,
      to: recipient,
      subject,
      html: htmlTemplate,
      replyTo: email || undefined,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
