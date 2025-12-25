import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { useControls } from 'leva';

export function Scene() {
  const { backgroundColor } = useControls('Scene', {
    backgroundColor: '#393E46'
  }, {collapsed: true});

  const { gridSize, ...gridConfig } = useControls('Grid', {
    gridSize: [10.5, 10.5],
    cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
    cellColor: '#6f6f6f',
    sectionSize: { value: 3, min: 0, max: 10, step: 0.1 },
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    sectionColor: '#9d4b4b',
    fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    followCamera: true,
    infiniteGrid: true
  }, {collapsed: true})

  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <color attach="background" args={[backgroundColor]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Grid args={gridSize} {...gridConfig}/>
        <OrbitControls />
      </Canvas>
    </div>
  );
}