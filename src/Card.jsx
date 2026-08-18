function Card({ id, name, img }) {
  return (
    <div className="card">
      <img src={img}></img>
      <p>{name}</p>
    </div>
  );
}

export default Card;
