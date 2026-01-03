
import React from 'react';
import { Testimonial, Project, NewsPost, PricingTier, TeamMember } from './types';
import { SITE_IMAGES } from './images/config';

/**
 * Re-exporting images for backward compatibility if needed
 */
export const IMAGES = SITE_IMAGES;

export const VIP_SERVICES = [
  { id: 1, icon: 'bi-palette', title: 'Modern Web Design', description: 'Beautiful and clean designs that make your business look professional and premium.', tags: ['UI/UX', 'Branding', 'Mobile'] },
  { id: 2, icon: 'bi-code-slash', title: 'Custom Development', description: 'Fast, secure, and powerful websites built with the latest clean coding standards.', tags: ['React', 'Next.js', 'Node.js'] },
  { id: 3, icon: 'bi-graph-up', title: 'Business Strategy', description: 'I help your business grow by building features that convert visitors into customers.', tags: ['SEO', 'Marketing', 'Sales'] }
];

export const PORTFOLIO_DATA: Project[] = [
  { id: 1, title: 'Gym Management Web', image: IMAGES.portfolio.project1, description: 'Complete system for gym owners to manage members and staff.', tech: ['React', 'PostgreSQL'], liveLink: '#', githubLink: '#' },
  { id: 2, title: 'Crypto Tracking App', image: IMAGES.portfolio.project2, description: 'Fast dashboard for monitoring digital assets and market trends.', tech: ['Vite', 'Tailwind'], liveLink: '#', githubLink: '#' },
  { id: 3, title: 'Real Estate Portal', image: IMAGES.portfolio.project3, description: 'Luxury home search platform with advanced filtering options.', tech: ['Next.js', 'MongoDB'], liveLink: '#', githubLink: '#' },
  { id: 4, title: 'AI Data Dashboard', image: IMAGES.portfolio.project4, description: 'Smart analytics dashboard using AI for business insights.', tech: ['Python', 'React'], liveLink: '#', githubLink: '#' },
  { id: 5, title: 'E-Commerce Store', image: IMAGES.portfolio.project5, description: 'Modern online store with smooth checkout and secure payments.', tech: ['Stripe', 'Node.js'], liveLink: '#', githubLink: '#' },
  { id: 6, title: 'Mobile Fintech UI', image: IMAGES.portfolio.project6, description: 'Clean and secure banking application interface design.', tech: ['React Native', 'AWS'], liveLink: '#', githubLink: '#' }
];

