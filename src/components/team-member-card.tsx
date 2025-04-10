/// team-member-card.tsx
/// Responsive card layout that displays information for a single team member.
///
/// Author: Gavin Kerr
/// Date: Thu Apr 10 2025

import { ImageWithSkeleton } from "@/components/image-with-skeleton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link, Linkedin } from "lucide-react";

interface TeamMemberCardProps {
    name: string;
    personal_website?: string;
    linkedin?: string;
    photo_url: string;
    tasks: string[];
    className?: string;
    children?: React.ReactNode;
}

export const TeamMemberCard = ({ name, personal_website, linkedin, photo_url, tasks, className, children }: TeamMemberCardProps) => {

    return (
        <Card className={`w-full mx-auto my-4 ${className},`}>
            <CardContent className="hidden md:grid grid-cols-2">
                <ImageWithSkeleton
                    src={photo_url}
                    alt={`A photo of ${name}`}
                    className="rounded-lg max-w-xs pr-2 py-2"
                    aspectRatio="aspect-[2/3]"
                />
                <div className="gap-4">
                    <div>
                        <div className="flex flex-row items-center justify-between">
                            <div className="text-4xl mb-4">{name}</div>
                            {linkedin && (
                                <a
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 flex mb-4">
                                    <Linkedin size={32} />
                                </a>
                            )}
                        </div>

                        {personal_website && (
                            <div className="text-lg mb-2">
                                Personal Website:
                                <a
                                    href={personal_website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 flex items-center text-md">
                                    <Link className="mr-1" />
                                    {personal_website}
                                </a>
                            </div>
                        )}
                        <div className="text-lg mb-2">Tasks: </div>
                        <div className="space-x-2 space-y-2 overflow-auto">
                            {tasks.map((task, index) => (
                                <Badge
                                    key={index}>
                                    {task}
                                </Badge>
                            ))}
                        </div>
                        <div className="text-lg mt-4">
                            {children}
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardContent className="md:hidden flex flex-col">
                <ImageWithSkeleton
                    src={photo_url}
                    alt={`A photo of ${name}`}
                    className="rounded-lg max-w-xs pr-2 py-2 min-w-[100px] mx-auto"
                    aspectRatio="aspect-[2/3]"
                />
                <div className="gap-4">
                    <div className="mt-2">
                    <div className="flex flex-row items-center justify-between">
                            <div className="text-4xl mb-4">{name}</div>
                            {linkedin && (
                                <a
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 flex mb-4">
                                    <Linkedin size={32} />
                                </a>
                            )}
                        </div>
                        {personal_website && (
                            <div className="text-lg mb-2">
                                Personal Website:
                                <a
                                    href={personal_website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 flex items-center text-md">
                                    <Link className="mr-1" />
                                    {personal_website}
                                </a>
                            </div>
                        )}
                        <div className="text-lg mb-2">Tasks: </div>
                        <div className="space-x-2 space-y-2 overflow-auto">
                            {tasks.map((task, index) => (
                                <Badge
                                    key={index}>
                                    {task}
                                </Badge>
                            ))}
                        </div>
                        <div className="mt-4">
                            {children}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card >
    )

}
