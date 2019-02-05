import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
  return (
    <header>
      <div class='logo'>Logo</div>

      <nav>
        <a href='#'>Menu</a>
        <a href='#'>Platters</a>
        <a href='#'>Locations</a>
        <a href='#'>Rewards</a>
        <a href='#'>Reservations</a>
      </nav>
    </header>
  );
}
