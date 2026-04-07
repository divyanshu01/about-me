import { useCallback, useMemo } from 'react'
import Particles from '@tsparticles/react'
import { type ISourceOptions } from '@tsparticles/engine'

export default function ParticleBackground() {
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        number: {
          value: 60,
          density: { enable: true, width: 1920, height: 1080 },
        },
        color: { value: ['#7C3AED', '#3B82F6', '#60A5FA'] },
        links: {
          enable: true,
          color: '#7C3AED',
          distance: 150,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none' as const,
          outModes: { default: 'bounce' as const },
        },
        opacity: { value: { min: 0.3, max: 0.7 } },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' as const },
        },
        modes: {
          grab: { distance: 180, links: { opacity: 0.4 } },
        },
      },
      detectRetina: true,
    }),
    [],
  )

  const particlesLoaded = useCallback(async () => {}, [])

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0"
      options={options}
      particlesLoaded={particlesLoaded}
    />
  )
}
