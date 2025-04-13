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
                <div className='text-sm'>
                    I'm a senior graduating next month with a Bachelor's in Computer Science and a minor in Mathematics. After graduation, I'll be joining <u><a href="https://lucid.co" target="_blank" rel="noopener noreferrer">Lucid Software</a></u> as a Software Engineer. I have experience building full-stack applications, including NetMax for L3Harris, developing websites with React, and creating mobile apps with React Native. I'm proficient in <strong>Python</strong>, <strong>JavaScript</strong>, and <strong>C++</strong>. My interests include algorithms, databases, and system design. Outside of computer science, I enjoy rock climbing, playing billiards, and pickleball.
                </div>
            </>
        )
    },
    {
        name: "Gavin Kerr",
        photo_url: Gavin_NetMax,
        personal_website: "https://gavinkerr.dev/",
        email: "me@gavinkerr.dev",
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
                    Bio:
                </div>
                <div className='text-sm'>
                    Hey there! My name is Gavin Kerr, and I am graduating at the end of this month with a bachelor's in computer science from the University of Utah. I'm interested in a wide variety of software development topics, including but not limited to full stack development, networking, and automation. After graduation I'll be joining <u><a href="https://lindellyachts.com" target="_blank" rel="noopener noreferrer">Lindell Yachts</a></u> in Washington State to work on internal software tools and automation on board. I have experience building full stack applications, like NetMax, and other projects like <u><a href="https://gavinkerr.dev/#/vesselview" target="_blank" rel="noopener noreferrer">VesselView</a></u> at work, along with iOS app development with SwiftUI, and some hardware experience with microcontrollers.  Outside of work and projects I enjoy snow skiing, wake surfing, working on my car, and Formula 1. 
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
        ],
        children: (
            <>
                <div className='text-xl'>
                    Bio:
                </div>
                <div className='text-sm'>
                    I'm a computer science honors student at the University of Utah, interested in networking, system design, and computer graphics. I enjoy building full-stack systems that work well and are easy to use. Some of my projects have involved data transfer protocols, 3D graphics with OpenGL, and tools for testing network performance. These projects have helped me figure out what kinds of technical challenges I enjoy solving most.
                    <br />
                    <br />
                    I also work as a teaching assistant for the Computer Science Discrete Structures course. I run lab sessions each week and help write homework and exam problems. It's been a great way to get better at explaining concepts and supporting other students. When I'm not working on school-related stuff, I like to get outside and spend time backpacking or skiing.
                </div>
            </>
        )
    },
    {
        name: "Ryan Taffe",
        photo_url: Ryan_NetMax,
        linkedin: "https://www.linkedin.com/in/ryan-taffe-549b3b260/",
        tasks: [
            "Frontend",
            "Backend",
        ],
        children: (
            <>
                <div className='text-xl'>
                    Bio:
                </div>
                <div className='text-sm'>
                    I'm a computer science graduate with a strong passion for algorithms, problem-solving, and applied machine learning. My experience spans competitive programming, academic research, and industry internships. I've led machine learning projects like income classification and network testing analysis, and served as a TA for computer systems. At <u><a href="https://polly.io" target="_blank" rel="noopener noreferrer">Polly.io</a></u>, I optimized Kubernetes deployments and developed full-stack solutions, gaining hands-on exposure to production ML systems. I'm driven by the goal of bridging academic research with real-world AI applications and am pursuing a Master's to deepen my impact in research and development.
                </div>
            </>
        )
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
                        email={member.email}
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
