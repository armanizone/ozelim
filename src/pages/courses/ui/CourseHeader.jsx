import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { Button } from '@mantine/core'
import { getImageUrl } from 'shared/lib'
import { ImgSkeleton } from 'shared/ui/ImgSkeleton'
import { FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const CourseHeader = ({ headings, course, text }) => {
  const images = course?.images ?? {}

  return (
    <div className="w-full">
      <div className="container">
        <section className="flex">
          <div>
            <h1 className="text-4xl font-bold pt-16 pb-5 text-[#2a2a2a]">
              {headings?.main}
            </h1>
            <p className="text-heading text-xl font-medium">
              {headings?.submain}
            </p>
            <div className="flex gap-6 mt-10">
              <div className="flex items-center">
                <div className="border border-solid border-[#dae7f3] p-2 rounded-md shadow">
                  <AiOutlineCalendar className="text-4xl flex-shrink-0 text-primary-600 " />
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
                  <BiTimeFive className="text-4xl flex-shrink-0 text-primary-600 " />
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
                  <AiOutlineUnorderedList className="text-4xl flex-shrink-0 text-primary-600 " />
                </div>
                <div className="ml-2">
                  <h4 className="text-heading text-sm  font-medium">
                    {headings?.start3}
                  </h4>
                  <p className="text-[#005bab] font-medium">{text?.date3}</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="mt-10">
              <a href={text?.link} target='_blank'>
                Смотреть программу курса
                <FiYoutube size={25} className="inline ml-2" />
              </a>
            </Button>
          </div>
          {getImageUrl(course?.images, images?.[1]) ? (
            <img
              className="w-3/5"
              src={getImageUrl(course?.images, images?.[1])}
              alt="kid"
            />
          ) : (
            <ImgSkeleton width="max-w-3xl" />
          )}
        </section>
      </div>
    </div>
  )
}
