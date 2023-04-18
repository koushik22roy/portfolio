import React from 'react'

function Info() {
    return (
        <div className='about__info grid'>
            <div className="about__box">
                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__title">1+ Years Working</span>
            </div>

            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__title">14+ projects</span>
            </div>
        </div>
    )
}

export default Info