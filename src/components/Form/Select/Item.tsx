'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type ItemProps = Select.SelectItemProps & {
  text: string
}

export function Item({ text, ...props }: ItemProps) {
  return (
    <Select.Item
      className="gap=2 flex items-center justify-between px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
