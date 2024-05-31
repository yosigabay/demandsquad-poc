import { Card, CardBody, CardHeader, CardFooter, Divider } from "@nextui-org/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Card>
        <CardHeader className="flex gap-3">
          <ExclamationCircleIcon className="pointer-events-none h-[48px] w-[48px] text-red-500" />

          <div className="flex flex-col">
            <p className="text-md">Campaign Issue</p>
            <p className="text-small text-default-500">
              Few Ad Variations. Add new unique and creative ad sets.
            </p>
          </div>
        </CardHeader>
        <CardBody>
          Increase the number of ad types and take cues from the live Google Ads
          auction environment for ideas on how to roll out additional ad copy.
          Rotate in more ad copy variants, make sure they answer competitive
          claims and call out key differentiators and value propositions.
        </CardBody>
        <Divider />
        <CardFooter className="text-small text-default-500">
          This issue was detected trough &apos;Ad report.csv&apos;. The report shows
          exactly 2 Ads enabled with 15 different headlines.
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </CardBody>
      </Card>
    </div>
  );
}
