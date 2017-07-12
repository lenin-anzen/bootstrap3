webpackJsonpjwplayer([9], { 54(t, e) {
  !(function (t, e) {
    function n(t) {
      this.time = t.time, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect, this.target = t.target; let e = this.boundingClientRect,
        n = e.width * e.height,
        o = this.intersectionRect,
        i = o.width * o.height; this.intersectionRatio = n ? i / n : 0;
    } function o(t, e) { const n = e || {}; if (typeof t !== 'function') throw new Error('callback must be a function'); if (n.root && n.root.nodeType != 1) throw new Error('root must be an Element'); this._checkForIntersections = r(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(t => t.value + t.unit).join(' '); } function i() { return t.performance && performance.now && performance.now(); } function r(t, e) { let n = null; return function () { n || (n = setTimeout(() => { t(), n = null; }, e)); }; } function s(t, e, n, o) { typeof t.addEventListener === 'function' ? t.addEventListener(e, n, o || !1) : typeof t.attachEvent === 'function' && t.attachEvent(`on${e}`, n); } function h(t, e, n, o) { typeof t.removeEventListener === 'function' ? t.removeEventListener(e, n, o || !1) : typeof t.detatchEvent === 'function' && t.detatchEvent(`on${e}`, n); } function c(t, e) {
      let n = Math.max(t.top, e.top),
        o = Math.min(t.bottom, e.bottom),
        i = Math.max(t.left, e.left),
        r = Math.min(t.right, e.right),
        s = r - i,
        h = o - n; return s < 0 || h < 0 ? l() : { top: n, bottom: o, left: i, right: r, width: s, height: h };
    } function a(t) { return t.top > 0 || t.bottom > 0 || t.left > 0 || t.right > 0; } function u(t) { let e = t.getBoundingClientRect(); if (e) return e.width && e.height || (e = { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: e.right - e.left, height: e.bottom - e.top }), e; } function l() { return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }; } if (!('IntersectionObserver' in t && 'IntersectionObserverEntry' in t && 'intersectionRatio' in t.IntersectionObserverEntry.prototype)) {
      let p = e.documentElement,
        f = []; o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function (t) { if (!this._observationTargets.some(e => e.element == t)) { if (!t || t.nodeType != 1) throw new Error('target must be an Element'); this._registerInstance(), this._observationTargets.push({ element: t, entry: null }), this._monitorIntersections(); } }, o.prototype.unobserve = function (t) { this._observationTargets = this._observationTargets.filter(e => e.element != t), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance()); }, o.prototype.disconnect = function () { this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance(); }, o.prototype.takeRecords = function () { const t = this._queuedEntries.slice(); return this._queuedEntries = [], t; }, o.prototype._initThresholds = function (t) { let e = t || [0]; return Array.isArray(e) || (e = [e]), e.sort().filter((t, e, n) => { if (typeof t !== 'number' || isNaN(t) || t < 0 || t > 1) throw new Error('threshold must be a number between 0 and 1 inclusively'); return t !== n[e - 1]; }); }, o.prototype._parseRootMargin = function (t) {
        let e = t || '0px',
          n = e.split(/\s+/).map((t) => { const e = /^(-?\d*\.?\d+)(px|%)$/.exec(t); if (!e) throw new Error('rootMargin must be specified in pixels or percent'); return { value: parseFloat(e[1]), unit: e[2] }; }); return n[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1], n;
      }, o.prototype._monitorIntersections = function () { this._monitoringIntersections || (this._monitoringIntersections = !0, this._checkForIntersections(), this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(t, 'resize', this._checkForIntersections, !0), s(e, 'scroll', this._checkForIntersections, !0), 'MutationObserver' in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })))); }, o.prototype._unmonitorIntersections = function () { this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, h(t, 'resize', this._checkForIntersections, !0), h(e, 'scroll', this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null)); }, o.prototype._checkForIntersections = function () {
        let t = this._rootIsInDom(),
          e = t ? this._getRootRect() : l(); this._observationTargets.forEach(function (o) {
          let r = o.element,
            s = u(r),
            h = this._rootContainsTarget(r),
            c = o.entry,
            p = o.entry = new n({ time: i(), target: r, boundingClientRect: s, rootBounds: e, intersectionRect: t && h ? this._computeTargetAndRootIntersection(r, e) : l() }); t && h ? this._hasCrossedThreshold(c, p) && this._queuedEntries.push(p) : c && a(c.intersectionRect) && this._queuedEntries.push(p);
        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this);
      }, o.prototype._computeTargetAndRootIntersection = function (e, n) { for (var o = u(e), i = o, r = e.parentNode, s = !1; !s;) { let h = null; if (r == this.root || r.nodeType != 1)s = !0, h = n; else { const l = t.getComputedStyle(r); l.overflow != 'visible' && (h = u(r)); } if (h && (i = c(h, i), !a(i))) break; r = r.parentNode; } return i; }, o.prototype._getRootRect = function () {
        let t; if (this.root)t = u(this.root); else {
          let n = e.documentElement,
            o = e.body; t = { top: 0, left: 0, right: n.clientWidth || o.clientWidth, width: n.clientWidth || o.clientWidth, bottom: n.clientHeight || o.clientHeight, height: n.clientHeight || o.clientHeight };
        } return this._expandRectByRootMargin(t);
      }, o.prototype._expandRectByRootMargin = function (t) {
        let e = this._rootMarginValues.map((e, n) => (e.unit == 'px' ? e.value : e.value * (n % 2 ? t.width : t.height) / 100)),
          n = { top: t.top - e[0], right: t.right + e[1], bottom: t.bottom + e[2], left: t.left - e[3] }; return n.width = n.right - n.left, n.height = n.bottom - n.top, n;
      }, o.prototype._hasCrossedThreshold = function (t, e) {
        let n = t && a(t.intersectionRect) ? t.intersectionRatio || 0 : -1,
          o = a(e.intersectionRect) ? e.intersectionRatio || 0 : -1; if (n !== o) for (let i = 0; i < this.thresholds.length; i++) { const r = this.thresholds[i]; if (r == n || r == o || r < n != r < o) return !0; }
      }, o.prototype._rootIsInDom = function () { return !this.root || p.contains(this.root); }, o.prototype._rootContainsTarget = function (t) { return (this.root || p).contains(t); }, o.prototype._registerInstance = function () { f.indexOf(this) < 0 && f.push(this); }, o.prototype._unregisterInstance = function () { const t = f.indexOf(this); t != -1 && f.splice(t, 1); }, t.IntersectionObserver = o, t.IntersectionObserverEntry = n;
    }
  }(window, document));
} });
