import React from "react";
import { Avatar, Card, CardHeader, Link } from "@nextui-org/react";

import { subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <h2 className={subtitle({ class: "mt-4 font-bold" })}>
        Perfectscale.io Brand
      </h2>
      <span>
        PerfectScale provides DevOps teams with the tools they need to optimize
        Kubernetes environments through easy-to-use solutions that enable quick,
        data-driven decisions. Their platform enhances Kubernetes performance
        and availability while controlling costs, helping companies maintain a
        competitive advantage​
      </span>
      <span className="text-small text-default-500">
        This text was generated by scraping https://perfectscale.io/about and
        feeding to GenAI for brand summary.
      </span>
      <h2 className={subtitle({ class: "mt-4 font-bold" })}>Competitors</h2>
      <div className="flex flex-row gap-5">
        <Card>
          <CardHeader className="flex">
            <Avatar
              className="w-10 h-10 text-large"
              src="https://cast.ai/wp-content/uploads/2023/01/cropped-favicon-1-32x32.png"
            />
            <Link className="justify-center ml-2" href="https://cast.ai">
              cast.ai
            </Link>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex">
            <Avatar
              className="w-10 h-10 text-large"
              src="https://www.kubecost.com/images/favicon.png"
            />
            <Link className="justify-center ml-2" href="https://kubecost.com">
              kubecost
            </Link>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex">
            <Avatar
              className="w-10 h-10 text-large"
              src="https://scaleops.com/wp-content/uploads/2024/03/cropped-scaleops-logo-150x150-1-32x32.png"
            />
            <Link className="justify-center ml-2" href="https://scaleops.com">
              scaleops
            </Link>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}