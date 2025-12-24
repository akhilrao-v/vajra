import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Common.scss'; // Common styles for cards

const AssetItemCard = ({ asset }) => {
    return (
        <div className="asset-item-card">
            <div className="info-row"><strong>Asset name :</strong> <span>{asset.name}</span></div>
            <div className="info-row"><strong>Asset code :</strong> <span>{asset.code}</span></div>
            <div className="info-row"><strong>Start Date :</strong> <span>{asset.start}</span></div>
            <div className="info-row"><strong>Clear Date :</strong> <span>{asset.clear}</span></div>
            <button className="arrow-btn"><FiArrowRight /></button>
        </div>
    );
};

export default AssetItemCard;