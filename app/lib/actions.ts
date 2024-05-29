"use server";

import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: "Please select a customer.",
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  status: z.enum(["pending", "paid"], {
    invalid_type_error: "Please select an invoice status.",
  }),
  date: z.string(),
});

const CreateProject = FormSchema.omit({ id: true, date: true });

type FormState = {
  message: string;
};

export async function createProject(prevState: FormState, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateProject.safeParse({
    title: formData.get("title"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  return {
    message: "Form data processed",
  };
}
