'use client'

import { ImageUploader, CloudinaryResult } from './components/ImageUploader'

export default function Home() {
  function handleUpload(result: CloudinaryResult) {
    console.log('✅ URL:', result.secure_url)
    console.log('🆔 Public ID:', result.public_id)
    alert('Imagen subida: ' + result.secure_url)
  }

  return (
    <main style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px' }}>Prueba Cloudinary</h1>
      <ImageUploader onUpload={handleUpload} />
    </main>
  )
}