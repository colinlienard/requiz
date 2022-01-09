import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { QuizData } from '../../../lib/types';
import UserItem from '../../Common/UserItem/UserItem';
import CrossIcon from '../../../public/icons/iconComponents/CrossIcon';
import styles from './Modal.module.scss';
import useDate from '../../../lib/hooks/useDate';
import useQuizTheme from '../../../lib/hooks/useQuizTheme';

type Props = {
  quiz?: QuizData,
  onClose: () => void,
};

const Modal: FC<Props> = ({ quiz, onClose }) => {
  const [visible, setVisible] = useState(false);
  const date = useDate(quiz?.startDate as string);
  const theme = useQuizTheme(quiz?.theme);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  useEffect(() => {
    if (quiz) {
      setVisible(true);
    } else {
      handleClose();
    }
  }, [quiz]);

  return (
    <aside className={`${styles.modal} ${visible && styles.visible}`}>
      <div className={`${styles.header} ${visible && styles.visible}`} style={{ backgroundColor: theme?.color }}>
        <button className={styles.cross} type="button" onClick={handleClose}>
          <CrossIcon />
        </button>
        <span className={styles.theme}>
          <span className={styles.emoji}>{theme?.emoji}</span>
          {theme?.name}
        </span>
        <h3 className={styles.title}>{quiz?.title}</h3>
      </div>
      <div className={styles.main}>
        <div className={styles.userContainer}>
          <p>by</p>
          <UserItem id={quiz?.userId} small />
        </div>
        <p className={styles.description}>{quiz?.description}</p>
        <p className={styles.date}>Starts in <b>{date}</b></p>
        {/* {data?.status === 'waiting' && (
          <>
            <Link href={`/quiz/${id}`}>
              <a className={styles.button}>Join</a>
            </Link>
            <h4 className={styles.title}>Waiting</h4>
          </>
        )}
        {data?.status === 'published' && (
          <button className={styles.button} type="button">Notify me</button>
        )} */}
        <Link href={`/quiz/${quiz?._id}`}>
          <a className={styles.button}>Join</a>
        </Link>
        <h4 className={styles.title}>Waiting</h4>
      </div>
    </aside>
  );
};

Modal.defaultProps = {
  quiz: undefined,
};

export default Modal;
