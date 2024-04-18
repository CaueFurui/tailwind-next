'use client'

import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from '@/components/Form/FileInput/FileItem'
import { api } from '@/services'
import { useLocale } from 'next-intl'

export function FileList() {
  const { files } = useFileInput()
  const locale = useLocale()
  const [parent] = useAutoAnimate()

  async function handleCallApi() {
    try {
      const res = await api.get(`${locale}/account_types`)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div ref={parent} className="mt-4 space-y-3">
      <button type="button" onClick={handleCallApi}>
        Teste
      </button>
      {files.map((file) => {
        return (
          <FileItem
            state="error"
            key={file.name}
            name={file.name}
            size={file.size}
          />
        )
      })}
    </div>
  )
}
