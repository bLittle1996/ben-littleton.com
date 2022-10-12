import type { ActionFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { object, ValidationError, SchemaOf, string } from "yup";
import { sendEmail, MailData } from "~/services/email.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const formSchema: SchemaOf<MailData> = object().shape({
    from: string().email().required("Please enter a valid email address!"),
    subject: string().trim().required("Don't forget to provide a subject!"),
    body: string()
      .trim()
      .required("Sending me an actual message is strongly recommended!"),
  });
  try {
    const validatedFormData = await formSchema.validate(
      Object.fromEntries(formData.entries()),
      // abortEarly stops all validation errors from being returned at once!
      { abortEarly: false }
    );

    await sendEmail({
      ...validatedFormData,
    });

    return redirect("/");
  } catch (error) {
    if (ValidationError.isError(error)) {
      return json(error, { status: 400 });
    }

    return json(
      {
        message: "An unexpected error occurred.",
        error,
      },
      { status: 500 }
    );
  }
};

type ActionData = ValidationError | { message: string; error: Error };

export default function HomePage() {
  const actionData = useActionData<ActionData>();

  const errors = ValidationError.isError(actionData)
    ? actionData.inner.reduce((errorMap, error) => {
        const field = error.path;
        if (field) {
          errorMap[field] = error.message;
        }

        return errorMap;
      }, {} as Record<string, string>)
    : {};

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Form method="post">
        <div>
          <label>
            Email
            <input type="email" name="from" />
          </label>
          {errors.from && <p>{errors.from}</p>}
        </div>
        <div>
          <label>
            Subject
            <input type="text" name="subject" />
          </label>
          {errors.subject && <p>{errors.subject}</p>}
        </div>
        <div>
          <label>
            Body
            <textarea name="body"></textarea>
            {errors.body && <p>{errors.body}</p>}
          </label>
        </div>

        <button type="submit">GO!</button>
      </Form>
    </div>
  );
}
