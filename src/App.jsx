import { useState } from "react";
import Card from "./Card";
function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState("")
  const [animal, setAnimal] = useState("")
  const [nombreCard, setNombreCard] = useState("")
  const [animalCard, setAnimalCard] = useState("")
  const [mostrarCard, setMostrarCard] = useState(false)
  const validarNombre = (nombre) => {
    let sinEspacios = nombre.trim()
    console.log(sinEspacios)
    if (nombre.trim() !== nombre || sinEspacios.length < 3){
      return false
    }
    return true
  }
  const validarAnimal = (animal) => {
    let sinEspacios = animal.trim()
    if (sinEspacios.length < 6){
      return false
    }
    return true
  }
  function handleSubmit(event){
    event.preventDefault()
    console.log(nombre)
    if (!validarNombre(nombre) || !validarAnimal(animal)){
      alert("Por favor chequea que la información sea correcta")
    } else{
      setNombreCard(nombre)
      setAnimalCard(animal)
      setMostrarCard(true)
    }
  }
  return (
    <div className="App">
      <h1>Elige un animal</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange = {e => setNombre(e.target.value)}/>
        <input type="text" placeholder="Ingresa tu animal favorito" value= {animal} onChange={e => setAnimal(e.target.value)}/>
        <input type="submit" value="ENVIAR"/>
      </form>
      <Card className={mostrarCard ? "Card" : "Cardh"} nombre={nombreCard} animal={animalCard}/>
    </div>
  );
}

export default App;
