import DoingBusinessHero from '../components/doing-business/DoingBusinessHero';
import DoingBusinessOpportunities from '../components/doing-business/DoingBusinessOpportunities';
import DoingBusinessSectors from '../components/doing-business/DoingBusinessSectors';
import DoingBusinessRegulations from '../components/doing-business/DoingBusinessRegulations';
import DoingBusinessInsights from '../components/doing-business/DoingBusinessInsights';


export default function DoingBusinessPage() {
  return (
    <main>
      <DoingBusinessHero />
      <DoingBusinessOpportunities />
      <DoingBusinessSectors />
      <DoingBusinessRegulations />
      <DoingBusinessInsights />
      
    </main>
  );
}
