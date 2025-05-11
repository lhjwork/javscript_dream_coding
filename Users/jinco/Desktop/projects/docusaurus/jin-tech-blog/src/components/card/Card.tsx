import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  image?: string;
  subTitle?: string;
  onClick: () => void;
}

export default function Card({ title, image, subTitle, onClick }: CardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <h2>{title}</h2>
      {image && <img src={image} alt={title} className={styles.cardImage} />}
      {subTitle && <p className={styles.cardSubTitle}>{subTitle}</p>}
    </div>
  );
}
