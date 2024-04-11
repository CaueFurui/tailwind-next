'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
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
        <TabItem value="Tab4" title="Team" isSelected={currentTab === 'Tab4'} />
        <TabItem value="Tab5" title="Plan" isSelected={currentTab === 'Tab5'} />
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
    </Tabs.Root>
  )
}
