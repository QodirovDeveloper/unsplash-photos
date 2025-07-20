import { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../components/ImageCard";

const ACCESS_KEY = "Wz6wMjicBiLYuxxdeDfDDvHsJ38t6OmodC8BYcyvlWk";

function Home({ searchQuery }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${ACCESS_KEY}`
        )
        .then((res) => setImages(res.data.results))
        .catch((err) => console.error(err));
    }
  }, [searchQuery]);

  return (
    <div className="min-[973px]:pt-32 max-[973px]:pt-48 px-4 min-[973px]:pl-20">
      {images.length > 0 ? (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {images.map((img) => (
            <div key={img.id} className="mb-4 break-inside-avoid">
              <ImageCard image={img} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Search for images above</p>
      )}
    </div>
  );
}

export default Home;
