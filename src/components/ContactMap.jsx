import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon in react-leaflet (required when using bundlers)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Office locations
const OFFICES = [
  {
    lat: 28.575926,
    lng: 77.332674,
    address: 'A-59, Sector-27, Noida-201301, India',
    title: 'Legaloids Law Offices – Head Office',
  },
  {
    lat: 28.6095917,
    lng: 77.2875685,
    address: 'Legaloids Law Offices',
    title: 'Legaloids Law Offices',
  },
];

// Center point between both offices (for initial view)
const MAP_CENTER = [
  (OFFICES[0].lat + OFFICES[1].lat) / 2,
  (OFFICES[0].lng + OFFICES[1].lng) / 2,
];

function FitBounds({ offices, isMobile }) {
  const map = useMap();
  useEffect(() => {
    if (offices.length < 2) return;
    const bounds = L.latLngBounds(offices.map((o) => [o.lat, o.lng]));
    // Smaller padding on mobile for better fit
    const padding = isMobile ? [20, 20] : [40, 40];
    map.fitBounds(bounds, { padding, maxZoom: isMobile ? 13 : 14 });
  }, [map, offices, isMobile]);
  return null;
}

const ContactMap = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[280px] sm:h-[400px] md:h-[480px] w-full bg-gray-200 flex items-center justify-center rounded-xl">
        <p className="text-gray-500 text-sm">Loading map…</p>
      </div>
    );
  }

  return (
    <div className="h-[280px] sm:h-[400px] md:h-[480px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-md relative">
      <MapContainer
        center={MAP_CENTER}
        zoom={isMobile ? 11 : 12}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
        zoomControl={true}
        zoomControlOptions={{
          position: isMobile ? 'bottomright' : 'topleft',
        }}
        touchZoom={true}
        doubleClickZoom={true}
        dragging={true}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {OFFICES.map((office, index) => (
          <Marker key={index} position={[office.lat, office.lng]}>
            <Popup className="text-sm sm:text-base">
              <div className="text-xs sm:text-sm">
                <strong className="block mb-1">{office.title}</strong>
                <span className="text-gray-600">{office.address}</span>
              </div>
            </Popup>
          </Marker>
        ))}
        <FitBounds offices={OFFICES} isMobile={isMobile} />
      </MapContainer>
    </div>
  );
};

export default ContactMap;
