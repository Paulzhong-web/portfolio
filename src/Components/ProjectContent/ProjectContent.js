import React, { Component } from 'react';
import './ProjectContent.scss';

export class ProjectContent extends Component {
    render() {
        const { name, description, websiteUrl, githubUrl, image } = this.props.item;
        return (
            <div className="content--control">
            <div className="content">
                <p className="content__title">{name}</p>
                <div className="content__wrap">
                    <p className="content__paragraph">{description}</p>
                    <div className="content__link--wrap">
                       <a className="content__link" href={websiteUrl} target="_blank" rel="noopener noreferrer">Live Sites</a> 
                       <a className="content__link content__github" href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a> 
                    </div> 
                </div>
                <div className="content__img--wrap">
                    <img className="content__img" src={image} alt="website screenshot"/>
                </div>   
            </div>
            </div>
        )
    }
}

export default ProjectContent
