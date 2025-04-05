import React from 'react';
import styles from './date.module.scss';
function date({ date }) {
  return <div className={styles['date']}>{date}</div>;
}

export default date;
