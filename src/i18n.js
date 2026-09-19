export const SITE_I18N = {
  en: {
    nav: {
      collection: 'Collection', studio: 'Studio', work: 'Our Work',
      testimonials: 'Testimonials', booking: 'Book A Visit', contact: 'Contact',
    },
    hero: {
      eyebrow: 'Furniture & Interior Design',
      heading: 'Designing Your Dream Home.',
      sub: 'We design and build considered pieces for the modern home — seating, storage, and full-room interiors, made to last longer than trend.',
      cta1: 'View The Collection →',
      cta2: 'Book A Studio Visit',
    },
    stats: {
      note: 'Illustrative figures — placeholder pending real business numbers.',
      items: [
        { num: '150+', label: 'Pieces Handcrafted' },
        { num: '8', label: 'Years Of Craft' },
        { num: '100%', label: 'Made To Order' },
        { num: '2', label: 'Studio Locations' },
      ],
    },
    services: {
      eyebrow: 'What We Do', heading: 'Our Services',
      items: [
        'Interior and Exterior Design',
        'TV Wall Unit Setup & Installation',
        'Gypsum & Ceiling Design',
        'Lights and Electrical',
        'Moulding & Blandering',
        'Modern Kitchen Cabinets Installation',
        'House Painting',
        'Furniture & Decorations',
      ],
    },
    work: {
      eyebrow: 'Our Work', heading: 'Recent Projects',
      note: 'Real installations from Zungu Home Interior Design.',
      // `video` is the fixed 1-based file number (work-01.mp4 etc.) — kept
      // explicit so the display order below can be reshuffled freely
      // without breaking which caption belongs to which clip.
      items: [
        { video: 4, caption: 'Sofa & Drapery' },
        { video: 1, caption: 'Primary Bedroom & Lounge' },
        { video: 5, caption: 'TV Unit & Entryway' },
        { video: 2, caption: 'Living Room' },
        { video: 6, caption: 'Kitchen — Dark Wood' },
        { video: 3, caption: 'Living Room & Staircase' },
        { video: 7, caption: 'Kitchen — White Marble' },
        { video: 8, caption: 'TV Wall Unit' },
        { video: 9, caption: 'Kitchen — Backlit Glass' },
      ],
    },
    testimonials: {
      eyebrow: 'Client Words', heading: 'What Clients Say',
      note: 'Illustrative quotes — placeholder pending real client testimonials.',
      items: [
        { quote: 'Every piece feels like it was made for the room, not just placed in it.', name: 'A. Mwangi', role: 'Living Room Commission' },
        { quote: 'Considered, quiet, and built to last — exactly what we wanted.', name: 'J. Kessy', role: 'Full Interior Fit-Out' },
        { quote: 'Our custom dining set is the first thing guests ask about.', name: 'F. Nyerere', role: 'Custom Commission' },
      ],
    },
    booking: {
      eyebrow: 'Visit In Person', heading: 'Book A Studio Visit',
      sub: 'Our studio is by appointment — pick a date and time and we’ll confirm by phone or email.',
      dateLabel: 'Preferred Date', slotLabel: 'Preferred Time', nameLabel: 'Full Name', phoneLabel: 'Phone Number',
      slots: ['10am – 1pm', '1pm – 4pm', '4pm – 7pm'],
      submit: 'Request A Visit →',
      note: 'This request is not automatically confirmed — our team will call or email to finalize your visit.',
      successTitle: 'Request Received',
      successBody: (date, slot, name) => `Thanks, ${name} — we’ll be in touch to confirm your visit on ${date} (${slot}).`,
    },
    contact: {
      eyebrow: 'Get In Touch', heading: 'Enquire About A Piece',
      sub: 'Tell us what you have in mind and we’ll get back to you.',
      officeLabel: 'Studio', office: 'By appointment only',
      locationLabel: 'Location', location: 'Mwanza, Nyegezi',
      directionsLabel: 'Directions', directions: 'Get Directions →',
      emailLabel: 'Email', phoneLabel: 'Phone',
      nameLabel: 'Full name', messageLabel: 'Tell us about your project',
      submit: 'Send Enquiry →',
    },
    footer: { tagline: 'Furniture, assembled by feeling.' },
  },
  sw: {
    nav: {
      collection: 'Mkusanyiko', studio: 'Studio', work: 'Kazi Zetu',
      testimonials: 'Maoni', booking: 'Panga Ziara', contact: 'Wasiliana',
    },
    hero: {
      eyebrow: 'Samani & Muundo wa Ndani',
      heading: 'Tunabuni Nyumba Ya Ndoto Yako.',
      sub: 'Tunabuni na kutengeneza vipande vya kufikiriwa kwa makini kwa nyumba za kisasa — viti, maghala, na mapambo kamili ya vyumba, vinavyodumu kuliko mitindo.',
      cta1: 'Angalia Mkusanyiko →',
      cta2: 'Panga Ziara ya Studio',
    },
    stats: {
      note: 'Takwimu za mfano — nafasi ya takwimu halisi za biashara.',
      items: [
        { num: '150+', label: 'Vipande Vilivyotengenezwa' },
        { num: '8', label: 'Miaka Ya Ufundi' },
        { num: '100%', label: 'Hutengenezwa Kwa Agizo' },
        { num: '2', label: 'Studio Zetu' },
      ],
    },
    services: {
      eyebrow: 'Tunafanya Kazi Zifuatazo', heading: 'Huduma Zetu',
      items: [
        'Ubunifu wa Ndani na Nje',
        'Ufungaji wa Kabati la TV Ukutani',
        'Ubunifu wa Gypsum na Dari',
        'Taa na Umeme',
        'Upambaji na Plasta',
        'Ufungaji wa Kabati za Kisasa za Jikoni',
        'Upakaji Rangi wa Nyumba',
        'Samani na Mapambo',
      ],
    },
    work: {
      eyebrow: 'Kazi Zetu', heading: 'Miradi Ya Hivi Karibuni',
      note: 'Kazi halisi kutoka Zungu Home Interior Design.',
      items: [
        { video: 4, caption: 'Sofa na Mapazia' },
        { video: 1, caption: 'Chumba cha Kulala na Kupumzika' },
        { video: 5, caption: 'Kabati la TV na Mlango wa Kuingilia' },
        { video: 2, caption: 'Sebule' },
        { video: 6, caption: 'Jikoni — Mbao Nyeusi' },
        { video: 3, caption: 'Sebule na Ngazi' },
        { video: 7, caption: 'Jikoni — Marumaru Nyeupe' },
        { video: 8, caption: 'Ukuta wa TV' },
        { video: 9, caption: 'Jikoni — Kioo Chenye Mwanga' },
      ],
    },
    testimonials: {
      eyebrow: 'Maneno ya Wateja', heading: 'Wateja Wanasema Nini',
      note: 'Maneno ya mfano — nafasi ya maoni halisi ya wateja.',
      items: [
        { quote: 'Kila kipande kinahisi kama kilitengenezwa kwa ajili ya chumba hicho, si kuwekwa tu ndani yake.', name: 'A. Mwangi', role: 'Agizo la Sebule' },
        { quote: 'Vya kufikiriwa, vya utulivu, na vinavyodumu — hasa tulichotaka.', name: 'J. Kessy', role: 'Mapambo Kamili ya Ndani' },
        { quote: 'Seti yetu maalum ya kulia ndicho jambo la kwanza wageni wanauliza kuhusu.', name: 'F. Nyerere', role: 'Agizo Maalum' },
      ],
    },
    booking: {
      eyebrow: 'Tembelea Kwa Nafsi', heading: 'Panga Ziara ya Studio',
      sub: 'Studio yetu inafanya kazi kwa miadi — chagua tarehe na muda na tutathibitisha kwa simu au barua pepe.',
      dateLabel: 'Tarehe Unayopendelea', slotLabel: 'Muda Unaopendelea', nameLabel: 'Jina Kamili', phoneLabel: 'Namba ya Simu',
      slots: ['10am – 1pm', '1pm – 4pm', '4pm – 7pm'],
      submit: 'Omba Ziara →',
      note: 'Ombi hili halithibitishwi moja kwa moja — timu yetu itapiga simu au kutuma barua pepe kuthibitisha ziara yako.',
      successTitle: 'Ombi Limepokelewa',
      successBody: (date, slot, name) => `Asante, ${name} — tutawasiliana nawe kuthibitisha ziara yako tarehe ${date} (${slot}).`,
    },
    contact: {
      eyebrow: 'Wasiliana Nasi', heading: 'Uliza Kuhusu Kipande',
      sub: 'Tuambie unachokifikiria na tutakujibu.',
      officeLabel: 'Studio', office: 'Kwa miadi tu',
      locationLabel: 'Mahali', location: 'Mwanza, Nyegezi',
      directionsLabel: 'Maelekezo', directions: 'Pata Maelekezo →',
      emailLabel: 'Barua Pepe', phoneLabel: 'Simu',
      nameLabel: 'Jina kamili', messageLabel: 'Tuambie kuhusu mradi wako',
      submit: 'Tuma Ombi →',
    },
    footer: { tagline: 'Samani, zilizotengenezwa kwa hisia.' },
  },
};

