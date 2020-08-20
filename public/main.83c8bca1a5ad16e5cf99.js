!(function (e) { const t = {}; function n(r) { if (t[r]) return t[r].exports; const o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports; }n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }); }, n.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const r = Object.create(null); if (n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const o in e)n.d(r, o, ((t) => e[t]).bind(null, o)); return r; }, n.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return n.d(t, 'a', t), t; }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.p = '', n(n.s = 1); }([function (e, t, n) {}, function (e, t, n) {
  function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n, enumerable: !0, configurable: !0, writable: !0,
    }) : e[t] = n, e;
  }n.r(t); function o(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } const i = (function () { function e(t, n, r, o, i) { !(function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }(this, e)), this.name = t, this.link = n, this.template = r, this.cardElem = null, this.imageOpen = o, this.likes = i; } let t; let n; let r; return t = e, (n = [{ key: 'create', value() { const e = document.createElement('div'); e.insertAdjacentHTML('afterbegin', this.template); const t = e.firstElementChild; return t.querySelector('.place-card__name').textContent = this.name, t.querySelector('.place-card__image').style = 'background-image: url('.concat(this.link, ')'), t.querySelector('.place-card__like-count').textContent = this.likes, this.cardElem = t, this.setEventListeners(), t; } }, { key: 'like', value() { this.cardElem.querySelector('.place-card__like-icon').classList.toggle('place-card__like-icon_liked'); } }, { key: 'remove', value(e) { this.cardElem.remove(), this.cardElem = null, e.stopImmediatePropagation(); } }, { key: 'showCurrentImage', value() { this.imageOpen(this.cardElem.querySelector('.place-card__image').getAttribute('style')); } }, { key: 'setEventListeners', value() { this.cardElem.querySelector('.place-card__delete-icon').addEventListener('click', this.remove.bind(this)), this.cardElem.querySelector('.place-card__like-icon').addEventListener('click', this.like.bind(this)), this.cardElem.querySelector('.place-card__image').addEventListener('click', this.showCurrentImage.bind(this)); } }]) && o(t.prototype, n), r && o(t, r), e; }()); function a(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } const c = (function () { function e(t, n, r) { !(function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }(this, e)), this.container = t, this.createCard = n, this.api = r; } let t; let n; let r; return t = e, (n = [{ key: 'addCard', value(e, t, n) { this.container.appendChild(this.createCard(e, t, n)); } }, { key: 'render', value(e) { const t = this; e.forEach(((e) => { t.addCard(e.name, e.link, e.likes.length); })); } }]) && a(t.prototype, n), r && a(t, r), e; }()); function u(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } const s = (function () { function e(t) { !(function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }(this, e)), this.popup = t; } let t; let n; let r; return t = e, (n = [{ key: 'open', value() { this.popup.classList.add('popup_is-opened'); } }, { key: 'close', value() { this.popup.classList.remove('popup_is-opened'); } }, { key: 'setEventListeners', value() { this.popup.querySelector('.popup__close').addEventListener('click', this.close.bind(this)); } }]) && u(t.prototype, n), r && u(t, r), e; }()); function l(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } const f = (function () { function e(t, n, r) { !(function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }(this, e)), this.userElement = t, this.infoElement = n, this.defaultValues = r; } let t; let n; let r; return t = e, (n = [{ key: 'setUserInfo', value(e, t) { this.user = e, this.info = t, this.defaultValues(this.user, this.info), this.updateUserInfo(); } }, { key: 'updateUserInfo', value() { this.userElement.textContent = this.user, this.infoElement.textContent = this.info; } }]) && l(t.prototype, n), r && l(t, r), e; }()); function d(e) { return (function (e) { if (Array.isArray(e)) return p(e); }(e)) || (function (e) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e)) return Array.from(e); }(e)) || (function (e, t) { if (!e) return; if (typeof e === 'string') return p(e, t); let n = Object.prototype.toString.call(e).slice(8, -1); n === 'Object' && e.constructor && (n = e.constructor.name); if (n === 'Map' || n === 'Set') return Array.from(e); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t); }(e)) || (function () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }()); } function p(e, t) { (t == null || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n]; return r; } function h(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } const m = (function () { function e(t) { !(function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }(this, e)), this.form = t, this.button = this.form.querySelector('.button'); } let t; let n; let r; return t = e, (n = [{ key: 'setSubmitButtonState', value() { const e = this; const t = d(this.form.querySelectorAll('.popup__input')).reduce(((t, n) => e.checkInputValidity(n) && t), !0); this.button.disabled = !t; } }, { key: 'getErrorMessage', value(e) { return this.form.querySelector('.popup__valid[data-for="'.concat(e.name, '"]')); } }, { key: 'checkInputValidity', value(e) { const t = e.validity; const n = this.getErrorMessage(e); return t.valid ? (n.textContent = '', !0) : t.tooShort ? (n.textContent = 'Введите от 2 до 30 символов', !1) : t.patternMismatch ? (n.textContent = 'Данные не корректны', !1) : t.valueMissing ? (n.textContent = 'Обязательное поле', !1) : void 0; } }, { key: 'setEventListeners', value() { this.form.addEventListener('input', this.setSubmitButtonState.bind(this)); } }, { key: 'cleanSpaces', value() { this.form.querySelectorAll('.popup__valid').forEach(((e) => { e.textContent = ''; })), this.form.reset(); } }]) && h(t.prototype, n), r && h(t, r), e; }()); const v = (n(0), document.querySelector('.places-list')); const y = document.querySelector('#edit'); const b = document.querySelector('#content'); const g = document.querySelector('#image'); const _ = document.querySelector('.user-info__button-edit'); const k = document.querySelector('.popup__button-edit'); const S = document.querySelector('.user-info__button'); const E = document.querySelector('form[name="popup"]'); const w = document.querySelector('form[name="edit"]'); const C = document.querySelector('.user-info__photo'); const q = document.querySelector('.user-info__name'); const j = document.querySelector('.user-info__job'); function L(e, t, n) { return new i(e, t, '\n    <div class="place-card">\n        <div class="place-card__image" style="background-image: url(https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg)">\n          <button class="place-card__delete-icon"></button>\n        </div>\n        <div class="place-card__description">\n          <h3 class="place-card__name">Камчатка</h3>\n          <div class= "place-card__like-count-container">\n          <button class="place-card__like-icon"></button>\n          <p class="place-card__like-count">1</p>\n          <div>\n        </div>\n      </div>', D, n).create(); } const O = new function e(t) { const n = this; !(function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); }(this, e)), r(this, 'getUserData', (() => fetch(''.concat(n.url, '/').concat(n.requests[0]), { headers: n.headers }).then(((e) => (e.ok ? e.json() : Promise.reject(e.status)))))), r(this, 'changeUserInfo', ((e, t) => (console.log('changeUserInfo'), fetch(''.concat(n.url, '/').concat(n.requests[0]), { method: 'PATCH', headers: n.headers, body: JSON.stringify({ name: e, about: t }) }).then(((e) => (e.ok ? e.json() : Promise.reject(e.status))))))), r(this, 'getInitialCards', (() => fetch(''.concat(n.url, '/').concat(n.requests[1]), { headers: n.headers }).then(((e) => (e.ok ? e.json() : Promise.reject(e.status)))))), r(this, 'postNewCards', ((e, t) => fetch(''.concat(n.url, '/').concat(n.requests[1]), { method: 'POST', headers: n.headers, body: JSON.stringify({ name: e, link: t }) }).then(((e) => (e.ok ? e.json() : Promise.reject(e.status)))))), this.url = t.url, this.headers = t.headers, this.requests = t.requests; }({ url: 'https://praktikum.tk/cohort11', headers: { authorization: '3b68f79d-8904-4383-b159-e36d5c19e502', 'Content-Type': 'application/json' }, requests: ['users/me', 'cards'] }); const x = new c(v, L, O); O.getUserData(q, j, C).then(((e) => { q.textContent = e.name, j.textContent = e.about, C.style = 'background-image: url('.concat(e.avatar, ')'); })).catch(((e) => { console.log(e); })), O.getInitialCards().then(((e) => x.render(e))).catch(((e) => { console.log(e); })); const I = new m(E); const P = new m(w); const A = new f(q, j, ((e, t) => { w.name.value = e, w.info.value = t; })); const T = new s(y); const U = new s(g); const M = new s(b); function D(e) { document.querySelector('.popup__image').setAttribute('style', ''.concat(e)), U.open(); }w.addEventListener('submit', ((e) => {
    e.preventDefault(); const t = w.elements; const n = t.name; const r = t.info; O.changeUserInfo(n.value, r.value).then((() => { A.setUserInfo(n.value, r.value); })).then((() => { T.close(); })).then((() => { w.reset(); }))
      .catch(((e) => { alert(`Ошибка ${e}`); }));
  })), T.setEventListeners(), _.addEventListener('click', (() => { P.cleanSpaces(), k.disabled && (k.disabled = !1), A.setUserInfo(q.textContent, j.textContent), T.open(); })), U.setEventListeners(), M.setEventListeners(), S.addEventListener('click', (() => { I.cleanSpaces(), M.open(); })), E.addEventListener('submit', ((e) => {
    e.preventDefault(); const t = document.forms.popup; const n = t.elements; const r = n.place; const o = n.link; const i = new c(v, L); O.postNewCards(r.value, o.value).then((() => { i.addCard(r.value, o.value); })).then((() => { M.close(); })).then((() => { t.reset(); }))
      .catch(((e) => { console.log(e); }));
  })), P.setEventListeners(), I.setEventListeners();
}]));