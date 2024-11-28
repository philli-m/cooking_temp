import React from 'react'

export default function Table(props) {
  return (
    <>
      <h1>{props.header}</h1>
      <AccessibleTable
        columns={props.columns}
        data={props.data}
        caption={props.caption}
      />
    </>
  )
}
