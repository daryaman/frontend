import React from 'react'
import Label from '@/components/Label'
import Select from '@/components/Select'

const SelDistrict = ({ districts, district, handleChange }) => {
  return (
    <>
      <Label className='md:inline-flex w-1/3 align-bottom' htmlFor="idDistricts">Kecamatan</Label>
      <Select value={district} id='idDistricts'  onChange={(e) => handleChange('villages', e.target.value)}>
        <option className='text-slate-500' >Pilih</option>
        {districts.map((district) => {
          return (
            <option key={district.id} value={district.id} >{district.id} - {district.name}</option>
          );
        })}
      </Select></>
  )
}

export default SelDistrict