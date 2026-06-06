import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const session = await getServerSession()

  if (!session) {
    redirect('/admin/login')
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>Panel Administrador</h1>
      <p>Bienvenido, {session.user?.email}</p>
    </div>
  )
}