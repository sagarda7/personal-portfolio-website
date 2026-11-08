// Language-independent data: links, images, client reviews (kept verbatim in English).
// Translatable text lives in ./content.ts.

export const links = {
  email: 'sagarda7@gmail.com',
  whatsapp: 'https://wa.me/9779856032592',
  phone: '+977 985-6032592',
  tiktok: 'https://www.tiktok.com/@techasdysolution',
  freelancer: 'https://www.freelancer.com/u/sagarda7?frm=sagarda7&sb=t',
  instructables: 'https://www.instructables.com/8X40-LED-MATRIX-CALENDAR-CLOCK/',
  // Add more and they will appear in the contact section automatically.
  linkedin: '',
  github: '',
  facebook: '',
}

// TikTok video IDs from https://www.tiktok.com/@techasdysolution
export const featuredVideo = '7687495653638819092'
export const videos = ['7585160843004792085', '7687495653638819092', '7683504189107981589']

// Viewer comments on the featured video, copied verbatim from TikTok (not translated).
export type TikTokComment = {
  name: string
  avatar?: string
  avatarColor?: string
  text: string
  mention?: string
  date: string
  likedByCreator?: boolean
}

export const featuredComments: TikTokComment[] = [
  {
    name: 'Jeeban Jetha',
    avatar: '/images/comments/jeeban.jpg',
    text: 'मैले चाहेकोर खोजेको र आसा गरेको लठुवा माहाबीर पुनबाट एही हो हो एस्ता प्रबीधीमुलक मेसीन उत्पादन गर्नुपर्ने नेपालमै वाहाजस्तै हजारौ युबाहरु हुनुबुन्छ वाहाहरु सम्पुर्णलाई समेटेर जानुपर्यो भन्ने मेरो चाहान धेरैब्कीन नेपालमा आयात गरीने फोटोकपी नेसीन ac फ्रीजर हीटर र सामान्य कपाल लाट्ने मेसीन सम्म नेपालमै उत्पादन गर्न थाले कति आयातमा रोक लाग्छ आफै बुझौ खुसीलायो',
    date: '9-21',
    likedByCreator: true,
  },
  {
    name: 'SAMIR',
    avatar: '/images/comments/samir.jpg',
    mention: '@Balen Shah',
    text: 'Yasto yasto masxe lai khojher sarkar le help garnu paro protsahan harnu paro hai 🫶💐',
    date: '9-20',
    likedByCreator: true,
  },
  {
    name: 'Alice Bomjan',
    avatarColor: '#fe2c55',
    text: 'I am proud of every small and big scale automation and robotics application in Nepal. Thank you brothers and sisters you are building a better future for my children.🥰🥰',
    date: '7-17',
    likedByCreator: true,
  },
  {
    name: 'Roshan Roshan',
    avatar: '/images/comments/roshan.jpg',
    text: 'Dai aali sano printer banau nu na. Sasto price ma phone bata working hune please',
    date: '9-30',
  },
]

export type Review = {
  name: string
  country: string
  flag: string
  rating: number
  project: string
  text: string
  tags: string[]
  avatar?: string
}

export const reviews: Review[] = [
  {
    name: 'Keith',
    country: 'USA',
    flag: '🇺🇸',
    rating: 5.0,
    project: 'Convert an Arduino hardwired program to use a BLE mobile device',
    text: 'I have worked with many developers over the years and he is one I consider to be one of the best! The quality of the work and attention to details is exemplary. Looking forward to hiring him again for many future projects. A++++ Outstanding. Highly Recommended!',
    tags: ['iPhone', 'Android', 'Arduino', 'BLE'],
  },
  {
    name: 'Direct',
    country: 'Sri Lanka',
    flag: '🇱🇰',
    rating: 5.0,
    project: 'I would like to hire an Arduino Engineer',
    text: 'Sagar is a genius. He has best knowledge about this field. If you hire him, I’m sure that you never will be worried about it. On 100% time. Highly attention on project. He has done my project perfectly. Thank you Sagar.',
    tags: ['Arduino', 'Microcontroller'],
  },
  {
    name: 'Shishil',
    country: 'India',
    flag: '🇮🇳',
    rating: 5.0,
    project: 'Mobile + microcontroller project',
    text: 'Great coder. Completed the hard project with complete satisfaction and great skills. Great support.',
    tags: ['Mobile App', 'Android', 'Microcontroller', 'MySQL'],
    avatar: '/images/clients/shishil.jpg',
  },
  {
    name: 'Shoaib',
    country: 'USA',
    flag: '🇺🇸',
    rating: 5.0,
    project: 'Arduino + web project',
    text: 'Sagar was an EXCELLENT professional. He finished the Arduino project on time. He has excellent knowledge about Arduino, MySQL, PHP database. He was very friendly and easy to communicate with. I would really RECOMMEND him for projects.',
    tags: ['Mobile App', 'Android', 'Microcontroller', 'MySQL'],
  },
  {
    name: 'Gabriel',
    country: 'Canada',
    flag: '🇨🇦',
    rating: 5.0,
    project: 'Write some simple Android Bluetooth software',
    text: 'Great Freelancer. Was extremely patient and quick to deliver. Communication was excellent as well. Will definitely hire again.',
    tags: ['Android', 'BLE'],
    avatar: '/images/clients/gabriel.jpg',
  },
  {
    name: 'Direct',
    country: 'Sri Lanka',
    flag: '🇱🇰',
    rating: 5.0,
    project: 'Arduino + web project',
    text: 'Best guy for Arduino project and web based project. Good understanding and he tries to make customers 100% satisfied. Recommend for every one.',
    tags: ['iPhone', 'Android', 'Microcontroller'],
  },
  {
    name: 'Carlos',
    country: 'France',
    flag: '🇫🇷',
    rating: 4.6,
    project: 'Arduino sketch connects to a web service',
    text: 'Very good on Arduino domain. The communication is easy and fluid.',
    tags: ['Arduino'],
    avatar: '/images/clients/carlos.jpg',
  },
  {
    name: 'Gowtam',
    country: 'India',
    flag: '🇮🇳',
    rating: 5.0,
    project: 'Write an Android application',
    text: 'Great job and support is extremely good.',
    tags: ['Android'],
    avatar: '/images/clients/gowtam.jpg',
  },
]
