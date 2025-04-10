import Marquee from '@/components/ui/marquee'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/the-stack')({
    component: RouteComponent,
})

function RouteComponent() {

    return (
        <div className='w-full transition-all animate-fade-in'>
            <Marquee items={[ "The Stack", "The Stack", "The Stack", "The Stack", "The Stack", "The Stack", ]} />

            <br />

        </div>

    )
}
