import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

function Root({ ...props }: RootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    />
  )
}

type PrefixProps = ComponentProps<'div'>

function Prefix({ ...props }: PrefixProps) {
  return <div {...props} />
}

type ControlProps = ComponentProps<'input'>

function Control({ ...props }: ControlProps) {
  return (
    <input
      type="text"
      className="flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 focus:outline-none"
      placeholder="Search"
      {...props}
    />
  )
}

export { Root, Prefix, Control }
