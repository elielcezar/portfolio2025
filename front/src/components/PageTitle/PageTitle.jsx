import React from 'react'
import styles from './PageTitle.module.css';

export default function PageTitle(props) {
  return (
    <h2 className={styles.pagetitle}>{props.title}</h2>
  )
}
