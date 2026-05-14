import { useState, useEffect } from "react";

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/videos`,
        );
        if (!response.ok) throw new Error("Error al cargar la cartelera");

        const data = await response.json();

        const maxHype = Math.max(...data.map((v) => v.hypeScore));
        const processedVideos = data.map((v) => ({
          ...v,
          isCrownJewel: v.hypeScore === maxHype && maxHype > 0,
        }));

        setVideos(processedVideos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return { videos, loading, error };
};
