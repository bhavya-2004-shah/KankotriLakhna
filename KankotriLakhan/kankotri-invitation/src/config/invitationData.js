/**
 * Centralized Wedding Invitation Configuration
 * Single Source of Truth for the Digital Kankotri Invitation Website.
 *
 * All wedding details, couple profiles, timings, venue coordinates,
 * family hosts, and messages are managed here.
 * Primary Language: English (with traditional Sanskrit blessings).
 */

export const invitationData = {
  // General Meta & SEO
  meta: {
    title: 'Wedding Invitation | Viraj & Ananya',
    subtitle: 'Together with their families, invite you to celebrate their wedding',
    hashtag: '#VirajWedsAnanya',
    auspiciousSymbol: '|| श्री गणेशाय नमः ||',
    groomName: 'Viraj',
    brideName: 'Ananya',
    groomFullName: 'Viraj Patel',
    brideFullName: 'Ananya Shah',
  },

  // Traditional Sacred Invocations & Blessings
  shlokas: {
    ganesh: {
      sanskrit: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
      transliteration: 'Vakratunda Mahakaya Suryakoti Samaprabha |\nNirvighnam Kuru Me Deva Sarvakaryeshu Sarvada ||',
      meaning: 'O Lord Ganesha, of curved trunk and immense splendor equal to millions of suns, please make all our endeavors free from obstacles always.',
    },
    kuldevi: {
      sanskrit: '॥ श्री कुलदेवी माताजी सदा प्रसन्न ॥',
      meaning: 'With the divine blessings of Kuldevi Mataji and our revered ancestors.',
    },
    mangalashtak: {
      sanskrit: 'मंगलं भगवान विष्णुः मंगलं गरुडध्वजः ।\nमंगलं पुण्डरीकाक्षो मंगलाय तनो हरिः ॥',
      transliteration: 'Mangalam Bhagavan Vishnuh Mangalam Garudadhwajah |\nMangalam Pundarikaksho Mangalaya Tano Harih ||',
      meaning: 'Auspicious is Lord Vishnu, auspicious is He with the Garuda flag; auspicious is the lotus-eyed Lord Hari, the personification of divine grace.',
    },
  },

  // Couple Profile Details
  couple: {
    groom: {
      prefix: 'Chi.',
      name: 'Viraj',
      fullName: 'Viraj Patel',
      parents: 'Mrs. Hansaben & Mr. Rameshbhai G. Patel',
      grandparents: 'Grandson of Late Manilal C. Patel',
      native: 'Ahmedabad (Native: Unjha, Gujarat)',
      bio: 'Software Engineer & Technology Strategist',
    },
    bride: {
      prefix: 'Chi.Sau.Ka.',
      name: 'Ananya',
      fullName: 'Ananya Shah',
      parents: 'Mrs. Minaben & Mr. Pravinbhai C. Shah',
      grandparents: 'Granddaughter of Late Chimanlal M. Shah',
      native: 'Vadodara (Native: Patan, Gujarat)',
      bio: 'Interior Designer & Architectural Stylist',
    },
  },

  // Main Wedding Date & Auspicious Muhurat
  weddingDate: {
    iso: '2026-12-18T10:30:00+05:30',
    dayOfWeek: 'Friday',
    dateDisplay: 'Friday, 18th December 2026',
    tithi: 'Magshar Sud Poonam, Vikram Samvat 2083',
    shubhMuhuratTime: '10:29 AM (Hastamelap & Sacred Vows)',
    countdownTarget: '2026-12-18T10:29:00+05:30',
  },

  // Invitation Message & Welcome Text
  messages: {
    welcomeSubheading: 'Two loving hearts unite in holy matrimony',
    welcomeAnnouncement: 'With joy in our hearts and gratitude to the Almighty, we cordially invite you to grace the wedding celebration of',
    invitationNote: 'Your gracious presence and heartfelt blessings will make this sacred occasion truly memorable for our families.',
    closingBlessing: 'May love, laughter, and lifelong happiness illuminate this sacred union.',
    tahuko: {
      title: 'A Warm Request from the Little Ones',
      verse: 'Please come early with joyful smiles, and celebrate every special moment with us!\nYour blessings are the sweetest gift we could ever ask for.',
      signature: 'With lots of love, The Little Ones (Krish, Diya & Aarohi)',
    },
    thankYou: 'We deeply cherish your love, blessings, and companionship on our auspicious day.',
  },

  // Connected Ceremonies (Haldi, Marriage, etc.)
  events: {
    haldi: {
      id: 'haldi',
      title: 'Haldi & Pithi Ceremony',
      subtitle: 'The Radiance of Turmeric & Sandalwood Bliss',
      themeNote: 'A joyous morning of fragrant turmeric paste, holy water, songs, and laughter.',
      date: 'Thursday, 17th December 2026',
      time: '04:30 PM Onwards',
      venue: 'Vihar Greens Lawn',
      address: 'Near Ambli Bridge, S.G. Highway, Ahmedabad, Gujarat - 380058',
      dressCode: 'Haldi Yellow & Marigold Florals',
      mapUrl: 'https://maps.google.com/?q=Ahmedabad+S.G.+Highway',
      icon: 'sun',
    },
    marriage: {
      id: 'marriage',
      title: 'Sacred Wedding Ceremony',
      subtitle: 'Shubh Vivah, Hastamelap & Saptapadi',
      themeNote: 'The sacred holy fire, the solemn seven vows around Agni Dev, and the auspicious knot tying two souls forever.',
      date: 'Friday, 18th December 2026',
      time: '10:29 AM (Auspicious Hastamelap Muhurat)',
      baaratTime: '09:00 AM (Baarat Arrival & Traditional Welcome)',
      receptionTime: '07:00 PM Onwards (Dinner & Celebration)',
      venue: 'The Grand Mandap, The Royal Palace & Resort',
      address: 'S.G. Highway, Near Iscon Cross Roads, Ahmedabad, Gujarat - 380058',
      dressCode: 'Royal Traditional Indian Attire',
      mapUrl: 'https://maps.google.com/?q=The+Royal+Palace+Resort+Ahmedabad',
      icon: 'heart',
      saptapadiVows: [
        { step: 1, virtue: 'Nourishment & Health', pledge: 'To provide food, vitality, and health for our home' },
        { step: 2, virtue: 'Strength & Courage', pledge: 'To stand by each other through all walks of life' },
        { step: 3, virtue: 'Prosperity & Honor', pledge: 'To live righteously and prosper together in virtue' },
        { step: 4, virtue: 'Joy & Mutual Trust', pledge: 'To share happiness, peace, and mutual respect' },
        { step: 5, virtue: 'Family & Generosity', pledge: 'To care for our families and nurture kindness' },
        { step: 6, virtue: 'Harmony & Seasons', pledge: 'To remain in devotion and joy across all seasons' },
        { step: 7, virtue: 'Eternal Friendship', pledge: 'To be lifelong companions, best friends, and soulmates' },
      ],
    },
  },

  // Central Venue Information
  venue: {
    name: 'The Royal Palace & Resort',
    hall: 'The Grand Golden Sandstone Mandap',
    address: 'S.G. Highway, Near Iscon Cross Roads, Bopal Road, Ahmedabad, Gujarat - 380058',
    landmark: 'Opposite Ambli Botanical Greens',
    googleMapsUrl: 'https://maps.google.com/?q=The+Royal+Palace+Resort+Ahmedabad',
    phone: '+91 98765 43210',
    parking: 'Valet parking available at the main palace entrance',
  },

  // Hosts, Family Elders & Inviters
  family: {
    hostsTitle: 'With Warm Regards & Best Compliments',
    hosts: [
      'Mrs. Hansaben & Mr. Rameshbhai Patel',
      'Mrs. Minaben & Mr. Pravinbhai Shah',
      'Mrs. Manjulaben & Mr. Bharatbhai Patel',
      'Mrs. Rekhaben & Mr. Deepakbhai Patel',
    ],
    extendedFamily: 'The Entire Patel & Shah Families',
  },

  // RSVP Contacts
  rsvp: {
    title: 'R.S.V.P. & Confirm Attendance',
    subtitle: 'Please let us know if you will be joining our joyous celebration:',
    contacts: [
      { name: 'Mr. Rameshbhai Patel', phone: '+91 98765 43210' },
      { name: 'Mr. Bharatbhai Patel', phone: '+91 98765 43211' },
      { name: 'Mr. Pravinbhai Shah', phone: '+91 98765 43212' },
    ],
    whatsappNumber: '919876543210',
    whatsappDefaultMessage: 'Namaste! We are delighted to confirm our attendance for Viraj & Ananya’s wedding celebration.',
  },

  // Ambient Audio
  audio: {
    title: 'Shehnai & Sitar Wedding Harmony',
    trackUrl: '/audio/shehnai-wedding.mp3',
    autoplay: false,
    credit: 'Traditional Indian Wedding Mangal Vadya',
  },
};

export const coverHeroConfig = {
  enabled: true,
  assets: {
    envelopeImage: '/assets/cover/envelope-cover.jpg',
    mahalDesktop: '/assets/cover/mahal-backdrop-desktop.jpg',
    mahalMobile: '/assets/cover/mahal-backdrop-mobile.jpg',
  },
  envelope: {
    ctaHint: 'Tap the seal to open',
    ariaLabel: 'Open wedding invitation envelope',
    sealHotspot: {
      desktop: { top: '54%', left: '49%', size: 104 },
      mobile: { top: '53%', left: '49%', size: 88 },
    },
  },
  hero: {
    invocation: '|| श्री गणेशाय नमः ||',
    eyebrow: 'TOGETHER WITH OUR FAMILIES',
    ctaLabel: 'SAVE THE DATE',
  },
};

export default invitationData;
