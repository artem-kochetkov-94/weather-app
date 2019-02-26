import Country from "../../containers/Country";

export default function Countries({ items }) {
  return (
    <ul className="countries">
      {items && items.map(id => <Country key={id} id={id} />)}
    </ul>
  );
}
