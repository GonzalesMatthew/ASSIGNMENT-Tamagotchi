import appBuilder from '../components/appBuilder';
import eatCard from '../components/eatCard';
import playCard from '../components/playCard';
import fightCard from '../components/fightCard';
import sleepCard from '../components/sleepCard';
import buttonEvents from './buttonEvents';
import progressBar from '../components/progressBar';
import progress from './progressFunctions';

function brain() {
  appBuilder();
  eatCard();
  playCard();
  fightCard();
  sleepCard();
  progressBar();
  buttonEvents();
  progress();
}

export default brain;
