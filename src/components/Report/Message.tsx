import { useTranslations } from "next-intl";

export default function ReportMessage() {
  const t = useTranslations("forecast");

  return (
    <div
      className="flex items-start gap-4"
      style={{
        position: "absolute",
        background: "#C5F5DA",
        right: "32px",
        top: "32px",
        padding: "12px 24px",
        height: "96px",
        borderRadius: "10px",
        width: "329px",
        color: "#000",
      }}
    >
      <span style={{}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.472 19.9995H4.1C3.94087 19.9995 3.78826 19.9363 3.67574 19.8238C3.56321 19.7113 3.5 19.5586 3.5 19.3995V9.59952C3.5 9.44039 3.56321 9.28778 3.67574 9.17525C3.78826 9.06273 3.94087 8.99952 4.1 8.99952H6.868C7.21337 8.99952 7.55286 8.91009 7.8534 8.73993C8.15395 8.56976 8.40531 8.32467 8.583 8.02852L11.293 3.51152C11.4974 3.17037 11.8194 2.91565 12.1984 2.79527C12.5774 2.67489 12.9874 2.69714 13.3512 2.85783C13.7149 3.01853 14.0075 3.3066 14.1737 3.66786C14.34 4.02912 14.3685 4.43868 14.254 4.81952L13.232 8.22752C13.2052 8.31703 13.1997 8.41155 13.2159 8.50357C13.2321 8.59558 13.2696 8.68254 13.3253 8.75752C13.3811 8.8325 13.4536 8.89342 13.537 8.93543C13.6205 8.97745 13.7126 8.99939 13.806 8.99952H18.381C18.6885 8.99946 18.992 9.07032 19.2677 9.2066C19.5434 9.34287 19.7839 9.5409 19.9706 9.78527C20.1573 10.0296 20.2852 10.3138 20.3442 10.6156C20.4033 10.9174 20.3919 11.2288 20.311 11.5255L18.401 18.5255C18.2857 18.9486 18.0345 19.322 17.6861 19.5884C17.3378 19.8547 16.9105 19.9992 16.472 19.9995Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7 20V9"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      {/* On Track */}
      <div className="flex flex-col gap-2">
        <h6 className="text-base font-bold">{t("onTrack")}</h6>
        <p className="text-sm font-light">{t("greatYouWillMost")}</p>
      </div>
    </div>
  );
}
