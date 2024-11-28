import Table from "../components/table";
import TempInput from "../components/TempInput";

import React from 'react'

export default function Page() {
  const columns = ["Temp F", "Temp C"];
  const data = [
    { Fahrenheit: 0, Celcius: 30 },
    { Fahrenheit: 0, Celcius: 30 },
    { Fahrenheit: 0, Celcius: 30 },
    { Fahrenheit: 0, Celcius: 30 },
    { Fahrenheit: 0, Celcius: 30 }
  ];

  return (
    <>
      <Table/>
      <TempInput></TempInput>
    </>
  )
}
