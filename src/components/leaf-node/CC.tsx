//=======================Conditional Component
export const CC: React.FC<{
  isTrue: any
}> = ({ isTrue, children }) => {
  return <>{isTrue ? children : null}</>
}
