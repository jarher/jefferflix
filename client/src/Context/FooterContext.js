import { useState } from "react";
import { createContext } from "react";

export const FooterContext = createContext();

export function FooterProvider ({children}){
    const [banner, setBanner] = useState(true);

    const bannerVisibility = (state) => {
        setBanner(state);
    }

    return (
      <FooterContext.Provider
        value={{ banner, bannerVisibility }}
      >
        {children}
      </FooterContext.Provider>
    );
}