import { useFormatter, useLocale, useTranslations } from "next-intl";
import statsStyle from "./portfolioStats.module.css";
import { a2008List, a2013List, personalStates, topHoldings } from "./portfolio-data";


export default function PortfolioStates() {
  const t = useTranslations("stats");
  const locale = useLocale();
  const format = useFormatter();
  const dateTime = new Date("2023-01-20T10:36:01.516Z");

  return (
    <section className={statsStyle.stats}>
      <div className="flex flex-col gap-8">
        <h3 className="self-center text-center text-5xl">
          {t("yourPortfolioStates")}
        </h3>
        <div
          className="frosty-container flex flex-col rounded-xl px-10 py-5"
          style={{ width: "100%", minWidth: "80vw" }}
        >
          <span
            className="self-start"
            style={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.50)",
            }}
          >
            {locale === "en" ? "As of" : "منذ "}{" "}
            {format.dateTime(dateTime, { year: "numeric", month: "short" })}
          </span>
          <ul className="grid list-none grid-cols-1 divide-y border-none">
            {personalStates.map((state) => (
              <li key={state.title} className="flex items-center py-6">
                <p className="text-2xl ">{t(state.title)}</p>
                <span className="px-2"></span>
                {state.changes.map((change, index) => (
                  <span
                    key={index}
                    className={
                      "badge " +
                      (change.type === "up" ? "badge-success" : "badge-fail")
                    }
                  >
                    {change.type === "up" ? "+" : "-"} {""}
                    {format.number(change.value)}%
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="frosty-container flex flex-col rounded-xl px-10 py-5">
            <span
              className="self-start"
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.50)",
              }}
            >
              {locale === "en" ? "As of" : "منذ "}{" "}
              {format.dateTime(dateTime, { year: "numeric", month: "short" })}
            </span>
            <h6 className="my-6 border-none text-2xl">{t("ifA2013Bull")}</h6>
            <ul className="grid list-none grid-cols-1 divide-y border-none">
              {a2013List.map((state) => (
                <li key={state.title} className="flex items-center py-6">
                  <p className="text-2xl ">{state.title}</p>
                  <span className="px-2"></span>
                  {state.changes.map((change, index) => (
                    <span
                      key={index}
                      className={
                        "badge " +
                        (change.type === "up" ? "badge-success" : "badge-fail")
                      }
                    >
                      {change.type === "up" ? "+" : "-"} {""}
                      {format.number(change.value)}%
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          <div className="frosty-container flex flex-col  rounded-xl px-10 py-5">
            <span
              className="self-start"
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.50)",
              }}
            >
              {locale === "en" ? "As of" : "منذ "}{" "}
              {format.dateTime(dateTime, { year: "numeric", month: "short" })}
            </span>
            <h6 className="my-6 border-none text-2xl">{t("ifA2008Bear")}</h6>
            <ul className="grid list-none grid-cols-1 divide-y border-none">
              {a2008List.map((state) => (
                <li key={state.title} className="flex items-center py-6">
                  <p className="text-2xl ">{state.title}</p>
                  <span className="px-2"></span>
                  {state.changes.map((change, index) => (
                    <span
                      key={index}
                      className={
                        "badge " +
                        (change.type === "up" ? "badge-success" : "badge-fail")
                      }
                    >
                      {change.type === "up" ? "+" : "-"} {""}
                      {format.number(change.value)}%
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="flex justify-between">
            <h6 className="my-6 border-none text-2xl">{t("topHolding")}</h6>

            <span
              className="self-start"
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.50)",
              }}
            >
              {locale === "en" ? "As of" : "منذ "}{" "}
              {format.dateTime(dateTime, { year: "numeric", month: "short" })}
            </span>
          </div>

          <div className="frosty-container flex flex-wrap  gap-3  rounded-xl px-10 py-5">
            {topHoldings.map((holding) => (
              <div
                key={holding.acronym}
                className=" flex flex-wrap items-center justify-start gap-3 rounded-xl p-3"
                style={{
                  backgroundColor: "#F9F9FA",
                  height: "66px",
                  width: "180px",
                }}
              >
                <div
                  className="rounded-full"
                  style={{
                    height: "36px",
                    width: "36px",
                    backgroundColor: "#fff",
                  }}
                  dangerouslySetInnerHTML={{ __html: holding.svg }}
                ></div>
                <div className="flex flex-col">
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#000"
                    }}
                  >
                    {holding.name}
                  </span>
                  <span style={{
                    fontSize: "12px",
                    color: "rgba(0, 0, 0, 0.30)",
                    fontWeight: 600,
                  }}>{holding.acronym}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
