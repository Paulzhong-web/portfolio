import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import PaulPhoto from '../../Assets/Icon/paulzhong.png';
import BandInfo from '../../Data/BandInfo.js';
import './modal.css';
import './About.scss';

const About = () => {
    const[modalOn, setModalOn]=useState(false)
    const toggleModal = () => setModalOn(!modalOn)
        return (
            <section className="about">
                <div className="about__wrap">
                    <div className="about__img--wrap">
                        <img src={PaulPhoto} className="about__img" alt="Paul Zhong"/>
                    </div>
                    <div className="about__info--wrap">
                        <div className="about__info">
                            <p className="about__info--text about__title">Hello!</p>
                            <p className="about__info--text">I am a creative web developer who leverages technical, detail-oriented and problem-solving skills to create dynamic, high-speed website optimizing user experience.</p>
                            <p className="about__info--text">I like fashion and music, and I play in a band called <span className="about__band" onClick={toggleModal}>WE ARE VARIOUS</span> .</p>
                        </div>
                        <div className="about__info">
                            <p className="about__info--text about__title">Skills</p>
                        </div>
                    </div>

                </div>
                <Modal
                    show={modalOn}
                    onHide={toggleModal}
                >
                    <Modal.Body bsPrefix="band-modal">
                          {
                              BandInfo.map((item, i) => {
                                  return ( 
                                  <a
                                    className="band-modal__icon"
                                    key={i}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        <img className="band-modal__img" src={item.icon} alt="social-meida-icon"/>
                                        <p className="band-modal__text">{item.name}</p>
                                  </a> )
                              })
                          }
                    </Modal.Body>
                </Modal>
            </section>
        )
    }


export default About
