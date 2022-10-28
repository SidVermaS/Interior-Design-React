import React from 'react'
import Heart from '../../../../assets/images/heart.png'
import Button from '../../../../components/Button';
import { HouseI } from '../../../../utils/interfaces';
import styles from "./index.module.scss";
const PropertyMobile = ({url, title, cost}: HouseI) => {
  return (
    <div className={styles.background}>
      

      <img className={styles.heart} src={Heart} alt="heart" />
      <img className={styles.photo} src={url} alt={title} />
      <div className={styles.info}>
        <div className={styles.cost}>${cost}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.viewDetailsParent}>
        <Button text="View Details +" handleClick={()=>{}} />
      </div>
    </div>
  )
}

export default PropertyMobile