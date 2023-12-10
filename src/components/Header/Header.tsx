"use client";
import { useState } from "react";
import Image from "next/image";
import headerStyles from "./header.module.css";
import {
  Bars3Icon,
  ChevronDownIcon,
  ArrowDownOnSquareIcon,
} from "@heroicons/react/24/outline";
import { useFormatter, useTranslations } from "next-intl";
const navigation: { name: string; href: string }[] = [];

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
          className="flex flex-col justify-start gap-12 p-10 backdrop-blur-lg"
          style={{
            width: "570px",
            borderRadius: "12px",
            background: "rgba(217, 217, 217, 0.12)",
          }}
        >
          <h2 className="text-lg">{t("hero.vacation")}</h2>
          <div className="flex flex-col">
            <h4 className="pb-6 text-4xl">
              {t("hero.financialReport", { name: "Khaled Abu Asbeh" })}
            </h4>
            <div className="flex">
              <a
                href="www.appstore.com"
                className="rounded-full bg-white px-4 py-2 text-sm text-black hover:bg-slate-200"
              >
                {t("hero.startInvesting")}
              </a>
              <a
                href="https://www.appstore.com"
                className=" items-center flex px-4 py-2 text-sm text-white"
              >
                <ArrowDownOnSquareIcon
                  className="mx-2"
                  style={{ width: "20px" }}
                />
                {t("hero.downloadReport")}
              </a>
            </div>
          </div>
          <small className="text-xs">
            {format.dateTime(dateTime, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
        </div>
      </main>
      <div className="mb-10 flex justify-center align-bottom">
        <a href="#report"
          style={{ width: "44px", height: "44px" }}
          className="items-center flex justify-center rounded-full bg-white p-2 duration-300 hover:scale-110"
        >
          <ChevronDownIcon color="black" style={{ width: "16px" }} />
        </a>
      </div>
    </header>
  );
}
