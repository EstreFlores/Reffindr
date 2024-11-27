import { Badge, Box, Button, Card, Flex, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import { CiHeart } from 'react-icons/ci'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { RiMapPin2Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { Rating } from '@/components/ui/rating'

interface CardReuProps {
  title: string
  image: string
  description: string
  price: number
  location: string
  features: string[]
  showRating?: boolean
  setRating?: (value: number) => void
  rating?: number
  maxW?: string
}

export const CardReuComponent = ({
  title,
  description,
  price,
  location,
  image,
  features,
  showRating = false,
  setRating,
  rating,
  maxW,
}: CardReuProps) => {
  const navigate = useNavigate()

  const handleViewMore = () => {
    navigate('/details', {
      state: {
        title,
        description,
        price,
        location,
        image,
        features,
      },
    })
  }
  return (
    <Card.Root
      maxW={maxW}
      overflow='hidden'
      shadow='md'
      borderRadius='lg'
      boxShadow='0px 4px 8px rgba(0, 0, 0, 0.1)'
      transition='box-shadow 0.3s ease-in-out'
      _hover={{ boxShadow: '0px 10px 20px rgba(38, 80, 204, 0.4)' }}
    >
      <Image src={image} alt={title} h='200px' objectFit='cover' borderRadius='0' />
      <Card.Body gap='1'>
        <Flex alignItems='center' gap='2'>
          <Card.Title>{title}</Card.Title>

          <IconButton aria-label='Call support' ml='auto' rounded='full' bg='transparent' color='black'>
            <CiHeart />
          </IconButton>
        </Flex>

        {showRating && (
          <HStack>
            <Rating allowHalf defaultValue={rating} onValueChange={({ value }) => setRating && setRating(value)} />
            <Flex alignItems='center' gap='1'>
              <Text>
                {rating} <Box as={'span'}>Star</Box>
              </Text>
              <Text>10 reviews</Text>
            </Flex>
          </HStack>
        )}

        <Text textStyle='2xl' fontWeight='medium' letterSpacing='tight' mt='2'>
          {price}
        </Text>
        <Box letterSpacing='tight' mt='2'>
          <Flex alignItems='center' gap='2'>
            <RiMapPin2Line />
            {location}
          </Flex>
        </Box>
        <Box display='flex' gap='2'>
          {features.map((feature, index) => (
            <Badge key={index} variant='solid' bg='#3182CE' size='md'>
              {feature}
            </Badge>
          ))}
        </Box>

        <Card.Title as='h3'>{title}</Card.Title>
        <Card.Description as='span'>
          <Text lineClamp='2'>{description}</Text>
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button onClick={handleViewMore} variant='ghost' ml='auto'>
          Ver más <IoChevronForwardSharp />
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}
