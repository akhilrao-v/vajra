import React from 'react';
import AssetItemCard from '../common/AssetItemCard';
import './Detailed.scss';

const DepartmentSection = ({ title, departmentName,departmentSubName, stats, assets, headerColorClass }) => {
    return (
        <div className="department-section-container">
             {/* Main Header (e.g., Incident Reported per department) */}
            <div className={`section-header ${headerColorClass}`}>
                <div className="header-content">
                    <h3>{title}</h3>
                    <div className="dept-name">Department : <span>{departmentName}</span></div>
                </div>
                <div className="header-stats">
                    {stats.map((stat, index) => (
                         <div key={index}>{stat.label} : {stat.value}</div>
                    ))}
                </div>
            </div>

            {/* Grid of Asset Cards */}
            <div className="asset-grid-row">
                {assets.map((asset, index) => (
                    <AssetItemCard key={index} asset={asset} />
                ))}
            </div>
            <div className={`section-header ${headerColorClass}`}>
                <div className="header-content">
                    <div className="dept-name">Department : <span>{departmentSubName}</span></div>
                </div>
            </div>
             {/* Grid of Asset Cards */}
             <div className="asset-grid-row">
                {assets.map((asset, index) => (
                    <AssetItemCard key={index} asset={asset} />
                ))}
            </div>
        </div>
    );
};

export default DepartmentSection;