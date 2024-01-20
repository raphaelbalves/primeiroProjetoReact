import React, { useState } from 'react'

const Lista = () => {

    const meses = 
        [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dec"
        ]

  return (
    <div>
        <select>
            {
                meses.map((item, i) => (
                <option key={i}> {item} </option>
                ))
            }
        </select>
    </div>
  )
}

export default Lista