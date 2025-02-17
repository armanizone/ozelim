import React from 'react'
import { ActionIcon, Divider, Menu, Avatar as Avatr, TextInput, Indicator, Text, Autocomplete, clsx } from '@mantine/core'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import mobileLogo from 'shared/assets/images/logo1.png'
import { IoIosArrowDown } from 'react-icons/io'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useAuth } from 'shared/hooks'

import { FaRegHeart, FaRegBell } from 'react-icons/fa'
import { Avatar } from 'shared/ui'
import { useCartStore } from 'pages/market/cart/cartStore'
import { formatNumber } from 'shared/lib'
import { FiShoppingCart } from "react-icons/fi";


import { FaWhatsapp } from "react-icons/fa";
import { useProductsStore } from 'pages/market/catalog/producsStore'
import { useDisclosure } from '@mantine/hooks'
import { useNotificationStore } from 'pages/market/profile/user/notificationStore'

export const MarketNavbar = () => {

  const navigate = useNavigate()
  const {pathname} = useLocation()
  
  const {user} = useAuth()
  const {getProductsBySearch, getAllProducts} = useProductsStore()
  const {nots} = useNotificationStore()
  const {cartItems} = useCartStore()
  
  const [search, setSearch] = React.useState('')
  const [delay, delay_h] = useDisclosure(false)

  React.useEffect(()  => {
    if (pathname === '/duken') {
      setSearch('')
    }
  }, [pathname])

  async function searchProducts (name) {
    delay_h.open()
    if (name)  {
      navigate('/duken/catalog')
      getProductsBySearch(name)
    } else {
      getAllProducts()
    }
    setTimeout(() => {
      delay_h.close()
    }, 1000);
  }

  const notifications = nots?.order || nots?.offer || nots?.messages

  if (pathname.includes('profile') && user?.collectionName === 'merchants') return 

  return (
    <div className="w-full border-b bg-white">
      <div className="w-full bg-gray-800 py-5 px-6">
        <div className="container-market flex justify-end market gap-10">
          <div className='flex items-center gap-3'>
            <p className='text-white'>Поддержка ПН - ПТ (09:00 - 18:00) </p>
            <FaWhatsapp color='white' size={20}/>
            <p className='text-white '>+7 702 429 9146</p>
          </div>
          <Menu>
            <Menu.Target>
              <button className="text-sm cursor-pointer flex gap-1 items-center text-white">
                рус
              <IoIosArrowDown />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => changeLang('ru')}>рус</Menu.Item>
              <Menu.Item onClick={() => changeLang('kz')}>каз</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>

      <div className="container-market flex items-center gap-4 justify-between w-full market !py-4">
        <Link to={'/duken'}>
          <div className='flex gap-3 items-center'>
            <img className="max-w-[70px] w-full min-w-[50px] " src={mobileLogo} />
            <b className='text-2xl !font-extrabold'>DUKEN</b>
          </div>
        </Link>
        {/* <div className='flex'> */}
          {/* <Text lineClamp={1} className="flex items-center rounded-full rounded-r-none border whitespace-nowrap py-2 pl-4   text-slate-500">
            Все категории
          </Text> */}
          <Autocomplete
            data={[]}
            placeholder="Поиск..."
            rightSection={
              <FaMagnifyingGlass 
                color="white"
                onClick={() => searchProducts(search)}
                className={clsx('cursor-pointer',{
                  'pointer-events-none': delay
                })}
              />
            }
            disabled={delay}
            className="max-w-sm w-full"
            value={search}
            onChange={(e) => setSearch(e)}
            classNames={{
              rightSection: 'bg-teal-500 rounded-r-full',
              // input: '!rounded-l-none'
            }}
            onKeyDown={(e) => { if (e.key === 'Enter') searchProducts(search)}}
            radius='xl'
            size='md'
            variant='filled'
          />
        {/* </div> */}
        <div className="flex items-center gap-4">
          {!user?.duken && (
            <>
              <Link to={`/duken/profile?segment=messages`}>
                <Indicator 
                  size={18} 
                  disabled={!notifications}
                >
                  <ActionIcon className='!border !border-slate-200 !p-3 !h-12 !w-12 !rounded-full'>
                    <FaRegBell size={'100%'} color='black' />
                  </ActionIcon>
                </Indicator>
              </Link>
              <Link to={'/duken/favorites'}>
                <Indicator 
                  label={user?.favorites?.length} 
                  size={18} 
                  disabled={user?.favorites?.length === 0}
                >
                  <ActionIcon className='!border !border-slate-200 !p-3 !h-12 !w-12 !rounded-full'>
                    <FaRegHeart size={'100%'} color='black' />
                  </ActionIcon>
                </Indicator>
              </Link>
              <Indicator 
                label={cartItems?.length} 
                size={18} 
                disabled={cartItems?.length === 0}
                processing
              >  
                <Link to={'/duken/cart'}>
                  <ActionIcon className='!border !border-slate-200 !p-3 !h-12 !w-12 !rounded-full'>
                    <FiShoppingCart size={'100%'} color='black' />
                  </ActionIcon>
                </Link>
              </Indicator>

              <Divider orientation="vertical" />
            </>
          )}

          {user?.id  ? (
            <Link to={'/duken/profile'}>
              <div className='flex items-center gap-4'>
                <div>
                  <p className='text-xl text-right'>{user?.fio}</p>
                  {!user?.duken && (
                    <>
                      <p className='text-lg text-right -mt-1'>{formatNumber(user?.balance)} ₸</p>
                      <p className='text-xs text-slate-400 -mt-1.5 text-right'>{formatNumber(user?.bonuses)} бонусов</p>
                    </>
                  )} 
                </div>
                <Avatar
                  record={user}
                  src={user?.avatar}
                  radius='xl'
                  size='lg'
                />
              </div>
            </Link>
          ) : (
            <Avatr
              radius='xl'
              size='lg'
            />
          )}
        </div>
      </div>
    </div>
  )
}