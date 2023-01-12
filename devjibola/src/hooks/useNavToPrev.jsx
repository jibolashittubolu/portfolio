import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useNavToPrev = (url) => {
  //the current page you want displayed in the address bar is url
    const location = useLocation()

    useEffect(()=> {
        // const location = useLocation()
        // if we do not want to use the Navigate router-dom stuff
        // but rather render our own component
        location.pathname= String(url)  
        window.history.replaceState({}, '', String(url)  );
        // window.history.pushState('', 'logins', '/login');//deprecated pushState()
      })

      return {location};
}


