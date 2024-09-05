const Footer = () => {
    const features = [
        {
            title: "Layout",
            href: "/docs/primitives/alert-dialog",
        },
        {
            title: "CMS",
            href: "/docs/primitives/hover-card",
        },
        {
            title: "Localization",
            href: "/docs/primitives/progress",
        },
        {
            title: "AI",
            href: "/docs/primitives/scroll-area",
        },
        {
            title: "Effects",
            href: "/docs/primitives/tabs",
        },
        {
            title: "SEO",
            href: "/docs/primitives/tooltip",
        },
        {
            title: "Navigation",
            href: "/docs/primitives/tooltip",
        },
        {
            title: "Management",
            href: "/docs/primitives/tooltip",
        },
    ];

    const Resources = [
        {
            title: "Templates",
            href: "/docs/primitives/alert-dialog",
        },
        {
            title: "Academy",
            href: "/docs/primitives/hover-card",
        },
        {
            title: "Updates",
            href: "/docs/primitives/progress",
        },
        {
            title: "Blog",
            href: "/docs/primitives/scroll-area",
        },
        {
            title: "Become a Partner",
            href: "/docs/primitives/tabs",
        },
        {
            title: "Become an expert",
            href: "/docs/primitives/tooltip",
        },
        {
            title: "Desktop App",
            href: "/docs/primitives/tooltip",
        },
        {
            title: "Figma to Framer",
            href: "/docs/primitives/tooltip",
        },
    ];

    const Companies = [
        {
            title: "Career",
            href: "/docs/primitives/alert-dialog",
        },
        {
            title: "Brand",
            href: "/docs/primitives/hover-card",
        },
        {
            title: "Terms",
            href: "/docs/primitives/progress",
        },
        {
            title: "Privacy",
            href: "/docs/primitives/scroll-area",
        },
        {
            title: "Cookies",
            href: "/docs/primitives/tabs",
        },
        {
            title: "Abuse",
            href: "/docs/primitives/tooltip",
        },
        {
            title: "Charges",
            href: "/docs/primitives/tooltip",
        },
        {
            title: "Security",
            href: "/docs/primitives/tooltip",
        },
    ];


    return (
        <div className="flex-cols md:flex gap-4 px-6 md:px-20 py-20">
            <div className="text-white md:w-1/2 py-10">
                <h1 className="text-xl">The internet is your canvas</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-white md:gap-10 ">
                <div>
                    <h1 className='text-white text-xl pb-5'>Features</h1>

                    {features.map((feature, index) => (
                        <p key={index} className="pb-2 text-neutral-500 font-semibold">{feature.title}</p>
                    ))}

                </div>
                <div>
                    <h1 className='text-white text-xl pb-5'>Resources</h1>

                    {Resources.map((resource, index) => (
                        <p key={index} className="pb-2 text-neutral-500 font-semibold">{resource.title}</p>
                    ))}

                </div>
                <div className="pt-6 md:pt-0">
                    <h1 className='text-white text-xl pb-5'>Company</h1>

                    {Companies.map((Company, index) => (
                        <p key={index} className="pb-2 text-neutral-500 font-semibold">{Company.title}</p>
                    ))}

                </div>
                <div className="pt-6 md:pt-0">
                    <h1 className='text-white text-xl pb-5'>Resources</h1>

                    {Resources.map((resource, index) => (
                        <p key={index} className="pb-2 text-neutral-500 font-semibold">{resource.title}</p>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Footer;
