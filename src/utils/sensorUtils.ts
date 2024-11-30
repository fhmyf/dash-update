import { SensorData } from '../types/sensor';

export const isSensorType = <T extends SensorData>(
  sensor: SensorData,
  type: string
): sensor is T => {
  return sensor.sensor_type === type;
};

export const getSensorValue = (sensor: SensorData, key: string): number | null => {
  if (key in sensor) {
    const value = sensor[key as keyof SensorData];
    return typeof value === 'number' ? value : null;
  }
  return null;
};

export const formatSensorValue = (value: number | null, unit: string = ''): string => {
  if (value === null) return 'N/A';
  return `${value.toFixed(2)}${unit}`;
};

export const getSensorStatus = (sensor: SensorData): 'normal' | 'warning' | 'error' => {
  // Add your sensor status logic here
  // This is just an example implementation
  if ('system_status_normal' in sensor) {
    return sensor.system_status_normal === 1 ? 'normal' : 'error';
  }
  if ('emergency_stop_active' in sensor) {
    return sensor.emergency_stop_active === 0 ? 'normal' : 'error';
  }
  return 'normal';
};