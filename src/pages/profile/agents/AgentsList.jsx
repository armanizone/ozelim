import React from 'react'
import { useAuth } from 'shared/hooks'
import { Button, Group, Modal, Radio } from '@mantine/core'
import dayjs from 'dayjs'

import market from 'shared/assets/images/agent.png'
import { useMediaQuery } from '@mantine/hooks'
import { openConfirmModal } from '@mantine/modals'
import { pb } from 'shared/api'

import zay from 'shared/assets/images/zay.png'
import five from 'shared/assets/images/structure5.png'
import six from 'shared/assets/images/structure6.png'
import level3 from 'shared/assets/images/3level.png'
import axios from 'axios'
import { getImageUrl } from 'shared/lib'
import { useLangContext } from 'app/langContext'
import { FaUserGroup } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa'
import { Avatar } from 'shared/ui'


export const AgentsList = ({level, setCount}) => {

  const {kz} = useLangContext()

  const {user} = useAuth()

  const [modal, setModal] = React.useState(false)

  const [referal, setReferal] = React.useState({})

  const [shitModal, setShitModal] = React.useState(false)

  const [bidModal, setBidModal] = React.useState(false)
  const [threeModal, setThreeModal] = React.useState(false)

  const matches = useMediaQuery(`(min-width: 767px)`)

  async function bids () {
    await pb.collection('level').create({
      user: user?.id,
      level: user?.level,
      new_level: `4.${radio}`,
      status: 'created',
    })
    .then(async () => {
      await pb.collection('users').update(user?.id, {
        cock: true,
      })
      .then(() => {
        setBidModal(false)
        window.location.reload()
      })
    })
  }

  async function bids3 () {
    await pb.collection('level').create({
      user: user?.id,
      level: user?.level,
      new_level: `3`,
      status: 'created',
    })
    .then(async () => {
      await pb.collection('users').update(user?.id, {
        cock: true,
      })
      .then(() => {
        setThreeModal(false)
        window.location.reload()
      })
    })
  }

  async function levelBids (level) {
    await pb.collection('level').create({
      user: user?.id,
      level: user?.level,
      status: 'created',
      new_level: level
    })
    .then(async () => {
      await pb.collection('users').update(user?.id, {
        cock: true,
      })
      .then(() => {
        setBidModal(false)
        window.location.reload()
      })
    })
  }

  const [radio, setRadio] = React.useState('')

  const levelbid = (level) => openConfirmModal({
    title: level === 7 ? `Заявка на получения вознаграждения и услугу реинвеста.` : `Заявка на получения вознаграждения и переход на ${level} ур.`,
    classNames: {
      title: '!font-semibold'
    },
    centered: true,
    children: (
      <>         
        <p className='text-center'>
          По окончанию заполнения {level - 1}-го уровня активными пользователями, вы можете подать заявку получение вознаграждения по маркетингу.
        </p>
        {level == 7 && <img src={six} />}
        {level == 6 && <img src={five} />}
      </>
    ),
    size: '100%',
    // fullScreen: matches ? false : true,
    labels: {confirm: 'Подтвердить', cancel: 'Отмена'},
    onConfirm: () => levelBids(level - 1)
  })

  const secondLine = user?.expand?.creeps?.map(q => {return q?.expand?.creeps})?.filter(w => {return w != undefined})?.flat(1)
  const thirdLine = secondLine?.map(q => {return q?.expand?.creeps})?.filter(w => {return w != undefined})?.flat(1)

  return (
    <>
      <div className='w-full'>
        <div className='flex justify-between gap-3 '>
          <div>
            <Button onClick={() => setShitModal(true)}>
              Вознаграждения
            </Button>
            {user?.expand?.sponsor && (
              <div className='w-fit mt-4'>
                <p className='text-sm ml-2'>Агент-наставник:</p>
                <div className='flex mt-2'>
                  <Avatar
                    src={user?.expand?.sponsor?.avatar}
                    className='aspect-square !w-16 !h-16 mx-auto'
                    radius='xl'
                    record={user?.expand?.sponsor}
                  />
                  <div className='flex flex-col justify-center ml-2'>
                    <p className='text-lg font-head'>
                      {user?.expand?.sponsor?.fio}
                    </p>
                    <p className='mt-1 text'>
                      {dayjs(user?.expand?.sponsor?.created).format('DD.MM.YYYY')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='flex flex-col items-end'>
            <div className='flex gap-1 items-center border-b-2'>
              <p className='text' onClick={() => setCount(q => q + 1)}>Статистика:</p>
              <FaUsers size={20} color='green' />
              <p>({((user?.creeps?.length ?? 0) + (secondLine?.length ?? 0) + (thirdLine?.length ?? 0))})</p>
            </div>
            <div className='flex gap-1 items-center border-b-2'>
              <p className='text' >
                1-линия: 
              </p>
              <FaUserGroup size={20} color='green'/>
              <p className='text-bold'>({user?.creeps?.length}) </p>
            </div>
            <div className='flex gap-1 items-center border-b-2'>
              <p className='text'>
                2-линия: 
              </p>
              <FaUserGroup size={20} color='green'/>
              <p className='text-bold'>({secondLine?.length}) </p>
            </div>
            <div className='flex gap-1 items-center border-b-2'>
              <p className='text'>
                3-линия: 
              </p>
              <FaUserGroup size={20} color='green'/>
              <p className='text-bold'>({thirdLine?.length}) </p>
            </div>
          </div>

        </div>
      </div>
      <Modal
        opened={modal}
        onClose={() => setModal(false)}
        centered
        size={'xs'}
        title='Данные партнера'
      >
        <img 
          src={getImageUrl(referal, referal.avatar)} 
          alt="" 
          className='w-[150px] h-[150px] object-cover rounded-full mx-auto mb-5'
        />
        {referal?.verified 
          ? <div className='py-4 text-green-500'>Верифицирован</div>
          : <div className='py-4 text-gray-500'>Не верифицирован</div>
        }
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
      <Modal
        title={kz ? `Қызмет алуға өтінім және 5 деңгейге дейін көтеру.`: 'Заявка на получение услуги и переход на 5 ур.'}
        centered
        opened={bidModal}
        onClose={() => setBidModal(false)}
        size='80%'
        classNames={{
          title: '!font-semibold'
        }}
      >
        <div>
          <p className='text-center'>
            {kz 
              ? `4-деңгейді белсенді пайдаланушылармен толтыру аяқталғаннан кейін сіз өтініш бере аласыз маркетингтік сыйақы алу.` 
              : `По окончанию заполнения 4-го уровня активными пользователями, вы можете подать заявку на получение вознаграждения по маркетингу и переход на следующий уровень.`
            }
          </p>
          <img src={zay} alt="" className='!mx-0' />
          <Radio.Group
            name="radio"
            label={kz ? `Опциялардың бірін таңдаңыз` : "Выберите один из вариантов"}
            withAsterisk
            value={radio}
            onChange={setRadio}
            classNames={{
              label: '!text-xl mb-4'
            }}
          >
            <Group mt="x
            s">
              <Radio 
                value="1" 
                label={kz ? `Жолдама барлығы кіреді` : "Путёвка всё включено"} 
                classNames={{
                  label: 'text-xl',
                  body: '!items-end'
                }}
              />
              <Radio 
                value="2" 
                label={kz ? ` Оқыту барлығы кіреді` : "Обучение всё включено"} 
                classNames={{
                  label: 'text-xl',
                  body: '!items-end'
                }}
              />
            </Group>
          </Radio.Group>
          <div className='flex justify-center gap-4'>
            <Button 
              variant='outline'
              onClick={() => setBidModal(false)}
            >
              {kz ? `Бас тарту` : 'Отмена'}
            </Button>
            <Button
              disabled={!radio}
              onClick={bids}
            >
              {kz ? `Растау` : 'Подтвердить'}
            </Button>
          </div>
        </div>
      </Modal>
      <Modal
        title={kz ? `4-деңгейге көтерілу туралы өтініш.` : `Заявка на переход на 4 ур.`}
        centered
        opened={threeModal}
        onClose={() => setThreeModal(false)}
        size='80%'
        classNames={{
          title: '!font-semibold'
        }}
      >
        <div>
          <p className='text-center'>
            {kz 
              ? `3-деңгейді белсенді пайдаланушылармен толтыру аяқталғаннан кейін сіз 4-деңгейге дейін көтеруге өтініш бере аласыз` 
              : `По окончанию заполнения 3-го уровня активными пользователями, вы можете подать заявку на переход в 4-тый уровня`
            }
          </p>
          <img src={level3} alt="" className='!mx-0 w-full' />
          <div className='flex justify-center gap-4'>
            <Button 
              variant='outline'
              onClick={() => setThreeModal(false)}
            >
              {kz ? `Бас тарту` : 'Отмена'}
            </Button>
            <Button
              onClick={bids3}
              // disabled={user?.balance < 5000}
            >
              {kz ? `Растау` : 'Подтвердить'}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
