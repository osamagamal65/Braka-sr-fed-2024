"use client";
import { useTranslations } from "next-intl";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";

export default function AssetAllocations() {
  const t = useTranslations("assetAllocation");

  return (
    <section className="flex flex-col bg-white py-36 md:px-8 lg:px-36">
      <div className="mb-20 flex rounded-xl bg-black py-36 md:flex-col md:px-16  lg:flex-row">
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
          <div className="flex items-center justify-center">
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
      <h3 className="text-2xl text-black">{t('productAllocation')}</h3>
      <div className="bg-white"></div>
    </section>
  );
}
