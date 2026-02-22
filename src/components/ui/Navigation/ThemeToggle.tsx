"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="rounded-full flex items-center justify-center p-2 min-w-0 transition-colors hover:bg-transparent border-0"
            title={theme === "light" ? "Switch to Blue theme" : "Switch to Sand theme"}
        >
            <div
                className="w-5 h-5 rounded-full transition-colors shadow-sm"
                style={{
                    backgroundColor: theme === "light" ? "#E6D5B8" : "#66B032"
                }}
            />
        </button>
    );
};
