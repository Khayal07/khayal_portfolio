import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ProjectDetail } from "@/components/ProjectDetail";
import { portfolio } from "@/data/portfolio";
import { projectDetails } from "@/data/projectDetails";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.projects.find((p) => p.slug === slug);
  const details = projectDetails[slug];
  if (!project || !details) return {};

  const title = `${project.title} | ${portfolio.identity.name}`;
  return {
    title,
    description: details.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title,
      description: details.tagline,
      images: project.images?.[0] ? [{ url: project.images[0] }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  if (!projectDetails[slug]) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail slug={slug} />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
