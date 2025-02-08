'use server';

import { ServerActionResponse } from '@/src/common-types';
import nodemailer from 'nodemailer';
import { ContactUsSchemaType } from '..';
import { createClient } from '@/src/utils/superbase/client';

export async function contactUsFormSubmit(
 values: ContactUsSchemaType
): Promise<ServerActionResponse<boolean>> {
 const { name, email, subject, message } = values;
 console.log(values, 'values');
 const supabase = createClient();
 const { error: supabaseError, data: result } = await supabase.from('contact_us').insert({
  name,
  email,
  subject,
  message,
  submitted_at: new Date(), // Optional: If you want to store the submission time
 });
 console.log(result);
 if (supabaseError) {
  console.error('Supabase Error:', supabaseError.message);
  return {
   isSuccess: false,
   data: null,
   message: 'Failed to store data in the database',
  };
 }
 try {
  const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
    user: process.env.CONTACT_MAIL_ADDRESS,
    pass: process.env.CONTACT_MAIL_PASSWORD,
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
