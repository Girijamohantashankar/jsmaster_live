"use client";
import Link from "next/link";
import "../../../styles/courses.css";
import Navbar from "../navbar";

export default function Courses() {

    const courses = [
        {
            title: "JavaScript Fundamentals",
            description: "Learn the basics of JavaScript, including variables, loops, and functions.",
            difficulty: "Beginner",
            tags: ["#JavaScript", "#Fundamentals", "#Beginner"],
        },
        {
            title: "Advanced JavaScript Concepts",
            description: "Dive deep into closures, async programming, and more.",
            difficulty: "Advanced",
            tags: ["#JavaScript", "#Advanced", "#Closures"],
        },
        {
            title: "JavaScript for Web Development",
            description: "Master DOM manipulation, event handling, and API integration.",
            difficulty: "Intermediate",
            tags: ["#WebDev", "#JavaScript", "#API"],
        },
        {
            title: "JavaScript Algorithms and Data Structures",
            description: "Strengthen your problem-solving skills with algorithms and data structures.",
            difficulty: "Advanced",
            tags: ["#Algorithms", "#DataStructures", "#JavaScript"],
        },
    ];

    return (
        <>
            <Navbar />
            <div className="courses_container">
                <h1>Expl<span>ore</span> Ou<span>r Cour</span>ses</h1>
                <div className="courses_grid">
                    {courses.map((course, index) => (
                        <div className="course_card" key={index}>
                            <h2>{course.title}</h2>
                            <p>{course.description}</p>
                            <div className="course_info">
                                <span className={`difficulty ${course.difficulty.toLowerCase()}`}>
                                    {course.difficulty}
                                </span>
                                <div className="tags">
                                    {course.tags.map((tag, idx) => (
                                        <span key={idx} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <Link href="/signup">
                                <button className="enroll_btn">Enroll Now</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
