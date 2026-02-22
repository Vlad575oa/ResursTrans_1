"use client";

import { Truck, Globe, Send, Share2, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#1A1A1A] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <Truck className="w-8 h-8 text-primary" />
                            <span className="text-xl font-bold text-white">{t("Navigation.logo")}</span>
                        </div>

                        <div className="flex gap-4">
                            <a className="text-[#777777] hover:text-primary transition-colors" href="#">
                                <Globe className="w-5 h-5" />
                            </a>
                            <a className="text-[#777777] hover:text-primary transition-colors" href="#">
                                <Send className="w-5 h-5" />
                            </a>
                            <a className="text-[#777777] hover:text-primary transition-colors" href="#">
                                <Share2 className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t("Footer.company")}</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="text-[#777777] hover:text-white text-sm transition-colors" href="/about">{t("Footer.about")}</a></li>
                            <li><a className="text-[#777777] hover:text-white text-sm transition-colors" href="/career">{t("Footer.career")}</a></li>
                            <li><a className="text-[#777777] hover:text-white text-sm transition-colors" href="#">{t("Footer.pressCenter")}</a></li>
                            <li><a className="text-[#777777] hover:text-white text-sm transition-colors" href="/contacts">{t("Footer.contacts")}</a></li>
                        </ul>
                    </div>
                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t("Footer.services")}</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="text-[#777777] hover:text-white text-sm transition-colors" href="#">{t("Footer.corporateTaxi")}</a></li>
                            <li><a className="text-[#777777] hover:text-white text-sm transition-colors" href="#">{t("Footer.busTransportation")}</a></li>
                            <li><a className="text-[#777777] hover:text-white text-sm transition-colors" href="#">{t("Footer.eventLogistics")}</a></li>
                            <li><a className="text-[#777777] hover:text-white text-sm transition-colors" href="#">{t("Footer.vipTransport")}</a></li>
                        </ul>
                    </div>
                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">{t("Footer.contactUs")}</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-sm text-[#777777]">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>{t("Footer.address")}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-[#777777]">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="flex flex-col">
                                    <span>{t("Footer.phones.tollFree")}</span>
                                    <span>{t("Footer.phones.moscow")}</span>
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-[#777777]">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>{t("Footer.email")}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#777777] text-xs">{t("Footer.copyright")}</p>
                    <div className="flex gap-6">
                        <a className="text-[#777777] hover:text-white text-xs transition-colors" href="#">{t("Footer.privacyPolicy")}</a>
                        <a className="text-[#777777] hover:text-white text-xs transition-colors" href="#">{t("Footer.termsOfUse")}</a>
                        <a className="text-[#777777] hover:text-white text-xs transition-colors" href="#">{t("Footer.cookieSettings")}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
