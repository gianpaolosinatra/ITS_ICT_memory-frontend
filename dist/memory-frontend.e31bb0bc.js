// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"img/barbie.png":[function(require,module,exports) {
module.exports = "/barbie.f084b052.png";
},{}],"img/black.png":[function(require,module,exports) {
module.exports = "/black.6da0f10f.png";
},{}],"img/blue.png":[function(require,module,exports) {
module.exports = "/blue.0fc66000.png";
},{}],"img/brain-trainer.png":[function(require,module,exports) {
module.exports = "/brain-trainer.9b62082b.png";
},{}],"img/brown.png":[function(require,module,exports) {
module.exports = "/brown.c6864aba.png";
},{}],"img/dark-blue.png":[function(require,module,exports) {
module.exports = "/dark-blue.e485f206.png";
},{}],"img/dorso.png":[function(require,module,exports) {
module.exports = "/dorso.e3878d79.png";
},{}],"img/green.png":[function(require,module,exports) {
module.exports = "/green.21b8e132.png";
},{}],"img/grey.png":[function(require,module,exports) {
module.exports = "/grey.6f46e7c4.png";
},{}],"img/lime.png":[function(require,module,exports) {
module.exports = "/lime.4059ba2f.png";
},{}],"img/memory.png":[function(require,module,exports) {
module.exports = "/memory.705e343a.png";
},{}],"img/oil.png":[function(require,module,exports) {
module.exports = "/oil.30d51ca9.png";
},{}],"img/orange.png":[function(require,module,exports) {
module.exports = "/orange.58cbfd24.png";
},{}],"img/pink.png":[function(require,module,exports) {
module.exports = "/pink.ae999596.png";
},{}],"img/purple.png":[function(require,module,exports) {
module.exports = "/purple.762a0240.png";
},{}],"img/red.png":[function(require,module,exports) {
module.exports = "/red.ab5ec8be.png";
},{}],"img/white.png":[function(require,module,exports) {
module.exports = "/white.709ac437.png";
},{}],"img/yellow.png":[function(require,module,exports) {
module.exports = "/yellow.4535a8e9.png";
},{}],"img/*.png":[function(require,module,exports) {
module.exports = {
  "barbie": require("./barbie.png"),
  "black": require("./black.png"),
  "blue": require("./blue.png"),
  "brain-trainer": require("./brain-trainer.png"),
  "brown": require("./brown.png"),
  "dark-blue": require("./dark-blue.png"),
  "dorso": require("./dorso.png"),
  "green": require("./green.png"),
  "grey": require("./grey.png"),
  "lime": require("./lime.png"),
  "memory": require("./memory.png"),
  "oil": require("./oil.png"),
  "orange": require("./orange.png"),
  "pink": require("./pink.png"),
  "purple": require("./purple.png"),
  "red": require("./red.png"),
  "white": require("./white.png"),
  "yellow": require("./yellow.png")
};
},{"./barbie.png":"img/barbie.png","./black.png":"img/black.png","./blue.png":"img/blue.png","./brain-trainer.png":"img/brain-trainer.png","./brown.png":"img/brown.png","./dark-blue.png":"img/dark-blue.png","./dorso.png":"img/dorso.png","./green.png":"img/green.png","./grey.png":"img/grey.png","./lime.png":"img/lime.png","./memory.png":"img/memory.png","./oil.png":"img/oil.png","./orange.png":"img/orange.png","./pink.png":"img/pink.png","./purple.png":"img/purple.png","./red.png":"img/red.png","./white.png":"img/white.png","./yellow.png":"img/yellow.png"}],"index.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("./img/*.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_.default.barbie);
var myData;
var score = 1000;
var record = 0;
var card01;
var card02;
var counterCards = 0;
var flippedCards = 0;
var flaggame = false;
var card02img = 0;
var card01img = 0;
var moves = 0;
$(document).ready(function () {
  scoreing();
  recording();
  fetch("http://localhost:3000/memoryData").then(function (result) {
    return result.json();
  }).then(function (data) {
    // Work with JSON data here
    myData = data;
    console.log(myData);
    createTable(myData);
    $(".flip-card").click(function () {
      if (!card01) {
        card01 = $(this);
        moves++;
        $(card01).css("pointer-events", "none");
        counterCards++;
        $(this).addClass("flip-card-click");
        $(this).addClass("can-flip");
        card01img = $(this).children().children('.flip-card-back').children().attr('data-cardvalue');
        console.log(card01img);
        console.log(card01);
        flaggame = true;
        return;
      } else {
        card02 = $(this);
        moves++;
        $(card02).css("pointer-events", "none");
        counterCards++;
        $(this).addClass("flip-card-click");
        $(this).addClass("can-flip");
        console.log("Questa è card2");
        card02img = $(this).children().children('.flip-card-back').children().attr('data-cardvalue');
        console.log(card02img);
        flaggame = true;
      }

      if (card01 != false && card02 != false && flaggame) {
        if (card01img == card02img) {
          console.log("card1 e card2 sono girate e sono uguali");
          $(".flip-card-click").removeClass("can-flip");
          $(".flip-card-click").removeClass("flip-card");
          $(".flip-card-click").addClass("flipped");
          $(card02).css("pointer-events", "none");
          $(card01).css("pointer-events", "none");
          card01 = false;
          card02 = false;
          flippedCards += 2;
          console.log(flippedCards);
          console.log(deck2.length);
          checkWinner();
          checkLoser();
          recording();
        } else if (card01img != card02img || counterCards > 2) {
          console.log("card1 e card2 sono girate ma non sono uguali");
          /* 
           //remove points in match for a wrong action
           if(moves%2==0){
               checkWinner();
               checkLoser();
               recording();
           }*/
          //console.log(score);

          counterCards = 0;
          $("#table").css("pointer-events", "none"); //third card fippable fixing PART1 - if users click third card before animation time (0.5s) third card can flip otherwise third card can't

          setTimeout(function () {
            $(".can-flip").removeClass("flip-card-click");
            $(".can-flip").removeClass(".can-flip");
            $(card01).css("pointer-events", "auto");
            $(card02).css("pointer-events", "auto");
            card01 = false;
            card02 = false;
            $("#table").css("pointer-events", "auto"); //third card fippable fixing PART2
          }, 1500);
        }
      }
    });
  });
});

