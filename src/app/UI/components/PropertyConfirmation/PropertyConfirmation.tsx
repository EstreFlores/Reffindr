import { Button, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'

import { CardReuComponent } from '@/app/UI/components/CardInfo/CardReuComponent'
import { MenuAnnouncement } from '@/app/UI/components/MenuAnnouncement/MenuAnnouncement'

import { ConfirmationDialog } from './ConfirmationDialog'
import { OwnerDataCard } from './OwnerDataCard'

const data = [
  {
    id: 1,
    title: 'Living room Sofa 1',
    image: 'assets/sillon.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
]

export const PropertyConfirmation = () => {
  const [showDialog, setShowDialog] = useState(false)
  const ownerData = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juanperez@example.com',
      phone: '+34 123 456 789',
      address: 'Calle Falsa 123, Madrid',
    },
  ]

  return (
    <Flex bg='#EDF2F7' p='2' w='full' h='100vh' flexDirection='column'>
      <MenuAnnouncement />

      <Flex
        direction='row'
        justifyContent={showDialog ? 'center' : 'space-between'}
        alignItems={showDialog ? 'center' : 'flex-start'}
        bg='white'
        p='5'
        gap='4'
        border='1px solid'
        borderColor='gray.300'
        borderRadius='md'
        h='650px'
      >
        {showDialog ? (
          <ConfirmationDialog setShowDialog={setShowDialog} />
        ) : (
          <>
            <Flex direction={'column'} flex='1' ml={5} pt={5}>
              <Text mb={5} fontWeight={'bold'}>
                Vista previa de propiedad
              </Text>
              <CardReuComponent {...data[0]} isActive={false} maxW={'300px'} />
            </Flex>

            <Flex direction={'column'} flex='2' h='full'>
              <Text my={5} fontWeight={'bold'}>
                Datos del propietario
              </Text>
              <OwnerDataCard ownerData={ownerData[0]} />

              <Flex alignSelf={'flex-end'} mt={'auto'} p={4}>
                <Button onClick={() => setShowDialog(true)} bg={'#1E3A8A'}>
                  Confirmar
                </Button>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  )
}