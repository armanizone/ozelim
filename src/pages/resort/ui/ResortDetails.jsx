import React from 'react'
import { Button, Chip, Modal, TextInput } from '@mantine/core'
import { FcInfo } from 'react-icons/fc'
import { formatNumber } from 'shared/lib'

import WhatsApp from 'shared/assets/icons/WhatsApp.svg'
import Instagram from 'shared/assets/icons/Instagram.svg'
import { useUtils } from 'shared/hooks'
import { HealthLink } from 'shared/ui/HealthLink'
import { pb } from 'shared/api'

export const ResortDetails = ({resort}) => {

  const [modal, setModal] = React.useState(false)

  const [bid, setBid] = React.useState({
    name: '',
    phone: '',
    region: '',
  })

  async function submit (data) {
    return await pb.collection('bids').create({
      ...data, 
      type: 'resort'
    })
  }

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-3">{resort?.title}</h2>
        <div>
          {resort?.duration}
        </div>
        <div>
          {resort?.diet}
        </div>
        <div>
          {resort?.from}
        </div>

        <hr className="mt-5" />
        <div className="mt-2 mb-1">Цена за 1 чел, в номере для двоих</div>
        <span className="text-3xl font-bold">
          {formatNumber(resort?.cost)} тг
        </span>
        <div className="mt-2 w-full">
          <HealthLink 
            label={'Отправить заявку'} 
            buttonProps={{
              fullWidth: true,
            }}
            onSubmit={submit}
            data={resort?.id}
          />
        </div>
        <hr className="mt-5" />
        <div>Уточнить детали тура</div>
        <div className="flex flex-col">
          {/* <a href={`https://www.instagram.com/${resort?.inst}`} target="_blank">
            <div className="flex items-center gap-2">
              <img src={Instagram} className="w-10" />
              <p>Instagram</p>
            </div>
          </a> */}
          <a href={`https://wa.me/${resort?.whats}`} target="_blank">
            <div className="flex items-center gap-2 mt-4">
              <img src={WhatsApp} className="w-10" />
              <p>WhatsApp</p>
            </div>
          </a>

        </div>
      </div>
      <Modal centered title="Заявка" opened={modal} onClose={setModal}>
        <div className="space-y-4">
          <TextInput
            label="Имя"
            value={bid?.name}
            onChange={(e) => setBid({ ...bid, name: e.currentTarget.value })}
            variant="filled"
          />
          <TextInput
            label="Телефон"
            value={bid?.phone}
            onChange={(e) => setBid({ ...bid, phone: e.currentTarget.value })}
            variant="filled"
          />
          <TextInput
            label="Город"
            value={bid?.region}
            onChange={(e) => setBid({ ...bid, region: e.currentTarget.value })}
            variant="filled"
          />
          <Button fullWidth>Отправить</Button>
        </div>
      </Modal>
    </>
  )
}
