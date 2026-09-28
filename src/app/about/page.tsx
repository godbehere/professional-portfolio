import AboutMeSection from "@/components/AboutMeSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Grant Godbehere | Software Engineer',
  description: 'Portfolio site of Grant Godbehere, Software Engineer.',
};

export default function AboutMe() {
    return (
        <>
        <AboutMeSection />
        <FeaturedProjects />   
        </>
    );
}