import { Text } from '@chakra-ui/react'
import react from 'react'

//=======================
export const LongText: React.FC = ({ children }) => {
  // hooks
  const [lines, setLines] = react.useState<undefined | number[]>([2, 3, 5])
  //--------------------------------------
  // functions
  function handleClick() {
    typeof lines === 'undefined' ? setLines([2, 3, 4]) : setLines(undefined)
  }
  //--------------------------------------
  return (
    <div
      data-testid="text-expand"
      className="leading-5 break-words cursor-default text-blueGray-400"
      onClick={() => handleClick()}
    >
      <Text as="div" noOfLines={lines}>
        {children}
      </Text>
    </div>
  )
}
