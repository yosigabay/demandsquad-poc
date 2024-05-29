import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <ClerkProvider signInFallbackRedirectUrl="/app">
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <SignedOut>
            <NavbarItem className="hidden md:flex">
              <SignInButton>
                <Button
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                  })}
                >
                  Sign In
                </Button>
              </SignInButton>
            </NavbarItem>
            <NavbarItem>
              <Button
                className={buttonStyles({
                  radius: "full",
                  variant: "bordered",
                })}
              >
                Sign Up
              </Button>
            </NavbarItem>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
      </ClerkProvider>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
