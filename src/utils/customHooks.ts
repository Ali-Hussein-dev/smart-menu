import * as React from 'react'

//--------------------------------------1
export const useInterval = (
  cb: (...arg) => any,
  deps: any[],
  delay: number | null = 1
): any[] => {
  const memoizedCB = React.useCallback(() => {
    cb()
  }, [cb])
  React.useEffect(() => {
    function cbWrapper() {
      memoizedCB()
    }
    if (delay !== null) {
      const id = setInterval(cbWrapper, delay !== null ? delay * 1000 : delay)
      return () => clearInterval(id)
    }
  }, [...deps])
  return [...deps, cb]
}
