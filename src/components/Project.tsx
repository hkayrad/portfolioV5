// @ts-ignore
export default function Project({ name, img, desc, index, status }) {
  return (
    <div className="project" data-index={index} data-status={status}>
      <h1>{name}</h1>
      <img src={img} alt="" />
      <p>{desc}</p>
    </div>
  );
}
