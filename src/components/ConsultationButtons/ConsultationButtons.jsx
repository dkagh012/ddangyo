import { useEffect, useState } from "react";
import AOS from "aos";
import "./ConsultationButtons.scss";

const ConsultationButtons = ({ onOpenModal }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const updateDevice = () => setIsMobile(window.innerWidth <= 768);
    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  const copyPhoneNumber = () => {
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
  };

  const buttons = [
    {
      id: 1,
      text: "신규 입점 상담",
      onClick: onOpenModal,
    },
    {
      id: 2,
      text: "카카오톡 채팅 상담",
      href: "#",
    },
    {
      id: 3,
      text: "전화 문의 010-7511-7151",
      href: isMobile ? "tel:01075117151" : undefined,
      onClick: isMobile ? undefined : copyPhoneNumber,
    },
  ];

  return (
    <section className="consultation-buttons">
      <div className="consultation-buttons__container">
        {buttons.map((button, index) => (
          <div
            key={button.id}
            className={`consultation-buttons__item ${
              button.id === 3 ? "consultation-buttons__item--full-width" : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {button.href ? (
              <a
                className={`consultation-buttons__button consultation-buttons__button--link ${
                  button.id === 3 ? "consultation-buttons__button--phone" : ""
                }`}
                href={button.href}
                target={button.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {button.id === 3 ? (
                  <>
                    <span className="consultation-buttons__phone-label">
                      전화 문의
                    </span>{" "}
                    <span className="consultation-buttons__phone-number">
                      010-7511-7151
                    </span>
                  </>
                ) : (
                  <span>{button.text}</span>
                )}
              </a>
            ) : (
              <button
                className={`consultation-buttons__button ${
                  button.id === 3 ? "consultation-buttons__button--phone" : ""
                }`}
                onClick={button.onClick}
              >
                {button.id === 3 ? (
                  <>
                    <span className="consultation-buttons__phone-label">
                      전화 문의
                    </span>{" "}
                    <span className="consultation-buttons__phone-number">
                      010-7511-7151
                    </span>
                  </>
                ) : (
                  <span>{button.text}</span>
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultationButtons;
