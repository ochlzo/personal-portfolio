import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [initialSize, setInitialSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setInitialSize({ width, height });
    generateStars(width, height); // pass directly
    generateMeteors();
  }, []);

  const generateStars = (width, height) => {
    const area = width * height;
    const numberOfStars = Math.floor(area / 10000);

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * width,
        y: Math.random() * height,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 1,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        opacity: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            "--x": `${star.x}px`,
            "--y": `${star.y}px`,
            "--size": `${star.size}px`,
            "--opacity": star.opacity,
            "--duration": `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
