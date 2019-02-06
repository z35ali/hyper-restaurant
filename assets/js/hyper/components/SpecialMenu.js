import { h, app } from 'hyperapp';

export default function SpecialMenu({ state, actions }) {
  return (
    <section id='SpecialMenu'>
      <div class='container'>
        <h5 class='comp-title'>SpecialMenu</h5>
        <h2>Delicious Flavour of Autumn</h2>

        <div class='row'>
          <div class='col-md-4'>Box</div>

          <div class='col-md-4'>Box</div>

          <div class='col-md-4'>Box</div>
        </div>
        <a href='#'>View Full Menu</a>
      </div>
    </section>
  );
}
