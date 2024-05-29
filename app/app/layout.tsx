import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-left justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-left justify-center">
        <h1 className={title()}>My&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Projects&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          The backend of demandsquad
        </h2>
      </div>
      {children}
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
      </div>
    </section>
  );
}
