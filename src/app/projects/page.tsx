import { ProjectCard } from "@/components/ui/project-card";
import {Navigation} from "@/components/navigation";

const projects = [
    {
        title: "PolarisDev Platform",
        slug: "polaris-dev",
        description: "The core engine powering development workflows and client management.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80",
        links: { github: "#", demo: "https://polarisdev.fr" },
        className: "md:col-span-2 md:row-span-2", // Featured large card
    },
    {
        title: "ShotEat Live",
        slug: "shoteat",
        description: "Real-time streaming and food interaction platform.",
        tags: ["React", "WebRTC", "Node.js"],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        links: { github: "#", demo: "https://shoteat.live" },
        className: "md:col-span-2 md:row-span-1",
    },
    {
        title: "Green UI Kit",
        slug: "green-ui",
        description: "A specialized component library for eco-friendly tech brands.",
        tags: ["Shadcn", "Radix"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        links: { github: "#" },
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Crypto Dashboard",
        slug: "crypto-dash",
        description: "Dark-themed analytics for decentralized finance.",
        tags: ["Web3", "D3.js"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
        links: { github: "#", demo: "#" },
        className: "md:col-span-1 md:row-span-1",
    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#121212] py-24 selection:bg-emerald-500/30">
            <Navigation />
            <div className="container mx-auto px-6">
                <div className="mb-16 max-w-2xl">
                    <h1 className="font-mono text-4xl font-bold text-white mb-4 tracking-tighter">
                        Projects
                    </h1>
                    <p className="font-mono text-zinc-500 text-sm border-l border-emerald-500/30 pl-4">
                        Some of the projects are from work and some are on my own time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}