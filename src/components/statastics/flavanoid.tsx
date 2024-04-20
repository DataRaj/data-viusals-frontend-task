import React from 'react';
import { WineDataItem } from '../../types/windData';
import { calculateFlavanoidsStatistics } from '../../util/statistics';

function FlavanoidsStatistics({ data }: { data: WineDataItem[] }) {
  const classStatistics = calculateFlavanoidsStatistics(data);

  return (
    <div  className="table-card">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(classStatistics).map((className, index) => (
              <th key={index}>Class {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Flavanoids Mean</th>
            {Object.keys(classStatistics).map((className, index) => (
              <td key={index}>{classStatistics[className].mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <th>Flavanoids Median</th>
            {Object.keys(classStatistics).map((className, index) => (
              <td key={index}>{classStatistics[className].median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <th>Flavanoids Mode</th>
            {Object.keys(classStatistics).map((className, index) => (
              <td key={index}>
                {classStatistics[className].mode?.toFixed(3) ?? 'N/A'}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
  
}

export default FlavanoidsStatistics;
