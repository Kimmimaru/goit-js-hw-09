import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hummingbird-4202forgot-thumb.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hummingbird-4202forgot.jpg",
    description: "Hummingbird",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677-thumb.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677.jpg",
    description: "Container Haulage Services",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/59/beach-4206785-thumb.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/59/beach-4206785.jpg",
    description: "Beach",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375-thumb.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375.jpg",
    description: "Child",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rami-4202236-thumb.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rami-4202236.jpg",
    description: "Rami",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/sunflower-4202179-thumb.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/sunflower-4202179.jpg",
    description: "Sunflower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rain-4202210-thumb.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rain-4202210.jpg",
    description: "Rain",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/child-4202188-thumb.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/child-4202188.jpg",
    description: "Child",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/baby-4202200-thumb.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/baby-4202200.jpg",
    description: "Baby",
  },
];

const galleryContainer = document.querySelector(".gallery");

// Create gallery items from the images array
const galleryItems = images.map((image) => {
  const li = document.createElement("li");
  li.className = "gallery-item";

  const link = document.createElement("a");
  link.className = "gallery-link";
  link.href = image.original;

  const img = document.createElement("img");
  img.className = "gallery-image";
  img.src = image.preview;
  img.alt = image.description;

  link.appendChild(img);
  li.appendChild(link);

  return li;
});

// Add all gallery items to the gallery container
galleryContainer.append(...galleryItems);

// Initialize SimpleLightbox with options
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
