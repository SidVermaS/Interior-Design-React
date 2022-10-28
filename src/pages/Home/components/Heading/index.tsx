import React from 'react'
import PropertiesBtn from '../PropertiesBtn';
import styles from "./index.module.scss";

const Heading = () => {
  return (
    <div className={styles.background}>
        <div className={styles.title}>
            We are an award winning interior design agency
        </div>
        <div><PropertiesBtn /></div>
    </div>
  )
}

export default Heading