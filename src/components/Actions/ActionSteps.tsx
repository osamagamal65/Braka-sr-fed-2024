import { useTranslations } from "next-intl";

export default function ActionSteps() {
  const t = useTranslations("actionSteps");
  const steps = [
    {
      title: "emergencyFunds",
      description: "prioritizeBuilding",
      icon: "star",
    },

    {
      title: "diversifiedPortfolio",
      description: "investInDiversified",
      icon: "bulb",
    },
    {
      title: "regularReview",
      description: "periodicallyReview",
      icon: "star",
    },
    {
      title: "collegeSavingPlans",
      description: "establish529",
      icon: "star",
    },
    {
      title: "retirementAccounts",
      description: "maximizeContributions",
      icon: "people",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center p-36">
      <h3 className="mb-10 text-5xl">{t("actionSteps")}</h3>
      <div className="grid grid-cols-2 gap-14  justify-between">
        {steps.map((step) => (
          <div key={step.title} className="flex items-start">
            <span style={{ height: "44px", width: "44px" }}>
              {step.icon === "people" ? (
               <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2.72396 36.6667V34.8333C2.72396 31.4297 4.07604 28.1655 6.48275 25.7588C8.88947 23.3521 12.1537 22 15.5573 22C18.9609 22 22.2251 23.3521 24.6318 25.7588C27.0385 28.1655 28.3906 31.4297 28.3906 34.8333V36.6667" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
               <path d="M24.724 25.6667C24.724 23.2355 25.6897 20.9039 27.4088 19.1849C29.1279 17.4658 31.4595 16.5 33.8906 16.5C35.0944 16.5 36.2864 16.7371 37.3986 17.1978C38.5107 17.6584 39.5212 18.3337 40.3724 19.1849C41.2236 20.0361 41.8989 21.0466 42.3595 22.1587C42.8202 23.2709 43.0573 24.4629 43.0573 25.6667V26.5833" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
               <path d="M15.5573 22C17.5022 22 19.3675 21.2274 20.7427 19.8521C22.118 18.4769 22.8906 16.6116 22.8906 14.6667C22.8906 12.7217 22.118 10.8565 20.7427 9.48122C19.3675 8.10595 17.5022 7.33333 15.5573 7.33333C13.6124 7.33333 11.7471 8.10595 10.3718 9.48122C8.99657 10.8565 8.22396 12.7217 8.22396 14.6667C8.22396 16.6116 8.99657 18.4769 10.3718 19.8521C11.7471 21.2274 13.6124 22 15.5573 22ZM33.8906 16.5C35.3493 16.5 36.7483 15.9205 37.7797 14.8891C38.8112 13.8576 39.3906 12.4587 39.3906 11C39.3906 9.54131 38.8112 8.14236 37.7797 7.11091C36.7483 6.07946 35.3493 5.5 33.8906 5.5C32.4319 5.5 31.033 6.07946 30.0015 7.11091C28.9701 8.14236 28.3906 9.54131 28.3906 11C28.3906 12.4587 28.9701 13.8576 30.0015 14.8891C31.033 15.9205 32.4319 16.5 33.8906 16.5Z" stroke="white" strokeWidth="1.375" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
               
              ) : step.icon === "bulb" ? (
                <svg
                  width="45"
                  height="44"
                  viewBox="0 0 45 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3907 33H28.3907M19.224 38.5H26.5573M17.3907 27.5C17.3925 23.8333 16.4758 22.9167 14.6407 21.0833C12.8073 19.25 11.9347 17.3928 11.8907 14.6667C11.8045 9.075 15.5573 5.5 22.8907 5.5C30.2258 5.5 33.9805 9.075 33.8907 14.6667C33.8485 17.3928 32.974 19.25 31.1407 21.0833C29.3092 22.9167 28.3925 23.8333 28.3907 27.5"
                    stroke="white"
                    strokeWidth="1.375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="45"
                  height="44"
                  viewBox="0 0 45 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.8906 5.5L27.9843 16.3661L39.3906 18.107L31.1315 26.5626L33.0781 38.5L22.8906 32.8565L12.685 38.5L14.6315 26.5626L6.39062 18.107L17.7969 16.3661L22.8906 5.5Z"
                    stroke="white"
                    strokeWidth="1.375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span className="px-2"></span>
            <div className="flex flex-col">
              <h6
                style={{
                  fontSize: "34px",
                  fontWeight: 500,
                  lineHeight: "38px",
                  marginBottom: "12px",
                }}
              >
                {t(step.title)}
              </h6>
              <p style={{
                maxWidth: '490px',
                fontSize: '20px'
              }}>{t(step.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
