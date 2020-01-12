import React, { Component } from 'react';
import ProjectContent from '../ProjectContent/ProjectContent';
import './Projects.scss';

export class Projects extends Component {
    render() {
        return (
            <section className="projects">
                {/* <h1>projects</h1> */}
                <ProjectContent />
            </section>
        )
    }
}

export default Projects
