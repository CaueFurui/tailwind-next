'use client'

import { Button } from '@/components/Button'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'
import * as Input from '@/components/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import { api } from '@/services'
import {
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  Mail,
  Moon,
  Sun,
} from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type tipoDeContaType = {
  id: number
  titulo: string
}

export default function Home() {
  const { setTheme } = useTheme()
  const [tipoDeConta, setTipoDeConta] = useState<tipoDeContaType[]>([])
  const locale = useLocale()
  const { push } = useRouter()
  const t = useTranslations()

  useEffect(() => {
    api.get<tipoDeContaType[]>(`/tipos_de_conta`).then((res) => {
      const tipoDeContaTraduzido = res.data.map((item) => {
        return { id: item.id, titulo: t(`BD_${item.titulo}`) }
      })
      setTipoDeConta(tipoDeContaTraduzido)
    })
  }, [locale])

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
          {t('CONFIGURACOES_CABECALHO_TITULO')}
        </h1>
        <div className="flex gap-3">
          <Button variant="ghost" onClick={() => setTheme('light')}>
            <Sun />
          </Button>
          <Button variant="ghost" onClick={() => setTheme('dark')}>
            <Moon />
          </Button>
          <Button variant="ghost" onClick={() => push('/pt')}>
            <span className="text-3xl">🇧🇷</span>
          </Button>
          <Button variant="ghost" onClick={() => {}}>
            <span className="text-3xl">🇪🇸</span>
          </Button>
          <Button variant="ghost" onClick={() => push('/en')}>
            <span className="text-3xl">🇺🇸</span>
          </Button>
        </div>
      </div>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              {t('INFO_PESSOAIS_TITULO')}
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {t('INFO_PESSOAIS_DESC')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              {t('BOTOES_CANCELAR')}
            </Button>
            <Button type="submit" variant="primary" form="settings">
              {t('BOTOES_SALVAR')}
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          {/* Name */}
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {t('FORMULÁRIO_CONFIGURACOES_NOME')}
            </label>
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Caue" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only"
                >
                  {t('FORMULÁRIO_CONFIGURACOES_ULTIMO_NOME')}
                </label>

                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Furui" />
                </Input.Root>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {t('FORMULÁRIO_CONFIGURACOES_EMAIL')}
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="cauefurui@gmail.com"
              />
            </Input.Root>
          </div>

          {/* Photo */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {t('FORMULÁRIO_CONFIGURACOES_FOTO_TITULO')}
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {t('FORMULÁRIO_CONFIGURACOES_FOTO_DESC')}
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          {/* Role */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {t('FORMULÁRIO_CONFIGURACOES_CARGO')}
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Developer" />
            </Input.Root>
          </div>

          {/* Country */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {t('FORMULÁRIO_CONFIGURACOES_PAIS_TITULO')}
            </label>
            <Select
              placeholder={t('FORMULÁRIO_CONFIGURACOES_PAIS_PLACEHOLDER')}
            >
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          {/* Account type */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="accountType"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {t('FORMULÁRIO_CONFIGURACOES_TIPO_DE_CONTA_TITULO')}
            </label>
            <Select
              placeholder={t(
                'FORMULÁRIO_CONFIGURACOES_TIPO_DE_CONTA_PLACEHOLDER',
              )}
            >
              {tipoDeConta.map((tipo) => (
                <SelectItem
                  key={tipo.id}
                  value={tipo.titulo}
                  text={tipo.titulo}
                />
              ))}
            </Select>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {t('FORMULÁRIO_CONFIGURACOES_BIO_TITULO')}
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {t('FORMULÁRIO_CONFIGURACOES_BIO_DESC')}
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <TextArea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          {/* Portfolio */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="porfolio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {t('FORMULÁRIO_CONFIGURACOES_PORTFOLIO_TITULO')}
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {t('FORMULÁRIO_CONFIGURACOES_PORTFOLIO_DESC')}
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              {t('BOTOES_CANCELAR')}
            </Button>
            <Button type="submit" variant="primary" form="settings">
              {t('BOTOES_SALVAR')}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
