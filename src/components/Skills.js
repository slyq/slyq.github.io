import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Text, TrackballControls } from '@react-three/drei'
import { skills } from '../data'
import chroma from "chroma-js"

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  })

  const handleClick = () => {
    props.onClick(children);
  }

  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} onClick={handleClick}/>
}

function Cloud({ radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const [dotColor, setDotColor] = useState("#f0f0f0")
  const [type, setType] = useState("")
  const words = useMemo(() => {
    const skillList = (type === "" || !skills.hasOwnProperty(type)) ? Object.keys(skills) : skills[type];
    const count = Math.ceil(Math.sqrt(skillList.length));
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), skillList[(i-1) * count + j]])
    return temp
  }, [type, radius])

  const changeCloud = type => {
      if (type !== "")
      setType(type);
  }

  const attemptBack = () => {
      if (type !== "") {
          setType("");
          setDotColor("#f0f0f0");
      }
  }

  return (
      <>
        <Sphere onClick={attemptBack}>
            <meshBasicMaterial color={dotColor}/>
        </Sphere>
        {words.map(([pos, word], index) => <Word key={index} position={pos} children={word} onClick={(t) => {changeCloud(t)}}/>)}
      </>
  )
}

const Skills = () => {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 30], fov: 90 }} className="skill-graph">
        <fog attach="fog" args={['#202025', 0, 80]} />
        
        <Cloud radius={20} />
        <TrackballControls />
        </Canvas>
    )
}

export default Skills;