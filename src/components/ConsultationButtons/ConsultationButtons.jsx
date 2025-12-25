import { useEffect, useState } from "react";
import "./ConsultationButtons.scss";

const ConsultationButtons = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      text: "신규 입점 신청",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScP7IxldVKcO9xbroteeH408SzJeWj34iktqHhFNRG-524nRw/viewform?pli=1",
      showMobile: false,
    },
    {
      id: 2,
      text: "카카오톡 채팅 상담",
      href: "https://open.kakao.com/o/s8rl9X7h",
      showMobile: false,
    },
    {
      id: 3,
      text: "전화 문의 010-7511-7151",
      href: isMobile ? "tel:01075117151" : undefined,
      onClick: isMobile ? undefined : copyPhoneNumber,
      showMobile: false,
      label: "전화 문의",
      number: "010-7511-7151",
    },
    {
      id: 4,
      text: "문자 문의 010-7511-7151",
      href: isMobile ? "sms:01075117151" : undefined,
      showMobile: true,
      label: "문자 문의",
      number: "010-7511-7151",
    },
  ];

  // 필터링: 데스크탑에서는 showMobile이 false인 것만, 모바일에서는 모든 버튼
  const visibleButtons = buttons.filter(
    (button) => !button.showMobile || isMobile
  );

  return (
    <section className="consultation-buttons" data-aos="fade-up">
      <div className="consultation-buttons__container">
        {visibleButtons.map((button) => {
          const isPhoneButton = button.id === 3 || button.id === 4;
          const isMobilePhoneButton = isMobile && isPhoneButton;

          return (
            <div
              key={button.id}
              className={`consultation-buttons__item ${
                isMobilePhoneButton
                  ? "consultation-buttons__item--mobile-phone"
                  : button.id === 3 && !isMobile
                  ? "consultation-buttons__item--full-width"
                  : ""
              }`}
            >
              {button.href ? (
                <a
                  className={`consultation-buttons__button consultation-buttons__button--link ${
                    isPhoneButton ? "consultation-buttons__button--phone" : ""
                  }`}
                  href={button.href}
                  target={
                    button.href?.startsWith("http") ? "_blank" : undefined
                  }
                  rel="noreferrer"
                >
                  {isPhoneButton && button.label ? (
                    <>
                      <span className="consultation-buttons__phone-label">
                        {button.label}
                      </span>{" "}
                      <span className="consultation-buttons__phone-number">
                        {button.number}
                      </span>
                    </>
                  ) : (
                    <span>{button.text}</span>
                  )}
                </a>
              ) : (
                <button
                  className={`consultation-buttons__button ${
                    isPhoneButton ? "consultation-buttons__button--phone" : ""
                  }`}
                  onClick={button.onClick}
                >
                  {isPhoneButton && button.label ? (
                    <>
                      <span className="consultation-buttons__phone-label">
                        {button.label}
                      </span>{" "}
                      <span className="consultation-buttons__phone-number">
                        {button.number}
                      </span>
                    </>
                  ) : (
                    <span>{button.text}</span>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ConsultationButtons;
