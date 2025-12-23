import "./Footer.scss";
import logo02 from "../../assets/images/logo_02.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo">
            <img className="footer__logo-img" alt="땡겨요 로고" src={logo02} />
          </div>
          <div className="footer__info">
            <p className="footer__text">
              땡겨요 공식협력사 (전 지역 가입 가능)
            </p>
            <p className="footer__text">최은정 팀장</p>
            <p className="footer__text">ddangyo11@gmail.com</p>
          </div>
          <div className="footer__phone-block">
            <p className="footer__phone-label">상담 문의</p>
            <a
              className="footer__text footer__text--phone"
              href="tel:01075117151"
            >
              010-7511-7151
            </a>
            <a
              className="footer__cta-button"
              href="sms:01075117151"
              rel="noreferrer"
            >
              문자 상담 바로하기
            </a>
          </div>
        </div>
        <div className="footer__copyright">
          <p>Copyright © 2025 Ddanggyeo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
