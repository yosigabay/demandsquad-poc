import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { AnalysisArtifcat } from "@/app/lib/definitions";

export default async function Home({ data }: { data: AnalysisArtifcat }) {
  return (
    <Card className="">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={data.image_url}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{data.title}</p>
          <p className="text-small text-default-500">{data.subtitle}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{data.insight}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          className={buttonStyles({
            color: "primary",
            variant: "shadow",
          })}
          href="https://github.com/nextui-org/nextui"
        >
          Fix with DemandSquad
        </Link>
      </CardFooter>
    </Card>
  );
}
