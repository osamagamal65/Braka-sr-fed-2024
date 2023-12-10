import { useTranslations } from "next-intl";
import premiumFeaturesStyles from "./premiumFeatures.module.css";
import { LockClosedIcon, EyeIcon } from "@heroicons/react/24/outline";
export default function PremiumFeatures() {
  const t = useTranslations("upgrade");
  const steps = [
    {
      title: "q1",
      icon: "eye",
      description: "diversifyInvestment",
    },
    {
      title: "q2",
      icon: "lock",
    },
    {
      title: "q3",
      icon: "lock",
    },
  ];
  return (
    <section className={premiumFeaturesStyles.premium}>
      <div className="flex items-center justify-start py-24">
        <div className="px-12"></div>
        <div
          className="flex flex-col items-start justify-center gap-10 rounded-xl p-12 backdrop-blur-xl"
          style={{ maxWidth: "452px", background: "rgba(217, 217, 217, 0.12)" }}
        >
          <svg
            width="45"
            height="44"
            viewBox="0 0 45 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.6213 5.86255L2.8123 15.5899C2.68372 15.7674 2.69696 16.034 2.8425 16.1979L22.2973 38.5709C22.4791 38.7771 22.8448 38.7771 23.0267 38.5709L42.4814 16.1979C42.627 16.034 42.6402 15.7674 42.5116 15.5899L35.7026 5.86255C35.6117 5.7394 35.4604 5.66374 35.3074 5.6651H10.0162C9.82791 5.64712 9.70408 5.7696 9.62164 5.86255H9.6213ZM10.7459 6.63777H21.5529L14.0748 14.9667L10.7459 6.63777ZM23.7719 6.63777H34.5789L31.2504 14.9667L23.7719 6.63777ZM22.6626 6.88103L30.3381 15.3925H15.0027L22.6626 6.88103ZM9.8954 7.15447L13.1938 15.3925H4.13514L9.8954 7.15447ZM35.4298 7.15447L41.1901 15.3925H32.1315L35.4298 7.15447ZM4.27176 16.3651H13.5883L21.522 36.2003L4.27176 16.3651ZM14.6375 16.3651H30.7033L22.6631 36.4434L14.6375 16.3651ZM31.7368 16.3651H41.0534L23.7873 36.2003L31.7368 16.3651Z"
              fill="white"
              stroke="white"
              strokeWidth="0.733333"
            />
          </svg>
          <div>
            <h6 className="mb-6 text-4xl">{t("upgradeToPremium")}</h6>
            <p
              className="text-lg font-light"
              style={{ color: "rgba(255, 255, 255, 0.50)" }}
            >
              {t("supercharge")}
            </p>
          </div>
          <button
            className="text-md flex items-center gap-x-2 rounded-full px-6 py-3 duration-300 hover:scale-110"
            style={{ background: "#303030" }}
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.85911 2.66477L1.76411 7.08631C1.70567 7.16696 1.71168 7.28817 1.77784 7.36266L10.6209 17.5322C10.7036 17.6259 10.8698 17.6259 10.9525 17.5322L19.7955 7.36266C19.8617 7.28817 19.8677 7.16696 19.8093 7.08631L16.7143 2.66477C16.6729 2.60879 16.6042 2.57441 16.5346 2.57503H5.03861C4.95303 2.56685 4.89674 2.62252 4.85926 2.66477H4.85911ZM5.37031 3.01715H10.2826L6.88342 6.80301L5.37031 3.01715ZM11.2912 3.01715H16.2035L14.6905 6.80301L11.2912 3.01715ZM10.787 3.12772L14.2758 6.99656H7.30521L10.787 3.12772ZM4.9837 3.25201L6.48296 6.99658H2.3654L4.9837 3.25201ZM16.5902 3.25201L19.2086 6.99658H15.091L16.5902 3.25201ZM2.4275 7.43865H6.66231L10.2685 16.4546L2.4275 7.43865ZM7.1392 7.43865H14.4418L10.7872 16.5652L7.1392 7.43865ZM14.9116 7.43865H19.1464L11.2982 16.4546L14.9116 7.43865Z"
                fill="black"
                stroke="black"
                strokeWidth="0.4"
              />
            </svg>
            <span className="font-bold text-white">{t("unlock")} </span>
            <span className="text-black ">
              {" "}
              {"  "} {t("YourFin")}
            </span>
          </button>
        </div>
      </div>
      <div className={premiumFeaturesStyles.stepper}>
        <div
          className="steps flex items-center justify-between"
          style={{ height: "100%" }}
        >
          <div className="px-7"></div>
          {steps.map((e, index) => (
            <div
              className="step mx-3 flex flex-col justify-center gap-6"
              key={e.title}
              style={{ maxWidth: "250px", minWidth: "200px", height: "100%" }}
            >
              <div
                className="text-xl "
                style={{
                  paddingTop: "64px",
                  color: index === 0 ? "#fff" : "rgba(255, 255, 255, .5)",
                }}
              >
                {t(e.title).toUpperCase()}
              </div>
              <div
                className="step-icon flex items-center justify-center rounded-full"
                style={{
                  width: "44px",
                  height: "44px",
                  backdropFilter: "blur(24px)",
                  background:
                    index === 0 ? "#fff" : "rgba(255, 255, 255, 0.12)",
                }}
              >
                {e.icon === "eye" ? (
                  <EyeIcon
                    className="text-black"
                    style={{ width: "24px", height: "24px" }}
                  />
                ) : (
                  <LockClosedIcon
                    className="text-white "
                    style={{ width: "24px", height: "24px" }}
                  />
                )}
              </div>
              <p className="text-xl" style={{ height: "96px" }}>
                {e.description ? t(e.description) : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
