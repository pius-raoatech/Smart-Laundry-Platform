import { distanceInMeters } from './src/utils/distance.js';

const lat = 6.4281;
const lon = 3.4219;

console.log('same point:', distanceInMeters(lat, lon, lat, lon));
console.log('0.0009 deg north:', distanceInMeters(lat, lon, lat + 0.0009, lon));
console.log('0.0045 deg north:', distanceInMeters(lat, lon, lat + 0.0045, lon));