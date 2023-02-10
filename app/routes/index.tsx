import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { z, ZodError } from "zod";
import { sendEmail } from "~/services/email.server";

const FormSchema = z.object({
  from: z.string().email("Please enter a valid email address!"),
  subject: z.string().trim(),
  body: z.string().trim(),
});

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  try {
    const validatedFormData = FormSchema.parse(
      Object.fromEntries(formData.entries())
    );

    await sendEmail(validatedFormData);

    return redirect("/");
  } catch (error) {
    if (error instanceof ZodError) {
      return json(error.flatten(), { status: 400 });
    }

    return json(
      {
        message: "An unexpected error occurred.",
        error,
      },
      { status: 500 }
    );
  }
}

export default function HomePage() {
  const actionData = useActionData<typeof action>();

  const errors: Record<string, any> = {};

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
