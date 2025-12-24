import React from 'react';
import Layout from '../components/layout/Layout';
import { FiCalendar, FiDownload, FiHome, FiMapPin } from 'react-icons/fi';
import DepartmentSection from '../components/detailed/DepartmentSection';
import StatCard from '../components/common/StatCard';
import SummarySection from '../components/common/SummarySection';
import AssetStatusChart from '../components/charts/AssetStatusChart';
import OverviewChart from '../components/charts/OverviewChart';
import StackedBarChart from '../components/charts/StackedBarChart';
import { incidentAssets } from '../data/mockData';
import vajraLogo2 from '../assets/c black.png';

import './Dashboard.scss';
import hospital from '../assets/Frame 1000001251.png';
import location from '../assets/distance.png';

const Dashboard = () => {
    
    
    const incidentSummaryData = [
        { label: 'Incidents Reported', value: '22' },
        { label: 'Total Downtime', value: '12 mins 10 sec' },
        { label: 'Closed', value: '19' },
        { label: 'Open', value: '3' },
        { label: 'Budget spent', value: '₹ 3,00,000', colorClass: 'text-green' },
    ];

    const workOrderSummaryData = [
        { label: 'Work order requested', value: '17' },
        { label: 'Closed', value: '14' },
        { label: 'Open', value: '3' },
        { label: 'Budget spent', value: '₹ 3,00,000', colorClass: 'text-green' },
    ];

    return (
        <Layout>
            <div className="dashboard-header-row">
                <img src= {vajraLogo2} />
                <h2>Monthly Report</h2>
                <div className="actions">
                    <button className="date-btn"><span>&lt;</span> June 2025 <FiCalendar /><span>&gt;</span></button>
                    <button className="download-btn"><FiDownload /> Download PDF</button>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Row 1: Charts */}
                <div className="row-grid three-cols">
                <div className="card institute-card" style={{ backgroundColor:'#022A66', color:'#FFFFFF' }}>
                         <div className="institute-info">
                             <div className="institute-name">
                                 <img src= {hospital}/>
                                 <h1>Sri siddhartha institute of medical science</h1>
                             </div>
                             <div className="institute-location">
                                 <img src={location}/>
                                 <h1>Vijayanagar</h1>
                             </div>
                         </div>
                    </div>
                    <div className="card">
                         <div style={{marginTop:'25px', height: '220px' }}>
                             <AssetStatusChart />
                         </div>
                    </div>
                    
                    <div className="card">
                         <div style={{height: '260px'}}>
                            <OverviewChart />
                         </div>
                    </div>
                </div>

                {/* Row 2: Stats */}
                <div className="row-grid three-cols summary-cards-row">
                    <StatCard title="Total Asset" value="200" color="pink" />
                    <StatCard title="Not working Asset" value="100" color="orange" />
                    <StatCard title="Total Downtime" value="35 mins 21 sec" color="purple" />
                </div>

                {/* Row 3: Summaries */}
                 <div className="row-grid three-cols">
                    <SummarySection 
                        title="Check outs" 
                        type="simple-list"
                        data={[
                            { label: 'Checked In', value: '0' },
                            { label: 'Checked Out', value: '25' }
                        ]} 
                    />
                    <SummarySection title="Incidents" data={incidentSummaryData} />
                    <SummarySection title="Work Order" data={workOrderSummaryData} />
                </div>

                 {/* Row 4: Stacked Bars */}
                 <div className="row-grid stacked-row">
                    <StackedBarChart title="Incident Reported" total="15" />
                    <StackedBarChart title="Work Order Reported" total="20" />
                </div>

                {/* Row 5: Detailed Lists */}
                 <DepartmentSection 
                    title="Incident Reported per department"
                    departmentName="Anesthesiology"
                    departmentSubName="Radiology"
                    headerColorClass="blue-header"
                    stats={[
                        {label: 'Incidents Reported', value: 5},
                        {label: 'Incidents Open', value: 20},
                        {label: 'Total Downtime', value: '7 min 22 sec'},
                    ]}
                    assets={incidentAssets}
                />

                 <DepartmentSection 
                    title="Work Order Reported Per department"
                    departmentName="Dermatology"
                    departmentSubName="Gynacology"
                    headerColorClass="dark-blue-header"
                    stats={[
                        {label: 'Incidents Reported', value: 5},
                        {label: 'Incidents Open', value: 20},
                        {label: 'Total Downtime', value: '7 min 22 sec'},
                    ]}
                    assets={incidentAssets}
                />
            </div>
        </Layout>
    );
};

export default Dashboard;