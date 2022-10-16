import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, } from "@react-three/drei"
import { Suspense, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader, Vector3 } from 'three'
import earthmap from './assets/earthmap10k.jpg'
import { Search } from './components/Search'
import { sphericalToCartesian } from './utils/math'


function App() {
  let positionXYZ = new Vector3(...sphericalToCartesian(51.5072, 0.1276, 5))
  const earthMap = useLoader(TextureLoader, earthmap)
  const [position, setPosition] = useState(positionXYZ)
  return (
    <div className="App">
      <h2>Earth position: </h2>
      <p>{position.x}, {position.y}, {position.z}</p>
      {/* <Search /> */}
      <Canvas style={{
        backgroundColor: "rgb(50,50,50)",
        width: "784px",
        height: "784px"
      }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <mesh>
            <sphereGeometry args={[5, 50, 50]} />
            <meshBasicMaterial map={earthMap} />
            <OrbitControls enableZoom={true} enablePan={true} enableDamping={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} />
          </mesh>
          <mesh position={[position.x, position.y, position.z]}>
            <sphereGeometry args={[0.1, 20, 20]} />
            <meshBasicMaterial color="red" />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