export const TEAM_DATA: TeamMember[] = [
  { id: 1, name: 'Zohaib Mughal', role: 'Lead Developer', image: IMAGES.team.member1, socials: [{ icon: 'bi-linkedin', link: '#' }] },
  { id: 2, name: 'Faizan Bhatti', role: 'UX Designer', image: IMAGES.team.member2, socials: [{ icon: 'bi-behance', link: '#' }] },
  { id: 3, name: 'Fiaz Bhatti', role: 'Backend Lead', image: IMAGES.team.member3, socials: [{ icon: 'bi-github', link: '#' }] },
  { id: 4, name: 'Aysha khan', role: 'Manager', image: IMAGES.team.member4, socials: [{ icon: 'bi-twitter-x', link: '#' }] },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: 1, name: 'Sarah Haseeb', location: 'Lahore, pk', service: 'Business Web', rating: 5, review: 'Zohaib transformed our digital presence. Our sales improved by 40% in the first month!', image: IMAGES.testimonials.client1 },
  { id: 2, name: 'John Peterson', location: 'New York, USA', service: 'SaaS Platform', rating: 5, review: 'Absolute professional. The technical precision and speed of delivery were unmatched.', image: IMAGES.testimonials.client2 },
  { id: 3, name: 'Rana Asad', location: 'Islamabad, PK', service: 'E-Commerce', rating: 5, review: 'The most creative developer I have ever worked with. Truly elite quality.', image: IMAGES.testimonials.client3 },
  { id: 4, name: 'Faisal Al-Sayed', location: 'Dubai, UAE', service: 'Fintech UI', rating: 5, review: 'Precision engineering at its finest. Secure, fast, and incredibly beautiful.', image: IMAGES.testimonials.client4 },
  { id: 5, name: 'Marie Dubois', location: 'Paris, FR', service: 'Brand Identity', rating: 5, review: 'His design sense is world-class. He captures luxury and professionalism perfectly.', image: IMAGES.testimonials.client5 },
  { id: 6, name: 'Ahmad Ali', location: 'Ankara, TR', service: 'Custom Web', rating: 5, review: 'Finally a developer who understands business goals. Highly efficient work.', image: IMAGES.testimonials.client6 },
  { id: 7, name: 'Umar', location: 'Shiwal, Pk', service: 'Crypto Tracking', rating: 5, review: 'Exceptional skill set. The 3D animations and speed optimization are mind-blowing.', image: IMAGES.testimonials.client7 },
  { id: 8, name: 'Ayan Ali', location: 'Singapore', service: 'Enterprise Portal', rating: 5, review: 'Clean code and amazing communication. Zohaib is a rare talent in the industry.', image: IMAGES.testimonials.client8 },
  { id: 9, name: 'Hamza Iqbal', location: 'Madrid, ES', service: 'Real Estate App', rating: 5, review: 'The user experience is seamless. Our clients love the new luxury interface.', image: IMAGES.testimonials.client9 },
  { id: 10, name: 'Marcus Thorne', location: 'Austin, USA', service: 'AI Dashboard', rating: 5, review: 'Cutting-edge tech stack. Zohaib delivered an AI-ready platform ahead of schedule.', image: IMAGES.testimonials.client10 },
  { id: 11, name: 'Oliver Schmidt', location: 'Munich, DE', service: 'Industrial Web', rating: 5, review: 'Professionalism beyond expectations. The ROI on this project was immediate.', image: IMAGES.testimonials.client11 },
  { id: 12, name: 'Abdulla', location: 'Lahore, Pk', service: 'App UI', rating: 5, review: 'Stunning visuals and extremely fast loading. Best investment for our brand.', image: IMAGES.testimonials.client12 },
  { id: 13, name: 'Tariq Hussain', location: 'karachi, PK', service: 'E-Commerce', rating: 5, review: 'The technical architecture is flawless. Highly recommended for complex projects.', image: IMAGES.testimonials.client13 },
  { id: 14, name: 'Robert Miller', location: 'Chicago, USA', service: 'Portfolio Design', rating: 5, review: 'My new portfolio looks like a million bucks. Thanks for the VIP treatment!', image: IMAGES.testimonials.client14 },
  { id: 15, name: 'Hassan Raza', location: 'Islamabad, PK', service: 'ERP System', rating: 5, review: 'Proud to see such world-class talent from Pakistan. Simply the best.', image: IMAGES.testimonials.client15 },
  { id: 16, name: 'Isabella Rossi', location: 'Milan, IT', service: 'Fashion Store', rating: 5, review: 'He understands aesthetic luxury like no other developer. Simply perfect.', image: IMAGES.testimonials.client16 },
  { id: 17, name: 'Kenji Wu', location: 'Hong Kong', service: 'Marketplace', rating: 5, review: 'Scalability was our main concern, and Zohaib engineered it perfectly.', image: IMAGES.testimonials.client17 },
  { id: 18, name: 'Emma Watson', location: 'Vancouver, CA', service: 'Creative Hub', rating: 5, review: 'Bold, innovative, and reliable. Zohaib is our go-to for all digital projects.', image: IMAGES.testimonials.client18 },
  { id: 19, name: 'Ahmed Mansour', location: 'Doha, QA', service: 'Gov Portal', rating: 5, review: 'Secure, reliable, and high-performance engineering. Top-tier professional.', image: IMAGES.testimonials.client19 },
  { id: 20, name: 'Lucas Meyer', location: 'Zurich, CH', service: 'Banking App', rating: 5, review: 'Swiss-level precision in every line of code. Outstanding delivery.', image: IMAGES.testimonials.client20 },
];

export const FAQ_DATA = [
  { id: 1, question: "How long does a website take?", answer: "Usually, a professional project takes between 4 to 8 weeks depending on complexity." },
  { id: 2, question: "Do you provide maintenance?", answer: "Yes, I provide 3 months of free maintenance after the project is launched." },
  { id: 3, question: "Will it work on mobile?", answer: "Yes, every website I build is 100% responsive and works on all devices." }
];

export const NEWS_DATA: NewsPost[] = [
  { id: 1, title: 'Why Fast Performance Matters in 2025', date: 'March 15, 2024', category: 'Insights', image: IMAGES.news.post1, link: '#' },
  { id: 2, title: 'Luxury Design Principles for Brands', date: 'April 2, 2024', category: 'Design', image: IMAGES.news.post2, link: '#' }
];

export const ELITE_PARTNERSHIPS = [
  {
    id: 1,
    tier: 'Tier I',
    name: 'Digital Sovereignty',
    price: '$2,500',
    description: 'Establish absolute authority in your niche with a custom-engineered brand presence.',
    features: ['Custom Brand Identity', 'High-Performance Landing Page', 'Mobile First Architecture', 'SEO Authority Setup'],
    cta: 'Initialize Presence'
  },
  {
    id: 2,
    tier: 'Tier II',
    name: 'Strategic Dominance',
    price: '$5,500',
    description: 'The definitive solution for scaling brands ready for global market leadership.',
    features: ['Full Ecosystem Development', 'E-Commerce Engineering', 'Custom CMS Solutions', '6 Months Priority Support'],
    recommended: true,
    cta: 'Scale Your Empire'
  },
  {
    id: 3,
    tier: 'Tier III',
    name: 'Enterprise Legacy',
    price: 'Custom',
    description: 'Complex architectural systems built for long-term scalability and market disruption.',
    features: ['SaaS Product Engineering', 'Cloud Native Architecture', 'Advanced Security Protocols', 'Annual Maintenance Suite'],
    cta: 'Begin Consultation'
  }
];

export const MARQUEE_KEYWORDS = [
  'Web Development', 'UI/UX Design', 'Online Stores', 'SEO Experts', 'Custom Code', 'Fast Loading'
];

export const ASSETS = IMAGES;
export const PRICING_DATA: PricingTier[] = [];
