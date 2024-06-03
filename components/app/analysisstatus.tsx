import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Link } from "@nextui-org/react";
import clsx from "clsx";

export default function AnalysisStatus({
  status,
  id,
}: {
  status: string;
  id: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": status === "pending",
          "bg-green-500 text-white": status === "ready",
        },
      )}
    >
      {status === "pending" ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === "ready" ? (
        <>
          <Link
            className="text-xs text-white"
            href={`/app/report/${id}/view`}
            underline="hover"
          >
            Ready
          </Link>
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
