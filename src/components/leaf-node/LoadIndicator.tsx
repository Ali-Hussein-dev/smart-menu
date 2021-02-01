import { Center, Spinner } from '@chakra-ui/react'

export const LoadIndicator: React.FC = () => (
  <Center h="7" size="xl">
    <Spinner size="xl" />
  </Center>
)
