import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Globe } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m your AI farming assistant. I can help you with crop yield predictions, weather impacts, soil management, and platform guidance. How can I assist you today?',
      language: 'en'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'or', name: 'ଓଡ଼ିଆ' }
  ];

  const responses = {
    en: {
      greeting: "Hello! I'm your AI farming assistant. How can I help you today?",
      yieldPrediction: "I can help you with crop yield predictions! Our AI analyzes weather data, soil conditions, and historical yields to provide accurate forecasts. Would you like to know about specific crops like rice, cotton, or sugarcane?",
      weather: "Weather plays a crucial role in crop yields. Heavy rainfall can affect rice harvesting, while drought conditions impact cotton production. I recommend checking our real-time weather integration feature in the prediction tool.",
      soil: "Soil management is key to good yields! For Odisha's varied soil types: Alluvial soils are great for rice, Black cotton soils suit cotton crops, and Red soils work well for groundnut. Regular soil testing every 2-3 years is recommended.",
      rice: "Rice cultivation tips for Odisha: Use certified seeds, maintain 2-3cm water depth during initial growth, apply NPK fertilizers as per soil test, and watch for brown planthopper and blast disease. Average yield target is 4-5 tons/hectare.",
      platform: "Our platform offers: AI-powered yield predictions, weather integration, multilingual support, expert recommendations, and 24/7 chatbot assistance. You can access the prediction tool from the main page.",
      contact: "You can reach our support team at support@aicropyield.odisha.gov.in or call +91-674-2536425. We're available Monday-Friday 9 AM-6 PM.",
      default: "I can help with yield predictions, weather impacts, soil management, rice cultivation, and platform support. What specific topic interests you?"
    },
    hi: {
      greeting: "नमस्कार! मैं आपका AI कृषि सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
      yieldPrediction: "मैं फसल उत्पादन की भविष्यवाणी में आपकी सहायता कर सकता हूं! हमारा AI मौसम डेटा, मिट्टी की स्थिति और ऐतिहासिक उत्पादन का विश्लेषण करके सटीक पूर्वानुमान देता है।",
      weather: "मौसम फसल उत्पादन में महत्वपूर्ण भूमिका निभाता है। अधिक बारिश धान की कटाई को प्रभावित करती है, जबकि सूखे की स्थिति कपास उत्पादन पर असर डालती है।",
      soil: "मिट्टी प्रबंधन अच्छी फसल के लिए मुख्य है! ओडिशा की विभिन्न मिट्टी के लिए: जलोढ़ मिट्टी धान के लिए उत्तम है, काली कपास मिट्टी कपास के लिए अनुकूल है।",
      rice: "ओडिशा में धान की खेती के सुझाव: प्रमाणित बीज का उपयोग करें, प्रारंभिक वृद्धि के दौरान 2-3 सेमी पानी बनाए रखें, मिट्टी परीक्षण के अनुसार NPK खाद डालें।",
      platform: "हमारा प्लेटफॉर्म प्रदान करता है: AI-संचालित उत्पादन पूर्वानुमान, मौसम एकीकरण, बहुभाषी सहायता, विशेषज्ञ सिफारिशें।",
      contact: "आप हमारी सहायता टीम से support@aicropyield.odisha.gov.in पर संपर्क कर सकते हैं या +91-674-2536425 पर कॉल कर सकते हैं।",
      default: "मैं उत्पादन पूर्वानुमान, मौसम प्रभाव, मिट्टी प्रबंधन, धान की खेती और प्लेटफॉर्म सहायता में मदद कर सकता हूं।"
    },
    ta: {
      greeting: "வணக்கம்! நான் உங்களின் AI விவசாய உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
      yieldPrediction: "பயிர் விளைச்சல் கணிப்புகளில் நான் உங்களுக்கு உதவ முடியும்! எங்கள் AI காலநிலை தரவு, மண் நிலைமைகள் மற்றும் வரலாற்று விளைச்சலை பகுப்பாய்வு செய்து துல்லியமான முன்னறிவிப்புகளை வழங்குகிறது.",
      weather: "பயிர் விளைச்சலில் வானிலை முக்கிய பங்கு வகிக்கிறது. அதிக மழை நெல் அறுவடையை பாதிக்கும், வறட்சி நிலைமைகள் பருத்தி உற்பத்தியை பாதிக்கும்.",
      soil: "மண் நிர்வாகம் நல்ல விளைச்சலுக்கு முக்கியமானது! ஒடிஸாவின் பல்வேறு மண் வகைகளுக்கு: வண்டல் மண் நெல்லுக்கு சிறந்தது, கருப்பு பருத்தி மண் பருத்திக்கு ஏற்றது.",
      rice: "ஒடிஸாவில் நெல் சாகுபடி குறிப்புகள்: சான்றளிக்கப்பட்ட விதைகளைப் பயன்படுத்துங்கள், ஆரம்ப வளர்ச்சியின் போது 2-3 செ.மீ நீரை பராமரிக்கவும்.",
      platform: "எங்கள் தளம் வழங்குகிறது: AI-இயங்கும் விளைச்சல் கணிப்புகள், வானிலை ஒருங்கிணைப்பு, பன்மொழி ஆதரவு, நிபுணர் பரிந்துரைகள்.",
      contact: "நீங்கள் எங்கள் ஆதரவு குழுவை support@aicropyield.odisha.gov.in இல் தொடர்பு கொள்ளலாம் அல்லது +91-674-2536425 இல் அழைக்கலாம்.",
      default: "நான் விளைச்சல் கணிப்புகள், வானிலை தாக்கங்கள், மண் நிர்வாகம், நெல் சாகுபடி மற்றும் தள ஆதரவில் உதவ முடியும்."
    },
    te: {
      greeting: "నమస్కారం! నేను మీ AI వ్యవసాయ సహాయకుడిని. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
      yieldPrediction: "పంట దిగుబడి అంచనాలలో నేను మీకు సహాయం చేయగలను! మా AI వాతావరణ డేటా, నేల పరిస్థితులు మరియు చారిత్రక దిగుబడులను విశ్లేషించి ఖచ్చితమైన అంచనాలను అందిస్తుంది.",
      weather: "పంట దిగుబడిలో వాతావరణం కీలక పాత్ర పోషిస్తుంది. అధిక వర్షం వరి కోతను ప్రభావితం చేస్తుంది, కరువు పరిస్థితులు పత్తి ఉత్పాదనను ప్రభావితం చేస్తాయి.",
      soil: "మంచి దిగుబడికి నేల నిర్వహణ కీలకం! ఒడిశాలోని వివిధ నేల రకాలకు: ఒండ్రు నేలలు వరికి మంచివి, నల్ల పత్తి నేలలు పత్తికి అనుకూలం.",
      rice: "ఒడిశాలో వరి సాగు చిట్కాలు: ధృవీకరించబడిన విత్తనాలను ఉపయోగించండి, ప్రారంభ పెరుగుదలలో 2-3 సెంటీమీటర్లు నీరు నిర్వహించండి।",
      platform: "మా వేదిక అందిస్తుంది: AI-ఆధారిత దిగుబడి అంచనాలు, వాతావరణ అనుసంధానం, బహుభాషా మద్దతు, నిపుణుల సిఫారసులు.",
      contact: "మీరు మా మద్దతు బృందాన్ని support@aicropyield.odisha.gov.in వద్ద సంప్రదించవచ్చు లేదా +91-674-2536425కి కాల్ చేయవచ్చు.",
      default: "నేను దిగుబడి అంచనాలు, వాతావరణ ప్రభావాలు, నేల నిర్వహణ, వరి సాగు మరియు వేదిక మద్దతులో సహాయం చేయగలను."
    },
    ml: {
      greeting: "നമസ്കാരം! ഞാൻ നിങ്ങളുടെ AI കൃഷി സഹായകനാണ്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?",
      yieldPrediction: "വിള വിളവ് പ്രവചനങ്ങളിൽ എനിക്ക് നിങ്ങളെ സഹായിക്കാൻ കഴിയും! ഞങ്ങളുടെ AI കാലാവസ്ഥാ ഡാറ്റ, മണ്ണിന്റെ അവസ്ഥ, ചരിത്രപരമായ വിളവ് എന്നിവ വിശകലനം ചെയ്ത് കൃത്യമായ പ്രവചനങ്ങൾ നൽകുന്നു.",
      weather: "വിള വിളവിൽ കാലാവസ്ഥ നിർണായക പങ്ക് വഹിക്കുന്നു. അമിത മഴ നെല്ല് കൊയ്ത്തിനെ ബാധിക്കും, വരൾച്ച അവസ്ഥ പരുത്തി ഉത്പാദനത്തെ ബാധിക്കും.",
      soil: "നല്ല വിളവിനായി മണ്ണ് നിയന്ത്രണം പ്രധാനമാണ്! ഒഡീഷയിലെ വിവിധ മണ്ണ് തരങ്ങൾക്ക്: വെള്ളപ്പൊക്ക മണ്ണ് നെല്ലിന് മികച്ചതാണ്, കറുത്ത പരുത്തി മണ്ണ് പരുത്തിക്ക് അനുയോജ്യമാണ്.",
      rice: "ഒഡീഷയിലെ നെല്ല് കൃഷിയുടെ നുറുങ്ങുകൾ: സാക്ഷ്യപ്പെടുത്തിയ വിത്തുകൾ ഉപയോগിക്കുക, പ്രാഥമിക വളർച്ചയിൽ 2-3 സെന്റീമീറ്റർ വെള്ളം നിലനിർത്തുക.",
      platform: "ഞങ്ങളുടെ പ്ലാറ്റ്‌ഫോം നൽകുന്നു: AI-പവേർഡ് വിളവ് പ്രവചനങ്ങൾ, കാലാവസ്ഥാ സംയോജനം, ബഹുഭാഷാ പിന്തുണ, വിദഗ്ധ ശുപാർശകൾ.",
      contact: "നിങ്ങൾക്ക് ഞങ്ങളുടെ പിന്തുണാ ടീമിനെ support@aicropyield.odisha.gov.in ൽ ബന്ധപ്പെടാം അല്ലെങ്കിൽ +91-674-2536425 ൽ വിളിക്കാം.",
      default: "വിളവ് പ്രവചനങ്ങൾ, കാലാവസ്ഥാ ആഘാതങ്ങൾ, മണ്ണ് നിയന്ത്രണം, നെല്ല് കൃഷി, പ്ലാറ്റ്‌ഫോം സപ്പോർട്ട് എന്നിവയിൽ എനിക്ക് സഹായിക്കാൻ കഴിയും."
    },
    or: {
      greeting: "ନମସ୍କାର! ମୁଁ ଆପଣଙ୍କର AI କୃଷି ସହାୟକ। ଆଜି ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?",
      yieldPrediction: "ଫସଲ ଉତ୍ପାଦନ ପୂର୍ବାନୁମାନରେ ମୁଁ ଆପଣଙ୍କୁ ସାହାଯ୍ୟ କରିପାରିବି! ଆମର AI ପାଣିପାଗ ତଥ୍ୟ, ମାଟିର ଅବସ୍ଥା ଏବଂ ଐତିହାସିକ ଉତ୍ପାଦନକୁ ବିଶ୍ଳେଷଣ କରି ସଠିକ୍ ପୂର୍ବାନୁମାନ ପ୍ରଦାନ କରେ।",
      weather: "ଫସଲ ଉତ୍ପାଦନରେ ପାଣିପାଗର ମୁଖ୍ୟ ଭୂମିକା ରହିଛି। ଅଧିକ ବର୍ଷା ଧାନ କାଟିବାକୁ ପ୍ରଭାବିତ କରେ, ମରୁଡ଼ି ଅବସ୍ଥା କପାସ ଉତ୍ପାଦନକୁ ପ୍ରଭାବିତ କରେ।",
      soil: "ଭଲ ଅମଳ ପାଇଁ ମାଟି ପରିଚାଳନା ମୁଖ୍ୟ! ଓଡ଼ିଶାର ବିଭିନ୍ନ ମାଟି ପ୍ରକାର ପାଇଁ: ପଲିମାଟି ଧାନ ପାଇଁ ଉତ୍ତମ, କଳା କପାସ ମାଟି କପାସ ପାଇଁ ଉପଯୁକ୍ତ।",
      rice: "ଓଡ଼ିଶାରେ ଧାନ ଚାଷର ପରାମର୍ଶ: ପ୍ରମାଣିତ ବିହନ ବ୍ୟବହାର କରନ୍ତୁ, ପ୍ରାରମ୍ଭିକ ବୃଦ୍ଧିରେ 2-3 ସେମି ପାଣି ରଖନ୍ତୁ, ମାଟି ପରୀକ୍ଷା ଅନୁଯାୟୀ NPK ସାର ପ୍ରୟୋଗ କରନ୍ତୁ।",
      platform: "ଆମର ପ୍ଲାଟଫର୍ମ ପ୍ରଦାନ କରେ: AI-ଚାଳିତ ଉତ୍ପାଦନ ପୂର୍ବାନୁମାନ, ପାଣିପାଗ ଏକୀକରଣ, ବହୁଭାଷୀ ସହାୟତା, ବିଶେଷଜ୍ଞ ସୁପାରିଶ।",
      contact: "ଆପଣ ଆମର ସହାୟତା ଦଳକୁ support@aicropyield.odisha.gov.in ରେ ଯୋଗାଯୋଗ କରିପାରିବେ କିମ୍ବା +91-674-2536425 କୁ କଲ କରିପାରିବେ।",
      default: "ମୁଁ ଉତ୍ପାଦନ ପୂର୍ବାନୁମାନ, ପାଣିପାଗ ପ୍ରଭାବ, ମାଟି ପରିଚାଳନା, ଧାନ ଚାଷ ଏବଂ ପ୍ଲାଟଫର୍ମ ସହାୟତାରେ ସାହାଯ୍ୟ କରିପାରିବି।"
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    const currentLangResponses = responses[currentLanguage];
    
    if (lowerMessage.includes('yield') || lowerMessage.includes('prediction') || lowerMessage.includes('forecast')) {
      return currentLangResponses.yieldPrediction;
    } else if (lowerMessage.includes('weather') || lowerMessage.includes('rain') || lowerMessage.includes('climate')) {
      return currentLangResponses.weather;
    } else if (lowerMessage.includes('soil') || lowerMessage.includes('fertilizer') || lowerMessage.includes('nutrient')) {
      return currentLangResponses.soil;
    } else if (lowerMessage.includes('rice') || lowerMessage.includes('paddy') || lowerMessage.includes('धान') || lowerMessage.includes('நெல்')) {
      return currentLangResponses.rice;
    } else if (lowerMessage.includes('platform') || lowerMessage.includes('how to') || lowerMessage.includes('help') || lowerMessage.includes('feature')) {
      return currentLangResponses.platform;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('phone')) {
      return currentLangResponses.contact;
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('namaste')) {
      return currentLangResponses.greeting;
    } else {
      return currentLangResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      type: 'user',
      content: inputMessage,
      language: currentLanguage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(inputMessage);
      const botMessage = {
        type: 'bot',
        content: response,
        language: currentLanguage
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    const welcomeMessage = {
      type: 'bot',
      content: responses[langCode].greeting,
      language: langCode
    };
    setMessages([welcomeMessage]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-96 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Farm Assistant</h3>
                <p className="text-xs text-orange-100">Always here to help</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative group">
                <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                  <Globe className="h-4 w-4" />
                </button>
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border py-2 hidden group-hover:block z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        currentLanguage === lang.code ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-xs ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user'
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {message.type === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  
                  <div
                    className={`px-3 py-2 rounded-lg text-sm leading-relaxed ${
                      message.type === 'user'
                        ? 'bg-orange-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputMessage.trim() === ''}
                className="bg-orange-600 hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;