function Titulo(){
  //Codigo JSX

  const nombre = "Nicolas";
  if(nombre){
    return <p>Hola {nombre}</p>
  }
  return "Hola Mundo";
}

export default Titulo;