"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Copy, Twitter, MessageCircle, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

// Excusas organizadas por nivel de creatividad
const excusasPorNivel = {
  suave: [
    "Lo siento, tuve un problema con mi alarma esta mañana",
    "Me surgió una emergencia familiar de último momento",
    "El tráfico estaba imposible, no pude llegar antes",
    "Tuve una reunión que se extendió más de lo esperado",
    "Mi teléfono se quedó sin batería y no vi tu mensaje",
    "Estaba terminando un proyecto urgente y perdí la noción del tiempo",
    "Tuve un problema con mi conexión a internet",
    "No me sentía muy bien, necesitaba descansar un poco",
  ],
  creativa: [
    "Mi gato se comió mi tarea... y también mi motivación",
    "Estaba ocupado salvando el mundo de los calcetines desparejados",
    "Mi WiFi tiene depresión y no quiere conectarse",
    "Mi teléfono se fue de vacaciones sin avisarme",
    "Tuve que enseñarle a mi planta a hacer fotosíntesis",
    "Mi café me abandonó cuando más lo necesitaba",
    "Estaba en una misión secreta para encontrar mis llaves",
    "Mi motivación se fue de viaje y no dejó dirección de contacto",
  ],
  caotica: [
    "Me abdujeron aliens... pero me devolvieron porque hablo mucho",
    "Un unicornio me pidió direcciones y me perdí ayudándolo",
    "Mi sombra se fue a almorzar y no ha vuelto",
    "Estaba negociando la paz mundial con mi perro",
    "Mi GPS me llevó a 1985 y tuve que volver caminando",
    "Tuve que meditar sobre la existencia de los lunes",
    "Mi sentido común se fue a comprar cigarrillos y nunca volvió",
    "Estaba ocupado siendo fabuloso, es un trabajo de tiempo completo",
  ],
}

