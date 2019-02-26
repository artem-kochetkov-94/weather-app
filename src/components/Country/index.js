import Cities from "../Cities";

export default function Country({ title, cities }) {
  return (
    <li className="country">
      <span>{title}</span>
      {cities && <Cities items={cities} />}
    </li>
  );
}
