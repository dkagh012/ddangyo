import { useEffect, useState } from "react";
import AOS from "aos";
import "./ApplicationProcess.scss";
import character01 from "../../assets/images/ic_05_market.png";
import character02 from "../../assets/images/ic_02_custom.png";
import character03 from "../../assets/images/ic_01_review.png";
import character04 from "../../assets/images/device_03_con3.png";
// import character05 from "../../assets/images/character_04.png";

const ApplicationProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const copyPhoneNumber = (e) => {
    if (!isMobile) {
      e.preventDefault();
      const phoneNumber = "010-7511-7151";
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          alert(`전화번호가 복사되었습니다: ${phoneNumber}`);
        })
        .catch((err) => {
          console.error("복사 실패:", err);
          // 폴백: 텍스트 영역을 만들어서 복사
          const textArea = document.createElement("textarea");
          textArea.value = phoneNumber;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
          alert(`전화번호가 복사되었습니다: ${phoneNumber}`);
        });
    }
  };

  const steps = [
    {
      id: 1,
      title: "입점신청",
      description: "휴대폰 010-7511-7151로 빠르게 문의하세요.",
      icon: character01,
    },
    {
      id: 2,
      title: "가게방문/유선상담",
      description: "등록 및 상담에 대한 추가 비용을 받지 않습니다.",
      icon: character02,
    },
    {
      id: 3,
      title: "우리가게 맞춤 등록 진행",
      description: "",
      icon: character03,
    },
    {
      id: 4,
      title: "광고시작",
      description: "입점 지원금 지급",
      icon: character04,
    },
  ];

  return (
    <section className="application-process">
      <div className="application-process__container">
        <h2 className="application-process__title" data-aos="fade-up">
          <p>땡겨요</p> 신청절차
        </h2>
        <div className="application-process__grid">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`application-process__item ${
                activeIndex === index ? "active" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="application-process__step-label">
                STEP {step.id}
              </div>
              <div className="application-process__icon">
                <img
                  className="application-process__icon-img"
                  alt={step.title}
                  src={step.icon}
                />
              </div>
              <div className="application-process__step-content">
                <h3 className="application-process__step-title">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="application-process__step-description">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="application-process__cta" data-aos="fade-up">
          <a
            className="application-process__cta-button"
            href={isMobile ? "tel:01075117151" : undefined}
            onClick={copyPhoneNumber}
          >
            <span>전화 상담</span> 010-7511-7151
          </a>
          {/* <img src={character05} alt="땡겨요 캐릭터" /> */}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
