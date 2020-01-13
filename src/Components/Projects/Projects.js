import React, { Component } from 'react';
import ProjectContent from '../ProjectContent/ProjectContent';
import ProjectsInfo from '../../Data/ProjectsInfo';
import './Projects.scss';

export class Projects extends Component {
    render() {
        return (
            <section className="projects">
                {
                    ProjectsInfo.map((item, i) => {
                        return (
                            <div className="projects__wrap" key={i}>
                                <ProjectContent item={item} />
                            </div> 
                        )
                    })
                }

            </section>
        )
    }
}

export default Projects
