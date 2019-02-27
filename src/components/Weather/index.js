import Loading from "../Loading";

const Weather = ({ weather, temp, isFetching }) => {
  console.log("---weather---", weather);
  console.log("---temp---", temp);
  console.log("---isFetchWeather---", isFetching);

  if (isFetching) return <Loading />;

  if (!weather) return null;

  return (
    <div className="weather">
      <p>город: {weather.name}</p>
      <p>температура по цельсию: {temp ? temp : ""}</p>
    </div>
  );
};

export default Weather;
