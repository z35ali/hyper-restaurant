import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
  return (
    <section id='ContactUs' class='texturebg'>
      <div class='container'>
        <h5 class='comp-title'>Special Menu</h5>
        <h2>Delicious Flavour of Autumn</h2>

        <div class='row boxes'>
          <div class='col-md-4'>
            <div class='box'>
              <div class='box-img'>
                {' '}
                <div class='price-circle'>$25</div>{' '}
              </div>

              <span class='title'>Super BBQ Grill No Smoke</span>
              <p class='details'>
                Fried eggs, Steak, Potatoes, or French Fries, side of vegetables
              </p>
            </div>
          </div>

          <div class='col-md-4'>
            <div class='box'>
              <div class='box-img'>
                {' '}
                <div class='price-circle'>$25</div>{' '}
              </div>

              <span class='title'>Super BBQ Grill No Smoke</span>
              <p class='details'>
                Fried eggs, Steak, Potatoes, or French Fries, side of vegetables
              </p>
            </div>
          </div>

          <div class='col-md-4'>
            <div class='box'>
              <div class='box-img'>
                {' '}
                <div class='price-circle'>$25</div>{' '}
              </div>

              <span class='title'>Super BBQ Grill No Smoke</span>
              <p class='details'>
                Fried eggs, Steak, Potatoes, or French Fries, side of vegetables
              </p>
            </div>
          </div>
        </div>
        <a href='#' class='link'>
          View Full Menu
        </a>
      </div>
    </section>
  );
}
