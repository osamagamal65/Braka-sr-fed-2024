"use client";
import { useState } from "react";
import Image from "next/image";
import reportStyles from "./header.module.css";
import {} from "@heroicons/react/24/outline";
import { useFormatter, useLocale, useTranslations } from "next-intl";

import ReportChart from "./ReportChart";
import ReportMessage from "./Message";

export default function Report() {
  const locale = useLocale();
  const [years, setYears] = useState(170);
  const [goal, setGoal] = useState(170000);
  const [starting, setStarting] = useState(2000);
  const yearly = goal / years;
  const monthly = yearly / 12;
  const TwentyYears = yearly * 20;
  const t = useTranslations("forecast");
  const format = useFormatter();

  return (
    <section
      id="report"
      className="flex flex-col items-center justify-center bg-white p-20"
    >
      <main className="flex flex-col items-center justify-center text-center">
        {/* Section heading */}
        <h1 className=" text-5xl text-black">
          {t("wellDone", { name: "Khalid" })}
          <br />
          {t("youHaveSuccessfully")}
        </h1>
        <p
          className="my-6 text-center text-xl"
          style={{ color: "#5F5F5F", maxWidth: "680px" }}
        >
          {t("forecastReport.weTookAllOfYourInput")}{" "}
          <strong className="font-bold">
            {format.number(goal, {
              style: "currency",
              currency: locale === "en" ? "USD" : "AED",
            })}
          </strong>{" "}
          {t("forecastReport.savingsInTheNext")}{" "}
          <strong className="font-bold">
            {locale === "en" ? "70 Years" : "٧٠ سنه"}
          </strong>{" "}
          {t("forecastReport.youNeedToInvest")}{" "}
          <strong className="font-bold">
            {format.number(starting, {
              style: "currency",
              currency: locale === "en" ? "USD" : "AED",
            })}
          </strong>{" "}
          {t("forecastReport.and")}{" "}
          <strong className="font-bold">
            {format.number(monthly, {
              style: "currency",
              currency: locale === "en" ? "USD" : "AED",
            })}{" "}
            {locale === "en" ? "every month" : "شهريا"}
          </strong>{" "}
          {t("forecastReport.forTheNext")}
          {locale === "en" ? "70 years" : "لل ٧٠ سنه القادمه"}
        </p>
      </main>

      {/* Chart Container */}
      <div
        className="mx-auto my-2 flex flex-col gap-8 rounded-xl border border-slate-300 p-8"
        style={{
          width: "1160px",
          minHeight: "985px",
          position: "relative",
        }}
      >
        <ReportMessage />
        <div
          className="flex"
          style={{
            position: "absolute",
            top: "500px",
            left: "100px",
          }}
        >
          <span className="text-black text-xl">
            {t("yourGoal")}{" "}
            {format.number(goal, {
              style: "currency",
              currency: locale === "en" ? "USD" : "AED",
            })}
          </span>
        </div>
        {/* Goals  */}
        <div className="flex flex-col">
          <h4 className="mb-8 text-4xl font-bold text-black">
            {t("investmentForecast")}
          </h4>
          <h6 className="text-black">{t("withYourPortfolioYour")}</h6>
          <h6 className="text-4xl text-black">
            {format.number(TwentyYears, {
              style: "currency",
              currency: locale === "en" ? "USD" : "AED",
            })}{" "}
            {locale === "en" ? "Over 20 years" : "في خلال ٢٠ عام"}
          </h6>
        </div>

        {/* Chart  */}

        <div
          className="chart-container mt-10 self-center"
          style={{
            height: "512px",
            maxWidth: "850px",
          }}
        >
          <ReportChart />
        </div>

        {/* section footer */}
        <footer className="flex flex-col">
          <h6 className="text-2xl text-black">{t("aboutTrailblazer")}</h6>
          <p
            className="my-4 text-start text-lg"
            style={{ color: "#5F5F5F", maxWidth: "680px" }}
          >
            {t("letThisPioneer")}
          </p>
        </footer>
      </div>
    </section>
  );
}
