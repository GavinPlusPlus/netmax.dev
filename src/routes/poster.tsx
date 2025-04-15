import { ImageWithSkeleton } from '@/components/image-with-skeleton'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'
import Team_Photo from '@/assets/photos/Team_NetMax.avif'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import L3_Logo from '@/assets/L3/L3_Full_Black.svg'
import NM_Logo from '@/assets/NM_Logo_Transparent.png'
import KSC_Logo from '@/assets/Utah/KSC_Logo.svg'
import U_Logo from '@/assets/Utah/ULogo_Horizontal.svg'
import Arch_Diagram from '@/assets/NetMax_SW_Diagram.png'
import QR_Code from '@/assets/NM_QR.png'
import { Boxes, BrainCircuit, ChartNetwork } from 'lucide-react'

import Analytics from '@/assets/screenshots/Analytics.png'
import HomeScreen from '@/assets/screenshots/HomeScreen.png'
import Swagger from '@/assets/screenshots/Swagger.png'

export const Route = createFileRoute('/poster')({
    component: RouteComponent,
})

function RouteComponent() {

    return (
        <>
        
        <div className='poster absolute top-0 left-0 h-[16in] w-[24in]'>
            <div className='min-h-screen flex m-4 text-center'>
                <div className='grid grid-cols-20 gap-8 mx-auto w-full'>
                    <div className='col-span-6'>

                        {/* Header */}
                        <div className='flex flex-col items-center text-center mb-4 h-30'>
                            <Separator className='w-full m-1 mb-4 fill-black border-1 rounded-2xl' />
                            <div className='flex flex-row justify-around items-center'>
                                <img src={L3_Logo} alt="L3 Logo" className='h-18' />
                            </div>
                            <Separator className='w-full m-1 mt-4 fill-black border-1 rounded-2xl' />
                        </div>

                        <div className='flex flex-col justify-between h-[85%]'>

                            {/* Team Photo */}
                            <Card className=''>
                                <CardHeader>
                                    <CardTitle className='text-4xl font-bold'>
                                        Meet the Team
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ImageWithSkeleton src={Team_Photo} alt="Team Photo" className='rounded-2xl' aspectRatio='aspect-[16/9]' />
                                    <div className='flex flex-col items-center text-center mt-2'>
                                        <p className='text-xl'><b>From left to right:</b> Ryan Taffe, Gavin Kerr, Jack (John) Severson, Dax McPartland</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className=''>
                                <CardHeader>
                                    <CardTitle className='text-4xl font-bold'>
                                        Key Features
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className='list-disc list-inside text-2xl'>
                                        <li>Real-time data collection and analysis</li>
                                        <li>Customizable user interface</li>
                                        <li>Integration with existing systems</li>
                                        <li>Scalable architecture for future growth</li>
                                        <li>Stored network profiles for consistent testing</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* New Box on Network Traffic Generation */}
                            <Card className=''>
                                <CardHeader>
                                    <CardTitle className='text-4xl font-bold'>
                                        Network Testing
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-2xl'>
                                        Network traffic generation is essential for network testing. It simulates real-world conditions, enabling engineers to identify performance bottlenecks and other issues under varying conditions.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className=''>
                                <CardHeader>
                                    <CardTitle className='text-4xl font-bold'>
                                        Acknowledgements
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className='text-2xl'>
                                    Special thanks to: L3Harris, Dr. David Bean, Kevin Gonzales, Aubrey Pratt, Cody Howell, and The Flux Research Group
                                </CardContent>
                            </Card>

                        </div>

                    </div>
                    <div className='col-span-8'>

                        {/* Header */}
                        <div className='flex flex-col items-center text-center mb-2 h-54'>
                            <Separator className='w-full m-1 mb-4 fill-black border-1 rounded-2xl' />
                            <img src={NM_Logo} alt="NetMax Logo" className='h-40' />
                            <Separator className='w-full m-1 mt-4 fill-black border-1 rounded-2xl' />
                        </div>

                        <div className='flex flex-col justify-between h-[80%]'>

                            <Card className=''>
                                <CardContent className='mt-16 ml-12'>
                                    <div className="relative w-170 h-125">
                                        <img src={HomeScreen} className="absolute object-cover rounded-xl shadow-lg top-0 left-0 z-10 rotate-[-10deg] scale-105" />
                                        <img src={Swagger} className="absolute object-cover rounded-xl shadow-lg top-12 left-12 z-20 rotate-[-5deg] scale-[102.5%]" />
                                        <img src={Analytics} className="absolute object-cover rounded-xl shadow-lg top-24 left-22 z-30 rotate" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className=''>
                                <CardHeader>
                                    <CardTitle className='text-4xl font-bold'>
                                        What is it?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className='grid grid-cols-8 gap-2 items-center mb-12'>
                                        <div>
                                            <BrainCircuit size={72} />
                                        </div>
                                        <div className='col-span-7'>
                                            <p className='text-3xl font-bold'>
                                                API Simplification
                                            </p>
                                            <p className='text-2xl'>
                                                Serving as a bridge between L3 Engineers and TRex, NetMax provides a streamlined experience for running and managing network tests.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-8 gap-2 items-center mb-12'>
                                        <div>
                                            <ChartNetwork size={72} />
                                        </div>
                                        <div className='col-span-7'>
                                            <p className='text-3xl font-bold'>
                                                Real Time Data Collection
                                            </p>
                                            <p className='text-2xl'>
                                                Powered by SignalR, NetMax provides real-time data collection and analysis for network performance metrics.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-8 gap-2 items-center mb-12'>
                                        <div>
                                            <Boxes size={72} />
                                        </div>
                                        <div className='col-span-7'>
                                            <p className='text-3xl font-bold'>
                                                Chassis Centralization
                                            </p>
                                            <p className='text-2xl'>
                                                NetMax provides a single interface for managing multiple NTG chassis, allowing for easy configuration and management of network tests.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                        </div>

                    </div>

                    <div className='col-span-6'>

                        {/* Header */}
                        <div className='flex flex-col items-center text-center mb-4 h-30'>
                            <Separator className='w-full m-1 mb-4 fill-black border-1 rounded-2xl' />
                            <div className='flex flex-row justify-around items-center'>
                                <img src={KSC_Logo} alt="L3 Logo" className='w-1/2 h-18' />
                                <img src={U_Logo} alt="L3 Logo" className='w-1/2 h-14' />
                            </div>
                            <Separator className='w-full m-1 mt-4 fill-black border-1 rounded-2xl' />
                        </div>


                        <div className='flex flex-col justify-between h-[84%]'>

                            {/* Architecture */}
                            <Card className=''>
                                <CardHeader>
                                    <CardTitle className='text-4xl font-bold'>
                                        Architecture
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <img src={Arch_Diagram} alt="Architecture Diagram" />
                                </CardContent>
                            </Card>

                            {/* Technologies */}
                            <Card className=''>
                                <CardHeader>
                                    <CardTitle className='text-4xl font-bold'>
                                        Technologies
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div>
                                            <h2 className='text-2xl mv-1'>Frontend</h2>
                                            <ul className='text-xl'>
                                                <li>React</li>
                                                <li>TypeScript</li>
                                                <li>Tailwind CSS</li>
                                                <li>TanStack Query/Table</li>
                                                <li>SignalR</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h2 className='text-2xl'>Backend</h2>
                                            <ul className='text-xl'>
                                                <li>.NET 8</li>
                                                <li>SignalR</li>
                                                <li>Entity Framework Core</li>
                                                <li>PostgreSQL</li>
                                                <li>Python.NET</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className=''>
                                <CardHeader>
                                    <CardTitle className='text-4xl font-bold'>
                                        Want to Learn More?
                                    </CardTitle>
                                    <CardDescription className='text-xl'>
                                        Scan the QR code or visit 'https://netmax.dev' to learn more!
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='items-center mx-auto'>
                                    <img src={QR_Code} alt="QR Code" className='h-56 w-56' />
                                </CardContent>
                            </Card>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
