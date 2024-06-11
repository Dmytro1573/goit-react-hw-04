import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onImageClick }) => (
  <ul className={css["image-gallery"]}>
    {photos.map(({ id, urls, slug }) => (
      <li key={id}>
        <ImageCard
          className={css["image-card"]}
          imgUrl={urls.small}
          imgDescr={slug}
          onClick={onImageClick}
        />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
