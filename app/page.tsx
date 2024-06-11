import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Get a&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>professional&nbsp;</h1>
        <br />
        <h1 className={title()}>marketing agency, just for you.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>Autonomous, AI driven.</h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/docs"
        >
          Documentation
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by adding your <Code color="primary">domain</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
