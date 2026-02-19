import BaseCard from './BaseCard'
import {CardHeader, CardTitle, CardDescription, Card} from '@/Components/ui/card'

const ClassroomWhitoutPCs = () => {
  return (
    <BaseCard>
        <CardHeader>
            <CardTitle className="text-center uppercase text-2xl font-bold text-white leading-tight">
                <h1>Salones</h1>
            </CardTitle>
        </CardHeader>
        <CardDescription className="text-center text-lg text-white/75 font-medium">
            <h2>En estos espacios, los estudiantes aprenden, debaten y dan forma a las ideas que después transformarán en proyectos digitales.</h2>
        </CardDescription>
    </BaseCard>
  )
}

export default ClassroomWhitoutPCs