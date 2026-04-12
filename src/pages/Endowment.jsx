import ContentPage from '../templates/ContentPage';
import Button from '../components/ui/Button';
import PageMeta from '../components/PageMeta';
import { DONATE_URL } from '../lib/urls';

const contributionLevels = [
  { tier: 'Gold Contributors', range: 'Over $50,000' },
  { tier: 'Silver Contributors', range: '$10,000 – $50,000' },
  { tier: 'Bronze Contributors', range: '$5,000 – $10,000' },
  { tier: 'Blue Contributors', range: 'Under $5,000' },
];

const annualAmounts = ['$50', '$100', '$150', '$200', '$500', '$1,000', '$5,000', '$10,000'];

function Endowment() {
  const toc = [
    { id: 'why', label: 'Why an endowment' },
    { id: 'progress', label: 'Progress' },
    { id: 'how', label: 'How to give' },
    { id: 'planned-giving', label: 'Planned giving' },
  ];

  return (
    <>
      <PageMeta
        title="Endowment Fund"
        description="The Fort Kent Outdoor Center endowment fund — ensuring long-term sustainability of northern Maine's community trail system."
        path="/endowment"
      />
      <ContentPage
        crumb={[{ label: 'Support' }, { label: 'Endowment fund' }]}
        title={
          <>
            The <em>endowment.</em>
          </>
        }
        lede="In 2024 we launched an endowment fund with the Maine Community Foundation. Our goal is $2.4 million to sustain year-round operations, athlete development, and community programs for decades to come."
        toc={toc}
      >
        <section id="why" className="content-page__section">
          <h2>Why an endowment.</h2>
          <p>
            Since the venue&apos;s creation in 1998 as the Maine Winter Sports Center, the Libra
            Foundation in Portland, Maine has been the primary funder of operations in Fort Kent and
            at the Nordic Heritage Center in Presque Isle.
          </p>
          <p>
            In 2024 Libra concluded its direct operational support. At that time, the assets
            belonging to the Fort Kent Outdoor Center were formally gifted to our operating Board of
            Directors. For fifteen years, Libra&apos;s support helped cover capital improvements,
            maintenance, taxes, insurance, and half of the venue manager&apos;s salary. That support
            has now ended, making it increasingly difficult to maintain our daily operations and
            programming.
          </p>
          <p>
            To meet this challenge, FKOC has created an <strong>endowment fund</strong> with the
            Maine Community Foundation to generate annual interest and replace the former
            contributions. Long-time supporter <strong>Phyllis Jalbert</strong> has endorsed the
            initiative and provided the largest contribution to date.
          </p>
          <ul>
            <li>Maintain world-class trails and facilities.</li>
            <li>Offer year-round outdoor programs and events.</li>
            <li>Support aspiring athletes and community recreation.</li>
            <li>Sustain a vital community asset in the St. John Valley.</li>
          </ul>
        </section>

        <section id="progress" className="content-page__section">
          <h2>Where we stand.</h2>
          <p>
            We are seeking to raise <strong>$2.4 million</strong> for the endowment. Thanks to
            generous donors we have already secured over <strong>65%</strong> of the goal.
          </p>
          <dl
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: 'var(--space-xs) var(--space-md)',
              alignItems: 'baseline',
            }}
          >
            <dt>
              <strong>Pledged</strong>
            </dt>
            <dd>$1.4M — 65% of goal</dd>
            <dt>
              <strong>Deposited</strong>
            </dt>
            <dd>$1.0M — 40% of goal (on account)</dd>
          </dl>
          <p>
            Gifts may be made as one-time donations, multi-year pledges, or via transfers of stock
            or property with favorable tax benefits.
          </p>
        </section>

        <section id="how" className="content-page__section">
          <h2>How to give.</h2>
          <p>
            Fort Kent Outdoor Center is a <strong>501(c)(3)</strong> non-profit organization. All
            donations are fully tax-deductible. Transfers of stock or property may allow donors to
            avoid capital gains tax.
          </p>
          <p>Contribution levels:</p>
          <ul>
            {contributionLevels.map((level) => (
              <li key={level.tier}>
                <strong>{level.tier}</strong> — {level.range}
              </li>
            ))}
          </ul>
          <p>Annual giving amounts: {annualAmounts.join(', ')}.</p>
          <p>
            Other ways to give: stock transfers, property transfers, one-time gifts, or multi-year
            pledges.
          </p>
          <p>
            To help us avoid the 3% credit card processing fee, we kindly encourage donations by
            check whenever possible. Please make checks payable to <strong>FKOC</strong> and mail
            to:
          </p>
          <address>
            Fort Kent Outdoor Center
            <br />
            P.O. Box 541
            <br />
            Fort Kent, ME 04743
          </address>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-md)',
              flexWrap: 'wrap',
              marginTop: 'var(--space-md)',
            }}
          >
            <Button variant="support" href={DONATE_URL} target="_blank" rel="noopener noreferrer">
              Make a one-time donation
            </Button>
            <Button variant="ghost" href="mailto:info@fortkentoc.org">
              Email us about a gift →
            </Button>
          </div>
        </section>

        <section id="planned-giving" className="content-page__section">
          <h2>Planned giving.</h2>
          <p>
            Thank you for supporting this community gem. Your gift sustains outdoor recreation for
            everyone, year-round.
          </p>
          <p>
            For questions about planned giving, multi-year pledges, stock or property transfers, or
            naming opportunities, please contact us directly at{' '}
            <a href="mailto:info@fortkentoc.org">info@fortkentoc.org</a>.
          </p>
        </section>
      </ContentPage>
    </>
  );
}

export default Endowment;
