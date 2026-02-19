import {Card, CardHeader, CardTitle, CardDescription} from '@/Components/ui/card'

const BaseCard = ({ title, description}) => {
  return (
    <Card className="absolute top-0 w-full bg-linear-to-br from-orange-500/95 to-orange-600/95 backdrop-blur-sm 
                    border-orange-400/30 shadow-2xl shadow-orange-900/50">
        <CardHeader>
            <CardTitle className="text-center uppercase text-2xl font-bold text-white leading-tight">
                <h1>{title}</h1>
            </CardTitle>
        </CardHeader>
        <CardDescription className="text-center text-lg text-white/75 font-medium">
            <h2>{description}</h2>
        </CardDescription>
    </Card>
  )
}

export default BaseCard