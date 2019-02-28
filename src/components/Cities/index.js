import City from "../../containers/City";

export default function Cities({ items }) {
  if (!items) return null;

  return (
    <ul className="cities">
      {items.map(id => (
        <City key={id} id={id} />
      ))}
    </ul>
  );
}
