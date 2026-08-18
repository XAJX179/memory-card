function Card({ id, name, img }) {
  return (
    <div className="card">
      <p>{id}</p>
      <p>{name}</p>
      <p>{img}</p>
    </div>
  );
}

export default Card;
