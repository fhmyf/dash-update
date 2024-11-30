import { SensorData } from '../types/sensor';
import { historicalSensorData } from '../data/sensorData';

// Simulate real-time data variations
const addRandomVariation = (value: number, range: number = 0.1): number => {
  const variation = (Math.random() - 0.5) * 2 * range;
  return value * (1 + variation);
};

const generateRealtimeData = (baseData: SensorData[]): SensorData[] => {
  return baseData.map(sensor => {
    const newSensor = { ...sensor };
    
    // Add variations to numeric values
    Object.entries(sensor).forEach(([key, value]) => {
      if (typeof value === 'number' && !['time', 'emergency_stop_active', 'system_status_normal', 'light_curtain_active'].includes(key)) {
        newSensor[key] = addRandomVariation(value);
      }
    });

    // Update timestamp
    newSensor.time = Date.now();
    
    return newSensor;
  });
};

export const fetchSensorData = async (): Promise<SensorData[]> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Generate real-time data based on historical data
    return generateRealtimeData(historicalSensorData);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch sensor data: ${error.message}`);
    }
    throw new Error('An unknown error occurred while fetching sensor data');
  }
};