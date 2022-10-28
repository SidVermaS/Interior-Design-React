import React from 'react'
import Arrow from '../../../../assets/images/arrow.png'
import styles from "./index.module.scss";
const PropertiesBtn = () => {
  return (
    <button className={styles.background}>View all properties
    <img className={styles.arrow} src={Arrow} alt="arrow" />
    </button>
  )
}

export default PropertiesBtn