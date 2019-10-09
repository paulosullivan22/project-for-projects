import React from 'react'

import './Projects.css'
import { ProjectList } from './ProjectList'

class Projects extends React.Component {
    render() {
        return (
            <div>
                {ProjectList.map(project => {
                    return (
                        <div className="project-item" onClick={() => this.props.selectProject(project.id)}>

                            <h3>{project.title}</h3>
                            <p>{project.info}</p>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Projects