export default function ExcuseGenerator() {
  const [excusaActual, setExcusaActual] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [nivelCreatividad, setNivelCreatividad] = useState(1)
  const [darkMode, setDarkMode] = useState(false)
  const [animateExcuse, setAnimateExcuse] = useState(false)

  // Determinar nivel de creatividad basado en el slider
  const getNivelTexto = () => {
    if (nivelCreatividad <= 0.33) return "suave"
    if (nivelCreatividad <= 0.66) return "creativa"
    return "caotica"
  }

  const generarExcusa = () => {
    setIsGenerating(true)
    setAnimateExcuse(false)

    setTimeout(() => {
      const nivel = getNivelTexto()
      const excusasDisponibles = excusasPorNivel[nivel]
      const excusaRandom = excusasDisponibles[Math.floor(Math.random() * excusasDisponibles.length)]
      setExcusaActual(excusaRandom)
      setIsGenerating(false)
      setAnimateExcuse(true)
    }, 800)
  }

  const copiarExcusa = async () => {
    if (!excusaActual) return

    try {
      await navigator.clipboard.writeText(excusaActual)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Error al copiar:", err)
    }
  }

  const compartirEnX = () => {
    if (!excusaActual) return
    const texto = encodeURIComponent(`"${excusaActual}" - Generada en Excusas Online - www.excusas.online`)
    window.open(`https://twitter.com/intent/tweet?text=${texto}`, "_blank")
  }

  const compartirEnWhatsApp = () => {
    if (!excusaActual) return
    const texto = encodeURIComponent(`"${excusaActual}" - Generada  en Excusas Online - www.excusas.online`)
    window.open(`https://wa.me/?text=${texto}`, "_blank")
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Efecto para resetear la animación cuando cambia la excusa
  useEffect(() => {
    if (excusaActual) {
      setAnimateExcuse(true)
    }
  }, [excusaActual])

  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center p-4 transition-colors duration-300",
        darkMode ? "bg-slate-900 text-slate-100" : "bg-gradient-to-br from-sky-50 via-slate-50 to-indigo-50",
      )}
    >
      <Card
        className={cn(
          "w-full max-w-2xl p-8 shadow-lg border-0 transition-colors duration-300",
          darkMode ? "bg-slate-800 border-slate-700" : "bg-white/90 backdrop-blur-sm",
        )}
      >
        {/* Hero simpático */}
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🤷‍♂️</div>
          <h1
            className={cn(
              "text-4xl md:text-5xl font-bold mb-3 tracking-tight",
              darkMode ? "text-white" : "text-slate-800",
            )}
          >
            Excusas Online
          </h1>
          <p className={cn("text-lg", darkMode ? "text-slate-300" : "text-slate-600")}>
            Generador de excusas para cuando necesitas una salida creativa
          </p>
        </div>

        {/* Slider para elegir tono */}
        <div className="mb-8">
          <div className="flex justify-between mb-2 text-sm font-medium">
            <span className={darkMode ? "text-slate-400" : "text-slate-500"}>Suave</span>
            <span className={darkMode ? "text-slate-400" : "text-slate-500"}>Creativa</span>
            <span className={darkMode ? "text-slate-400" : "text-slate-500"}>Caótica</span>
          </div>
          <Slider
            defaultValue={[0.5]}
            max={1}
            step={0.01}
            value={[nivelCreatividad]}
            onValueChange={(value) => setNivelCreatividad(value[0])}
            className={darkMode ? "py-4" : "py-4"}
          />
          <div className="text-center mt-1">
            <span
              className={cn(
                "inline-block px-3 py-1 rounded-full text-sm font-medium",
                darkMode ? "bg-indigo-900/50 text-indigo-200" : "bg-indigo-100 text-indigo-800",
              )}
            >
              Modo: {getNivelTexto().charAt(0).toUpperCase() + getNivelTexto().slice(1)}
            </span>
          </div>
        </div>

        {/* Botón enorme */}
        <Button
          onClick={generarExcusa}
          disabled={isGenerating}
          className={cn(
            "w-full py-8 text-xl font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg",
            darkMode
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
              : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white",
          )}
        >
          {isGenerating ? "Pensando..." : "¡Dame una excusa!"}
        </Button>

        {/* Resultado con animación */}
        <div
          className={cn(
            "mt-8 p-6 rounded-xl border transition-all duration-300",
            darkMode ? "bg-slate-700/50 border-slate-600" : "bg-slate-50 border-slate-200",
            !excusaActual && "opacity-50",
          )}
        >
          <p
            className={cn(
              "text-xl text-center transition-all duration-500",
              animateExcuse ? "animate-bounce-once" : "",
              darkMode ? "text-slate-200" : "text-slate-700",
            )}
          >
            {excusaActual || "Tu excusa aparecerá aquí..."}
          </p>
        </div>

        {/* Botones de acción */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Button
            onClick={copiarExcusa}
            disabled={!excusaActual || isGenerating}
            variant={darkMode ? "outline" : "secondary"}
            className={cn("flex-1 py-6", darkMode ? "border-slate-600 hover:bg-slate-700" : "")}
          >
            <Copy className="mr-2 h-4 w-4" />
            {isCopied ? "¡Copiado!" : "Copiar"}
          </Button>

          <Button
            onClick={compartirEnX}
            disabled={!excusaActual || isGenerating}
            variant={darkMode ? "outline" : "secondary"}
            className={cn("flex-1 py-6", darkMode ? "border-slate-600 hover:bg-slate-700" : "")}
          >
            <Twitter className="mr-2 h-4 w-4" />
            Compartir en X
          </Button>

          <Button
            onClick={compartirEnWhatsApp}
            disabled={!excusaActual || isGenerating}
            variant={darkMode ? "outline" : "secondary"}
            className={cn("flex-1 py-6", darkMode ? "border-slate-600 hover:bg-slate-700" : "")}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        {/* Footer con modo oscuro */}
        <div className="mt-10 pt-4 border-t flex justify-between items-center">
          <p
            className={cn("text-sm", darkMode ? "text-slate-400 border-slate-700" : "text-slate-500 border-slate-200")}
          >
            💡 Úsalo con responsabilidad y humor
          </p>

          <div className="flex items-center">
            <Sun className={cn("h-4 w-4 mr-2", darkMode ? "text-slate-400" : "text-amber-500")} />
            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
            <Moon className={cn("h-4 w-4 ml-2", darkMode ? "text-indigo-300" : "text-slate-400")} />
          </div>
        </div>
      </Card>
    </div>
  )
}
