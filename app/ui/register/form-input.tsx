'use client'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export default function NewRegisterPage() {


  return (
    <main className='p-3'>
      <div>
        <h1 className='text-2xl font-bold underline underline-offset-4'>ข้อมูลนักแข่ง / Racer Information</h1>
      </div>

      <div className='mt-4'>
        <form action="">
          <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3 mb-3'>

            <div className='w-full'>
              <div className="label">
                <span className="label-text">ชื่อ-นามสกุล / Full Name</span>
              </div>
              <label className="input input-bordered flex items-center gap-2 rounded-full">
                <FaUser />
                <input
                  className="grow"
                  type="text"
                  id='fullname'
                  name='fullname'
                  placeholder="Enter Your Full Name"
                  defaultValue=""
                  required
                />
              </label>
            </div>

            <div className='w-full'>
              <div className="label">
                <span className="label-text">หมายเลขโทรศัพท์ / Phone Number</span>
              </div>
              <label className="input input-bordered flex items-center gap-2 rounded-full">
                <FaPhone />
                <input
                  type="text"
                  className="grow"
                  id='phonenumber'
                  name='phonenumber'
                  placeholder="Enter Your Phone Number"
                  maxLength={3}
                  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                  required />
              </label>

            </div>

            <div className=''>
              <div className="label">
                <span className="label-text">อีเมล / Email</span>
              </div>
              <label className="input input-bordered flex items-center gap-2 rounded-full">
                <MdEmail />
                <input type="email"
                  className="grow"
                  id='email'
                  name='email'
                  defaultValue=""
                  placeholder="Enter Your Email."
                  required />
              </label>
            </div>

            <div className=''>
              <div className="label">
                <span className="label-text">ชื่อทีม / Team</span>
              </div>
              <label className="input input-bordered flex items-center gap-2 rounded-full">
                <HiUserGroup />
                <input
                  type="text"
                  className="grow"
                  id='team'
                  name='team'
                  defaultValue=""
                  placeholder="Enter Your Team"
                  required />
              </label>
            </div>
          </div>

          <div className="divider"></div>

          {/* <div className='mb-12 mt-10'>
            <div className='mb-5'>
              <h1 className='text-2xl font-bold underline underline-offset-4'>เลือกการแข่งขัน / Chooses Your Race</h1>
            </div>

            <div id='race'>
              <div className='py-3  xl:flex gap-2'>

                <div className='w-full flex flex-col lg:grid lg:grid-flow-col gap-2 '>

                  <select className="select select-bordered w-full rounded-full">
                    <option disabled selected>Who shot first?</option>
                    <option value={'Han Solo'}>Han Solo</option>
                    <option value={'Han Solo'}>Greedo</option>
                  </select>


                  <select className="select select-bordered w-full rounded-full">
                    <option disabled selected>Who shot first?</option>
                    <option value={'Han Solo'}>Han Solo</option>
                    <option value={'Han Solo'}>Greedo</option>
                  </select>


                  <select className="select select-bordered w-full rounded-full">
                    <option disabled selected>Who shot first?</option>
                    <option value={'Han Solo'}>Han Solo</option>
                    <option value={'Han Solo'}>Greedo</option>
                  </select>


                  <select className="select select-bordered w-full rounded-full">
                    <option disabled selected>Who shot first?</option>
                    <option value={'Han Solo'}>Han Solo</option>
                    <option value={'Han Solo'}>Greedo</option>
                  </select>

                </div>
                <div className='text-end'>
                  <button className='btn btn-error text-white mt-2 lg:mt-0'>
                    Delete
                  </button>
                </div>
              </div>
              <div className="divider"></div>
            </div>

            <div>
              <div className=' text-center mt-6'>
                <button className='btn btn-success text-white w-2/4'>
                  ADD +
                </button>
              </div>
            </div>

          </div> */}

          <div className="divider"></div>

          <div className='mb-12 mt-10'>
            <div className='mb-5'>
              <h1 className='text-2xl font-bold underline underline-offset-4'>หมายเลขนักแข่ง / Racer Number</h1>
            </div>
            <div>
              <select name='race_number' className="select select-bordered w-full max-w-sm rounded-full " >
                <option disabled value="">Racer Number</option>
                <option value={'1'}>1</option>
                <option value={'2'}>2</option>
              </select>
            </div>
          </div>

          <button className='btn btn-primary w-[200px] text-white ring-2 mt-10' type='submit' name='submit' >
            SUBMIT
          </button>
        </form>
      </div>


    </main>
  )
}
