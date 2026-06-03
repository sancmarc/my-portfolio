import {
  ShieldCheck,
  Settings,
  Server,
  Lightbulb,
  TrendingUp,
  Users,
  Code2
} from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Development',
    description:
      'Building robust, user friendly web applications with Laravel, Livewire, Tailwind CSS, and modern frameworks.'
  },
  {
    icon: Server,
    title: 'Reliability',
    description:
      'Ensuring uptime and stability through resilient infrastructures and disaster recovery planning.'
  },
  {
    icon: Settings,
    title: 'Automation',
    description: 'Streamlining workflows and reducing manual load with scripts.'
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    description:
      'Protecting infrastructures and applications with compliance, monitoring, and SIEM solutions.'
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Designing systems and apps that grow seamlessly with demand.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Exploring cloud, DevOps, and modern frameworks to stay ahead of technology trends.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Working closely with teams to align IT operations and development goals.'
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
              Engineering secure and scalable system
              <span className='font-serif italic font-normal text-white'>
                {' '}
                that bridge IT operations and modern web development.
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
            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>
                "My mission is to build future ready IT solutions by combining
                system management expertise with evolving skills in cloud,
                DevOps, and cybersecurity."
              </p>
            </div>
          </div>
          {/* Right Column - Hilights */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className='glass p-6 rounded-2xl animate-fade-in'
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                  <item.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
