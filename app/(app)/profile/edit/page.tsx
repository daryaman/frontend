'use client'

import React, { useEffect, useState } from 'react'
import SelProvince from '../../partials/SelProvince'
import SelRegency from '../../partials/SelRegency'
import SelDistrict from '../../partials/SelDistrict'
import SelVillage from '../../partials/SelVillage'
import Label from '@/components/Label'
import axios from '@/lib/axios'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Button from '@/components/Button'

const ProfileEdit = () => {

  const api = 'http://localhost:8000/api';
  let apiUrl;
  let areaType;
  let value;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState('');
  const [regencies, setRegencies] = useState([]);
  const [regency, setRegency] = useState('');
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState('');
  const [villages, setVillages] = useState([]);
  const [village, setVillage] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState([])


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

  function handleForm(e) {
    e.preventDefault();
    alert('form di klik');
  }

  return (
    <div className="py-1 md:py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="flex flex-col space-y-5 md:flex-row p-6 bg-white border-b border-gray-200">
            <div className='flex flex-col w-full'>
              <form action="" method="post" onSubmit={handleForm} className='flex flex-col space-y-5'>
                <div>
                  <Label htmlFor='name'>Nama</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    className="block w-full"
                    onChange={event => setName(event.target.value)}
                    required
                    autoFocus
                  />

                  <InputError messages={errors.name} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    className="block w-full"
                    onChange={event => setEmail(event.target.value)}
                    required
                  />

                  <InputError messages={errors.email} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor='phone'>Telephon</Label>
                  <Input
                    id="phone"
                    type="text"
                    value={phone}
                    className="block w-full"
                    onChange={event => setPhone(event.target.value)}
                    required
                  />

                  <InputError messages={errors.phone} className="mt-2" />
                </div>
                <div>
                  <SelProvince
                    provinces={provinces}
                    province={province}
                    handleChange={handleChange} />
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
                  <Label htmlFor='postcode'>Kodepos</Label>
                  <Input
                    id="postcode"
                    type="text"
                    value={postcode}
                    className="block w-full"
                    onChange={event => setPostcode(event.target.value)}
                  />

                  <InputError messages={errors.postcode} className="mt-2" />
                </div>
                <div>
                  <Label className='md:inline-flex w-1/3 align-bottom' htmlFor="address">Alamat</Label>
                  <textarea id='address' className='bg-gray-200 w-full md:w-2/3 p-2 tracking-wide' placeholder='Alamat lengkap' onKeyUp={(e) => setTimeout(setAddress(e.target.value), 10000)} />
                </div>
                <div>
                  <Label className='md:inline-flex w-1/3 align-bottom' htmlFor="description">Keterangan</Label>
                  <textarea id='description' className='bg-gray-200 w-full md:w-2/3 p-2 tracking-wide h-56' placeholder='Jelaskan tentang diri anda dan apa yang bisa anda kerjakan' onKeyUp={(e) => setTimeout(setDescription(e.target.value), 10000)} />
                </div>
                <div className='mt-5 flex justify-between'>
                  <Button type='reset' className={'w-[94px] justify-center'}>Batal</Button>
                  <Button>Simpan</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit