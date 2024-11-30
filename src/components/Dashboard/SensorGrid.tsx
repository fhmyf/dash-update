import React from 'react';
import { Activity, Gauge, Users, Battery } from 'lucide-react';
import SensorCard from './SensorCard';
import { useSensorSettings } from '../../hooks/useSensorSettings';
import { formatNumber, formatPercentage } from '../../utils/formatters';
import { SensorData } from '../../types/sensor';

interface SensorGridProps {
  sensorData: SensorData[];
}

const SensorGrid: React.FC<SensorGridProps> = ({ sensorData }) => {
  const { settings } = useSensorSettings();

  const stepAlignmentData = sensorData?.find(s => s.sensor_type === 'step_alignment');
  const chainData = sensorData?.find(s => s.sensor_type === 'chain_and_lubrication');
  const passengerData = sensorData?.find(s => s.sensor_type === 'passenger_and_safety');
  const operationalData = sensorData?.find(s => s.sensor_type === 'operational_metrics');

  const sensors = [
    {
      id: 'step_alignment',
      title: "Step Alignment",
      value: formatPercentage(stepAlignmentData?.step_alignment_percentage || 0),
      unit: "",
      trend: "up",
      trendValue: "+0.2%",
      icon: <Activity className="w-6 h-6" />,
      color: "border-l-4 border-green-500"
    },
    {
      id: 'chain_speed',
      title: "Chain Speed",
      value: formatNumber(chainData?.chain_speed_ms || 0),
      unit: "m/s",
      trend: "down",
      trendValue: "-0.02 m/s",
      icon: <Gauge className="w-6 h-6" />,
      color: "border-l-4 border-blue-500"
    },
    {
      id: 'passenger_count',
      title: "Passengers Today",
      value: passengerData?.passengers_today || 0,
      unit: "",
      trend: "up",
      trendValue: "+245",
      icon: <Users className="w-6 h-6" />,
      color: "border-l-4 border-yellow-500"
    },
    {
      id: 'energy_usage',
      title: "Energy Usage",
      value: formatNumber(operationalData?.energy_used_today_kwh || 0),
      unit: "kWh",
      trend: "up",
      trendValue: "+2.5 kWh",
      icon: <Battery className="w-6 h-6" />,
      color: "border-l-4 border-purple-500"
    }
  ];

  const visibleSensors = sensors.filter(sensor => 
    settings.visibleSensors[sensor.id]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {visibleSensors.map((sensor) => (
        <SensorCard
          key={sensor.id}
          title={sensor.title}
          value={sensor.value}
          unit={sensor.unit}
          trend={sensor.trend as 'up' | 'down'}
          trendValue={sensor.trendValue}
          icon={sensor.icon}
          color={sensor.color}
        />
      ))}
    </div>
  );
};

export default SensorGrid;