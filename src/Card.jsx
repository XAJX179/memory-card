function Card({ id, name, img }) {
  return (
    <div className="card" id={id}>
      <img src={img} alt={name}></img>
      <p>{name}</p>
    </div>
  );
}

export default Card;
