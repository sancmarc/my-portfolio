const experiences = [
  {
    period: '2023 — Present',
    role: 'IT Manager',
    company: 'L&K Industries Philippines INC.',
    description:
      'Oversee IT operations, manage VMware ESXi environments, configure NAS/iSCSI storage, and ensure secure deployments. Lead system audits, optimize infrastructure, and guide the team in adopting scalable solutions.',
    technologies: [
      'Laravel',
      'Livewire',
      'Tailwind CSS',
      'MySQL',
      'VMware ESXi',
      'NAS/iSCSI',
      'Linux Administration'
    ],
    current: true
  },
  {
    period: '2022 — 2023',
    role: 'Full Stack Developer',
    company: 'L&K Industries Philippines INC.',
    description:
      'Developed and maintained enterprise web applications, implemented responsive UI with Bootstrap, and optimized backend performance. Collaborated with Senior IT and different Department Manager to integrate applications into secure server environments.',
    technologies: ['Laravel', 'Bootstrap', 'JavaScript', 'MySQL', 'Apache2'],
    current: false
  },
  {
    period: '2021 — 2022',
    role: 'Jr. Programmer/IT Support',
    company: 'L&K Industries Philippines INC.',
    description:
      'Provided IT support, handled debugging and small feature development, and assisted in server maintenance. Gained hands-on experience with VMware virtualization, network troubleshooting, and user support.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'VMware', 'Network Support'],
    current: false
  },
  {
    period: '2020 — Present',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    description:
      'Delivered custom web solutions for small businesses and startups. Built 5+ websites and applications, handling design, deployment, and hosting. Currently maintaining 3 live website with secure server configurations.',
    technologies: [
      'PHP',
      'Laravel',
      'Bootstrap',
      'Tailwind CSS',
      'MySQL',
      'Web Hosting',
      'Domain Management',
      'Linux Server',
      'SSL Configuration'
    ],
    current: true
  },
  {
    period: '2019 — 2020',
    role: 'Webmaster/IT Specialist',
    company: 'ArtSteel Norge/ArtSteel Philippines',
    description:
      'Managed and maintained the company website, applied SEO techniques, and ensured responsiveness. Developed a newsletter mailing system using PHP and supported IT Equipment.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'SEO Tools'],
    current: false
  }
]

const technologiesOverview = {
  core: ['PHP', 'JavaScript', 'MySQL', 'CSS'],
  frameworks: ['Laravel', 'Livewire', 'Bootstrap', 'Tailwind CSS', 'jQuery'],
  systems: [
    'Apache2',
    'XAMPP',
    'VMware ESXi',
    'VirtualBox',
    'NAS/iSCSI',
    'Linux Administration'
  ],
  enterprise: [
    'Oracle ERP (R12 Purchasing, Inventory, Finance)',
    'Google Workspace'
  ],
  security: [
    'Arista NG Firewall Management',
    'Bitdefender Endpoint Security',
    'SSL Configurations',
    'SIEM Tools (Wazuh, ELK)'
  ],
  emerging: ['Cloud Fundamentals (AWS)', 'Operational Automation']
}

export const Experience = () => {
  return (
    <section id='experience' className='py-32 relative overflow-hidden'>
      <div
        className='absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2'
      />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='max-w-3xl mb-16'>
          <span
            className='text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in'
          >
            Career Journey
          </span>
          <h2
            className='text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground'
          >
            Experience that{' '}
            <span className='font-serif italic font-normal text-white'>
              {' '}
              speaks volumes.
            </span>
          </h2>

          <p
            className='text-muted-foreground
           animate-fade-in animation-delay-200'
          >
            From my early days as a Junior Programmer debugging code and supporting users, to building full&ndash;stack applications and now managing enterprise IT infrastructure, my career has been defined by continuous growth. I&rsquo;ve led deployments of VMware ESXi, NAS/iSCSI storage, and Arista NG Firewall, while also delivering secure web solutions and supporting Oracle ERP systems. Today, as IT Manager, I focus on scalable, audit&ndash;friendly solutions and SIEM deployments like Wazuh, preparing for the next step into cloud and security engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]' />

          {/* Experience Items */}
          <div className='space-y-12'>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10'>
                  {exp.current && (
                    <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75' />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? 'md:pr-16 md:text-right'
                      : 'md:col-start-2 md:pl-16'
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className='text-sm text-primary font-medium'>
                      {exp.period}
                    </span>
                    <h3 className='text-xl font-semibold mt-2'>{exp.role}</h3>
                    <p className='text-muted-foreground'>{exp.company}</p>
                    <p className='text-sm text-muted-foreground mt-4'>
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Tech Overview */}

          {/* Technologies Overview */}
          <div className='mt-20'>
            <h3 className='text-2xl font-bold mb-6 text-secondary-foreground'>
              Technologies Overview
            </h3>
            <div className='grid md:grid-cols-2 gap-8'>
              {Object.entries(technologiesOverview).map(
                ([category, items], idx) => (
                  <div
                    key={idx}
                    className='glass p-6 rounded-2xl border border-primary/30'
                  >
                    <h4 className='text-lg font-semibold capitalize mb-4'>
                      {category}
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
