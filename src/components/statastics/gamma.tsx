import React from 'react';
import { WineDataItem } from '../../types/windData';
import { calculateGammaStatistics } from '../../util/statistics';

function GammaStatisticsTable({ data }: { data: WineDataItem[] }) {
  const classStatistics = calculateGammaStatistics(data);

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
            <th>Gamma Mean</th>
            {Object.keys(classStatistics).map((className, index) => (
              <td key={index}>{classStatistics[className].mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <th>Gamma Median</th>
            {Object.keys(classStatistics).map((className, index) => (
              <td key={index}>{classStatistics[className].median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <th>Gamma Mode</th>
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

export default GammaStatisticsTable;
