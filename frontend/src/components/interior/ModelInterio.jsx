/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
/*eslint-disable */
export default function ModelInterior({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./interior.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-0.57, 0.36, -0.45]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.13}
      >
        <group position={[-0.35, -0.22, 0.5]} scale={6.43}>
          <mesh
            geometry={nodes.Circle003_1.geometry}
            material={materials["Cup_Glass.001"]}
          />
          <mesh
            geometry={nodes.Circle003_2.geometry}
            material={materials["Cup_Brew.001"]}
          />
          <mesh
            geometry={nodes.Circle006.geometry}
            material={materials["Cup_Bread.001"]}
          />
        </group>
        <group
          position={[-1.77, -0.22, 2.49]}
          rotation={[Math.PI, -0.63, Math.PI]}
          scale={6.43}
        >
          <mesh
            geometry={nodes.Circle008.geometry}
            material={materials["Cup_Glass.001"]}
          />
          <mesh
            geometry={nodes.Circle008_1.geometry}
            material={materials["Cup_Brew.001"]}
          />
          <mesh
            geometry={nodes.Circle004.geometry}
            material={materials["Cup_Bread.001"]}
          />
        </group>
      </group>
      <group position={[0, 1, 0]} scale={[2.43, 1, 2.43]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.Material} />
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube_3.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube_4.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cube_5.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes.Cube_6.geometry}
          material={materials["Material.012"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, -2.32]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, -2.11]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, -1.59]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, -1.39]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, -1.18]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, -0.7]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, -0.49]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, -0.29]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, -0.08]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, 0.13]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, 0.34]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, 0.55]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, 1.05]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, 1.26]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1, 1.47]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material.011"]}
        position={[-1.9, 0.08, 0.95]}
        scale={[0.4, 0.4, 0.46]}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={materials["Material.004"]}
        position={[-1.9, 0.33, 1.33]}
        scale={[0.4, 0.24, 0.08]}
      />
      <mesh
        geometry={nodes.Cube017.geometry}
        material={materials["Material.004"]}
        position={[-1.9, 0.32, 0.58]}
        scale={[0.4, 0.24, 0.08]}
      />
      <mesh
        geometry={nodes.Cube018.geometry}
        material={materials["Material.004"]}
        position={[-6.84, 0.08, 0.95]}
        scale={[0.4, 0.5, 0.31]}
      />
      <mesh
        geometry={nodes.Cube020.geometry}
        material={materials["Material.004"]}
        position={[-2.24, 0.34, 0.95]}
        scale={[0.05, 0.23, 0.3]}
      />
      <mesh
        geometry={nodes.Cube019.geometry}
        material={materials["Material.004"]}
        position={[-2.14, 0.52, 0.95]}
        rotation={[0, 0, 0.31]}
        scale={[0.06, 0.25, 0.28]}
      />
      <mesh
        geometry={nodes.Cube021.geometry}
        material={materials["Material.004"]}
        position={[-6.84, 0.25, 0.95]}
        scale={[0.4, 0.19, 0.31]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials["Material.011"]}
        position={[-1.9, 0.08, -0.35]}
        scale={[0.4, 0.4, 0.46]}
      />
      <mesh
        geometry={nodes.Cube022.geometry}
        material={materials["Material.004"]}
        position={[-1.9, 0.33, 0.03]}
        scale={[0.4, 0.24, 0.08]}
      />
      <mesh
        geometry={nodes.Cube023.geometry}
        material={materials["Material.004"]}
        position={[-1.9, 0.33, -0.72]}
        scale={[0.4, 0.24, 0.08]}
      />
      <mesh
        geometry={nodes.Cube024.geometry}
        material={materials["Material.004"]}
        position={[-6.84, 0.08, -0.35]}
        scale={[0.4, 0.5, 0.31]}
      />
      <mesh
        geometry={nodes.Cube025.geometry}
        material={materials["Material.004"]}
        position={[-2.24, 0.34, -0.35]}
        scale={[0.05, 0.23, 0.3]}
      />
      <mesh
        geometry={nodes.Cube026.geometry}
        material={materials["Material.004"]}
        position={[-2.14, 0.52, -0.35]}
        rotation={[0, 0, 0.31]}
        scale={[0.06, 0.25, 0.28]}
      />
      <mesh
        geometry={nodes.Cube027.geometry}
        material={materials["Material.004"]}
        position={[-6.84, 0.25, -0.35]}
        scale={[0.4, 0.19, 0.31]}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials["Material.011"]}
        position={[-0.45, 0.08, -1.54]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.4, 0.4, 0.83]}
      />
      <mesh
        geometry={nodes.Cube028.geometry}
        material={materials["Material.004"]}
        position={[-1.2, 0.33, -1.54]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.4, 0.24, 0.08]}
      />
      <mesh
        geometry={nodes.Cube030.geometry}
        material={materials["Material.004"]}
        position={[-0.45, 0.07, -6.48]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.4, 0.5, 0.73]}
      />
      <mesh
        geometry={nodes.Cube031.geometry}
        material={materials["Material.004"]}
        position={[-0.45, 0.34, -1.88]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.05, 0.23, 0.67]}
      />
      <mesh
        geometry={nodes.Cube029.geometry}
        material={materials["Material.004"]}
        position={[0.3, 0.33, -1.54]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.4, 0.24, 0.08]}
      />
      <mesh
        geometry={nodes.Cube032.geometry}
        material={materials["Material.004"]}
        position={[-0.78, 0.24, -6.48]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.4, 0.2, 0.36]}
      />
      <mesh
        geometry={nodes.Cube033.geometry}
        material={materials["Material.004"]}
        position={[-0.11, 0.24, -6.48]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.4, 0.2, 0.36]}
      />
      <mesh
        geometry={nodes.Cube034.geometry}
        material={materials["Material.004"]}
        position={[-0.78, 0.53, -1.75]}
        rotation={[-0.31, -Math.PI / 2, 0]}
        scale={[0.06, 0.23, 0.32]}
      />
      <mesh
        geometry={nodes.Cube035.geometry}
        material={materials["Material.004"]}
        position={[-0.12, 0.53, -1.75]}
        rotation={[-0.31, -Math.PI / 2, 0]}
        scale={[0.06, 0.23, 0.32]}
      />
      <group position={[-0.45, 0.11, -0.22]} scale={[0.47, 0.49, 0.37]}>
        <mesh
          geometry={nodes.Plane003_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Plane003_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Plane003_3.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group position={[-1.84, 0, -1.61]} scale={0.19}>
        <mesh
          geometry={nodes.Cylinder2601.geometry}
          material={materials.metal}
        />
        <mesh
          geometry={nodes.Cylinder2601_1.geometry}
          material={materials.Soil2}
        />
        <mesh
          geometry={nodes.Cylinder2601_2.geometry}
          material={materials["Areca palm"]}
        />
        <mesh
          geometry={nodes.Cylinder2601_3.geometry}
          material={materials["Areca palm2"]}
        />
      </group>
      <group
        position={[-0.7, 0.34, -0.1]}
        rotation={[-Math.PI, 0.26, -Math.PI]}
        scale={[0.06, 0, 0.09]}
      >
        <mesh geometry={nodes.Cube041_1.geometry} material={materials.cover} />
        <mesh geometry={nodes.Cube041_2.geometry} material={materials.paper} />
      </group>
      <group
        position={[-0.7, 0.35, -0.1]}
        rotation={[-3.14, 0.27, -3.14]}
        scale={[0.06, 0, 0.09]}
      >
        <mesh geometry={nodes.Cube040_1.geometry} material={materials.cover} />
        <mesh geometry={nodes.Cube040_2.geometry} material={materials.paper} />
      </group>
      <group
        position={[-0.7, 0.34, -0.1]}
        rotation={[-3.14, 0.18, 3.14]}
        scale={[0.06, 0, 0.09]}
      >
        <mesh geometry={nodes.Cube039_1.geometry} material={materials.cover} />
        <mesh geometry={nodes.Cube039_2.geometry} material={materials.paper} />
      </group>
      <group
        position={[-0.7, 0.36, -0.1]}
        rotation={[-3.14, 0.26, -3.14]}
        scale={[0.06, 0, 0.09]}
      >
        <mesh geometry={nodes.Cube038_1.geometry} material={materials.cover} />
        <mesh geometry={nodes.Cube038_2.geometry} material={materials.paper} />
      </group>
      <group
        position={[-0.68, 0.36, -0.21]}
        rotation={[2.88, 0.33, -3.07]}
        scale={[0.06, 0, 0.09]}
      >
        <mesh geometry={nodes.Cube029_1.geometry} material={materials.cover} />
        <mesh geometry={nodes.Cube029_2.geometry} material={materials.paper} />
      </group>
      <group
        position={[0.75, 0, -1.61]}
        rotation={[-Math.PI, 0.3, -Math.PI]}
        scale={0.19}
      >
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials.metal}
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Soil2}
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Areca palm"]}
        />
        <mesh
          geometry={nodes.Cylinder001_3.geometry}
          material={materials["Areca palm2"]}
        />
      </group>
      <group
        position={[-0.44, 1.52, -2.44]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.29}
      >
        <mesh
          geometry={nodes.Circle_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Circle_2.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <group
        position={[-0.16, 1.8, -2.44]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.29}
      >
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Circle001_2.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <group
        position={[-0.75, 1.78, -2.44]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.29}
      >
        <mesh
          geometry={nodes.Circle002_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Circle002_2.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube041.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1.02, 1.93]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube042.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1.02, 2.13]}
        scale={[0.01, -1.05, 0.1]}
      />
      <mesh
        geometry={nodes.Cube043.geometry}
        material={materials["Material.003"]}
        position={[-2.41, 1.02, 2.34]}
        scale={[0.01, -1.05, 0.1]}
      />
    </group>
  );
}
/* eslint-enable */
useGLTF.preload("./interior.glb");
