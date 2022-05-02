import { redirect } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { sendEmail } from "~/services/email.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const from = formData.get("from")?.toString();
  const subject = formData.get("subject")?.toString();
  const body = formData.get("body")?.toString();

  if (!from || !subject || !body) {
    throw new Error("Shit's fucked!!!");
  }

  await sendEmail({
    from,
    subject,
    body,
  });

  return redirect("/");
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Form method="post">
        <label>
          Email
          <input type="email" name="from" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" />
        </label>
        <label>
          Body
          <textarea name="body"></textarea>
        </label>

        <button type="submit">GO!</button>
      </Form>
    </div>
  );
}
