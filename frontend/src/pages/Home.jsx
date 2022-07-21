import React, { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import api from "@services/api";
import Counter from "@components/Counter";
import Model from "../avatar/Model";
import ModelInterior from "../components/interior/ModelInterio";
import "./home.css";
import PresDetail from "../components/presDetail/PresDetail";
import CurrentPagesContext from "../PagesContexts";
// import { OrbitControls } from '@react-three/drei';

export default function Home() {
  const { pres, setPres } = useContext(CurrentPagesContext);
  const { count, setCount } = useContext(CurrentPagesContext);

  const handleclick = () => {
    setCount((oldCount) => oldCount + 1);
    api.get(`/api/presentation/${count}`).then((res) => setPres(res.data));
  };
  const handleclick2 = () => {
    setCount((oldCount) => oldCount - 1);

    api.get(`/api/presentation/${count}`).then((res) => setPres(res.data));
  };
  return (
    <>
      {/* scene threejs */}
      <Canvas
        camera={{ position: [0, 0.3, 3.4], fov: 38 }}
        style={{
          backgroundColor: "#111a21",
          width: "100vw",
          height: "100vh",
          position: "relative",
          zIndex: "0,",
        }}
      >
        <ambientLight intensity={0.5} />
        <ambientLight intensity={0.2} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <ModelInterior position={[0.025, -0.9, 1]} />
          <Model position={[1.025, -0.9, 0]} />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
      {/* FIN scene threejs */}

      <PresDetail pres={pres} />

      <Counter handleclick={handleclick} handleclick2={handleclick2} />
    </>
  );
}
