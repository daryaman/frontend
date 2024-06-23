import React, { useEffect, useState } from 'react'
import Label from '@/components/Label'
import Select from '@/components/Select'
import axios from '@/lib/axios';

const SelProvince = ({ provinces, province, handleChange }) => {


  return (
    <>
      <Label className='md:inline-flex w-1/3 align-bottom' htmlFor="idProvinces">Provinsi</Label>
      <Select value={province} id='idProvinces' onChange={(e) => handleChange('regencies', e.target.value)}>
        <option className='text-slate-500' >Pilih</option>
        {provinces.map((province) => {
          return (
            <option key={province.id} value={province.id}>{province.id} - {province.name}</option>
          );
        })}
      </Select></>
  )
}

export default SelProvince