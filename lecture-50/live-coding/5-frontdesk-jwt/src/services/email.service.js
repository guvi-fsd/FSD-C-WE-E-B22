import nodemailer from "nodemailer";

let transporter;

function getTransporter() {
    if(transporter) {
        return transporter;
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.GMAIL_SECRET;

    transporter = nodemailer.createTransport({
        host,
        port,
        secure: true,
        auth: {
            user,
            pass
        }
    });
    return transporter;
}

export async function sendBookingEmail({ to, customerName, bookingStartISO, serviceName }) {
    if(!to) {
        throw new Error("'to' is required");
    }
    const from = process.env.MAIL_FROM_EMAIL;
    const subject = `Booking confirmed: ${serviceName}`;
    const dateStr = new Date(bookingStartISO).toLocaleString();

    const html = `
        <div style="font-family:Helvetica,Arial;line-height:1.5">
            <p>Hi ${customerName},<p>
            <p>Your booking for <b>${serviceName}</b> is confirmed<p>
            <p><b>Start time:</b> ${dateStr}<p>
            <p>Thanks, <br>Front Desk<p>
        </div>
    `;

    const info = await getTransporter().sendMail({
        from,
        to,
        subject,
        html
    });

    return info;
}