import React, { Suspense, useContext, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import api from "@services/api";
import Counter from "@components/Counter";
import Nav from "@components/nav/Nav";
import Model from "../avatar/Model";
import ModelInterior from "../components/interior/ModelInterio";

import "./home.css";

import CurrentPagesContext from "../PagesContexts";

export default function Home() {
  const { setPres } = useContext(CurrentPagesContext);
  const { count } = useContext(CurrentPagesContext);

  useEffect(() => {
    api
      .get(`/api/presentation/${count}`)
      .then((res) => setPres(res.data))
      .catch((err) => console.error(err));
  }, [count]);

  return (
    <>
      {/* scene threejs */}
      <Canvas
        camera={{ position: [0, 1.3, 3.4], fov: 38 }}
        style={{
          backgroundColor: "#c8cdd1",
          width: "100vw",
          height: "100vh",
          position: "relative",
          zIndex: "0,",
        }}
      >
        <Model position={[1.025, -0.9, 0]} />
        <ambientLight intensity={0.5} />
        <ambientLight intensity={0.2} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <ModelInterior position={[-0.2, -0.9, 1]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
      {/* FIN scene threejs */}

      <Nav />
      <Counter />
    </>
  );
}
