import { useEffect, useState } from "react";
import AOS from "aos";
import "./NationwideService.scss";
import map from "../../assets/images/map_pin.gif";
const NationwideService = () => {
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

  return (
    <section className="nationwide-service">
      <div className="nationwide-service__container">
        <h2 className="nationwide-service__title" data-aos="fade-up">
          <span className="nationwide-service__title-highlight">땡겨요</span>
          <span className="nationwide-service__title-normal">
            를 전국에서 만나요!
          </span>
        </h2>
        <p
          className="nationwide-service__subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          이제는 언제 어디서든, 맛있는 음식을 땡겨요로 주문하세요
        </p>
        <div
          className="nationwide-service__map"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            className="nationwide-service__map-img"
            alt="전국 서비스 지도 이미지"
            src={map}
          />
        </div>
        <div
          className="nationwide-service__cta"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            className="nationwide-service__cta-button nationwide-service__cta-button--phone"
            href={isMobile ? "tel:01075117151" : undefined}
            onClick={copyPhoneNumber}
          >
            <span className="nationwide-service__phone-label">전화 상담</span>{" "}
            <span className="nationwide-service__phone-number">
              010-7511-7151
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NationwideService;
