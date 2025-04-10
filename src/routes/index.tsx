
import { createFileRoute } from '@tanstack/react-router'
import Team_NetMax from '@/assets/photos/Team_NetMax.avif'
import { ImageWithSkeleton } from '@/components/image-with-skeleton'
import Marquee from '@/components/ui/marquee';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

const marquee_items = ["NetMax", "L3Harris", "NetMax", "L3Harris", "NetMax", "L3Harris"];

function RouteComponent() {
  
  return (
    <div className='w-full transition-all animate-fade-in'>

      <Marquee items={marquee_items} />
      

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
