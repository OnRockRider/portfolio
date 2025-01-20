"use client"
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";

export default function Home() {

  const [isDarMode, setIsDarMode] = useState(false);

  useEffect(()=>{
    if ( localStorage.theme === 'dark' || (!('theme' in localStorage)&& window.
    matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarMode(true)
    } else {
      setIsDarMode(false)
    }
  },[]) 

  useEffect (() =>{
    if(isDarMode){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = '';
    }
  },[isDarMode])

  return (
    <>
    <Navbar isDarMode={isDarMode} setIsDarMode={setIsDarMode}/>
    <Header isDarMode={isDarMode} setIsDarMode={setIsDarMode}/>
    <About isDarMode={isDarMode} setIsDarMode={setIsDarMode}/>
    <Services isDarMode={isDarMode} setIsDarMode={setIsDarMode}/>
    <Work isDarMode={isDarMode} setIsDarMode={setIsDarMode}/>
    <Contact isDarMode={isDarMode} setIsDarMode={setIsDarMode}/>
    <Footer isDarMode={isDarMode} setIsDarMode={setIsDarMode}/>
    </>
  );
}