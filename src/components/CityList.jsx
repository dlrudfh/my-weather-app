function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  return (
    <div>
      <h1>한국 관광지 추천</h1>
      <a href="https://korean.visitkorea.or.kr/other/otherService.do?otdid=622bcd99-84fa-11e8-8165-020027310001">바로가기</a>
      <h2>관광지 목록</h2>
      <ul>
        {cities.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
