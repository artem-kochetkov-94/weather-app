import Loading from "../Loading";

const Weather = ({ weather, tempMap, isFetching, cityName }) => {
  if (isFetching) return <Loading />;

  if (!weather) return null;

  return (
    <div className="weather">
      <p>город: {cityName}</p>
      {tempMap &&
        tempMap.map(item => (
          <p key={item.date}>
            {item.date} : {item.temp}
          </p>
        ))}
    </div>
  );
};

export default Weather;
