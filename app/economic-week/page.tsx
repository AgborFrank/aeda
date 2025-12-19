import EconomicWeekHero from '../components/Economic-Week/EconomicWeekHero';
import EconomicWeekStats from '../components/Economic-Week/EconomicWeekStats';
import EconomicWeekObjectives from '../components/Economic-Week/EconomicWeekObjectives';
import EconomicWeekActivities from '../components/Economic-Week/EconomicWeekActivities';
import EconomicWeekSpeakers from '../components/Economic-Week/EconomicWeekSpeakers';
import EconomicWeekAllSpeakers from '../components/Economic-Week/EconomicWeekAllSpeakers';
import EconomicWeekPartners from '../components/Economic-Week/EconomicWeekPartners';
import Flyers from '../components/Economic-Week/Flyers';

export default function EconomicWeekPage() {
  return (
    <main>
      <EconomicWeekHero />
      <EconomicWeekStats />
      <EconomicWeekActivities />
      <EconomicWeekObjectives />
      <EconomicWeekSpeakers />
      <EconomicWeekAllSpeakers />
      <EconomicWeekPartners />
      <Flyers />
    </main>
  );
}
