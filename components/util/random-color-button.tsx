import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button } from '@material-ui/core';
import { v4 } from 'uuid';

export default function RandomColorButton({  }: any) {
    const [color, setColor] = useState('#999999');

    const colorChange = useSpring({
        to: {
            backgroundColor: color
        }
    });

    const AnnimatedButton = animated(Button);
    return (
        <AnnimatedButton  variant="contained" color="primary" style={colorChange} onClick={() => setColor(`#${v4().substring(0,6)}`)}>Color Button</AnnimatedButton>
    );
}