import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
  return (
    <header>
      <div class='container'>
        <nav>
          <a href='#OurStory'>Our Story</a>
          <a href='#SpecialMenu'>Special Menu</a>
          <a href='#Reviews'>Reviews</a>
          {/* <a href='#'>Reservations</a> */}
          <a href='#ContactUs'>Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
