import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cette commande dit au navigateur de remonter tout en haut
    window.scrollTo(0, 0);
  }, [pathname]); // Ça se déclenche à chaque fois que le chemin (URL) change

  return null; // Ce composant ne dessine rien, il agit juste en arrière-plan
};

export default ScrollToTop;