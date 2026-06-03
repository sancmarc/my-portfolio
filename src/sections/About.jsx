import { Code2, Rocket, Users, Lightbulb } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description:
      'Writing maintainable, scalable code that stands the test of time.'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description:
      'Optimizing for speed and delivering lightning-fast user experiences.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with teams to bring ideas to life.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Staying ahead with the latest technologies and best practices.'
  }
]

export const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                About Me
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              Building the future,
              <span className='font-serif italic font-normal text-white'>
                {' '}
                one component at a time.
              </span>
            </h2>
            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                Experienced IT & Full Stack Developer with hands-on experience
                in handling hardware, software, and networks contributing
                towards the development of scalable web applications.
              </p>
              <p>
                Competent in handling the process of installation,
                configuration, and management of various enterprise applications
                to ensure performance, security, and compliance.
              </p>
              <p>
                Strong knowledge of current technologies such as Laravel 12,
                Livewire, Tailwind CSS, Flux UI, Bootstrap, AJAX, jQuery, HTML,
                and CSS in developing robust and maintainable web applications.
              </p>
              <p>
                Capable of creating well-structured SOPs, identifying and
                resolving complex problems, and automating processes for
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
