import React, { useState, useEffect } from 'react';

// Define LATEST_VIDEOS outside of components for shared access
const LATEST_VIDEOS = [
  {
    id: 1,
    title: '도쿄 나카노. 일본서 시계 살거면 그냥 여기 가세요',
    category: 'Watch Hunting',
    youtubeId: 'DLLx-twiJqg',
    description: '나카노브로드웨이에 시계 여행을 통해 만나본 딜러샵과 빈티지 시계들을 소개합니다.',
  },
  {
    id: 2,
    category: 'Watch Hunting',
    title: '요즘 해외에서 난리난 교토 시계여행 코스 도대체 뭐길래?',
    youtubeId: 'Y--ywZkwQX4',
    description: '교토 시계여행은 어떠세요. KUOE와 시계탐방 동선을 간단히 소개합니다.',
  },
  {
    id: 3,
    category: 'Watch Hunting',
    title: '도쿄 긴자. 진짜 일본 부자들이 시계 사는곳 가봤는데요. 미쳤습니다',
    youtubeId: 's7JMpyDsJJQ',
    description: '긴자에 시계 여행을 다녀왔습니다. 세이코하우스, 주오도리 시계거리와 빈티지 시계점들을 소개합니다.',
  },
  {
    id: 4,
    title: '신생브랜드 시계가 2억. 풀란마리와 하바나 1031-A',
    category: 'My Watch Collection',
    youtubeId: '8eWxVgpl4ao',
    description: '풀란마리 초기 한정 모델 하바나 1031-A, 파텍필립 1463에 대해 알아봅니다',
  },
  {
    id: 5,
    title: '티쏘 관계자도 잘 모른다는 진짜 보물. 알고보니?',
    category: 'My Watch Collection',
    youtubeId: 'VUG7W12JYcI',
    description: '티쏘에서 만든 가장 예쁜 스텝드 케이스 빈티지. 특징, 가격, 단점까지 모두 파헤쳐 봅니다.',
  },
  {
    id: 6,
    title: '7분 안에 70년된 빈티지 오메가 씨마스터 와플 맛보기',
    category: 'My Watch Collection',
    youtubeId: 'cY5VQuDsw6A',
    description: '와플 별칭의 유래와 오메가 씨마스터 와플다이얼 1956년 빈티지를 소개합니다',
  },
];


