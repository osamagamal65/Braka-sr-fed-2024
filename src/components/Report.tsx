"use client";
import { useState } from "react";
import Image from "next/image";
import reportStyles from "./header.module.css";
import {} from "@heroicons/react/24/outline";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
  const dateTime = new Date();

  return (
    <section
      id="report"
      className="flex flex-col items-center justify-center bg-white p-20"
    >
      <main className="flex flex-col items-center justify-center text-center">
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
      <div
        className="rounded-xl mx-auto my-2 flex flex-col gap-8 border border-slate-300 p-8"
        style={{
          width: "1160px",
          minHeight: "985px",
        }}
      >
        <div className="flex flex-col ">
          <h4 className="mb-8 text-4xl font-bold text-black">
            {t("investmentForecast")}
          </h4>
          <h6 className="text-black">{t("withYourPortfolioYour")}</h6>
          <h6 className="text-4xl text-black">
            {format.number(TwentyYears, {
              style: "currency",
              currency: locale === "en" ? "USD" : "AED",
            })} {" "} {locale === 'en' ? 'Over 20 years' : 'في خلال ٢٠ عام'}
          </h6>
        </div>
        <div
          className="chart-container self-center"
          style={{
            height: "512px",
            maxWidth: "850px",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="amt"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
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
