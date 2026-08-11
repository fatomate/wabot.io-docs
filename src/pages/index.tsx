import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const homepageCopy = {
  en: {
    title: 'Wabot.io Documentation',
    tagline: 'The complete guide to Wabot.io, the all-in-one WhatsApp automation platform.',
    getStarted: 'Get Started',
    exploreFeatures: 'Explore Features',
    learnMore: 'Learn more →',
    features: [
      {title: 'Notifications', desc: 'Send order confirmations, shipping updates, and payment reminders automatically.', link: '/docs/features/broadcast'},
      {title: 'Broadcast', desc: 'Run marketing campaigns to thousands of contacts with scheduling and targeting.', link: '/docs/features/broadcast'},
      {title: 'AI Chatbots', desc: 'Deploy AI that answers FAQs, qualifies leads, and closes sales 24/7.', link: '/docs/features/chatbots'},
      {title: 'Automation', desc: 'Currently Coming Soon in V4. Continue existing automation workflows in V3.', link: '/docs/features/automation'},
      {title: 'Live Chat', desc: 'Shared team inbox for WhatsApp with AI-to-human handoff.', link: '/docs/features/live-chat'},
      {title: 'Autoresponder', desc: 'Keyword-based auto-replies for greetings, FAQs, and quick support.', link: '/docs/features/autoresponder'},
    ],
  },
  ms: {
    title: 'Dokumentasi Wabot.io',
    tagline: 'Panduan lengkap Wabot.io, platform automasi WhatsApp serba lengkap.',
    getStarted: 'Mula di Sini',
    exploreFeatures: 'Terokai Ciri',
    learnMore: 'Ketahui lebih lanjut →',
    features: [
      {title: 'Notifikasi', desc: 'Hantar pengesahan pesanan, kemas kini penghantaran dan peringatan bayaran secara automatik.', link: '/docs/features/broadcast'},
      {title: 'WhatsApp Blast', desc: 'Jalankan kempen pemasaran kepada ribuan kenalan dengan penjadualan dan sasaran.', link: '/docs/features/broadcast'},
      {title: 'Chatbot AI', desc: 'Gunakan AI untuk menjawab FAQ, melayakkan prospek dan menutup jualan 24/7.', link: '/docs/features/chatbots'},
      {title: 'Automasi', desc: 'Kini Coming Soon dalam V4. Teruskan aliran kerja automasi sedia ada dalam V3.', link: '/docs/features/automation'},
      {title: 'Chat Live', desc: 'Inbox pasukan WhatsApp bersama dengan serahan AI kepada manusia.', link: '/docs/features/live-chat'},
      {title: 'Auto Reply', desc: 'Auto Reply berasaskan kata kunci untuk salam, FAQ dan sokongan pantas.', link: '/docs/features/autoresponder'},
    ],
  },
};

function HomepageHeader() {
  const {i18n} = useDocusaurusContext();
  const copy = homepageCopy[i18n.currentLocale === 'ms' ? 'ms' : 'en'];
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {copy.title}
        </Heading>
        <p className="hero__subtitle">{copy.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            {copy.getStarted}
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/features/"
            style={{marginLeft: '1rem', color: 'white', borderColor: 'white'}}>
            {copy.exploreFeatures}
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureGrid(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const copy = homepageCopy[i18n.currentLocale === 'ms' ? 'ms' : 'en'];
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {copy.features.map((f) => (
            <div key={f.title} className={clsx('col col--4', styles.featureCol)}>
              <div className={styles.featureCard}>
                <Heading as="h3">{f.title}</Heading>
                <p>{f.desc}</p>
                <Link to={f.link}>{copy.learnMore}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Complete bilingual tutorial and documentation for Wabot.io — the all-in-one WhatsApp automation platform.">
      <HomepageHeader />
      <main>
        <FeatureGrid />
      </main>
    </Layout>
  );
}
