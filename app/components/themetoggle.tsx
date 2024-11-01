"use client"
import { useState, useEffect } from "react"

export const ThemeToggle = ()=>{
    const [theme ,setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      }, []);


    const toggleTheme = ()=>{
        const newTheme = theme ==='dark' ? 'light' : 'dark';
        setTheme(newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);        
    }

    
    return <>
        <button onClick={toggleTheme}>
            Switch to {theme=='dark'?'light':'dark'} Mode
        </button>
    </>
}