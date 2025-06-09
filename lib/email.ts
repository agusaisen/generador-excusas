import nodemailer from "nodemailer"

// Configuración del transportador de email
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Tu email de Gmail
      pass: process.env.GMAIL_APP_PASSWORD, // Tu contraseña de aplicación de Gmail
    },
  })
}

export async function sendExcuseToEmail(excuse: string) {
  try {
    const transporter = createTransporter()

    // Verificar la conexión
    await transporter.verify()

    // Configurar el email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "excusasonline@gmail.com",
      subject: "🎭 Nueva excusa enviada desde Excusas Online",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🎭 Nueva Excusa Recibida</h1>
            <p style="color: #f0f0f0; margin: 10px 0 0 0;">Desde Excusas Online</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; border-left: 4px solid #667eea;">
            <h2 style="color: #333; margin-top: 0;">💭 Excusa enviada:</h2>
            <p style="font-size: 18px; line-height: 1.6; color: #555; font-style: italic; background: white; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef;">
              "${excuse}"
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; color: #1976d2; font-size: 14px;">
              📅 <strong>Fecha:</strong> ${new Date().toLocaleString("es-AR", {
                timeZone: "America/Argentina/Buenos_Aires",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p style="margin: 5px 0 0 0; color: #1976d2; font-size: 14px;">
              🌐 <strong>Origen:</strong> Excusas Online - Generador de Excusas
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              Este email fue enviado automáticamente desde el formulario de Excusas Online
            </p>
          </div>
        </div>
      `,
      text: `
Nueva excusa recibida desde Excusas Online

Excusa: "${excuse}"

Fecha: ${new Date().toLocaleString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
      })}

---
Este email fue enviado automáticamente desde el formulario de Excusas Online
      `,
    }

    // Enviar el email
    const result = await transporter.sendMail(mailOptions)

    console.log("Email enviado exitosamente:", result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error("Error al enviar email:", error)
    return { success: false, error: error.message }
  }
}
