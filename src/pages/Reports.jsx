import React, { useState, useEffect } from 'react';
 
const Reports = () => {
  const [reportData, setReportData] = useState([]);
 
  useEffect(() => {
    // Fetch report data from an API or use hardcoded data
    // Example: fetch('/api/reports').then(response => response.json()).then(data => setReportData(data));
    setReportData([
      { id: 1, title: 'Monthly Revenue', value: '$5000' },
      { id: 2, title: 'Occupancy Rate', value: '80%' }
    ]);
  }, []);
 
  return (
<div>
<h3>Reports</h3>
<ul>
        {reportData.map(report => (
<li key={report.id}>
            {report.title}: {report.value}
</li>
        ))}
</ul>
</div>
  );
};
 
export default Reports;