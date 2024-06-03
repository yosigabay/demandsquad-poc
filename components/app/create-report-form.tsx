"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { button as buttonStyles } from "@nextui-org/theme";

import { createProject } from "@/app/lib/actions";

export default function CreateProjectForm() {
  const [state, dispatch] = useFormState(createProject, {
    errors: "",
    message: "",
  });

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-col">
        <p className="flex w-full pl-3 font-bold text-3xl">Enter your domain</p>
        <p className="flex text-default-500">
          Type in the domain you want to use for your website.
        </p>
      </CardHeader>
      <CardBody>
        <form action={dispatch} className="space-y-4">
          <div>{state.message}</div>
          <div className="relative rounded-md ">
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0">
              <Input
                className="pl-3"
                id="website"
                name="website"
                placeholder="https://example.com"
                startContent={<GlobeIcon className="h-5 w-5 text-blue-400" />}
                type="text"
                variant="bordered"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "bordered",
              })}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
