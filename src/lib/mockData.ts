import { Article } from '@/types/article';

// Mock news data - simulates API response
export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'नई दिल्ली में विकास परियोजना की शुरुआत',
    description: 'सरकार ने राजधानी में एक बड़ी बुनियादी ढांचा परियोजना की घोषणा की है।',
    content: `नई दिल्ली में एक महत्वपूर्ण विकास परियोजना आज शुरू की गई। इस परियोजना का उद्देश्य 
    शहर की बुनियादी ढांचे में सुधार करना है। सरकार ने इस परियोजना के लिए 500 करोड़ रुपये का बजट 
    आवंटित किया है। इस परियोजना से शहर के लोगों को कई लाभ मिलेंगे।`,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    category: 'दिल्ली',
    author: 'राज कुमार',
    publishedAt: new Date().toISOString(),
    readTime: 5,
  },
  {
    id: '2',
    title: 'अर्थव्यवस्था में नई वृद्धि के संकेत मिलें',
    description: 'तीसरी तिमाही में जीडीपी वृद्धि दर बढ़ कर 7.2% हुई है।',
    content: `भारत की अर्थव्यवस्था में सकारात्मक संकेत दिख रहे हैं। तीसरी तिमाही में जीडीपी वृद्धि दर 
    7.2% तक पहुंच गई है। विशेषज्ञ मानते हैं कि यह देश की आर्थिक स्थिति में सुधार का संकेत है।`,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    category: 'व्यापार',
    author: 'प्रिया शर्मा',
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    readTime: 6,
  },
  {
    id: '3',
    title: 'खेल की दुनिया में भारत की जीत',
    description: 'भारतीय टीम ने अंतर्राष्ट्रीय चैंपियनशिप में शानदार प्रदर्शन किया।',
    content: `भारतीय खेल टीम ने हाल ही में अंतर्राष्ट्रीय चैंपियनशिप में शानदार प्रदर्शन किया है। 
    टीम ने कुल 15 पदक जीते हैं जिसमें 5 स्वर्ण पदक शामिल हैं। यह भारत के लिए एक गौरवान्वित क्षण है।`,
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&q=80',
    category: 'खेल',
    author: 'विकास पटेल',
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    readTime: 4,
  },
  {
    id: '4',
    title: 'शिक्षा में डिजिटल क्रांति आ रही है',
    description: 'नई शिक्षा नीति में ऑनलाइन शिक्षा को प्रमुखता दी जा रही है।',
    content: 'भारत में शिक्षा व्यवस्था में बड़े बदलाव आने वाले हैं। नई शिक्षा नीति में डिजिटल शिक्षा को विशेष महत्व दिया गया है। सरकार हर स्कूल में स्मार्ट क्लास सुविधा प्रदान करने का लक्ष्य रख रही है।',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
    category: 'शिक्षा',
    author: 'अनीता वर्मा',
    publishedAt: new Date(Date.now() - 10800000).toISOString(),
    readTime: 5,
  },
  {
    id: '5',
    title: 'पर्यावरण संरक्षण में बड़ी पहल',
    description: 'सरकार ने 2030 तक कार्बन उत्सर्जन 45% कम करने का लक्ष्य निर्धारित किया।',
    content: `भारत सरकार ने जलवायु परिवर्तन से निपटने के लिए एक महत्वाकांक्षी योजना घोषित की है। 
    सरकार का लक्ष्य 2030 तक कार्बन उत्सर्जन को 45% तक कम करना है। इसके लिए नवीकरणीय ऊर्जा में 
    निवेश बढ़ाया जा रहा है।`,
    image: 'https://images.unsplash.com/photo-1536431311894-8c1c14369c90?w=800&q=80',
    category: 'पर्यावरण',
    author: 'राहुल सिंह',
    publishedAt: new Date(Date.now() - 14400000).toISOString(),
    readTime: 7,
  },
  {
    id: '6',
    title: 'तकनीक में भारत का उदय',
    description: 'भारत तकनीकी क्षेत्र में एक शक्तिशाली खिलाड़ी बनकर उभर रहा है।',
    content: `भारत की तकनीकी क्षेत्र में प्रगति ने विश्व का ध्यान आकर्षित किया है। कई भारतीय स्टार्टअप 
    अब यूनिकॉर्न स्टेटस प्राप्त कर चुके हैं। भारत आने वाले दशक में तकनीकी नेतृत्व प्रदान करने में सक्षम होगा।`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    category: 'तकनीक',
    author: 'अमित गुप्ता',
    publishedAt: new Date(Date.now() - 18000000).toISOString(),
    readTime: 6,
  },
];

export async function getAllArticles(): Promise<Article[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockArticles;
}

export async function getArticleById(id: string): Promise<Article | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockArticles.find(article => article.id === id);
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockArticles.filter(article => article.category === category);
}
