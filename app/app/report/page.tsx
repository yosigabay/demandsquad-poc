"use client";

import { Tabs, Tab, Card } from "@nextui-org/react";

import { title, subtitle } from "@/components/primitives";
import Summary from "@/components/app/report/summary";
import GoogleAds from "@/components/app/report/googleads";
import LinkedInAd from "@/components/app/report/linkedinads";

//const { analysisReport } = require("@/scripts/placeholder-report.js");

export default async function Home() {
  return (
    <section className="flex flex-col items-left justify-center gap-2 py-8 md:py-10">
      <div className="inline-block max-w-lg text-left justify-center">
        <h1 className={title({ color: "violet" })}>DemandSquad&nbsp;</h1>
        <h1 className={title()}>Report</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>perfectscale.io</h2>
      </div>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full ",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-violet",
          }}
          color="primary"
          variant="underlined"
        >
          <Tab key="summary" title="Summary">
            <Summary />
          </Tab>
          <Tab key="music" title="Google Ads">
            <GoogleAds />
          </Tab>
          <Tab key="videos" title="LinkedIn Ads">
            <Card>
              <LinkedInAd />
            </Card>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}
