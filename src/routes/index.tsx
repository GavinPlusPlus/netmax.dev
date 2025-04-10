
import { createFileRoute } from '@tanstack/react-router'
import Team_NetMax from '@/assets/photos/Team_NetMax.avif'
import { ImageWithSkeleton } from '@/components/image-with-skeleton'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return (
    <div className='w-full transition-all animate-fade-in'>

      <h1 className='text-6xl font-bold'>
        NetMax
      </h1>

      <ImageWithSkeleton
        src={Team_NetMax}
        alt="A photo of the NetMax team"
        className="w-full h-auto rounded-lg mt-4"
        aspectRatio='16/9'
        />
      <br/>

      
    </div>
  )
}
