import React, { useState } from 'react'

export default function TempInput(props) {
  return (
    <>
      <form>
        <label>
          <input
            id='tempInput'
            type='number'
            value={props.handleInputChange}
            placeholder='tempreture'
          />
          {props.label}
        </label>

        <button onClick={props.calculateTemp}>{props.btnString}</button>
      </form>
      {props.result !== null ?
        (<p>Result: {props.result}</p>) : null
      }
    </>
  )
}
