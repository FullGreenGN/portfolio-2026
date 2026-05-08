"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
    title: string;
    description: string;
    tags?: string[];
    image?: string;
    slug: string; // Added slug
    links?: {
        demo?: string;
        github?: string;
    };
    className?: string;
}

export function ProjectCard({
                                title,
                                description,
                                tags,
                                image,
                                slug,
                                links,
                                className,
                            }: ProjectCardProps) {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={cn("w-full cursor-pointer group", className)}
            onClick={() => router.push(`/projects/${slug}`)}
        >
            <Card className="relative h-full overflow-hidden rounded-2xl border-white/5 bg-[#1a1a1a]/50 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 hover:bg-[#1a1a1a]">
                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay optimized for #121212 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {links?.github && (
                            <a
                                href={links.github}
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 rounded-full bg-black/50 text-white hover:bg-emerald-500 transition-colors"
                            >
                                <IconBrandGithub size={18} />
                            </a>
                        )}
                        {links?.demo && (
                            <a
                                href={links.demo}
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 rounded-full bg-black/50 text-white hover:bg-emerald-500 transition-colors"
                            >
                                <IconExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <div className="p-6 font-mono">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags?.map((tag) => (
                            <Badge
                                key={tag}
                                variant="outline"
                                className="border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] uppercase tracking-widest"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <h3 className="mb-2 text-xl font-bold tracking-tighter text-zinc-100 group-hover:text-emerald-400 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                </div>
            </Card>
        </motion.div>
    );
}