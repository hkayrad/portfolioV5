//@ts-ignore
export default function Project({ name, img, desc, index, status, to }) {
  return (
    <a
      href={to}
      className="project"
      data-index={index}
      data-status={status}
      target="_blank"
    >
      <div className="wrapper">
        <div className="text">
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
        <div className="img">
          <img src={img} alt="" />
        </div>
      </div>
    </a>
  );
}
