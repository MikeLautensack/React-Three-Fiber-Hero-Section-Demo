# Three js demo

## Getting Started

This repo is a demo and refrence for how to load and minipulate gltf models in next using react-three-fiber.

Please follow the steps below to recreate the rendering of your gltf model in your project.

1. Install react-three-fiber and react-three-drei with the following commands `npm install three @types/three @react-three/fiber` and `npm install @react-three/drei`.

2. Put the gltf file in the public dir.

3. Use the gltfjsx package to generate a jsx or tsx component file for your gltf model or scene with the following command `npx gltfjsx [Model.glb] [options]`.

For example in this repo I would run `npx gltfjsx public/Irys-Banner-Shapes-2.gltf -t`. If I want a jsx component I would run `npx gltfjsx public/Irys-Banner-Shapes-2.gltf`. If I want a tsx component I would run `npx gltfjsx public/Irys-Banner-Shapes-2.gltf -t`. If you generate a tsx file and run into any type errors the make the type as any.

4. Mark the page componet and any component you wrap your model component in as client component with the `"use client"` decleration.

## Notes for the motion designer

1. When you are finished with your model and export it to glb, use this website `https://threejs.org/editor/` to test the exported model is the same as what you made in blender or c4d

2. After rigorous testing I have determined the source of the problems with the most recent model was the material not exporting corretly and the source of the material not exporting correctly was the `"color ramp"` setting on the material you made. I made a new material with a standard color and it exported correctly.
