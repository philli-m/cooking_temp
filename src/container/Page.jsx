import Table from "../components/Table";
import TempInput from "../components/TempInput";

import React from 'react'

export default function Page() {
  const data = [
    { fah: 0, cen: 30 },
    { fah: 0, cel: 30 },
    { fah: 0, cel: 30 },
    { fah: 0, cel: 30 },
    { fah: 0, cel: 30 }
  ];

  return (
    <div className='container'>
      <Table header='' data={data} head1='' head2='' caption=''/>
      <TempInput label='' btnString='' calculateTemp={} handleInputChange={} result={}/>
    </div>
  )
}
