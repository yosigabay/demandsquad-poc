import React from "react";
import { unstable_noStore as noStore } from "next/cache";

import { DeleteProjectBtn } from "@/components/app/buttons";
import AnalysisStatus from "@/components/app/analysisstatus";
import { formatDateToLocal } from "@/app/lib/utils";
import { fetchFilteredProjects } from "@/app/lib/data";

export default async function AnalysisProjectsTable() {
  noStore();
  const projects = await fetchFilteredProjects();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {projects?.map((p) => (
              <div key={p.id} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{p.website}</p>
                    </div>
                    <p className="text-sm text-gray-500">email</p>
                  </div>
                  <AnalysisStatus status={p.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p>{formatDateToLocal(p.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <DeleteProjectBtn id={p.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th className="px-4 py-5 font-medium sm:pl-6" scope="col">
                  Name
                </th>
                <th className="px-4 py-5 font-medium sm:pl-6" scope="col">
                  Website
                </th>
                <th className="px-3 py-5 font-medium" scope="col">
                  Date
                </th>
                <th className="px-3 py-5 font-medium" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {projects?.map((p) => (
                <tr
                  key={p.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>Dummy report name</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{p.website}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(p.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <AnalysisStatus status={p.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <DeleteProjectBtn id={p.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
