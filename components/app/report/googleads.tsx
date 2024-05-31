import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import {
  ExclamationCircleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Card>
        <CardHeader className="flex gap-5">
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
          This issue was detected trough &apos;Ad report.csv&apos;. The report
          shows exactly 2 Ads enabled with 15 different headlines.
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex gap-5">
          <LightBulbIcon className="pointer-events-none h-[48px] w-[48px] text-gray-500" />

          <div className="flex flex-col">
            <p className="text-md">Campaign Suggestion</p>
            <p className="text-small text-default-500">
              Landing page variations & improvements
            </p>
          </div>
        </CardHeader>
        <CardBody>
          Your Landing Page is of KEY IMPORTANCE since it is the first place
          every prospective customer sees. We have found some landing pages
          perform better without links to other pages at the top of the landing
          page. This would be worth testing.
        </CardBody>
        <Divider />
        <CardFooter className="text-small text-default-500">
          This issue was detected trough combination of Campaign.csv and
          crawling to the landing page.
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex gap-5">
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
          This issue was detected trough &apos;Ad report.csv&apos;. The report
          shows exactly 2 Ads enabled with 15 different headlines.
        </CardFooter>
      </Card>
    </div>
  );
}
