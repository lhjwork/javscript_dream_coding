import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import styles from "./homePage.module.css";
import Card from "../card/Card";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const FeatureList = [
  {
    title: "경력",
    Svg: require("@site/static/img/my_career_img.png").default,
    description: "다양한 회사에서의 개발 경험",
    tab: "career",
  },
  {
    title: "개발자로서의 강점",
    Svg: require("@site/static/img/my_strengths.png").default,
    description: "효율성과 소통 능력",
    tab: "strengths",
  },
  {
    title: "성장",
    Svg: require("@site/static/img/my_grow_up.png").default,
    description: "개인적인 성장내용",
    tab: "growth",
  },
];

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "안녕하세요, 의미 있는 코드를 지향하는 개발자 이한진입니다.";
  const currentIndexRef = useRef(0);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        const currentIndex = currentIndexRef.current;

        if (currentIndex < fullText.length) {
          setTypedText((prev) => prev + fullText.charAt(currentIndex));
          currentIndexRef.current += 1;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setTypedText("");
            currentIndexRef.current = 0;
            startTyping();
          }, 2000);
        }
      }, 100);
    };

    startTyping();
    return () => clearInterval(typingInterval);
  }, []);

  const [modalContent, setModalContent] = useState<string | null>(null);

  const openModal = (content: string) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <section className={clsx(styles.introSection)}>
      <div className={clsx("container", styles.container)}>
        <h1 className={styles.title}>{typedText}</h1>
        <p className={styles.subtitle}>
          저는 <strong>프런트엔드 개발자</strong>로서 사용자 경험을 개선하고, 효율적인 웹 애플리케이션을 만드는 데
          열정을 가지고 있습니다.
        </p>
        <div className={styles.cardContainer}>
          {FeatureList.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              image={feature.Svg}
              subTitle={feature.description}
              onClick={() => openModal(feature.tab)}
            />
          ))}
        </div>

        {modalContent && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>
                &times;
              </button>
              {modalContent === "career" && (
                <ul>
                  <li>뉴욕: Mavi Company (2018.05 ~ 2018.06)</li>
                  <li>부산아이티학원: 빅데이터 전문반 졸업 (2021.04 ~ 2021.10)</li>
                  <li>하이데브: BackEnd 및 FrontEnd 개발 (2021.10 ~ 2022.12)</li>
                  <li>이지앤엠씨: 기획 및 BackEnd & FrontEnd 개발 (2023.01 ~ 2023.07)</li>
                  <li>씨맨스클럽: FrontEnd 개발 (2024.01 ~ 2024.04)</li>
                  <li>씨케이브릿지: FrontEnd 개발 (2024.07 ~ 재직 중)</li>
                </ul>
              )}
              {modalContent === "certificates" && (
                <ul>
                  <li>Toeic Speaking (Level 6) - 기본 의사소통 가능</li>
                  <li>운전면허 1급</li>
                  <li>MOS Master (2015.07.26)</li>
                  <li>AutoCAD 1급 (2016.07.21)</li>
                  <li>6시그마 Green Belt (2017.04.16)</li>
                </ul>
              )}
              {modalContent === "strengths" && (
                <ul>
                  <li>성장하는 개발자: 새로운 기술을 배우고 적용하는 데 열정이 있습니다.</li>
                  <li>원활한 소통: 팀원들과 협력하며 문제를 해결하는 능력을 갖추고 있습니다.</li>
                  <li>핵심을 생각하는 개발자: 사용자 경험과 효율성을 고려한 개발을 지향합니다.</li>
                </ul>
              )}
              {modalContent === "experience" && <p>Web3를 이용한 이더리움 기반 토큰 거래 시스템 개발 경험</p>}
            </div>
          </div>
        )}

        <div className={styles.contact}>
          <h2>Contact</h2>
          <ul className={styles.contactList}>
            <li>
              <FaGithub />
              <a href="https://github.com/lhjwork" target="_blank" rel="noopener noreferrer">
                GitHub: lhjwork
              </a>
            </li>
            <li>
              <FaLinkedin />
              <a href="https://linkedin.com/in/hanjinlee" target="_blank" rel="noopener noreferrer">
                LinkedIn: hanjinlee
              </a>
            </li>
            <li>
              <FaEnvelope />
              <a href="mailto:jin.come.up.business@gmail.com">Email: jin.come.up.business@gmail.com</a>
            </li>
            <li>
              <FaPhone />
              <span>Phone: +82-010-9657-1355</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
