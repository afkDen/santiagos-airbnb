import { PROPERTY_INFO } from '@/content/property'

export function LodgingStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: PROPERTY_INFO.name,
    alternateName: "Santiago's Private Resort Alfonso Tagaytay",
    description:
      'Whole-property private industrial container resort in Alfonso, Cavite accommodating up to 40 guests. Features private pool, air-conditioned videoke lounge, Kangaroo billiards, retro arcades, basketball half-court, and 8 full bathrooms with the Zero-Queue Guarantee.',
    url: 'https://santiagosresort.com',
    telephone: '+639178005320',
    priceRange: '₱25,000 - ₱55,000',
    currenciesAccepted: 'PHP',
    paymentAccepted: 'Cash, Bank Transfer, GCash',
    image: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/b800534f-c860-4d16-a179-fb2c4a90a4b8.jpeg?im_w=1920',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/422ade24-d533-4620-94ef-2f2311c99066.jpeg?im_w=1920',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/0602e46f-d78c-4a27-87fb-4a7247813d55.jpeg?im_w=1920',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kaytitinga II',
      addressLocality: 'Alfonso',
      addressRegion: 'Cavite',
      postalCode: '4123',
      addressCountry: 'PH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: PROPERTY_INFO.geo.lat,
      longitude: PROPERTY_INFO.geo.lng,
    },
    checkinTime: '15:00',
    checkoutTime: '12:00',
    numberOfRooms: 4,
    petsAllowed: false,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Private Swimming Pool', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air-Conditioned Videoke Lounge', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Kangaroo Billiards Table', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Retro Arcade Cabinets', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Basketball Half-Court', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Outdoor Bonfire Pit', value: true },
      { '@type': 'LocationFeatureSpecification', name: '8 Full Bathrooms', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Full Kitchen (No Corkage)', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'High-Speed Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free Gated Parking', value: true },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '48',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      PROPERTY_INFO.contacts.facebook,
      PROPERTY_INFO.contacts.instagram,
      PROPERTY_INFO.contacts.airbnb,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
