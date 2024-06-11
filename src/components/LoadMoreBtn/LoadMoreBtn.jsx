import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ isLoading, onLoadMore }) {
  return (
    <>
      <div className={css.center}>
        <button
          type="button"
          onClick={onLoadMore}
          disabled={isLoading}
          className={css["load-more-btn"]}
        >
          {isLoading ? "Loading" : "Load More"}
        </button>
      </div>
    </>
  );
}
