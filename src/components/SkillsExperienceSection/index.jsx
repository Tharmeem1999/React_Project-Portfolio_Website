import SkillCard from "./SkillCard";
import ExperienceItem from "./ExperienceItem";

const SkillsExperienceSection = () => {
    return (
        <section className="min-h-screen py-20">
            <h2 className="text-3xl font-semibold text-center">
                Skills & Experience
            </h2>
            <h3 className="text-4xl font-bold text-center mb-16 text-blue-600 dark: dark:text-blue-400">
                What I Do & Where I've Been
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Skills */}
                <div>
                    <h4 className="text-2xl font-semibold mb-4">Skills</h4>
                </div>
                {/* Experience Timeline */}
                <div>
                    <h4 className="text-2xl font-semibold mb-4">Experience</h4>
                </div>
            </div>
        </section>
    );
};

export default SkillsExperienceSection;