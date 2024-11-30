import { useState, useCallback } from 'react';

interface SensorSettings {
  refreshInterval: number;
  visibleSensors: {
    [key: string]: boolean;
  };
}

const defaultSettings: SensorSettings = {
  refreshInterval: 30000,
  visibleSensors: {
    step_alignment: true,
    chain_speed: true,
    passenger_count: true,
    energy_usage: true,
    temperature: true,
    vibration: true
  }
};

export const useSensorSettings = () => {
  const [settings, setSettings] = useState<SensorSettings>(() => {
    const savedSettings = localStorage.getItem('sensorSettings');
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  const updateSensorVisibility = useCallback((sensorId: string, isVisible: boolean) => {
    setSettings(prev => {
      const newSettings = {
        ...prev,
        visibleSensors: {
          ...prev.visibleSensors,
          [sensorId]: isVisible
        }
      };
      localStorage.setItem('sensorSettings', JSON.stringify(newSettings));
      return newSettings;
    });
  }, []);

  const updateRefreshInterval = useCallback((interval: number) => {
    setSettings(prev => {
      const newSettings = {
        ...prev,
        refreshInterval: interval
      };
      localStorage.setItem('sensorSettings', JSON.stringify(newSettings));
      return newSettings;
    });
  }, []);

  return {
    settings,
    updateSensorVisibility,
    updateRefreshInterval
  };
};