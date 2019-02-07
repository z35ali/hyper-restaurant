webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(10);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(6);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(9);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(7);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Reviews = __webpack_require__(8);

var _Reviews2 = _interopRequireDefault(_Reviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'ContactUs', 'class': 'texturebg' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h5',
        { 'class': 'comp-title' },
        'Contact Us'
      ),
      (0, _hyperapp.h)(
        'h2',
        null,
        'Delicious Flavour of Autumn'
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'box' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'row' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'col-md-6' },
            (0, _hyperapp.h)(
              'div',
              { 'class': 'title' },
              'Toronto, Ontario'
            ),
            (0, _hyperapp.h)(
              'h6',
              { 'class': 'Address' },
              '555 Toronto Street ',
              (0, _hyperapp.h)('br', null),
              'Toronto, ON M5B 555'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              (0, _hyperapp.h)(
                'strong',
                null,
                'email:'
              ),
              ' ',
              (0, _hyperapp.h)(
                'a',
                { href: 'mailto:info@primesteak.com' },
                'info@primesteak.com'
              )
            )
          ),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'col-md-6' },
            (0, _hyperapp.h)(
              'h6',
              null,
              'Phone:'
            ),
            (0, _hyperapp.h)(
              'div',
              { 'class': 'title' },
              '416-555-5555'
            ),
            (0, _hyperapp.h)(
              'h6',
              null,
              'Lunch Service:'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              'Friday, Saturday, Sunday ',
              (0, _hyperapp.h)('br', null),
              'from 12pm - 1:30pm'
            ),
            (0, _hyperapp.h)(
              'h6',
              null,
              'Dinner Service:'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              'Daily ',
              (0, _hyperapp.h)('br', null),
              '6pm - 9:30pm'
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'header',
    null,
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'logo' },
        'Logo'
      ),
      (0, _hyperapp.h)(
        'nav',
        null,
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Menu'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Platters'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Locations'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Rewards'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Reservations'
        )
      )
    )
  );
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'OurStory' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'row' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-6' },
          (0, _hyperapp.h)(
            'h5',
            { 'class': 'comp-title' },
            'Our Story'
          ),
          (0, _hyperapp.h)(
            'h2',
            null,
            'Cooking is the art of adjustment'
          ),
          (0, _hyperapp.h)(
            'p',
            null,
            'We cut our ribs with expertise and marinate to perfection. Our state of the art recipe has been passed throughout the family for years and still lives today. We offer gluten-free and vegan options, but we are known for our ribs. Order your ribs any style that you want and we will put the tastiest meal on your plate.'
          ),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'quote' },
            '"The best steak in the town of Huntington" -',
            ' ',
            (0, _hyperapp.h)(
              'strong',
              null,
              'James Peterson'
            )
          ),
          (0, _hyperapp.h)(
            'a',
            { href: '#', 'class': 'reserve-btn' },
            'Reserve'
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-6' },
          (0, _hyperapp.h)('div', { 'class': 'video-img' })
        )
      )
    )
  );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    {
      id: 'RandomQuote',
      style: {
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.2)0, #000 100%),url("http://www.colonelsretreat.com/system/special_slider/cooking.png")'
      }
    },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"Good painting is like good cooking; it can only be tasted but not explained"'
      ),
      (0, _hyperapp.h)(
        'span',
        { 'class': 'author' },
        'Billy -'
      )
    )
  );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'Reviews' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'row' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-8' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'side-img' },
            (0, _hyperapp.h)('img', { src: 'http://cdn.playbuzz.com/cdn/76d5533e-7e04-48ca-973e-8e05c34428ca/61a58a6a-7780-41d5-ac94-77891e70c103.jpg' })
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-4' },
          (0, _hyperapp.h)(
            'h5',
            { 'class': 'comp-title' },
            'Reviews'
          ),
          (0, _hyperapp.h)(
            'h2',
            null,
            'The Food Network'
          ),
          (0, _hyperapp.h)(
            'h4',
            null,
            '"Best Restaurant in the City"'
          ),
          (0, _hyperapp.h)(
            'p',
            null,
            'I went to this restaurant and instantly fell in love with the food. The food was flavourful and the service was top notch'
          ),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'author' },
            (0, _hyperapp.h)(
              'strong',
              null,
              'Joe Bastiachi -'
            ),
            ' ',
            (0, _hyperapp.h)(
              'em',
              null,
              'Winner of Master Chef'
            )
          ),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'arrows' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-arrow-left', 'aria-hidden': 'true' }),
            (0, _hyperapp.h)('i', { 'class': 'fa fa-arrow-right ready', 'aria-hidden': 'true' })
          )
        )
      )
    )
  );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'SpecialMenu', 'class': 'texturebg' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h5',
        { 'class': 'comp-title' },
        'Special Menu'
      ),
      (0, _hyperapp.h)(
        'h2',
        null,
        'Delicious Flavour of Autumn'
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'row boxes' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-4' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'box' },
            (0, _hyperapp.h)(
              'div',
              { 'class': 'box-img' },
              ' ',
              (0, _hyperapp.h)(
                'div',
                { 'class': 'price-circle' },
                '$25'
              ),
              ' '
            ),
            (0, _hyperapp.h)(
              'span',
              { 'class': 'title' },
              'Super BBQ Grill No Smoke'
            ),
            (0, _hyperapp.h)(
              'p',
              { 'class': 'details' },
              'Fried eggs, Steak, Potatoes, or French Fries, side of vegetables'
            )
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-4' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'box' },
            (0, _hyperapp.h)(
              'div',
              { 'class': 'box-img' },
              ' ',
              (0, _hyperapp.h)(
                'div',
                { 'class': 'price-circle' },
                '$25'
              ),
              ' '
            ),
            (0, _hyperapp.h)(
              'span',
              { 'class': 'title' },
              'Super BBQ Grill No Smoke'
            ),
            (0, _hyperapp.h)(
              'p',
              { 'class': 'details' },
              'Fried eggs, Steak, Potatoes, or French Fries, side of vegetables'
            )
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-4' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'box' },
            (0, _hyperapp.h)(
              'div',
              { 'class': 'box-img' },
              ' ',
              (0, _hyperapp.h)(
                'div',
                { 'class': 'price-circle' },
                '$25'
              ),
              ' '
            ),
            (0, _hyperapp.h)(
              'span',
              { 'class': 'title' },
              'Super BBQ Grill No Smoke'
            ),
            (0, _hyperapp.h)(
              'p',
              { 'class': 'details' },
              'Fried eggs, Steak, Potatoes, or French Fries, side of vegetables'
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        'a',
        { href: '#', 'class': 'link' },
        'View Full Menu'
      )
    )
  );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'TopImg' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'title' },
        (0, _hyperapp.h)(
          'h5',
          null,
          'Welcome'
        ),
        (0, _hyperapp.h)(
          'h1',
          null,
          'Prime Steak ',
          (0, _hyperapp.h)('br', null),
          'Restaurant'
        )
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'contact-info' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'container' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'booking' },
            'Book Table Directly'
          ),
          (0, _hyperapp.h)(
            'h2',
            null,
            '(642)-555-5555'
          ),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'hours' },
            'Opening Hours ',
            (0, _hyperapp.h)(
              'strong',
              null,
              'Mon - Fri:'
            ),
            ' 9am - 9pm',
            (0, _hyperapp.h)(
              'strong',
              null,
              ' Weekend:'
            ),
            ' 9am - 11pm'
          )
        )
      )
    )
  );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group('Action Info');
      console.log('Name:', name);
      console.log('Data:', data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  }
});

/***/ })
],[11]);