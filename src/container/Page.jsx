import React, { useState } from 'react'

import TempInput from "../components/TempInput";
import Table from '../components/Table';


const Page = () => {
  const [temp, setTemp] = useState(null)
  const [result, setResult] = useState(null)
  const data = [
    { fah: 0, cen: 30 },
    { fah: 0, cel: 30 },
    { fah: 0, cel: 30 },
    { fah: 0, cel: 30 },
    { fah: 0, cel: 30 }
  ];

  const handleInputChange = () => {
    setTemp = e.target.value
  }

  const calculateTemp = (e) => {
    if (temp != null) {
      setResult = (inputTemp-32)*(1.8)
    } else {
      setResult = null
    }
    console.log(result)
    return result
  }

  return (
    <div className='container'>
      <TempInput label='' btnString='' calculateTemp={calculateTemp} handleInputChange={handleInputChange} result={result}/>
      <Table />
    </div>
  )
}

export default Page
