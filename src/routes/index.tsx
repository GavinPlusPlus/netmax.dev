import { createFileRoute, Link } from '@tanstack/react-router'
import Team_NetMax from '@/assets/photos/Team_NetMax.avif'
import L3_Logo_White from '@/assets/L3/L3_Full_White.svg'
import L3_Logo_Black from '@/assets/L3/L3_Full_Black.svg'
import { ImageWithSkeleton } from '@/components/image-with-skeleton'
import Marquee from '@/components/ui/marquee';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/components/theme-provider';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

const marquee_items = [ "NetMax", "NetMax", "NetMax", "NetMax", "NetMax", "NetMax" ];

function RouteComponent() {

  // Get the current theme
  const theme = useTheme().activeTheme;

  return (
    <div className='w-full transition-all animate-fade-in'>

      <Marquee items={marquee_items} />

      <ImageWithSkeleton
        src={Team_NetMax}
        alt="A photo of the NetMax team"
        className="max-w-2xl rounded-lg mt-4 mx-auto"
        aspectRatio='aspect-[3/2]'
      />

      <br />

      <div className='space-y-4'>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>
              Project Abstract
            </CardTitle>
          </CardHeader>
          <CardContent>
            The purpose of NetMax is to provide L3Harris with a unified application for testing network programs. By using NetMax, L3Harris Engineers will be able to streamline their testing workflows, reduce errors in testing the network, and accelerate project completion without needing extensive knowledge of multiple complex networking testing platforms. NetMax manages the integration of key frameworks, taking care of technical complexities.
            <br />
            <br />
            The NetMax software suite will handle API requests from L3Harris Engineers allowing them to initiate and manage network tests. This level of API integration enables engineers to seamlessly incorporate NetMax into their own projects. Additionally, our application will also include a user-friendly frontend interface providing engineers with real time and past analytics related to tests. Lastly, the app will store test configurations for easy repetition and sharing among teams.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>
              Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            Our project is built on a variety of open source technologies and platforms, including: ASP.NET Core, React, Python, and Docker.

            <br />
            <br />

            You can learn more here: <Link to={'/the-stack'} className='text-blue-500 hover:text-blue-700'>The Stack</Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>
              Special Thanks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col justify-center space-x-4'>
              <ImageWithSkeleton
                src={theme === "dark" ? L3_Logo_White : L3_Logo_Black}
                alt="A logo of L3Harris"
                className="max-w-xs mx-auto"
                aspectRatio=''
              />
              <div className='text-lg text-center mt-2'>
                Thank you to L3Harris for providing us with the opportunity to work on this project and for their support throughout the development process.
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
