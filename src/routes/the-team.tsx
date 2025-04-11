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
        linkedin: "https://www.linkedin.com/in/dax-mcpartland/",
        tasks: [
            "Frontend",
            "Backend",
            "Real-Time Analytics",
            "Scheduling",
        ],
        children: (
            <>
                <div className='text-xl'>
                    Bio:
                </div>
                <div className='text-md'>
                    I'm a senior graduating next month with a Bachelor’s in Computer Science and a minor in Mathematics. After graduation, I'll be joining <u><a href="https://lucid.co" target="_blank" rel="noopener noreferrer">Lucid Software</a></u> as a Software Engineer. I have experience building full-stack applications, including NetMax for L3Harris, developing websites with React, and creating mobile apps with React Native. I'm proficient in <strong>Python</strong>, <strong>JavaScript</strong>, and <strong>C++</strong>. My interests include algorithms, databases, and system design. Outside of computer science, I enjoy rock climbing, playing billiards, and pickleball.   
                </div>
            </>
        )
    },
    {
        name: "Gavin Kerr",
        photo_url: Gavin_NetMax,
        personal_website: "https://gavinkerr.dev/",
        linkedin: "https://www.linkedin.com/in/kerrgavin/",
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
        linkedin: "https://www.linkedin.com/in/jack-severson-26618b255/",
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
        linkedin: "https://www.linkedin.com/in/ryan-taffe-549b3b260/",
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
                        linkedin={member.linkedin}
                        className="sm:w-min-xs md:w-min-sm lg:w-min-md"
                    >
                        {member.children}
                    </TeamMemberCard> 
                </div>
            ))}
        </div>
    );

}
