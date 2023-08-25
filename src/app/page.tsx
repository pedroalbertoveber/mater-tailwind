import { SettingsTabs } from '@/components/SettingsTabs'

import * as Input from '@/components/Form/Input'
import * as FileInput from '@/components/Form/FileInput'
import * as Select from '@/components/Form/Select'
import { Bold, Italic, Link, List, Mail } from 'lucide-react'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between  border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <p className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </p>
          </div>

          <div className="space-x-2">
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save</Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>

            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control defaultValue="Pedro" id="firstName" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Veber" id="lastName" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="emailAddress"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>

              <Input.Control
                type="email"
                defaultValue="pedro.veber@outlook.com"
                id="emailAddress"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="emailAddress"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <Input.Root>
              <Input.Control
                type="text"
                defaultValue="Front-End Developer"
                id="role"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select.Root placeholder="Choose a country">
              <Select.Item text="Brazil" value="BR" />
              <Select.Item text="United States" value="US" />
              <Select.Item text="England" value="EN" />
              <Select.Item text="Spain" value="ES" />
              <Select.Item text="Italy" value="IT" />
              <Select.Item text="Canada" value="CA" />
            </Select.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <Select.Root placeholder="Choose a timezone">
              <Select.Item
                text="Pacific Standard Time (UTC-08:00)"
                value="(UTC-08:00)"
              />

              <Select.Item
                text="América São Paulo (UTC-03:00)"
                value="(UTC-03:00)"
              />
            </Select.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select.Root defaultValue="markdown" placeholder="">
                  <Select.Item text="Normal Text" value="normal" />

                  <Select.Item text="Markdown" value="markdown" />
                </Select.Root>

                <div className="flex items-center gap-1">
                  <Button variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                </div>
              </div>

              <Textarea
                defaultValue="I'm a full stack developer, based in Caxias do Sul, Brasil. Since 2022 I've been studying the best web development technologies."
                id="bio"
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="portfolio"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
