import { useEffect } from "react";
import AOS from "aos";
import "./ConsultationButtons.scss";

const ConsultationButtons = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const buttons = [
    {
      id: 1,
      text: "신규 입점 상담",
    },
    {
      id: 2,
      text: "카카오톡 채팅 상담",
    },
    {
      id: 3,
      text: "전화 상담 010-7511-7151",
    },
    {
      id: 4,
      text: "문자 상담 010-7511-7151",
    },
  ];

  return (
    <section className="consultation-buttons">
      <div className="consultation-buttons__container">
        {buttons.map((button, index) => (
          <button
            key={button.id}
            className="consultation-buttons__button"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <span>{button.text}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ConsultationButtons;
