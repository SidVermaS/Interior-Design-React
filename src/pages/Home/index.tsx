import React from "react";

import { useWindowSize } from "@react-hook/window-size";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouseAPI } from "../../networks/housesAPI";
import Heading from "./components/Heading";
import styles from "./index.module.scss";
import { HouseI } from "../../utils/interfaces";
import { ResponsiveE } from "../../utils/constants";
import PropertyMobile from "./components/PropertyMobile";
import Property from "./components/Property";

const Home = () => {
  const [width] = useWindowSize();

  const [houses, setHouses] = React.useState<HouseI[]>([]);
  const fetchHome = React.useCallback(async () => {
    setHouses([]);
    let tempHouses: HouseI[] = [];
    if (houses.length !== 6) {
      const { status, data } = await fetchHouseAPI();
      if (status === 200) {
        if (width >= ResponsiveE.Desktop) {
          data.map((dataItem: HouseI, dataIndex: number) => {
            tempHouses = [
              ...tempHouses,
              {
                ...dataItem,
                backgroundClassName:
                dataIndex === 0? styles.desktopZero:
                  dataIndex === 1
                    ? styles.desktopOne
                    : dataIndex === 2
                    ? styles.desktopTwo
                    : dataIndex === 4
                    ? styles.desktopFour
                    : dataIndex === 5
                    ? styles.desktopFive
                    : styles.desktopThree,
              },
            ];
          });
        } else if (width >= ResponsiveE.Tablet) {
          data.map((dataItem: HouseI, dataIndex: number) => {
            tempHouses = [
              ...tempHouses,
              {
                ...dataItem,
                backgroundClassName:
                  dataIndex % 2 === 0
                    ? styles.tabletEvenHeight
                    : `${styles.tabletOddHeight} ${
                        dataIndex !== 1 && styles.tabletOddHeightMarginTop
                      }`,
              },
            ];
          });
        } else {
          tempHouses = [...data];
        }
        setHouses([...tempHouses]);
      }
    }
  }, [houses, width]);
  React.useEffect(() => {
    fetchHome();
  }, [width]);
 
  return (
    <div className={styles.background}>
      <Heading />
      {width <= ResponsiveE.Mobile ? (
        <div className={styles.contentMobile}>
          {houses.map((houseItem: HouseI, houseIndex: number) => (
            <PropertyMobile key={houseIndex} {...houseItem} />
          ))}
        </div>
      ) : (
        <div className={styles.content}>
          {houses.map((houseItem: HouseI, houseIndex: number) => (
            <Property key={houseIndex} {...houseItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
