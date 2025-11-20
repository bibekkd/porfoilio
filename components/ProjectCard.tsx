'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Github, ExternalLink, AlertCircle } from "lucide-react";
import { MagicCard } from './magicui/magic-card';

interface Project {
  title: string;
  description: string;
  liveLink: string;
  sourceLink: string;
  techStack: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
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

  // Intersection observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef}>
      <MagicCard 
          gradientColor={"#D946EF"} /* Fuchsia-500 for a vibrant purple glow */
          className="p-0 rounded-lg"
        >
        <Card className="overflow-hidden border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 flex flex-col h-full group">
            
          <div 
            className="h-48 overflow-hidden relative bg-muted/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Browser-like header */}
            <div className="h-6 bg-muted/40 flex items-center px-2 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-muted/50 rounded-md h-3.5 w-32 mx-auto flex items-center justify-center">
                  <span className="text-[10px] text-muted-foreground truncate px-2 font-mono">{new URL(liveLink).hostname}</span>
                </div>
              </div>
            </div>
            
            {/* Website preview iframe */}
            <div className="flex-1 relative overflow-hidden">
              {isInView ? (
                <>
                  {/* Loading state */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-card flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-2"></div>
                        <p className="text-sm">Loading preview...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Error state */}
                  {hasError && (
                    <div className="absolute inset-0 bg-card flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <AlertCircle size={24} className="mx-auto mb-2 text-destructive" />
                        <p className="text-sm">Preview unavailable</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Iframe */}
                  {!hasError && (
                    <div className="w-full h-full overflow-hidden">
                      <iframe
                        src={liveLink}
                        className="border-0"
                        style={{
                          width: '100%',
                          height: '100%',
                          transform: isHovered ? 'scale(0.95)' : 'scale(1)',
                          transformOrigin: 'center',
                          transition: 'transform 0.3s ease-in-out'
                        }}
                        onLoad={() => setIsLoading(false)}
                        onError={() => {
                          setHasError(true);
                          setIsLoading(false);
                        }}
                        sandbox="allow-same-origin"
                        loading="lazy"
                      />
                    </div>
                  )}
                </>
              ) : (
                // Placeholder before intersection
                <div className="w-full h-full bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <ExternalLink size={24} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Website Preview</p>
                  </div>
                </div>
              )}
            </div>

            {/* Hover overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-background/80 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            
            {/* Visit site button on hover */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                asChild
              >
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </Button>
            </div>
          </div>
        
        <CardHeader className="px-4 pt-4 pb-2">
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
        </CardHeader>
        
        <CardContent className="px-4 py-2 flex-grow">
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech: string) => (
              <Badge key={tech} variant="outline" className="bg-secondary/50 text-secondary-foreground border-secondary hover:bg-secondary/80 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="px-4 pt-2 pb-4 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-1 border-border bg-background/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors" 
            asChild
          >
            <a href={sourceLink} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
          
          <Button 
            size="sm" 
            className="gap-1 bg-secondary text-secondary-foreground hover:bg-secondary/80" 
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
    </div>
  );
}