window.jwplayer = (function (e) {
  function t(n) { if (i[n]) return i[n].exports; const r = i[n] = { exports: {}, id: n, loaded: !1 }; return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports; } const n = window.webpackJsonpjwplayer; window.webpackJsonpjwplayer = function (i, o) { for (var a, s, l = 0, u = []; l < i.length; l++)s = i[l], r[s] && u.push(...r[s]), r[s] = 0; for (a in o)e[a] = o[a]; for (n && n(i, o); u.length;)u.shift().call(null, t); }; var i = {},
    r = { 0: 0 }; return t.e = function (e, n) {
    if (r[e] === 0) return n.call(null, t); if (void 0 !== r[e])r[e].push(n); else {
      r[e] = [n]; let i = document.getElementsByTagName('head')[0],
        o = document.createElement('script'); o.type = 'text/javascript', o.charset = 'utf-8', o.async = !0, o.src = `${t.p}${{ 1: 'provider.hlsjs', 2: 'provider.shaka', 3: 'provider.cast', 4: 'provider.html5', 5: 'provider.flash', 6: 'provider.youtube', 7: 'polyfills.vttrenderer', 8: 'polyfills.promise', 9: 'polyfills.intersection-observer', 10: 'polyfills.base64', 11: 'vttparser' }[e] || e}.js`, i.appendChild(o);
    }
  }, t.m = e, t.c = i, t.p = '', t(0);
}([function (e, t, n) { e.exports = n(168); }, function (e, t, n) {
  let i,
    r; i = [], r = function () {
    var e = {},
      t = Array.prototype,
      n = Object.prototype,
      i = Function.prototype,
      r = t.slice,
      o = t.concat,
      a = n.toString,
      s = n.hasOwnProperty,
      l = t.map,
      u = t.reduce,
      c = t.forEach,
      d = t.filter,
      p = t.every,
      h = t.some,
      f = t.indexOf,
      g = Array.isArray,
      m = Object.keys,
      w = i.bind,
      v = function (e) { return e instanceof v ? e : this instanceof v ? void 0 : new v(e); },
      y = v.each = v.forEach = function (t, n, i) { if (t == null) return t; if (c && t.forEach === c)t.forEach(n, i); else if (t.length === +t.length) { for (var r = 0, o = t.length; r < o; r++) if (n.call(i, t[r], r, t) === e) return; } else for (var a = v.keys(t), r = 0, o = a.length; r < o; r++) if (n.call(i, t[a[r]], a[r], t) === e) return; return t; }; v.map = v.collect = function (e, t, n) { const i = []; return e == null ? i : l && e.map === l ? e.map(t, n) : (y(e, (e, r, o) => { i.push(t.call(n, e, r, o)); }), i); }; const j = 'Reduce of empty array with no initial value'; v.reduce = v.foldl = v.inject = function (e, t, n, i) { let r = arguments.length > 2; if (e == null && (e = []), u && e.reduce === u) return i && (t = v.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t); if (y(e, (e, o, a) => { r ? n = t.call(i, n, e, o, a) : (n = e, r = !0); }), !r) throw new TypeError(j); return n; }, v.find = v.detect = function (e, t, n) { let i; return b(e, (e, r, o) => { if (t.call(n, e, r, o)) return i = e, !0; }), i; }, v.filter = v.select = function (e, t, n) { const i = []; return e == null ? i : d && e.filter === d ? e.filter(t, n) : (y(e, (e, r, o) => { t.call(n, e, r, o) && i.push(e); }), i); }, v.reject = function (e, t, n) { return v.filter(e, (e, i, r) => !t.call(n, e, i, r), n); }, v.compact = function (e) { return v.filter(e, v.identity); }, v.every = v.all = function (t, n, i) { n || (n = v.identity); let r = !0; return t == null ? r : p && t.every === p ? t.every(n, i) : (y(t, (t, o, a) => { if (!(r = r && n.call(i, t, o, a))) return e; }), !!r); }; var b = v.some = v.any = function (t, n, i) { n || (n = v.identity); let r = !1; return t == null ? r : h && t.some === h ? t.some(n, i) : (y(t, (t, o, a) => { if (r || (r = n.call(i, t, o, a))) return e; }), !!r); }; v.size = function (e) { return e == null ? 0 : e.length === +e.length ? e.length : v.keys(e).length; }, v.last = function (e, t, n) { if (e != null) return t == null || n ? e[e.length - 1] : r.call(e, Math.max(e.length - t, 0)); }, v.after = function (e, t) { return function () { if (--e < 1) return t.apply(this, arguments); }; }, v.before = function (e, t) { let n; return function () { return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n; }; }; let E = function (e) { return e == null ? v.identity : v.isFunction(e) ? e : v.property(e); },
      x = function (e) { return function (t, n, i) { const r = {}; return n = E(n), y(t, (o, a) => { const s = n.call(i, o, a, t); e(r, s, o); }), r; }; }; v.groupBy = x((e, t, n) => { v.has(e, t) ? e[t].push(n) : e[t] = [n]; }), v.indexBy = x((e, t, n) => { e[t] = n; }), v.sortedIndex = function (e, t, n, i) { n = E(n); for (var r = n.call(i, t), o = 0, a = e.length; o < a;) { const s = o + a >>> 1; n.call(i, e[s]) < r ? o = s + 1 : a = s; } return o; }; var b = v.some = v.any = function (t, n, i) { n || (n = v.identity); let r = !1; return t == null ? r : h && t.some === h ? t.some(n, i) : (y(t, (t, o, a) => { if (r || (r = n.call(i, t, o, a))) return e; }), !!r); }; v.contains = v.include = function (e, t) { return e != null && (e.length !== +e.length && (e = v.values(e)), v.indexOf(e, t) >= 0); }, v.pluck = function (e, t) { return v.map(e, v.property(t)); }, v.where = function (e, t) { return v.filter(e, v.matches(t)); }, v.findWhere = function (e, t) { return v.find(e, v.matches(t)); }, v.max = function (e, t, n) {
      if (!t && v.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max(...e); let i = -(1 / 0),
        r = -(1 / 0); return y(e, (e, o, a) => { const s = t ? t.call(n, e, o, a) : e; s > r && (i = e, r = s); }), i;
    }, v.difference = function (e) { const n = o.apply(t, r.call(arguments, 1)); return v.filter(e, e => !v.contains(n, e)); }, v.without = function (e) { return v.difference(e, r.call(arguments, 1)); }, v.indexOf = function (e, t, n) {
      if (e == null) return -1; let i = 0,
        r = e.length; if (n) { if (typeof n !== 'number') return i = v.sortedIndex(e, t), e[i] === t ? i : -1; i = n < 0 ? Math.max(0, r + n) : n; } if (f && e.indexOf === f) return e.indexOf(t, n); for (;i < r; i++) if (e[i] === t) return i; return -1;
    }; const k = function () {}; v.bind = function (e, t) {
      let n,
        i; if (w && e.bind === w) return w.apply(e, r.call(arguments, 1)); if (!v.isFunction(e)) throw new TypeError(); return n = r.call(arguments, 2), i = function () { if (!(this instanceof i)) return e.apply(t, n.concat(r.call(arguments))); k.prototype = e.prototype; const o = new k(); k.prototype = null; const a = e.apply(o, n.concat(r.call(arguments))); return Object(a) === a ? a : o; };
    }, v.partial = function (e) { const t = r.call(arguments, 1); return function () { for (var n = 0, i = t.slice(), r = 0, o = i.length; r < o; r++)i[r] === v && (i[r] = arguments[n++]); for (;n < arguments.length;)i.push(arguments[n++]); return e.apply(this, i); }; }, v.once = v.partial(v.before, 2), v.memoize = function (e, t) { const n = {}; return t || (t = v.identity), function () { const i = t.apply(this, arguments); return v.has(n, i) ? n[i] : n[i] = e.apply(this, arguments); }; }, v.delay = function (e, t) { const n = r.call(arguments, 2); return setTimeout(() => e(...n), t); }, v.defer = function (e) { return v.delay(...[e, 1].concat(r.call(arguments, 1))); }, v.throttle = function (e, t, n) {
      let i,
        r,
        o,
        a = null,
        s = 0; n || (n = {}); const l = function () { s = n.leading === !1 ? 0 : v.now(), a = null, o = e.apply(i, r), i = r = null; }; return function () { const u = v.now(); s || n.leading !== !1 || (s = u); const c = t - (u - s); return i = this, r = arguments, c <= 0 ? (clearTimeout(a), a = null, s = u, o = e.apply(i, r), i = r = null) : a || n.trailing === !1 || (a = setTimeout(l, c)), o; };
    }, v.keys = function (e) { if (!v.isObject(e)) return []; if (m) return m(e); const t = []; for (const n in e)v.has(e, n) && t.push(n); return t; }, v.invert = function (e) { for (var t = {}, n = v.keys(e), i = 0, r = n.length; i < r; i++)t[e[n[i]]] = n[i]; return t; }, v.defaults = function (e) { return y(r.call(arguments, 1), (t) => { if (t) for (const n in t) void 0 === e[n] && (e[n] = t[n]); }), e; }, v.extend = function (e) { return y(r.call(arguments, 1), (t) => { if (t) for (const n in t)e[n] = t[n]; }), e; }, v.pick = function (e) {
      let n = {},
        i = o.apply(t, r.call(arguments, 1)); return y(i, (t) => { t in e && (n[t] = e[t]); }), n;
    }, v.omit = function (e) {
      let n = {},
        i = o.apply(t, r.call(arguments, 1)); for (const a in e)v.contains(i, a) || (n[a] = e[a]); return n;
    }, v.clone = function (e) { return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e; }, v.isArray = g || function (e) { return a.call(e) == '[object Array]'; }, v.isObject = function (e) { return e === Object(e); }, y(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], (e) => { v[`is${e}`] = function (t) { return a.call(t) == `[object ${e}]`; }; }), v.isArguments(arguments) || (v.isArguments = function (e) { return !(!e || !v.has(e, 'callee')); }), v.isFunction = function (e) { return typeof e === 'function'; }, v.isFinite = function (e) { return isFinite(e) && !isNaN(parseFloat(e)); }, v.isNaN = function (e) { return v.isNumber(e) && e != +e; }, v.isBoolean = function (e) { return e === !0 || e === !1 || a.call(e) == '[object Boolean]'; }, v.isNull = function (e) { return e === null; }, v.isUndefined = function (e) { return void 0 === e; }, v.has = function (e, t) { return s.call(e, t); }, v.identity = function (e) { return e; }, v.constant = function (e) { return function () { return e; }; }, v.property = function (e) { return function (t) { return t[e]; }; }, v.propertyOf = function (e) { return e == null ? function () {} : function (t) { return e[t]; }; }, v.matches = function (e) { return function (t) { if (t === e) return !0; for (const n in e) if (e[n] !== t[n]) return !1; return !0; }; }, v.now = Date.now || function () { return (new Date()).getTime(); }, v.result = function (e, t) { if (e != null) { const n = e[t]; return v.isFunction(n) ? n.call(e) : n; } }; let A = 0; return v.uniqueId = function (e) { const t = `${++A}`; return e ? e + t : t; }, v;
  }.apply(t, i), !(void 0 !== r && (e.exports = r));
}, function (e, t, n) {
  let i,
    r; i = [n(8), n(1), n(27), n(32), n(23), n(33), n(14), n(60), n(34), n(63), n(141), n(140)], r = function (e, t, n, i, r, o, a, s, l, u, c, d) {
    const p = {}; return p.log = function () { window.console && (typeof console.log === 'object' ? console.log(Array.prototype.slice.call(arguments, 0)) : console.log(...arguments)); }, p.between = function (e, t, n) { return Math.max(Math.min(e, n), t); }, p.foreach = function (e, t) {
      let n,
        i; for (n in e)p.typeOf(e.hasOwnProperty) === 'function' ? e.hasOwnProperty(n) && (i = e[n], t(n, i)) : (i = e[n], t(n, i));
    }, p.indexOf = t.indexOf, p.noop = function () {}, p.seconds = e.seconds, p.prefix = e.prefix, p.suffix = e.suffix, t.extend(p, o, a, l, n, s, i, r, u, c, d), p;
  }.apply(t, i), !(void 0 !== r && (e.exports = r));
}, function (e, t, n) {
  let i,
    r; i = [], r = function () {
    let e = { DRAG: 'drag', DRAG_START: 'dragStart', DRAG_END: 'dragEnd', CLICK: 'click', DOUBLE_CLICK: 'doubleClick', TAP: 'tap', DOUBLE_TAP: 'doubleTap', OVER: 'over', MOVE: 'move', OUT: 'out' },
      t = { COMPLETE: 'complete', ERROR: 'error', JWPLAYER_AD_CLICK: 'adClick', JWPLAYER_AD_COMPANIONS: 'adCompanions', JWPLAYER_AD_COMPLETE: 'adComplete', JWPLAYER_AD_ERROR: 'adError', JWPLAYER_AD_IMPRESSION: 'adImpression', JWPLAYER_AD_META: 'adMeta', JWPLAYER_AD_PAUSE: 'adPause', JWPLAYER_AD_PLAY: 'adPlay', JWPLAYER_AD_SKIPPED: 'adSkipped', JWPLAYER_AD_TIME: 'adTime', JWPLAYER_CAST_AD_CHANGED: 'castAdChanged', JWPLAYER_MEDIA_COMPLETE: 'complete', JWPLAYER_READY: 'ready', JWPLAYER_MEDIA_SEEK: 'seek', JWPLAYER_MEDIA_BEFOREPLAY: 'beforePlay', JWPLAYER_MEDIA_BEFORECOMPLETE: 'beforeComplete', JWPLAYER_MEDIA_BUFFER_FULL: 'bufferFull', JWPLAYER_DISPLAY_CLICK: 'displayClick', JWPLAYER_PLAYLIST_COMPLETE: 'playlistComplete', JWPLAYER_CAST_SESSION: 'cast', JWPLAYER_MEDIA_ERROR: 'mediaError', JWPLAYER_MEDIA_FIRST_FRAME: 'firstFrame', JWPLAYER_MEDIA_PLAY_ATTEMPT: 'playAttempt', JWPLAYER_MEDIA_LOADED: 'loaded', JWPLAYER_MEDIA_SEEKED: 'seeked', JWPLAYER_SETUP_ERROR: 'setupError', JWPLAYER_ERROR: 'error', JWPLAYER_PLAYER_STATE: 'state', JWPLAYER_CAST_AVAILABLE: 'castAvailable', JWPLAYER_MEDIA_BUFFER: 'bufferChange', JWPLAYER_MEDIA_TIME: 'time', JWPLAYER_MEDIA_TYPE: 'mediaType', JWPLAYER_MEDIA_VOLUME: 'volume', JWPLAYER_MEDIA_MUTE: 'mute', JWPLAYER_MEDIA_META: 'meta', JWPLAYER_MEDIA_LEVELS: 'levels', JWPLAYER_MEDIA_LEVEL_CHANGED: 'levelsChanged', JWPLAYER_CONTROLS: 'controls', JWPLAYER_FULLSCREEN: 'fullscreen', JWPLAYER_RESIZE: 'resize', JWPLAYER_PLAYLIST_ITEM: 'playlistItem', JWPLAYER_PLAYLIST_LOADED: 'playlist', JWPLAYER_AUDIO_TRACKS: 'audioTracks', JWPLAYER_AUDIO_TRACK_CHANGED: 'audioTrackChanged', JWPLAYER_LOGO_CLICK: 'logoClick', JWPLAYER_CAPTIONS_LIST: 'captionsList', JWPLAYER_CAPTIONS_CHANGED: 'captionsChanged', JWPLAYER_PROVIDER_CHANGED: 'providerChanged', JWPLAYER_PROVIDER_FIRST_FRAME: 'providerFirstFrame', JWPLAYER_USER_ACTION: 'userAction', JWPLAYER_PROVIDER_CLICK: 'providerClick', JWPLAYER_VIEW_TAB_FOCUS: 'tabFocus', JWPLAYER_CONTROLBAR_DRAGGING: 'scrubbing', JWPLAYER_INSTREAM_CLICK: 'instreamClick' }; return t.touchEvents = e, t;
  }.apply(t, i), !(void 0 !== r && (e.exports = r));
}, function (e, t, n) {
  let i,
    r; i = [n(1)], r = function (e) {
    var t = [],
      n = t.slice,
      i = { on(e, t, n) { if (!o(this, 'on', e, [t, n]) || !t) return this; this._events || (this._events = {}); const i = this._events[e] || (this._events[e] = []); return i.push({ callback: t, context: n }), this; },
        once(t, n, i) {
          if (!o(this, 'once', t, [n, i]) || !n) return this; var r = this,
            a = e.once(function () { r.off(t, a), n.apply(this, arguments); }); return a._callback = n, this.on(t, a, i);
        },
        off(t, n, i) {
          let r,
            a,
            s,
            l,
            u,
            c,
            d,
            p; if (!this._events || !o(this, 'off', t, [n, i])) return this; if (!t && !n && !i) return this._events = void 0, this; for (l = t ? [t] : e.keys(this._events), u = 0, c = l.length; u < c; u++) if (t = l[u], s = this._events[t]) { if (this._events[t] = r = [], n || i) for (d = 0, p = s.length; d < p; d++)a = s[d], (n && n !== a.callback && n !== a.callback._callback || i && i !== a.context) && r.push(a); r.length || delete this._events[t]; } return this;
        },
        trigger(e) {
          if (!this._events) return this; const t = n.call(arguments, 1); if (!o(this, 'trigger', e, t)) return this; let i = this._events[e],
            r = this._events.all; return i && a(i, t, this), r && a(r, arguments, this), this;
        },
        triggerSafe(e) {
          if (!this._events) return this; const t = n.call(arguments, 1); if (!o(this, 'trigger', e, t)) return this; let i = this._events[e],
            r = this._events.all; return i && s(i, t, this, e), r && s(r, arguments, this, e), this;
        } },
      r = /\s+/,
      o = function (e, t, n, i) { if (!n) return !0; if (typeof n === 'object') { for (const o in n)e[t](...[o, n[o]].concat(i)); return !1; } if (r.test(n)) { for (let a = n.split(r), s = 0, l = a.length; s < l; s++)e[t](...[a[s]].concat(i)); return !1; } return !0; },
      a = function (e, t, n) {
        let i,
          r = -1,
          o = e.length,
          a = t[0],
          s = t[1],
          l = t[2]; switch (t.length) { case 0:for (;++r < o;)(i = e[r]).callback.call(i.context || n); return; case 1:for (;++r < o;)(i = e[r]).callback.call(i.context || n, a); return; case 2:for (;++r < o;)(i = e[r]).callback.call(i.context || n, a, s); return; case 3:for (;++r < o;)(i = e[r]).callback.call(i.context || n, a, s, l); return; default:for (;++r < o;)(i = e[r]).callback.apply(i.context || n, t); }
      },
      s = function (e, t, n, i) { for (var r, o = -1, a = e.length; ++o < a;) try { r = e[o], r.callback.apply(r.context || n, t); } catch (s) { console.log(`Error in "${i}" event handler:`, s); } }; return i;
  }.apply(t, i), !(void 0 !== r && (e.exports = r));
}, function (e, t, n) {
  let i,
    r; i = [], r = function () { return { BUFFERING: 'buffering', IDLE: 'idle', COMPLETE: 'complete', PAUSED: 'paused', PLAYING: 'playing', ERROR: 'error', LOADING: 'loading', STALLED: 'stalled' }; }.apply(t, i), !(void 0 !== r && (e.exports = r));
},, function (e, t, n) {
    let i,
      r; i = [n(4), n(3), n(1), n(2)], r = function (e, t, n, i) {
      function r(e, t) { return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0][`page${t}`] : e[`page${t}`]; } function o(e) { const t = e || window.event; return e instanceof MouseEvent && ('which' in t ? t.which === 3 : 'button' in t && t.button === 2); } function a(e, t, n) { let i; return i = t instanceof MouseEvent || !t.touches && !t.changedTouches ? t : t.touches && t.touches.length ? t.touches[0] : t.changedTouches[0], { type: e, target: t.target, currentTarget: n, pageX: i.pageX, pageY: i.pageY }; } function s(e) { (e instanceof MouseEvent || e instanceof window.TouchEvent) && (e.preventManipulation && e.preventManipulation(), e.preventDefault && e.preventDefault()); } let l = t.touchEvents,
        u = 'PointerEvent' in window,
        c = 'ontouchstart' in window,
        d = !(u || c && i.isMobile()),
        p = i.isFF() && i.isOSX(),
        h = function (e, t) {
          function i(e) { e.pointerType !== 'touch' && v(l.OVER, e); } function c(e) { e.pointerType !== 'touch' && v(l.MOVE, e); } function h(t) { (d || u && t.pointerType !== 'touch' && !e.contains(document.elementFromPoint(t.x, t.y))) && v(l.OUT, t); } function f(e, t, n) { e.removeEventListener(t, n), e.addEventListener(t, n); } function g(n) { y = n.target, x = r(n, 'X'), k = r(n, 'Y'), o(n) || (n.type === 'pointerdown' && n.isPrimary ? (t.preventScrolling && (j = n.pointerId, e.setPointerCapture(j)), f(e, 'pointermove', m), f(e, 'pointercancel', w), n.pointerType === 'mouse' && y.nodeName === 'OBJECT' ? f(document, 'mouseup', w) : f(e, 'pointerup', w)) : n.type === 'mousedown' ? (f(document, 'mousemove', m), p && n.target.nodeName.toLowerCase() === 'object' ? f(e, 'click', w) : f(document, 'mouseup', w)) : n.type === 'touchstart' && (f(y, 'touchmove', m), f(y, 'touchcancel', w), f(y, 'touchend', w)), t.preventScrolling && s(n)); } function m(e) {
            const n = 6; if (E)v(l.DRAG, e); else {
              let i = r(e, 'X'),
                o = r(e, 'Y'),
                a = i - x,
                u = o - k; a * a + u * u > n * n && (v(l.DRAG_START, e), E = !0, v(l.DRAG, e));
            }t.preventScrolling && s(e);
          } function w(n) { const i = n.type === 'pointerup' || n.type === 'pointercancel'; i && t.preventScrolling && e.releasePointerCapture(j), e.removeEventListener('pointermove', m), e.removeEventListener('pointercancel', w), e.removeEventListener('pointerup', w), document.removeEventListener('mousemove', m), document.removeEventListener('mouseup', w), y.removeEventListener('touchmove', m), y.removeEventListener('touchcancel', w), y.removeEventListener('touchend', w), E ? v(l.DRAG_END, n) : t.directSelect && n.target !== e || n.type.indexOf('cancel') !== -1 || (n.type === 'mouseup' || n.type === 'click' || i && n.pointerType === 'mouse' ? v(l.CLICK, n) : (v(l.TAP, n), n.type === 'touchend' && s(n))), y = null, E = !1; } function v(e, i) { let r; if (t.enableDoubleTap && (e === l.CLICK || e === l.TAP)) if (n.now() - A < _) { const o = e === l.CLICK ? l.DOUBLE_CLICK : l.DOUBLE_TAP; r = a(o, i, b), C.trigger(o, r), A = 0; } else A = n.now(); r = a(e, i, b), C.trigger(e, r); } var y,
            j,
            b = e,
            E = !1,
            x = 0,
            k = 0,
            A = 0,
            _ = 300; t = t || {}, u ? (e.addEventListener('pointerdown', g), t.useHover && (e.addEventListener('pointerover', i), e.addEventListener('pointerout', h)), t.useMove && e.addEventListener('pointermove', c)) : (d && (e.addEventListener('mousedown', g), t.useHover && (e.addEventListener('mouseover', i), e.addEventListener('mouseout', h)), t.useMove && e.addEventListener('mousemove', c)), e.addEventListener('touchstart', g)); var C = this; return this.triggerEvent = v, this.destroy = function () { e.removeEventListener('touchstart', g), e.removeEventListener('mousedown', g), y && (y.removeEventListener('touchmove', m), y.removeEventListener('touchcancel', w), y.removeEventListener('touchend', w), y = null), u && (t.preventScrolling && e.releasePointerCapture(j), e.removeEventListener('pointerover', i), e.removeEventListener('pointerdown', g), e.removeEventListener('pointermove', m), e.removeEventListener('pointermove', c), e.removeEventListener('pointercancel', w), e.removeEventListener('pointerout', h), e.removeEventListener('pointerup', w)), e.removeEventListener('click', w), e.removeEventListener('mouseover', i), e.removeEventListener('mousemove', c), e.removeEventListener('mouseout', h), document.removeEventListener('mousemove', m), document.removeEventListener('mouseup', w); }, this;
        }; return n.extend(h.prototype, e), h;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1)], r = function (e) {
      function t(e) { return !!/[\(,]format=m3u8-/i.test(e) && 'm3u8'; } let n = function (e) { return e.replace(/^\s+|\s+$/g, ''); },
        i = function (e, t, n) { for (e = `${e}`, n = n || '0'; e.length < t;)e = n + e; return e; },
        r = function (e, t) { for (let n = 0; n < e.attributes.length; n++) if (e.attributes[n].name && e.attributes[n].name.toLowerCase() === t.toLowerCase()) return e.attributes[n].value.toString(); return ''; },
        o = function (e) { if (!e || e.substr(0, 4) === 'rtmp') return ''; const n = t(e); return n || (e = e.split('?')[0].split('#')[0], e.lastIndexOf('.') > -1 ? e.substr(e.lastIndexOf('.') + 1, e.length).toLowerCase() : void 0); },
        a = function (e) {
          let t = parseInt(e / 3600),
            n = parseInt(e / 60) % 60,
            r = e % 60; return `${i(t, 2)}:${i(n, 2)}:${i(r.toFixed(3), 6)}`;
        },
        s = function (t, n) {
          if (e.isNumber(t)) return t; t = t.replace(',', '.'); let i = t.split(':'),
            r = i.length,
            o = 0; if (t.slice(-1) === 's')o = parseFloat(t); else if (t.slice(-1) === 'm')o = 60 * parseFloat(t); else if (t.slice(-1) === 'h')o = 3600 * parseFloat(t); else if (r > 1) { let a = r - 1; r === 4 && (n && (o = parseFloat(i[a]) / n), a -= 1), o += parseFloat(i[a]), o += 60 * parseFloat(i[a - 1]), r >= 3 && (o += 3600 * parseFloat(i[a - 2])); } else o = parseFloat(t); return o;
        },
        l = function (t, n) { return e.map(t, e => n + e); },
        u = function (t, n) { return e.map(t, e => e + n); }; return { trim: n, pad: i, xmlAttribute: r, extension: o, hms: a, seconds: s, suffix: u, prefix: l };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) { e.exports = n(96).default; },, function (e, t) {
    function n(e) { return c[e]; } function i(e) { for (let t = 1; t < arguments.length; t++) for (const n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]); return e; } function r(e, t) { for (let n = 0, i = e.length; n < i; n++) if (e[n] === t) return n; return -1; } function o(e) { if (typeof e !== 'string') { if (e && e.toHTML) return e.toHTML(); if (e == null) return ''; if (!e) return `${e}`; e = `${e}`; } return p.test(e) ? e.replace(d, n) : e; } function a(e) { return !e && e !== 0 || !(!g(e) || e.length !== 0); } function s(e) { const t = i({}, e); return t._parent = e, t; } function l(e, t) { return e.path = t, e; } function u(e, t) { return (e ? `${e}.` : '') + t; }t.__esModule = !0, t.extend = i, t.indexOf = r, t.escapeExpression = o, t.isEmpty = a, t.createFrame = s, t.blockParams = l, t.appendContextPath = u; var c = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '`': '&#x60;', '=': '&#x3D;' },
      d = /[&<>"'`=]/g,
      p = /[&<>"'`=]/,
      h = Object.prototype.toString; t.toString = h; let f = function (e) { return typeof e === 'function'; }; f(/x/) && (t.isFunction = f = function (e) { return typeof e === 'function' && h.call(e) === '[object Function]'; }), t.isFunction = f; var g = Array.isArray || function (e) { return !(!e || typeof e !== 'object') && h.call(e) === '[object Array]'; }; t.isArray = g;
  },, function (e, t, n) {
    let i,
      r; i = [n(2), n(3), n(5), n(1)], r = function (e, t, n, i) {
      let r = e.noop,
        o = i.constant(!1),
        a = { supports: o,
          play: r,
          load: r,
          stop: r,
          volume: r,
          mute: r,
          seek: r,
          resize: r,
          remove: r,
          destroy: r,
          setVisibility: r,
          setFullscreen: o,
          getFullscreen: r,
          getContainer: r,
          setContainer: o,
          getName: r,
          getQualityLevels: r,
          getCurrentQuality: r,
          setCurrentQuality: r,
          getAudioTracks: r,
          getCurrentAudioTrack: r,
          setCurrentAudioTrack: r,
          checkComplete: r,
          setControls: r,
          attachMedia: r,
          detachMedia: r,
          setState(e) { const i = this.state || n.IDLE; this.state = e, e !== i && this.trigger(t.JWPLAYER_PLAYER_STATE, { newstate: e }); },
          sendMediaType(e) {
            let n = e[0].type,
              i = n === 'oga' || n === 'aac' || n === 'mp3' || n === 'mpeg' || n === 'vorbis'; this.trigger(t.JWPLAYER_MEDIA_TYPE, { mediaType: i ? 'audio' : 'video' });
          } }; return a;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1)], r = function (e) {
      let t = {},
        n = { TIT2: 'title', TT2: 'title', WXXX: 'url', TPE1: 'artist', TP1: 'artist', TALB: 'album', TAL: 'album' }; return t.utf8ArrayToStr = function (e, t) {
        let n,
          i,
          r,
          o,
          a,
          s; for (n = '', r = e.length, i = t || 0; i < r;) if (o = e[i++], o !== 0 && o !== 3) switch (o >> 4) { case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n += String.fromCharCode(o); break; case 12:case 13:a = e[i++], n += String.fromCharCode((31 & o) << 6 | 63 & a); break; case 14:a = e[i++], s = e[i++], n += String.fromCharCode((15 & o) << 12 | (63 & a) << 6 | (63 & s) << 0); } return n;
      }, t.utf16BigEndianArrayToStr = function (e, t) {
        let n,
          i,
          r; for (n = '', r = e.length - 1, i = t || 0; i < r;)e[i] === 254 && e[i + 1] === 255 || (n += String.fromCharCode((e[i] << 8) + e[i + 1])), i += 2; return n;
      }, t.syncSafeInt = function (e) { const n = t.arrayToInt(e); return 127 & n | (32512 & n) >> 1 | (8323072 & n) >> 2 | (2130706432 & n) >> 3; }, t.arrayToInt = function (e) { for (var t = '0x', n = 0; n < e.length; n++)t += e[n].toString(16); return parseInt(t); }, t.parseID3 = function (i) {
        return e.reduce(i, (i, r) => {
          if (!('value' in r) && 'data' in r && r.data instanceof ArrayBuffer) {
            let o = r,
              a = new Uint8Array(o.data),
              s = a.length; r = { value: { key: '', data: '' } }; for (let l = 10; l < 14 && l < a.length && a[l] !== 0;)r.value.key += String.fromCharCode(a[l]), l++; let u = 19,
              c = a[u]; c !== 3 && c !== 0 || (c = a[++u], s--); let d = 0; if (c !== 1 && c !== 2) for (let p = u + 1; p < s; p++) if (a[p] === 0) { d = p - u; break; } if (d > 0) {
              const h = t.utf8ArrayToStr(a.subarray(u, u += d), 0); if (r.value.key === 'PRIV') {
                if (h === 'com.apple.streaming.transportStreamTimestamp') {
                  let f = 1 & t.syncSafeInt(a.subarray(u, u += 4)),
                    g = t.syncSafeInt(a.subarray(u, u += 4)); f && (g += 4294967296), r.value.data = g;
                } else r.value.data = t.utf8ArrayToStr(a, u + 1); r.value.info = h;
              } else r.value.info = h, r.value.data = t.utf8ArrayToStr(a, u + 1);
            } else { const m = a[u]; m === 1 || m === 2 ? r.value.data = t.utf16BigEndianArrayToStr(a, u + 1) : r.value.data = t.utf8ArrayToStr(a, u + 1); }
          } if (n.hasOwnProperty(r.value.key) && (i[n[r.value.key]] = r.value.data), r.value.info) { let w = i[r.value.key]; e.isObject(w) || (w = {}, i[r.value.key] = w), w[r.value.info] = r.value.data; } else i[r.value.key] = r.value.data; return i;
        }, {});
      }, t;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(3), n(4), n(1)], r = function (e, t, n) {
      let i = {},
        r = { NEW: 0, LOADING: 1, ERROR: 2, COMPLETE: 3 },
        o = function (o, a) {
          function s(t) { c = r.ERROR, u.trigger(e.ERROR, t); } function l(t) { c = r.COMPLETE, u.trigger(e.COMPLETE, t); } var u = n.extend(this, t),
            c = r.NEW; this.addEventListener = this.on, this.removeEventListener = this.off, this.makeStyleLink = function (e) { const t = document.createElement('link'); return t.type = 'text/css', t.rel = 'stylesheet', t.href = e, t; }, this.makeScriptTag = function (e) { const t = document.createElement('script'); return t.src = e, t; }, this.makeTag = a ? this.makeStyleLink : this.makeScriptTag, this.load = function () {
            if (c === r.NEW) {
              const t = i[o]; if (t && (c = t.getStatus(), c < 2)) return t.on(e.ERROR, s), void t.on(e.COMPLETE, l); let n = document.getElementsByTagName('head')[0] || document.documentElement,
                u = this.makeTag(o),
                d = !1; u.onload = u.onreadystatechange = function (e) { d || this.readyState && this.readyState !== 'loaded' && this.readyState !== 'complete' || (d = !0, l(e), u.onload = u.onreadystatechange = null, n && u.parentNode && !a && n.removeChild(u)); }, u.onerror = s, n.insertBefore(u, n.firstChild), c = r.LOADING, i[o] = this;
            }
          }, this.getStatus = function () { return c; };
        }; return o.loaderstatus = r, o;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1)], r = function (e) {
      let t = 'free',
        n = 'premium',
        i = 'enterprise',
        r = 'platinum',
        o = 'ads',
        a = 'unlimited',
        s = 'trial',
        l = { setup: [t, n, i, o, a, s, r], dash: [n, i, o, a, s, r], drm: [i, o, a, s], hls: [n, o, i, a, s, r], ads: [o, a, s, r, i], casting: [n, i, o, a, s, r], jwpsrv: [t, n, i, o, s, r] },
        u = function (t) { return function (n) { return e.contains(l[n], t); }; }; return u;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t) {
    function n(e, t) {
      let r = t && t.loc,
        o = void 0,
        a = void 0; r && (o = r.start.line, a = r.start.column, e += ` - ${o}:${a}`); for (let s = Error.prototype.constructor.call(this, e), l = 0; l < i.length; l++) this[i[l]] = s[i[l]]; Error.captureStackTrace && Error.captureStackTrace(this, n), r && (this.lineNumber = o, this.column = a);
    }t.__esModule = !0; var i = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack']; n.prototype = new Error(), t.default = n, e.exports = t.default;
  }, function (e, t, n) {
    let i,
      r; i = [], r = function () {
      return { createId(e, t) {
        let n,
          i = e.kind || 'cc'; return n = e.default || e.defaulttrack ? 'default' : e._id || e.file || e.name || e.label || i + t;
      },
      createLabel(e, t) { let n = e.label || e.name || e.language; return n || (n = 'Unknown CC', t += 1, t > 1 && (n += ` [${t}]`)), { label: n, unknownCount: t }; } };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(2), n(20), n(30), n(127), n(46)], r = function (e, t, i, r, o, a) {
      function s(e, t, n, a) {
        let s,
          u,
          c = e.responseXML ? e.responseXML.firstChild : null; if (c) for (i.localName(c) === 'xml' && (c = c.nextSibling); c.nodeType === c.COMMENT_NODE;)c = c.nextSibling; try { if (c && i.localName(c) === 'tt')s = o(e.responseXML), u = this.convertToVTTCues(s), delete t.xhr, n(u); else { const d = e.responseText; d.indexOf('WEBVTT') >= 0 ? l(d, t, n, a) : (s = r(d), u = this.convertToVTTCues(s), delete t.xhr, n(u)); } } catch (p) { delete t.xhr, a(p); }
      } function l(e, t, i, r) {
        n.e(11, (require) => {
          let o = n(47),
            a = new o(window),
            s = []; a.oncue = function (e) { s.push(e); }, a.onflush = function () { delete t.xhr, i(s); }; try { a.parse(e).flush(); } catch (l) { delete t.xhr, r(l); }
        });
      } const u = {}; return u.loadFile = function (e, n, i) { e.xhr = t.ajax(e.file, (t) => { s.call(u, t, e, n, i); }, i); }, u.cancelXhr = function (t) { e.each(t, (e) => { const t = e.xhr; t && (t.onload = null, t.onreadystatechange = null, t.onerror = null, 'abort' in t && t.abort()), delete e.xhr; }); }, u.convertToVTTCues = function (t) { const n = e.map(t, e => new a(e.begin, e.end, e.text)); return n; }, u;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(8)], r = function (e) { return { localName(e) { return e ? e.localName ? e.localName : e.baseName ? e.baseName : '' : ''; }, textContent(t) { return t ? t.textContent ? e.trim(t.textContent) : t.text ? e.trim(t.text) : '' : ''; }, getChildNode(e, t) { return e.childNodes[t]; }, numChildren(e) { return e.childNodes ? e.childNodes.length : 0; } }; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(131), n(132), n(52), n(26)], r = function (e, t, n, i) {
      let r = {},
        o = {},
        a = function (n, i) { return o[n] = new e(new t(r), i), o[n]; },
        s = function (e, t, o, a) { const s = i.getPluginName(e); r[s] || (r[s] = new n(e)), r[s].registerPlugin(e, t, o, a); }; return { loadPlugins: a, registerPlugin: s };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [], r = function () { return { repo: 'http://ssl.p.jwpcdn.com/player/v/', SkinsIncluded: ['seven'], SkinsLoadable: ['beelden', 'bekle', 'five', 'glow', 'roundster', 'six', 'stormtrooper', 'vapor'], dvrSeekLimit: -25 }; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(8), n(68)], r = function (e, t) {
      function n(e) { e = e.split('-'); for (let t = 1; t < e.length; t++)e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1); return e.join(''); } function i(t, n, i) { if (n === '' || void 0 === n || n === null) return ''; const r = i ? ' !important' : ''; return typeof n === 'string' && isNaN(n) ? /png|gif|jpe?g/i.test(n) && n.indexOf('url') < 0 ? `url(${n})` : n + r : n === 0 || t === 'z-index' || t === 'opacity' ? `${n}${r}` : /color/i.test(t) ? `#${e.pad(n.toString(16).replace(/^0x/i, ''), 6)}${r}` : `${Math.ceil(n)}px${r}`; } var r = function (e, n, i) { i = i || 'all-players'; let r = ''; if (typeof n === 'object') { const a = document.createElement('div'); o(a, n), r = `{${a.style.cssText}}`; } else typeof n === 'string' && (r = n); t.style([[e, e + r]], i); },
        o = function (e, t) {
          if (void 0 !== e && e !== null) {
            void 0 === e.length && (e = [e]); let r,
              o = {}; for (r in t)o[r] = i(r, t[r]); for (let a = 0; a < e.length; a++) {
              var s,
                l = e[a]; if (void 0 !== l && l !== null) for (r in o)s = n(r), l.style[s] !== o[r] && (l.style[s] = o[r]);
            }
          }
        },
        a = function (e, t) { o(e, { transform: t, webkitTransform: t, msTransform: t, mozTransform: t, oTransform: t }); },
        s = function (e, t) { let n = 'rgb'; e ? (e = String(e).replace('#', ''), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2])) : e = '000000'; const i = [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)]; return void 0 !== t && t !== 100 && (n += 'a', i.push(t / 100)), `${n}(${i.join(',')})`; }; return { css: r, style: o, clearCss: t.clear, transform: a, hexToRgba: s };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [], r = function () { return '7.8.4+commercial_v7-8-4.142.commercial.af0348.jwplayer.f0b3db.freewheel.32b252.googima.6d6a6f.vast.e14071.analytics.5d9a64.plugin-gapro.7e936b.plugin-related.940118.plugin-sharing.fc6359.vr-plugin.5ca0dc.hls.js.'; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(39), n(123), n(1), n(4), n(139), n(3), n(5)], r = function (e, t, n, i, r, o, a, s) {
      var l = function () {
          function o(e, t) { const n = i.extend({}, t, { type: e }); switch (e) { case 'flashThrottle':var r = t.state !== 'resume'; this.set('flashThrottle', r), this.set('flashBlocked', r); break; case 'flashBlocked':return void this.set('flashBlocked', !0); case 'flashUnblocked':return void this.set('flashBlocked', !1); case 'volume':return void this.set(e, t[e]); case 'mute':return void (this.get('autostartMuted') || this.set(e, t[e])); case a.JWPLAYER_MEDIA_TYPE:return void (this.mediaModel.get('mediaType') !== t.mediaType && (this.mediaModel.set('mediaType', t.mediaType), this.mediaController.trigger(e, n))); case a.JWPLAYER_PLAYER_STATE:return void this.mediaModel.set('state', t.newstate); case a.JWPLAYER_MEDIA_BUFFER:this.set('buffer', t.bufferPercent); case a.JWPLAYER_MEDIA_META:var o = t.duration; i.isNumber(o) && !i.isNaN(o) && (this.mediaModel.set('duration', o), this.set('duration', o)); break; case a.JWPLAYER_MEDIA_BUFFER_FULL:this.mediaModel.get('playAttempt') ? this.playVideo() : this.mediaModel.on('change:playAttempt', function () { this.playVideo(); }, this); break; case a.JWPLAYER_MEDIA_TIME:this.mediaModel.set('position', t.position), this.set('position', t.position), i.isNumber(t.duration) && (this.mediaModel.set('duration', t.duration), this.set('duration', t.duration)); break; case a.JWPLAYER_PROVIDER_CHANGED:this.set('provider', d.getName()); break; case a.JWPLAYER_MEDIA_LEVELS:this.setQualityLevel(t.currentQuality, t.levels), this.mediaModel.set('levels', t.levels); break; case a.JWPLAYER_MEDIA_LEVEL_CHANGED:this.setQualityLevel(t.currentQuality, t.levels), this.persistQualityLevel(t.currentQuality, t.levels); break; case a.JWPLAYER_AUDIO_TRACKS:this.setCurrentAudioTrack(t.currentTrack, t.tracks), this.mediaModel.set('audioTracks', t.tracks); break; case a.JWPLAYER_AUDIO_TRACK_CHANGED:this.setCurrentAudioTrack(t.currentTrack, t.tracks); break; case 'subtitlesTrackChanged':this.persistVideoSubtitleTrack(t.currentTrack, t.tracks); break; case 'visualQuality':var s = i.extend({}, t); this.mediaModel.set('visualQuality', s); break; case 'autoplayFailed':this.set('autostartFailed', !0); } this.mediaController.trigger(e, n); } function l() { return !!e.isIOS() && !(e.isIOS(6) || e.isIOS(7) || e.isIOS(8) || e.isIOS(9)); } let c,
            d,
            p = this,
            h = e.noop; this.mediaController = i.extend({}, r), this.mediaModel = new u(), n.model(this), this.set('mediaModel', this.mediaModel), this.setup = function (e) { return i.extend(this.attributes, e, { item: 0, state: s.IDLE, flashBlocked: !1, fullscreen: !1, scrubbing: !1, duration: 0, position: 0, buffer: 0 }), this.updateProviders(), this; }, this.getConfiguration = function () { return i.omit(this.clone(), ['mediaModel']); }, this.updateProviders = function () { c = new t(this.getConfiguration()); }, this.setQualityLevel = function (e, t) { e > -1 && t.length > 1 && d.getName().name !== 'youtube' && this.mediaModel.set('currentLevel', parseInt(e)); }, this.persistQualityLevel = function (e, t) {
            let n = t[e] || {},
              i = n.label; this.set('qualityLabel', i);
          }, this.setCurrentAudioTrack = function (e, t) { e > -1 && t.length > 0 && e < t.length && this.mediaModel.set('currentAudioTrack', parseInt(e)); }, this.onMediaContainer = function () { const e = this.get('mediaContainer'); h.setContainer(e); }, this.changeVideoProvider = function (e) {
            if (this.off('change:mediaContainer', this.onMediaContainer), d && (d.off(null, null, this), d.getContainer() && d.remove(), delete d.instreamMode), !e) return d = h = e, void this.set('provider', void 0); h = new e(p.get('id'), p.getConfiguration());
            const t = this.get('mediaContainer'); t ? h.setContainer(t) : this.once('change:mediaContainer', this.onMediaContainer), this.set('provider', h.getName()), h.getName().name.indexOf('flash') === -1 && (this.set('flashThrottle', void 0), this.set('flashBlocked', !1)), d = h, d.volume(p.get('volume')), d.mute(this.autoStartOnMobile() || p.get('mute')), d.on('all', o, this), this.get('instreamMode') === !0 && (d.instreamMode = !0), this.set('renderCaptionsNatively', d.renderNatively);
          }, this.destroy = function () { this.off(), d && (d.off(null, null, this), d.destroy()); }, this.getVideo = function () { return d; }, this.setFullscreen = function (e) { e = !!e, e !== p.get('fullscreen') && p.set('fullscreen', e); }, this.chooseProvider = function (e) { return c.choose(e).provider; }, this.setItemIndex = function (e) { const t = this.get('playlist'); e = parseInt(e, 10) || 0, e = (e + t.length) % t.length, this.set('item', e), this.set('playlistItem', t[e]), this.setActiveItem(t[e]); }, this.setActiveItem = function (t) { this.mediaModel.off(), this.mediaModel = new u(), this.set('mediaModel', this.mediaModel), this.set('position', t.starttime || 0), this.set('minDvrWindow', t.minDvrWindow), this.set('duration', t.duration && e.seconds(t.duration) || 0), this.setProvider(t); }, this.setProvider = function (e) { const t = e && e.sources && e.sources[0]; if (void 0 !== t) { const n = this.chooseProvider(t); n && h instanceof n || p.changeVideoProvider(n), h && (h.init && h.init(e), this.trigger('itemReady', e)); } }, this.getProviders = function () { return c; }, this.resetProvider = function () { h = null; }, this.setVolume = function (e) { e = Math.round(e), this.set('volume', e), d && d.volume(e); const t = e === 0; t !== this.get('mute') && this.setMute(t); }, this.setMute = function (t) { if (e.exists(t) || (t = !(this.get('autostartMuted') || this.get('mute'))), this.set('mute', t), d && d.mute(t), !t) { const n = Math.max(10, this.get('volume')); this.set('autostartMuted', !1), this.setVolume(n); } }, this.loadVideo = function (t) { if (!t) { const n = this.get('item'); t = this.get('playlist')[n]; } this.set('position', t.starttime || 0), this.set('duration', t.duration && e.seconds(t.duration) || 0), this.mediaModel.set('playAttempt', !0), this.mediaController.trigger(a.JWPLAYER_MEDIA_PLAY_ATTEMPT, { playReason: this.get('playReason') }), d.load(t); }, this.stopVideo = function () { d && d.stop(); }, this.playVideo = function () { d.play(); }, this.persistCaptionsTrack = function () { const e = this.get('captionsTrack'); e ? this.set('captionLabel', e.name) : this.set('captionLabel', 'Off'); }, this.setVideoSubtitleTrack = function (e, t) { this.set('captionsIndex', e), e && t && e <= t.length && t[e - 1].data && this.set('captionsTrack', t[e - 1]), d && d.setSubtitlesTrack && d.setSubtitlesTrack(e); }, this.persistVideoSubtitleTrack = function (e, t) { this.setVideoSubtitleTrack(e, t), this.persistCaptionsTrack(); }, this.setNextUp = function (e) { this.set('nextUp', e); }, this.autoStartOnMobile = function () { return this.get('autostart') && !this.get('sdkplatform') && (l() && e.isSafari() || e.isAndroid() && e.isChrome()) && (!this.get('advertising') || this.get('advertising').autoplayadsmuted); };
        },
        u = l.MediaModel = function () { this.set('state', s.IDLE); }; return i.extend(l.prototype, o), i.extend(u.prototype, o), l;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(8)], r = function (e) {
      let t = {},
        n = t.pluginPathType = { ABSOLUTE: 0, RELATIVE: 1, CDN: 2 }; return t.getPluginPathType = function (t) {
        if (typeof t === 'string') {
          t = t.split('?')[0]; const i = t.indexOf('://'); if (i > 0) return n.ABSOLUTE; let r = t.indexOf('/'),
            o = e.extension(t); return !(i < 0 && r < 0) || o && isNaN(o) ? n.RELATIVE : n.CDN;
        }
      }, t.getPluginName = function (e) { return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, '$2'); }, t.getPluginVersion = function (e) { return e.replace(/[^-]*-?([^\.]*).*$/, '$1'); }, t;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1)], r = function (e) {
      function t(e) { return function () { return i(e); }; } var n = {},
        i = e.memoize((e) => { const t = navigator.userAgent.toLowerCase(); return t.match(e) !== null; }),
        r = n.isInt = function (e) { return parseFloat(e) % 1 === 0; }; n.isFlashSupported = function () { const e = n.flashVersion(); return e && e >= 11.2; }, n.isFF = t(/gecko\//i), n.isIPod = t(/iP(hone|od)/i), n.isIPad = t(/iPad/i), n.isSafari602 = t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i), n.isOSX = t(/Mac OS X/i); let o = n.isEdge = function (e) { return i(e ? new RegExp(`\\sedge\\/${e}`, 'i') : /\sEdge\/\d+/i); },
        a = n.isIETrident = t(/trident\/.+rv:\s*11/i),
        s = n.isMSIE = function (e) { return e ? (e = parseFloat(e).toFixed(1), i(new RegExp(`msie\\s*${e}`, 'i'))) : i(/msie/i); }; n.isChrome = function () { return i(/\s(?:Chrome|CriOS)\//i) && !n.isEdge(); }, n.isIE = function (e) { return e ? (e = parseFloat(e).toFixed(1), e >= 12 ? o(e) : e >= 11 ? a() : s(e)) : o() || a() || s(); }, n.isSafari = function () { return i(/safari/i) && !i(/chrome/i) && !i(/crios/i) && !i(/chromium/i) && !i(/android/i); }; const l = n.isIOS = function (e) { return i(e ? new RegExp(`iP(hone|ad|od).+\\s(OS\\s${e}|.*\\sVersion/${e})`, 'i') : /iP(hone|ad|od)/i); }; n.isAndroidNative = function (e) { return u(e, !0); }; var u = n.isAndroid = function (e, t) { return !(t && i(/chrome\/[123456789]/i) && !i(/chrome\/18/)) && (e ? (r(e) && !/\./.test(e) && (e = `${e}.`), i(new RegExp(`Android\\s*${e}`, 'i'))) : i(/Android/i)); }; return n.isMobile = function () { return l() || u(); }, n.isIframe = function () { return window.frameElement && window.frameElement.nodeName === 'IFRAME'; }, n.flashVersion = function () {
        if (n.isAndroid()) return 0; let e,
          t = navigator.plugins; if (t && (e = t['Shockwave Flash'], e && e.description)) return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/, '$1')); if (typeof window.ActiveXObject !== 'undefined') { try { if (e = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash')) return parseFloat(e.GetVariable('$version').split(' ')[1].replace(/\s*,\s*/, '.')); } catch (i) { return 0; } return e; } return 0;
      }, n;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [], r = function () {
      let e = window.chrome,
        t = {}; return t.NS = 'urn:x-cast:com.longtailvideo.jwplayer', t.debug = !1, t.availability = null, t.available = function (n) { n = n || t.availability; let i = 'available'; return e && e.cast && e.cast.ReceiverAvailability && (i = e.cast.ReceiverAvailability.AVAILABLE), n === i; }, t.log = function () { if (t.debug) { const e = Array.prototype.slice.call(arguments, 0); console.log(...e); } }, t.error = function () { const e = Array.prototype.slice.call(arguments, 0); console.error(...e); }, t;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(5)], r = function (e) {
      function t(t) { return t === e.COMPLETE || t === e.ERROR ? e.IDLE : t; } return function (e, n, i) {
        if (n = t(n), i = t(i), n !== i) {
          let r = n.replace(/(?:ing|d)$/, ''),
            o = { type: r, newstate: n, oldstate: i, reason: e.mediaModel.get('state') }; r === 'play' ? o.playReason = e.get('playReason') : r === 'pause' && (o.pauseReason = e.get('pauseReason')), this.trigger(r, o);
        }
      };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(8)], r = function (e, t) {
      function n(e) {
        let t = {},
          n = e.split('\r\n'); n.length === 1 && (n = e.split('\n')); let r = 1; if (n[0].indexOf(' --> ') > 0 && (r = 0), n.length > r + 1 && n[r + 1]) {
          let o = n[r],
            a = o.indexOf(' --> '); a > 0 && (t.begin = i(o.substr(0, a)), t.end = i(o.substr(a + 5)), t.text = n.slice(r + 1).join('\r\n'));
        } return t;
      } var i = e.seconds; return function (e) { const i = []; e = t.trim(e); let r = e.split('\r\n\r\n'); r.length === 1 && (r = e.split('\n\n')); for (let o = 0; o < r.length; o++) if (r[o] !== 'WEBVTT') { const a = n(r[o]); a.text && i.push(a); } return i; };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(51), n(130)], r = function (e, t, n) { const i = { sources: [], tracks: [], minDvrWindow: 120 }; return function (r) { r = r || {}, e.isArray(r.tracks) || delete r.tracks; const o = e.extend({}, i, r); e.isObject(o.sources) && !e.isArray(o.sources) && (o.sources = [t(o.sources)]), e.isArray(o.sources) && o.sources.length !== 0 || (r.levels ? o.sources = r.levels : o.sources = [t(r)]); for (let a = 0; a < o.sources.length; a++) { const s = o.sources[a]; if (s) { const l = s.default; l ? s.default = l.toString() === 'true' : s.default = !1, o.sources[a].label || (o.sources[a].label = a.toString()), o.sources[a] = t(o.sources[a]); } } return o.sources = e.compact(o.sources), e.isArray(o.tracks) || (o.tracks = []), e.isArray(o.captions) && (o.tracks = o.tracks.concat(o.captions), delete o.captions), o.tracks = e.compact(e.map(o.tracks, n)), o; }; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(8), n(1), n(138)], r = function (e, t, n) {
      const i = {}; i.createElement = function (e) { const t = document.createElement('div'); return t.innerHTML = e, t.firstChild; }, i.styleDimension = function (e) { return e + (e.toString().indexOf('%') > 0 ? '' : 'px'); }; let r = function (e) { return t.isString(e.className) ? e.className.split(' ') : []; },
        o = function (t, n) { n = e.trim(n), t.className !== n && (t.className = n); }; return i.classList = function (e) { return e.classList ? e.classList : r(e); }, i.hasClass = n.hasClass, i.addClass = function (e, n) {
        let i = r(e),
          a = t.isArray(n) ? n : n.split(' '); t.each(a, (e) => { t.contains(i, e) || i.push(e); }), o(e, i.join(' '));
      }, i.removeClass = function (e, n) {
        let i = r(e),
          a = t.isArray(n) ? n : n.split(' '); o(e, t.difference(i, a).join(' '));
      }, i.replaceClass = function (e, t, n) { let i = e.className || ''; t.test(i) ? i = i.replace(t, n) : n && (i += ` ${n}`), o(e, i); }, i.toggleClass = function (e, n, r) { const o = i.hasClass(e, n); r = t.isBoolean(r) ? r : !o, r !== o && (r ? i.addClass(e, n) : i.removeClass(e, n)); }, i.emptyElement = function (e) { for (;e.firstChild;)e.removeChild(e.firstChild); }, i.addStyleSheet = function (e) { const t = document.createElement('link'); t.rel = 'stylesheet', t.href = e, document.getElementsByTagName('head')[0].appendChild(t); }, i.empty = function (e) { if (e) for (;e.childElementCount > 0;)e.removeChild(e.children[0]); }, i.bounds = function (e) {
        const t = { left: 0, right: 0, width: 0, height: 0, top: 0, bottom: 0 }; if (!e || !document.body.contains(e)) return t; let n = e.getBoundingClientRect(),
          i = window.pageYOffset,
          r = window.pageXOffset; return n.width || n.height || n.left || n.top ? (t.left = n.left + r, t.right = n.right + r, t.top = n.top + i, t.bottom = n.bottom + i, t.width = n.right - n.left, t.height = n.bottom - n.top, t) : t;
      }, i;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(34)], r = function (e, t) {
      function n(e) { return /^(?:(?:https?|file)\:)?\/\//.test(e); } function i(t) { return e.some(t, e => e.nodeName === 'parsererror'); } const r = {}; return r.getAbsolutePath = function (e, i) {
        if (t.exists(i) || (i = document.location.href), t.exists(e)) {
          if (n(e)) return e; let r,
            o = i.substring(0, i.indexOf('://') + 3),
            a = i.substring(o.length, i.indexOf('/', o.length + 1)); if (e.indexOf('/') === 0)r = e.split('/'); else { let s = i.split('?')[0]; s = s.substring(o.length + a.length + 1, s.lastIndexOf('/')), r = s.split('/').concat(e.split('/')); } for (var l = [], u = 0; u < r.length; u++)r[u] && t.exists(r[u]) && r[u] !== '.' && (r[u] === '..' ? l.pop() : l.push(r[u])); return `${o + a}/${l.join('/')}`;
        }
      }, r.getScriptPath = e.memoize((e) => { for (let t = document.getElementsByTagName('script'), n = 0; n < t.length; n++) { const i = t[n].src; if (i && i.indexOf(e) >= 0) return i.substr(0, i.indexOf(e)); } return ''; }), r.parseXML = function (e) { let t = null; try { 'DOMParser' in window ? (t = (new window.DOMParser()).parseFromString(e, 'text/xml'), (i(t.childNodes) || t.childNodes && i(t.childNodes[0].childNodes)) && (t = null)) : (t = new window.ActiveXObject('Microsoft.XMLDOM'), t.async = 'false', t.loadXML(e)); } catch (n) {} return t; }, r.serialize = function (e) { if (void 0 === e) return null; if (typeof e === 'string' && e.length < 6) { const t = e.toLowerCase(); if (t === 'true') return !0; if (t === 'false') return !1; if (!isNaN(Number(e)) && !isNaN(parseFloat(e))) return Number(e); } return e; }, r.parseDimension = function (e) { return typeof e === 'string' ? e === '' ? 0 : e.lastIndexOf('%') > -1 ? e : parseInt(e.replace('px', ''), 10) : e; }, r.timeFormat = function (t, n) {
        if (t <= 0 && !n || e.isNaN(parseInt(t))) return '00:00'; const i = t < 0 ? '-' : ''; t = Math.abs(t); let r = Math.floor(t / 3600),
          o = Math.floor((t - 3600 * r) / 60),
          a = Math.floor(t % 60); return `${i + (r ? `${r}:` : '') + (o < 10 ? '0' : '') + o}:${a < 10 ? '0' : ''}${a}`;
      }, r;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1)], r = function (e) { const t = {}; return t.exists = function (e) { switch (typeof e) { case 'string':return e.length > 0; case 'object':return e !== null; case 'undefined':return !1; } return !0; }, t.isHTTPS = function () { return window.location.href.indexOf('https') === 0; }, t.isRtmp = function (e, t) { return e.indexOf('rtmp') === 0 || t === 'rtmp'; }, t.isYouTube = function (e, t) { return t === 'youtube' || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e); }, t.youTubeID = function (e) { const t = /v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e); return t ? t.slice(1).join('').replace('?', '') : ''; }, t.typeOf = function (t) { if (t === null) return 'null'; const n = typeof t; return n === 'object' && e.isArray(t) ? 'array' : n; }, t; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(62), n(7), n(94), n(2)], r = function (e, t, n, i) {
      let r = function (e) {
          let t = i.bounds(e),
            n = window.pageXOffset; return n && i.isAndroid() && document.body.parentElement.getBoundingClientRect().left >= 0 && (t.left -= n, t.right -= n), t;
        },
        o = e.extend({ constructor(e, t) { this.className = `${e} jw-background-color jw-reset`, this.orientation = t, this.dragStartListener = this.dragStart.bind(this), this.dragMoveListener = this.dragMove.bind(this), this.dragEndListener = this.dragEnd.bind(this), this.tapListener = this.tap.bind(this), this.setup(); },
          setup() { const e = { default: this.default, className: this.className, orientation: `jw-slider-${this.orientation}` }; this.el = i.createElement(n(e)), this.elementRail = this.el.getElementsByClassName('jw-slider-container')[0], this.elementBuffer = this.el.getElementsByClassName('jw-buffer')[0], this.elementProgress = this.el.getElementsByClassName('jw-progress')[0], this.elementThumb = this.el.getElementsByClassName('jw-knob')[0], this.userInteract = new t(this.element(), { preventScrolling: !0 }), this.userInteract.on('dragStart', this.dragStartListener), this.userInteract.on('drag', this.dragMoveListener), this.userInteract.on('dragEnd', this.dragEndListener), this.userInteract.on('tap click', this.tapListener); },
          dragStart() { this.trigger('dragStart'), this.railBounds = r(this.elementRail); },
          dragEnd(e) { this.dragMove(e), this.trigger('dragEnd'); },
          dragMove(e) {
            let t,
              n,
              o = this.railBounds = this.railBounds ? this.railBounds : r(this.elementRail); this.orientation === 'horizontal' ? (t = e.pageX, n = t < o.left ? 0 : t > o.right ? 100 : 100 * i.between((t - o.left) / o.width, 0, 1)) : (t = e.pageY, n = t >= o.bottom ? 0 : t <= o.top ? 100 : 100 * i.between((o.height - (t - o.top)) / o.height, 0, 1)); const a = this.limit(n); return this.render(a), this.update(a), !1;
          },
          tap(e) { this.railBounds = r(this.elementRail), this.dragMove(e); },
          limit(e) { return e; },
          update(e) { this.trigger('update', { percentage: e }); },
          render(e) { e = Math.max(0, Math.min(e, 100)), this.orientation === 'horizontal' ? (this.elementThumb.style.left = `${e}%`, this.elementProgress.style.width = `${e}%`) : (this.elementThumb.style.bottom = `${e}%`, this.elementProgress.style.height = `${e}%`); },
          updateBuffer(e) { this.elementBuffer.style.width = `${e}%`; },
          element() { return this.el; } }); return o;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(62), n(2)], r = function (e, t) { const n = e.extend({ constructor(e, t, n) { this.el = document.createElement('div'), this.el.className = `jw-icon jw-icon-tooltip ${e} jw-button-color jw-reset jw-hidden`, t && (this.el.setAttribute('tabindex', '0'), this.el.setAttribute('role', 'button'), this.el.setAttribute('aria-label', t)), n === !0 ? this.el.setAttribute('aria-hidden', 'false') : this.el.setAttribute('aria-hidden', 'true'), this.container = document.createElement('div'), this.container.className = 'jw-overlay jw-reset', this.openClass = 'jw-open', this.componentType = 'tooltip', this.el.appendChild(this.container); }, addContent(e) { this.content && this.removeContent(), this.content = e, this.container.appendChild(e); }, removeContent() { this.content && (this.container.removeChild(this.content), this.content = null); }, hasContent() { return !!this.content; }, element() { return this.el; }, openTooltip(e) { this.trigger(`open-${this.componentType}`, e, { isOpen: !0 }), this.isOpen = !0, t.toggleClass(this.el, this.openClass, this.isOpen); }, closeTooltip(e) { this.trigger(`close-${this.componentType}`, e, { isOpen: !1 }), this.isOpen = !1, t.toggleClass(this.el, this.openClass, this.isOpen); }, toggleOpenState(e) { this.isOpen ? this.closeTooltip(e) : this.openTooltip(e); } }); return n; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(16)], r = function (e, t) {
      let n,
        i = [{ configName: 'clearkey', keyName: 'org.w3.clearkey' }, { configName: 'widevine', keyName: 'com.widevine.alpha' }, { configName: 'playready', keyName: 'com.microsoft.playready' }],
        r = [],
        o = {},
        a = function (t) { const n = t.get('playlist'); return !!t.get('drm') || e.some(n, t => !!t.drm || e.some(t.sources, e => !!e.drm)); },
        s = function (e) { return new Promise(((t, n) => { let i; try { i = new window.MSMediaKeys(e); } catch (r) {}i ? t() : n(); })); },
        l = function (t) { let a = s; return navigator.requestMediaKeySystemAccess && (a = navigator.requestMediaKeySystemAccess.bind(navigator)), n ? n.then(t) : (e.forEach(i, (e) => { const t = a(e.keyName, [{}]).then(() => { o[e.configName] = !0; }, () => { o[e.configName] = !1; }); r.push(t); }), n = Promise.all(r).then(t)); },
        u = function () { return !!navigator.requestMediaKeySystemAccess && !!MediaKeySystemAccess.prototype.getConfiguration || !!window.MSMediaKeys; },
        c = function (e) { return o[e]; },
        d = function (t) { n || console.error('DRM only supported with "drm" block in initial setup.', t); const i = e.keys(t); return e.some(i, e => c(e)); }; return { containsDrm: a, probe(e, n) { u() && t(n)('drm') ? l(e) : e(); }, anySupported: d, isSupported: c };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(27), n(16), n(1), n(135), n(37)], r = function (e, t, n, i, r) {
      function o() { return !!window.MediaSource && !!window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"'); } function a(i, o) { if (e.isSafari()) return !1; const a = t(o); if (!a('dash')) return !1; if (i.drm && !r.anySupported(i.drm)) return !1; const s = window.MediaSource; if (!window.HTMLVideoElement || !s) return !1; let l = !0; return i.mediaTypes && (l = n.all(i.mediaTypes, e => s.isTypeSupported(e))), l && (i.type === 'dash' || i.type === 'mpd' || (i.file || '').indexOf('mpd-time-csf') > -1); } let s = n.find(i, n.matches({ name: 'flash' })),
        l = s.supports; s.supports = function (n, i) { if (!e.isFlashSupported() || n.drm) return !1; const r = n && n.type; if (r === 'hls' || r === 'm3u8') { const o = t(i); return o('hls'); } return l.apply(this, arguments); }; let u = n.find(i, n.matches({ name: 'html5' })),
        c = u.supports; return u.supports = function (e, n) {
        const i = c.apply(this, arguments); if (i && e.drm && e.type === 'hls') {
          let r = t(n),
            o = r('drm'); if (o && e.drm.fairplay) { const a = window.WebKitMediaKeys; return a && a.isTypeSupported && a.isTypeSupported('com.apple.fps.1_0', 'video/mp4'); } return o;
        } return i;
      }, i.push({ name: 'shaka', supports: a }), i.push({ name: 'hlsjs',
        supports(n, i) {
          if ((e.isChrome() || e.isFF()) && o() && !e.isMobile() && !n.drm) {
            let r = n && n.type,
              a = n && n.file; if (a.indexOf('.m3u8') > -1 || r === 'hls' || r === 'm3u8') { const s = t(i); return s('hls'); }
          }
        } }), i;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(136), n(1), n(38)], r = function (e, t) {
      function i(e, n, i) {
        let r = t.indexOf(e, t.findWhere(e, { name: i })),
          o = t.indexOf(e, t.findWhere(e, { name: n })),
          a = e.splice(o, 1)[0]; e.splice(r, 0, a);
      } let r,
        o = e.registerProvider,
        a = e.prototype.reorderProviders; return t.extend(e.loaders, { shaka(e) { n.e(2, (require) => { const t = n(72); o(t), e(t); }); }, hlsjs(e) { n.e(1, (require) => { let t = n(43); t.default && (t = t.default), t.setEdition && t.setEdition(r), o(t), e(t); }); } }), t.extend(e.prototype, { reorderProviders(e) { const t = a.call(this, e); return e !== 'flash' && i(t, 'hlsjs', 'flash'), t; }, providerSupports(e, t) { return r = this.config.edition, e.supports(t, r); } }), e;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  },,,,, function (e, t, n) {
    function i(e) { return e && e.__esModule ? e : { default: e }; } function r(e, t, n) { this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this); }t.__esModule = !0, t.HandlebarsEnvironment = r; var o = n(11),
      a = n(17),
      s = i(a),
      l = n(99),
      u = n(97),
      c = n(107),
      d = i(c),
      p = '4.0.5'; t.VERSION = p; const h = 7; t.COMPILER_REVISION = h; const f = { 1: '<= 1.0.rc.2', 2: '== 1.0.0-rc.3', 3: '== 1.0.0-rc.4', 4: '== 1.x.x', 5: '== 2.0.0-alpha.x', 6: '>= 2.0.0-beta.1', 7: '>= 4.0.0' }; t.REVISION_CHANGES = f; const g = '[object Object]'; r.prototype = { constructor: r, logger: d.default, log: d.default.log, registerHelper(e, t) { if (o.toString.call(e) === g) { if (t) throw new s.default('Arg not supported with multiple helpers'); o.extend(this.helpers, e); } else this.helpers[e] = t; }, unregisterHelper(e) { delete this.helpers[e]; }, registerPartial(e, t) { if (o.toString.call(e) === g)o.extend(this.partials, e); else { if (typeof t === 'undefined') throw new s.default(`Attempting to register a partial called "${e}" as undefined`); this.partials[e] = t; } }, unregisterPartial(e) { delete this.partials[e]; }, registerDecorator(e, t) { if (o.toString.call(e) === g) { if (t) throw new s.default('Arg not supported with multiple decorators'); o.extend(this.decorators, e); } else this.decorators[e] = t; }, unregisterDecorator(e) { delete this.decorators[e]; } }; const m = d.default.log; t.log = m, t.createFrame = o.createFrame, t.logger = d.default;
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(1)], r = function (e, t) {
      function i(n) { t.each(n, (t, i) => { n[i] = e.serialize(t); }); } function r(e) { return e.slice && e.slice(-2) === 'px' && (e = e.slice(0, -2)), e; } function o(t, n) {
        if (n.toString().indexOf('%') === -1) return 0; if (typeof t !== 'string' || !e.exists(t)) return 0; if (/^\d*\.?\d+%$/.test(t)) return t; const i = t.indexOf(':'); if (i === -1) return 0; let r = parseFloat(t.substr(0, i)),
          o = parseFloat(t.substr(i + 1)); return r <= 0 || o <= 0 ? 0 : `${o / r * 100}%`;
      } let a = { autostart: !1, controls: !0, displaytitle: !0, displaydescription: !0, mobilecontrols: !1, repeat: !1, castAvailable: !1, skin: 'seven', stretching: 'uniform', mute: !1, volume: 90, width: 480, height: 270, localization: { play: 'Play', playback: 'Start playback', pause: 'Pause', volume: 'Volume', prev: 'Previous', next: 'Next', cast: 'Chromecast', fullscreen: 'Fullscreen', playlist: 'Playlist', hd: 'Quality', cc: 'Closed captions', audioTracks: 'Audio tracks', replay: 'Replay', buffer: 'Loading', more: 'More', liveBroadcast: 'Live broadcast', loadingAd: 'Loading ad', rewind: 'Rewind 10s', nextUp: 'Next Up', related: 'Related' }, renderCaptionsNatively: !1 },
        s = function (s, l) {
          let u = l && l.getAllItems(),
            c = t.extend({}, (window.jwplayer || {}).defaults, u, s); i(c), c.localization = t.extend({}, a.localization, c.localization); const d = t.extend({}, a, c); d.base === '.' && (d.base = e.getScriptPath('jwplayer.js')), d.base = (d.base || e.loadFrom()).replace(/\/?$/, '/'), n.p = d.base, d.width = r(d.width), d.height = r(d.height); const p = e.getScriptPath('jwplayer.js') || d.base; if (d.flashplayer = d.flashplayer || `${p}jwplayer.flash.swf`, d.flashloader = d.flashloader || `${p}jwplayer.loader.swf`, window.location.protocol === 'http:' && (d.flashplayer = d.flashplayer.replace('https', 'http'), d.flashloader = d.flashloader.replace('https', 'http')), d.aspectratio = o(d.aspectratio, d.width), t.isObject(d.skin) && (d.skinUrl = d.skin.url, d.skinColorInactive = d.skin.inactive, d.skinColorActive = d.skin.active, d.skinColorBackground = d.skin.background, d.skin = t.isString(d.skin.name) ? d.skin.name : a.skin), t.isString(d.skin) && d.skin.indexOf('.xml') > 0 && (console.log('JW Player does not support XML skins, please update your config'), d.skin = d.skin.replace('.xml', '')), d.aspectratio || delete d.aspectratio, !d.playlist) { const h = t.pick(d, ['title', 'description', 'type', 'mediaid', 'image', 'file', 'sources', 'tracks', 'preload']); d.playlist = [h]; } return d;
        }; return s;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i; i = function () {
      function e(e) { if (typeof e !== 'string') return !1; const t = o[e.toLowerCase()]; return !!t && e.toLowerCase(); } function t(e) { if (typeof e !== 'string') return !1; const t = a[e.toLowerCase()]; return !!t && e.toLowerCase(); } function n(e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const i in n)e[i] = n[i]; } return e; } function i(i, o, a) {
        let s = this,
          l = /MSIE\s8\.0/.test(navigator.userAgent),
          u = {}; l ? s = document.createElement('custom') : u.enumerable = !0, s.hasBeenReset = !1; let c = '',
          d = !1,
          p = i,
          h = o,
          f = a,
          g = null,
          m = '',
          w = !0,
          v = 'auto',
          y = 'start',
          j = 50,
          b = 'middle',
          E = 50,
          x = 'middle'; if (Object.defineProperty(s, 'id', n({}, u, { get() { return c; }, set(e) { c = `${e}`; } })), Object.defineProperty(s, 'pauseOnExit', n({}, u, { get() { return d; }, set(e) { d = !!e; } })), Object.defineProperty(s, 'startTime', n({}, u, { get() { return p; }, set(e) { if (typeof e !== 'number') throw new TypeError('Start time must be set to a number.'); p = e, this.hasBeenReset = !0; } })), Object.defineProperty(s, 'endTime', n({}, u, { get() { return h; }, set(e) { if (typeof e !== 'number') throw new TypeError('End time must be set to a number.'); h = e, this.hasBeenReset = !0; } })), Object.defineProperty(s, 'text', n({}, u, { get() { return f; }, set(e) { f = `${e}`, this.hasBeenReset = !0; } })), Object.defineProperty(s, 'region', n({}, u, { get() { return g; }, set(e) { g = e, this.hasBeenReset = !0; } })), Object.defineProperty(s, 'vertical', n({}, u, { get() { return m; }, set(t) { const n = e(t); if (n === !1) throw new SyntaxError('An invalid or illegal string was specified.'); m = n, this.hasBeenReset = !0; } })), Object.defineProperty(s, 'snapToLines', n({}, u, { get() { return w; }, set(e) { w = !!e, this.hasBeenReset = !0; } })), Object.defineProperty(s, 'line', n({}, u, { get() { return v; }, set(e) { if (typeof e !== 'number' && e !== r) throw new SyntaxError('An invalid number or illegal string was specified.'); v = e, this.hasBeenReset = !0; } })), Object.defineProperty(s, 'lineAlign', n({}, u, { get() { return y; }, set(e) { const n = t(e); if (!n) throw new SyntaxError('An invalid or illegal string was specified.'); y = n, this.hasBeenReset = !0; } })), Object.defineProperty(s, 'position', n({}, u, { get() { return j; }, set(e) { if (e < 0 || e > 100) throw new Error('Position must be between 0 and 100.'); j = e, this.hasBeenReset = !0; } })), Object.defineProperty(s, 'positionAlign', n({}, u, { get() { return b; }, set(e) { const n = t(e); if (!n) throw new SyntaxError('An invalid or illegal string was specified.'); b = n, this.hasBeenReset = !0; } })), Object.defineProperty(s, 'size', n({}, u, { get() { return E; }, set(e) { if (e < 0 || e > 100) throw new Error('Size must be between 0 and 100.'); E = e, this.hasBeenReset = !0; } })), Object.defineProperty(s, 'align', n({}, u, { get() { return x; }, set(e) { const n = t(e); if (!n) throw new SyntaxError('An invalid or illegal string was specified.'); x = n, this.hasBeenReset = !0; } })), s.displayState = void 0, l) return s;
      } if (window.VTTCue) return window.VTTCue; var r = 'auto',
        o = { '': !0, lr: !0, rl: !0 },
        a = { start: !0, middle: !0, end: !0, left: !0, right: !0 }; return i.prototype.getCueAsHTML = function () { const e = window.WebVTT; return e.convertCueToDOMTree(window, this.text); }, i;
    }.call(t, n, t, e), !(void 0 !== i && (e.exports = i));
  },, function (e, t, n) {
    let i,
      r; i = [n(8), n(20), n(128), n(129), n(31)], r = function (e, t, n, i, r) {
      function o(t) {
        for (var o = {}, s = 0; s < t.childNodes.length; s++) {
          let l = t.childNodes[s],
            c = u(l); if (c) switch (c.toLowerCase()) { case 'enclosure':o.file = e.xmlAttribute(l, 'url'); break; case 'title':o.title = a(l); break; case 'guid':o.mediaid = a(l); break; case 'pubdate':o.date = a(l); break; case 'description':o.description = a(l); break; case 'link':o.link = a(l); break; case 'category':o.tags ? o.tags += a(l) : o.tags = a(l); }
        } return o = i(t, o), o = n(t, o), new r(o);
      } var a = t.textContent,
        s = t.getChildNode,
        l = t.numChildren,
        u = t.localName,
        c = {}; return c.parse = function (e) {
        for (var t = [], n = 0; n < l(e); n++) {
          let i = s(e, n),
            r = u(i).toLowerCase(); if (r === 'channel') for (let a = 0; a < l(i); a++) { const c = s(i, a); u(c).toLowerCase() === 'item' && t.push(o(c)); }
        } return t;
      }, c;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(20), n(48), n(2), n(3), n(4), n(1)], r = function (e, t, n, i, r, o) {
      const a = function () {
        function a(r) {
          const a = n.tryCatch(() => {
            let n,
              a = r.responseXML ? r.responseXML.childNodes : null,
              s = ''; if (a) { for (let c = 0; c < a.length && (s = a[c], s.nodeType === 8); c++);e.localName(s) === 'xml' && (s = s.nextSibling), e.localName(s) === 'rss' && (n = { playlist: t.parse(s) }); } if (!n) try { const d = JSON.parse(r.responseText); if (o.isArray(d))n = { playlist: d }; else { if (!o.isArray(d.playlist)) throw null; n = d; } } catch (p) { return void l('Not a valid RSS/JSON feed'); }u.trigger(i.JWPLAYER_PLAYLIST_LOADED, n);
          }); a instanceof n.Error && l();
        } function s(e) { l(`Playlist load error: ${e}`); } function l(e) { u.trigger(i.JWPLAYER_ERROR, { message: e || 'Error loading file' }); } var u = o.extend(this, r); this.load = function (e) { n.ajax(e, a, s); }, this.destroy = function () { this.off(); };
      }; return a;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(31), n(51), n(1), n(39)], r = function (e, t, n, i) {
      function r(e, t) {
        for (let n = 0; n < e.length; n++) {
          let i = e[n],
            r = t.choose(i); if (r) return { type: i.type, provider: r.providerToCheck };
        } return null;
      } function o(e, t) { return n.isUndefined(e) ? t : e; } const a = function (t) { return t = n.isArray(t) ? t : [t], n.compact(n.map(t, e)); }; a.filterPlaylist = function (e, t, i, r, a, u, c) { const d = []; return n.each(e, (e) => { e = n.extend({}, e), e.allSources = s(e.sources, i, e.drm || r, e.preload || a, o(e.withCredentials, c)), e.sources = l(e.allSources, t), e.sources.length && (e.file = e.sources[0].file, (e.preload || a) && (e.preload = e.preload || a), (e.feedid || u) && (e.feedid = e.feedid || u), d.push(e)); }), d; }; var s = function (e, i, r, a, s) { return n.compact(n.map(e, (e) => { if (n.isObject(e)) { void 0 !== i && i !== null && (e.androidhls = i), (e.drm || r) && (e.drm = e.drm || r), (e.preload || a) && (e.preload = e.preload || a); const l = o(e.withCredentials, s); return n.isUndefined(l) || (e.withCredentials = l), t(e); } })); },
        l = function (e, t) {
          t && t.choose || (t = new i({ primary: t ? 'flash' : null })); const o = r(e, t); if (!o) return []; let a = o.provider,
            s = o.type; return n.filter(e, e => e.type === s && t.providerSupports(a, e));
        }; return a;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(8), n(1)], r = function (e, t, n) {
      let i = { default: !1 },
        r = function (r) { if (r && r.file) { const o = n.extend({}, i, r); o.file = t.trim(`${o.file}`); const a = /^[^\/]+\/(?:x-)?([^\/]+)$/; if (a.test(o.type) && (o.mimeType = o.type, o.type = o.type.replace(a, '$1')), e.isYouTube(o.file) ? o.type = 'youtube' : e.isRtmp(o.file) ? o.type = 'rtmp' : o.type || (o.type = t.extension(o.file)), o.type) { switch (o.type) { case 'm3u8':case 'vnd.apple.mpegurl':o.type = 'hls'; break; case 'dash+xml':o.type = 'dash'; break; case 'smil':o.type = 'rtmp'; break; case 'm4a':o.type = 'aac'; } return n.each(o, (e, t) => { e === '' && delete o[t]; }), o; } } }; return r;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(26), n(3), n(4), n(15), n(1)], r = function (e, t, n, i, r, o) {
      let a = { FLASH: 0, JAVASCRIPT: 1, HYBRID: 2 },
        s = function (s) {
          function l() { switch (t.getPluginPathType(s)) { case t.pluginPathType.ABSOLUTE:return s; case t.pluginPathType.RELATIVE:return e.getAbsolutePath(s, window.location.href); } } function u() { o.defer(() => { m = r.loaderstatus.COMPLETE, g.trigger(n.COMPLETE); }); } function c() { m = r.loaderstatus.ERROR, g.trigger(n.ERROR, { url: s }); } var d,
            p,
            h,
            f,
            g = o.extend(this, i),
            m = r.loaderstatus.NEW; this.load = function () { if (m === r.loaderstatus.NEW) { if (s.lastIndexOf('.swf') > 0) return d = s, m = r.loaderstatus.COMPLETE, void g.trigger(n.COMPLETE); if (t.getPluginPathType(s) === t.pluginPathType.CDN) return m = r.loaderstatus.COMPLETE, void g.trigger(n.COMPLETE); m = r.loaderstatus.LOADING; const e = new r(l()); e.on(n.COMPLETE, u), e.on(n.ERROR, c), e.load(); } }, this.registerPlugin = function (e, t, i, o) { f && (clearTimeout(f), f = void 0), h = t, i && o ? (d = o, p = i) : typeof i === 'string' ? d = i : typeof i === 'function' ? p = i : i || o || (d = e), m = r.loaderstatus.COMPLETE, g.trigger(n.COMPLETE); }, this.getStatus = function () { return m; }, this.getPluginName = function () { return t.getPluginName(s); }, this.getFlashPath = function () { if (d) switch (t.getPluginPathType(d)) { case t.pluginPathType.ABSOLUTE:return d; case t.pluginPathType.RELATIVE:return s.lastIndexOf('.swf') > 0 ? e.getAbsolutePath(d, window.location.href) : e.getAbsolutePath(d, l()); } return null; }, this.getJS = function () { return p; }, this.getTarget = function () { return h; }, this.getPluginmode = function () { return void 0 !== typeof d && void 0 !== typeof p ? a.HYBRID : void 0 !== typeof d ? a.FLASH : void 0 !== typeof p ? a.JAVASCRIPT : void 0; }, this.getNewInstance = function (e, t, n) { return new p(e, t, n); }, this.getURL = function () { return s; };
        }; return s;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  },,,,,, function (e, t, n) {
    let i,
      r; i = [n(27)], r = function (e) { return function (t) { if (t.type === 'hls') { if (t.androidhls === !1 && e.isAndroid()) return !1; const n = e.isAndroidNative; if (n(2) || n(3) || n('4.0')) return !1; if (e.isAndroid() && !e.isFF()) return !0; } return null; }; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  },, function (e, t, n) {
    let i,
      r; i = [n(1), n(33)], r = function (e, t) {
      function n(e) { e.onload = null, e.onprogress = null, e.onreadystatechange = null, e.onerror = null, 'abort' in e && e.abort(); } function i(t, i) { return function (r) { const o = r.currentTarget || i.xhr; if (clearTimeout(i.timeoutId), i.retryWithoutCredentials && i.xhr.withCredentials) { n(o); const a = e.extend({}, i, { xhr: null, withCredentials: !1, retryWithoutCredentials: !1 }); return void d(a); }i.onerror(t, i.url, o); }; } function r(e) {
        return function (t) {
          const n = t.currentTarget || e.xhr; if (n.readyState === 4) {
            if (clearTimeout(e.timeoutId), n.status >= 400) {
              let i; return i = n.status === 404 ? 'File not found' : `${n.status}(${n.statusText})`,
              e.onerror(i, e.url, n);
            } if (n.status === 200) return o(e)(t);
          }
        };
      } function o(e) {
        return function (n) {
          const i = n.currentTarget || e.xhr; if (clearTimeout(e.timeoutId), e.responseType) { if (e.responseType === 'json') return a(i, e); } else {
            let r,
              o = i.responseXML; if (o) try { r = o.firstChild; } catch (l) {} if (o && r) return s(i, o, e); if (u && i.responseText && !o && (o = t.parseXML(i.responseText), o && o.firstChild)) return s(i, o, e); if (e.requireValidXML) return void e.onerror('Invalid XML', e.url, i);
          }e.oncomplete(i);
        };
      } function a(t, n) { if (!t.response || e.isString(t.response) && t.responseText.substr(1) !== '"') try { t = e.extend({}, t, { response: JSON.parse(t.responseText) }); } catch (i) { return void n.onerror('Invalid JSON', n.url, t); } return n.oncomplete(t); } function s(t, n, i) { const r = n.documentElement; return i.requireValidXML && (r.nodeName === 'parsererror' || r.getElementsByTagName('parsererror').length) ? void i.onerror('Invalid XML', i.url, t) : (t.responseXML || (t = e.extend({}, t, { responseXML: n })), i.oncomplete(t)); } var l = function () {},
        u = !1,
        c = function (e) {
          let t = document.createElement('a'),
            n = document.createElement('a'); t.href = location.href; try { return n.href = e, n.href = n.href, `${t.protocol}//${t.host}` != `${n.protocol}//${n.host}`; } catch (i) {} return !0;
        },
        d = function (t, a, s, d) {
          e.isObject(t) && (d = t, t = d.url); let p,
            h = e.extend({ xhr: null, url: t, withCredentials: !1, retryWithoutCredentials: !1, timeout: 6e4, timeoutId: -1, oncomplete: a || l, onerror: s || l, mimeType: d && !d.responseType ? 'text/xml' : '', requireValidXML: !1, responseType: d && d.plainText ? 'text' : '' }, d); if ('XDomainRequest' in window && c(t))p = h.xhr = new window.XDomainRequest(), p.onload = o(h), p.ontimeout = p.onprogress = l, u = !0; else { if (!('XMLHttpRequest' in window)) return void h.onerror('', t); p = h.xhr = new window.XMLHttpRequest(), p.onreadystatechange = r(h); } const f = i('Error loading file', h); p.onerror = f, 'overrideMimeType' in p ? h.mimeType && p.overrideMimeType(h.mimeType) : u = !0; try { t = t.replace(/#.*$/, ''), p.open('GET', t, !0); } catch (g) { return f(g), p; } if (h.responseType) try { p.responseType = h.responseType; } catch (g) {}h.timeout && (h.timeoutId = setTimeout(() => { n(p), h.onerror('Timeout', t, p); }, h.timeout), p.onabort = function () { clearTimeout(h.timeoutId); }); try { h.withCredentials && 'withCredentials' in p && (p.withCredentials = !0), p.send(); } catch (g) { f(g); } return p;
        }; return { ajax: d, crossdomain: c };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(4), n(1)], r = function (e, t, n) {
      function i(e, t, n) { const i = document.createElement('param'); i.setAttribute('name', t), i.setAttribute('value', n), e.appendChild(i); } function r(r, o, l, u) {
        let c; if (u = u || 'opaque', e.isMSIE()) { const d = document.createElement('div'); o.appendChild(d), d.outerHTML = `<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="${l}" name="${l}" tabindex="0"><param name="movie" value="${r}"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="${u}"><param name="bgcolor" value="${s}"><param name="menu" value="false"></object>`; for (let p = o.getElementsByTagName('object'), h = p.length; h--;)p[h].id === l && (c = p[h]); } else c = document.createElement('object'), c.setAttribute('type', 'application/x-shockwave-flash'), c.setAttribute('data', r), c.setAttribute('width', '100%'), c.setAttribute('height', '100%'), c.setAttribute('bgcolor', s), c.setAttribute('id', l), c.setAttribute('name', l), i(c, 'allowfullscreen', 'true'), i(c, 'allowscriptaccess', 'always'), i(c, 'wmode', u), i(c, 'menu', 'false'), o.appendChild(c, o); return c.className = 'jw-swf jw-reset', c.style.display = 'block', c.style.position = 'absolute', c.style.left = 0, c.style.right = 0, c.style.top = 0, c.style.bottom = 0, e.isIE() && 'PointerEvent' in window && (c.style.pointerEvents = 'none'), n.extend(c, t), c.queueCommands = !0, c.triggerFlash = function (t) {
          const i = this; if (t !== 'setup' && i.queueCommands || !i.__externalCall) { for (var r = i.__commandQueue, o = r.length; o--;)r[o][0] === t && r.splice(o, 1); return r.push(Array.prototype.slice.call(arguments)), i; } let s = Array.prototype.slice.call(arguments, 1),
            l = e.tryCatch(() => { if (s.length) { for (let e = s.length; e--;) typeof s[e] === 'object' && n.each(s[e], a); const r = JSON.stringify(s); i.__externalCall(t, r); } else i.__externalCall(t); }); return l instanceof e.Error && (console.error(t, l), t === 'setup') ? (l.name = 'Failed to setup flash', l) : i;
        }, c.__commandQueue = [], c;
      } function o(e) { e && e.parentNode && (e.style.display = 'none', e.parentNode.removeChild(e)); } function a(e, t, n) { e instanceof window.HTMLElement && delete n[t]; } var s = '#000000'; return { embed: r, remove: o };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(4), n(1)], r = function (e, t) {
      function n() {} const i = function (e, n) {
        let i,
          r = this; i = e && t.has(e, 'constructor') ? e.constructor : function () { return r.apply(this, arguments); }, t.extend(i, r, n); const o = function () { this.constructor = i; }; return o.prototype = r.prototype, i.prototype = new o(), e && t.extend(i.prototype, e), i.__super__ = r.prototype, i;
      }; return n.extend = i, t.extend(n.prototype, e), n;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(22), n(1), n(34), n(33), n(24)], r = function (e, t, n, i, r) {
      const o = {}; return o.repo = t.memoize(() => {
        let t = r.split('+')[0],
          i = `${e.repo + t}/`; return n.isHTTPS() ? i.replace(/^http:/, 'https:') : i;
      }), o.versionCheck = function (e) {
        let t = (`0${e}`).split(/\W/),
          n = r.split(/\W/),
          i = parseFloat(t[0]),
          o = parseFloat(n[0]); return !(i > o) && !(i === o && parseFloat(`0${t[1]}`) > parseFloat(n[1]));
      }, o.loadFrom = function () { return o.repo(); }, o;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1)], r = function (e) {
      const t = function () {
        let t = {},
          n = {},
          i = {},
          r = {}; return { start(n) { t[n] = e.now(), i[n] = i[n] + 1 || 1; }, end(i) { if (t[i]) { const r = e.now() - t[i]; n[i] = n[i] + r || r; } }, dump() { return { counts: i, sums: n, events: r }; }, tick(t, n) { r[t] = n || e.now(); }, between(e, t) { return r[t] && r[e] ? r[t] - r[e] : -1; } };
      }; return t;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [], r = function () { return document.createElement('video'); }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(7)], r = function (e) { const t = function (t, n, i) { const r = document.createElement('div'); return r.className = `jw-icon jw-icon-inline jw-button-color jw-reset ${t}`, r.setAttribute('role', 'button'), r.setAttribute('tabindex', '0'), i && r.setAttribute('aria-label', i), r.style.display = 'none', n && new e(r).on('click tap', () => { n(); }), { element() { return r; }, toggle(e) { e ? this.show() : this.hide(); }, show() { r.style.display = ''; }, hide() { r.style.display = 'none'; } }; }; return t; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  },, function (e, t, n) {
    let i; i = function (require, e, t) {
      function n(e, t) { r(t, o(e)); } function i(e) { const t = c[e]; if (t) { for (let n = Object.keys(t), i = 0; i < n.length; i += 1) for (let r = t[n[i]], o = 0; o < r.parts.length; o += 1)r.parts[o](); delete c[e]; } } function r(e, t) {
        for (let n = 0; n < t.length; n++) {
          let i = t[n],
            r = (c[e] || {})[i.id]; if (r) { for (var o = 0; o < r.parts.length; o++)r.parts[o](i.parts[o]); for (;o < i.parts.length; o++)r.parts.push(l(e, i.parts[o])); } else { for (var a = [], o = 0; o < i.parts.length; o++)a.push(l(e, i.parts[o])); c[e] = c[e] || {}, c[e][i.id] = { id: i.id, parts: a }; }
        }
      } function o(e) {
        for (var t = [], n = {}, i = 0; i < e.length; i++) {
          let r = e[i],
            o = r[0],
            a = r[1],
            s = r[2],
            l = { css: a, media: s }; n[o] ? n[o].parts.push(l) : t.push(n[o] = { id: o, parts: [l] });
        } return t;
      } function a(e) { h().appendChild(e); } function s(e) { const t = document.createElement('style'); return t.type = 'text/css', t.setAttribute('data-jwplayer-id', e), a(t), t; } function l(e, t) {
        let n,
          i,
          r,
          o = d[e]; o || (o = d[e] = { element: s(e), counter: 0 }); const a = o.counter++; return n = o.element, i = u.bind(null, n, a, !1), r = u.bind(null, n, a, !0), i(t), function (e) { if (e) { if (e.css === t.css && e.media === t.media) return; i(t = e); } else r(); };
      } function u(e, t, n, i) {
        const r = n ? '' : i.css; if (e.styleSheet)e.styleSheet.cssText = f(t, r); else {
          let o = document.createTextNode(r),
            a = e.childNodes; a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
        }
      } var c = {},
        d = {},
        p = function (e) { let t; return function () { return typeof t === 'undefined' && (t = e.apply(this, arguments)), t; }; },
        h = p(() => document.head || document.getElementsByTagName('head')[0]); t.exports = { style: n, clear: i }; var f = (function () { const e = []; return function (t, n) { return e[t] = n, e.filter(Boolean).join('\n'); }; }());
    }.call(t, n, t, e), !(void 0 !== i && (e.exports = i));
  }, function (e, t, n) {
    let i,
      r; i = [n(116), n(21), n(1)], r = function (e, t, n) {
      let i = e.selectPlayer,
        r = function () { const e = i.apply(this, arguments); return e || { registerPlugin(e, n, i) { e !== 'jwpsrv' && t.registerPlugin(e, n, i); } }; }; return n.extend(e, { selectPlayer: r });
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  },,,, function (e, t, n) {
    let i,
      r; i = [n(2), n(74), n(16)], r = function (e, t, n) {
      let i = 'invalid',
        r = 'RnXcsftYjWRDA^Uy',
        o = function (o) {
          function a(o) { e.exists(o) || (o = ''); try { o = t.decrypt(o, r); const a = o.split('/'); s = a[0], s === 'pro' && (s = 'premium'); const c = n(s); if (a.length > 2 && c('setup')) { l = a[1]; const d = parseInt(a[2]); d > 0 && (u = new Date(), u.setTime(d)); } else s = i; } catch (p) { s = i; } } let s,
            l,
            u; this.edition = function () { return u && u.getTime() < (new Date()).getTime() ? i : s; }, this.token = function () { return l; }, this.expiration = function () { return u; }, a(o);
        }; return o;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [], r = function () {
      let e = function (e) { return window.atob(e); },
        t = function (e) { return unescape(encodeURIComponent(e)); },
        n = function (e) { try { return decodeURIComponent(escape(e)); } catch (t) { return e; } },
        i = function (e) { for (var t = new Array(Math.ceil(e.length / 4)), n = 0; n < t.length; n++)t[n] = e.charCodeAt(4 * n) + (e.charCodeAt(4 * n + 1) << 8) + (e.charCodeAt(4 * n + 2) << 16) + (e.charCodeAt(4 * n + 3) << 24); return t; },
        r = function (e) { for (var t = new Array(e.length), n = 0; n < e.length; n++)t[n] = String.fromCharCode(255 & e[n], e[n] >>> 8 & 255, e[n] >>> 16 & 255, e[n] >>> 24 & 255); return t.join(''); }; return { decrypt(o, a) { if (o = String(o), a = String(a), o.length == 0) return ''; for (var s, l, u = i(e(o)), c = i(t(a).slice(0, 16)), d = u.length, p = u[d - 1], h = u[0], f = 2654435769, g = Math.floor(6 + 52 / d), m = g * f; m != 0;) { l = m >>> 2 & 3; for (let w = d - 1; w >= 0; w--)p = u[w > 0 ? w - 1 : d - 1], s = (p >>> 5 ^ h << 2) + (h >>> 3 ^ p << 4) ^ (m ^ h) + (c[3 & w ^ l] ^ p), h = u[w] -= s; m -= f; } let v = r(u); return v = v.replace(/\0+$/, ''), n(v); } };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(159), n(3), n(170)], r = function (e, t, n) {
      const i = function (i, r) {
        let o = new e(i, r),
          a = o.setup; return o.setup = function () { a.call(this), r.on('change:skipButton', this.onSkipButton, this), r.on('change:castActive change:playlistItem', this.showDisplayIconImage, this); }, o.showDisplayIconImage = function (e) {
          let t = e.get('castActive'),
            n = e.get('playlistItem'),
            i = o.controlsContainer().getElementsByClassName('jw-display-icon-container')[0]; t && n && n.image ? (i.style.backgroundImage = `url("${n.image}")`, i.style.backgroundSize = 'contain') : (i.style.backgroundImage = '', i.style.backgroundSize = '');
        }, o.onSkipButton = function (e, t) { t ? this.addSkipButton() : this._skipButton && (this._skipButton.destroy(), this._skipButton = null); }, o.addSkipButton = function () { this._skipButton = new n(this.instreamModel), this._skipButton.on(t.JWPLAYER_AD_SKIPPED, function () { this.api.skipAd(); }, this), this.controlsContainer().appendChild(this._skipButton.element()); }, o;
      }; return i;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  },,,,,, function (e, t, n) {
    t = e.exports = n(82)(), t.push([e.id, `.jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:jw-icons;src:url(${n(84)}) format("woff"),url(${n(83)}) format("truetype");font-weight:400;font-style:normal}.jw-controlbar .jw-menu .jw-option:before,.jw-icon-display,.jw-icon-inline,.jw-icon-tooltip{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:"\\E600"}.jw-icon-buffer:before{content:"\\E601"}.jw-icon-cast:before{content:"\\E603"}.jw-icon-cast.jw-off:before{content:"\\E602"}.jw-icon-cc:before{content:"\\E605"}.jw-icon-cue:before,.jw-icon-menu-bullet:before{content:"\\E606"}.jw-icon-error:before{content:"\\E607"}.jw-icon-fullscreen:before{content:"\\E608"}.jw-icon-fullscreen.jw-off:before{content:"\\E613"}.jw-icon-hd:before{content:"\\E60A"}.jw-rightclick-logo:before{content:"\\E60B"}.jw-icon-next:before{content:"\\E60C"}.jw-icon-pause:before{content:"\\E60D"}.jw-icon-play:before{content:"\\E60E"}.jw-icon-replay:before{content:"\\E610"}.jw-icon-volume:before{content:"\\E612"}.jw-icon-volume.jw-off:before{content:"\\E611"}.jw-icon-more:before{content:"\\E614"}.jw-icon-close:before{content:"\\E615"}.jw-icon-rewind:before{content:"\\E900"}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jwplayer:hover .jw-display-icon-container{background-color:#212121}.jw-controls,.jw-media,.jw-overlays,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-media.jw-media-show{visibility:visible;opacity:1}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0;left:0;bottom:2.5em}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-cast-screen{width:100%;height:100%}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.jw-icon-playback:before{content:"\\E60E"}.jw-captions,.jw-controls,.jw-overlays,.jw-preview,.jw-title{pointer-events:none}.jw-autostart-mute,.jw-controlbar,.jw-display-icon-container,.jw-display-icon-container .jw-icon,.jw-dock .jw-dock-button,.jw-logo,.jw-media,.jw-nextup-container,.jw-overlays .jw-plugin,.jw-skip{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-click,.jw-preview{position:absolute;width:100%;height:100%}.jw-preview{display:none;opacity:1;visibility:visible;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jw-stretch-uniform .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.75em;width:3.75em;margin:-1.875em auto 0;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;text-align:center;vertical-align:middle!important;background-position:50% 50%;background-repeat:no-repeat;font-size:2.5em}.jw-breakpoint-0 .jw-display-icon-container{height:44px;width:44px;margin:-22px auto 0}.jw-breakpoint-0 .jw-display-icon-container .jw-icon{font-size:22px}.jw-breakpoint-1 .jw-display-icon-container{height:55px;width:55px;margin:-27.5px auto 0}.jw-breakpoint-1 .jw-display-icon-container .jw-icon{font-size:35.2px}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-controlbar{display:table;position:absolute;bottom:0;height:2.5em;width:100%;padding:0 .5em}.jw-controlbar .jw-hidden{display:none}.jw-background-color{background-color:rgba(33,33,33,.8)}.jw-slider-horizontal{background-color:transparent}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .5em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-duration,.jw-text-elapsed{display:inline-block;height:2.5em;position:relative;line-height:2.5em;vertical-align:middle;cursor:pointer;padding:0 .5em}.jw-icon-inline,.jw-icon-tooltip{min-width:1.5625em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-cast,.jw-icon-inline.jw-icon-volume,.jw-slider-volume.jw-slider-horizontal{display:none}.jw-button-color{color:hsla(0,0%,100%,.6)}.jw-button-color:hover{color:#fff}.jw-button-color:focus{outline:none;color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:hsla(0,0%,100%,.6)}.jw-toggle:focus{outline:none;color:#fff}.jw-dock{clear:right;margin:.75em;display:block;opacity:1}.jw-breakpoint-0 .jw-dock{margin:.225em .1125em}.jw-breakpoint-1 .jw-dock{margin:.45em .225em}.jw-dock:after{content:"";clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;height:2.5em;margin:.5em;position:relative;width:2.5em}.jw-breakpoint-0 .jw-dock-button{margin:0 .1125em;height:44px;width:44px}.jw-breakpoint-1 .jw-dock-button{margin:0 .225em;height:44px;width:44px}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-.2em;width:.5em;height:.2em;left:50%;margin-left:-.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-arrow,.jw-dock-button:hover .jw-overlay{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-slider-container{height:1em;width:100%;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:hsla(0,0%,100%,.2)}.jw-buffer{background-color:hsla(0,0%,100%,.3)}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{height:.25em;background-color:rgba(33,33,33,.9);border-radius:25%;width:.5em}.jw-knob{background-color:#fff;width:.5em;height:.5em;border-radius:.25em}.jw-slider-horizontal{height:.25em}.jw-slider-horizontal.jw-slider-volume{width:4em}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-horizontal .jw-knob{top:-.125em;margin-left:-.25em}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:.25em}.jw-slider-vertical{padding:1em 1em 0;position:absolute}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{bottom:0;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{width:.25em}.jw-slider-vertical .jw-slider-container{height:4em}.jw-slider-vertical .jw-knob{right:0;left:-.125em}.jw-slider-time{width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;width:100%;height:inherit;text-align:center;display:none;max-height:81.375%;line-height:1.3em;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-text-track-display{font-size:inherit;line-height:1.3em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:81.375%;line-height:1.3em}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick ul{list-style:none;font-weight:700;border-radius:.15em;margin:0;border:1px solid #444;padding:0}.jwplayer .jw-rightclick ul li{background-color:#000;border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick ul li .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jwplayer .jw-rightclick ul li a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em;line-height:1em}.jwplayer .jw-rightclick ul li:last-child{border-bottom:none}.jwplayer .jw-rightclick ul li:hover{background-color:#1a1a1a;cursor:pointer}.jwplayer .jw-rightclick ul .jw-featured{background-color:#252525;vertical-align:middle}.jwplayer .jw-rightclick ul .jw-featured a{color:#777}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-logo .jw-flag-audio-player{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right{bottom:0;right:0}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-icon-tooltip.jw-hidden{display:none}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:transparent;content:" "}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-menu,.jw-time-tip,.jw-volume-tip{position:relative;left:-50%;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;bottom:1.25em;padding:.5em;border-radius:.25em}.jw-time-tip .jw-text{color:#fff;line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2.5em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:hsla(0,0%,100%,.6);padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before:hover,.jw-controlbar .jw-option:hover{color:#fff}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-controlbar .jw-option.jw-active-option{color:#fff}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em;padding:.5em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip.jw-hidden{visibility:hidden}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em}.jw-skip .jw-skip-icon:before{content:"\\E60C"}.jw-skip .jw-skip-icon,.jw-skip .jw-text{color:hsla(0,0%,100%,.6);vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jwplayer.jw-state-paused.jw-flag-casting .jw-display-icon-container,.jwplayer.jw-state-playing.jw-flag-casting .jw-display-icon-container{display:table}.jwplayer.jw-flag-casting .jw-display-icon-container{border-radius:0;border:1px solid #fff;position:absolute;top:auto;left:.5em;right:.5em;bottom:50%;margin-bottom:-12.5%;height:50%;width:50%;padding:0;background-repeat:no-repeat;background-position:50%}.jwplayer.jw-flag-casting .jw-display-icon-container .jw-icon{font-size:3em}.jwplayer.jw-flag-casting.jw-state-complete .jw-preview{display:none}.jw-cast{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:auto;background-position:50% 50%}.jw-cast-label{position:absolute;left:.5em;right:.5em;bottom:75%;margin-bottom:1.5em;text-align:center}.jw-cast-name{color:#ccc}.jw-nextup-container{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;background-color:transparent;bottom:3em;cursor:pointer;max-width:300px;min-width:200px;opacity:0;position:absolute;right:.5em;-webkit-transform:translateY(5px);transform:translateY(5px);-webkit-transition:all .15s ease;transition:all .15s ease;visibility:hidden;width:40%}.jw-nextup-container-visible{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);visibility:visible}.jw-nextup{border-radius:0;overflow:hidden;position:relative}.jw-nextup-header{background:rgba(33,33,33,.8);box-sizing:border-box;color:#fff;font-size:12px;font-weight:700;line-height:normal;padding:8px}.jw-nextup-body{background:rgba(0,0,0,.8);color:#fff;overflow:hidden}.jw-nextup-thumbnail{background-position:50%;background-size:cover;display:none;float:left;height:60px;width:45%}.jw-nextup-thumbnail-visible{display:block}.jw-nextup-title{box-sizing:border-box;float:left;font-size:12px;font-weight:700;line-height:1.3;overflow:hidden;padding:5px 6px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-thumbnail-visible+.jw-nextup-title{height:60px;white-space:normal;width:55%}.jw-nextup-thumbnail-visible+.jw-nextup-title:after{background:-webkit-linear-gradient(top,transparent,#000);background:linear-gradient(-180deg,transparent,#000);bottom:0;content:"";height:30px;left:0;position:absolute;width:100%}.jw-nextup-close{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale;border:none;color:hsla(0,0%,100%,.6);font-size:13px;opacity:0;position:absolute;right:5px;top:6px;-webkit-transition:color .15s ease,opacity .15s ease,visibility .15s ease;transition:color .15s ease,opacity .15s ease,visibility .15s ease;visibility:hidden}.jw-nextup-close:before{content:"\\E615"}.jw-nextup-close:active,.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{opacity:1;visibility:visible}.jw-autostart-mute{min-width:1.75em;text-align:left;position:absolute;bottom:.5em;right:.5em;height:44px;width:44px;text-align:center}.jw-autostart-mute:before{content:"\\E612"}.jw-autostart-mute.jw-off:before{content:"\\E611"}.jw-autostart-mute:before{background-color:rgba(33,33,33,.8);padding:5px 4px 5px 6px}.jw-flag-autostart .jw-controlbar,.jw-flag-autostart .jw-nextup{display:none}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:"\\E60E"}.jw-state-idle .jw-captions,.jw-state-idle .jw-controlbar{display:none}.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-state-paused .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-paused .jw-autostart-mute{display:none}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:"\\E601"}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:"\\E610"}.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-complete .jw-captions{display:none}.jwplayer.jw-state-error .jw-title,body .jw-error .jw-title{display:block}.jwplayer.jw-state-error .jw-title .jw-title-primary,body .jw-error .jw-title .jw-title-primary{white-space:normal}.jwplayer.jw-state-error .jw-preview,body .jw-error .jw-preview{display:block}.jwplayer.jw-state-error .jw-captions,.jwplayer.jw-state-error .jw-controlbar,body .jw-error .jw-captions,body .jw-error .jw-controlbar{display:none}.jwplayer.jw-state-error:hover .jw-display-icon-container,body .jw-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}.jwplayer.jw-state-error .jw-icon-display,body .jw-error .jw-icon-display{cursor:default;font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jwplayer.jw-state-error .jw-icon-display:before,body .jw-error .jw-icon-display:before{content:"\\E607"}.jwplayer.jw-state-error .jw-icon-display:hover,body .jw-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#fff;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-cast-available .jw-controlbar{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline-block;height:auto;line-height:2.5em;margin:0 -.5em;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.jwplayer.jw-flag-live.jw-breakpoint-0 .jw-text-alt{max-width:80px}.jwplayer.jw-flag-live.jw-breakpoint-1 .jw-text-alt{max-width:150px}.jwplayer.jw-flag-live.jw-breakpoint-2 .jw-text-alt{max-width:250px}.jwplayer.jw-flag-live.jw-breakpoint-3 .jw-text-alt{max-width:370px}.jwplayer.jw-flag-live.jw-breakpoint-4 .jw-text-alt{max-width:470px}.jwplayer.jw-flag-live.jw-breakpoint-5 .jw-text-alt{max-width:630px}.jwplayer.jw-flag-live.jw-breakpoint-6 .jw-text-alt{max-width:790px}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-dock,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-nextup-container,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-captions{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-controlbar{display:none}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-nextup-container{bottom:.5em}.jwplayer.jw-flag-media-audio .jw-controlbar,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-nextup-container,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:3em}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-captions{max-height:81.375%}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:81.375%}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing.jw-flag-touch video::-webkit-media-text-track-container{max-height:70%}.jwplayer.jw-flag-media-audio .jw-autostart-mute{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-autostart-mute,.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-dock,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-preview{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline-block;height:auto;line-height:2.5em;margin:0 -.5em;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads.jw-breakpoint-0 .jw-text-alt{max-width:80px}.jwplayer.jw-flag-ads.jw-breakpoint-1 .jw-text-alt{max-width:150px}.jwplayer.jw-flag-ads.jw-breakpoint-2 .jw-text-alt{max-width:250px}.jwplayer.jw-flag-ads.jw-breakpoint-3 .jw-text-alt{max-width:370px}.jwplayer.jw-flag-ads.jw-breakpoint-4 .jw-text-alt{max-width:470px}.jwplayer.jw-flag-ads.jw-breakpoint-5 .jw-text-alt{max-width:630px}.jwplayer.jw-flag-ads.jw-breakpoint-6 .jw-text-alt{max-width:790px}.jwplayer.jw-flag-ads-googleima .jw-controlbar{display:table;bottom:0}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-flag-ads-googleima.jw-skin-seven .jw-controlbar{font-size:.9em}.jwplayer.jw-flag-ads.jw-flag-touch .jw-controlbar{display:table}.jwplayer.jw-flag-ads-vpaid .jw-controlbar,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-controlbar,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none!important}.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-title,.jwplayer.jw-flag-overlay-open-sharing .jw-controls,.jwplayer.jw-flag-overlay-open-sharing .jw-title,.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo,.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}.jw-flag-controls-disabled.jwplayer .jw-captions{max-height:none}.jw-flag-controls-disabled.jwplayer video::-webkit-media-text-track-container{max-height:none}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch.jw-breakpoint-4 .jw-controlbar,.jw-flag-touch.jw-breakpoint-4 .jw-plugin,.jw-flag-touch.jw-breakpoint-4 .jw-skip,.jw-flag-touch.jw-breakpoint-5 .jw-controlbar,.jw-flag-touch.jw-breakpoint-5 .jw-plugin,.jw-flag-touch.jw-breakpoint-5 .jw-skip,.jw-flag-touch.jw-breakpoint-6 .jw-controlbar,.jw-flag-touch.jw-breakpoint-6 .jw-plugin,.jw-flag-touch.jw-breakpoint-6 .jw-skip,.jw-flag-touch.jw-breakpoint-7 .jw-controlbar,.jw-flag-touch.jw-breakpoint-7 .jw-plugin,.jw-flag-touch.jw-breakpoint-7 .jw-skip{font-size:1.5em}.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-captions{bottom:4.25em}.jw-flag-touch.jw-breakpoint-4 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-5 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-6 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-7 video::-webkit-media-text-track-container{max-height:70%}.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container{bottom:4.25em}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:inline-block}.jw-flag-touch .jw-display-icon-container{pointer-events:none}.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:table}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display-icon-container{display:none}.jwplayer.jw-flag-audio-player{background-color:transparent}.jwplayer.jw-flag-audio-player .jw-media{visibility:hidden}.jwplayer.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jwplayer.jw-flag-audio-player .jw-display-icon-container,.jwplayer.jw-flag-audio-player .jw-dock,.jwplayer.jw-flag-audio-player .jw-nextup-container,.jwplayer.jw-flag-audio-player .jw-preview,.jwplayer.jw-flag-audio-player .jw-title{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{vertical-align:middle;display:table;height:100%;left:0;bottom:0;margin:0;width:100%;min-width:100%}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-audio-player .jw-icon-inline{height:auto;line-height:normal}.jwplayer.jw-flag-audio-player .jw-group{vertical-align:middle}.jwplayer.jw-flag-audio-player .jw-controlbar-center-group{padding-bottom:2px}.jw-breakpoint-0 .jw-nextup-container,.jw-breakpoint-0 .jw-text-duration,.jw-breakpoint-0 .jw-text-elapsed,.jw-breakpoint-1 .jw-nextup-container,.jw-breakpoint-1 .jw-text-duration,.jw-breakpoint-1 .jw-text-elapsed{display:none}.jw-skin-seven .jw-color-active,.jw-skin-seven .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-skin-seven .jw-color-inactive,.jw-skin-seven .jw-color-inactive-hover:hover{color:#cecece;stroke:#cecece;border-color:#cecece}.jw-skin-seven .jw-active-option{background-color:hsla(0,0%,100%,.1)}.jw-skin-seven .jw-display-icon-container{display:table;font-size:20px;border-radius:3.5em}.jw-skin-seven .jw-display-icon-container:hover .jw-icon{color:#fff}.jw-skin-seven .jw-display-icon-container>.jw-icon{color:hsla(0,0%,100%,.9);font-size:1.7em}.jw-skin-seven.jw-state-idle .jw-display-icon-container>.jw-icon{padding-left:4px}.jw-skin-seven .jw-dock-button{border-radius:2.5em}.jw-skin-seven .jw-menu{padding:0}.jw-skin-seven .jw-dock .jw-overlay,.jw-skin-seven .jw-skip{border-radius:.5em}.jw-skin-seven .jw-text{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.jw-skin-seven.jw-breakpoint-0 .jw-display-icon-container .jw-icon{font-size:22px}.jw-skin-seven.jw-breakpoint-1 .jw-display-icon-container .jw-icon{font-size:35.2px}`, '']);
  }, function (e, t) { e.exports = function () { const e = []; return e.toString = function () { for (var e = [], t = 0; t < this.length; t++) { const n = this[t]; n[2] ? e.push(`@media ${n[2]}{${n[1]}}`) : e.push(n[1]); } return e.join(''); }, e.i = function (t, n) { typeof t === 'string' && (t = [[null, t, '']]); for (var i = {}, r = 0; r < this.length; r++) { const o = this[r][0]; typeof o === 'number' && (i[o] = !0); } for (r = 0; r < t.length; r++) { const a = t[r]; typeof a[0] === 'number' && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = `(${a[2]}) and (${n})`), e.push(a)); } }, e; }; }, function (e, t, n) { e.exports = `${n.p}jw-icons.ttf`; }, function (e, t, n) { e.exports = `${n.p}jw-icons.woff`; }, function (e, t, n) { const i = n(9); e.exports = (i.default || i).template({ compiler: [7, '>= 4.0.0'], main(e, t, n, i, r) { return '<div class="jw-skip jw-background-color jw-hidden jw-reset">\n    <span class="jw-text jw-skiptext jw-reset"></span>\n    <span class="jw-icon-inline jw-skip-icon jw-reset"></span>\n</div>'; }, useData: !0 }); }, function (e, t, n) { const i = n(9); e.exports = (i.default || i).template({ compiler: [7, '>= 4.0.0'], main(e, t, n, i, r) { let o; return `<div class="jw-display-icon-container jw-background-color jw-reset">\n    <div class="jw-icon jw-icon-display jw-button-color jw-reset" role="button" tabindex="0" aria-label="${e.escapeExpression((o = (o = n.ariaLabel || (t != null ? t.ariaLabel : t)) != null ? o : n.helperMissing, typeof o === 'function' ? o.call(t != null ? t : {}, { name: 'ariaLabel', hash: {}, data: r }) : o))}"></div>\n</div>\n`; }, useData: !0 }); }, function (e, t, n) {
    const i = n(9); e.exports = (i.default || i).template({ 1(e, t, n, i, r) {
      let o,
        a,
        s = t != null ? t : {}; return `    <div class="jw-dock-button jw-background-color jw-reset${(o = n.if.call(s, t != null ? t.btnClass : t, { name: 'if', hash: {}, fn: e.program(2, r, 0), inverse: e.noop, data: r })) != null ? o : ''}" button="${e.escapeExpression((a = (a = n.id || (t != null ? t.id : t)) != null ? a : n.helperMissing, typeof a === 'function' ? a.call(s, { name: 'id', hash: {}, data: r }) : a))}">\n        <div class="jw-icon jw-dock-image jw-reset" ${(o = n.if.call(s, t != null ? t.img : t, { name: 'if', hash: {}, fn: e.program(4, r, 0), inverse: e.noop, data: r })) != null ? o : ''}></div>\n        <div class="jw-arrow jw-reset"></div>\n${(o = n.if.call(s, t != null ? t.tooltip : t, { name: 'if', hash: {}, fn: e.program(6, r, 0), inverse: e.noop, data: r })) != null ? o : ''}    </div>\n`;
    },
    2(e, t, n, i, r) { let o; return ` ${e.escapeExpression((o = (o = n.btnClass || (t != null ? t.btnClass : t)) != null ? o : n.helperMissing, typeof o === 'function' ? o.call(t != null ? t : {}, { name: 'btnClass', hash: {}, data: r }) : o))}`; },
    4(e, t, n, i, r) { let o; return `style='background-image: url("${e.escapeExpression((o = (o = n.img || (t != null ? t.img : t)) != null ? o : n.helperMissing, typeof o === 'function' ? o.call(t != null ? t : {}, { name: 'img', hash: {}, data: r }) : o))}")'`; },
    6(e, t, n, i, r) { let o; return `        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">${e.escapeExpression((o = (o = n.tooltip || (t != null ? t.tooltip : t)) != null ? o : n.helperMissing, typeof o === 'function' ? o.call(t != null ? t : {}, { name: 'tooltip', hash: {}, data: r }) : o))}</span>\n        </div>\n`; },
    compiler: [7, '>= 4.0.0'],
    main(e, t, n, i, r) { let o; return `<div class="jw-dock jw-reset">\n${(o = n.each.call(t != null ? t : {}, t, { name: 'each', hash: {}, fn: e.program(1, r, 0), inverse: e.noop, data: r })) != null ? o : ''}</div>`; },
    useData: !0 });
  }, function (e, t, n) {
    const i = n(9); e.exports = (i.default || i).template({ compiler: [7, '>= 4.0.0'],
      main(e, t, n, i, r) {
        let o,
          a = t != null ? t : {},
          s = n.helperMissing,
          l = 'function',
          u = e.escapeExpression; return `<div id="${u((o = (o = n.id || (t != null ? t.id : t)) != null ? o : s, typeof o === l ? o.call(a, { name: 'id', hash: {}, data: r }) : o))}"class="jw-skin-${u((o = (o = n.skin || (t != null ? t.skin : t)) != null ? o : s, typeof o === l ? o.call(a, { name: 'skin', hash: {}, data: r }) : o))} jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">${u((o = (o = n.title || (t != null ? t.title : t)) != null ? o : s, typeof o === l ? o.call(a, { name: 'title', hash: {}, data: r }) : o))}</div>\n        <div class="jw-title-secondary jw-reset">${u((o = (o = n.body || (t != null ? t.body : t)) != null ? o : s, typeof o === l ? o.call(a, { name: 'body', hash: {}, data: r }) : o))}</div>\n    </div>\n\n    <div class="jw-icon-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset" aria-hidden="true"></div>\n        </div>\n    </div>\n</div>\n`;
      },
      useData: !0 });
  }, function (e, t, n) { const i = n(9); e.exports = (i.default || i).template({ compiler: [7, '>= 4.0.0'], main(e, t, n, i, r) { return '<div class="jw-logo jw-reset"></div>'; }, useData: !0 }); }, function (e, t, n) {
    const i = n(9); e.exports = (i.default || i).template({ 1(e, t, n, i, r) {
      let o,
        a = e.escapeExpression; return `        <li class='jw-text jw-option jw-item-${a((o = (o = n.index || r && r.index) != null ? o : n.helperMissing, typeof o === 'function' ? o.call(t != null ? t : {}, { name: 'index', hash: {}, data: r }) : o))} jw-reset'>${a(e.lambda(t != null ? t.label : t, t))}</li>\n`;
    },
    compiler: [7, '>= 4.0.0'],
    main(e, t, n, i, r) { let o; return `<ul class="jw-menu jw-background-color jw-reset">\n${(o = n.each.call(t != null ? t : {}, t, { name: 'each', hash: {}, fn: e.program(1, r, 0), inverse: e.noop, data: r })) != null ? o : ''}</ul>`; },
    useData: !0 });
  }, function (e, t, n) {
    const i = n(9); e.exports = (i.default || i).template({ compiler: [7, '>= 4.0.0'],
      main(e, t, n, i, r) {
        let o = e.lambda,
          a = e.escapeExpression; return `<div class="jw-nextup jw-reset">\n    <div class="jw-nextup-tooltip jw-reset">\n        <div class="jw-nextup-header jw-reset">\n            ${a(o(t != null ? t.nextUpText : t, t))}\n        </div>\n        <div class="jw-nextup-body jw-background-color jw-reset">\n            <div class="jw-nextup-thumbnail jw-reset"></div>\n            <div class="jw-nextup-title jw-reset">${a(o(t != null ? t.title : t, t))}</div>\n        </div>\n    </div>\n    <button class="jw-nextup-close"></button>\n</div>\n`;
      },
      useData: !0 });
  }, function (e, t, n) { const i = n(9); e.exports = (i.default || i).template({ compiler: [7, '>= 4.0.0'], main(e, t, n, i, r) { let o; return `<div id="${e.escapeExpression((o = (o = n.id || (t != null ? t.id : t)) != null ? o : n.helperMissing, typeof o === 'function' ? o.call(t != null ? t : {}, { name: 'id', hash: {}, data: r }) : o))}" class="jwplayer jw-reset jw-state-idle" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n</div>`; }, useData: !0 }); }, function (e, t, n) {
    const i = n(9); e.exports = (i.default || i).template({ 1(e, t, n, i, r) {
      let o,
        a,
        s = t != null ? t : {},
        l = n.helperMissing,
        u = 'function',
        c = e.escapeExpression; return `        <li class="jw-reset${(o = n.if.call(s, t != null ? t.featured : t, { name: 'if', hash: {}, fn: e.program(2, r, 0), inverse: e.noop, data: r })) != null ? o : ''}">\n            <a href="${c((a = (a = n.link || (t != null ? t.link : t)) != null ? a : l, typeof a === u ? a.call(s, { name: 'link', hash: {}, data: r }) : a))}" class="jw-reset" target="_top">\n${(o = n.if.call(s, t != null ? t.showLogo : t, { name: 'if', hash: {}, fn: e.program(4, r, 0), inverse: e.noop, data: r })) != null ? o : ''}                ${c((a = (a = n.title || (t != null ? t.title : t)) != null ? a : l, typeof a === u ? a.call(s, { name: 'title', hash: {}, data: r }) : a))}\n            </a>\n        </li>\n`;
    },
    2(e, t, n, i, r) { return ' jw-featured'; },
    4(e, t, n, i, r) { return '                <span class="jw-icon jw-rightclick-logo jw-reset"></span>\n'; },
    compiler: [7, '>= 4.0.0'],
    main(e, t, n, i, r) { let o; return `<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n${(o = n.each.call(t != null ? t : {}, t != null ? t.items : t, { name: 'each', hash: {}, fn: e.program(1, r, 0), inverse: e.noop, data: r })) != null ? o : ''}    </ul>\n</div>`; },
    useData: !0 });
  }, function (e, t, n) {
    const i = n(9); e.exports = (i.default || i).template({ compiler: [7, '>= 4.0.0'],
      main(e, t, n, i, r) {
        let o,
          a = t != null ? t : {},
          s = n.helperMissing,
          l = 'function',
          u = e.escapeExpression; return `<div class="${u((o = (o = n.className || (t != null ? t.className : t)) != null ? o : s, typeof o === l ? o.call(a, { name: 'className', hash: {}, data: r }) : o))} ${u((o = (o = n.orientation || (t != null ? t.orientation : t)) != null ? o : s, typeof o === l ? o.call(a, { name: 'orientation', hash: {}, data: r }) : o))} jw-reset" aria-hidden="true">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>`;
      },
      useData: !0 });
  },, function (e, t, n) {
    function i(e) { return e && e.__esModule ? e : { default: e }; } function r(e) { if (e && e.__esModule) return e; const t = {}; if (e != null) for (const n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t; } function o() { const e = new s.HandlebarsEnvironment(); return h.extend(e, s), e.SafeString = u.default, e.Exception = d.default, e.Utils = h, e.escapeExpression = h.escapeExpression, e.VM = g, e.template = function (t) { return g.template(t, e); }, e; }t.__esModule = !0; var a = n(44),
      s = r(a),
      l = n(110),
      u = i(l),
      c = n(17),
      d = i(c),
      p = n(11),
      h = r(p),
      f = n(109),
      g = r(f),
      m = n(108),
      w = i(m),
      v = o(); v.create = o, w.default(v), v.default = v, t.default = v, e.exports = t.default;
  }, function (e, t, n) {
    function i(e) { return e && e.__esModule ? e : { default: e }; } function r(e) { a.default(e); }t.__esModule = !0, t.registerDefaultDecorators = r; var o = n(98),
      a = i(o);
  }, function (e, t, n) {
    t.__esModule = !0; const i = n(11); t.default = function (e) { e.registerDecorator('inline', (e, t, n, r) => { let o = e; return t.partials || (t.partials = {}, o = function (r, o) { const a = n.partials; n.partials = i.extend({}, a, t.partials); const s = e(r, o); return n.partials = a, s; }), t.partials[r.args[0]] = r.fn, o; }); }, e.exports = t.default;
  }, function (e, t, n) {
    function i(e) { return e && e.__esModule ? e : { default: e }; } function r(e) { a.default(e), l.default(e), c.default(e), p.default(e), f.default(e), m.default(e), v.default(e); }t.__esModule = !0, t.registerDefaultHelpers = r; var o = n(100),
      a = i(o),
      s = n(101),
      l = i(s),
      u = n(102),
      c = i(u),
      d = n(103),
      p = i(d),
      h = n(104),
      f = i(h),
      g = n(105),
      m = i(g),
      w = n(106),
      v = i(w);
  }, function (e, t, n) {
    t.__esModule = !0; const i = n(11); t.default = function (e) {
      e.registerHelper('blockHelperMissing', function (t, n) {
        let r = n.inverse,
          o = n.fn; if (t === !0) return o(this); if (t === !1 || t == null) return r(this); if (i.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : r(this); if (n.data && n.ids) { const a = i.createFrame(n.data); a.contextPath = i.appendContextPath(n.data.contextPath, n.name), n = { data: a }; } return o(t, n);
      });
    }, e.exports = t.default;
  }, function (e, t, n) {
    function i(e) { return e && e.__esModule ? e : { default: e }; }t.__esModule = !0; let r = n(11),
      o = n(17),
      a = i(o); t.default = function (e) {
      e.registerHelper('each', function (e, t) {
        function n(t, n, o) { u && (u.key = t, u.index = n, u.first = n === 0, u.last = !!o, c && (u.contextPath = c + t)), l += i(e[t], { data: u, blockParams: r.blockParams([e[t], t], [c + t, null]) }); } if (!t) throw new a.default('Must pass iterator to #each'); var i = t.fn,
          o = t.inverse,
          s = 0,
          l = '',
          u = void 0,
          c = void 0; if (t.data && t.ids && (c = `${r.appendContextPath(t.data.contextPath, t.ids[0])}.`), r.isFunction(e) && (e = e.call(this)), t.data && (u = r.createFrame(t.data)), e && typeof e === 'object') if (r.isArray(e)) for (let d = e.length; s < d; s++)s in e && n(s, s, s === e.length - 1); else { let p = void 0; for (const h in e)e.hasOwnProperty(h) && (void 0 !== p && n(p, s - 1), p = h, s++); void 0 !== p && n(p, s - 1, !0); } return s === 0 && (l = o(this)), l;
      });
    }, e.exports = t.default;
  }, function (e, t, n) {
    function i(e) { return e && e.__esModule ? e : { default: e }; }t.__esModule = !0; let r = n(17),
      o = i(r); t.default = function (e) { e.registerHelper('helperMissing', function () { if (arguments.length !== 1) throw new o.default(`Missing helper: "${arguments[arguments.length - 1].name}"`); }); }, e.exports = t.default;
  }, function (e, t, n) {
    t.__esModule = !0; const i = n(11); t.default = function (e) { e.registerHelper('if', function (e, t) { return i.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || i.isEmpty(e) ? t.inverse(this) : t.fn(this); }), e.registerHelper('unless', function (t, n) { return e.helpers.if.call(this, t, { fn: n.inverse, inverse: n.fn, hash: n.hash }); }); }, e.exports = t.default;
  }, function (e, t) {
    t.__esModule = !0, t.default = function (e) { e.registerHelper('log', function () { for (var t = [void 0], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++)t.push(arguments[i]); let r = 1; n.hash.level != null ? r = n.hash.level : n.data && n.data.level != null && (r = n.data.level), t[0] = r, e.log(...t); }); }, e.exports = t.default;
  }, function (e, t) {
    t.__esModule = !0, t.default = function (e) { e.registerHelper('lookup', (e, t) => e && e[t]); }, e.exports = t.default;
  }, function (e, t, n) {
    t.__esModule = !0; const i = n(11); t.default = function (e) { e.registerHelper('with', function (e, t) { i.isFunction(e) && (e = e.call(this)); const n = t.fn; if (i.isEmpty(e)) return t.inverse(this); let r = t.data; return t.data && t.ids && (r = i.createFrame(t.data), r.contextPath = i.appendContextPath(t.data.contextPath, t.ids[0])), n(e, { data: r, blockParams: i.blockParams([e], [r && r.contextPath]) }); }); }, e.exports = t.default;
  }, function (e, t, n) {
    t.__esModule = !0; var i = n(11),
      r = { methodMap: ['debug', 'info', 'warn', 'error'], level: 'info', lookupLevel(e) { if (typeof e === 'string') { const t = i.indexOf(r.methodMap, e.toLowerCase()); e = t >= 0 ? t : parseInt(e, 10); } return e; }, log(e) { if (e = r.lookupLevel(e), typeof console !== 'undefined' && r.lookupLevel(r.level) <= e) { let t = r.methodMap[e]; console[t] || (t = 'log'); for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)i[o - 1] = arguments[o]; console[t](...i); } } }; t.default = r, e.exports = t.default;
  }, function (e, t) {
    (function (n) {
      t.__esModule = !0, t.default = function (e) {
        let t = typeof n !== 'undefined' ? n : window,
          i = t.Handlebars; e.noConflict = function () { return t.Handlebars === e && (t.Handlebars = i), e; };
      }, e.exports = t.default;
    }).call(t, (function () { return this; }()));
  }, function (e, t, n) {
    function i(e) { return e && e.__esModule ? e : { default: e }; } function r(e) { if (e && e.__esModule) return e; const t = {}; if (e != null) for (const n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t; } function o(e) {
      let t = e && e[0] || 1,
        n = w.COMPILER_REVISION; if (t !== n) {
        if (t < n) {
          let i = w.REVISION_CHANGES[n],
            r = w.REVISION_CHANGES[t]; throw new m.default(`Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (${i}) or downgrade your runtime to an older version (${r}).`);
        } throw new m.default(`Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (${e[1]}).`);
      }
    } function a(e, t) {
      function n(n, i, r) { r.hash && (i = f.extend({}, i, r.hash), r.ids && (r.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, i, r); let o = t.VM.invokePartial.call(this, n, i, r); if (o == null && t.compile && (r.partials[r.name] = t.compile(n, e.compilerOptions, t), o = r.partials[r.name](i, r)), o != null) { if (r.indent) { for (var a = o.split('\n'), s = 0, l = a.length; s < l && (a[s] || s + 1 !== l); s++)a[s] = r.indent + a[s]; o = a.join('\n'); } return o; } throw new m.default(`The partial ${r.name} could not be compiled when running in runtime-only mode`); } function i(t) {
        function n(t) { return `${e.main(r, t, r.helpers, r.partials, a, l, s)}`; } var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
          a = o.data; i._setup(o), !o.partial && e.useData && (a = d(t, a)); var s = void 0,
          l = e.useBlockParams ? [] : void 0; return e.useDepths && (s = o.depths ? t !== o.depths[0] ? [t].concat(o.depths) : o.depths : [t]), (n = p(e.main, n, r, o.depths || [], a, l))(t, o);
      } if (!t) throw new m.default('No environment passed to template'); if (!e || !e.main) throw new m.default(`Unknown template object: ${typeof e}`); e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler); var r = { strict(e, t) { if (!(t in e)) throw new m.default(`"${t}" not defined in ${e}`); return e[t]; },
        lookup(e, t) { for (let n = e.length, i = 0; i < n; i++) if (e[i] && e[i][t] != null) return e[i][t]; },
        lambda(e, t) { return typeof e === 'function' ? e.call(t) : e; },
        escapeExpression: f.escapeExpression,
        invokePartial: n,
        fn(t) { const n = e[t]; return n.decorator = e[`${t}_d`], n; },
        programs: [],
        program(e, t, n, i, r) {
          let o = this.programs[e],
            a = this.fn(e); return t || r || i || n ? o = s(this, e, a, t, n, i, r) : o || (o = this.programs[e] = s(this, e, a)), o;
        },
        data(e, t) { for (;e && t--;)e = e._parent; return e; },
        merge(e, t) { let n = e || t; return e && t && e !== t && (n = f.extend({}, t, e)), n; },
        noop: t.VM.noop,
        compilerInfo: e.compiler }; return i.isTop = !0, i._setup = function (n) { n.partial ? (r.helpers = n.helpers, r.partials = n.partials, r.decorators = n.decorators) : (r.helpers = r.merge(n.helpers, t.helpers), e.usePartial && (r.partials = r.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (r.decorators = r.merge(n.decorators, t.decorators))); }, i._child = function (t, n, i, o) { if (e.useBlockParams && !i) throw new m.default('must pass block params'); if (e.useDepths && !o) throw new m.default('must pass parent depths'); return s(r, t, e[t], n, 0, i, o); }, i;
    } function s(e, t, n, i, r, o, a) {
      function s(t) {
        let r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
          s = a; return a && t !== a[0] && (s = [t].concat(a)), n(e, t, e.helpers, e.partials, r.data || i, o && [r.blockParams].concat(o), s);
      } return s = p(n, s, e, a, i, o), s.program = t, s.depth = a ? a.length : 0, s.blockParams = r || 0, s;
    } function l(e, t, n) { return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = n.name === '@partial-block' ? n.data['partial-block'] : n.partials[n.name], e; } function u(e, t, n) { n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath); let i = void 0; if (n.fn && n.fn !== c && (n.data = w.createFrame(n.data), i = n.data['partial-block'] = n.fn, i.partials && (n.partials = f.extend({}, n.partials, i.partials))), void 0 === e && i && (e = i), void 0 === e) throw new m.default(`The partial ${n.name} could not be found`); if (e instanceof Function) return e(t, n); } function c() { return ''; } function d(e, t) { return t && 'root' in t || (t = t ? w.createFrame(t) : {}, t.root = e), t; } function p(e, t, n, i, r, o) { if (e.decorator) { const a = {}; t = e.decorator(t, a, n, i && i[0], r, o, i), f.extend(t, a); } return t; }t.__esModule = !0, t.checkRevision = o, t.template = a, t.wrapProgram = s, t.resolvePartial = l, t.invokePartial = u, t.noop = c; var h = n(11),
      f = r(h),
      g = n(17),
      m = i(g),
      w = n(44);
  }, function (e, t) {
    function n(e) { this.string = e; }t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function () { return `${this.string}`; }, t.default = n, e.exports = t.default;
  },, function (e, t, n) {
    let i,
      r; i = [n(21), n(1)], r = function (e, t) { return function (n, i) { const r = ['seek', 'skipAd', 'stop', 'playlistNext', 'playlistPrev', 'playlistItem', 'resize', 'addButton', 'removeButton', 'registerPlugin', 'attachMedia', 'next']; t.each(r, (e) => { n[e] = function () { return i[e](...arguments), n; }; }), n.registerPlugin = e.registerPlugin; }; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1)], r = function (e) {
      return function (t, n) {
        const i = ['buffer', 'controls', 'position', 'duration', 'fullscreen', 'volume', 'mute', 'item', 'stretching', 'playlist', 'captions']; e.each(i, (e) => { const i = e.slice(0, 1).toUpperCase() + e.slice(1); t[`get${i}`] = function () { return n._model.get(e); }; }); let r = ['getAudioTracks', 'getCaptionsList', 'getWidth', 'getHeight', 'getCurrentAudioTrack', 'setCurrentAudioTrack', 'getCurrentCaptions', 'setCurrentCaptions', 'getCurrentQuality', 'setCurrentQuality', 'getQualityLevels', 'getVisualQuality', 'getConfig', 'getState', 'getSafeRegion', 'isBeforeComplete', 'isBeforePlay', 'getProvider', 'detachMedia'],
          o = ['setControls', 'setFullscreen', 'setVolume', 'setMute', 'setCues', 'setCaptions']; e.each(r, (e) => { t[e] = function () { return n[e] ? n[e](...arguments) : null; }; }), e.each(o, (e) => { t[e] = function () { return n[e](...arguments), t; }; }), t.getPlaylistIndex = t.getItem;
      };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(3), n(5), n(4), n(2), n(64), n(1), n(166), n(112), n(113), n(115), n(24)], r = function (e, t, n, i, r, o, a, s, l, u, c) {
      const d = function (d, p) {
        let h,
          f = this,
          g = !1,
          m = {}; o.extend(this, n), this.utils = i, this._ = o, this.Events = n, this.version = c, this.trigger = function (e, t) { t = o.isObject(t) ? o.extend({}, t) : {}, t.type = e; const i = window.jwplayer; return i && i.debug ? n.trigger.call(f, e, t) : n.triggerSafe.call(f, e, t); }, this.dispatchEvent = this.trigger, this.removeEventListener = this.off.bind(this); const w = function () { h = new a(d), s(f, h), l(f, h), h.on(e.JWPLAYER_PLAYLIST_ITEM, () => { m = {}; }), h.on(e.JWPLAYER_MEDIA_META, (e) => { o.extend(m, e.metadata); }), h.on(e.JWPLAYER_READY, (e) => { g = !0, v.tick('ready'), e.setupTime = v.between('setup', 'ready'); }), h.on('all', f.trigger); }; w(), u(this), this.id = d.id; var v = this._qoe = new r(); v.tick('init'); const y = function () { g = !1, m = {}, f.off(), h && h.off(), h && h.playerDestroy && h.playerDestroy(); }; return this.getPlugin = function (e) { return f.plugins && f.plugins[e]; }, this.addPlugin = function (e, t) { this.plugins = this.plugins || {}, this.plugins[e] = t, this.onReady(t.addToPlayer), t.resize && this.onResize(t.resizeHandler); }, this.setup = function (e) { return v.tick('setup'), y(), w(), i.foreach(e.events, (e, t) => { const n = f[e]; typeof n === 'function' && n.call(f, t); }), e.id = f.id, h.setup(e, this), f; }, this.qoe = function () {
          let t = h.getItemQoe(),
            n = v.between('setup', 'ready'),
            i = t.between(e.JWPLAYER_MEDIA_PLAY_ATTEMPT, e.JWPLAYER_MEDIA_FIRST_FRAME); return { setupTime: n, firstFrame: i, player: v.dump(), item: t.dump() };
        }, this.getContainer = function () { return h.getContainer ? h.getContainer() : d; }, this.getMeta = this.getItemMeta = function () { return m; }, this.getPlaylistItem = function (e) { if (!i.exists(e)) return h._model.get('playlistItem'); const t = f.getPlaylist(); return t ? t[e] : null; }, this.getRenderingMode = function () { return 'html5'; }, this.load = function (e) { return h.load(e), f; }, this.play = function (e, n) { if (o.isObject(e) && e.reason && (n = e), n || (n = { reason: 'external' }), e === !0) return h.play(n), f; if (e === !1) return h.pause(n), f; switch (e = f.getState()) { case t.PLAYING:case t.BUFFERING:h.pause(n); break; default:h.play(n); } return f; }, this.pause = function (e, t) { return o.isBoolean(e) ? this.play(!e, t) : this.play(t); }, this.createInstream = function () { return h.createInstream(); }, this.castToggle = function () { h && h.castToggle && h.castToggle(); }, this.playAd = this.pauseAd = i.noop, this.remove = function () { return p(f), f.trigger('remove'), y(), f; }, this;
      }; return d;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(3)], r = function (e, t) {
      return function (n) {
        let i = { onBufferChange: t.JWPLAYER_MEDIA_BUFFER, onBufferFull: t.JWPLAYER_MEDIA_BUFFER_FULL, onError: t.JWPLAYER_ERROR, onSetupError: t.JWPLAYER_SETUP_ERROR, onFullscreen: t.JWPLAYER_FULLSCREEN, onMeta: t.JWPLAYER_MEDIA_META, onMute: t.JWPLAYER_MEDIA_MUTE, onPlaylist: t.JWPLAYER_PLAYLIST_LOADED, onPlaylistItem: t.JWPLAYER_PLAYLIST_ITEM, onPlaylistComplete: t.JWPLAYER_PLAYLIST_COMPLETE, onReady: t.JWPLAYER_READY, onResize: t.JWPLAYER_RESIZE, onComplete: t.JWPLAYER_MEDIA_COMPLETE, onSeek: t.JWPLAYER_MEDIA_SEEK, onTime: t.JWPLAYER_MEDIA_TIME, onVolume: t.JWPLAYER_MEDIA_VOLUME, onBeforePlay: t.JWPLAYER_MEDIA_BEFOREPLAY, onBeforeComplete: t.JWPLAYER_MEDIA_BEFORECOMPLETE, onDisplayClick: t.JWPLAYER_DISPLAY_CLICK, onControls: t.JWPLAYER_CONTROLS, onQualityLevels: t.JWPLAYER_MEDIA_LEVELS, onQualityChange: t.JWPLAYER_MEDIA_LEVEL_CHANGED, onCaptionsList: t.JWPLAYER_CAPTIONS_LIST, onCaptionsChange: t.JWPLAYER_CAPTIONS_CHANGED, onAdError: t.JWPLAYER_AD_ERROR, onAdClick: t.JWPLAYER_AD_CLICK, onAdImpression: t.JWPLAYER_AD_IMPRESSION, onAdTime: t.JWPLAYER_AD_TIME, onAdComplete: t.JWPLAYER_AD_COMPLETE, onAdCompanions: t.JWPLAYER_AD_COMPANIONS, onAdSkipped: t.JWPLAYER_AD_SKIPPED, onAdPlay: t.JWPLAYER_AD_PLAY, onAdPause: t.JWPLAYER_AD_PAUSE, onAdMeta: t.JWPLAYER_AD_META, onCast: t.JWPLAYER_CAST_SESSION, onAudioTrackChange: t.JWPLAYER_AUDIO_TRACK_CHANGED, onAudioTracks: t.JWPLAYER_AUDIO_TRACKS },
          r = { onBuffer: 'buffer', onPause: 'pause', onPlay: 'play', onIdle: 'idle' }; e.each(r, (t, i) => { n[i] = e.partial(n.on, t, e); }), e.each(i, (t, i) => { n[i] = e.partial(n.on, t, e); });
      };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(114), n(1), n(39), n(38), n(21)], r = function (e, t, n, i, r) {
      var o = [],
        a = 0,
        s = function (t) {
          let n,
            i; return t ? typeof t === 'string' ? (n = l(t), n || (i = document.getElementById(t))) : typeof t === 'number' ? n = o[t] : t.nodeType && (i = t, n = l(i.id)) : n = o[0], n || (i ? u(new e(i, c)) : { registerPlugin: r.registerPlugin });
        },
        l = function (e) { for (let t = 0; t < o.length; t++) if (o[t].id === e) return o[t]; return null; },
        u = function (e) { return a++, e.uniqueId = a, o.push(e), e; },
        c = function (e) { for (let t = o.length; t--;) if (o[t].uniqueId === e.uniqueId) { o.splice(t, 1); break; } },
        d = { selectPlayer: s, registerProvider: n.registerProvider, availableProviders: i, registerPlugin: r.registerPlugin }; return s.api = d, d;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(167), n(4), n(1), n(3)], r = function (e, t, n, i) {
      const r = function (t, r, o, a) {
        function s() { p('Setup Timeout Error', `Setup took longer than ${m} seconds to complete.`); } function l() { n.each(g, (e) => { e.complete !== !0 && e.running !== !0 && t !== null && c(e.depends) && (e.running = !0, u(e)); }); } function u(e) { const n = function (t) { t = t || {}, d(e, t); }; e.method(n, r, t, o, a); } function c(e) { return n.all(e, e => g[e].complete); } function d(e, t) { t.type === 'error' ? p(t.msg, t.reason) : t.type === 'complete' ? (clearTimeout(h), f.trigger(i.JWPLAYER_READY)) : (e.complete = !0, l()); } function p(e, t) { clearTimeout(h), f.trigger(i.JWPLAYER_SETUP_ERROR, { message: `${e}: ${t}` }), f.destroy(); } var h,
          f = this,
          g = e.getQueue(),
          m = 30; this.start = function () { h = setTimeout(s, 1e3 * m), l(); }, this.destroy = function () { clearTimeout(h), this.off(), g.length = 0, t = null, r = null, o = null; };
      }; return r.prototype = t, r;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(19), n(18)], r = function (e, t, n) {
      const i = function (i, r) {
        function o(e) { if (e.tracks.length) { for (let t = e.tracks || [], n = 0; n < t.length; n++) { const i = t[n]; v[i._id] || p(i); } const r = h(); f(), this.setCaptionsList(r); } } function a(e, t) { m = t, w = [], v = {}, y = {}, j = 0; } function s(e) {
          a(r, e); let n = e.tracks,
            i = n && n.length; if (!r.get('renderCaptionsNatively') && i) {
            let o,
              s; for (o = 0; o < i; o++)s = n[o], l(s.kind) && !v[s._id] && (p(s), t.loadFile(s, u.bind(null, s), c));
          } const d = h(); f(), this.setCaptionsList(d);
        } function l(e) { return e === 'subtitles' || e === 'captions'; } function u(e, t) { e.data = t; } function c(t) { e.log(`CAPTIONS(${t})`); } function d(e, t) { let n = null; t !== 0 && (n = w[t - 1]), e.set('captionsTrack', n); } function p(e) { if (e.data = e.data || [], e.name = e.label || e.name || e.language, e._id = n.createId(e, w.length), !e.name) { const t = n.createLabel(e, j); e.name = t.label, j = t.unknownCount; }w.push(e), v[e._id] = e; } function h() { for (var e = [{ id: 'off', label: 'Off' }], t = 0; t < w.length; t++)e.push({ id: w[t]._id, label: w[t].name || 'Unknown CC' }); return e; } function f() {
          let e = 0,
            t = r.get('captionLabel'); if (t === 'Off') return void r.set('captionsIndex', 0); for (let n = 0; n < w.length; n++) { const i = w[n]; if (t && t === i.name) { e = n + 1; break; }i.default || i.defaulttrack || i._id === 'default' ? e = n + 1 : i.autoselect; }g(e);
        } function g(e) { w.length ? r.setVideoSubtitleTrack(e, w) : r.set('captionsIndex', e); }r.on('change:playlistItem', a, this), r.on('change:captionsIndex', d, this), r.on('itemReady', s, this), r.mediaController.on('subtitlesTracks', o, this); var m = {},
          w = [],
          v = {},
          y = {},
          j = 0; this.getCurrentIndex = function () { return r.get('captionsIndex'); }, this.getCaptionsList = function () { return r.get('captionsList'); }, this.setCaptionsList = function (e) { r.set('captionsList', e); };
      }; return i;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(45), n(120), n(1), n(117), n(118), n(25), n(125), n(50), n(49), n(2), n(75), n(4), n(29), n(5), n(3), n(154)], r = function (e, t, i, r, o, a, s, l, u, c, d, p, h, f, g, m) {
      function w(e) { return function () { const t = Array.prototype.slice.call(arguments, 0); this._model.getVideo() ? this[`_${e}`].apply(this, t) : this.eventsQueue.push([e, t]); }; } function v(e) { return e === f.LOADING || e === f.STALLED ? f.BUFFERING : e; } const y = function (e) { this.originalContainer = this.currentContainer = e, this.eventsQueue = [], i.extend(this, p), this._model = new a(); }; return y.prototype = { play: w('play'),
        pause: w('pause'),
        seek: w('seek'),
        stop: w('stop'),
        load: w('load'),
        playlistNext: w('next'),
        playlistPrev: w('prev'),
        playlistItem: w('item'),
        setCurrentCaptions: w('setCurrentCaptions'),
        setCurrentQuality: w('setCurrentQuality'),
        setFullscreen: w('setFullscreen'),
        setup(a, p) {
          function m(e, t) { he.triggerAfterReady(e, t); } function w() { ae = null, re.on('all', m, he), he.showView(re.element()), i.defer(y); } function y() { he.trigger(g.JWPLAYER_READY, { setupTime: 0 }), he.triggerAfterReady = he.trigger; for (let e = 0; e < we.length; e++) { const t = we[e]; he.trigger(t.type, t.args); } const n = p.getPlugin('related'); n && n.on('nextUp', ce.setNextUp, ce), ie() && (c.isMobile() && fe().video ? j(fe().video) : R()); } function j(e) { 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype ? b(e) : n.e(9, (require) => { n(54), b(e); }); } function b(e) { ue = new window.IntersectionObserver(x, { threshold: 0.5 }), ue.observe(e); } function E() { ue.disconnect(), ue = void 0; } function x(e) {
            if (e && e.length) {
              let t = fe().video,
                n = e[0],
                i = { reason: 'autoplay' }; n.target === t && n.intersectionRatio >= 0.5 ? he.play(i) : he.pause(i);
            }
          } function k(e) {
            let t = ce.getProviders(),
              n = t.required(e, ce.get('primary')); return t.load(n).then(() => { he.getProvider() || (ce.setProvider(ce.get('playlistItem')), A()); });
          } function A() {
            for (;he.eventsQueue.length > 0;) {
              let e = he.eventsQueue.shift(),
                t = e[0],
                n = e[1] || []; he[`_${t}`](...n);
            }
          } function _(e) { switch (ce.get('state') === f.ERROR && ce.set('state', f.IDLE), ce.set('preInstreamState', 'instream-idle'), I(!0), ie() && ce.once('itemReady', R), he.trigger('destroyPlugin', {}), typeof e) { case 'string':C(e); break; case 'object':var t = N(e); t && Y(0); break; case 'number':Y(e); } } function C(e) { const t = new u(); t.on(g.JWPLAYER_PLAYLIST_LOADED, (e) => { _(e.playlist); }), t.on(g.JWPLAYER_ERROR, function (e) { e.message = `Error loading playlist: ${e.message}`, this.triggerError(e); }, this), t.load(e); } function L() { return he._instreamAdapter && he._instreamAdapter.getState(); } function T() { const e = L(); return i.isString(e) ? e : ce.get('state'); } function P(e) { let t; if (e && ce.set('playReason', e.reason), ce.get('state') !== f.ERROR) { const n = L(); if (i.isString(n)) return p.pauseAd(!1); if (ce.get('state') === f.COMPLETE && (I(!0), Y(0)), !de && (de = !0, he.trigger(g.JWPLAYER_MEDIA_BEFOREPLAY, { playReason: ce.get('playReason') }), de = !1, le)) return le = !1, void (se = null); if (S()) { if (ce.get('playlist').length === 0) return !1; t = c.tryCatch(() => { ce.loadVideo(); }); } else ce.get('state') === f.PAUSED && (t = c.tryCatch(() => { ce.playVideo(); })); return !(t instanceof c.Error) || (he.triggerError(t), se = null, !1); } } function R() { P({ reason: 'autostart' }); } function I(e) { ce.off('itemReady', R); const t = !e; se = null; const n = c.tryCatch(() => { ce.stopVideo(); }, he); return n instanceof c.Error ? (he.triggerError(n), !1) : (t && (pe = !0), de && (le = !0), !0); } function M(e) { se = null, e && (ce.set('pauseReason', e.reason), !ue || e.reason !== 'interaction' && e.reason !== 'external' || E()); const t = L(); if (i.isString(t)) return p.pauseAd(!0); switch (ce.get('state')) { case f.ERROR:return !1; case f.PLAYING:case f.BUFFERING:var n = c.tryCatch(() => { fe().pause(); }, this); if (n instanceof c.Error) return he.triggerError(n), !1; break; default:de && (le = !0); } return !0; } function S() { const e = ce.get('state'); return e === f.IDLE || e === f.COMPLETE || e === f.ERROR; } function O(e, t) { ce.get('state') !== f.ERROR && (ce.get('scrubbing') || ce.get('state') === f.PLAYING || P(t), fe().seek(e)); } function D(e, t) { I(!0), ce.get('state') === f.ERROR && ce.set('state', f.IDLE), Y(e), P(t); } function N(e) { let t = l(e); return t = l.filterPlaylist(t, ce.getProviders(), ce.get('androidhls'), ce.get('drm'), ce.get('preload'), ce.get('feedid'), ce.get('withCredentials')), ce.set('playlist', t), i.isArray(t) && t.length !== 0 ? (k(t), !0) : (he.triggerError({ message: 'Error loading playlist: No playable sources found' }), !1); } function Y(e) { ce.setItemIndex(e); } function F(e) { D(ce.get('item') - 1, e || { reason: 'external' }); } function W(e) { D(ce.get('item') + 1, e || { reason: 'external' }); } function J() { if (S()) { if (pe) return void (pe = !1); se = J; const e = ce.get('item'); return e === ce.get('playlist').length - 1 ? void (ce.get('repeat') ? W({ reason: 'repeat' }) : (ue && E(), ce.set('state', f.COMPLETE), he.trigger(g.JWPLAYER_PLAYLIST_COMPLETE, {}))) : void W({ reason: 'playlist' }); } } function B(e) { fe() && (e = parseInt(e, 10) || 0, fe().setCurrentQuality(e)); } function V() { return fe() ? fe().getCurrentQuality() : -1; } function z() { if (this._model) return this._model.getConfiguration(); } function U() {
            if (this._model.mediaModel) return this._model.mediaModel.get('visualQuality'); const e = H(); if (e) {
              let t = V(),
                n = e[t]; if (n) return { level: i.extend({ index: t }, n), mode: '', reason: '' };
            } return null;
          } function H() { return fe() ? fe().getQualityLevels() : null; } function G(e) { fe() && (e = parseInt(e, 10) || 0, fe().setCurrentAudioTrack(e)); } function K() { return fe() ? fe().getCurrentAudioTrack() : -1; } function q() { return fe() ? fe().getAudioTracks() : null; } function X(e) {
            e = parseInt(e, 10) || 0, ce.persistVideoSubtitleTrack(e),
            he.trigger(g.JWPLAYER_CAPTIONS_CHANGED, { tracks: $(), track: e });
          } function Q() { return oe.getCurrentIndex(); } function $() { return oe.getCaptionsList(); } function Z() { const e = ce.getVideo(); if (e) { const t = e.detachMedia(); if (t instanceof HTMLVideoElement) return t; } return null; } function ee() { const e = c.tryCatch(() => { ce.getVideo().attachMedia(); }); return e instanceof c.Error ? void c.log('Error calling _attachMedia', e) : void (typeof se === 'function' && se()); } function te(e) { i.isBoolean(e) || (e = !ce.get('fullscreen')), ce.set('fullscreen', e), this._instreamAdapter && this._instreamAdapter._adModel && this._instreamAdapter._adModel.set('fullscreen', e); } function ne() { const e = p.getPlugin('related'); e && e.next(); } function ie() { return ce.get('autostart') && !c.isMobile() || ce.autoStartOnMobile(); } var re,
            oe,
            ae,
            se,
            le,
            ue,
            ce = this._model,
            de = !1,
            pe = !1,
            he = this,
            fe = function () { return ce.getVideo(); },
            ge = new s(); ge.track(ce); var me = new e(a, ge),
            we = []; ce.setup(me, ge), re = this._view = new d(p, ce), ae = new r(p, ce, re, N), ae.on(g.JWPLAYER_READY, w, this), ae.on(g.JWPLAYER_SETUP_ERROR, this.setupError, this), ce.mediaController.on('all', m, this), ce.mediaController.on(g.JWPLAYER_MEDIA_COMPLETE, () => { i.defer(J); }), ce.mediaController.on(g.JWPLAYER_MEDIA_ERROR, this.triggerError, this), ce.on('change:flashBlocked', function (e, t) {
            if (!t) return void this._model.set('errorEvent', void 0); let n = !!e.get('flashThrottle'),
              i = { message: n ? 'Click to run Flash' : 'Flash plugin failed to load' }; n || this.trigger(g.JWPLAYER_ERROR, i), this._model.set('errorEvent', i);
          }, this), ce.on('change:state', h, this), ce.on('change:castState', (e, t) => { he.trigger(g.JWPLAYER_CAST_SESSION, t); }), ce.on('change:fullscreen', (e, t) => { he.trigger(g.JWPLAYER_FULLSCREEN, { fullscreen: t }), t && ue && E(); }), ce.on('itemReady', () => { he.triggerAfterReady(g.JWPLAYER_PLAYLIST_ITEM, { index: ce.get('item'), item: ce.get('playlistItem') }); }), ce.on('change:playlist', (e, t) => { t.length && he.triggerAfterReady(g.JWPLAYER_PLAYLIST_LOADED, { playlist: t }); }), ce.on('change:volume', (e, t) => { he.trigger(g.JWPLAYER_MEDIA_VOLUME, { volume: t }); }), ce.on('change:mute', (e, t) => { he.trigger(g.JWPLAYER_MEDIA_MUTE, { mute: t }); }), ce.on('change:controls', (e, t) => { he.trigger(g.JWPLAYER_CONTROLS, { controls: t }); }), ce.on('change:scrubbing', (e, t) => { t ? M() : P({ reason: 'interaction' }); }), ce.on('change:captionsList', (e, t) => { try { he.triggerAfterReady(g.JWPLAYER_CAPTIONS_LIST, { tracks: t, track: Q() }); } catch (n) { c.log('Error with captionsList event:', n); } }), ce.on('change:mediaModel', (e) => { e.mediaModel.on('change:state', (t, n) => { const i = v(n); e.set('state', i); }); }), oe = new o(p, ce), this.triggerAfterReady = function (e, t) { we.push({ type: e, args: t }); }, this._play = P, this._pause = M, this._seek = O, this._stop = I, this._load = _, this._next = W, this._prev = F, this._item = D, this._setCurrentCaptions = X, this._setCurrentQuality = B, this._setFullscreen = te, this.detachMedia = Z, this.attachMedia = ee, this.getCurrentQuality = V, this.getQualityLevels = H, this.setCurrentAudioTrack = G, this.getCurrentAudioTrack = K, this.getAudioTracks = q, this.getCurrentCaptions = Q, this.getCaptionsList = $, this.getVisualQuality = U, this.getConfig = z, this.getState = T, this.setVolume = ce.setVolume.bind(ce), this.setMute = ce.setMute.bind(ce), this.getProvider = function () { return ce.get('provider'); }, this.getWidth = function () { return ce.get('containerWidth'); }, this.getHeight = function () { return ce.get('containerHeight'); }, this.getContainer = function () { return this.currentContainer; }, this.resize = re.resize, this.getSafeRegion = re.getSafeRegion, this.setCues = re.addCues, this.setCaptions = re.setCaptions, this.next = ne, this.addButton = function (e, t, n, r, o) {
            let a = { img: e, tooltip: t, callback: n, id: r, btnClass: o },
              s = ce.get('dock'); s = s ? s.slice(0) : [], s = i.reject(s, i.matches({ id: a.id })), s.push(a), ce.set('dock', s);
          }, this.removeButton = function (e) { let t = ce.get('dock') || []; t = i.reject(t, i.matches({ id: e })), ce.set('dock', t); }, this.checkBeforePlay = function () { return de; }, this.getItemQoe = function () { return ce._qoeItem; }, this.setControls = function (e) { i.isBoolean(e) || (e = !ce.get('controls')), ce.set('controls', e); const t = ce.getVideo(); t && t.setControls(e); }, this.playerDestroy = function () { this.stop(), this.showView(this.originalContainer), re && re.destroy(), ce && ce.destroy(), ae && (ae.destroy(), ae = null); }, this.isBeforePlay = this.checkBeforePlay, this.isBeforeComplete = function () { return ce.getVideo().checkComplete(); }, this.createInstream = function () { return this.instreamDestroy(), this._instreamAdapter = new t(this, ce, re), this._instreamAdapter; }, this.skipAd = function () { this._instreamAdapter && this._instreamAdapter.skipAd(); }, this.instreamDestroy = function () { he._instreamAdapter && he._instreamAdapter.destroy(); }, ae.start();
        },
        showView(e) { (document.documentElement.contains(this.currentContainer) || (this.currentContainer = document.getElementById(this._model.get('id')), this.currentContainer)) && (this.currentContainer.parentElement && this.currentContainer.parentElement.replaceChild(e, this.currentContainer), this.currentContainer = e); },
        triggerError(e) { this._model.set('errorEvent', e), this._model.set('state', f.ERROR), this._model.once('change:state', function () { this._model.set('errorEvent', void 0); }, this), this.trigger(g.JWPLAYER_ERROR, e); },
        setupError(e) {
          let t = e.message,
            n = c.createElement(m(this._model.get('id'), this._model.get('skin'), t)),
            r = this._model.get('width'),
            o = this._model.get('height'); c.style(n, { width: r.toString().indexOf('%') > 0 ? r : `${r}px`, height: o.toString().indexOf('%') > 0 ? o : `${o}px` }), this.showView(n); const a = this; i.defer(() => { a.trigger(g.JWPLAYER_SETUP_ERROR, { message: t }); });
        } }, y;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(122), n(121), n(3), n(5), n(2), n(4), n(1)], r = function (e, t, n, i, r, o, a) {
      function s(n) {
        let i = '',
          r = n.get('provider'); return r && (i = r.name), i.indexOf('flash') >= 0 ? t : e;
      } let l = { skipoffset: null, tag: null },
        u = function (e, o, u) {
          function c() {
            y._adModel.set('state', 'buffering'), o.set('skipButton', !1), j++; let e,
              t = h[j]; f && (e = f[j]), E.loadItem(t, e);
          } function d(e, t) { e !== 'complete' && (t = t || {}, b.tag && !t.tag && (t.tag = b.tag), this.trigger(e, t), e !== 'mediaError' && e !== 'error' || h && j + 1 < h.length && c()); } function p(e) { y._adModel.set('duration', e.duration), y._adModel.set('position', e.position); } var h,
            f,
            g,
            m,
            w,
            v = s(o),
            y = new v(e, o),
            j = 0,
            b = {},
            E = this,
            x = a.bind(function (e) { e = e || {}, e.hasControls = !!o.get('controls'), this.trigger(n.JWPLAYER_INSTREAM_CLICK, e), y && y._adModel && (y._adModel.get('state') === i.PAUSED ? e.hasControls && y.instreamPlay() : y.instreamPause()); }, this),
            k = a.bind(() => { y && y._adModel && y._adModel.get('state') === i.PAUSED && o.get('controls') && (e.setFullscreen(), e.play()); }, this); this.type = 'instream', this.init = function (t) { g = o.getVideo(), m = o.get('position'), w = o.get('playlist')[o.get('item')], y.on('all', d, this), y.on(n.JWPLAYER_MEDIA_TIME, p, this), y.on(n.JWPLAYER_MEDIA_COMPLETE, A, this), y.init(), g.detachMedia(), o.mediaModel.set('state', i.BUFFERING), e.checkBeforePlay() || m === 0 && !g.checkComplete() ? (m = 0, o.set('preInstreamState', 'instream-preroll')) : g && g.checkComplete() || o.get('state') === i.COMPLETE ? o.set('preInstreamState', 'instream-postroll') : o.set('preInstreamState', 'instream-midroll'); const a = o.get('state'); return t || a !== i.PLAYING && a !== i.BUFFERING || g.pause(), u.setupInstream(y._adModel), y._adModel.set('state', i.BUFFERING), u.clickHandler().setAlternateClickHandlers(r.noop, null), this.setText(o.get('localization').loadingAd), this; }; var A = function (e) { const t = {}; b.tag && (t.tag = b.tag), h && j + 1 < h.length ? (this.trigger(n.JWPLAYER_MEDIA_COMPLETE, t), c()) : (e.type === n.JWPLAYER_MEDIA_COMPLETE && (this.trigger(n.JWPLAYER_MEDIA_COMPLETE, t), this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE, {})), this.destroy()); }; this.loadItem = function (e, i) {
            if (r.isAndroid(2.3)) return void this.trigger({ type: n.JWPLAYER_ERROR, message: 'Error loading instream: Cannot play instream on Android 2.3' }); let s = e; a.isArray(e) ? (h = e, f = i, e = h[j], f && (i = f[j])) : s = [e]; let u = this,
              c = o.getProviders(),
              d = v === t ? 'flash' : void 0,
              p = c.required(s, d); o.set('hideAdsControls', !1), c.load(p).then(() => { if (y !== null) { u.trigger(n.JWPLAYER_PLAYLIST_ITEM, { index: j, item: e }), b = a.extend({}, l, i), y.load(e), u.addClickHandler(); const t = e.skipoffset || b.skipoffset; t && u.setupSkipButton(t, b); } });
          }, this.setupSkipButton = function (e, t, n) { o.set('skipButton', !1), n && (A = n), y._adModel.set('skipMessage', t.skipMessage), y._adModel.set('skipText', t.skipText), y._adModel.set('skipOffset', e), o.set('skipButton', !0); }, this.applyProviderListeners = function (e) { y.applyProviderListeners(e), this.addClickHandler(); }, this.play = function () { y.instreamPlay(); }, this.pause = function () { y.instreamPause(); }, this.addClickHandler = function () { u.clickHandler().setAlternateClickHandlers(x, k), y.on(n.JWPLAYER_MEDIA_META, this.metaHandler, this); }, this.skipAd = function (e) { const t = n.JWPLAYER_AD_SKIPPED; this.trigger(t, e), A.call(this, { type: t }); }, this.metaHandler = function (e) { e.width && e.height && u.resizeMedia(); }, this.destroy = function () { if (this.off(), o.set('skipButton', !1), y) { u.clickHandler() && u.clickHandler().revertAlternateClickHandlers(), o.off(null, null, y), y.instreamDestroy(), u.destroyInstream(), y = null, e.attachMedia(); const t = o.get('preInstreamState'); switch (t) { case 'instream-preroll':case 'instream-midroll':var n = a.extend({}, w); n.starttime = m, o.loadVideo(n), r.isMobile() && o.mediaModel.get('state') === i.BUFFERING && g.setState(i.BUFFERING), g.play(); break; case 'instream-postroll':case 'instream-idle':g.stop(); } } }, this.getState = function () { return !(!y || !y._adModel) && y._adModel.get('state'); }, this.setText = function (e) { u.setAltText(e || ''); }, this.hide = function () { o.set('hideAdsControls', !0); };
        }; return a.extend(u.prototype, o), u;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(4), n(25), n(29), n(3), n(5), n(2), n(1)], r = function (e, t, n, i, r, o, a) {
      const s = function (e, i) { this.model = i, this._adModel = (new t()).setup({ id: i.get('id'), volume: i.get('volume'), fullscreen: i.get('fullscreen'), mute: i.get('mute') }), this._adModel.on('change:state', n, this); const r = e.getContainer(); this.swf = r.querySelector('object'); }; return s.prototype = a.extend({ init() {
        if (o.isChrome()) {
          let e = -1,
            t = !1; this.swf.on('throttle', function (n) { if (clearTimeout(e), n.state === 'resume')t && (t = !1, this.instreamPlay()); else { const i = this; e = setTimeout(() => { i._adModel.get('state') === r.PLAYING && (t = !0, i.instreamPause()); }, 250); } }, this);
        } this.swf.on('instream:state', this.stateHandler, this).on('instream:time', function (e) { this._adModel.set('position', e.position), this._adModel.set('duration', e.duration), this.trigger(i.JWPLAYER_MEDIA_TIME, e); }, this).on('instream:complete', function (e) { this.trigger(i.JWPLAYER_MEDIA_COMPLETE, e); }, this).on('instream:error', function (e) { this.trigger(i.JWPLAYER_MEDIA_ERROR, e); }, this), this.swf.triggerFlash('instream:init'), this.applyProviderListeners = function (e) { this.model.on('change:volume', (t, n) => { e.volume(n); }, this), this.model.on('change:mute', (t, n) => { e.mute(n); }, this), e.volume(this.model.get('volume')), e.mute(this.model.get('mute')), e.off(), e.on(i.JWPLAYER_PLAYER_STATE, this.stateHandler, this), e.on(i.JWPLAYER_MEDIA_TIME, function (e) { this.trigger(i.JWPLAYER_MEDIA_TIME, e); }, this); };
      },
      stateHandler(e) { switch (e.newstate) { case r.PLAYING:case r.PAUSED:this._adModel.set('state', e.newstate); } },
      instreamDestroy() { this._adModel && (this.off(), this.swf.off(null, null, this), this.swf.triggerFlash('instream:destroy'), this.swf = null, this._adModel.off(), this._adModel = null, this.model = null); },
      load(e) { this.swf.triggerFlash('instream:load', e); },
      instreamPlay() { this.swf.triggerFlash('instream:play'); },
      instreamPause() { this.swf.triggerFlash('instream:pause'); } }, e), s;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(4), n(29), n(3), n(5), n(25)], r = function (e, t, n, i, r, o) {
      const a = function (a, s) {
        function l(t) { const r = t || p.getVideo(); if (h !== r) { if (h = r, !r) return; r.off(), r.on('all', function (t, n) { n = e.extend({}, n, { type: t }), this.trigger(t, n); }, f), r.on(i.JWPLAYER_MEDIA_BUFFER_FULL, d), r.on(i.JWPLAYER_PLAYER_STATE, u), r.attachMedia(), r.volume(s.get('volume')), r.mute(s.get('mute') || s.get('autostartMuted')), p.on('change:state', n, f); } } function u(e) { switch (e.newstate) { case r.PLAYING:case r.PAUSED:p.set('state', e.newstate); } } function c(e) { s.trigger(e.type, e), f.trigger(i.JWPLAYER_FULLSCREEN, { fullscreen: e.jwstate }); } function d() { p.getVideo().play(); } var p,
          h,
          f = e.extend(this, t); return a.on(i.JWPLAYER_FULLSCREEN, function (e) { this.trigger(i.JWPLAYER_FULLSCREEN, e); }, f), this.init = function () { p = (new o()).setup({ id: s.get('id'), volume: s.get('volume'), fullscreen: s.get('fullscreen'), mute: s.get('mute') || s.get('autostartMuted'), instreamMode: !0 }), p.on('fullscreenchange', c), this._adModel = p; }, f.load = function (e) { p.set('item', 0), p.set('playlistItem', e), p.setActiveItem(e), l(), p.off(i.JWPLAYER_ERROR), p.on(i.JWPLAYER_ERROR, function (e) { this.trigger(i.JWPLAYER_ERROR, e); }, f), p.loadVideo(e); }, f.applyProviderListeners = function (e) { l(e), e.off(i.JWPLAYER_ERROR), e.on(i.JWPLAYER_ERROR, function (e) { this.trigger(i.JWPLAYER_ERROR, e); }, f), s.on('change:volume', (e, t) => { h.volume(t); }, f), s.on('change:mute', (e, t) => { h.mute(t); }, f), s.on('change:autostartMuted', (e, t) => { t || h.mute(s.get('mute')); }, f); }, this.instreamDestroy = function () { p && (p.off(), this.off(), h && (h.detachMedia(), h.off(), p.getVideo() && h.destroy()), p = null, a.off(null, null, this), a = null); }, f.instreamPlay = function () { p.getVideo() && p.getVideo().play(!0); }, f.instreamPause = function () { p.getVideo() && p.getVideo().pause(!0); }, f;
      }; return a;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(64), n(3), n(1)], r = function (e, t, n) { function i(e) { e.mediaController.off(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, e._onPlayAttempt), e.mediaController.off(t.JWPLAYER_PROVIDER_FIRST_FRAME, e._triggerFirstFrame), e.mediaController.off(t.JWPLAYER_MEDIA_TIME, e._onTime); } function r(e) { i(e), e._triggerFirstFrame = n.once(() => { const n = e._qoeItem; n.tick(t.JWPLAYER_MEDIA_FIRST_FRAME); const r = n.between(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, t.JWPLAYER_MEDIA_FIRST_FRAME); e.mediaController.trigger(t.JWPLAYER_MEDIA_FIRST_FRAME, { loadTime: r }), i(e); }), e._onTime = a(e._triggerFirstFrame), e._onPlayAttempt = function () { e._qoeItem.tick(t.JWPLAYER_MEDIA_PLAY_ATTEMPT); }, e.mediaController.on(t.JWPLAYER_MEDIA_PLAY_ATTEMPT, e._onPlayAttempt), e.mediaController.once(t.JWPLAYER_PROVIDER_FIRST_FRAME, e._triggerFirstFrame), e.mediaController.on(t.JWPLAYER_MEDIA_TIME, e._onTime); } function o(n) { function i(n, i, o) { n._qoeItem && o && n._qoeItem.end(o.get('state')), n._qoeItem = new e(), n._qoeItem.tick(t.JWPLAYER_PLAYLIST_ITEM), n._qoeItem.start(i.get('state')), r(n), i.on('change:state', (e, t, i) => { n._qoeItem.end(i), n._qoeItem.start(t); }); }n.on('change:mediaModel', i); } var a = function (e) { let t = 0; return function (n) { const i = n.position; i > t && e(), t = i; }; }; return { model: o }; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(21), n(49), n(15), n(61), n(22), n(1), n(2), n(3)], r = function (e, t, i, r, o, a, s, l) {
      function u() { const e = { LOAD_PROMISE_POLYFILL: { method: c, depends: [] }, LOAD_BASE64_POLYFILL: { method: d, depends: [] }, LOADED_POLYFILLS: { method: p, depends: ['LOAD_PROMISE_POLYFILL', 'LOAD_BASE64_POLYFILL'] }, LOAD_PLUGINS: { method: h, depends: ['LOADED_POLYFILLS'] }, INIT_PLUGINS: { method: f, depends: ['LOAD_PLUGINS', 'SETUP_VIEW'] }, LOAD_SKIN: { method: E, depends: ['LOADED_POLYFILLS'] }, LOAD_PLAYLIST: { method: m, depends: ['LOADED_POLYFILLS'] }, CHECK_FLASH: { method: w, depends: ['LOADED_POLYFILLS'] }, FILTER_PLAYLIST: { method: v, depends: ['LOAD_PLAYLIST', 'CHECK_FLASH'] }, SETUP_VIEW: { method: x, depends: ['LOAD_SKIN'] }, SET_ITEM: { method: k, depends: ['INIT_PLUGINS', 'FILTER_PLAYLIST'] }, SEND_READY: { method: A, depends: ['SETUP_VIEW', 'SET_ITEM'] } }; return e; } function c(e) { window.Promise ? e() : n.e(8, (require) => { n(55), e(); }); } function d(e) { window.btoa && window.atob ? e() : n.e(10, (require) => { n(53), e(); }); } function p(e) { e(); } function h(t, n) { window.jwplayerPluginJsonp = e.registerPlugin, C = e.loadPlugins(n.get('id'), n.get('plugins')), C.on(l.COMPLETE, t), C.on(l.ERROR, a.partial(g, t)), C.load(); } function f(e, t, n) { delete window.jwplayerPluginJsonp, C.setupPlugins(n, t), e(); } function g(e, t) { _(e, 'Could not load plugin', t.message); } function m(e, n) { const i = n.get('playlist'); a.isString(i) ? (L = new t(), L.on(l.JWPLAYER_PLAYLIST_LOADED, (t) => { n.set('playlist', t.playlist), n.set('feedid', t.feedid), e(); }), L.on(l.JWPLAYER_ERROR, a.partial(y, e)), L.load(i)) : e(); } function w(e, t, n) {
        let i = t.get('primary') === 'flash',
          o = s.flashVersion(); if (i && o) {
          let a = n.getContainer(),
            l = a.parentElement; l || e(); const u = document.createElement('div'); u.id = t.get('id'); let c = `${u.id}-${Math.random().toString(16).substr(2)}`,
            d = t.get('flashloader'),
            p = t.get('width'),
            h = t.get('height'); s.style(u, { position: 'relative', width: p.toString().indexOf('%') > 0 ? p : `${p}px`, height: h.toString().indexOf('%') > 0 ? h : `${h}px` }); const f = r.embed(d, u, c, null); l.replaceChild(u, a); const g = function () { m !== -1 && (clearTimeout(m), m = -1, e()); }; f.embedCallback = g; var m = setTimeout(() => { t.set('primary', void 0), t.updateProviders(), g(); }, 3e3);
        } else e();
      } function v(e, t, n, i, r) {
        let o = t.get('playlist'),
          a = r(o); a ? e() : y(e);
      } function y(e, t) { t && t.message ? _(e, 'Error loading playlist', t.message) : _(e, 'Error loading player', 'No playable sources found'); } function j(e, t) { if (a.contains(o.SkinsLoadable, e)) return `${t}skins/${e}.css`; } function b(e) { for (let t = document.styleSheets, n = 0, i = t.length; n < i; n++) if (t[n].href === e) return !0; return !1; } function E(e, t) {
        let n = t.get('skin'),
          r = t.get('skinUrl'); if (a.contains(o.SkinsIncluded, n)) return void e(); if (r || (r = j(n, t.get('base'))), a.isString(r) && !b(r)) {
          t.set('skin-loading', !0); let s = !0,
            u = new i(r, s); u.addEventListener(l.COMPLETE, () => { t.set('skin-loading', !1); }), u.addEventListener(l.ERROR, () => { t.set('skin', 'seven'), t.set('skin-loading', !1); }), u.load();
        }a.defer(() => { e(); });
      } function x(e, t, n, i) { i.setup(), e(); } function k(e, t) { t.once('itemReady', e), t.setItemIndex(t.get('item')); } function A(e) { e({ type: 'complete' }); } function _(e, t, n) { e({ type: 'error', msg: t, reason: n }); } let C,
        L; return { getQueue: u, error: _ };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(2)], r = function (e, t) { function n(e) { return `jwplayer.${e}`; } function i() { return e.reduce(this.persistItems, (e, i) => { const r = l[n(i)]; return r && (e[i] = t.serialize(r)), e; }, {}); } function r(e, t) { try { l[n(e)] = t; } catch (i) { const r = window.jwplayer; r && r.debug && console.error(i); } } function o() { e.each(this.persistItems, (e) => { l.removeItem(n(e)); }); } function a() { this.persistItems = ['volume', 'mute', 'captionLabel', 'qualityLabel']; } function s(t) { e.each(this.persistItems, (e) => { t.on(`change:${e}`, (t, n) => { r(e, n); }); }); } var l = { removeItem: t.noop }; try { l = window.localStorage; } catch (u) {} return e.extend(a.prototype, { getAllItems: i, track: s, clear: o }), a; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(69), n(2)], r = function (e, t) { return n.p = t.loadFrom(), e.selectPlayer; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(8)], r = function (e) {
      function t(e) { e || n(); } function n() { throw new Error('Invalid DFXP file'); } const i = e.seconds; return function (r) {
        t(r); let o = [],
          a = r.getElementsByTagName('p'),
          s = 30,
          l = r.getElementsByTagName('tt'); if (l && l[0]) { const u = parseFloat(l[0].getAttribute('ttp:frameRate')); isNaN(u) || (s = u); }t(a), a.length || (a = r.getElementsByTagName('tt:p'), a.length || (a = r.getElementsByTagName('tts:p'))); for (let c = 0; c < a.length; c++) {
          for (var d = a[c], p = d.getElementsByTagName('br'), h = 0; h < p.length; h++) { const f = p[h]; f.parentNode.replaceChild(r.createTextNode('\r\n'), f); } let g = d.innerHTML || d.textContent || d.text || '',
            m = e.trim(g).replace(/>\s+</g, '><').replace(/(<\/?)tts?:/g, '$1').replace(/<br.*?\/>/g, '\r\n'); if (m) {
            let w = d.getAttribute('begin'),
              v = d.getAttribute('dur'),
              y = d.getAttribute('end'),
              j = { begin: i(w, s), text: m }; y ? j.end = i(y, s) : v && (j.end = j.begin + i(v, s)), o.push(j);
          }
        } return o.length || n(), o;
      };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(20), n(8), n(2)], r = function (e, t, n) {
      let i = 'jwplayer',
        r = function (r, o) { for (var a = [], s = [], l = t.xmlAttribute, u = 'default', c = 'label', d = 'file', p = 'type', h = 0; h < r.childNodes.length; h++) { const f = r.childNodes[h]; if (f.prefix === i) { const g = e.localName(f); g === 'source' ? (delete o.sources, a.push({ file: l(f, d), default: l(f, u), label: l(f, c), type: l(f, p) })) : g === 'track' ? (delete o.tracks, s.push({ file: l(f, d), default: l(f, u), kind: l(f, 'kind'), label: l(f, c) })) : (o[g] = n.serialize(e.textContent(f)), g === 'file' && o.sources && delete o.sources); }o[d] || (o[d] = o.link); } if (a.length) for (o.sources = [], h = 0; h < a.length; h++)a[h].file.length > 0 && (a[h][u] = a[h][u] === 'true', a[h].label.length || delete a[h].label, o.sources.push(a[h])); if (s.length) for (o.tracks = [], h = 0; h < s.length; h++)s[h].file.length > 0 && (s[h][u] = s[h][u] === 'true', s[h].kind = s[h].kind.length ? s[h].kind : 'captions', s[h].label.length || delete s[h].label, o.tracks.push(s[h])); return o; }; return r;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(20), n(8), n(2)], r = function (e, t, n) {
      function i(e) { for (var t = [], n = 0; n < s(e); n++) { const i = e.childNodes[n]; i.prefix === 'jwplayer' && o(i).toLowerCase() === 'mediatypes' && t.push(a(i)); } return t; } var r = t.xmlAttribute,
        o = e.localName,
        a = e.textContent,
        s = e.numChildren,
        l = 'media',
        u = function (e, t) {
          function c(e) { const t = { zh: 'Chinese', nl: 'Dutch', en: 'English', fr: 'French', de: 'German', it: 'Italian', ja: 'Japanese', pt: 'Portuguese', ru: 'Russian', es: 'Spanish' }; return t[e] ? t[e] : e; } let d,
            p,
            h = 'tracks',
            f = []; for (p = 0; p < s(e); p++) {
            if (d = e.childNodes[p], d.prefix === l) {
              if (!o(d)) continue; switch (o(d).toLowerCase()) {
                case 'content':if (r(d, 'duration') && (t.duration = n.seconds(r(d, 'duration'))), r(d, 'url')) {
                  t.sources || (t.sources = []); let g = { file: r(d, 'url'), type: r(d, 'type'), width: r(d, 'width'), label: r(d, 'label') },
                    m = i(d); m.length && (g.mediaTypes = m), t.sources.push(g);
                }s(d) > 0 && (t = u(d, t)); break; case 'title':t.title = a(d); break; case 'description':t.description = a(d); break; case 'guid':t.mediaid = a(d); break; case 'thumbnail':t.image || (t.image = r(d, 'url')); break; case 'player':break; case 'group':u(d, t); break; case 'subtitle':var w = {}; w.file = r(d, 'url'), w.kind = 'captions', r(d, 'lang').length > 0 && (w.label = c(r(d, 'lang'))), f.push(w);
              }
            }
          } for (t.hasOwnProperty(h) || (t[h] = []), p = 0; p < f.length; p++)t[h].push(f[p]); return t;
        }; return u;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1)], r = function (e) {
      let t = { kind: 'captions', default: !1 },
        n = function (n) { if (n && n.file) return e.extend({}, t, n); }; return n;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(26), n(2), n(3), n(4), n(1), n(15)], r = function (e, t, n, i, r, o) {
      function a(e, t, n) { return function () { const i = e.getContainer().getElementsByClassName('jw-overlays')[0]; i && (i.appendChild(n), n.left = i.style.left, n.top = i.style.top, t.displayArea = i); }; } function s(e) { function t() { const t = e.displayArea; t && e.resize(t.clientWidth, t.clientHeight); } return function () { t(), setTimeout(t, 400); }; } const l = function (l, u) {
        function c() { m || (m = !0, g = o.loaderstatus.COMPLETE, f.trigger(n.COMPLETE)); } function d() {
          if (!v && (u && r.keys(u).length !== 0 || c(), !m)) {
            const i = l.getPlugins(); h = r.after(w, c), r.each(u, (r, a) => {
              let s = e.getPluginName(a),
                l = i[s],
                u = l.getJS(),
                c = l.getTarget(),
                d = l.getStatus(); d !== o.loaderstatus.LOADING && d !== o.loaderstatus.NEW && (u && !t.versionCheck(c) && f.trigger(n.ERROR, { message: 'Incompatible player version' }), h());
            });
          }
        } function p(e) { if (!v) { const i = 'File not found'; e.url && t.log(i, e.url), this.off(), this.trigger(n.ERROR, { message: i }), d(); } } var h,
          f = r.extend(this, i),
          g = o.loaderstatus.NEW,
          m = !1,
          w = r.size(u),
          v = !1; this.setupPlugins = function (n, i) {
          let o = [],
            u = l.getPlugins(),
            c = i.get('plugins'); r.each(c, (i, l) => {
            let d = e.getPluginName(l),
              p = u[d],
              h = p.getFlashPath(),
              f = p.getJS(),
              g = p.getURL(); if (h) { const m = r.extend({ name: d, swf: h, pluginmode: p.getPluginmode() }, i); o.push(m); } const w = t.tryCatch(() => {
              if (f) {
                const e = c[g]; if (!e) return void t.log('JW Plugin already loaded', d, g); const i = document.createElement('div'); i.id = `${n.id}_${d}`, i.className = 'jw-plugin jw-reset'; let o = r.extend({}, e),
                  l = p.getNewInstance(n, o, i); l.addToPlayer = a(n, l, i), l.resizeHandler = s(l), n.addPlugin(d, l, i);
              }
            }); w instanceof t.Error && t.log(`ERROR: Failed to load ${d}.`);
          }), i.set('flashPlugins', o);
        }, this.load = function () { if (t.exists(u) && t.typeOf(u) !== 'object') return void d(); g = o.loaderstatus.LOADING, r.each(u, (e, i) => { if (t.exists(i)) { const r = l.addPlugin(i); r.on(n.COMPLETE, d), r.on(n.ERROR, p); } }); const e = l.getPlugins(); r.each(e, (e) => { e.load(); }), d(); }, this.destroy = function () { v = !0, this.off(); }, this.getStatus = function () { return g; };
      }; return l;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(26), n(52)], r = function (e, t) { const n = function (n) { this.addPlugin = function (i) { const r = e.getPluginName(i); return n[r] || (n[r] = new t(i)), n[r]; }, this.getPlugins = function () { return n; }; }; return n; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  },, function (e, t, n) {
    let i,
      r; i = [], r = function () { return {}; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(58), n(2), n(1), n(65)], r = function (e, t, n, i) {
      const r = [{ name: 'youtube', supports(e) { return t.isYouTube(e.file, e.type); } }, { name: 'html5',
        supports(n) {
          let r = { aac: 'audio/mp4', mp4: 'video/mp4', f4v: 'video/mp4', m4v: 'video/mp4', mov: 'video/mp4', mp3: 'audio/mpeg', mpeg: 'audio/mpeg', ogv: 'video/ogg', ogg: 'video/ogg', oga: 'video/ogg', vorbis: 'video/ogg', webm: 'video/webm', f4a: 'video/aac', m3u8: 'application/vnd.apple.mpegurl', m3u: 'application/vnd.apple.mpegurl', hls: 'application/vnd.apple.mpegurl' },
            o = n.file,
            a = n.type,
            s = e(n); if (s !== null) return s; if (t.isRtmp(o, a)) return !1; if (!r[a]) return !1; if (i.canPlayType) { const l = i.canPlayType(r[a]); return !!l; } return !1;
        } }, { name: 'flash',
        supports(e) {
          let i = { flv: 'video', f4v: 'video', mov: 'video', m4a: 'video', m4v: 'video', mp4: 'video', aac: 'video', f4a: 'video', mp3: 'sound', mpeg: 'sound', smil: 'rtmp' },
            r = n.keys(i); if (!t.isFlashSupported()) return !1; let o = e.file,
            a = e.type; return !!t.isRtmp(o, a) || n.contains(r, a);
        } }]; return r;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(13), n(38), n(134), n(1), n(137)], r = function (e, t, i, r, o) {
      function a(e) { this.config = e || {}, this.providers = this.reorderProviders(this.config.primary); }a.loaders = { html5(e) { n.e(4, (require) => { const t = n(71); s(t), e(t); }); }, flash(e) { n.e(5, (require) => { const t = n(57); s(t), e(t); }); }, youtube(e) { n.e(6, (require) => { const t = n(59); s(t), e(t); }); } }; var s = a.registerProvider = function (n) { const a = n.getName().name; if (!i[a]) { if (!r.find(t, r.matches({ name: a }))) { if (!r.isFunction(n.supports)) throw { message: 'Tried to register a provider with an invalid object' }; t.unshift({ name: a, supports: n.supports }); }o(n.prototype, e), i[a] = n; } }; return r.extend(a.prototype, { load(e) { return Promise.all(r.map(e, e => new Promise(((t) => { const n = a.loaders[e.name]; n ? n(t) : t(); })))); },
        reorderProviders(e) {
          const n = r.clone(t); if (e === 'flash') {
            let i = r.indexOf(n, r.findWhere(n, { name: 'flash' })),
              o = n.splice(i, 1)[0],
              a = r.indexOf(n, r.findWhere(n, { name: 'html5' })); n.splice(a, 0, o);
          } return n;
        },
        providerSupports(e, t) { return e.supports(t); },
        required(e, t) {
          let n = this,
            i = this.reorderProviders(t); return e = e.slice(), r.compact(r.map(i, (t) => {
            for (var i = !1, r = e.length; r--;) {
              let o = e[r],
                a = n.providerSupports(t, o.sources[0]); a && e.splice(r, 1), i = i || a;
            } if (i) return t;
          }));
        },
        choose(e) { e = r.isObject(e) ? e : {}; for (let t = this.providers.length, n = 0; n < t; n++) { const o = this.providers[n]; if (this.providerSupports(o, e)) { const a = t - n - 1; return { priority: a, name: o.name, type: e.type, providerToCheck: o, provider: i[o.name] }; } } return null; } }), a;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1)], r = function (e) { return function (t) { return e.each(Array.prototype.slice.call(arguments, 1), (e) => { if (e) for (const n in e)n in t || (t[n] = e[n]); }), t; }; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [], r = function () { return { hasClass(e, t) { const n = ` ${t} `; return e.nodeType === 1 && (` ${e.className} `).replace(/[\t\r\n\f]/g, ' ').indexOf(n) >= 0; } }; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(4)], r = function (e, t) { const n = e.extend({ get(e) { return this.attributes = this.attributes || {}, this.attributes[e]; }, set(e, t) { if (this.attributes = this.attributes || {}, this.attributes[e] !== t) { const n = this.attributes[e]; this.attributes[e] = t, this.trigger(`change:${e}`, this, t, n); } }, clone() { return e.clone(this.attributes); } }, t); return n; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1)], r = function (e) {
      const t = {}; return t.isDvr = function (e, t) { return Math.abs(e) >= Math.max(t, 0); }, t.streamType = function (n, i) {
        let r = e.isUndefined(i) ? 120 : i,
          o = 'VOD'; return n === 1 / 0 ? o = 'LIVE' : n < 0 && (o = t.isDvr(n, r) ? 'DVR' : 'LIVE'), o;
      }, t;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [], r = function () {
      var e = function (e, n, i) { n = n || this, i = i || []; const r = window.jwplayer; if (r && r.debug) return e.apply(n, i); try { return e.apply(n, i); } catch (o) { return new t(e.name, o); } },
        t = function (e, t) { this.name = e, this.message = t.message || t.toString(), this.error = t; }; return { tryCatch: e, Error: t };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(1)], r = function (e) {
      return function (t, n, i) {
        let r = 'jw-breakpoint-',
          o = n,
          a = i; r += o >= 1280 ? '7' : o >= 960 ? '6' : o >= 800 ? '5' : o >= 640 ? '4' : o >= 540 ? '3' : o >= 420 ? '2' : o >= 320 ? '1' : '0', e.replaceClass(t, /jw-breakpoint-\d+/, r), e.toggleClass(t, 'jw-orientation-portrait', a > o);
      };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(23), n(5), n(1)], r = function (e, t, i, r) {
      let o = t.style,
        a = { back: !0, fontSize: 14, fontFamily: 'Arial,sans-serif', fontOpacity: 100, color: '#FFF', backgroundColor: '#000', backgroundOpacity: 100, edgeStyle: null, windowColor: '#FFF', windowOpacity: 0, preprocessor: r.identity },
        s = function (s) {
          function l(e, n, i) { if (t.css(`#${e} .jw-text-track-display`, n, e), t.css(`#${e} .jw-text-track-cue`, i, e), t.css(`#${e} .jw-video::-webkit-media-text-track-display`, n, e), t.css(`#${e} .jw-video::cue`, i, e), i.backgroundColor) { const r = `{background-color: ${i.backgroundColor} !important;}`; t.css(`#${e} .jw-video::-webkit-media-text-track-display-backdrop`, r, e); } } function u(e, n, i) { const r = t.hexToRgba('#000000', i); e === 'dropshadow' ? n.textShadow = `0 2px 1px ${r}` : e === 'raised' ? n.textShadow = `0 0 5px ${r}, 0 1px 5px ${r}, 0 2px 5px ${r}` : e === 'depressed' ? n.textShadow = `0 -2px 1px ${r}` : e === 'uniform' && (n.textShadow = `-2px 0 1px ${r},2px 0 1px ${r},0 -2px 1px ${r},0 2px 1px ${r},-1px 1px 1px ${r},1px 1px 1px ${r},1px -1px 1px ${r},1px 1px 1px ${r}`); } function c(e) { f = e, this.selectCues(p, f); } function d() { s.get('renderCaptionsNatively') || n.e(7, (require) => { v = n(56); }); } let p,
            h,
            f,
            g,
            m,
            w,
            v,
            y = {}; g = document.createElement('div'), g.className = 'jw-captions jw-reset', this.show = function () { g.className = 'jw-captions jw-captions-enabled jw-reset'; }, this.hide = function () { g.className = 'jw-captions jw-reset'; }, this.populate = function (e) { return h = [], p = e, e ? void this.selectCues(e, f) : (h = [], void this.renderCues()); }, this.resize = function () {
            let e = g.clientWidth,
              t = Math.pow(e / 400, 0.6); if (t) { const n = y.fontSize * t; o(g, { fontSize: `${Math.floor(2 * n) / 2}px` }); } this.renderCues(!0);
          }, this.renderCues = function (e) { e = !!e, v && v.WebVTT.processCues(window, h, g, e); }, this.selectCues = function (e, t) {
            let n,
              i; e && e.data && t && (i = this.getAlignmentPosition(e, t), i !== !1 && (n = this.getCurrentCues(e.data, i), this.updateCurrentCues(n), this.renderCues(!0)));
          }, this.getCurrentCues = function (e, t) { return r.filter(e, e => t >= e.startTime && (!e.endTime || t <= e.endTime)); }, this.updateCurrentCues = function (e) { return e.length ? r.difference(e, h).length && (m.className = 'jw-captions-window jw-reset jw-captions-window-active', h = e) : h = [], h; }, this.getAlignmentPosition = function (e, t) {
            let n = e.source,
              i = t.metadata; return n ? !(!i || !r.isNumber(i[n])) && i[n] : e.embedded && t.duration < 0 ? t.position - t.duration : t.position;
          }, this.clear = function () { e.empty(g); }, this.setContainerHeight = function (e) { o(g, { height: e }); }, this.setup = function (e, n) {
            m = document.createElement('div'), w = document.createElement('span'), m.className = 'jw-captions-window jw-reset', w.className = 'jw-captions-text jw-reset', y = r.extend({}, a, n); let i = y.fontOpacity,
              c = y.windowOpacity,
              d = y.edgeStyle,
              p = y.backgroundColor,
              h = {},
              f = { color: t.hexToRgba(y.color, i), fontFamily: y.fontFamily, fontStyle: y.fontStyle, fontWeight: y.fontWeight, textDecoration: y.textDecoration }; c && (h.backgroundColor = t.hexToRgba(y.windowColor, c)), u(d, f, i), y.back ? f.backgroundColor = t.hexToRgba(p, y.backgroundOpacity) : d === null && u('uniform', f), o(m, h), o(w, f), l(e, h, f), m.appendChild(w), g.appendChild(m), this.populate(s.get('captionsTrack')), s.set('captions', y);
          }, this.element = function () { return g; }, s.on('change:playlistItem', () => { f = null, h = []; }, this), s.on('change:captionsTrack', function (e, t) { this.populate(t); }, this), s.mediaController.on('seek', () => { h = []; }, this), s.mediaController.on('time seek', c, this), s.mediaController.on('subtitlesTrackData', function () { this.selectCues(p, f); }, this),
          s.on('change:state', function (e, t) { switch (t) { case i.IDLE:case i.ERROR:case i.COMPLETE:this.hide(); break; default:this.show(); } }, this), s.on('itemReady', d, this);
        }; return s;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(7), n(3), n(4), n(1)], r = function (e, t, n, i) {
      const r = function (r, o, a) {
        function s(e) { if (!r.get('flashBlocked')) return c ? void c(e) : void f.trigger(e.type === t.touchEvents.CLICK ? 'click' : 'tap'); } function l() { return d ? void d() : void f.trigger('doubleClick'); } let u,
          c,
          d,
          p = { enableDoubleTap: !0, useMove: !0 }; i.extend(this, n), u = o, this.element = function () { return u; }; const h = new e(u, i.extend(p, a)); h.on('click tap', s), h.on('doubleClick doubleTap', l), h.on('move', () => { f.trigger('move'); }), h.on('over', () => { f.trigger('over'); }), h.on('out', () => { f.trigger('out'); }), this.clickHandler = s; var f = this; this.setAlternateClickHandlers = function (e, t) { c = e, d = t || null; }, this.revertAlternateClickHandlers = function () { c = null, d = null; };
      }; return r;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(2), n(30)], r = function (e, t, n) { function i(e, t) { this.time = e, this.text = t, this.el = document.createElement('div'), this.el.className = 'jw-cue jw-reset'; }e.extend(i.prototype, { align(e) { if (this.time.toString().slice(-1) === '%') this.pct = this.time; else { const t = this.time / e * 100; this.pct = `${t}%`; } this.el.style.left = this.pct; } }); const r = { loadChapters(e) { t.ajax(e, this.chaptersLoaded.bind(this), this.chaptersFailed, { plainText: !0 }); }, chaptersLoaded(t) { const i = n(t.responseText); e.isArray(i) && (e.each(i, this.addCue, this), this.drawCues()); }, chaptersFailed() {}, addCue(e) { this.cues.push(new i(e.begin, e.text)); }, drawCues() { const t = this._model.mediaModel.get('duration'); if (!t || t <= 0) return void this._model.mediaModel.once('change:duration', this.drawCues, this); const n = this; e.each(this.cues, (e) => { e.align(t), e.el.addEventListener('mouseover', () => { n.activeCue = e; }), e.el.addEventListener('mouseout', () => { n.activeCue = null; }), n.elementRail.appendChild(e.el); }); }, resetChapters() { e.each(this.cues, (e) => { e.el.parentNode && e.el.parentNode.removeChild(e.el); }, this), this.cues = []; } }; return r; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(36), n(2), n(1), n(7), n(90)], r = function (e, t, n, i, r) {
      const o = e.extend({ setup(e, o, a) {
        a = a || {}, this.iconUI || (this.iconUI = new i(this.el, { useHover: !0, directSelect: !0 }), this.toggleValueListener = this.toggleValue.bind(this), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.select.bind(this)), this.reset(), e = n.isArray(e) ? e : [], t.toggleClass(this.el, 'jw-hidden', e.length < 2); let s = e.length > 2 || e.length === 2 && a && a.toggle === !1,
          l = !s && e.length === 2; if (t.toggleClass(this.el, 'jw-toggle', l || !!a.isToggle), t.toggleClass(this.el, 'jw-button-color', !l), this.isActive = s || l, s) {
          t.removeClass(this.el, 'jw-off'), this.iconUI.on('tap', this.toggleOpenStateListener).on('over', this.openTooltipListener).on('out', this.closeTooltipListener); let u = r(e),
            c = t.createElement(u); this.addContent(c), this.contentUI = new i(this.content).on('click tap', this.selectListener);
        } else l && this.iconUI.on('click tap', this.toggleValueListener); this.selectItem(o);
      },
      toggleValue() { this.trigger('toggleValue'); },
      select(e) {
        if (e.target.parentElement === this.content) {
          let i = t.classList(e.target),
            r = n.find(i, e => e.indexOf('jw-item') === 0); r && (this.trigger('select', parseInt(r.split('-')[2])), this.closeTooltipListener());
        }
      },
      selectItem(e) { if (this.content) for (let n = 0; n < this.content.children.length; n++)t.toggleClass(this.content.children[n], 'jw-active-option', e === n); t.toggleClass(this.el, 'jw-off', e === 0); },
      reset() { t.addClass(this.el, 'jw-off'), this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent(); } }); return o;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(32), n(7), n(1), n(2), n(91)], r = function (e, t, n, i, r) { const o = function (e, t, n, i) { this._model = e, this._api = t, this._nextButton = n, this._playerElement = i, this.nextUpText = e.get('localization').nextUp, this.state = 'tooltip'; }; return n.extend(o.prototype, { setup() { this.container = document.createElement('div'), this.container.className = 'jw-nextup-container jw-reset'; const e = i.createElement(r()); this.addContent(e), this.closeButton = this.content.querySelector('.jw-nextup-close'), this.tooltip = this.content.querySelector('.jw-nextup-tooltip'), this.showNextUp = !1, this.streamType = void 0, this._model.on('change:mediaModel', this.onMediaModel, this), this._model.on('change:streamType', this.onStreamType, this), this._model.on('change:nextUp', this.onNextUp, this), this._model.on('change:duration', this.onDuration, this), this._model.on('change:position', this.onElapsed, this), this.onMediaModel(this._model, this._model.get('mediaModel')), new t(this.closeButton, { directSelect: !0 }).on('click tap', this.hide, this), new t(this.tooltip).on('click tap', this.click, this), new t(this._nextButton.element(), { useHover: !0, directSelect: !0 }).on('click tap', this.click, this).on('over', this.show, this).on('out', this.hoverOut, this); }, loadThumbnail(e) { return this.nextUpImage = new Image(), this.nextUpImage.onload = function () { this.nextUpImage.onload = null; }.bind(this), this.nextUpImage.src = e, { backgroundImage: `url("${e}")` }; }, click() { this.state = 'tooltip', this._api.next(), this.hide(); }, show() { this.state === 'opened' || this.hideToolTip || (e.addClass(this.container, 'jw-nextup-container-visible'), e.addClass(this._playerElement, 'jw-flag-nextup')); }, hide() { e.removeClass(this.container, 'jw-nextup-container-visible'), e.removeClass(this.container, 'jw-nextup-sticky'), e.removeClass(this._playerElement, 'jw-flag-nextup'), this.state === 'opened' && (this.state = 'closed'); }, hoverOut() { this.state !== 'opened' && this.hide(); }, showTilEnd() { this.state !== 'opened' && this.state !== 'closed' && (e.addClass(this.container, 'jw-nextup-sticky'), this.show(), this.state = 'opened'); }, setNextUpItem(t) { const n = this; setTimeout(() => { if (n.hideToolTip = !(t.title || t.image), !n.hideToolTip) { if (n.thumbnail = n.content.querySelector('.jw-nextup-thumbnail'), e.toggleClass(n.thumbnail, 'jw-nextup-thumbnail-visible', !!t.image), t.image) { const r = n.loadThumbnail(t.image); i.style(n.thumbnail, r); }n.header = n.content.querySelector('.jw-nextup-header'), n.header.innerText = n.nextUpText, n.title = n.content.querySelector('.jw-nextup-title'); const o = t.title; n.title.innerText = o ? i.createElement(o).textContent : ''; } }, 500); }, onNextUp(e, t) { return t ? (this.showNextUp = !0, this._nextButton.toggle(!0), void this.setNextUpItem(t)) : (this._nextButton.toggle(!1), void (this.showNextUp = !1)); }, onDuration(e, t) { if (t) { let n = i.seconds(e.get('nextupoffset') || -10); n < 0 && (n += t), this.offset = n; } }, onMediaModel(e, t) { t.on('change:state', function (e, t) { t === 'complete' && (this.state = 'tooltip', this.hide()); }, this); }, onElapsed(e, t) { this.streamType === 'VOD' && this.showNextUp && t >= this.offset ? this.showTilEnd() : this.state !== 'opened' && this.state !== 'closed' || (this.state = 'tooltip', this.hide()); }, onStreamType(e, t) { this.streamType = t; }, element() { return this.container; }, addContent(e) { this.content && this.removeContent(), this.content = e, this.container.appendChild(e); }, removeContent() { this.content && (this.container.removeChild(this.content), this.content = null); } }), o; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(2), n(30)], r = function (e, t, n) {
      function i(e) { this.begin = e.begin, this.end = e.end, this.img = e.text; } const r = { loadThumbnails(e) { e && (this.vttPath = e.split('?')[0].split('/').slice(0, -1).join('/'), this.individualImage = null, t.ajax(e, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), { plainText: !0 })); },
        thumbnailsLoaded(t) { const r = n(t.responseText); e.isArray(r) && (e.each(r, function (e) { this.thumbnails.push(new i(e)); }, this), this.drawCues()); },
        thumbnailsFailed() {},
        chooseThumbnail(t) { let n = e.sortedIndex(this.thumbnails, { end: t }, e.property('end')); n >= this.thumbnails.length && (n = this.thumbnails.length - 1); let i = this.thumbnails[n].img; return i.indexOf('://') < 0 && (i = this.vttPath ? `${this.vttPath}/${i}` : i), i; },
        loadThumbnail(t) {
          let n = this.chooseThumbnail(t),
            i = { display: 'block', margin: '0 auto', backgroundPosition: '0 0' },
            r = n.indexOf('#xywh'); if (r > 0) try { const o = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(n); n = o[1], i.backgroundPosition = `${o[2] * -1}px ${o[3] * -1}px`, i.width = o[4], i.height = o[5]; } catch (a) { return; } else this.individualImage || (this.individualImage = new Image(), this.individualImage.onload = e.bind(function () { this.individualImage.onload = null, this.timeTip.image({ width: this.individualImage.width, height: this.individualImage.height }); }, this), this.individualImage.src = n); return i.backgroundImage = `url("${n}")`, i;
        },
        showThumbnail(e) { this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(e)); },
        resetThumbnails() { this.timeTip.image({ backgroundImage: '', width: 0, height: 0 }), this.thumbnails = []; } }; return r;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(2), n(22), n(35), n(36), n(145), n(148)], r = function (e, t, n, i, r, o, a) {
      function s() { return { reason: 'interaction' }; } let l = r.extend({ setup() { this.text = document.createElement('span'), this.text.className = 'jw-text jw-reset', this.img = document.createElement('div'), this.img.className = 'jw-reset'; const e = document.createElement('div'); e.className = 'jw-time-tip jw-background-color jw-reset', e.appendChild(this.img), e.appendChild(this.text), t.removeClass(this.el, 'jw-hidden'), this.addContent(e); }, image(e) { t.style(this.img, e); }, update(e) { this.text.innerHTML = e; } }),
        u = i.extend({ constructor(t, n) { this._model = t, this._api = n, this.timeTip = new l('jw-tooltip-time'), this.timeTip.setup(), this.cues = [], this.seekThrottled = e.throttle(this.performSeek, 400), this._model.on('change:playlistItem', this.onPlaylistItem, this).on('change:position', this.onPosition, this).on('change:duration', this.onDuration, this).on('change:buffer', this.onBuffer, this), i.call(this, 'jw-slider-time', 'horizontal'); },
          setup() { i.prototype.setup.apply(this, arguments), this._model.get('playlistItem') && this.onPlaylistItem(this._model, this._model.get('playlistItem')), this.elementRail.appendChild(this.timeTip.element()), this.el.addEventListener('mousemove', this.showTimeTooltip.bind(this), !1), this.el.addEventListener('mouseout', this.hideTimeTooltip.bind(this), !1); },
          limit(t) {
            if (this.activeCue && e.isNumber(this.activeCue.pct)) return this.activeCue.pct; let i = this._model.get('duration'),
              r = this._model.get('streamType'); if (r === 'DVR') {
              let o = (1 - t / 100) * i,
                a = this._model.get('position'),
                s = Math.min(o, Math.max(n.dvrSeekLimit, a)),
                l = 100 * s / i; return 100 - l;
            } return t;
          },
          update(e) { this.seekTo = e, this.seekThrottled(), i.prototype.update.apply(this, arguments); },
          dragStart() { this._model.set('scrubbing', !0), i.prototype.dragStart.apply(this, arguments); },
          dragEnd() { i.prototype.dragEnd.apply(this, arguments), this._model.set('scrubbing', !1); },
          onSeeked() { this._model.get('scrubbing') && this.performSeek(); },
          onBuffer(e, t) { this.updateBuffer(t); },
          onPosition(e, t) { this.updateTime(t, e.get('duration')); },
          onDuration(e, t) { this.updateTime(e.get('position'), t); },
          updateTime(e, t) { let n = 0; if (t) { const i = this._model.get('streamType'); i === 'DVR' ? n = (t - e) / t * 100 : i === 'VOD' && (n = e / t * 100); } this.render(n); },
          onPlaylistItem(t, n) { this.reset(), t.mediaModel.on('seeked', this.onSeeked, this); const i = n.tracks; e.each(i, function (e) { e && e.kind && e.kind.toLowerCase() === 'thumbnails' ? this.loadThumbnails(e.file) : e && e.kind && e.kind.toLowerCase() === 'chapters' && this.loadChapters(e.file); }, this); },
          performSeek() {
            let e,
              t = this.seekTo,
              n = this._model.get('duration'),
              i = this._model.get('streamType'); n === 0 ? this._api.play(s()) : i === 'DVR' ? (e = (100 - t) / 100 * n, this._api.seek(e, s())) : (e = t / 100 * n, this._api.seek(Math.min(e, n - 0.25), s()));
          },
          showTimeTooltip(e) {
            const i = this._model.get('duration'); if (i !== 0) {
              let r = t.bounds(this.elementRail),
                o = e.pageX ? e.pageX - r.left : e.x; o = t.between(o, 0, r.width); let a = o / r.width,
                s = i * a; i < 0 && (s = i - s); let l; if (this.activeCue)l = this.activeCue.text; else { const u = !0; l = t.timeFormat(s, u), i < 0 && s > n.dvrSeekLimit && (l = 'Live'); } this.timeTip.update(l), this.showThumbnail(s), t.addClass(this.timeTip.el, 'jw-open'), this.timeTip.el.style.left = `${100 * a}%`;
            }
          },
          hideTimeTooltip() { t.removeClass(this.timeTip.el, 'jw-open'); },
          reset() { this.resetChapters(), this.resetThumbnails(); } }); return e.extend(u.prototype, o, a), u;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(36), n(35), n(7), n(2)], r = function (e, t, n, i) { const r = e.extend({ constructor(r, o, a) { this._model = r, e.call(this, o, a, !0), this.volumeSlider = new t('jw-slider-volume jw-volume-tip', 'vertical'), this.addContent(this.volumeSlider.element()), this.volumeSlider.on('update', function (e) { this.trigger('update', e); }, this), i.removeClass(this.el, 'jw-hidden'), new n(this.el, { useHover: !0, directSelect: !0 }).on('click', this.toggleValue, this).on('tap', this.toggleOpenState, this).on('over', this.openTooltip, this).on('out', this.closeTooltip, this), this._model.on('change:volume', this.onVolume, this); }, toggleValue() { this.trigger('toggleValue'); } }); return r; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(1), n(4), n(22), n(7), n(35), n(149), n(146), n(150), n(66)], r = function (e, t, n, i, r, o, a, s, l, u) {
      function c(e, t) { const n = document.createElement('span'); return n.className = `jw-text jw-reset ${e}`, t && n.setAttribute('role', t), n; } function d(e, t) { const n = new s(e, t); return n; } function p() { return { reason: 'interaction' }; } function h(e, n) { const i = document.createElement('div'); return i.className = `jw-group jw-controlbar-${e}-group jw-reset`, t.each(n, (e) => { e.element && (e = e.element()), i.appendChild(e); }), i; } function f(t, n) { this._api = t, this._model = n, this._isMobile = e.isMobile(), this._localization = this._model.get('localization'), this.setup(); } return t.extend(f.prototype, n, { setup() { this.build(), this.initialize(); },
        build() {
          let n,
            i,
            r,
            s = new a(this._model, this._api),
            f = this._localization.play,
            g = this._localization.next,
            m = this._localization.volume,
            w = this._localization.rewind; this._isMobile || (n = new o('jw-slider-volume', 'horizontal'), i = new l(this._model, 'jw-icon-volume', m)), this._model.get('sdkplatform') || e.isIOS(8) || e.isIOS(9) || (r = u('jw-icon-volume', this._api.setMute, m)), this.elements = { alt: c('jw-text-alt', 'status'), play: u('jw-icon-playback', this._api.play.bind(this, p()), f), rewind: u('jw-icon-rewind', this.rewind.bind(this), w), next: u('jw-icon-next', null, g), elapsed: c('jw-text-elapsed', 'timer'), time: s, duration: c('jw-text-duration', 'timer'), hd: d('jw-icon-hd', this._localization.hd), cc: d('jw-icon-cc', this._localization.cc), audiotracks: d('jw-icon-audio-tracks', this._localization.audioTracks), mute: r, volume: n, volumetooltip: i, cast: u('jw-icon-cast jw-off', this._api.castToggle, this._localization.cast), fullscreen: u('jw-icon-fullscreen', this._api.setFullscreen, this._localization.fullscreen) }, this.layout = { left: [this.elements.play, this.elements.rewind, this.elements.elapsed], center: [this.elements.time, this.elements.alt], right: [this.elements.duration, this.elements.next, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.mute, this.elements.cast, this.elements.volume, this.elements.volumetooltip, this.elements.fullscreen] }, this.menus = t.compact([this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.volumetooltip]), this.layout.left = t.compact(this.layout.left), this.layout.center = t.compact(this.layout.center), this.layout.right = t.compact(this.layout.right), this.el = document.createElement('div'), this.el.className = 'jw-controlbar jw-background-color jw-reset', this.elements.left = h('left', this.layout.left), this.elements.center = h('center', this.layout.center), this.elements.right = h('right', this.layout.right), this.el.appendChild(this.elements.left), this.el.appendChild(this.elements.center), this.el.appendChild(this.elements.right);
        },
        initialize() { this.elements.play.show(), this.elements.fullscreen.show(), this.elements.mute && this.elements.mute.show(), this.onVolume(this._model, this._model.get('volume')), this.onPlaylistItem(), this.onMediaModel(this._model, this._model.get('mediaModel')), this.onCastAvailable(this._model, this._model.get('castAvailable')), this.onCastActive(this._model, this._model.get('castActive')), this.onCaptionsList(this._model, this._model.get('captionsList')), this._model.on('change:volume', this.onVolume, this), this._model.on('change:mute', this.onMute, this), this._model.on('change:playlistItem', this.onPlaylistItem, this), this._model.on('change:mediaModel', this.onMediaModel, this), this._model.on('change:castAvailable', this.onCastAvailable, this), this._model.on('change:castActive', this.onCastActive, this), this._model.on('change:duration', this.onDuration, this), this._model.on('change:position', this.onElapsed, this), this._model.on('change:fullscreen', this.onFullscreen, this), this._model.on('change:captionsList', this.onCaptionsList, this), this._model.on('change:captionsIndex', this.onCaptionsIndex, this), this._model.on('change:streamType', this.onStreamTypeChange, this), this.elements.volume && this.elements.volume.on('update', function (e) { const t = e.percentage; this._api.setVolume(t); }, this), this.elements.volumetooltip && (this.elements.volumetooltip.on('update', function (e) { const t = e.percentage; this._api.setVolume(t); }, this), this.elements.volumetooltip.on('toggleValue', function () { this._api.setMute(); }, this)), this.elements.hd.on('select', function (e) { this._model.getVideo().setCurrentQuality(e); }, this), this.elements.hd.on('toggleValue', function () { this._model.getVideo().setCurrentQuality(this._model.getVideo().getCurrentQuality() === 0 ? 1 : 0); }, this), this.elements.cc.on('select', function (e) { this._api.setCurrentCaptions(e); }, this), this.elements.cc.on('toggleValue', function () { const e = this._model.get('captionsIndex'); this._api.setCurrentCaptions(e ? 0 : 1); }, this), this.elements.audiotracks.on('select', function (e) { this._model.getVideo().setCurrentAudioTrack(e); }, this), new r(this.elements.duration).on('click tap', function () { if (this._model.get('streamType') === 'DVR') { const e = this._model.get('position'); this._api.seek(Math.max(i.dvrSeekLimit, e), p()); } }, this), new r(this.el).on('click tap drag', function () { this.trigger('userAction'); }, this), t.each(this.menus, function (e) { e.on('open-tooltip', this.closeMenus, this); }, this); },
        onCaptionsList(e, t) { const n = e.get('captionsIndex'); this.elements.cc.setup(t, n, { isToggle: !0 }); },
        onCaptionsIndex(e, t) { this.elements.cc.selectItem(t); },
        onPlaylistItem() { this.elements.time.updateBuffer(0), this.elements.time.render(0), this.elements.duration.innerHTML = '00:00', this.elements.elapsed.innerHTML = '00:00', this.elements.audiotracks.setup(); },
        onMediaModel(e, n) { n.on('change:levels', function (e, t) { this.elements.hd.setup(t, e.get('currentLevel')); }, this), n.on('change:currentLevel', function (e, t) { this.elements.hd.selectItem(t); }, this), n.on('change:audioTracks', function (e, n) { const i = t.map(n, e => ({ label: e.name })); this.elements.audiotracks.setup(i, e.get('currentAudioTrack'), { toggle: !1 }); }, this), n.on('change:currentAudioTrack', function (e, t) { this.elements.audiotracks.selectItem(t); }, this); },
        onVolume(e, t) { this.renderVolume(e.get('mute'), t); },
        onMute(e, t) { this.renderVolume(t, e.get('volume')); },
        renderVolume(t, n) { this.elements.mute && e.toggleClass(this.elements.mute.element(), 'jw-off', t), this.elements.volume && this.elements.volume.render(t ? 0 : n), this.elements.volumetooltip && (this.elements.volumetooltip.volumeSlider.render(t ? 0 : n), e.toggleClass(this.elements.volumetooltip.element(), 'jw-off', t)); },
        onCastAvailable(e, t) { this.elements.cast.toggle(t); },
        onCastActive(t, n) { e.toggleClass(this.elements.cast.element(), 'jw-off', !n); },
        onElapsed(t, n) {
          let i,
            r = t.get('duration'); i = t.get('streamType') === 'DVR' ? `-${e.timeFormat(-r)}` : e.timeFormat(n), this.elements.elapsed.innerHTML = i;
        },
        onDuration(t, n) { let i; i = t.get('streamType') === 'DVR' ? 'Live' : e.timeFormat(n), this.elements.duration.innerHTML = i; },
        onFullscreen(t, n) { e.toggleClass(this.elements.fullscreen.element(), 'jw-off', n); },
        element() { return this.el; },
        setAltText(e) { this.elements.alt.innerHTML = e; },
        addCues(e) { this.elements.time && (t.each(e, function (e) { this.elements.time.addCue(e); }, this), this.elements.time.drawCues()); },
        closeMenus(e) { t.each(this.menus, (t) => { e && e.target === t.el || t.closeTooltip(e); }); },
        hideComponents() { this.closeMenus(); },
        rewind() {
          let e = this._model.get('position'),
            t = this._model.get('duration'),
            n = e - 10,
            i = 0; this._model.get('streamType') === 'DVR' && (i = t), this._api.seek(Math.max(n, i), p());
        },
        onStreamTypeChange(e) { const t = e.get('streamType'); this.elements.rewind.toggle(t !== 'LIVE'), t === 'DVR' && (this.elements.duration.innerHTML = 'Live'); } }), f;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(4), n(7), n(86), n(1)], r = function (e, t, n, i, r) {
      const o = function (o) {
        r.extend(this, t), this.model = o, this.el = e.createElement(i({ ariaLabel: this.model.get('localization').playback })); const a = this; this.iconUI = new n(this.el).on('click tap', (e) => { a.trigger(e.type); }), this.model.on('change:state', (e, t) => {
          const n = a.el.getElementsByClassName('jw-icon-display'); if (n.length) {
            let i = a.model.get('localization'),
              r = i.playback; switch (t) { case 'buffering':r = i.buffer; break; case 'playing':r = i.pause; break; case 'complete':r = i.replay; break; case 'error':r = ''; }r === '' ? n[0].removeAttribute('aria-label') : n[0].setAttribute('aria-label', r);
          }
        });
      }; return r.extend(o.prototype, { element() { return this.el; } }), o;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(87), n(2), n(1), n(7)], r = function (e, t, n, i) {
      const r = function (e) { this.model = e, this.setup(), this.model.on('change:dock', this.render, this); }; return n.extend(r.prototype, { setup() {
        let n = this.model.get('dock'),
          r = this.click.bind(this),
          o = e(n); this.el = t.createElement(o), new i(this.el).on('click tap', r);
      },
      getDockButton(e) { return t.hasClass(e.target, 'jw-dock-button') ? e.target : t.hasClass(e.target, 'jw-dock-text') ? e.target.parentElement.parentElement : e.target.parentElement; },
      click(e) {
        let t = this.getDockButton(e),
          i = t.getAttribute('button'),
          r = this.model.get('dock'),
          o = n.findWhere(r, { id: i }); o && o.callback && o.callback(e);
      },
      render() {
        let n = this.model.get('dock'),
          i = e(n),
          r = t.createElement(i); this.el.innerHTML = r.innerHTML;
      },
      element() { return this.el; } }), r;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(88)], r = function (e) { function t(t, n, i, r) { return e({ id: t, skin: n, title: i, body: r }); } return t; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(7), n(2), n(3), n(1), n(4), n(89)], r = function (e, t, n, i, r, o) {
      let a = t.style,
        s = { linktarget: '_blank', margin: 8, hide: !1, position: 'top-right' },
        l = function (l) {
          let u,
            c,
            d = new Image(),
            p = i.extend({}, l.get('logo')); return i.extend(this, r), this.setup = function (r) { if (c = i.extend({}, s, p), c.hide = c.hide.toString() === 'true', u = t.createElement(o()), c.file) { c.hide && t.addClass(u, 'jw-hide'), t.addClass(u, `jw-logo-${c.position || s.position}`), c.position === 'top-right' && (l.on('change:dock', this.topRight, this), l.on('change:controls', this.topRight, this), this.topRight(l)), l.set('logo', c), d.onload = function () { const e = { backgroundImage: `url("${this.src}")`, width: this.width, height: this.height }; if (c.margin !== s.margin) { const t = /(\w+)-(\w+)/.exec(c.position); t.length === 3 && (e[`margin-${t[1]}`] = c.margin, e[`margin-${t[2]}`] = c.margin); }a(u, e), l.set('logoWidth', e.width); }, d.src = c.file; const h = new e(u); h.on('click tap', function (e) { t.exists(e) && e.stopPropagation && e.stopPropagation(), this.trigger(n.JWPLAYER_LOGO_CLICK, { link: c.link, linktarget: c.linktarget }); }, this), r.appendChild(u); } }, this.topRight = function (e) {
            let t = e.get('controls'),
              n = e.get('dock'),
              i = t && (n && n.length || e.get('sharing') || e.get('related')); a(u, { top: i ? '3.5em' : 0 });
          }, this.element = function () { return u; }, this.position = function () { return c.position; }, this.destroy = function () { d.onload = null; }, this;
        }; return l;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(2)], r = function (e, t) {
      function n(e, t) { t.off('change:mediaType', null, this), t.on('change:mediaType', function (t, n) { n === 'audio' && this.setImage(e.get('playlistItem').image); }, this); } function i(e, n) { const i = e.get('autostart') && !t.isMobile() || e.get('item') > 0; return i ? (this.setImage(null), e.off('change:state', null, this), void e.on('change:state', function (e, t) { t !== 'complete' && t !== 'idle' && t !== 'error' || (this.setImage(n.image), this.resize(null, null, e.get('stretching'))); }, this)) : void this.setImage(n.image); } const r = function (e) { this.model = e, e.on('change:playlistItem', i, this), e.on('change:mediaModel', n, this); }; return e.extend(r.prototype, { setup(e) { this.el = e; const t = this.model.get('playlistItem'); t && this.setImage(t.image); },
        setImage(n) { let i = this.image; i && (i.onload = null, this.image = null), this.model.off('change:state', null, this); let r = ''; e.isString(n) && (r = `url("${n}")`, i = this.image = new Image(), i.src = n), t.style(this.el, { backgroundImage: r }); },
        resize(e, n, i) {
          if (i === 'uniform') {
            if (e && (this.playerAspectRatio = e / n), !this.playerAspectRatio) return; let r = this.image,
              o = null; if (r) { if (r.width === 0) { const a = this; return void (r.onload = function () { a.resize(e, n, i); }); } const s = r.width / r.height; Math.abs(this.playerAspectRatio - s) < 0.09 && (o = 'cover'); }t.style(this.el, { backgroundSize: o });
          }
        },
        element() { return this.el; } }), r;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(93), n(1), n(7), n(24)], r = function (e, t, n, i, r) {
      const o = function () {}; return n.extend(o.prototype, { buildArray() {
        let t = r.split('+'),
          n = t[0],
          i = { items: [{ title: `Powered by JW Player ${n}`, featured: !0, showLogo: !0, link: 'https://jwplayer.com/learn-more' }] },
          o = n.indexOf('-') > 0,
          a = t[1]; if (o && a) { const s = a.split('.'); i.items.push({ title: `build: (${s[0]}.${s[1]})`, link: '#' }); } const l = this.model.get('provider'); if (l && l.name.indexOf('flash') >= 0) { const u = `Flash Version ${e.flashVersion()}`; i.items.push({ title: u, link: 'http://www.adobe.com/software/flash/about/' }); } return i;
      },
      buildMenu() { const n = this.buildArray(); return e.createElement(t(n)); },
      updateHtml() { this.el.innerHTML = this.buildMenu().innerHTML; },
      rightClick(e) { return this.lazySetup(), !this.mouseOverContext && (this.hideMenu(), this.showMenu(e), !1); },
      getOffset(e) { for (var t = e.target, n = e.offsetX || e.layerX, i = e.offsetY || e.layerY; t !== this.playerElement;)n += t.offsetLeft, i += t.offsetTop, t = t.parentNode; return { x: n, y: i }; },
      showMenu(t) { const n = this.getOffset(t); return this.el.style.left = `${n.x}px`, this.el.style.top = `${n.y}px`, e.addClass(this.playerElement, 'jw-flag-rightclick-open'), e.addClass(this.el, 'jw-open'), clearTimeout(this._menuTimeout), this._menuTimeout = setTimeout(this.hideMenu.bind(this), 3e3), !1; },
      hideMenu() { return this.elementUI.off('out', this.hideMenu, this), this.mouseOverContext ? void this.elementUI.on('out', this.hideMenu, this) : (e.removeClass(this.playerElement, 'jw-flag-rightclick-open'), void e.removeClass(this.el, 'jw-open')); },
      lazySetup() { this.el || (this.el = this.buildMenu(), this.layer.appendChild(this.el), this.hideMenuHandler = this.hideMenu.bind(this), this.addOffListener(this.playerElement), this.addOffListener(document), this.model.on('change:provider', this.updateHtml, this), this.elementUI = new i(this.el, { useHover: !0 }).on('over', function () { this.mouseOverContext = !0; }, this).on('out', function () { this.mouseOverContext = !1; }, this)); },
      setup(e, t, n) { this.playerElement = t, this.model = e, this.mouseOverContext = !1, this.layer = n, t.oncontextmenu = this.rightClick.bind(this); },
      addOffListener(e) { e.addEventListener('mousedown', this.hideMenuHandler), e.addEventListener('touchstart', this.hideMenuHandler), e.addEventListener('pointerdown', this.hideMenuHandler); },
      removeOffListener(e) { e.removeEventListener('mousedown', this.hideMenuHandler), e.removeEventListener('touchstart', this.hideMenuHandler), e.removeEventListener('pointerdown', this.hideMenuHandler); },
      destroy() { clearTimeout(this._menuTimeout), this.el && (this.hideMenu(), this.elementUI.off(), this.removeOffListener(this.playerElement), this.removeOffListener(document), this.hideMenuHandler = null, this.el = null), this.playerElement && (this.playerElement.oncontextmenu = null, this.playerElement = null), this.model && (this.model.off('change:provider', this.updateHtml), this.model = null); } }), o;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(1), n(2)], r = function (e, t) {
      const n = function (e) { this.model = e, this.model.on('change:playlistItem', this.playlistItem, this); }; return e.extend(n.prototype, { hide() { this.el.style.display = 'none'; },
        show() { this.el.style.display = ''; },
        setup(e) { this.el = e; const t = this.el.getElementsByTagName('div'); this.title = t[0], this.description = t[1], this.model.get('playlistItem') && this.playlistItem(this.model, this.model.get('playlistItem')), this.model.on('change:logoWidth', this.update, this), this.model.on('change:dock', this.update, this); },
        update(e) {
          let n = { paddingLeft: 0, paddingRight: 0 },
            i = e.get('controls'),
            r = e.get('dock'),
            o = e.get('logo'); if (o) {
            let a = 1 * (`${o.margin}`).replace('px', ''),
              s = e.get('logoWidth') + (isNaN(a) ? 0 : a); o.position === 'top-left' ? n.paddingLeft = s : o.position === 'top-right' && (n.paddingRight = s);
          } if (i && r && r.length) { const l = 56 * r.length; n.paddingRight = Math.max(n.paddingRight, l); }t.style(this.el, n);
        },
        playlistItem(e, t) {
          if (e.get('displaytitle') || e.get('displaydescription')) {
            let n = '',
              i = ''; t.title && e.get('displaytitle') && (n = t.title), t.description && e.get('displaydescription') && (i = t.description), this.updateText(n, i);
          } else this.hide();
        },
        updateText(e, t) { this.title.innerHTML = e, this.description.innerHTML = t, this.title.firstChild || this.description.firstChild ? this.show() : this.hide(); },
        element() { return this.el; } }), n;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(3), n(4), n(22), n(5), n(143), n(144), n(152), n(153), n(155), n(151), n(156), n(171), n(158), n(147), n(1), n(92), n(142), n(66)], r = function (e, t, i, r, o, a, s, l, u, c, d, p, h, f, g, m, w, v, y) {
      let j = e.style,
        b = e.bounds,
        E = e.isMobile(),
        x = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'],
        k = function (k, A) {
          function _() { return { reason: 'interaction' }; } function C(t) {
            let n = 0,
              i = A.get('duration'),
              o = A.get('position'); A.get('streamType') === 'DVR' && (n = i, i = Math.max(o, r.dvrSeekLimit)); const a = e.between(o + t, n, i); k.seek(a, _());
          } function L(t) { const n = e.between(A.get('volume') + t, 0, 100); k.setVolume(n); } function T(e) { return !e.ctrlKey && !e.metaKey && !!A.get('controls'); } function P(e) {
            if (!T(e)) return !0; switch (xe || ae(), e.keyCode) {
              case 27:k.setFullscreen(!1); break; case 13:case 32:k.play(_()); break; case 37:xe || C(-5); break; case 39:xe || C(5); break; case 38:L(10); break; case 40:L(-10); break; case 67:var t = k.getCaptionsList(),
                n = t.length; if (n) { const i = (k.getCurrentCaptions() + 1) % n; k.setCurrentCaptions(i); } break; case 77:k.setMute(); break; case 70:k.setFullscreen(); break; default:if (e.keyCode >= 48 && e.keyCode <= 59) {
                let r = e.keyCode - 48,
                  o = r / 10 * A.get('duration'); k.seek(o, _());
              }
            } return /13|32|37|38|39|40/.test(e.keyCode) ? (e.preventDefault(), !1) : void 0;
          } function R() { Xe = !1, e.removeClass(ve, 'jw-no-focus'); } function I(e) { e.target && e.target.blur && e.target.blur(); } function M() { Xe = !0, e.addClass(ve, 'jw-no-focus'); } function S() { Xe || R(), xe || ae(); } function O() {
            let e = b(ve),
              n = Math.round(e.width),
              i = Math.round(e.height); Ge(Ue), n && i && (n !== be || i !== Ee) && (be = n, Ee = i, clearTimeout(ze), ze = setTimeout(ee, 50), A.set('containerWidth', n), A.set('containerHeight', i), v(ve, n, i), Qe.trigger(t.JWPLAYER_RESIZE, { width: n, height: i }));
          } function D() { document.body.contains(ve) && (Ge(Ue), Ue = He(O)); } function N(t, n, i) {
            let r = { color: t, borderColor: t, stroke: t },
              o = { color: n, borderColor: n, stroke: n }; e.css(`#${i} .jw-color-active`, r, i), e.css(`#${i} .jw-color-active-hover:hover`, r, i), e.css(`#${i} .jw-color-inactive`, o, i), e.css(`#${i} .jw-color-inactive-hover:hover`, o, i);
          } function Y(t, n) { n = n || !1, e.toggleClass(ve, 'jw-flag-casting', n); } function F(t, n) { e.toggleClass(ve, 'jw-flag-cast-available', n), e.toggleClass(ye, 'jw-flag-cast-available', n); } function W(t, n) { e.replaceClass(ve, /jw-stretch-\S+/, `jw-stretch-${n}`); } function J(e) {
            e && !E && (e.element().addEventListener('mousemove', z, !1), e.element().addEventListener('mouseout', U, !1));
          } function B() { (A.get('state') === o.IDLE || A.get('state') === o.COMPLETE || A.get('state') === o.PAUSED || xe && xe.get('state') === o.PAUSED) && A.get('controls') && k.play(_()), Ve ? oe() : ae(); } function V(e) { e.link ? (k.pause(!0, _()), k.setFullscreen(!1), window.open(e.link, e.linktarget)) : A.get('controls') && k.play(_()); } function z() { clearTimeout(We); } function U() { ae(); } function H(e) { Qe.trigger(e.type, e); } function G(t, n) { n ? (Oe && Oe.destroy(), e.addClass(ve, 'jw-flag-flash-blocked')) : (Oe && Oe.setup(A, ve, ve), e.removeClass(ve, 'jw-flag-flash-blocked')); } function K() { A.get('controls') && k.setFullscreen(); } function q() {
            const n = ve.getElementsByClassName('jw-overlays')[0]; n.addEventListener('mousemove', ae), _e = new s(A, je, { useHover: !0 }), _e.on('click', () => { H({ type: t.JWPLAYER_DISPLAY_CLICK }), A.get('controls') && k.play(_()); }), _e.on('tap', () => { H({ type: t.JWPLAYER_DISPLAY_CLICK }), B(); }), _e.on('doubleClick', K), _e.on('move', ae), _e.on('over', ae); const i = new l(A); i.on('click', () => { H({ type: t.JWPLAYER_DISPLAY_CLICK }), k.play(_()); }), i.on('tap', () => { H({ type: t.JWPLAYER_DISPLAY_CLICK }), B(); }), e.isChrome() && !e.isMobile() && i.el.addEventListener('mousedown', function () {
              let e = A.getVideo(),
                t = e && e.getName().name.indexOf('flash') === 0; if (t) { var n = function () { document.removeEventListener('mouseup', n), i.el.style.pointerEvents = 'auto'; }; this.style.pointerEvents = 'none', document.addEventListener('mouseup', n); }
            }), ye.appendChild(i.element()), Le = new u(A), Te = new c(A), Te.on(t.JWPLAYER_LOGO_CLICK, V); const r = document.createElement('div'); r.className = 'jw-controls-right jw-reset', Te.setup(r), r.appendChild(Le.element()), ye.appendChild(r), Me = new a(A), Me.setup(ve.id, A.get('captions')), ye.parentNode.insertBefore(Me.element(), Pe.element()); const o = A.get('height'); E && (typeof o === 'string' || o >= 1.5 * Be) ? e.addClass(ve, 'jw-flag-touch') : (Oe = new h(), Oe.setup(A, ve, ve)), ke = new d(k, A), ke.on(t.JWPLAYER_USER_ACTION, ae), A.on('change:scrubbing', me), A.autoStartOnMobile() && (Ie = y('jw-autostart-mute jw-off', te, A.get('localization').volume), Ie.show(), ye.appendChild(Ie.element()), ke.renderVolume(!0, A.get('volume')), e.addClass(ve, 'jw-flag-autostart'), A.set('autostartMuted', !0), A.on('change:autostartFailed', te), A.on('change:autostartMuted', te), A.on('change:mute', te)), Re = new g(A, k, ke.elements.next, ve), Re.setup(), ye.appendChild(Re.element()), ye.appendChild(ke.element()), ve.addEventListener('focus', S), ve.addEventListener('blur', R), ve.addEventListener('keydown', P), ve.onmousedown = M, ve.onmouseup = I;
          } function X(t, n, i) {
            let r,
              o = ve.className; i = !!i, i && (o = o.replace(/\s*aspectMode/, ''), ve.className !== o && (ve.className = o), j(ve, { display: 'block' }, i)), e.exists(t) && e.exists(n) && (A.set('width', t), A.set('height', n)), r = { width: t }, e.hasClass(ve, 'jw-flag-aspect-mode') || (r.height = n), A.get('aspectratio') && we(), j(ve, r, !0), Q(n), ee(t, n);
          } function Q(t) { if (Se = $(t), ke && !Se) { const n = xe || A; fe(n, n.get('state')); }e.toggleClass(ve, 'jw-flag-audio-player', Se); } function $(e) { if (A.get('aspectratio')) return !1; if (m.isString(e) && e.indexOf('%') > -1) return !1; const t = m.isNumber(e) ? e : A.get('containerHeight'); return Z(t); } function Z(e) { return e && e <= Be * (E ? 1.75 : 1); } function ee(t, n) { if (!t || isNaN(Number(t))) { if (!je) return; t = je.clientWidth; } if (!n || isNaN(Number(n))) { if (!je) return; n = je.clientHeight; }Ae && Ae.resize(t, n, A.get('stretching')), e.isMSIE(9) && document.all && !window.atob && (t = n = '100%'); const i = A.getVideo(); if (i) { const r = i.resize(t, n, A.get('stretching')); r && (clearTimeout(ze), ze = setTimeout(ee, 250)), A.get('aspectratio') && we(), Me.resize(); } } function te() {
            let t = !A.get('autostartFailed'),
              n = A.get('mute'); t && (n = !1), A.off('change:autostartFailed', te), A.off('change:mute', te), A.off('change:autostartMuted', te), A.set('autostartFailed', void 0), A.set('autostartMuted', void 0), k.setMute(n), ke.renderVolume(n, A.get('volume')), Ie.hide(), e.removeClass(ve, 'jw-flag-autostart');
          } function ne() { if (qe) { const e = document.fullscreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement; return !(!e || e.id !== A.get('id')); } return xe ? xe.getVideo().getFullScreen() : A.getVideo().getFullScreen(); } function ie(e) {
            let t = A.get('fullscreen'),
              n = void 0 !== e.jwstate ? e.jwstate : ne(); t !== n && A.set('fullscreen', n), clearTimeout(ze), ze = setTimeout(ee, 200);
          } function re(t, n) { n ? (e.addClass(t, 'jw-flag-fullscreen'), j(document.body, { 'overflow-y': 'hidden' }), ae()) : (e.removeClass(t, 'jw-flag-fullscreen'), j(document.body, { 'overflow-y': '' })), ee(); } function oe() { Ve = !1, clearTimeout(We), ke.hideComponents(), e.addClass(ve, 'jw-flag-user-inactive'), Me.renderCues(!0); } function ae() { Ve || (e.removeClass(ve, 'jw-flag-user-inactive'), Me.renderCues(!0)), Ve = !0, clearTimeout(We), We = setTimeout(oe, Je); } function se() { k.setFullscreen(!1); } function le() { Ce && Ce.setState(A.get('state')), ue(A, A.mediaModel.get('mediaType')), A.mediaModel.on('change:mediaType', ue, this); } function ue(t, n) {
            let i = n === 'audio',
              r = A.getVideo(),
              o = r && r.getName().name.indexOf('flash') === 0; e.toggleClass(ve, 'jw-flag-media-audio', i), i && !o ? ve.insertBefore(Ae.el, je) : ve.insertBefore(Ae.el, Me.element());
          } function ce(t, n) {
            let i = t.get('minDvrWindow'),
              r = e.streamType(n, i),
              o = r === 'LIVE'; t.set('streamType', r), e.toggleClass(ve, 'jw-flag-live', o), Qe.setAltText(o ? t.get('localization').liveBroadcast : '');
          } function de(e, t) { return t ? void (t.name ? Pe.updateText(t.name, t.message) : Pe.updateText(t.message, '')) : void Pe.playlistItem(e, e.get('playlistItem')); } function pe() { const e = A.getVideo(); return !!e && e.isCaster; } function he() { e.replaceClass(ve, /jw-state-\S+/, `jw-state-${De}`); } function fe(e, t) { De = t, clearTimeout(Ke), t === o.PLAYING ? ge(e, t) : Ke = setTimeout(() => { ge(e, t); }, 33); } function ge(t, n) { if (e.toggleClass(ve, 'jw-flag-dragging', t.get('scrubbing')), he(), pe()) return void e.addClass(je, 'jw-media-show'); switch (n) { case o.PLAYING:ee(); break; case o.PAUSED:ae(); } } function me(e) { fe(e, e.get('state')); } function we() { const e = ve.getElementsByClassName('jw-aspect')[0]; Me.setContainerHeight(e.offsetHeight); } var ve,
            ye,
            je,
            be,
            Ee,
            xe,
            ke,
            Ae,
            _e,
            Ce,
            Le,
            Te,
            Pe,
            Re,
            Ie,
            Me,
            Se,
            Oe,
            De,
            Ne,
            Ye,
            Fe,
            We = -1,
            Je = E ? 4e3 : 2e3,
            Be = 40,
            Ve = !1,
            ze = -1,
            Ue = -1,
            He = window.requestAnimationFrame || function (e) { return window.setTimeout(e, 17); },
            Ge = window.cancelAnimationFrame || window.clearTimeout,
            Ke = -1,
            qe = !1,
            Xe = !1,
            Qe = m.extend(this, i); window.webpackJsonpjwplayer && n(161), this.model = A, this.api = k, ve = e.createElement(w({ id: A.get('id') })), e.isIE() && e.addClass(ve, 'jw-ie'); let $e = A.get('width'),
            Ze = A.get('height'); j(ve, { width: $e.toString().indexOf('%') > 0 ? $e : `${$e}px`, height: Ze.toString().indexOf('%') > 0 ? Ze : `${Ze}px` }), Ye = ve.requestFullscreen || ve.webkitRequestFullscreen || ve.webkitRequestFullScreen || ve.mozRequestFullScreen || ve.msRequestFullscreen, Fe = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen, qe = Ye && Fe, this.onChangeSkin = function (t, n) { e.replaceClass(ve, /jw-skin-\S+/, n ? `jw-skin-${n}` : ''); }, this.handleColorOverrides = function () {
            function t(t, i, r) { if (r) { t = e.prefix(t, `#${n} `); const o = {}; o[i] = r, e.css(t.join(', '), o, n); } } var n = A.get('id'),
              i = A.get('skinColorActive'),
              r = A.get('skinColorInactive'),
              o = A.get('skinColorBackground'); t(['.jw-toggle', '.jw-button-color:hover'], 'color', i), t(['.jw-active-option', '.jw-progress'], 'background', i), t(['.jw-text', '.jw-option', '.jw-button-color', '.jw-toggle.jw-off', '.jw-tooltip-title', '.jw-skip .jw-skip-icon'], 'color', r), t(['.jw-cue', '.jw-knob'], 'background', r), t(['.jw-background-color', '.jw-tooltip-title'], 'background', o), N(i, r, n);
          }, this.setup = function () { this.handleColorOverrides(), A.get('skin-loading') === !0 && (e.addClass(ve, 'jw-flag-skin-loading'), A.once('change:skin-loading', () => { e.removeClass(ve, 'jw-flag-skin-loading'); })), this.onChangeSkin(A, A.get('skin'), ''), A.on('change:skin', this.onChangeSkin, this), je = ve.getElementsByClassName('jw-media')[0], ye = ve.getElementsByClassName('jw-controls')[0]; const n = ve.getElementsByClassName('jw-preview')[0]; Ae = new p(A), Ae.setup(n); const i = ve.getElementsByClassName('jw-title')[0]; Pe = new f(A), Pe.setup(i), q(), ae(), A.set('mediaContainer', je), A.mediaController.on('fullscreenchange', ie); for (let r = x.length; r--;)document.addEventListener(x[r], ie, !1); window.removeEventListener('resize', D), window.addEventListener('resize', D, !1), E && (window.removeEventListener('orientationchange', D), window.addEventListener('orientationchange', D, !1)), A.on('change:errorEvent', de), A.on('change:controls', et), et(A, A.get('controls')), A.on('change:state', fe), A.on('change:duration', ce, this), A.on('change:flashBlocked', G), G(A, A.get('flashBlocked')), k.onPlaylistComplete(se), k.onPlaylistItem(le), A.on('change:castAvailable', F), F(A, A.get('castAvailable')), A.on('change:castActive', Y), Y(A, A.get('castActive')), A.on('change:hideAdsControls', (t, n) => { e.toggleClass(ve, 'jw-flag-ads-hide-controls', n); }), A.get('stretching') && W(A, A.get('stretching')), A.on('change:stretching', W), fe(A, o.IDLE), A.on('change:fullscreen', tt), J(ke), J(Te); const a = A.get('aspectratio'); if (a) { e.addClass(ve, 'jw-flag-aspect-mode'); const s = ve.getElementsByClassName('jw-aspect')[0]; j(s, { paddingTop: a }); }k.on(t.JWPLAYER_READY, () => { O(), X(A.get('width'), A.get('height')); }); }; var et = function (t, n) { if (n) { const i = xe ? xe.get('state') : A.get('state'); fe(t, i); }e.toggleClass(ve, 'jw-flag-controls-disabled', !n); },
            tt = function (t, n) { const i = A.getVideo(); n && A.get('autostartMuted') && te(), qe ? (n ? Ye.apply(ve) : Fe.apply(document), re(ve, n)) : e.isIE() ? re(ve, n) : (xe && xe.getVideo() && xe.getVideo().setFullscreen(n), i.setFullscreen(n)), i && i.getName().name.indexOf('flash') === 0 && i.setFullscreen(n); }; this.resize = function (e, t) { const n = !0; X(e, t, n), O(); }, this.resizeMedia = ee, this.reset = function () { document.contains(ve) && ve.parentNode.replaceChild(Ne, ve), e.emptyElement(ve); }, this.setupInstream = function (t) { this.instreamModel = xe = t, xe.on('change:controls', et, this), xe.on('change:state', fe, this), e.addClass(ve, 'jw-flag-ads'), ae(); }, this.setAltText = function (e) { ke.setAltText(e); }, this.destroyInstream = function () { if (xe && (xe.off(null, null, this), xe = null), this.setAltText(''), e.removeClass(ve, ['jw-flag-ads', 'jw-flag-ads-hide-controls']), A.set('hideAdsControls', !1), A.getVideo) { const t = A.getVideo(); t.setContainer(je); }ce(A, A.get('duration')), _e.revertAlternateClickHandlers(); }, this.addCues = function (e) { ke && ke.addCues(e); }, this.clickHandler = function () { return _e; }, this.controlsContainer = function () { return ye; }, this.getContainer = this.element = function () { return ve; }, this.getSafeRegion = function (t) {
            let n = { x: 0, y: 0, width: A.get('containerWidth') || 0, height: A.get('containerHeight') || 0 },
              i = A.get('dock'); return i && i.length && A.get('controls') && (n.y = Le.element().clientHeight, n.height -= n.y), t = t || !e.exists(t), t && A.get('controls') && (n.height -= ke.element().clientHeight), n;
          }, this.setCaptions = function (e) { Me.clear(), Me.setup(A.get('id'), e), Me.resize(); }, this.destroy = function () { clearTimeout(Ke), clearTimeout(ze), clearTimeout(We), window.removeEventListener('resize', D), window.removeEventListener('orientationchange', D); for (let t = x.length; t--;)document.removeEventListener(x[t], ie, !1); A.mediaController && A.mediaController.off('fullscreenchange', ie), ve.removeEventListener('keydown', P, !1), Oe && Oe.destroy(), Ce && (A.off('change:state', Ce.statusDelegate), Ce.destroy(), Ce = null), xe && this.destroyInstream(), Te && Te.destroy(), e.clearCss(A.get('id')); };
        }; return k;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  },, function (e, t, n) { let i = n(81); typeof i === 'string' && (i = [['all-players', i, '']]), n(68).style(i, 'all-players'), i.locals && (e.exports = i.locals); }, function (e, t, n) {
    let i,
      r; i = [n(69), n(1), n(24), n(2), n(8), n(7), n(73), n(15), n(74), n(65), n(3), n(5), n(50), n(31), n(28), n(48), n(21)], r = function (e, t, n, i, r, o, a, s, l, u, c, d, p, h, f, g, m) { const w = {}; return w.api = e, w._ = t, w.version = n, w.utils = t.extend(i, r, { canCast: f.available, key: a, extend: t.extend, scriptloader: s, rssparser: g, tea: l, UI: o }), w.utils.css.style = w.utils.style, w.vid = u, w.events = t.extend({}, c, { state: d }), w.playlist = t.extend({}, p, { item: h }), w.plugins = m, w.cast = f, w; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  },,,, function (e, t, n) {
    let i,
      r; i = [n(119), n(16), n(169)], r = function (e, t, i) {
      const r = e.prototype.setup; return e.prototype.setup = function (e, o) {
        e.analytics && (e.sdkplatform = e.sdkplatform || e.analytics.sdkplatform), r.apply(this, arguments); let a = this._model.get('edition'),
          s = t(a),
          l = this._model.get('cast'),
          u = this; s('casting') && l && l.appid && n.e(3, (require) => { const e = n(70); u._castController = new e(u, u._model), u.castToggle = u._castController.castToggle.bind(u._castController); }); const c = i.setup(); this.once('ready', c.onReady, this), o.getAdBlock = c.checkAdBlock;
      }, e;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(73), n(16), n(1), n(2), n(63), n(124), n(37)], r = function (e, t, i, r, o, a, s) {
      function l(e, t, n) { if (t) { let i = t.client; delete t.client, /\.(js|swf)$/.test(i || '') || (i = o.repo() + n), e[i] = t; } } function u(e, n) {
        let r = i.clone(n.get('plugins')) || {},
          a = n.get('edition'),
          s = t(a),
          u = /^(vast|googima|freewheel)$/,
          c = /\.(js|swf)$/,
          d = o.repo(),
          p = i.clone(n.get('advertising')); if (s('ads') && p && (c.test(p.client) ? r[p.client] = p : u.test(p.client) && (r[`${d + p.client}.js`] = p), delete p.client), s('jwpsrv')) { let h = n.get('analytics'); i.isObject(h) || (h = {}), l(r, h, 'jwpsrv.js'); }l(r, n.get('ga'), 'gapro.js'), l(r, n.get('sharing'), 'sharing.js'); let f = n.get('related'),
          g = i.isObject(f),
          m = n.get('visualplaylist') !== !1 || g; g || (f = { disableRelated: !0 }), f.showDockButton = m, l(r, f, 'related.js'); const w = n.get('mobileSdk'); if (!w) { const v = n.get('playlist'); i.some(v, (e) => { if (e.stereomode && e.stereomode.length > 0) return l(r, n.get('vr') || {}, 'vr.js'), !0; }); }n.set('plugins', r), e();
      } function c(t, i) {
        let s = i.get('key') || window.jwplayer && window.jwplayer.key,
          l = new e(s),
          u = l.edition(); if (i.set('key', s), i.set('edition', u), u === 'unlimited') { const c = r.getScriptPath('jwplayer.js'); if (!c) return void a.error(t, 'Error setting up player', 'Could not locate jwplayer.js script tag'); n.p = c, r.repo = o.repo = o.loadFrom = function () { return c; }; }i.updateProviders(), u === 'invalid' ? a.error(t, 'Error setting up player', `${void 0 === s ? 'Missing' : 'Invalid'} license key`) : t();
      } function d(e, t) { s.containsDrm(t) ? s.probe(e, t.get('edition')) : e(); } function p() { const e = a.getQueue(); return e.CHECK_KEY = { method: c, depends: ['LOADED_POLYFILLS'] }, e.PROBE_DRM_SUPPORT = { method: d, depends: ['CHECK_KEY'] }, e.FILTER_PLUGINS = { method: u, depends: ['CHECK_KEY'] }, e.FILTER_PLAYLIST.depends.push('PROBE_DRM_SUPPORT'), e.LOAD_PLUGINS.depends.push('FILTER_PLUGINS'), e.SETUP_VIEW.depends.push('CHECK_KEY'), e; } return { getQueue: p };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(126), n(162), n(1)], r = function (e, t, n) {
      let i = window,
        r = n.extend(e, t); return typeof i.define === 'function' && i.define.amd && i.define([], () => r), i.jwplayer ? i.jwplayer : r;
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [], r = function () {
      function e() { const e = document.createElement('div'); return e.className = n, e.innerHTML = '&nbsp;', e.style.width = '1px', e.style.height = '1px', e.style.position = 'absolute', e.style.background = 'transparent', e; } function t() {
        function t() {
          let e = this,
            t = e._view.element(); t.appendChild(a), r = !0, i() && e.trigger('adBlock');
        } function i() { return !!r && (!!o || (a.innerHTML !== '' && a.className === n && a.offsetParent !== null && a.clientHeight !== 0 || (o = !0), o)); } var r = !1,
          o = !1,
          a = e(); return { onReady: t, checkAdBlock: i };
      } var n = 'afs_ads'; return { setup: t };
    }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(2), n(3), n(7), n(4), n(1), n(85)], r = function (e, t, n, i, r, o) { const a = function (e) { this.model = e, this.setup(); }; return r.extend(a.prototype, i, { setup() { this.destroy(), this.skipMessage = this.model.get('skipText'), this.skipMessageCountdown = this.model.get('skipMessage'), this.setWaitTime(this.model.get('skipOffset')); const t = o(); this.el = e.createElement(t), this.skiptext = this.el.getElementsByClassName('jw-skiptext')[0], this.skipAdOnce = r.once(this.skipAd.bind(this)), new n(this.el).on('click tap', r.bind(function () { this.skippable && this.skipAdOnce(); }, this)), this.model.on('change:duration', this.onChangeDuration, this), this.model.on('change:position', this.onChangePosition, this), this.onChangeDuration(this.model, this.model.get('duration')), this.onChangePosition(this.model, this.model.get('position')); }, updateMessage(e) { this.skiptext.innerHTML = e; }, updateCountdown(e) { this.updateMessage(this.skipMessageCountdown.replace(/xx/gi, Math.ceil(this.waitTime - e))); }, onChangeDuration(t, n) { if (n) { if (this.waitPercentage) { if (!n) return; this.itemDuration = n, this.setWaitTime(this.waitPercentage), delete this.waitPercentage; }e.removeClass(this.el, 'jw-hidden'); } }, onChangePosition(t, n) { this.waitTime - n > 0 ? this.updateCountdown(n) : (this.updateMessage(this.skipMessage), this.skippable = !0, e.addClass(this.el, 'jw-skippable')); }, element() { return this.el; }, setWaitTime(t) { if (r.isString(t) && t.slice(-1) === '%') { const n = parseFloat(t); return void (this.itemDuration && !isNaN(n) ? this.waitTime = this.itemDuration * n / 100 : this.waitPercentage = t); }r.isNumber(t) ? this.waitTime = t : e.typeOf(t) === 'string' ? this.waitTime = e.seconds(t) : isNaN(Number(t)) ? this.waitTime = 0 : this.waitTime = Number(t); }, skipAd() { this.trigger(t.JWPLAYER_AD_SKIPPED); }, destroy() { this.el && (this.el.removeEventListener('click', this.skipAdOnce), this.el.parentElement && this.el.parentElement.removeChild(this.el)), delete this.skippable, delete this.itemDuration, delete this.waitPercentage; } }), a; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }, function (e, t, n) {
    let i,
      r; i = [n(157), n(1)], r = function (e, t) { const n = function () {}; return t.extend(n.prototype, e.prototype, { buildArray() { const t = e.prototype.buildArray.apply(this, arguments); if (this.model.get('abouttext')) { t.items[0].showLogo = !1, t.items.push(t.items.shift()); const n = { title: this.model.get('abouttext'), link: this.model.get('aboutlink') || t.items[0].link }; t.items.unshift(n); } return t; } }), n; }.apply(t, i), !(void 0 !== r && (e.exports = r));
  }]));
