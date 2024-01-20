import React, { useState } from 'react'

const MeuSegundoComponente = () => {
    const[numero, setNumero] = useState(0)
    const adcionar = () => setNumero(numero + 1)
    const diminuir = () => setNumero(numero > 0 ? numero - 1 : 0)
    
  return (
    <>
        <button onClick={diminuir}>-</button>
        <input type="text" value={numero} onChange={(e) => setNumero(Math.floor(e.target.value))}/>
        <button onClick={adcionar}>+</button>
    </>
  )
}

export default MeuSegundoComponente