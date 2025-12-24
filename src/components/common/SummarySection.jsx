import React from 'react';
import './Common.scss'; 

const SummarySection = ({ title, data}) => {
    // type: 'simple-list' | 'detailed-stats'
    
    return (
        <div className="card summary-card">
            <div className="card-header-bg">
                <h3>{title}</h3>
            </div>
            
            <div className="card-content">
                {data.map((item, index) => (
                    <div key={index} className="summary-row">
                        <span className="label">{item.label}</span>
                        <span className={`value ${item.colorClass || ''}`}>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SummarySection;