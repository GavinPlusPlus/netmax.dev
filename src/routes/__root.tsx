import { Nav } from '@/components/nav';
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import "../index.css"

const RootLayout = () => {

  return (
    <div className='transition-all animate-fade-in min-h-screen container mx-auto'>

      <header>
        <Nav />
      </header>

      <div className="flex-1 mx-auto w-[750px] max-w-full px-5 pb-10 pt-28">
        <Outlet />
      </div>

      <footer className='w-full'>
        <div className='mx-auto flex flex-row justify-center gap-3'>

        </div>
        <p className="text-center">© 2024-2025 NetMax and L3Harris</p>
      </footer>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </div>
  );

}

export const Route = createRootRoute({
  component: RootLayout,
})