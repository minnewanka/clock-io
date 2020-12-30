import { useState, useEffect } from "react";

interface Position {
  latitude: number;
  longitude: number;
}

export const usePosition = () => {
  const [isActived, setActivated] = useState(false);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [error, setError] = useState<string | null>(null);

  const onChange = ({ coords }: { coords: Position }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError = (error: GeolocationPositionError) => {
    setError(error.message);
  };

  const init = () => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
  };

  useEffect(() => {
    const watcher = navigator.geolocation.watchPosition(onChange, onError);
    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return { init, position, error };
};
