import React from 'react'

import { ProjectList } from './ProjectList'

const IndividualProject = props => {
        const selectedProject = ProjectList.find(project => project.id === props.id)

        return (
            <div>
                <h1>{selectedProject.title}</h1>
                <p>{selectedProject.info}</p>
            </div>
        )
    
}

export default IndividualProject