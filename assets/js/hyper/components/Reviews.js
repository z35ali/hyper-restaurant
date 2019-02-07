import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
  return (
    <section id='Reviews'>
      <div class='container'>
        <div class='row'>
          <div class='col-md-8'>
            <div class='side-img'>
              <img src='http://cdn.playbuzz.com/cdn/76d5533e-7e04-48ca-973e-8e05c34428ca/61a58a6a-7780-41d5-ac94-77891e70c103.jpg' />
            </div>
          </div>
          <div class='col-md-4'>
            <h5 class='comp-title'>Reviews</h5>
            <h2>The Food Network</h2>
            <h4>"Best Restaurant in the City"</h4>
            <p>
              I went to this restaurant and instantly fell in love with the
              food. The food was flavourful and the service was top notch
            </p>
            <div class='author'>
              <strong>Lisa Bastiachi -</strong> <em>Winner of Master Chef</em>
            </div>
            <div class='arrows'>
              <i class='fa fa-arrow-left' aria-hidden='true' />
              <i class='fa fa-arrow-right ready' aria-hidden='true' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
