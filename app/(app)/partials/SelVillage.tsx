import React, { useState } from 'react'
import Label from '@/components/Label'
import Select from '@/components/Select'


const SelVillage = ({ villages, village, handleChange }) => {
  return (
    <>
      <Label className='md:inline-flex w-1/3 align-bottom' htmlFor="idVillages">Kelurahan</Label>
      <Select value={village} id='idVillages' onChange={(e) => handleChange('', e.target.value)}>
        <option className='text-slate-500' >Pilih</option>
        {villages.map((village) => {
          return (
            <option key={village.id} value={village.id} >{village.id} - {village.name}</option>
          );
        })}
      </Select>
    </>
  )
}

export default SelVillage