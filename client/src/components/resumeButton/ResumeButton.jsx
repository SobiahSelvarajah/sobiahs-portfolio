import React from 'react'
import './ResumeButton.scss'

const ResumeButton = () => {
  return (
    <button className="resumeButton__button">
        {/* href - place resume pdf in assets, download - sobiahResume.pdf */}
        <a className="resumeButton__link" href="" download = "ResumeOfficial.pdf">
            Download Resume
        </a>
    </button>
  )
}

export default ResumeButton