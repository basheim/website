import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button } from '@material-ui/core';

export default function ToggleButton({ opacity, fontSize }: any) {
    const [isToggled, setToggle] = useState(true);

    const fadeOnToggle = useSpring({
        to: {
            opacity: opacity ? isToggled ? 1 : 0: 1,
            fontSize: fontSize ? isToggled ? '0.85rem' : '2rem': '0.85rem'
        }
    });

    const AnnimatedButton = animated(Button);
    return (
        <AnnimatedButton  variant="contained" color="primary" style={fadeOnToggle} onClick={() => setToggle(!isToggled)}>Toggle Button</AnnimatedButton>
    );
}