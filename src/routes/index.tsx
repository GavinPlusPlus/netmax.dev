
import { createFileRoute } from '@tanstack/react-router'
import Team_NetMax from '@/assets/photos/Team_NetMax.avif'
import { ImageWithSkeleton } from '@/components/image-with-skeleton'
import Marquee from '@/components/ui/marquee';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        className="min-w-sm max-w-2xl rounded-lg mt-4 mx-auto"
        aspectRatio='aspect-[3/2]'
        />

      <br/>

      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>
            What is it?
          </CardTitle>
        </CardHeader>
        <CardContent>
          NetMax is an application designed to simplify the process of managing and 
        </CardContent>
      </Card>

      
    </div>
  )
}
