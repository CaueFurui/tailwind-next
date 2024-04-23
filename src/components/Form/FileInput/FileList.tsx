'use client'

import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from '@/components/Form/FileInput/FileItem'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
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
