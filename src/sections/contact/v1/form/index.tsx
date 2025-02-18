'use client';

import { Button } from '@/src/components/button';
import { TextInput } from '@/src/components/inputs/text-input';
import { TextAreaInput } from '@/src/components/inputs/textarea-input';
import { cn } from '@/src/utils/shadcn';
import { Formik } from 'formik';
import { FaUser } from 'react-icons/fa6';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/src/components/select';
import { SuccessDialog } from '@/src/components/success-dialog';
import { Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import * as Yup from 'yup';
import { contactUsFormSubmit } from './server/contact-us-form-submit';

const validationMessages = {
 tooShort: 'Must be at least ${min} characters',
 tooLong: 'Must be at most ${max} characters',
 phoneNo: 'Must be minium of ${} numbers',
 required: 'This field is required',
 email: 'Invalid email format',
};

const ContactUsSchema = Yup.object().shape({
 name: Yup.string()
  .min(2, validationMessages.tooShort)
  .max(50, validationMessages.tooLong)
  .required(validationMessages.required),
 email: Yup.string()
  .email(validationMessages.email)
  .required(validationMessages.required),
 phoneNo: Yup.string().required(validationMessages.required)
  .min(10, validationMessages.phoneNo).default(null),
 subject: Yup.string()
  .min(2, validationMessages.tooShort)
  .max(50, validationMessages.tooLong)
  .required(validationMessages.required),
 message: Yup.string()
  .min(2, validationMessages.tooShort)
  .max(300, validationMessages.tooLong)
  .required(validationMessages.required),
});

export type ContactUsSchemaType = Yup.InferType<typeof ContactUsSchema>;

const fieldCommonClasses = cn('!pr-[44px]');
const errorClasses = cn('!border-red-600 border');
const errorMessageClasses = cn('sr-only');

export function Form() {
 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const router = useRouter();
 return (
  <>
   <Formik
    initialValues={{
     name: '',
     email: '',
     phoneNo: '',
     subject: '',
     message: '',
    }}
    validationSchema={ContactUsSchema}
    onSubmit={async (values, { resetForm }) => {
     console.log("🚀 ~ onSubmit={ ~ values:", values);
     const result = await contactUsFormSubmit(values);
     if (result.data === null) {
      toast.error(result.message);
     } else {
      // setIsDialogOpen(true);
      router.push('/thank-you');
      resetForm();
     }
    }}
   >
    {({
     errors,
     touched,
     values,
     handleChange,
     handleBlur,
     isSubmitting,
     handleSubmit,
     setFieldValue
    }) => (
     <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-x-30px gap-y-5 lg:grid-cols-2"
     >
      <div>
       <TextInput
        placeholder="Your Name"
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
        icon={<FaUser />}
        className={cn(
         fieldCommonClasses,
         errors.name && touched.name && errorClasses
        )}
       />
       {errors.name && touched.name && (
        <p
         title={errors.name}
         aria-live="polite"
         role="error message"
         className={errorMessageClasses}
        >
         {errors.name}
        </p>
       )}
      </div>
      <div>
       <TextInput
        placeholder="Your Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
        icon={<SendIcon />}
        className={cn(
         fieldCommonClasses,
         errors.email && touched.email && errorClasses
        )}
       />
       {errors.email && touched.email && (
        <p
         title={errors.email}
         aria-live="polite"
         role="error message"
         className={errorMessageClasses}
        >
         {errors.email}
        </p>
       )}
      </div>
      {/* <div className="lg:col-span-2">
       <TextInput
        placeholder="Subject"
        type="text"
        name="subject"
        value={values.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
        icon={<FaSpeakap />}
        className={cn(
         fieldCommonClasses,
         errors.subject && touched.subject && errorClasses
        )}
       />
       {errors.subject && touched.subject && (
        <p
         title={errors.subject}
         aria-live="polite"
         role="error message"
         className={errorMessageClasses}
        >
         {errors.subject}
        </p>
       )}
      </div> */}
      <div className="lg:col-span-2">
       <Select name="subject"
        value={values.subject}
        disabled={isSubmitting}
        onValueChange={(value) => setFieldValue('subject', value)}
       >
        <SelectTrigger className={cn(
         'h-16 border-zinc-200',
         errors.message && touched.message && errorClasses,
        )}>
         <SelectValue placeholder="How can we help you ?"
          onBlur={handleBlur}
         />
        </SelectTrigger>
        <SelectContent className='bg-zinc-900 border-zinc-600'>
         <SelectGroup>
          <SelectLabel>Select a Service</SelectLabel>
          <SelectItem value="custom-software-development">Custom Software Development</SelectItem>
          <SelectItem value="it-consultancy-development">IT Consultancy & Development</SelectItem>
          <SelectItem value="hire-offshore-developers">Hire Offshore Developers</SelectItem>
          <SelectItem value="blockchain-solutions">Blockchain Solutions</SelectItem>
          <SelectItem value="crypto-solutions">Crypto Solutions</SelectItem>
          <SelectItem value="ai-ml-solutions">AI & ML Solutions</SelectItem>
          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
         </SelectGroup>
        </SelectContent>
       </Select>
       {errors.subject && touched.subject && (
        <p
         title={errors.subject}
         aria-live="polite"
         role="error message"
         className={errorMessageClasses}
        >
         {errors.subject}
        </p>
       )}
      </div>
      <div className="lg:col-span-2">
       <TextInput
        placeholder="Mobile Number"
        type="tel"
        name="phoneNo"
        value={values.phoneNo}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
        icon={<Phone size={18} />}
        className={cn(
         fieldCommonClasses,
         errors.phoneNo && touched.phoneNo && errorClasses
        )}
       />
       {/* <PhoneInput
        placeholder="Placeholder"
        defaultCountry="IN"
        name='phoneNo'
        onChange={(value) => setFieldValue('phoneNo', Number(value))}
        value={String(values.phoneNo)}
        className={cn(
         fieldCommonClasses,
         'w-full h-16 border-zinc-600',
         errors.phoneNo && touched.phoneNo && errorClasses
        )}
       /> */}
       {errors.phoneNo && touched.phoneNo && (
        <p
         title={errors.phoneNo}
         aria-live="polite"
         role="error message"
         className={errorMessageClasses}
        >
         {errors.phoneNo}
        </p>
       )}
      </div>
      <div className="lg:col-span-2">
       <TextAreaInput
        placeholder="Write Message..."
        name="message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
        icon={<MessageIcon />}
        className={cn(
         fieldCommonClasses,
         errors.message && touched.message && errorClasses
        )}
       />
       {errors.message && touched.message && (
        <p
         title={errors.message}
         aria-live="polite"
         role="error message"
         className={errorMessageClasses}
        >
         {errors.message}
        </p>
       )}
      </div>
      <div className="lg:col-span-2">
       <Button type="submit" className="w-full" disabled={isSubmitting}>
        <span>Get Quote</span>
       </Button>
      </div>
     </form>
    )}
   </Formik>
   <SuccessDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
  </>
 );
}

// icons
function SendIcon() {
 return (
  <svg
   width={16}
   height={15}
   viewBox="0 0 16 15"
   fill="currentColor"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path d="M14.9727 1.76172L13.2227 13.1094C13.1953 13.3828 13.0312 13.6289 12.7852 13.7656C12.6484 13.8203 12.5117 13.875 12.3477 13.875C12.2383 13.875 12.1289 13.8477 12.0195 13.793L8.68359 12.3984L7.28906 14.4766C7.17969 14.668 6.98828 14.75 6.79688 14.75C6.49609 14.75 6.25 14.5039 6.25 14.2031V11.5781C6.25 11.3594 6.30469 11.168 6.41406 11.0312L12.375 3.375L4.33594 10.6211L1.51953 9.44531C1.21875 9.30859 1 9.03516 1 8.67969C0.972656 8.29688 1.13672 8.02344 1.4375 7.85938L13.6875 0.886719C13.9609 0.722656 14.3438 0.722656 14.6172 0.914062C14.8906 1.10547 15.0273 1.43359 14.9727 1.76172Z" />
  </svg>
 );
}

function MessageIcon() {
 return (
  <svg
   width="14"
   height="11"
   viewBox="0 0 14 11"
   fill="currentColor"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path d="M12.6875 0.5C13.3984 0.5 14 1.10156 14 1.8125C14 2.25 13.7812 2.63281 13.4531 2.87891L7.51953 7.33594C7.19141 7.58203 6.78125 7.58203 6.45312 7.33594L0.519531 2.87891C0.191406 2.63281 0 2.25 0 1.8125C0 1.10156 0.574219 0.5 1.3125 0.5H12.6875ZM5.93359 8.04688C6.5625 8.51172 7.41016 8.51172 8.03906 8.04688L14 3.5625V9.25C14 10.2344 13.207 11 12.25 11H1.75C0.765625 11 0 10.2344 0 9.25V3.5625L5.93359 8.04688Z" />
  </svg>
 );
}
