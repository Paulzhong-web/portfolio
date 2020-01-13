import React, { Component } from 'react';
import ProjectContent from '../ProjectContent/ProjectContent';
import './Projects.scss';

export class Projects extends Component {
    render() {
        return (
            <section className="projects">
                <div className="projects__wrap">
                    <ProjectContent />
                </div>
                <div className="projects__wrap">
                    <ProjectContent />
                </div>
            </section>
        )
    }
}

export default Projects
