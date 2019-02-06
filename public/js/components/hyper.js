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

var _Header = __webpack_require__(4);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(7);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(5);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(6);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

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
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions })
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
/* 5 */
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
/* 6 */
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
    { id: 'SpecialMenu' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h5',
        { 'class': 'comp-title' },
        'SpecialMenu'
      ),
      (0, _hyperapp.h)(
        'h2',
        null,
        'Delicious Flavour of Autumn'
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'row' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-4' },
          'Box'
        ),
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-4' },
          'Box'
        ),
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-4' },
          'Box'
        )
      ),
      (0, _hyperapp.h)(
        'a',
        { href: '#' },
        'View Full Menu'
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
          'Prime Steak'
        )
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'contact-info' },
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
  );
}

/***/ }),
/* 8 */
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
],[8]);