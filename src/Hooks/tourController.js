import {useCallback, useEffect, useState} from 'react'

export const useTourController = () => {

    const cameraStops = [
    {
      position: [11.5, 1.7, -8],
      rotation: [0, Math.PI, 0],
      card: {
        title: "Bienvenido a UNIAT San Luis Potosí",
        description: "Donde tus ideas dejan de ser sueños y se vuelven proyectos reales."
      }
    },
    {
      position: [11.5, 1.7, 7],
      rotation: [0, Math.PI * 0.5, 0],
      card: {
        title: "Pasillo A",
        description: "Explora nuestras instalaciones de última generación."
      }
    },
    {
      position: [7.5, 1.7, 7],
      rotation: [0, 0, 0],
      card: {
        title: "Salón de Clases",
        description: "Espacios diseñados para el aprendizaje colaborativo."
      }
    },
    {
      position: [6.2, 1.7, 7],
      rotation: [0, Math.PI, 0],
      card: {
        title: "Área de Estudio",
        description: "Ambiente ideal para desarrollar tus proyectos."
      }
    },
    {
      position: [-9.5, 1.7, 7],
      rotation: [0, Math.PI, 0],
      card: {
        title: "Oficinas Administrativas",
        description: "Nuestro equipo está aquí para apoyarte."
      }
    },
    {
      position: [-12.5, 1.7, 7],
      rotation: [0, 0, 0],
      card: {
        title: "Comedor",
        description: "Un espacio para compartir y recargar energías."
      }
    },
    {
      position: [-12.5, 1.7, -8],
      rotation: [0, Math.PI * -0.5, 0],
      card: {
        title: "Pasillo B",
        description: "Conectando todos nuestros espacios de aprendizaje."
      }
    },
    {
      position: [-9, 1.7, -8],
      rotation: [0, Math.PI, 0],
      card: {
        title: "Laboratorio de Cómputo",
        description: "Equipamiento tecnológico de vanguardia."
      }
    },
    {
      position: [2.5, 1.7, -8.5],
      rotation: [0, Math.PI * 0.1, 0],
      card: {
        title: "Estudio de Audio",
        description: "Producción multimedia profesional."
      }
    },
    {
      position: [3.7, 1.7, -8.5],
      rotation: [0, Math.PI * -0.15, 0],
      card: {
        title: "Sala Verde",
        description: "Espacio para grabación y producción audiovisual."
      }
    }
  ];

    const [index, setIndex] = useState(0)

  const {position, rotation, card} = cameraStops[index]

  const nextIndex = useCallback(()=>{
    setIndex((prevIndex) => (prevIndex + 1) % cameraStops.length)
  }, [cameraStops.length])
  
    return {position, rotation, card, nextIndex}
}