'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <TabItem
              value="Tab1"
              title="My details"
              isSelected={currentTab === 'Tab1'}
            />
            <TabItem
              value="Tab2"
              title="Profile"
              isSelected={currentTab === 'Tab2'}
            />
            <TabItem
              value="Tab3"
              title="Password"
              isSelected={currentTab === 'Tab3'}
            />
            <TabItem
              value="Tab4"
              title="Team"
              isSelected={currentTab === 'Tab4'}
            />
            <TabItem
              value="Tab5"
              title="Plan"
              isSelected={currentTab === 'Tab5'}
            />
            <TabItem
              value="Tab6"
              title="Billing"
              isSelected={currentTab === 'Tab6'}
            />
            <TabItem
              value="Tab7"
              title="Email"
              isSelected={currentTab === 'Tab7'}
            />
            <TabItem
              value="Tab8"
              title="Notifications"
              isSelected={currentTab === 'Tab8'}
            />
            <TabItem
              value="Tab9"
              title="Integrations"
              isSelected={currentTab === 'Tab9'}
            />
            <TabItem
              value="Tab10"
              title="API"
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
