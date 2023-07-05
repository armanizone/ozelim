import React from 'react'
import { Burger, Popover } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from 'react-router-dom'

const array = [
  { label: 'Прайс лист', link: '/price' },
  { label: 'Партнерская программа', link: '/program' },
  { label: 'Наша команда', link: '/our-team' },
  { label: 'Благотворительный фонд', link: '/charity-fund' },
  { label: 'Новости компании', link: '/news' },
]

export const BurgerMenu = () => {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <Popover opened={opened} onChange={toggle}>
      <Popover.Target>
        <Burger opened={opened} onClick={toggle} />
      </Popover.Target>
      <Popover.Dropdown>
        <nav>
          <ul className="flex flex-col space-y-2">
            {array.map((val, i) => {
              return (
                <li key={i} className="hover:text-primary-500 font-head">
                  <Link to={val.link}>{val.label}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </Popover.Dropdown>
    </Popover>
  )
}
