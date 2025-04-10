import { createFileRoute } from '@tanstack/react-router'

import Gavin_NetMax from '@/assets/photos/Gavin_NetMax.avif'
import Dax_NetMax from '@/assets/photos/Dax_NetMax.avif'
import Ryan_NetMax from '@/assets/photos/Ryan_NetMax.avif'
import Jack_NetMax from '@/assets/photos/Jack_NetMax.avif'
import Marquee from '@/components/ui/marquee'
import { TeamMemberCard } from '@/components/team-member-card'

export const Route = createFileRoute('/the-team')({
    component: RouteComponent,
})

const team_data = [
    {
        name: "Dax McPartland",
        photo_url: Dax_NetMax,
        personal_website: "https://daxmcpartland.github.io/",
        tasks: [
            "Frontend",
            "Backend",
            "Real-Time Analytics",
            "Scheduling",
        ]
    },
    {
        name: "Gavin Kerr",
        photo_url: Gavin_NetMax,
        personal_website: "https://gavinkerr.dev/",
        tasks: [
            "Frontend",
            "Backend",
            "Real-Time Analytics",
            "Server Side Events",
            "Scheduling",
        ],
        children: (
            <>
                <div className='text-xl'>
                    Description:
                </div>
                <div className='text-md'>
                    
                </div>
            </>
        )
    },
    {
        name: "John (Jack) Severson",
        photo_url: Jack_NetMax,
        tasks: [
            "Frontend",
            "Backend",
            "Python Integration",
            "TRex Integration",
        ]
    },
    {
        name: "Ryan Taffe",
        photo_url: Ryan_NetMax,
        tasks: [
            "Frontend",
            "Backend",
            "Real-Time Analytics"
        ]
    }
]

function RouteComponent() {

    return (
        <div className='w-full transition-all animate-fade-in'>
            <Marquee items={["Meet The Team", "Meet The Team", "Meet The Team", "Meet The Team",]} />

            <br />

            {team_data.map((member, index) => (
                <div className='my-2'>
                    <TeamMemberCard
                        key={index}
                        name={member.name}
                        photo_url={member.photo_url}
                        tasks={member.tasks}
                        personal_website={member.personal_website}
                        className="sm:w-min-xs md:w-min-sm lg:w-min-md"
                    >
                        {member.children}
                    </TeamMemberCard> 
                </div>
            ))}
        </div>
    );

}
