import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const companyUrls = [
    "aboutUs",
    "support",
    "blog",
    "press",
    "glossary",
    "faw",
    "careers",
    "marketHours",
    "mediaKit",
  ];
  const products = ["features", "stocks", "news", "learn"];
  const legalAndRegulatory = [
    "termsAndConditions",
    "privacyPolicy",
    "disclosures",
  ];
  const socials = [
    {
      logo: "/images/facebook-icon.svg",
      alt: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100063501641493",
    },
    {
      logo: "/images/instagram-icon.svg",
      alt: "Instagram",
      link: "https://www.instagram.com/getbaraka/",
    },
    {
      logo: "/images/linkedin-icon.svg",
      alt: "Linkedin",
      link: "https://www.linkedin.com/company/getbaraka",
    },
    {
      logo: "/images/twitter-icon.svg",
      alt: "x.com (twitter)",
      link: "https://twitter.com/getbaraka",
    },
    {
      logo: "/images/whatsapp-icon.svg",
      alt: "Whatsapp",
      link: "https://web.whatsapp.com/",
    },
  ];
  return (
    <footer className="flex justify-center py-32 text-white md:px-11 lg:px-32">
      <div
        className="mx-auto flex flex-col gap-20 "
        style={{
          minHeight: "965px",
        }}
      >
        <nav className="flex flex-wrap justify-between  md:gap-4 lg:gap-28">
          <div className="flex flex-col">
            <a href="#" className="mb-8">
              <Image
                src="/images/baraka-logo-text.svg"
                alt="Baraka logo"
                style={{
                  height: "40px",
                  width: "110px",
                }}
                width="1100"
                height="40"
              />
            </a>
            <ul className="mb-3 flex items-center gap-2">
              {socials.map((soc) => (
                <li key={soc.alt}>
                  <a href={soc.link} className="flex items-center">
                    <Image
                      src={soc.logo}
                      alt={soc.alt}
                      width="40"
                      height="40"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center divide-x">
              <a
                href="/en"
                className="px-2"
                style={{ fontSize: "15px", fontWeight: 400 }}
              >
                {t("english")}
              </a>
              <a
                href="/ar"
                className="px-2"
                style={{ fontSize: "15px", fontWeight: 400 }}
              >
                {t("arabic")}
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h6 className="mb-4 text-xl">{t("company")}</h6>
            <ul className="flex flex-col gap-4">
              {companyUrls.map((e) => (
                <li className="" key={e}>
                  <a style={{ color: "#808080", fontSize: "15px" }} href={e}>
                    {t(e)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="mb-4 text-xl">{t("products")}</h6>
            <ul className="flex flex-col gap-4">
              {products.map((e) => (
                <li className="" key={e}>
                  <a style={{ color: "#808080", fontSize: "15px" }} href={e}>
                    {t(e)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="mb-4 text-xl">{t("legalAndRegulatory")}</h6>
            <ul className="flex flex-col gap-4">
              {legalAndRegulatory.map((e) => (
                <li className="" key={e}>
                  <a style={{ color: "#808080", fontSize: "15px" }} href={e}>
                    {t(e)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div
          style={{
            color: "#575757",
            fontSize: "13px",
            fontWeight: 400,
            maxWidth: "1190px",
            whiteSpace: "pre-wrap",
          }}
        >
          {t("rightReservedStatement")}
        </div>
      </div>
    </footer>
  );
}
