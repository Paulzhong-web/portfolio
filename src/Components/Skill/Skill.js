import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import Html5Svg from "../../Assets/Icon/html5.svg";
import Css5Svg from "../../Assets/Icon/css-5.svg";
import SassSvg from '../../Assets/Icon/sass-1.svg';
import ReactSvg from '../../Assets/Icon/react.svg';
import JavacriptSvg from '../../Assets/Icon/javascript.svg';
import NodeSvg from '../../Assets/Icon/nodejs.svg';
import ExpressSvg from '../../Assets/Icon/express.svg';

import './Skill.scss';

const spring = {
    type: "spring",
    damping: 30,
    stiffness: 200
  };

export const Skill = () => {
        const [svgs, setSvgs] = useState([
            Html5Svg, Css5Svg, SassSvg, ReactSvg, JavacriptSvg, NodeSvg, ExpressSvg
        ]);
        
        useEffect(() => {
            setTimeout(() => setSvgs(shuffle(svgs)), 3000);
        }, [svgs]);

        return (
            <section className="skill">
                {svgs.map(item => {
                    return (
                    <motion.img
                        key={item}
                        src={item}
                        layoutTransition={spring}
                        className="skill__img"
                    />
                    )
                })}
            </section>
        )  
}

export default Skill