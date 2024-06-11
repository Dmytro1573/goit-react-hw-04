import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import { getPhotos } from "../photos-api";

import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    async function getAllPhotos() {
      try {
        setIsLoading(true);
        setIsError(false);
        const getPhoto = await getPhotos(searchQuery, page);
        setPhotos((prevState) => [...prevState, ...getPhoto]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getAllPhotos();
  }, [searchQuery, page]);

  const handleSearch = async (topic) => {
    setPhotos([]);
    setIsError(false);
    setSearchQuery(topic);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length && (
        <ImageGallery photos={photos} onImageClick={openModal} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImageUrl}
      />
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} loading={isLoading} />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
