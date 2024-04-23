'use client'

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'
import { Button } from '../Button'
import { useTranslations } from 'next-intl'

export function Sidebar() {
  const t = useTranslations()

  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-700 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.CollapsibleTrigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6 text-zinc-600 dark:text-zinc-100" />
          </Button>
        </Collapsible.CollapsibleTrigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder={t('MENU_LATERAL_PESQUISA')} />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title={t('MENU_LATERAL_INICIO')} icon={Home} />
          <NavItem title={t('MENU_LATERAL_DASHBOARD')} icon={BarChart} />
          <NavItem title={t('MENU_LATERAL_PROJETOS')} icon={SquareStack} />
          <NavItem title={t('MENU_LATERAL_TAREFAS')} icon={CheckSquare} />
          <NavItem title={t('MENU_LATERAL_REPORTAR')} icon={Flag} />
          <NavItem title={t('MENU_LATERAL_USUARIOS')} icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title={t('MENU_LATERAL_SUPORTE')} icon={LifeBuoy} />
            <NavItem title={t('MENU_LATERAL_CONFIGURACOES')} icon={Cog} />
          </nav>
          <UsedSpaceWidget />

          <div className="dark:bg-z7 h-px bg-zinc-200 dark:bg-zinc-700" />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
