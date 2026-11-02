import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const itemClassName =
  'block px-4 py-2 text-sm text-black/90 dark:text-white/80 data-focus:bg-gray-500 data-focus:dark:bg-gray-600/90'

export function NavMenuToggle() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm text-black/80 dark:text-white/80">
          Menu
          +
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-3 mt-1 z-10 w-56 origin-top-left backdrop-blur-sm rounded-md bg-white/80 shadow-lg ring-1 ring-white/10 focus:outline-hidden dark:bg-[#161C2C] transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a href="#experience" className={itemClassName}>
              Experiencia
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#proyectos" className={itemClassName}>
              Proyectos
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#sobre-mi" className={itemClassName}>
              Sobre mi
            </a>
          </MenuItem>
          <MenuItem>
            <a href="https://blog-armandocode.vercel.app/" target='_blank' className={itemClassName}>
              Blog
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
