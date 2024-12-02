import React from 'react'

const TempInput = (props) => {
  return (
    <>
      <form>
        <label>
          <input
            id='tempInput'
            type='number'
            value={props.handleInputChange}
            placeholder={props.placeholder}
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

export default TempInput
