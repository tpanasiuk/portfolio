import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import './Work.scss'
import img1 from '../../assets/img/800x400/01.jpg'
import img2 from '../../assets/img/397x400/01.jpg'
import img3 from '../../assets/img/397x300/01.jpg'
import img4 from '../../assets/img/397x300/02.jpg'
import img5 from '../../assets/img/397x300/03.jpg'

const workItems = [
  {
    id: 'work-item-1',
    image: img1,
    title: 'Art of Coding',
    subtitle: 'Clean & Minimalistic Design',
    description:
      'Master the art of coding with modern, minimalist design principles. Our approach ensures that developers work in an efficient and aesthetically pleasing environment, reducing distractions and improving focus.',
    details: {
      leader: 'John Doe',
      designer: 'Alisa Keys',
      developer: 'Mark Doe',
      customer: 'Keenthemes',
    },
  },
  {
    id: 'work-item-2',
    image: img2,
    title: 'Modern Architecture',
    subtitle: 'Innovative Structures',
    description:
      'Our modern architectural designs blend functionality with stunning aesthetics. We emphasize sustainable materials, energy-efficient solutions, and smart building technologies to create structures that stand the test of time.',
    details: {
      leader: 'Emma Wilson',
      designer: 'Sophia Lee',
      developer: 'Chris Adams',
      customer: 'BuildTech',
    },
  },
  {
    id: 'work-item-3',
    image: img3,
    title: 'Interior Design',
    subtitle: 'Aesthetic Living Spaces',
    description:
      'We create interior spaces that are not only visually appealing but also promote comfort and well-being. From minimalist to luxurious styles, our designs reflect personality, taste, and modern-day elegance.',
    details: {
      leader: 'Oliver Brown',
      designer: 'Grace Thomas',
      developer: 'Ethan Carter',
      customer: 'DecoStyle',
    },
  },
  {
    id: 'work-item-4',
    image: img4,
    title: 'Urban Lifestyle',
    subtitle: 'Active & Dynamic City Life',
    description:
      'Explore the fast-paced urban lifestyle through a design perspective. Our projects focus on smart city planning, sustainable transportation, and vibrant public spaces that enhance the quality of urban living.',
    details: {
      leader: 'Daniel Scott',
      designer: 'Sophia Martinez',
      developer: 'William Johnson',
      customer: 'CityVibe',
    },
  },
  {
    id: 'work-item-5',
    image: img5,
    title: 'Minimalist Workspaces',
    subtitle: 'Efficient & Modern',
    description:
      'Our workspace designs prioritize efficiency, clarity, and a clutter-free environment. By using clean lines, natural light, and ergonomic layouts, we create offices that foster productivity and creativity.',
    details: {
      leader: 'James Miller',
      designer: 'Emily White',
      developer: 'Ryan Anderson',
      customer: 'WorkspacePro',
    },
  },
]

const Work = () => {
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
    <section id="work" className="work">
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

      {/* Dialog (Material UI) */}
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
                <p className="work__dialog-description">
                  We focus on delivering projects that blend aesthetics and functionality while
                  considering sustainability and innovation. Our team ensures that every detail
                  contributes to a seamless and remarkable experience.
                </p>
              </div>
              <div className="work__dialog-right">
                <span>
                  <strong>Project Leader: </strong> {selectedWork.details.leader}
                </span>
                <span>
                  <strong>Designer: </strong> {selectedWork.details.designer}
                </span>
                <span>
                  <strong>Developer: </strong> {selectedWork.details.developer}
                </span>
                <span>
                  <strong>Customer: </strong> {selectedWork.details.customer}
                </span>
              </div>
            </DialogContent>
          </div>
        )}
      </Dialog>
    </section>
  )
}

export default Work
