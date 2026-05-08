import { allProjects } from "contentlayer/generated";
import { redis } from "@/lib/redis";
import { ProjectCard } from "@/components/ui/project-card";
import { Navigation } from "@/components/navigation";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
    // 1. Fetch views from your self-hosted Redis
    // Standard Redis uses .mget(). Upstash uses .mget(). Logic is identical.
    const viewKeys = allProjects.map((p) => `pageviews:projects:${p.slug}`);
    const viewCounts = viewKeys.length > 0 ? await redis.mget(...viewKeys) : [];

    const views = allProjects.reduce((acc, project, i) => {
        acc[project.slug] = parseInt(viewCounts[i] || "0", 10);
        return acc;
    }, {} as Record<string, number>);

    // 2. Sort projects (Featured first, then by date)
    // Here we manually pick featured, or you can sort by view count
    const sorted = allProjects
        .filter((p) => p.published)
        .sort((a, b) => {
            if (!a.date || !b.date) return 0;
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

    const featured = sorted.find((p) => p.slug === "polaris-dev") || sorted[0];
    const top2 = sorted.find((p) => p.slug === "shoteat") || sorted[1];
    const others = sorted.filter((p) => p.slug !== featured?.slug && p.slug !== top2?.slug);

    return (
        <main className="min-h-screen bg-[#121212] selection:bg-emerald-500/30">
            <Navigation />

            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h1 className="font-mono text-4xl font-bold text-zinc-100 tracking-tighter">
                        ./projects<span className="text-emerald-500 animate-pulse">_</span>
                    </h1>
                </div>

                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                    {featured && (
                        <ProjectCard
                            {...featured}
                            links={{ github: featured.repository, demo: featured.url }}
                            className="md:col-span-1 md:row-span-2 h-[600px]"
                        />
                    )}

                    <div className="flex flex-col w-full gap-8">
                        {top2 && (
                            <ProjectCard
                                {...top2}
                                links={{ github: top2.repository, demo: top2.url }}
                                className="h-[300px] lg:h-[calc(50%-1rem)]"
                            />
                        )}
                        {others[0] && (
                            <ProjectCard
                                {...others[0]}
                                links={{ github: others[0].repository, demo: others[0].url }}
                                className="h-[300px] lg:h-[calc(50%-1rem)]"
                            />
                        )}
                    </div>
                </div>

                {/* Grid for the rest */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {others.slice(1).map((project) => (
                        <ProjectCard
                            key={project.slug}
                            {...project}
                            links={{ github: project.repository, demo: project.url }}
                            className="h-[400px]"
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}