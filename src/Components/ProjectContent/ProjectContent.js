import React, { Component } from 'react';
import wavSite from '../../Assets/Icon/wavSite.png';
import './ProjectContent.scss';

export class ProjectContent extends Component {
    render() {
        return (
            <div className="content">
                <p className="content__title">WE ARE VARIOUS</p>
                <div className="content__wrap">
                    <p className="content__paragraph">On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham. 
</p>
                    <div className="content__link--wrap">
                       <a className="content__link" href="http://www.wearevariousband.com/" target="_blank" rel="noopener noreferrer">Live Sites</a> 
                       <a className="content__link content__github" href="http://www.wearevariousband.com/" target="_blank" rel="noopener noreferrer">GitHub</a> 
                    </div> 
                </div>
                <div className="content__img--wrap">
                    <img className="content__img" src={wavSite} alt="website screenshot"/>
                </div>   
            </div>
        )
    }
}

export default ProjectContent
