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
      'Developed career websites based on Figma designs, ensuring accurate implementation of layouts, typography and design components. Created and optimized web-components following mobile-first approach and accessibility guidelines.',
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
    description: 'Developed front end for customized login page management application.',
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
      "Created branded web components, customized customers' career websites, developed a branding specification management tool.",
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
      "Configured the recruitment platform and delivered JavaScript based components. Integrated customers' job applications to web pages and WordPress CMS, configured and styled this according to branding guidelines.",
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
      'Provided high quality online customer service related to Google Ads, Google Analytics, Google Tag Manager. Planned and maintained the team schedule to make sure the workflow is followed. Reported the overall team performance on a daily basis and creating weekly reports',
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
                <ul className="work__dialog-description">
                  {selectedWork.description
                    .split('. ')
                    .filter((sentence) => sentence.trim() !== '')
                    .map((sentence, index) => (
                      <li key={index}>{sentence.trim().replace(/\.$/, '')}.</li>
                    ))}
                </ul>
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
