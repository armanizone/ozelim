import { Button } from '@mantine/core'
import React from 'react'
import { Link } from 'react-scroll'
import Kazmap from 'shared/assets/images/map-kz.png'

export const Franchise = () => {
  return (
    <div className="w-full">
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-4 justify-between items-center bg-gradient-to-tl from-teal-600 to-teal-500 shadow-md rounded-primary">
          <div className="ml-8">
            <p className="text-4xl mt-2 text-white">Единый реестр санаторно-курортных комплексов Казахстана</p>
            <p className="mt-5 text-2xl text-white ">
              Поиск и подбор оздоровительных туров по Казахстану
            </p>
            <div className="mt-5">
              <Button component={Link} to="/about" size="md">
                Подробнее
              </Button>
              <Link to="jopa" spy smooth>
                <Button size="md" className="ml-3">
                  Сотрудничество
                </Button>
              </Link>
            </div>
          </div>
          <img
            src={Kazmap}
            alt=""
            className="w-full lg:max-w-xl max-w-lg mx-auto lg:mx-0 rounded-primary object-cove"
          />
        </div>
      </div>
    </div>
  )
}
