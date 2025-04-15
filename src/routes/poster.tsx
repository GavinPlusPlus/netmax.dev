import { ImageWithSkeleton } from '@/components/image-with-skeleton'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'
import Team_Photo from '@/assets/photos/Team_NetMax.avif'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import L3_Logo from '@/assets/L3/L3_Full_Black.svg'
import KSC_Logo from '@/assets/Utah/KSC_Logo.svg'
import U_Logo from '@/assets/Utah/ULogo_Horizontal.svg'
import Arch_Diagram from '@/assets/NetMax_SW_Diagram.png'
import { Boxes, BrainCircuit, ChartNetwork } from 'lucide-react'

export const Route = createFileRoute('/poster')({
    component: RouteComponent,
})

function RouteComponent() {

    return (
        <div className='min-h-screen flex m-4 text-center'>
            <div className='grid grid-cols-3 gap-4 mx-auto w-full m-1'>
                <div className=''>

                    {/* Header */}
                    <div className='flex flex-col items-center text-center mb-4 h-20'>
                        <Separator className='w-full m-1 mb-4 fill-black border-1 rounded-2xl' />
                        <div className='flex flex-row justify-around items-center'>
                            <img src={L3_Logo} alt="L3 Logo" className='h-18' />
                        </div>
                        <Separator className='w-full m-1 mt-4 fill-black border-1 rounded-2xl' />
                    </div>

                    <Card className='mt-[4vh]'>
                        <CardHeader>
                            <CardTitle className='text-3xl font-bold'>
                                What is it?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='grid grid-cols-8 gap-2 items-center my-2'>
                                <div>
                                    <BrainCircuit size={48} />
                                </div>
                                <div className='col-span-7'>
                                    <p className='text-xl font-bold'>
                                        API Simplification
                                    </p>
                                    <p className='text-lg'>
                                        Serving as a bridge between L3 Engineers and TRex, NetMax provides a streamlined experience for running and managing network tests.
                                    </p>
                                </div>
                            </div>
                            <div className='grid grid-cols-8 gap-2 items-center my-2'>
                                <div>
                                    <ChartNetwork size={48} />
                                </div>
                                <div className='col-span-7'>
                                    <p className='text-xl font-bold'>
                                        Real Time Data Collection
                                    </p>
                                    <p className='text-lg'>
                                        Powered by SignalR, NetMax provides real-time data collection and analysis for network performance metrics.
                                    </p>
                                </div>
                            </div>
                            <div className='grid grid-cols-8 gap-2 items-center my-2'>
                                <div>
                                    <Boxes size={48} />
                                </div>
                                <div className='col-span-7'>
                                    <p className='text-xl font-bold'>
                                        Chassis Centralization
                                    </p>
                                    <p className='text-lg'>
                                        NetMax provides a single interface for managing multiple NTG chassis, allowing for easy configuration and management of network tests.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='mt-4'>
                        <CardHeader>
                            <CardTitle className='text-3xl font-bold'>
                                Key Features
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className='list-disc list-inside'>
                                <li>Real-time data collection and analysis</li>
                                <li>Customizable user interface</li>
                                <li>Integration with existing systems</li>
                                <li>Scalable architecture for future growth</li>
                                <li>Stored network profiles for consistent testing</li>
                            </ul>
                        </CardContent>
                    </Card>

                </div>
                <div className=''>

                    {/* Header */}
                    <div className='flex flex-col items-center text-center mb-4 h-20'>
                        <Separator className='w-full m-1 mb-4 fill-black border-1 rounded-2xl' />
                        <h1 className='text-7xl font-bold h-20'>NetMax</h1>
                        <Separator className='w-full m-1 mt-4 fill-black border-1 rounded-2xl' />
                    </div>

                    {/* Team Photo */}
                    <Card className='mt-[4vh]'>
                        <CardHeader>
                            <CardTitle className='text-3xl font-bold'>
                                Meet the Team
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ImageWithSkeleton src={Team_Photo} alt="Team Photo" className='rounded-2xl' aspectRatio='aspect-[16/9]' />
                            <div className='flex flex-col items-center text-center mt-2'>
                                <p><b>From left to right:</b> Ryan Taffe, Gavin Kerr, Jack (John) Severson, Dax McPartland</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* New Box on Network Traffic Generation */}
                    <Card className='mt-4'>
                        <CardHeader>
                        <CardTitle className='text-3xl font-bold'>
                                Network Testing
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-sm'>
                                Network traffic generation is essential for network testing. It simulates real-world conditions, enabling engineers to identify performance bottlenecks and other issues under varying conditions.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className='mt-4'>
                        <CardHeader>
                            <CardTitle className='text-3xl font-bold'>
                                Acknowledgements
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Special thanks to: L3Harris, Dr. David Bean, Kevin Gonzales, Aubrey Pratt, Cody Howell, and The Flux Research Group
                        </CardContent>
                    </Card>

                </div>

                <div className=''>

                    {/* Header */}
                    <div className='flex flex-col items-center text-center mb-4 h-20'>
                        <Separator className='w-full m-1 mb-4 fill-black border-1 rounded-2xl' />
                        <div className='flex flex-row justify-around items-center'>
                            <img src={KSC_Logo} alt="L3 Logo" className='w-1/2 h-18' />
                            <img src={U_Logo} alt="L3 Logo" className='w-1/2 h-14' />
                        </div>
                        <Separator className='w-full m-1 mt-4 fill-black border-1 rounded-2xl' />
                    </div>

                    {/* Architecture */}
                    <Card className='mt-[4vh]'>
                        <CardHeader>
                            <CardTitle className='text-3xl font-bold'>
                                Architecture
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={Arch_Diagram} alt="Architecture Diagram" />
                        </CardContent>
                    </Card>

                    {/* Technologies */}
                    <Card className='mt-4'>
                        <CardHeader>
                            <CardTitle className='text-3xl font-bold'>
                                Technologies
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <h2 className='text-2xl'>Frontend</h2>
                                    <ul>
                                        <li>React</li>
                                        <li>TypeScript</li>
                                        <li>Tailwind CSS</li>
                                        <li>TanStack Query/Table</li>
                                        <li>SignalR</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='text-2xl'>Backend</h2>
                                    <ul>
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

                </div>
            </div>
        </div>
    )
}
