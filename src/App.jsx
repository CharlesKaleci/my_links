import React, { useEffect, useRef } from "react";
import profile_picture from "./assets/images/pp.jpeg";
import "./assets/styles/tailwind.css";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Resize canvas to match the window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);

    const drawMatrixEffect = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#fff";
      ctx.font = "20px monospace";

      drops.forEach((y, index) => {
        const text = Math.random() > 0.5 ? "1" : "0";
        const x = index * 20;
        ctx.fillText(text, x, y * 20);

        if (y * 20 > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }
        drops[index] += 0.3; // Slows down the drop speed
      });

      animationFrameId = requestAnimationFrame(drawMatrixEffect);
    };

    drawMatrixEffect();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gray-700">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Profile Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] max-w-[400px]">
        <img
          src={profile_picture}
          alt="Profile"
          className="w-36 h-36 object-cover mx-auto rounded-full border-4 border-white"
        />
        <h1 className="text-2xl text-white mt-4">Mustafa Kaan Kaleci</h1>
        <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/CharlesKaleci" target="_blank" rel="noopener noreferrer" className="relative text-white hover:text-slate-300 transition-colors group">
          <i className="fab fa-github text-2xl"></i>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            github
          </div>
        </a>

        <a href="https://www.linkedin.com/in/mustafa-kaan-kaleci-b00b7327a/" target="_blank" rel="noopener noreferrer" className="relative text-white hover:text-slate-300 transition-colors group">
  <i className="fab fa-linkedin text-2xl"></i>
  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    LinkedIn
  </div>
</a>
<a href="https://x.com/charlesski6" target="_blank" rel="noopener noreferrer" className="relative text-white hover:text-slate-300 transition-colors group">
  <i className="fab fa-twitter text-2xl"></i>
  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Twitter
  </div>
</a>
<a href="https://open.spotify.com/user/bzjk5aoay3u3cn0ztzr6qt1p8" target="_blank" rel="noopener noreferrer" className="relative text-white hover:text-slate-300 transition-colors group">
  <i className="fa-brands fa-spotify text-2xl"></i>
  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Spotify
  </div>
</a>
<a href="https://www.instagram.com/mkaan.js/" target="_blank" rel="noopener noreferrer" className="relative text-white hover:text-slate-300 transition-colors group">
  <i className="fa-brands fa-instagram text-2xl"></i>
  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Instagram
  </div>
</a>
<a href="mailto:mustafakaankaleci@gmail.com" target="_blank" rel="noopener noreferrer" className="relative text-white hover:text-slate-300 transition-colors group">
  <i className="fa-solid fa-envelope text-2xl"></i>
  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Email
  </div>
</a>

        </div>
      </div>
    </div>
  );
};

export default App;
