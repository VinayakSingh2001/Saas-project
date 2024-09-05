import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuList,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { Link} from "react-router-dom";

const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];
const features = [
    {
        title: "Layout",
        href: "/docs/primitives/alert-dialog",
        description: "Responsiveness",
    },
    {
        title: "CMS",
        href: "/docs/primitives/hover-card",
        description: "Scale your content",
    },
    {
        title: "Localization",
        href: "/docs/primitives/progress",
        description: "Ship world",
    },
    {
        title: "AI",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Effects",
        href: "/docs/primitives/tabs",
        description: " displayed one",
    },
    {
        title: "SEO",
        href: "/docs/primitives/tooltip",
        description: "keyboard focus",
    },
    {
        title: "Navigation",
        href: "/docs/primitives/tooltip",
        description: "Page navigations",
    },
    {
        title: "Management",
        href: "/docs/primitives/tooltip",
        description: "Works on mbss for",
    },
];
const ListItem = React.forwardRef(
    ({ className, title, children, href, ...props }, ref) => {
        return (
            <li>
                <a
                    ref={ref}
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2  text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </li>
        );
    }
);

ListItem.displayName = "ListItem";

const Navbar = () => {
    return (
        <div className="sticky  md:h-[80px] top-0 z-50 bg-black py-4 flex justify-between px-5 items-center">
            <div className="text-xl pr-40 text-white cursor-pointer">Logo</div>
            <div className="hidden md:flex gap-4">
                <NavigationMenu className=''>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-neutral-400   hover:text-neutral-200">
                                Features
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                <ul className="grid w-[300px] rounded-full gap-3 px-2 py-4 md:w-max-[400px] md:grid-cols-1 lg:w-max-[400px] ">
                                    {features.map((feature) => (
                                        <ListItem
                                            key={feature.title}
                                            title={feature.title}
                                            href={feature.href}
                                        >
                                            {feature.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-neutral-400   hover:text-neutral-200">
                                Resources
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink
                                            asChild
                                            className="rounded-3xl bg-orange-400"
                                        >
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg rounded-lg  font-medium">
                                                    shadcn/ui
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Beautifully designed components that you can copy and
                                                    paste into your apps. Accessible. Customizable. Open
                                                    Source.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/" title="Introduction">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="/" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-neutral-400   hover:text-neutral-200">
                                Community
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <div className=" text-neutral-400 text-md   hover:text-neutral-200 rounded-md px-3 py-2 cursor-pointer ">
                                    Gallery
                                </div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <div className=" text-neutral-400 text-md   hover:text-neutral-200 rounded-md px-3 py-2 cursor-pointer ">
                                    Enterprise
                                </div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <div className=" text-neutral-400 text-md  hover:text-neutral-200 rounded-md px-3 py-2 cursor-pointer ">
                                    Pricing
                                </div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="md:space-x-5 items-center text-md gap-4 hidden md:flex  px-5">
                <div to='/' className="text-neutral-400 font-medium ">Login</div>
                <Button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-md rounded-xl'>Start for free</Button>
            </div>
        </div>
    );
};

export default Navbar;
