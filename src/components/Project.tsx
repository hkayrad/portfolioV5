//@ts-ignore
export default function Project({ name, img, desc, index, status }) {
  return (
    <div className="project" data-index={index} data-status={status}>
      <div className="wrapper">
        <div className="text">
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}
