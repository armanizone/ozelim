import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from 'shared/hooks'

export const MarketFooter = () => {

  const {pathname} = useLocation()

  const {user} = useAuth()

  if (pathname.includes('profile') && user?.collectionName === 'merchants') return 

  return (
    <div className='w-full mt-6 border-t pt-6 bg-white'>
      <div className="container-market market">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className='font-bold'>Duken Ozelim</p>
            <div className="space-y-3 text-slate-500 cursor-pointer mt-6">
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div>
            <p className='font-bold'>Полезные ссылки</p>
            <div className="space-y-3 text-slate-500 cursor-pointer mt-6">
              <p>
                Lorem, ipsum dolor.
              </p>
              <p>
                Lorem, ipsum dolor.
              </p>
              <p>
                Lorem, ipsum dolor.
              </p>
              <p>
                Lorem, ipsum dolor.
              </p>
            </div>
          </div>
          <div>
            <p className='font-bold'>Мой кабинет</p>
            <div className="space-y-3 text-slate-500 cursor-pointer mt-6">
            <p>Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
              <p>
                <Link to={'/duken/login'}>
                  Войти в магазин
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t pt-4 mt-4'>
        <div className="container-market">
          {new Date().getFullYear()} © Duken Ozelim
        </div>
      </div>
    </div>
  )
}
