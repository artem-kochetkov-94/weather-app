export default function City({ title, getCityWeather }) {
  return (
    <li className="city" onClick={getCityWeather}>
      {title}
    </li>
  );
}
