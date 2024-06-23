'use client'

import Header from '@/app/(app)/Header'
import CardUser from '../partials/CardUser'
import SelProvince from '../partials/SelProvince'
import SelRegency from '../partials/SelRegency'
import SelDistrict from '../partials/SelDistrict'
import SelVillage from '../partials/SelVillage'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Label from '@/components/Label'
import Button from '@/components/Button'

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
  const [address, setAddress] = useState('');


  // Get provinces data at first /////////////////////////////


  function handleChange(areaType, value) {
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
    }
    fetchData(areaType, value);
  }
  ///////////////////////////////////////////////////

  // Get regencies data when province selected
  const fetchData = async (areaType, value) => {

    if (!areaType && !value) {
      apiUrl = `${api}/province`;
    } else if (!areaType && value) {
      setVillage(value);
      return;
    } else {
      apiUrl = `${api}/get${areaType}/${value}`;
    }
    
    const { data } = await axios.get(apiUrl);

    switch (areaType) {
      case 'regencies':
        setProvince(value);
        setRegencies(data);
        break;
      case 'districts':
        setRegency(value);
        setDistricts(data);
        break;
      case 'villages':
        setDistrict(value);
        setVillages(data);
        break;
      case '':
        setVillage(value);
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
      <Header title="Profil">
        <Button className={'text-xs tracking-wider'}>Lengkapi data</Button>
      </Header>
      <div className="py-1 md:py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="flex flex-col space-y-5 md:flex-row p-6 bg-white border-b border-gray-200">
              <div className='w-full md:w-1/2 mb-3'>
                <CardUser />
              </div>
              <div className='flex flex-col w-full md:w-1/2 space-y-2'>
                <div>
                  <SelProvince provinces={provinces} province={province} handleChange={handleChange} />
                </div>
                <div>
                  <SelRegency regencies={regencies} regency={regency} handleChange={handleChange} />
                </div>
                <div>
                  <SelDistrict districts={districts} district={district} handleChange={handleChange} />
                </div>
                <div>
                  <SelVillage villages={villages} village={village} handleChange={handleChange} />
                </div>
                <div>
                  <Label className='md:inline-flex w-1/3 align-bottom' htmlFor="address">Alamat</Label>
                  <textarea id='address' className='bg-gray-200 w-full md:w-2/3 p-2 tracking-wide' placeholder='alamat lengkap' onKeyUp={(e) => setTimeout(setAddress(e.target.value), 10000)} />
                </div>
                {province} {regency} {district} {village} {address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile