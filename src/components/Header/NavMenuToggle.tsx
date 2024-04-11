import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function NavMenuToggle() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semiboldshadow-sm text-black/80 dark:text-white/80">
          Menu
          +
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-3 mt-1 z-10 w-56 origin-top-left backdrop-blur rounded-md bg-white/80 shadow-lg ring-1 ring-white/10 ring-opacity-5 focus:outline-none dark:bg-[#161C2C]">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#experience"
                  className={classNames(
                    active ? 'bg-gray-500 text-black/90 dark:bg-gray-600/90 dark:text-white/80' : 'text-black/90 dark:text-white/80',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Experiencia
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#proyectos"
                  className={classNames(
                    active ? 'bg-gray-500 text-black/90 dark:bg-gray-600/90 dark:text-white/80' : 'text-black/90 dark:text-white/80',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Proyectos
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#sobre-mi"
                  className={classNames(
                    active ? 'bg-gray-500 text-black/90 dark:bg-gray-600/90 dark:text-white/80' : 'text-black/90 dark:text-white/80',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Sobre mi
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://blog-armandocode.vercel.app/"
                  target='_blank'
                  className={classNames(
                    active ? 'bg-gray-500 text-black/90 dark:bg-gray-600/90 dark:text-white/80' : 'text-black/90 dark:text-white/80',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Blog
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}