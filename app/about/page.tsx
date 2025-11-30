import { Metadata } from 'next';
import { AboutSection } from './index';
import { SITE_NAME } from '@/content/site';

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
};

const AboutPage = () => {
  return <AboutSection />;
};

export default AboutPage;
