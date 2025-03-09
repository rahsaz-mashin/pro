"use client"


import { Canvas } from "@react-three/fiber";
import {OrbitControls, useGLTF} from "@react-three/drei";
// import { MeshProps } from "three";
// import { useRef } from "react";



function Model() {
    const { scene } = useGLTF("/glb/01.gltf"); // Load the GLB file

    return <primitive object={scene} />;
}


function Cube() {
    // const cubeRef = useRef<MeshProps>(null);

    return (
        <Canvas style={{ width: "100vw", height: "100vh" }}>

            <ambientLight intensity={0.5} />
            {/* Directional Light without shadows */}
            <directionalLight position={[2, 2, 5]} castShadow={false} />
            {/* Cube */}

            <Model/>
            {/*<mesh rotation={[0.4, 0.2, 0]}>*/}
            {/*    <boxGeometry args={[1, 1, 1]} />*/}
            {/*    <meshStandardMaterial color="blue" />*/}
            {/*</mesh>*/}
            <OrbitControls />
        </Canvas>
    );
}


export default function Home() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Cube />
        </div>
    );
}
