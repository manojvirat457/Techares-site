'use client';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { TextInput } from '@/src/components/inputs/text-input';
import { contactUsFormSubmit } from '@/src/sections/contact/v1/form/server/contact-us-form-submit';
import { SmartDatetimeInput } from '@/src/sections/cta/v2/smart-date-time';
import { cn } from '@/src/utils/shadcn';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import * as Yup from 'yup';
export interface CtaSectionProps {
  title: string;
  description: string;
}

const ctaSectionData: CtaSectionProps = {
  title: 'Schedule a Meeting',
  description:
    'Connect with our experts for a personalized one-on-one consultation. Discuss your business requirements, explore tailored solutions, and get expert guidance to drive your project forward.',
};

const inputCommonClasses = cn(
  'border-white border-opacity-60 text-white placeholder:text-white focus:border-white dark:border-white dark:border-opacity-60 dark:text-white dark:placeholder:text-white'
);

const validationSchema = Yup.object({
  name: Yup.string().min(3, 'Name is required').required('Name is required'),
  email: Yup.string().email().required('Email is required'),
});

export function CtaSection() {
  const { title, description } = ctaSectionData;
  const router = useRouter();
  return (
    <section className={cn('relative overflow-hidden bg-primary py-20')}>
      <Container>
        <div className="relative z-10 grid items-center gap-30px xl:grid-cols-12">
          <div className="text-white xl:col-span-5">
            <h2 className="h2 max-w-[410px] font-secondary capitalize leading-[1.25] ">
              {title}
            </h2>
            <p className="mt-5 text-base leading-[1.875]">{description}</p>
          </div>
          <div className="xl:col-span-7">
            <Formik
              initialValues={{ name: '', email: '', datetime: null }}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                const timezone =
                  Intl.DateTimeFormat().resolvedOptions().timeZone;
                console.log('🚀 ~ onSubmit={ ~ values:', values);
                const result = await contactUsFormSubmit({
                  name: values.name,
                  email: values.email,
                  message: `Requesting meeting at ${values.datetime} , from timezone : ${timezone}`,
                  phoneNo: '',
                  subject: 'Requesting Schedule Meeting',
                });
                if (result.data === null) {
                  toast.error(result.message);
                } else {
                  // setIsDialogOpen(true);
                  router.push('/thank-you');
                  resetForm();
                }
                resetForm();
              }}
            >
              {({ setFieldValue, isSubmitting }) => (
                <Form className="grid grid-cols-1 gap-30px md:grid-cols-2 xl:max-w-[630px]">
                  <div className="relative">
                    <Field name="name">
                      {/* @ts-ignore */}
                      {({ field }) => (
                        <TextInput
                          {...field}
                          placeholder="Your Name"
                          type="text"
                          className={inputCommonClasses}
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="absolute text-xs text-red-500"
                    />
                  </div>
                  <div className="relative">
                    <Field name="email">
                      {/* @ts-ignore */}
                      {({ field }) => (
                        <TextInput
                          {...field}
                          placeholder="Your Email"
                          type="email"
                          className={inputCommonClasses}
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="absolute text-xs text-red-500"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-4 md:col-span-2 md:flex-row md:items-center">
                    <div className="w-full flex-1">
                      <Field name="datetime">
                        {/* @ts-ignore */}
                        {({ field }) => (
                          <SmartDatetimeInput
                            {...field}
                            className={inputCommonClasses}
                            value={field.value || new Date()}
                            onValueChange={(date) =>
                              setFieldValue('datetime', date)
                            }
                            placeholder="e.g. tomorrow at 3pm"
                            disabled={(date) => date < new Date()}
                          />
                        )}
                      </Field>
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        'w-full flex-none bg-white after:bg-[#003e70] after:text-accent-200 hover:text-accent-200 dark:hover:text-accent-200 sm:flex-1 md:min-w-[190px] md:max-w-[190px]'
                      )}
                    >
                      <span className="text-black">Schedule</span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
      <Image
        src="/assets/images/cta/pattern-2.png"
        alt="cta section bg pattern"
        width={429}
        height={359}
        className="pointer-events-none absolute bottom-0 right-0 z-1 animate-float-bob-x object-cover max-[1650px]:hidden"
        sizes="100vw"
      />
    </section>
  );
}
