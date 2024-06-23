'use client'

import Header from '@/app/(app)/Header'
import Card from '../partials/CardUser'
import SelProvince from '../partials/SelProvince'
import SelRegency from '../partials/SelRegency'
import SelDistrict from '../partials/SelDistrict'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Label from '@/components/Label'

const Profile = () => {

  const api = 'http://localhost:8000/api';
  let apiUrl;
  let areaType;
  let value;
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState('');
  const [regencies, setRegencies] = useState([]);
  const [regency, setRegency] = useState('');
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState('');
  const [villages, setVillages] = useState([]);
  const [village, setVillage] = useState('');


  // Get provinces data at first /////////////////////////////


  function handleChange(areaType, value) {
    console.log(areaType);
    console.log(value);
    switch (areaType) {
      case 'provinces':
        setRegency('');
        setDistrict('');
        setVillage('');
        break;
      case 'regencies':
        setDistrict('');
        setVillage('');
        break;
      case 'districts':
        setVillage('');
        break;
      default:
        break;
    }
    fetchData(areaType, value);
  }
  ///////////////////////////////////////////////////

  // Get regencies data when province selected
  const fetchData = async (areaType, value) => {
    if (!areaType) {
      apiUrl = `${api}/api/province`;
    } else {
      apiUrl = `http://localhost:8000/api/get${areaType}/${value}`;
    }
    const { data } = await axios.get(apiUrl);
    switch (areaType) {
      case 'regencies':
        setProvince(value)
        setRegencies(data);
        break;
      case 'districts':
        setRegency(value)
        setDistricts(data);
        break;
      case 'villages':
        setDistrict(value)
        setVillages(data);
        break;
      default:
        setProvinces(data);
        break;
    }
  };

  useEffect(() => {
    fetchData(areaType, value);
  }, []);

  return (
    <>
      <Header title="Profile" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="flex flex-col space-y-5 md:flex-row p-6 bg-white border-b border-gray-200">
              <div className='w-full md:w-1/2'>
                <Card />
              </div>
              <div className='flex flex-col w-full md:w-1/2 space-y-2'>
                <div>
                  <Label className='inline-flex w-1/3 align-bottom' htmlFor="idProvinces">Provinsi</Label>
                  <select value={province} id='idProvinces' className='w-2/3 p-2 text-sm font-sans tracking-wide' onChange={(e) => handleChange('regencies', e.target.value)}>
                    <option className='text-slate-500' >Pilih</option>
                    {provinces.map((province) => {
                      return (
                        <option key={province.id} value={province.id}>{province.id} - {province.name}</option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <Label className='inline-flex w-1/3 align-bottom' htmlFor="idRegencies">Kota</Label>
                  <select value={regency} id='idRegencies' className='w-2/3 p-2 text-sm font-sans tracking-wide' onChange={(e) => handleChange('districts', e.target.value)}>
                    <option className='text-slate-500' >Pilih</option>
                    {regencies.map((regency) => {
                      return (
                        <option key={regency.id} value={regency.id} >{regency.id} - {regency.name}</option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <Label className='inline-flex w-1/3 align-bottom' htmlFor="idDistricts">Kecamatan</Label>
                  <select value={district} id='idDistricts' className='w-2/3 p-2 text-sm font-sans tracking-wide' onChange={(e) => handleChange('villages', e.target.value)}>
                    <option className='text-slate-500' >Pilih</option>
                    {districts.map((district) => {
                      return (
                        <option key={district.id} value={district.id} >{district.id} - {district.name}</option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <Label className='inline-flex w-1/3 align-bottom' htmlFor="idVillages">Kelurahan</Label>
                  <select value={village} id='idVillages' className='w-2/3 p-2 text-sm font-sans tracking-wide' onChange={(e) => setVillage(e.target.value)}>
                    <option className='text-slate-500' >Pilih</option>
                    {villages.map((village) => {
                      return (
                        <option key={village.id} value={village.id} >{village.id} - {village.name}</option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile