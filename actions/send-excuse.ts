"use server"

import { sendExcuseToEmail } from "@/lib/email"

export async function sendExcuseEmail(formData: FormData) {
  const excuse = formData.get("excuse") as string

  if (!excuse || excuse.trim().length === 0) {
    return { success: false, message: "La excusa no puede estar vacía" }
  }

  if (excuse.trim().length < 10) {
    return { success: false, message: "La excusa debe tener al menos 10 caracteres" }
  }

  if (excuse.trim().length > 500) {
    return { success: false, message: "La excusa no puede tener más de 500 caracteres" }
  }

  try {
    // Enviar email usando Nodemailer
    const result = await sendExcuseToEmail(excuse.trim())

    if (result.success) {
      return {
        success: true,
        message: "¡Excusa enviada correctamente! La revisaremos pronto. 🎉",
      }
    } else {
      console.error("Error en el envío:", result.error)
      return {
        success: false,
        message: "Hubo un problema al enviar la excusa. Intentá de nuevo más tarde.",
      }
    }
  } catch (error) {
    console.error("Error al procesar excusa:", error)
    return {
      success: false,
      message: "Error interno del servidor. Intentá de nuevo más tarde.",
    }
  }
}
