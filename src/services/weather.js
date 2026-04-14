/**
 * Fetches current conditions from the National Weather Service.
 * Uses station KFVE (Northern Aroostook Regional Airport, Frenchville) —
 * the closest ASOS to Fort Kent.
 */

const STATION_ID = 'KFVE';
const OBSERVATION_URL = `https://api.weather.gov/stations/${STATION_ID}/observations/latest`;

export async function fetchCurrentWeather() {
  const response = await fetch(OBSERVATION_URL, {
    headers: {
      Accept: 'application/geo+json',
      'User-Agent': '(fortkentoc.org, info@fortkentoc.org)',
    },
  });

  if (!response.ok) {
    throw new Error(`Weather fetch failed: ${response.status}`);
  }

  const data = await response.json();
  const props = data.properties || {};
  const tempC = props.temperature?.value;

  if (tempC == null) {
    throw new Error('No temperature in observation');
  }

  const tempF = Math.round((tempC * 9) / 5 + 32);

  return {
    tempF,
    tempC: Math.round(tempC),
    description: props.textDescription || '',
    observedAt: props.timestamp || null,
  };
}
