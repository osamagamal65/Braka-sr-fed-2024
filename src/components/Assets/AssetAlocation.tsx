"use client";
import { useTranslations } from "next-intl";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AllocationTile from "./AllocationTile";

export default function AssetAllocations() {
  const t = useTranslations("assetAllocation");
  const assetAllocations = [
    {
      title: "IShares Core S&P 500 ETF",
      allocation: "45.56",
      ticker: "IVV",
      details:
        "The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this index",
    },
    {
      title: "iShares Edge MSCI USA Momentum Factor ETF",
      allocation: "35.63",
      ticker: "MTUM",
      details:
        "The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this index",
    },
    {
      title: "Invesco 5&P MidCap Momentum ETF",
      allocation: "15.53",
      ticker: "XMMO",
      details:
        "The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this index",
    },
    
    {
      title: "IShares Core S&P 500 ETF",
      allocation: "45.56",
      ticker: "IVV",
      details:
        "The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this index",
    },
    {
      title: "IShares Core S&P 500 ETF",
      allocation: "45.56",
      ticker: "IVV",
      details:
        "The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this index",
    },
    {
      title: "Cash",
      allocation: "45.56",
      ticker: "USD",
      details:
        "The iShares Core S&P 500 ETF is one of the many ETFs offered by BlackRock under the iShares brand. An ETF is an investment fund that is traded on an exchange, much like individual stocks. It provides investors with the opportunity to invest in a broad range of stocks that make up the S&P 500, allowing them to diversify their portfolios and gain exposure to the performance of this index",
    },
  ];
  return (
    <section
      className="flex flex-col py-36 md:px-8 lg:px-36"
      style={{
        background: "#F2F2F2",
      }}
    >
      <div className="mb-20 flex justify-around rounded-xl bg-black py-36 md:flex-col  md:px-16 lg:flex-row">
        <div className="mr-24 flex flex-col" style={{ maxWidth: "420px" }}>
          <h6 className="mb-8 text-4xl">{t("assetAllocation")}</h6>
          <p className="text-xl">{t("toAchieveYour")}</p>
        </div>

        <div className="flex items-center">
          <div style={{ width: "196px", height: "196px", marginRight: "44px" }}>
            <CircularProgressbarWithChildren
              value={0.75}
              maxValue={1}
              minValue={0}
              styles={buildStyles({
                backgroundColor: "rgba(255, 255, 255, 0.10)",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "rgba(255, 255, 255, 0.10)",
                pathTransitionDuration: 0.5,
                textSize: "16px",
                strokeLinecap: "butt",
              })}
            >
              <p
                className="flex items-center justify-center text-center text-2xl"
                style={{ width: 100, height: 100 }}
              >
                {t("yourPortfolio")}
              </p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="flex items-center justify-between">
            <div className="mx-6 flex flex-col">
              <span
                className="rounded-lg bg-white"
                style={{
                  width: "40px",
                  height: "5px",
                  marginBottom: "4px",

                  display: "inline-block",
                }}
              ></span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 300,
                  color: "rgba(255, 255, 255, 0.30)",
                }}
              >
                {t("equity")}
              </span>
              <span
                className="flex items-center "
                style={{
                  color: "rgba(255, 255, 255, 0.30)",
                }}
              >
                <span
                  className="mx-1  font-bold  text-white"
                  style={{ fontSize: "32px" }}
                >
                  75{" "}
                </span>
                %
              </span>
            </div>
            <div className="flex flex-col  ">
              <span
                className=" rounded-lg"
                style={{
                  width: "40px",
                  height: "5px",
                  marginBottom: "4px",
                  backgroundColor: "rgba(255, 255, 255, 0.30)",
                  display: "inline-block",
                }}
              ></span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 300,
                  color: "rgba(255, 255, 255, 0.30)",
                }}
              >
                {t("cash")}
              </span>
              <span
                className=" flex items-center"
                style={{
                  color: "rgba(255, 255, 255, 0.30)",
                }}
              >
                <span
                  className="mx-1 font-bold text-white"
                  style={{ fontSize: "32px" }}
                >
                  25{" "}
                </span>
                %
              </span>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mb-4 text-2xl text-black">{t("productAllocation")}</h3>
      <div className="mb-4 flex justify-between">
        <span
          style={{
            fontSize: "14px",
            fontWeight: 400,
            flex: "40%",
            color: "rgba(0, 0, 0, 0.50)",
          }}
        >
          {t("foundName")}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 400,
            flex: "20%",
            color: "rgba(0, 0, 0, 0.50)",
          }}
        >
          {t("ticker")}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 400,
            flex: "20%",
            color: "rgba(0, 0, 0, 0.50)",
          }}
        >
          {t("allocation")}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 400,
            flex: "20%",
            color: "rgba(0, 0, 0, 0.50)",
          }}
        ></span>
      </div>
      <div className="gird grid-flow-row grid-cols-1 ">
        {assetAllocations.map((e) => (
          <AllocationTile key={e.ticker} item={e} />
        ))}
      </div>
    </section>
  );
}
