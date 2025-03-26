import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import useScrollFadeIn from '../../hooks/useScrollFadeIn'
import './Work.scss'
import img1 from '../../assets/img/work/1.png'
import img2 from '../../assets/img/work/2.png'
import img3 from '../../assets/img/work/3.jpg'
import img4 from '../../assets/img/work/4.png'
import img5 from '../../assets/img/work/5.png'

const workItems = [
  {
    id: 'work-item-1',
    image: img1,
    title: 'Web Developer',
    subtitle: 'SmartRecruiters · 05.2024 — Present',
    description:
      'Creating and optimizing web components using HTML5, SCSS, JavaScript, TypeScript, and React. Building career websites based on Figma designs and maintaining code quality via unit testing (Vitest, Jest).',
    techStack: ['React', 'TypeScript', 'SCSS', 'HTML5', 'JavaScript', 'Figma', 'Vitest', 'Jest'],
    details: {
      location: 'Cracow, Poland',
    },
  },
  {
    id: 'work-item-2',
    image: img2,
    title: 'Software Engineer',
    subtitle: 'Cornerstone OnDemand · 03.2023 — 04.2024',
    description:
      'Developed an application for customized login page management using React, Redux, and TypeScript.',
    techStack: ['React', 'Redux', 'TypeScript', 'JavaScript', 'CSS'],
    details: {
      location: 'Cracow, Poland',
    },
  },
  {
    id: 'work-item-3',
    image: img3,
    title: 'Associate Software Engineer',
    subtitle: 'Cornerstone OnDemand · 08.2022 — 03.2023',
    description:
      'Created branded web components, customized customer career websites (JavaScript, jQuery), and developed a branding specification management tool using Vue.js and Less.',
    techStack: ['Vue.js', 'Less', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
    details: {
      location: 'Cracow, Poland',
    },
  },
  {
    id: 'work-item-4',
    image: img4,
    title: 'Junior Front Office Developer',
    subtitle: 'Saba Software · 01.2019 — 07.2020',
    description:
      'Configured and styled recruitment platforms, integrated job applications using JavaScript and WordPress. Applied branding guidelines using CSS and Bootstrap for styling.',
    techStack: ['JavaScript', 'CSS', 'HTML', 'Bootstrap', 'WordPress'],
    details: {
      location: 'Cracow, Poland',
    },
  },
  {
    id: 'work-item-5',
    image: img5,
    title: 'Customer Service Representative',
    subtitle: 'Arvato Finance · 02.2017 — 08.2018',
    description:
      'Providing high quality online customer service related to Google Ads, Google Analytics, Google Tag Manager. Planning and maintaining the team schedule to make sure the workflow is followed. Reporting the overall team performance on a daily basis and creating weekly reports',
    techStack: ['Google Ads', 'Google Analytics', 'Google Tag Manager'],
    details: {
      location: 'Cracow, Poland',
    },
  },
]

const Work = () => {
  const { ref, isVisible } = useScrollFadeIn()

  const [openDialog, setOpenDialog] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null)

  const handleOpenDialog = (work) => {
    setSelectedWork(work)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  return (
    <section ref={ref} className={`work ${isVisible ? 'is-visible' : ''}`}>
      <h2 className="work__title">Companies I have worked in</h2>
      <div className="work__grid">
        {workItems.map((work) => (
          <div
            key={work.id}
            id={work.id}
            className="work__item"
            role="button"
            tabIndex={0}
            aria-label={`Open details for ${work.title}`}
            onClick={() => handleOpenDialog(work)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleOpenDialog(work)
              }
            }}
          >
            <img src={work.image} alt={work.title} className="work__image" />
          </div>
        ))}
      </div>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        disableScrollLock={true}
        fullWidth
      >
        {selectedWork && (
          <div className="work__dialog">
            <DialogTitle className="work__dialog-title">
              <div className="work__dialog-header">
                <h3 className="work__dialog-heading">{selectedWork.title}</h3>
                <p className="work__dialog-subtitle">{selectedWork.subtitle}</p>
              </div>
              <IconButton
                onClick={handleCloseDialog}
                aria-label="Close"
                className="work__dialog-close"
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent className="work__dialog-content">
              <div className="work__dialog-left">
                <p className="work__dialog-description">{selectedWork.description}</p>
              </div>
              <div className="work__dialog-right">
                <span>
                  <strong>Location: </strong> {selectedWork.details.location}
                </span>
                <div className="work__dialog-tech">
                  <strong>Tech Stack:</strong>
                  <ul className="work__dialog-tags">
                    {selectedWork.techStack.map((tech, index) => (
                      <li key={index} className="work__dialog-tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </div>
        )}
      </Dialog>
    </section>
  )
}

export default Work
