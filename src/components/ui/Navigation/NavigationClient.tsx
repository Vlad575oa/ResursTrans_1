"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import LanguageSwitcher from "../LanguageSwitcher";
interface NavItem {
    name: string;
    href: string;
}

import { Menu, X } from "lucide-react";

export const NavigationClient = ({ items, tLanguage, tSubmit }: { items: NavItem[], tLanguage: string, tSubmit: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button - Isolate Client Interaction */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-foreground p-2 hover:bg-foreground/5 rounded-lg transition-colors flex items-center justify-center"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <X className="w-8 h-8" />
                ) : (
                    <Menu className="w-8 h-8" />
                )}
            </button>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-20 left-0 w-full md:hidden bg-background border-b border-foreground/5 overflow-hidden z-40"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {items.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-foreground text-lg font-bold"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center justify-between pt-4 border-t border-foreground/5">
                                <span className="text-foreground/70 font-medium">
                                    {tLanguage}
                                </span>
                                <LanguageSwitcher />
                            </div>
                            <Button className="w-full bg-primary-main text-white py-4 rounded-xl text-center font-bold">
                                {tSubmit}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
