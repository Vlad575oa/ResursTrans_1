import { Truck, Globe, Send, Share2, MapPin, Phone, Mail, SendHorizonal } from "lucide-react";
import { getServerTranslations } from "@/lib/server-intl";

export async function Footer() {
    const { t } = await getServerTranslations();

    return (
        <footer className="hero-canvas border-t border-black/10 pt-16 pb-8 relative overflow-hidden">
            {/* Ambient gradients identical to Hero to match theme seamlessly */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="hero-orb-a mix-blend-multiply opacity-50"></div>
                <div className="hero-orb-b mix-blend-multiply opacity-50"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <Truck className="w-8 h-8 text-primary" />
                            <span className="text-xl font-bold text-text-primary">{t("Navigation.logo")}</span>
                        </div>

                        <div className="flex gap-4">
                            <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                                <Globe className="w-5 h-5" />
                            </a>
                            <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                                <Send className="w-5 h-5" />
                            </a>
                            <a className="text-text-secondary hover:text-primary transition-colors" href="#">
                                <Share2 className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-text-primary font-bold mb-6">{t("Footer.company")}</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="text-text-secondary hover:text-text-primary text-sm transition-colors" href="/about">{t("Footer.about")}</a></li>
                            <li><a className="text-text-secondary hover:text-text-primary text-sm transition-colors" href="/career">{t("Footer.career")}</a></li>
                            <li><a className="text-text-secondary hover:text-text-primary text-sm transition-colors" href="#">{t("Footer.pressCenter")}</a></li>
                            <li><a className="text-text-secondary hover:text-text-primary text-sm transition-colors" href="/contacts">{t("Footer.contacts")}</a></li>
                        </ul>
                    </div>
                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-text-primary font-bold mb-6">{t("Footer.services")}</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a className="text-text-secondary hover:text-text-primary text-sm transition-colors" href="#">{t("Footer.corporateTaxi")}</a></li>
                            <li><a className="text-text-secondary hover:text-text-primary text-sm transition-colors" href="#">{t("Footer.busTransportation")}</a></li>
                            <li><a className="text-text-secondary hover:text-text-primary text-sm transition-colors" href="#">{t("Footer.eventLogistics")}</a></li>
                            <li><a className="text-text-secondary hover:text-text-primary text-sm transition-colors" href="#">{t("Footer.vipTransport")}</a></li>
                        </ul>
                    </div>
                    {/* Contact Column */}
                    <div>
                        <h4 className="text-text-primary font-bold mb-6">{t("Footer.contactUs")}</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-sm text-text-secondary">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>{t("Footer.address")}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-text-secondary">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="flex flex-col">
                                    <span>{t("Footer.phones.tollFree")}</span>
                                    <span>{t("Footer.phones.moscow")}</span>
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-text-secondary">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>{t("Footer.email")}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <p className="text-text-secondary text-xs">{t("Footer.copyright")}</p>
                        <a href="https://t.me/+79263177226" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-text-secondary hover:text-primary transition-colors text-xs">
                            <span>сайт разработан</span>
                            <SendHorizonal className="w-3 h-3" />
                        </a>
                    </div>
                    <div className="flex gap-6">
                        <a className="text-text-secondary hover:text-text-primary text-xs transition-colors" href="/privacy">{t("Footer.privacyPolicy")}</a>
                        <a className="text-text-secondary hover:text-text-primary text-xs transition-colors" href="/terms">{t("Footer.termsOfUse")}</a>
                        <a className="text-text-secondary hover:text-text-primary text-xs transition-colors" href="/cookies">{t("Footer.cookieSettings")}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
