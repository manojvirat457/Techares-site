'use server';

import { ServerActionResponse } from '@/src/common-types';
import nodemailer from 'nodemailer';
import { ContactUsSchemaType } from '..';

export async function contactUsFormSubmit(
  values: ContactUsSchemaType
): Promise<ServerActionResponse<boolean>> {
  const { name, email, subject, message, phone } = values;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // SMTP server hostname
      port: 587, // SMTP port (typically 587 for TLS or 465 for SSL)
      secure: false, // Use TLS (true for SSL on port 465)
      auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASS, // SMTP password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.CONTACT_MAIL_ADDRESS,
      subject: subject,
      html: `
        <h3 style="margin-bottom:8px">Name:</h3>
        <p style="margin:0">${name}</p>
        <br/>
        <h3 style="margin:0; margin-bottom:8px">Email:</h3>
        <p style="margin:0">${email}</p>

        ${
          phone &&
          `
        <br/>
        <h3 style="margin:0; margin-bottom:8px">Phone:</h3>
        <p style="margin:0">${phone}</p>
        `
        }

        <br/>
        <h3 style="margin:0; margin-bottom:8px">Body:</h3>
        <p style="margin-top:0">${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      isSuccess: true,
      data: true,
      message: 'Thanks for getting in touch',
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      data: null,
      message: 'Internal Server Error',
    };
  }
}
