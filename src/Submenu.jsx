import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from './Context'


function Submenu() {

    const container = useRef(null)
    const { isSubmenuOpen, Location, page: { page, links } } = useGlobalContext();
    const [colum, setColum] = useState("col-2")
    useEffect(() => {
        setColum('col-2')
        const submenu = container.current;
        const { center, bottom } = Location;
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
        if (links.length === 3) {
            setColum('col-3')
          }
          if (links.length > 3) {
            setColum('col-4')
          }
    }, [Location]);


    return <section className={isSubmenuOpen ? 'submenu-wrapper showsubmenu' : 'submenu-wrapper'} ref={container}>
        <div className='submenu-contents'>
            <h4>{page}</h4>
            <article className="submenu-data">
                <div className={`submenu-center ${colum}`}>
                    {links.map((link, index) => {
                        const { label, icon, url } = link;
                        return <a href={url} key={index}>
                            {icon}
                            {label}
                        </a>
                    })}
                </div>
            </article>
        </div>
    </section>;
}

export default Submenu;
