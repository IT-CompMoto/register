import React from 'react'
import NewRegisterPage from '@/app/ui/register/form-input'

export default function RegisterPage() {
  return (

    <main className='mb-10'>
      <div className="font-bold text-2xl md:text-4xl mb-8">
        <h1>ลงทะเบียนแข่ง / Register</h1>
      </div>

      <div className='text-lg'>
        <div className='bg-gray-50 py-6 mb-10'>

          <div className='flex mb-5'>
            <div className="form-control pr-3">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" value={'new'} className="radio checked:bg-yellow-300 mr-2" defaultChecked />
                <span className="label-text">ผู้ลงทะเบียนใหม่ / For New Racer</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-10" value={'old'} className="radio checked:bg-yellow-300 mr-2" />
                <span className="label-text">เคยลงทะเบียนแล้ว / Existing Registrant</span>
              </label>
            </div>
          </div>

          <NewRegisterPage />
        </div>
        
      </div>

    </main>

  )
}
