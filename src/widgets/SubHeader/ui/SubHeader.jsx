import React from 'react'
import { CgPhone } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import Telegram from 'shared/assets/icons/Telegram.svg'
import WhatsApp from 'shared/assets/icons/WhatsApp.svg'
import Instagram from 'shared/assets/icons/Instagram.svg'
import TikTok from 'shared/assets/icons/TikTok.svg'
import YouTube from 'shared/assets/icons/YouTube.svg'

export const SubHeader = () => {
  return (
    <div className="w-full">
      <div className="container">
        <div className="flex justify-center py-3 border-b">
          <a href="#" className="flex items-center border-r pr-4 mr-4">
            <CgPhone className="text-xl flex-shrink-0" />
            <span className="hover:text-primary-500 ml-2 text-sm">+7-777-747-7788</span>
          </a>
          <a href="#" className="flex items-center border-r pr-4 mr-4">
            <img src={Telegram} className="w-6" />
            <span className="ml-2 hover:text-primary-500 text-sm">Telegram</span>
          </a>
          <a href="#" className="flex items-center border-r pr-4 mr-4">
            <img src={WhatsApp} className="w-6" />
            <span className="ml-2 hover:text-primary-500 text-sm">WhatsApp</span>
          </a>
          <a href="#" className="flex items-center border-r pr-4 mr-4">
            <img src={YouTube} className="w-6" />
            <span className="ml-2 hover:text-primary-500 text-sm">YouTube</span>
          </a>
          <a href="#" className="flex items-center border-r pr-4 mr-4">
            <img src={Instagram} className="w-6" />
            <span className="ml-2 hover:text-primary-500 text-sm">Instagram</span>
          </a>
          <a href="#" className="flex items-center">
            <img src={TikTok} className="w-6" />
            <span className="ml-2 hover:text-primary-500">TikTok</span>
          </a>
        </div>
      </div>
    </div>
  )
}
