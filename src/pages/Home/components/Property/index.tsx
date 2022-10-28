import React from 'react'
import Heart from '../../../../assets/images/heart.png'
import Button from '../../../../components/Button';
import { HouseI } from '../../../../utils/interfaces';
import styles from "./index.module.scss";
const Property = ({backgroundClassName,url, title, cost}: HouseI) => {
  return (
    <div className={styles.background}>
      

      <img className={styles.heart} src={Heart} alt="heart" />
      <img className={`${styles.photo} ${backgroundClassName}`} src={url} alt={title} />
      <div className={styles.info}>
        <div className={styles.cost}>${cost}</div>
        <div className={styles.title}>{title}</div>
      </div>
    
    </div>
  )
}

export default Property