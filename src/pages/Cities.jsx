import { useEffect, useState } from "react";
import CityList from "../components/CityList";

function Cities() {
  const API_URL = "http://riotkr.mockable.io/weather-crawlers/cities";
  const [cityState, setCityState] = useState([]);

  // hooks
  useEffect(() => {
    console.log("cities component mounted!");
    getCities();
  }, []); // once

  async function getCities() {
    const cities = await fetch(API_URL).then((res) => res.json());
    console.log(cities);

    setCityState(cities);
  }

  return (
    <div>
      <h1 classname = "subject">한국 관광지 100선</h1>
      <p>{"https://korean.visitkorea.or.kr/other/otherService.do?otdid=622bcd99-84fa-11e8-8165-020027310001"}</p>
      <CityList cities={cityState} />
    </div>
  );
}

export default Cities;
