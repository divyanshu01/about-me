import { useEffect, useState } from 'react'
import PageTransition from '../components/Layout/PageTransition'
import ParticleBackground from '../components/Hero/ParticleBackground'
import HeroContent from '../components/Hero/HeroContent'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function Home() {
  const [particlesReady, setParticlesReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setParticlesReady(true))
  }, [])

  return (
    <PageTransition className="relative min-h-screen overflow-hidden">
      {particlesReady && <ParticleBackground />}
      <HeroContent />
    </PageTransition>
  )
}
