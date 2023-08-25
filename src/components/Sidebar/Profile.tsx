import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        width={40}
        height={40}
        alt=""
        src="https://github.com/pedroalbertoveber.png"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Pedro Alberto
        </span>
        <span className="truncate text-sm text-zinc-500">
          pedro.veber@outlook.com
        </span>
      </div>

      <Button variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
