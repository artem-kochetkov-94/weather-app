export const getCityById = (state, id) => state.byIds[id];
export const getActiveCityWeather = state => state.active.weather;
export const fetchWeatherStatus = state => state.active.isFetching;
export const getWeatherTemp = state => state.active.weather.main.temp;
