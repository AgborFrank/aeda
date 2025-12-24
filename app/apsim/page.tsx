
import APSIMAbout from '../components/apsim/APSIMAbout';
import APSIMObjective from '../components/apsim/APSIMObjective';
import APSIMFeatures from '../components/apsim/APSIMFeatures';
import APSIMOutcomes from '../components/apsim/APSIMOutcomes';
import APSIMConclusion from '../components/apsim/APSIMConclusion';

export default function APSIMPage() {
  return (
    <main>
      
      <APSIMAbout />
      <APSIMObjective />
      <APSIMFeatures />
      <APSIMOutcomes />
      <APSIMConclusion />
    </main>
  );
}
