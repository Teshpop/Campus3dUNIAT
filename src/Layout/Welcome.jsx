import { CardTitle, CardHeader, CardDescription} from '@/Components/ui/card'
import BaseCard from './BaseCard'

const Welcome = () => {
  return (
    <BaseCard>
       <CardHeader>
        <CardTitle className="text-center uppercase text-2xl font-bold text-white leading-tight">
          Bienvenido a UNIAT
          <br />
          <span className="text-white/90">San Luis Potosí</span>
        </CardTitle>
      </CardHeader>
      <CardDescription className="text-center text-lg text-white/75 font-medium">
        <h2>Donde tus ideas dejan de ser sueños y se vuelven proyectos reales.</h2>
      </CardDescription>
    </BaseCard>
  )
}

export default Welcome