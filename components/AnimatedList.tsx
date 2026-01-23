"use client";
import { useEffect, useRef, useState } from "react";

interface AnimatedListProps {
    children: React.ReactNode[];
    staggerDelay?: number;
    className?: string;
}

export default function AnimatedList({
    children,
    staggerDelay = 100,
    className = "",
}: AnimatedListProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={className}>
            {children.map((child, idx) => (
                <div
                    key={idx}
                    className={`transform transition-[opacity,transform,--tw-scale-x,--tw-scale-y]  duration-700 ${
                        isVisible
                            ? "opacity-100 scale-in"
                            : "opacity-0 scale-out"
                    }`}
                    style={{
                        transitionDelay: isVisible
                            ? `${idx * staggerDelay}ms`
                            : "0ms",
                        transitionTimingFunction:
                            "cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}
