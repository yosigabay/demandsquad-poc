"use server";

import { z } from "zod";
import { auth } from "@clerk/nextjs/server";
import { sql } from "@vercel/postgres";

const FormSchema = z.object({
  id: z.string(),
  website: z.string({
    invalid_type_error: "Please select a customer.",
  }),
});

const CreateProject = FormSchema.omit({ id: true });

type FormState = {
  errors: string;
  message: string;
};

export async function createProject(prevState: FormState, formData: FormData) {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  // Validate form fields using Zod
  const validatedFields = CreateProject.safeParse({
    website: formData.get("website"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: "Missing Fields. Failed to Create Invoice.",
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { website } = validatedFields.data;
  const date = new Date().toISOString().split("T")[0];

  await sql`
    INSERT INTO analysis (userid, website, date, status)
    VALUES (${userId}, ${website}, ${date}, 'Pending')
  `;

  return {
    errors: "",
    message: "Form data processed",
  };
}
