import {useEffect} from 'react'
import {useTourController} from '@/Hooks/tourController'

const Tour = () => {

    const {position, rotation, card, nextIndex} = useTourController()

    console.log("posicion: " + position)
    console.log("rotacion: " + rotation)
    console.log(card)

    useEffect(()=>{
        window.addEventListener("click", nextIndex)
        return () => window.removeEventListener("click", nextIndex)
    }, [nextIndex])

  return null
}

export default Tour