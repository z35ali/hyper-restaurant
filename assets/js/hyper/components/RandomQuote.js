import { h, app } from 'hyperapp';

export default function RandomQuote({ state, actions }) {
  return (
    <section
      id='RandomQuote'
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(0,0,0,.2)0, #000 100%),url("http://www.colonelsretreat.com/system/special_slider/cooking.png")'
      }}
    >
      <div class='container'>
        <h1>
          "Good painting is like good cooking; it can only be tasted but not
          explained"
        </h1>
        <span class='author'>Billy -</span>
      </div>
    </section>
  );
}
