import * as React from 'react'
//--------------------------------------1
export const useInterval = (
  cb: (...arg) => any,
  deps: any[],
  delay: number
): any[] => {
  const memoizedCB = React.useCallback(() => {
    cb()
  }, [cb])
  let id1
  React.useEffect(() => {
    const cbWrapper = () => {
      memoizedCB()
    }
    // run once at least to update the ctx and the DOM if needed.
    if (delay > 5) {
      id1 = setTimeout(cbWrapper, 100)
    }
    const id2 = setInterval(cbWrapper, delay * 1000)
    return () => {
      clearTimeout(id1)
      clearInterval(id2)
    }
  }, [...deps])
  return [...deps, cb]
}