// Main App Component
function App() {
  // State to manage the current active page
  // Initial page is now 'home' which displays the content previously in 'About Us'
  const [currentPage, setCurrentPage] = useState('home');
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for email copy message
  const [emailCopyMessage, setEmailCopyMessage] = useState('');

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle page change and close mobile menu
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close menu when a link is clicked
  };

  // Function to copy email to clipboard
  const copyEmailToClipboard = () => {
    const email = 'lic0885@gmail.com';
    const tempInput = document.createElement('textarea');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setEmailCopyMessage('이메일 주소가 클립보드에 복사되었습니다!');
    setTimeout(() => setEmailCopyMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    // Set font-family to prioritize Inter for English, then Gowun Batang for Korean, and a generic sans-serif fallback
    <div className="min-h-screen bg-gray-100" style={{ fontFamily: "'Inter', 'Gowun Batang', sans-serif" }}>
      {/* Google Fonts - Gowun Batang Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        `}
      </style>
      {/* Tailwind CSS CDN - Ensure this is loaded in the HTML file for the app to work */}
      {/* <script src="https://cdn.tailwindcss.com"></script> */}

      {/* Header Section */}
      <header className="bg-white shadow-sm py-4 px-6 md:px-12">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#" className="text-2xl font-bold text-gray-800" onClick={() => handlePageChange('home')}>
              Watch HIVE
            </a>
          </div>

          {/* Navigation - Hidden on small screens, shown as a menu button */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => handlePageChange('home')}>
              Home {/* This now points to the content previously in About Us */}
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => handlePageChange('videos')}>
              Videos
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => handlePageChange('fit-finder')}>
              Fit Finder
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => handlePageChange('year-finder')}>
              Year Finder
            </a>
            {/* Removed the old "About Us" link as it's now the "Home" page */}
          </nav>

          {/* Mobile Menu Button - Search and User Icons removed as per request */}
          <div className="flex items-center space-x-4">
            <button className="md:hidden text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8">
          <button className="absolute top-4 right-4 text-gray-800" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <a href="#" className="text-gray-800 text-2xl font-medium hover:text-gray-900" onClick={() => handlePageChange('home')}>
            Home {/* This now points to the content previously in About Us */}
          </a>
          <a href="#" className="text-gray-800 text-2xl font-medium hover:text-gray-900" onClick={() => handlePageChange('videos')}>
            Videos
          </a>
          <a href="#" className="text-gray-800 text-2xl font-medium hover:text-gray-900" onClick={() => handlePageChange('fit-finder')}>
            Fit Finder
          </a>
          <a href="#" className="text-gray-800 text-2xl font-medium hover:text-gray-900" onClick={() => handlePageChange('year-finder')}>
            Year Finder
          </a>
          {/* Removed the old "About Us" link */}
        </div>
      )}

      {/* Conditional rendering of pages */}
      {/* The 'home' page now renders the content of the former 'AboutUsPage' */}
      {currentPage === 'home' && <HomePageContent handlePageChange={handlePageChange} />}
      {currentPage === 'videos' && <VideosPage />}
      {currentPage === 'fit-finder' && <FitFinderPage />}
      {currentPage === 'year-finder' && <YearFinderPage />}

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-6 md:px-12 rounded-t-lg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Watch HIVE</h4>
            <p className="text-sm">
              A space for vintage watch enthusiasts.
              Stay a while and enjoy your time here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white" onClick={() => handlePageChange('home')}>Home</a></li>
              <li><a href="#" className="hover:text-white" onClick={() => handlePageChange('videos')}>Videos</a></li>
              <li><a href="#" className="hover:text-white" onClick={() => handlePageChange('fit-finder')}>Fit Finder</a></li>
              <li><a href="#" className="hover:text-white" onClick={() => handlePageChange('year-finder')}>Year Finder</a></li>
            </ul>
          </div>

          {/* Social Media and Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4> {/* Changed to Follow Me */}
            <div className="flex space-x-4 mb-6"> {/* Added margin-bottom for spacing */}
              {/* YouTube Icon - Modified to be outline with filled play button, similar to Instagram */}
              <a href="https://www.youtube.com/@seemoung" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Outer rectangle matching Instagram's x, y, width, height, rx, ry */}
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  {/* Play triangle, filled with current color (white) */}
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/seemoung_vtg?igsh=MWZoZGhuZ2lxNnBzMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
            {/* New Contact Us Section */}
            <h4 className="text-white font-semibold mb-4">Contact Me</h4> {/* Changed to Contact Me */}
            <div className="flex space-x-4">
              {/* Email Icon Moved Here */}
              <button onClick={copyEmailToClipboard} className="hover:text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </button>
            </div>
            {emailCopyMessage && (
              <div className="mt-2 p-2 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-md text-sm">
                {emailCopyMessage}
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Watch HIVE by 빈시멍. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// HomePageContent Component (formerly AboutUsPage)
function HomePageContent({ handlePageChange }) { // Receive handlePageChange prop
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async () => {
    const shareData = {
      title: 'Watch HIVE',
      text: 'Watch HIVE - 빈티지 시계 애호가들을 위한 공간입니다.',
      url: window.location.href, // Current page URL
    };

    let copiedSuccessfully = false;
    try {
      // Always attempt to copy to clipboard first
      const tempInput = document.createElement('textarea');
      tempInput.value = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy'); // Use execCommand for broader compatibility in iframes
      document.body.removeChild(tempInput);
      setShareMessage('링크가 클립보드에 복사되었습니다!');
      copiedSuccessfully = true;
    } catch (copyError) {
      console.error('클립보드 복사 실패:', copyError);
      setShareMessage('클립보드 복사에 실패했습니다.');
    }

    // If Web Share API is available, try it for a richer experience
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShareMessage('성공적으로 공유되었습니다!'); // Overwrite previous message if share succeeds
      } catch (shareError) {
        console.error('Web Share API 공유 실패:', shareError);
        // If share fails, and copying was not successful, then show a general error.
        // Otherwise, the copy message is already there.
        if (!copiedSuccessfully) {
          setShareMessage('공유에 실패했습니다.');
        }
      }
    }

    setTimeout(() => setShareMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <main className="container mx-auto mt-8 px-0 md:px-0 py-8"> {/* Removed horizontal padding from main */}
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Watch HIVE</h1> {/* Changed title */}

      {/* Introduction Section */}
      <section className="mb-12 text-center max-w-4xl mx-auto px-6 md:px-12"> {/* Added back padding for text content */}
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          안녕하세요, 시계를 사랑하는 평범한 직장인 빈시멍 입니다. <br/>
          시계, 특히 빈티지 시계 애호가 분들과 이야기를 나누고 싶어 유튜브 채널을 시작했고
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Watch Hive는 저처럼 시계를 좋아하는 분들, <br/>
          그리고 막 시계에 관심을 갖기 시작한 분들을 위해 만들었습니다.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          이 페이지의 모든 콘텐츠는 무료로 제공되며, 빈티지 시계는 물론<br/>
          현행 시계나 애플 워치를 착용하는 분들까지 누구나 자유롭게 이용하실 수 있습니다.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          한국에도 빈티지 시계 문화를 더 알리고 싶다는 마음으로<br/>
          1인 영상 콘텐츠와 서비스를 만들어가고 있습니다.
        </p>
      </section>

      {/* Quote Section with Background Image and Overlay */}
      <section
        className="relative p-12 mb-12 flex items-center justify-center min-h-[250px] w-full" // Added w-full to make it full width
        style={{
          backgroundImage: `url(uploaded:화면 캡처 2025-07-13 003938.png-966747f1-9ea8-4857-ab04-6836024750dc)`, // User provided image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Black overlay with 20% opacity */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* Quote text */}
        <p className="relative text-white text-base md:text-lg font-semibold text-center z-10 px-4 md:px-0"> {/* Adjusted font size and added horizontal padding for readability on small screens */}
          "조금 느릴 수 있지만, 꾸준하게 더 많은 시계 정보와 영상을 전달하는 채널이 되고 싶어요."
        </p>
      </section>

      {/* Service Descriptions Section */}
      <section className="mb-12 px-6 md:px-12"> {/* Added back padding for this section */}
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">제공 서비스</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Item: Videos */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-sm flex flex-col items-center text-center cursor-pointer hover:bg-gray-700 transition duration-200"
            onClick={() => handlePageChange('videos')}
          >
            {/* Image for Videos */}
            <div
              className="w-full h-32 mb-4 rounded-lg flex items-center justify-center" // Added flex for centering content
              style={{
                backgroundImage: `url(uploaded:video-content-blog-header-.webp-dc0f5a32-3f89-444d-9f59-39dcb6a426b7)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2, // 20% opacity
              }}
            ></div>
            <h4 className="text-xl font-bold text-white mb-2">Videos</h4>
            <p className="text-gray-300">유튜브 채널에서 제작한 빈티지 시계 리뷰와 시계 헌팅 영상</p>
          </div>
          {/* Service Item: Fit Finder */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-sm flex flex-col items-center text-center cursor-pointer hover:bg-gray-700 transition duration-200"
            onClick={() => handlePageChange('fit-finder')}
          >
            {/* Image for Fit Finder */}
            <div
              className="w-full h-32 mb-4 rounded-lg flex items-center justify-center"
              style={{
                backgroundImage: `url(uploaded:IMG_8643.jpg-8403b5f5-077b-4b9a-8b02-ee38f0d5b91a)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2, // 20% opacity
              }}
            ></div>
            <h4 className="text-xl font-bold text-white mb-2">Fit Finder</h4>
            <p className="text-gray-300">손목 사이즈에 맞는 시계 사이즈를 추천해주는 서비스</p>
          </div>
          {/* Service Item: Year Finder */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-sm flex flex-col items-center text-center cursor-pointer hover:bg-gray-700 transition duration-200"
            onClick={() => handlePageChange('year-finder')}
          >
            {/* Image for Year Finder */}
            <div
              className="w-full h-32 mb-4 rounded-lg flex items-center justify-center"
              style={{
                backgroundImage: `url(uploaded:watch-movements-explained.jpg-098cc9f8-7eaf-416c-8fb0-3d2f33d040f4)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2, // 20% opacity
              }}
            ></div>
            <h4 className="text-xl font-bold text-white mb-2">Year Finder</h4>
            <p className="text-gray-300">시계 시리얼 넘버로 생산년도를 확인할 수 있는 서비스</p>
          </div>
        </div>
      </section>

      {/* Combined Latest Videos and How to Support Section */}
      <section className="bg-purple-50 p-8 rounded-lg shadow-lg text-center w-full px-6 md:px-12"> {/* Added back horizontal padding */}
        {/* Latest Videos */}
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">최신 영상</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"> {/* Added mb-8 for spacing */}
          {LATEST_VIDEOS.slice(0, 3).map(video => ( // Display only the first 3 videos
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x338/909090/FFFFFF?text=Video+Image"; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="white" stroke="none">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
              </a>
              <div className="p-4">
                <p className="text-blue-600 text-xs font-semibold uppercase mb-1">{video.category}</p>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {video.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* How to Support */}
        <p className="text-gray-700 text-lg mb-6">
          유튜브 채널 구독은 콘텐츠 제작에 큰 힘이 됩니다.
        </p>
        {/* Modified: Changed to flex-col for vertical stacking and removed sm:flex-row */}
        <div className="flex flex-col justify-center items-center gap-4 mb-6">
          <a
            href="https://www.youtube.com/channel/UC9YPdU50ZuFvqLnxw0HYmGA?sub_confirmation=1" // Updated YouTube link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out text-lg w-full sm:w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube mr-2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0 2 2 0 0 1 1.4 1.4 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0 2 2 0 0 1-1.4-1.4Z"/><path d="m10 15 5-3-5-3z"/></svg>
            YouTube 채널 구독하기
          </a>
          {/* New Share Button - Moved before Buy Me a Coffee */}
          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out text-lg w-full sm:w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2 mr-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
            다른 시계 덕후에게 공유하기
          </button>
          <a
            href="https://coff.ee/watchhive" // Updated link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out text-lg w-full sm:w-auto"
          >
            {/* Custom SVG for a coffee cup icon based on the provided image */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M10 2c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1H10z"/>
              <path d="M2 8h18a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2v-4Z"/>
              <path d="M12 14v6"/>
              <path d="M15 14v6"/>
              <path d="M9 14v6"/>
            </svg>
            Buy Me a Coffee
          </a>
        </div>
        {shareMessage && (
          <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-800 rounded-md text-sm">
            {shareMessage}
          </div>
        )}
      </section>
    </main>
  );
}

// VideosPage Component
function VideosPage() {
  return (
    <main className="container mx-auto mt-8 px-6 md:px-12 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Videos</h1>

      {/* Featured Video Section */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* YouTube Video Embed */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 /* 16:9 Aspect Ratio */ }}>
            <iframe
              src="https://www.youtube.com/embed/DLLx-twiJqg?si=iA7PFE0LtsLcsahQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-t-lg"
            ></iframe>
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              도쿄 나카노. 일본서 시계 살거면 그냥 여기 가세요
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              나카노브로드웨이에 시계 여행을 통해 만나본 딜러샵과 빈티지 시계들을 소개합니다.
            </p>
            <a href="https://www.youtube.com/watch?v=DLLx-twiJqg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
              지금 시청하기 &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Latest Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_VIDEOS.map(video => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Added 'group' class to the parent <a> tag for hover effects */}
              <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x338/909090/FFFFFF?text=Video+Image"; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Play icon with white fill, no stroke, and larger points */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="white" stroke="none">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
              </a>
              <div className="p-4">
                <p className="text-blue-600 text-xs font-semibold uppercase mb-1">{video.category}</p>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {video.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// YearFinderPage Component
function YearFinderPage() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [productionYear, setProductionYear] = useState('');
  const [lookupError, setLookupError] = useState('');

  // Debugging useEffect to log selectedBrand and currentBrandGuide
  useEffect(() => {
    console.log("Selected Brand:", selectedBrand);
    console.log("Current Brand Guide:", brandGuides[selectedBrand]);
  }, [selectedBrand]);

  // Omega Serial Number Data
  const omegaSerialData = [
    { year: 1895, serial: 1000000 }, { year: 1896, serial: 1150000 },
    { year: 1897, serial: 1300000 }, { year: 1898, serial: 1450000 },
    { year: 1899, serial: 1600000 }, { year: 1900, serial: 1750000 },
    { year: 1901, serial: 1900000 }, { year: 1902, serial: 2000000 },
    { year: 1903, serial: 2150000 }, { year: 1904, serial: 2300000 },
    { year: 1905, serial: 2450000 }, { year: 1906, serial: 2600000 },
    { year: 1907, serial: 2750000 }, { year: 1908, serial: 3000000 },
    { year: 1909, serial: 3250000 }, { year: 1910, serial: 3500000 },
    { year: 1911, serial: 3750000 }, { year: 1912, serial: 4000000 },
    { year: 1913, serial: 4250000 }, { year: 1914, serial: 4500000 },
    { year: 1915, serial: 4750000 }, { year: 1916, serial: 5000000 },
    { year: 1917, serial: 5150000 }, { year: 1918, serial: 5300000 },
    { year: 1919, serial: 5450000 }, { year: 1920, serial: 5600000 },
    { year: 1921, serial: 5750000 }, { year: 1922, serial: 5900000 },
    { year: 1923, serial: 6000000 }, { year: 1924, serial: 6150000 },
    { year: 1925, serial: 6300000 }, { year: 1926, serial: 6500000 },
    { year: 1927, serial: 6650000 }, { year: 1928, serial: 6800000 },
    { year: 1929, serial: 7000000 }, { year: 1930, serial: 7100000 },
    { year: 1931, serial: 7250000 }, { year: 1932, serial: 7500000 },
    { year: 1933, serial: 7650000 }, { year: 1934, serial: 7750000 },
    { year: 1940, serial: 9200000 }, { year: 1941, serial: 9400000 },
    { year: 1942, serial: 9600000 }, { year: 1943, serial: 9800000 },
    { year: 1944, serial: 10000000 }, { year: 1945, serial: 10300000 },
    { year: 1946, serial: 10600000 }, { year: 1947, serial: 11000000 },
    { year: 1948, serial: 11300000 }, { year: 1949, serial: 11600000 },
    { year: 1950, serial: 12000000 }, { year: 1951, serial: 12500000 },
    { year: 1952, serial: 13000000 }, { year: 1953, serial: 13500000 },
    { year: 1954, serial: 14000000 }, { year: 1955, serial: 14500000 },
    { year: 1956, serial: 15000000 }, { year: 1957, serial: 15500000 },
    { year: 1958, serial: 16000000 }, { year: 1959, serial: 16700000 },
    { year: 1960, serial: 17400000 }, { year: 1961, serial: 18000000 },
    { year: 1962, serial: 19000000 }, { year: 1963, serial: 20000000 },
    { year: 1964, serial: 21000000 }, { year: 1965, serial: 22000000 },
    { year: 1966, serial: 23500000 }, { year: 1967, serial: 25000000 },
    { year: 1968, serial: 26000000 }, { year: 1969, serial: 27000000 },
    { year: 1970, serial: 29000000 }, { year: 1971, serial: 33000000 },
    { year: 1972, serial: 34000000 }, { year: 1973, serial: 36000000 },
    { year: 1974, serial: 38000000 }, { year: 1975, serial: 39000000 },
    { year: 1977, serial: 40000000 }, { year: 1978, serial: 41000000 },
    { year: 1979, serial: 42000000 }, { year: 1980, serial: 44000000 },
    { year: 1982, serial: 45000000 }, { year: 1984, serial: 46000000 },
    { year: 1985, serial: 48000000 }, { year: 1986, serial: 49000000 }, // Using lower bound for range
    { year: 1989, serial: 51000000 },
  ];

  // Rolex Serial Number Data parsed from the provided image (1926-1987)
  const rolexSerialData = [
    // Removed entries before 1954
    { year: 1954, serialStart: 0, serialEnd: 149999 }, // 1954년 RESET 이후 시작 번호 (임의 설정)
    { year: 1956, serialStart: 150000, serialEnd: 250000 },
    { year: 1957, serialStart: 250000, serialEnd: 350000 },
    { year: 1958, serialStart: 350000, serialEnd: 450000 },
    { year: 1959, serialStart: 450000, serialEnd: 550000 },
    { year: 1960, serialStart: 550000, serialEnd: 650000 },
    { year: 1961, serialStart: 650000, serialEnd: 755000 },
    { year: 1962, serialStart: 755000, serialEnd: 865000 },
    { year: 1963, serialStart: 865000, serialEnd: 1000000 },
    { year: 1964, serialStart: 1000000, serialEnd: 1105000 },
    { year: 1965, serialStart: 1105000, serialEnd: 1275000 },
    { year: 1966, serialStart: 1275000, serialEnd: 1485000 },
    { year: 1967, serialStart: 1485000, serialEnd: 1710000 },
    { year: 1968, serialStart: 1710000, serialEnd: 1945000 },
    { year: 1969, serialStart: 1945000, serialEnd: 2240000 },
    { year: 1970, serialStart: 2240000, serialEnd: 2590000 },
    { year: 1971, serialStart: 2590000, serialEnd: 2890000 },
    { year: 1972, serialStart: 2890000, serialEnd: 3200000 },
    { year: 1973, serialStart: 3200000, serialEnd: 3570000 },
    { year: 1974, serialStart: 3570000, serialEnd: 3865000 },
    { year: 1975, serialStart: 3865000, serialEnd: 4115000 },
    { year: 1976, serialStart: 4115000, serialEnd: 4260000 },
    { year: 1976, serialStart: 5000000, serialEnd: 5085000 },
    { year: 1977, serialStart: 5085000, serialEnd: 5430000 },
    { year: 1978, serialStart: 5430000, serialEnd: 5865000 },
    { year: 1979, serialStart: 5865000, serialEnd: 6205000 },
    { year: 1980, serialStart: 6205000, serialEnd: 6560000 },
    { year: 1981, serialStart: 6560000, serialEnd: 7130000 },
    { year: 1982, serialStart: 7130000, serialEnd: 7600000 },
    { year: 1983, serialStart: 7600000, serialEnd: 8375000 },
    { year: 1984, serialStart: 8375000, serialEnd: 8785000 },
    { year: 1985, serialStart: 8785000, serialEnd: 9155000 },
    { year: 1986, serialStart: 9155000, serialEnd: 9860000 },
    { year: 1987, serialPrefix: 'R' },
  ];

  // IWC Serial Number Data parsed from the provided image (1884-1975 Production Totals)
  // This data is structured with serialStart and serialEnd for each year.
  const iwcSerialData = [
    { year: 1884, serialStart: 1, serialEnd: 6500 }, // "started with serial # 01 in 1884" and 6,501 starts 1885
    { year: 1885, serialStart: 6501, serialEnd: 15499 },
    { year: 1886, serialStart: 15500, serialEnd: 23499 },
    { year: 1887, serialStart: 23500, serialEnd: 29499 },
    { year: 1888, serialStart: 29500, serialEnd: 37499 },
    { year: 1889, serialStart: 37500, serialEnd: 48999 },
    { year: 1890, serialStart: 49000, serialEnd: 62999 },
    { year: 1891, serialStart: 63000, serialEnd: 75499 },
    { year: 1892, serialStart: 75500, serialEnd: 87499 },
    { year: 1893, serialStart: 87500, serialEnd: 102999 },
    { year: 1894, serialStart: 103000, serialEnd: 116999 },
    { year: 1895, serialStart: 117000, serialEnd: 132999 },
    { year: 1896, serialStart: 133000, serialEnd: 151499 },
    { year: 1897, serialStart: 151500, serialEnd: 170499 },
    { year: 1900, serialStart: 212000, serialEnd: 230999 },
    { year: 1901, serialStart: 231000, serialEnd: 253499 },
    { year: 1902, serialStart: 253500, serialEnd: 276499 },
    { year: 1903, serialStart: 276500, serialEnd: 298499 },
    { year: 1904, serialStart: 298500, serialEnd: 320999 },
    { year: 1905, serialStart: 321000, serialEnd: 349499 },
    { year: 1906, serialStart: 349500, serialEnd: 377499 },
    { year: 1907, serialStart: 377500, serialEnd: 405999 },
    { year: 1908, serialStart: 406000, serialEnd: 434999 },
    { year: 1909, serialStart: 435000, serialEnd: 463499 },
    { year: 1910, serialStart: 463500, serialEnd: 491999 },
    { year: 1911, serialStart: 492000, serialEnd: 520999 },
    { year: 1912, serialStart: 521000, serialEnd: 556999 },
    { year: 1913, serialStart: 557000, serialEnd: 593999 },
    { year: 1914, serialStart: 594000, serialEnd: 620499 },
    { year: 1915, serialStart: 620500, serialEnd: 634999 },
    { year: 1916, serialStart: 635000, serialEnd: 656999 },
    { year: 1917, serialStart: 657000, serialEnd: 683999 },
    { year: 1918, serialStart: 684000, serialEnd: 713999 },
    { year: 1919, serialStart: 714000, serialEnd: 741999 },
    { year: 1920, serialStart: 742000, serialEnd: 764999 },
    { year: 1921, serialStart: 765000, serialEnd: 779999 },
    { year: 1922, serialStart: 780000, serialEnd: 783499 },
    { year: 1923, serialStart: 783500, serialEnd: 793499 },
    { year: 1924, serialStart: 793500, serialEnd: 806999 },
    { year: 1925, serialStart: 807000, serialEnd: 824499 },
    { year: 1926, serialStart: 824500, serialEnd: 865999 },
    { year: 1927, serialStart: 866000, serialEnd: 890499 },
    { year: 1928, serialStart: 890500, serialEnd: 919499 },
    { year: 1929, serialStart: 919500, serialEnd: 928999 },
    { year: 1930, serialStart: 929000, serialEnd: 937499 }, // Inferred from gap
    { year: 1931, serialStart: 937500, serialEnd: 937999 },
    { year: 1932, serialStart: 938000, serialEnd: 938999 },
    { year: 1933, serialStart: 939000, serialEnd: 939999 },
    { year: 1934, serialStart: 940000, serialEnd: 944999 },
    { year: 1935, serialStart: 945000, serialEnd: 955499 },
    { year: 1936, serialStart: 955500, serialEnd: 978999 },
    { year: 1937, serialStart: 979000, serialEnd: 999999 }, // Inferred from 1938 starting at 1,000,000
    { year: 1938, serialStart: 1000000, serialEnd: 1012999 },
    { year: 1939, serialStart: 1013000, serialEnd: 1018999 },
    { year: 1940, serialStart: 1019000, serialEnd: 1038999 },
    { year: 1941, serialStart: 1039000, serialEnd: 1061999 },
    { year: 1942, serialStart: 1062000, serialEnd: 1077999 },
    { year: 1943, serialStart: 1078000, serialEnd: 1091999 },
    { year: 1944, serialStart: 1092000, serialEnd: 1105999 },
    { year: 1945, serialStart: 1106000, serialEnd: 1130999 },
    { year: 1946, serialStart: 1131000, serialEnd: 1152999 },
    { year: 1947, serialStart: 1153000, serialEnd: 1176999 },
    { year: 1948, serialStart: 1177000, serialEnd: 1204999 },
    { year: 1949, serialStart: 1205000, serialEnd: 1221999 }, // User's explicit example
    { year: 1950, serialStart: 1222000, serialEnd: 1252999 }, // User's explicit example
    { year: 1951, serialStart: 1253000, serialEnd: 1290999 },
    { year: 1952, serialStart: 1291000, serialEnd: 1315999 },
    { year: 1953, serialStart: 1316000, serialEnd: 1334999 },
    { year: 1954, serialStart: 1335000, serialEnd: 1360999 },
    { year: 1955, serialStart: 1361000, serialEnd: 1398999 },
    { year: 1956, serialStart: 1399000, serialEnd: 1435999 },
    { year: 1957, serialStart: 1436000, serialEnd: 1459999 },
    { year: 1958, serialStart: 1460000, serialEnd: 1512999 },
    { year: 1959, serialStart: 1513000, serialEnd: 1552999 },
    { year: 1960, serialStart: 1553000, serialEnd: 1611999 },
    { year: 1961, serialStart: 1612000, serialEnd: 1665999 },
    { year: 1962, serialStart: 1666000, serialEnd: 1732999 },
    { year: 1963, serialStart: 1733000, serialEnd: 1777999 },
    { year: 1964, serialStart: 1778000, serialEnd: 1795999 },
    { year: 1965, serialStart: 1796000, serialEnd: 1819999 },
    { year: 1966, serialStart: 1820000, serialEnd: 1888999 },
    { year: 1967, serialStart: 1889000, serialEnd: 1904999 },
    { year: 1968, serialStart: 1905000, serialEnd: 1969999 },
    { year: 1969, serialStart: 1970000, serialEnd: 2025999 },
    { year: 1970, serialStart: 2026000, serialEnd: 2112999 },
    { year: 1971, serialStart: 2113000, serialEnd: 2217999 },
    { year: 1972, serialStart: 2218000, serialEnd: 2229999 },
    { year: 1973, serialStart: 2230000, serialEnd: 2264999 },
    { year: 1974, serialStart: 2265000, serialEnd: 2274999 },
    { year: 1975, serialStart: 2275000, serialEnd: 2500000 }, // Assuming an end for the last year
  ];

  // Longines Serial Number Data parsed from the provided image (1867-1969 Production Totals)
  const longinesSerialData = [
    { year: 1867, serialStart: 1, serialEnd: 19999 },
    { year: 1870, serialStart: 20000, serialEnd: 99999 },
    { year: 1875, serialStart: 100000, serialEnd: 249999 },
    { year: 1882, serialStart: 250000, serialEnd: 499999 },
    { year: 1888, serialStart: 500000, serialEnd: 749999 },
    { year: 1893, serialStart: 750000, serialEnd: 999999 },
    { year: 1899, serialStart: 1000000, serialEnd: 1249999 },
    { year: 1901, serialStart: 1250000, serialEnd: 1499999 },
    { year: 1904, serialStart: 1500000, serialEnd: 1749999 },
    { year: 1905, serialStart: 1750000, serialEnd: 1999999 },
    { year: 1907, serialStart: 2000000, serialEnd: 2249999 },
    { year: 1909, serialStart: 2250000, serialEnd: 2499999 },
    { year: 1911, serialStart: 2500000, serialEnd: 2749999 },
    { year: 1912, serialStart: 2750000, serialEnd: 2999999 },
    { year: 1913, serialStart: 3000000, serialEnd: 3249999 },
    { year: 1915, serialStart: 3250000, serialEnd: 3499999 },
    { year: 1917, serialStart: 3500000, serialEnd: 3749999 },
    { year: 1919, serialStart: 3750000, serialEnd: 3999999 },
    { year: 1922, serialStart: 4000000, serialEnd: 4249999 },
    { year: 1925, serialStart: 4250000, serialEnd: 4499999 },
    { year: 1926, serialStart: 4500000, serialEnd: 4749999 },
    { year: 1928, serialStart: 4750000, serialEnd: 4999999 },
    { year: 1929, serialStart: 5000000, serialEnd: 5249999 },
    { year: 1934, serialStart: 5250000, serialEnd: 5499999 },
    { year: 1937, serialStart: 5500000, serialEnd: 5749999 },
    { year: 1938, serialStart: 5750000, serialEnd: 5999999 },
    { year: 1940, serialStart: 6000000, serialEnd: 6999999 },
    { year: 1945, serialStart: 7000000, serialEnd: 7999999 },
    { year: 1950, serialStart: 8000000, serialEnd: 8999999 },
    { year: 1953, serialStart: 9000000, serialEnd: 9999999 },
    { year: 1956, serialStart: 10000000, serialEnd: 10999999 },
    { year: 1959, serialStart: 11000000, serialEnd: 11999999 },
    { year: 1962, serialStart: 12000000, serialEnd: 12999999 },
    { year: 1966, serialStart: 13000000, serialEnd: 13999999 },
    { year: 1967, serialStart: 14000000, serialEnd: 14999999 },
    { year: 1969, serialStart: 15000000, serialEnd: 16000000 }, // Assuming an end for the last year
  ];

  // Universal Genève Serial Number Data parsed from the provided image (1930-1967)
  const universalGeneveSerialData = [
    { year: "1930~1935", serialStart: 500000, serialEnd: 599999 },
    { year: "1936~1937", serialStart: 600000, serialEnd: 699999 },
    { year: "1938~1940", serialStart: 700000, serialEnd: 799999 },
    { year: 1941, serialStart: 800000, serialEnd: 899999 },
    { year: 1942, serialStart: 900000, serialEnd: 999999 },
    { year: "1943~1944", serialStart: 1000000, serialEnd: 1099999 },
    { year: 1945, serialStart: 1100000, serialEnd: 1299999 },
    { year: "1946~1948", serialStart: 1300000, serialEnd: 1399999 },
    { year: "1949~1950", serialStart: 1400000, serialEnd: 1499999 },
    { year: 1951, serialStart: 1500000, serialEnd: 1599999 },
    { year: "1952~1955", serialStart: 1600000, serialEnd: 1799999 },
    { year: 1956, serialStart: 1800000, serialEnd: 1899999 },
    { year: "1957~1958", serialStart: 1900000, serialEnd: 1999999 },
    { year: 1959, serialStart: 2000000, serialEnd: 2099999 },
    { year: 1960, serialStart: 2100000, serialEnd: 2199999 },
    { year: 1961, serialStart: 2200000, serialEnd: 2233999 },
    { year: 1962, serialStart: 2234000, serialEnd: 2299999 },
    { year: "1963~1964", serialStart: 2300000, serialEnd: 2399999 },
    { year: 1965, serialStart: 2400000, serialEnd: 2487072 },
    { year: 1966, serialStart: 2487073, serialEnd: 2574941 },
    { year: 1967, serialStart: 2574942, serialEnd: 99999999 }, // Last entry, extending to a large number
  ];


  const lookupYear = (brand) => {
    setProductionYear('');
    setLookupError('');
    const cleanedSerial = serialNumber.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(); // Remove non-alphanumeric, convert to uppercase

    if (!cleanedSerial) {
      setLookupError('유효한 시리얼 번호를 입력해주세요.');
      return;
    }

    let dataToUse = [];
    let minYear = '';
    let maxYear = '';

    if (brand === 'Omega') {
      dataToUse = omegaSerialData;
      minYear = 1895;
      maxYear = 1989;
      const sn = parseInt(cleanedSerial, 10);
      if (isNaN(sn)) {
        setLookupError('오메가는 숫자 시리얼 번호만 지원합니다.');
        return;
      }
      // Find the closest year whose serial number is less than or equal to the input
      let found = false;
      for (let i = dataToUse.length - 1; i >= 0; i--) {
        if (sn >= dataToUse[i].serial) {
          setProductionYear(`${dataToUse[i].year}년`);
          found = true;
          break;
        }
      }
      if (!found) {
        setLookupError(`해당 시리얼 번호에 대한 생산년도를 찾을 수 없습니다. (${minYear}년 이전 또는 ${maxYear}년 이후)`);
      }

    } else if (brand === 'Rolex') {
      dataToUse = rolexSerialData;
      minYear = 1954; // Updated min year
      maxYear = 1987;

      const firstChar = cleanedSerial.charAt(0);
      const isAlpha = /[A-Z]/.test(firstChar);

      let found = false;

      if (isAlpha) {
        // For alphanumeric serials (like 'R000001'), check the prefix
        const entry = dataToUse.find(item => item.serialPrefix === firstChar);
        if (entry) {
          setProductionYear(`${entry.year}년`);
          found = true;
        }
      } else {
        // For numeric serials, parse the number and find the range
        const sn = parseInt(cleanedSerial, 10);
        if (isNaN(sn)) {
          setLookupError('유효한 시리얼 번호를 입력해주세요.');
          return;
        }
        // Iterate backwards to prioritize later years in case of overlapping ranges
        for (let i = dataToUse.length - 1; i >= 0; i--) {
          const item = dataToUse[i];
          if (item.serialStart !== undefined && item.serialEnd !== undefined) {
            if (sn >= item.serialStart && sn <= item.serialEnd) {
              setProductionYear(`${item.year}년`);
              found = true;
              break;
            }
          }
        }
      }

      if (!found) {
        setLookupError(`해당 시리얼 번호에 대한 생산년도를 찾을 수 없습니다. (${minYear}년 이전 또는 ${maxYear}년 이후)`);
      }

    } else if (brand === 'IWC') {
      dataToUse = iwcSerialData;
      minYear = 1884;
      maxYear = 1975;
      const sn = parseInt(cleanedSerial, 10);
      if (isNaN(sn)) {
        setLookupError('IWC는 숫자 시리얼 번호만 지원합니다.');
        return;
      }

      let found = false;
      // Iterate through the data to find the year whose serial range contains the input serial
      for (let i = 0; i < dataToUse.length; i++) {
        const item = dataToUse[i];
        if (sn >= item.serialStart && sn <= item.serialEnd) {
          setProductionYear(`${item.year}년`);
          found = true;
          break;
        }
      }

      if (!found) {
        setLookupError(`해당 시리얼 번호에 대한 생산년도를 찾을 수 없습니다. (${minYear}년 이전 또는 ${maxYear}년 이후)`);
      }
    } else if (brand === 'Longines') {
      dataToUse = longinesSerialData;
      minYear = 1867;
      maxYear = 1969;
      const sn = parseInt(cleanedSerial, 10);
      if (isNaN(sn)) {
        setLookupError('Longines는 숫자 시리얼 번호만 지원합니다.');
        return;
      }

      let found = false;
      // Iterate through the data to find the year whose serial range contains the input serial
      for (let i = 0; i < dataToUse.length; i++) {
        const item = dataToUse[i];
        if (sn >= item.serialStart && sn <= item.serialEnd) {
          setProductionYear(`${item.year}년`);
          found = true;
          break;
        }
      }

      if (!found) {
        setLookupError(`해당 시리얼 번호에 대한 생산년도를 찾을 수 없습니다. (${minYear}년 이전 또는 ${maxYear}년 이후)`);
      }
    } else if (brand === 'UniversalGenève') { // Changed from 'Universal Genève' to 'UniversalGenève'
      dataToUse = universalGeneveSerialData;
      minYear = 1930;
      maxYear = 1967;
      const sn = parseInt(cleanedSerial, 10);
      if (isNaN(sn)) {
        setLookupError('Universal Genève는 숫자 시리얼 번호만 지원합니다.');
        return;
      }

      let found = false;
      // Iterate through the data to find the year whose serial range contains the input serial
      for (let i = 0; i < dataToUse.length; i++) {
        const item = dataToUse[i];
        if (sn >= item.serialStart && sn <= item.serialEnd) {
          setProductionYear(`${item.year}년`);
          found = true;
          break;
        }
      }

      if (!found) {
        setLookupError(`해당 시리얼 번호에 대한 생산년도를 찾을 수 없습니다. (${minYear}년 이전 또는 ${maxYear}년 이후)`);
      }
    }
    else {
      setLookupError('선택된 브랜드에 대한 시리얼 조회 기능이 없습니다.');
    }
  };

  // Define guide content for each brand
  const brandGuides = {
    Rolex: {
      title: 'Rolex 시리얼넘버 조회 가이드',
      description: (
        <>
          <h4 className="text-xl font-semibold mb-2">시리얼 번호는 어디에 있나요?</h4>
          <p className="mb-2">Rolex 시계의 시리얼 번호는 주로 케이스백 내부 또는 무브먼트에 각인되어 있습니다.</p>
          <p className="mb-4">정확한 위치는 모델과 생산 시기에 따라 다를 수 있습니다.</p>
          <h4 className="text-xl font-semibold mb-2">몇년도 까지 조회할 수 있나요?</h4>
          <p>확보 가능한 자료를 토대로 만들었기 때문에 제한된 범위만 조회할 수 있습니다.<br />
          롤렉스의 시리얼 번호는 1954년부터 1987년까지의 생산년도만 지원합니다.<br />
          이외의 연도는 조회 대상에서 제외됩니다.</p>
        </>
      ),
      imageUrl: 'uploaded:롤렉스.jpg-c1a39cc5-d1a9-413a-859d-2ea8d3df97e9', // Use the uploaded Rolex image
    },
    IWC: {
      title: 'IWC 시리얼넘버 조회 가이드',
      description: (
        <>
          <h4 className="text-xl font-semibold mb-2">시리얼 번호는 어디에 있나요?</h4>
          <p className="mb-2">IWC 시계의 시리얼 번호는 주로 케이스백 내부 또는 무브먼트에 각인되어 있습니다.</p>
          <p className="mb-4">정확한 위치는 모델과 생산 시기에 따라 다를 수 있습니다.</p>
          <h4 className="text-xl font-semibold mb-2">몇년도 까지 조회할 수 있나요?</h4>
          <p>확보 가능한 자료를 토대로 만들었기 때문에 제한된 범위만 조회할 수 있습니다.<br />
          IWC의 시리얼 번호는 1884년부터 1975년까지의 생산년도만 지원합니다.<br />
          이외의 연도는 조회 대상에서 제외됩니다.</p>
        </>
      ),
      imageUrl: 'uploaded:iwcserials.webp-9d3fa6bb-ff57-467f-b71c-c50399f58697', // Use the uploaded IWC image
    },
    Omega: {
      title: 'Omega 시리얼넘버 조회 가이드',
      description: (
        <>
          <h4 className="text-xl font-semibold mb-2">시리얼 번호는 어디에 있나요?</h4>
          <p className="mb-2">오메가 최신 모델은 케이스 뒷면에 작게 각인되어 있습니다.</p>
          <p className="mb-4">오메가 빈티지 모델은 무브먼트에 각인되어 있는 긴 자리의 숫자입니다.</p>
          <h4 className="text-xl font-semibold mb-2">몇년도 까지 조회할 수 있나요?</h4>
          <p>확보 가능한 자료를 토대로 만들었기 때문에 제한된 범위만 조회할 수 있습니다.<br />
          오메가의 1,000,000번대 부터 51,000,000번대 까지의 번호만 지원합니다.<br />
          이는 1895~1989년도 생산된 오메가 시계의 생산년도에 해당합니다.<br />
          스피드 마스터는 조회 대상에서 제외됩니다.</p>
        </>
      ),
      imageUrl: 'uploaded:오메가ETA.jpg-c96711d6-b8a3-4ab2-9918-27852c52082f', // Actual Omega image
    },
    Longines: {
      title: 'Longines 시리얼넘버 조회 가이드',
      description: (
        <>
          <h4 className="text-xl font-semibold mb-2">시리얼 번호는 어디에 있나요?</h4>
          <p className="mb-2">Longines 시계의 시리얼 번호는 주로 무브먼트에 각인되어 있습니다.</p>
          <p className="mb-4">정확한 위치는 모델과 생산 시기에 따라 다를 수 있습니다.</p>
          <h4 className="text-xl font-semibold mb-2">몇년도 까지 조회할 수 있나요?</h4>
          <p>확보 가능한 자료를 토대로 만들었기 때문에 제한된 범위만 조회할 수 있습니다.<br />
          Longines의 시리얼 번호는 1867년부터 1969년까지의 생산년도만 지원합니다.<br />
          이외의 연도는 조회 대상에서 제외됩니다.</p>
        </>
      ),
      imageUrl: 'uploaded:론진.jpg-ee330881-22b0-4259-ba88-0014b44d9cde', // Use the uploaded Longines image
    },
    UniversalGenève: {
      title: 'Universal Genève 시리얼넘버 조회 가이드',
      description: (
        <>
          <h4 className="text-xl font-semibold mb-2">시리얼 번호는 어디에 있나요?</h4>
          <p className="mb-2">Universal Genève 시계의 시리얼 번호는 주로 케이스백 내부 또는 무브먼트에 각인되어 있습니다.</p>
          <p className="mb-4">정확한 위치는 모델과 생산 시기에 따라 다를 수 있습니다.</p>
          <h4 className="text-xl font-semibold mb-2">몇년도 까지 조회할 수 있나요?</h4>
          <p>확보 가능한 자료를 토대로 만들었기 때문에 제한된 범위만 조회할 수 있습니다.<br />
          Universal Genève의 시리얼 번호는 1930년부터 1967년까지의 생산년도만 지원합니다.<br />
          이외의 연도는 조회 대상에서 제외됩니다.</p>
        </>
      ),
      imageUrl: 'uploaded:universalgeneveserials1.jpg-46923d5f-b3ac-438f-8eb4-d4697ca1c616', // Use the uploaded Universal Genève image
    },
  };

  const currentBrandGuide = brandGuides[selectedBrand];

  return (
    <main className="container mx-auto mt-8 px-6 md:px-12 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Year Finder</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">빈티지 시계의 생산년도 찾기</h2>
        <p className="text-gray-600 mb-6">
          내 빈티지 시계의 시리얼넘버로 생산년도를 확인할 수 있어요.
        </p>

        {/* Brand Selection Dropdown */}
        <div className="mb-6">
          <label htmlFor="yearFinderBrandSelect" className="block text-gray-700 text-sm font-bold mb-2">
            브랜드 선택:
          </label>
          <select
            id="yearFinderBrandSelect"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              setSerialNumber(''); // Clear serial number on brand change
              setProductionYear(''); // Clear production year on brand change
              setLookupError(''); // Clear error on brand change
            }}
          >
            <option value="">-- 브랜드 선택 --</option>
            <option value="Rolex">Rolex</option>
            <option value="IWC">IWC</option>
            <option value="Omega">Omega</option>
            <option value="Longines">Longines</option>
            <option value="UniversalGenève">Universal Genève</option> {/* Changed value to UniversalGenève */}
          </select>
        </div>

        {/* Serial Number Input and Lookup Section - Only for Omega, Rolex, IWC, Longines, and Universal Genève */}
        {(selectedBrand === 'Omega' || selectedBrand === 'Rolex' || selectedBrand === 'IWC' || selectedBrand === 'Longines' || selectedBrand === 'UniversalGenève') && ( // Changed condition
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{selectedBrand} 시리얼 번호 조회</h3>
            <div className="mb-4">
              <label htmlFor="serialNumberInput" className="block text-gray-700 text-sm font-bold mb-2">
                시리얼 번호 입력:
              </label>
              <input
                type="text"
                id="serialNumberInput"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={selectedBrand === 'Rolex' ? '예: 1234567 또는 R000001' : '예: 1234567'}
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
              />
            </div>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out w-full"
              onClick={() => lookupYear(selectedBrand)}
            >
              생산년도 조회
            </button>
            {productionYear && (
              <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-md">
                <p className="font-bold text-lg">
                  생산년도: {productionYear}
                </p>
              </div>
            )}
            {lookupError && (
              <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-800 rounded-md">
                <p className="text-sm italic">
                  {lookupError}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Serial Number Lookup Guide Section - Conditionally rendered */}
        {currentBrandGuide && (
          <div
            className="mt-8 p-6 rounded-lg shadow-md relative overflow-hidden"
            style={{
              backgroundImage: `url(${currentBrandGuide.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Black overlay with 30% opacity */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
            {/* Content on top of the overlay */}
            <div className="relative text-white z-10">
              {/* Render description directly if it's JSX, otherwise render title and description */}
              {typeof currentBrandGuide.description === 'object' ? (
                currentBrandGuide.description
              ) : (
                <>
                  <h3 className="text-2xl font-semibold mb-4">
                    {currentBrandGuide.title}
                  </h3>
                  <p className="text-lg">
                    {currentBrandGuide.description}
                  </p>
                </>
              )}
            </div>
          </div>
        )}

      </div>
      {/* Grayscale image at the bottom of the Year Finder page */}
      <div className="flex justify-center mt-8">
        <img
          src="uploaded:화면 캡처 2025-07-13 161311.jpg-6c275cca-795d-4ea7-a85e-f1bc5dae9467"
          alt="시리얼 넘버 위치 예시"
          className="max-w-full h-auto rounded-lg shadow-sm filter grayscale"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/E0E0E0/333333?text=이미지+없음"; }}
        />
      </div>
    </main>
  );
}


// FitFinderPage Component (unchanged from previous version)
function FitFinderPage() {
  const [watchType, setWatchType] = useState('dress-watch'); // New state for watch type
  const [wristInput, setWristInput] = useState('');
  // Removed selectedBrand state and its usage from FitFinderPage
  // inputType state is now fixed to 'cross-section' as per user request
  const inputType = 'cross-section';
  const [recommendedCaseSize, setRecommendedCaseSize] = useState('N/A');
  const [maxLugToLug, setMaxLugToLug] = useState('N/A');
  const [errorMessage, setErrorMessage] = useState('');

  // Data from the provided image (keeping this for calculation logic)
  // Expanded sizeChart to include crossSection from 45mm to 49mm
  const sizeChart = [
    { crossSection: 45, caseSizes: ['32mm', '33mm'], maxLugToLug: '40.5mm', circumference: '13-14cm (5.0-5.5")' },
    { crossSection: 46, caseSizes: ['33mm', '34mm'], maxLugToLug: '41.4mm', circumference: '13-14cm (5.0-5.5")' },
    { crossSection: 47, caseSizes: ['33mm', '34mm'], maxLugToLug: '42.3mm', circumference: '14-15cm (6.0-6.25")' },
    { crossSection: 48, caseSizes: ['34mm', '35mm'], maxLugToLug: '43.2mm', circumference: '14-15cm (6.0-6.25")' },
    { crossSection: 49, caseSizes: ['34mm', '35mm'], maxLugToLug: '44.1mm', circumference: '14-15cm (6.0-6.25")' },
    { crossSection: 50, caseSizes: ['35mm', '36mm'], maxLugToLug: '45.0mm', circumference: '14-15cm (6.0-6.25")' },
    { crossSection: 51, caseSizes: ['36mm', '37mm'], maxLugToLug: '45.9mm', circumference: '14-15cm (6.0-6.25")' },
    { crossSection: 52, caseSizes: ['36mm', '37mm'], maxLugToLug: '46.8mm', circumference: '15-16cm (6.0-6.25")' },
    { crossSection: 53, caseSizes: ['37mm', '38mm'], maxLugToLug: '47.7mm', circumference: '15-16cm (6.0-6.25")' },
    { crossSection: 54, caseSizes: ['37mm', '38mm'], maxLugToLug: '48.6mm', circumference: '15-16cm (6.0-6.25")' },
    { crossSection: 55, caseSizes: ['38mm', '39mm'], maxLugToLug: '49.5mm', circumference: '16-17cm (6.25-6.75")' },
    { crossSection: 56, caseSizes: ['39mm', '40mm'], maxLugToLug: '50.4mm', circumference: '16-17cm (6.25-6.75")' },
    { crossSection: 57, caseSizes: ['39mm', '40mm'], maxLugToLug: '51.3mm', circumference: '17-18cm (6.75-7.0")' },
    { crossSection: 58, caseSizes: ['40mm', '41mm'], maxLugToLug: '52.2mm', circumference: '17-18cm (6.75-7.0")' },
    { crossSection: 59, caseSizes: ['41mm', '42mm'], maxLugToLug: '53.1mm', circumference: '17-18cm (6.75-7.0")' },
    { crossSection: 60, caseSizes: ['41mm', '42mm'], maxLugToLug: '54.0mm', circumference: '18-19cm (7.0-7.5")' },
    { crossSection: 61, caseSizes: ['42mm', '43mm'], maxLugToLug: '54.9mm', circumference: '18-19cm (7.0-7.5")' },
    { crossSection: 62, caseSizes: ['43mm', '44mm'], maxLugToLug: '55.8mm', circumference: '18-19cm (7.0-7.5")' },
    { crossSection: 63, caseSizes: ['44mm', '45mm'], maxLugToLug: '56.7mm', circumference: '19-20cm (7.5-8.0")' },
    { crossSection: 64, caseSizes: ['44mm', '45mm'], maxLugToLug: '57.6mm', circumference: '19-20cm (7.5-8.0")' },
    { crossSection: 65, caseSizes: ['45mm', '46mm'], maxLugToLug: '58.5mm', circumference: '19-20cm (7.5-8.0")' },
  ];

  const calculateFit = () => {
    setErrorMessage('');
    setRecommendedCaseSize('N/A');
    setMaxLugToLug('N/A');

    const value = parseFloat(wristInput);

    // Validate input value against the new range (40mm to 65mm)
    if (isNaN(value) || value < 40 || value > 65) {
      setErrorMessage('40mm~65mm 사이로 입력해 주세요');
      return;
    }

    let found = false;

    if (watchType === 'dress-watch' && inputType === 'cross-section') {
      // Dress watch specific calculation based on cross-section
      const minCase = (value * 0.6).toFixed(1);
      const maxCase = (value * 0.7).toFixed(1);
      const calculatedLugToLug = (value * 0.85).toFixed(1);

      setRecommendedCaseSize(`${minCase}mm ~ ${maxCase}mm`);
      setMaxLugToLug(`${calculatedLugToLug}mm`);
      found = true;

    } else if (inputType === 'cross-section') {
      // This block now handles 'tool-watch' as 'dress-watch' is handled above
      const data = sizeChart.find(row => row.crossSection === value);
      if (data) {
        // For tool-watch with exact cross-section match
        const maxChartCase = parseFloat(data.caseSizes[1].replace('mm', ''));
        const minRecommendedCase = (maxChartCase - 2).toFixed(1); // -2mm adjustment
        setRecommendedCaseSize(`${minRecommendedCase}mm ~ ${maxChartCase}mm`);
        setMaxLugToLug(data.maxLugToLug);
        found = true;
      } else {
        // For tool-watch with no exact cross-section match (range interpolation)
        // Find the closest data point to interpolate from
        const closestLower = sizeChart.reduce((prev, curr) =>
          (curr.crossSection <= value && (prev === null || curr.crossSection > prev.crossSection)) ? curr : prev, null);
        const closestUpper = sizeChart.reduce((prev, curr) =>
          (curr.crossSection >= value && (prev === null || curr.crossSection < curr.crossSection)) ? curr : prev, null);

        if (closestLower && closestUpper) {
          // If the input value is within the chart's range, interpolate or use closest
          let interpolatedCaseMin, interpolatedCaseMax, interpolatedLugToLug;

          if (closestLower.crossSection === closestUpper.crossSection) {
            // Exact match or only one data point available
            interpolatedCaseMax = parseFloat(closestLower.caseSizes[1].replace('mm', ''));
            interpolatedCaseMin = (interpolatedCaseMax - 2).toFixed(1);
            interpolatedLugToLug = closestLower.maxLugToLug;
          } else {
            // Simple linear interpolation for case size and lug-to-lug
            const ratio = (value - closestLower.crossSection) / (closestUpper.crossSection - closestLower.crossSection);
            if (closestUpper.crossSection - closestLower.crossSection === 0) { // Avoid division by zero
                interpolatedCaseMax = parseFloat(closestLower.caseSizes[1].replace('mm', ''));
                interpolatedCaseMin = (interpolatedCaseMax - 2).toFixed(1);
                interpolatedLugToLug = closestLower.maxLugToLug;
            } else {
                const ratio = (value - closestLower.crossSection) / (closestUpper.crossSection - closestLower.crossSection);

                const lowerCaseMax = parseFloat(closestLower.caseSizes[1].replace('mm', ''));
                const upperCaseMax = parseFloat(closestUpper.caseSizes[1].replace('mm', ''));
                interpolatedCaseMax = (lowerCaseMax + ratio * (upperCaseMax - lowerCaseMax)).toFixed(1);
                interpolatedCaseMin = (interpolatedCaseMax - 2).toFixed(1); // Apply -2mm adjustment

                const lowerLug = parseFloat(closestLower.maxLugToLug.replace('mm', ''));
                const upperLug = parseFloat(closestUpper.maxLugToLug.replace('mm', ''));
                interpolatedLugToLug = (lowerLug + ratio * (upperLug - lowerLug)).toFixed(1) + 'mm';
            }
          }

          setRecommendedCaseSize(`${interpolatedCaseMin}mm ~ ${interpolatedCaseMax}mm`);
          setMaxLugToLug(interpolatedLugToLug);
          found = true;

        } else if (closestLower) { // If value is above max crossSection in chart
          const maxChartCase = parseFloat(closestLower.caseSizes[1].replace('mm', ''));
          const minRecommendedCase = (maxChartCase - 2).toFixed(1);
          setRecommendedCaseSize(`${minRecommendedCase}mm ~ ${maxChartCase}mm (차트 최대값 기준)`);
          setMaxLugToLug(`${closestLower.maxLugToLug} (차트 최대값 기준)`);
          found = true;
        } else if (closestUpper) { // If value is below min crossSection in chart
          const maxChartCase = parseFloat(closestUpper.caseSizes[1].replace('mm', ''));
          const minRecommendedCase = (maxChartCase - 2).toFixed(1);
          setRecommendedCaseSize(`${minRecommendedCase}mm ~ ${maxChartCase}mm (차트 최소값 기준)`);
          setMaxLugToLug(`${closestUpper.maxLugToLug} (차트 최소값 기준)`);
          found = true;
        }
      }
    } else { // circumference - This branch will not be reached with current UI
      const circumferenceInCm = value;

      for (const row of sizeChart) {
        const circumferenceRange = row.circumference.split('cm')[0];
        const [minCm, maxCm] = circumferenceRange.split('-').map(Number);
        if (circumferenceInCm >= minCm && circumferenceInCm <= maxCm) {
          setRecommendedCaseSize(row.caseSizes.join(' or '));
          setMaxLugToLug(row.maxLugToLug);
          found = true;
          break;
        }
      }
    }

    if (!found) {
      setErrorMessage('입력하신 값에 대한 추천 정보를 찾을 수 없습니다. 차트 범위를 확인해주세요.');
    }
  };

  return (
    <main className="container mx-auto mt-8 px-6 md:px-12 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Fit Finder</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">나에게 맞는 시계 사이즈 찾기</h2>
        <p className="text-gray-600 mb-6">
          손목 위에서 시계가 가장 조화로운 비율로 보여지는 케이스 사이즈와 러그 투 러그 길이를 찾아보세요.
        </p>

        {/* Watch Type Selection */}
        <div className="mb-4">
          <label htmlFor="watchType" className="block text-gray-700 text-sm font-bold mb-2">
            시계 종류 선택:
          </label>
          <select
            id="watchType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={watchType}
            onChange={(e) => { setWatchType(e.target.value); setWristInput(''); setErrorMessage(''); }}
          >
            <option value="dress-watch">드레스 워치</option>
            <option value="tool-watch">툴 워치</option>
          </select>
        </div>

        {/* Removed Brand Selection from FitFinderPage */}
        {/* <div className="mb-4">
          <label htmlFor="brandSelect" className="block text-gray-700 text-sm font-bold mb-2">
            브랜드 선택:
          </label>
          <select
            id="brandSelect"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">-- 브랜드 선택 --</option>
            <option value="Rolex">Rolex</option>
            <option value="IWC">IWC</option>
            <option value="Omega">Omega</option>
            <option value="Longines">Longines</option>
          </select>
        </div> */}

        {/* Input Field - Now always for Wrist Cross-Section */}
        <div className="mb-6">
          <label htmlFor="wristInput" className="block text-gray-700 text-sm font-bold mb-2">
            손목 단면 (mm) 입력:
          </label>
          <input
            type="number"
            id="wristInput"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="예: 55"
            value={wristInput}
            onChange={(e) => setWristInput(e.target.value)}
          />
          {errorMessage && <p className="text-red-500 text-xs italic mt-2">{errorMessage}</p>}
        </div>

        <button
          className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out w-full"
          onClick={calculateFit}
        >
          추천 사이즈 확인
        </button>

        {recommendedCaseSize !== 'N/A' && (
          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-md">
            <p className="font-bold text-lg mb-2">
              <strong>추천 케이스 사이즈:</strong> {recommendedCaseSize} (용두 제외)
            </p>
            <p><strong>최대 러그 투 러그 길이:</strong> {maxLugToLug}</p>
          </div>
        )}

        {/* "참고해주세요" section */}
        <div className="mt-8 p-4 bg-gray-100 border-l-4 border-gray-300 text-gray-700 rounded-md">
          <p className="font-bold text-lg mb-2">💡 참고해주세요!</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>✋ 손목 단면 너비는 손목 뼈에서 1.0~1.5cm 왼쪽을 측정하세요. (왼손 기준)</li>
            <li>📏 세로로 긴 직사각형, 타원형 시계의 경우 추천 케이스 사이즈는 세로를 기준으로 참고하세요.</li>
            <li>🎲 바둑알 간지를 원하시면 추천 케이스 사이즈의 최소값에 도전해 보세요.</li>
            <li>🙋‍♂️ 손목 너비 5cm인 저는 27~32mm 빈티지를 즐겨 차며, 최대 사이즈는 34mm로 하고 있습니다.</li>
            <li>🛡️ 파네라이는 방간 맛으로 차는 시계니까 추천 사이즈와 무관하게 호신용으로 좋아보이는걸 선택하세요.</li>
          </ul>
        </div>

        {/* "측정 가이드" section */}
        <div className="mt-8 p-4 bg-gray-100 border-l-4 border-gray-300 text-gray-700 rounded-md">
          <p className="font-bold text-lg mb-2">용어와 측정 가이드</p>
          <ul className="list-none p-0 m-0 text-gray-700 text-sm mb-4">
            <li>1. 손목 단면 너비</li>
            <li>2. 케이스 사이즈</li>
            <li>3. 러그 투 러그 사이즈</li>
          </ul>
          <div className="flex justify-center">
            <img
              src="uploaded:가이드이미2.PNG-fe04d0ff-2cb4-4eb7-8281-e34f0cf7e38b"
              alt="손목 측정 및 시계 사이즈 가이드"
              className="max-w-full h-auto rounded-lg shadow-sm"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/E0E0E0/333333?text=가이드+이미지+없음"; }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;