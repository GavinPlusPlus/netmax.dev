import { createFileRoute } from '@tanstack/react-router'
import Marquee from '@/components/ui/marquee';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export const Route = createFileRoute('/user-tutorial')({
    component: RouteComponent,
})

function RouteComponent() {

    return (
        <div className='w-full transition-all animate-fade-in'>
            <Marquee items={["User Tutorial", "User Tutorial", "User Tutorial", "User Tutorial",]} />

            <br />

            <iframe
                className='w-full h-[calc(100vh-300px)] rounded-base flex flex-col shadow-shadow border-2 gap-6 py-6 border-border bg-white text-foreground font-base'
                src="/public/docs/NetMax_Documentation.html"
                title="User Tutorial"
            />

            <Button
                className='w-full mt-5'
                onClick={() => {
                    window.open('/public/docs/NetMax_Documentation.html', '_blank');
                }}
            >
                <ExternalLink className='mr-2' />
                Open in new tab
            </Button>

        </div >
    );

}
