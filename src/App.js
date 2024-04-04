import React, {useState,useEffect,useRef} from 'react';
import { gsap } from 'gsap';
import Vector from './asset/logo.svg';
import Call from './asset/call.svg';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import eye from './asset/eye.svg';
import info from './asset/info.svg';
import social from './asset/social.svg';
import Case from './asset/case.svg';
import traffic from './asset/traffic.svg';
import brand from './asset/brand.svg';
import luxury from './asset/luxury.png';
import franchise from './asset/franchise.png';
import ecommerce from './asset/ecommerce.png';
import crypto from './asset/crypto.png';
import others from './asset/others.png';
import arrow from './asset/arrow.svg';
import service from './asset/service.svg';
import sales from './asset/sales.svg';
import vectorwhite from './asset/vectorwhite.svg';
import call from './asset/call1.svg';
import location from './asset/location.svg';
import email from './asset/email.svg';
import './App.css';
const data = [
  {
    name: "01",
    image: luxury,
    title: "Luxury Communities",
    description: "Grab your slice of the luxury real estate market with an SEO strategy that ranks you higher than competitors.",
    franchisors: '14',
    leads: '1800+',
    pagenetworks: '3.9k+',
    trafficIncrease: "275%",
  },
  {
    name: "02",
    image: franchise,
    title: "Franchise",
    description: "Optimize your franchise’s online and local SEO presence across all your locations.",
    franchisors: '14',
    leads: '1800+',
    pagenetworks: '3.9k+',
    trafficIncrease: "275%",
  },
  {
    name: "03",
    image: ecommerce,
    title: "Ecommerce",
    description: "Give your eCommerce site an SEO boost and reach more online customers.",
    franchisors: '14',
    leads: '1800+',
    pagenetworks: '3.9k+',
    trafficIncrease: "275%",
  },
  {
    name: "04",
    image: crypto,
    title: "Crypto",
    description: "Promote your crypto project using SEO tactics proven to work in this competitive space.",
    franchisors: '14',
    leads: '1800+',
    pagenetworks: '3.9k+',
    trafficIncrease: "275%",
  },
  {
    name: "05",
    image: others,
    title: "Others",
    description: "Our SEO strategies have been tested and refined across a broad range of industries, including consumer services, SaaS, and various B2B markets.",
    franchisors: '14',
    leads: '1800+',
    pagenetworks: '3.9k+',
    trafficIncrease: "275%",
  }
];

