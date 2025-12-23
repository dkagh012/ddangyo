import { useEffect, useState } from "react";
import AOS from "aos";
import "./Benefits.scss";
import doremi_01 from "../../assets/images/doremi_01.png";
import doremi_02 from "../../assets/images/character_02.png";
import icon01 from "../../assets/images/1.png";
import icon02 from "../../assets/images/2.png";
import icon03 from "../../assets/images/3.png";
import icon04 from "../../assets/images/4.png";
import icon05 from "../../assets/images/5.png";
import icon06 from "../../assets/images/6.png";
import icon07 from "../../assets/images/7.png";
import icon08 from "../../assets/images/8.png";

const Benefits = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
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

  const merchantBenefits = [
    {
      id: 1,
      title: "2% 이하 저렴한 배달 중개 수수료",
      icon: icon01,
      delay: 0,
    },
    {
      id: 2,
      title: "주문 당일 입금되는 번개 정산 시스템",
      icon: icon02,
      delay: 100,
    },
    {
      id: 3,
      title: "사장님 지원금 최대 30만원",
      icon: icon03,
      delay: 200,
    },
    {
      id: 4,
      title: "월 사용료, 광고비, 입점비 모두 무료",
      icon: icon04,
      delay: 300,
    },
  ];

  const consumerBenefits = [
    {
      id: 1,
      title: "지역 상품권/페이 사용시 7-18% 할인",
      icon: icon05,
      delay: 400,
    },
    {
      id: 2,
      title: "온누리 상품권 사용가능",
      icon: icon06,
      delay: 500,
    },
    {
      id: 3,
      title: "첫주문/재주문 할인쿠폰 지급",
      icon: icon07,
      delay: 600,
    },
    {
      id: 4,
      title: "땡겨요 포인트 적립",
      icon: icon08,
      delay: 700,
    },
  ];

  return (
    <section className="benefits">
      <div className="benefits__container">
        <h2 className="benefits__title" data-aos="fade-up">
          왜 '땡겨요'가{" "}
          <span className="benefits__title-highlight">착한배달앱</span>일까요?
        </h2>
        <img
          className="benefits__character2"
          src={doremi_01}
          alt="땡겨요 캐릭터"
        />
        <div className="benefits__sections-wrapper">
          <div className="benefits__section">
            <h3 className="benefits__section-title" data-aos="fade-up">
              가맹점 혜택
            </h3>
            <div className="benefits__list">
              {merchantBenefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="benefits__item"
                  data-aos="fade-up"
                  data-aos-delay={benefit.delay}
                >
                  <div className="benefits__icon">
                    <img
                      className="benefits__icon-img"
                      alt={benefit.title}
                      src={benefit.icon}
                    />
                  </div>
                  <p className="benefits__text">{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="benefits__section">
            <h3 className="benefits__section-title" data-aos="fade-up">
              소비자 혜택
            </h3>
            <div className="benefits__list">
              {consumerBenefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="benefits__item"
                  data-aos="fade-up"
                  data-aos-delay={benefit.delay}
                >
                  <div className="benefits__icon">
                    <img
                      className="benefits__icon-img"
                      alt={benefit.title}
                      src={benefit.icon}
                    />
                  </div>
                  <p className="benefits__text">{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="benefits__cta" data-aos="fade-up" data-aos-delay="100">
          <a
            className="benefits__cta-button benefits__cta-button--phone"
            href={isMobile ? "tel:01075117151" : undefined}
            onClick={copyPhoneNumber}
          >
            <span className="benefits__phone-label">전화 입점 상담</span>{" "}
            <span className="benefits__phone-number">010-7511-7151</span>
          </a>
        </div>
        <img
          className="benefits__character"
          src={doremi_02}
          alt="땡겨요 캐릭터"
        />
      </div>
    </section>
  );
};

export default Benefits;
