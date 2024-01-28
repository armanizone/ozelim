import React from 'react'
import { Menu, Switch } from '@mantine/core'

import {
  BsWhatsapp,
} from 'react-icons/bs'
import { useLangContext } from 'app/langContext'
import { Button } from '@mantine/core'

import { IoIosArrowDown } from "react-icons/io";


export const SubHeader = () => {

  const {kz, changeLang} = useLangContext()

  return (
    <div className="w-full">
      <div className="flex justify-center py-3 border-b">
        <a href="https://wa.me/77051769699" className="flex items-center">
          <p className="mr-4 text-zinc-400">Свяжитесь с нами:</p>
          <BsWhatsapp className="text-xl flex-shrink-0" color="green" />
          {/* <img src={WhatsApp} className="w-6" /> */}
          <span className="ml-2 hover:text-yellow-400 text-md hidden md:block ">
            +7 705 176 9699
          </span>
        </a>
        <Menu
          className='ml-6'
        >
          <Menu.Target>
            <p className='font-bold text-primary-500 cursor-pointer flex gap-2 items-center'>
              {kz ? 'Каз': 'Рус'}
              <IoIosArrowDown />
            </p>
          </Menu.Target>
          <Menu.Dropdown >
            <Menu.Item onClick={() => changeLang('ru')}>
              Русский
            </Menu.Item>
            <Menu.Item onClick={() => changeLang('kz')}>
              Казахский
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        {/* <Switch
          className='ml-6'
          onChange={handleLang}
          checked={kz}
          label={kz ? 'каз' : 'рус'}
        /> */}
      </div>
    </div>
  )
}
