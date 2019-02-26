import City from "../../containers/City";

export default function Cities({ items }) {
  return (
    <ul className="countries">
      {items && items.map(id => <City key={id} id={id} />)}
    </ul>
  );
}
