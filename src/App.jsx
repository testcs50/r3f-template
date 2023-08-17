/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import "./App.css";

function App() {

  return (<Canvas flat>
    <color attach="background" args={[0, 0, 0]} />

    <Perf position="top-left" />

    <OrbitControls makeDefault />

    <mesh position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 5]} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>

    <ambientLight />
    <directionalLight position={[1, 2, 3]} />
  </Canvas>
  );
}

export default App;
