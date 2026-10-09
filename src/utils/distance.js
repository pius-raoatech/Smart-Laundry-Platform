const EARTH_RADIUS_METERS = 6371000;

const toRadians = (degrees) => (degrees * Math.PI) / 180;

export const distanceInMeters = (lat1, lon1, lat2, lon2) => {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_METERS * c;
};

export const GEOFENCE_RADIUS_METERS = 100;

export const checkGeofence = (riderLat, riderLon, targetLat, targetLon) => {
  const distance = distanceInMeters(riderLat, riderLon, targetLat, targetLon);

  return {
    distance: Math.round(distance),
    withinRange: distance <= GEOFENCE_RADIUS_METERS,
  };
};