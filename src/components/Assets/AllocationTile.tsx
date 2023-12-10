import { useTranslations } from "next-intl";
import { useState } from "react";

export default function AllocationTile({ item }) {
  const t = useTranslations("assetAllocation");
  const [seeDetails, setSeeDetails] = useState(false);
  const toggleSeeDetails = () => setSeeDetails(value => !value);

  return (
    <div className="flex flex-col rounded-xl bg-white p-6 mb-3">
      <div className="flex justify-between">
        <div
          style={{
            flex: "40%",
          }}
        >
          <h6 className=" text-xl font-bold text-black">{item.title}</h6>
        </div>
        <div
          style={{
            flex: "20%",
          }}
        >
          <p
            className="text-base"
            style={{
              color: "rgba(0, 0, 0, 0.50)",
              fontWeight: 400,
            }}
          >
            {item.ticker}
          </p>
        </div>
        <div
          className="flex items-center gap-2"
          style={{
            flex: "20%",
          }}
        >
          <p className="text-black">{item.allocation}%</p>
          <svg
            width="45"
            height="12"
            viewBox="0 0 45 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="45" height="12" fill="#6EDFB9" />
          </svg>
        </div>
        <div
          className="flex justify-end"
          style={{
            flex: "20%",
          }}
        >
          <button className="flex items-center gap-2 text-black" onClick={toggleSeeDetails}>
            {t("seeDetails")}
            {seeDetails ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.2666 10.3666L7.99993 5.6333L12.7333 10.3666" stroke="black" stroke-linejoin="round"/>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.7333 5.6333L7.99993 10.3666L3.2666 5.6333"
                  stroke="black"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`${seeDetails ? 'max-h-80 px-4 py-2 m-4 rounded-lg' : 'max-h-0 p-0 m-0 rounded-none'}  transition-all duration-500 ease `}
        style={{
          background: "#F9F9FA",
        }}
      >
       {
        seeDetails ?  <p
        style={{
          fontSize: "14px",
          lineHeight: "18px",
          color: "rgba(0, 0, 0, .5)",
        }}
      >
        {item.details}
      </p> : <></>
       }
      </div>
    </div>
  );
}
