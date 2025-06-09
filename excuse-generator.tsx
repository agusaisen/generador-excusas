"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, Zap, Coffee, Clock, Copy, Check } from "lucide-react"

const excusas = [
  "Mi gato se comió mi tarea... y también mi motivación",
  "Estaba ocupado salvando el mundo de los calcetines desparejados",
  "Mi WiFi tiene depresión y no quiere conectarse",
  "Un unicornio me pidió direcciones y me perdí ayudándolo",
  "Estaba en una reunión muy importante con mi almohada",
  "Mi teléfono se fue de vacaciones sin avisarme",
  "Tuve que enseñarle a mi planta a hacer fotosíntesis",
  "Me quedé atrapado en un bucle infinito de videos de gatitos",
  "Mi sombra se fue a almorzar y no ha vuelto",
  "Estaba negociando la paz mundial con mi perro",
  "Mi café me abandonó cuando más lo necesitaba",
  "Tuve que explicarle a mi computadora cómo funciona la vida",
  "Me secuestraron aliens... pero me devolvieron porque hablo mucho",
  "Estaba ocupado contando todas las estrellas del universo",
  "Mi cerebro decidió tomarse el día libre sin consultarme",
  "Tuve que rescatar a mi dignidad que se había perdido",
  "Estaba en una misión secreta para encontrar mis llaves",
  "Mi motivación se fue de viaje y no dejó dirección de contacto",
  "Tuve que meditar sobre la existencia de los lunes",
  "Mi sentido común se fue a comprar cigarrillos y nunca volvió",
  "Estaba ocupado siendo fabuloso, es un trabajo de tiempo completo",
  "Mi GPS me llevó a 1985 y tuve que volver caminando",
  "Tuve que enseñarle modales a mi despertador",
  "Estaba en terapia con mi procrastinación",
  "Mi suerte se fue de huelga indefinida",
]

export default function Component() {
  const [excusaActual, setExcusaActual] = useState("¡Haz clic para generar tu excusa perfecta!")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const generarExcusa = () => {
    setIsGenerating(true)

    setTimeout(() => {
      const excusaRandom = excusas[Math.floor(Math.random() * excusas.length)]
      setExcusaActual(excusaRandom)
      setIsGenerating(false)
    }, 800)
  }

  const copiarExcusa = async () => {
    if (excusaActual === "¡Haz clic para generar tu excusa perfecta!") return

    try {
      await navigator.clipboard.writeText(excusaActual)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Error al copiar:", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-teal-500 to-green-500 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
              🎭 Generador de Excusas
            </CardTitle>
            <p className="text-gray-600 text-lg">Para cuando necesitas una excusa creativa y divertida</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-dashed border-teal-200">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💭</div>
                <p
                  className={`text-lg leading-relaxed transition-all duration-500 ${
                    isGenerating ? "opacity-50 blur-sm" : "opacity-100"
                  }`}
                >
                  {isGenerating ? "Generando excusa épica..." : excusaActual}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={generarExcusa}
                disabled={isGenerating}
                className="flex-1 h-14 text-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    ¡Generar Excusa!
                  </>
                )}
              </Button>

              <Button
                onClick={copiarExcusa}
                disabled={excusaActual === "¡Haz clic para generar tu excusa perfecta!" || isGenerating}
                className="h-14 px-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCopied ? (
                  <>
                    <Check className="mr-2 h-5 w-5 text-white" />
                    ¡Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-5 w-5" />
                    Copiar
                  </>
                )}
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <Coffee className="h-6 w-6 mx-auto mb-1 text-yellow-600" />
                <p className="text-xs text-yellow-700 font-medium">Excusas de café</p>
              </div>
              <div className="text-center p-3 bg-teal-50 rounded-lg border border-teal-200">
                <Clock className="h-6 w-6 mx-auto mb-1 text-teal-600" />
                <p className="text-xs text-teal-700 font-medium">Llegadas tarde</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="text-lg mb-1">🐱</div>
                <p className="text-xs text-green-700 font-medium">Culpa a mascotas</p>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-lg mb-1">🚀</div>
                <p className="text-xs text-orange-700 font-medium">Súper creativas</p>
              </div>
            </div>

            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                💡 <strong>Tip:</strong> Usa estas excusas con moderación y siempre con humor
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
