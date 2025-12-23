import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MainSwiper.scss";
import logo01 from "../../assets/images/logo_01.png";
import device01 from "../../assets/images/device_03_con2.png";
import device02 from "../../assets/images/device_03_con3.png";
import device03 from "../../assets/images/device_04_con.png";
import device04 from "../../assets/images/device_05_con1.png";
import device05 from "../../assets/images/device_06_con1.png";

const MainSwiper = ({ onOpenModal }) => {
  const [isMobile, setIsMobile] = useState(false);

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
    <section className="main-swiper">
      <div className="main-swiper__header">
        <div className="main-swiper__header-left">
          <h1 className="main-swiper__header-logo">
            <img src={logo01} alt="땡겨요 로고" />
          </h1>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 1000000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        loop={true}
        className="main-swiper__container"
      >
        <SwiperSlide>
          <div className="main-swiper__slide main-swiper__slide-1">
            <div className="main-swiper__content">
              <div className="main-swiper__device-container-wrapper">
                <div className="main-swiper__device-container main-swiper__device-container--up">
                  <img src={device01} alt="디바이스 이미지" />
                  <img src={device02} alt="디바이스 이미지" />
                  <img src={device03} alt="디바이스 이미지" />
                  <img src={device04} alt="디바이스 이미지" />
                  <img src={device05} alt="디바이스 이미지" />
                  <img src={device01} alt="디바이스 이미지" />
                  <img src={device02} alt="디바이스 이미지" />
                  <img src={device03} alt="디바이스 이미지" />
                  <img src={device04} alt="디바이스 이미지" />
                  <img src={device05} alt="디바이스 이미지" />
                </div>
                <div className="main-swiper__device-container main-swiper__device-container--down">
                  <img src={device01} alt="디바이스 이미지" />
                  <img src={device02} alt="디바이스 이미지" />
                  <img src={device03} alt="디바이스 이미지" />
                  <img src={device04} alt="디바이스 이미지" />
                  <img src={device05} alt="디바이스 이미지" />
                  <img src={device01} alt="디바이스 이미지" />
                  <img src={device02} alt="디바이스 이미지" />
                  <img src={device03} alt="디바이스 이미지" />
                  <img src={device04} alt="디바이스 이미지" />
                  <img src={device05} alt="디바이스 이미지" />
                </div>
              </div>
              <div className="main-swiper__content-text">
                <h1 className="main-swiper__title">
                  <span className="main-swiper__title-highlight">
                    너도살고 나도사는
                  </span>{" "}
                  <span className="main-swiper__title-strong">
                    우리동네 배달앱
                  </span>
                </h1>
                <p className="main-swiper__subtitle">
                  주문 건당 수수료 2%로 시작하는 착한 배달 서비스
                </p>
                <div className="main-swiper__cta-row">
                  <button className="main-swiper__button" onClick={onOpenModal}>
                    신규 입점 상담
                  </button>
                  <a
                    className="main-swiper__phone"
                    href={isMobile ? "tel:01075117151" : undefined}
                    onClick={copyPhoneNumber}
                  >
                    <span className="main-swiper__phone-label">상담 전화</span>
                    <span className="main-swiper__phone-number">
                      010-7511-7151
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainSwiper;
