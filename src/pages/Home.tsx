import { useState, useEffect } from 'react'
import { User } from 'firebase/auth'
import { Project } from '../data/projects'
import { Hero } from '../components/Hero'
import { FeaturedStack } from '../components/FeaturedStack'
import { Domains } from '../components/Domains'
import { Projects } from '../components/Projects'
import { Services } from '../components/Services'
import { Research } from '../components/Research'
import { Stats } from '../components/Stats'
import { Testimonials } from '../components/Testimonials'
import { Blog } from '../components/Blog'
import { Contact } from '../components/Contact'
export function Home({ user, setShowAuth }: { user: User | null, setShowAuth: (s: boolean) => void }) {

  useEffect(() => {
    // Trigger stagger children on scroll
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('.stagger-child')
          children.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100)
          })
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal-section').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <FeaturedStack />
      <Domains />
      <Projects />
      <Services />
      <Research />
      <Stats />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  )
}
