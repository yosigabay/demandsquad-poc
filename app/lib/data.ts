"use server";

import { auth } from "@clerk/nextjs/server";
import { sql } from "@vercel/postgres";

import { AnalysisTable } from "./definitions";

export async function fetchFilteredProjects() {
  try {
    const { userId } = auth();
    const invoices = await sql<AnalysisTable>`
        SELECT
          analysis.id,
          analysis.website,
          to_char(analysis.date, 'MM/DD/YY') as date,
          analysis.status
        FROM 
          analysis
        WHERE
        analysis.userid = ${userId}
        ORDER BY analysis.date DESC
      `;

    return invoices.rows;
  } catch (error) {
    throw new Error("Failed to fetch invoices.");
  }
}
