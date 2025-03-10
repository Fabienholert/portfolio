import React, { useEffect, useState } from "react";

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Créer des bulles au chargement du composant
    const bubbleCount = 50; // Nombre de bulles
    const newBubbles = [];

    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push({
        id: i,
        left: Math.random() * 100, // Position horizontale en %
        size: Math.random() * 5 + 1, // Taille entre 1 et 6 rem
        animationDuration: Math.random() * 15 + 10, // Durée entre 10 et 25 secondes
        opacity: Math.random() * 0.3 + 0.1, // Opacité entre 0.1 et 0.4
      });
    }

    setBubbles(newBubbles);
  }, []);

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}rem`,
            height: `${bubble.size}rem`,
            animationDuration: `${bubble.animationDuration}s`,
            opacity: bubble.opacity,
          }}
        />
      ))}

      <style jsx>{`
        .bubble-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: -1;
          background: linear-gradient(to bottom, #1e3c72, #2a5298);
        }

        .bubble {
          position: absolute;
          bottom: -10%;
          background-color: white;
          border-radius: 50%;
          animation-name: rise;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            bottom: -10%;
            opacity: 0;
          }
          10% {
            opacity: calc(var(--bubble-opacity, 0.3));
          }
          90% {
            opacity: calc(var(--bubble-opacity, 0.3));
          }
          100% {
            transform: translateY(-100vh) scale(0.8);
            bottom: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BubbleBackground;
