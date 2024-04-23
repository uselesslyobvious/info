import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title} noFooter >
      <HomepageHeader />
      <main>
        <section>
          <div className="container">
            <div className="row">

              <div className="col col--4">
                <div className={clsx("text--center padding-horiz--md card margin--md", styles.card)}>
                  <Heading as="h3" className="card__header">Why?</Heading>
                  <div className="card__body">
                    <p><ul className="text--left">
                      <li>Existing law is outdated and ineffective.</li>
                      <li><abbr title="UN Committee on the Elimination of Racial Discrimination">CERD</abbr> has already scolded us about election candidates using racist rhetoric.</li>
                      <li>Number of incidents of hate speech is increasing.</li>
                    </ul></p>
                  </div>

                  <div className="card__footer">
                    <Link
                      className="button button--secondary button--lg"
                      to="/info">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col--4">
                <div className={clsx("text--center padding-horiz--md card margin--md", styles.card)}>
                  <Heading as="h3" className="card__header">How?</Heading>
                  <div className="card__body">
                    <p>Learn about the new proposed law. It is a step in an enormous
                      effort by many civil rights organisations and government
                      to tackle hate speech in our country.</p>
                  </div>

                  <div className="card__footer">
                    <Link
                      className="button button--secondary button--lg"
                      to="/info/2022-bill">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col--4">
                <div className={clsx("text--center padding-horiz--md card margin--md", styles.card)}>
                  <Heading as="h3" className="card__header">Take action</Heading>

                  <div className="card__body">
                    <p>Contact your representatives and ask them to support the change.</p>
                  </div>

                  <div className="card__footer">
                    <Link
                      className="button button--secondary button--lg"
                      to="/info/act">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
      </main>
    </Layout >
  );
}
