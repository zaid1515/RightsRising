// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to our website!',
      aboutUs: 'About Us',
      contact: 'Contact',
      homepg: {
        playLearnAdvocate: 'Play, Learn, and Advocate.',
        empoweringKids: 'Empowering Kids for a Just Tomorrow!',
        startLearning: 'Start Learning',
        ourFeatures: 'Our Features',
        ourActivities: 'Our Activities',
        challenges: 'Challenges',
        challengesDescription: 'Word Scramble, Quiz, Memory-Game and others',
        modulesAndStories: 'Modules and Stories',
        modulesAndStoriesDescription: 'Learning along with visuals and stories',
        games: '3D Games',
        gamesDescription: 'Interactive 3d gameplay based-on real-life scenarios',
        expertsWebinar: 'Experts Webinar',
        expertsWebinarDescription: 'Get lessons from experts and chat with them',
        aboutUs: 'About Us',
        ourMission: 'Our Mission',
        missionDescription: `
        Our platform's mission is to transform the learning experience for children aged 8-16 by combining the power of gamification with a profound exploration of child rights. Through interactive gameplay, we invite children into a captivating world where they can discover, understand, and appreciate the importance of their own rights. We're on a quest to raise awareness about these fundamental rights, providing an immersive journey that not only educates but also inspires action and advocacy. Together, we're building a world where young minds are empowered to shape a fair and just society.`,
        activities: 'Activities',
        QuizCompetition: 'Quiz Competition',
        QuizCompetitionDescription: `Quiz Competitions are conducted weekly where questions relate with several child rights and legal procedures. All users can participate in it at the same time and compete with others`,
        BlogsandNewsDescription: `Experts and NGOs talk about real-life incidents about brave children and share other latest happenings in the field of child rights and other legal procedures all over the world. Children can gain knowledge and be more updated about the events which took place`,
        EventsParticipation: 'Participate in Events',
        EventsParticipationDescription: `Children can participate in events and competitions for organised by the NGOs and other organizations. They can gain real-life experiences along with the virtual one`,
        RewardsandPrizes: 'Rewards and Prizes',
        RewardsandPrizesDescription: `Children get rewards on maintaining streak on watching modules. They also get prizes when they top the ;leaderboard of weekly quizzes`,
        Community: 'Connect with Peers',
        CommunityDescription: `A chat section for all the children users to interact with each other , share their interests , hobbies and experiences. They can have a good time through talking to the fellow users.`,
        blogs: 'Blogs',
        experts: 'Experts',
      }
    },
    // Assuming 'home' is the key for your Home component translations


  },
  hi: {
    translation: {
      welcome: 'हमारी वेबसाइट पर आपका स्वागत है!',
      aboutUs: 'हमारे बारे में',
      contact: 'संपर्क करें',
      vighnesh: 'विघ्नेश',
      helloEveryone: 'नमस्ते सभी को!!',
      badgesEarned: 'अर्जित बैज:',
      bio: 'जीवनी:',
      bioContent: 'लोरेम इप्सम डोलर सिट, अमेत कॉन्सेक्टेतुर अदिपिसिंग एलित. एस्से एरर एक्सप्लिकाबो फाकेरे दोलोरुम पोर्रो एओस एत मोल्लितिया, मोलेस्तिआस तेनेतुर रेपेल्लात. रेपुदिअंदाए एयुस ऑफ्फिचिय इद नोस्त्रुम! फुगित नाम सेद अद इप्साम?',
      coursesCompleted: 'पूरा किए गए कोर्सेज:',
      course1: 'कोर्स 1',
      course2: 'कोर्स 2',
      course3: 'कोर्स 3',
      course4: 'कोर्स 4',
      Home: "होम",
      Modules: "कोर्सेज",
      Blogs: "ब्लॉग्स",
      Challenges: "प्रश्नोत्तरी",
      Games: "खेल",
      Events: "घटनाएँ",
      Chat: "चैट",
      Profile: "प्रोफाइल",
      english: "अंग्रेज़ी",
      hindi: "हिंदी",
      Login: "लॉग इन",
      homepg: {
        playLearnAdvocate: 'खेलें, सीखें और समर्थन करें।',
        empoweringKids: 'एक न्यायिक भविष्य के लिए बच्चों को सशक्त करना!',
        startLearning: 'शुरू करें अध्ययन',
        ourActivities: 'हमारी गतिविधियाँ',
        challenges: 'चुनौतियाँ',
        challengesDescription: 'शब्द स्क्रैम्बल, क्विज़, मेमोरी गेम और अन्य',
        modulesAndStories: 'मॉड्यूल और कहानियाँ',
        modulesAndStoriesDescription: 'दृश्यों और कहानियों के साथ शिक्षा',
        games: '3D खेल',
        gamesDescription: 'वास्तविक जीवन के स्थितियों पर आधारित इंटरैक्टिव 3D गेमप्ले ',
        expertsWebinar: 'विशेषज्ञ वेबिनार',
        expertsWebinarDescription: 'विशेषज्ञों से सीखें और उनके साथ चैट करें',
        aboutUs: 'हमारे बारे में',
        ourMission: 'हमारा उद्देश्य',
        missionDescription: ' लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। ',
        learningModules: 'शिक्षाओं के मॉड्यूल',
        learningModulesDescription: ' लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। ',
        specialEvents: 'विशेष घटनाएँ',
        specialEventsDescription: ' लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। ',
        quizes: 'प्रश्नोत्तरी',
        quizesDescription: ' लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है।  लोरेम इप्सम यह केवल टाइपसेटिंग उद्योग का डमी टेक्स्ट है। '
      }
    }


  }

};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language in case translation files are missing
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
