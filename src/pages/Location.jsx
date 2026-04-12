import DataPage from '../templates/DataPage';
import Eyebrow from '../components/ui/Eyebrow';
import Coordinates from '../components/graphics/Coordinates';
import './Location.css';

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Fort%20Kent%20Outdoor%20Center&t=m&z=13&output=embed&iwloc=near';

function Location() {
  return (
    <DataPage
      crumb={[{ label: 'Visit' }, { label: 'Location' }]}
      title={
        <>
          Visit the <em>lodge.</em>
        </>
      }
      lede="Fort Kent is situated on the northern border of Maine in the Saint John River valley — known for ideal winter conditions with ample snow from December through April."
      main={
        <>
          <Eyebrow>Address</Eyebrow>
          <h2>Where to find us.</h2>
          <address className="location-address">
            Fort Kent Outdoor Center
            <br />
            33 Paradis Circle
            <br />
            Fort Kent, ME 04743
          </address>
          <Coordinates />
        </>
      }
      aside={
        <div className="location-map">
          <iframe
            src={MAP_EMBED_URL}
            title="Fort Kent Outdoor Center location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      }
    />
  );
}

export default Location;
