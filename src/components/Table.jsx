import React from 'react'

export default function Table(props) {
  return (
    <>
      <h1>{props.header}</h1>
      <table>
        <caption>{props.caption}</caption>
        <thead>
          <tr>
            <th scope="col">{props.head1}</th>
            <th scope="col">{props.head2}</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, index) => (
            <tr key={row.index}>
              <td>{row.cel}</td>
              <td>{row.fah}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
