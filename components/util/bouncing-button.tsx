import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button } from '@material-ui/core';

export default function BouncyButton({ }: any) {
    const [isToggled, setToggle] = useState(true);
    const props = useSpring({x: isToggled ? 1 : 0, friction: 200, mass: 22})
    const bounce: any = {
        transform: props.x
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
          })
          .interpolate(x => `scale(${x})`)
      };

    const AnnimatedButton = animated(Button);
    return (
        <AnnimatedButton  variant="contained" color="primary" style={bounce} onClick={() => setToggle(!isToggled)}>Bouncy Button</AnnimatedButton>
    );
}
