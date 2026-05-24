'use client'

import { CldUploadWidget } from 'next-cloudinary'
import { useState } from 'react'

export interface CloudinaryResult {
  public_id: string
  secure_url: string
  width: number
  height: number
}

interface Props {
  onUpload: (result: CloudinaryResult) => void
  folder?: string
}

export function ImageUploader({ onUpload, folder = 'products' }: Props) {
  const [preview, setPreview] = useState<string | null>(null)

  return (
    <div>
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        options={{
          folder,
          sources: ['local', 'camera'],
          maxFiles: 1,
          maxFileSize: 5_000_000,
          clientAllowedFormats: ['jpg', 'png', 'webp'],
        }}
        onSuccess={(result) => {
          const info = result.info as CloudinaryResult
          setPreview(info.secure_url)
          onUpload(info)
        }}
      >
        {({ open }) => (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              type="button"
              onClick={() => open()}
              style={{
                padding: '10px 20px',
                border: '1px dashed #ccc',
                borderRadius: '8px',
                cursor: 'pointer',
                background: 'transparent',
              }}
            >
              Subir imagen
            </button>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            )}
          </div>
        )}
      </CldUploadWidget>
    </div>
  )
}