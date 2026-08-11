import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Icosahedron, Sphere, TorusKnot } from '@react-three/drei'
import * as THREE from 'three'

interface WebXRViewerProps {
  domain: string
}

const FloatingGeometry = ({ domain }: { domain: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state: any) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  // Material mimicking the "Anti-Gravity" glass/void aesthetic
  const material = new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    wireframe: true,
    transparent: true,
    opacity: 0.15,
    roughness: 0.1,
    transmission: 0.9,
    thickness: 1,
  })

  // Render different shapes based on domain
  if (domain === 'AI' || domain === 'DL' || domain === 'ML') {
    return (
      <TorusKnot ref={meshRef} args={[1, 0.3, 128, 32]} material={material} />
    )
  }

  if (domain === 'Blockchain') {
    return (
      <Icosahedron ref={meshRef} args={[1.5, 1]} material={material} />
    )
  }

  return (
    <Sphere ref={meshRef} args={[1.5, 32, 32]} material={material} />
  )
}

export default function WebXRViewer({ domain }: WebXRViewerProps) {
  return (
    <div style={{ width: '100%', height: '300px', background: 'transparent', cursor: 'grab' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#444444" />
        <FloatingGeometry domain={domain} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
