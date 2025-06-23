import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

 function LocationProvider({ children }) {
    const [location, setLocation] = useState("");
    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            {children}
        </LocationContext.Provider>
    );
}

function useLocationGlobal() {
    return useContext(LocationContext);
}
export  {LocationProvider,useLocationGlobal}