function scoreing() {
  var scoreText = "<p class=\"font-weight-bold scoreP rounded\">SCORE <br>".concat(score, "</p>");
  score -= 5;
  $('.score').html(scoreText);
}

function checkLoser() {
  if (score <= 0) {
    var scoreText = "<p class=\"font-weight-bold scoreP rounded\">SCORE <br>0</p>";
    $('.score').html(scoreText);

    if (alert('You\'re a loser man! \n Go Home!\nif you are brave click \'ok\' and play again')) {} else window.location.reload();
  } else scoreing();
}

function recording() {
  record = localStorage.getItem('record');
  var recordText = "<p class=\"font-weight-bold recordP rounded\">RECORD <br>".concat(record, "</p>");
  $('.record').html(recordText);
}

function checkWinner() {
  if (flippedCards >= deck2.length) {
    if (score > record) record = score;
    localStorage.setItem('record', record);

    if (alert("You're a Winner man! \n Your score is ".concat(score, "\nif you are brave click 'ok' and play again"))) {} else window.location.reload();
  }
}
/*
function removeEmtyDiv(){
    if $(col-sm).haschild
}*/


function createTable(myData) {
  //console.log(myData);
  var table = $('#table'); //check if exist rows and columns

  if (myData.rowNum > 0 && myData.colNum > 0) {
    //cycle for create empty rows
    for (var i = 0; i < myData.rowNum; i++) {
      var row = '<br><div class = "row rounded  row' + i + '">';
      $('.row' + i); // cycle for create columns

      for (var j = 0; j < myData.colNum; j++) {
        var col = '<div class = "col-sm rounded d-flex justify-content-center align-items-center col' + j + '"></div><br>';
        row += col;
      }

      row += '<div>'; //fill each row with its columns

      table.append(row);
    }

    fillTable(myData); //startGame();
  }
}

var deck2 = [];

function fillTable(myData) {
  var table = $('#table');

  function shuffle(array) {
    array.sort(function () {
      return Math.random() - 0.5;
    });
  } //clone storage.deck in deck2      


  deck2 = myData.deck.slice(); //shuffle deck2

  shuffle(deck2);

  for (var i = 0; i < myData.deck.length; i++) {
    var rowNum = myData.deck[i].rowPos;
    var colNum = myData.deck[i].colPos;
    var row = table.find('.row' + rowNum);
    var col = row.find('.col' + colNum);
    var randomCardIndex = deck2[i].cardName; //fill table with deck2 (deck2 is a shuffled copy of myData.deck)
    //console.log(randomCardIndex)

    var cardI = myData.deck[randomCardIndex - 1].imgCode;
    var nameOfCard = _.default[cardI];
    var htmlCard = "<div class=\"flip-card d-flex justify-content-center rounded\">\n                <div class=\"flip-card-inner rounded d-flex justify-content-center\">\n                    <div class=\"flip-card-front rounded \">\n                        <img class=\"rounded mx-auto d-block\" src=\"./dorso.e3878d79.png\">\n                    </div>\n                    <div class=\"flip-card-back rounded\">\n                        <img data-cardvalue=\"" + nameOfCard + "\" class=\"rounded mx-auto d-block \" src= ." + nameOfCard + ">\n                    </div>\n                </div>\n            </div>";
    col.append(htmlCard);
  }
}
},{"./img/*.png":"img/*.png"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63262" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/memory-frontend.e31bb0bc.js.map