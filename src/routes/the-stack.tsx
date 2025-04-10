import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Marquee from '@/components/ui/marquee'
import { createFileRoute } from '@tanstack/react-router'
import SW_Diagram from '@/assets/NetMax_SW_Diagram.png'
import { ImageWithSkeleton } from '@/components/image-with-skeleton'

export const Route = createFileRoute('/the-stack')({
    component: RouteComponent,
})

function RouteComponent() {

    return (
        <div className='w-full transition-all animate-fade-in'>
            <Marquee items={[ "The Stack", "The Stack", "The Stack", "The Stack", "The Stack", "The Stack", ]} />

            <br />

            <Card>
                <CardHeader>
                    <div className='text-2xl'>
                        Architecture Diagram
                    </div>
                </CardHeader>
                <CardContent>
                    <ImageWithSkeleton
                        src={SW_Diagram}
                        alt="A diagram of the NetMax architecture"
                        className="max-w-2xl mt-4 mx-auto"
                        aspectRatio=''
                    />
                </CardContent>
            </Card>

        </div>

    )
}
