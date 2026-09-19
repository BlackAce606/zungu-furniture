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
    greeting: "Hi! I'm here to help. Ask about our services, location, or how to book a visit — or tap a question below.",
    quick: { services: 'What services do you offer?', location: 'Where are you located?', booking: 'How do I book a visit?', human: 'Talk to a person' },
    answers: {
      services: 'We handle interior and exterior design, TV wall unit setup & installation, gypsum & ceiling design, lights and electrical, moulding & blandering, modern kitchen cabinets installation, house painting, and furniture & decorations. See the full list in the Services section above.',
      work: 'Take a look at the "Our Work" section above — real installations we’ve completed: kitchens, living rooms, TV units, bedrooms, and more.',
      location: 'We’re based in Mwanza, Nyegezi. Tap "Get Directions" in the Contact section for the map.',
      booking: 'Our studio works by appointment — use the "Book A Visit" section above to pick a date and time, and we’ll confirm by phone or email.',
      human: 'Of course — email ngowirodrick@gmail.com or call 0764 237 115 / 0748 278 219 and we’ll get right back to you.',
      price: 'Pricing depends on the scope of work — email or call us with your project details for a quote.',
      hours: 'Our studio works by appointment — use the "Book A Visit" section above to pick a date and time, and we’ll confirm by phone or email.',
    },
    fallback: "Thanks for reaching out — for anything I can't answer here, email ngowirodrick@gmail.com and our team will help personally.",
    placeholder: 'Type a message…',
    keywordMap: [
      { keys: ['price', 'cost', 'how much', 'quote', 'budget'], key: 'price' },
      { keys: ['book', 'booking', 'appointment', 'schedule', 'studio visit'], key: 'booking' },
      { keys: ['location', 'where', 'address', 'mwanza', 'nyegezi', 'direction', 'map'], key: 'location' },
      { keys: ['work', 'project', 'portfolio', 'photo', 'video', 'done before', 'recent'], key: 'work' },
      { keys: ['human', 'person', 'talk', 'call', 'phone', 'contact', 'email'], key: 'human' },
      { keys: ['hour', 'open', 'when', 'visit'], key: 'hours' },
      { keys: ['service', 'offer', 'do you do', 'interior', 'exterior', 'design', 'gypsum', 'ceiling', 'electric', 'painting', 'plaster', 'moulding', 'cabinet', 'kitchen', 'tv wall', 'decor', 'furniture', 'sofa', 'chair', 'table'], key: 'services' },
    ],
  },
  sw: {
    greeting: 'Habari! Niko hapa kukusaidia. Uliza kuhusu huduma zetu, mahali tulipo, au jinsi ya kupanga ziara — au bonyeza swali hapa chini.',
    quick: { services: 'Mnatoa huduma gani?', location: 'Mko wapi?', booking: 'Ninawezaje kupanga ziara?', human: 'Ongea na mtu' },
    answers: {
      services: 'Tunafanya ubunifu wa ndani na nje, ufungaji wa kabati la TV ukutani, ubunifu wa gypsum na dari, taa na umeme, upambaji na plasta, ufungaji wa kabati za kisasa za jikoni, upakaji rangi wa nyumba, na samani na mapambo. Angalia orodha kamili katika sehemu ya Huduma hapo juu.',
      work: 'Angalia sehemu ya "Kazi Zetu" hapo juu — miradi halisi tuliyokamilisha: jikoni, sebule, kabati za TV, vyumba vya kulala, na zaidi.',
      location: 'Tuko Mwanza, Nyegezi. Bonyeza "Pata Maelekezo" katika sehemu ya Wasiliana kwa ramani.',
      booking: 'Studio yetu inafanya kazi kwa miadi — tumia sehemu ya "Panga Ziara" hapo juu kuchagua tarehe na muda, na tutathibitisha kwa simu au barua pepe.',
      human: 'Bila shaka — tuma barua pepe ngowirodrick@gmail.com au piga simu 0764 237 115 / 0748 278 219 na tutakujibu haraka.',
      price: 'Bei hutofautiana kulingana na ukubwa wa kazi — tuma barua pepe au piga simu ukiwa na maelezo ya mradi wako kwa bei.',
      hours: 'Studio yetu inafanya kazi kwa miadi — tumia sehemu ya "Panga Ziara" hapo juu kuchagua tarehe na muda, na tutathibitisha kwa simu au barua pepe.',
    },
    fallback: 'Asante kwa kuwasiliana nasi — kwa chochote nisichoweza kujibu hapa, tuma barua pepe ngowirodrick@gmail.com na timu yetu itakusaidia.',
    placeholder: 'Andika ujumbe…',
    keywordMap: [
      { keys: ['bei', 'gharama', 'kiasi'], key: 'price' },
      { keys: ['panga', 'miadi', 'ziara', 'ratiba'], key: 'booking' },
      { keys: ['wapi', 'mahali', 'mwanza', 'nyegezi', 'maelekezo', 'ramani'], key: 'location' },
      { keys: ['kazi zetu', 'mradi', 'miradi', 'picha', 'video'], key: 'work' },
      { keys: ['mtu', 'ongea', 'piga simu', 'wasiliana', 'barua pepe'], key: 'human' },
      { keys: ['saa', 'wakati', 'fungua'], key: 'hours' },
      { keys: ['huduma', 'fanya', 'tengeneza', 'ndani', 'nje', 'gypsum', 'dari', 'umeme', 'plasta', 'kabati', 'jikoni', 'mapambo', 'samani', 'kiti', 'meza'], key: 'services' },
    ],
  },
};

export function getStoredLang() {
  return localStorage.getItem('zungu_lang') === 'sw' ? 'sw' : 'en';
}