const p1 =[
  {
    name: "QUALITY",
    title: "Qu",
    des: "CONTENT",
    num: '+5',
    bg: '#9ac255',
  },
  {
    name: "RESEARCH",
    title: "Rs",
    des: "CONTENT",
    num: '+4',
    bg: '#9ac255',
  },
  {
    name: "ANSWERS",
    title: "An",
    des: "CONTENT",
    num: '+4',
    bg: '#9ac255',
  },
  {
    name: "DEPTH",
    title: "Dt",
    des: "CONTENT",
    num: '+4',
    bg: '#9ac255',
  },
  {
    name: "KEYWORDS",
    title: "Kw",
    des: "CONTENT",
    num: '+3',
    bg: '#9ac255',
  },
  {
    name: "FRESHNESS",
    title: "Fr",
    des: "CONTENT",
    num: '+3',
    bg: '#9ac255',
  },
  {
    name: "MULTIMEDIA",
    title: "Mm",
    des: "CONTENT",
    num: '+3',
    bg: '#9ac255',
  },
];
const p2 =[
  {
    name: "CRAWL",
    title: "CR",
    des: "ARCHITECTURE",
    num: '+5',
    bg: '#82bf8b',
  },
  {
    name: "MOBILE FIRST",
    title: "Mo",
    des: "ARCHITECTURE",
    num: '+4',
    bg: '#82bf8b',
  },
  {
    name: "STRUCTURE",
    title: "St",
    des: "ARCHITECTURE",
    num: '+4',
    bg: '#82bf8b',
  },
  {
    name: "PARITY",
    title: "Pr",
    des: "ARCHITECTURE",
    num: '+4',
    bg: '#82bf8b',
  },
  {
    name: "URLs",
    title: "Ur",
    des: "ARCHITECTURE",
    num: '+3',
    bg: '#82bf8b',
  },
  {
    name: "DUPLICATE",
    title: "Dd",
    des: "ARCHITECTURE",
    num: '+3',
    bg: '#82bf8b',
  },
  {
    name: "SPEED",
    title: "Sp",
    des: "ARCHITECTURE",
    num: '+3',
    bg: '#82bf8b',
  },
  {
    name: "HTTPS",
    title: "Ps",
    des: "ARCHITECTURE",
    num: '+3',
    bg: '#82bf8b',
  },
]
const p3 =[
  {
    name: "TITLES",
    title: "Tt",
    des: "HTML",
    num: '+5',
    bg: '#5fa9da',
  },
  {
    name: "SCHEMA",
    title: "Sc",
    des: "HTML",
    num: '+4',
    bg: '#5fa9da',
  },
  {
    name: "HEADINGS",
    title: "Hd",
    des: "HTML",
    num: '+4',
    bg: '#5fa9da',
  },
  {
    name: "CONTENT SHIFT",
    title: "CLS",
    des: "HTML",
    num: '+4',
    bg: '#5fa9da',
  },
  {
    name: "IMAGE ALT",
    title: "ALT",
    des: "HTML",
    num: '+3',
    bg: '#5fa9da',
  },
  {
    name: "DESCRIPTIONS",
    title: "Ds",
    des: "HTML",
    num: '+3',
    bg: '#5fa9da',
  }
]
const p4 =[
  {
    name: "EXPERTISE",
    title: "Ex",
    des: "REPUTATION",
    num: '+5',
    bg: '#5fa9da',
  },
  {
    name: "AUTHORITY",
    title: "Au",
    des: "REPUTATION",
    num: '+5',
    bg: '#5fa9da',
  },
  {
    name: "TRUST",
    title: "Tr",
    des: "REPUTATION",
    num: '+4',
    bg: '#5fa9da',
  }
]
const p5 =[
  {
    name: "LINK QUALITY",
    title: "Lq",
    des: "LINKS",
    num: '+5',
    bg: '#bf77d0',
  },
  {
    name: "ANCHORS",
    title: "Ac",
    des: "LINKS",
    num: '+5',
    bg: '#bf77d0',
  },
  {
    name: "QUANTITY",
    title: "Qt",
    des: "LINKS",
    num: '+2',
    bg: '#bf77d0',
  }
]
const p6 =[
  {
    name: "USER EXPERINCE",
    title: "Ux",
    des: "USER",
    num: '+4',
    bg: '#988bbc',
  },
  {
    name: "INTENT",
    title: "It",
    des: "USER",
    num: '+4',
    bg: '#988bbc',
  },
  {
    name: "LOCALITY",
    title: "Ly",
    des: "USER",
    num: '+3',
    bg: '#988bbc',
  },
  {
    name: "COUNTRY",
    title: "Cy",
    des: "USER",
    num: '+2',
    bg: '#988bbc',
  },
  {
    name: "ENGAGEMENT",
    title: "Eg",
    des: "USER",
    num: '+2',
    bg: '#988bbc',
  }
]
const p7 =[
  {
    name: "CLOAKING",
    title: "CI",
    des: "TOXINS",
    num: '-5',
    bg: '#e06339',
  },
  {
    name: "SCHEMES",
    title: "Sc",
    des: "TOXINS",
    num: '-4',
    bg: '#e06339',
  },
  {
    name: "BAD CONTENT",
    title: "Bc",
    des: "TOXINS",
    num: '-4',
    bg: '#e06339',
  },
  {
    name: "MALICIOUS BEHAVIOR",
    title: "Mb",
    des: "TOXINS",
    num: '-4',
    bg: '#e06339',
  },
  {
    name: "STUFFING",
    title: "Sf",
    des: "TOXINS",
    num: '-3',
    bg: '#e06339',
  },
  {
    name: "HIDING",
    title: "Hi",
    des: "TOXINS",
    num: '-3',
    bg: '#e06339',
  },
  {
    name: "PIRACY",
    title: "Ar",
    des: "TOXINS",
    num: '-2',
    bg: '#e06339',
  },
  {
    name: "INTRUSIVENESS",
    title: "Iv",
    des: "TOXINS",
    num: '-2',
    bg: '#e06339',
  }
]
const p8 =[
  {
    name: "GOOGLE MY BUSINESS",
    title: "GMB",
    des: "LOCAL",
    num: '+5',
    bg: '#dfe04e',
  },
  {
    name: "LOCATIONS",
    title: "Lc",
    des: "LOCAL",
    num: '+5',
    bg: '#dfe04e',
  },
  {
    name: "CITATIONS",
    title: "Ci",
    des: "LOCAL",
    num: '+3',
    bg: '#dfe04e',
  },
  {
    name: "NAP",
    title: "NAP",
    des: "LOCAL",
    num: '+3',
    bg: '#dfe04e',
  },
  {
    name: "REVIEWS",
    title: "Rv",
    des: "LOCAL",
    num: '+3',
    bg: '#dfe04e',
  }
]
const p9 =[
  {
    name: "TOP STORIES",
    title: "Ts",
    des: "PUBLISHING",
    num: '+4',
    bg: '#f1b258',
  },
  {
    name: "DISCOVER",
    title: "Dc",
    des: "PUBLISHING",
    num: '+4',
    bg: '#f1b258',
  },
  {
    name: "ARCHIVES",
    title: "Av",
    des: "PUBLISHING",
    num: '+3',
    bg: '#f1b258',
  },
  {
    name: "IMAGE REQUIRED",
    title: "Ir",
    des: "PUBLISHING",
    num: '+3',
    bg: '#f1b258',
  },
  {
    name: "FLEXIBLE SAMPLING",
    title: "Fs",
    des: "PUBLISHING",
    num: '+2',
    bg: '#f1b258',
  }
]
const p10 =[
  {
    name: "PRODUCT DESCRIPTIONS",
    title: "Pd",
    des: "ECOMMERCE",
    num: '+5',
    bg: '#d479a3',
  },
  {
    name: "ARCHITECTURE",
    title: "At",
    des: "ECOMMERCE",
    num: '+4',
    bg: '#d479a3',
  },
  {
    name: "MERCHANT CENTER",
    title: "Mc",
    des: "ECOMMERCE",
    num: '+4',
    bg: '#d479a3',
  },
  {
    name: "STRUCTURED DATA",
    title: "Sd",
    des: "ECOMMERCE",
    num: '+4',
    bg: '#d479a3',
  },
  {
    name: "URLs",
    title: "URL",
    des: "ECOMMERCE",
    num: '+3',
    bg: '#d479a3',
  },
  {
    name: "PAGINATION",
    title: "Pg",
    des: "ECOMMERCE",
    num: '+3',
    bg: '#d479a3',
  }
]
function App() {
  const [value, setValue] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);

  const [hoveredDesc, setHoveredDesc] = useState('');

  const [hoveredIndex, setHoveredIndex] = useState(-1); 
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          width: '30%',
          height: '100%',
          ease: 'power2.inOut',
          zIndex: 1
        });
        setHoveredIndex(index); // Update the hovered index on mouse enter

        cardsRef.current.forEach((otherCard, otherIndex) => {
          if (otherIndex !== index) {
            gsap.to(otherCard, {
              width: '20%',
              ease: 'power2.inOut'
            });
          }
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          width: '20%',
          height: '100%',
          ease: 'power2.inOut',
          zIndex: 0
        });
        setHoveredIndex(-1); // Reset the hovered index on mouse leave

        cardsRef.current.forEach((otherCard) => {
          gsap.to(otherCard, {
            width: '20%',
            ease: 'power2.inOut'
          });
        });
      });
    });
  }, [data]);
  return (
    <div>
      <header>
        <div className='flex justify-center bg-[#181e4e]'>
        <div className='flex w-[90%] xl:w-[80%] 2xl:w-[65%] py-2 bg-[#181e4e] justify-between'>
          <div>
          <img src={Vector} alt="Logo" width={146} className=''/>
          </div>
          <div className='flex items-center'>
            <div className='md:flex max-md:hidden md:block cursor-pointer'>
            <img src={Call} alt="Callicon" width={13} className='mr-3'/>
            <p className='text-white font-[Roboto] text-base font-medium'>800-569-2754</p>
            </div>
            <div className='sm:flex max-sm:hidden sm:block items-center ml-4 cursor-pointer'>
              <p className='uppercase text-sm text-[#FFC145] font-semibold px-3 md:px-4 lg:px-6 py-2 border border-[#FFC145]'>request a free quote</p>
            </div>
          </div>
        </div>
        </div>
      </header>
      <div className='flex justify-center max-[1000px]:hidden block'>
        <div className='flex w-[90%] xl:w-[80%] 2xl:w-[65%] justify-between'>
          <p className='text-sm font-[Montserrat] uppercase py-4 font-semibold cursor-pointer'>seo</p>
          <p className='text-sm font-[Montserrat] uppercase py-4 font-semibold cursor-pointer'>ppc</p>
          <p className='text-sm font-[Montserrat] uppercase py-4 font-semibold cursor-pointer'>REPUTATION MANAGEMENT</p>
          <p className='text-sm font-[Montserrat] uppercase py-4 font-semibold cursor-pointer'>SOCIAL MEDIA</p>
          <p className='text-sm font-[Montserrat] uppercase py-4 font-semibold cursor-pointer'>WEB DEVELOPMENT</p>
          <p className='text-sm font-[Montserrat] uppercase py-4 font-semibold cursor-pointer'>MARKETING AUTOMATION</p>
          <p className='text-sm font-[Montserrat] uppercase py-4 font-semibold cursor-pointer'>INDUSTRIES</p>
          <p className='text-sm font-[Montserrat] uppercase py-4 font-semibold cursor-pointer'>ABOUT DMA</p>
        </div>
      </div>
      <div className='flex justify-center bg-[#181e4e]'>
        <div className='flex max-[1069px]:flex-col max-[1069px]:justify-center w-[90%] xl:w-[80%] 2xl:w-[65%] justify-between'>
          <div className='max-[1069px]:w-full max-[1069px]:text-center w-[45%]'>
            <p className='text-6xl max-sm:text-4xl font-[Lato] text-[#F1B257] font-black mt-32'>#1 Ranked</p>
            <p className='text-6xl max-sm:text-4xl font-[Lato] text-white font-normal mt-6'>CONTENT </p>
            <p className='text-6xl max-sm:text-4xl font-[Lato] text-white font-normal'>MARKETING </p>
            <p className='text-6xl max-sm:text-4xl font-[Lato] text-white font-normal'>AGENCY</p>
            <p className='text-lg text-white font-normal mt-5 mb-24'>Fuel your SEO strategy with a lead-driven conversion-centric content strategy.</p>
          </div>
          <div className='lg:w-[35%] lg:mt-16 py-4 px-7 bg-white max-[1069px]:mx-auto'>
            <p className='font-[Lato] text-3xl text-[#181E4E] font-black uppercase leading-[42px]'>Request a quote</p>
            <p className='font-[Lato] text-base text-[#181E4E] font-normal uppercase leading-[38px] tracking-[2px]'>Its Fast, Easy & Free</p>
            <input className='w-full border-b-2 border-black h-[55px] px-1 placeholder-[#4B587C]' placeholder='Name' type='text'/>
            <input className='w-full border-b-2 border-black h-[55px] px-1 placeholder-[#4B587C]' placeholder='Website'/>
            <input className='w-full border-b-2 border-black h-[55px] px-1 placeholder-[#4B587C]' placeholder='Email' type='email'/>
            <PhoneInput
             country="US"
             placeholder="+1"
             value={value}
             onChange={setValue}/>
            <input className='w-full text-base border-b-2 border-black h-[33px] mt-4 bg-[#EFEFEF] px-1 placeholder-[#4B587C]' placeholder='Budget'/>
            <input className='w-full text-base border-b-2 border-black h-[33px] mt-4 bg-[#EFEFEF] px-1 placeholder-[#4B587C]' placeholder='Best Start Date'/>
            <div className='w-full'>
              <p className='py-3 uppercase text-center text-base bg-[#FFC145] mt-6 cursor-pointer'>GET an Estimate</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-[#f9f9ff]'>
        <div className='flex flex-col w-[90%] xl:w-[80%] 2xl:w-[65%] py-4'>
          <p className='text-xl max-[1069px]:mx-auto text-[#181E4E] font-bold'>CONTENT MARKETING THAT GETS LEADS AND SALES</p>
          <div className='flex max-[1069px]:grid max-[1069px]:grid-cols-2 max-[700px]:grid-cols-1 max-[1069px]:gap-2 max-[1069px]:mx-auto py-3 justify-between'>
            <div className='w-[300px] flex border justify-around bg-white cursor-pointer'>
              <img src={eye} alt="Callicon" width={50} className='mx-3'/>
              <div className='py-3 pr-9'>
                <p className='font-[Lato] text-xl text-[#181E4E] font-bold'>Blogs</p>
                <p className='text-xs text-[#181E4E] font-normal'>Build a blog that automatically generates traffic for your website 24/7/365.</p>
              </div>
            </div>
            <div className='w-[300px] flex border justify-around bg-white cursor-pointer'>
              <img src={info} alt="Callicon" width={50} className='mx-3'/>
              <div className='py-3 pr-9'>
                <p className='font-[Lato] text-xl text-[#181E4E] font-bold'>Infographics</p>
                <p className='text-xs text-[#181E4E] font-normal'>Grow your brand awareness with insightful and visually stunning infographics that dazzle the web.</p>
              </div>
            </div>
            <div className='w-[300px] flex border justify-around bg-white cursor-pointer'>
              <img src={social} alt="Callicon" width={50} className='mx-3'/>
              <div className='py-3 pr-9'>
                <p className='font-[Lato] text-xl text-[#181E4E] font-bold'>Social Media</p>
                <p className='text-xs text-[#181E4E] font-normal'>Fuse your content and social media strategies together to boost your organic visibility online.</p>
              </div>
            </div>
            <div className='w-[300px] flex border justify-around bg-white cursor-pointer'>
              <img src={Case} alt="Callicon" width={50} className='mx-3'/>
              <div className='py-3 pr-9'>
                <p className='font-[Lato] text-xl text-[#181E4E] font-bold'>Case Studies</p>
                <p className='text-xs text-[#181E4E] font-normal'>Create compelling case studies that showcase your business’ unique capabilities and advantages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex bg-image w-screen justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] py-24'>
          <div className='px-8 border-l-2 border-white md:w-[60%] max-[1069px]:mx-auto'>
            <p className='font-[Lato] text-5xl text-white font-extrabold uppercase'>Let Us Fuel Your Brand</p>
            <p className='font-[Lato] text-2xl text-white font-bold py-6'>Use content marketing to improve lead volume.</p>
            <p className='text-lg text-white font-normal pb-6'>More and more businesses are seeing the value that content marketing brings to the table. Content marketing provides businesses with a way to use their unique insight to bring in prospective buyers. Our content marketing experts understand not only the value of content marketing, but intricate ways to tailor content marketing to drive the highest-quality leads possible. Let our content marketing experts create a comprehensive content marketing strategy to create compelling content and use it to increase your conversions.</p>
            <button className='text-base text-black bg-[#FFC145] font-bold px-6 py-3 uppercase'>Request a Quote</button>
          </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex max-[1069px]:flex-col justify-between max-[1069px]:justify-center max-[1069px]:place-items-center'>
          <div className='md:w-[55%] py-24 xl:py-36 2xl:py-48'>
            <p className='font-[Lato] text-5xl text-[#1B1D28] font-extrabold uppercase'>MULTIPLY YOUR TRAFFIC</p>
            <p className='font-[Lato] text-2xl text-[#374151] font-bold py-6'>WE WILL BUILD YOUR PREMIUM CONTENT.</p>
            <p className='text-lg text-black font-normal pb-12'>One of the biggest benefits of a content marketing campaign is the relevance of the audience it attracts. By researching your target audience, our experts develop content that will be of direct interest to them, then promote it to drastically increase relevant traffic.</p>
            <button className='text-base text-black bg-[#FFC145] font-bold px-6 py-3 uppercase'>learn more</button>
          </div>
          <img src={traffic} alt="Multiply your traffic" className='md:w-[40%]'/>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex max-[1069px]:flex-col justify-between max-[1069px]:place-items-center'>
          <div className='md:w-[55%] py-24 xl:py-36 2xl:py-48'>
            <p className='font-[Lato] text-5xl text-[#1B1D28] font-extrabold uppercase'>High-Quality Content for Your Brand.</p>
            <p className='font-[Lato] text-2xl text-[#374151] font-bold py-6'>Our content marketing services drive new customers.</p>
            <p className='text-lg text-black font-normal pb-12'>One of the biggest benefits of having quality content is that it establishes your brand's credibility. If your content is compelling and engaging, a reader is going to be more willing to trust you. We write articles that are well-researched and provide the reader with all the information they need to trust the conclusions being made. This in turn means that the leads you'll get from your content marketing strategy will have a much higher conversion rate due to the level of trust we achieve for your brand.</p>
            <button className='text-base text-black bg-[#FFC145] font-bold px-6 py-3 uppercase'>Get more information</button>
          </div>
          <img src={brand} alt="Multiply your traffic" className='md:w-[40%] py-24'/>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] pt-10 flex flex-col justify-center'>
          <div className='w-[68%] flex flex-col text-center self-center'>
            <p className='text-sm text-[#0066BA] font-bold tracking-[1.5px] uppercase'>industries</p>
            <p className='font-[Lato] text-3xl text-[#0D0D0D] font-black pt-3 pb-10 tracking-[2px]'>Find out how you can leverage content to become a subject matter expert in your niche.</p>
          </div>
          <div className='flex max-[1069px]:hidden block'>
          {data.map((card, index) => (
        <div
          key={index}
          ref={el => cardsRef.current[index] = el}
          className='card w-1/5 h-full bg-gradient-to-b from-black via-gray-900 to-white border-l-[1px]'
        >
          <div className='px-8 h-[20%] content'>
            <p className='name text-base font-[Roboto] text-white font-normal mt-[72px]'>{card.name}</p>
            <p className='title text-2xl leading-[36px] text-white font-bold'>{card.title}</p>
          </div>
          <div className='h-[]'>
            <div className='container'>
              <img src={card.image} alt="luxury communities" className='opacity-45'/>
              {hoveredIndex === index && <div className="centered max-[1069px]:hidden block">{card.description}</div>} {/* Render description only for the hovered card */}
            </div>
            <div className='arrow py-[72px] px-8'>
              <img src={arrow} alt="arrow" className='opacity-25'/>
            </div>
          </div>
        </div>
      ))}
          </div>
          <div className='flex flex-col max-[1069px]:block hidden'>
          {data.map((card, index) => (
        <div
          key={index}
          className='md:w-[90%] h-[100px] my-1 flex bg-gradient-to-r from-black via-gray-900 to-white border-l-[1px]'
        >
          <div className='px-8 w-1/4'>
            <p className='text-base font-[Roboto] text-white font-normal'>{card.name}</p>
            <p className='text-2xl leading-[36px] text-white font-bold'>{card.title}</p>
          </div>
            <div className='w-2/4'>
              <img src={card.image} alt="luxury communities" className='h-[100px] w-full object-cover opacity-45'/>
            </div>
            <div className='arrow py-[72px] px-8 w-1/4'>
              <img src={arrow} alt="arrow" className='opacity-25'/>
            </div>
        </div>
      ))}
          </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-full xl:w-[80%] 2xl:w-[65%] pt-12 flex flex-col justify-center'>
          <div className='flex flex-col text-center self-center'>
            <p className='font-[Roboto] text-5xl text-[#0D0D0D] font-extrabold'>Our Methodology</p>
            <p className='font-[Roboto] text-2xl text-[#414A58] font-bold py-4'>Our experts pore over every on-page element.</p>
            <p className='font-[Roboto] w-[95%] self-center text-xl leading-[36px] text-[#414A58] font-normal'>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy text Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy text Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text</p>
            <div className='pt-6'>
            <button className='text-base text-black bg-[#FFC145] font-bold px-6 py-3 uppercase'>Request an On page SEO Audit</button>
            </div>
          </div>
          <div>
          <div className='flex items-end pt-16 pb-6 max-[1069px]:hidden block'>
            <div className='w-1/10 p-2 flex flex-col gap-2'>
            {p1.map((panel) => (
                <div className="border rounded-lg border-black overflow-hidden relative"
                onMouseEnter={() => {setIsHovered(true);setHoveredDesc(p1)}}
                onMouseLeave={() => setIsHovered(false)}>
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 ${isHovered ? `bg-[#9ac255]`:'bg-[#898989]'}`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 ${isHovered ? `bg-[#9ac255]`:'bg-[#898989]'}`}></p>
                  </div>
                </div>
            ))}
            </div>
            <div className='w-1/10 p-2 flex flex-col gap-2'>
            {p2.map((panel) => (
                <div className="border rounded-lg border-black overflow-hidden relative"
                onMouseEnter={() => {setIsHovered1(true);setHoveredDesc(p2)}}
                onMouseLeave={() => setIsHovered1(false)}>
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 ${isHovered1 ? `bg-[#82bf8b]`:'bg-[#898989]'}`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 ${isHovered1 ? `bg-[#82bf8b]`:'bg-[#898989]'}`}></p>
                  </div>
                </div>
            ))}
            </div>
            <div className='w-1/10 p-2 flex flex-col gap-2'>
            {p3.map((panel) => (
                <div className="border rounded-lg border-black overflow-hidden relative"
                onMouseEnter={() => {setIsHovered2(true);setHoveredDesc(p3)}}
                onMouseLeave={() => setIsHovered2(false)}>
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 ${isHovered2 ? `bg-[#5fa9da]`:'bg-[#898989]'}`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 ${isHovered2 ? `bg-[#5fa9da]`:'bg-[#898989]'}`}></p>
                  </div>
                </div>
            ))}
            </div>
            <div className='w-1/10 p-2 flex flex-col gap-2'>
            {p4.map((panel) => (
                <div className="border rounded-lg border-black overflow-hidden relative"
                onMouseEnter={() => {setIsHovered3(true);setHoveredDesc(p4)}}
                onMouseLeave={() => setIsHovered3(false)}>
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 ${isHovered3 ? `bg-[#5fa9da]`:'bg-[#898989]'}`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 ${isHovered3 ? `bg-[#5fa9da]`:'bg-[#898989]'}`}></p>
                  </div>
                </div>
            ))}
            </div>
            <div className='w-1/10 p-2 flex flex-col gap-2'>
            {p5.map((panel) => (
                <div className="border rounded-lg border-black overflow-hidden relative"
                onMouseEnter={() => {setIsHovered4(true);setHoveredDesc(p5)}}
                onMouseLeave={() => setIsHovered4(false)}>
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 ${isHovered4 ? `bg-[#bf77d0]`:'bg-[#898989]'}`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 ${isHovered4 ? `bg-[#bf77d0]`:'bg-[#898989]'}`}></p>
                  </div>
                </div>
            ))}
            </div>
            <div className='w-1/10 p-2 flex flex-col gap-2'>
            {p6.map((panel) => (
                <div className="border rounded-lg border-black overflow-hidden relative"
                onMouseEnter={() => {setIsHovered5(true);setHoveredDesc(p6)}}
                onMouseLeave={() => setIsHovered5(false)}>
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 ${isHovered5 ? `bg-[#988bbc]`:'bg-[#898989]'}`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 ${isHovered5 ? `bg-[#988bbc]`:'bg-[#898989]'}`}></p>
                  </div>
                </div>
            ))}
            </div>
            <div className='w-1/10 p-2 flex flex-col gap-2'>
            {p7.map((panel) => (
                <div className="border rounded-lg border-black overflow-hidden relative"
                onMouseEnter={() => {setIsHovered6(true);setHoveredDesc(p7)}}
                onMouseLeave={() => setIsHovered6(false)}>
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 ${isHovered6 ? `bg-[#e06339]`:'bg-[#898989]'}`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 ${isHovered6 ? `bg-[#e06339]`:'bg-[#898989]'}`}></p>
                  </div>
                </div>
            ))}
            </div>
            <div className='w-1/10 p-2 flex flex-col gap-2'>
            {p8.map((panel) => (
                <div className="border rounded-lg border-black overflow-hidden relative"
                onMouseEnter={() => {setIsHovered7(true);setHoveredDesc(p8)}}
                onMouseLeave={() => setIsHovered7(false)}>
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 ${isHovered7 ? `bg-[#dfe04e]`:'bg-[#898989]'}`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 ${isHovered7 ? `bg-[#dfe04e]`:'bg-[#898989]'}`}></p>
                  </div>
                </div>
            ))}
            </div>
            <div className='w-1/10 p-2 flex flex-col gap-2'>
            {p9.map((panel) => (
                <div className="border rounded-lg border-black overflow-hidden relative"
                onMouseEnter={() => {setIsHovered8(true);setHoveredDesc(p9)}}
                onMouseLeave={() => setIsHovered8(false)}>
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 ${isHovered8 ? `bg-[#f1b258]`:'bg-[#898989]'}`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 ${isHovered8 ? `bg-[#f1b258]`:'bg-[#898989]'}`}></p>
                  </div>
                </div>
            ))}
            </div>
            <div className='w-1/10 p-2 flex flex-col gap-2'>
            {p10.map((panel) => (
                <div className="border rounded-lg border-black overflow-hidden relative"
                onMouseEnter={() => {setIsHovered9(true);setHoveredDesc(p10)}}
                onMouseLeave={() => setIsHovered9(false)}>
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 ${isHovered9 ? `bg-[#d479a3]`:'bg-[#898989]'}`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 ${isHovered9 ? `bg-[#d479a3]`:'bg-[#898989]'}`}></p>
                  </div>
                </div>
            ))}
            </div>
        </div>
     {hoveredDesc && <div class="hidden max-[1069px]:hidden block lg:flex justify-start gap-x-14 items-center w-[80%] mx-auto pb-9">
        <div class={`w-20 h-1 ${hoveredDesc && `bg-[${hoveredDesc[1].bg}]` }`}></div>
          <p class={`text-5xl font-extrabold font-[Lato] leading-[52px] ${hoveredDesc && `text-[${hoveredDesc[1].bg}]` }`}>{hoveredDesc && hoveredDesc[0].des}</p>
          </div>}
          </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex max-[1069px]:flex-col max-[1069px]:place-items-center justify-between py-12'>
          <div className='md:w-[70%]'>
            <p className='font-[Lato] text-5xl text-[#1B1D28] font-extrabold max-[1069px]:text-center'>Content</p>
            <p className='font-[Lato] text-2xl text-[#414A58] font-bold py-6'>Keep your customers coming with captivating content that captures your company’s character.</p>
            <p className='text-lg text-black font-normal pl-4 border-l-2 border-[#1D4ED8]'>What type of content, how it's presented, and how often you present it is the key to a successful SEO marketing strategy. Conforming the product and/or service information, multimedia, and other assets on your website to search engine standards as well as consumer expectations goes a long way to cli...READ MORE</p>
            <button className='text-base text-black bg-[#FFC145] font-bold mt-11 px-6 py-3 uppercase'>REQUEST A CONTENT AUDIT</button>
          </div>
          <div className='p-2 grid grid-cols-2 gap-2 max-[1069px]:py-10'>
            {p1.map((panel) => (
                <div className="border w-[89px] h-[85px] rounded-lg border-black overflow-hidden relative">
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 bg-[#9ac255]`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 bg-[#9ac255]`}></p>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex justify-between max-[1069px]:flex-col max-[1069px]:place-items-center py-12'>
          <div className='md:w-[70%]'>
            <p className='font-[Lato] text-5xl text-[#1B1D28] font-extrabold max-[1069px]:text-center'>Architecture</p>
            <p className='font-[Lato] text-2xl text-[#414A58] font-bold py-6'>Even fully optimized content needs a well-organized site structure to yield the best SEO results.</p>
            <p className='text-lg text-black font-normal pl-4 border-l-2 border-[#1D4ED8]'>Website architecture affects a search engine crawler's ability to index your web pages, a user's experience across multimedia devices, and the safety of your business. That's why mobile-friendly, cross-parity, route-redundant, and HTTPS-compliant perform better.<br/><br/>A stron...READ MORE</p>
            <button className='text-base text-black bg-[#FFC145] font-bold mt-11 px-6 py-3 uppercase'>Request an Onpage SEO Audit</button>
          </div>
          <div className='p-2 grid grid-cols-2 gap-2 max-[1069px]:py-10'>
            {p2.map((panel) => (
                <div className="border w-[89px] h-[85px] rounded-lg border-black overflow-hidden relative">
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 bg-[#83BF8B]`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 bg-[#83BF8B]`}></p>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      <div className='flex bg-[#181e4e] justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex justify-between max-[1069px]:flex-col max-[1069px]:place-items-center py-12'>
          <div className='md:w-[70%]'>
            <p className='font-[Lato] text-5xl text-white font-extrabold max-[1069px]:text-center'>HTML</p>
            <p className='font-[Lato] text-2xl text-white font-bold py-6'>Use your HTML elements to your advantage and improve your crawlability.</p>
            <p className='text-lg text-white font-normal pl-4 border-l-2 border-[#1D4ED8]'>HTML is a scripting language that puts titles, paragraphs, images, videos, and other assets onto the pages for your clients, customers, and search engines to see.<br/><br/>Serving up SEO-rich content means using the right HTML tags to help guide search engine crawlers through yo...READ MORE</p>
            <button className='text-base text-black bg-[#FFC145] font-bold mt-11 px-6 py-3 uppercase'>GET A HTML SITE AUDIT</button>
          </div>
          <div className='p-2 grid grid-cols-2 grid-rows-3 items-center my-auto gap-2 max-[1069px]:py-10'>
            {p3.map((panel) => (
                <div className="border w-[89px] h-[85px] rounded-lg border-black overflow-hidden relative">
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 bg-[#5fa9da]`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 bg-[#5fa9da]`}></p>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex justify-between max-[1069px]:flex-col max-[1069px]:place-items-center py-12'>
          <div className='md:w-[70%]'>
            <p className='font-[Lato] text-5xl text-[#1B1D28] font-extrabold max-[1069px]:text-center'>Architecture</p>
            <p className='font-[Lato] text-2xl text-[#414A58] font-bold py-6'>Even fully optimized content needs a well-organized site structure to yield the best SEO results.</p>
            <p className='text-lg text-black font-normal pl-4 border-l-2 border-[#1D4ED8]'>Website architecture affects a search engine crawler's ability to index your web pages, a user's experience across multimedia devices, and the safety of your business. That's why mobile-friendly, cross-parity, route-redundant, and HTTPS-compliant perform better.<br/><br/>A stron...READ MORE</p>
            <button className='text-base text-black bg-[#FFC145] font-bold mt-11 px-6 py-3 uppercase'>Request an Onpage SEO Audit</button>
          </div>
          <div className='p-2 grid grid-cols-2 grid-rows-2 my-auto gap-2 max-[1069px]:py-10'>
            {p4.map((panel) => (
                <div className="border w-[89px] h-[85px] rounded-lg border-black overflow-hidden relative">
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 bg-[#5fa9da]`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 bg-[#5fa9da]`}></p>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex justify-between max-[1069px]:flex-col max-[1069px]:place-items-center py-12'>
          <div className='md:w-[70%]'>
            <p className='font-[Lato] text-5xl text-[#1B1D28] font-extrabold max-[1069px]:text-center'>Links</p>
            <p className='font-[Lato] text-2xl text-[#414A58] font-bold py-6'>Give your content the attention it deserves with backlinks that send you traffic from beyond Google’s borders.</p>
            <p className='text-lg text-black font-normal pl-4 border-l-2 border-[#1D4ED8]'>Links are important for navigating from within and without your website. Content marketing strategies are majorly concerned with links that point to your website from other web spaces -- these are called "backlinks".<br/><br/>The more backlinks from high-quality sources you can ...READ MORE</p>
            <button className='text-base text-black bg-[#FFC145] font-bold mt-11 px-6 py-3 uppercase'>GET A BACKLINK AUDIT</button>
          </div>
          <div className='p-2 grid grid-cols-2 grid-rows-2 my-auto gap-2 max-[1069px]:py-10'>
            {p5.map((panel) => (
                <div className="border w-[89px] h-[85px] rounded-lg border-black overflow-hidden relative">
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 bg-[#bf77d0]`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 bg-[#bf77d0]`}></p>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex justify-between max-[1069px]:flex-col max-[1069px]:place-items-center py-12'>
          <div className='md:w-[70%]'>
            <p className='font-[Lato] text-5xl text-[#1B1D28] font-extrabold max-[1069px]:text-center'>User</p>
            <p className='font-[Lato] text-2xl text-[#414A58] font-bold py-6'>Make your content easy to read so you can turn visitors into customers.</p>
            <p className='text-lg text-black font-normal pl-4 border-l-2 border-[#1D4ED8]'>A critical metric for evaluating SEO scores is the user's experience (UX) browsing a website. While difficult to quantify, there are some flags and strategies that can be used to boost a website's ranking.<br/><br/>Making sure your content delivers information tailored to consum...READ MORE</p>
            <button className='text-base text-black bg-[#FFC145] font-bold mt-11 px-6 py-3 uppercase'>GET A CRO AUDIT</button>
          </div>
          <div className='p-2 grid grid-cols-2 grid-rows-3 my-auto gap-2 max-[1069px]:py-10'>
            {p6.map((panel) => (
                <div className="border w-[89px] h-[85px] rounded-lg border-black overflow-hidden relative">
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 bg-[#988bbc]`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 bg-[#988bbc]`}></p>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      <div className='flex bg-[#181e4e] justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex justify-between max-[1069px]:flex-col max-[1069px]:place-items-center py-12'>
          <div className='md:w-[70%]'>
            <p className='font-[Lato] text-5xl text-white font-extrabold max-[1069px]:text-center'>Toxins</p>
            <p className='font-[Lato] text-2xl text-white font-bold py-6'>Don’t let your website fall victim to unnecessary SEO penalties.</p>
            <p className='text-lg text-white font-normal pl-4 border-l-2 border-[#1D4ED8]'>Marketing content comes with its own set of shortcuts, tricks, tips, and hacks. Whether it's keyword stuffing, privacy violations, or pirating other content there are SEO pitfalls that you must avoid if you want to stay on a search engine's whitelist.<br/><br/>Avoiding toxic SEO...READ MORE</p>
            <button className='text-base text-black bg-[#FFC145] font-bold mt-11 px-6 py-3 uppercase'>GET A SITE PENALTY AUDIT</button>
          </div>
          <div className='p-2 grid grid-cols-2 grid-rows-4 gap-2 max-[1069px]:py-10'>
            {p7.map((panel) => (
                <div className="border w-[89px] h-[85px] rounded-lg border-black overflow-hidden relative">
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 bg-[#e06339]`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 bg-[#e06339]`}></p>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex justify-between max-[1069px]:flex-col max-[1069px]:place-items-center py-12'>
          <div className='md:w-[70%]'>
            <p className='font-[Lato] text-5xl text-[#1B1D28] font-extrabold max-[1069px]:text-center'>Local</p>
            <p className='font-[Lato] text-2xl text-[#414A58] font-bold py-6'>Incorporate local SEO into your content strategy to amplify your physical presence.</p>
            <p className='text-lg text-black font-normal pl-4 border-l-2 border-[#1D4ED8]'>Aside from a few technical areas like registering on Google's My Business index, content-driven marketing is the best way to influence your website's SEO on a local level. <br/><br/>A steady stream of content allows you to saturate your website with location-specific information...READ MORE</p>
            <button className='text-base text-black bg-[#FFC145] font-bold mt-11 px-6 py-3 uppercase'>GET A CRO AUDIT</button>
          </div>
          <div className='p-2 grid grid-cols-2 grid-rows-3 my-auto gap-2 max-[1069px]:py-10'>
            {p8.map((panel) => (
                <div className="border w-[89px] h-[85px] rounded-lg border-black overflow-hidden relative">
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 bg-[#dfe04e]`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 bg-[#dfe04e]`}></p>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex justify-between max-[1069px]:flex-col max-[1069px]:place-items-center py-12'>
          <div className='md:w-[70%]'>
            <p className='font-[Lato] text-5xl text-[#1B1D28] font-extrabold max-[1069px]:text-center'>Publishing</p>
            <p className='font-[Lato] text-2xl text-[#414A58] font-bold py-6'>Let your content go viral by publishing it on relevant platforms that put you on the mainstage.</p>
            <p className='text-lg text-black font-normal pl-4 border-l-2 border-[#1D4ED8]'>Publishing platforms such as Google News, Google Discover, and other search engines’ 'Top Stories' divisions can give a website access to hundreds of thousands of new users a day. A strong content marketing strategy raises your chances of "getting seen" all the higher.<br/><br/>...READ MORE</p>
            <button className='text-base text-black bg-[#FFC145] font-bold mt-11 px-6 py-3 uppercase'>GET A CRO AUDIT</button>
          </div>
          <div className='p-2 grid grid-cols-2 grid-rows-3 my-auto gap-2 max-[1069px]:py-10'>
            {p9.map((panel) => (
                <div className="border w-[89px] h-[85px] rounded-lg border-black overflow-hidden relative">
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 bg-[#f1b258]`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 bg-[#f1b258]`}></p>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      <div className='flex bg-[#181e4e] justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex justify-between max-[1069px]:flex-col max-[1069px]:place-items-center py-12'>
          <div className='md:w-[70%]'>
            <p className='font-[Lato] text-5xl text-white font-extrabold max-[1069px]:text-center'>Ecommerce</p>
            <p className='font-[Lato] text-2xl text-white font-bold py-6'>Turn your content into an inbound marketing and money-making machine that helps grow your eCommerce store.</p>
            <p className='text-lg text-white font-normal pl-4 border-l-2 border-[#1D4ED8]'>The best performing eCommerce websites follow these two strategies: SEO-optimization and A/B testing products and designs. Satisfying search engines leads to more organic traffic and satisfying customers leads to higher conversion rates.<br/><br/>90% of all web browsing is done ...READ MORE</p>
            <button className='text-base text-black bg-[#FFC145] font-bold mt-11 px-6 py-3 uppercase'>REQUEST AN ECOMMERCE SEO AUDIT</button>
          </div>
          <div className='p-2 grid grid-cols-2 grid-rows-3 my-auto gap-2 max-[1069px]:py-10'>
            {p8.map((panel) => (
                <div className="border w-[89px] h-[85px] rounded-lg border-black overflow-hidden relative">
                  <div className="relative  w-[89px] h-[85px] rounded-lg bg-white px-1 py-1">
                    <p className={`absolute right-[-37px]  w-[70px] h-[30px] top-0  rotate-45 border-[1px] border-gray-800 bg-[#d479a3]`}></p>
                    <p className="text-[11px] absolute right-1">{panel.num}</p>
                    <div>
                      <p className=" text-[26px] font-bold f-f-DM leading-[30px]">{panel.title}</p>
                      <p className="text-[8px] leading-[9px] f-f-DM font-medium">{panel.name}</p>
                      <p className="text-[5px] leading-[7px] f-f-DM font-medium   py-1 max-w-[90px]"></p>
                    </div>
                      <div class=" bg-x-black"></div>
                      <div class="absolute bottom-[-2px] w-full z-20  left-0 right-0">
                        <p className=" w-fit mx-auto text-center   text-[8px] leading-[9px] font-bold py-1 f-f-DM">{panel.des}</p>
                      </div>
                        <p className={`absolute bottom-0 w-full left-0 right-0 h-[15px]  border-t-[1px] border-gray-800 bg-[#d479a3]`}></p>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex max-[1069px]:flex-col justify-between max-[1069px]:justify-center max-[1069px]:place-items-center'>
          <div className='md:w-[60%] py-24 xl:py-36 2xl:py-48'>
            <p className='font-[Lato] text-5xl text-[#1B1D28] font-extrabold uppercase'>LET US WRITE FOR GOOGLE</p>
            <p className='font-[Lato] text-2xl text-[#374151] font-bold py-6'>SEARCH ENGINES LOVE OUR CONTENT</p>
            <p className='text-lg text-black font-normal pb-12'>Content marketing is a long-term investment with SEO benefits as well as direct traffic benefits. As a result, traffic increases are not just short-term; our clients enjoy having their content prominently featured in search engines and major websites for long-term traffic improvements and SEO benefit.</p>
            <button className='text-base text-black bg-[#FFC145] font-bold px-6 py-3 uppercase'>Start now</button>
          </div>
          <img src={service} alt="Multiply your traffic" className='md:w-[35%] py-24'/>
        </div>
      </div>
      <div className='flex bg-image2 w-screen justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] py-24 flex justify-end max-[1069px]:justify-center'>
          <div className='pl-8 border-l-2 border-white md:w-[55%]'>
            <p className='font-[Lato] text-5xl text-white font-extrabold'>Drive high quality traffic at the lowest cost.</p>
            <p className='font-[Lato] text-2xl text-white font-bold py-6'>Request an ongoing content marketing strategy.</p>
            <p className='text-lg text-white font-normal pb-6'>Content marketing is constantly evolving. Not only are we looking for new ways to identify relevant channels, we are also working diligently to improve upon our existing campaigns. We continue to work to improve the visibility of your articles to make them more meaningful to your lead generation and SEO efforts. Our team continues to monitor and report upon how your content is performing and which pieces of content are giving you the greatest results.</p>
            <button className='text-base text-black bg-[#FFC145] font-bold px-6 py-3 uppercase'>Contact our team</button>
          </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] pt-10 flex flex-col justify-center'>
          <div className='w-[68%] flex flex-col text-center self-center'>
            <p className='text-sm text-[#0066BA] font-bold tracking-[1.5px] uppercase'>Our Sales team</p>
            <p className='font-[Lato] text-3xl text-[#0D0D0D] font-black pt-3 pb-10 tracking-[2px]'>We are available for you every time</p>
          </div>
          <img src={sales} alt="Multiply your traffic" className='w-full py-12'/>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] pt-10 flex flex-col justify-center'>
        <div className='flex justify-center'>
          <img src={vectorwhite} alt="Logo" width={225} className=''/>
          </div>
          <div className='flex justify-around max-lg:grids max-lg:grid max-lg:grid-cols-3 max-lg:place-items-center max-sm:grid-cols-2 max-[350px]:grid-cols-1'>
            <div className='py-2'>
              <p className='font-[Lato] text-base font-black text-[#181E4E] py-2'>WHAT WE DO</p>
              <p className='font-normal text-sm text-[#181E4E] py-2'>SEO</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>PPC</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>Reputation Management</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>Social Media</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>Web Development</p>
              <p className='font-normal text-sm text-[#181E4E]'>Marketing Automation</p>
            </div>
            <div className='py-2'>
              <p className='font-[Lato] text-base font-black text-[#181E4E] py-2'>INDUSTRIES</p>
              <p className='font-normal text-sm text-[#181E4E] py-2'>Luxury Communities</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>Franchise</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>E-Commerce</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>Crypto</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'> Assisted Living </p>
              <p className='font-normal text-sm text-[#181E4E]'>Other</p>
            </div>
            <div className='py-2'>
              <p className='font-[Lato] text-base font-black text-[#181E4E] py-2'>COMPANY</p>
              <p className='font-normal text-sm text-[#181E4E] py-2'>About Us</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>Our Team</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>Testimonials</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>Awards</p>
              <p className='font-[Lato] text-base font-black text-[#181E4E] py-2 uppercase'>News</p>
              <p className='font-normal text-sm text-[#181E4E] py-2'>Press & Media</p>
            </div>
            <div className='py-2'>
              <p className='font-[Lato] text-base font-black text-[#181E4E] py-2'>CAREERS</p>
              <p className='font-normal text-sm text-[#181E4E] py-2'>Careers</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>Applicant Privacy</p>
              <p className='font-[Lato] text-base font-black text-[#181E4E] py-2 uppercase'>CONTACT US</p>
              <p className='font-normal text-sm text-[#181E4E] py-2'>Support</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>Business Inquiries</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>@Facebook</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>@Twitter</p>
              <p className='font-normal text-sm text-[#181E4E] pb-2'>@LinkedIn</p>
            </div>
            <div className='py-2'>
              <p className='font-[Lato] text-base font-black text-[#181E4E] py-2'>Blog</p>
              <p className='font-normal text-sm text-[#666666] py-2 pb-9'>Read the latest Digital <br/>Marketing news</p>
              <p className='font-[Lato] text-base font-black text-[#181E4E] py-2'>The DMA Bulletin</p>
              <p className='font-normal text-sm text-[#666666] py-2 '>All our latest data stories &<br/>insights straight to your inbox</p>
              <input placeholder='Enter Your Email' className='text-[#9CA3AF] border border-[#D1D1D1] px-2'/><br/>
              <button className='text-sm text-black bg-[#E7E8F3] font-bold px-6 py-1 uppercase mt-2'>Contact our team</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex bg-[#F8F8FF] justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] pt-10 flex max-md:flex-col justify-between '>
          <div className='flex items-center max-[1070px]:flex-col'>
          <div className='flex items-center'>
          <img src={call} alt="Multiply your traffic" className='w-[43px] py-12'/>
          <p className='text-[#181E4E] font-[Montserrat] font-extrabold text-2xl'>Need Help? Say Hello</p>
          </div>
          <p className='text-[#181E4E] font-[Montserrat] font-extrabold text-5xl max-[400px]:text-3xl'>800-569-2754</p>
          </div>
          <div className='mr-6 flex flex-col my-auto max-md:mx-auto max-md:py-10'>
            <div className='flex'>
              <img src={location} alt='locatio' className='w-[20px]' />
              <p className='text-black font-normal text-sm'>111 E. Wacker Drive Chicago, IL 60601</p>
            </div>
            <div className='flex'>
              <img src={email} alt='locatio' className='w-[20px]' />
              <p className='text-black font-normal text-sm'>sales@digitalmarketingagency.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex bg-white justify-center'>
        <div className='w-[90%] xl:w-[80%] 2xl:w-[65%] flex justify-center'>
          <p className='font-[Lato] text-sm font-normal text-black py-2 mt-3'>Copyright © 2023 Digital Marketing Agency.  Terms & Conditions | Privacy Statement | Cookie Notice | Global Unsubscribe | Sitemap</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
