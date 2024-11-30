import { useQuery } from '@tanstack/react-query';
import { fetchSensorData } from '../services/api';
import { SensorData } from '../types/sensor';
import { useSensorSettings } from './useSensorSettings';

export const useSensorData = () => {
  const { settings } = useSensorSettings();
  
  return useQuery<SensorData[], Error>({
    queryKey: ['sensorData'],
    queryFn: fetchSensorData,
    refetchInterval: settings.refreshInterval,
    retry: 3,
    staleTime: settings.refreshInterval / 2,
  });
};