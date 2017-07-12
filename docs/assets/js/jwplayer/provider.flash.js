webpackJsonpjwplayer([5], { 12(t, e, i) {
  let n,
    a; n = [i(1), i(14), i(2), i(19), i(18)], a = function (t, e, i, n, a) {
    function r(e) {
      if (this._currentTextTrackIndex = -1, e) {
        if (this._textTracks ? (this._textTracks = t.reject(this._textTracks, function (t) { if (this.renderNatively && t._id === 'nativecaptions') return delete this._tracksById[t._id], !0; }, this), delete this._tracksById.nativemetadata) : this._initTextTracks(), e.length) {
          let n = 0,
            r = e.length; for (n; n < r; n++) {
            const s = e[n]; if (!s._id) { if (s.kind === 'captions' || s.kind === 'metadata') { if (s._id = `native${s.kind}`, !s.label && s.kind === 'captions') { const c = a.createLabel(s, this._unknownCount); s.name = c.label, this._unknownCount = c.unknownCount; } } else s._id = a.createId(s, this._textTracks.length); if (this._tracksById[s._id]) continue; s.inuse = !0; } if (s.inuse && !this._tracksById[s._id]) {
              if (s.kind === 'metadata')s.mode = 'hidden', s.oncuechange = B.bind(this), this._tracksById[s._id] = s; else if (C(s.kind)) {
                var u,
                  d = s.mode; if (s.mode = 'hidden', !s.cues.length && s.embedded) continue; if (s.mode = d, this._cuesByTrackId[s._id] && !this._cuesByTrackId[s._id].loaded) { for (let o = this._cuesByTrackId[s._id].cues; u = o.shift();)E(s, u); s.mode = d, this._cuesByTrackId[s._id].loaded = !0; }A.call(this, s);
              }
            }
          }
        } this.renderNatively && (this.textTrackChangeHandler = this.textTrackChangeHandler || v.bind(this), this.addTracksListener(this.video.textTracks, 'change', this.textTrackChangeHandler), (i.isEdge() || i.isFF()) && (this.addTrackHandler = this.addTrackHandler || g.bind(this), this.addTracksListener(this.video.textTracks, 'addtrack', this.addTrackHandler))), this._textTracks.length && this.trigger('subtitlesTracks', { tracks: this._textTracks });
      }
    } function s(t) { if (this.renderNatively) { const e = t === this._itemTracks; e || n.cancelXhr(this._itemTracks), this._itemTracks = t, t && (e || (this.disableTextTrack(), L.call(this), this.addTextTracks(t))); } } function c() { return this._currentTextTrackIndex; } function u(e) { this._textTracks && (e === 0 && t.each(this._textTracks, (t) => { t.mode = t.embedded ? 'hidden' : 'disabled'; }), this._currentTextTrackIndex !== e - 1 && (this.disableTextTrack(), this._currentTextTrackIndex = e - 1, this.renderNatively && (this._textTracks[this._currentTextTrackIndex] && (this._textTracks[this._currentTextTrackIndex].mode = 'showing'), this.trigger('subtitlesTrackChanged', { currentTrack: this._currentTextTrackIndex + 1, tracks: this._textTracks })))); } function d(t) {
      if (t.text && t.begin && t.end) {
        let e = t.trackid.toString(),
          i = this._tracksById && this._tracksById[e]; i || (i = { kind: 'captions', _id: e, data: [] }, this.addTextTracks([i]), this.trigger('subtitlesTracks', { tracks: this._textTracks })); let a; t.useDTS && (i.source || (i.source = t.source || 'mpegts')), a = `${t.begin}_${t.text}`; let r = this._metaCuesByTextTime[a]; if (!r) { r = { begin: t.begin, end: t.end, text: t.text }, this._metaCuesByTextTime[a] = r; const s = n.convertToVTTCues([r])[0]; i.data.push(s); }
      }
    } function o(t) {
      this._tracksById || this._initTextTracks(); let e = `native${t.type}`,
        i = this._tracksById[e],
        n = t.type === 'captions' ? 'Unknown CC' : 'ID3 Metadata',
        a = t.cue; if (!i) { const r = { kind: t.type, _id: e, label: n, embedded: !0 }; i = I.call(this, r), this.renderNatively || i.kind === 'metadata' ? this.setTextTracks(this.video.textTracks) : m.call(this, [i]); }R.call(this, i, a) && (this.renderNatively || i.kind === 'metadata' ? E(i, a) : i.data.push(a));
    } function h(t) {
      const e = this._tracksById[t.name]; if (e) {
        e.source = t.source; for (var i = t.captions || [], a = [], r = !1, s = 0; s < i.length; s++) {
          let c = i[s],
            u = `${t.name}_${c.begin}_${c.end}`; this._metaCuesByTextTime[u] || (this._metaCuesByTextTime[u] = c, a.push(c), r = !0);
        }r && a.sort((t, e) => t.begin - e.begin); const d = n.convertToVTTCues(a); Array.prototype.push.apply(e.data, d);
      }
    } function l(t, e, i) { t && (T(t, e, i), this.instreamMode || (t.addEventListener ? t.addEventListener(e, i) : t[`on${e}`] = i)); } function T(t, e, i) { t && (t.removeEventListener ? t.removeEventListener(e, i) : t[`on${e}`] = null); } function f() { n.cancelXhr(this._itemTracks); const t = this._tracksById && this._tracksById.nativemetadata; (this.renderNatively || t) && (p.call(this, this.video.textTracks), t && (t.oncuechange = null)), this._itemTracks = null, this._textTracks = null, this._tracksById = null, this._cuesByTrackId = null, this._metaCuesByTextTime = null, this._unknownCount = 0, this._activeCuePosition = null, this.renderNatively && (this.removeTracksListener(this.video.textTracks, 'change', this.textTrackChangeHandler), p.call(this, this.video.textTracks)); } function k() { if (this._textTracks) { const t = this._textTracks[this._currentTextTrackIndex]; t && (t.mode = t.embedded || t._id === 'nativecaptions' ? 'hidden' : 'disabled'); } } function _() { if (this._textTracks) { const t = this._textTracks[this._currentTextTrackIndex]; t && (t.mode = 'showing'); } } function v() {
      let e = this.video.textTracks,
        i = t.filter(e, t => (t.inuse || !t._id) && C(t.kind)); if (!this._textTracks || w.call(this, i)) return void this.setTextTracks(e); let n = -1,
        a = 0; for (a; a < this._textTracks.length; a++) if (this._textTracks[a].mode === 'showing') { n = a; break; }n !== this._currentTextTrackIndex && this.setSubtitlesTrack(n + 1);
    } function g() { this.setTextTracks(this.video.textTracks); } function m(t) { if (t) { this._textTracks || this._initTextTracks(); for (let e = 0; e < t.length; e++) { const i = t[e]; if (!i.kind || C(i.kind)) { const a = I.call(this, i); A.call(this, a), i.file && (i.data = [], n.loadFile(i, this.addVTTCuesToTrack.bind(this, a), M)); } }!this.renderNatively && this._textTracks && this._textTracks.length && this.trigger('subtitlesTracks', { tracks: this._textTracks }); } } function x(t, e) { if (this.renderNatively) { const i = this._tracksById[t._id]; if (!i) return this._cuesByTrackId || (this._cuesByTrackId = {}), void (this._cuesByTrackId[t._id] = { cues: e, loaded: !1 }); if (!this._cuesByTrackId[t._id] || !this._cuesByTrackId[t._id].loaded) { let n; for (this._cuesByTrackId[t._id] = { cues: e, loaded: !0 }; n = e.shift();)E(i, n); } } } function y() { const t = this.video.textTracks; t && p(t, !0); } function E(t, e) { if (!i.isEdge() || !window.TextTrackCue) return void t.addCue(e); const n = new window.TextTrackCue(e.startTime, e.endTime, e.text); t.addCue(n); } function p(e, i) { e.length && t.each(e, (t) => { t.mode = 'disabled', t.mode = 'hidden'; for (let e = t.cues.length; e--;)t.removeCue(t.cues[e]); t.embedded || (t.mode = 'disabled'), i || (t.inuse = !1); }); } function C(t) { return t === 'subtitles' || t === 'captions'; } function b() { this._textTracks = [], this._tracksById = {}, this._metaCuesByTextTime = {}, this._cuesByTrackId = {}, this._cachedVTTCues = {}, this._unknownCount = 0; } function I(e) {
      let i,
        n = a.createLabel(e, this._unknownCount),
        r = n.label; if (this._unknownCount = n.unknownCount, this.renderNatively || e.kind === 'metadata') { const s = this.video.textTracks; i = t.findWhere(s, { label: r }), i ? (i.kind = e.kind, i.language = e.language || '') : i = this.video.addTextTrack(e.kind, r, e.language || ''), i.default = e.default, i.mode = 'disabled', i.inuse = !0; } else i = e, i.data = i.data || []; return i._id || (i._id = a.createId(e, this._textTracks.length)), i;
    } function A(t) { this._textTracks.push(t), this._tracksById[t._id] = t; } function L() { if (this._textTracks) { const e = t.filter(this._textTracks, t => t.embedded || t.groupid === 'subs'); this._initTextTracks(), t.each(e, function (t) { this._tracksById[t._id] = t; }), this._textTracks = e; } } function B(i) { const n = i.currentTarget.activeCues; if (n && n.length) { const a = n[n.length - 1].startTime; if (this._activeCuePosition !== a) { const r = []; if (t.each(n, function (t) { t.startTime < a || (t.data || t.value ? r.push(t) : t.text && this.trigger('meta', { metadataTime: a, metadata: JSON.parse(t.text) })); }, this), r.length) { const s = e.parseID3(r); this.trigger('meta', { metadataTime: a, metadata: s }); } this._activeCuePosition = a; } } } function R(t, e) {
      const i = t.kind; this._cachedVTTCues[t._id] || (this._cachedVTTCues[t._id] = {}); let n,
        a = this._cachedVTTCues[t._id]; switch (i) {
        case 'captions':n = Math.floor(20 * e.startTime); var r = Math.floor(20 * e.endTime),
          s = a[n] || a[n + 1] || a[n - 1]; return !(s && Math.abs(s - r) <= 1) && (a[n] = r, !0); case 'metadata':var c = e.data ? new Uint8Array(e.data).join('') : e.text; return n = e.startTime + c, !a[n] && (a[n] = e.endTime, !0);
      }
    } function w(t) { if (t.length > this._textTracks.length) return !0; for (let e = 0; e < t.length; e++) { const i = t[e]; if (!i._id || !this._tracksById[i._id]) return !0; } return !1; } function M(t) { i.log(`CAPTIONS(${t})`); } const P = { _itemTracks: null, _textTracks: null, _tracksById: null, _cuesByTrackId: null, _cachedVTTCues: null, _metaCuesByTextTime: null, _currentTextTrackIndex: -1, _unknownCount: 0, _activeCuePosition: null, _initTextTracks: b, addTracksListener: l, clearCues: y, clearTracks: f, disableTextTrack: k, enableTextTrack: _, getSubtitlesTrack: c, removeTracksListener: T, addTextTracks: m, setTextTracks: r, setupSideloadedTracks: s, setSubtitlesTrack: u, textTrackChangeHandler: null, addTrackHandler: null, addCuesToTrack: h, addCaptionsCue: d, addVTTCue: o, addVTTCuesToTrack: x, renderNatively: !1 }; return P;
  }.apply(e, n), !(void 0 !== a && (t.exports = a));
},
57(t, e, i) {
  let n,
    a; n = [i(2), i(1), i(3), i(5), i(61), i(13), i(4), i(12)], a = function (t, e, i, n, a, r, s, c) {
    function u(t) { return `${t}_swf_${h++}`; } function d(e) { const i = document.createElement('a'); i.href = e.flashplayer; const n = i.host === window.location.host; return t.isChrome() && !n; } function o(t, o) {
      function h(t) { let e = D[t]; if (!e) { for (var i = 1 / 0, n = D.bitrates.length; n--;) { const a = Math.abs(D.bitrates[n] - t); if (a > i) break; i = a; }e = D.labels[D.bitrates[n + 1]], D[t] = e; } return e; } function l() {
        const t = o.hlslabels; if (!t) return null; let e = {},
          i = []; for (const n in t) { const a = parseFloat(n); if (!isNaN(a)) { const r = Math.round(a); e[r] = t[n], i.push(r); } } return i.length === 0 ? null : (i.sort((t, e) => t - e), { labels: e, bitrates: i });
      } function T() { p = setTimeout(() => { s.trigger.call(w, 'flashBlocked'); }, 4e3), x.once('embedded', () => { k(), s.trigger.call(w, 'flashUnblocked'); }, w); } function f() { k(), T(); } function k() { clearTimeout(p), window.removeEventListener('focus', f); } function _(t) { for (let e = t.levels, i = 0; i < e.length; i++) { const n = e[i]; if (n.index = i, D && n.bitrate) { const a = Math.round(n.bitrate / 1e3); n.label = h(a); } }t.levels = I = v(t.levels), t.currentQuality = b = g(I, t.currentQuality); } function v(t) { return t.sort((t, e) => (t.height && e.height ? e.height - t.height : e.bitrate - t.bitrate)); } function g(t, e) { for (let i = 0; i < t.length; i++) if (t[i].index === e) return i; } var m,
        x,
        y,
        E = null,
        p = -1,
        C = !1,
        b = -1,
        I = null,
        A = -1,
        L = null,
        B = !0,
        R = !1,
        w = this,
        M = function () { return x && x.__ready; },
        P = function () { x && x.triggerFlash(...arguments); },
        D = l(); e.extend(this, s, c, { init(t) { t.preload && t.preload !== 'none' && !o.autostart && (E = t); },
        load(t) { E = t, C = !1, this.setState(n.LOADING), P('load', t), t.sources.length && t.sources[0].type !== 'hls' && this.sendMediaType(t.sources); },
        play() { P('play'); },
        pause() { P('pause'), this.setState(n.PAUSED); },
        stop() { P('stop'), b = -1, E = null, this.clearTracks(), this.setState(n.IDLE); },
        seek(t) { P('seek', t); },
        volume(t) { if (e.isNumber(t)) { const i = Math.min(Math.max(0, t), 100); M() && P('volume', i); } },
        mute(t) { M() && P('mute', t); },
        setState() { return r.setState.apply(this, arguments); },
        checkComplete() { return C; },
        attachMedia() { B = !0, C && (this.setState(n.COMPLETE), this.trigger(i.JWPLAYER_MEDIA_COMPLETE), C = !1); },
        detachMedia() { return B = !1, null; },
        getSwfObject(e) { const i = e.getElementsByTagName('object')[0]; return i ? (i.off(null, null, this), i) : a.embed(o.flashplayer, e, u(t), o.wmode); },
        getContainer() { return m; },
        setContainer(t) {
          if (m !== t) {
            m = t, x = this.getSwfObject(t), document.hasFocus() ? T() : window.addEventListener('focus', f), x.once('ready', function () {
              k(), x.once('pluginsLoaded', () => { x.queueCommands = !1, P('setupCommandQueue', x.__commandQueue), x.__commandQueue = []; }); let t = e.extend({}, o),
                n = x.triggerFlash('setup', t); n === x ? x.__ready = !0 : this.trigger(i.JWPLAYER_MEDIA_ERROR, n), E && P('init', E);
            }, this); let a = [i.JWPLAYER_MEDIA_ERROR, i.JWPLAYER_MEDIA_SEEK, i.JWPLAYER_MEDIA_SEEKED, 'subtitlesTrackChanged', 'mediaType'],
              r = [i.JWPLAYER_MEDIA_BUFFER, i.JWPLAYER_MEDIA_TIME],
              c = [i.JWPLAYER_MEDIA_BUFFER_FULL]; x.on([i.JWPLAYER_MEDIA_LEVELS, i.JWPLAYER_MEDIA_LEVEL_CHANGED].join(' '), function (t) { _(t), this.trigger(t.type, t); }, this), x.on(i.JWPLAYER_AUDIO_TRACKS, function (t) { A = t.currentTrack, L = t.tracks, this.trigger(t.type, t); }, this), x.on(i.JWPLAYER_AUDIO_TRACK_CHANGED, function (t) { A = t.currentTrack, L = t.tracks, this.trigger(t.type, t); }, this), x.on(i.JWPLAYER_PLAYER_STATE, function (t) { const e = t.newstate; e !== n.IDLE && this.setState(e); }, this), x.on(r.join(' '), function (t) { t.duration === 'Infinity' && (t.duration = 1 / 0), this.trigger(t.type, t); }, this), x.on(a.join(' '), function (t) { this.trigger(t.type, t); }, this), x.on(c.join(' '), function (t) { this.trigger(t.type); }, this), x.on(i.JWPLAYER_MEDIA_BEFORECOMPLETE, function (t) { C = !0, this.trigger(t.type), B === !0 && (C = !1); }, this), x.on(i.JWPLAYER_MEDIA_COMPLETE, function (t) { C || (this.setState(n.COMPLETE), this.trigger(t.type)); }, this), x.on('visualQuality', function (t) { let i = 0; I.length > 1 && (i = g(I, t.level.index + 1)), t.level = e.extend(t.level, { index: i }), t.reason = t.reason || 'api', this.trigger('visualQuality', t), this.trigger('providerFirstFrame', {}); }, this), x.on(i.JWPLAYER_PROVIDER_CHANGED, function (t) { y = t.message, this.trigger(i.JWPLAYER_PROVIDER_CHANGED, t); }, this), x.on(i.JWPLAYER_ERROR, function (t) { this.trigger(i.JWPLAYER_MEDIA_ERROR, t); }, this), x.on('subtitlesTracks', function (t) { this.addTextTracks(t.tracks); }, this), x.on('subtitlesTrackData', function (t) { this.addCuesToTrack(t); }, this), x.on(i.JWPLAYER_MEDIA_META, function (t) { t.metadata && t.metadata.type === 'textdata' ? this.addCaptionsCue(t.metadata) : this.trigger(t.type, t); }, this), d(o) && x.on('throttle', (t) => { k(), t.state === 'resume' ? s.trigger.call(w, 'flashThrottle', t) : p = setTimeout(() => { s.trigger.call(w, 'flashThrottle', t); }, 250); }, this);
          }
        },
        remove() { b = -1, I = null, a.remove(x); },
        setVisibility(t) { t = !!t, m.style.opacity = t ? 1 : 0; },
        resize(t, e, i) { i && P('stretch', i); },
        setControls(t) { P('setControls', t); },
        setFullscreen(t) { R = t, P('fullscreen', t); },
        getFullScreen() { return R; },
        setCurrentQuality(t) { P('setCurrentQuality', I[t].index); },
        getCurrentQuality() { return b; },
        setSubtitlesTrack(t) { P('setSubtitlesTrack', t); },
        getName() { return y ? { name: `flash_${y}` } : { name: 'flash' }; },
        getQualityLevels() { return I || E && E.sources; },
        getAudioTracks() { return L; },
        getCurrentAudioTrack() { return A; },
        setCurrentAudioTrack(t) { P('setCurrentAudioTrack', t); },
        destroy() { k(), this.remove(), x && (x.off(), x = null), m = null, E = null, this.off(); } }), this.trigger = function (t, e) { if (B) return s.trigger.call(this, t, e); };
    } var h = 0,
      l = function () {}; return l.prototype = r, o.prototype = new l(), o.getName = function () { return { name: 'flash' }; }, o;
  }.apply(e, n), !(void 0 !== a && (t.exports = a));
} });
