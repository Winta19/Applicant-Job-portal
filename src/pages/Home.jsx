import HeroSection from "../components/HeroSection";
import JobList from "../components/JobList";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="px-20 space-y-4">
        <JobList />
      </div>
    </div>
  );
}
