import Country from "../../containers/Country";

export default function Countries({ items }) {
  if (!items) return null;

  return (
    <ul className="countries">
      {items.map(id => (
        <Country key={id} id={id} />
      ))}
    </ul>
  );
}
