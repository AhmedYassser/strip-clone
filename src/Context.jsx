import React, { useContext, useState } from "react";
import sublinks from './data';

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [Location, setLocation] = useState({});
    const [page, setpage] = useState({ page: '', links: [] });


    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setpage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (
        <Appcontext.Provider value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            openSubmenu,
            closeSidebar,
            closeSubmenu,
            Location,
            page,
        }}>
            {children}
        </Appcontext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(Appcontext);
}

export { Appcontext, AppProvider };
