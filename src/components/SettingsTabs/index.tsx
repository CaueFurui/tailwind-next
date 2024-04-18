'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')
  const t = useTranslations('Settings')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="Tab1"
              title={t('tabs.tab1')}
              isSelected={currentTab === 'Tab1'}
            />
            <TabItem
              value="Tab2"
              title={t('tabs.tab2')}
              isSelected={currentTab === 'Tab2'}
            />
            <TabItem
              value="Tab3"
              title={t('tabs.tab3')}
              isSelected={currentTab === 'Tab3'}
            />
            <TabItem
              value="Tab4"
              title={t('tabs.tab4')}
              isSelected={currentTab === 'Tab4'}
            />
            <TabItem
              value="Tab5"
              title={t('tabs.tab5')}
              isSelected={currentTab === 'Tab5'}
            />
            <TabItem
              value="Tab6"
              title={t('tabs.tab6')}
              isSelected={currentTab === 'Tab6'}
            />
            <TabItem
              value="Tab7"
              title={t('tabs.tab7')}
              isSelected={currentTab === 'Tab7'}
            />
            <TabItem
              value="Tab8"
              title={t('tabs.tab8')}
              isSelected={currentTab === 'Tab8'}
            />
            <TabItem
              value="Tab9"
              title={t('tabs.tab9')}
              isSelected={currentTab === 'Tab9'}
            />
            <TabItem
              value="Tab10"
              title={t('tabs.tab10')}
              isSelected={currentTab === 'Tab10'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
