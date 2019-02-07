import { h, app } from 'hyperapp';
import Header from './Header.js';
import TopImg from './TopImg.js';
import OurStory from './OurStory.js';
import SpecialMenu from './SpecialMenu.js';
import RandomQuote from './RandomQuote.js';
import ContactUs from './ContactUs.js';
import Reviews from './Reviews.js';

export default function App({ state, actions }) {
  return (
    <div class={'app'}>
      <Header state={state} actions={actions} />
      <TopImg state={state} actions={actions} />
      <OurStory state={state} actions={actions} />
      <SpecialMenu state={state} actions={actions} />
      <RandomQuote state={state} actions={actions} />
      <Reviews state={state} actions={actions} />
    </div>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
