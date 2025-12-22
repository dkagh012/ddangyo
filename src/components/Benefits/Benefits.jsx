import { useEffect } from "react";
import AOS from "aos";
import "./Benefits.scss";
import character02 from "../../assets/images/character_02.png";
import character04 from "../../assets/images/character_04.png";
import doremi_01 from "../../assets/images/doremi_01.png";
import doremi_02 from "../../assets/images/character_02.png";
const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const merchantBenefits = [
    {
      id: 1,
      title: "2% 이하 저렴한 배달 중개 수수료",
      icon: character02,
      delay: 0,
    },
    {
      id: 2,
      title: "주문 당일 입금되는 번개 정산 시스템",
      icon: character02,
      delay: 100,
    },
    {
      id: 3,
      title: "사장님 지원금 최대 30만원",
      icon: character04,
      delay: 200,
    },
    {
      id: 4,
      title: "월 사용료, 광고비, 입점비 모두 무료",
      icon: character04,
      delay: 300,
    },
  ];

  const consumerBenefits = [
    {
      id: 1,
      title: "지역 상품권/페이 사용시 7-18% 할인",
      icon: character04,
      delay: 400,
    },
    {
      id: 2,
      title: "온누리 상품권 사용가능",
      icon: character02,
      delay: 500,
    },
    {
      id: 3,
      title: "첫주문/재주문 할인쿠폰 지급",
      icon: character04,
      delay: 600,
    },
    {
      id: 4,
      title: "땡겨요 포인트 적립",
      icon: character02,
      delay: 700,
    },
  ];

  return (
    <section className="benefits">
      <div className="benefits__container">
        <h2 className="benefits__title" data-aos="fade-up">
          왜 '땡겨요'가 착한배달앱일까요?
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
