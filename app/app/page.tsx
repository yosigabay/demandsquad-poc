import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { PlusIcon } from "@heroicons/react/24/outline";

import Table from "@/components/app/analysistable";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default async function Home() {
  return (
    <section className="flex flex-col items-left justify-center gap-2 py-8 md:py-10">
      <div className="inline-block max-w-lg text-left justify-center">
        <h1 className={title()}>My&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Projects&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          The backend of demandsquad
        </h2>
      </div>
      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/app/create"
        >
          <span className="hidden md:block">Create Project</span>{" "}
          <PlusIcon className="h-5 md:ml-4" />
        </Link>
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "bordered",
          })}
          href={siteConfig.links.docs}
        >
          Help
        </Link>
      </div>
      <div className="mt-4 items-center justify-between gap-2 md:mt-2">
        {<Table />}
      </div>
    </section>
  );
}
