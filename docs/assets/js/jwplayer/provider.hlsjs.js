webpackJsonpjwplayer([1], { 12(e, t, r) {
  let i,
    a; i = [r(1), r(14), r(2), r(19), r(18)], a = function (e, t, r, i, a) {
    function n(t) {
      if (this._currentTextTrackIndex = -1, t) {
        if (this._textTracks ? (this._textTracks = e.reject(this._textTracks, function (e) { if (this.renderNatively && e._id === 'nativecaptions') return delete this._tracksById[e._id], !0; }, this), delete this._tracksById.nativemetadata) : this._initTextTracks(), t.length) {
          let i = 0,
            n = t.length; for (i; i < n; i++) {
            const s = t[i]; if (!s._id) { if (s.kind === 'captions' || s.kind === 'metadata') { if (s._id = `native${s.kind}`, !s.label && s.kind === 'captions') { const o = a.createLabel(s, this._unknownCount); s.name = o.label, this._unknownCount = o.unknownCount; } } else s._id = a.createId(s, this._textTracks.length); if (this._tracksById[s._id]) continue; s.inuse = !0; } if (s.inuse && !this._tracksById[s._id]) {
              if (s.kind === 'metadata')s.mode = 'hidden', s.oncuechange = D.bind(this), this._tracksById[s._id] = s; else if (A(s.kind)) {
                var l,
                  u = s.mode; if (s.mode = 'hidden', !s.cues.length && s.embedded) continue; if (s.mode = u, this._cuesByTrackId[s._id] && !this._cuesByTrackId[s._id].loaded) { for (let d = this._cuesByTrackId[s._id].cues; l = d.shift();)k(s, l); s.mode = u, this._cuesByTrackId[s._id].loaded = !0; }L.call(this, s);
              }
            }
          }
        } this.renderNatively && (this.textTrackChangeHandler = this.textTrackChangeHandler || y.bind(this), this.addTracksListener(this.video.textTracks, 'change', this.textTrackChangeHandler), (r.isEdge() || r.isFF()) && (this.addTrackHandler = this.addTrackHandler || m.bind(this), this.addTracksListener(this.video.textTracks, 'addtrack', this.addTrackHandler))), this._textTracks.length && this.trigger('subtitlesTracks', { tracks: this._textTracks });
      }
    } function s(e) { if (this.renderNatively) { const t = e === this._itemTracks; t || i.cancelXhr(this._itemTracks), this._itemTracks = e, e && (t || (this.disableTextTrack(), w.call(this), this.addTextTracks(e))); } } function o() { return this._currentTextTrackIndex; } function l(t) { this._textTracks && (t === 0 && e.each(this._textTracks, (e) => { e.mode = e.embedded ? 'hidden' : 'disabled'; }), this._currentTextTrackIndex !== t - 1 && (this.disableTextTrack(), this._currentTextTrackIndex = t - 1, this.renderNatively && (this._textTracks[this._currentTextTrackIndex] && (this._textTracks[this._currentTextTrackIndex].mode = 'showing'), this.trigger('subtitlesTrackChanged', { currentTrack: this._currentTextTrackIndex + 1, tracks: this._textTracks })))); } function u(e) {
      if (e.text && e.begin && e.end) {
        let t = e.trackid.toString(),
          r = this._tracksById && this._tracksById[t]; r || (r = { kind: 'captions', _id: t, data: [] }, this.addTextTracks([r]), this.trigger('subtitlesTracks', { tracks: this._textTracks })); let a; e.useDTS && (r.source || (r.source = e.source || 'mpegts')), a = `${e.begin}_${e.text}`; let n = this._metaCuesByTextTime[a]; if (!n) { n = { begin: e.begin, end: e.end, text: e.text }, this._metaCuesByTextTime[a] = n; const s = i.convertToVTTCues([n])[0]; r.data.push(s); }
      }
    } function d(e) {
      this._tracksById || this._initTextTracks(); let t = `native${e.type}`,
        r = this._tracksById[t],
        i = e.type === 'captions' ? 'Unknown CC' : 'ID3 Metadata',
        a = e.cue; if (!r) { const n = { kind: e.type, _id: t, label: i, embedded: !0 }; r = S.call(this, n), this.renderNatively || r.kind === 'metadata' ? this.setTextTracks(this.video.textTracks) : E.call(this, [r]); }O.call(this, r, a) && (this.renderNatively || r.kind === 'metadata' ? k(r, a) : r.data.push(a));
    } function h(e) {
      const t = this._tracksById[e.name]; if (t) {
        t.source = e.source; for (var r = e.captions || [], a = [], n = !1, s = 0; s < r.length; s++) {
          let o = r[s],
            l = `${e.name}_${o.begin}_${o.end}`; this._metaCuesByTextTime[l] || (this._metaCuesByTextTime[l] = o, a.push(o), n = !0);
        }n && a.sort((e, t) => e.begin - t.begin); const u = i.convertToVTTCues(a); Array.prototype.push.apply(t.data, u);
      }
    } function c(e, t, r) { e && (f(e, t, r), this.instreamMode || (e.addEventListener ? e.addEventListener(t, r) : e[`on${t}`] = r)); } function f(e, t, r) { e && (e.removeEventListener ? e.removeEventListener(t, r) : e[`on${t}`] = null); } function v() { i.cancelXhr(this._itemTracks); const e = this._tracksById && this._tracksById.nativemetadata; (this.renderNatively || e) && (_.call(this, this.video.textTracks), e && (e.oncuechange = null)), this._itemTracks = null, this._textTracks = null, this._tracksById = null, this._cuesByTrackId = null, this._metaCuesByTextTime = null, this._unknownCount = 0, this._activeCuePosition = null, this.renderNatively && (this.removeTracksListener(this.video.textTracks, 'change', this.textTrackChangeHandler), _.call(this, this.video.textTracks)); } function g() { if (this._textTracks) { const e = this._textTracks[this._currentTextTrackIndex]; e && (e.mode = e.embedded || e._id === 'nativecaptions' ? 'hidden' : 'disabled'); } } function p() { if (this._textTracks) { const e = this._textTracks[this._currentTextTrackIndex]; e && (e.mode = 'showing'); } } function y() {
      let t = this.video.textTracks,
        r = e.filter(t, e => (e.inuse || !e._id) && A(e.kind)); if (!this._textTracks || I.call(this, r)) return void this.setTextTracks(t); let i = -1,
        a = 0; for (a; a < this._textTracks.length; a++) if (this._textTracks[a].mode === 'showing') { i = a; break; }i !== this._currentTextTrackIndex && this.setSubtitlesTrack(i + 1);
    } function m() { this.setTextTracks(this.video.textTracks); } function E(e) { if (e) { this._textTracks || this._initTextTracks(); for (let t = 0; t < e.length; t++) { const r = e[t]; if (!r.kind || A(r.kind)) { const a = S.call(this, r); L.call(this, a), r.file && (r.data = [], i.loadFile(r, this.addVTTCuesToTrack.bind(this, a), C)); } }!this.renderNatively && this._textTracks && this._textTracks.length && this.trigger('subtitlesTracks', { tracks: this._textTracks }); } } function T(e, t) { if (this.renderNatively) { const r = this._tracksById[e._id]; if (!r) return this._cuesByTrackId || (this._cuesByTrackId = {}), void (this._cuesByTrackId[e._id] = { cues: t, loaded: !1 }); if (!this._cuesByTrackId[e._id] || !this._cuesByTrackId[e._id].loaded) { let i; for (this._cuesByTrackId[e._id] = { cues: t, loaded: !0 }; i = t.shift();)k(r, i); } } } function b() { const e = this.video.textTracks; e && _(e, !0); } function k(e, t) { if (!r.isEdge() || !window.TextTrackCue) return void e.addCue(t); const i = new window.TextTrackCue(t.startTime, t.endTime, t.text); e.addCue(i); } function _(t, r) { t.length && e.each(t, (e) => { e.mode = 'disabled', e.mode = 'hidden'; for (let t = e.cues.length; t--;)e.removeCue(e.cues[t]); e.embedded || (e.mode = 'disabled'), r || (e.inuse = !1); }); } function A(e) { return e === 'subtitles' || e === 'captions'; } function R() { this._textTracks = [], this._tracksById = {}, this._metaCuesByTextTime = {}, this._cuesByTrackId = {}, this._cachedVTTCues = {}, this._unknownCount = 0; } function S(t) {
      let r,
        i = a.createLabel(t, this._unknownCount),
        n = i.label; if (this._unknownCount = i.unknownCount, this.renderNatively || t.kind === 'metadata') { const s = this.video.textTracks; r = e.findWhere(s, { label: n }), r ? (r.kind = t.kind, r.language = t.language || '') : r = this.video.addTextTrack(t.kind, n, t.language || ''), r.default = t.default, r.mode = 'disabled', r.inuse = !0; } else r = t, r.data = r.data || []; return r._id || (r._id = a.createId(t, this._textTracks.length)), r;
    } function L(e) { this._textTracks.push(e), this._tracksById[e._id] = e; } function w() { if (this._textTracks) { const t = e.filter(this._textTracks, e => e.embedded || e.groupid === 'subs'); this._initTextTracks(), e.each(t, function (e) { this._tracksById[e._id] = e; }), this._textTracks = t; } } function D(r) { const i = r.currentTarget.activeCues; if (i && i.length) { const a = i[i.length - 1].startTime; if (this._activeCuePosition !== a) { const n = []; if (e.each(i, function (e) { e.startTime < a || (e.data || e.value ? n.push(e) : e.text && this.trigger('meta', { metadataTime: a, metadata: JSON.parse(e.text) })); }, this), n.length) { const s = t.parseID3(n); this.trigger('meta', { metadataTime: a, metadata: s }); } this._activeCuePosition = a; } } } function O(e, t) {
      const r = e.kind; this._cachedVTTCues[e._id] || (this._cachedVTTCues[e._id] = {}); let i,
        a = this._cachedVTTCues[e._id]; switch (r) {
        case 'captions':i = Math.floor(20 * t.startTime); var n = Math.floor(20 * t.endTime),
          s = a[i] || a[i + 1] || a[i - 1]; return !(s && Math.abs(s - n) <= 1) && (a[i] = n, !0); case 'metadata':var o = t.data ? new Uint8Array(t.data).join('') : t.text; return i = t.startTime + o, !a[i] && (a[i] = t.endTime, !0);
      }
    } function I(e) { if (e.length > this._textTracks.length) return !0; for (let t = 0; t < e.length; t++) { const r = e[t]; if (!r._id || !this._tracksById[r._id]) return !0; } return !1; } function C(e) { r.log(`CAPTIONS(${e})`); } const P = { _itemTracks: null, _textTracks: null, _tracksById: null, _cuesByTrackId: null, _cachedVTTCues: null, _metaCuesByTextTime: null, _currentTextTrackIndex: -1, _unknownCount: 0, _activeCuePosition: null, _initTextTracks: R, addTracksListener: c, clearCues: b, clearTracks: v, disableTextTrack: g, enableTextTrack: p, getSubtitlesTrack: o, removeTracksListener: f, addTextTracks: E, setTextTracks: n, setupSideloadedTracks: s, setSubtitlesTrack: l, textTrackChangeHandler: null, addTrackHandler: null, addCuesToTrack: h, addCaptionsCue: u, addVTTCue: d, addVTTCuesToTrack: T, renderNatively: !1 }; return P;
  }.apply(t, i), !(void 0 !== a && (e.exports = a));
},
40(e, t, r) {
  let i,
    a; i = [r(2)], a = function (e) {
    return { container: null,
      volume(t) { t = e.between(t / 100, 0, 1), this.video.volume = t; },
      mute(e) { this.video.muted = !!e, this.video.muted || this.video.removeAttribute('muted'); },
      resize(t, r, i) {
        if (!(t && r && this.video.videoWidth && this.video.videoHeight)) return !1; if (i === 'uniform') {
          let a = t / r,
            n = this.video.videoWidth / this.video.videoHeight,
            s = null; Math.abs(a - n) < 0.09 && (s = 'fill'), e.style(this.video, { objectFit: s });
        } return !1;
      },
      getContainer() { return this.container; },
      setContainer(e) { this.container = e, e.appendChild(this.video); },
      remove() { this.stop(), this.destroy(), this.container === this.video.parentNode && this.container.removeChild(this.video); },
      getVideo(t, r) {
        let i = r || document.getElementById(t),
          a = i ? i.querySelector('video') : null; return a || (a = document.createElement('video'), e.isMobile() && a.setAttribute('jw-gesture-required', '')), a.className = 'jw-video jw-reset', this.video = a, a;
      } };
  }.apply(t, i), !(void 0 !== a && (e.exports = a));
},
41(e, t, r) {
  let i,
    a; i = [r(4), r(13), r(5)], a = function (e, t, r) { const i = 256; return { attached: !0, beforeComplete: !1, stallCheckTimeout_: -1, lastStalledTime_: NaN, trigger(t, r) { if (this.attached) return e.trigger.call(this, t, r); }, setState(e) { return t.setState.call(this, e); }, checkComplete() { return this.beforeComplete; }, playbackComplete_() { this.stopStallCheck(), this.setState(r.COMPLETE), this.beforeComplete = !1, this.trigger('complete'); }, attachMedia() { this.attached = !0, this.eventsOn_(), this.beforeComplete && this.playbackComplete_(); }, detachMedia() { return this.stopStallCheck(), this.attached = !1, this.eventsOff_(), this.video; }, stopStallCheck() { clearTimeout(this.stallCheckTimeout_); }, startStallCheck() { this.stopStallCheck(), this.stallCheckTimeout_ = setTimeout(this.stalledHandler.bind(this), i); }, stalledHandler() { return this.lastStalledTime_ !== this.video.currentTime ? void (this.lastStalledTime_ = this.video.currentTime) : void (this.video.paused || this.video.ended || this.state !== r.LOADING && this.state !== r.ERROR && (this.seeking || this.setState(r.STALLED))); }, setAutoplayAttributes() { this.video.setAttribute('autoplay', ''), this.video.setAttribute('muted', ''); }, removeAutoplayAttributes() { this.video.removeAttribute('autoplay'), this.video.removeAttribute('muted'); } }; }.apply(t, i), !(void 0 !== a && (e.exports = a));
},
42(e, t, r) {
  let i,
    a; i = [r(2), r(5)], a = function (e, t) {
    return { seeking: !1,
      loadedmetadata() {
        let e = { duration: this.getDuration(), height: this.video.videoHeight, width: this.video.videoWidth },
          t = this.drmUsed; t && (e.drm = t), this.trigger('meta', e);
      },
      timeupdate() {
        this.stopStallCheck(); const e = this.video.videoHeight; e !== this._helperLastVideoHeight && this.adaptation && this.adaptation({ size: { width: this.video.videoWidth, height: e } }), this._helperLastVideoHeight = e, this.state === t.STALLED && this.setState(t.PLAYING), this.startStallCheck(); let r = this.getCurrentTime(),
          i = { position: r, duration: this.getDuration() }; if (this.getPtsOffset) { const a = this.getPtsOffset(); a >= 0 && (i.metadata = { mpegts: a + r }); }(this.state === t.PLAYING || this.seeking) && this.trigger('time', i);
      },
      click(e) { this.trigger('click', e); },
      volumechange() { const e = this.video; this.trigger('volume', { volume: Math.round(100 * e.volume) }), this.trigger('mute', { mute: e.muted }); },
      seeked() { this.seeking && (this.seeking = !1, this.trigger('seeked')); },
      playing() { this.setState(t.PLAYING), this.video.hasAttribute('jw-gesture-required') && this.video.removeAttribute('jw-gesture-required'); },
      pause() { this.state !== t.COMPLETE && (this.video.ended || this.video.currentTime !== this.video.duration && this.setState(t.PAUSED)); },
      progress() { const t = this.getDuration(); if (!(t <= 0 || t === 1 / 0)) { const r = this.video.buffered; if (r && r.length !== 0) { const i = e.between(r.end(r.length - 1) / t, 0, 1); this.trigger('bufferChange', { bufferPercent: 100 * i, position: this.getCurrentTime(), duration: t }); } } },
      ended() { if (this.stopStallCheck(), this._helperLastVideoHeight = 0, this.state !== t.IDLE && this.state !== t.COMPLETE) { if (this.beforeComplete = !0, this.attached = !0, this.trigger('beforeComplete'), !this.attached) return; this.playbackComplete_(); } },
      loadeddata() { this.setTextTracks(this.video.textTracks), this.video.setAttribute('jw-loaded', 'data'); },
      error() {
        let e = this.video.error && this.video.error.code || -1,
          t = { 1: 'Unknown operation aborted', 2: 'Unknown network error', 3: 'Unknown decode error', 4: 'Source not supported' }[e] || 'Unknown'; this.trigger('mediaError', { code: e, message: `Error playing file: ${t}` });
      } };
  }.apply(t, i), !(void 0 !== a && (e.exports = a));
},
43(e, t, r) {
  function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }t.__esModule = !0; let n = r(111),
    s = i(n),
    o = r(79),
    l = i(o),
    u = r(78),
    d = i(u),
    h = r(80),
    c = r(76),
    f = i(c),
    v = r(77),
    g = i(v),
    p = r(1),
    y = r(42),
    m = r(40),
    E = r(41),
    T = r(12),
    b = r(5),
    k = r(4),
    _ = r(3),
    A = r(2),
    R = r(16),
    S = (function () {
      function e(t, r) { a(this, e), this.bufferStallTimeout = 1e3, this.currentHlsjsLevel = null, this.currentJwItem = null, this.eventHandler = null, this.hlsjs = null, this.hlsjsConfig = null, this.jwConfig = r, this.jwLevels = null, this.lastRecoveryTime = null, this.levelDuration = 0, this.live = !1, this.maxRetries = 3, this.playerId = t, this.preloaded = !1, this.preloadMetaOnly = !1, this.bufferFull = !1, this.recoveryInterval = 5e3, this.recoveringMediaError = !1, this.recoveringNetworkError = !1, this.renderNatively = O(), this.retryCount = 0, this.stallTimeout = null, this.state = b.IDLE, this.streamType = 'VOD', this.supports = e.supports, this.video = this.getVideo(t); } return e.prototype.initHlsjs = function () { this.hlsjs || (this.video = this.getVideo(this.playerId, this.container), this.restoreVideoProperties(), this.setContainer(this.container), this.hlsjsConfig = (0, f.default)(this.jwConfig.withCredentials), this.hlsjs = new s.default(this.hlsjsConfig), this.eventHandler = new d.default(this.video, this.createVideoListeners(), this.hlsjs, this.createHlsjsListeners())); }, e.prototype.init = function (e) { if (this.video && this.video.textTracks.length && (this.saveVideoProperties(), this.remove()), this.initHlsjs(), this.attached) { if (e.preload !== 'none' && this.preload(e), this.video.textTracks.length) { const t = this.video.textTracks[0]; t && t.textTrack1 && (this.video.textTracks[0].inuse = !0); }e.tracks && e.tracks.length && this.setupSideloadedTracks(e.tracks); } }, e.prototype.load = function (e, t) { if (this.initHlsjs(), this.attached) { if (t || this.setState(b.LOADING), this.preloaded) return this.preloadMetaOnly && this.hlsjs.startLoad(), void this.resetPreload(); w('load', e), this.bufferFull = !1, this.currentJwItem = e, this.eventsOn_(), this.hlsjs.attachMedia(this.video), this.hlsjs.nextLevel = -1, this.hlsjs.config.startPosition = e.starttime || -1, this.hlsjs.loadSource(e.sources[0].file); } }, e.prototype.preload = function (e) { this.preloaded || (w('preload', e), this.preloadMetaOnly = e.preload !== 'auto', this.load(e, !0), this.preloaded = !0); }, e.prototype.resetPreload = function () { this.preloaded = !1, this.preloadMetaOnly = !1; }, e.prototype.play = function () { const e = this.video.play(); e && e.catch && e.catch((e) => { w(e); }); }, e.prototype.pause = function () { this.video.pause(), this.setState(b.PAUSED); }, e.prototype.stop = function () { this.attached && (this.stopStallTimeout(), this.video.pause(), this.clearTracks(), this.setState(b.IDLE), this.hlsjs && this.eventsOff_()); }, e.prototype.seek = function (e) { const t = this.video.duration; if (!this.attached || t === 1 / 0) return void D('Returned early from seek', 'Attached', this.attached, 'Duration', t); this.stopStallTimeout(); const r = e >= 0 ? e : e + t; this.trigger(_.JWPLAYER_MEDIA_SEEK, { position: this.getCurrentTime(), offset: r }); const i = this.getDuration(); i !== 0 && i !== 1 / 0 && (this.seeking = !0, this.video.currentTime = r, this.trigger('time', { duration: i, position: this.getCurrentTime() })); }, e.prototype.getCurrentQuality = function () { let e = 0; return this.hlsjs && !this.hlsjs.autoLevelEnabled && (e = (0, h.toJwLevel)(this.getCurrentHlsjsLevel(), this.jwLevels)), e; }, e.prototype.getQualityLevels = function () { return this.jwLevels; }, e.prototype.getCurrentAudioTrack = function () { return p.isNumber(this.currentAudioTrackIndex) ? this.currentAudioTrackIndex : -1; }, e.prototype.getAudioTracks = function () { return this.audioTracks || []; }, e.prototype.getCurrentTime = function () { let e = this.video.currentTime; return this.live && this.streamType === 'DVR' && (e -= this.video.duration), e; }, e.prototype.getDuration = function () {
        let e = this.currentJwItem.minDvrWindow,
          t = this.video.duration; return this.live && (t = A.isDvr(-t, e) ? -this.levelDuration : 1 / 0), this.streamType = A.streamType(t, e), t;
      }, e.prototype.getCurrentHlsjsLevel = function () {
        let e = 0; if (this.hlsjs) {
          let t = this.hlsjs,
            r = t.firstLevel,
            i = t.currentLevel; e = i > 0 ? i : r;
        } return e;
      }, e.prototype.getName = function () { return L(); }, e.prototype.setCurrentQuality = function (e) {
        if (!(e < 0)) {
          let t = this.hlsjs.levels,
            r = (0, h.toHlsjsLevel)(e, this.jwLevels); this.hlsjs.nextLevel = r, this.trigger(_.JWPLAYER_MEDIA_LEVEL_CHANGED, { levels: this.jwLevels, currentQuality: e }), this.jwConfig.qualityLabel = this.jwLevels[e].label, w('Setting level to ', r, t[Math.max(r, 0)], this.jwLevels[e]);
        }
      }, e.prototype.setCurrentAudioTrack = function (e) {
        let t = this.getCurrentHlsjsLevel(),
          r = (0, h.toJwLevel)(t, this.jwLevels); if (this.jwLevels[r]) { const i = this.jwLevels[r].audioGroupId; p.size(this.audioTracksMap) && (this.audioTracks = this.audioTracksMap[i], p.isNumber(e) && p.size(this.audioTracks) && this.audioTracks[e] && this.currentAudioTrackIndex !== e && (this.trigger(_.JWPLAYER_AUDIO_TRACKS, { tracks: this.audioTracks, currentTrack: e }), this.currentAudioTrackIndex !== null && this.audioTracks[e].hlsjsIndex !== this.hlsjs.audioTrack && this.trigger(_.JWPLAYER_AUDIO_TRACK_CHANGED, { tracks: this.audioTracks, currentTrack: e }), this.currentAudioTrackIndex = e, this.hlsjs.audioTrack = this.audioTracks[e].hlsjsIndex, w('Setting audio track to', this.audioTracks[e]))); }
      }, e.prototype.updateAudioTrack = function (e) { if (this.hlsjs.audioTracks.length) { let t = this.currentAudioTrackIndex; p.isNumber(t) ? this.audioTracks[t].hlsjsIndex !== this.hlsjs.audioTrack && (this.currentAudioTrackIndex = null) : t = (0, h.getDefaultJwTrackIndex)(this.audioTracksMap[e.attrs.AUDIO]), this.setCurrentAudioTrack(t); } }, e.prototype.onAdaptation = function (e) {
        let t = this.hlsjs,
          r = t.levels,
          i = t.autoLevelEnabled,
          a = r[e],
          n = (a ? a.width : 0) || this.video.videoWidth,
          s = (a ? a.height : 0) || this.video.videoHeight,
          o = a ? a.bitrate : 0,
          l = (0, h.toJwLevel)(e, this.jwLevels); this.trigger('visualQuality', { reason: i ? 'auto' : 'api', mode: i ? 'auto' : 'manual', type: 'visualQuality', level: { index: i ? 0 : l + 1, label: i ? 'auto' : this.jwLevels[l].label, bitrate: o, width: n, height: s } }), this.trigger('providerFirstFrame', {}), this.triggerMediaType(n, s);
      }, e.prototype.triggerMediaType = function (e, t) { let r = 'video'; e && t || (r = 'audio'), w('Media Type', r), this.trigger(_.JWPLAYER_MEDIA_TYPE, { mediaType: r }); }, e.prototype.createVideoListeners = function () {
        let e = this,
          t = {}; return p.each(y, (r, i) => { typeof r === 'function' && (t[i] = r.bind(e)); }), t;
      }, e.prototype.createHlsjsListeners = function () {
        let e = this,
          t = {}; return t[s.default.Events.MEDIA_ATTACHED] = function () { w('Media attached'), e.recoveringMediaError && (e.hlsjs.startLoad(), e.recoveringMediaError = !1, e.resetRecovery(), e.stopStallTimeout()); }, t[s.default.Events.MEDIA_DETACHED] = function () { w('Media detached'); }, t[s.default.Events.MANIFEST_LOADED] = function (e, t) { w('Manifest loaded', t); }, t[s.default.Events.MANIFEST_PARSED] = function (t, r) {
          w('Manifest parsed', r); let i = r.levels,
            a = r.firstLevel,
            n = a,
            s = 0; e.currentHlsjsLevel = null, e.jwLevels = (0, h.formatLevels)(i); const o = p.find(e.jwLevels, t => t.label === e.jwConfig.qualityLabel); o && o.hlsjsIndex > -1 && (n = o.hlsjsIndex, s = (0, h.toJwLevel)(n, e.jwLevels), e.hlsjs.nextLevel = n), e.hlsjs.startLevel = n, e.preloadMetaOnly || e.hlsjs.startLoad(e.hlsjs.config.startPosition), e.trigger(_.JWPLAYER_MEDIA_LEVELS, { levels: e.jwLevels, currentQuality: s });
        }, t[s.default.Events.LEVEL_SWITCH] = function (t, r) { w('Level switch requested', r, e.hlsjs.levels, 'ABR:', e.hlsjs.autoLevelEnabled); }, t[s.default.Events.LEVEL_LOADED] = function (e, t) { w('Level loaded', t); }, t[s.default.Events.LEVEL_UPDATED] = function (t, r) {
          w('Level updated', r); let i = r.details,
            a = i.live,
            n = i.totalduration; e.live = a, e.levelDuration = n;
        }, t[s.default.Events.LEVEL_PTS_UPDATED] = function (t, r) { w('Level PTS updated', r), e.levelDuration = r.details.totalduration; }, t[s.default.Events.FRAG_CHANGED] = function (t, r) {
          w('Frag changed', r); let i = e.hlsjs.levels,
            a = r.frag.level,
            n = i[a]; a !== e.currentHlsjsLevel ? (w('Level switch complete', a, n), e.currentHlsjsLevel = a, e.onAdaptation(a), e.updateAudioTrack(i[a])) : e.video.videoHeight !== e._helperLastVideoHeight && e.onAdaptation(a);
        }, t[s.default.Events.FRAG_PARSING_METADATA] = function (t, r) {
          w('Frag metadata parsed', r); const i = e.hlsjs.levels; p.each(r.samples, (t) => {
            let a = t.unit,
              n = t.data,
              s = t.pts,
              o = (0, l.default)(a || n).cues; if (!o) return void D('No cues found in ID3 byte array'); const u = A.parseID3(o); if (!u) return void D('No metadata found in the ID3 cues'); let d = i[r.level],
              h = d && d.details; if (!h) { if (u.PRIV && 'com.apple.streaming.transportStreamTimestamp' in u.PRIV) return; return void D('No matching level found for ID3 metadata'); } const c = p.find(d.details.fragments, e => e.sn === r.sn); if (!c) return void D('No matching fragment found for ID3 level'); if (!c.endPTS) return void D('No endPTS found for matching ID3 fragment'); const f = new VTTCue(Math.max(s, 0), c.endPTS, JSON.stringify(u)); e.addVTTCue({ type: 'metadata', cue: f });
          });
        }, t[s.default.Events.BUFFER_APPENDING] = function (e, t) { w('Buffer appending', t); }, t[s.default.Events.BUFFER_APPENDED] = function (t, r) { const i = e.video.buffered.length; w('Buffer appended', r, e.state, i, i && e.video.buffered.end(i - 1)), e.stopStallTimeout(), e.recoveringNetworkError && (e.resetRecovery(), e.recoveringNetworkError = !1); }, t[s.default.Events.FRAG_BUFFERED] = function (t, r) { w('Frag buffered', r), e.bufferFull || (e.bufferFull = !0, e.trigger(_.JWPLAYER_MEDIA_BUFFER_FULL)); }, t[s.default.Events.KEY_LOADING] = function (t, r) { w('Key loading', r), e.supports('drm') || e.shutdown('AES decryption not supported with this license'); }, t[s.default.Events.SUBTITLE_TRACKS_UPDATED] = function (e, t) { w('Subtitle tracks updated', t); }, t[s.default.Events.AUDIO_TRACKS_UPDATED] = function (t, r) {
          w('Audio tracks updated'); let i = r.audioTracks,
            a = e.hlsjs.levels,
            n = e.getCurrentHlsjsLevel(); i && i.length && (e.currentAudioTrackIndex = null, e.audioTracksMap = (0, h.formatAudioTracks)(i), e.updateAudioTrack(a[n]));
        }, t[s.default.Events.ERROR] = function (t, r) {
          let i = (0, g.default)(r),
            a = r.fatal,
            n = r.type,
            s = i.stalling,
            o = i.recoverable,
            l = i.message,
            u = i.doCodecSwap; if (D(i), s && (e.seeking ? e.setState(b.LOADING) : e.stallTimeout || e.startStallTimeout()), a) { const d = Date.now(); o && e.retryCount < e.maxRetries ? d >= e.lastRecoveryTime + e.recoveryInterval ? (D('Attempting to recover, retry count:', e.retryCount), n === 'networkError' ? (e.recoveringNetworkError = !0, e.hlsjs.startLoad()) : n === 'mediaError' && (e.recoveringMediaError = !0, u && e.hlsjs.swapAudioCodec(), e.hlsjs.recoverMediaError()), e.retryCount += 1, e.lastRecoveryTime = d) : D('Recovery not attempted - too little time between attempts', d - e.lastRecoveryTime) : e.shutdown(l, r); }
        }, t;
      }, e.prototype.eventsOn_ = function () { w('eventsOn_'), this.eventHandler.on(); }, e.prototype.eventsOff_ = function () { w('eventsOff_'), this.clearCues(), this.hlsjs.detachMedia(), this.eventHandler.off(), this.resetPreload(); }, e.prototype.shutdown = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Fatal Error',
          t = arguments[1]; console.error('Hlsjs shutdown', e, t), this.trigger(_.JWPLAYER_MEDIA_ERROR, { message: e }), this.destroy();
      }, e.prototype.destroy = function () { this.resetRecovery(), this.hlsjs && (this.eventsOff_(), this.hlsjs.destroy(), this.hlsjs = null, w('Hlsjs destroyed')); }, e.prototype.startStallTimeout = function () { const e = this; this.stallTimeout || (this.stallTimeout = setTimeout(() => { e.video.ended || e.setState(b.STALLED); }, this.bufferStallTimeout)); }, e.prototype.stopStallTimeout = function () { clearTimeout(this.stallTimeout), this.stallTimeout = null; }, e.prototype.saveVideoProperties = function () { this.jwConfig.volume = 100 * this.video.volume, this.jwConfig.mute = this.video.muted; }, e.prototype.restoreVideoProperties = function () { this.volume(this.jwConfig.volume), this.mute(this.jwConfig.mute); }, e.prototype.resetRecovery = function () { this.retryCount = 0; }, e.getName = function () { return L(); }, e.setEdition = function (t) { e.supports = R(t); }, e;
    }()); t.default = S; var L = function () { return { name: 'hlsjs' }; },
    w = function () { if (window.jwplayer.debug) { let e; (e = console).info.apply(e, arguments); } },
    D = function () { if (window.jwplayer.debug) { let e; (e = console).warn.apply(e, arguments); } },
    O = function () { return A.isChrome() || A.isIOS() || A.isSafari() || A.isEdge() || A.isFF(); }; delete y.error; const I = Object.assign({}, k, m, E, T); S.prototype = Object.assign(Object.create(I), S.prototype);
},
76(e, t) {
  function r(e) { let t = { liveSyncDuration: 25, autoStartLoad: !1, maxBufferSize: 2e7, maxMaxBufferLength: 90 }; return e && (t = Object.assign({}, t, i())), t; } function i() { return { xhrSetup(e, t) { e.withCredentials = !0; }, fetchSetup(e, t) { return t.credentials = 'include', new Request(e.url, t); } }; }t.__esModule = !0, t.default = r;
},
77(e, t, r) {
  function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function a(e) {
    let t = e.details,
      r = n.indexOf(s, t) < 0,
      i = n.indexOf(o, t) >= 0,
      a = n.indexOf(l, t) >= 0,
      h = u(e); switch (e.type) { case 'networkError':h = `Cannot load M3U8: ${h}`; break; case 'mediaError':h = `Media Error: ${h}`; break; case 'otherError':h = `Error: ${h};`; } return new d(h, r, i, a, e);
  }t.__esModule = !0, t.default = a; var n = r(1),
    s = ['manifestLoadError', 'manifestParsingError', 'manifestIncompatibleCodecsError', 'levelLoadError'],
    o = ['bufferStalledError', 'bufferSeekOverHole'],
    l = ['fragLoopLoadingError'],
    u = function (e) {
      let t = ''; if (e) {
        if (e.response) {
          let r = e.response,
            i = r.code,
            a = r.text,
            n = e.url; t = i ? `${i} ${a}` : n && n.substring(0, 5) === 'http:' && document.location.protocol === 'https:' ? 'Unable to fetch HTTP resource over HTTPS' : 'Crossdomain access denied';
        } else t = e.reason ? `${e.reason}` : `${e.details}`;
      } return t;
    },
    d = t.HlsjsError = function h(e, t, r, a, n) { i(this, h), this.message = e, this.recoverable = t, this.stalling = r, this.doCodecSwap = a, this.hlsjsError = n; };
},
78(e, t, r) {
  function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }t.__esModule = !0; let a = r(1),
    n = (function () { function e(t, r, a, n) { i(this, e), this.video = t, this.hlsjs = a, this.videoListeners = r, this.hlsjsListeners = n; } return e.prototype.on = function () { const e = this; this.off(), a.each(this.videoListeners, (t, r) => { e.video.addEventListener(r, t, !1); }), a.each(this.hlsjsListeners, (t, r) => { e.hlsjs.on(r, t); }); }, e.prototype.off = function () { const e = this; a.each(this.videoListeners, (t, r) => { e.video.removeEventListener(r, t); }), a.each(this.hlsjsListeners, (t, r) => { e.hlsjs.off(r, t); }); }, e; }()); t.default = n;
},
79(e, t, r) {
  function i(e) {
    for (var t = 0, r = 0, i = 10, o = []; t + s < e.length;) {
      const l = n.utf8ArrayToStr(e.subarray(t, t += 3)); if (l === 'ID3') {
        let u = e.subarray(t, t += 2),
          d = e.subarray(t, t += 1)[0]; if ((128 & d) !== 0 || u[0] < 3) break; const h = n.syncSafeInt(e.subarray(t, t += 4)); (64 & d) !== 0 && (i += n.syncSafeInt(e.subarray(t, t += 4))), o = o.concat(a(e, r + i, h)), t += h;
      } else { if (l !== '3DI') { t -= 3; break; }t += 7; }r = t;
    } return { position: t, cues: o };
  } function a(e, t, r) { for (var i = e.length, a = t, s = []; a < t + r;) { if (i - a < 8) return s; const o = a; a += 4; let l = n.syncSafeInt(e.subarray(a, a += 4)); if (i - a < l + 2) return s; const u = e.subarray(a, a += 1)[0]; if (u > 0) return s; const d = e[a]; d !== 3 && d !== 0 || (l -= 1, a += 1); const h = e.buffer.slice(o - 10, a + l + 1); s.push({ data: h }), a += l + 1; } return s; }t.__esModule = !0, t.default = i; var n = r(14),
    s = 9;
},
80(e, t, r) {
  function i(e, t) { let r = l.map(e, (e, t) => { const r = e; return r.hlsjsIndex = t, r.attrs && (r.bandwidth = r.attrs.BANDWIDTH, r.audioGroupId = r.attrs.AUDIO), r; }); r = u(r); const i = d(r); return r = l.map(r, e => ({ contentType: t, label: h(e, i), level_id: e.id, hlsjsIndex: e.hlsjsIndex, bandwidth: e.bandwidth, audioGroupId: e.audioGroupId })), r.length > 1 && r.unshift({ label: 'Auto', level_id: 'auto', hlsjsIndex: -1 }), r; } function a(e, t) { return Math.max(0, l.indexOf(t, l.find(t, t => t.hlsjsIndex === e))); } function n(e, t) { let r = -1; return e > -1 && t[e] && (r = t[e].hlsjsIndex), r; } function s(e) { const t = l.reduce(e, (e, t, r) => { const i = t.groupId; return e[i] = e[i] || [], e[i].push({ autoselect: t.autoselect, default: t.default, groupid: i, language: t.lang, name: t.name, hlsjsIndex: r }), e; }, {}); return t; } function o() { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return Math.max(l.indexOf(e, l.find(e, e => e.default)), 0); }t.__esModule = !0, t.formatLevels = i, t.toJwLevel = a, t.toHlsjsLevel = n, t.formatAudioTracks = s, t.getDefaultJwTrackIndex = o; var l = r(1),
    u = function (e) { return e.sort((e, t) => { let r = void 0; return r = e.height && t.height ? e.height === t.height ? t.bandwidth - e.bandwidth : t.height - e.height : t.bandwidth - e.bandwidth; }); },
    d = function (e) {
      return l.some(e, function (e) {
        let t = e.height || `@${e.bandwidth}`,
          r = this[t]; return this[t] = 1, r;
      }, {});
    },
    h = function (e, t) {
      let r = e.height,
        i = e.bandwidth,
        a = `${Math.floor(i / 1e3)} kbps`,
        n = a; return r && (n = `${r}p`, t && (n += ` (${a})`)), n;
    };
},
111(e, t) {
  !(function (r) { if (typeof t === 'object' && typeof e !== 'undefined')e.exports = r(); else if (typeof define === 'function' && define.amd)define([], r); else { let i; i = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this, i.Hls = r(); } }(() => {
    let e; return (function t(e, r, i) { function a(s, o) { if (!r[s]) { if (!e[s]) { const l = typeof require === 'function' && require; if (!o && l) return l(s, !0); if (n) return n(s, !0); const u = new Error(`Cannot find module '${s}'`); throw u.code = 'MODULE_NOT_FOUND', u; } const d = r[s] = { exports: {} }; e[s][0].call(d.exports, (t) => { const r = e[s][1][t]; return a(r || t); }, d, d.exports, t, e, r, i); } return r[s].exports; } for (var n = typeof require === 'function' && require, s = 0; s < i.length; s++)a(i[s]); return a; }({ 1: [function (e, t, r) {
      function i() { this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0; } function a(e) { return typeof e === 'function'; } function n(e) { return typeof e === 'number'; } function s(e) { return typeof e === 'object' && e !== null; } function o(e) { return void 0 === e; }t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function (e) { if (!n(e) || e < 0 || isNaN(e)) throw TypeError('n must be a positive number'); return this._maxListeners = e, this; }, i.prototype.emit = function (e) {
        let t,
          r,
          i,
          n,
          l,
          u; if (this._events || (this._events = {}), e === 'error' && (!this._events.error || s(this._events.error) && !this._events.error.length)) { if (t = arguments[1], t instanceof Error) throw t; const d = new Error(`Uncaught, unspecified "error" event. (${t})`); throw d.context = t, d; } if (r = this._events[e], o(r)) return !1; if (a(r)) switch (arguments.length) { case 1:r.call(this); break; case 2:r.call(this, arguments[1]); break; case 3:r.call(this, arguments[1], arguments[2]); break; default:n = Array.prototype.slice.call(arguments, 1), r.apply(this, n); } else if (s(r)) for (n = Array.prototype.slice.call(arguments, 1), u = r.slice(), i = u.length, l = 0; l < i; l++)u[l].apply(this, n); return !0;
      }, i.prototype.addListener = function (e, t) { let r; if (!a(t)) throw TypeError('listener must be a function'); return this._events || (this._events = {}), this._events.newListener && this.emit('newListener', e, a(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned && (r = o(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error('(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.', this._events[e].length), typeof console.trace === 'function' && console.trace())), this; }, i.prototype.on = i.prototype.addListener, i.prototype.once = function (e, t) {
        function r() { this.removeListener(e, r), i || (i = !0, t.apply(this, arguments)); } if (!a(t)) throw TypeError('listener must be a function'); var i = !1;
        return r.listener = t, this.on(e, r), this;
      }, i.prototype.removeListener = function (e, t) {
        let r,
          i,
          n,
          o; if (!a(t)) throw TypeError('listener must be a function'); if (!this._events || !this._events[e]) return this; if (r = this._events[e], n = r.length, i = -1, r === t || a(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit('removeListener', e, t); else if (s(r)) { for (o = n; o-- > 0;) if (r[o] === t || r[o].listener && r[o].listener === t) { i = o; break; } if (i < 0) return this; r.length === 1 ? (r.length = 0, delete this._events[e]) : r.splice(i, 1), this._events.removeListener && this.emit('removeListener', e, t); } return this;
      }, i.prototype.removeAllListeners = function (e) {
        let t,
          r; if (!this._events) return this; if (!this._events.removeListener) return arguments.length === 0 ? this._events = {} : this._events[e] && delete this._events[e], this; if (arguments.length === 0) { for (t in this._events)t !== 'removeListener' && this.removeAllListeners(t); return this.removeAllListeners('removeListener'), this._events = {}, this; } if (r = this._events[e], a(r)) this.removeListener(e, r); else if (r) for (;r.length;) this.removeListener(e, r[r.length - 1]); return delete this._events[e], this;
      }, i.prototype.listeners = function (e) { let t; return t = this._events && this._events[e] ? a(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []; }, i.prototype.listenerCount = function (e) { if (this._events) { const t = this._events[e]; if (a(t)) return 1; if (t) return t.length; } return 0; }, i.listenerCount = function (e, t) { return e.listenerCount(t); };
    }, {}],
    2: [function (t, r, i) {
      !(function (t) {
        var a = { buildAbsoluteURL(e, t) {
          if (t = t.trim(), /^[a-z]+:/i.test(t)) return t; let r = null,
            i = null,
            n = /^([^#]*)(.*)$/.exec(t); n && (i = n[2], t = n[1]); const s = /^([^\?]*)(.*)$/.exec(t); s && (r = s[2], t = s[1]); const o = /^([^#]*)(.*)$/.exec(e); o && (e = o[1]); const l = /^([^\?]*)(.*)$/.exec(e); l && (e = l[1]); const u = /^(([a-z]+:)?\/\/[a-z0-9\.\-_~]+(:[0-9]+)?)?(\/.*)$/i.exec(e); if (!u) throw new Error('Error trying to parse base URL.'); let d = u[2] || '',
            h = u[1] || '',
            c = u[4],
            f = null; return f = /^\/\//.test(t) ? `${d}//${a.buildAbsolutePath('', t.substring(2))}` : /^\//.test(t) ? `${h}/${a.buildAbsolutePath('', t.substring(1))}` : a.buildAbsolutePath(h + c, t), r && (f += r), i && (f += i), f;
        },
        buildAbsolutePath(e, t) { for (var r, i, a = t, n = '', s = e.replace(/[^\/]*$/, a.replace(/(\/|^)(?:\.?\/+)+/g, '$1')), o = 0; i = s.indexOf('/../', o), i > -1; o = i + r)r = /^\/(?:\.\.\/)*/.exec(s.slice(i))[0].length, n = (n + s.substring(o, i)).replace(new RegExp(`(?:\\/+[^\\/]*){0,${(r - 1) / 3}}$`), '/'); return n + s.substr(o); } }; typeof i === 'object' && typeof r === 'object' ? r.exports = a : typeof e === 'function' && e.amd ? e([], () => a) : typeof i === 'object' ? i.URLToolkit = a : t.URLToolkit = a;
      }(this));
    }, {}],
    3: [function (e, t, r) {
      let i = arguments[3],
        a = arguments[4],
        n = arguments[5],
        s = JSON.stringify; t.exports = function (e, t) {
        function r(e) { p[e] = !0; for (const t in a[e][1]) { const i = a[e][1][t]; p[i] || r(i); } } for (var o, l = Object.keys(n), u = 0, d = l.length; u < d; u++) {
          var h = l[u],
            c = n[h].exports; if (c === e || c && c.default === e) { o = h; break; }
        } if (!o) { o = Math.floor(Math.pow(16, 8) * Math.random()).toString(16); for (var f = {}, u = 0, d = l.length; u < d; u++) { var h = l[u]; f[h] = h; }a[o] = [Function(['require', 'module', 'exports'], `(${e})(self)`), f]; } let v = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
          g = {}; g[o] = o, a[v] = [Function(['require'], `var f = require(${s(o)});(f.default ? f.default : f)(self);`), g]; var p = {}; r(v); let y = `(${i})({${Object.keys(p).map(e => `${s(e)}:[${a[e][0]},${s(a[e][1])}]`).join(',')}},{},[${s(v)}])`,
          m = window.URL || window.webkitURL || window.mozURL || window.msURL,
          E = new Blob([y], { type: 'text/javascript' }); if (t && t.bare) return E; let T = m.createObjectURL(E),
          b = new Worker(T); return b.objectURL = T, b;
      };
    }, {}],
    4: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(30),
        u = i(l),
        d = e(29),
        h = i(d),
        c = e(32),
        f = i(c),
        v = e(28),
        g = e(47),
        p = e(9),
        y = i(p),
        m = (function (e) {
          function t(e) { a(this, t); const r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.FRAG_LOADING, u.default.FRAG_LOADED, u.default.FRAG_BUFFERED, u.default.ERROR)); return r.lastLoadedFragLevel = 0, r._autoLevelCapping = -1, r._nextAutoLevel = -1, r.hls = e, r.onCheck = r.abandonRulesCheck.bind(r), r; } return s(t, e), o(t, [{ key: 'destroy', value() { this.clearTimer(), h.default.prototype.destroy.call(this); } }, { key: 'onFragLoading',
            value(e) {
              const t = e.frag; if (t.type === 'main') {
                if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this.bwEstimator) {
                  let r = this.hls,
                    i = e.frag.level,
                    a = r.levels[i].details.live,
                    n = r.config,
                    s = void 0,
                    o = void 0; a ? (s = n.abrEwmaFastLive, o = n.abrEwmaSlowLive) : (s = n.abrEwmaFastVoD, o = n.abrEwmaSlowVoD), this.bwEstimator = new y.default(r, o, s, n.abrEwmaDefaultEstimate);
                } this.fragCurrent = t;
              }
            } }, { key: 'abandonRulesCheck',
            value() {
              let e = this.hls,
                t = e.media,
                r = this.fragCurrent,
                i = r.loader,
                a = this.minAutoLevel; if (!i || i.stats && i.stats.aborted) return g.logger.warn('frag loader destroy or aborted, disarm abandonRules'), void this.clearTimer(); const n = i.stats; if (t && (!t.paused && t.playbackRate !== 0 || !t.readyState) && r.autoLevel && r.level) {
                let s = performance.now() - n.trequest,
                  o = Math.abs(t.playbackRate); if (s > 500 * r.duration / o) {
                  let l = e.levels,
                    d = Math.max(1, n.bw ? n.bw / 8 : 1e3 * n.loaded / s),
                    h = n.total ? n.total : Math.max(n.loaded, Math.round(r.duration * l[r.level].bitrate / 8)),
                    c = t.currentTime,
                    v = (h - n.loaded) / d,
                    p = (f.default.bufferInfo(t, c, e.config.maxBufferHole).end - c) / o; if (p < 2 * r.duration / o && v > p) {
                    let y = void 0,
                      m = void 0; for (m = r.level - 1; m > a && (y = r.duration * l[m].bitrate / (6.4 * d), !(y < p)); m--);y < v && (g.logger.warn(`loading too slow, abort fragment loading and switch to level ${m}:fragLoadedDelay[${m}]<fragLoadedDelay[${r.level - 1}];bufferStarvationDelay:${y.toFixed(1)}<${v.toFixed(1)}:${p.toFixed(1)}`), e.nextLoadLevel = m, this.bwEstimator.sample(s, n.loaded), i.abort(), this.clearTimer(), e.trigger(u.default.FRAG_LOAD_EMERGENCY_ABORTED, { frag: r, stats: n }));
                  }
                }
              }
            } }, { key: 'onFragLoaded', value(e) { const t = e.frag; if (t.type === 'main' && (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, e.frag.bitrateTest)) { const r = e.stats; r.tparsed = r.tbuffered = r.tload, this.onFragBuffered(e); } } }, { key: 'onFragBuffered',
            value(e) {
              let t = e.stats,
                r = e.frag; if (t.aborted !== !0 && r.loadCounter === 1 && r.type === 'main' && (!r.bitrateTest || t.tload === t.tbuffered)) { const i = t.tparsed - t.trequest; g.logger.log(`latency/loading/parsing/append/kbps:${Math.round(t.tfirst - t.trequest)}/${Math.round(t.tload - t.tfirst)}/${Math.round(t.tparsed - t.tload)}/${Math.round(t.tbuffered - t.tparsed)}/${Math.round(8 * t.loaded / (t.tbuffered - t.trequest))}`), this.bwEstimator.sample(i, t.loaded), r.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0; }
            } }, { key: 'onError', value(e) { switch (e.details) { case v.ErrorDetails.FRAG_LOAD_ERROR:case v.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer(); } } }, { key: 'clearTimer', value() { this.timer && (clearInterval(this.timer), this.timer = null); } }, { key: 'findBestLevel',
            value(e, t, r, i, a, n, s, o, l) {
              for (let u = a; u >= i; u--) {
                let d = l[u],
                  h = d.details,
                  c = h ? h.totalduration / h.fragments.length : t,
                  f = !!h && h.live,
                  v = void 0; v = u <= e ? s * r : o * r; let p = l[u].bitrate,
                  y = p * c / v; if (g.logger.trace(`level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: ${u}/${Math.round(v)}/${p}/${c}/${n}/${y}`), v > p && (!y || f || y < n)) return u;
              } return -1;
            } }, { key: 'autoLevelCapping', get() { return this._autoLevelCapping; }, set(e) { this._autoLevelCapping = e; } }, { key: 'nextAutoLevel',
            get() {
              let e = this._nextAutoLevel,
                t = this.bwEstimator,
                r = this.hls,
                i = r.levels,
                a = r.config.minAutoBitrate; if (!(e === -1 || t && t.canEstimate())) return Math.min(e, this.maxAutoLevel); let n = this.nextABRAutoLevel; if (e !== -1 && (n = Math.min(e, n)), void 0 !== a) for (;i[n].bitrate < a;)n++; return n;
            },
            set(e) { this._nextAutoLevel = e; } }, { key: 'minAutoLevel', get() { for (let e = this.hls, t = e.levels, r = e.config.minAutoBitrate, i = t ? t.length : 0, a = 0; a < i; a++) if (t[a].bitrate > r) return a; return 0; } }, { key: 'maxAutoLevel',
            get() {
              let e,
                t = this.hls.levels,
                r = this._autoLevelCapping; return e = r === -1 && t && t.length ? t.length - 1 : r;
            } }, { key: 'nextABRAutoLevel',
            get() {
              let e = this.hls,
                t = this.maxAutoLevel,
                r = e.levels,
                i = e.config,
                a = this.minAutoLevel,
                n = e.media,
                s = this.lastLoadedFragLevel,
                o = this.fragCurrent ? this.fragCurrent.duration : 0,
                l = n ? n.currentTime : 0,
                u = n && n.playbackRate !== 0 ? Math.abs(n.playbackRate) : 1,
                d = this.bwEstimator ? this.bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,
                h = (f.default.bufferInfo(n, l, i.maxBufferHole).end - l) / u,
                c = this.findBestLevel(s, o, d, a, t, h, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r); if (c >= 0) return c; g.logger.trace('rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering'); let v = i.maxStarvationDelay,
                p = i.abrBandWidthFactor,
                y = i.abrBandWidthUpFactor; if (h === 0) { const m = this.bitrateTestDelay; m && (v = i.maxLoadingDelay - m, g.logger.trace(`bitrate test took ${Math.round(1e3 * m)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * v)} ms`), p = y = 1); } return c = this.findBestLevel(s, o, d, a, t, h + v, p, y, r), Math.max(c, 0);
            } }]), t;
        }(h.default)); r.default = m;
    }, { 28: 28, 29: 29, 30: 30, 32: 32, 47: 47, 9: 9 }],
    5: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(43),
        u = i(l),
        d = e(32),
        h = i(d),
        c = e(24),
        f = i(c),
        v = e(30),
        g = i(v),
        p = e(29),
        y = i(p),
        m = e(33),
        E = i(m),
        T = e(48),
        b = i(T),
        k = e(28),
        _ = e(47),
        A = { STOPPED: 'STOPPED', STARTING: 'STARTING', IDLE: 'IDLE', PAUSED: 'PAUSED', KEY_LOADING: 'KEY_LOADING', FRAG_LOADING: 'FRAG_LOADING', FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY', WAITING_TRACK: 'WAITING_TRACK', PARSING: 'PARSING', PARSED: 'PARSED', ENDED: 'ENDED', ERROR: 'ERROR' },
        R = (function (e) {
          function t(e) { a(this, t); const r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, g.default.MEDIA_ATTACHED, g.default.MEDIA_DETACHING, g.default.AUDIO_TRACKS_UPDATED, g.default.AUDIO_TRACK_SWITCH, g.default.AUDIO_TRACK_LOADED, g.default.KEY_LOADED, g.default.FRAG_LOADED, g.default.FRAG_PARSING_INIT_SEGMENT, g.default.FRAG_PARSING_DATA, g.default.FRAG_PARSED, g.default.ERROR, g.default.BUFFER_CREATED, g.default.BUFFER_APPENDED, g.default.BUFFER_FLUSHED)); return r.config = e.config, r.audioCodecSwap = !1, r.ticks = 0, r.ontick = r.tick.bind(r), r; } return s(t, e), o(t, [{ key: 'destroy', value() { this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), y.default.prototype.destroy.call(this), this.state = A.STOPPED; } }, { key: 'startLoad', value(e) { if (this.tracks) { const t = this.lastCurrentTime; this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.fragLoadError = 0, t > 0 && e === -1 ? (_.logger.log(`audio:override startPosition with lastCurrentTime @${t.toFixed(3)}`), this.state = A.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = A.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick(); } else this.startPosition = e, this.state = A.STOPPED; } }, { key: 'stopLoad', value() { const e = this.fragCurrent; e && (e.loader && e.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = A.STOPPED; } }, { key: 'tick', value() { this.ticks++, this.ticks === 1 && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0); } }, { key: 'doTick',
            value() {
              let e,
                t,
                r,
                i = this.hls,
                a = i.config; switch (this.state) {
                case A.ERROR:case A.PAUSED:break; case A.STARTING:this.state = A.WAITING_TRACK, this.loadedmetadata = !1; break; case A.IDLE:if (!this.media && (this.startFragRequested || !a.startFragPrefetch)) break; e = this.loadedmetadata ? this.media.currentTime : this.nextLoadPosition; var n = this.mediaBuffer ? this.mediaBuffer : this.media,
                  s = h.default.bufferInfo(n, e, a.maxBufferHole),
                  o = s.len,
                  l = s.end,
                  d = this.fragPrevious,
                  c = a.maxMaxBufferLength; if (o < c && this.trackId < this.tracks.length) {
                    if (r = this.tracks[this.trackId].details, typeof r === 'undefined') { this.state = A.WAITING_TRACK; break; } if (!r.live && d && d.sn === r.endSN && (!this.media.seeking || this.media.duration - l < d.duration / 2)) { this.hls.trigger(g.default.BUFFER_EOS, { type: 'audio' }), this.state = A.ENDED; break; } let f = r.fragments,
                      v = f.length,
                      p = f[0].start,
                      y = f[v - 1].start + f[v - 1].duration,
                      m = void 0; if (l < p ? m = f[0] : !(function () {
                      let e = void 0,
                        t = a.maxFragLookUpTolerance; l < y ? (l > y - t && (t = 0), e = u.default.search(f, e => (e.start + e.duration - t <= l ? 1 : e.start - t > l ? -1 : 0))) : e = f[v - 1], e && (m = e, p = e.start, d && m.level === d.level && m.sn === d.sn && (m.sn < r.endSN ? (m = f[m.sn + 1 - r.startSN], _.logger.log(`SN just loaded, load next one: ${m.sn}`)) : m = null));
                    }()), m) if (m.decryptdata.uri != null && m.decryptdata.key == null)_.logger.log(`Loading key for ${m.sn} of [${r.startSN} ,${r.endSN}],track ${this.trackId}`), this.state = A.KEY_LOADING, i.trigger(g.default.KEY_LOADING, { frag: m }); else { if (_.logger.log(`Loading ${m.sn} of [${r.startSN} ,${r.endSN}],track ${this.trackId}, currentTime:${e},bufferEnd:${l.toFixed(3)}`), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, m.loadCounter) { m.loadCounter++; const E = a.fragLoadingLoopThreshold; if (m.loadCounter > E && Math.abs(this.fragLoadIdx - m.loadIdx) < E) return void i.trigger(g.default.ERROR, { type: k.ErrorTypes.MEDIA_ERROR, details: k.ErrorDetails.FRAG_LOOP_LOADING_ERROR, fatal: !1, frag: m }); } else m.loadCounter = 1; m.loadIdx = this.fragLoadIdx, this.fragCurrent = m, this.startFragRequested = !0, this.nextLoadPosition = m.start + m.duration, i.trigger(g.default.FRAG_LOADING, { frag: m }), this.state = A.FRAG_LOADING; }
                  } break; case A.WAITING_TRACK:t = this.tracks[this.trackId], t && t.details && (this.state = A.IDLE); break; case A.FRAG_LOADING_WAITING_RETRY:var T = performance.now(),
                  b = this.retryDate; n = this.media; var R = n && n.seeking; (!b || T >= b || R) && (_.logger.log('audioStreamController: retryDate reached, switch back to IDLE state'), this.state = A.IDLE); break; case A.STOPPED:case A.FRAG_LOADING:case A.PARSING:case A.PARSED:case A.ENDED:
              }
            } }, { key: 'onMediaAttached', value(e) { const t = this.media = this.mediaBuffer = e.media; this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener('seeking', this.onvseeking), t.addEventListener('ended', this.onvended); const r = this.config; this.tracks && r.autoStartLoad && this.startLoad(r.startPosition); } }, { key: 'onMediaDetaching', value() { const e = this.media; e && e.ended && (_.logger.log('MSE detaching and video ended, reset startPosition'), this.startPosition = this.lastCurrentTime = 0); const t = this.tracks; t && t.forEach((e) => { e.details && e.details.fragments.forEach((e) => { e.loadCounter = void 0; }); }), e && (e.removeEventListener('seeking', this.onvseeking), e.removeEventListener('ended', this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad(); } }, { key: 'onMediaSeeking', value() { this.state === A.ENDED && (this.state = A.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), this.tick(); } }, { key: 'onMediaEnded', value() { this.startPosition = this.lastCurrentTime = 0; } }, { key: 'onAudioTracksUpdated', value(e) { _.logger.log('audio tracks updated'), this.tracks = e.audioTracks; } }, { key: 'onAudioTrackSwitch', value(e) { const t = !!e.url; this.trackId = e.id, this.state = A.IDLE, this.fragCurrent = null, this.state = A.PAUSED, t ? this.timer || (this.timer = setInterval(this.ontick, 100)) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.hls.trigger(g.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: 'audio' }), this.tick(); } }, { key: 'onAudioTrackLoaded',
            value(e) {
              let t = e.details,
                r = e.id,
                i = this.tracks[r],
                a = t.totalduration; if (_.logger.log(`track ${r} loaded [${t.startSN},${t.endSN}],duration:${a}`), t.PTSKnown = !1, i.details = t, !this.startFragRequested) { if (this.startPosition === -1) { const n = t.startTimeOffset; isNaN(n) ? this.startPosition = 0 : (_.logger.log(`start time offset found in playlist, adjust startPosition to ${n}`), this.startPosition = n); } this.nextLoadPosition = this.startPosition; } this.state === A.WAITING_TRACK && (this.state = A.IDLE), this.tick();
            } }, { key: 'onKeyLoaded', value() { this.state === A.KEY_LOADING && (this.state = A.IDLE, this.tick()); } }, { key: 'onFragLoaded',
            value(e) {
              const t = this.fragCurrent; if (this.state === A.FRAG_LOADING && t && e.frag.type === 'audio' && e.frag.level === t.level && e.frag.sn === t.sn) {
                this.state = A.PARSING, this.stats = e.stats; let r = this.tracks[this.trackId],
                  i = r.details,
                  a = i.totalduration,
                  n = t.start,
                  s = t.level,
                  o = t.sn,
                  l = this.config.defaultAudioCodec || r.audioCodec; this.pendingAppending = 0, this.demuxer || (this.demuxer = new f.default(this.hls, 'audio')), _.logger.log(`Demuxing ${o} of [${i.startSN} ,${i.endSN}],track ${s}`); const u = i.PTSKnown || !i.live; this.demuxer.push(e.payload, l, null, n, t.cc, s, o, a, t.decryptdata, u);
              } this.fragLoadError = 0;
            } }, { key: 'onFragParsingInitSegment',
            value(e) {
              const t = this.fragCurrent; if (t && e.id === 'audio' && e.sn === t.sn && e.level === t.level && this.state === A.PARSING) {
                let r = e.tracks,
                  i = void 0; if (i = r.audio) { i.levelCodec = 'mp4a.40.2', i.id = e.id, this.hls.trigger(g.default.BUFFER_CODECS, r), _.logger.log(`audio track:audio,container:${i.container},codecs[level/parsed]=[${i.levelCodec}/${i.codec}]`); const a = i.initSegment; a && (this.pendingAppending++, this.hls.trigger(g.default.BUFFER_APPENDING, { type: 'audio', data: a, parent: 'audio', content: 'initSegment' })), this.tick(); }
              }
            } }, { key: 'onFragParsingData',
            value(e) {
              let t = this,
                r = this.fragCurrent; if (r && e.id === 'audio' && e.sn === r.sn && e.level === r.level && this.state === A.PARSING) {
                let i = this.tracks[this.trackId],
                  a = this.fragCurrent; _.logger.log(`parsed ${e.type},PTS:[${e.startPTS.toFixed(3)},${e.endPTS.toFixed(3)}],DTS:[${e.startDTS.toFixed(3)}/${e.endDTS.toFixed(3)}],nb:${e.nb}`), E.default.updateFragPTSDTS(i.details, a.sn, e.startPTS, e.endPTS), [e.data1, e.data2].forEach((r) => { r && (t.pendingAppending++, t.hls.trigger(g.default.BUFFER_APPENDING, { type: e.type, data: r, parent: 'audio', content: 'data' })); }), this.tick();
              }
            } }, { key: 'onFragParsed', value(e) { const t = this.fragCurrent; t && e.id === 'audio' && e.sn === t.sn && e.level === t.level && this.state === A.PARSING && (this.stats.tparsed = performance.now(), this.state = A.PARSED, this._checkAppendedParsed()); } }, { key: 'onBufferCreated', value(e) { const t = e.tracks.audio; t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0); } }, { key: 'onBufferAppended', value(e) { if (e.parent === 'audio') switch (this.state) { case A.PARSING:case A.PARSED:this.pendingAppending--, this._checkAppendedParsed(); } } }, { key: '_checkAppendedParsed',
            value() {
              if (this.state === A.PARSED && this.pendingAppending === 0) {
                let e = this.fragCurrent,
                  t = this.stats; if (e) { this.fragPrevious = e, t.tbuffered = performance.now(), this.hls.trigger(g.default.FRAG_BUFFERED, { stats: t, frag: e, id: 'audio' }); const r = this.mediaBuffer ? this.mediaBuffer : this.media; _.logger.log(`audio buffered : ${b.default.toString(r.buffered)}`), this.state = A.IDLE; } this.tick();
              }
            } }, { key: 'onError', value(e) { const t = e.frag; if (!t || t.type === 'audio') switch (e.details) { case k.ErrorDetails.FRAG_LOAD_ERROR:case k.ErrorDetails.FRAG_LOAD_TIMEOUT:if (!e.fatal) { let r = this.fragLoadError; r ? r++ : r = 1; const i = this.config; if (r <= i.fragLoadingMaxRetry) { this.fragLoadError = r, t.loadCounter = 0; const a = Math.min(Math.pow(2, r - 1) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout); _.logger.warn(`audioStreamController: frag loading failed, retry in ${a} ms`), this.retryDate = performance.now() + a, this.state = A.FRAG_LOADING_WAITING_RETRY; } else _.logger.error(`audioStreamController: ${e.details} reaches max retry, redispatch as fatal ...`), e.fatal = !0, this.hls.trigger(g.default.ERROR, e), this.state = A.ERROR; } break; case k.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case k.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case k.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:case k.ErrorDetails.KEY_LOAD_ERROR:case k.ErrorDetails.KEY_LOAD_TIMEOUT:this.state !== A.ERROR && (this.state = e.fatal ? A.ERROR : A.IDLE, _.logger.warn(`audioStreamController: ${e.details} while loading frag,switch to ${this.state} state ...`)); } } }, { key: 'onBufferFlushed', value() { this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = A.IDLE, this.fragPrevious = null, this.tick(); } }]), t;
        }(y.default)); r.default = R;
    }, { 24: 24, 28: 28, 29: 29, 30: 30, 32: 32, 33: 33, 43: 43, 47: 47, 48: 48 }],
    6: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(30),
        u = i(l),
        d = e(29),
        h = i(d),
        c = e(47),
        f = (function (e) {
          function t(e) { return a(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MANIFEST_LOADING, u.default.MANIFEST_LOADED, u.default.AUDIO_TRACK_LOADED)); } return s(t, e), o(t, [{ key: 'destroy', value() { h.default.prototype.destroy.call(this); } }, { key: 'onManifestLoading', value() { this.tracks = [], this.trackId = -1; } }, { key: 'onManifestLoaded',
            value(e) {
              let t = this,
                r = e.audioTracks || [],
                i = !1; this.tracks = r, this.hls.trigger(u.default.AUDIO_TRACKS_UPDATED, { audioTracks: r }); let a = 0; r.forEach(e => (e.default ? (t.audioTrack = a, void (i = !0)) : void a++)), i === !1 && r.length && (c.logger.log('no default audio track defined, use first audio track as default'), this.audioTrack = 0);
            } }, { key: 'onAudioTrackLoaded', value(e) { e.id < this.tracks.length && (c.logger.log(`audioTrack ${e.id} loaded`), this.tracks[e.id].details = e.details, e.details.live && !this.timer && (this.timer = setInterval(this.ontick, 1e3 * e.details.targetduration)), !e.details.live && this.timer && (clearInterval(this.timer), this.timer = null)); } }, { key: 'setAudioTrackInternal',
            value(e) {
              if (e >= 0 && e < this.tracks.length) {
                this.timer && (clearInterval(this.timer), this.timer = null), this.trackId = e, c.logger.log(`switching to audioTrack ${e}`); let t = this.tracks[e],
                  r = t.type,
                  i = t.url; this.hls.trigger(u.default.AUDIO_TRACK_SWITCH, { id: e, type: r, url: i }); const a = t.details; !i || void 0 !== a && a.live !== !0 || (c.logger.log(`(re)loading playlist for audioTrack ${e}`), this.hls.trigger(u.default.AUDIO_TRACK_LOADING, { url: i, id: e }));
              }
            } }, { key: 'audioTracks', get() { return this.tracks; } }, { key: 'audioTrack', get() { return this.trackId; }, set(e) { this.trackId === e && void 0 !== this.tracks[e].details || this.setAudioTrackInternal(e); } }]), t;
        }(h.default)); r.default = f;
    }, { 29: 29, 30: 30, 47: 47 }],
    7: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(30),
        u = i(l),
        d = e(29),
        h = i(d),
        c = e(47),
        f = e(28),
        v = (function (e) {
          function t(e) { a(this, t); const r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MEDIA_ATTACHING, u.default.MEDIA_DETACHING, u.default.MANIFEST_PARSED, u.default.BUFFER_RESET, u.default.BUFFER_APPENDING, u.default.BUFFER_CODECS, u.default.BUFFER_EOS, u.default.BUFFER_FLUSHING, u.default.LEVEL_PTS_UPDATED, u.default.LEVEL_UPDATED)); return r._msDuration = null, r._levelDuration = null, r.onsbue = r.onSBUpdateEnd.bind(r), r.onsbe = r.onSBUpdateError.bind(r), r.pendingTracks = {}, r.tracks = {}, r; } return s(t, e), o(t, [{ key: 'destroy', value() { h.default.prototype.destroy.call(this); } }, { key: 'onLevelPtsUpdated',
            value(e) {
              let t = e.type,
                r = this.tracks.audio; if (t === 'audio' && r && r.container === 'audio/mpeg') {
                let i = this.sourceBuffer.audio,
                  a = Math.abs(i.timestampOffset - e.start); if (a > 0.1) { let n = i.updating; try { i.abort(); } catch (s) { n = !0, c.logger.warn(`can not abort audio buffer: ${s}`); }n ? this.audioTimestampOffset = e.start : (c.logger.warn(`change mpeg audio timestamp offset from ${i.timestampOffset} to ${e.start}`), i.timestampOffset = e.start); }
              }
            } }, { key: 'onManifestParsed',
            value(e) {
              let t = e.audio,
                r = e.video,
                i = 0; e.altAudio && (t || r) && (i = (t ? 1 : 0) + (r ? 1 : 0), c.logger.log(`${i} sourceBuffer(s) expected`)), this.sourceBufferNb = i;
            } }, { key: 'onMediaAttaching', value(e) { const t = this.media = e.media; if (t) { const r = this.mediaSource = new MediaSource(); this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), r.addEventListener('sourceopen', this.onmso), r.addEventListener('sourceended', this.onmse), r.addEventListener('sourceclose', this.onmsc), t.src = URL.createObjectURL(r); } } }, { key: 'onMediaDetaching', value() { c.logger.log('media source detaching'); const e = this.mediaSource; if (e) { if (e.readyState === 'open') try { e.endOfStream(); } catch (t) { c.logger.warn(`onMediaDetaching:${t.message} while calling endOfStream`); }e.removeEventListener('sourceopen', this.onmso), e.removeEventListener('sourceended', this.onmse), e.removeEventListener('sourceclose', this.onmsc), this.media && (URL.revokeObjectURL(this.media.src), this.media.removeAttribute('src'), this.media.load()), this.mediaSource = null, this.media = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0; } this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(u.default.MEDIA_DETACHED); } }, { key: 'onMediaSourceOpen', value() { c.logger.log('media source opened'), this.hls.trigger(u.default.MEDIA_ATTACHED, { media: this.media }); const e = this.mediaSource; e && e.removeEventListener('sourceopen', this.onmso), this.checkPendingTracks(); } }, { key: 'checkPendingTracks',
            value() {
              let e = this.pendingTracks,
                t = Object.keys(e).length; t && (this.sourceBufferNb <= t || this.sourceBufferNb === 0) && (this.createSourceBuffers(e), this.pendingTracks = {}, this.doAppending());
            } }, { key: 'onMediaSourceClose', value() { c.logger.log('media source closed'); } }, { key: 'onMediaSourceEnded', value() { c.logger.log('media source ended'); } }, { key: 'onSBUpdateEnd', value() { if (this.audioTimestampOffset) { const e = this.sourceBuffer.audio; c.logger.warn(`change mpeg audio timestamp offset from ${e.timestampOffset} to ${this.audioTimestampOffset}`), e.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset; } this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1, this.hls.trigger(u.default.BUFFER_APPENDED, { parent: this.parent }), this._needsFlush || this.doAppending(), this.updateMediaElementDuration(); } }, { key: 'onSBUpdateError', value(e) { c.logger.error(`sourceBuffer error:${e}`), this.hls.trigger(u.default.ERROR, { type: f.ErrorTypes.MEDIA_ERROR, details: f.ErrorDetails.BUFFER_APPENDING_ERROR, fatal: !1 }); } }, { key: 'onBufferReset', value() { const e = this.sourceBuffer; for (const t in e) { const r = e[t]; try { this.mediaSource.removeSourceBuffer(r), r.removeEventListener('updateend', this.onsbue), r.removeEventListener('error', this.onsbe); } catch (i) {} } this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0; } }, { key: 'onBufferCodecs', value(e) { if (Object.keys(this.sourceBuffer).length === 0) { for (const t in e) this.pendingTracks[t] = e[t]; const r = this.mediaSource; r && r.readyState === 'open' && this.checkPendingTracks(); } } }, { key: 'createSourceBuffers',
            value(e) {
              let t = this.sourceBuffer,
                r = this.mediaSource; for (const i in e) {
                if (!t[i]) {
                  let a = e[i],
                    n = a.levelCodec || a.codec,
                    s = `${a.container};codecs=${n}`; c.logger.log(`creating sourceBuffer(${s})`); try { const o = t[i] = r.addSourceBuffer(s); o.addEventListener('updateend', this.onsbue), o.addEventListener('error', this.onsbe), this.tracks[i] = { codec: n, container: a.container }, a.buffer = o; } catch (l) { c.logger.error(`error while trying to add sourceBuffer:${l.message}`), this.hls.trigger(u.default.ERROR, { type: f.ErrorTypes.MEDIA_ERROR, details: f.ErrorDetails.BUFFER_ADD_CODEC_ERROR, fatal: !1, err: l, mimeType: s }); }
                }
              } this.hls.trigger(u.default.BUFFER_CREATED, { tracks: e });
            } }, { key: 'onBufferAppending', value(e) { this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending()); } }, { key: 'onBufferAppendFail', value(e) { c.logger.error(`sourceBuffer error:${e.event}`), this.hls.trigger(u.default.ERROR, { type: f.ErrorTypes.MEDIA_ERROR, details: f.ErrorDetails.BUFFER_APPENDING_ERROR, fatal: !1, frag: this.fragCurrent }); } }, { key: 'onBufferEos',
            value(e) {
              let t = this.sourceBuffer,
                r = e.type; for (const i in t)r && i !== r || t[i].ended || (t[i].ended = !0, c.logger.log(`${i} sourceBuffer now EOS`)); this.checkEos();
            } }, { key: 'checkEos',
            value() {
              let e = this.sourceBuffer,
                t = this.mediaSource; if (!t || t.readyState !== 'open') return void (this._needsEos = !1); for (const r in e) { const i = e[r]; if (!i.ended) return; if (i.updating) return void (this._needsEos = !0); }c.logger.log('all media data available, signal endOfStream() to MediaSource and stop loading fragment'); try { t.endOfStream(); } catch (a) { c.logger.warn('exception while calling mediaSource.endOfStream()'); } this._needsEos = !1;
            } }, { key: 'onBufferFlushing', value(e) { this.flushRange.push({ start: e.startOffset, end: e.endOffset, type: e.type }), this.flushBufferCounter = 0, this.doFlush(); } }, { key: 'onLevelUpdated', value(e) { const t = e.details; t.fragments.length !== 0 && (this._levelDuration = t.totalduration + t.fragments[0].start, this.updateMediaElementDuration()); } }, { key: 'updateMediaElementDuration',
            value() {
              let e = this.media,
                t = this.mediaSource,
                r = this.sourceBuffer,
                i = this._levelDuration; if (i !== null && e && t && r && e.readyState !== 0 && t.readyState === 'open') { for (const a in r) if (r[a].updating) return; this._msDuration === null && (this._msDuration = t.duration), i > this._msDuration && i > e.duration && (c.logger.log(`Updating mediasource duration to ${i.toFixed(3)}`), this._msDuration = t.duration = i); }
            } }, { key: 'doFlush',
            value() {
              for (;this.flushRange.length;) {
                const e = this.flushRange[0]; if (!this.flushBuffer(e.start, e.end, e.type)) return void (this._needsFlush = !0); this.flushRange.shift(), this.flushBufferCounter = 0;
              } if (this.flushRange.length === 0) {
                this._needsFlush = !1; let t = 0,
                  r = this.sourceBuffer; for (const i in r)t += r[i].buffered.length; this.appended = t, this.hls.trigger(u.default.BUFFER_FLUSHED);
              }
            } }, { key: 'doAppending',
            value() {
              let e = this.hls,
                t = this.sourceBuffer,
                r = this.segments; if (Object.keys(t).length) { if (this.media.error) return this.segments = [], void c.logger.error('trying to append although a media error occured, flush segment and abort'); if (this.appending) return; if (r && r.length) { const i = r.shift(); try { const a = i.type; t[a] ? (t[a].ended = !1, this.parent = i.parent, t[a].appendBuffer(i.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd(); } catch (n) { c.logger.error(`error while trying to append buffer:${n.message}`), r.unshift(i); const s = { type: f.ErrorTypes.MEDIA_ERROR }; if (n.code === 22) return this.segments = [], s.details = f.ErrorDetails.BUFFER_FULL_ERROR, void e.trigger(u.default.ERROR, s); if (this.appendError ? this.appendError++ : this.appendError = 1, s.details = f.ErrorDetails.BUFFER_APPEND_ERROR, s.frag = this.fragCurrent, this.appendError > e.config.appendErrorMaxRetry) return c.logger.log(`fail ${e.config.appendErrorMaxRetry} times to append segment in sourceBuffer`), r = [], s.fatal = !0, void e.trigger(u.default.ERROR, s); s.fatal = !1, e.trigger(u.default.ERROR, s); } } }
            } }, { key: 'flushBuffer',
            value(e, t, r) {
              let i,
                a,
                n,
                s,
                o,
                l,
                u = this.sourceBuffer; if (Object.keys(u).length) { if (c.logger.log(`flushBuffer,pos/start/end: ${this.media.currentTime}/${e}/${t}`), this.flushBufferCounter < this.appended) { for (const d in u) if (!r || d === r) { if (i = u[d], i.ended = !1, i.updating) return c.logger.warn('cannot flush, sb updating in progress'), !1; try { for (a = 0; a < i.buffered.length; a++) if (n = i.buffered.start(a), s = i.buffered.end(a), navigator.userAgent.toLowerCase().indexOf('firefox') !== -1 && t === Number.POSITIVE_INFINITY ? (o = e, l = t) : (o = Math.max(n, e), l = Math.min(s, t)), Math.min(l, s) - o > 0.5) return this.flushBufferCounter++, c.logger.log(`flush ${d} [${o},${l}], of [${n},${s}], pos:${this.media.currentTime}`), i.remove(o, l), !1; } catch (h) { c.logger.warn('exception while accessing sourcebuffer, it might have been removed from MediaSource'); } } } else c.logger.warn('abort flushing too many retries'); c.logger.log('buffer flushed'); } return !0;
            } }]), t;
        }(h.default)); r.default = v;
    }, { 28: 28, 29: 29, 30: 30, 47: 47 }],
    8: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(30),
        u = i(l),
        d = e(29),
        h = i(d),
        c = (function (e) {
          function t(e) { return a(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.FPS_DROP_LEVEL_CAPPING, u.default.MEDIA_ATTACHING, u.default.MANIFEST_PARSED)); } return s(t, e), o(t, [{ key: 'destroy', value() { this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer))); } }, { key: 'onFpsDropLevelCapping', value(e) { this.restrictedLevels || (this.restrictedLevels = []), this.isLevelRestricted(e.droppedLevel) || this.restrictedLevels.push(e.droppedLevel); } }, { key: 'onMediaAttaching', value(e) { this.media = e.media instanceof HTMLVideoElement ? e.media : null; } }, { key: 'onManifestParsed', value(e) { this.hls.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = e.levels, this.hls.firstLevel = this.getMaxLevel(e.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize()); } }, { key: 'detectPlayerSize', value() { if (this.media) { const e = this.levels ? this.levels.length : 0; e && (this.hls.autoLevelCapping = this.getMaxLevel(e - 1), this.hls.autoLevelCapping > this.autoLevelCapping && this.hls.streamController.nextLevelSwitch(), this.autoLevelCapping = this.hls.autoLevelCapping); } } }, { key: 'getMaxLevel',
            value(e) {
              let t = 0,
                r = void 0,
                i = void 0,
                a = this.mediaWidth,
                n = this.mediaHeight,
                s = 0,
                o = 0; for (r = 0; r <= e && (i = this.levels[r], !this.isLevelRestricted(r)) && (t = r, s = i.width, o = i.height, !(a <= s || n <= o)); r++);return t;
            } }, { key: 'isLevelRestricted', value(e) { return !(!this.restrictedLevels || this.restrictedLevels.indexOf(e) === -1); } }, { key: 'contentScaleFactor', get() { let e = 1; try { e = window.devicePixelRatio; } catch (t) {} return e; } }, { key: 'mediaWidth', get() { let e = void 0; return this.media && (e = this.media.width || this.media.clientWidth || this.media.offsetWidth, e *= this.contentScaleFactor), e; } }, { key: 'mediaHeight', get() { let e = void 0; return this.media && (e = this.media.height || this.media.clientHeight || this.media.offsetHeight, e *= this.contentScaleFactor), e; } }]), t;
        }(h.default)); r.default = c;
    }, { 29: 29, 30: 30 }],
    9: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let n = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        s = e(46),
        o = i(s),
        l = (function () {
          function e(t, r, i, n) { a(this, e), this.hls = t, this.defaultEstimate_ = n, this.minWeight_ = 0.001, this.minDelayMs_ = 50, this.slow_ = new o.default(r), this.fast_ = new o.default(i); } return n(e, [{ key: 'sample',
            value(e, t) {
              e = Math.max(e, this.minDelayMs_); let r = 8e3 * t / e,
                i = e / 1e3; this.fast_.sample(i, r), this.slow_.sample(i, r);
            } }, { key: 'canEstimate', value() { const e = this.fast_; return e && e.getTotalWeight() >= this.minWeight_; } }, { key: 'getEstimate', value() { return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_; } }, { key: 'destroy', value() {} }]), e;
        }()); r.default = l;
    }, { 46: 46 }],
    10: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(30),
        u = i(l),
        d = e(29),
        h = i(d),
        c = e(47),
        f = (function (e) {
          function t(e) { return a(this, t), n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MEDIA_ATTACHING)); } return s(t, e), o(t, [{ key: 'destroy', value() { this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1; } }, { key: 'onMediaAttaching', value(e) { this.hls.config.capLevelOnFPSDrop && (this.video = e.media instanceof HTMLVideoElement ? e.media : null, typeof this.video.getVideoPlaybackQuality === 'function' && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), this.hls.config.fpsDroppedMonitoringPeriod)); } }, { key: 'checkFPS',
            value(e, t, r) {
              const i = performance.now(); if (t) {
                if (this.lastTime) {
                  let a = i - this.lastTime,
                    n = r - this.lastDroppedFrames,
                    s = t - this.lastDecodedFrames,
                    o = 1e3 * n / a; if (this.hls.trigger(u.default.FPS_DROP, { currentDropped: n, currentDecoded: s, totalDroppedFrames: r }), o > 0 && n > this.hls.config.fpsDroppedMonitoringThreshold * s) { let l = this.hls.currentLevel; c.logger.warn(`drop FPS ratio greater than max allowed value for currentLevel: ${l}`), l > 0 && (this.hls.autoLevelCapping === -1 || this.hls.autoLevelCapping >= l) && (l -= 1, this.hls.trigger(u.default.FPS_DROP_LEVEL_CAPPING, { level: l, droppedLevel: this.hls.currentLevel }), this.hls.autoLevelCapping = l, this.hls.streamController.nextLevelSwitch()); }
                } this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = t;
              }
            } }, { key: 'checkFPSInterval', value() { if (this.video) if (this.isVideoPlaybackQualityAvailable) { const e = this.video.getVideoPlaybackQuality(); this.checkFPS(this.video, e.totalVideoFrames, e.droppedVideoFrames); } else this.checkFPS(this.video, this.video.webkitDecodedFrameCount, this.video.webkitDroppedFrameCount); } }]), t;
        }(h.default)); r.default = f;
    }, { 29: 29, 30: 30, 47: 47 }],
    11: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(30),
        u = i(l),
        d = e(29),
        h = i(d),
        c = e(47),
        f = e(28),
        v = e(32),
        g = i(v),
        p = (function (e) {
          function t(e) { a(this, t); const r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MANIFEST_LOADED, u.default.LEVEL_LOADED, u.default.ERROR)); return r.ontick = r.tick.bind(r), r._manualLevel = r._autoLevelCapping = -1, r; } return s(t, e), o(t, [{ key: 'destroy', value() { this.timer && (clearTimeout(this.timer), this.timer = null), this._manualLevel = -1; } }, { key: 'startLoad', value() { this.canload = !0, this.timer && this.tick(); } }, { key: 'stopLoad', value() { this.canload = !1; } }, { key: 'onManifestLoaded',
            value(e) {
              let t,
                r = [],
                i = [],
                a = {},
                n = !1,
                s = !1,
                o = this.hls,
                l = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                d = function (e, t) { return MediaSource.isTypeSupported(`${e}/mp4;codecs=${t}`); }; if (e.levels.forEach((e) => { e.videoCodec && (n = !0), l && e.audioCodec && e.audioCodec.indexOf('mp4a.40.34') !== -1 && (e.audioCodec = void 0), (e.audioCodec || e.attrs && e.attrs.AUDIO) && (s = !0); const t = a[e.bitrate]; void 0 === t ? (a[e.bitrate] = r.length, e.url = [e.url], e.urlId = 0, r.push(e)) : r[t].url.push(e.url); }), n && s ? r.forEach((e) => { e.videoCodec && i.push(e); }) : i = r, i = i.filter((e) => {
                let t = e.audioCodec,
                  r = e.videoCodec; return (!t || d('audio', t)) && (!r || d('video', r));
              }), i.length) { t = i[0].bitrate, i.sort((e, t) => e.bitrate - t.bitrate), this._levels = i; for (let h = 0; h < i.length; h++) if (i[h].bitrate === t) { this._firstLevel = h, c.logger.log(`manifest loaded,${i.length} level(s) found, first bitrate:${t}`); break; }o.trigger(u.default.MANIFEST_PARSED, { levels: i, firstLevel: this._firstLevel, stats: e.stats, audio: s, video: n, altAudio: e.audioTracks.length > 0 }); } else o.trigger(u.default.ERROR, { type: f.ErrorTypes.MEDIA_ERROR, details: f.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: !0, url: o.url, reason: 'no level with compatible codecs found in manifest' });
            } }, { key: 'setLevelInternal',
            value(e) {
              const t = this._levels; if (e >= 0 && e < t.length) {
                this.timer && (clearTimeout(this.timer), this.timer = null), this._level !== e && (c.logger.log(`switching to level ${e}`), this._level = e, this.hls.trigger(u.default.LEVEL_SWITCH, { level: e })); let r = t[e],
                  i = r.details; if (!i || i.live === !0) { const a = r.urlId; this.hls.trigger(u.default.LEVEL_LOADING, { url: r.url[a], level: e, id: a }); }
              } else this.hls.trigger(u.default.ERROR, { type: f.ErrorTypes.OTHER_ERROR, details: f.ErrorDetails.LEVEL_SWITCH_ERROR, level: e, fatal: !1, reason: 'invalid level idx' });
            } }, { key: 'onError',
            value(e) {
              if (!e.fatal) {
                let t = e.details,
                  r = this.hls,
                  i = void 0,
                  a = void 0,
                  n = !1,
                  s = r.abrController,
                  o = s.minAutoLevel; switch (t) { case f.ErrorDetails.FRAG_LOAD_ERROR:case f.ErrorDetails.FRAG_LOAD_TIMEOUT:case f.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case f.ErrorDetails.KEY_LOAD_ERROR:case f.ErrorDetails.KEY_LOAD_TIMEOUT:i = e.frag.level; break; case f.ErrorDetails.LEVEL_LOAD_ERROR:case f.ErrorDetails.LEVEL_LOAD_TIMEOUT:i = e.context.level, n = !0; } if (void 0 !== i) {
                  if (a = this._levels[i], a.urlId < a.url.length - 1)a.urlId++, a.details = void 0, c.logger.warn(`level controller,${t} for level ${i}: switching to redundant stream id ${a.urlId}`); else {
                    const l = this._manualLevel === -1 && i; if (l)c.logger.warn(`level controller,${t}: emergency switch-down for next fragment`), s.nextAutoLevel = o; else if (a && a.details && a.details.live)c.logger.warn(`level controller,${t} on live stream, discard`), n && (this._level = void 0); else if (t === f.ErrorDetails.LEVEL_LOAD_ERROR || t === f.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
                      let d = r.media,
                        h = d && g.default.isBuffered(d, d.currentTime) && g.default.isBuffered(d, d.currentTime + 0.5); if (h) { const v = r.config.levelLoadingRetryDelay; c.logger.warn(`level controller,${t}, but media buffered, retry in ${v}ms`), this.timer = setTimeout(this.ontick, v); } else c.logger.error(`cannot recover ${t} error`), this._level = void 0, this.timer && (clearTimeout(this.timer), this.timer = null), e.fatal = !0, r.trigger(u.default.ERROR, e);
                    }
                  }
                }
              }
            } }, { key: 'onLevelLoaded',
            value(e) {
              if (e.level === this._level) {
                const t = e.details; if (t.live) {
                  let r = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration),
                    i = this._levels[e.level],
                    a = i.details; a && t.endSN === a.endSN && (r /= 2, c.logger.log('same live playlist, reload twice faster')), r -= performance.now() - e.stats.trequest, r = Math.max(1e3, Math.round(r)), c.logger.log(`live playlist, reload in ${r} ms`), this.timer = setTimeout(this.ontick, r);
                } else this.timer = null;
              }
            } }, { key: 'tick',
            value() {
              const e = this._level; if (void 0 !== e && this.canload) {
                let t = this._levels[e],
                  r = t.urlId; this.hls.trigger(u.default.LEVEL_LOADING, { url: t.url[r], level: e, id: r });
              }
            } }, { key: 'levels', get() { return this._levels; } }, { key: 'level', get() { return this._level; }, set(e) { const t = this._levels; t && t.length > e && (this._level === e && void 0 !== t[e].details || this.setLevelInternal(e)); } }, { key: 'manualLevel', get() { return this._manualLevel; }, set(e) { this._manualLevel = e, void 0 === this._startLevel && (this._startLevel = e), e !== -1 && (this.level = e); } }, { key: 'firstLevel', get() { return this._firstLevel; }, set(e) { this._firstLevel = e; } }, { key: 'startLevel', get() { if (void 0 === this._startLevel) { const e = this.hls.config.startLevel; return void 0 !== e ? e : this._firstLevel; } return this._startLevel; }, set(e) { e !== -1 && (e = Math.max(e, this.hls.abrController.minAutoLevel)), this._startLevel = e; } }, { key: 'nextLoadLevel', get() { return this._manualLevel !== -1 ? this._manualLevel : this.hls.abrController.nextAutoLevel; }, set(e) { this.level = e, this._manualLevel === -1 && (this.hls.abrController.nextAutoLevel = e); } }]), t;
        }(h.default)); r.default = p;
    }, { 28: 28, 29: 29, 30: 30, 32: 32, 47: 47 }],
    12: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(43),
        u = i(l),
        d = e(32),
        h = i(d),
        c = e(24),
        f = i(c),
        v = e(30),
        g = i(v),
        p = e(29),
        y = i(p),
        m = e(33),
        E = i(m),
        T = e(48),
        b = i(T),
        k = e(28),
        _ = e(47),
        A = { STOPPED: 'STOPPED', IDLE: 'IDLE', KEY_LOADING: 'KEY_LOADING', FRAG_LOADING: 'FRAG_LOADING', FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY', WAITING_LEVEL: 'WAITING_LEVEL', PARSING: 'PARSING', PARSED: 'PARSED', BUFFER_FLUSHING: 'BUFFER_FLUSHING', ENDED: 'ENDED', ERROR: 'ERROR' },
        R = (function (e) {
          function t(e) { a(this, t); const r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, g.default.MEDIA_ATTACHED, g.default.MEDIA_DETACHING, g.default.MANIFEST_LOADING, g.default.MANIFEST_PARSED, g.default.LEVEL_LOADED, g.default.KEY_LOADED, g.default.FRAG_LOADED, g.default.FRAG_LOAD_EMERGENCY_ABORTED, g.default.FRAG_PARSING_INIT_SEGMENT, g.default.FRAG_PARSING_DATA, g.default.FRAG_PARSED, g.default.ERROR, g.default.AUDIO_TRACK_SWITCH, g.default.BUFFER_CREATED, g.default.BUFFER_APPENDED, g.default.BUFFER_FLUSHED)); return r.config = e.config, r.audioCodecSwap = !1, r.ticks = 0, r.ontick = r.tick.bind(r), r; } return s(t, e), o(t, [{ key: 'destroy', value() { this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), y.default.prototype.destroy.call(this), this.state = A.STOPPED; } }, { key: 'startLoad',
            value(e) {
              if (this.levels) {
                let t = this.lastCurrentTime,
                  r = this.hls; if (this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) { let i = r.startLevel; i === -1 && (i = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1; }t > 0 && e === -1 && (_.logger.log(`override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t), this.state = A.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
              } else _.logger.warn('cannot start loading as manifest not parsed yet'), this.state = A.STOPPED;
            } }, { key: 'stopLoad', value() { const e = this.fragCurrent; e && (e.loader && e.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = A.STOPPED; } }, { key: 'tick', value() { this.ticks++, this.ticks === 1 && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0); } }, { key: 'doTick',
            value() {
              switch (this.state) {
                case A.ERROR:break; case A.BUFFER_FLUSHING:this.fragLoadError = 0; break; case A.IDLE:if (!this._doTickIdle()) return; break; case A.WAITING_LEVEL:var e = this.levels[this.level]; e && e.details && (this.state = A.IDLE); break; case A.FRAG_LOADING_WAITING_RETRY:var t = performance.now(),
                  r = this.retryDate; (!r || t >= r || this.media && this.media.seeking) && (_.logger.log('mediaController: retryDate reached, switch back to IDLE state'), this.state = A.IDLE); break; case A.ERROR:case A.PAUSED:case A.STOPPED:case A.FRAG_LOADING:case A.PARSING:case A.PARSED:case A.ENDED:
              } this._checkBuffer(), this._checkFragmentChanged();
            } }, { key: '_doTickIdle',
            value() {
              let e = this.hls,
                t = e.config,
                r = this.media; if (void 0 !== this.levelLastLoaded && !r && (this.startFragRequested || !t.startFragPrefetch)) return !0; let i = void 0; i = this.loadedmetadata ? r.currentTime : this.nextLoadPosition; let a = e.nextLoadLevel,
                n = this.levels[a],
                s = n.bitrate,
                o = void 0; o = s ? Math.max(8 * t.maxBufferSize / s, t.maxBufferLength) : t.maxBufferLength, o = Math.min(o, t.maxMaxBufferLength); let l = h.default.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, i, t.maxBufferHole),
                u = l.len; if (u >= o) return !0; _.logger.trace(`buffer length of ${u.toFixed(3)} is below max of ${o.toFixed(3)}. checking for more payload ...`), this.level = e.nextLoadLevel = a; const d = n.details; if (typeof d === 'undefined' || d.live && this.levelLastLoaded !== a) return this.state = A.WAITING_LEVEL, !0; const c = this.fragPrevious; if (!d.live && c && c.sn === d.endSN && (!r.seeking && l.len || r.duration - l.end <= c.duration / 2)) { const f = {}; return this.altAudio && (f.type = 'video'), this.hls.trigger(g.default.BUFFER_EOS, f), this.state = A.ENDED, !0; } return this._fetchPayloadOrEos({ pos: i, bufferInfo: l, levelDetails: d });
            } }, { key: '_fetchPayloadOrEos',
            value(e) {
              let t = e.pos,
                r = e.bufferInfo,
                i = e.levelDetails,
                a = this.fragPrevious,
                n = this.level,
                s = i.fragments,
                o = s.length; if (o === 0) return !1; let l = s[0].start,
                u = s[o - 1].start + s[o - 1].duration,
                d = r.end,
                h = void 0; if (i.live) { const c = this.config.initialLiveManifestSize; if (o < c) return _.logger.warn(`Can not start playback of a level, reason: not enough fragments ${o} < ${c}`), !1; if (h = this._ensureFragmentAtLivePoint({ levelDetails: i, bufferEnd: d, start: l, end: u, fragPrevious: a, fragments: s, fragLen: o }), h === null) return !1; } else d < l && (h = s[0]); return h || (h = this._findFragment({ start: l, fragPrevious: a, fragLen: o, fragments: s, bufferEnd: d, end: u, levelDetails: i })), !h || this._loadFragmentOrKey({ frag: h, level: n, levelDetails: i, pos: t, bufferEnd: d });
            } }, { key: '_ensureFragmentAtLivePoint',
            value(e) {
              let t = e.levelDetails,
                r = e.bufferEnd,
                i = e.start,
                a = e.end,
                n = e.fragPrevious,
                s = e.fragments,
                o = e.fragLen,
                l = this.hls.config,
                u = this.media,
                d = void 0,
                h = void 0 !== l.liveMaxLatencyDuration ? l.liveMaxLatencyDuration : l.liveMaxLatencyDurationCount * t.targetduration; if (r < Math.max(i, a - h)) { const c = this.liveSyncPosition = this.computeLivePosition(i, t); _.logger.log(`buffer end: ${r.toFixed(3)} is located too far from the end of live sliding playlist, reset currentTime to : ${c.toFixed(3)}`), r = c, u && u.readyState && u.duration > c && (u.currentTime = c); } if (t.PTSKnown && r > a && u && u.readyState) return null; if (this.startFragRequested && !t.PTSKnown) { if (n) { const f = n.sn + 1; f >= t.startSN && f <= t.endSN && (d = s[f - t.startSN], _.logger.log(`live playlist, switching playlist, load frag with next SN: ${d.sn}`)); }d || (d = s[Math.min(o - 1, Math.round(o / 2))], _.logger.log(`live playlist, switching playlist, unknown, load middle frag : ${d.sn}`)); } return d;
            } }, { key: '_findFragment',
            value(e) {
              let t = (e.start, e.fragPrevious),
                r = e.fragLen,
                i = e.fragments,
                a = e.bufferEnd,
                n = e.end,
                s = e.levelDetails,
                o = this.hls.config,
                l = void 0,
                d = void 0,
                h = o.maxFragLookUpTolerance; if (a < n ? (a > n - h && (h = 0), d = u.default.search(i, e => (e.start + e.duration - h <= a ? 1 : e.start - h > a && e.start ? -1 : 0))) : d = i[r - 1], d) {
                l = d; let c = l.sn - s.startSN,
                  f = t && l.level === t.level; if (f && l.sn === t.sn) if (l.sn < s.endSN) { const v = t.deltaPTS; v && v > o.maxBufferHole && t.dropped && c ? (l = i[c - 1], _.logger.warn('SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this'), t.loadCounter--) : (l = i[c + 1], _.logger.log(`SN just loaded, load next one: ${l.sn}`)); } else l = null; else if (l.dropped && !f) if (_.logger.warn('Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe'), l.dropped = 0, c) { const g = i[c - 1]; g.loadCounter && g.loadCounter--, l = g; } else l = null;
              } return l;
            } }, { key: '_loadFragmentOrKey',
            value(e) {
              let t = e.frag,
                r = e.level,
                i = e.levelDetails,
                a = e.pos,
                n = e.bufferEnd,
                s = this.hls,
                o = s.config; if (t.decryptdata.uri == null || t.decryptdata.key != null) { if (_.logger.log(`Loading ${t.sn} of [${i.startSN} ,${i.endSN}],level ${r}, currentTime:${a.toFixed(3)},bufferEnd:${n.toFixed(3)}`), void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, t.loadCounter) { t.loadCounter++; const l = o.fragLoadingLoopThreshold; if (t.loadCounter > l && Math.abs(this.fragLoadIdx - t.loadIdx) < l) return s.trigger(g.default.ERROR, { type: k.ErrorTypes.MEDIA_ERROR, details: k.ErrorDetails.FRAG_LOOP_LOADING_ERROR, fatal: !1, frag: t }), !1; } else t.loadCounter = 1; return t.loadIdx = this.fragLoadIdx, this.fragCurrent = t, this.startFragRequested = !0, this.nextLoadPosition = t.start + t.duration, t.autoLevel = s.autoLevelEnabled, t.bitrateTest = this.bitrateTest, s.trigger(g.default.FRAG_LOADING, { frag: t }), this.state = A.FRAG_LOADING, !0; }_.logger.log(`Loading key for ${t.sn} of [${i.startSN} ,${i.endSN}],level ${r}`), this.state = A.KEY_LOADING, s.trigger(g.default.KEY_LOADING, { frag: t });
            } }, { key: 'getBufferRange',
            value(e) {
              let t,
                r,
                i = this.bufferRange; if (i) for (t = i.length - 1; t >= 0; t--) if (r = i[t], e >= r.start && e <= r.end) return r; return null;
            } }, { key: 'followingBufferRange', value(e) { return e ? this.getBufferRange(e.end + 0.5) : null; } }, { key: '_checkFragmentChanged',
            value() {
              let e,
                t,
                r = this.media; if (r && r.readyState && r.seeking === !1 && (t = r.currentTime, t > r.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = t), h.default.isBuffered(r, t) ? e = this.getBufferRange(t) : h.default.isBuffered(r, t + 0.1) && (e = this.getBufferRange(t + 0.1)), e)) { const i = e.frag; i !== this.fragPlaying && (this.fragPlaying = i, this.hls.trigger(g.default.FRAG_CHANGED, { frag: i })); }
            } }, { key: 'immediateLevelSwitch',
            value() {
              if (_.logger.log('immediateLevelSwitch'), !this.immediateSwitch) {
                this.immediateSwitch = !0; let e = this.media,
                  t = void 0; e ? (t = e.paused, e.pause()) : t = !0, this.previouslyPaused = t;
              } const r = this.fragCurrent; r && r.loader && r.loader.abort(), this.fragCurrent = null, this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = A.BUFFER_FLUSHING, this.hls.trigger(g.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY });
            } }, { key: 'immediateLevelSwitchEnd', value() { const e = this.media; e && e.buffered.length && (this.immediateSwitch = !1, h.default.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play()); } }, { key: 'nextLevelSwitch',
            value() {
              const e = this.media; if (e && e.readyState) {
                let t = void 0,
                  r = void 0,
                  i = void 0; if (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, r = this.getBufferRange(e.currentTime), r && r.start > 1 && (this.state = A.BUFFER_FLUSHING, this.hls.trigger(g.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: r.start - 1 })), e.paused)t = 0; else {
                  let a = this.hls.nextLoadLevel,
                    n = this.levels[a],
                    s = this.fragLastKbps; t = s && this.fragCurrent ? this.fragCurrent.duration * n.bitrate / (1e3 * s) + 1 : 0;
                } if (i = this.getBufferRange(e.currentTime + t), i && (i = this.followingBufferRange(i))) { const o = this.fragCurrent; o && o.loader && o.loader.abort(), this.fragCurrent = null, this.state = A.BUFFER_FLUSHING, this.hls.trigger(g.default.BUFFER_FLUSHING, { startOffset: i.start, endOffset: Number.POSITIVE_INFINITY }); }
              }
            } }, { key: 'onMediaAttached', value(e) { const t = this.media = this.mediaBuffer = e.media; this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener('seeking', this.onvseeking), t.addEventListener('seeked', this.onvseeked), t.addEventListener('ended', this.onvended); const r = this.config; this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition); } }, { key: 'onMediaDetaching', value() { const e = this.media; e && e.ended && (_.logger.log('MSE detaching and video ended, reset startPosition'), this.startPosition = this.lastCurrentTime = 0); const t = this.levels; t && t.forEach((e) => { e.details && e.details.fragments.forEach((e) => { e.loadCounter = void 0, e.backtracked = void 0; }); }), e && (e.removeEventListener('seeking', this.onvseeking), e.removeEventListener('seeked', this.onvseeked), e.removeEventListener('ended', this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad(); } }, { key: 'onMediaSeeking',
            value() {
              let e = this.media,
                t = e ? e.currentTime : void 0,
                r = this.config; if (_.logger.log(`media seeking to ${t.toFixed(3)}`), this.state === A.FRAG_LOADING) {
                let i = h.default.bufferInfo(e, t, this.config.maxBufferHole),
                  a = this.fragCurrent; if (i.len === 0 && a) {
                  let n = r.maxFragLookUpTolerance,
                    s = a.start - n,
                    o = a.start + a.duration + n; t < s || t > o ? (a.loader && (_.logger.log('seeking outside of buffer while fragment load in progress, cancel fragment load'), a.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = A.IDLE) : _.logger.log('seeking outside of buffer but within currently loaded fragment range');
                }
              } else this.state === A.ENDED && (this.state = A.IDLE); e && (this.lastCurrentTime = t), this.state !== A.FRAG_LOADING && void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * r.fragLoadingLoopThreshold), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = t), this.tick();
            } }, { key: 'onMediaSeeked', value() { _.logger.log(`media seeked to ${this.media.currentTime.toFixed(3)}`), this.tick(); } }, { key: 'onMediaEnded', value() { _.logger.log('media ended'), this.startPosition = this.lastCurrentTime = 0; } }, { key: 'onManifestLoading', value() { _.logger.log('trigger BUFFER_RESET'), this.hls.trigger(g.default.BUFFER_RESET), this.bufferRange = [], this.stalled = !1, this.startPosition = this.lastCurrentTime = 0; } }, { key: 'onManifestParsed',
            value(e) {
              let t,
                r = !1,
                i = !1; e.levels.forEach((e) => { t = e.audioCodec, t && (t.indexOf('mp4a.40.2') !== -1 && (r = !0), t.indexOf('mp4a.40.5') !== -1 && (i = !0)); }), this.audioCodecSwitch = r && i, this.audioCodecSwitch && _.logger.log('both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC'), this.levels = e.levels, this.startLevelLoaded = !1, this.startFragRequested = !1; const a = this.config; a.autoStartLoad && this.hls.startLoad(a.startPosition);
            } }, { key: 'onLevelLoaded',
            value(e) {
              let t = e.details,
                r = e.level,
                i = this.levels[r],
                a = t.totalduration,
                n = 0; if (_.logger.log(`level ${r} loaded [${t.startSN},${t.endSN}],duration:${a}`), this.levelLastLoaded = r, t.live) { const s = i.details; s && t.fragments.length > 0 ? (E.default.mergeDetails(s, t), n = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(n, s), t.PTSKnown ? _.logger.log(`live playlist sliding:${n.toFixed(3)}`) : _.logger.log('live playlist - outdated PTS, unknown sliding')) : (t.PTSKnown = !1, _.logger.log('live playlist - first load, unknown sliding')); } else t.PTSKnown = !1; if (i.details = t, this.hls.trigger(g.default.LEVEL_UPDATED, { details: t, level: r }), this.startFragRequested === !1) { if (this.startPosition === -1 || this.lastCurrentTime === -1) { let o = t.startTimeOffset; isNaN(o) ? t.live ? (this.startPosition = this.computeLivePosition(n, t), _.logger.log(`configure startPosition to ${this.startPosition}`)) : this.startPosition = 0 : (o < 0 && (_.logger.log(`negative start time offset ${o}, count from end of last fragment`), o = n + a + o), _.logger.log(`start time offset found in playlist, adjust startPosition to ${o}`), this.startPosition = o), this.lastCurrentTime = this.startPosition; } this.nextLoadPosition = this.startPosition; } this.state === A.WAITING_LEVEL && (this.state = A.IDLE), this.tick();
            } }, { key: 'onKeyLoaded', value() { this.state === A.KEY_LOADING && (this.state = A.IDLE, this.tick()); } }, { key: 'onFragLoaded',
            value(e) {
              let t = this.fragCurrent,
                r = e.frag; if (this.state === A.FRAG_LOADING && t && r.type === 'main' && r.level === t.level && r.sn === t.sn) {
                let i = e.stats,
                  a = this.levels[t.level],
                  n = a.details; if (_.logger.log(`Loaded  ${t.sn} of [${n.startSN} ,${n.endSN}],level ${t.level}`), this.bitrateTest = !1, r.bitrateTest === !0 && this.hls.nextLoadLevel) this.state = A.IDLE, this.startFragRequested = !1, i.tparsed = i.tbuffered = performance.now(), this.hls.trigger(g.default.FRAG_BUFFERED, { stats: i, frag: t, id: 'main' }), this.tick(); else {
                  this.state = A.PARSING, this.stats = i; let s = n.totalduration,
                    o = isNaN(t.startDTS) ? t.start : t.startDTS,
                    l = t.level,
                    u = t.sn,
                    d = this.config.defaultAudioCodec || a.audioCodec; this.audioCodecSwap && (_.logger.log('swapping playlist audio codec'), void 0 === d && (d = this.lastAudioCodec), d && (d = d.indexOf('mp4a.40.5') !== -1 ? 'mp4a.40.2' : 'mp4a.40.5')), this.pendingAppending = 0, _.logger.log(`Parsing ${u} of [${n.startSN} ,${n.endSN}],level ${l}, cc ${t.cc}`); let h = this.demuxer; h || (h = this.demuxer = new f.default(this.hls, 'main')); const c = n.PTSKnown || !n.live; h.push(e.payload, d, a.videoCodec, o, t.cc, l, u, s, t.decryptdata, c);
                }
              } this.fragLoadError = 0;
            } }, { key: 'onFragParsingInitSegment',
            value(e) {
              const t = this.fragCurrent; if (t && e.id === 'main' && e.sn === t.sn && e.level === t.level && this.state === A.PARSING) {
                let r,
                  i,
                  a = e.tracks; if (a.audio && this.altAudio && delete a.audio,
                  i = a.audio) {
                  let n = this.levels[this.level].audioCodec,
                    s = navigator.userAgent.toLowerCase(); n && this.audioCodecSwap && (_.logger.log('swapping playlist audio codec'), n = n.indexOf('mp4a.40.5') !== -1 ? 'mp4a.40.2' : 'mp4a.40.5'), this.audioCodecSwitch && i.metadata.channelCount !== 1 && s.indexOf('firefox') === -1 && (n = 'mp4a.40.5'), s.indexOf('android') !== -1 && i.container !== 'audio/mpeg' && (n = 'mp4a.40.2', _.logger.log(`Android: force audio codec to${n}`)), i.levelCodec = n, i.id = e.id;
                } if (i = a.video, i && (i.levelCodec = this.levels[this.level].videoCodec, i.id = e.id), e.unique) { const o = { codec: '', levelCodec: '' }; for (r in e.tracks)i = a[r], o.container = i.container, o.codec && (o.codec += ',', o.levelCodec += ','), i.codec && (o.codec += i.codec), i.levelCodec && (o.levelCodec += i.levelCodec); a = { audiovideo: o }; } this.hls.trigger(g.default.BUFFER_CODECS, a); for (r in a) { i = a[r], _.logger.log(`main track:${r},container:${i.container},codecs[level/parsed]=[${i.levelCodec}/${i.codec}]`); const l = i.initSegment; l && (this.pendingAppending++, this.hls.trigger(g.default.BUFFER_APPENDING, { type: r, data: l, parent: 'main', content: 'initSegment' })); } this.tick();
              }
            } }, { key: 'onFragParsingData',
            value(e) {
              let t = this,
                r = this.fragCurrent; if (r && e.id === 'main' && e.sn === r.sn && e.level === r.level && (e.type !== 'audio' || !this.altAudio) && this.state === A.PARSING) {
                let i = this.levels[this.level],
                  a = this.fragCurrent; if (_.logger.log(`Parsed ${e.type},PTS:[${e.startPTS.toFixed(3)},${e.endPTS.toFixed(3)}],DTS:[${e.startDTS.toFixed(3)}/${e.endDTS.toFixed(3)}],nb:${e.nb},dropped:${e.dropped || 0}`), e.type === 'video') if (a.dropped = e.dropped, a.dropped) { if (!a.backtracked) return a.backtracked = !0, this.nextLoadPosition = a.startPTS, this.state = A.IDLE, void this.tick(); _.logger.warn('Already backtracked on this fragment, appending with the gap'); } else a.backtracked = !1; let n = E.default.updateFragPTSDTS(i.details, a.sn, e.startPTS, e.endPTS, e.startDTS, e.endDTS),
                  s = this.hls; s.trigger(g.default.LEVEL_PTS_UPDATED, { details: i.details, level: this.level, drift: n, type: e.type, start: e.startPTS, end: e.endPTS }), [e.data1, e.data2].forEach((r) => { r && (t.pendingAppending++, s.trigger(g.default.BUFFER_APPENDING, { type: e.type, data: r, parent: 'main', content: 'data' })); }), this.bufferRange.push({ type: e.type, start: e.startPTS, end: e.endPTS, frag: a }), this.tick();
              }
            } }, { key: 'onFragParsed', value(e) { const t = this.fragCurrent; t && e.id === 'main' && e.sn === t.sn && e.level === t.level && this.state === A.PARSING && (this.stats.tparsed = performance.now(), this.state = A.PARSED, this._checkAppendedParsed()); } }, { key: 'onAudioTrackSwitch', value(e) { const t = !!e.url; if (t) this.videoBuffer && this.mediaBuffer !== this.videoBuffer && (_.logger.log('switching on alternate audio, use video.buffered to schedule main fragment loading'), this.mediaBuffer = this.videoBuffer); else if (this.mediaBuffer !== this.media) { _.logger.log('switching on main audio, use media.buffered to schedule main fragment loading'), this.mediaBuffer = this.media; const r = this.fragCurrent; r.loader && (_.logger.log('switching to main audio track, cancel main fragment load'), r.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = A.IDLE; } this.altAudio = t; } }, { key: 'onBufferCreated',
            value(e) {
              let t = e.tracks,
                r = void 0,
                i = void 0,
                a = !1; for (const n in t) { const s = t[n]; s.id === 'main' ? (i = n, r = s, n === 'video' && (this.videoBuffer = t[n].buffer)) : a = !0; }a && r ? (_.logger.log(`alternate track found, use ${i}.buffered to schedule main fragment loading`), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media;
            } }, { key: 'onBufferAppended', value(e) { if (e.parent === 'main') switch (this.state) { case A.PARSING:case A.PARSED:this.pendingAppending--, this._checkAppendedParsed(); } } }, { key: '_checkAppendedParsed',
            value() {
              if (this.state === A.PARSED && this.pendingAppending === 0) {
                let e = this.fragCurrent,
                  t = this.stats; if (e) { this.fragPrevious = e, t.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * t.total / (t.tbuffered - t.tfirst)), this.hls.trigger(g.default.FRAG_BUFFERED, { stats: t, frag: e, id: 'main' }); const r = this.mediaBuffer ? this.mediaBuffer : this.media; _.logger.log(`main buffered : ${b.default.toString(r.buffered)}`), this.state = A.IDLE; } this.tick();
              }
            } }, { key: 'onError',
            value(e) {
              const t = e.frag || this.fragCurrent; if (!t || t.type === 'main') {
                let r = this.media,
                  i = r && h.default.isBuffered(r, r.currentTime) && h.default.isBuffered(r, r.currentTime + 0.5); switch (e.details) { case k.ErrorDetails.FRAG_LOAD_ERROR:case k.ErrorDetails.FRAG_LOAD_TIMEOUT:case k.ErrorDetails.KEY_LOAD_ERROR:case k.ErrorDetails.KEY_LOAD_TIMEOUT:if (!e.fatal) { let a = this.fragLoadError; a ? a++ : a = 1; const n = this.config; if (a <= n.fragLoadingMaxRetry || i || t.autoLevel && t.level) { this.fragLoadError = a, t.loadCounter = 0; const s = Math.min(Math.pow(2, a - 1) * n.fragLoadingRetryDelay, n.fragLoadingMaxRetryTimeout); _.logger.warn(`mediaController: frag loading failed, retry in ${s} ms`), this.retryDate = performance.now() + s, this.state = A.FRAG_LOADING_WAITING_RETRY; } else _.logger.error(`mediaController: ${e.details} reaches max retry, redispatch as fatal ...`), e.fatal = !0, this.hls.trigger(g.default.ERROR, e), this.state = A.ERROR; } break; case k.ErrorDetails.FRAG_LOOP_LOADING_ERROR:e.fatal || (i ? (this._reduceMaxBufferLength(t.duration), this.state = A.IDLE) : t.autoLevel && t.level !== 0 || (e.fatal = !0, this.hls.trigger(g.default.ERROR, e), this.state = A.ERROR)); break; case k.ErrorDetails.LEVEL_LOAD_ERROR:case k.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state !== A.ERROR && (e.fatal ? (this.state = A.ERROR, _.logger.warn(`streamController: ${e.details},switch to ${this.state} state ...`)) : this.state === A.WAITING_LEVEL && (this.state = A.IDLE)); break; case k.ErrorDetails.BUFFER_FULL_ERROR:this.state !== A.PARSING && this.state !== A.PARSED || (i ? (this._reduceMaxBufferLength(t.duration), this.state = A.IDLE) : (_.logger.warn('buffer full error also media.currentTime is not buffered, flush everything'), this.fragCurrent = null, this.state = A.PAUSED, this.hls.trigger(g.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY }))); }
              }
            } }, { key: '_reduceMaxBufferLength', value(e) { const t = this.config; t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, _.logger.warn(`reduce max buffer length to ${t.maxMaxBufferLength}s and switch to IDLE state`), this.fragLoadIdx += 2 * t.fragLoadingLoopThreshold); } }, { key: '_checkBuffer',
            value() {
              const e = this.media; if (e && e.readyState) {
                let t = e.currentTime,
                  r = e.buffered; if (this.loadedmetadata || !r.length || e.seeking) {
                  if (this.immediateSwitch) this.immediateLevelSwitchEnd(); else {
                    let i = h.default.bufferInfo(e, t, 0),
                      a = !(e.paused || e.ended || e.buffered.length === 0),
                      n = 0.5,
                      s = t > e.playbackRate * this.lastCurrentTime,
                      o = this.config; if (this.stalled && s && (this.stalled = !1, _.logger.log(`playback not stuck anymore @${t}`)), a && i.len <= n && (s ? (n = 0, this.seekHoleNudgeDuration = 0) : this.stalled ? this.seekHoleNudgeDuration += o.seekHoleNudgeDuration : (this.seekHoleNudgeDuration = 0, _.logger.log(`playback seems stuck @${t}`), this.hls.trigger(g.default.ERROR, { type: k.ErrorTypes.MEDIA_ERROR, details: k.ErrorDetails.BUFFER_STALLED_ERROR, fatal: !1 }), this.stalled = !0), i.len <= n)) {
                      let l = i.nextStart,
                        u = l - t; if (l && u < o.maxSeekHole && u > 0) { _.logger.log(`adjust currentTime from ${e.currentTime} to next buffered @ ${l} + nudge ${this.seekHoleNudgeDuration}`); const d = l + this.seekHoleNudgeDuration - e.currentTime; e.currentTime = l + this.seekHoleNudgeDuration, this.hls.trigger(g.default.ERROR, { type: k.ErrorTypes.MEDIA_ERROR, details: k.ErrorDetails.BUFFER_SEEK_OVER_HOLE, fatal: !1, hole: d }); }
                    }
                  }
                } else {
                  this.loadedmetadata = !0; let c = this.startPosition,
                    f = h.default.isBuffered(e, c); t === c && f || (_.logger.log(`target start position:${c}`), f || (c = r.start(0), _.logger.log(`target start position not buffered, seek to buffered.start(0) ${c}`)), _.logger.log(`adjust currentTime from ${t} to ${c}`), e.currentTime = c);
                }
              }
            } }, { key: 'onFragLoadEmergencyAborted', value() { this.state = A.IDLE, this.loadedmetadata || (this.startFragRequested = !1), this.tick(); } }, { key: 'onBufferFlushed',
            value() {
              let e = this.mediaBuffer ? this.mediaBuffer : this.media,
                t = this.bufferRange,
                r = [],
                i = void 0,
                a = void 0; for (a = 0; a < t.length; a++)i = t[a], h.default.isBuffered(e, (i.start + i.end) / 2) && r.push(i); this.bufferRange = r, this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, this.state = A.IDLE, this.fragPrevious = null;
            } }, { key: 'swapAudioCodec', value() { this.audioCodecSwap = !this.audioCodecSwap; } }, { key: 'computeLivePosition', value(e, t) { const r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration; return e + Math.max(0, t.totalduration - r); } }, { key: 'state', set(e) { if (this.state !== e) { const t = this.state; this._state = e, _.logger.log(`engine state transition from ${t} to ${e}`), this.hls.trigger(g.default.STREAM_STATE_TRANSITION, { previousState: t, nextState: e }); } }, get() { return this._state; } }, { key: 'currentLevel', get() { const e = this.media; if (e) { const t = this.getBufferRange(e.currentTime); if (t) return t.frag.level; } return -1; } }, { key: 'nextBufferRange', get() { const e = this.media; return e ? this.followingBufferRange(this.getBufferRange(e.currentTime)) : null; } }, { key: 'nextLevel', get() { const e = this.nextBufferRange; return e ? e.frag.level : -1; } }, { key: 'liveSyncPosition', get() { return this._liveSyncPosition; }, set(e) { this._liveSyncPosition = e; } }]), t;
        }(y.default)); r.default = R;
    }, { 24: 24, 28: 28, 29: 29, 30: 30, 32: 32, 33: 33, 43: 43, 47: 47, 48: 48 }],
    13: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(30),
        u = i(l),
        d = e(29),
        h = i(d),
        c = e(47),
        f = (function (e) {
          function t(e) { a(this, t); const r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.ERROR, u.default.SUBTITLE_TRACKS_UPDATED, u.default.SUBTITLE_TRACK_SWITCH, u.default.SUBTITLE_TRACK_LOADED, u.default.SUBTITLE_FRAG_PROCESSED)); return r.config = e.config, r.vttFragSNsProcessed = {}, r.vttFragQueues = void 0, r.currentlyProcessing = null, r.currentTrackId = -1, r; } return s(t, e), o(t, [{ key: 'destroy', value() { h.default.prototype.destroy.call(this); } }, { key: 'clearVttFragQueues', value() { const e = this; this.vttFragQueues = {}, this.tracks.forEach((t) => { e.vttFragQueues[t.id] = []; }); } }, { key: 'nextFrag', value() { if (this.currentlyProcessing === null && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) { const e = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift(); this.hls.trigger(u.default.FRAG_LOADING, { frag: e }); } } }, { key: 'onSubtitleFragProcessed', value(e) { e.success && this.vttFragSNsProcessed[e.frag.trackId].push(e.frag.sn), this.currentlyProcessing = null, this.nextFrag(); } }, { key: 'onError', value(e) { const t = e.frag; t && t.type !== 'subtitle' || this.currentlyProcessing && (this.currentlyProcessing = null, this.nextFrag()); } }, { key: 'onSubtitleTracksUpdated', value(e) { const t = this; c.logger.log('subtitle tracks updated'), this.tracks = e.subtitleTracks, this.clearVttFragQueues(), this.vttFragSNsProcessed = {}, this.tracks.forEach((e) => { t.vttFragSNsProcessed[e.id] = []; }); } }, { key: 'onSubtitleTrackSwitch', value(e) { this.currentTrackId = e.id, this.clearVttFragQueues(); } }, { key: 'onSubtitleTrackLoaded',
            value(e) {
              let t = this.vttFragSNsProcessed[e.id],
                r = this.vttFragQueues[e.id],
                i = this.currentlyProcessing ? this.currentlyProcessing.sn : -1,
                a = function (e) { return t.indexOf(e.sn) > -1; },
                n = function (e) { return r.some(t => t.sn === e.sn); }; e.details.fragments.forEach((t) => { a(t) || t.sn === i || n(t) || (t.trackId = e.id, r.push(t)); }), this.nextFrag();
            } }]), t;
        }(h.default)); r.default = f;
    }, { 29: 29, 30: 30, 47: 47 }],
    14: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(30),
        u = i(l),
        d = e(29),
        h = i(d),
        c = e(47),
        f = (function (e) {
          function t(e) { a(this, t); const r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.MEDIA_ATTACHED, u.default.MEDIA_DETACHING, u.default.MANIFEST_LOADING, u.default.MANIFEST_LOADED, u.default.SUBTITLE_TRACK_LOADED)); return r.tracks = [], r.trackId = -1, r.media = void 0, r; } return s(t, e), o(t, [{ key: 'destroy', value() { h.default.prototype.destroy.call(this); } }, { key: 'onMediaAttached', value(e) { const t = this; this.media = e.media, this.media && this.media.textTracks.addEventListener('change', () => { if (t.media) { for (var e = -1, r = t.media.textTracks, i = 0; i < r.length; i++)r[i].mode === 'showing' && (e = i); t.subtitleTrack = e; } }); } }, { key: 'onMediaDetaching', value() { this.media = void 0; } }, { key: 'onManifestLoading', value() { this.tracks = [], this.trackId = -1; } }, { key: 'onManifestLoaded',
            value(e) {
              let t = this,
                r = e.subtitles || [],
                i = !1; this.tracks = r, this.trackId = -1, this.hls.trigger(u.default.SUBTITLE_TRACKS_UPDATED, { subtitleTracks: r }), r.forEach((e) => { e.default && (t.subtitleTrack = e.id, i = !0); });
            } }, { key: 'onTick',
            value() {
              let e = this.trackId,
                t = this.tracks[e]; if (t) { const r = t.details; void 0 !== r && r.live !== !0 || (c.logger.log(`(re)loading playlist for subtitle track ${e}`), this.hls.trigger(u.default.SUBTITLE_TRACK_LOADING, { url: t.url, id: e })); }
            } }, { key: 'onSubtitleTrackLoaded', value(e) { const t = this; e.id < this.tracks.length && (c.logger.log(`subtitle track ${e.id} loaded`), this.tracks[e.id].details = e.details, e.details.live && !this.timer && (this.timer = setInterval(() => { t.onTick(); }, 1e3 * e.details.targetduration, this)), !e.details.live && this.timer && (clearInterval(this.timer), this.timer = null)); } }, { key: 'setSubtitleTrackInternal', value(e) { if (e >= 0 && e < this.tracks.length) { this.timer && (clearInterval(this.timer), this.timer = null), this.trackId = e, c.logger.log(`switching to subtitle track ${e}`); const t = this.tracks[e]; this.hls.trigger(u.default.SUBTITLE_TRACK_SWITCH, { id: e }); const r = t.details; void 0 !== r && r.live !== !0 || (c.logger.log(`(re)loading playlist for subtitle track ${e}`), this.hls.trigger(u.default.SUBTITLE_TRACK_LOADING, { url: t.url, id: e })); } } }, { key: 'subtitleTracks', get() { return this.tracks; } }, { key: 'subtitleTrack', get() { return this.trackId; }, set(e) { this.trackId !== e && this.setSubtitleTrackInternal(e); } }]), t;
        }(h.default)); r.default = f;
    }, { 29: 29, 30: 30, 47: 47 }],
    15: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); } function o(e) { if (e && e.cues) for (;e.cues.length > 0;)e.removeCue(e.cues[0]); } function l(e, t) { return e && e.label === t.name && !(e.textTrack1 || e.textTrack2); } function u(e, t, r, i) { return Math.min(t, i) - Math.max(e, r); }Object.defineProperty(r, '__esModule', { value: !0 }); let d = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; },
        h = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        c = e(30),
        f = i(c),
        v = e(29),
        g = i(v),
        p = e(44),
        y = i(p),
        m = e(51),
        E = i(m),
        T = e(47),
        b = (function (e) {
          function t(e) {
            a(this, t); const r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, f.default.MEDIA_ATTACHING, f.default.MEDIA_DETACHING, f.default.FRAG_PARSING_USERDATA, f.default.MANIFEST_LOADING, f.default.MANIFEST_LOADED, f.default.FRAG_LOADED, f.default.LEVEL_SWITCH, f.default.INIT_PTS_FOUND)); if (r.hls = e, r.config = e.config, r.enabled = !0, r.Cues = e.config.cueHandler, r.textTracks = [], r.tracks = [], r.unparsedVttFrags = [], r.initPTS = void 0, r.cueRanges = [], r.cueRanges[0] = r.currentCueRange = [], r.config.enableCEA708Captions) {
              let i = r,
                s = { newCue(e, t, r) { if (!i.textTrack1) { const a = i.getExistingTrack('1'); if (a) { i.textTrack1 = a; const n = new window.Event('addtrack'); n.track = i.textTrack1, i.media.dispatchEvent(n); } else i.textTrack1 = i.createTextTrack('captions', 'English', 'en'), i.textTrack1.textTrack1 = !0; }i.addCues('textTrack1', e, t, r); } },
                o = { newCue(e, t, r) { if (!i.textTrack2) { const a = i.getExistingTrack('2'); if (a) { i.textTrack2 = a; const n = new window.Event('addtrack'); n.track = i.textTrack2, i.media.dispatchEvent(n); } else i.textTrack2 = i.createTextTrack('captions', 'Spanish', 'es'), i.textTrack2.textTrack2 = !0; }i.addCues('textTrack2', e, t, r); } }; r.cea608Parser = new y.default(0, s, o);
            } return r;
          } return s(t, e), h(t, [{ key: 'addCues', value(e, t, r, i) { for (let a = this.cueRanges, n = a.length; n--;) { const s = a[n]; if (s.length) { const o = u(s[0], s[1], t, r); if (o && o / (r - t) > 0.5) return; } } const l = this.currentCueRange; l.length || (l[0] = t), l[1] = r, this.Cues.newCue(this[e], t, r, i); } }, { key: 'onInitPtsFound', value(e) { const t = this; typeof this.initPTS === 'undefined' && (this.initPTS = e.initPTS), this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach((e) => { t.onFragLoaded(e); }), this.unparsedVttFrags = []); } }, { key: 'getExistingTrack',
            value(e) {
              const t = this.media; if (t) {
                for (let r = 0; r < t.textTracks.length; r++) {
                  let i = t.textTracks[r],
                    a = `textTrack${e}`; if (i[a] === !0) return i;
                }
              } return null;
            } }, { key: 'createTextTrack', value(e, t, r) { if (this.media) return this.media.addTextTrack(e, t, r); } }, { key: 'destroy', value() { g.default.prototype.destroy.call(this); } }, { key: 'onMediaAttaching', value(e) { this.media = e.media; } }, { key: 'onMediaDetaching', value() { o(this.textTrack1), o(this.textTrack2); } }, { key: 'onManifestLoading', value() { this.lastSn = -1, this.lastDiscontinuity = { cc: 0, start: 0, new: !1 }; } }, { key: 'onManifestLoaded',
            value(e) {
              const t = this; this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = void 0, this.cueRanges.length = 0, this.cueRanges[0] = this.currentCueRange = [], this.config.enableWebVTT && !(function () {
                t.tracks = e.subtitles || []; const r = t.media ? t.media.textTracks : []; t.tracks.forEach((e, i) => {
                  let a = void 0,
                    n = r[i]; a = l(n, e) ? n : t.createTextTrack('subtitles', e.name, e.lang), a.mode = e.default ? 'showing' : 'hidden', t.textTracks.push(a);
                });
              }());
            } }, { key: 'onLevelSwitch', value() { this.enabled = this.hls.currentLevel.closedCaptions !== 'NONE'; } }, { key: 'onFragLoaded',
            value(e) {
              const t = this; if (e.frag.type === 'main') { const r = e.frag.sn; if (r !== this.lastSn + 1 && (this.cea608Parser.reset(), this.currentCueRange.length)) { const i = []; this.currentCueRange = i, this.cueRanges.push(i); } this.lastSn = r; } else if (e.frag.type === 'subtitle') {
                if (e.payload.byteLength) {
                  const a = (function () {
                    if (typeof t.initPTS === 'undefined') return t.unparsedVttFrags.push(e), { v: void 0 }; let r = t.lastDiscontinuity; r.cc < e.frag.cc && (r = { cc: e.frag.cc, start: e.frag.start, new: !0 }); let i = t.textTracks,
                      a = t.hls; E.default.parse(e.payload, t.initPTS, r, (t) => { t.forEach((t) => { i[e.frag.trackId].addCue(t); }), a.trigger(f.default.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: e.frag }); }, (t) => { T.logger.log(`Failed to parse VTT cue: ${t}`), a.trigger(f.default.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e.frag }); });
                  }()); if ((typeof a === 'undefined' ? 'undefined' : d(a)) === 'object') return a.v;
                } else this.hls.trigger(f.default.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e.frag });
              }
            } }, { key: 'onFragParsingUserdata', value(e) { if (this.enabled && this.config.enableCEA708Captions) for (let t = 0; t < e.samples.length; t++) { const r = this.extractCea608Data(e.samples[t].bytes); this.cea608Parser.addData(e.samples[t].pts, r); } } }, { key: 'extractCea608Data', value(e) { for (var t, r, i, a, n, s = 31 & e[0], o = 2, l = [], u = 0; u < s; u++)t = e[o++], r = 127 & e[o++], i = 127 & e[o++], a = (4 & t) !== 0, n = 3 & t, r === 0 && i === 0 || a && n === 0 && (l.push(r), l.push(i)); return l; } }]), t;
        }(g.default)); r.default = b;
    }, { 29: 29, 30: 30, 44: 44, 47: 47, 51: 51 }],
    16: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = (function () { function e(t) { i(this, e), this.aesIV = t; } return a(e, [{ key: 'decrypt', value(e, t) { return window.crypto.subtle.decrypt({ name: 'AES-CBC', iv: this.aesIV }, t, e); } }]), e; }()); r.default = n;
    }, {}],
    17: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = (function () {
          function e() { i(this, e), this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [], this.subMix[0] = new Uint32Array(256), this.subMix[1] = new Uint32Array(256), this.subMix[2] = new Uint32Array(256), this.subMix[3] = new Uint32Array(256), this.invSubMix = [], this.invSubMix[0] = new Uint32Array(256), this.invSubMix[1] = new Uint32Array(256), this.invSubMix[2] = new Uint32Array(256), this.invSubMix[3] = new Uint32Array(256), this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable(); } return a(e, [{ key: 'uint8ArrayToUint32Array_', value(e) { for (var t = new DataView(e), r = new Uint32Array(4), i = 0; i < r.length; i++)r[i] = t.getUint32(4 * i); return r; } }, { key: 'initTable',
            value() {
              let e = this.sBox,
                t = this.invSBox,
                r = this.subMix[0],
                i = this.subMix[1],
                a = this.subMix[2],
                n = this.subMix[3],
                s = this.invSubMix[0],
                o = this.invSubMix[1],
                l = this.invSubMix[2],
                u = this.invSubMix[3],
                d = new Uint32Array(256),
                h = 0,
                c = 0,
                f = 0; for (f = 0; f < 256; f++)f < 128 ? d[f] = f << 1 : d[f] = f << 1 ^ 283; for (f = 0; f < 256; f++) {
                let v = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4; v = v >>> 8 ^ 255 & v ^ 99, e[h] = v, t[v] = h; let g = d[h],
                  p = d[g],
                  y = d[p],
                  m = 257 * d[v] ^ 16843008 * v; r[h] = m << 24 | m >>> 8, i[h] = m << 16 | m >>> 16, a[h] = m << 8 | m >>> 24, n[h] = m, m = 16843009 * y ^ 65537 * p ^ 257 * g ^ 16843008 * h, s[v] = m << 24 | m >>> 8, o[v] = m << 16 | m >>> 16, l[v] = m << 8 | m >>> 24, u[v] = m, h ? (h = g ^ d[d[d[y ^ g]]], c ^= d[d[c]]) : h = c = 1;
              }
            } }, { key: 'expandKey',
            value(e) {
              for (var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0; i < t.length && r;)r = t[i] === this.key[i], i++; if (!r) {
                this.key = t; const a = this.keySize = t.length; if (a !== 4 && a !== 6 && a !== 8) throw new Error(`Invalid aes key size=${a}`); let n = this.ksRows = 4 * (a + 6 + 1),
                  s = void 0,
                  o = void 0,
                  l = this.keySchedule = new Uint32Array(this.ksRows),
                  u = this.invKeySchedule = new Uint32Array(this.ksRows),
                  d = this.sBox,
                  h = this.rcon,
                  c = this.invSubMix[0],
                  f = this.invSubMix[1],
                  v = this.invSubMix[2],
                  g = this.invSubMix[3],
                  p = void 0,
                  y = void 0; for (s = 0; s < n; s++)s < a ? p = l[s] = t[s] : (y = p, s % a === 0 ? (y = y << 8 | y >>> 24, y = d[y >>> 24] << 24 | d[y >>> 16 & 255] << 16 | d[y >>> 8 & 255] << 8 | d[255 & y], y ^= h[s / a | 0] << 24) : a > 6 && s % a === 4 && (y = d[y >>> 24] << 24 | d[y >>> 16 & 255] << 16 | d[y >>> 8 & 255] << 8 | d[255 & y]), l[s] = p = (l[s - a] ^ y) >>> 0); for (o = 0; o < n; o++)s = n - o, y = 3 & o ? l[s] : l[s - 4], o < 4 || s <= 4 ? u[o] = y : u[o] = c[d[y >>> 24]] ^ f[d[y >>> 16 & 255]] ^ v[d[y >>> 8 & 255]] ^ g[d[255 & y]], u[o] = u[o] >>> 0;
              }
            } }, { key: 'networkToHostOrderSwap', value(e) { return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24; } }, { key: 'decrypt', value(e, t, r) { for (var i, a, n = this.keySize + 6, s = this.invKeySchedule, o = this.invSBox, l = this.invSubMix[0], u = this.invSubMix[1], d = this.invSubMix[2], h = this.invSubMix[3], c = this.uint8ArrayToUint32Array_(r), f = c[0], v = c[1], g = c[2], p = c[3], y = new Int32Array(e), m = new Int32Array(y.length), E = void 0, T = void 0, b = void 0, k = void 0, _ = void 0, A = void 0, R = void 0, S = void 0, L = void 0, w = void 0, D = void 0, O = void 0; t < y.length;) { for (L = this.networkToHostOrderSwap(y[t]), w = this.networkToHostOrderSwap(y[t + 1]), D = this.networkToHostOrderSwap(y[t + 2]), O = this.networkToHostOrderSwap(y[t + 3]), _ = L ^ s[0], A = O ^ s[1], R = D ^ s[2], S = w ^ s[3], i = 4, a = 1; a < n; a++)E = l[_ >>> 24] ^ u[A >> 16 & 255] ^ d[R >> 8 & 255] ^ h[255 & S] ^ s[i], T = l[A >>> 24] ^ u[R >> 16 & 255] ^ d[S >> 8 & 255] ^ h[255 & _] ^ s[i + 1], b = l[R >>> 24] ^ u[S >> 16 & 255] ^ d[_ >> 8 & 255] ^ h[255 & A] ^ s[i + 2], k = l[S >>> 24] ^ u[_ >> 16 & 255] ^ d[A >> 8 & 255] ^ h[255 & R] ^ s[i + 3], _ = E, A = T, R = b, S = k, i += 4; E = o[_ >>> 24] << 24 ^ o[A >> 16 & 255] << 16 ^ o[R >> 8 & 255] << 8 ^ o[255 & S] ^ s[i], T = o[A >>> 24] << 24 ^ o[R >> 16 & 255] << 16 ^ o[S >> 8 & 255] << 8 ^ o[255 & _] ^ s[i + 1], b = o[R >>> 24] << 24 ^ o[S >> 16 & 255] << 16 ^ o[_ >> 8 & 255] << 8 ^ o[255 & A] ^ s[i + 2], k = o[S >>> 24] << 24 ^ o[_ >> 16 & 255] << 16 ^ o[A >> 8 & 255] << 8 ^ o[255 & R] ^ s[i + 3], i += 3, m[t] = this.networkToHostOrderSwap(E ^ f), m[t + 1] = this.networkToHostOrderSwap(k ^ v), m[t + 2] = this.networkToHostOrderSwap(b ^ g), m[t + 3] = this.networkToHostOrderSwap(T ^ p), f = L, v = w, g = D, p = O, t += 4; } return m.buffer; } }, { key: 'destroy', value() { this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0; } }]), e;
        }()); r.default = n;
    }, {}],
    18: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let n = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        s = e(16),
        o = i(s),
        l = e(19),
        u = i(l),
        d = e(17),
        h = i(d),
        c = e(28),
        f = e(47),
        v = (function () { function e(t) { a(this, e), this.hls = t; try { const r = window ? window.crypto : crypto; this.subtle = r.subtle || r.webkitSubtle; } catch (i) {} this.disableWebCrypto = !this.supportsWebCrypto(); } return n(e, [{ key: 'supportsWebCrypto', value() { return this.subtle && window.location.protocol === 'https:'; } }, { key: 'decrypt', value(e, t, r, i) { const a = this; this.disableWebCrypto && this.hls.config.enableSoftwareAES ? (f.logger.log('decrypting by JavaScript Implementation'), this.decryptor || (this.decryptor = new h.default()), this.decryptor.expandKey(t), i(this.decryptor.decrypt(e, 0, r))) : (f.logger.log('decrypting by WebCrypto API'), this.key !== t && (this.key = t, this.fastAesKey = new u.default(t)), this.fastAesKey.expandKey().then((t) => { const a = new o.default(r); a.decrypt(e, t).then((e) => { i(e); }); }).catch((n) => { a.onWebCryptoError(n, e, t, r, i); })); } }, { key: 'onWebCryptoError', value(e, t, r, i, a) { this.hls.config.enableSoftwareAES ? (f.logger.log('disabling to use WebCrypto API'), this.disableWebCrypto = !0, this.decrypt(t, r, i, a)) : (f.logger.error(`decrypting error : ${e.message}`), this.hls.trigger(Event.ERROR, { type: c.ErrorTypes.MEDIA_ERROR, details: c.ErrorDetails.FRAG_DECRYPT_ERROR, fatal: !0, reason: e.message })); } }, { key: 'destroy', value() { this.decryptor && (this.decryptor.destroy(), this.decryptor = void 0); } }]), e; }()); r.default = v;
    }, { 16: 16, 17: 17, 19: 19, 28: 28, 47: 47 }],
    19: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = (function () { function e(t) { i(this, e), this.key = t; } return a(e, [{ key: 'expandKey', value() { return window.crypto.subtle.importKey('raw', this.key, { name: 'AES-CBC' }, !1, ['encrypt', 'decrypt']); } }]), e; }()); r.default = n;
    }, {}],
    20: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let n = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        s = e(21),
        o = i(s),
        l = e(47),
        u = e(26),
        d = i(u),
        h = (function () {
          function e(t, r, i, n, s) { a(this, e), this.observer = t, this.id = r, this.remuxerClass = i, this.config = n, this.remuxer = new this.remuxerClass(t, r, n, s), this.useTimeStamp = r === 'audio', this.insertDiscontinuity(); } return n(e, [{ key: 'insertDiscontinuity', value() { this._aacTrack = { container: 'audio/adts', type: 'audio', id: -1, sequenceNumber: 0, isAAC: !0, samples: [], len: 0 }; } }, { key: 'push',
            value(e, t, r, i, a, n, s, u, h) {
              let c,
                f,
                v,
                g,
                p,
                y,
                m,
                E,
                T,
                b,
                k,
                _ = new d.default(e); f = this.useTimeStamp ? 90 * _.timeStamp : 9e4 * i; let A = !1; for (a !== this.lastCC ? (l.logger.log(`${this.id} discontinuity detected`), this.lastCC = a, this.insertDiscontinuity(), this.remuxer.switchLevel(), this.remuxer.insertDiscontinuity()) : n !== this.lastLevel ? (l.logger.log('audio track switch detected'), this.lastLevel = n, this.remuxer.switchLevel(), this.insertDiscontinuity()) : s === this.lastSN + 1 && (A = !0), c = this._aacTrack, this.lastSN = s, this.lastLevel = n, m = _.length || 0, b = e.length; m < b - 1 && (e[m] !== 255 || (246 & e[m + 1]) !== 240); m++);for (c.audiosamplerate || (v = o.default.getAudioConfig(this.observer, e, m, t), c.config = v.config, c.audiosamplerate = v.samplerate, c.channelCount = v.channelCount, c.codec = v.codec, c.duration = u, l.logger.log(`parsed codec:${c.codec},rate:${v.samplerate},nb channel:${v.channelCount}`)), y = 0, p = 9216e4 / c.audiosamplerate; m + 5 < b && (E = 1 & e[m + 1] ? 7 : 9, g = (3 & e[m + 3]) << 11 | e[m + 4] << 3 | (224 & e[m + 5]) >>> 5, g -= E, g > 0 && m + E + g <= b);) for (T = f + y * p, k = { unit: e.subarray(m + E, m + E + g), pts: T, dts: T }, c.samples.push(k), c.len += g, m += g + E, y++; m < b - 1 && (e[m] !== 255 || (240 & e[m + 1]) !== 240); m++);const R = _.payload ? { samples: [{ pts: f, dts: f, unit: _.payload }] } : { samples: [] }; this.remuxer.remux(n, s, this._aacTrack, { samples: [] }, R, { samples: [] }, i, A, h);
            } }, { key: 'destroy', value() {} }], [{ key: 'probe',
            value(e) {
              let t,
                r,
                i = new d.default(e); for (t = i.length || 0, r = e.length; t < r - 1; t++) if (e[t] === 255 && (246 & e[t + 1]) === 240) return !0; return !1;
            } }]), e;
        }()); r.default = h;
    }, { 21: 21, 26: 26, 47: 47 }],
    21: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = e(47),
        s = e(28),
        o = (function () {
          function e() { i(this, e); } return a(e, null, [{ key: 'getAudioConfig',
            value(e, t, r, i) {
              let a,
                o,
                l,
                u,
                d,
                h = navigator.userAgent.toLowerCase(),
                c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]; return a = ((192 & t[r + 2]) >>> 6) + 1, o = (60 & t[r + 2]) >>> 2, o > c.length - 1 ? void e.trigger(Event.ERROR, { type: s.ErrorTypes.MEDIA_ERROR,
                details: s.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: !0,
                reason: `invalid ADTS sampling index:${o}` }) : (u = (1 & t[r + 2]) << 2, u |= (192 & t[r + 3]) >>> 6, n.logger.log(`manifest codec:${i},ADTS data:type:${a},sampleingIndex:${o}[${c[o]}Hz],channelConfig:${u}`), /firefox|OPR/i.test(h) ? o >= 6 ? (a = 5, d = new Array(4), l = o - 3) : (a = 2, d = new Array(2), l = o) : h.indexOf('android') !== -1 ? (a = 2, d = new Array(2), l = o) : (a = 5, d = new Array(4), i && (i.indexOf('mp4a.40.29') !== -1 || i.indexOf('mp4a.40.5') !== -1) || !i && o >= 6 ? l = o - 3 : ((i && i.indexOf('mp4a.40.2') !== -1 && o >= 6 && u === 1 || !i && u === 1) && (a = 2, d = new Array(2)), l = o)), d[0] = a << 3, d[0] |= (14 & o) >> 1, d[1] |= (1 & o) << 7, d[1] |= u << 3, a === 5 && (d[1] |= (14 & l) >> 1, d[2] = (1 & l) << 7, d[2] |= 8, d[3] = 0), { config: d, samplerate: c[o], channelCount: u, codec: `mp4a.40.${a}` });
            } }]), e;
        }()); r.default = o;
    }, { 28: 28, 47: 47 }],
    22: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let n = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        s = e(30),
        o = i(s),
        l = e(28),
        u = e(20),
        d = i(u),
        h = e(27),
        c = i(h),
        f = e(40),
        v = i(f),
        g = e(41),
        p = i(g),
        y = (function () {
          function e(t, r, i) { const n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; a(this, e), this.hls = t, this.id = r, this.config = this.hls.config || n, this.typeSupported = i; } return n(e, [{ key: 'destroy', value() { const e = this.demuxer; e && e.destroy(); } }, { key: 'push',
            value(e, t, r, i, a, n, s, u, h) {
              let f = this.demuxer; if (!f) {
                let g = this.hls,
                  y = this.id,
                  m = this.config,
                  E = this.typeSupported; if (c.default.probe(e))f = this.typeSupported.mp2t === !0 ? new c.default(g, y, p.default, m, E) : new c.default(g, y, v.default, m, E); else { if (!d.default.probe(e)) return void g.trigger(o.default.ERROR, { type: l.ErrorTypes.MEDIA_ERROR, id: y, details: l.ErrorDetails.FRAG_PARSING_ERROR, fatal: !0, reason: 'no demux matching with content found' }); f = new d.default(g, y, v.default, m, E); } this.demuxer = f;
              }f.push(e, t, r, i, a, n, s, u, h);
            } }]), e;
        }()); r.default = y;
    }, { 20: 20, 27: 27, 28: 28, 30: 30, 40: 40, 41: 41 }],
    23: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; }Object.defineProperty(r, '__esModule', { value: !0 }); let a = e(22),
        n = i(a),
        s = e(30),
        o = i(s),
        l = e(47),
        u = e(1),
        d = i(u),
        h = function (e) {
          const t = new d.default(); t.trigger = function (e) { for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)i[a - 1] = arguments[a]; t.emit(...[e, e].concat(i)); }, t.off = function (e) { for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)i[a - 1] = arguments[a]; t.removeListener(...[e].concat(i)); }; const r = function (t, r) { e.postMessage({ event: t, data: r }); }; e.addEventListener('message', (i) => { const a = i.data; switch (a.cmd) { case 'init':var s = JSON.parse(a.config); e.demuxer = new n.default(t, a.id, a.typeSupported, s); try { (0, l.enableLogs)(s.debug === !0); } catch (o) { console.warn('demuxerWorker: unable to enable logs'); }r('init', null); break; case 'demux':e.demuxer.push(new Uint8Array(a.data), a.audioCodec, a.videoCodec, a.timeOffset, a.cc, a.level, a.sn, a.duration, a.accurateTimeOffset); } }), t.on(o.default.FRAG_PARSING_INIT_SEGMENT, r), t.on(o.default.FRAG_PARSED, r), t.on(o.default.ERROR, r), t.on(o.default.FRAG_PARSING_METADATA, r), t.on(o.default.FRAG_PARSING_USERDATA, r), t.on(o.default.INIT_PTS_FOUND, r), t.on(o.default.FRAG_PARSING_DATA, (t, r) => {
            let i = r.data1.buffer,
              a = r.data2.buffer; delete r.data1, delete r.data2, e.postMessage({ event: t, data: r, data1: i, data2: a }, [i, a]);
          });
        }; r.default = h;
    }, { 1: 1, 22: 22, 30: 30, 47: 47 }],
    24: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let n = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        s = e(30),
        o = i(s),
        l = e(22),
        u = i(l),
        d = e(23),
        h = i(d),
        c = e(47),
        f = e(18),
        v = i(f),
        g = e(28),
        p = (function () {
          function t(r, i) { a(this, t), this.hls = r, this.id = i; const n = { mp4: MediaSource.isTypeSupported('video/mp4'), mp2t: r.config.enableMP2TPassThrough && MediaSource.isTypeSupported('video/mp2t'), mpeg: MediaSource.isTypeSupported('audio/mpeg'), mp3: MediaSource.isTypeSupported('audio/mp4; codecs="mp3"') }; if (r.config.enableWorker && typeof Worker !== 'undefined') { c.logger.log('demuxing in webworker'); let s = void 0; try { const l = e(3); s = this.w = l(h.default), this.onwmsg = this.onWorkerMessage.bind(this), s.addEventListener('message', this.onwmsg), s.onerror = function (e) { r.trigger(o.default.ERROR, { type: g.ErrorTypes.OTHER_ERROR, details: g.ErrorDetails.INTERNAL_EXCEPTION, fatal: !0, event: 'demuxerWorker', err: { message: `${e.message} (${e.filename}:${e.lineno})` } }); }, s.postMessage({ cmd: 'init', typeSupported: n, id: i, config: JSON.stringify(r.config) }); } catch (d) { c.logger.error('error while initializing DemuxerWorker, fallback on DemuxerInline'), s && URL.revokeObjectURL(s.objectURL), this.demuxer = new u.default(r, i, n); } } else this.demuxer = new u.default(r, i, n); this.demuxInitialized = !0; } return n(t, [{ key: 'destroy', value() { const e = this.w; if (e)e.removeEventListener('message', this.onwmsg), e.terminate(), this.w = null; else { const t = this.demuxer; t && (t.destroy(), this.demuxer = null); } const r = this.decrypter; r && (r.destroy(), this.decrypter = null); } }, { key: 'pushDecrypted', value(e, t, r, i, a, n, s, o, l) { const u = this.w; if (u)u.postMessage({ cmd: 'demux', data: e, audioCodec: t, videoCodec: r, timeOffset: i, cc: a, level: n, sn: s, duration: o, accurateTimeOffset: l }, [e]); else { const d = this.demuxer; d && d.push(new Uint8Array(e), t, r, i, a, n, s, o, l); } } }, { key: 'push',
            value(e, t, r, i, a, n, s, l, u, d) {
              if (e.byteLength > 0 && u != null && u.key != null && u.method === 'AES-128') {
                this.decrypter == null && (this.decrypter = new v.default(this.hls)); let h = this,
                  c = performance.now(); this.decrypter.decrypt(e, u.key.buffer, u.iv.buffer, (e) => { h.hls.trigger(o.default.FRAG_DECRYPTED, { level: n, sn: s, stats: { tstart: c, tdecrypt: performance.now() } }), h.pushDecrypted(e, t, r, i, a, n, s, l, d); });
              } else this.pushDecrypted(e, t, r, i, a, n, s, l, d);
            } }, { key: 'onWorkerMessage',
            value(e) {
              let t = e.data,
                r = this.hls; switch (t.event) { case 'init':URL.revokeObjectURL(this.w.objectURL); break; case o.default.FRAG_PARSING_DATA:t.data.data1 = new Uint8Array(t.data1), t.data.data2 = new Uint8Array(t.data2); default:r.trigger(t.event, t.data); }
            } }]), t;
        }()); r.default = p;
    }, { 18: 18, 22: 22, 23: 23, 28: 28, 3: 3, 30: 30, 47: 47 }],
    25: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = e(47),
        s = (function () {
          function e(t) { i(this, e), this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0; } return a(e, [{ key: 'loadWord',
            value() {
              let e = this.data,
                t = this.bytesAvailable,
                r = e.byteLength - t,
                i = new Uint8Array(4),
                a = Math.min(4, t); if (a === 0) throw new Error('no bytes available'); i.set(e.subarray(r, r + a)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * a, this.bytesAvailable -= a;
            } }, { key: 'skipBits', value(e) { let t; this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e); } }, { key: 'readBits',
            value(e) {
              let t = Math.min(this.bitsAvailable, e),
                r = this.word >>> 32 - t; return e > 32 && n.logger.error('Cannot read more than 32 bits at a time'), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), t = e - t, t > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r;
            } }, { key: 'skipLZ', value() { let e; for (e = 0; e < this.bitsAvailable; ++e) if ((this.word & 2147483648 >>> e) !== 0) return this.word <<= e, this.bitsAvailable -= e, e; return this.loadWord(), e + this.skipLZ(); } }, { key: 'skipUEG', value() { this.skipBits(1 + this.skipLZ()); } }, { key: 'skipEG', value() { this.skipBits(1 + this.skipLZ()); } }, { key: 'readUEG', value() { const e = this.skipLZ(); return this.readBits(e + 1) - 1; } }, { key: 'readEG', value() { const e = this.readUEG(); return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1); } }, { key: 'readBoolean', value() { return this.readBits(1) === 1; } }, { key: 'readUByte', value() { return this.readBits(8); } }, { key: 'readUShort', value() { return this.readBits(16); } }, { key: 'readUInt', value() { return this.readBits(32); } }, { key: 'skipScalingList',
            value(e) {
              let t,
                r,
                i = 8,
                a = 8; for (t = 0; t < e; t++)a !== 0 && (r = this.readEG(), a = (i + r + 256) % 256), i = a === 0 ? i : a;
            } }, { key: 'readSPS',
            value() {
              let e,
                t,
                r,
                i,
                a,
                n,
                s,
                o,
                l,
                u = 0,
                d = 0,
                h = 0,
                c = 0,
                f = 1,
                v = this.readUByte.bind(this),
                g = this.readBits.bind(this),
                p = this.readUEG.bind(this),
                y = this.readBoolean.bind(this),
                m = this.skipBits.bind(this),
                E = this.skipEG.bind(this),
                T = this.skipUEG.bind(this),
                b = this.skipScalingList.bind(this); if (v(), e = v(), t = g(5), m(3), r = v(), T(), e === 100 || e === 110 || e === 122 || e === 244 || e === 44 || e === 83 || e === 86 || e === 118 || e === 128) { const k = p(); if (k === 3 && m(1), T(), T(), m(1), y()) for (o = k !== 3 ? 8 : 12, l = 0; l < o; l++)y() && b(l < 6 ? 16 : 64); }T(); const _ = p(); if (_ === 0)p(); else if (_ === 1) for (m(1), E(), E(), i = p(), l = 0; l < i; l++)E(); if (T(), m(1), a = p(), n = p(), s = g(1), s === 0 && m(1), m(1), y() && (u = p(), d = p(), h = p(), c = p()), y() && y()) {
                let A = void 0,
                  R = v(); switch (R) { case 1:A = [1, 1]; break; case 2:A = [12, 11]; break; case 3:A = [10, 11]; break; case 4:A = [16, 11]; break; case 5:A = [40, 33]; break; case 6:A = [24, 11]; break; case 7:A = [20, 11]; break; case 8:A = [32, 11]; break; case 9:A = [80, 33]; break; case 10:A = [18, 11]; break; case 11:A = [15, 11]; break; case 12:A = [64, 33]; break; case 13:A = [160, 99]; break; case 14:A = [4, 3]; break; case 15:A = [3, 2]; break; case 16:A = [2, 1]; break; case 255:A = [v() << 8 | v(), v() << 8 | v()]; }A && (f = A[0] / A[1]);
              } return { width: Math.ceil((16 * (a + 1) - 2 * u - 2 * d) * f), height: (2 - s) * (n + 1) * 16 - (s ? 2 : 4) * (h + c) };
            } }, { key: 'readSliceType', value() { return this.readUByte(), this.readUEG(), this.readUEG(); } }]), e;
        }()); r.default = s;
    }, { 47: 47 }],
    26: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = e(47),
        s = (function () {
          function e(t) { i(this, e), this._hasTimeStamp = !1; for (var r, a, s, o, l, u, d, h, c = 0; ;) if (d = this.readUTF(t, c, 3), c += 3, d === 'ID3')c += 3, r = 127 & t[c++], a = 127 & t[c++], s = 127 & t[c++], o = 127 & t[c++], l = (r << 21) + (a << 14) + (s << 7) + o, u = c + l, this._parseID3Frames(t, c, u), c = u; else { if (d !== '3DI') return c -= 3, h = c, void (h && (this.hasTimeStamp || n.logger.warn('ID3 tag found, but no timestamp'), this._length = h, this._payload = t.subarray(0, h))); c += 7, n.logger.log(`3DI footer found, end: ${c}`); } } return a(e, [{ key: 'readUTF',
            value(e, t, r) {
              let i = '',
                a = t,
                n = t + r; do i += String.fromCharCode(e[a++]); while (a < n);return i;
            } }, { key: '_parseID3Frames', value(e, t, r) { for (var i, a, s, o, l; t + 8 <= r;) switch (i = this.readUTF(e, t, 4), t += 4, a = e[t++] << 24 + e[t++] << 16 + e[t++] << 8 + e[t++], o = e[t++] << 8 + e[t++], s = t, i) { case 'PRIV':if (this.readUTF(e, t, 44) === 'com.apple.streaming.transportStreamTimestamp') { t += 44, t += 4; const u = 1 & e[t++]; this._hasTimeStamp = !0, l = ((e[t++] << 23) + (e[t++] << 15) + (e[t++] << 7) + e[t++]) / 45, u && (l += 47721858.84), l = Math.round(l), n.logger.trace(`ID3 timestamp found: ${l}`), this._timeStamp = l; } } } }, { key: 'hasTimeStamp', get() { return this._hasTimeStamp; } }, { key: 'timeStamp', get() { return this._timeStamp; } }, { key: 'length', get() { return this._length; } }, { key: 'payload', get() { return this._payload; } }]), e;
        }()); r.default = s;
    }, { 47: 47 }],
    27: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let n = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        s = e(21),
        o = i(s),
        l = e(30),
        u = i(l),
        d = e(25),
        h = i(d),
        c = e(47),
        f = e(28),
        v = (function () {
          function e(t, r, i, n, s) { a(this, e), this.observer = t, this.id = r, this.remuxerClass = i, this.config = n, this.typeSupported = s, this.lastCC = 0, this.remuxer = new this.remuxerClass(t, r, n, s); } return n(e, [{ key: 'switchLevel', value() { this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = { container: 'video/mp2t', type: 'video', id: -1, sequenceNumber: 0, samples: [], len: 0, dropped: 0 }, this._audioTrack = { container: 'video/mp2t', type: 'audio', id: -1, sequenceNumber: 0, samples: [], len: 0, isAAC: !0 }, this._id3Track = { type: 'id3', id: -1, sequenceNumber: 0, samples: [], len: 0 }, this._txtTrack = { type: 'text', id: -1, sequenceNumber: 0, samples: [], len: 0 }, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.remuxer.switchLevel(); } }, { key: 'insertDiscontinuity', value() { this.switchLevel(), this.remuxer.insertDiscontinuity(); } }, { key: 'push',
            value(e, t, r, i, a, n, s, o, l) {
              let d,
                h,
                v,
                g,
                p,
                y,
                m = e.length,
                E = this.remuxer.passthrough,
                T = !1; this.audioCodec = t, this.videoCodec = r, this._duration = o, this.contiguous = !1, this.accurateTimeOffset = l, a !== this.lastCC && (c.logger.log('discontinuity detected'), this.insertDiscontinuity(), this.lastCC = a), n !== this.lastLevel ? (c.logger.log('level switch detected'), this.switchLevel(), this.lastLevel = n) : s === this.lastSN + 1 && (this.contiguous = !0), this.lastSN = s; let b = this.pmtParsed,
                k = this._avcTrack,
                _ = this._audioTrack,
                A = this._id3Track,
                R = k.id,
                S = _.id,
                L = A.id,
                w = this._pmtId,
                D = k.pesData,
                O = _.pesData,
                I = A.pesData,
                C = this._parsePAT,
                P = this._parsePMT,
                x = this._parsePES,
                M = this._parseAVCPES.bind(this),
                F = this._parseAACPES.bind(this),
                N = this._parseMPEGPES.bind(this),
                U = this._parseID3PES.bind(this); for (m -= m % 188, d = 0; d < m; d += 188) if (e[d] === 71) { if (h = !!(64 & e[d + 1]), v = ((31 & e[d + 1]) << 8) + e[d + 2], g = (48 & e[d + 3]) >> 4, g > 1) { if (p = d + 5 + e[d + 4], p === d + 188) continue; } else p = d + 4; switch (v) { case R:if (h) { if (D && (y = x(D)) && (M(y, !1), E && k.codec && (S === -1 || _.codec))) return void this.remux(n, s, e, i); D = { data: [], size: 0 }; }D && (D.data.push(e.subarray(p, d + 188)), D.size += d + 188 - p); break; case S:if (h) { if (O && (y = x(O)) && (_.isAAC ? F(y) : N(y), E && _.codec && (R === -1 || k.codec))) return void this.remux(n, s, e, i); O = { data: [], size: 0 }; }O && (O.data.push(e.subarray(p, d + 188)), O.size += d + 188 - p); break; case L:h && (I && (y = x(I)) && U(y), I = { data: [], size: 0 }), I && (I.data.push(e.subarray(p, d + 188)), I.size += d + 188 - p); break; case 0:h && (p += e[p] + 1), w = this._pmtId = C(e, p); break; case w:h && (p += e[p] + 1); var B = P(e, p, this.typeSupported.mpeg === !0 || this.typeSupported.mp3 === !0); R = B.avc, R > 0 && (k.id = R), S = B.audio, S > 0 && (_.id = S, _.isAAC = B.isAAC), L = B.id3, L > 0 && (A.id = L), T && !b && (c.logger.log('reparse from beginning'), T = !1, d = -188), b = this.pmtParsed = !0; break; case 17:case 8191:break; default:T = !0; } } else this.observer.trigger(u.default.ERROR, { type: f.ErrorTypes.MEDIA_ERROR, id: this.id, details: f.ErrorDetails.FRAG_PARSING_ERROR, fatal: !1, reason: 'TS packet did not start with 0x47' }); D && (y = x(D)) ? (M(y, !0), k.pesData = null) : k.pesData = D, O && (y = x(O)) ? (_.isAAC ? F(y) : N(y), _.pesData = null) : (O && O.size && c.logger.log('last AAC PES packet truncated,might overlap between fragments'), _.pesData = O), I && (y = x(I)) ? (U(y), A.pesData = null) : A.pesData = I, this.remux(n, s, null, i);
            } }, { key: 'remux', value(e, t, r, i) { for (var a = this._avcTrack, n = a.samples, s = 0, o = 0, l = 0; l < n.length; l++) { for (var u = n[l], d = u.units.units, h = d.length, c = 0, f = 0; f < h; f++)c += d[f].data.length; o += c, s += h, u.length = c; }a.len = o, a.nbNalu = s, this.remuxer.remux(e, t, this._audioTrack, this._avcTrack, this._id3Track, this._txtTrack, i, this.contiguous, this.accurateTimeOffset, r); } }, { key: 'destroy', value() { this.switchLevel(), this._initPTS = this._initDTS = void 0, this._duration = 0; } }, { key: '_parsePAT', value(e, t) { return (31 & e[t + 10]) << 8 | e[t + 11]; } }, { key: '_parsePMT',
            value(e, t, r) {
              let i,
                a,
                n,
                s,
                o = { audio: -1, avc: -1, id3: -1, isAAC: !0 }; for (i = (15 & e[t + 1]) << 8 | e[t + 2], a = t + 3 + i - 4, n = (15 & e[t + 10]) << 8 | e[t + 11], t += 12 + n; t < a;) { switch (s = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) { case 15:o.audio === -1 && (o.audio = s); break; case 21:o.id3 === -1 && (o.id3 = s); break; case 27:o.avc === -1 && (o.avc = s); break; case 3:case 4:r ? o.audio === -1 && (o.audio = s, o.isAAC = !1) : c.logger.log('MPEG audio found, not supported in this browser for now'); break; case 36:c.logger.warn('HEVC stream type found, not supported for now'); break; default:c.logger.log(`unkown stream type:${e[t]}`); }t += ((15 & e[t + 3]) << 8 | e[t + 4]) + 5; } return o;
            } }, { key: '_parsePES',
            value(e) {
              let t,
                r,
                i,
                a,
                n,
                s,
                o,
                l,
                u,
                d = 0,
                h = e.data; if (!e || e.size === 0) return null; for (;h[0].length < 19 && h.length > 1;) { const c = new Uint8Array(h[0].length + h[1].length); c.set(h[0]), c.set(h[1], h[0].length), h[0] = c, h.splice(1, 1); } if (t = h[0], i = (t[0] << 16) + (t[1] << 8) + t[2], i === 1) { if (a = (t[4] << 8) + t[5], a && a > e.size - 6) return null; for (r = t[7], 192 & r && (o = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, o > 4294967295 && (o -= 8589934592), 64 & r ? (l = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2, l > 4294967295 && (l -= 8589934592)) : l = o), n = t[8], u = n + 9, e.size -= u, s = new Uint8Array(e.size); h.length;) { t = h.shift(); let f = t.byteLength; if (u) { if (u > f) { u -= f; continue; }t = t.subarray(u), f -= u, u = 0; }s.set(t, d), d += f; } return a && (a -= n + 3), { data: s, pts: o, dts: l, len: a }; } return null;
            } }, { key: 'pushAccesUnit', value(e, t) { e.units.units.length && e.frame && (!this.config.forceKeyFrameOnDiscontinuity || e.key === !0 || t.sps && (t.samples.length || this.contiguous) ? t.samples.push(e) : t.dropped++), e.debug.length && c.logger.log(`${e.pts}/${e.dts}:${e.debug},${e.units.length}`); } }, { key: '_parseAVCPES',
            value(e, t) {
              let r,
                i,
                a,
                n = this,
                s = this._avcTrack,
                o = this._parseAVCNALu(e.data),
                l = !1,
                u = this.avcSample; e.data = null, o.forEach((t) => {
                switch (t.type) {
                  case 1:i = !0, l && u && (u.debug += 'NDR '), u.frame = !0; var o = t.data; if (o.length > 1) { const d = new h.default(o).readSliceType(); d !== 2 && d !== 4 && d !== 7 && d !== 9 || (u.key = !0); } break; case 5:i = !0, u || (u = n.avcSample = n._createAVCSample(!0, e.pts, e.dts, '')), l && (u.debug += 'IDR '), u.key = !0, u.frame = !0; break; case 6:i = !0, l && u && (u.debug += 'SEI '), r = new h.default(n.discardEPB(t.data)), r.readUByte(); for (let c = 0, f = 0, v = !1, g = 0; !v && r.bytesAvailable > 1;) {
                    c = 0; do g = r.readUByte(), c += g; while (g === 255);f = 0; do g = r.readUByte(), f += g; while (g === 255);if (c === 4 && r.bytesAvailable !== 0) {
                      v = !0; const p = r.readUByte(); if (p === 181) {
                        const y = r.readUShort(); if (y === 49) {
                          const m = r.readUInt(); if (m === 1195456820) {
                            const E = r.readUByte(); if (E === 3) {
                              let T = r.readUByte(),
                                b = r.readUByte(),
                                k = 31 & T,
                                _ = [T, b]; for (a = 0; a < k; a++)_.push(r.readUByte()), _.push(r.readUByte()), _.push(r.readUByte()); n._insertSampleInOrder(n._txtTrack.samples, { type: 3, pts: e.pts, bytes: _ });
                            }
                          }
                        }
                      }
                    } else if (f < r.bytesAvailable) for (a = 0; a < f; a++)r.readUByte();
                  } break; case 7:if (i = !0, l && u && (u.debug += 'SPS '), !s.sps) {
                    r = new h.default(t.data); const A = r.readSPS(); s.width = A.width, s.height = A.height, s.sps = [t.data], s.duration = n._duration; let R = t.data.subarray(1, 4),
                      S = 'avc1.'; for (a = 0; a < 3; a++) { let L = R[a].toString(16); L.length < 2 && (L = `0${L}`), S += L; }s.codec = S;
                  } break; case 8:i = !0, l && u && (u.debug += 'PPS '), s.pps || (s.pps = [t.data]); break; case 9:i = !1, u && n.pushAccesUnit(u, s), u = n.avcSample = n._createAVCSample(!1, e.pts, e.dts, l ? 'AUD ' : ''); break; case 12:i = !1; break; default:i = !1, u && (u.debug += `unknown NAL ${t.type} `);
                } if (u && i) { const w = u.units; w.units.push(t); }
              }), t && u && (this.pushAccesUnit(u, s), this.avcSample = null);
            } }, { key: '_createAVCSample', value(e, t, r, i) { return { key: e, pts: t, dts: r, units: { units: [], length: 0 }, debug: i }; } }, { key: '_insertSampleInOrder', value(e, t) { const r = e.length; if (r > 0) { if (t.pts >= e[r - 1].pts)e.push(t); else for (let i = r - 1; i >= 0; i--) if (t.pts < e[i].pts) { e.splice(i, 0, t); break; } } else e.push(t); } }, { key: '_getLastNalUnit',
            value() {
              let e = this.avcSample,
                t = void 0; if (!e || e.units.units.length === 0) {
                let r = this._avcTrack,
                  i = r.samples; e = i[i.length - 1];
              } if (e) { const a = e.units.units; t = a[a.length - 1]; } return t;
            } }, { key: '_parseAVCNALu', value(e) { for (var t, r, i, a, n, s = 0, o = e.byteLength, l = this._avcTrack, u = l.naluState || 0, d = u, h = [], c = -1; s < o;) switch (t = e[s++], u) { case 0:t === 0 && (u = 1); break; case 1:u = t === 0 ? 2 : 0; break; case 2:case 3:if (t === 0)u = 3; else if (t === 1) { if (c >= 0)i = { data: e.subarray(c, s - u - 1), type: n }, h.push(i); else { const f = this._getLastNalUnit(); if (f && (d && s <= 4 - d && f.state && (f.data = f.data.subarray(0, f.data.byteLength - d)), r = s - u - 1, r > 0)) { const v = new Uint8Array(f.data.byteLength + r); v.set(f.data, 0), v.set(e.subarray(0, r), f.data.byteLength), f.data = v; } }s < o ? (a = 31 & e[s], c = s, n = a, u = 0) : u = -1; } else u = 0; break; case -1:c = 0, n = 31 & t, u = 0; } if (c >= 0 && u >= 0 && (i = { data: e.subarray(c, o), type: n, state: u }, h.push(i)), h.length === 0) { const g = this._getLastNalUnit(); if (g) { const p = new Uint8Array(g.data.byteLength + e.byteLength); p.set(g.data, 0), p.set(e, g.data.byteLength), g.data = p; } } return l.naluState = u, h; } }, { key: 'discardEPB', value(e) { for (var t, r, i = e.byteLength, a = [], n = 1; n < i - 2;)e[n] === 0 && e[n + 1] === 0 && e[n + 2] === 3 ? (a.push(n + 2), n += 2) : n++; if (a.length === 0) return e; t = i - a.length, r = new Uint8Array(t); let s = 0; for (n = 0; n < t; s++, n++)s === a[0] && (s++, a.shift()), r[n] = e[s]; return r; } }, { key: '_parseAACPES',
            value(e) {
              let t,
                r,
                i,
                a,
                n,
                s,
                l,
                d,
                h,
                v = this._audioTrack,
                g = e.data,
                p = e.pts,
                y = 0,
                m = this.aacOverFlow,
                E = this.aacLastPTS; if (m) { const T = new Uint8Array(m.byteLength + g.byteLength); T.set(m, 0), T.set(g, m.byteLength), g = T; } for (n = y, d = g.length; n < d - 1 && (g[n] !== 255 || (240 & g[n + 1]) !== 240); n++);if (n) {
                let b,
                  k; if (n < d - 1 ? (b = `AAC PES did not start with ADTS header,offset:${n}`, k = !1) : (b = 'no ADTS header found in AAC PES', k = !0), c.logger.warn(`parsing error:${b}`), this.observer.trigger(u.default.ERROR, { type: f.ErrorTypes.MEDIA_ERROR, id: this.id, details: f.ErrorDetails.FRAG_PARSING_ERROR, fatal: k, reason: b }), k) return;
              } if (v.audiosamplerate || (t = o.default.getAudioConfig(this.observer, g, n, this.audioCodec), v.config = t.config, v.audiosamplerate = t.samplerate, v.channelCount = t.channelCount, v.codec = t.codec, v.duration = this._duration, c.logger.log(`parsed codec:${v.codec},rate:${t.samplerate},nb channel:${t.channelCount}`)), a = 0, i = 9216e4 / v.audiosamplerate, m && E) { const _ = E + i; Math.abs(_ - p) > 1 && (c.logger.log(`AAC: align PTS for overlapping frames by ${Math.round((_ - p) / 90)}`), p = _); } for (;n + 5 < d && (s = 1 & g[n + 1] ? 7 : 9, r = (3 & g[n + 3]) << 11 | g[n + 4] << 3 | (224 & g[n + 5]) >>> 5, r -= s, r > 0 && n + s + r <= d);) for (l = p + a * i, h = { unit: g.subarray(n + s, n + s + r), pts: l, dts: l }, v.samples.push(h), v.len += r, n += r + s, a++; n < d - 1 && (g[n] !== 255 || (240 & g[n + 1]) !== 240); n++);m = n < d ? g.subarray(n, d) : null, this.aacOverFlow = m, this.aacLastPTS = l;
            } }, { key: '_parseMPEGPES', value(e) { for (var t, r = e.data, i = e.pts, a = r.length, n = 0, s = 0; s < a && (t = this._parseMpeg(r, s, a, n++, i)) > 0;)s += t; } }, { key: '_onMpegFrame',
            value(e, t, r, i, a, n) {
              let s = 1152 / r * 1e3,
                o = n + a * s,
                l = this._audioTrack; l.config = [], l.channelCount = i, l.audiosamplerate = r, l.duration = this._duration, l.samples.push({ unit: e, pts: o, dts: o }), l.len += e.length;
            } }, { key: '_onMpegNoise', value(e) { c.logger.warn(`mpeg audio has noise: ${e.length} bytes`); } }, { key: '_parseMpeg',
            value(e, t, r, i, a) {
              let n = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                s = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3]; if (t + 2 > r) return -1; if (e[t] === 255 || (224 & e[t + 1]) === 224) {
                if (t + 24 > r) return -1; let o = e[t + 1] >> 3 & 3,
                  l = e[t + 1] >> 1 & 3,
                  u = e[t + 2] >> 4 & 15,
                  d = e[t + 2] >> 2 & 3,
                  h = !!(2 & e[t + 2]); if (o !== 1 && u !== 0 && u !== 15 && d !== 3) {
                  let c = o === 3 ? 3 - l : l === 3 ? 3 : 4,
                    f = 1e3 * n[14 * c + u - 1],
                    v = o === 3 ? 0 : o === 2 ? 1 : 2,
                    g = s[3 * v + d],
                    p = h ? 1 : 0,
                    y = e[t + 3] >> 6 === 3 ? 1 : 2,
                    m = l === 3 ? (o === 3 ? 12 : 6) * f / g + p << 2 : (o === 3 ? 144 : 72) * f / g + p | 0; return t + m > r ? -1 : (this._onMpegFrame && this._onMpegFrame(e.subarray(t, t + m), f, g, y, i, a), m);
                }
              } for (let E = t + 2; E < r;) { if (e[E - 1] === 255 && (224 & e[E]) === 224) return this._onMpegNoise && this._onMpegNoise(e.subarray(t, E - 1)), E - t - 1; E++; } return -1;
            } }, { key: '_parseID3PES', value(e) { this._id3Track.samples.push(e); } }], [{ key: 'probe', value(e) { return e.length >= 564 && e[0] === 71 && e[188] === 71 && e[376] === 71; } }]), e;
        }()); r.default = v;
    }, { 21: 21, 25: 25, 28: 28, 30: 30, 47: 47 }],
    28: [function (e, t, r) {
      Object.defineProperty(r, '__esModule', { value: !0 }); r.ErrorTypes = { NETWORK_ERROR: 'networkError', MEDIA_ERROR: 'mediaError', OTHER_ERROR: 'otherError' }, r.ErrorDetails = { MANIFEST_LOAD_ERROR: 'manifestLoadError', MANIFEST_LOAD_TIMEOUT: 'manifestLoadTimeOut', MANIFEST_PARSING_ERROR: 'manifestParsingError', MANIFEST_INCOMPATIBLE_CODECS_ERROR: 'manifestIncompatibleCodecsError', LEVEL_LOAD_ERROR: 'levelLoadError', LEVEL_LOAD_TIMEOUT: 'levelLoadTimeOut', LEVEL_SWITCH_ERROR: 'levelSwitchError', AUDIO_TRACK_LOAD_ERROR: 'audioTrackLoadError', AUDIO_TRACK_LOAD_TIMEOUT: 'audioTrackLoadTimeOut', FRAG_LOAD_ERROR: 'fragLoadError', FRAG_LOOP_LOADING_ERROR: 'fragLoopLoadingError', FRAG_LOAD_TIMEOUT: 'fragLoadTimeOut', FRAG_DECRYPT_ERROR: 'fragDecryptError', FRAG_PARSING_ERROR: 'fragParsingError', KEY_LOAD_ERROR: 'keyLoadError', KEY_LOAD_TIMEOUT: 'keyLoadTimeOut', BUFFER_ADD_CODEC_ERROR: 'bufferAddCodecError', BUFFER_APPEND_ERROR: 'bufferAppendError', BUFFER_APPENDING_ERROR: 'bufferAppendingError', BUFFER_STALLED_ERROR: 'bufferStalledError', BUFFER_FULL_ERROR: 'bufferFullError', BUFFER_SEEK_OVER_HOLE: 'bufferSeekOverHole', INTERNAL_EXCEPTION: 'internalException', WEBVTT_EXCEPTION: 'webVTTException' };
    }, {}],
    29: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let n = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; },
        s = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        o = e(47),
        l = e(28),
        u = e(30),
        d = i(u),
        h = (function () { function e(t) { a(this, e), this.hls = t, this.onEvent = this.onEvent.bind(this); for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)i[n - 1] = arguments[n]; this.handledEvents = i, this.useGenericHandler = !0, this.registerListeners(); } return s(e, [{ key: 'destroy', value() { this.unregisterListeners(); } }, { key: 'isEventHandler', value() { return n(this.handledEvents) === 'object' && this.handledEvents.length && typeof this.onEvent === 'function'; } }, { key: 'registerListeners', value() { this.isEventHandler() && this.handledEvents.forEach((e) => { if (e === 'hlsEventGeneric') throw new Error(`Forbidden event name: ${e}`); this.hls.on(e, this.onEvent); }); } }, { key: 'unregisterListeners', value() { this.isEventHandler() && this.handledEvents.forEach((e) => { this.hls.off(e, this.onEvent); }); } }, { key: 'onEvent', value(e, t) { this.onEventGeneric(e, t); } }, { key: 'onEventGeneric', value(e, t) { const r = function (e, t) { const r = `on${e.replace('hls', '')}`; if (typeof this[r] !== 'function') throw new Error(`Event ${e} has no generic handler in this ${this.constructor.name} class (tried ${r})`); return this[r].bind(this, t); }; try { r.call(this, e, t).call(); } catch (i) { o.logger.error(`internal error happened while processing ${e}:${i.message}`), this.hls.trigger(d.default.ERROR, { type: l.ErrorTypes.OTHER_ERROR, details: l.ErrorDetails.INTERNAL_EXCEPTION, fatal: !1, event: e, err: i }); } } }]), e; }()); r.default = h;
    }, { 28: 28, 30: 30, 47: 47 }],
    30: [function (e, t, r) {
      t.exports = { MEDIA_ATTACHING: 'hlsMediaAttaching', MEDIA_ATTACHED: 'hlsMediaAttached', MEDIA_DETACHING: 'hlsMediaDetaching', MEDIA_DETACHED: 'hlsMediaDetached', BUFFER_RESET: 'hlsBufferReset', BUFFER_CODECS: 'hlsBufferCodecs', BUFFER_CREATED: 'hlsBufferCreated', BUFFER_APPENDING: 'hlsBufferAppending', BUFFER_APPENDED: 'hlsBufferAppended', BUFFER_EOS: 'hlsBufferEos', BUFFER_FLUSHING: 'hlsBufferFlushing', BUFFER_FLUSHED: 'hlsBufferFlushed', MANIFEST_LOADING: 'hlsManifestLoading', MANIFEST_LOADED: 'hlsManifestLoaded', MANIFEST_PARSED: 'hlsManifestParsed', LEVEL_LOADING: 'hlsLevelLoading', LEVEL_LOADED: 'hlsLevelLoaded', LEVEL_UPDATED: 'hlsLevelUpdated', LEVEL_PTS_UPDATED: 'hlsLevelPtsUpdated', LEVEL_SWITCH: 'hlsLevelSwitch', AUDIO_TRACKS_UPDATED: 'hlsAudioTracksUpdated', AUDIO_TRACK_SWITCH: 'hlsAudioTrackSwitch', AUDIO_TRACK_LOADING: 'hlsAudioTrackLoading', AUDIO_TRACK_LOADED: 'hlsAudioTrackLoaded', SUBTITLE_TRACKS_UPDATED: 'hlsSubtitleTracksUpdated', SUBTITLE_TRACK_SWITCH: 'hlsSubtitleTrackSwitch', SUBTITLE_TRACK_LOADING: 'hlsSubtitleTrackLoading', SUBTITLE_TRACK_LOADED: 'hlsSubtitleTrackLoaded', SUBTITLE_FRAG_PROCESSED: 'hlsSubtitleFragProcessed', INIT_PTS_FOUND: 'hlsInitPtsFound', FRAG_LOADING: 'hlsFragLoading', FRAG_LOAD_PROGRESS: 'hlsFragLoadProgress', FRAG_LOAD_EMERGENCY_ABORTED: 'hlsFragLoadEmergencyAborted', FRAG_LOADED: 'hlsFragLoaded', FRAG_DECRYPT_STARTED: 'hlsFragDecryptStarted', FRAG_DECRYPTED: 'hlsFragDecrypted', FRAG_PARSING_INIT_SEGMENT: 'hlsFragParsingInitSegment', FRAG_PARSING_USERDATA: 'hlsFragParsingUserdata', FRAG_PARSING_METADATA: 'hlsFragParsingMetadata', FRAG_PARSING_DATA: 'hlsFragParsingData', FRAG_PARSED: 'hlsFragParsed', FRAG_BUFFERED: 'hlsFragBuffered', FRAG_CHANGED: 'hlsFragChanged', FPS_DROP: 'hlsFpsDrop', FPS_DROP_LEVEL_CAPPING: 'hlsFpsDropLevelCapping', ERROR: 'hlsError', DESTROYING: 'hlsDestroying', KEY_LOADING: 'hlsKeyLoading', KEY_LOADED: 'hlsKeyLoaded', STREAM_STATE_TRANSITION: 'hlsStreamStateTransition' };
    }, {}],
    31: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = (function () { function e() { i(this, e); } return a(e, null, [{ key: 'getSilentFrame', value(e) { return e === 1 ? new Uint8Array([0, 200, 0, 128, 35, 128]) : e === 2 ? new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]) : e === 3 ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]) : e === 4 ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]) : e === 5 ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]) : e === 6 ? new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]) : null; } }]), e; }()); r.default = n;
    }, {}],
    32: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = (function () {
          function e() { i(this, e); } return a(e, null, [{ key: 'isBuffered', value(e, t) { if (e) for (let r = e.buffered, i = 0; i < r.length; i++) if (t >= r.start(i) && t <= r.end(i)) return !0; return !1; } }, { key: 'bufferInfo',
            value(e, t, r) {
              if (!e) return { len: 0, start: 0, end: 0, nextStart: void 0 }; try {
                let i,
                  a = e.buffered,
                  n = []; for (i = 0; i < a.length; i++)n.push({ start: a.start(i), end: a.end(i) }); return this.bufferedInfo(n, t, r);
              } catch (s) { return { len: 0, start: 0, end: 0, nextStart: void 0 }; }
            } }, { key: 'bufferedInfo',
            value(e, t, r) {
              let i,
                a,
                n,
                s,
                o,
                l = []; for (e.sort((e, t) => { const r = e.start - t.start; return r || t.end - e.end; }), o = 0; o < e.length; o++) { const u = l.length; if (u) { const d = l[u - 1].end; e[o].start - d < r ? e[o].end > d && (l[u - 1].end = e[o].end) : l.push(e[o]); } else l.push(e[o]); } for (o = 0, i = 0, a = n = t; o < l.length; o++) {
                let h = l[o].start,
                  c = l[o].end; if (t + r >= h && t < c)a = h, n = c, i = n - t; else if (t + r < h) { s = h; break; }
              } return { len: i, start: a || 0, end: n || 0, nextStart: s };
            } }]), e;
        }()); r.default = n;
    }, {}],
    33: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = e(47),
        s = (function () {
          function e() { i(this, e); } return a(e, null, [{ key: 'mergeDetails',
            value(t, r) {
              let i,
                a = Math.max(t.startSN, r.startSN) - r.startSN,
                s = Math.min(t.endSN, r.endSN) - r.startSN,
                o = r.startSN - t.startSN,
                l = t.fragments,
                u = r.fragments,
                d = 0;
              if (s < a) return void (r.PTSKnown = !1); for (var h = a; h <= s; h++) {
                let c = l[o + h],
                  f = u[h]; f && c && (d = c.cc - f.cc, isNaN(c.startPTS) || (f.start = f.startPTS = c.startPTS, f.endPTS = c.endPTS, f.duration = c.duration, i = f));
              } if (d) for (n.logger.log('discontinuity sliding from playlist, take drift into account'), h = 0; h < u.length; h++)u[h].cc += d; if (i)e.updateFragPTSDTS(r, i.sn, i.startPTS, i.endPTS, i.startDTS, i.endDTS); else if (o >= 0 && o < l.length) { const v = l[o].start; for (h = 0; h < u.length; h++)u[h].start += v; }r.PTSKnown = t.PTSKnown;
            } }, { key: 'updateFragPTSDTS',
            value(t, r, i, a, n, s) {
              let o,
                l,
                u,
                d; if (r < t.startSN || r > t.endSN) return 0; if (o = r - t.startSN, l = t.fragments, u = l[o], !isNaN(u.startPTS)) { const h = Math.abs(u.startPTS - i); isNaN(u.deltaPTS) ? u.deltaPTS = h : u.deltaPTS = Math.max(h, u.deltaPTS), i = Math.min(i, u.startPTS), a = Math.max(a, u.endPTS), n = Math.min(n, u.startDTS), s = Math.max(s, u.endDTS); } const c = i - u.start; for (u.start = u.startPTS = i, u.endPTS = a, u.startDTS = n, u.endDTS = s, u.duration = a - i, d = o; d > 0; d--)e.updatePTS(l, d, d - 1); for (d = o; d < l.length - 1; d++)e.updatePTS(l, d, d + 1); return t.PTSKnown = !0, c;
            } }, { key: 'updatePTS',
            value(e, t, r) {
              let i = e[t],
                a = e[r],
                s = a.startPTS; isNaN(s) ? r > t ? a.start = i.start + i.duration : a.start = i.start - a.duration : r > t ? (i.duration = s - i.start, i.duration < 0 && n.logger.warn(`negative duration computed for frag ${i.sn},level ${i.level}, there should be some duration drift between playlist and fragment!`)) : (a.duration = i.start - s, a.duration < 0 && n.logger.warn(`negative duration computed for frag ${a.sn},level ${a.level}, there should be some duration drift between playlist and fragment!`));
            } }]), e;
        }()); r.default = s;
    }, { 47: 47 }],
    34: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let n = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        s = e(30),
        o = i(s),
        l = e(28),
        u = e(38),
        d = i(u),
        h = e(36),
        c = i(h),
        f = e(4),
        v = i(f),
        g = e(7),
        p = i(g),
        y = e(8),
        m = i(y),
        E = e(5),
        T = i(E),
        b = e(13),
        k = i(b),
        _ = e(12),
        A = i(_),
        R = e(11),
        S = i(R),
        L = e(15),
        w = i(L),
        D = e(10),
        O = i(D),
        I = e(6),
        C = i(I),
        P = e(14),
        x = i(P),
        M = e(47),
        F = e(52),
        N = i(F),
        U = e(1),
        B = i(U),
        G = e(37),
        j = i(G),
        H = e(45),
        V = i(H),
        K = (function () { function e() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; a(this, e); const r = e.DefaultConfig; if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration"); for (const i in r)i in t || (t[i] = r[i]); if (void 0 !== t.liveMaxLatencyDurationCount && t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"'); if (void 0 !== t.liveMaxLatencyDuration && (t.liveMaxLatencyDuration <= t.liveSyncDuration || void 0 === t.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"'); (0, M.enableLogs)(t.debug), this.config = t; const n = this.observer = new B.default(); n.trigger = function (e) { for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)r[i - 1] = arguments[i]; n.emit(...[e, e].concat(r)); }, n.off = function (e) { for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)r[i - 1] = arguments[i]; n.removeListener(...[e].concat(r)); }, this.on = n.on.bind(n), this.off = n.off.bind(n), this.trigger = n.trigger.bind(n), this.playlistLoader = new d.default(this), this.fragmentLoader = new c.default(this), this.levelController = new S.default(this), this.abrController = new t.abrController(this), this.bufferController = new t.bufferController(this), this.capLevelController = new t.capLevelController(this), this.fpsController = new t.fpsController(this), this.streamController = new t.streamController(this), this.audioStreamController = new t.audioStreamController(this), this.subtitleStreamController = new t.subtitleStreamController(this), this.timelineController = new t.timelineController(this), this.audioTrackController = new C.default(this), this.subtitleTrackController = new x.default(this), this.keyLoader = new j.default(this); } return n(e, null, [{ key: 'isSupported', value() { return window.MediaSource = window.MediaSource || window.WebKitMediaSource, window.MediaSource && typeof window.MediaSource.isTypeSupported === 'function' && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'); } }, { key: 'version', get() { return '0.6.13'; } }, { key: 'Events', get() { return o.default; } }, { key: 'ErrorTypes', get() { return l.ErrorTypes; } }, { key: 'ErrorDetails', get() { return l.ErrorDetails; } }, { key: 'DefaultConfig', get() { return e.defaultConfig || (e.defaultConfig = { autoStartLoad: !0, startPosition: -1, defaultAudioCodec: void 0, debug: !1, capLevelOnFPSDrop: !1, capLevelToPlayerSize: !1, initialLiveManifestSize: 1, maxBufferLength: 30, maxBufferSize: 6e7, maxBufferHole: 0.5, maxSeekHole: 2, seekHoleNudgeDuration: 0.01, stalledInBufferedNudgeThreshold: 10, maxFragLookUpTolerance: 0.2, liveSyncDurationCount: 3, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, maxMaxBufferLength: 600, enableWorker: !0, enableSoftwareAES: !0, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, startLevel: void 0, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3, fragLoadingLoopThreshold: 3, startFragPrefetch: !1, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: 0.2, appendErrorMaxRetry: 3, loader: N.default, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, fetchSetup: void 0, abrController: v.default, bufferController: p.default, capLevelController: m.default, fpsController: O.default, streamController: A.default, audioStreamController: T.default, subtitleStreamController: k.default, timelineController: w.default, cueHandler: V.default, enableCEA708Captions: !0, enableWebVTT: !0, enableMP2TPassThrough: !1, stretchShortVideoTrack: !1, forceKeyFrameOnDiscontinuity: !0, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrBandWidthFactor: 0.95, abrBandWidthUpFactor: 0.7, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0 }), e.defaultConfig; }, set(t) { e.defaultConfig = t; } }]), n(e, [{ key: 'destroy', value() { M.logger.log('destroy'), this.trigger(o.default.DESTROYING), this.detachMedia(), this.playlistLoader.destroy(), this.fragmentLoader.destroy(), this.levelController.destroy(), this.abrController.destroy(), this.bufferController.destroy(), this.capLevelController.destroy(), this.fpsController.destroy(), this.streamController.destroy(), this.audioStreamController.destroy(), this.subtitleStreamController.destroy(), this.timelineController.destroy(), this.audioTrackController.destroy(), this.subtitleTrackController.destroy(), this.keyLoader.destroy(), this.url = null, this.observer.removeAllListeners(); } }, { key: 'attachMedia', value(e) { M.logger.log('attachMedia'), this.media = e, this.trigger(o.default.MEDIA_ATTACHING, { media: e }); } }, { key: 'detachMedia', value() { M.logger.log('detachMedia'), this.trigger(o.default.MEDIA_DETACHING), this.media = null; } }, { key: 'loadSource', value(e) { M.logger.log(`loadSource:${e}`), this.url = e, this.trigger(o.default.MANIFEST_LOADING, { url: e }); } }, { key: 'startLoad', value() { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1; M.logger.log(`startLoad(${e})`), this.levelController.startLoad(), this.streamController.startLoad(e), this.audioStreamController.startLoad(e); } }, { key: 'stopLoad', value() { M.logger.log('stopLoad'), this.levelController.stopLoad(), this.streamController.stopLoad(), this.audioStreamController.stopLoad(); } }, { key: 'swapAudioCodec', value() { M.logger.log('swapAudioCodec'), this.streamController.swapAudioCodec(); } }, { key: 'recoverMediaError', value() { M.logger.log('recoverMediaError'); const e = this.media; this.detachMedia(), this.attachMedia(e); } }, { key: 'levels', get() { return this.levelController.levels; } }, { key: 'currentLevel', get() { return this.streamController.currentLevel; }, set(e) { M.logger.log(`set currentLevel:${e}`), this.loadLevel = e, this.streamController.immediateLevelSwitch(); } }, { key: 'nextLevel', get() { return this.streamController.nextLevel; }, set(e) { M.logger.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch(); } }, { key: 'loadLevel', get() { return this.levelController.level; }, set(e) { M.logger.log(`set loadLevel:${e}`), this.levelController.manualLevel = e; } }, { key: 'nextLoadLevel', get() { return this.levelController.nextLoadLevel; }, set(e) { this.levelController.nextLoadLevel = e; } }, { key: 'firstLevel', get() { return Math.max(this.levelController.firstLevel, this.abrController.minAutoLevel); }, set(e) { M.logger.log(`set firstLevel:${e}`), this.levelController.firstLevel = e; } }, { key: 'startLevel', get() { return this.levelController.startLevel; }, set(e) { M.logger.log(`set startLevel:${e}`), this.levelController.startLevel = e; } }, { key: 'autoLevelCapping', get() { return this.abrController.autoLevelCapping; }, set(e) { M.logger.log(`set autoLevelCapping:${e}`), this.abrController.autoLevelCapping = e; } }, { key: 'autoLevelEnabled', get() { return this.levelController.manualLevel === -1; } }, { key: 'manualLevel', get() { return this.levelController.manualLevel; } }, { key: 'audioTracks', get() { return this.audioTrackController.audioTracks; } }, { key: 'audioTrack', get() { return this.audioTrackController.audioTrack; }, set(e) { this.audioTrackController.audioTrack = e; } }, { key: 'liveSyncPosition', get() { return this.streamController.liveSyncPosition; } }, { key: 'subtitleTracks', get() { return this.subtitleTrackController.subtitleTracks; } }, { key: 'subtitleTrack', get() { return this.subtitleTrackController.subtitleTrack; }, set(e) { this.subtitleTrackController.subtitleTrack = e; } }]), e; }()); r.default = K;
    }, { 1: 1, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 28: 28, 30: 30, 36: 36, 37: 37, 38: 38, 4: 4, 45: 45, 47: 47, 5: 5, 52: 52, 6: 6, 7: 7, 8: 8 }],
    35: [function (e, t, r) {
      t.exports = e(34).default;
    }, { 34: 34 }],
    36: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(30),
        u = i(l),
        d = e(29),
        h = i(d),
        c = e(28),
        f = e(47),
        v = (function (e) {
          function t(e) { a(this, t); const r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.FRAG_LOADING)); return r.loaders = {}, r; } return s(t, e), o(t, [{ key: 'destroy', value() { const e = this.loaders; for (const t in e) { const r = e[t]; r && r.destroy(); } this.loaders = {}, h.default.prototype.destroy.call(this); } }, { key: 'onFragLoading',
            value(e) {
              let t = e.frag,
                r = t.type,
                i = this.loaders[r],
                a = this.hls.config; t.loaded = 0, i && (f.logger.warn(`abort previous fragment loader for type:${r}`), i.abort()), i = this.loaders[r] = t.loader = typeof a.fLoader !== 'undefined' ? new a.fLoader(a) : new a.loader(a); let n = void 0,
                s = void 0,
                o = void 0; n = { url: t.url, frag: t, responseType: 'arraybuffer', progressData: !1 }; let l = t.byteRangeStartOffset,
                u = t.byteRangeEndOffset; isNaN(l) || isNaN(u) || (n.rangeStart = l, n.rangeEnd = u), s = { timeout: a.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: a.fragLoadingMaxRetryTimeout }, o = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this), onProgress: this.loadprogress.bind(this) }, i.load(n, s, o);
            } }, { key: 'loadsuccess',
            value(e, t, r) {
              let i = e.data,
                a = r.frag; a.loader = void 0, this.loaders[a.type] = void 0, this.hls.trigger(u.default.FRAG_LOADED, { payload: i, frag: a, stats: t });
            } }, { key: 'loaderror', value(e, t) { const r = t.loader; r && r.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u.default.ERROR, { type: c.ErrorTypes.NETWORK_ERROR, details: c.ErrorDetails.FRAG_LOAD_ERROR, fatal: !1, frag: t.frag, response: e }); } }, { key: 'loadtimeout', value(e, t) { const r = t.loader; r && r.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u.default.ERROR, { type: c.ErrorTypes.NETWORK_ERROR, details: c.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: !1, frag: t.frag }); } }, { key: 'loadprogress', value(e, t, r) { const i = t.frag; i.loaded = e.loaded, this.hls.trigger(u.default.FRAG_LOAD_PROGRESS, { frag: i, stats: e }); } }]), t;
        }(h.default)); r.default = v;
    }, { 28: 28, 29: 29, 30: 30, 47: 47 }],
    37: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(30),
        u = i(l),
        d = e(29),
        h = i(d),
        c = e(28),
        f = e(47),
        v = (function (e) {
          function t(e) { a(this, t); const r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, u.default.KEY_LOADING)); return r.loaders = {}, r.decryptkey = null, r.decrypturl = null, r; } return s(t, e), o(t, [{ key: 'destroy', value() { for (const e in this.loaders) { const t = this.loaders[e]; t && t.destroy(); } this.loaders = {}, h.default.prototype.destroy.call(this); } }, { key: 'onKeyLoading',
            value(e) {
              let t = e.frag,
                r = t.type,
                i = this.loaders[r],
                a = t.decryptdata,
                n = a.uri; if (n !== this.decrypturl || this.decryptkey === null) {
                const s = this.hls.config; i && (f.logger.warn(`abort previous key loader for type:${r}`), i.abort()), t.loader = this.loaders[r] = new s.loader(s), this.decrypturl = n, this.decryptkey = null; let o = void 0,
                  l = void 0,
                  d = void 0; o = { url: n, frag: t, responseType: 'arraybuffer' }, l = { timeout: s.fragLoadingTimeOut, maxRetry: s.fragLoadingMaxRetry, retryDelay: s.fragLoadingRetryDelay, maxRetryDelay: s.fragLoadingMaxRetryTimeout }, d = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) }, t.loader.load(o, l, d);
              } else this.decryptkey && (a.key = this.decryptkey, this.hls.trigger(u.default.KEY_LOADED, { frag: t }));
            } }, { key: 'loadsuccess', value(e, t, r) { const i = r.frag; this.decryptkey = i.decryptdata.key = new Uint8Array(e.data), i.loader = void 0, this.loaders[i.type] = void 0, this.hls.trigger(u.default.KEY_LOADED, { frag: i }); } }, { key: 'loaderror',
            value(e, t) {
              let r = t.frag,
                i = r.loader; i && i.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u.default.ERROR, { type: c.ErrorTypes.NETWORK_ERROR, details: c.ErrorDetails.KEY_LOAD_ERROR, fatal: !1, frag: r, response: e });
            } }, { key: 'loadtimeout',
            value(e, t) {
              let r = t.frag,
                i = r.loader; i && i.abort(), this.loaders[t.type] = void 0, this.hls.trigger(u.default.ERROR, { type: c.ErrorTypes.NETWORK_ERROR, details: c.ErrorDetails.KEY_LOAD_TIMEOUT, fatal: !1, frag: r });
            } }]), t;
        }(h.default)); r.default = v;
    }, { 28: 28, 29: 29, 30: 30, 47: 47 }],
    38: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t; } function s(e, t) { if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }Object.defineProperty(r, '__esModule', { value: !0 }); let o = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        l = e(2),
        u = i(l),
        d = e(30),
        h = i(d),
        c = e(29),
        f = i(c),
        v = e(28),
        g = e(42),
        p = i(g),
        y = e(47),
        m = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
        E = /#EXT-X-MEDIA:(.*)/g,
        T = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT(INF): *(\d*(?:\.\d+)?)(?:,(.*))?)|(?:(?!#)()(\S.+))|(?:#EXT-X-(BYTERANGE): *(\d+(?:@\d+(?:\.\d+)?)?)|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(PROGRAM-DATE-TIME):(.+))|(?:#EXT-X-(VERSION):(\d+))|(?:(#)(.*):(.*))|(?:(#)(.*)))(?:.*)\r?\n?/g,
        b = (function (e) {
          function t(e) { a(this, t); const r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, h.default.MANIFEST_LOADING, h.default.LEVEL_LOADING, h.default.AUDIO_TRACK_LOADING, h.default.SUBTITLE_TRACK_LOADING)); return r.loaders = {}, r; } return s(t, e), o(t, [{ key: 'destroy', value() { for (const e in this.loaders) { const t = this.loaders[e]; t && t.destroy(); } this.loaders = {}, f.default.prototype.destroy.call(this); } }, { key: 'onManifestLoading', value(e) { this.load(e.url, { type: 'manifest' }); } }, { key: 'onLevelLoading', value(e) { this.load(e.url, { type: 'level', level: e.level, id: e.id }); } }, { key: 'onAudioTrackLoading', value(e) { this.load(e.url, { type: 'audioTrack', id: e.id }); } }, { key: 'onSubtitleTrackLoading', value(e) { this.load(e.url, { type: 'subtitleTrack', id: e.id }); } }, { key: 'load',
            value(e, t) {
              let r = this.loaders[t.type]; if (r) { const i = r.context; if (i && i.url === e) return void y.logger.trace('playlist request ongoing'); y.logger.warn(`abort previous loader for type:${t.type}`), r.abort(); } let a = this.hls.config,
                n = void 0,
                s = void 0,
                o = void 0,
                l = void 0; t.type === 'manifest' ? (n = a.manifestLoadingMaxRetry, s = a.manifestLoadingTimeOut, o = a.manifestLoadingRetryDelay, l = a.manifestLoadingMaxRetryTimeout) : (n = a.levelLoadingMaxRetry, s = a.levelLoadingTimeOut, o = a.levelLoadingRetryDelay, l = a.levelLoadingMaxRetryTimeout, y.logger.log(`loading playlist for level ${t.level}`)), r = this.loaders[t.type] = t.loader = typeof a.pLoader !== 'undefined' ? new a.pLoader(a) : new a.loader(a), t.url = e, t.responseType = ''; let u = void 0,
                d = void 0; u = { timeout: s, maxRetry: n, retryDelay: o, maxRetryDelay: l }, d = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) }, r.load(t, u, d);
            } }, { key: 'resolve', value(e, t) { return u.default.buildAbsoluteURL(t, e); } }, { key: 'parseMasterPlaylist',
            value(e, t) {
              let r = [],
                i = void 0; for (m.lastIndex = 0; (i = m.exec(e)) != null;) {
                let a = {},
                  n = a.attrs = new p.default(i[1]); a.url = this.resolve(i[2], t); const s = n.decimalResolution('RESOLUTION'); s && (a.width = s.width, a.height = s.height), a.bitrate = n.decimalInteger('AVERAGE-BANDWIDTH') || n.decimalInteger('BANDWIDTH'), a.name = n.NAME; let o = n.CODECS; if (o) { o = o.split(/[ ,]+/); for (let l = 0; l < o.length; l++) { const u = o[l]; u.indexOf('avc1') !== -1 ? a.videoCodec = this.avc1toavcoti(u) : a.audioCodec = u; } }r.push(a);
              } return r;
            } }, { key: 'parseMasterPlaylistMedia',
            value(e, t, r) {
              let i = void 0,
                a = [],
                n = 0; for (E.lastIndex = 0; (i = E.exec(e)) != null;) {
                let s = {},
                  o = new p.default(i[1]); o.TYPE === r && (s.groupId = o['GROUP-ID'], s.name = o.NAME, s.type = r, s.default = o.DEFAULT === 'YES', s.autoselect = o.AUTOSELECT === 'YES', s.forced = o.FORCED === 'YES', o.URI && (s.url = this.resolve(o.URI, t)), s.lang = o.LANGUAGE, s.name || (s.name = s.lang), s.id = n++, a.push(s));
              } return a;
            } }, { key: 'createInitializationVector', value(e) { for (var t = new Uint8Array(16), r = 12; r < 16; r++)t[r] = e >> 8 * (15 - r) & 255; return t; } }, { key: 'fragmentDecryptdataFromLevelkey', value(e, t) { let r = e; return e && e.method && e.uri && !e.iv && (r = this.cloneObj(e), r.iv = this.createInitializationVector(t)), r; } }, { key: 'avc1toavcoti',
            value(e) {
              let t,
                r = e.split('.'); return r.length > 2 ? (t = `${r.shift()}.`, t += parseInt(r.shift()).toString(16), t += (`000${parseInt(r.shift()).toString(16)}`).substr(-4)) : t = e, t;
            } }, { key: 'cloneObj', value(e) { return JSON.parse(JSON.stringify(e)); } }, { key: 'parseLevelPlaylist',
            value(e, t, r, i) {
              let a,
                n,
                s = 0,
                o = 0,
                l = { type: null, version: null, url: t, fragments: [], live: !0, startSN: 0 },
                u = { method: null, key: null, iv: null, uri: null },
                d = 0,
                h = null,
                c = null,
                f = null,
                v = null,
                g = null,
                m = null,
                E = []; for (T.lastIndex = 0; (n = T.exec(e)) !== null;) {
                switch (n.shift(), n = n.filter(e => void 0 !== e), n[0]) {
                  case 'PLAYLIST-TYPE':l.type = n[1].toUpperCase(); break; case 'MEDIA-SEQUENCE':s = l.startSN = parseInt(n[1]); break; case 'TARGETDURATION':l.targetduration = parseFloat(n[1]); break; case 'VERSION':l.version = parseInt(n[1]); break; case 'EXTM3U':break; case 'ENDLIST':l.live = !1; break; case 'DIS':d++, E.push(n); break; case 'DISCONTINUITY-SEQ':d = parseInt(n[1]); break; case 'BYTERANGE':var b = n[1].split('@'); m = b.length === 1 ? g : parseInt(b[1]), g = parseInt(b[0]) + m; break; case 'INF':f = parseFloat(n[1]), v = n[2] ? n[2] : null, E.push(n); break; case '':if (!isNaN(f)) { const k = s++; a = this.fragmentDecryptdataFromLevelkey(u, k); const _ = n[1] ? this.resolve(n[1], t) : null; c = { url: _, type: i, duration: f, title: v, start: o, sn: k, level: r, cc: d, decryptdata: a, programDateTime: h, tagList: E }, m !== null && (c.byteRangeStartOffset = m, c.byteRangeEndOffset = g), l.fragments.push(c), o += f, f = null, v = null, m = null, h = null, E = []; } break; case 'KEY':var A = n[1],
                    R = new p.default(A),
                    S = R.enumeratedString('METHOD'),
                    L = R.URI,
                    w = R.hexadecimalInteger('IV'); S && (u = { method: null, key: null, iv: null, uri: null }, L && S === 'AES-128' && (u.method = S, u.uri = this.resolve(L, t), u.key = null, u.iv = w)); break; case 'START':var D = n[1],
                    O = new p.default(D),
                    I = O.decimalFloatingPoint('TIME-OFFSET'); isNaN(I) || (l.startTimeOffset = I); break; case 'PROGRAM-DATE-TIME':h = new Date(Date.parse(n[1])), E.push(n); break; case '#':n.shift(), E.push(n); break; default:y.logger.warn(`line parsed but not handled: ${n}`);
                }
              } return c && !c.url && (l.fragments.pop(), o -= c.duration), l.totalduration = o, l.averagetargetduration = o / l.fragments.length, l.endSN = s - 1, l;
            } }, { key: 'loadsuccess',
            value(e, t, r) {
              let i = e.data,
                a = e.url,
                n = r.type,
                s = r.id,
                o = r.level,
                l = this.hls; if (this.loaders[n] = void 0, void 0 !== a && a.indexOf('data:') !== 0 || (a = r.url), t.tload = performance.now(), i.indexOf('#EXTM3U') === 0) {
                if (i.indexOf('#EXTINF:') > 0) {
                  let u = n !== 'audioTrack' && n !== 'subtitleTrack',
                    d = this.parseLevelPlaylist(i, a, o || s || 0, n === 'audioTrack' ? 'audio' : n === 'subtitleTrack' ? 'subtitle' : 'main'); n === 'manifest' && l.trigger(h.default.MANIFEST_LOADED, { levels: [{ url: a, details: d }], audioTracks: [], url: a, stats: t }), t.tparsed = performance.now(), d.targetduration ? u ? l.trigger(h.default.LEVEL_LOADED, { details: d, level: o || 0, id: s || 0, stats: t }) : n === 'audioTrack' ? l.trigger(h.default.AUDIO_TRACK_LOADED, { details: d, id: s, stats: t }) : n === 'subtitleTrack' && l.trigger(h.default.SUBTITLE_TRACK_LOADED, { details: d, id: s, stats: t }) : l.trigger(h.default.ERROR, { type: v.ErrorTypes.NETWORK_ERROR, details: v.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: !0, url: a, reason: 'invalid targetduration' });
                } else {
                  const c = this.parseMasterPlaylist(i, a); if (c.length) {
                    let f = this.parseMasterPlaylistMedia(i, a, 'AUDIO'),
                      g = this.parseMasterPlaylistMedia(i, a, 'SUBTITLES'); if (f.length) { let p = !1; f.forEach((e) => { e.url || (p = !0); }), p === !1 && c[0].audioCodec && !c[0].attrs.AUDIO && (y.logger.log('audio codec signaled in quality level, but no embedded audio track signaled, create one'), f.unshift({ type: 'main', name: 'main' })); }l.trigger(h.default.MANIFEST_LOADED, { levels: c, audioTracks: f, subtitles: g, url: a, stats: t });
                  } else l.trigger(h.default.ERROR, { type: v.ErrorTypes.NETWORK_ERROR, details: v.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: !0, url: a, reason: 'no level found in manifest' });
                }
              } else l.trigger(h.default.ERROR, { type: v.ErrorTypes.NETWORK_ERROR, details: v.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: !0, url: a, reason: 'no EXTM3U delimiter' });
            } }, { key: 'loaderror',
            value(e, t) {
              let r,
                i,
                a = t.loader; switch (t.type) { case 'manifest':r = v.ErrorDetails.MANIFEST_LOAD_ERROR, i = !0; break; case 'level':r = v.ErrorDetails.LEVEL_LOAD_ERROR, i = !1; break; case 'audioTrack':r = v.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, i = !1; }a && (a.abort(), this.loaders[t.type] = void 0), this.hls.trigger(h.default.ERROR, { type: v.ErrorTypes.NETWORK_ERROR, details: r, fatal: i, url: t.url, loader: a, response: e, context: t });
            } }, { key: 'loadtimeout',
            value(e, t) {
              let r,
                i,
                a = t.loader; switch (t.type) { case 'manifest':r = v.ErrorDetails.MANIFEST_LOAD_TIMEOUT, i = !0; break; case 'level':r = v.ErrorDetails.LEVEL_LOAD_TIMEOUT, i = !1; break; case 'audioTrack':r = v.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT, i = !1; }a && (a.abort(), this.loaders[t.type] = void 0), this.hls.trigger(h.default.ERROR, { type: v.ErrorTypes.NETWORK_ERROR, details: r, fatal: i, url: t.url, loader: a, context: t });
            } }]), t;
        }(f.default)); r.default = b;
    }, { 2: 2, 28: 28, 29: 29, 30: 30, 42: 42, 47: 47 }],
    39: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = (function () {
          function e() { i(this, e); } return a(e, null, [{ key: 'init',
            value() {
              e.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], '.mp3': [], mvex: [], mvhd: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] }; let t; for (t in e.types)e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]); let r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]); e.HDLR_TYPES = { video: r, audio: i }; let a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]); e.STTS = e.STSC = e.STCO = n, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]); let s = new Uint8Array([105, 115, 111, 109]),
                o = new Uint8Array([97, 118, 99, 49]),
                l = new Uint8Array([0, 0, 0, 1]); e.FTYP = e.box(e.types.ftyp, s, l, s, o), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, a));
            } }, { key: 'box', value(e) { for (var t, r = Array.prototype.slice.call(arguments, 1), i = 8, a = r.length, n = a; a--;)i += r[a].byteLength; for (t = new Uint8Array(i), t[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = 255 & i, t.set(e, 4), a = 0, i = 8; a < n; a++)t.set(r[a], i), i += r[a].byteLength; return t; } }, { key: 'hdlr', value(t) { return e.box(e.types.hdlr, e.HDLR_TYPES[t]); } }, { key: 'mdat', value(t) { return e.box(e.types.mdat, t); } }, { key: 'mdhd', value(t, r) { return r *= t, e.box(e.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 85, 196, 0, 0])); } }, { key: 'mdia', value(t) { return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t)); } }, { key: 'mfhd', value(t) { return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t])); } }, { key: 'minf', value(t) { return t.type === 'audio' ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t)); } }, { key: 'moof', value(t, r, i) { return e.box(e.types.moof, e.mfhd(t), e.traf(i, r)); } }, { key: 'moov', value(t) { for (var r = t.length, i = []; r--;)i[r] = e.trak(t[r]); return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t))); } }, { key: 'mvex', value(t) { for (var r = t.length, i = []; r--;)i[r] = e.trex(t[r]); return e.box.apply(null, [e.types.mvex].concat(i)); } }, { key: 'mvhd', value(t, r) { r *= t; const i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]); return e.box(e.types.mvhd, i); } }, { key: 'sdtp',
            value(t) {
              let r,
                i,
                a = t.samples || [],
                n = new Uint8Array(4 + a.length); for (i = 0; i < a.length; i++)r = a[i].flags, n[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy; return e.box(e.types.sdtp, n);
            } }, { key: 'stbl', value(t) { return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO)); } }, { key: 'avc1',
            value(t) {
              let r,
                i,
                a,
                n = [],
                s = []; for (r = 0; r < t.sps.length; r++)i = t.sps[r], a = i.byteLength, n.push(a >>> 8 & 255), n.push(255 & a), n = n.concat(Array.prototype.slice.call(i)); for (r = 0; r < t.pps.length; r++)i = t.pps[r], a = i.byteLength, s.push(a >>> 8 & 255), s.push(255 & a), s = s.concat(Array.prototype.slice.call(i)); let o = e.box(e.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | t.sps.length].concat(n).concat([t.pps.length]).concat(s))),
                l = t.width,
                u = t.height; return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])));
            } }, { key: 'esds', value(e) { const t = e.config.length; return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2])); } }, { key: 'mp4a', value(t) { const r = t.audiosamplerate; return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t))); } }, { key: 'mp3', value(t) { const r = t.audiosamplerate; return e.box(e.types['.mp3'], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0])); } }, { key: 'stsd', value(t) { return t.type === 'audio' ? t.isAAC || t.codec !== 'mp3' ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t)); } }, { key: 'tkhd',
            value(t) {
              let r = t.id,
                i = t.duration * t.timescale,
                a = t.width,
                n = t.height; return e.box(e.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, n >> 8 & 255, 255 & n, 0, 0]));
            } }, { key: 'traf',
            value(t, r) {
              let i = e.sdtp(t),
                a = t.id; return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), e.box(e.types.tfdt, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r])), e.trun(t, i.length + 16 + 16 + 8 + 16 + 8 + 8), i);
            } }, { key: 'trak', value(t) { return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t)); } }, { key: 'trex', value(t) { const r = t.id; return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1])); } }, { key: 'trun',
            value(t, r) {
              let i,
                a,
                n,
                s,
                o,
                l,
                u = t.samples || [],
                d = u.length,
                h = 12 + 16 * d,
                c = new Uint8Array(h);
              for (r += 8 + h, c.set([0, 0, 15, 1, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < d; i++)a = u[i], n = a.duration, s = a.size, o = a.flags, l = a.cts, c.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i); return e.box(e.types.trun, c);
            } }, { key: 'initSegment',
            value(t) {
              e.types || e.init(); let r,
                i = e.moov(t); return r = new Uint8Array(e.FTYP.byteLength + i.byteLength), r.set(e.FTYP), r.set(i, e.FTYP.byteLength), r;
            } }]), e;
        }()); r.default = n;
    }, {}],
    40: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let n = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        s = e(31),
        o = i(s),
        l = e(30),
        u = i(l),
        d = e(47),
        h = e(39),
        c = i(h),
        f = e(28),
        v = (function () {
          function e(t, r, i, n) { a(this, e), this.observer = t, this.id = r, this.config = i, this.typeSupported = n, this.ISGenerated = !1, this.PES2MP4SCALEFACTOR = 4, this.PES_TIMESCALE = 9e4, this.MP4_TIMESCALE = this.PES_TIMESCALE / this.PES2MP4SCALEFACTOR; } return n(e, [{ key: 'destroy', value() {} }, { key: 'insertDiscontinuity', value() { this._initPTS = this._initDTS = void 0; } }, { key: 'switchLevel', value() { this.ISGenerated = !1; } }, { key: 'remux', value(e, t, r, i, a, n, s, o, l) { if (this.level = e, this.sn = t, this.ISGenerated || this.generateIS(r, i, s), this.ISGenerated) if (r.samples.length) { const d = this.remuxAudio(r, s, o, l); if (i.samples.length) { let h = void 0; d && (h = d.endPTS - d.startPTS), this.remuxVideo(i, s, o, h); } } else { let c = void 0; i.samples.length && (c = this.remuxVideo(i, s, o)), c && r.codec && this.remuxEmptyAudio(r, s, o, c); }a.samples.length && this.remuxID3(a, s), n.samples.length && this.remuxText(n, s), this.observer.trigger(u.default.FRAG_PARSED, { id: this.id, level: this.level, sn: this.sn }); } }, { key: 'generateIS',
            value(e, t, r) {
              let i,
                a,
                n = this.observer,
                s = e.samples,
                o = t.samples,
                l = this.PES_TIMESCALE,
                h = this.typeSupported,
                v = 'audio/mp4',
                g = {},
                p = { id: this.id, level: this.level, sn: this.sn, tracks: g, unique: !1 },
                y = void 0 === this._initPTS; y && (i = a = 1 / 0), e.config && s.length && (e.timescale = e.audiosamplerate, e.timescale * e.duration > Math.pow(2, 32) && !(function () { const t = function r(e, t) { return t ? r(t, e % t) : e; }; e.timescale = e.audiosamplerate / t(e.audiosamplerate, e.isAAC ? 1024 : 1152); }()), d.logger.log(`audio mp4 timescale :${e.timescale}`), e.isAAC || (h.mpeg === !0 ? (v = 'audio/mpeg', e.codec = '') : h.mp3 === !0 && (e.codec = 'mp3')), g.audio = { container: v, codec: e.codec, initSegment: c.default.initSegment([e]), metadata: { channelCount: e.channelCount } }, y && (i = a = s[0].pts - l * r)), t.sps && t.pps && o.length && (t.timescale = this.MP4_TIMESCALE, g.video = { container: 'video/mp4', codec: t.codec, initSegment: c.default.initSegment([t]), metadata: { width: t.width, height: t.height } }, y && (i = Math.min(i, o[0].pts - l * r), a = Math.min(a, o[0].dts - l * r), this.observer.trigger(u.default.INIT_PTS_FOUND, { initPTS: i }))), Object.keys(g).length ? (n.trigger(u.default.FRAG_PARSING_INIT_SEGMENT, p), this.ISGenerated = !0, y && (this._initPTS = i, this._initDTS = a)) : n.trigger(u.default.ERROR, { type: f.ErrorTypes.MEDIA_ERROR, id: this.id, details: f.ErrorDetails.FRAG_PARSING_ERROR, fatal: !1, reason: 'no audio/video samples found' });
            } }, { key: 'remuxVideo',
            value(e, t, r, i) {
              let a,
                n,
                s,
                o,
                l,
                h,
                f,
                v,
                g = 8,
                p = this.PES_TIMESCALE,
                y = this.PES2MP4SCALEFACTOR,
                m = e.samples,
                E = [],
                T = this._PTSNormalize,
                b = this._initDTS; m.sort((e, t) => e.dts - t.dts); const k = m.reduce((e, t) => Math.max(Math.min(e, t.pts - t.dts), -18e3), 0); if (k < 0) { d.logger.warn(`PTS < DTS detected in video samples, shifting DTS by ${Math.round(k / 90)} ms to overcome this issue`); for (let _ = 0; _ < m.length; _++)m[_].dts += k; } let A = void 0; A = r ? this.nextAvcDts : t * p; let R = m[0]; l = Math.max(T(R.dts - b, A), 0), o = Math.max(T(R.pts - b, A), 0); const S = Math.round((l - A) / 90); r && S && (S > 1 ? d.logger.log(`AVC:${S} ms hole between fragments detected,filling it`) : S < -1 && d.logger.log(`AVC:${-S} ms overlapping between fragments detected`), l = A, m[0].dts = l + b, o = Math.max(o - S, A), m[0].pts = o + b, d.logger.log(`Video/PTS/DTS adjusted: ${Math.round(o / 90)}/${Math.round(l / 90)},delta:${S} ms`)), h = l, R = m[m.length - 1], v = Math.max(T(R.dts - b, A), 0), f = Math.max(T(R.pts - b, A), 0), f = Math.max(f, v); let L = navigator.vendor,
                w = navigator.userAgent,
                D = L && L.indexOf('Apple') > -1 && w && !w.match('CriOS'); D && (a = Math.round((v - l) / (y * (m.length - 1)))); for (let O = 0; O < m.length; O++) { const I = m[O]; D ? I.dts = l + O * y * a : (I.dts = Math.max(T(I.dts - b, A), l), I.dts = Math.round(I.dts / y) * y), I.pts = Math.max(T(I.pts - b, A), I.dts), I.pts = Math.round(I.pts / y) * y; }n = new Uint8Array(e.len + 4 * e.nbNalu + 8); const C = new DataView(n.buffer); C.setUint32(0, n.byteLength), n.set(c.default.types.mdat, 4); for (let P = 0; P < m.length; P++) {
                for (var x = m[P], M = 0, F = void 0; x.units.units.length;) { const N = x.units.units.shift(); C.setUint32(g, N.data.byteLength), g += 4, n.set(N.data, g), g += N.data.byteLength, M += 4 + N.data.byteLength; } if (D)F = Math.max(0, a * Math.round((x.pts - x.dts) / (y * a))); else {
                  if (P < m.length - 1)a = m[P + 1].dts - x.dts; else {
                    let U = this.config,
                      B = x.dts - m[P > 0 ? P - 1 : P].dts; if (U.stretchShortVideoTrack) {
                      let G = U.maxBufferHole,
                        j = U.maxSeekHole,
                        H = Math.floor(Math.min(G, j) * p),
                        V = (i ? o + i * p : this.nextAacPts) - x.pts; V > H ? (a = V - B, a < 0 && (a = B), d.logger.log(`It is approximately ${V / 90} ms to the next segment; using duration ${a / 90} ms for the last video frame.`)) : a = B;
                    } else a = B;
                  }a /= y, F = Math.round((x.pts - x.dts) / y);
                }E.push({ size: M, duration: a, cts: F, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: x.key ? 2 : 1, isNonSync: x.key ? 0 : 1 } });
              } this.nextAvcDts = v + a * y; const K = e.dropped; if (e.len = 0, e.nbNalu = 0, e.dropped = 0, E.length && navigator.userAgent.toLowerCase().indexOf('chrome') > -1) { const W = E[0].flags; W.dependsOn = 2, W.isNonSync = 0; }e.samples = E, s = c.default.moof(e.sequenceNumber++, l / y, e), e.samples = []; const Y = { id: this.id, level: this.level, sn: this.sn, data1: s, data2: n, startPTS: o / p, endPTS: (f + y * a) / p, startDTS: l / p, endDTS: this.nextAvcDts / p, type: 'video', nb: E.length, dropped: K }; return this.observer.trigger(u.default.FRAG_PARSING_DATA, Y), Y;
            } }, { key: 'remuxAudio',
            value(e, t, r, i) {
              let a,
                n,
                s,
                l,
                h,
                f,
                v,
                g,
                p,
                y,
                m,
                E,
                T,
                b,
                k,
                _,
                A = this.PES_TIMESCALE,
                R = e.timescale,
                S = A / R,
                L = e.timescale * (e.isAAC ? 1024 : 1152) / e.audiosamplerate,
                w = L * S,
                D = this._PTSNormalize,
                O = this._initDTS,
                I = 8,
                C = [],
                P = []; if (e.samples.sort((e, t) => e.pts - t.pts), P = e.samples, _ = this.nextAacPts, r |= P.length && _ && (Math.abs(t - _ / A) < 0.1 || Math.abs(P[0].pts - _ - O) < 20 * w), r || (_ = t * A), i && e.isAAC) {
                for (let x = 0, M = _; x < P.length;) {
                  let F = P[x],
                    N = D(F.pts - O, _),
                    U = N - M; if (U <= -w)d.logger.warn(`Dropping 1 audio frame @ ${Math.round(M / 90) / 1e3}s due to ${Math.round(Math.abs(U / 90))} ms overlap.`), P.splice(x, 1), e.len -= F.unit.length; else if (U >= w) { const B = Math.round(U / w); d.logger.warn(`Injecting ${B} audio frame @ ${Math.round(M / 90) / 1e3}s due to ${Math.round(U / 90)} ms gap.`); for (let G = 0; G < B; G++)k = M + O, k = Math.max(k, O), b = o.default.getSilentFrame(e.channelCount), b || (d.logger.log('Unable to get silent frame for given audio codec; duplicating last frame instead.'), b = F.unit.subarray()), P.splice(x, 0, { unit: b, pts: k, dts: k }), e.len += b.length, M += w, x += 1; F.pts = F.dts = M + O, M += w, x += 1; } else Math.abs(U) > 0.1 * w, M += w, x === 0 ? F.pts = F.dts = O + _ : F.pts = F.dts = P[x - 1].pts + w, x += 1;
                }
              } for (;P.length;) {
                if (n = P.shift(), l = n.unit, y = n.pts - O, m = n.dts - O, void 0 !== p)E = D(y, p), T = D(m, p), s.duration = Math.round((T - p) / S); else {
                  E = D(y, _), T = D(m, _); let j = Math.round(1e3 * (E - _) / A),
                    H = 0; if (r && j) { if (j > 0)H = Math.round((E - _) / w), d.logger.log(`${j} ms hole between AAC samples detected,filling it`), H > 0 && (b = o.default.getSilentFrame(e.channelCount), b || (b = l.subarray()), e.len += H * b.length); else if (j < -12) { d.logger.log(`${-j} ms overlapping between AAC samples detected, drop frame`), e.len -= l.byteLength; continue; }E = T = _; } if (v = Math.max(0, E), g = Math.max(0, T), !(e.len > 0)) return; h = new Uint8Array(e.len + 8), a = new DataView(h.buffer), a.setUint32(0, h.byteLength), h.set(c.default.types.mdat, 4); for (let V = 0; V < H; V++)k = E - (H - V) * w, b = o.default.getSilentFrame(e.channelCount), b || (d.logger.log('Unable to get silent frame for given audio codec; duplicating this frame instead.'), b = l.subarray()), h.set(b, I), I += b.byteLength, s = { size: b.byteLength, cts: 0, duration: e.isAAC ? 1024 : 1152, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 } }, C.push(s);
                }h.set(l, I), I += l.byteLength, s = { size: l.byteLength, cts: 0, duration: 0, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 } }, C.push(s), p = T;
              } let K = 0,
                W = C.length; if (W >= 2 && (K = C[W - 2].duration, s.duration = K), W) { this.nextAacPts = E + S * K, e.len = 0, e.samples = C, f = c.default.moof(e.sequenceNumber++, g / S, e), e.samples = []; const Y = { id: this.id, level: this.level, sn: this.sn, data1: f, data2: h, startPTS: v / A, endPTS: this.nextAacPts / A, startDTS: g / A, endDTS: (T + S * K) / A, type: 'audio', nb: W }; return this.observer.trigger(u.default.FRAG_PARSING_DATA, Y), Y; } return null;
            } }, { key: 'remuxEmptyAudio',
            value(e, t, r, i) {
              let a = this.PES_TIMESCALE,
                n = e.timescale ? e.timescale : e.audiosamplerate,
                s = a / n,
                l = this.nextAacPts,
                u = (void 0 !== l ? l : i.startDTS * a) + this._initDTS,
                h = i.endDTS * a + this._initDTS,
                c = 1024,
                f = s * c,
                v = Math.ceil((h - u) / f),
                g = o.default.getSilentFrame(e.channelCount); if (d.logger.warn('remux empty Audio'), !g) return void d.logger.trace('Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!'); for (var p = [], y = 0; y < v; y++) { const m = u + y * f; p.push({ unit: g, pts: m, dts: m }), e.len += g.length; }e.samples = p, this.remuxAudio(e, t, r);
            } }, { key: 'remuxID3',
            value(e, t) {
              let r,
                i = e.samples.length; if (i) { for (let a = 0; a < i; a++)r = e.samples[a], r.pts = (r.pts - this._initPTS) / this.PES_TIMESCALE, r.dts = (r.dts - this._initDTS) / this.PES_TIMESCALE; this.observer.trigger(u.default.FRAG_PARSING_METADATA, { id: this.id, level: this.level, sn: this.sn, samples: e.samples }); }e.samples = [], t = t;
            } }, { key: 'remuxText',
            value(e, t) {
              e.samples.sort((e, t) => e.pts - t.pts); let r,
                i = e.samples.length; if (i) { for (let a = 0; a < i; a++)r = e.samples[a], r.pts = (r.pts - this._initPTS) / this.PES_TIMESCALE; this.observer.trigger(u.default.FRAG_PARSING_USERDATA, { id: this.id, level: this.level, sn: this.sn, samples: e.samples }); }e.samples = [], t = t;
            } }, { key: '_PTSNormalize', value(e, t) { let r; if (void 0 === t) return e; for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;)e += r; return e; } }, { key: 'passthrough', get() { return !1; } }]), e;
        }()); r.default = v;
    }, { 28: 28, 30: 30, 31: 31, 39: 39, 47: 47 }],
    41: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let n = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        s = e(30),
        o = i(s),
        l = (function () {
          function e(t, r) { a(this, e), this.observer = t, this.id = r, this.ISGenerated = !1; } return n(e, [{ key: 'destroy', value() {} }, { key: 'insertDiscontinuity', value() {} }, { key: 'switchLevel', value() { this.ISGenerated = !1; } }, { key: 'remux',
            value(e, t, r, i, a, n) {
              const s = this.observer; if (!this.ISGenerated) {
                let l = {},
                  u = { id: this.id, tracks: l, unique: !0 },
                  d = t,
                  h = d.codec; h && (u.tracks.video = { container: d.container, codec: h, metadata: { width: d.width, height: d.height } }), d = e, h = d.codec, h && (u.tracks.audio = { container: d.container, codec: h, metadata: { channelCount: d.channelCount } }), this.ISGenerated = !0, s.trigger(o.default.FRAG_PARSING_INIT_SEGMENT, u);
              }s.trigger(o.default.FRAG_PARSING_DATA, { id: this.id, data1: n, startPTS: a, startDTS: a, type: 'audiovideo', nb: 1, dropped: 0 });
            } }, { key: 'passthrough', get() { return !0; } }]), e;
        }()); r.default = l;
    }, { 30: 30 }],
    42: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = /^(\d+)x(\d+)$/,
        s = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
        o = (function () {
          function e(t) { i(this, e), typeof t === 'string' && (t = e.parseAttrList(t)); for (const r in t)t.hasOwnProperty(r) && (this[r] = t[r]); } return a(e, [{ key: 'decimalInteger', value(e) { const t = parseInt(this[e], 10); return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t; } }, { key: 'hexadecimalInteger', value(e) { if (this[e]) { let t = (this[e] || '0x').slice(2); t = (1 & t.length ? '0' : '') + t; for (var r = new Uint8Array(t.length / 2), i = 0; i < t.length / 2; i++)r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16); return r; } return null; } }, { key: 'hexadecimalIntegerAsNumber', value(e) { const t = parseInt(this[e], 16); return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t; } }, { key: 'decimalFloatingPoint', value(e) { return parseFloat(this[e]); } }, { key: 'enumeratedString', value(e) { return this[e]; } }, { key: 'decimalResolution', value(e) { const t = n.exec(this[e]); if (t !== null) return { width: parseInt(t[1], 10), height: parseInt(t[2], 10) }; } }], [{ key: 'parseAttrList',
            value(e) {
              let t,
                r = {}; for (s.lastIndex = 0; (t = s.exec(e)) !== null;) {
                let i = t[2],
                  a = '"'; i.indexOf(a) === 0 && i.lastIndexOf(a) === i.length - 1 && (i = i.slice(1, -1)), r[t[1]] = i;
              } return r;
            } }]), e;
        }()); r.default = o;
    }, {}],
    43: [function (e, t, r) {
      const i = { search(e, t) { for (let r = 0, i = e.length - 1, a = null, n = null; r <= i;) { a = (r + i) / 2 | 0, n = e[a]; const s = t(n); if (s > 0)r = a + 1; else { if (!(s < 0)) return n; i = a - 1; } } return null; } }; t.exports = i;
    }, {}],
    44: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 },
        s = function (e) { let t = e; return n.hasOwnProperty(e) && (t = n[e]), String.fromCharCode(t); },
        o = 15,
        l = 32,
        u = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
        d = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
        h = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
        c = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
        f = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'black', 'transparent'],
        v = { verboseFilter: { DATA: 3, DEBUG: 3, INFO: 2, WARNING: 2, TEXT: 1, ERROR: 0 }, time: null, verboseLevel: 0, setTime(e) { this.time = e; }, log(e, t) { const r = this.verboseFilter[e]; this.verboseLevel >= r && console.log(`${this.time.toFixed(3)} [${e}] ${t}`); } },
        g = function (e) { for (var t = [], r = 0; r < e.length; r++)t.push(e[r].toString(16)); return t; },
        p = (function () { function e(t, r, a, n, s) { i(this, e), this.foreground = t || 'white', this.underline = r || !1, this.italics = a || !1, this.background = n || 'black', this.flash = s || !1; } return a(e, [{ key: 'reset', value() { this.foreground = 'white', this.underline = !1, this.italics = !1, this.background = 'black', this.flash = !1; } }, { key: 'setStyles', value(e) { for (let t = ['foreground', 'underline', 'italics', 'background', 'flash'], r = 0; r < t.length; r++) { const i = t[r]; e.hasOwnProperty(i) && (this[i] = e[i]); } } }, { key: 'isDefault', value() { return this.foreground === 'white' && !this.underline && !this.italics && this.background === 'black' && !this.flash; } }, { key: 'equals', value(e) { return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash; } }, { key: 'copy', value(e) { this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash; } }, { key: 'toString', value() { return `color=${this.foreground}, underline=${this.underline}, italics=${this.italics}, background=${this.background}, flash=${this.flash}`; } }]), e; }()),
        y = (function () { function e(t, r, a, n, s, o) { i(this, e), this.uchar = t || ' ', this.penState = new p(r, a, n, s, o); } return a(e, [{ key: 'reset', value() { this.uchar = ' ', this.penState.reset(); } }, { key: 'setChar', value(e, t) { this.uchar = e, this.penState.copy(t); } }, { key: 'setPenState', value(e) { this.penState.copy(e); } }, { key: 'equals', value(e) { return this.uchar === e.uchar && this.penState.equals(e.penState); } }, { key: 'copy', value(e) { this.uchar = e.uchar, this.penState.copy(e.penState); } }, { key: 'isEmpty', value() { return this.uchar === ' ' && this.penState.isDefault(); } }]), e; }()),
        m = (function () { function e() { i(this, e), this.chars = []; for (let t = 0; t < l; t++) this.chars.push(new y()); this.pos = 0, this.currPenState = new p(); } return a(e, [{ key: 'equals', value(e) { for (var t = !0, r = 0; r < l; r++) if (!this.chars[r].equals(e.chars[r])) { t = !1; break; } return t; } }, { key: 'copy', value(e) { for (let t = 0; t < l; t++) this.chars[t].copy(e.chars[t]); } }, { key: 'isEmpty', value() { for (var e = !0, t = 0; t < l; t++) if (!this.chars[t].isEmpty()) { e = !1; break; } return e; } }, { key: 'setCursor', value(e) { this.pos !== e && (this.pos = e), this.pos < 0 ? (v.log('ERROR', `Negative cursor position ${this.pos}`), this.pos = 0) : this.pos > l && (v.log('ERROR', `Too large cursor position ${this.pos}`), this.pos = l); } }, { key: 'moveCursor', value(e) { const t = this.pos + e; if (e > 1) for (let r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState); this.setCursor(t); } }, { key: 'backSpace', value() { this.moveCursor(-1), this.chars[this.pos].setChar(' ', this.currPenState); } }, { key: 'insertChar', value(e) { e >= 144 && this.backSpace(); const t = s(e); return this.pos >= l ? void v.log('WARNING', `Cannot insert ${e.toString(16)} (${t}) at position ${this.pos}. Skipping it!`) : (this.chars[this.pos].setChar(t, this.currPenState), void this.moveCursor(1)); } }, { key: 'clearFromPos', value(e) { let t; for (t = e; t < l; t++) this.chars[t].reset(); } }, { key: 'clear', value() { this.clearFromPos(0), this.pos = 0, this.currPenState.reset(); } }, { key: 'clearToEndOfRow', value() { this.clearFromPos(this.pos); } }, { key: 'getTextString', value() { for (var e = [], t = !0, r = 0; r < l; r++) { const i = this.chars[r].uchar; i !== ' ' && (t = !1), e.push(i); } return t ? '' : e.join(''); } }, { key: 'setPenStyles', value(e) { this.currPenState.setStyles(e); const t = this.chars[this.pos]; t.setPenState(this.currPenState); } }]), e; }()),
        E = (function () {
          function e() { i(this, e), this.rows = []; for (let t = 0; t < o; t++) this.rows.push(new m()); this.currRow = o - 1, this.nrRollUpRows = null, this.reset(); } return a(e, [{ key: 'reset', value() { for (let e = 0; e < o; e++) this.rows[e].clear(); this.currRow = o - 1; } }, { key: 'equals', value(e) { for (var t = !0, r = 0; r < o; r++) if (!this.rows[r].equals(e.rows[r])) { t = !1; break; } return t; } }, { key: 'copy', value(e) { for (let t = 0; t < o; t++) this.rows[t].copy(e.rows[t]); } }, { key: 'isEmpty', value() { for (var e = !0, t = 0; t < o; t++) if (!this.rows[t].isEmpty()) { e = !1; break; } return e; } }, { key: 'backSpace', value() { const e = this.rows[this.currRow]; e.backSpace(); } }, { key: 'clearToEndOfRow', value() { const e = this.rows[this.currRow]; e.clearToEndOfRow(); } }, { key: 'insertChar', value(e) { const t = this.rows[this.currRow]; t.insertChar(e); } }, { key: 'setPen', value(e) { const t = this.rows[this.currRow]; t.setPenStyles(e); } }, { key: 'moveCursor', value(e) { const t = this.rows[this.currRow]; t.moveCursor(e); } }, { key: 'setCursor', value(e) { v.log('INFO', `setCursor: ${e}`); const t = this.rows[this.currRow]; t.setCursor(e); } }, { key: 'setPAC',
            value(e, t) {
              v.log('INFO', `pacData = ${JSON.stringify(e)}`); let r = e.row - 1; if (this.nrRollUpRows && r < this.nrRollUpRows - 1 && (r = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== r) {
                for (var i = 0; i < o; i++) this.rows[i].clear(); let a = this.currRow + 1 - this.nrRollUpRows,
                  n = t.rows[a].cueStartTime; if (n && n < v.time) for (i = 0; i < this.nrRollUpRows; i++) this.rows[r - this.nrRollUpRows + i + 1].copy(t.rows[a + i]);
              } this.currRow = r; const s = this.rows[this.currRow]; if (e.indent !== null) {
                let l = e.indent,
                  u = Math.max(l - 1, 0); s.setCursor(e.indent), e.color = s.chars[u].penState.foreground;
              } const d = { foreground: e.color, underline: e.underline, italics: e.italics, background: 'black', flash: !1 }; this.setPen(d);
            } }, { key: 'setBkgData', value(e) { v.log('INFO', `bkgData = ${JSON.stringify(e)}`), this.backSpace(), this.setPen(e), this.insertChar(32); } }, { key: 'setRollUpRows', value(e) { this.nrRollUpRows = e; } }, { key: 'rollUp',
            value() {
              if (this.nrRollUpRows === null) return void v.log('DEBUG', 'roll_up but nrRollUpRows not set yet'); v.log('TEXT', this.getDisplayText()); let e = this.currRow + 1 - this.nrRollUpRows,
                t = this.rows.splice(e, 1)[0]; t.clear(), this.rows.splice(this.currRow, 0, t), v.log('INFO', 'Rolling up');
            } }, { key: 'getDisplayText', value(e) { e = e || !1; for (var t = [], r = '', i = -1, a = 0; a < o; a++) { const n = this.rows[a].getTextString(); n && (i = a + 1, e ? t.push(`Row ${i}: '${n}'`) : t.push(n.trim())); } return t.length > 0 && (r = e ? `[${t.join(' | ')}]` : t.join('\n')), r; } }, { key: 'getTextAndFormat', value() { return this.rows; } }]), e;
        }()),
        T = (function () {
          function e(t, r) { i(this, e), this.chNr = t, this.outputFilter = r, this.mode = null, this.verbose = 0, this.displayedMemory = new E(), this.nonDisplayedMemory = new E(), this.lastOutputScreen = new E(), this.currRollUpRow = this.displayedMemory.rows[o - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null; } return a(e, [{ key: 'reset', value() { this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[o - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null; } }, { key: 'getHandler', value() { return this.outputFilter; } }, { key: 'setHandler', value(e) { this.outputFilter = e; } }, { key: 'setPAC', value(e) { this.writeScreen.setPAC(e, this.lastOutputScreen); } }, { key: 'setBkgData', value(e) { this.writeScreen.setBkgData(e); } }, { key: 'setMode', value(e) { e !== this.mode && (this.mode = e, v.log('INFO', `MODE=${e}`), this.mode === 'MODE_POP-ON' ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset(), this.lastOutputScreen.reset()), this.mode !== 'MODE_ROLL-UP' && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e); } }, { key: 'insertChars', value(e) { for (let t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]); const r = this.writeScreen === this.displayedMemory ? 'DISP' : 'NON_DISP'; v.log('INFO', `${r}: ${this.writeScreen.getDisplayText(!0)}`), this.mode !== 'MODE_PAINT-ON' && this.mode !== 'MODE_ROLL-UP' || (v.log('TEXT', `DISPLAYED: ${this.displayedMemory.getDisplayText(!0)}`), this.outputDataUpdate()); } }, { key: 'ccRCL', value() { v.log('INFO', 'RCL - Resume Caption Loading'), this.setMode('MODE_POP-ON'); } }, { key: 'ccBS', value() { v.log('INFO', 'BS - BackSpace'), this.mode !== 'MODE_TEXT' && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate()); } }, { key: 'ccAOF', value() {} }, { key: 'ccAON', value() {} }, { key: 'ccDER', value() { v.log('INFO', 'DER- Delete to End of Row'), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate(); } }, { key: 'ccRU', value(e) { v.log('INFO', `RU(${e}) - Roll Up`), this.writeScreen = this.displayedMemory, this.setMode('MODE_ROLL-UP'), this.writeScreen.setRollUpRows(e); } }, { key: 'ccFON', value() { v.log('INFO', 'FON - Flash On'), this.writeScreen.setPen({ flash: !0 }); } }, { key: 'ccRDC', value() { v.log('INFO', 'RDC - Resume Direct Captioning'), this.setMode('MODE_PAINT-ON'); } }, { key: 'ccTR', value() { v.log('INFO', 'TR'), this.setMode('MODE_TEXT'); } }, { key: 'ccRTD', value() { v.log('INFO', 'RTD'), this.setMode('MODE_TEXT'); } }, { key: 'ccEDM', value() { v.log('INFO', 'EDM - Erase Displayed Memory'), this.displayedMemory.reset(), this.outputDataUpdate(); } }, { key: 'ccCR', value() { v.log('CR - Carriage Return'), this.writeScreen.rollUp(), this.outputDataUpdate(); } }, { key: 'ccENM', value() { v.log('INFO', 'ENM - Erase Non-displayed Memory'), this.nonDisplayedMemory.reset(); } }, { key: 'ccEOC', value() { if (v.log('INFO', 'EOC - End Of Caption'), this.mode === 'MODE_POP-ON') { const e = this.displayedMemory; this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, v.log('TEXT', `DISP: ${this.displayedMemory.getDisplayText()}`); } this.outputDataUpdate(); } }, { key: 'ccTO', value(e) { v.log('INFO', `TO(${e}) - Tab Offset`), this.writeScreen.moveCursor(e); } }, { key: 'ccMIDROW',
            value(e) {
              const t = { flash: !1 }; if (t.underline = e % 2 === 1, t.italics = e >= 46, t.italics)t.foreground = 'white'; else {
                let r = Math.floor(e / 2) - 16,
                  i = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta']; t.foreground = i[r];
              }v.log('INFO', `MIDROW: ${JSON.stringify(t)}`), this.writeScreen.setPen(t);
            } }, { key: 'outputDataUpdate', value() { const e = v.time; e !== null && this.outputFilter && (this.outputFilter.updateData && this.outputFilter.updateData(e, this.displayedMemory), this.cueStartTime !== null || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory)); } }, { key: 'cueSplitAtTime', value(e) { this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e)); } }]), e;
        }()),
        b = (function () {
          function e(t, r, a) { i(this, e), this.field = t || 1, this.outputs = [r, a], this.channels = [new T(1, r), new T(2, a)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = { padding: 0, char: 0, cmd: 0, other: 0 }; } return a(e, [{ key: 'getHandler', value(e) { return this.channels[e].getHandler(); } }, { key: 'setHandler', value(e, t) { this.channels[e].setHandler(t); } }, { key: 'addData',
            value(e, t) {
              let r,
                i,
                a,
                n = !1; this.lastTime = e, v.setTime(e); for (let s = 0; s < t.length; s += 2) if (i = 127 & t[s], a = 127 & t[s + 1], i !== 0 || a !== 0) { if (v.log('DATA', `[${g([t[s], t[s + 1]])}] -> (${g([i, a])})`), r = this.parseCmd(i, a), r || (r = this.parseMidrow(i, a)), r || (r = this.parsePAC(i, a)), r || (r = this.parseBackgroundAttributes(i, a)), !r && (n = this.parseChars(i, a))) if (this.currChNr && this.currChNr >= 0) { const o = this.channels[this.currChNr - 1]; o.insertChars(n); } else v.log('WARNING', 'No channel found yet. TEXT-MODE?'); r ? this.dataCounters.cmd += 2 : n ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, v.log('WARNING', `Couldn't parse cleaned data ${g([i, a])} orig: ${g([t[s], t[s + 1]])}`)); } else this.dataCounters.padding += 2;
            } }, { key: 'parseCmd',
            value(e, t) {
              let r = null,
                i = (e === 20 || e === 28) && t >= 32 && t <= 47,
                a = (e === 23 || e === 31) && t >= 33 && t <= 35; if (!i && !a) return !1; if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, v.log('DEBUG', `Repeated command (${g([e, t])}) is dropped`), !0; r = e === 20 || e === 23 ? 1 : 2; const n = this.channels[r - 1]; return e === 20 || e === 28 ? t === 32 ? n.ccRCL() : t === 33 ? n.ccBS() : t === 34 ? n.ccAOF() : t === 35 ? n.ccAON() : t === 36 ? n.ccDER() : t === 37 ? n.ccRU(2) : t === 38 ? n.ccRU(3) : t === 39 ? n.ccRU(4) : t === 40 ? n.ccFON() : t === 41 ? n.ccRDC() : t === 42 ? n.ccTR() : t === 43 ? n.ccRTD() : t === 44 ? n.ccEDM() : t === 45 ? n.ccCR() : t === 46 ? n.ccENM() : t === 47 && n.ccEOC() : n.ccTO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0;
            } }, { key: 'parseMidrow', value(e, t) { let r = null; if ((e === 17 || e === 25) && t >= 32 && t <= 47) { if (r = e === 17 ? 1 : 2, r !== this.currChNr) return v.log('ERROR', 'Mismatch channel in midrow parsing'), !1; const i = this.channels[r - 1]; return i.ccMIDROW(t), v.log('DEBUG', `MIDROW (${g([e, t])})`), !0; } return !1; } }, { key: 'parsePAC',
            value(e, t) {
              let r = null,
                i = null,
                a = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127,
                n = (e === 16 || e === 24) && t >= 64 && t <= 95; if (!a && !n) return !1; if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0; r = e <= 23 ? 1 : 2, i = t >= 64 && t <= 95 ? r === 1 ? u[e] : h[e] : r === 1 ? d[e] : c[e]; let s = this.interpretPAC(i, t),
                o = this.channels[r - 1]; return o.setPAC(s), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0;
            } }, { key: 'interpretPAC',
            value(e, t) {
              let r = t,
                i = { color: null, italics: !1, indent: null, underline: !1, row: e }; return r = t > 95 ? t - 96 : t - 64, i.underline = (1 & r) === 1, r <= 13 ? i.color = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'white'][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = 'white') : i.indent = 4 * Math.floor((r - 16) / 2), i;
            } }, { key: 'parseChars',
            value(e, t) {
              let r = null,
                i = null,
                a = null; if (e >= 25 ? (r = 2, a = e - 8) : (r = 1, a = e), a >= 17 && a <= 19) { let n = t; n = a === 17 ? t + 80 : a === 18 ? t + 112 : t + 144, v.log('INFO', `Special char '${s(n)}' in channel ${r}`), i = [n]; } else e >= 32 && e <= 127 && (i = t === 0 ? [e] : [e, t]); if (i) { const o = g(i); v.log('DEBUG', `Char codes =  ${o.join(',')}`), this.lastCmdA = null, this.lastCmdB = null; } return i;
            } }, { key: 'parseBackgroundAttributes',
            value(e, t) {
              let r,
                i,
                a,
                n,
                s = (e === 16 || e === 24) && t >= 32 && t <= 47,
                o = (e === 23 || e === 31) && t >= 45 && t <= 47; return !(!s && !o) && (r = {}, e === 16 || e === 24 ? (i = Math.floor((t - 32) / 2), r.background = f[i], t % 2 === 1 && (r.background += '_semi')) : t === 45 ? r.background = 'transparent' : (r.foreground = 'black', t === 47 && (r.underline = !0)), a = e < 24 ? 1 : 2, n = this.channels[a - 1], n.setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0);
            } }, { key: 'reset', value() { for (let e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset(); this.lastCmdA = null, this.lastCmdB = null; } }, { key: 'cueSplitAtTime', value(e) { for (let t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e); } }]), e;
        }()); r.default = b;
    }, {}],
    45: [function (e, t, r) {
      const i = { newCue(e, t, r, i) { for (var a, n, s, o, l, u = window.VTTCue || window.TextTrackCue, d = 0; d < i.rows.length; d++) if (a = i.rows[d], s = !0, o = 0, l = '', !a.isEmpty()) { for (let h = 0; h < a.chars.length; h++)a.chars[h].uchar.match(/\s/) && s ? o++ : (l += a.chars[h].uchar, s = !1); a.cueStartTime = t, n = new u(t, r, l.trim()), o >= 16 ? o-- : o++, navigator.userAgent.match(/Firefox\//) ? n.line = d + 1 : n.line = d > 7 ? d - 2 : d + 1, n.align = 'left', n.position = Math.max(0, Math.min(100, 100 * (o / 32) + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), e.addCue(n); } } }; t.exports = i;
    }, {}],
    46: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = (function () { function e(t) { i(this, e), this.alpha_ = t ? Math.exp(Math.log(0.5) / t) : 0, this.estimate_ = 0, this.totalWeight_ = 0; } return a(e, [{ key: 'sample', value(e, t) { const r = Math.pow(this.alpha_, e); this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e; } }, { key: 'getTotalWeight', value() { return this.totalWeight_; } }, { key: 'getEstimate', value() { if (this.alpha_) { const e = 1 - Math.pow(this.alpha_, this.totalWeight_); return this.estimate_ / e; } return this.estimate_; } }]), e; }()); r.default = n;
    }, {}],
    47: [function (e, t, r) {
      function i() {} function a(e, t) { return t = `[${e}] > ${t}`; } function n(e) { const t = self.console[e]; return t ? function () { for (var r = arguments.length, i = Array(r), n = 0; n < r; n++)i[n] = arguments[n]; i[0] && (i[0] = a(e, i[0])), t.apply(self.console, i); } : i; } function s(e) { for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)r[i - 1] = arguments[i]; r.forEach((t) => { u[t] = e[t] ? e[t].bind(e) : n(t); }); }Object.defineProperty(r, '__esModule', { value: !0 }); var o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; },
        l = { trace: i, debug: i, log: i, warn: i, info: i, error: i },
        u = l; r.enableLogs = function (e) {
        if (e === !0 || (typeof e === 'undefined' ? 'undefined' : o(e)) === 'object') {
          s(e, 'debug', 'log', 'info', 'warn', 'error'); try { u.log(); } catch (t) { u = l; }
        } else u = l;
      }, r.logger = u;
    }, {}],
    48: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = (function () { function e() { i(this, e); } return a(e, null, [{ key: 'toString', value(e) { for (var t = '', r = e.length, i = 0; i < r; i++)t += `[${e.start(i).toFixed(3)},${e.end(i).toFixed(3)}]`; return t; } }]), e; }()); r.default = n;
    }, {}],
    49: [function (e, t, r) {
      Object.defineProperty(r, '__esModule', { value: !0 }), r.default = (function () {
        function e(e) { if (typeof e !== 'string') return !1; const t = n[e.toLowerCase()]; return !!t && e.toLowerCase(); } function t(e) { if (typeof e !== 'string') return !1; const t = s[e.toLowerCase()]; return !!t && e.toLowerCase(); } function r(e) { for (let t = 1; t < arguments.length; t++) { const r = arguments[t]; for (const i in r)e[i] = r[i]; } return e; } function i(i, n, s) {
          let o = this,
            l = (function () { if (typeof navigator !== 'undefined') return /MSIE\s8\.0/.test(navigator.userAgent); }()),
            u = {}; l ? o = document.createElement('custom') : u.enumerable = !0, o.hasBeenReset = !1; let d = '',
            h = !1,
            c = i,
            f = n,
            v = s,
            g = null,
            p = '',
            y = !0,
            m = 'auto',
            E = 'start',
            T = 50,
            b = 'middle',
            k = 50,
            _ = 'middle'; if (Object.defineProperty(o, 'id', r({}, u, { get() { return d; }, set(e) { d = `${e}`; } })), Object.defineProperty(o, 'pauseOnExit', r({}, u, { get() { return h; }, set(e) { h = !!e; } })), Object.defineProperty(o, 'startTime', r({}, u, { get() { return c; }, set(e) { if (typeof e !== 'number') throw new TypeError('Start time must be set to a number.'); c = e, this.hasBeenReset = !0; } })), Object.defineProperty(o, 'endTime', r({}, u, { get() { return f; }, set(e) { if (typeof e !== 'number') throw new TypeError('End time must be set to a number.'); f = e, this.hasBeenReset = !0; } })), Object.defineProperty(o, 'text', r({}, u, { get() { return v; }, set(e) { v = `${e}`, this.hasBeenReset = !0; } })), Object.defineProperty(o, 'region', r({}, u, { get() { return g; }, set(e) { g = e, this.hasBeenReset = !0; } })), Object.defineProperty(o, 'vertical', r({}, u, { get() { return p; }, set(t) { const r = e(t); if (r === !1) throw new SyntaxError('An invalid or illegal string was specified.'); p = r, this.hasBeenReset = !0; } })), Object.defineProperty(o, 'snapToLines', r({}, u, { get() { return y; }, set(e) { y = !!e, this.hasBeenReset = !0; } })), Object.defineProperty(o, 'line', r({}, u, { get() { return m; }, set(e) { if (typeof e !== 'number' && e !== a) throw new SyntaxError('An invalid number or illegal string was specified.'); m = e, this.hasBeenReset = !0; } })), Object.defineProperty(o, 'lineAlign', r({}, u, { get() { return E; }, set(e) { const r = t(e); if (!r) throw new SyntaxError('An invalid or illegal string was specified.'); E = r, this.hasBeenReset = !0; } })), Object.defineProperty(o, 'position', r({}, u, { get() { return T; }, set(e) { if (e < 0 || e > 100) throw new Error('Position must be between 0 and 100.'); T = e, this.hasBeenReset = !0; } })), Object.defineProperty(o, 'positionAlign', r({}, u, { get() { return b; }, set(e) { const r = t(e); if (!r) throw new SyntaxError('An invalid or illegal string was specified.'); b = r, this.hasBeenReset = !0; } })), Object.defineProperty(o, 'size', r({}, u, { get() { return k; }, set(e) { if (e < 0 || e > 100) throw new Error('Size must be between 0 and 100.'); k = e, this.hasBeenReset = !0; } })), Object.defineProperty(o, 'align', r({}, u, { get() { return _; }, set(e) { const r = t(e); if (!r) throw new SyntaxError('An invalid or illegal string was specified.'); _ = r, this.hasBeenReset = !0; } })), o.displayState = void 0, l) return o;
        } if (typeof window !== 'undefined' && window.VTTCue) return window.VTTCue; var a = 'auto',
          n = { '': !0, lr: !0, rl: !0 },
          s = { start: !0, middle: !0, end: !0, left: !0, right: !0 }; return i.prototype.getCueAsHTML = function () { const e = window.WebVTT; return e.convertCueToDOMTree(window, this.text); }, i;
      }());
    }, {}],
    50: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } function a() { this.window = window, this.state = 'INITIAL', this.buffer = '', this.decoder = new h(), this.regionList = []; } function n(e) { function t(e, t, r, i) { return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | i) / 1e3; } const r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/); return r ? r[3] ? t(r[1], r[2], r[3].replace(':', ''), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null; } function s() { this.values = Object.create(null); } function o(e, t, r, i) {
        const a = i ? e.split(i) : [e]; for (const n in a) {
          if (typeof a[n] === 'string') {
            const s = a[n].split(r); if (s.length === 2) {
              let o = s[0],
                l = s[1]; t(o, l);
            }
          }
        }
      } function l(e, t, r) {
        function i() { const t = n(e); if (t === null) throw new Error(`Malformed timestamp: ${u}`); return e = e.replace(/^[^\sa-zA-Z-]+/, ''), t; } function a(e, t) {
          const i = new s(); o(e, (e, t) => {
            switch (e) {
              case 'region':for (let a = r.length - 1; a >= 0; a--) if (r[a].id === t) { i.set(e, r[a].region); break; } break; case 'vertical':i.alt(e, t, ['rl', 'lr']); break; case 'line':var n = t.split(','),
                s = n[0]; i.integer(e, s), i.percent(e, s) && i.set('snapToLines', !1), i.alt(e, s, ['auto']), n.length === 2 && i.alt('lineAlign', n[1], ['start', f, 'end']); break; case 'position':n = t.split(','), i.percent(e, n[0]), n.length === 2 && i.alt('positionAlign', n[1], ['start', f, 'end', 'line-left', 'line-right', 'auto']); break; case 'size':i.percent(e, t); break; case 'align':i.alt(e, t, ['start', f, 'end', 'left', 'right']);
            }
          }, /:/, /\s/), t.region = i.get('region', null), t.vertical = i.get('vertical', ''); let a = i.get('line', 'auto'); a === 'auto' && c.line === -1 && (a = -1), t.line = a, t.lineAlign = i.get('lineAlign', 'start'), t.snapToLines = i.get('snapToLines', !0), t.size = i.get('size', 100), t.align = i.get('align', f); let n = i.get('position', 'auto'); n === 'auto' && c.position === 50 && (n = t.align === 'start' || t.align === 'left' ? 0 : t.align === 'end' || t.align === 'right' ? 100 : 50), t.position = n;
        } function l() { e = e.replace(/^\s+/, ''); } var u = e; if (l(), t.startTime = i(), l(), e.substr(0, 3) !== '-->') throw new Error(`Malformed time stamp (time stamps must be separated by '-->'): ${u}`); e = e.substr(3), l(), t.endTime = i(), l(), a(e, t);
      }Object.defineProperty(r, '__esModule', { value: !0 }); var u = e(49),
        d = i(u),
        h = function () { return { decode(e) { if (!e) return ''; if (typeof e !== 'string') throw new Error('Error - expected string data.'); return decodeURIComponent(encodeURIComponent(e)); } }; }; s.prototype = { set(e, t) { this.get(e) || t === '' || (this.values[e] = t); }, get(e, t, r) { return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t; }, has(e) { return e in this.values; }, alt(e, t, r) { for (let i = 0; i < r.length; ++i) if (t === r[i]) { this.set(e, t); break; } }, integer(e, t) { /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10)); }, percent(e, t) { let r; return !!((r = t.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (t = parseFloat(t), t >= 0 && t <= 100)) && (this.set(e, t), !0); } }; var c = new d.default(0, 0, 0),
        f = c.align === 'middle' ? 'middle' : 'center'; a.prototype = { parse(e) {
        function t(e) { return e.replace(/<br(?: \/)?>/gi, '\n'); } function r() {
          let e = a.buffer,
            r = 0; for (e = t(e); r < e.length && e[r] !== '\r' && e[r] !== '\n';)++r; const i = e.substr(0, r); return e[r] === '\r' && ++r, e[r] === '\n' && ++r, a.buffer = e.substr(r), i;
        } function i(e) { o(e, (e, t) => { switch (e) { case 'Region':console.log('parse region', t); } }, /:/); } var a = this; e && (a.buffer += a.decoder.decode(e, { stream: !0 })); try { let n; if (a.state === 'INITIAL') { if (!/\r\n|\n/.test(a.buffer)) return this; n = r(); const s = n.match(/^WEBVTT([ \t].*)?$/); if (!s || !s[0]) throw new Error('Malformed WebVTT signature.'); a.state = 'HEADER'; } for (let u = !1; a.buffer;) { if (!/\r\n|\n/.test(a.buffer)) return this; switch (u ? u = !1 : n = r(), a.state) { case 'HEADER':/:/.test(n) ? i(n) : n || (a.state = 'ID'); continue; case 'NOTE':n || (a.state = 'ID'); continue; case 'ID':if (/^NOTE($|[ \t])/.test(n)) { a.state = 'NOTE'; break; } if (!n) continue; if (a.cue = new d.default(0, 0, ''), a.state = 'CUE', n.indexOf('-->') === -1) { a.cue.id = n; continue; } case 'CUE':try { l(n, a.cue, a.regionList); } catch (h) { a.cue = null, a.state = 'BADCUE'; continue; }a.state = 'CUETEXT'; continue; case 'CUETEXT':var c = n.indexOf('-->') !== -1; if (!n || c && (u = !0)) { a.oncue && a.oncue(a.cue), a.cue = null, a.state = 'ID'; continue; }a.cue.text && (a.cue.text += '\n'), a.cue.text += n; continue; case 'BADCUE':n || (a.state = 'ID'); continue; } } } catch (h) { a.state === 'CUETEXT' && a.cue && a.oncue && a.oncue(a.cue), a.cue = null, a.state = a.state === 'INITIAL' ? 'BADWEBVTT' : 'BADCUE'; } return this;
      },
      flush() { const e = this; try { if (e.buffer += e.decoder.decode(), (e.cue || e.state === 'HEADER') && (e.buffer += '\n\n', e.parse()), e.state === 'INITIAL') throw new Error('Malformed WebVTT signature.'); } catch (t) { throw t; } return e.onflush && e.onflush(), this; } }, r.default = a;
    }, { 49: 49 }],
    51: [function (e, t, r) {
      function i(e) { return e && e.__esModule ? e : { default: e }; } let a = e(50),
        n = i(a),
        s = function (e) {
          let t = parseInt(e.substr(-3)),
            r = parseInt(e.substr(-6, 2)),
            i = parseInt(e.substr(-9, 2)),
            a = e.length > 9 ? parseInt(e.substr(0, e.indexOf(':'))) : 0; return isNaN(t) || isNaN(r) || isNaN(i) || isNaN(a) ? -1 : (t += 1e3 * r, t += 6e4 * i, t += 36e5 * a);
        },
        o = { parse(e, t, r, i, a) {
          let o = /\r\n|\n\r|\n|\r/g,
            l = String.fromCharCode.apply(null, new Uint8Array(e)).trim().replace(o, '\n').split('\n'),
            u = '00:00.000',
            d = 0,
            h = 0,
            c = 0,
            f = [],
            v = void 0,
            g = !0,
            p = new n.default(); p.oncue = function (e) { const t = h / 1e3; r.new && (c = r.start - t, r.new = !1), e.startTime = c + Math.max(0, e.startTime + t), e.endTime += c + t, e.text = decodeURIComponent(escape(e.text)), e.endTime > 0 && f.push(e); }, p.onparsingerror = function (e) { v = e; }, p.onflush = function () { return v && a ? void a(v) : void i(f); }, l.forEach((e) => { if (g) { if (e.startsWith('X-TIMESTAMP-MAP=')) { g = !1, e.substr(16).split(',').forEach((e) => { e.startsWith('LOCAL:') ? u = e.substr(6) : e.startsWith('MPEGTS:') && (d = parseInt(e.substr(7))); }); try { t = t < 0 ? t + 8589934592 : t, d -= t, h = s(u) + Math.floor(d / 90), h === -1 && (v = new Error(`Malformed X-TIMESTAMP-MAP: ${e}`)); } catch (r) { v = new Error(`Malformed X-TIMESTAMP-MAP: ${e}`); } return; }e === '' && (g = !1); }p.parse(`${e}\n`); }), p.flush();
        } }; t.exports = o;
    }, { 50: 50 }],
    52: [function (e, t, r) {
      function i(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }Object.defineProperty(r, '__esModule', { value: !0 }); let a = (function () { function e(e, t) { for (let r = 0; r < t.length; r++) { const i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i); } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }()),
        n = e(47),
        s = (function () {
          function e(t) { i(this, e), t && t.xhrSetup && (this.xhrSetup = t.xhrSetup); } return a(e, [{ key: 'destroy', value() { this.abort(), this.loader = null; } }, { key: 'abort', value() { const e = this.loader; e && e.readyState !== 4 && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null; } }, { key: 'load', value(e, t, r) { this.context = e, this.config = t, this.callbacks = r, this.stats = { trequest: performance.now(), retry: 0 }, this.retryDelay = t.retryDelay, this.loadInternal(); } }, { key: 'loadInternal',
            value() {
              let e,
                t = this.context; e = typeof XDomainRequest !== 'undefined' ? this.loader = new XDomainRequest() : this.loader = new XMLHttpRequest(), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.open('GET', t.url, !0), t.rangeEnd && e.setRequestHeader('Range', `bytes=${t.rangeStart}-${t.rangeEnd - 1}`), e.responseType = t.responseType; const r = this.stats; r.tfirst = 0, r.loaded = 0, this.xhrSetup && this.xhrSetup(e, t.url), this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send();
            } }, { key: 'readystatechange',
            value(e) {
              let t = e.currentTarget,
                r = t.readyState,
                i = this.stats,
                a = this.context,
                s = this.config; if (!i.aborted && (window.clearTimeout(this.requestTimeout), r >= 2 && (i.tfirst === 0 && (i.tfirst = Math.max(performance.now(), i.trequest), this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), s.timeout - (i.tfirst - i.trequest))), r === 4))) {
                const o = t.status; if (o >= 200 && o < 300) {
                  i.tload = Math.max(i.tfirst, performance.now()); let l = void 0,
                    u = void 0; a.responseType === 'arraybuffer' ? (l = t.response, u = l.byteLength) : (l = t.responseText, u = l.length), i.loaded = i.total = u; const d = { url: t.responseURL, data: l }; this.callbacks.onSuccess(d, i, a);
                } else i.retry >= s.maxRetry || o >= 400 && o < 499 ? (n.logger.error(`${o} while loading ${a.url}`), this.callbacks.onError({ code: o, text: t.statusText }, a)) : (n.logger.warn(`${o} while loading ${a.url}, retrying in ${this.retryDelay}...`), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, s.maxRetryDelay), i.retry++);
              }
            } }, { key: 'loadtimeout', value() { n.logger.warn(`timeout while loading ${this.context.url}`), this.callbacks.onTimeout(this.stats, this.context); } }, { key: 'loadprogress', value(e) { const t = this.stats; t.loaded = e.loaded, e.lengthComputable && (t.total = e.total); const r = this.callbacks.onProgress; r && r(t, this.context, null); } }]), e;
        }()); r.default = s;
    }, { 47: 47 }] }, {}, [35]))(35);
  }));
} });
