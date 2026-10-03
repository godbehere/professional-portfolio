import AboutMeSection from "@/components/AboutMeSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About | Grant Godbehere',
  description: 'Background and experience of Grant Godbehere, Full Stack Software Engineer building AI-powered platforms and multi-service systems.',
};

export default function AboutMe() {
    return (
        <>
        <AboutMeSection />
        <FeaturedProjects />   
        </>
    );
}