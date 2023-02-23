import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { z } from "zod";
import { sendEmail } from "~/services/email.server";
import { commitSession, getSession } from "~/services/sessions.server";
import { isFlattenedZodError } from "~/utils/guards/is-zod-error";

const FormSchema = z.object({
  from: z.string().email("Please enter a valid email address!"),
  subject: z.string().trim().min(1, "Don't forget to provide a subject!"),
  body: z.string().trim().min(1, "Surely you have something say?"),
});
const emailSentSessionKey = "email-sent";

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request);

  const didSendEmail = !!session.get(emailSentSessionKey);

  return json(
    {
      didSendEmail,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export async function action({ request }: ActionArgs) {
  const session = await getSession(request);
  const formData = await request.formData();

  try {
    const parsedFormData = FormSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!parsedFormData.success) {
      return json(
        { message: "Invalid form data", error: parsedFormData.error.flatten() },
        { status: 400 }
      );
    }

    await sendEmail(parsedFormData.data);

    session.flash(emailSentSessionKey, true);

    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (error) {
    return json(
      {
        message: "An unexpected error occurred",
        error:
          error instanceof Error
            ? error
            : new Error("An unexpected error occured"),
      },
      { status: 500 }
    );
  }
}

function head<T>(array: T[]): T | undefined {
  return array[0];
}

export default function HomePage() {
  const navigation = useNavigation();
  const { didSendEmail } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const fieldErrors =
    !!actionData && isFlattenedZodError(actionData.error)
      ? actionData.error.fieldErrors
      : {};

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Form method="post">
        <div>
          <label>
            Email
            <input type="email" name="from" />
          </label>
          {fieldErrors.from && <p>{head(fieldErrors.from)}</p>}
        </div>
        <div>
          <label>
            Subject
            <input type="text" name="subject" />
          </label>
          {fieldErrors.subject && <p>{head(fieldErrors.subject)}</p>}
        </div>
        <div>
          <label>
            Body
            <textarea name="body"></textarea>
            {fieldErrors.body && <p>{head(fieldErrors.body)}</p>}
          </label>
        </div>

        <button disabled={navigation.state !== "idle"} type="submit">
          {navigation.state === "idle"
            ? "Submit"
            : navigation.state === "submitting"
            ? "Submitting..."
            : "Submitted"}
        </button>
      </Form>
    </div>
  );
}
