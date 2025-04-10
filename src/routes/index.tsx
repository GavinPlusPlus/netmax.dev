import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return (
    <div className='w-full transition-all animate-fade-in'>

      <h1 className='text-6xl font-bold'>
        NetMax
      </h1>

      <br/>

      
    </div>
  )
}
