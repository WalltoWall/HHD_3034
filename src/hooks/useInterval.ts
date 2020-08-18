import * as React from 'react'

export const useInterval = (callback: () => void, interval: number) => {
  const callbackRef = React.useRef(callback)
  const id = React.useRef<NodeJS.Timeout | undefined>()

  React.useEffect(() => {
    callbackRef.current = callback
  })

  React.useEffect(() => {
    id.current = setInterval(() => {
      callbackRef.current()
    }, interval)

    return () => clearInterval(id.current as NodeJS.Timeout)
  }, [interval])

  const stop = () => {
    if (id.current) {
      clearInterval(id.current)
      id.current = undefined
    }
  }

  const restart = () => {
    stop()

    id.current = setInterval(() => {
      callbackRef.current()
    }, interval)
  }

  return [stop, restart]
}
