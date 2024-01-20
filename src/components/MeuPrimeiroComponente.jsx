import React from 'react'

const MeuPrimeiroComponente = () => {

  const click = () => console.log('teste')

  return (
    <>
      <div>Meu Primeiro Componente</div>
      <button onClick={click }>Aperte</button>
      
    </>
  )
}

export default MeuPrimeiroComponente


