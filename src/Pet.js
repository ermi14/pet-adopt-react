const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
    </div>
  );
};

export default Pet;
