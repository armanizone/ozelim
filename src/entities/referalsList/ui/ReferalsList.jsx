import React from 'react'
import { Referal } from './Referal'
import { referapsApi } from '../api/referalsApi'
import { useAuth } from 'shared/hooks'
import { Button, Modal } from '@mantine/core'
import dayjs from 'dayjs'

import market from 'shared/assets/images/market.png'
import { useMediaQuery } from '@mantine/hooks'

export const ReferalsList = ({level, setCount}) => {

  const {user} = useAuth()

  const [referals, setReferals] = React.useState([])

  async function getReferals () {
    await referapsApi.getReferals(user?.id)
    .then(res => {
      setReferals(res)
    })
  }

  React.useEffect(() => {
    getReferals()
  }, [])

  const [modal, setModal] = React.useState(false)

  const [referal, setReferal] = React.useState({})

  function handleReferal (val) {
    setReferal(val)
    setModal(true)
  }
 
  const [shitModal, setShitModal] = React.useState(false)

  const matches = useMediaQuery(`(min-width: 767px)`)

  return (
    <>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row gap-3 items-center'>
          <Button
            onClick={() => setShitModal(true)}
          >
            Программа
          </Button>
          <div className='flex gap-1'>
            <p className='text' onClick={() => setCount(q => q + 1)}>Партнеры:</p>
            <p className=''>{referals.length}</p>
          </div>
          <div className='flex gap-1'>
            <p className='text'>Уровень:</p>
            <p className=''>
              {(level === '0' || !level) && '0'}
              {level === '1-3' && level}
              {(level === '4.1' || level === '4.2') && 4}
              {level === '5' && 5}
              {level === '6' && 6}
            </p>
          </div>
        </div>
        <div className='flex gap-4 overflow-x-auto pb-2 mt-4'>
          {referals.map((referal, i) => {
            return (
              <Referal 
                referal={referal} 
                key={i}
                onReferalClick={handleReferal}
              />
            )
          })}
        </div>
      </div>
      <Modal
        opened={modal}
        onClose={setModal}
        centered
        size={'xs'}
        title='Данные партнера'
      >
        <ul className='space-y-2'>
          <li className='grid grid-cols-2'>
            <p>ID:</p>
            <p>{referal?.id}</p>
          </li>
          <li className='grid grid-cols-2'>
            <p>Имя:</p>
            <p>{referal?.name}</p>
          </li>
          <li className='grid grid-cols-2'>
            <p>Фамилия:</p>
            <p>{referal?.surname}</p>
          </li>
          <li className='grid grid-cols-2'>
            <p>Телефон:</p>
            <p>{referal?.phone}</p>
          </li>
          <li className='grid grid-cols-2'>
            <p>Область:</p>
            <p>{referal?.region}</p>
          </li>
          <li className='grid grid-cols-2'>
            <p>Партнеры:</p>
            <p>{referal?.referals?.length}</p>
          </li>
          <li className='grid grid-cols-2'>
            <p>Бинар:</p>
            <p>{referal?.bin ? 'Да' : 'Нет'}</p>
          </li>
          <li className='grid grid-cols-2'>
            <p>Уровень:</p>
            <p>{referal?.level}</p>
          </li>
          <li className='grid grid-cols-2'>
            <p>Дата рег:</p>
            <p>{dayjs(referal?.created).format('DD.MM.YY')}</p>
          </li>
        </ul>
      </Modal>
      <Modal
        opened={shitModal}
        onClose={() => setShitModal(false)}
        centered
        size='xl'
        fullScreen={matches ? false : true}

      >
        <img src={market} alt="" className='h-full' />
      </Modal>
    </>
  )
}
