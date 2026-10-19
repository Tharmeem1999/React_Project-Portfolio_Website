import { useState } from "react";
import testimonials from "../../data/testimonials";
import ArrowNavigation from "./ArrowNavigation";
import CompanyLogo from "./CompanyLogo";
import TestimonialCard from "./TestimonialCard";

const RecommendationSection = () => {
    // Set up state to track the current testimonial index
    const [current, setCurrent] = useState(0);

    // Get the currently selected testimonial 
    const testimonial = testimonials[current]

    return (
        <section className="min-h-screen py-20 px-4 text-center bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                Testimonials
            </h2>
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-16">
                What People Say
            </h3>

            {/* Render the current testimonial using TestimonialCard component */}
            <TestimonialCard testimonial={testimonial} />

            {/* Navigation Arrow */}

            {/* Logos */}
        </section>
    );
};

export default RecommendationSection;