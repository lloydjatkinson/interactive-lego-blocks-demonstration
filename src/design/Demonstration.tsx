import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import { Model } from './Model'

export const Demonstration = () => {
    return (
        <Canvas camera={{ position: [0, 15, 30] }}>
            <Suspense fallback={null}>
                <OrbitControls  autoRotate/>
                <Model />
                <Environment preset="warehouse" />
            </Suspense>
        </Canvas>
    );
};