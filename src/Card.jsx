function Card({ id, name, img, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img}></img>
      <p>{name}</p>
    </div>
  );
}

export default Card;
