import { h, app } from 'hyperapp';

export default function SpecialMenu({ state, actions }) {
  return (
    <section id='SpecialMenu' class='texturebg'>
      <div class='container'>
        <h5 class='comp-title'>Special Menu</h5>
        <h2>Delicious Flavour of Autumn</h2>

        <div class='row boxes'>
          <div class='col-md-4'>
            <div class='box'>
              <div class='box-img1'>
                {' '}
                <div class='price-circle'>$28</div>{' '}
              </div>

              <span class='title'>Super BBQ Grill No Smoke</span>
              <p class='details'>Mashed potatoes, side of vegetables</p>
            </div>
          </div>

          <div class='col-md-4'>
            <div class='box'>
              <div class='box-img2'>
                {' '}
                <div class='price-circle'>$32</div>{' '}
              </div>

              <span class='title'>Sirloin Steak</span>
              <p class='details'>French Fries, side of potatoes</p>
            </div>
          </div>

          <div class='col-md-4'>
            <div class='box'>
              <div class='box-img3'>
                {' '}
                <div class='price-circle'>$20</div>{' '}
              </div>

              <span class='title'>Burgers</span>
              <p class='details'>French Fries, side of vegetables</p>
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
