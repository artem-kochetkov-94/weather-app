import startDay from "../../../utils/startDay";
import endDay from "../../../utils/endDay";
import kelvinToCelsium from "../../../utils/kelvin-to-celsius";

export const getWeather = state => state.weather;
export const isFetching = state => state.isFetching;
export const getCountDate = state => state.countDate;
export const getWeatherByDate = state => {
  const date = state.date;
  return state.weather.list.filter(item => {
    const itemDate = new Date(item.dt_txt);
    const start = startDay(date);
    const end = endDay(date);
    return start <= itemDate && end > itemDate;
  });
};
export const getTempMap = weatherByDate =>
  weatherByDate.map(item => ({
    date: item.dt_txt,
    temp: kelvinToCelsium(item.main.temp)
  }));
