import Image from 'next/image';
import styles from './introduction.module.css';

const Introduction: React.FC = () => {
  return (
    <div className={styles.introductionContainer}>
      <div className={styles.aboutMe}>
        <h1>Привет!</h1>
        <p>
          Сегодня любое видео должно соответствовать высоким стандартам
          качества. Поэтому я работаю только с профессиональным
          кинооборудованием, чтобы обеспечить вас качественным контентом!Готов
          реализовывать любые идеи. Полная отдача на любом этапе создания
          видео.Вы можете обращаться ко мне с самыми смелыми идеями, и я смогу
          реализовать их.Более 6-ти лет я занимаюсь видеосъемкой и монтажем.
          Создаю видеоролики широкого спектра направленностей.Меня зовут Антон
          Просвирин﻿
        </p>
      </div>
      <div className={styles.photo1}>
        <Image
          width={200}
          height={200}
          src="https://thumb.tildacdn.com/tild3766-6537-4235-a332-623138383438/-/cover/860x575/center/center/-/format/webp/DSC_8322.jpeg"
          alt="ph1"
          unoptimized
        />
      </div>
    </div>
  );
};

export default Introduction;
