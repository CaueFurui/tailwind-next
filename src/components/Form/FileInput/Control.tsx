'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export interface ControlProps extends ComponentProps<'input'> {}

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      {...props}
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
    />
  )
}
