import { useDisclosure } from '@mantine/hooks'
import { Modal as ModalM, Button, Group, TextInput } from '@mantine/core'
import { Controller, useForm } from 'react-hook-form'
import { pb } from 'shared/api'
import { showNotification } from '@mantine/notifications'

export function Modal({ children, onSubmit, buttonProps }) {

  const [opened, { open, close }] = useDisclosure(false)

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    values: {
      name: '',
      phone: '',
      email: '',
    },
    // resolver: yupResolver(signupSchema)
  })

  function hanle() {
    onSubmit()
    .then(() => {
      close()
      showNotification({
        title: 'Заявка',
        message: 'Заявка успешно отправлена',
        color: 'green'
      })
    })
    .catch(() => {
      close()
      showNotification({
        title: 'Заявка',
        message: 'Не удалось отправить заявку',
        color: 'red'
      })
    })
  }

  return (
    <>
      <ModalM opened={opened} onClose={close} title="Заявка" centered>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                type="email"
                placeholder="Ваша почта"
                label="Почта"
                // error={errors.email?.message}
                variant="filled"
                // disabled={isSubmitting}
                // onChange={() => clearErrors('email')}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Ваше ФИО"
                label="ФИО"
                // error={errors.name?.message}
                variant="filled"
                // disabled={isSubmitting}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Ваш номер"
                label="Номер телефона"
                // error={errors.phone?.message}
                variant="filled"
                // disabled={isSubmitting}
              />
            )}
          />
          <Button className="mt-4" type="submit" fullWidth>
            Оставить заявку
          </Button>
        </form>
      </ModalM>

      <Group position="center" className='w-full'>
        <Button 
          size="md" 
          onClick={open}
          {...buttonProps} 
        >
          {children}
        </Button>
      </Group>
    </>
  )
}
