import React from 'react';
import classNames from 'classnames';

const StatCard = ({ title, value, color }) => {
    // color prop should be 'pink', 'orange', or 'purple'
    return (
        <div className={classNames('stat-card', color)}>
            <h1>{title}</h1>
            <p>{value}</p>
            
            {/* Background geometric shapes for visual flair (CSS handled) */}
            <div className="bg-shape shape-1"></div>
            <div className="bg-shape shape-2"></div>
        </div>
    );
};

export default StatCard;