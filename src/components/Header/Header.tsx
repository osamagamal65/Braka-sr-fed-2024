"use client";
import { useState } from "react";
import Image from "next/image";
import headerStyles from "./header.module.css";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useFormatter, useTranslations } from "next-intl";
import { Cormorant } from "next/font/google";

const navigation: { name: string; href: string }[] = [];
const cormorant = Cormorant({
  weight: "600",
  subsets: ["latin"],
});

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("header");
  const format = useFormatter();
  const dateTime = new Date();
  return (
    <header className={headerStyles.hero}>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">{t("baraka")}</span>
            <Image
              className="h-8 w-auto"
              width="64"
              height="64"
              src="/images/logo.svg"
              alt=""
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a
            href="www.appstore.com"
            className="mx-2 rounded-full bg-slate-900 px-4 py-2 text-sm hover:bg-slate-700"
          >
            {t("nav.getTheApp")}
          </a>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              width="70"
              height="15"
              viewBox="0 0 70 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.569092 1.93506H69.0691"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M0.569092 13.9351H69.0691"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </nav>
      <main
        className="flex items-center px-4 md:justify-center lg:justify-start"
        style={{
          height: "80%",
          padding: "70px",
        }}
      >
        <div
          className="flex flex-col justify-start p-10 backdrop-blur-lg"
          style={{
            minWidth: "570px",
            width: "570px",
            gap: "70px",
            borderRadius: "12px",
            height: "502px",
            background: "rgba(217, 217, 217, 0.12)",
          }}
        >
          <h2 className="text-4xl">{t("hero.vacation")}</h2>
          <div className="flex flex-col">
            <h4
              className={cormorant.className + " font-cor pb-6 text-[50px]"}
              style={{
              
                lineHeight: "72px",
              }}
            >
              {t("hero.financialReport", { name: "Khaled Abu Asbeh" })}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.appstore.com"
                className="rounded-full bg-white px-4 py-2 text-sm text-black hover:bg-slate-200"
              >
                {t("hero.startInvesting")}
              </a>
              <a
                href="https://www.appstore.com"
                className="flex items-center  gap-1  px-4 text-sm text-white"
              >
                <span style={{ height: "20px", width: "20px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.60937 11.6543V6.66675V1.66675H10.6094V6.66675V11.6541L11.9195 10.5404L12.3005 10.2165L12.9482 10.9784L12.5672 11.3023L10.4331 13.1165C10.2464 13.2752 9.97214 13.2752 9.78542 13.1165L7.65133 11.3023L7.27038 10.9784L7.91807 10.2165L8.29902 10.5404L9.60937 11.6543ZM2.9427 8.90222C2.9427 7.52151 4.06199 6.40222 5.4427 6.40222H6.79706V7.40222H5.4427C4.61428 7.40222 3.9427 8.07379 3.9427 8.90222V15.7356C3.9427 16.564 4.61428 17.2356 5.4427 17.2356H14.776C15.6045 17.2356 16.276 16.564 16.276 15.7356V8.90222C16.276 8.07379 15.6045 7.40222 14.776 7.40222H13.4123V6.40222H14.776C16.1567 6.40222 17.276 7.52151 17.276 8.90222V15.7356C17.276 17.1163 16.1568 18.2356 14.776 18.2356H5.4427C4.06199 18.2356 2.9427 17.1163 2.9427 15.7356V8.90222Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span> {t("hero.downloadReport")}</span>
              </a>
            </div>
          </div>

          <small className="text-xl ">
            {format.dateTime(dateTime, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
        </div>
      </main>

      {/* Floating */}
      <div className="mb-10 flex justify-center align-bottom">
        <a
          href="#report"
          style={{ width: "44px", height: "44px" }}
          className="flex items-center justify-center rounded-full bg-white p-2 duration-300 hover:scale-110"
        >
          <ChevronDownIcon color="black" style={{ width: "16px" }} />
        </a>
      </div>
    </header>
  );
}
