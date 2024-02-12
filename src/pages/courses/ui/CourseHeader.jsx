import React from 'react'
import { GiDiploma } from 'react-icons/gi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { Button } from '@mantine/core'
import { getImageUrl } from 'shared/lib'
import { ImgSkeleton } from 'shared/ui/ImgSkeleton'
import { FiYoutube } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { Image } from 'shared/ui'
import { useLangContext } from 'app/langContext'

export const CourseHeader = ({ headings, images, text }) => {

  const {kz} = useLangContext()

  const {pathname} = useLocation()

  return (
    <div className="w-full">
      <div className="container">
        <section className="grid gap-4">
          <div>
            <h1 className="text-4xl font-bold pt-6 pb-5 text-teal-500">
              {headings?.main}
            </h1>
            <p className="text-heading text-xl font-medium">
              {headings?.submain}
            </p>
          {!pathname.includes('resorts') && (
            <div className="grid lg:grid-cols-3 gap-6 mt-10">
              <div className="flex items-center">
                <div className="border border-solid border-[#dae7f3] p-2 rounded-md shadow">
                  <GiDiploma className="text-4xl flex-shrink-0 text-primary-600 " />
                </div>
                <div className="ml-2">
                  <h4 className="text-heading text-sm font-medium">
                    {headings?.start1}
                  </h4>
                  <p className="text-[#005bab] font-medium">{text?.date1}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="border border-solid border-[#dae7f3] p-2 rounded-md shadow">
                  <GiDiploma className="text-4xl flex-shrink-0 text-primary-600 " />
                </div>
                <div className="ml-2">
                  <h4 className="text-heading text-sm  font-medium">
                    {headings?.start2}
                  </h4>
                  <p className="text-[#005bab] font-medium">{text?.date2}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="border border-solid border-[#dae7f3] p-2 rounded-md shadow">
                  <GiDiploma className="text-4xl flex-shrink-0 text-primary-600 " />
                </div>
                <div className="ml-2">
                  <h4 className="text-heading text-sm  font-medium">
                    {headings?.start3}
                  </h4>
                  <p className="text-[#005bab] font-medium">{text?.date3}</p>
                </div>
              </div>
            </div>
          )}
          {pathname.includes('resorts') ? (
            <Button size="lg" className="mt-10">
              <a href={text?.link} target='_blank'>
                <span className='break-words'>
                  {kz ? `Көру` : `Смотреть`}
                </span>
                <FiYoutube size={25} className="inline ml-2" />
              </a>
            </Button>
          ) :
             <Button size="lg" className="mt-10">
              <a href={text?.link} target='_blank'>
                <span className='break-words'>
                  {kz ? `Курс бағдарламасын қарау` : `Смотреть программу курса`}
                </span>
                <FiYoutube size={25} className="inline ml-2" />
              </a>
            </Button>
          }
          </div>
          {!pathname.includes('resorts') && (
            <Image
              record={images}
              index={1}
              className='w-full max-h-[350px] object-cover lg:block hidden rounded-primary'
            />  
          )}
          
          {/* {getImageUrl(course?.images, images?.[1]) ? (
            <img
              className="w-3/5"
              src={getImageUrl(course?.images, images?.[1])}
              alt="kid"
            />
          ) : (
            <ImgSkeleton width="max-w-3xl" />
          )} */}
        </section>
      </div>
    </div>
  )
}
