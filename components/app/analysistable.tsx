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
                <AnalysisStatus id={row.id} status={row.status} />
              </TableCell>
              <TableCell>
                <DeleteProjectBtn id={row.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
