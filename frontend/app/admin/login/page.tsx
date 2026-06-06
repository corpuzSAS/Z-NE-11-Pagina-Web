'use client'

import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      gap: '20px'
    }}>
      <h1>Panel Administrador</h1>
      <p>Solo acceso autorizado</p>
      <button
        onClick={() => signIn('google', { callbackUrl: '/admin' })}
        style={{
          padding: '12px 24px',
          backgroundColor: '#4285F4',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Iniciar sesión con Google
      </button>
    </div>
  )
}