import {useEffect, useState, useRef} from 'react'

export default function useIntersectionObserver ({ externalRef }: any = {}) {
  const [isIntersected, setIntersected] = useState(false)
  const fromRef = useRef()
  const once = false;

  useEffect(() => {
    let observer: IntersectionObserver;

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries: any[], observer: { disconnect: () => any; }) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIntersected(true)
        once && observer.disconnect()
      } else {
        !once && setIntersected(false)
      }
    }

    Promise.resolve(
      IntersectionObserver
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '100px'
      })
  
      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return {isIntersected, fromRef}
}