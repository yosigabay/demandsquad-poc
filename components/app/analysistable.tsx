"use client";

import { Table } from "@nextui-org/react";
import { TableHeader } from "@nextui-org/react";
import { TableColumn } from "@nextui-org/react";
import { TableBody } from "@nextui-org/react";
import { TableCell } from "@nextui-org/react";
import { TableRow } from "@nextui-org/react";

import { formatDateToLocal } from "@/app/lib/utils";
import AnalysisStatus from "@/components/app/analysisstatus";
import { DeleteProjectBtn } from "@/components/app/buttons";
import { AnalysisTable } from "@/app/lib/definitions";

export default function AnalysisProjectsTable({
  projects,
}: {
  projects: AnalysisTable[];
}) {
  return (
    <div className="mt-6 flow-root">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Report Name</TableColumn>
          <TableColumn>Domain</TableColumn>
          <TableColumn>Date</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {projects.map((row) => (
            <TableRow key={row.id}>
              <TableCell>Dummy report Name</TableCell>
              <TableCell>{row.website}</TableCell>
              <TableCell>{formatDateToLocal(row.date)}</TableCell>
              <TableCell>
                <AnalysisStatus status={row.status} />
              </TableCell>
              <TableCell>
                <DeleteProjectBtn id={row.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/*<div className="inline-block min-w-full align-middle">
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
        </div>*/}
    </div>
  );
}
