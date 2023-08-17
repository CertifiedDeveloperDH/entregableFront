//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
function Card({nombre, animal,className}) {
  return (
    <div className={className}>
      <h2>Hola {nombre}!</h2>
      <h2>Sabemos que tu animal favorito es:</h2>
      <h2><strong>{animal}</strong></h2>
    </div>
  );
}

export default Card;
