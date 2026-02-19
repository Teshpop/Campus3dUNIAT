import BaseCard from './BaseCard'
import {CardHeader, CardTitle, CardDescription} from '@/Components/ui/card'

const DiningRoom = () => {
  return (
    <BaseCard>
        <CardHeader>
            <CardTitle className="text-center uppercase text-2xl font-bold text-white leading-tight">
                <h1>Comedor</h1>
            </CardTitle>
        </CardHeader>
        <CardDescription className="text-center text-lg text-white/75 font-medium">
            <h2>Un espacio abierto diseñado para el descanso y la convivencia, donde los estudiantes pueden relajarse, comer y compartir experiencias fuera del aula.</h2>
        </CardDescription>
    </BaseCard>
  )
}

export default DiningRoom