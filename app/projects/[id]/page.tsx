import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProject } from '@/lib/projects';
import { ProjectHeader } from '@/components/project/project-header';
import { ProjectContent } from '@/components/project/project-content';


interface ProjectPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata(
    { params }: ProjectPageProps
): Promise<Metadata> {
    const { id } = await params;
    const project = getProject(id);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.image],
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = await params;
    const project = getProject(id);

    if (!project) {
        notFound();
    }

    return (
        <main className="w-full">
            <ProjectHeader project={project} />

            <div className="bg-gradient-to-b from-background to-card/30">
                <div className="mx-auto max-w-6xl overflow-hidden rounded-xl px-5 py-12 ">
                    <div className="aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
                        <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <ProjectContent project={project} />
        </main>
    );
}
