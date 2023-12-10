import { useTranslations } from "next-intl";
import Image from "next/image";
import promotionStyle from "./promotion.module.css";

const certificationsList = [
  { src: "/images/upto500-icon.svg", alt: "upToInsurance" },
  { src: "/images/regulated-icon.svg", alt: "regulatedBy" },
  { src: "/images/we-process-icon.svg", alt: "weProcessYour" },
  { src: "/images/s-and-p500-icon.svg", alt: "hasReturned" },
];
export default function Promotion() {
  const t = useTranslations("promotion");
  return (
    <section className={promotionStyle.promotion}>
      <div
        className="flex flex-col items-center justify-center gap-4"
        style={{
          marginTop: "170px",
          maxWidth: "550px",
        }}
      >
        <h3 className="text-center text-5xl">{t("getTheMostFrom")}</h3>
        <button
          className="text-md flex items-center justify-center gap-x-2 rounded-full px-6 py-3 duration-300 hover:scale-110"
          style={{ background: "#303030", width: "370px" }}
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
              fill="white"
              stroke="white"
              strokeWidth="0.4"
            />
          </svg>

          <span className="text-white ">{t("unlockFull")}</span>
        </button>
      </div>
      <div className="flex items-center gap-10 pt-24">
        {certificationsList.map((cert, index) => (
          <div
            key={index}
            className="flex items-center"
            style={{ width: "80px", height: "100px" }}
          >
            <Image
              width="80"
              height="80"
              src={cert.src}
              alt={cert.alt}
             
            />
          </div>
        ))}
      </div>
    </section>
  );
}