export const CHAT_I18N = {
  en: {
    greeting: "Hi! I'm here to help. Ask about our collection, shipping, or custom pieces — or tap a question below.",
    quick: { make: 'What do you make?', ship: 'Do you ship?', custom: 'Custom pieces?', human: 'Talk to a person' },
    answers: {
      make: 'We design considered, made-to-last furniture — seating, tables, storage, and lighting. Take a look at our collection below.',
      ship: 'We currently deliver within our home region — email ngowirodrick@gmail.com with your location for a shipping quote.',
      custom: 'Yes — many pieces start as custom commissions. Tell us what you have in mind at ngowirodrick@gmail.com.',
      human: "Of course — email ngowirodrick@gmail.com or call 0764237115 and we'll get right back to you.",
      price: 'Pricing varies by piece and material — email ngowirodrick@gmail.com for a quote.',
      hours: 'Our studio is by appointment only — use the "Book A Visit" section above to schedule.',
    },
    fallback: "Thanks for reaching out — for anything I can't answer here, email ngowirodrick@gmail.com and our team will help personally.",
    placeholder: 'Type a message…',
    keywordMap: [
      { keys: ['ship', 'deliver', 'delivery'], key: 'ship' },
      { keys: ['custom', 'bespoke', 'commission'], key: 'custom' },
      { keys: ['price', 'cost', 'how much', 'quote'], key: 'price' },
      { keys: ['hour', 'open', 'appointment', 'when', 'visit', 'book'], key: 'hours' },
      { keys: ['human', 'person', 'talk', 'call', 'phone', 'contact'], key: 'human' },
      { keys: ['make', 'sell', 'collection', 'furniture', 'product', 'sofa', 'chair', 'table'], key: 'make' },
    ],
  },
  sw: {
    greeting: 'Habari! Niko hapa kukusaidia. Uliza kuhusu mkusanyiko wetu, usafirishaji, au vipande maalum — au bonyeza swali hapa chini.',
    quick: { make: 'Mnatengeneza nini?', ship: 'Je, mnasafirisha?', custom: 'Vipande maalum?', human: 'Ongea na mtu' },
    answers: {
      make: 'Tunabuni samani za kudumu zilizofikiriwa kwa makini — viti, meza, maghala, na taa. Angalia mkusanyiko wetu hapa chini.',
      ship: 'Kwa sasa tunasafirisha ndani ya eneo letu la nyumbani — tuma barua pepe ngowirodrick@gmail.com ukiwa na eneo lako kwa bei ya usafirishaji.',
      custom: 'Ndiyo — vipande vingi huanza kama maagizo maalum. Tuambie unachokifikiria kupitia ngowirodrick@gmail.com.',
      human: 'Bila shaka — tuma barua pepe ngowirodrick@gmail.com au piga simu 0764237115 na tutakujibu haraka.',
      price: 'Bei hutofautiana kulingana na kipande na malighafi — tuma barua pepe ngowirodrick@gmail.com kwa bei.',
      hours: 'Studio yetu inafanya kazi kwa miadi tu — tumia sehemu ya "Panga Ziara" hapo juu kupanga.',
    },
    fallback: 'Asante kwa kuwasiliana nasi — kwa chochote nisichoweza kujibu hapa, tuma barua pepe ngowirodrick@gmail.com na timu yetu itakusaidia.',
    placeholder: 'Andika ujumbe…',
    keywordMap: [
      { keys: ['safiri', 'usafirishaji', 'peleka'], key: 'ship' },
      { keys: ['maalum', 'agizo'], key: 'custom' },
      { keys: ['bei', 'gharama'], key: 'price' },
      { keys: ['saa', 'wakati', 'miadi', 'fungua', 'ziara'], key: 'hours' },
      { keys: ['mtu', 'ongea', 'piga simu', 'wasiliana'], key: 'human' },
      { keys: ['tengeneza', 'uza', 'mkusanyiko', 'samani', 'bidhaa', 'kiti', 'meza'], key: 'make' },
    ],
  },
};

export function getStoredLang() {
  return localStorage.getItem('zungu_lang') === 'sw' ? 'sw' : 'en';
}
