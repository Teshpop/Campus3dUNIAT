import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function CardDemo() {
  return (
    <Card className="absolute top-0 w-full bg-linear-to-br from-orange-500/95 to-orange-600/95
                     backdrop-blur-sm border-orange-400/30
                     shadow-2xl shadow-orange-900/50">
      <CardHeader>
        <CardTitle className="text-center uppercase text-2xl font-bold text-white leading-tight">
          Bienvenido a UNIAT
          <br />
          <span className="text-white/90">San Luis Potosí</span>
        </CardTitle>
      </CardHeader>
      <CardDescription className="text-center text-lg text-white/75 font-medium">
        <h2>El campus donde la imaginación se programa y los mundos se crean.</h2>
      </CardDescription>
    </Card>
  )
}

export default CardDemo
