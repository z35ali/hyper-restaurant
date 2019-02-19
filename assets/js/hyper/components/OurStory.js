import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
  return (
    <section id='OurStory'>
      <div class='container'>
        <div class='row'>
          <div class='col-md-6'>
            <h5 class='comp-title'>Our Story</h5>
            <h2>Cooking is the art of adjustment</h2>
            <p>
              We cut our ribs with expertise and marinate to perfection. Our
              state of the art recipe has been passed throughout the family for
              years and still lives today. We offer gluten-free and vegan
              options, but we are known for our ribs. Order your ribs any style
              that you want and we will put the tastiest meal on your plate.
            </p>
            <div class='quote'>
              "The best steak in the city of Toronto" -{' '}
              <strong>Jennifer Peterson</strong>
            </div>
            <a href='#' class='reserve-btn'>
              Reserve
            </a>
          </div>
          <div class='col-md-6'>
            <div class='video-img' />
          </div>
        </div>
      </div>
    </section>
  );
}
