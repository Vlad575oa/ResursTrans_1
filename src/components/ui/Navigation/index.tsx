import { NavigationClient } from "./NavigationClient";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { getServerTranslations } from "@/lib/server-intl";

import { Truck } from "lucide-react";

export const Navigation = async () => {
    const { t } = await getServerTranslations();

    const navItems = [
        { name: t("Navigation.services"), href: "/services" },
        { name: t("Navigation.cases"), href: "/cases" },
        { name: t("Navigation.news"), href: "/news" },
        { name: t("Navigation.about"), href: "/about" },
        { name: t("Navigation.contacts"), href: "/contacts" },
    ];

    return (
        <div className="w-full bg-background fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <header className="flex items-center justify-between h-20">
                    {/* Logo - Server Rendered */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="h-10 w-10 flex items-center justify-center bg-primary-main/10 text-primary-main rounded-lg group-hover:scale-110 transition-transform">
                            <Truck className="w-6 h-6" />
                        </div>
                        <h2 className="text-foreground text-xl font-bold tracking-tight">
                            {t("Navigation.logo")}
                        </h2>
                    </Link>

                    {/* Desktop Navigation - Server Rendered for Speed Index */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-foreground/70 hover:text-primary-main text-sm font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA & Mobile Toggle Shell */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="primary"
                            className="hidden sm:flex bg-primary-main hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            {t("Navigation.submitRequest")}
                        </Button>

                        <ThemeToggle />

                        <LanguageSwitcher />

                        <NavigationClient
                            items={navItems}
                            tLanguage={t("Navigation.language")}
                            tSubmit={t("Navigation.submitRequest")}
                        />
                    </div>
                </header>
            </div>
        </div>
    );
};
