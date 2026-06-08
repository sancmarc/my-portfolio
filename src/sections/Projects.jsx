import { ArrowUpRight, Download } from 'lucide-react'
import { AnimatedBorderButton } from '../components/AnimatedBorderButton'
import { SlSocialGithub } from 'react-icons/sl'
const projectsDev = [
  {
    title: 'Bistro 8 Italian Restaurant',
    description:
      'A full‑stack web application with inventory management, dynamic menu control, processing workflows, and automated billing.',
    image: '/img/bistro8/bistro8-top-image.jpg',
    tags: ['Laravel', 'jQuery', 'Bootstrap', 'SweetAlert2', 'JavaScript'],
    link: '#',
    github: 'https://github.com/sancmarc/BISTRO8'
  },
  {
    title: 'MCC-HSU',
    description:
      'A full‑stack clinic web application developed with Laravel Livewire, featuring medicine and supply inventory, issue tracking for both medicines and supplies, appointment scheduling with admin approval, dynamic personnel management, illness reporting, and real‑time messaging. ',
    image: '/img/hsu/dashboard.png',
    tags: [
      'Laravel',
      'jQuery',
      'Bootstrap',
      'SweetAlert2',
      'JavaScript',
      'Livewire'
    ],
    link: '#',
    github: 'https://github.com/sancmarc/mcc-hsu'
  },
  {
    title: 'KIT System – Production Workflow Automation',
    description:
      'Developed a web application to digitize production processes, replacing manual inspection. The system allows importing product files with quantities and rejects, step by step process tracking, defect input, and exporting consolidated reports via Excel',
    image: '/img/kit/kit-system.JPG',
    tags: ['Laravel', 'CSS', 'Bootstrap', 'jQuery', 'SweetAlert2'],
    link: '#',
    github: '#'
  },

  {
    title: 'Instructor Monitoring system',
    description:
      'Instructor Monitoring System that integrates RFID attendance with live camera feeds, enabling administrators to verify if employees or instructors are inside designated rooms. The system includes institute and section management, real‑time monitoring, and dynamic reporting — providing a centralized platform for tracking presence, resources, and activities with accuracy and transparency.',
    image: '/img/monitoring/ESP32CAM.jpg',
    tags: ['PHP', 'CSS', 'Bootstrap', 'IOT/Arduino', 'JavaScript'],
    link: 'https://www.facebook.com/CodeWeb023/posts/pfbid02cvXSwCysekfhUgZu3DrannGzGZewZQ5ZvctdUzgRdorg84YBdgA5V2kjfTKqkfwJl',
    github: '#'
  },
  {
    title: 'Defect Tracking System',
    description:
      'Defect tracking and 2D mapping system that integrates barcode scanning with interactive defect visualization. Products are scanned to detect defects, which are displayed as markers on a grid map. The system allows users to insert or remove defect records dynamically by hovering and clicking on the table, providing real‑time control over inspection data. ',
    image: '/img/2d/2d-map.png',
    tags: ['PHP', 'CSS', 'Bootstrap'],
    link: '#',
    github: '#'
  },
  {
    title: 'Hi-qm Furniture',
    description: 'A full‑stack web application with dynamic product control ',
    image: '/img/furniture/front-page.png',
    tags: ['Laravel', 'jQuery', 'Bootstrap', 'SweetAlert2', 'JavaScript'],
    link: '#',
    github: 'https://github.com/sancmarc/dhel'
  }
]

const itProfessional = [
  {
    title: 'Server Deployment & SSL Configuration',
    description:
      'Configured a new internal server on VMware ESXi. Managed DNS, and Apache2 configs',
    image: '/img/infra/server-deployment-nas-with-vm.JPG',
    tags: ['Infrastructure, NAS, VM'],
    link: '/public/docs/infra/Server-Deployment-with-NAS-Storage.pdf'
  }
]

export const Projects = () => {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      {/* Bg glows */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            Featured Work
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Projects that
            <span className='font-serif italic font-normal text-white'>
              {' '}
              make an impact.
            </span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A selection of my recent projects, from full‑stack web applications
            to innovative monitoring and quality control tools. Each one
            reflects my focus on building scalable, audit‑ready solutions that
            solve real‑world problems with modern frameworks and technologies.
          </p>
        </div>
        {/* Developer Section */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Full Stack Developer
          </h2>
        </div>
        {/* Projects Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {projectsDev.map((project, idx) => (
            <div
              key={idx}
              className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className='relative overflow-hidden aspect-video'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div
                  className='absolute inset-0 
        bg-linear-to-t from-card via-card/50
         to-transparent opacity-60'
                />
                {/* Overlay Links */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a
                    href={project.link}
                    className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                  >
                    <ArrowUpRight className='w-5 h-5' />
                  </a>
                  <a
                    href={project.github}
                    target='_blank'
                    className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                  >
                    <SlSocialGithub className='w-5 h-5' />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className='w-5 h-5 
          text-muted-foreground group-hover:text-primary
           group-hover:translate-x-1 
           group-hover:-translate-y-1 transition-all'
                  />
                </div>
                <p className='text-muted-foreground text-sm'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Section */}
        <div className='text-center mx-auto max-w-3xl mb-16 my-5'>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            IT Professional
          </h2>
        </div>
        {/* Projects Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {itProfessional.map((project, idx) => (
            <div
              key={idx}
              className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className='relative overflow-hidden aspect-video'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div
                  className='absolute inset-0 
        bg-linear-to-t from-card via-card/50
         to-transparent opacity-60'
                />
                {/* Overlay Links */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a
                    href={project.link}
                    target='_blank'
                    download={`${project.title}.pdf`}
                    className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
                  >
                    <Download className='w-5 h-5' />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className='w-5 h-5 
          text-muted-foreground group-hover:text-primary
           group-hover:translate-x-1 
           group-hover:-translate-y-1 transition-all'
                  />
                </div>
                <p className='text-muted-foreground text-sm'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All CTA */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className='w-5 h-5' />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}
