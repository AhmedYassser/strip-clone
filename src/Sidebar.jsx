import React from 'react';
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'
import sublinks from './data';


function Sidebar() {

    const { closeSidebar, isSidebarOpen } = useGlobalContext();

    return (
        <div className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
            <aside className="Sidbar-contents">
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div>
                    {sublinks.map((item, index) => {
                        const { links, page } = item;

                        return <article key={index} className='sidebar-data'>
                            <h3>{page}</h3>
                            <div className='sidebar-sublinks'>
                                {links.map((link , index) => {
                                    const { label, icon, url } =link ;
                                    return <a key={index} href={url} >
                                        {icon}
                                        {label}
                                    </a>
                                })}

                            </div>
                        </article>

                    })}

                </div>
            </aside>
        </div>
    );
}

export default Sidebar;
