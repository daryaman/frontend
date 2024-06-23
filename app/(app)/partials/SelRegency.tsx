import React from 'react'
import Label from '@/components/Label'
import Select from '@/components/Select'

const SelRegency = ({ regencies, regency, handleChange }) => {
  return (
    <>
      <Label className='md:inline-flex w-1/3 align-bottom' htmlFor="idRegencies">Kota</Label>
      <Select value={regency} id='idRegencies' className='w-full md:w-2/3 p-2 text-sm font-sans tracking-wide' onChange={(e) => handleChange('districts', e.target.value)}>
        <option className='text-slate-500' >Pilih</option>
        {regencies.map((regency) => {
          return (
            <option key={regency.id} value={regency.id} >{regency.id} - {regency.name}</option>
          );
        })}
      </Select></>
  )
}

export default SelRegency