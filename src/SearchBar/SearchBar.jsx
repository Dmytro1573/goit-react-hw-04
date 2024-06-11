import toast from "react-hot-toast";
import { useState } from "react";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [topic, setTopic] = useState("");

  const handleInput = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    if (topic.trim() === "") {
      toast.error("Please add some information to the search field");
    }
    onSearch(topic);
    form.reset();
  };

  const handleInputChange = (evt) => {
    setTopic(evt.target.value);
  };

  return (
    <>
      <header className={css.header}>
        <form onSubmit={handleInput} className={css["form-container"]}>
          <input
            type="text"
            placeholder="Search images and photos"
            value={topic}
            onChange={handleInputChange}
            className={css["search-input"]}
          />
          <button type="submit" className={css["search-btn"]}>
            Search
          </button>
        </form>
      </header>
    </>
  );
}
