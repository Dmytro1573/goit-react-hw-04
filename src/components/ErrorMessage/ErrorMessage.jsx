import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ErrorMessage() {
  useEffect(() => {
    toast.error("Oops, something went wrong. Please try again later!");
  }, []);

  return null;
}
