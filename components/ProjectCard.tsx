'use client'
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Github, ExternalLink, Loader2 } from "lucide-react";
import { MagicCard } from './magicui/magic-card';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  // Default project if none is provided
  const defaultProject = {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS showcasing my projects and skills.",
    liveLink: "https://example.com",
    sourceLink: "https://github.com/yourusername/portfolio",
    techStack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"]
  };

  // Use provided project or fallback to default
  const { 
    title, 
    description, 
    liveLink, 
    sourceLink, 
    techStack 
  } = project || defaultProject;

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <MagicCard>
    <Card className="overflow-hidden border-zinc-800 bg-zinc-900/30 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col h-full shadow-[0px_0px_70px] shadow-white/10">
        
      <div 
        className="h-48 overflow-hidden relative bg-zinc-950"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Vercel-like preview container */}
        <div className="absolute inset-0 flex flex-col w-full h-full">
          {/* Browser-like header */}
          <div className="h-6 bg-zinc-800 flex items-center px-2 border-b border-zinc-700">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-zinc-700 rounded-md h-3.5 w-32 mx-auto"></div>
            </div>
          </div>
          
          {/* Iframe-like section (simulated) */}
          <div className="flex-1 relative overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                <Loader2 className="h-6 w-6 animate-spin text-emerald-500" />
              </div>
            )}
            <iframe 
              src={liveLink}
              className="w-full h-full border-0"
              style={{ 
                opacity: isLoading ? 0 : 1,
                transform: `scale(${isHovered ? 0.98 : 1})`,
                transition: 'all 0.3s ease-in-out'
              }}
              onLoad={handleLoad}
              title={`${title} preview`}
            />
            {/* Fallback for iframe security restrictions */}
            
          </div>
        </div>

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Visit site button on hover */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            size="sm"
            className="bg-white text-black hover:bg-gray-200"
            asChild
          >
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
          </Button>
        </div>
      </div>
      
      <CardHeader className="px-4 pt-4 pb-2">
        <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
      </CardHeader>
      
      <CardContent className="px-4 py-2 flex-grow">
        <p className="text-sm text-zinc-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="px-4 pt-2 pb-4 flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-1 border-blue-700 bg-blue-800 text-zinc-300 hover:bg-blue-700 hover:text-white" 
          asChild
        >
          <a href={sourceLink} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            <span>Code</span>
          </a>
        </Button>
        
        <Button 
          size="sm" 
          className="gap-1 bg-emerald-600 hover:bg-emerald-500 text-white" 
          asChild
        >
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            <span>Live</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
    </MagicCard>
  );
}