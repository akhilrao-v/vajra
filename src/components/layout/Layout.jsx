import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="app-container">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                 <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                 <main className="main-content">
                    {children}
                 </main>
            </div>
        </div>
    );
};

export default Layout;