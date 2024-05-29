"use client";

import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useFormState } from "react-dom";
import { Button } from "@nextui-org/button";
import { button as buttonStyles } from "@nextui-org/theme";

import { createProject } from "@/app/lib/actions";

export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createProject, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* What is your title */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium" htmlFor="title">
            What is your title?
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="title"
              name="title"
              placeholder="Enter your business title"
              type="text"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div aria-atomic="true" aria-live="polite" id="customer-error" />
        </div>

        {/* company website url */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium" htmlFor="website">
            Enter the company website
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="website"
                name="website"
                placeholder="Enter company website"
                type="text"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          href="/app"
        >
          Cancel
        </Link>
        <Button
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "bordered",
          })}
        >
          Create Project
        </Button>
      </div>
    </form>
  );
}
