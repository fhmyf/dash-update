import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { useSensorSettings } from '../../hooks/useSensorSettings';

const SensorSettings: React.FC = () => {
  const { settings, updateSensorVisibility, updateRefreshInterval } = useSensorSettings();

  return (
    <div className="bg-navy-800 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Sensor Settings</h2>
        <SettingsIcon className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Data Refresh Interval
          </label>
          <select
            value={settings.refreshInterval}
            onChange={(e) => updateRefreshInterval(Number(e.target.value))}
            className="w-full bg-navy-900 text-white rounded-md px-3 py-2 border border-gray-700"
          >
            <option value={5000}>5 seconds</option>
            <option value={10000}>10 seconds</option>
            <option value={30000}>30 seconds</option>
            <option value={60000}>1 minute</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Visible Sensors
          </label>
          <div className="space-y-2">
            {Object.entries(settings.visibleSensors).map(([sensorId, isVisible]) => (
              <div key={sensorId} className="flex items-center">
                <input
                  type="checkbox"
                  id={sensorId}
                  checked={isVisible}
                  onChange={() => updateSensorVisibility(sensorId, !isVisible)}
                  className="h-4 w-4 text-blue-500 rounded border-gray-700 bg-navy-900 focus:ring-blue-500"
                />
                <label htmlFor={sensorId} className="ml-2 text-sm text-gray-300">
                  {sensorId.split('_').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorSettings;