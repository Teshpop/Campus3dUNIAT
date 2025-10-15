import { useState, useCallback } from "react";

export const useCameraController = () => {
  const cameraPositions = [
    [11.5, 1.7, -8], // Entrada
    [11.5, 1.7, 7], // Pasillo A
    [7.5, 1.7, 7], // Salon sin computadoras
    [6.2, 1.7, 7], // Salon sin computadoras 2
    [-9.5, 1.7, 7], // Oficinas
    [-12.5, 1.7, 7], // Comedor pasillo A
    [-12.5, 1.7, -8], // Comedor pasillo B
    [-9, 1.7, -8], // Salones Computadoras
    [2.5, 1.7, -8.5], // Cuarto de Audio
    [3.7, 1.7, -8.5] // Cuarto verde
  ];

  const cameraRotation = [
    [0, Math.PI, 0], // Entrada
    [0, Math.PI * 0.5, 0], // Pasillo A
    [0, 0, 0], // Salon sin computadoras
    [0, Math.PI, 0], // Salon sin computadoras 2
    [0, Math.PI, 0], // Oficinas
    [0, 0, 0], // Comedor pasillo A
    [0, Math.PI * -0.5, 0], //Comedor pasillo B
    [0, Math.PI, 0], // Salones Computadoras
    [0, Math.PI * 0.1, 0], // Cuarto de Audio
    [0, Math.PI * -0.15, 0] // Cuarto verde
  ];
  const [index, setIndex] = useState(0);

  // Posición y Rotacion actual de cámara
  const cameraPos = cameraPositions[index];
  const cameraRot = cameraRotation[index];

  // Función para ir a la siguiente posición
  const nextCameraPos = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % cameraPositions.length);
  }, [cameraPositions.length]);

  return { cameraPos, cameraRot, nextCameraPos, cameraPositions, index };
};
