import { useEffect, useRef, useState } from 'react';




const LandingAnimation = () => {

    const canvas = document.getElementById('main') as HTMLCanvasElement | null;

    const CTX = canvas?.getContext('2d');



    return (
        <canvas id='main'></canvas>
    )
}

export default LandingAnimation 
