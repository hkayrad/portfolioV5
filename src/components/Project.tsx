// @ts-ignore
export default function Project({ name, img, desc, to }) {
  return (
    <div className="project">
      <h1>{name}</h1>
      <img src={img} alt="" />
      <p>{desc}</p>
    </div>
  );
}
