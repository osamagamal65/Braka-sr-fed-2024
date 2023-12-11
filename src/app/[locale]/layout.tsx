import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import Header from "../../components/Header/Header";
import Report from "../../components/Report/Report";
import "../globals.css";
import PremiumFeatures from "../../components/PremiumFeatures/PremiumFeatures";
import AssetAllocations from "../../components/Assets/AssetAlocation";
import Quote from "@/components/Quote/Quote";
import ActionSteps from "@/components/Actions/ActionSteps";
import PortfolioStates from "@/components/Stats/PortfolioStats";
import Conclusion from "@/components/Conclusion/Conclusion";
import Promotion from "@/components/Promotion/Promotion";
import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";

const proximaNovaFont = localFont({
  src: "../../../public/fonts/Proxima-Nova-Font.otf",
  display: "swap",
  variable: "--font-proxima",
});

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} className={proximaNovaFont.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <Report />
          <PremiumFeatures />
          <AssetAllocations />
          <Quote />
          <ActionSteps />
          <PortfolioStates />
          <Conclusion />
          <Promotion />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
