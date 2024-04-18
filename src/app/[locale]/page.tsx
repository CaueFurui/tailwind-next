'use client'

import { Button } from '@/components/Button'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'
import * as Input from '@/components/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
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
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { setTheme } = useTheme()
  const { push } = useRouter()
  const tSettings = useTranslations('Settings')
  const tButtons = useTranslations('Buttons')

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
          {tSettings('header.title')}
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
              {tSettings('personalInfo.title')}
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {tSettings('personalInfo.description')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              {tButtons('cancel')}
            </Button>
            <Button type="submit" variant="primary" form="settings">
              {tButtons('save')}
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
              {tSettings('settingsForm.name')}
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
                  {tSettings('settingsForm.lastName')}
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
              {tSettings('settingsForm.email')}
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
              {tSettings('settingsForm.photo.title')}
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {tSettings('settingsForm.photo.description')}
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
              {tSettings('settingsForm.role')}
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
              {tSettings('settingsForm.country.title')}
            </label>
            <Select placeholder={tSettings('settingsForm.country.placeholder')}>
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          {/* Timezone */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {tSettings('settingsForm.timezone.title')}
            </label>
            <Select
              placeholder={tSettings('settingsForm.timezone.placeholder')}
            >
              <SelectItem
                value="pst"
                text="Pacific Standard Time (PST) UTC−08:00"
              />
              <SelectItem
                value="america/sao-paulo"
                text="America/Sao Paulo UTC-03:00"
              />
            </Select>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              {tSettings('settingsForm.bio.title')}
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {tSettings('settingsForm.bio.description')}
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
              {tSettings('settingsForm.portfolio.title')}
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                {tSettings('settingsForm.portfolio.description')}
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
              {tButtons('cancel')}
            </Button>
            <Button type="submit" variant="primary" form="settings">
              {tButtons('save')}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
