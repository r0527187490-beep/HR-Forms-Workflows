import { $s as ENVIRONMENT_INITIALIZER, Ac as formatRuntimeError, An as LOCALE_ID, Bc as makeEnvironmentProviders, Bi as setDocument, Bt as Attribute, Cc as ZONELESS_ENABLED, Co as ɵɵinjectAttribute, Ct as computed, Dl as __asyncValues, Dt as linkedSignal, E as booleanAttribute, El as __asyncGenerator, En as Input, Fc as inject, Fr as bypassSanitizationTrustUrl, Hn as NgModuleRef$1, Ht as CSP_NONCE, Ja as ɵɵdefineNgModule, Jc as stringify, Jr as findLocaleData, K as internalCreateApplication, Kc as signal, Kn as Optional, Mr as bypassSanitizationTrustResourceUrl, Mt as APP_BOOTSTRAP_LISTENER, N as createPlatformFactory, Nr as bypassSanitizationTrustScript, Nt as APP_ID, Ol as __await, Or as allLeavingAnimations, Pl as __values, Pr as bypassSanitizationTrustStyle, Q as platformCore, Qc as ɵɵdefineInjector, Qn as Pipe, Qs as DestroyRef, Ri as setClassMetadata, Rn as NgModule, Si as performanceMarkFeature, Sr as ViewEncapsulation, St as ResourceImpl, Tc as assertInInjectionContext, Tl as isFunction, Tn as Injectable, Tr as _sanitizeUrl, Ts as ɵɵstyleProp, Tt as encapsulateResourceError, Ur as createNgModule, Wc as runInInjectionContext, Wn as NgZone, X as numberAttribute, Xa as ɵɵdirectiveInject, Xn as PLATFORM_INITIALIZER, Ya as ɵɵdefinePipe, Yc as truncateMiddle, Yn as PLATFORM_ID, Zc as ɵɵdefineInjectable, Zs as DOCUMENT, _i as makeStateKey, ac as INTERNAL_APPLICATION_ERROR_HANDLER, ai as getLocalePluralCase$1, bn as IMAGE_CONFIG_DEFAULTS, ct as withI18nSupport$1, dl as Subject, dn as Directive, en as Console, f as IterableDiffers, fl as createOperatorSubscriber, fn as ElementRef, hc as PendingTasks, hi as isSubscribable, hl as Observable, hn as Host, hr as TestabilityRegistry, ic as INJECTOR_SCOPE, jc as forwardRef, jl as __generator, jn as LocaleDataIndex, jr as bypassSanitizationTrustHtml, kl as __awaiter, kr as allowSanitizationBypassAndThrow, kt as untracked, ll as map, lr as TESTABILITY, lt as withIncrementalHydration$1, mi as isPromise$1, ml as operate, mr as Testability, nc as ErrorHandler, nr as RendererFactory2, oc as InjectionToken, ot as withDomHydration, p as KeyValueDiffers, pr as TemplateRef, qa as ɵɵdefineDirective, qi as unwrapSafeValue, r as ChangeDetectorRef, ra as ɵɵNgOnChangesFeature, rr as RendererStyleFlags2, sc as Injector, st as withEventReplay$1, t as ApplicationModule, tc as EnvironmentInjector, tl as ɵɵinject, tn as DEFAULT_CURRENCY_CODE, tr as Renderer2, ur as TESTABILITY_GETTER, vc as RuntimeError, vl as observable, vr as TracingService, wc as _global, wn as Inject, wr as _sanitizeHtml, xc as Version, xl as reportUnhandledError, xn as IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, xr as ViewContainerRef, yc as SecurityContext, yn as IMAGE_CONFIG, yr as TransferState, zt as ApplicationRef } from "./core-BHU-g6Ap.js";
//#region node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
	return value && isFunction(value.schedule);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
	return arr[arr.length - 1];
}
function popResultSelector(args) {
	return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
	return isScheduler(last(args)) ? args.pop() : void 0;
}
function popNumber(args, defaultValue) {
	return typeof last(args) === "number" ? args.pop() : defaultValue;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = (function(x) {
	return x && typeof x.length === "number" && typeof x !== "function";
});
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
	return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
	return isFunction(input[observable]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
	return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
	return /* @__PURE__ */ new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
	if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
	return Symbol.iterator;
}
var iterator = getSymbolIterator();
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
	return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
	return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
		var reader, _a, value, done;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					reader = readableStream.getReader();
					_b.label = 1;
				case 1:
					_b.trys.push([
						1,
						,
						9,
						10
					]);
					_b.label = 2;
				case 2: return [4, __await(reader.read())];
				case 3:
					_a = _b.sent(), value = _a.value, done = _a.done;
					if (!done) return [3, 5];
					return [4, __await(void 0)];
				case 4: return [2, _b.sent()];
				case 5: return [4, __await(value)];
				case 6: return [4, _b.sent()];
				case 7:
					_b.sent();
					return [3, 2];
				case 8: return [3, 10];
				case 9:
					reader.releaseLock();
					return [7];
				case 10: return [2];
			}
		});
	});
}
function isReadableStreamLike(obj) {
	return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
	if (input instanceof Observable) return input;
	if (input != null) {
		if (isInteropObservable(input)) return fromInteropObservable(input);
		if (isArrayLike(input)) return fromArrayLike(input);
		if (isPromise(input)) return fromPromise(input);
		if (isAsyncIterable(input)) return fromAsyncIterable(input);
		if (isIterable(input)) return fromIterable(input);
		if (isReadableStreamLike(input)) return fromReadableStreamLike(input);
	}
	throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
	return new Observable(function(subscriber) {
		var obs = obj[observable]();
		if (isFunction(obs.subscribe)) return obs.subscribe(subscriber);
		throw new TypeError("Provided object does not correctly implement Symbol.observable");
	});
}
function fromArrayLike(array) {
	return new Observable(function(subscriber) {
		for (var i = 0; i < array.length && !subscriber.closed; i++) subscriber.next(array[i]);
		subscriber.complete();
	});
}
function fromPromise(promise) {
	return new Observable(function(subscriber) {
		promise.then(function(value) {
			if (!subscriber.closed) {
				subscriber.next(value);
				subscriber.complete();
			}
		}, function(err) {
			return subscriber.error(err);
		}).then(null, reportUnhandledError);
	});
}
function fromIterable(iterable) {
	return new Observable(function(subscriber) {
		var e_1, _a;
		try {
			for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
				var value = iterable_1_1.value;
				subscriber.next(value);
				if (subscriber.closed) return;
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		subscriber.complete();
	});
}
function fromAsyncIterable(asyncIterable) {
	return new Observable(function(subscriber) {
		process(asyncIterable, subscriber).catch(function(err) {
			return subscriber.error(err);
		});
	});
}
function fromReadableStreamLike(readableStream) {
	return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
	var asyncIterable_1, asyncIterable_1_1;
	var e_2, _a;
	return __awaiter(this, void 0, void 0, function() {
		var value, e_2_1;
		return __generator(this, function(_b) {
			switch (_b.label) {
				case 0:
					_b.trys.push([
						0,
						5,
						6,
						11
					]);
					asyncIterable_1 = __asyncValues(asyncIterable);
					_b.label = 1;
				case 1: return [4, asyncIterable_1.next()];
				case 2:
					if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
					value = asyncIterable_1_1.value;
					subscriber.next(value);
					if (subscriber.closed) return [2];
					_b.label = 3;
				case 3: return [3, 1];
				case 4: return [3, 11];
				case 5:
					e_2_1 = _b.sent();
					e_2 = { error: e_2_1 };
					return [3, 11];
				case 6:
					_b.trys.push([
						6,
						,
						9,
						10
					]);
					if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
					return [4, _a.call(asyncIterable_1)];
				case 7:
					_b.sent();
					_b.label = 8;
				case 8: return [3, 10];
				case 9:
					if (e_2) throw e_2.error;
					return [7];
				case 10: return [7];
				case 11:
					subscriber.complete();
					return [2];
			}
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
	if (delay === void 0) delay = 0;
	if (repeat === void 0) repeat = false;
	var scheduleSubscription = scheduler.schedule(function() {
		work();
		if (repeat) parentSubscription.add(this.schedule(null, delay));
		else this.unsubscribe();
	}, delay);
	parentSubscription.add(scheduleSubscription);
	if (!repeat) return scheduleSubscription;
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay) {
	if (delay === void 0) delay = 0;
	return operate(function(source, subscriber) {
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.next(value);
			}, delay);
		}, function() {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.complete();
			}, delay);
		}, function(err) {
			return executeSchedule(subscriber, scheduler, function() {
				return subscriber.error(err);
			}, delay);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay) {
	if (delay === void 0) delay = 0;
	return operate(function(source, subscriber) {
		subscriber.add(scheduler.schedule(function() {
			return source.subscribe(subscriber);
		}, delay));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
	return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
	return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
	return new Observable(function(subscriber) {
		var i = 0;
		return scheduler.schedule(function() {
			if (i === input.length) subscriber.complete();
			else {
				subscriber.next(input[i++]);
				if (!subscriber.closed) this.schedule();
			}
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
	return new Observable(function(subscriber) {
		var iterator$1;
		executeSchedule(subscriber, scheduler, function() {
			iterator$1 = input[iterator]();
			executeSchedule(subscriber, scheduler, function() {
				var _a;
				var value;
				var done;
				try {
					_a = iterator$1.next(), value = _a.value, done = _a.done;
				} catch (err) {
					subscriber.error(err);
					return;
				}
				if (done) subscriber.complete();
				else subscriber.next(value);
			}, 0, true);
		});
		return function() {
			return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return();
		};
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
	if (!input) throw new Error("Iterable cannot be null");
	return new Observable(function(subscriber) {
		executeSchedule(subscriber, scheduler, function() {
			var iterator = input[Symbol.asyncIterator]();
			executeSchedule(subscriber, scheduler, function() {
				iterator.next().then(function(result) {
					if (result.done) subscriber.complete();
					else subscriber.next(result.value);
				});
			}, 0, true);
		});
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
	return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
	if (input != null) {
		if (isInteropObservable(input)) return scheduleObservable(input, scheduler);
		if (isArrayLike(input)) return scheduleArray(input, scheduler);
		if (isPromise(input)) return schedulePromise(input, scheduler);
		if (isAsyncIterable(input)) return scheduleAsyncIterable(input, scheduler);
		if (isIterable(input)) return scheduleIterable(input, scheduler);
		if (isReadableStreamLike(input)) return scheduleReadableStreamLike(input, scheduler);
	}
	throw createInvalidObservableTypeError(input);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
	return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/observable/of.js
function of() {
	var args = [];
	for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
	return from(args, popScheduler(args));
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
	var buffer = [];
	var active = 0;
	var index = 0;
	var isComplete = false;
	var checkComplete = function() {
		if (isComplete && !buffer.length && !active) subscriber.complete();
	};
	var outerNext = function(value) {
		return active < concurrent ? doInnerSub(value) : buffer.push(value);
	};
	var doInnerSub = function(value) {
		expand && subscriber.next(value);
		active++;
		var innerComplete = false;
		innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
			onBeforeNext === null || onBeforeNext === void 0 || onBeforeNext(innerValue);
			if (expand) outerNext(innerValue);
			else subscriber.next(innerValue);
		}, function() {
			innerComplete = true;
		}, void 0, function() {
			if (innerComplete) try {
				active--;
				var _loop_1 = function() {
					var bufferedValue = buffer.shift();
					if (innerSubScheduler) executeSchedule(subscriber, innerSubScheduler, function() {
						return doInnerSub(bufferedValue);
					});
					else doInnerSub(bufferedValue);
				};
				while (buffer.length && active < concurrent) _loop_1();
				checkComplete();
			} catch (err) {
				subscriber.error(err);
			}
		}));
	};
	source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
		isComplete = true;
		checkComplete();
	}));
	return function() {
		additionalFinalizer === null || additionalFinalizer === void 0 || additionalFinalizer();
	};
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent) {
	if (concurrent === void 0) concurrent = Infinity;
	if (isFunction(resultSelector)) return mergeMap(function(a, i) {
		return map(function(b, ii) {
			return resultSelector(a, b, i, ii);
		})(innerFrom(project(a, i)));
	}, concurrent);
	else if (typeof resultSelector === "number") concurrent = resultSelector;
	return operate(function(source, subscriber) {
		return mergeInternals(source, subscriber, project, concurrent);
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/filter.js
function filter(predicate, thisArg) {
	return operate(function(source, subscriber) {
		var index = 0;
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			return predicate.call(thisArg, value, index++) && subscriber.next(value);
		}));
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/concatMap.js
function concatMap(project, resultSelector) {
	return isFunction(resultSelector) ? mergeMap(project, resultSelector, 1) : mergeMap(project, 1);
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/finalize.js
function finalize(callback) {
	return operate(function(source, subscriber) {
		try {
			source.subscribe(subscriber);
		} finally {
			subscriber.add(callback);
		}
	});
}
//#endregion
//#region node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
function switchMap(project, resultSelector) {
	return operate(function(source, subscriber) {
		var innerSubscriber = null;
		var index = 0;
		var isComplete = false;
		var checkComplete = function() {
			return isComplete && !innerSubscriber && subscriber.complete();
		};
		source.subscribe(createOperatorSubscriber(subscriber, function(value) {
			innerSubscriber === null || innerSubscriber === void 0 || innerSubscriber.unsubscribe();
			var innerIndex = 0;
			var outerIndex = index++;
			innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function(innerValue) {
				return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
			}, function() {
				innerSubscriber = null;
				checkComplete();
			}));
		}, function() {
			isComplete = true;
			checkComplete();
		}));
	});
}
//#endregion
//#region node_modules/@angular/common/fesm2022/location.mjs
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
var _DOM = null;
function getDOM() {
	return _DOM;
}
function setRootDomAdapter(adapter) {
	_DOM ??= adapter;
}
/**
* Provides DOM operations in an environment-agnostic way.
*
* @security Tread carefully! Interacting with the DOM directly is dangerous and
* can introduce XSS risks.
*/
var DomAdapter = class {};
/**
* This class should not be used directly by an application developer. Instead, use
* {@link Location}.
*
* `PlatformLocation` encapsulates all calls to DOM APIs, which allows the Router to be
* platform-agnostic.
* This means that we can have different implementation of `PlatformLocation` for the different
* platforms that Angular supports. For example, `@angular/platform-browser` provides an
* implementation specific to the browser environment, while `@angular/platform-server` provides
* one suitable for use with server-side rendering.
*
* The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
* when they need to interact with the DOM APIs like pushState, popState, etc.
*
* {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
* by the {@link /api/router/Router Router} in order to navigate between routes. Since all interactions between
* {@link /api/router/Router Router} /
* {@link Location} / {@link LocationStrategy} and DOM APIs flow through the `PlatformLocation`
* class, they are all platform-agnostic.
*
* @publicApi
*/
var PlatformLocation = class PlatformLocation {
	historyGo(relativePosition) {
		throw new Error(ngDevMode ? "Not implemented" : "");
	}
	static ɵfac = function PlatformLocation_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PlatformLocation)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: PlatformLocation,
		factory: () => (() => inject(BrowserPlatformLocation))(),
		providedIn: "platform"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformLocation, [{
		type: Injectable,
		args: [{
			providedIn: "platform",
			useFactory: () => inject(BrowserPlatformLocation)
		}]
	}], null, null);
})();
/**
* @description
* Indicates when a location is initialized.
*
* @publicApi
*/
var LOCATION_INITIALIZED = new InjectionToken(ngDevMode ? "Location Initialized" : "");
/**
* `PlatformLocation` encapsulates all of the direct calls to platform APIs.
* This class should not be used directly by an application developer. Instead, use
* {@link Location}.
*
* @publicApi
*/
var BrowserPlatformLocation = class BrowserPlatformLocation extends PlatformLocation {
	_location;
	_history;
	_doc = inject(DOCUMENT);
	constructor() {
		super();
		this._location = window.location;
		this._history = window.history;
	}
	getBaseHrefFromDOM() {
		return getDOM().getBaseHref(this._doc);
	}
	onPopState(fn) {
		const window = getDOM().getGlobalEventTarget(this._doc, "window");
		window.addEventListener("popstate", fn, false);
		return () => window.removeEventListener("popstate", fn);
	}
	onHashChange(fn) {
		const window = getDOM().getGlobalEventTarget(this._doc, "window");
		window.addEventListener("hashchange", fn, false);
		return () => window.removeEventListener("hashchange", fn);
	}
	get href() {
		return this._location.href;
	}
	get protocol() {
		return this._location.protocol;
	}
	get hostname() {
		return this._location.hostname;
	}
	get port() {
		return this._location.port;
	}
	get pathname() {
		return this._location.pathname;
	}
	get search() {
		return this._location.search;
	}
	get hash() {
		return this._location.hash;
	}
	set pathname(newPath) {
		this._location.pathname = newPath;
	}
	pushState(state, title, url) {
		this._history.pushState(state, title, url);
	}
	replaceState(state, title, url) {
		this._history.replaceState(state, title, url);
	}
	forward() {
		this._history.forward();
	}
	back() {
		this._history.back();
	}
	historyGo(relativePosition = 0) {
		this._history.go(relativePosition);
	}
	getState() {
		return this._history.state;
	}
	static ɵfac = function BrowserPlatformLocation_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BrowserPlatformLocation)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: BrowserPlatformLocation,
		factory: () => (() => new BrowserPlatformLocation())(),
		providedIn: "platform"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserPlatformLocation, [{
		type: Injectable,
		args: [{
			providedIn: "platform",
			useFactory: () => new BrowserPlatformLocation()
		}]
	}], () => [], null);
})();
/**
* Joins two parts of a URL with a slash if needed.
*
* @param start  URL string
* @param end    URL string
*
*
* @returns The joined URL string.
*/
function joinWithSlash(start, end) {
	if (!start) return end;
	if (!end) return start;
	if (start.endsWith("/")) return end.startsWith("/") ? start + end.slice(1) : start + end;
	return end.startsWith("/") ? start + end : `${start}/${end}`;
}
/**
* Removes a trailing slash from a URL string if needed.
* Looks for the first occurrence of either `#`, `?`, or the end of the
* line as `/` characters and removes the trailing slash if one exists.
*
* @param url URL string.
*
* @returns The URL string, modified if needed.
*/
function stripTrailingSlash(url) {
	const pathEndIdx = url.search(/#|\?|$/);
	return url[pathEndIdx - 1] === "/" ? url.slice(0, pathEndIdx - 1) + url.slice(pathEndIdx) : url;
}
/**
* Normalizes URL parameters by prepending with `?` if needed.
*
* @param  params String of URL parameters.
*
* @returns The normalized URL parameters string.
*/
function normalizeQueryParams(params) {
	return params && params[0] !== "?" ? `?${params}` : params;
}
/**
* Enables the `Location` service to read route state from the browser's URL.
* Angular provides two strategies:
* `HashLocationStrategy` and `PathLocationStrategy`.
*
* Applications should use the `Router` or `Location` services to
* interact with application route state.
*
* For instance, `HashLocationStrategy` produces URLs like
* <code class="no-auto-link">http://example.com/#/foo</code>,
* and `PathLocationStrategy` produces
* <code class="no-auto-link">http://example.com/foo</code> as an equivalent URL.
*
* See these two classes for more.
*
* @publicApi
*/
var LocationStrategy = class LocationStrategy {
	historyGo(relativePosition) {
		throw new Error(ngDevMode ? "Not implemented" : "");
	}
	static ɵfac = function LocationStrategy_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || LocationStrategy)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: LocationStrategy,
		factory: () => (() => inject(PathLocationStrategy))(),
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationStrategy, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useFactory: () => inject(PathLocationStrategy)
		}]
	}], null, null);
})();
/**
* A predefined DI token for the base href
* to be used with the `PathLocationStrategy`.
* The base href is the URL prefix that should be preserved when generating
* and recognizing URLs.
*
* @usageNotes
*
* The following example shows how to use this token to configure the root app injector
* with a base href value, so that the DI framework can supply the dependency anywhere in the app.
*
* ```ts
* import {NgModule} from '@angular/core';
* import {APP_BASE_HREF} from '@angular/common';
*
* @NgModule({
*   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
* })
* class AppModule {}
* ```
*
* @publicApi
*/
var APP_BASE_HREF = new InjectionToken(ngDevMode ? "appBaseHref" : "");
/**
* @description
* A {@link LocationStrategy} used to configure the {@link Location} service to
* represent its state in the
* [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
* browser's URL.
*
* If you're using `PathLocationStrategy`, you may provide a {@link APP_BASE_HREF}
* or add a `<base href>` element to the document to override the default.
*
* For instance, if you provide an `APP_BASE_HREF` of `'/my/app/'` and call
* `location.go('/foo')`, the browser's URL will become
* `example.com/my/app/foo`. To ensure all relative URIs resolve correctly,
* the `<base href>` and/or `APP_BASE_HREF` should end with a `/`.
*
* Similarly, if you add `<base href='/my/app/'/>` to the document and call
* `location.go('/foo')`, the browser's URL will become
* `example.com/my/app/foo`.
*
* Note that when using `PathLocationStrategy`, neither the query nor
* the fragment in the `<base href>` will be preserved, as outlined
* by the [RFC](https://tools.ietf.org/html/rfc3986#section-5.2.2).
*
* @usageNotes
*
* ### Example
*
* {@example common/location/ts/path_location_component.ts region='LocationComponent'}
*
* @publicApi
*/
var PathLocationStrategy = class PathLocationStrategy extends LocationStrategy {
	_platformLocation;
	_baseHref;
	_removeListenerFns = [];
	constructor(_platformLocation, href) {
		super();
		this._platformLocation = _platformLocation;
		this._baseHref = href ?? this._platformLocation.getBaseHrefFromDOM() ?? inject(DOCUMENT).location?.origin ?? "";
	}
	/** @docs-private */
	ngOnDestroy() {
		while (this._removeListenerFns.length) this._removeListenerFns.pop()();
	}
	onPopState(fn) {
		this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
	}
	getBaseHref() {
		return this._baseHref;
	}
	prepareExternalUrl(internal) {
		return joinWithSlash(this._baseHref, internal);
	}
	path(includeHash = false) {
		const pathname = this._platformLocation.pathname + normalizeQueryParams(this._platformLocation.search);
		const hash = this._platformLocation.hash;
		return hash && includeHash ? `${pathname}${hash}` : pathname;
	}
	pushState(state, title, url, queryParams) {
		const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
		this._platformLocation.pushState(state, title, externalUrl);
	}
	replaceState(state, title, url, queryParams) {
		const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
		this._platformLocation.replaceState(state, title, externalUrl);
	}
	forward() {
		this._platformLocation.forward();
	}
	back() {
		this._platformLocation.back();
	}
	getState() {
		return this._platformLocation.getState();
	}
	historyGo(relativePosition = 0) {
		this._platformLocation.historyGo?.(relativePosition);
	}
	static ɵfac = function PathLocationStrategy_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PathLocationStrategy)(ɵɵinject(PlatformLocation), ɵɵinject(APP_BASE_HREF, 8));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: PathLocationStrategy,
		factory: PathLocationStrategy.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PathLocationStrategy, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{ type: PlatformLocation }, {
		type: void 0,
		decorators: [{ type: Optional }, {
			type: Inject,
			args: [APP_BASE_HREF]
		}]
	}], null);
})();
/**
* @description
*
* A service that applications can use to interact with a browser's URL.
*
* Depending on the `LocationStrategy` used, `Location` persists
* to the URL's path or the URL's hash segment.
*
* @usageNotes
*
* It's better to use the `Router.navigate()` service to trigger route changes. Use
* `Location` only if you need to interact with or create normalized URLs outside of
* routing.
*
* `Location` is responsible for normalizing the URL against the application's base href.
* A normalized URL is absolute from the URL host, includes the application's base href, and has no
* trailing slash:
* - `/my/app/user/123` is normalized
* - `my/app/user/123` **is not** normalized
* - `/my/app/user/123/` **is not** normalized
*
* ### Example
*
* {@example common/location/ts/path_location_component.ts region='LocationComponent'}
*
* @publicApi
*/
var Location = class Location {
	/** @internal */
	_subject = new Subject();
	/** @internal */
	_basePath;
	/** @internal */
	_locationStrategy;
	/** @internal */
	_urlChangeListeners = [];
	/** @internal */
	_urlChangeSubscription = null;
	constructor(locationStrategy) {
		this._locationStrategy = locationStrategy;
		const baseHref = this._locationStrategy.getBaseHref();
		this._basePath = _stripOrigin(stripTrailingSlash(_stripIndexHtml(baseHref)));
		this._locationStrategy.onPopState((ev) => {
			this._subject.next({
				"url": this.path(true),
				"pop": true,
				"state": ev.state,
				"type": ev.type
			});
		});
	}
	/** @docs-private */
	ngOnDestroy() {
		this._urlChangeSubscription?.unsubscribe();
		this._urlChangeListeners = [];
	}
	/**
	* Normalizes the URL path for this location.
	*
	* @param includeHash True to include an anchor fragment in the path.
	*
	* @returns The normalized URL path.
	*/
	path(includeHash = false) {
		return this.normalize(this._locationStrategy.path(includeHash));
	}
	/**
	* Reports the current state of the location history.
	* @returns The current value of the `history.state` object.
	*/
	getState() {
		return this._locationStrategy.getState();
	}
	/**
	* Normalizes the given path and compares to the current normalized path.
	*
	* @param path The given URL path.
	* @param query Query parameters.
	*
	* @returns True if the given URL path is equal to the current normalized path, false
	* otherwise.
	*/
	isCurrentPathEqualTo(path, query = "") {
		return this.path() == this.normalize(path + normalizeQueryParams(query));
	}
	/**
	* Normalizes a URL path by stripping any trailing slashes.
	*
	* @param url String representing a URL.
	*
	* @returns The normalized URL string.
	*/
	normalize(url) {
		return Location.stripTrailingSlash(_stripBasePath(this._basePath, _stripIndexHtml(url)));
	}
	/**
	* Normalizes an external URL path.
	* If the given URL doesn't begin with a leading slash (`'/'`), adds one
	* before normalizing. Adds a hash if `HashLocationStrategy` is
	* in use, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
	*
	* @param url String representing a URL.
	*
	* @returns  A normalized platform-specific URL.
	*/
	prepareExternalUrl(url) {
		if (url && url[0] !== "/") url = "/" + url;
		return this._locationStrategy.prepareExternalUrl(url);
	}
	/**
	* Changes the browser's URL to a normalized version of a given URL, and pushes a
	* new item onto the platform's history.
	*
	* @param path  URL path to normalize.
	* @param query Query parameters.
	* @param state Location history state.
	*
	*/
	go(path, query = "", state = null) {
		this._locationStrategy.pushState(state, "", path, query);
		this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
	}
	/**
	* Changes the browser's URL to a normalized version of the given URL, and replaces
	* the top item on the platform's history stack.
	*
	* @param path  URL path to normalize.
	* @param query Query parameters.
	* @param state Location history state.
	*/
	replaceState(path, query = "", state = null) {
		this._locationStrategy.replaceState(state, "", path, query);
		this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
	}
	/**
	* Navigates forward in the platform's history.
	*/
	forward() {
		this._locationStrategy.forward();
	}
	/**
	* Navigates back in the platform's history.
	*/
	back() {
		this._locationStrategy.back();
	}
	/**
	* Navigate to a specific page from session history, identified by its relative position to the
	* current page.
	*
	* @param relativePosition  Position of the target page in the history relative to the current
	*     page.
	* A negative value moves backwards, a positive value moves forwards, e.g. `location.historyGo(2)`
	* moves forward two pages and `location.historyGo(-2)` moves back two pages. When we try to go
	* beyond what's stored in the history session, we stay in the current page. Same behaviour occurs
	* when `relativePosition` equals 0.
	* @see https://developer.mozilla.org/en-US/docs/Web/API/History_API#Moving_to_a_specific_point_in_history
	*/
	historyGo(relativePosition = 0) {
		this._locationStrategy.historyGo?.(relativePosition);
	}
	/**
	* Registers a URL change listener. Use to catch updates performed by the Angular
	* framework that are not detectible through "popstate" or "hashchange" events.
	*
	* @param fn The change handler function, which take a URL and a location history state.
	* @returns A function that, when executed, unregisters a URL change listener.
	*/
	onUrlChange(fn) {
		this._urlChangeListeners.push(fn);
		this._urlChangeSubscription ??= this.subscribe((v) => {
			this._notifyUrlChangeListeners(v.url, v.state);
		});
		return () => {
			const fnIndex = this._urlChangeListeners.indexOf(fn);
			this._urlChangeListeners.splice(fnIndex, 1);
			if (this._urlChangeListeners.length === 0) {
				this._urlChangeSubscription?.unsubscribe();
				this._urlChangeSubscription = null;
			}
		};
	}
	/** @internal */
	_notifyUrlChangeListeners(url = "", state) {
		this._urlChangeListeners.forEach((fn) => fn(url, state));
	}
	/**
	* Subscribes to the platform's `popState` events.
	*
	* Note: `Location.go()` does not trigger the `popState` event in the browser. Use
	* `Location.onUrlChange()` to subscribe to URL changes instead.
	*
	* @param value Event that is triggered when the state history changes.
	* @param exception The exception to throw.
	*
	* @see [onpopstate](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate)
	*
	* @returns Subscribed events.
	*/
	subscribe(onNext, onThrow, onReturn) {
		return this._subject.subscribe({
			next: onNext,
			error: onThrow ?? void 0,
			complete: onReturn ?? void 0
		});
	}
	/**
	* Normalizes URL parameters by prepending with `?` if needed.
	*
	* @param  params String of URL parameters.
	*
	* @returns The normalized URL parameters string.
	*/
	static normalizeQueryParams = normalizeQueryParams;
	/**
	* Joins two parts of a URL with a slash if needed.
	*
	* @param start  URL string
	* @param end    URL string
	*
	*
	* @returns The joined URL string.
	*/
	static joinWithSlash = joinWithSlash;
	/**
	* Removes a trailing slash from a URL string if needed.
	* Looks for the first occurrence of either `#`, `?`, or the end of the
	* line as `/` characters and removes the trailing slash if one exists.
	*
	* @param url URL string.
	*
	* @returns The URL string, modified if needed.
	*/
	static stripTrailingSlash = stripTrailingSlash;
	static ɵfac = function Location_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Location)(ɵɵinject(LocationStrategy));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: Location,
		factory: () => createLocation(),
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Location, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useFactory: createLocation
		}]
	}], () => [{ type: LocationStrategy }], null);
})();
function createLocation() {
	return new Location(ɵɵinject(LocationStrategy));
}
function _stripBasePath(basePath, url) {
	if (!basePath || !url.startsWith(basePath)) return url;
	const strippedUrl = url.substring(basePath.length);
	if (strippedUrl === "" || [
		"/",
		";",
		"?",
		"#"
	].includes(strippedUrl[0])) return strippedUrl;
	return url;
}
function _stripIndexHtml(url) {
	return url.replace(/\/index.html$/, "");
}
function _stripOrigin(baseHref) {
	if ((/* @__PURE__ */ new RegExp("^(https?:)?//")).test(baseHref)) {
		const [, pathname] = baseHref.split(/\/\/[^\/]+/);
		return pathname;
	}
	return baseHref;
}
//#endregion
//#region node_modules/@angular/common/fesm2022/common_module.mjs
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
/**
* @description
* A {@link LocationStrategy} used to configure the {@link Location} service to
* represent its state in the
* [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
* of the browser's URL.
*
* For instance, if you call `location.go('/foo')`, the browser's URL will become
* `example.com#/foo`.
*
* @usageNotes
*
* ### Example
*
* {@example common/location/ts/hash_location_component.ts region='LocationComponent'}
*
* @publicApi
*/
var HashLocationStrategy = class HashLocationStrategy extends LocationStrategy {
	_platformLocation;
	_baseHref = "";
	_removeListenerFns = [];
	constructor(_platformLocation, _baseHref) {
		super();
		this._platformLocation = _platformLocation;
		if (_baseHref != null) this._baseHref = _baseHref;
	}
	/** @docs-private */
	ngOnDestroy() {
		while (this._removeListenerFns.length) this._removeListenerFns.pop()();
	}
	onPopState(fn) {
		this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
	}
	getBaseHref() {
		return this._baseHref;
	}
	path(includeHash = false) {
		const path = this._platformLocation.hash ?? "#";
		return path.length > 0 ? path.substring(1) : path;
	}
	prepareExternalUrl(internal) {
		const url = joinWithSlash(this._baseHref, internal);
		return url.length > 0 ? "#" + url : url;
	}
	pushState(state, title, path, queryParams) {
		const url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams)) || this._platformLocation.pathname;
		this._platformLocation.pushState(state, title, url);
	}
	replaceState(state, title, path, queryParams) {
		const url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams)) || this._platformLocation.pathname;
		this._platformLocation.replaceState(state, title, url);
	}
	forward() {
		this._platformLocation.forward();
	}
	back() {
		this._platformLocation.back();
	}
	getState() {
		return this._platformLocation.getState();
	}
	historyGo(relativePosition = 0) {
		this._platformLocation.historyGo?.(relativePosition);
	}
	static ɵfac = function HashLocationStrategy_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HashLocationStrategy)(ɵɵinject(PlatformLocation), ɵɵinject(APP_BASE_HREF, 8));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: HashLocationStrategy,
		factory: HashLocationStrategy.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HashLocationStrategy, [{ type: Injectable }], () => [{ type: PlatformLocation }, {
		type: void 0,
		decorators: [{ type: Optional }, {
			type: Inject,
			args: [APP_BASE_HREF]
		}]
	}], null);
})();
/** @internal */
var CURRENCIES_EN = {
	"ADP": [
		void 0,
		void 0,
		0
	],
	"AFN": [
		void 0,
		"؋",
		0
	],
	"ALL": [
		void 0,
		void 0,
		0
	],
	"AMD": [
		void 0,
		"֏",
		2
	],
	"AOA": [void 0, "Kz"],
	"ARS": [void 0, "$"],
	"AUD": ["A$", "$"],
	"AZN": [void 0, "₼"],
	"BAM": [void 0, "KM"],
	"BBD": [void 0, "$"],
	"BDT": [void 0, "৳"],
	"BHD": [
		void 0,
		void 0,
		3
	],
	"BIF": [
		void 0,
		void 0,
		0
	],
	"BMD": [void 0, "$"],
	"BND": [void 0, "$"],
	"BOB": [void 0, "Bs"],
	"BRL": ["R$"],
	"BSD": [void 0, "$"],
	"BWP": [void 0, "P"],
	"BYN": [
		void 0,
		void 0,
		2
	],
	"BYR": [
		void 0,
		void 0,
		0
	],
	"BZD": [void 0, "$"],
	"CAD": [
		"CA$",
		"$",
		2
	],
	"CHF": [
		void 0,
		void 0,
		2
	],
	"CLF": [
		void 0,
		void 0,
		4
	],
	"CLP": [
		void 0,
		"$",
		0
	],
	"CNY": ["CN¥", "¥"],
	"COP": [
		void 0,
		"$",
		2
	],
	"CRC": [
		void 0,
		"₡",
		2
	],
	"CUC": [void 0, "$"],
	"CUP": [void 0, "$"],
	"CZK": [
		void 0,
		"Kč",
		2
	],
	"DJF": [
		void 0,
		void 0,
		0
	],
	"DKK": [
		void 0,
		"kr",
		2
	],
	"DOP": [void 0, "$"],
	"EGP": [void 0, "E£"],
	"ESP": [
		void 0,
		"₧",
		0
	],
	"EUR": ["€"],
	"FJD": [void 0, "$"],
	"FKP": [void 0, "£"],
	"GBP": ["£"],
	"GEL": [void 0, "₾"],
	"GHS": [void 0, "GH₵"],
	"GIP": [void 0, "£"],
	"GNF": [
		void 0,
		"FG",
		0
	],
	"GTQ": [void 0, "Q"],
	"GYD": [
		void 0,
		"$",
		2
	],
	"HKD": ["HK$", "$"],
	"HNL": [void 0, "L"],
	"HRK": [void 0, "kn"],
	"HUF": [
		void 0,
		"Ft",
		2
	],
	"IDR": [
		void 0,
		"Rp",
		2
	],
	"ILS": ["₪"],
	"INR": ["₹"],
	"IQD": [
		void 0,
		void 0,
		0
	],
	"IRR": [
		void 0,
		void 0,
		0
	],
	"ISK": [
		void 0,
		"kr",
		0
	],
	"ITL": [
		void 0,
		void 0,
		0
	],
	"JMD": [void 0, "$"],
	"JOD": [
		void 0,
		void 0,
		3
	],
	"JPY": [
		"¥",
		void 0,
		0
	],
	"KHR": [void 0, "៛"],
	"KMF": [
		void 0,
		"CF",
		0
	],
	"KPW": [
		void 0,
		"₩",
		0
	],
	"KRW": [
		"₩",
		void 0,
		0
	],
	"KWD": [
		void 0,
		void 0,
		3
	],
	"KYD": [void 0, "$"],
	"KZT": [void 0, "₸"],
	"LAK": [
		void 0,
		"₭",
		0
	],
	"LBP": [
		void 0,
		"L£",
		0
	],
	"LKR": [void 0, "Rs"],
	"LRD": [void 0, "$"],
	"LTL": [void 0, "Lt"],
	"LUF": [
		void 0,
		void 0,
		0
	],
	"LVL": [void 0, "Ls"],
	"LYD": [
		void 0,
		void 0,
		3
	],
	"MGA": [
		void 0,
		"Ar",
		0
	],
	"MGF": [
		void 0,
		void 0,
		0
	],
	"MMK": [
		void 0,
		"K",
		0
	],
	"MNT": [
		void 0,
		"₮",
		2
	],
	"MRO": [
		void 0,
		void 0,
		0
	],
	"MUR": [
		void 0,
		"Rs",
		2
	],
	"MXN": ["MX$", "$"],
	"MYR": [void 0, "RM"],
	"NAD": [void 0, "$"],
	"NGN": [void 0, "₦"],
	"NIO": [void 0, "C$"],
	"NOK": [
		void 0,
		"kr",
		2
	],
	"NPR": [void 0, "Rs"],
	"NZD": ["NZ$", "$"],
	"OMR": [
		void 0,
		void 0,
		3
	],
	"PHP": ["₱"],
	"PKR": [
		void 0,
		"Rs",
		2
	],
	"PLN": [void 0, "zł"],
	"PYG": [
		void 0,
		"₲",
		0
	],
	"RON": [void 0, "lei"],
	"RSD": [
		void 0,
		void 0,
		0
	],
	"RUB": [void 0, "₽"],
	"RWF": [
		void 0,
		"RF",
		0
	],
	"SBD": [void 0, "$"],
	"SEK": [
		void 0,
		"kr",
		2
	],
	"SGD": [void 0, "$"],
	"SHP": [void 0, "£"],
	"SLE": [
		void 0,
		void 0,
		2
	],
	"SLL": [
		void 0,
		void 0,
		0
	],
	"SOS": [
		void 0,
		void 0,
		0
	],
	"SRD": [void 0, "$"],
	"SSP": [void 0, "£"],
	"STD": [
		void 0,
		void 0,
		0
	],
	"STN": [void 0, "Db"],
	"SYP": [
		void 0,
		"£",
		0
	],
	"THB": [void 0, "฿"],
	"TMM": [
		void 0,
		void 0,
		0
	],
	"TND": [
		void 0,
		void 0,
		3
	],
	"TOP": [void 0, "T$"],
	"TRL": [
		void 0,
		void 0,
		0
	],
	"TRY": [void 0, "₺"],
	"TTD": [void 0, "$"],
	"TWD": [
		"NT$",
		"$",
		2
	],
	"TZS": [
		void 0,
		void 0,
		2
	],
	"UAH": [void 0, "₴"],
	"UGX": [
		void 0,
		void 0,
		0
	],
	"USD": ["$"],
	"UYI": [
		void 0,
		void 0,
		0
	],
	"UYU": [void 0, "$"],
	"UYW": [
		void 0,
		void 0,
		4
	],
	"UZS": [
		void 0,
		void 0,
		2
	],
	"VEF": [
		void 0,
		"Bs",
		2
	],
	"VND": [
		"₫",
		void 0,
		0
	],
	"VUV": [
		void 0,
		void 0,
		0
	],
	"XAF": [
		"FCFA",
		void 0,
		0
	],
	"XCD": ["EC$", "$"],
	"XOF": [
		"F CFA",
		void 0,
		0
	],
	"XPF": [
		"CFPF",
		void 0,
		0
	],
	"XXX": ["¤"],
	"YER": [
		void 0,
		void 0,
		0
	],
	"ZAR": [void 0, "R"],
	"ZMK": [
		void 0,
		void 0,
		0
	],
	"ZMW": [void 0, "ZK"],
	"ZWD": [
		void 0,
		void 0,
		0
	]
};
/**
* Format styles that can be used to represent numbers.
* @see {@link getLocaleNumberFormat}
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated `getLocaleNumberFormat` is deprecated
*/
var NumberFormatStyle;
(function(NumberFormatStyle) {
	NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
	NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
	NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
	NumberFormatStyle[NumberFormatStyle["Scientific"] = 3] = "Scientific";
})(NumberFormatStyle || (NumberFormatStyle = {}));
/**
* Plurality cases used for translating plurals to different languages.
*
* @see {@link NgPlural}
* @see {@link NgPluralCase}
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated `getLocalePluralCase` is deprecated
*/
var Plural;
(function(Plural) {
	Plural[Plural["Zero"] = 0] = "Zero";
	Plural[Plural["One"] = 1] = "One";
	Plural[Plural["Two"] = 2] = "Two";
	Plural[Plural["Few"] = 3] = "Few";
	Plural[Plural["Many"] = 4] = "Many";
	Plural[Plural["Other"] = 5] = "Other";
})(Plural || (Plural = {}));
/**
* Context-dependant translation forms for strings.
* Typically the standalone version is for the nominative form of the word,
* and the format version is used for the genitive case.
* @see [CLDR website](http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles)
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated locale data getters are deprecated
*/
var FormStyle;
(function(FormStyle) {
	FormStyle[FormStyle["Format"] = 0] = "Format";
	FormStyle[FormStyle["Standalone"] = 1] = "Standalone";
})(FormStyle || (FormStyle = {}));
/**
* String widths available for translations.
* The specific character widths are locale-specific.
* Examples are given for the word "Sunday" in English.
*
* @publicApi
*
* @deprecated locale data getters are deprecated
*/
var TranslationWidth;
(function(TranslationWidth) {
	/** 1 character for `en-US`. For example: 'S' */
	TranslationWidth[TranslationWidth["Narrow"] = 0] = "Narrow";
	/** 3 characters for `en-US`. For example: 'Sun' */
	TranslationWidth[TranslationWidth["Abbreviated"] = 1] = "Abbreviated";
	/** Full length for `en-US`. For example: "Sunday" */
	TranslationWidth[TranslationWidth["Wide"] = 2] = "Wide";
	/** 2 characters for `en-US`, For example: "Su" */
	TranslationWidth[TranslationWidth["Short"] = 3] = "Short";
})(TranslationWidth || (TranslationWidth = {}));
/**
* String widths available for date-time formats.
* The specific character widths are locale-specific.
* Examples are given for `en-US`.
*
* @see {@link getLocaleDateFormat}
* @see {@link getLocaleTimeFormat}
* @see {@link getLocaleDateTimeFormat}
* @see [Internationalization (i18n) Guide](guide/i18n)
* @publicApi
*
* @deprecated 18.0
* Date locale data getters are deprecated
*/
var FormatWidth;
(function(FormatWidth) {
	/**
	* For `en-US`, `'M/d/yy, h:mm a'`
	* (Example: `6/15/15, 9:03 AM`)
	*/
	FormatWidth[FormatWidth["Short"] = 0] = "Short";
	/**
	* For `en-US`, `'MMM d, y, h:mm:ss a'`
	* (Example: `Jun 15, 2015, 9:03:01 AM`)
	*/
	FormatWidth[FormatWidth["Medium"] = 1] = "Medium";
	/**
	* For `en-US`, `'MMMM d, y, h:mm:ss a z'`
	* (Example: `June 15, 2015 at 9:03:01 AM GMT+1`)
	*/
	FormatWidth[FormatWidth["Long"] = 2] = "Long";
	/**
	* For `en-US`, `'EEEE, MMMM d, y, h:mm:ss a zzzz'`
	* (Example: `Monday, June 15, 2015 at 9:03:01 AM GMT+01:00`)
	*/
	FormatWidth[FormatWidth["Full"] = 3] = "Full";
})(FormatWidth || (FormatWidth = {}));
/**
* Symbols that can be used to replace placeholders in number patterns.
* Examples are based on `en-US` values.
*
* @see {@link getLocaleNumberSymbol}
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated `getLocaleNumberSymbol` is deprecated
*
* @object-literal-as-enum
*/
var NumberSymbol = {
	/**
	* Decimal separator.
	* For `en-US`, the dot character.
	* Example: 2,345`.`67
	*/
	Decimal: 0,
	/**
	* Grouping separator, typically for thousands.
	* For `en-US`, the comma character.
	* Example: 2`,`345.67
	*/
	Group: 1,
	/**
	* List-item separator.
	* Example: "one, two, and three"
	*/
	List: 2,
	/**
	* Sign for percentage (out of 100).
	* Example: 23.4%
	*/
	PercentSign: 3,
	/**
	* Sign for positive numbers.
	* Example: +23
	*/
	PlusSign: 4,
	/**
	* Sign for negative numbers.
	* Example: -23
	*/
	MinusSign: 5,
	/**
	* Computer notation for exponential value (n times a power of 10).
	* Example: 1.2E3
	*/
	Exponential: 6,
	/**
	* Human-readable format of exponential.
	* Example: 1.2x103
	*/
	SuperscriptingExponent: 7,
	/**
	* Sign for permille (out of 1000).
	* Example: 23.4‰
	*/
	PerMille: 8,
	/**
	* Infinity, can be used with plus and minus.
	* Example: ∞, +∞, -∞
	*/
	Infinity: 9,
	/**
	* Not a number.
	* Example: NaN
	*/
	NaN: 10,
	/**
	* Symbol used between time units.
	* Example: 10:52
	*/
	TimeSeparator: 11,
	/**
	* Decimal separator for currency values (fallback to `Decimal`).
	* Example: $2,345.67
	*/
	CurrencyDecimal: 12,
	/**
	* Group separator for currency values (fallback to `Group`).
	* Example: $2,345.67
	*/
	CurrencyGroup: 13
};
/**
* The value for each day of the week, based on the `en-US` locale
*
* @publicApi
*
* @deprecated Week locale getters are deprecated
*/
var WeekDay;
(function(WeekDay) {
	WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
	WeekDay[WeekDay["Monday"] = 1] = "Monday";
	WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
	WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
	WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
	WeekDay[WeekDay["Friday"] = 5] = "Friday";
	WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
/**
* Retrieves the locale ID from the currently loaded locale.
* The loaded locale could be, for example, a global one rather than a regional one.
* @param locale A locale code, such as `fr-FR`.
* @returns The locale code. For example, `fr`.
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* This function serves no purpose when relying on the `Intl` API.
*/
function getLocaleId(locale) {
	return findLocaleData(locale)[LocaleDataIndex.LocaleId];
}
/**
* Retrieves day period strings for the given locale.
*
* @param locale A locale code for the locale format rules to use.
* @param formStyle The required grammatical form.
* @param width The required character width.
* @returns An array of localized period strings. For example, `[AM, PM]` for `en-US`.
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* Use `Intl.DateTimeFormat` for date formating instead.
*/
function getLocaleDayPeriods(locale, formStyle, width) {
	const data = findLocaleData(locale);
	return getLastDefinedValue(getLastDefinedValue([data[LocaleDataIndex.DayPeriodsFormat], data[LocaleDataIndex.DayPeriodsStandalone]], formStyle), width);
}
/**
* Retrieves days of the week for the given locale, using the Gregorian calendar.
*
* @param locale A locale code for the locale format rules to use.
* @param formStyle The required grammatical form.
* @param width The required character width.
* @returns An array of localized name strings.
* For example,`[Sunday, Monday, ... Saturday]` for `en-US`.
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* Use `Intl.DateTimeFormat` for date formating instead.
*/
function getLocaleDayNames(locale, formStyle, width) {
	const data = findLocaleData(locale);
	return getLastDefinedValue(getLastDefinedValue([data[LocaleDataIndex.DaysFormat], data[LocaleDataIndex.DaysStandalone]], formStyle), width);
}
/**
* Retrieves months of the year for the given locale, using the Gregorian calendar.
*
* @param locale A locale code for the locale format rules to use.
* @param formStyle The required grammatical form.
* @param width The required character width.
* @returns An array of localized name strings.
* For example,  `[January, February, ...]` for `en-US`.
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* Use `Intl.DateTimeFormat` for date formating instead.
*/
function getLocaleMonthNames(locale, formStyle, width) {
	const data = findLocaleData(locale);
	return getLastDefinedValue(getLastDefinedValue([data[LocaleDataIndex.MonthsFormat], data[LocaleDataIndex.MonthsStandalone]], formStyle), width);
}
/**
* Retrieves Gregorian-calendar eras for the given locale.
* @param locale A locale code for the locale format rules to use.
* @param width The required character width.

* @returns An array of localized era strings.
* For example, `[AD, BC]` for `en-US`.
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* Use `Intl.DateTimeFormat` for date formating instead.
*/
function getLocaleEraNames(locale, width) {
	const erasData = findLocaleData(locale)[LocaleDataIndex.Eras];
	return getLastDefinedValue(erasData, width);
}
/**
* Retrieves a localized date-value formatting string.
*
* @param locale A locale code for the locale format rules to use.
* @param width The format type.
* @returns The localized formatting string.
* @see {@link FormatWidth}
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* Use `Intl.DateTimeFormat` for date formating instead.
*/
function getLocaleDateFormat(locale, width) {
	return getLastDefinedValue(findLocaleData(locale)[LocaleDataIndex.DateFormat], width);
}
/**
* Retrieves a localized time-value formatting string.
*
* @param locale A locale code for the locale format rules to use.
* @param width The format type.
* @returns The localized formatting string.
* @see {@link FormatWidth}
* @see [Internationalization (i18n) Guide](guide/i18n)

* @publicApi
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* Use `Intl.DateTimeFormat` for date formating instead.
*/
function getLocaleTimeFormat(locale, width) {
	return getLastDefinedValue(findLocaleData(locale)[LocaleDataIndex.TimeFormat], width);
}
/**
* Retrieves a localized date-time formatting string.
*
* @param locale A locale code for the locale format rules to use.
* @param width The format type.
* @returns The localized formatting string.
* @see {@link FormatWidth}
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* Use `Intl.DateTimeFormat` for date formating instead.
*/
function getLocaleDateTimeFormat(locale, width) {
	const dateTimeFormatData = findLocaleData(locale)[LocaleDataIndex.DateTimeFormat];
	return getLastDefinedValue(dateTimeFormatData, width);
}
/**
* Retrieves a localized number symbol that can be used to replace placeholders in number formats.
* @param locale The locale code.
* @param symbol The symbol to localize. Must be one of `NumberSymbol`.
* @returns The character for the localized symbol.
* @see {@link NumberSymbol}
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* Use `Intl.NumberFormat` to format numbers instead.
*/
function getLocaleNumberSymbol(locale, symbol) {
	const data = findLocaleData(locale);
	const res = data[LocaleDataIndex.NumberSymbols][symbol];
	if (typeof res === "undefined") {
		if (symbol === NumberSymbol.CurrencyDecimal) return data[LocaleDataIndex.NumberSymbols][NumberSymbol.Decimal];
		else if (symbol === NumberSymbol.CurrencyGroup) return data[LocaleDataIndex.NumberSymbols][NumberSymbol.Group];
	}
	return res;
}
/**
* Retrieves a number format for a given locale.
*
* Numbers are formatted using patterns, like `#,###.00`. For example, the pattern `#,###.00`
* when used to format the number 12345.678 could result in "12'345,678". That would happen if the
* grouping separator for your language is an apostrophe, and the decimal separator is a comma.
*
* <b>Important:</b> The characters `.` `,` `0` `#` (and others below) are special placeholders
* that stand for the decimal separator, and so on, and are NOT real characters.
* You must NOT "translate" the placeholders. For example, don't change `.` to `,` even though in
* your language the decimal point is written with a comma. The symbols should be replaced by the
* local equivalents, using the appropriate `NumberSymbol` for your language.
*
* Here are the special characters used in number patterns:
*
* | Symbol | Meaning |
* |--------|---------|
* | . | Replaced automatically by the character used for the decimal point. |
* | , | Replaced by the "grouping" (thousands) separator. |
* | 0 | Replaced by a digit (or zero if there aren't enough digits). |
* | # | Replaced by a digit (or nothing if there aren't enough). |
* | ¤ | Replaced by a currency symbol, such as $ or USD. |
* | % | Marks a percent format. The % symbol may change position, but must be retained. |
* | E | Marks a scientific format. The E symbol may change position, but must be retained. |
* | ' | Special characters used as literal characters are quoted with ASCII single quotes. |
*
* @param locale A locale code for the locale format rules to use.
* @param type The type of numeric value to be formatted (such as `Decimal` or `Currency`.)
* @returns The localized format string.
* @see {@link NumberFormatStyle}
* @see [CLDR website](http://cldr.unicode.org/translation/number-patterns)
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* Let `Intl.NumberFormat` determine the number format instead
*/
function getLocaleNumberFormat(locale, type) {
	return findLocaleData(locale)[LocaleDataIndex.NumberFormats][type];
}
/**
* Retrieves the currency values for a given locale.
* @param locale A locale code for the locale format rules to use.
* @returns The currency values.
* @see [Internationalization (i18n) Guide](guide/i18n)
*/
function getLocaleCurrencies(locale) {
	return findLocaleData(locale)[LocaleDataIndex.Currencies];
}
/**
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* Use `Intl.PluralRules` instead
*/
var getLocalePluralCase = getLocalePluralCase$1;
function checkFullData(data) {
	if (!data[LocaleDataIndex.ExtraData]) throw new RuntimeError(2303, ngDevMode && `Missing extra locale data for the locale "${data[LocaleDataIndex.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`);
}
/**
* Retrieves locale-specific rules used to determine which day period to use
* when more than one period is defined for a locale.
*
* There is a rule for each defined day period. The
* first rule is applied to the first day period and so on.
* Fall back to AM/PM when no rules are available.
*
* A rule can specify a period as time range, or as a single time value.
*
* This functionality is only available when you have loaded the full locale data.
* See the ["I18n guide"](guide/i18n/format-data-locale).
*
* @param locale A locale code for the locale format rules to use.
* @returns The rules for the locale, a single time value or array of *from-time, to-time*,
* or null if no periods are available.
*
* @see {@link getLocaleExtraDayPeriods}
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* Let `Intl.DateTimeFormat` determine the day period instead.
*/
function getLocaleExtraDayPeriodRules(locale) {
	const data = findLocaleData(locale);
	checkFullData(data);
	return (data[LocaleDataIndex.ExtraData][2] || []).map((rule) => {
		if (typeof rule === "string") return extractTime(rule);
		return [extractTime(rule[0]), extractTime(rule[1])];
	});
}
/**
* Retrieves locale-specific day periods, which indicate roughly how a day is broken up
* in different languages.
* For example, for `en-US`, periods are morning, noon, afternoon, evening, and midnight.
*
* This functionality is only available when you have loaded the full locale data.
* See the ["I18n guide"](guide/i18n/format-data-locale).
*
* @param locale A locale code for the locale format rules to use.
* @param formStyle The required grammatical form.
* @param width The required character width.
* @returns The translated day-period strings.
* @see {@link getLocaleExtraDayPeriodRules}
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* To extract a day period use `Intl.DateTimeFormat` with the `dayPeriod` option instead.
*/
function getLocaleExtraDayPeriods(locale, formStyle, width) {
	const data = findLocaleData(locale);
	checkFullData(data);
	return getLastDefinedValue(getLastDefinedValue([data[LocaleDataIndex.ExtraData][0], data[LocaleDataIndex.ExtraData][1]], formStyle) || [], width) || [];
}
/**
* Retrieves the first value that is defined in an array, going backwards from an index position.
*
* To avoid repeating the same data (as when the "format" and "standalone" forms are the same)
* add the first value to the locale data arrays, and add other values only if they are different.
*
* @param data The data array to retrieve from.
* @param index A 0-based index into the array to start from.
* @returns The value immediately before the given index position.
* @see [Internationalization (i18n) Guide](guide/i18n)
*
*/
function getLastDefinedValue(data, index) {
	for (let i = index; i > -1; i--) if (typeof data[i] !== "undefined") return data[i];
	throw new RuntimeError(2304, ngDevMode && "Locale data API: locale data undefined");
}
/**
* Extracts the hours and minutes from a string like "15:45"
*/
function extractTime(time) {
	const [h, m] = time.split(":");
	return {
		hours: +h,
		minutes: +m
	};
}
/**
* Retrieves the currency symbol for a given currency code.
*
* For example, for the default `en-US` locale, the code `USD` can
* be represented by the narrow symbol `$` or the wide symbol `US$`.
*
* @param code The currency code.
* @param format The format, `wide` or `narrow`.
* @param locale A locale code for the locale format rules to use.
*
* @returns The symbol, or the currency code if no symbol is available.
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* You can use `Intl.NumberFormat().formatToParts()` to extract the currency symbol.
* For example: `Intl.NumberFormat('en', {style:'currency', currency: 'USD'}).formatToParts().find(part => part.type === 'currency').value`
* returns `$` for USD currency code in the `en` locale.
* Note: `US$` is a currency symbol for the `en-ca` locale but not the `en-us` locale.
*/
function getCurrencySymbol(code, format, locale = "en") {
	const currency = getLocaleCurrencies(locale)[code] || CURRENCIES_EN[code] || [];
	const symbolNarrow = currency[1];
	if (format === "narrow" && typeof symbolNarrow === "string") return symbolNarrow;
	return currency[0] || code;
}
var DEFAULT_NB_OF_CURRENCY_DIGITS = 2;
/**
* Reports the number of decimal digits for a given currency.
* The value depends upon the presence of cents in that particular currency.
*
* @param code The currency code.
* @returns The number of decimal digits, typically 0 or 2.
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*
* @deprecated Angular recommends relying on the `Intl` API for i18n.
* This function should not be used anymore. Let `Intl.NumberFormat` determine the number of digits to display for the currency
*/
function getNumberOfCurrencyDigits(code) {
	let digits;
	const currency = CURRENCIES_EN[code];
	if (currency) digits = currency[2];
	return typeof digits === "number" ? digits : DEFAULT_NB_OF_CURRENCY_DIGITS;
}
var ISO8601_DATE_REGEX = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
var NAMED_FORMATS = {};
var DATE_FORMATS_SPLIT = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
var MAX_DATE_FORMAT_LENGTH = 256;
/**
* @ngModule CommonModule
* @description
*
* Formats a date according to locale rules.
*
* @param value The date to format, as a Date, or a number (milliseconds since UTC epoch)
* or an [ISO date-time string](https://www.w3.org/TR/NOTE-datetime).
* @param format The date-time components to include. See `DatePipe` for details.
* @param locale A locale code for the locale format rules to use.
* @param timezone The time zone. A time zone offset from GMT (such as `'+0430'`).
* If not specified, uses host system settings.
*
* @returns The formatted date string.
*
* @see {@link DatePipe}
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*/
function formatDate(value, format, locale, timezone) {
	let date = toDate(value);
	assertValidDateFormatLength(format);
	format = getNamedFormat(locale, format) || format;
	let parts = [];
	let match;
	while (format) {
		match = DATE_FORMATS_SPLIT.exec(format);
		if (match) {
			parts = parts.concat(match.slice(1));
			const part = parts.pop();
			if (!part) break;
			format = part;
		} else {
			parts.push(format);
			break;
		}
	}
	if (typeof ngDevMode === "undefined" || ngDevMode) assertValidDateFormat(parts);
	let dateTimezoneOffset = date.getTimezoneOffset();
	if (timezone) {
		dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
		date = convertTimezoneToLocal(date, timezone);
	}
	let text = "";
	parts.forEach((value) => {
		const dateFormatter = getDateFormatter(value);
		text += dateFormatter ? dateFormatter(date, locale, dateTimezoneOffset) : value === "''" ? "'" : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
	});
	return text;
}
function assertValidDateFormatLength(format) {
	if (format.length > MAX_DATE_FORMAT_LENGTH) throw new RuntimeError(2300, ngDevMode && `Date format is too long. Exceeded maximum length of ${MAX_DATE_FORMAT_LENGTH} characters.`);
}
/**
* Asserts that the given date format is free from common mistakes.  Throws an
* error if one is found (except for the case of all "Y", in which case we just
* log a warning).  This should only be called in development mode.
*/
function assertValidDateFormat(parts) {
	if (parts.some((part) => /^Y+$/.test(part)) && !parts.some((part) => /^w+$/.test(part))) {
		const message = `Suspicious use of week-based year "Y" in date pattern "${parts.join("")}". Did you mean to use calendar year "y" instead?`;
		if (parts.length === 1) console.error(formatRuntimeError(2300, message));
		else throw new RuntimeError(2300, message);
	}
}
/**
* Create a new Date object with the given date value, and the time set to midnight.
*
* We cannot use `new Date(year, month, date)` because it maps years between 0 and 99 to 1900-1999.
* See: https://github.com/angular/angular/issues/40377
*
* Note that this function returns a Date object whose time is midnight in the current locale's
* timezone. In the future we might want to change this to be midnight in UTC, but this would be a
* considerable breaking change.
*/
function createDate(year, month, date) {
	const newDate = /* @__PURE__ */ new Date(0);
	newDate.setFullYear(year, month, date);
	newDate.setHours(0, 0, 0);
	return newDate;
}
function getNamedFormat(locale, format) {
	const localeId = getLocaleId(locale);
	NAMED_FORMATS[localeId] ??= {};
	if (NAMED_FORMATS[localeId][format]) return NAMED_FORMATS[localeId][format];
	let formatValue = "";
	switch (format) {
		case "shortDate":
			formatValue = getLocaleDateFormat(locale, FormatWidth.Short);
			break;
		case "mediumDate":
			formatValue = getLocaleDateFormat(locale, FormatWidth.Medium);
			break;
		case "longDate":
			formatValue = getLocaleDateFormat(locale, FormatWidth.Long);
			break;
		case "fullDate":
			formatValue = getLocaleDateFormat(locale, FormatWidth.Full);
			break;
		case "shortTime":
			formatValue = getLocaleTimeFormat(locale, FormatWidth.Short);
			break;
		case "mediumTime":
			formatValue = getLocaleTimeFormat(locale, FormatWidth.Medium);
			break;
		case "longTime":
			formatValue = getLocaleTimeFormat(locale, FormatWidth.Long);
			break;
		case "fullTime":
			formatValue = getLocaleTimeFormat(locale, FormatWidth.Full);
			break;
		case "short":
			const shortTime = getNamedFormat(locale, "shortTime");
			const shortDate = getNamedFormat(locale, "shortDate");
			formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Short), [shortTime, shortDate]);
			break;
		case "medium":
			const mediumTime = getNamedFormat(locale, "mediumTime");
			const mediumDate = getNamedFormat(locale, "mediumDate");
			formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Medium), [mediumTime, mediumDate]);
			break;
		case "long":
			const longTime = getNamedFormat(locale, "longTime");
			const longDate = getNamedFormat(locale, "longDate");
			formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Long), [longTime, longDate]);
			break;
		case "full":
			const fullTime = getNamedFormat(locale, "fullTime");
			const fullDate = getNamedFormat(locale, "fullDate");
			formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Full), [fullTime, fullDate]);
	}
	if (formatValue) NAMED_FORMATS[localeId][format] = formatValue;
	return formatValue;
}
function formatDateTime(str, opt_values) {
	if (opt_values) str = str.replace(/\{([^}]+)}/g, function(match, key) {
		return opt_values != null && key in opt_values ? opt_values[key] : match;
	});
	return str;
}
function padNumber(num, digits, minusSign = "-", trim, negWrap) {
	let neg = "";
	if (num < 0 || negWrap && num <= 0) {
		if (negWrap) num = -num + 1;
		else {
			num = -num;
			neg = minusSign;
		}
	}
	let strNum = String(num);
	while (strNum.length < digits) strNum = "0" + strNum;
	if (trim) strNum = strNum.slice(strNum.length - digits);
	return neg + strNum;
}
function formatFractionalSeconds(milliseconds, digits) {
	return padNumber(milliseconds, 3).substring(0, digits);
}
/**
* Returns a date formatter that transforms a date into its locale digit representation
*/
function dateGetter(name, size, offset = 0, trim = false, negWrap = false) {
	return function(date, locale) {
		let part = getDatePart(name, date);
		if (offset > 0 || part > -offset) part += offset;
		if (name === 3) {
			if (part === 0 && offset === -12) part = 12;
		} else if (name === 6) return formatFractionalSeconds(part, size);
		const localeMinus = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
		return padNumber(part, size, localeMinus, trim, negWrap);
	};
}
function getDatePart(part, date) {
	switch (part) {
		case 0: return date.getFullYear();
		case 1: return date.getMonth();
		case 2: return date.getDate();
		case 3: return date.getHours();
		case 4: return date.getMinutes();
		case 5: return date.getSeconds();
		case 6: return date.getMilliseconds();
		case 7: return date.getDay();
		default: throw new RuntimeError(2301, ngDevMode && `Unknown DateType value "${part}".`);
	}
}
/**
* Returns a date formatter that transforms a date into its locale string representation
*/
function dateStrGetter(name, width, form = FormStyle.Format, extended = false) {
	return function(date, locale) {
		return getDateTranslation(date, locale, name, width, form, extended);
	};
}
/**
* Returns the locale translation of a date for a given form, type and width
*/
function getDateTranslation(date, locale, name, width, form, extended) {
	switch (name) {
		case 2: return getLocaleMonthNames(locale, form, width)[date.getMonth()];
		case 1: return getLocaleDayNames(locale, form, width)[date.getDay()];
		case 0:
			const currentHours = date.getHours();
			const currentMinutes = date.getMinutes();
			if (extended) {
				const rules = getLocaleExtraDayPeriodRules(locale);
				const dayPeriods = getLocaleExtraDayPeriods(locale, form, width);
				const index = rules.findIndex((rule) => {
					if (Array.isArray(rule)) {
						const [from, to] = rule;
						const afterFrom = currentHours >= from.hours && currentMinutes >= from.minutes;
						const beforeTo = currentHours < to.hours || currentHours === to.hours && currentMinutes < to.minutes;
						if (from.hours < to.hours) {
							if (afterFrom && beforeTo) return true;
						} else if (afterFrom || beforeTo) return true;
					} else if (rule.hours === currentHours && rule.minutes === currentMinutes) return true;
					return false;
				});
				if (index !== -1) return dayPeriods[index];
			}
			return getLocaleDayPeriods(locale, form, width)[currentHours < 12 ? 0 : 1];
		case 3: return getLocaleEraNames(locale, width)[date.getFullYear() <= 0 ? 0 : 1];
		default:
			const unexpected = name;
			throw new RuntimeError(2302, ngDevMode && `unexpected translation type ${unexpected}`);
	}
}
/**
* Returns a date formatter that transforms a date and an offset into a timezone with ISO8601 or
* GMT format depending on the width (eg: short = +0430, short:GMT = GMT+4, long = GMT+04:30,
* extended = +04:30)
*/
function timeZoneGetter(width) {
	return function(date, locale, offset) {
		const zone = -1 * offset;
		const minusSign = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
		const hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
		switch (width) {
			case 0: return (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + padNumber(Math.abs(zone % 60), 2, minusSign);
			case 1: return "GMT" + (zone >= 0 ? "+" : "") + padNumber(hours, 1, minusSign);
			case 2: return "GMT" + (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + ":" + padNumber(Math.abs(zone % 60), 2, minusSign);
			case 3: if (offset === 0) return "Z";
			else return (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + ":" + padNumber(Math.abs(zone % 60), 2, minusSign);
			default: throw new RuntimeError(2310, ngDevMode && `Unknown zone width "${width}"`);
		}
	};
}
var JANUARY = 0;
var THURSDAY = 4;
function getFirstThursdayOfYear(year) {
	const firstDayOfYear = createDate(year, JANUARY, 1).getDay();
	return createDate(year, 0, 1 + (firstDayOfYear <= THURSDAY ? THURSDAY : 11) - firstDayOfYear);
}
/**
*  ISO Week starts on day 1 (Monday) and ends with day 0 (Sunday)
*/
function getThursdayThisIsoWeek(datetime) {
	const currentDay = datetime.getDay();
	const deltaToThursday = currentDay === 0 ? -3 : THURSDAY - currentDay;
	return createDate(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + deltaToThursday);
}
function weekGetter(size, monthBased = false) {
	return function(date, locale) {
		let result;
		if (monthBased) {
			const nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
			const today = date.getDate();
			result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
		} else {
			const thisThurs = getThursdayThisIsoWeek(date);
			const firstThurs = getFirstThursdayOfYear(thisThurs.getFullYear());
			const diff = thisThurs.getTime() - firstThurs.getTime();
			result = 1 + Math.round(diff / 6048e5);
		}
		return padNumber(result, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
	};
}
/**
* Returns a date formatter that provides the week-numbering year for the input date.
*/
function weekNumberingYearGetter(size, trim = false) {
	return function(date, locale) {
		return padNumber(getThursdayThisIsoWeek(date).getFullYear(), size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign), trim);
	};
}
var DATE_FORMATS = {};
function getDateFormatter(format) {
	if (DATE_FORMATS[format]) return DATE_FORMATS[format];
	let formatter;
	switch (format) {
		case "G":
		case "GG":
		case "GGG":
			formatter = dateStrGetter(3, TranslationWidth.Abbreviated);
			break;
		case "GGGG":
			formatter = dateStrGetter(3, TranslationWidth.Wide);
			break;
		case "GGGGG":
			formatter = dateStrGetter(3, TranslationWidth.Narrow);
			break;
		case "y":
			formatter = dateGetter(0, 1, 0, false, true);
			break;
		case "yy":
			formatter = dateGetter(0, 2, 0, true, true);
			break;
		case "yyy":
			formatter = dateGetter(0, 3, 0, false, true);
			break;
		case "yyyy":
			formatter = dateGetter(0, 4, 0, false, true);
			break;
		case "Y":
			formatter = weekNumberingYearGetter(1);
			break;
		case "YY":
			formatter = weekNumberingYearGetter(2, true);
			break;
		case "YYY":
			formatter = weekNumberingYearGetter(3);
			break;
		case "YYYY":
			formatter = weekNumberingYearGetter(4);
			break;
		case "M":
		case "L":
			formatter = dateGetter(1, 1, 1);
			break;
		case "MM":
		case "LL":
			formatter = dateGetter(1, 2, 1);
			break;
		case "MMM":
			formatter = dateStrGetter(2, TranslationWidth.Abbreviated);
			break;
		case "MMMM":
			formatter = dateStrGetter(2, TranslationWidth.Wide);
			break;
		case "MMMMM":
			formatter = dateStrGetter(2, TranslationWidth.Narrow);
			break;
		case "LLL":
			formatter = dateStrGetter(2, TranslationWidth.Abbreviated, FormStyle.Standalone);
			break;
		case "LLLL":
			formatter = dateStrGetter(2, TranslationWidth.Wide, FormStyle.Standalone);
			break;
		case "LLLLL":
			formatter = dateStrGetter(2, TranslationWidth.Narrow, FormStyle.Standalone);
			break;
		case "w":
			formatter = weekGetter(1);
			break;
		case "ww":
			formatter = weekGetter(2);
			break;
		case "W":
			formatter = weekGetter(1, true);
			break;
		case "d":
			formatter = dateGetter(2, 1);
			break;
		case "dd":
			formatter = dateGetter(2, 2);
			break;
		case "c":
		case "cc":
			formatter = dateGetter(7, 1);
			break;
		case "ccc":
			formatter = dateStrGetter(1, TranslationWidth.Abbreviated, FormStyle.Standalone);
			break;
		case "cccc":
			formatter = dateStrGetter(1, TranslationWidth.Wide, FormStyle.Standalone);
			break;
		case "ccccc":
			formatter = dateStrGetter(1, TranslationWidth.Narrow, FormStyle.Standalone);
			break;
		case "cccccc":
			formatter = dateStrGetter(1, TranslationWidth.Short, FormStyle.Standalone);
			break;
		case "E":
		case "EE":
		case "EEE":
			formatter = dateStrGetter(1, TranslationWidth.Abbreviated);
			break;
		case "EEEE":
			formatter = dateStrGetter(1, TranslationWidth.Wide);
			break;
		case "EEEEE":
			formatter = dateStrGetter(1, TranslationWidth.Narrow);
			break;
		case "EEEEEE":
			formatter = dateStrGetter(1, TranslationWidth.Short);
			break;
		case "a":
		case "aa":
		case "aaa":
			formatter = dateStrGetter(0, TranslationWidth.Abbreviated);
			break;
		case "aaaa":
			formatter = dateStrGetter(0, TranslationWidth.Wide);
			break;
		case "aaaaa":
			formatter = dateStrGetter(0, TranslationWidth.Narrow);
			break;
		case "b":
		case "bb":
		case "bbb":
			formatter = dateStrGetter(0, TranslationWidth.Abbreviated, FormStyle.Standalone, true);
			break;
		case "bbbb":
			formatter = dateStrGetter(0, TranslationWidth.Wide, FormStyle.Standalone, true);
			break;
		case "bbbbb":
			formatter = dateStrGetter(0, TranslationWidth.Narrow, FormStyle.Standalone, true);
			break;
		case "B":
		case "BB":
		case "BBB":
			formatter = dateStrGetter(0, TranslationWidth.Abbreviated, FormStyle.Format, true);
			break;
		case "BBBB":
			formatter = dateStrGetter(0, TranslationWidth.Wide, FormStyle.Format, true);
			break;
		case "BBBBB":
			formatter = dateStrGetter(0, TranslationWidth.Narrow, FormStyle.Format, true);
			break;
		case "h":
			formatter = dateGetter(3, 1, -12);
			break;
		case "hh":
			formatter = dateGetter(3, 2, -12);
			break;
		case "H":
			formatter = dateGetter(3, 1);
			break;
		case "HH":
			formatter = dateGetter(3, 2);
			break;
		case "m":
			formatter = dateGetter(4, 1);
			break;
		case "mm":
			formatter = dateGetter(4, 2);
			break;
		case "s":
			formatter = dateGetter(5, 1);
			break;
		case "ss":
			formatter = dateGetter(5, 2);
			break;
		case "S":
			formatter = dateGetter(6, 1);
			break;
		case "SS":
			formatter = dateGetter(6, 2);
			break;
		case "SSS":
			formatter = dateGetter(6, 3);
			break;
		case "Z":
		case "ZZ":
		case "ZZZ":
			formatter = timeZoneGetter(0);
			break;
		case "ZZZZZ":
			formatter = timeZoneGetter(3);
			break;
		case "O":
		case "OO":
		case "OOO":
		case "z":
		case "zz":
		case "zzz":
			formatter = timeZoneGetter(1);
			break;
		case "OOOO":
		case "ZZZZ":
		case "zzzz":
			formatter = timeZoneGetter(2);
			break;
		default: return null;
	}
	DATE_FORMATS[format] = formatter;
	return formatter;
}
function timezoneToOffset(timezone, fallback) {
	timezone = timezone.replace(/:/g, "");
	const requestedTimezoneOffset = Date.parse("Jan 01, 1970 00:00:00 " + timezone) / 6e4;
	return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
}
function addDateMinutes(date, minutes) {
	date = new Date(date.getTime());
	date.setMinutes(date.getMinutes() + minutes);
	return date;
}
function convertTimezoneToLocal(date, timezone, reverse) {
	const reverseValue = -1;
	const dateTimezoneOffset = date.getTimezoneOffset();
	return addDateMinutes(date, reverseValue * (timezoneToOffset(timezone, dateTimezoneOffset) - dateTimezoneOffset));
}
/**
* Converts a value to date.
*
* Supported input formats:
* - `Date`
* - number: timestamp
* - string: numeric (e.g. "1234"), ISO and date strings in a format supported by
*   [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
*   Note: ISO strings without time return a date without timeoffset.
*
* Throws if unable to convert to a date.
*/
function toDate(value) {
	if (isDate(value)) return value;
	if (typeof value === "number" && !isNaN(value)) return new Date(value);
	if (typeof value === "string") {
		value = value.trim();
		if (/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(value)) {
			const [y, m = 1, d = 1] = value.split("-").map((val) => +val);
			return createDate(y, m - 1, d);
		}
		const parsedNb = parseFloat(value);
		if (!isNaN(value - parsedNb)) return new Date(parsedNb);
		let match;
		if (match = value.match(ISO8601_DATE_REGEX)) return isoStringToDate(match);
	}
	const date = new Date(value);
	if (!isDate(date)) throw new RuntimeError(2311, ngDevMode && `Unable to convert "${value}" into a date`);
	return date;
}
/**
* Converts a date in ISO8601 to a Date.
* Used instead of `Date.parse` because of browser discrepancies.
*/
function isoStringToDate(match) {
	const date = /* @__PURE__ */ new Date(0);
	let tzHour = 0;
	let tzMin = 0;
	const dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
	const timeSetter = match[8] ? date.setUTCHours : date.setHours;
	if (match[9]) {
		tzHour = Number(match[9] + match[10]);
		tzMin = Number(match[9] + match[11]);
	}
	dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
	const h = Number(match[4] || 0) - tzHour;
	const m = Number(match[5] || 0) - tzMin;
	const s = Number(match[6] || 0);
	const ms = Math.floor(parseFloat("0." + (match[7] || 0)) * 1e3);
	timeSetter.call(date, h, m, s, ms);
	return date;
}
function isDate(value) {
	return value instanceof Date && !isNaN(value.valueOf());
}
var NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
var MAX_DIGITS = 22;
var DECIMAL_SEP = ".";
var ZERO_CHAR = "0";
var PATTERN_SEP = ";";
var GROUP_SEP = ",";
var DIGIT_CHAR = "#";
var CURRENCY_CHAR = "¤";
var PERCENT_CHAR = "%";
/**
* Transforms a number to a locale string based on a style and a format.
*/
function formatNumberToLocaleString(value, pattern, locale, groupSymbol, decimalSymbol, digitsInfo, isPercent = false) {
	let formattedText = "";
	let isZero = false;
	if (!isFinite(value)) formattedText = getLocaleNumberSymbol(locale, NumberSymbol.Infinity);
	else {
		let parsedNumber = parseNumber(value);
		if (isPercent) parsedNumber = toPercent(parsedNumber);
		let minInt = pattern.minInt;
		let minFraction = pattern.minFrac;
		let maxFraction = pattern.maxFrac;
		if (digitsInfo) {
			const parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);
			if (parts === null) throw new RuntimeError(2306, ngDevMode && `${digitsInfo} is not a valid digit info`);
			const minIntPart = parts[1];
			const minFractionPart = parts[3];
			const maxFractionPart = parts[5];
			if (minIntPart != null) minInt = parseIntAutoRadix(minIntPart);
			if (minFractionPart != null) minFraction = parseIntAutoRadix(minFractionPart);
			if (maxFractionPart != null) maxFraction = parseIntAutoRadix(maxFractionPart);
			else if (minFractionPart != null && minFraction > maxFraction) maxFraction = minFraction;
			const MAX_ALLOWED_DIGITS = 100;
			if (minInt > MAX_ALLOWED_DIGITS || minFraction > MAX_ALLOWED_DIGITS || maxFraction > MAX_ALLOWED_DIGITS) throw new RuntimeError(2306, ngDevMode && `${digitsInfo} is not a valid digit info. Exceeded maximum limits of ${MAX_ALLOWED_DIGITS} digits.`);
		}
		roundNumber(parsedNumber, minFraction, maxFraction);
		let digits = parsedNumber.digits;
		let integerLen = parsedNumber.integerLen;
		const exponent = parsedNumber.exponent;
		let decimals = [];
		isZero = digits.every((d) => !d);
		for (; integerLen < minInt; integerLen++) digits.unshift(0);
		for (; integerLen < 0; integerLen++) digits.unshift(0);
		if (integerLen > 0) decimals = digits.splice(integerLen, digits.length);
		else {
			decimals = digits;
			digits = [0];
		}
		const groups = [];
		if (digits.length >= pattern.lgSize) groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(""));
		while (digits.length > pattern.gSize) groups.unshift(digits.splice(-pattern.gSize, digits.length).join(""));
		if (digits.length) groups.unshift(digits.join(""));
		formattedText = groups.join(getLocaleNumberSymbol(locale, groupSymbol));
		if (decimals.length) formattedText += getLocaleNumberSymbol(locale, decimalSymbol) + decimals.join("");
		if (exponent) formattedText += getLocaleNumberSymbol(locale, NumberSymbol.Exponential) + "+" + exponent;
	}
	if (value < 0 && !isZero) formattedText = pattern.negPre + formattedText + pattern.negSuf;
	else formattedText = pattern.posPre + formattedText + pattern.posSuf;
	return formattedText;
}
/**
* @ngModule CommonModule
* @description
*
* Formats a number as currency using locale rules.
*
* @param value The number to format.
* @param locale A locale code for the locale format rules to use.
* @param currency A string containing the currency symbol or its name,
* such as "$" or "Canadian Dollar". Used in output string, but does not affect the operation
* of the function.
* @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
* currency code, such as `USD` for the US dollar and `EUR` for the euro.
* Used to determine the number of digits in the decimal part.
* @param digitsInfo Decimal representation options, specified by a string in the following format:
* `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
*
* @returns The formatted currency value.
*
* @see {@link formatNumber}
* @see {@link DecimalPipe}
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*/
function formatCurrency(value, locale, currency, currencyCode, digitsInfo) {
	const pattern = parseNumberFormat(getLocaleNumberFormat(locale, NumberFormatStyle.Currency), getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
	pattern.minFrac = getNumberOfCurrencyDigits(currencyCode);
	pattern.maxFrac = pattern.minFrac;
	return formatNumberToLocaleString(value, pattern, locale, NumberSymbol.CurrencyGroup, NumberSymbol.CurrencyDecimal, digitsInfo).replace(CURRENCY_CHAR, currency).replace(CURRENCY_CHAR, "").trim();
}
/**
* @ngModule CommonModule
* @description
*
* Formats a number as a percentage according to locale rules.
*
* @param value The number to format.
* @param locale A locale code for the locale format rules to use.
* @param digitsInfo Decimal representation options, specified by a string in the following format:
* `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
*
* @returns The formatted percentage value.
*
* @see {@link formatNumber}
* @see {@link DecimalPipe}
* @see [Internationalization (i18n) Guide](guide/i18n)
* @publicApi
*
*/
function formatPercent(value, locale, digitsInfo) {
	return formatNumberToLocaleString(value, parseNumberFormat(getLocaleNumberFormat(locale, NumberFormatStyle.Percent), getLocaleNumberSymbol(locale, NumberSymbol.MinusSign)), locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo, true).replace(new RegExp(PERCENT_CHAR, "g"), getLocaleNumberSymbol(locale, NumberSymbol.PercentSign));
}
/**
* @ngModule CommonModule
* @description
*
* Formats a number as text, with group sizing, separator, and other
* parameters based on the locale.
*
* @param value The number to format.
* @param locale A locale code for the locale format rules to use.
* @param digitsInfo Decimal representation options, specified by a string in the following format:
* `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`. See `DecimalPipe` for more details.
*
* @returns The formatted text string.
* @see [Internationalization (i18n) Guide](guide/i18n)
*
* @publicApi
*/
function formatNumber(value, locale, digitsInfo) {
	return formatNumberToLocaleString(value, parseNumberFormat(getLocaleNumberFormat(locale, NumberFormatStyle.Decimal), getLocaleNumberSymbol(locale, NumberSymbol.MinusSign)), locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo);
}
function parseNumberFormat(format, minusSign = "-") {
	const p = {
		minInt: 1,
		minFrac: 0,
		maxFrac: 0,
		posPre: "",
		posSuf: "",
		negPre: "",
		negSuf: "",
		gSize: 0,
		lgSize: 0
	};
	const patternParts = format.split(PATTERN_SEP);
	const positive = patternParts[0];
	const negative = patternParts[1];
	const positiveParts = positive.indexOf(DECIMAL_SEP) !== -1 ? positive.split(DECIMAL_SEP) : [positive.substring(0, positive.lastIndexOf(ZERO_CHAR) + 1), positive.substring(positive.lastIndexOf(ZERO_CHAR) + 1)], integer = positiveParts[0], fraction = positiveParts[1] || "";
	p.posPre = integer.substring(0, integer.indexOf(DIGIT_CHAR));
	for (let i = 0; i < fraction.length; i++) {
		const ch = fraction.charAt(i);
		if (ch === ZERO_CHAR) p.minFrac = p.maxFrac = i + 1;
		else if (ch === DIGIT_CHAR) p.maxFrac = i + 1;
		else p.posSuf += ch;
	}
	const groups = integer.split(GROUP_SEP);
	p.gSize = groups[1] ? groups[1].length : 0;
	p.lgSize = groups[2] || groups[1] ? (groups[2] || groups[1]).length : 0;
	if (negative) {
		const trunkLen = positive.length - p.posPre.length - p.posSuf.length, pos = negative.indexOf(DIGIT_CHAR);
		p.negPre = negative.substring(0, pos).replace(/'/g, "");
		p.negSuf = negative.slice(pos + trunkLen).replace(/'/g, "");
	} else {
		p.negPre = minusSign + p.posPre;
		p.negSuf = p.posSuf;
	}
	return p;
}
function toPercent(parsedNumber) {
	if (parsedNumber.digits[0] === 0) return parsedNumber;
	const fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;
	if (parsedNumber.exponent) parsedNumber.exponent += 2;
	else {
		if (fractionLen === 0) parsedNumber.digits.push(0, 0);
		else if (fractionLen === 1) parsedNumber.digits.push(0);
		parsedNumber.integerLen += 2;
	}
	return parsedNumber;
}
/**
* Parses a number.
* Significant bits of this parse algorithm came from https://github.com/MikeMcl/big.js/
*/
function parseNumber(num) {
	let numStr = Math.abs(num) + "";
	let exponent = 0, digits, integerLen;
	let i, j, zeros;
	if ((integerLen = numStr.indexOf(DECIMAL_SEP)) > -1) numStr = numStr.replace(DECIMAL_SEP, "");
	if ((i = numStr.search(/e/i)) > 0) {
		if (integerLen < 0) integerLen = i;
		integerLen += +numStr.slice(i + 1);
		numStr = numStr.substring(0, i);
	} else if (integerLen < 0) integerLen = numStr.length;
	for (i = 0; numStr.charAt(i) === ZERO_CHAR; i++);
	if (i === (zeros = numStr.length)) {
		digits = [0];
		integerLen = 1;
	} else {
		zeros--;
		while (numStr.charAt(zeros) === ZERO_CHAR) zeros--;
		integerLen -= i;
		digits = [];
		for (j = 0; i <= zeros; i++, j++) digits[j] = Number(numStr.charAt(i));
	}
	if (integerLen > MAX_DIGITS) {
		digits = digits.splice(0, 21);
		exponent = integerLen - 1;
		integerLen = 1;
	}
	return {
		digits,
		exponent,
		integerLen
	};
}
/**
* Round the parsed number to the specified number of decimal places
* This function changes the parsedNumber in-place
*/
function roundNumber(parsedNumber, minFrac, maxFrac) {
	if (minFrac > maxFrac) throw new RuntimeError(2307, ngDevMode && `The minimum number of digits after fraction (${minFrac}) is higher than the maximum (${maxFrac}).`);
	let digits = parsedNumber.digits;
	let fractionLen = digits.length - parsedNumber.integerLen;
	const fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac);
	let roundAt = fractionSize + parsedNumber.integerLen;
	let digit = digits[roundAt];
	if (roundAt > 0) {
		digits.splice(Math.max(parsedNumber.integerLen, roundAt));
		for (let j = roundAt; j < digits.length; j++) digits[j] = 0;
	} else {
		fractionLen = Math.max(0, fractionLen);
		parsedNumber.integerLen = 1;
		digits.length = Math.max(1, roundAt = fractionSize + 1);
		digits[0] = 0;
		for (let i = 1; i < roundAt; i++) digits[i] = 0;
	}
	if (digit >= 5) {
		if (roundAt - 1 < 0) {
			for (let k = 0; k > roundAt; k--) {
				digits.unshift(0);
				parsedNumber.integerLen++;
			}
			digits.unshift(1);
			parsedNumber.integerLen++;
		} else digits[roundAt - 1]++;
	}
	for (; fractionLen < Math.max(0, fractionSize); fractionLen++) digits.push(0);
	let dropTrailingZeros = fractionSize !== 0;
	const minLen = minFrac + parsedNumber.integerLen;
	const carry = digits.reduceRight(function(carry, d, i, digits) {
		d = d + carry;
		digits[i] = d < 10 ? d : d - 10;
		if (dropTrailingZeros) {
			if (digits[i] === 0 && i >= minLen) digits.pop();
			else dropTrailingZeros = false;
		}
		return d >= 10 ? 1 : 0;
	}, 0);
	if (carry) {
		digits.unshift(carry);
		parsedNumber.integerLen++;
	}
}
function parseIntAutoRadix(text) {
	const result = parseInt(text);
	if (isNaN(result)) throw new RuntimeError(2305, ngDevMode && "Invalid integer literal when parsing " + text);
	return result;
}
/**
* @publicApi
*/
var NgLocalization = class NgLocalization {
	static ɵfac = function NgLocalization_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgLocalization)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: NgLocalization,
		factory: function NgLocalization_Factory(__ngFactoryType__) {
			let __ngConditionalFactory__ = null;
			if (__ngFactoryType__) __ngConditionalFactory__ = new __ngFactoryType__();
			else __ngConditionalFactory__ = ((locale) => new NgLocaleLocalization(locale))(ɵɵinject(LOCALE_ID));
			return __ngConditionalFactory__;
		},
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLocalization, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useFactory: (locale) => new NgLocaleLocalization(locale),
			deps: [LOCALE_ID]
		}]
	}], null, null);
})();
/**
* Returns the plural category for a given value.
* - "=value" when the case exists,
* - the plural category otherwise
*/
function getPluralCategory(value, cases, ngLocalization, locale) {
	let key = `=${value}`;
	if (cases.indexOf(key) > -1) return key;
	key = ngLocalization.getPluralCategory(value, locale);
	if (cases.indexOf(key) > -1) return key;
	if (cases.indexOf("other") > -1) return "other";
	throw new RuntimeError(2308, ngDevMode && `No plural message found for value "${value}"`);
}
/**
* Returns the plural case based on the locale
*
* @publicApi
*/
var NgLocaleLocalization = class NgLocaleLocalization extends NgLocalization {
	locale;
	constructor(locale) {
		super();
		this.locale = locale;
	}
	getPluralCategory(value, locale) {
		switch (getLocalePluralCase(locale || this.locale)(value)) {
			case Plural.Zero: return "zero";
			case Plural.One: return "one";
			case Plural.Two: return "two";
			case Plural.Few: return "few";
			case Plural.Many: return "many";
			default: return "other";
		}
	}
	static ɵfac = function NgLocaleLocalization_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgLocaleLocalization)(ɵɵinject(LOCALE_ID));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: NgLocaleLocalization,
		factory: NgLocaleLocalization.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLocaleLocalization, [{ type: Injectable }], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [LOCALE_ID]
		}]
	}], null);
})();
var WS_REGEXP = /\s+/;
var EMPTY_ARRAY = [];
/**
* @ngModule CommonModule
*
* @usageNotes
* ```html
* <some-element [ngClass]="stringExp|arrayExp|objExp|Set">...</some-element>
*
* <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
* ```
*
* For more simple use cases you can use the [class bindings](/guide/templates/binding#css-class-and-style-property-bindings) directly.
* It doesn't require importing a directive.
*
* ```html
* <some-element [class]="'first second'">...</some-element>
*
* <some-element [class.expanded]="isExpanded">...</some-element>
*
* <some-element [class]="['first', 'second']">...</some-element>
*
* <some-element [class]="{'first': true, 'second': true, 'third': false}">...</some-element>
* ```
* @description
*
* Adds and removes CSS classes on an HTML element.
*
* The CSS classes are updated as follows, depending on the type of the expression evaluation:
* - `string` - the CSS classes listed in the string (space delimited) are added,
* - `Array` - the CSS classes declared as Array elements are added,
* - `Object` - keys are CSS classes that get added when the expression given in the value
*              evaluates to a truthy value, otherwise they are removed.
*
*
* @see [Class bindings](/guide/templates/binding#css-class-and-style-property-bindings)
*
* @publicApi
*/
var NgClass = class NgClass {
	_ngEl;
	_renderer;
	initialClasses = EMPTY_ARRAY;
	rawClass;
	stateMap = /* @__PURE__ */ new Map();
	constructor(_ngEl, _renderer) {
		this._ngEl = _ngEl;
		this._renderer = _renderer;
	}
	set klass(value) {
		this.initialClasses = value != null ? value.trim().split(WS_REGEXP) : EMPTY_ARRAY;
	}
	set ngClass(value) {
		this.rawClass = typeof value === "string" ? value.trim().split(WS_REGEXP) : value;
	}
	ngDoCheck() {
		for (const klass of this.initialClasses) this._updateState(klass, true);
		const rawClass = this.rawClass;
		if (Array.isArray(rawClass) || rawClass instanceof Set) for (const klass of rawClass) this._updateState(klass, true);
		else if (rawClass != null) for (const klass of Object.keys(rawClass)) this._updateState(klass, Boolean(rawClass[klass]));
		this._applyStateDiff();
	}
	_updateState(klass, nextEnabled) {
		const state = this.stateMap.get(klass);
		if (state !== void 0) {
			if (state.enabled !== nextEnabled) {
				state.changed = true;
				state.enabled = nextEnabled;
			}
			state.touched = true;
		} else this.stateMap.set(klass, {
			enabled: nextEnabled,
			changed: true,
			touched: true
		});
	}
	_applyStateDiff() {
		for (const stateEntry of this.stateMap) {
			const klass = stateEntry[0];
			const state = stateEntry[1];
			if (state.changed) {
				this._toggleClass(klass, state.enabled);
				state.changed = false;
			} else if (!state.touched) {
				if (state.enabled) this._toggleClass(klass, false);
				this.stateMap.delete(klass);
			}
			state.touched = false;
		}
	}
	_toggleClass(klass, enabled) {
		if (ngDevMode) {
			if (typeof klass !== "string") throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${stringify(klass)}`);
		}
		klass = klass.trim();
		if (klass.length > 0) klass.split(WS_REGEXP).forEach((klass) => {
			if (enabled) this._renderer.addClass(this._ngEl.nativeElement, klass);
			else this._renderer.removeClass(this._ngEl.nativeElement, klass);
		});
	}
	static ɵfac = function NgClass_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgClass)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgClass,
		selectors: [[
			"",
			"ngClass",
			""
		]],
		inputs: {
			klass: [
				0,
				"class",
				"klass"
			],
			ngClass: "ngClass"
		}
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClass, [{
		type: Directive,
		args: [{ selector: "[ngClass]" }]
	}], () => [{ type: ElementRef }, { type: Renderer2 }], {
		klass: [{
			type: Input,
			args: ["class"]
		}],
		ngClass: [{
			type: Input,
			args: ["ngClass"]
		}]
	});
})();
/**
* Instantiates a {@link /api/core/Component Component} type and inserts its Host View into the current View.
* `NgComponentOutlet` provides a declarative approach for dynamic component creation.
*
* `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
* any existing component will be destroyed.
*
* @usageNotes
*
* ### Fine tune control
*
* You can control the component creation process by using the following optional attributes:
*
* * `ngComponentOutletInputs`: Optional component inputs object, which will be bind to the
* component.
*
* * `ngComponentOutletInjector`: Optional custom {@link Injector} that will be used as parent for
* the Component. Defaults to the injector of the current view container.
*
* * `ngComponentOutletEnvironmentInjector`: Optional custom {@link EnvironmentInjector} which will
* provide the component's environment.
*
* * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
* section of the component, if it exists.
*
* * `ngComponentOutletNgModule`: Optional NgModule class reference to allow loading another
* module dynamically, then loading a component from that module.
*
* * `ngComponentOutletNgModuleFactory`: Deprecated config option that allows providing optional
* NgModule factory to allow loading another module dynamically, then loading a component from that
* module. Use `ngComponentOutletNgModule` instead.
*
* ### Syntax
*
* Simple
* ```html
* <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
* ```
*
* With inputs
* ```html
* <ng-container *ngComponentOutlet="componentTypeExpression;
*                                   inputs: inputsExpression;">
* </ng-container>
* ```
*
* Customized injector/content
* ```html
* <ng-container *ngComponentOutlet="componentTypeExpression;
*                                   injector: injectorExpression;
*                                   content: contentNodesExpression;">
* </ng-container>
* ```
*
* Customized NgModule reference
* ```html
* <ng-container *ngComponentOutlet="componentTypeExpression;
*                                   ngModule: ngModuleClass;">
* </ng-container>
* ```
*
* ### A simple example
*
* {@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
*
* A more complete example with additional options:
*
* {@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
*
* @publicApi
* @ngModule CommonModule
*/
var NgComponentOutlet = class NgComponentOutlet {
	_viewContainerRef;
	/** Component that should be rendered in the outlet. */
	ngComponentOutlet = null;
	ngComponentOutletInputs;
	ngComponentOutletInjector;
	ngComponentOutletEnvironmentInjector;
	ngComponentOutletContent;
	ngComponentOutletNgModule;
	/**
	* @deprecated This input is deprecated, use `ngComponentOutletNgModule` instead.
	*/
	ngComponentOutletNgModuleFactory;
	_componentRef;
	_moduleRef;
	/**
	* A helper data structure that allows us to track inputs that were part of the
	* ngComponentOutletInputs expression. Tracking inputs is necessary for proper removal of ones
	* that are no longer referenced.
	*/
	_inputsUsed = /* @__PURE__ */ new Map();
	/**
	* Gets the instance of the currently-rendered component.
	* Will be null if no component has been rendered.
	*/
	get componentInstance() {
		return this._componentRef?.instance ?? null;
	}
	constructor(_viewContainerRef) {
		this._viewContainerRef = _viewContainerRef;
	}
	_needToReCreateNgModuleInstance(changes) {
		return changes["ngComponentOutletNgModule"] !== void 0 || changes["ngComponentOutletNgModuleFactory"] !== void 0;
	}
	_needToReCreateComponentInstance(changes) {
		return changes["ngComponentOutlet"] !== void 0 || changes["ngComponentOutletContent"] !== void 0 || changes["ngComponentOutletInjector"] !== void 0 || changes["ngComponentOutletEnvironmentInjector"] !== void 0 || this._needToReCreateNgModuleInstance(changes);
	}
	/** @docs-private */
	ngOnChanges(changes) {
		if (this._needToReCreateComponentInstance(changes)) {
			this._viewContainerRef.clear();
			this._inputsUsed.clear();
			this._componentRef = void 0;
			if (this.ngComponentOutlet) {
				const injector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
				if (this._needToReCreateNgModuleInstance(changes)) {
					this._moduleRef?.destroy();
					if (this.ngComponentOutletNgModule) this._moduleRef = createNgModule(this.ngComponentOutletNgModule, getParentInjector(injector));
					else if (this.ngComponentOutletNgModuleFactory) this._moduleRef = this.ngComponentOutletNgModuleFactory.create(getParentInjector(injector));
					else this._moduleRef = void 0;
				}
				this._componentRef = this._viewContainerRef.createComponent(this.ngComponentOutlet, {
					injector,
					ngModuleRef: this._moduleRef,
					projectableNodes: this.ngComponentOutletContent,
					environmentInjector: this.ngComponentOutletEnvironmentInjector
				});
			}
		}
	}
	/** @docs-private */
	ngDoCheck() {
		if (this._componentRef) {
			if (this.ngComponentOutletInputs) for (const inputName of Object.keys(this.ngComponentOutletInputs)) this._inputsUsed.set(inputName, true);
			this._applyInputStateDiff(this._componentRef);
		}
	}
	/** @docs-private */
	ngOnDestroy() {
		this._moduleRef?.destroy();
	}
	_applyInputStateDiff(componentRef) {
		for (const [inputName, touched] of this._inputsUsed) if (!touched) {
			componentRef.setInput(inputName, void 0);
			this._inputsUsed.delete(inputName);
		} else {
			componentRef.setInput(inputName, this.ngComponentOutletInputs[inputName]);
			this._inputsUsed.set(inputName, false);
		}
	}
	static ɵfac = function NgComponentOutlet_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgComponentOutlet)(ɵɵdirectiveInject(ViewContainerRef));
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgComponentOutlet,
		selectors: [[
			"",
			"ngComponentOutlet",
			""
		]],
		inputs: {
			ngComponentOutlet: "ngComponentOutlet",
			ngComponentOutletInputs: "ngComponentOutletInputs",
			ngComponentOutletInjector: "ngComponentOutletInjector",
			ngComponentOutletEnvironmentInjector: "ngComponentOutletEnvironmentInjector",
			ngComponentOutletContent: "ngComponentOutletContent",
			ngComponentOutletNgModule: "ngComponentOutletNgModule",
			ngComponentOutletNgModuleFactory: "ngComponentOutletNgModuleFactory"
		},
		exportAs: ["ngComponentOutlet"],
		features: [ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgComponentOutlet, [{
		type: Directive,
		args: [{
			selector: "[ngComponentOutlet]",
			exportAs: "ngComponentOutlet"
		}]
	}], () => [{ type: ViewContainerRef }], {
		ngComponentOutlet: [{ type: Input }],
		ngComponentOutletInputs: [{ type: Input }],
		ngComponentOutletInjector: [{ type: Input }],
		ngComponentOutletEnvironmentInjector: [{ type: Input }],
		ngComponentOutletContent: [{ type: Input }],
		ngComponentOutletNgModule: [{ type: Input }],
		ngComponentOutletNgModuleFactory: [{ type: Input }]
	});
})();
function getParentInjector(injector) {
	return injector.get(NgModuleRef$1).injector;
}
/**
* @publicApi
*
* @deprecated 20.0
* The `ngFor` directive is deprecated. Use the `@for` block instead.
*/
var NgForOfContext = class {
	$implicit;
	ngForOf;
	index;
	count;
	constructor($implicit, ngForOf, index, count) {
		this.$implicit = $implicit;
		this.ngForOf = ngForOf;
		this.index = index;
		this.count = count;
	}
	get first() {
		return this.index === 0;
	}
	get last() {
		return this.index === this.count - 1;
	}
	get even() {
		return this.index % 2 === 0;
	}
	get odd() {
		return !this.even;
	}
};
/**
* A [structural directive](guide/directives/structural-directives) that renders
* a template for each item in a collection.
* The directive is placed on an element, which becomes the parent
* of the cloned templates.
*
* The `ngForOf` directive is generally used in the
* [shorthand form](guide/directives/structural-directives#asterisk) `*ngFor`.
* In this form, the template to be rendered for each iteration is the content
* of an anchor element containing the directive.
*
* The following example shows the shorthand syntax with some options,
* contained in an `<li>` element.
*
* ```html
* <li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
* ```
*
* The shorthand form expands into a long form that uses the `ngForOf` selector
* on an `<ng-template>` element.
* The content of the `<ng-template>` element is the `<li>` element that held the
* short-form directive.
*
* Here is the expanded version of the short-form example.
*
* ```html
* <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
*   <li>...</li>
* </ng-template>
* ```
*
* Angular automatically expands the shorthand syntax as it compiles the template.
* The context for each embedded view is logically merged to the current component
* context according to its lexical position.
*
* When using the shorthand syntax, Angular allows only [one structural directive
* on an element](guide/directives/structural-directives#one-per-element).
* If you want to iterate conditionally, for example,
* put the `*ngIf` on a container element that wraps the `*ngFor` element.
* For further discussion, see
* [Structural Directives](guide/directives/structural-directives#one-per-element).
*
* @usageNotes
*
* ### Local variables
*
* `NgForOf` provides exported values that can be aliased to local variables.
* For example:
*
*  ```html
* <li *ngFor="let user of users; index as i; first as isFirst">
*    {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
* </li>
* ```
*
* The following exported values can be aliased to local variables:
*
* - `$implicit: T`: The value of the individual items in the iterable (`ngForOf`).
* - `ngForOf: NgIterable<T>`: The value of the iterable expression. Useful when the expression is
* more complex then a property access, for example when using the async pipe (`userStreams |
* async`).
* - `index: number`: The index of the current item in the iterable.
* - `count: number`: The length of the iterable.
* - `first: boolean`: True when the item is the first item in the iterable.
* - `last: boolean`: True when the item is the last item in the iterable.
* - `even: boolean`: True when the item has an even index in the iterable.
* - `odd: boolean`: True when the item has an odd index in the iterable.
*
* ### Change propagation
*
* When the contents of the iterator changes, `NgForOf` makes the corresponding changes to the DOM:
*
* * When an item is added, a new instance of the template is added to the DOM.
* * When an item is removed, its template instance is removed from the DOM.
* * When items are reordered, their respective templates are reordered in the DOM.
*
* Angular uses object identity to track insertions and deletions within the iterator and reproduce
* those changes in the DOM. This has important implications for animations and any stateful
* controls that are present, such as `<input>` elements that accept user input. Inserted rows can
* be animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state
* such as user input.
* For more on animations, see [Transitions and Triggers](guide/animations/transition-and-triggers).
*
* The identities of elements in the iterator can change while the data does not.
* This can happen, for example, if the iterator is produced from an RPC to the server, and that
* RPC is re-run. Even if the data hasn't changed, the second response produces objects with
* different identities, and Angular must tear down the entire DOM and rebuild it (as if all old
* elements were deleted and all new elements inserted).
*
* To avoid this expensive operation, you can customize the default tracking algorithm.
* by supplying the `trackBy` option to `NgForOf`.
* `trackBy` takes a function that has two arguments: `index` and `item`.
* If `trackBy` is given, Angular tracks changes by the return value of the function.
*
* @see [Structural Directives](guide/directives/structural-directives)
* @ngModule CommonModule
* @publicApi
*
* @deprecated 20.0
* Use the `@for` block instead. Intent to remove in v22
*/
var NgForOf = class NgForOf {
	_viewContainer;
	_template;
	_differs;
	/**
	* The value of the iterable expression, which can be used as a
	* [template input variable](guide/directives/structural-directives#shorthand).
	* @deprecated The `ngFor` directive is deprecated. Use the `@for` block instead.
	*/
	set ngForOf(ngForOf) {
		this._ngForOf = ngForOf;
		this._ngForOfDirty = true;
	}
	/**
	* Specifies a custom `TrackByFunction` to compute the identity of items in an iterable.
	*
	* If a custom `TrackByFunction` is not provided, `NgForOf` will use the item's [object
	* identity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
	* as the key.
	*
	* `NgForOf` uses the computed key to associate items in an iterable with DOM elements
	* it produces for these items.
	*
	* A custom `TrackByFunction` is useful to provide good user experience in cases when items in an
	* iterable rendered using `NgForOf` have a natural identifier (for example, custom ID or a
	* primary key), and this iterable could be updated with new object instances that still
	* represent the same underlying entity (for example, when data is re-fetched from the server,
	* and the iterable is recreated and re-rendered, but most of the data is still the same).
	*
	* @see {@link TrackByFunction}
	* @deprecated The `ngFor` directive is deprecated. Use the `@for` block instead.
	*/
	set ngForTrackBy(fn) {
		if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}. See https://angular.dev/api/common/NgForOf#change-propagation for more information.`);
		this._trackByFn = fn;
	}
	get ngForTrackBy() {
		return this._trackByFn;
	}
	_ngForOf = null;
	_ngForOfDirty = true;
	_differ = null;
	_trackByFn;
	constructor(_viewContainer, _template, _differs) {
		this._viewContainer = _viewContainer;
		this._template = _template;
		this._differs = _differs;
	}
	/**
	* A reference to the template that is stamped out for each item in the iterable.
	* @see [template reference variable](guide/templates/variables#template-reference-variables)
	* @deprecated The `ngFor` directive is deprecated. Use the `@for` block instead.
	*/
	set ngForTemplate(value) {
		if (value) this._template = value;
	}
	/**
	* Applies the changes when needed.
	* @docs-private
	*/
	ngDoCheck() {
		if (this._ngForOfDirty) {
			this._ngForOfDirty = false;
			const value = this._ngForOf;
			if (!this._differ && value) {
				if (typeof ngDevMode === "undefined" || ngDevMode) try {
					this._differ = this._differs.find(value).create(this.ngForTrackBy);
				} catch {
					let errorMessage = `Cannot find a differ supporting object '${value}' of type '${getTypeName(value)}'. NgFor only supports binding to Iterables, such as Arrays.`;
					if (typeof value === "object") errorMessage += " Did you mean to use the keyvalue pipe?";
					throw new RuntimeError(-2200, errorMessage);
				}
				else this._differ = this._differs.find(value).create(this.ngForTrackBy);
			}
		}
		if (this._differ) {
			const changes = this._differ.diff(this._ngForOf);
			if (changes) this._applyChanges(changes);
		}
	}
	_applyChanges(changes) {
		const viewContainer = this._viewContainer;
		changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
			if (item.previousIndex == null) viewContainer.createEmbeddedView(this._template, new NgForOfContext(item.item, this._ngForOf, -1, -1), currentIndex === null ? void 0 : currentIndex);
			else if (currentIndex == null) viewContainer.remove(adjustedPreviousIndex === null ? void 0 : adjustedPreviousIndex);
			else if (adjustedPreviousIndex !== null) {
				const view = viewContainer.get(adjustedPreviousIndex);
				viewContainer.move(view, currentIndex);
				applyViewChange(view, item);
			}
		});
		for (let i = 0, ilen = viewContainer.length; i < ilen; i++) {
			const context = viewContainer.get(i).context;
			context.index = i;
			context.count = ilen;
			context.ngForOf = this._ngForOf;
		}
		changes.forEachIdentityChange((record) => {
			applyViewChange(viewContainer.get(record.currentIndex), record);
		});
	}
	/**
	* Asserts the correct type of the context for the template that `NgForOf` will render.
	*
	* The presence of this method is a signal to the Ivy template type-check compiler that the
	* `NgForOf` structural directive renders its template with a specific context type.
	*/
	static ngTemplateContextGuard(dir, ctx) {
		return true;
	}
	static ɵfac = function NgForOf_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgForOf)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers));
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgForOf,
		selectors: [[
			"",
			"ngFor",
			"",
			"ngForOf",
			""
		]],
		inputs: {
			ngForOf: "ngForOf",
			ngForTrackBy: "ngForTrackBy",
			ngForTemplate: "ngForTemplate"
		}
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForOf, [{
		type: Directive,
		args: [{ selector: "[ngFor][ngForOf]" }]
	}], () => [
		{ type: ViewContainerRef },
		{ type: TemplateRef },
		{ type: IterableDiffers }
	], {
		ngForOf: [{ type: Input }],
		ngForTrackBy: [{ type: Input }],
		ngForTemplate: [{ type: Input }]
	});
})();
function applyViewChange(view, record) {
	view.context.$implicit = record.item;
}
function getTypeName(type) {
	return type["name"] || typeof type;
}
/**
* A structural directive that conditionally includes a template based on the value of
* an expression coerced to Boolean.
* When the expression evaluates to true, Angular renders the template
* provided in a `then` clause, and when  false or null,
* Angular renders the template provided in an optional `else` clause. The default
* template for the `else` clause is blank.
*
* A [shorthand form](guide/directives/structural-directives#asterisk) of the directive,
* `*ngIf="condition"`, is generally used, provided
* as an attribute of the anchor element for the inserted template.
* Angular expands this into a more explicit version, in which the anchor element
* is contained in an `<ng-template>` element.
*
* Simple form with shorthand syntax:
*
* ```html
* <div *ngIf="condition">Content to render when condition is true.</div>
* ```
*
* Simple form with expanded syntax:
*
* ```html
* <ng-template [ngIf]="condition"><div>Content to render when condition is
* true.</div></ng-template>
* ```
*
* Form with an "else" block:
*
* ```html
* <div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
* <ng-template #elseBlock>Content to render when condition is false.</ng-template>
* ```
*
* Shorthand form with "then" and "else" blocks:
*
* ```html
* <div *ngIf="condition; then thenBlock else elseBlock"></div>
* <ng-template #thenBlock>Content to render when condition is true.</ng-template>
* <ng-template #elseBlock>Content to render when condition is false.</ng-template>
* ```
*
* Form with storing the value locally:
*
* ```html
* <div *ngIf="condition as value; else elseBlock">{{value}}</div>
* <ng-template #elseBlock>Content to render when value is null.</ng-template>
* ```
*
* @usageNotes
*
* The `*ngIf` directive is most commonly used to conditionally show an inline template,
* as seen in the following  example.
* The default `else` template is blank.
*
* {@example common/ngIf/ts/module.ts region='NgIfSimple'}
*
* ### Showing an alternative template using `else`
*
* To display a template when `expression` evaluates to false, use an `else` template
* binding as shown in the following example.
* The `else` binding points to an `<ng-template>`  element labeled `#elseBlock`.
* The template can be defined anywhere in the component view, but is typically placed right after
* `ngIf` for readability.
*
* {@example common/ngIf/ts/module.ts region='NgIfElse'}
*
* ### Using an external `then` template
*
* In the previous example, the then-clause template is specified inline, as the content of the
* tag that contains the `ngIf` directive. You can also specify a template that is defined
* externally, by referencing a labeled `<ng-template>` element. When you do this, you can
* change which template to use at runtime, as shown in the following example.
*
* {@example common/ngIf/ts/module.ts region='NgIfThenElse'}
*
* ### Storing a conditional result in a variable
*
* You might want to show a set of properties from the same object. If you are waiting
* for asynchronous data, the object can be undefined.
* In this case, you can use `ngIf` and store the result of the condition in a local
* variable as shown in the following example.
*
* {@example common/ngIf/ts/module.ts region='NgIfAs'}
*
* This code uses only one `AsyncPipe`, so only one subscription is created.
* The conditional statement stores the result of `userStream|async` in the local variable `user`.
* You can then bind the local `user` repeatedly.
*
* The conditional displays the data only if `userStream` returns a value,
* so you don't need to use the
* safe-navigation-operator (`?.`)
* to guard against null values when accessing properties.
* You can display an alternative template while waiting for the data.
*
* ### Shorthand syntax
*
* The shorthand syntax `*ngIf` expands into two separate template specifications
* for the "then" and "else" clauses. For example, consider the following shorthand statement,
* that is meant to show a loading page while waiting for data to be loaded.
*
* ```html
* <div class="hero-list" *ngIf="heroes else loading">
*  ...
* </div>
*
* <ng-template #loading>
*  <div>Loading...</div>
* </ng-template>
* ```
*
* You can see that the "else" clause references the `<ng-template>`
* with the `#loading` label, and the template for the "then" clause
* is provided as the content of the anchor element.
*
* However, when Angular expands the shorthand syntax, it creates
* another `<ng-template>` tag, with `ngIf` and `ngIfElse` directives.
* The anchor element containing the template for the "then" clause becomes
* the content of this unlabeled `<ng-template>` tag.
*
* ```html
* <ng-template [ngIf]="heroes" [ngIfElse]="loading">
*  <div class="hero-list">
*   ...
*  </div>
* </ng-template>
*
* <ng-template #loading>
*  <div>Loading...</div>
* </ng-template>
* ```
*
* The presence of the implicit template object has implications for the nesting of
* structural directives. For more on this subject, see
* [Structural Directives](guide/directives/structural-directives#one-per-element).
*
* @ngModule CommonModule
* @publicApi
*
* @deprecated 20.0
* Use the `@if` block instead. Intent to remove in v22
*/
var NgIf = class NgIf {
	_viewContainer;
	_context = new NgIfContext();
	_thenTemplateRef = null;
	_elseTemplateRef = null;
	_thenViewRef = null;
	_elseViewRef = null;
	constructor(_viewContainer, templateRef) {
		this._viewContainer = _viewContainer;
		this._thenTemplateRef = templateRef;
	}
	/**
	* The Boolean expression to evaluate as the condition for showing a template.
	* @deprecated Use the `@if` block instead. Intent to remove in v22
	*/
	set ngIf(condition) {
		this._context.$implicit = this._context.ngIf = condition;
		this._updateView();
	}
	/**
	* A template to show if the condition expression evaluates to true.
	* @deprecated Use the `@if` block instead. Intent to remove in v22
	*/
	set ngIfThen(templateRef) {
		assertTemplate(templateRef, (typeof ngDevMode === "undefined" || ngDevMode) && "ngIfThen");
		this._thenTemplateRef = templateRef;
		this._thenViewRef = null;
		this._updateView();
	}
	/**
	* A template to show if the condition expression evaluates to false.
	* @deprecated Use the `@if` block instead. Intent to remove in v22
	*/
	set ngIfElse(templateRef) {
		assertTemplate(templateRef, (typeof ngDevMode === "undefined" || ngDevMode) && "ngIfElse");
		this._elseTemplateRef = templateRef;
		this._elseViewRef = null;
		this._updateView();
	}
	_updateView() {
		if (this._context.$implicit) {
			if (!this._thenViewRef) {
				this._viewContainer.clear();
				this._elseViewRef = null;
				if (this._thenTemplateRef) this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
			}
		} else if (!this._elseViewRef) {
			this._viewContainer.clear();
			this._thenViewRef = null;
			if (this._elseTemplateRef) this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
		}
	}
	/** @internal */
	static ngIfUseIfTypeGuard;
	/**
	* Assert the correct type of the expression bound to the `ngIf` input within the template.
	*
	* The presence of this static field is a signal to the Ivy template type check compiler that
	* when the `NgIf` structural directive renders its template, the type of the expression bound
	* to `ngIf` should be narrowed in some way. For `NgIf`, the binding expression itself is used to
	* narrow its type, which allows the strictNullChecks feature of TypeScript to work with `NgIf`.
	*/
	static ngTemplateGuard_ngIf;
	/**
	* Asserts the correct type of the context for the template that `NgIf` will render.
	*
	* The presence of this method is a signal to the Ivy template type-check compiler that the
	* `NgIf` structural directive renders its template with a specific context type.
	*/
	static ngTemplateContextGuard(dir, ctx) {
		return true;
	}
	static ɵfac = function NgIf_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgIf)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgIf,
		selectors: [[
			"",
			"ngIf",
			""
		]],
		inputs: {
			ngIf: "ngIf",
			ngIfThen: "ngIfThen",
			ngIfElse: "ngIfElse"
		}
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgIf, [{
		type: Directive,
		args: [{ selector: "[ngIf]" }]
	}], () => [{ type: ViewContainerRef }, { type: TemplateRef }], {
		ngIf: [{ type: Input }],
		ngIfThen: [{ type: Input }],
		ngIfElse: [{ type: Input }]
	});
})();
/**
* @publicApi
*
* @deprecated 20.0
* The ngIf directive is deprecated in favor of the @if block instead.
*/
var NgIfContext = class {
	$implicit = null;
	ngIf = null;
};
function assertTemplate(templateRef, property) {
	if (templateRef && !templateRef.createEmbeddedView) throw new RuntimeError(2020, (typeof ngDevMode === "undefined" || ngDevMode) && `${property} must be a TemplateRef, but received '${stringify(templateRef)}'.`);
}
var SwitchView = class {
	_viewContainerRef;
	_templateRef;
	_created = false;
	constructor(_viewContainerRef, _templateRef) {
		this._viewContainerRef = _viewContainerRef;
		this._templateRef = _templateRef;
	}
	create() {
		this._created = true;
		this._viewContainerRef.createEmbeddedView(this._templateRef);
	}
	destroy() {
		this._created = false;
		this._viewContainerRef.clear();
	}
	enforceState(created) {
		if (created && !this._created) this.create();
		else if (!created && this._created) this.destroy();
	}
};
/**
* @ngModule CommonModule
*
* @description
* The `[ngSwitch]` directive on a container specifies an expression to match against.
* The expressions to match are provided by `ngSwitchCase` directives on views within the container.
* - Every view that matches is rendered.
* - If there are no matches, a view with the `ngSwitchDefault` directive is rendered.
* - Elements within the `[NgSwitch]` statement but outside of any `NgSwitchCase`
* or `ngSwitchDefault` directive are preserved at the location.
*
* @usageNotes
* Define a container element for the directive, and specify the switch expression
* to match against as an attribute:
*
* ```html
* <container-element [ngSwitch]="switch_expression">
* ```
*
* Within the container, `*ngSwitchCase` statements specify the match expressions
* as attributes. Include `*ngSwitchDefault` as the final case.
*
* ```html
* <container-element [ngSwitch]="switch_expression">
*    <some-element *ngSwitchCase="match_expression_1">...</some-element>
* ...
*    <some-element *ngSwitchDefault>...</some-element>
* </container-element>
* ```
*
* ### Usage Examples
*
* The following example shows how to use more than one case to display the same view:
*
* ```html
* <container-element [ngSwitch]="switch_expression">
*   <!-- the same view can be shown in more than one case -->
*   <some-element *ngSwitchCase="match_expression_1">...</some-element>
*   <some-element *ngSwitchCase="match_expression_2">...</some-element>
*   <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
*   <!--default case when there are no matches -->
*   <some-element *ngSwitchDefault>...</some-element>
* </container-element>
* ```
*
* The following example shows how cases can be nested:
* ```html
* <container-element [ngSwitch]="switch_expression">
*       <some-element *ngSwitchCase="match_expression_1">...</some-element>
*       <some-element *ngSwitchCase="match_expression_2">...</some-element>
*       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
*       <ng-container *ngSwitchCase="match_expression_3">
*         <!-- use a ng-container to group multiple root nodes -->
*         <inner-element></inner-element>
*         <inner-other-element></inner-other-element>
*       </ng-container>
*       <some-element *ngSwitchDefault>...</some-element>
*     </container-element>
* ```
*
* @publicApi
* @see {@link NgSwitchCase}
* @see {@link NgSwitchDefault}
* @see [Structural Directives](guide/directives/structural-directives)
*
* @deprecated 20.0
* Use the `@switch` block instead. Intent to remove in v22
*/
var NgSwitch = class NgSwitch {
	_defaultViews = [];
	_defaultUsed = false;
	_caseCount = 0;
	_lastCaseCheckIndex = 0;
	_lastCasesMatched = false;
	_ngSwitch;
	/** @deprecated Use the `@switch` block instead. Intent to remove in v22 */
	set ngSwitch(newValue) {
		this._ngSwitch = newValue;
		if (this._caseCount === 0) this._updateDefaultCases(true);
	}
	/** @internal */
	_addCase() {
		return this._caseCount++;
	}
	/** @internal */
	_addDefault(view) {
		this._defaultViews.push(view);
	}
	/** @internal */
	_matchCase(value) {
		const matched = value === this._ngSwitch;
		this._lastCasesMatched ||= matched;
		this._lastCaseCheckIndex++;
		if (this._lastCaseCheckIndex === this._caseCount) {
			this._updateDefaultCases(!this._lastCasesMatched);
			this._lastCaseCheckIndex = 0;
			this._lastCasesMatched = false;
		}
		return matched;
	}
	_updateDefaultCases(useDefault) {
		if (this._defaultViews.length > 0 && useDefault !== this._defaultUsed) {
			this._defaultUsed = useDefault;
			for (const defaultView of this._defaultViews) defaultView.enforceState(useDefault);
		}
	}
	static ɵfac = function NgSwitch_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgSwitch)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgSwitch,
		selectors: [[
			"",
			"ngSwitch",
			""
		]],
		inputs: { ngSwitch: "ngSwitch" }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSwitch, [{
		type: Directive,
		args: [{ selector: "[ngSwitch]" }]
	}], null, { ngSwitch: [{ type: Input }] });
})();
/**
* @ngModule CommonModule
*
* @description
* Provides a switch case expression to match against an enclosing `ngSwitch` expression.
* When the expressions match, the given `NgSwitchCase` template is rendered.
* If multiple match expressions match the switch expression value, all of them are displayed.
*
* @usageNotes
*
* Within a switch container, `*ngSwitchCase` statements specify the match expressions
* as attributes. Include `*ngSwitchDefault` as the final case.
*
* ```html
* <container-element [ngSwitch]="switch_expression">
*   <some-element *ngSwitchCase="match_expression_1">...</some-element>
*   ...
*   <some-element *ngSwitchDefault>...</some-element>
* </container-element>
* ```
*
* Each switch-case statement contains an in-line HTML template or template reference
* that defines the subtree to be selected if the value of the match expression
* matches the value of the switch expression.
*
* As of Angular v17 the NgSwitch directive uses strict equality comparison (`===`) instead of
* loose equality (`==`) to match different cases.
*
* @publicApi
* @see {@link NgSwitch}
* @see {@link NgSwitchDefault}
*
* @deprecated 20.0
* Use the `@case` block within a `@switch` block instead. Intent to remove in v22
*/
var NgSwitchCase = class NgSwitchCase {
	ngSwitch;
	_view;
	/**
	* Stores the HTML template to be selected on match.
	* @deprecated Use the `@case` block within a `@switch` block instead. Intent to remove in v22
	*/
	ngSwitchCase;
	constructor(viewContainer, templateRef, ngSwitch) {
		this.ngSwitch = ngSwitch;
		if ((typeof ngDevMode === "undefined" || ngDevMode) && !ngSwitch) throwNgSwitchProviderNotFoundError("ngSwitchCase", "NgSwitchCase");
		ngSwitch._addCase();
		this._view = new SwitchView(viewContainer, templateRef);
	}
	/**
	* Performs case matching. For internal use only.
	* @docs-private
	*/
	ngDoCheck() {
		this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
	}
	static ɵfac = function NgSwitchCase_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgSwitchCase)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(NgSwitch, 9));
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgSwitchCase,
		selectors: [[
			"",
			"ngSwitchCase",
			""
		]],
		inputs: { ngSwitchCase: "ngSwitchCase" }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSwitchCase, [{
		type: Directive,
		args: [{ selector: "[ngSwitchCase]" }]
	}], () => [
		{ type: ViewContainerRef },
		{ type: TemplateRef },
		{
			type: NgSwitch,
			decorators: [{ type: Optional }, { type: Host }]
		}
	], { ngSwitchCase: [{ type: Input }] });
})();
/**
* @ngModule CommonModule
*
* @description
*
* Creates a view that is rendered when no `NgSwitchCase` expressions
* match the `NgSwitch` expression.
* This statement should be the final case in an `NgSwitch`.
*
* @publicApi
* @see {@link NgSwitch}
* @see {@link NgSwitchCase}
*
* @deprecated 20.0
* Use the `@default` block within a `@switch` block instead. Intent to remove in v22
*/
var NgSwitchDefault = class NgSwitchDefault {
	constructor(viewContainer, templateRef, ngSwitch) {
		if ((typeof ngDevMode === "undefined" || ngDevMode) && !ngSwitch) throwNgSwitchProviderNotFoundError("ngSwitchDefault", "NgSwitchDefault");
		ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
	}
	static ɵfac = function NgSwitchDefault_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgSwitchDefault)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(NgSwitch, 9));
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgSwitchDefault,
		selectors: [[
			"",
			"ngSwitchDefault",
			""
		]]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSwitchDefault, [{
		type: Directive,
		args: [{ selector: "[ngSwitchDefault]" }]
	}], () => [
		{ type: ViewContainerRef },
		{ type: TemplateRef },
		{
			type: NgSwitch,
			decorators: [{ type: Optional }, { type: Host }]
		}
	], null);
})();
function throwNgSwitchProviderNotFoundError(attrName, directiveName) {
	throw new RuntimeError(2e3, `An element with the "${attrName}" attribute (matching the "${directiveName}" directive) must be located inside an element with the "ngSwitch" attribute (matching "NgSwitch" directive)`);
}
/**
* @ngModule CommonModule
*
* @usageNotes
* ```html
* <some-element [ngPlural]="value">
*   <ng-template ngPluralCase="=0">there is nothing</ng-template>
*   <ng-template ngPluralCase="=1">there is one</ng-template>
*   <ng-template ngPluralCase="few">there are a few</ng-template>
* </some-element>
* ```
*
* @description
*
* Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
*
* Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
* that match the switch expression's pluralization category.
*
* To use this directive you must provide a container element that sets the `[ngPlural]` attribute
* to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
* expression:
* - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
*   matches the switch expression exactly,
* - otherwise, the view will be treated as a "category match", and will only display if exact
*   value matches aren't found and the value maps to its category for the defined locale.
*
* See http://cldr.unicode.org/index/cldr-spec/plural-rules
*
* @publicApi
*/
var NgPlural = class NgPlural {
	_localization;
	_activeView;
	_caseViews = {};
	constructor(_localization) {
		this._localization = _localization;
	}
	set ngPlural(value) {
		this._updateView(value);
	}
	addCase(value, switchView) {
		this._caseViews[value] = switchView;
	}
	_updateView(switchValue) {
		this._clearViews();
		const key = getPluralCategory(switchValue, Object.keys(this._caseViews), this._localization);
		this._activateView(this._caseViews[key]);
	}
	_clearViews() {
		if (this._activeView) this._activeView.destroy();
	}
	_activateView(view) {
		if (view) {
			this._activeView = view;
			this._activeView.create();
		}
	}
	static ɵfac = function NgPlural_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgPlural)(ɵɵdirectiveInject(NgLocalization));
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgPlural,
		selectors: [[
			"",
			"ngPlural",
			""
		]],
		inputs: { ngPlural: "ngPlural" }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPlural, [{
		type: Directive,
		args: [{ selector: "[ngPlural]" }]
	}], () => [{ type: NgLocalization }], { ngPlural: [{ type: Input }] });
})();
/**
* @ngModule CommonModule
*
* @description
*
* Creates a view that will be added/removed from the parent {@link NgPlural} when the
* given expression matches the plural expression according to CLDR rules.
*
* @usageNotes
* ```html
* <some-element [ngPlural]="value">
*   <ng-template ngPluralCase="=0">...</ng-template>
*   <ng-template ngPluralCase="other">...</ng-template>
* </some-element>
*```
*
* See {@link NgPlural} for more details and example.
*
* @publicApi
*/
var NgPluralCase = class NgPluralCase {
	value;
	constructor(value, template, viewContainer, ngPlural) {
		this.value = value;
		const isANumber = !isNaN(Number(value));
		ngPlural.addCase(isANumber ? `=${value}` : value, new SwitchView(viewContainer, template));
	}
	static ɵfac = function NgPluralCase_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgPluralCase)(ɵɵinjectAttribute("ngPluralCase"), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NgPlural, 1));
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgPluralCase,
		selectors: [[
			"",
			"ngPluralCase",
			""
		]]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPluralCase, [{
		type: Directive,
		args: [{ selector: "[ngPluralCase]" }]
	}], () => [
		{
			type: void 0,
			decorators: [{
				type: Attribute,
				args: ["ngPluralCase"]
			}]
		},
		{ type: TemplateRef },
		{ type: ViewContainerRef },
		{
			type: NgPlural,
			decorators: [{ type: Host }]
		}
	], null);
})();
/**
* @ngModule CommonModule
*
* @usageNotes
*
* Set the width of the containing element to a pixel value returned by an expression.
*
* ```html
* <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
* ```
*
* Set a collection of style values using an expression that returns key-value pairs.
*
* ```html
* <some-element [ngStyle]="objExp">...</some-element>
* ```
*
* For more simple use cases you can use the [style bindings](/guide/templates/binding#css-class-and-style-property-bindings) directly.
* It doesn't require importing a directive.
*
* Set the font of the containing element to the result of an expression.
*
* ```html
* <some-element [style]="{'font-style': styleExp}">...</some-element>
* ```
*
* @description
*
* An attribute directive that updates styles for the containing HTML element.
* Sets one or more style properties, specified as colon-separated key-value pairs.
* The key is a style name, with an optional `.<unit>` suffix
* (such as 'top.px', 'font-style.em').
* The value is an expression to be evaluated.
* The resulting non-null value, expressed in the given unit,
* is assigned to the given style property.
* If the result of evaluation is null, the corresponding style is removed.
*
* @see [Style bindings](/guide/templates/binding#css-class-and-style-property-bindings)
*
* @publicApi
*/
var NgStyle = class NgStyle {
	_ngEl;
	_differs;
	_renderer;
	_ngStyle = null;
	_differ = null;
	constructor(_ngEl, _differs, _renderer) {
		this._ngEl = _ngEl;
		this._differs = _differs;
		this._renderer = _renderer;
	}
	set ngStyle(values) {
		this._ngStyle = values;
		if (!this._differ && values) this._differ = this._differs.find(values).create();
	}
	ngDoCheck() {
		if (this._differ) {
			const changes = this._differ.diff(this._ngStyle);
			if (changes) this._applyChanges(changes);
		}
	}
	_setStyle(nameAndUnit, value) {
		const [name, unit] = nameAndUnit.split(".");
		const flags = name.indexOf("-") === -1 ? void 0 : RendererStyleFlags2.DashCase;
		if (value != null) this._renderer.setStyle(this._ngEl.nativeElement, name, unit ? `${value}${unit}` : value, flags);
		else this._renderer.removeStyle(this._ngEl.nativeElement, name, flags);
	}
	_applyChanges(changes) {
		changes.forEachRemovedItem((record) => this._setStyle(record.key, null));
		changes.forEachAddedItem((record) => this._setStyle(record.key, record.currentValue));
		changes.forEachChangedItem((record) => this._setStyle(record.key, record.currentValue));
	}
	static ɵfac = function NgStyle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgStyle)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(Renderer2));
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgStyle,
		selectors: [[
			"",
			"ngStyle",
			""
		]],
		inputs: { ngStyle: "ngStyle" }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgStyle, [{
		type: Directive,
		args: [{ selector: "[ngStyle]" }]
	}], () => [
		{ type: ElementRef },
		{ type: KeyValueDiffers },
		{ type: Renderer2 }
	], { ngStyle: [{
		type: Input,
		args: ["ngStyle"]
	}] });
})();
/**
* @ngModule CommonModule
*
* @description
*
* Inserts an embedded view from a prepared `TemplateRef`.
*
* You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
* `[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
* by the local template `let` declarations.
*
* @usageNotes
* ```html
* <ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
* ```
*
* Using the key `$implicit` in the context object will set its value as default.
*
* ### Example
*
* {@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}
*
* @publicApi
*/
var NgTemplateOutlet = class NgTemplateOutlet {
	_viewContainerRef;
	_viewRef = null;
	/**
	* A context object to attach to the {@link EmbeddedViewRef}. This should be an
	* object, the object's keys will be available for binding by the local template `let`
	* declarations.
	* Using the key `$implicit` in the context object will set its value as default.
	*/
	ngTemplateOutletContext = null;
	/**
	* A string defining the template reference and optionally the context object for the template.
	*/
	ngTemplateOutlet = null;
	/** Injector to be used within the embedded view. */
	ngTemplateOutletInjector = null;
	constructor(_viewContainerRef) {
		this._viewContainerRef = _viewContainerRef;
	}
	ngOnChanges(changes) {
		if (this._shouldRecreateView(changes)) {
			const viewContainerRef = this._viewContainerRef;
			if (this._viewRef) viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
			if (!this.ngTemplateOutlet) {
				this._viewRef = null;
				return;
			}
			const viewContext = this._createContextForwardProxy();
			this._viewRef = viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, viewContext, { injector: this.ngTemplateOutletInjector ?? void 0 });
		}
	}
	/**
	* We need to re-create existing embedded view if either is true:
	* - the outlet changed.
	* - the injector changed.
	*/
	_shouldRecreateView(changes) {
		return !!changes["ngTemplateOutlet"] || !!changes["ngTemplateOutletInjector"];
	}
	/**
	* For a given outlet instance, we create a proxy object that delegates
	* to the user-specified context. This allows changing, or swapping out
	* the context object completely without having to destroy/re-create the view.
	*/
	_createContextForwardProxy() {
		return new Proxy({}, {
			set: (_target, prop, newValue) => {
				if (!this.ngTemplateOutletContext) return false;
				return Reflect.set(this.ngTemplateOutletContext, prop, newValue);
			},
			get: (_target, prop, receiver) => {
				if (!this.ngTemplateOutletContext) return;
				return Reflect.get(this.ngTemplateOutletContext, prop, receiver);
			}
		});
	}
	static ɵfac = function NgTemplateOutlet_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgTemplateOutlet)(ɵɵdirectiveInject(ViewContainerRef));
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgTemplateOutlet,
		selectors: [[
			"",
			"ngTemplateOutlet",
			""
		]],
		inputs: {
			ngTemplateOutletContext: "ngTemplateOutletContext",
			ngTemplateOutlet: "ngTemplateOutlet",
			ngTemplateOutletInjector: "ngTemplateOutletInjector"
		},
		features: [ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTemplateOutlet, [{
		type: Directive,
		args: [{ selector: "[ngTemplateOutlet]" }]
	}], () => [{ type: ViewContainerRef }], {
		ngTemplateOutletContext: [{ type: Input }],
		ngTemplateOutlet: [{ type: Input }],
		ngTemplateOutletInjector: [{ type: Input }]
	});
})();
/**
* A collection of Angular directives that are likely to be used in each and every Angular
* application.
*/
var COMMON_DIRECTIVES = [
	NgClass,
	NgComponentOutlet,
	NgForOf,
	NgIf,
	NgTemplateOutlet,
	NgStyle,
	NgSwitch,
	NgSwitchCase,
	NgSwitchDefault,
	NgPlural,
	NgPluralCase
];
function invalidPipeArgumentError(type, value) {
	return new RuntimeError(2100, ngDevMode && `InvalidPipeArgument: '${value}' for pipe '${stringify(type)}'`);
}
var SubscribableStrategy = class {
	createSubscription(async, updateLatestValue, onError) {
		return untracked(() => async.subscribe({
			next: updateLatestValue,
			error: onError
		}));
	}
	dispose(subscription) {
		untracked(() => subscription.unsubscribe());
	}
};
var PromiseStrategy = class {
	createSubscription(async, updateLatestValue, onError) {
		async.then((v) => updateLatestValue?.(v), (e) => onError?.(e));
		return { unsubscribe: () => {
			updateLatestValue = null;
			onError = null;
		} };
	}
	dispose(subscription) {
		subscription.unsubscribe();
	}
};
var _promiseStrategy = new PromiseStrategy();
var _subscribableStrategy = new SubscribableStrategy();
/**
* @ngModule CommonModule
* @description
*
* Unwraps a value from an asynchronous primitive.
*
* The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
* emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
* changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
* potential memory leaks. When the reference of the expression changes, the `async` pipe
* automatically unsubscribes from the old `Observable` or `Promise` and subscribes to the new one.
*
* @usageNotes
*
* ### Examples
*
* This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
* promise.
*
* {@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
*
* It's also possible to use `async` with Observables. The example below binds the `time` Observable
* to the view. The Observable continuously updates the view with the current time.
*
* {@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @publicApi
*/
var AsyncPipe = class AsyncPipe {
	_ref;
	_latestValue = null;
	markForCheckOnValueUpdate = true;
	_subscription = null;
	_obj = null;
	_strategy = null;
	applicationErrorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
	constructor(ref) {
		this._ref = ref;
	}
	ngOnDestroy() {
		if (this._subscription) this._dispose();
		this._ref = null;
	}
	transform(obj) {
		if (!this._obj) {
			if (obj) try {
				this.markForCheckOnValueUpdate = false;
				this._subscribe(obj);
			} finally {
				this.markForCheckOnValueUpdate = true;
			}
			return this._latestValue;
		}
		if (obj !== this._obj) {
			this._dispose();
			return this.transform(obj);
		}
		return this._latestValue;
	}
	_subscribe(obj) {
		this._obj = obj;
		this._strategy = this._selectStrategy(obj);
		this._subscription = this._strategy.createSubscription(obj, (value) => this._updateLatestValue(obj, value), (e) => this.applicationErrorHandler(e));
	}
	_selectStrategy(obj) {
		if (isPromise$1(obj)) return _promiseStrategy;
		if (isSubscribable(obj)) return _subscribableStrategy;
		throw invalidPipeArgumentError(AsyncPipe, obj);
	}
	_dispose() {
		this._strategy.dispose(this._subscription);
		this._latestValue = null;
		this._subscription = null;
		this._obj = null;
	}
	_updateLatestValue(async, value) {
		if (async === this._obj) {
			this._latestValue = value;
			if (this.markForCheckOnValueUpdate) this._ref?.markForCheck();
		}
	}
	static ɵfac = function AsyncPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AsyncPipe)(ɵɵdirectiveInject(ChangeDetectorRef, 16));
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "async",
		type: AsyncPipe,
		pure: false
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncPipe, [{
		type: Pipe,
		args: [{
			name: "async",
			pure: false
		}]
	}], () => [{ type: ChangeDetectorRef }], null);
})();
/**
* Transforms text to all lower case.
*
* @see {@link UpperCasePipe}
* @see {@link TitleCasePipe}
* @usageNotes
*
* The following example defines a view that allows the user to enter
* text, and then uses the pipe to convert the input text to all lower case.
*
* {@example common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe'}
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @ngModule CommonModule
* @publicApi
*/
var LowerCasePipe = class LowerCasePipe {
	transform(value) {
		if (value == null) return null;
		if (typeof value !== "string") throw invalidPipeArgumentError(LowerCasePipe, value);
		return value.toLowerCase();
	}
	static ɵfac = function LowerCasePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || LowerCasePipe)();
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "lowercase",
		type: LowerCasePipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LowerCasePipe, [{
		type: Pipe,
		args: [{ name: "lowercase" }]
	}], null, null);
})();
var unicodeWordMatch = /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;
/**
* Transforms text to title case.
* Capitalizes the first letter of each word and transforms the
* rest of the word to lower case.
* Words are delimited by any whitespace character, such as a space, tab, or line-feed character.
*
* @see {@link LowerCasePipe}
* @see {@link UpperCasePipe}
*
* @usageNotes
* The following example shows the result of transforming various strings into title case.
*
* {@example common/pipes/ts/titlecase_pipe.ts region='TitleCasePipe'}
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @ngModule CommonModule
* @publicApi
*/
var TitleCasePipe = class TitleCasePipe {
	transform(value) {
		if (value == null) return null;
		if (typeof value !== "string") throw invalidPipeArgumentError(TitleCasePipe, value);
		return value.replace(unicodeWordMatch, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());
	}
	static ɵfac = function TitleCasePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || TitleCasePipe)();
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "titlecase",
		type: TitleCasePipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleCasePipe, [{
		type: Pipe,
		args: [{ name: "titlecase" }]
	}], null, null);
})();
/**
* Transforms text to all upper case.
* @see {@link LowerCasePipe}
* @see {@link TitleCasePipe}
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @ngModule CommonModule
* @publicApi
*/
var UpperCasePipe = class UpperCasePipe {
	transform(value) {
		if (value == null) return null;
		if (typeof value !== "string") throw invalidPipeArgumentError(UpperCasePipe, value);
		return value.toUpperCase();
	}
	static ɵfac = function UpperCasePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || UpperCasePipe)();
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "uppercase",
		type: UpperCasePipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpperCasePipe, [{
		type: Pipe,
		args: [{ name: "uppercase" }]
	}], null, null);
})();
/**
* The default date format of Angular date pipe, which corresponds to the following format:
* `'MMM d,y'` (e.g. `Jun 15, 2015`)
*/
var DEFAULT_DATE_FORMAT = "mediumDate";
/**
* Optionally-provided default timezone to use for all instances of `DatePipe` (such as `'+0430'`).
* If the value isn't provided, the `DatePipe` will use the end-user's local system timezone.
*
* @deprecated use DATE_PIPE_DEFAULT_OPTIONS token to configure DatePipe
*/
var DATE_PIPE_DEFAULT_TIMEZONE = new InjectionToken(ngDevMode ? "DATE_PIPE_DEFAULT_TIMEZONE" : "");
/**
* DI token that allows to provide default configuration for the `DatePipe` instances in an
* application. The value is an object which can include the following fields:
* - `dateFormat`: configures the default date format. If not provided, the `DatePipe`
* will use the 'mediumDate' as a value.
* - `timezone`: configures the default timezone. If not provided, the `DatePipe` will
* use the end-user's local system timezone.
*
* @see {@link DatePipeConfig}
*
* @usageNotes
*
* Various date pipe default values can be overwritten by providing this token with
* the value that has this interface.
*
* For example:
*
* Override the default date format by providing a value using the token:
* ```ts
* providers: [
*   {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {dateFormat: 'shortDate'}}
* ]
* ```
*
* Override the default timezone by providing a value using the token:
* ```ts
* providers: [
*   {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {timezone: '-1200'}}
* ]
* ```
*/
var DATE_PIPE_DEFAULT_OPTIONS = new InjectionToken(ngDevMode ? "DATE_PIPE_DEFAULT_OPTIONS" : "");
/**
* @ngModule CommonModule
* @description
*
* Formats a date value according to locale rules.
*
* `DatePipe` is executed only when it detects a pure change to the input value.
* A pure change is either a change to a primitive input value
* (such as `String`, `Number`, `Boolean`, or `Symbol`),
* or a changed object reference (such as `Date`, `Array`, `Function`, or `Object`).
*
* Note that mutating a `Date` object does not cause the pipe to be rendered again.
* To ensure that the pipe is executed, you must create a new `Date` object.
*
* Only the `en-US` locale data comes with Angular. To localize dates
* in another language, you must import the corresponding locale data.
* See the [I18n guide](guide/i18n/format-data-locale) for more information.
*
* The time zone of the formatted value can be specified either by passing it in as the second
* parameter of the pipe, or by setting the default through the `DATE_PIPE_DEFAULT_OPTIONS`
* injection token. The value that is passed in as the second parameter takes precedence over
* the one defined using the injection token.
*
* @see {@link formatDate}
*
*
* @usageNotes
*
* The result of this pipe is not reevaluated when the input is mutated. To avoid the need to
* reformat the date on every change-detection cycle, treat the date as an immutable object
* and change the reference when the pipe needs to run again.
*
* ### Pre-defined format options
*
* | Option        | Equivalent to                       | Examples (given in `en-US` locale)              |
* |---------------|-------------------------------------|-------------------------------------------------|
* | `'short'`     | `'M/d/yy, h:mm a'`                  | `6/15/15, 9:03 AM`                              |
* | `'medium'`    | `'MMM d, y, h:mm:ss a'`             | `Jun 15, 2015, 9:03:01 AM`                      |
* | `'long'`      | `'MMMM d, y, h:mm:ss a z'`          | `June 15, 2015 at 9:03:01 AM GMT+1`             |
* | `'full'`      | `'EEEE, MMMM d, y, h:mm:ss a zzzz'` | `Monday, June 15, 2015 at 9:03:01 AM GMT+01:00` |
* | `'shortDate'` | `'M/d/yy'`                          | `6/15/15`                                       |
* | `'mediumDate'`| `'MMM d, y'`                        | `Jun 15, 2015`                                  |
* | `'longDate'`  | `'MMMM d, y'`                       | `June 15, 2015`                                 |
* | `'fullDate'`  | `'EEEE, MMMM d, y'`                 | `Monday, June 15, 2015`                         |
* | `'shortTime'` | `'h:mm a'`                          | `9:03 AM`                                       |
* | `'mediumTime'`| `'h:mm:ss a'`                       | `9:03:01 AM`                                    |
* | `'longTime'`  | `'h:mm:ss a z'`                     | `9:03:01 AM GMT+1`                              |
* | `'fullTime'`  | `'h:mm:ss a zzzz'`                  | `9:03:01 AM GMT+01:00`                          |
*
* ### Custom format options
*
* You can construct a format string using symbols to specify the components
* of a date-time value, as described in the following table.
* Format details depend on the locale.
* Fields marked with (*) are only available in the extra data set for the given locale.
*
*  | Field type              | Format      | Description                                                   | Example Value                                              |
*  |-------------------------|-------------|---------------------------------------------------------------|------------------------------------------------------------|
*  | Era                     | G, GG & GGG | Abbreviated                                                   | AD                                                         |
*  |                         | GGGG        | Wide                                                          | Anno Domini                                                |
*  |                         | GGGGG       | Narrow                                                        | A                                                          |
*  | Year                    | y           | Numeric: minimum digits                                       | 2, 20, 201, 2017, 20173                                    |
*  |                         | yy          | Numeric: 2 digits + zero padded                               | 02, 20, 01, 17, 73                                         |
*  |                         | yyy         | Numeric: 3 digits + zero padded                               | 002, 020, 201, 2017, 20173                                 |
*  |                         | yyyy        | Numeric: 4 digits or more + zero padded                       | 0002, 0020, 0201, 2017, 20173                              |
*  | ISO Week-numbering year | Y           | Numeric: minimum digits                                       | 2, 20, 201, 2017, 20173                                    |
*  |                         | YY          | Numeric: 2 digits + zero padded                               | 02, 20, 01, 17, 73                                         |
*  |                         | YYY         | Numeric: 3 digits + zero padded                               | 002, 020, 201, 2017, 20173                                 |
*  |                         | YYYY        | Numeric: 4 digits or more + zero padded                       | 0002, 0020, 0201, 2017, 20173                              |
*  | Month                   | M           | Numeric: 1 digit                                              | 9, 12                                                      |
*  |                         | MM          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
*  |                         | MMM         | Abbreviated                                                   | Sep                                                        |
*  |                         | MMMM        | Wide                                                          | September                                                  |
*  |                         | MMMMM       | Narrow                                                        | S                                                          |
*  | Month standalone        | L           | Numeric: 1 digit                                              | 9, 12                                                      |
*  |                         | LL          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
*  |                         | LLL         | Abbreviated                                                   | Sep                                                        |
*  |                         | LLLL        | Wide                                                          | September                                                  |
*  |                         | LLLLL       | Narrow                                                        | S                                                          |
*  | ISO Week of year        | w           | Numeric: minimum digits                                       | 1... 53                                                    |
*  |                         | ww          | Numeric: 2 digits + zero padded                               | 01... 53                                                   |
*  | Week of month           | W           | Numeric: 1 digit                                              | 1... 5                                                     |
*  | Day of month            | d           | Numeric: minimum digits                                       | 1                                                          |
*  |                         | dd          | Numeric: 2 digits + zero padded                               | 01                                                         |
*  | Week day                | E, EE & EEE | Abbreviated                                                   | Tue                                                        |
*  |                         | EEEE        | Wide                                                          | Tuesday                                                    |
*  |                         | EEEEE       | Narrow                                                        | T                                                          |
*  |                         | EEEEEE      | Short                                                         | Tu                                                         |
*  | Week day standalone     | c, cc       | Numeric: 1 digit                                              | 2                                                          |
*  |                         | ccc         | Abbreviated                                                   | Tue                                                        |
*  |                         | cccc        | Wide                                                          | Tuesday                                                    |
*  |                         | ccccc       | Narrow                                                        | T                                                          |
*  |                         | cccccc      | Short                                                         | Tu                                                         |
*  | Period                  | a, aa & aaa | Abbreviated                                                   | am/pm or AM/PM                                             |
*  |                         | aaaa        | Wide (fallback to `a` when missing)                           | ante meridiem/post meridiem                                |
*  |                         | aaaaa       | Narrow                                                        | a/p                                                        |
*  | Period*                 | B, BB & BBB | Abbreviated                                                   | mid.                                                       |
*  |                         | BBBB        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
*  |                         | BBBBB       | Narrow                                                        | md                                                         |
*  | Period standalone*      | b, bb & bbb | Abbreviated                                                   | mid.                                                       |
*  |                         | bbbb        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
*  |                         | bbbbb       | Narrow                                                        | md                                                         |
*  | Hour 1-12               | h           | Numeric: minimum digits                                       | 1, 12                                                      |
*  |                         | hh          | Numeric: 2 digits + zero padded                               | 01, 12                                                     |
*  | Hour 0-23               | H           | Numeric: minimum digits                                       | 0, 23                                                      |
*  |                         | HH          | Numeric: 2 digits + zero padded                               | 00, 23                                                     |
*  | Minute                  | m           | Numeric: minimum digits                                       | 8, 59                                                      |
*  |                         | mm          | Numeric: 2 digits + zero padded                               | 08, 59                                                     |
*  | Second                  | s           | Numeric: minimum digits                                       | 0... 59                                                    |
*  |                         | ss          | Numeric: 2 digits + zero padded                               | 00... 59                                                   |
*  | Fractional seconds      | S           | Numeric: 1 digit                                              | 0... 9                                                     |
*  |                         | SS          | Numeric: 2 digits + zero padded                               | 00... 99                                                   |
*  |                         | SSS         | Numeric: 3 digits + zero padded (= milliseconds)              | 000... 999                                                 |
*  | Zone                    | z, zz & zzz | Short specific non location format (fallback to O)            | GMT-8                                                      |
*  |                         | zzzz        | Long specific non location format (fallback to OOOO)          | GMT-08:00                                                  |
*  |                         | Z, ZZ & ZZZ | ISO8601 basic format                                          | -0800                                                      |
*  |                         | ZZZZ        | Long localized GMT format                                     | GMT-8:00                                                   |
*  |                         | ZZZZZ       | ISO8601 extended format + Z indicator for offset 0 (= XXXXX)  | -08:00                                                     |
*  |                         | O, OO & OOO | Short localized GMT format                                    | GMT-8                                                      |
*  |                         | OOOO        | Long localized GMT format                                     | GMT-08:00                                                  |
*
*
* ### Format examples
*
* These examples transform a date into various formats,
* assuming that `dateObj` is a JavaScript `Date` object for
* year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11,
* given in the local time for the `en-US` locale.
*
* ```
* {{ dateObj | date }}               // output is 'Jun 15, 2015'
* {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
* {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
* {{ dateObj | date:'mm:ss' }}       // output is '43:11'
* {{ dateObj | date:"MMM dd, yyyy 'at' hh:mm a" }}  // output is 'Jun 15, 2015 at 09:43 PM'
* ```
*
* ### Usage example
*
* The following component uses a date pipe to display the current date in different formats.
*
* ```angular-ts
* @Component({
*  selector: 'date-pipe',
*  template: `<div>
*    <p>Today is {{today | date}}</p>
*    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
*    <p>The time is {{today | date:'h:mm a z'}}</p>
*  </div>`
* })
* // Get the current date and time as a date-time value.
* export class DatePipeComponent {
*   today: number = Date.now();
* }
* ```
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @publicApi
*/
var DatePipe = class DatePipe {
	locale;
	defaultTimezone;
	defaultOptions;
	constructor(locale, defaultTimezone, defaultOptions) {
		this.locale = locale;
		this.defaultTimezone = defaultTimezone;
		this.defaultOptions = defaultOptions;
	}
	transform(value, format, timezone, locale) {
		if (value == null || value === "" || value !== value) return null;
		try {
			const _format = format ?? this.defaultOptions?.dateFormat ?? DEFAULT_DATE_FORMAT;
			const _timezone = timezone ?? this.defaultOptions?.timezone ?? this.defaultTimezone ?? void 0;
			return formatDate(value, _format, locale || this.locale, _timezone);
		} catch (error) {
			throw invalidPipeArgumentError(DatePipe, error.message);
		}
	}
	static ɵfac = function DatePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DatePipe)(ɵɵdirectiveInject(LOCALE_ID, 16), ɵɵdirectiveInject(DATE_PIPE_DEFAULT_TIMEZONE, 24), ɵɵdirectiveInject(DATE_PIPE_DEFAULT_OPTIONS, 24));
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "date",
		type: DatePipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePipe, [{
		type: Pipe,
		args: [{ name: "date" }]
	}], () => [
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [LOCALE_ID]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [DATE_PIPE_DEFAULT_TIMEZONE]
			}, { type: Optional }]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [DATE_PIPE_DEFAULT_OPTIONS]
			}, { type: Optional }]
		}
	], null);
})();
var _INTERPOLATION_REGEXP = /#/g;
/**
* @ngModule CommonModule
* @description
*
* Maps a value to a string that pluralizes the value according to locale rules.
*
* @usageNotes
*
* ### Example
*
* {@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @publicApi
*/
var I18nPluralPipe = class I18nPluralPipe {
	_localization;
	constructor(_localization) {
		this._localization = _localization;
	}
	/**
	* @param value the number to be formatted
	* @param pluralMap an object that mimics the ICU format, see
	* https://unicode-org.github.io/icu/userguide/format_parse/messages/.
	* @param locale a `string` defining the locale to use (uses the current {@link LOCALE_ID} by
	* default).
	*/
	transform(value, pluralMap, locale) {
		if (value == null) return "";
		if (typeof pluralMap !== "object" || pluralMap === null) throw invalidPipeArgumentError(I18nPluralPipe, pluralMap);
		return pluralMap[getPluralCategory(value, Object.keys(pluralMap), this._localization, locale)].replace(_INTERPOLATION_REGEXP, value.toString());
	}
	static ɵfac = function I18nPluralPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || I18nPluralPipe)(ɵɵdirectiveInject(NgLocalization, 16));
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "i18nPlural",
		type: I18nPluralPipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nPluralPipe, [{
		type: Pipe,
		args: [{ name: "i18nPlural" }]
	}], () => [{ type: NgLocalization }], null);
})();
/**
* @ngModule CommonModule
* @description
*
* Generic selector that displays the string that matches the current value.
*
* If none of the keys of the `mapping` match the `value`, then the content
* of the `other` key is returned when present, otherwise an empty string is returned.
*
* @usageNotes
*
* ### Example
*
* {@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @publicApi
*/
var I18nSelectPipe = class I18nSelectPipe {
	/**
	* @param value a string to be internationalized.
	* @param mapping an object that indicates the text that should be displayed
	* for different values of the provided `value`.
	*/
	transform(value, mapping) {
		if (value == null) return "";
		if (typeof mapping !== "object" || typeof value !== "string") throw invalidPipeArgumentError(I18nSelectPipe, mapping);
		if (mapping.hasOwnProperty(value)) return mapping[value];
		if (mapping.hasOwnProperty("other")) return mapping["other"];
		return "";
	}
	static ɵfac = function I18nSelectPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || I18nSelectPipe)();
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "i18nSelect",
		type: I18nSelectPipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nSelectPipe, [{
		type: Pipe,
		args: [{ name: "i18nSelect" }]
	}], null, null);
})();
/**
* @ngModule CommonModule
* @description
*
* Converts a value into its JSON-format representation.  Useful for debugging.
*
* @usageNotes
*
* The following component uses a JSON pipe to convert an object
* to JSON format, and displays the string in both formats for comparison.
*
* {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @publicApi
*/
var JsonPipe = class JsonPipe {
	/**
	* @param value A value of any type to convert into a JSON-format string.
	*/
	transform(value) {
		return JSON.stringify(value, null, 2);
	}
	static ɵfac = function JsonPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || JsonPipe)();
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "json",
		type: JsonPipe,
		pure: false
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonPipe, [{
		type: Pipe,
		args: [{
			name: "json",
			pure: false
		}]
	}], null, null);
})();
function makeKeyValuePair(key, value) {
	return {
		key,
		value
	};
}
/**
* @ngModule CommonModule
* @description
*
* Transforms Object or Map into an array of key value pairs.
*
* The output array will be ordered by keys.
* By default the comparator will be by Unicode point value.
* You can optionally pass a compareFn if your keys are complex types.
* Passing `null` as the compareFn will use natural ordering of the input.
*
* @usageNotes
* ### Examples
*
* This examples show how an Object or a Map can be iterated by ngFor with the use of this
* keyvalue pipe.
*
* {@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @publicApi
*/
var KeyValuePipe = class KeyValuePipe {
	differs;
	constructor(differs) {
		this.differs = differs;
	}
	differ;
	keyValues = [];
	compareFn = defaultComparator;
	transform(input, compareFn = defaultComparator) {
		if (!input || !(input instanceof Map) && typeof input !== "object") return null;
		this.differ ??= this.differs.find(input).create();
		const differChanges = this.differ.diff(input);
		const compareFnChanged = compareFn !== this.compareFn;
		if (differChanges) {
			this.keyValues = [];
			differChanges.forEachItem((r) => {
				this.keyValues.push(makeKeyValuePair(r.key, r.currentValue));
			});
		}
		if (differChanges || compareFnChanged) {
			if (compareFn) this.keyValues.sort(compareFn);
			this.compareFn = compareFn;
		}
		return this.keyValues;
	}
	static ɵfac = function KeyValuePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || KeyValuePipe)(ɵɵdirectiveInject(KeyValueDiffers, 16));
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "keyvalue",
		type: KeyValuePipe,
		pure: false
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyValuePipe, [{
		type: Pipe,
		args: [{
			name: "keyvalue",
			pure: false
		}]
	}], () => [{ type: KeyValueDiffers }], null);
})();
function defaultComparator(keyValueA, keyValueB) {
	const a = keyValueA.key;
	const b = keyValueB.key;
	if (a === b) return 0;
	if (a == null) return 1;
	if (b == null) return -1;
	if (typeof a == "string" && typeof b == "string") return a < b ? -1 : 1;
	if (typeof a == "number" && typeof b == "number") return a - b;
	if (typeof a == "boolean" && typeof b == "boolean") return a < b ? -1 : 1;
	const aString = String(a);
	const bString = String(b);
	return aString == bString ? 0 : aString < bString ? -1 : 1;
}
/**
* @ngModule CommonModule
* @description
*
* Formats a value according to digit options and locale rules.
* Locale determines group sizing and separator,
* decimal point character, and other locale-specific configurations.
*
* @see {@link formatNumber}
*
* @usageNotes
*
* ### digitsInfo
*
* The value's decimal representation is specified by the `digitsInfo`
* parameter, written in the following format:<br>
*
* ```
* {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}
* ```
*
*  - `minIntegerDigits`:
* The minimum number of integer digits before the decimal point.
* Default is 1.
*
* - `minFractionDigits`:
* The minimum number of digits after the decimal point.
* Default is 0.
*
*  - `maxFractionDigits`:
* The maximum number of digits after the decimal point.
* Default is 3.
*
* If the formatted value is truncated it will be rounded using the "to-nearest" method:
*
* ```
* {{3.6 | number: '1.0-0'}}
* <!--will output '4'-->
*
* {{-3.6 | number:'1.0-0'}}
* <!--will output '-4'-->
* ```
*
* ### locale
*
* `locale` will format a value according to locale rules.
* Locale determines group sizing and separator,
* decimal point character, and other locale-specific configurations.
*
* When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
*
* See [Setting your app locale](guide/i18n/locale-id).
*
* ### Example
*
* The following code shows how the pipe transforms values
* according to various format specifications,
* where the caller's default locale is `en-US`.
*
* {@example common/pipes/ts/number_pipe.ts region='NumberPipe'}
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @publicApi
*/
var DecimalPipe = class DecimalPipe {
	_locale;
	constructor(_locale) {
		this._locale = _locale;
	}
	transform(value, digitsInfo, locale) {
		if (!isValue(value)) return null;
		locale ||= this._locale;
		try {
			return formatNumber(strToNumber(value), locale, digitsInfo);
		} catch (error) {
			throw invalidPipeArgumentError(DecimalPipe, error.message);
		}
	}
	static ɵfac = function DecimalPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DecimalPipe)(ɵɵdirectiveInject(LOCALE_ID, 16));
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "number",
		type: DecimalPipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecimalPipe, [{
		type: Pipe,
		args: [{ name: "number" }]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [LOCALE_ID]
		}]
	}], null);
})();
/**
* @ngModule CommonModule
* @description
*
* Transforms a number to a percentage
* string, formatted according to locale rules that determine group sizing and
* separator, decimal-point character, and other locale-specific
* configurations.
*
* @see {@link formatPercent}
*
* @usageNotes
* The following code shows how the pipe transforms numbers
* into text strings, according to various format specifications,
* where the caller's default locale is `en-US`.
*
* {@example common/pipes/ts/percent_pipe.ts region='PercentPipe'}
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @publicApi
*/
var PercentPipe = class PercentPipe {
	_locale;
	constructor(_locale) {
		this._locale = _locale;
	}
	/**
	*
	* @param value The number to be formatted as a percentage.
	* @param digitsInfo Decimal representation options, specified by a string
	* in the following format:<br>
	* <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
	*   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
	* Default is `1`.
	*   - `minFractionDigits`: The minimum number of digits after the decimal point.
	* Default is `0`.
	*   - `maxFractionDigits`: The maximum number of digits after the decimal point.
	* Default is `0`.
	* @param locale A locale code for the locale format rules to use.
	* When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
	* See [Setting your app locale](guide/i18n/locale-id).
	*/
	transform(value, digitsInfo, locale) {
		if (!isValue(value)) return null;
		locale ||= this._locale;
		try {
			return formatPercent(strToNumber(value), locale, digitsInfo);
		} catch (error) {
			throw invalidPipeArgumentError(PercentPipe, error.message);
		}
	}
	static ɵfac = function PercentPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PercentPipe)(ɵɵdirectiveInject(LOCALE_ID, 16));
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "percent",
		type: PercentPipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PercentPipe, [{
		type: Pipe,
		args: [{ name: "percent" }]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [LOCALE_ID]
		}]
	}], null);
})();
/**
* @ngModule CommonModule
* @description
*
* Transforms a number to a currency string, formatted according to locale rules
* that determine group sizing and separator, decimal-point character,
* and other locale-specific configurations.
*
*
* @see {@link getCurrencySymbol}
* @see {@link formatCurrency}
*
* @usageNotes
* The following code shows how the pipe transforms numbers
* into text strings, according to various format specifications,
* where the caller's default locale is `en-US`.
*
* {@example common/pipes/ts/currency_pipe.ts region='CurrencyPipe'}
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @publicApi
*/
var CurrencyPipe = class CurrencyPipe {
	_locale;
	_defaultCurrencyCode;
	constructor(_locale, _defaultCurrencyCode = "USD") {
		this._locale = _locale;
		this._defaultCurrencyCode = _defaultCurrencyCode;
	}
	transform(value, currencyCode = this._defaultCurrencyCode, display = "symbol", digitsInfo, locale) {
		if (!isValue(value)) return null;
		locale ||= this._locale;
		if (typeof display === "boolean") {
			if (typeof ngDevMode === "undefined" || ngDevMode) console.warn(`Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".`);
			display = display ? "symbol" : "code";
		}
		let currency = currencyCode || this._defaultCurrencyCode;
		if (display !== "code") {
			if (display === "symbol" || display === "symbol-narrow") currency = getCurrencySymbol(currency, display === "symbol" ? "wide" : "narrow", locale);
			else currency = display;
		}
		try {
			return formatCurrency(strToNumber(value), locale, currency, currencyCode, digitsInfo);
		} catch (error) {
			throw invalidPipeArgumentError(CurrencyPipe, error.message);
		}
	}
	static ɵfac = function CurrencyPipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CurrencyPipe)(ɵɵdirectiveInject(LOCALE_ID, 16), ɵɵdirectiveInject(DEFAULT_CURRENCY_CODE, 16));
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "currency",
		type: CurrencyPipe,
		pure: true
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyPipe, [{
		type: Pipe,
		args: [{ name: "currency" }]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [LOCALE_ID]
		}]
	}, {
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DEFAULT_CURRENCY_CODE]
		}]
	}], null);
})();
function isValue(value) {
	return !(value == null || value === "" || value !== value);
}
/**
* Transforms a string into a number (if needed).
*/
function strToNumber(value) {
	if (typeof value === "string" && !isNaN(Number(value) - parseFloat(value))) return Number(value);
	if (typeof value !== "number") throw new RuntimeError(2309, ngDevMode && `${value} is not a number`);
	return value;
}
/**
* @ngModule CommonModule
* @description
*
* Creates a new `Array` or `String` containing a subset (slice) of the elements.
*
* @usageNotes
*
* All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
* and `String.prototype.slice()`.
*
* When operating on an `Array`, the returned `Array` is always a copy even when all
* the elements are being returned.
*
* When operating on a blank value, the pipe returns the blank value.
*
* ### List Example
*
* This `ngFor` example:
*
* {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
*
* produces the following:
*
* ```html
* <li>b</li>
* <li>c</li>
* ```
*
* ### String Examples
*
* {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
*
* @see [Built-in Pipes](guide/templates/pipes#built-in-pipes)
*
* @publicApi
*/
var SlicePipe = class SlicePipe {
	transform(value, start, end) {
		if (value == null) return null;
		if (!(typeof value === "string" || Array.isArray(value))) throw invalidPipeArgumentError(SlicePipe, value);
		return value.slice(start, end);
	}
	static ɵfac = function SlicePipe_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || SlicePipe)();
	};
	static ɵpipe = /* @__PURE__ */ ɵɵdefinePipe({
		name: "slice",
		type: SlicePipe,
		pure: false
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlicePipe, [{
		type: Pipe,
		args: [{
			name: "slice",
			pure: false
		}]
	}], null, null);
})();
/**
* @module
* @description
* This module provides a set of common Pipes.
*/
/**
* A collection of Angular pipes that are likely to be used in each and every application.
*/
var COMMON_PIPES = [
	AsyncPipe,
	UpperCasePipe,
	LowerCasePipe,
	JsonPipe,
	SlicePipe,
	DecimalPipe,
	PercentPipe,
	TitleCasePipe,
	CurrencyPipe,
	DatePipe,
	I18nPluralPipe,
	I18nSelectPipe,
	KeyValuePipe
];
/**
* Exports all the basic Angular directives and pipes,
* such as `NgIf`, `NgForOf`, `DecimalPipe`, and so on.
* Re-exported by `BrowserModule`, which is included automatically in the root
* `AppModule` when you create a new app with the CLI `new` command.
*
* @publicApi
*/
var CommonModule = class CommonModule {
	static ɵfac = function CommonModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CommonModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: CommonModule,
		imports: [
			NgClass,
			NgComponentOutlet,
			NgForOf,
			NgIf,
			NgTemplateOutlet,
			NgStyle,
			NgSwitch,
			NgSwitchCase,
			NgSwitchDefault,
			NgPlural,
			NgPluralCase,
			AsyncPipe,
			UpperCasePipe,
			LowerCasePipe,
			JsonPipe,
			SlicePipe,
			DecimalPipe,
			PercentPipe,
			TitleCasePipe,
			CurrencyPipe,
			DatePipe,
			I18nPluralPipe,
			I18nSelectPipe,
			KeyValuePipe
		],
		exports: [
			NgClass,
			NgComponentOutlet,
			NgForOf,
			NgIf,
			NgTemplateOutlet,
			NgStyle,
			NgSwitch,
			NgSwitchCase,
			NgSwitchDefault,
			NgPlural,
			NgPluralCase,
			AsyncPipe,
			UpperCasePipe,
			LowerCasePipe,
			JsonPipe,
			SlicePipe,
			DecimalPipe,
			PercentPipe,
			TitleCasePipe,
			CurrencyPipe,
			DatePipe,
			I18nPluralPipe,
			I18nSelectPipe,
			KeyValuePipe
		]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonModule, [{
		type: NgModule,
		args: [{
			imports: [COMMON_DIRECTIVES, COMMON_PIPES],
			exports: [COMMON_DIRECTIVES, COMMON_PIPES]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/common/fesm2022/xhr.mjs
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
function parseCookieValue(cookieStr, name) {
	name = encodeURIComponent(name);
	for (const cookie of cookieStr.split(";")) {
		const eqIndex = cookie.indexOf("=");
		const [cookieName, cookieValue] = eqIndex == -1 ? [cookie, ""] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)];
		if (cookieName.trim() === name) return decodeURIComponent(cookieValue);
	}
	return null;
}
/**
* A wrapper around the `XMLHttpRequest` constructor.
*
* @publicApi
*/
var XhrFactory = class {};
//#endregion
//#region node_modules/@angular/common/fesm2022/common.mjs
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
var PLATFORM_BROWSER_ID = "browser";
var PLATFORM_SERVER_ID = "server";
/**
* Returns whether a platform id represents a browser platform.
* @publicApi
*/
function isPlatformBrowser(platformId) {
	return platformId === PLATFORM_BROWSER_ID;
}
/**
* Returns whether a platform id represents a server platform.
* @publicApi
*/
function isPlatformServer(platformId) {
	return platformId === PLATFORM_SERVER_ID;
}
/**
* Defines a scroll position manager. Implemented by `BrowserViewportScroller`.
*
* @publicApi
*/
var ViewportScroller = class ViewportScroller {
	/** @nocollapse */
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ViewportScroller,
		providedIn: "root",
		factory: () => new BrowserViewportScroller(inject(DOCUMENT), window)
	});
};
/**
* Manages the scroll position for a browser window.
*/
var BrowserViewportScroller = class {
	document;
	window;
	offset = () => [0, 0];
	constructor(document, window) {
		this.document = document;
		this.window = window;
	}
	/**
	* Configures the top offset used when scrolling to an anchor.
	* @param offset A position in screen coordinates (a tuple with x and y values)
	* or a function that returns the top offset position.
	*
	*/
	setOffset(offset) {
		if (Array.isArray(offset)) this.offset = () => offset;
		else this.offset = offset;
	}
	/**
	* Retrieves the current scroll position.
	* @returns The position in screen coordinates.
	*/
	getScrollPosition() {
		return [this.window.scrollX, this.window.scrollY];
	}
	/**
	* Sets the scroll position.
	* @param position The new position in screen coordinates.
	*/
	scrollToPosition(position, options) {
		this.window.scrollTo({
			...options,
			left: position[0],
			top: position[1]
		});
	}
	/**
	* Scrolls to an element and attempts to focus the element.
	*
	* Note that the function name here is misleading in that the target string may be an ID for a
	* non-anchor element.
	*
	* @param target The ID of an element or name of the anchor.
	*
	* @see https://html.spec.whatwg.org/#the-indicated-part-of-the-document
	* @see https://html.spec.whatwg.org/#scroll-to-fragid
	*/
	scrollToAnchor(target, options) {
		const elSelected = findAnchorFromDocument(this.document, target);
		if (elSelected) {
			this.scrollToElement(elSelected, options);
			elSelected.focus();
		}
	}
	/**
	* Disables automatic scroll restoration provided by the browser.
	*/
	setHistoryScrollRestoration(scrollRestoration) {
		try {
			this.window.history.scrollRestoration = scrollRestoration;
		} catch {
			console.warn(formatRuntimeError(2400, ngDevMode && "Failed to set `window.history.scrollRestoration`. This may occur when:\n• The script is running inside a sandboxed iframe\n• The window is partially navigated or inactive\n• The script is executed in an untrusted or special context (e.g., test runners, browser extensions, or content previews)\nScroll position may not be preserved across navigation."));
		}
	}
	/**
	* Scrolls to an element using the native offset and the specified offset set on this scroller.
	*
	* The offset can be used when we know that there is a floating header and scrolling naively to an
	* element (ex: `scrollIntoView`) leaves the element hidden behind the floating header.
	*/
	scrollToElement(el, options) {
		const rect = el.getBoundingClientRect();
		const left = rect.left + this.window.pageXOffset;
		const top = rect.top + this.window.pageYOffset;
		const offset = this.offset();
		this.window.scrollTo({
			...options,
			left: left - offset[0],
			top: top - offset[1]
		});
	}
};
function findAnchorFromDocument(document, target) {
	const documentResult = document.getElementById(target) || document.getElementsByName(target)[0];
	if (documentResult) return documentResult;
	if (typeof document.createTreeWalker === "function" && document.body && typeof document.body.attachShadow === "function") {
		const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
		let currentNode = treeWalker.currentNode;
		while (currentNode) {
			const shadowRoot = currentNode.shadowRoot;
			if (shadowRoot) {
				const result = shadowRoot.getElementById(target) || shadowRoot.querySelector(`[name="${target}"]`);
				if (result) return result;
			}
			currentNode = treeWalker.nextNode();
		}
	}
	return null;
}
function getUrl(src, win) {
	return isAbsoluteUrl(src) ? new URL(src) : new URL(src, win.location.href);
}
function isAbsoluteUrl(src) {
	return /^https?:\/\//.test(src);
}
function extractHostname(url) {
	return isAbsoluteUrl(url) ? new URL(url).hostname : url;
}
/**
* Noop image loader that does no transformation to the original src and just returns it as is.
* This loader is used as a default one if more specific logic is not provided in an app config.
*
* @see {@link ImageLoader}
* @see {@link NgOptimizedImage}
*/
var noopImageLoader = (config) => config.src;
/**
* Injection token that configures the image loader function.
*
* @see {@link ImageLoader}
* @see {@link NgOptimizedImage}
* @publicApi
*/
var IMAGE_LOADER = new InjectionToken(ngDevMode ? "ImageLoader" : "", {
	providedIn: "root",
	factory: () => noopImageLoader
});
ngDevMode;
/**
* Name and URL tester for Cloudinary.
*/
var cloudinaryLoaderInfo = {
	name: "Cloudinary",
	testUrl: isCloudinaryUrl
};
var CLOUDINARY_LOADER_REGEX = /https?\:\/\/[^\/]+\.cloudinary\.com\/.+/;
/**
* Tests whether a URL is from Cloudinary CDN.
*/
function isCloudinaryUrl(url) {
	return CLOUDINARY_LOADER_REGEX.test(url);
}
ngDevMode;
/**
* Name and URL tester for ImageKit.
*/
var imageKitLoaderInfo = {
	name: "ImageKit",
	testUrl: isImageKitUrl
};
var IMAGE_KIT_LOADER_REGEX = /https?\:\/\/[^\/]+\.imagekit\.io\/.+/;
/**
* Tests whether a URL is from ImageKit CDN.
*/
function isImageKitUrl(url) {
	return IMAGE_KIT_LOADER_REGEX.test(url);
}
ngDevMode;
/**
* Name and URL tester for Imgix.
*/
var imgixLoaderInfo = {
	name: "Imgix",
	testUrl: isImgixUrl
};
var IMGIX_LOADER_REGEX = /https?\:\/\/[^\/]+\.imgix\.net\/.+/;
/**
* Tests whether a URL is from Imgix CDN.
*/
function isImgixUrl(url) {
	return IMGIX_LOADER_REGEX.test(url);
}
ngDevMode;
/**
* Name and URL tester for Netlify.
*/
var netlifyLoaderInfo = {
	name: "Netlify",
	testUrl: isNetlifyUrl
};
var NETLIFY_LOADER_REGEX = /https?\:\/\/[^\/]+\.netlify\.app\/.+/;
/**
* Tests whether a URL is from a Netlify site. This won't catch sites with a custom domain,
* but it's a good start for sites in development. This is only used to warn users who haven't
* configured an image loader.
*/
function isNetlifyUrl(url) {
	return NETLIFY_LOADER_REGEX.test(url);
}
function imgDirectiveDetails(ngSrc, includeNgSrc = true) {
	return `The NgOptimizedImage directive ${includeNgSrc ? `(activated on an <img> element with the \`ngSrc="${ngSrc}"\`) ` : ""}has detected that`;
}
/**
* Asserts that the application is in development mode. Throws an error if the application is in
* production mode. This assert can be used to make sure that there is no dev-mode code invoked in
* the prod mode accidentally.
*/
function assertDevMode(checkName) {
	if (!ngDevMode) throw new RuntimeError(2958, `Unexpected invocation of the ${checkName} in the prod mode. Please make sure that the prod mode is enabled for production builds.`);
}
/**
* Observer that detects whether an image with `NgOptimizedImage`
* is treated as a Largest Contentful Paint (LCP) element. If so,
* asserts that the image has the `priority` attribute.
*
* Note: this is a dev-mode only class and it does not appear in prod bundles,
* thus there is no `ngDevMode` use in the code.
*
* Based on https://web.dev/lcp/#measure-lcp-in-javascript.
*/
var LCPImageObserver = class LCPImageObserver {
	images = /* @__PURE__ */ new Map();
	window = inject(DOCUMENT).defaultView;
	observer = null;
	constructor() {
		assertDevMode("LCP checker");
		if (typeof PerformanceObserver !== "undefined") this.observer = this.initPerformanceObserver();
	}
	/**
	* Inits PerformanceObserver and subscribes to LCP events.
	* Based on https://web.dev/lcp/#measure-lcp-in-javascript
	*/
	initPerformanceObserver() {
		const observer = new PerformanceObserver((entryList) => {
			const entries = entryList.getEntries();
			if (entries.length === 0) return;
			const imgSrc = entries[entries.length - 1].element?.src ?? "";
			if (imgSrc.startsWith("data:") || imgSrc.startsWith("blob:")) return;
			const img = this.images.get(imgSrc);
			if (!img) return;
			if (!img.priority && !img.alreadyWarnedPriority) {
				img.alreadyWarnedPriority = true;
				logMissingPriorityError(imgSrc);
			}
			if (img.modified && !img.alreadyWarnedModified) {
				img.alreadyWarnedModified = true;
				logModifiedWarning(imgSrc);
			}
		});
		observer.observe({
			type: "largest-contentful-paint",
			buffered: true
		});
		return observer;
	}
	registerImage(rewrittenSrc, originalNgSrc, isPriority) {
		if (!this.observer) return;
		const newObservedImageState = {
			priority: isPriority,
			modified: false,
			alreadyWarnedModified: false,
			alreadyWarnedPriority: false
		};
		this.images.set(getUrl(rewrittenSrc, this.window).href, newObservedImageState);
	}
	unregisterImage(rewrittenSrc) {
		if (!this.observer) return;
		this.images.delete(getUrl(rewrittenSrc, this.window).href);
	}
	updateImage(originalSrc, newSrc) {
		if (!this.observer) return;
		const originalUrl = getUrl(originalSrc, this.window).href;
		const img = this.images.get(originalUrl);
		if (img) {
			img.modified = true;
			this.images.set(getUrl(newSrc, this.window).href, img);
			this.images.delete(originalUrl);
		}
	}
	ngOnDestroy() {
		if (!this.observer) return;
		this.observer.disconnect();
		this.images.clear();
	}
	static ɵfac = function LCPImageObserver_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || LCPImageObserver)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: LCPImageObserver,
		factory: LCPImageObserver.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LCPImageObserver, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
function logMissingPriorityError(ngSrc) {
	const directiveDetails = imgDirectiveDetails(ngSrc);
	console.error(formatRuntimeError(2955, `${directiveDetails} this image is the Largest Contentful Paint (LCP) element but was not marked "priority". This image should be marked "priority" in order to prioritize its loading. To fix this, add the "priority" attribute.`));
}
function logModifiedWarning(ngSrc) {
	const directiveDetails = imgDirectiveDetails(ngSrc);
	console.warn(formatRuntimeError(2964, `${directiveDetails} this image is the Largest Contentful Paint (LCP) element and has had its "ngSrc" attribute modified. This can cause slower loading performance. It is recommended not to modify the "ngSrc" property on any image which could be the LCP element.`));
}
var INTERNAL_PRECONNECT_CHECK_BLOCKLIST = /* @__PURE__ */ new Set([
	"localhost",
	"127.0.0.1",
	"0.0.0.0",
	"[::1]"
]);
/**
* Injection token to configure which origins should be excluded
* from the preconnect checks. It can either be a single string or an array of strings
* to represent a group of origins, for example:
*
* ```ts
*  {provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://your-domain.com'}
* ```
*
* or:
*
* ```ts
*  {provide: PRECONNECT_CHECK_BLOCKLIST,
*   useValue: ['https://your-domain-1.com', 'https://your-domain-2.com']}
* ```
*
* @publicApi
*/
var PRECONNECT_CHECK_BLOCKLIST = new InjectionToken(ngDevMode ? "PRECONNECT_CHECK_BLOCKLIST" : "");
/**
* Contains the logic to detect whether an image, marked with the "priority" attribute
* has a corresponding `<link rel="preconnect">` tag in the `document.head`.
*
* Note: this is a dev-mode only class, which should not appear in prod bundles,
* thus there is no `ngDevMode` use in the code.
*/
var PreconnectLinkChecker = class PreconnectLinkChecker {
	document = inject(DOCUMENT);
	/**
	* Set of <link rel="preconnect"> tags found on this page.
	* The `null` value indicates that there was no DOM query operation performed.
	*/
	preconnectLinks = null;
	alreadySeen = /* @__PURE__ */ new Set();
	window = this.document.defaultView;
	blocklist = new Set(INTERNAL_PRECONNECT_CHECK_BLOCKLIST);
	constructor() {
		assertDevMode("preconnect link checker");
		const blocklist = inject(PRECONNECT_CHECK_BLOCKLIST, { optional: true });
		if (blocklist) this.populateBlocklist(blocklist);
	}
	populateBlocklist(origins) {
		if (Array.isArray(origins)) deepForEach(origins, (origin) => {
			this.blocklist.add(extractHostname(origin));
		});
		else this.blocklist.add(extractHostname(origins));
	}
	/**
	* Checks that a preconnect resource hint exists in the head for the
	* given src.
	*
	* @param rewrittenSrc src formatted with loader
	* @param originalNgSrc ngSrc value
	*/
	assertPreconnect(rewrittenSrc, originalNgSrc) {
		const imgUrl = getUrl(rewrittenSrc, this.window);
		if (this.blocklist.has(imgUrl.hostname) || this.alreadySeen.has(imgUrl.origin)) return;
		this.alreadySeen.add(imgUrl.origin);
		this.preconnectLinks ??= this.queryPreconnectLinks();
		if (!this.preconnectLinks.has(imgUrl.origin)) console.warn(formatRuntimeError(2956, `${imgDirectiveDetails(originalNgSrc)} there is no preconnect tag present for this image. Preconnecting to the origin(s) that serve priority images ensures that these images are delivered as soon as possible. To fix this, please add the following element into the <head> of the document:\n  <link rel="preconnect" href="${imgUrl.origin}">`));
	}
	queryPreconnectLinks() {
		const preconnectUrls = /* @__PURE__ */ new Set();
		const links = this.document.querySelectorAll("link[rel=preconnect]");
		for (const link of links) {
			const url = getUrl(link.href, this.window);
			preconnectUrls.add(url.origin);
		}
		return preconnectUrls;
	}
	ngOnDestroy() {
		this.preconnectLinks?.clear();
		this.alreadySeen.clear();
	}
	static ɵfac = function PreconnectLinkChecker_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PreconnectLinkChecker)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: PreconnectLinkChecker,
		factory: PreconnectLinkChecker.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreconnectLinkChecker, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
/**
* Invokes a callback for each element in the array. Also invokes a callback
* recursively for each nested array.
*/
function deepForEach(input, fn) {
	for (let value of input) Array.isArray(value) ? deepForEach(value, fn) : fn(value);
}
/**
* In SSR scenarios, a preload `<link>` element is generated for priority images.
* Having a large number of preload tags may negatively affect the performance,
* so we warn developers (by throwing an error) if the number of preloaded images
* is above a certain threshold. This const specifies this threshold.
*/
var DEFAULT_PRELOADED_IMAGES_LIMIT = 5;
/**
* Helps to keep track of priority images that already have a corresponding
* preload tag (to avoid generating multiple preload tags with the same URL).
*
* This Set tracks the original src passed into the `ngSrc` input not the src after it has been
* run through the specified `IMAGE_LOADER`.
*/
var PRELOADED_IMAGES = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "NG_OPTIMIZED_PRELOADED_IMAGES" : "", {
	providedIn: "root",
	factory: () => /* @__PURE__ */ new Set()
});
/**
* @description Contains the logic needed to track and add preload link tags to the `<head>` tag. It
* will also track what images have already had preload link tags added so as to not duplicate link
* tags.
*
* In dev mode this service will validate that the number of preloaded images does not exceed the
* configured default preloaded images limit: {@link DEFAULT_PRELOADED_IMAGES_LIMIT}.
*/
var PreloadLinkCreator = class PreloadLinkCreator {
	preloadedImages = inject(PRELOADED_IMAGES);
	document = inject(DOCUMENT);
	errorShown = false;
	/**
	* @description Add a preload `<link>` to the `<head>` of the `index.html` that is served from the
	* server while using Angular Universal and SSR to kick off image loads for high priority images.
	*
	* The `sizes` (passed in from the user) and `srcset` (parsed and formatted from `ngSrcset`)
	* properties used to set the corresponding attributes, `imagesizes` and `imagesrcset`
	* respectively, on the preload `<link>` tag so that the correctly sized image is preloaded from
	* the CDN.
	*
	* {@link https://web.dev/preload-responsive-images/#imagesrcset-and-imagesizes}
	*
	* @param renderer The `Renderer2` passed in from the directive
	* @param src The original src of the image that is set on the `ngSrc` input.
	* @param srcset The parsed and formatted srcset created from the `ngSrcset` input
	* @param sizes The value of the `sizes` attribute passed in to the `<img>` tag
	*/
	createPreloadLinkTag(renderer, src, srcset, sizes) {
		if (ngDevMode && !this.errorShown && this.preloadedImages.size >= DEFAULT_PRELOADED_IMAGES_LIMIT) {
			this.errorShown = true;
			console.warn(formatRuntimeError(2961, `The \`NgOptimizedImage\` directive has detected that more than ${DEFAULT_PRELOADED_IMAGES_LIMIT} images were marked as priority. This might negatively affect an overall performance of the page. To fix this, remove the "priority" attribute from images with less priority.`));
		}
		if (this.preloadedImages.has(src)) return;
		this.preloadedImages.add(src);
		const preload = renderer.createElement("link");
		renderer.setAttribute(preload, "as", "image");
		renderer.setAttribute(preload, "href", src);
		renderer.setAttribute(preload, "rel", "preload");
		renderer.setAttribute(preload, "fetchpriority", "high");
		if (sizes) renderer.setAttribute(preload, "imageSizes", sizes);
		if (srcset) renderer.setAttribute(preload, "imageSrcset", srcset);
		renderer.appendChild(this.document.head, preload);
	}
	static ɵfac = function PreloadLinkCreator_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PreloadLinkCreator)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: PreloadLinkCreator,
		factory: PreloadLinkCreator.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadLinkCreator, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
/**
* When a Base64-encoded image is passed as an input to the `NgOptimizedImage` directive,
* an error is thrown. The image content (as a string) might be very long, thus making
* it hard to read an error message if the entire string is included. This const defines
* the number of characters that should be included into the error message. The rest
* of the content is truncated.
*/
var BASE64_IMG_MAX_LENGTH_IN_ERROR = 50;
/**
* RegExpr to determine whether a src in a srcset is using width descriptors.
* Should match something like: "100w, 200w".
*/
var VALID_WIDTH_DESCRIPTOR_SRCSET = /^((\s*\d+w\s*(,|$)){1,})$/;
/**
* RegExpr to determine whether a src in a srcset is using density descriptors.
* Should match something like: "1x, 2x, 50x". Also supports decimals like "1.5x, 1.50x".
*/
var VALID_DENSITY_DESCRIPTOR_SRCSET = /^((\s*\d+(\.\d+)?x\s*(,|$)){1,})$/;
/**
* Srcset values with a density descriptor higher than this value will actively
* throw an error. Such densities are not permitted as they cause image sizes
* to be unreasonably large and slow down LCP.
*/
var ABSOLUTE_SRCSET_DENSITY_CAP = 3;
/**
* Used only in error message text to communicate best practices, as we will
* only throw based on the slightly more conservative ABSOLUTE_SRCSET_DENSITY_CAP.
*/
var RECOMMENDED_SRCSET_DENSITY_CAP = 2;
/**
* Used in generating automatic density-based srcsets
*/
var DENSITY_SRCSET_MULTIPLIERS = [1, 2];
/**
* Used to determine which breakpoints to use on full-width images
*/
var VIEWPORT_BREAKPOINT_CUTOFF = 640;
/**
* Used to determine whether two aspect ratios are similar in value.
*/
var ASPECT_RATIO_TOLERANCE = .1;
/**
* Used to determine whether the image has been requested at an overly
* large size compared to the actual rendered image size (after taking
* into account a typical device pixel ratio). In pixels.
*/
var OVERSIZED_IMAGE_TOLERANCE = 1e3;
/**
* Used to limit automatic srcset generation of very large sources for
* fixed-size images. In pixels.
*/
var FIXED_SRCSET_WIDTH_LIMIT = 1920;
var FIXED_SRCSET_HEIGHT_LIMIT = 1080;
/**
* Placeholder dimension (height or width) limit in pixels. Angular produces a warning
* when this limit is crossed.
*/
var PLACEHOLDER_DIMENSION_LIMIT = 1e3;
/**
* Used to warn or error when the user provides an overly large dataURL for the placeholder
* attribute.
* Character count of Base64 images is 1 character per byte, and base64 encoding is approximately
* 33% larger than base images, so 4000 characters is around 3KB on disk and 10000 characters is
* around 7.7KB. Experimentally, 4000 characters is about 20x20px in PNG or medium-quality JPEG
* format, and 10,000 is around 50x50px, but there's quite a bit of variation depending on how the
* image is saved.
*/
var DATA_URL_WARN_LIMIT = 4e3;
var DATA_URL_ERROR_LIMIT = 1e4;
/** Info about built-in loaders we can test for. */
var BUILT_IN_LOADERS = [
	imgixLoaderInfo,
	imageKitLoaderInfo,
	cloudinaryLoaderInfo,
	netlifyLoaderInfo
];
/**
* Threshold for the PRIORITY_TRUE_COUNT
*/
var PRIORITY_COUNT_THRESHOLD = 10;
/**
* This count is used to log a devMode warning
* when the count of directive instances with priority=true
* exceeds the threshold PRIORITY_COUNT_THRESHOLD
*/
var IMGS_WITH_PRIORITY_ATTR_COUNT = 0;
/**
* Directive that improves image loading performance by enforcing best practices.
*
* `NgOptimizedImage` ensures that the loading of the Largest Contentful Paint (LCP) image is
* prioritized by:
* - Automatically setting the `fetchpriority` attribute on the `<img>` tag
* - Lazy loading non-priority images by default
* - Automatically generating a preconnect link tag in the document head
*
* In addition, the directive:
* - Generates appropriate asset URLs if a corresponding `ImageLoader` function is provided
* - Automatically generates a srcset
* - Requires that `width` and `height` are set
* - Warns if `width` or `height` have been set incorrectly
* - Warns if the image will be visually distorted when rendered
*
* @usageNotes
* The `NgOptimizedImage` directive is marked as [standalone](guide/components/importing) and can
* be imported directly.
*
* Follow the steps below to enable and use the directive:
* 1. Import it into the necessary NgModule or a standalone Component.
* 2. Optionally provide an `ImageLoader` if you use an image hosting service.
* 3. Update the necessary `<img>` tags in templates and replace `src` attributes with `ngSrc`.
* Using a `ngSrc` allows the directive to control when the `src` gets set, which triggers an image
* download.
*
* Step 1: import the `NgOptimizedImage` directive.
*
* ```ts
* import { NgOptimizedImage } from '@angular/common';
*
* // Include it into the necessary NgModule
* @NgModule({
*   imports: [NgOptimizedImage],
* })
* class AppModule {}
*
* // ... or a standalone Component
* @Component({
*   imports: [NgOptimizedImage],
* })
* class MyStandaloneComponent {}
* ```
*
* Step 2: configure a loader.
*
* To use the **default loader**: no additional code changes are necessary. The URL returned by the
* generic loader will always match the value of "src". In other words, this loader applies no
* transformations to the resource URL and the value of the `ngSrc` attribute will be used as is.
*
* To use an existing loader for a **third-party image service**: add the provider factory for your
* chosen service to the `providers` array. In the example below, the Imgix loader is used:
*
* ```ts
* import {provideImgixLoader} from '@angular/common';
*
* // Call the function and add the result to the `providers` array:
* providers: [
*   provideImgixLoader("https://my.base.url/"),
* ],
* ```
*
* The `NgOptimizedImage` directive provides the following functions:
* - `provideCloudflareLoader`
* - `provideCloudinaryLoader`
* - `provideImageKitLoader`
* - `provideImgixLoader`
*
* If you use a different image provider, you can create a custom loader function as described
* below.
*
* To use a **custom loader**: provide your loader function as a value for the `IMAGE_LOADER` DI
* token.
*
* ```ts
* import {IMAGE_LOADER, ImageLoaderConfig} from '@angular/common';
*
* // Configure the loader using the `IMAGE_LOADER` token.
* providers: [
*   {
*      provide: IMAGE_LOADER,
*      useValue: (config: ImageLoaderConfig) => {
*        return `https://example.com/${config.src}-${config.width}.jpg`;
*      }
*   },
* ],
* ```
*
* Step 3: update `<img>` tags in templates to use `ngSrc` instead of `src`.
*
* ```html
* <img ngSrc="logo.png" width="200" height="100">
* ```
*
* @publicApi
* @see [Image Optimization Guide](guide/image-optimization)
*/
var NgOptimizedImage = class NgOptimizedImage {
	imageLoader = inject(IMAGE_LOADER);
	config = processConfig(inject(IMAGE_CONFIG));
	renderer = inject(Renderer2);
	imgElement = inject(ElementRef).nativeElement;
	injector = inject(Injector);
	destroyRef = inject(DestroyRef);
	lcpObserver;
	/**
	* Calculate the rewritten `src` once and store it.
	* This is needed to avoid repetitive calculations and make sure the directive cleanup in the
	* `ngOnDestroy` does not rely on the `IMAGE_LOADER` logic (which in turn can rely on some other
	* instance that might be already destroyed).
	*/
	_renderedSrc = null;
	/**
	* Name of the source image.
	* Image name will be processed by the image loader and the final URL will be applied as the `src`
	* property of the image.
	*/
	ngSrc;
	/**
	* A comma separated list of width or density descriptors.
	* The image name will be taken from `ngSrc` and combined with the list of width or density
	* descriptors to generate the final `srcset` property of the image.
	*
	* Example:
	* ```html
	* <img ngSrc="hello.jpg" ngSrcset="100w, 200w" />  =>
	* <img src="path/hello.jpg" srcset="path/hello.jpg?w=100 100w, path/hello.jpg?w=200 200w" />
	* ```
	*/
	ngSrcset;
	/**
	* The base `sizes` attribute passed through to the `<img>` element.
	* Providing sizes causes the image to create an automatic responsive srcset.
	*/
	sizes;
	/**
	* For responsive images: the intrinsic width of the image in pixels.
	* For fixed size images: the desired rendered width of the image in pixels.
	*/
	width;
	/**
	* For responsive images: the intrinsic height of the image in pixels.
	* For fixed size images: the desired rendered height of the image in pixels.
	*/
	height;
	/**
	* The desired decoding behavior for the image. Defaults to `auto`
	* if not explicitly set, matching native browser behavior.
	*
	* Use `async` to decode the image off the main thread (non-blocking),
	* `sync` for immediate decoding (blocking), or `auto` to let the
	* browser decide the optimal strategy.
	*
	* [Spec](https://html.spec.whatwg.org/multipage/images.html#image-decoding-hint)
	*/
	decoding;
	/**
	* The desired loading behavior (lazy, eager, or auto). Defaults to `lazy`,
	* which is recommended for most images.
	*
	* Warning: Setting images as loading="eager" or loading="auto" marks them
	* as non-priority images and can hurt loading performance. For images which
	* may be the LCP element, use the `priority` attribute instead of `loading`.
	*/
	loading;
	/**
	* Indicates whether this image should have a high priority.
	*/
	priority = false;
	/**
	* Data to pass through to custom loaders.
	*/
	loaderParams;
	/**
	* Disables automatic srcset generation for this image.
	*/
	disableOptimizedSrcset = false;
	/**
	* Sets the image to "fill mode", which eliminates the height/width requirement and adds
	* styles such that the image fills its containing element.
	*/
	fill = false;
	/**
	* A URL or data URL for an image to be used as a placeholder while this image loads.
	*/
	placeholder;
	/**
	* Configuration object for placeholder settings. Options:
	*   * blur: Setting this to false disables the automatic CSS blur.
	*/
	placeholderConfig;
	/**
	* Value of the `src` attribute if set on the host `<img>` element.
	* This input is exclusively read to assert that `src` is not set in conflict
	* with `ngSrc` and that images don't start to load until a lazy loading strategy is set.
	* @internal
	*/
	src;
	/**
	* Value of the `srcset` attribute if set on the host `<img>` element.
	* This input is exclusively read to assert that `srcset` is not set in conflict
	* with `ngSrcset` and that images don't start to load until a lazy loading strategy is set.
	* @internal
	*/
	srcset;
	constructor() {
		if (ngDevMode) {
			this.lcpObserver = this.injector.get(LCPImageObserver);
			this.destroyRef.onDestroy(() => {
				if (!this.priority && this._renderedSrc !== null) this.lcpObserver.unregisterImage(this._renderedSrc);
			});
		}
	}
	/** @docs-private */
	ngOnInit() {
		performanceMarkFeature("NgOptimizedImage");
		if (ngDevMode) {
			const ngZone = this.injector.get(NgZone);
			assertNonEmptyInput(this, "ngSrc", this.ngSrc);
			assertValidNgSrcset(this, this.ngSrcset);
			assertNoConflictingSrc(this);
			if (this.ngSrcset) assertNoConflictingSrcset(this);
			assertNotBase64Image(this);
			assertNotBlobUrl(this);
			if (this.fill) {
				assertEmptyWidthAndHeight(this);
				ngZone.runOutsideAngular(() => assertNonZeroRenderedHeight(this, this.imgElement, this.renderer, this.destroyRef));
			} else {
				assertNonEmptyWidthAndHeight(this);
				if (this.height !== void 0) assertGreaterThanZero(this, this.height, "height");
				if (this.width !== void 0) assertGreaterThanZero(this, this.width, "width");
				ngZone.runOutsideAngular(() => assertNoImageDistortion(this, this.imgElement, this.renderer, this.destroyRef));
			}
			assertValidLoadingInput(this);
			assertValidDecodingInput(this);
			if (!this.ngSrcset) assertNoComplexSizes(this);
			assertValidPlaceholder(this, this.imageLoader);
			assertNotMissingBuiltInLoader(this.ngSrc, this.imageLoader);
			assertNoNgSrcsetWithoutLoader(this, this.imageLoader);
			assertNoLoaderParamsWithoutLoader(this, this.imageLoader);
			ngZone.runOutsideAngular(() => {
				this.lcpObserver.registerImage(this.getRewrittenSrc(), this.ngSrc, this.priority);
			});
			if (this.priority) {
				this.injector.get(PreconnectLinkChecker).assertPreconnect(this.getRewrittenSrc(), this.ngSrc);
				assetPriorityCountBelowThreshold(this.injector.get(ApplicationRef));
			}
		}
		if (this.placeholder) this.removePlaceholderOnLoad(this.imgElement);
		this.setHostAttributes();
	}
	setHostAttributes() {
		if (this.fill) this.sizes ||= "100vw";
		else {
			this.setHostAttribute("width", this.width.toString());
			this.setHostAttribute("height", this.height.toString());
		}
		this.setHostAttribute("loading", this.getLoadingBehavior());
		this.setHostAttribute("fetchpriority", this.getFetchPriority());
		this.setHostAttribute("decoding", this.getDecoding());
		this.setHostAttribute("ng-img", "true");
		this.updateSrcAndSrcset();
		if (this.sizes) {
			if (this.getLoadingBehavior() === "lazy") this.setHostAttribute("sizes", "auto, " + this.sizes);
			else this.setHostAttribute("sizes", this.sizes);
		} else if (this.ngSrcset && VALID_WIDTH_DESCRIPTOR_SRCSET.test(this.ngSrcset) && this.getLoadingBehavior() === "lazy") this.setHostAttribute("sizes", "auto, 100vw");
	}
	/** @docs-private */
	ngOnChanges(changes) {
		if (ngDevMode) assertNoPostInitInputChange(this, changes, [
			"ngSrcset",
			"width",
			"height",
			"priority",
			"fill",
			"loading",
			"sizes",
			"loaderParams",
			"disableOptimizedSrcset"
		]);
		if (changes["ngSrc"] && !changes["ngSrc"].isFirstChange()) {
			const oldSrc = this._renderedSrc;
			this.updateSrcAndSrcset(true);
			if (ngDevMode) {
				const newSrc = this._renderedSrc;
				if (oldSrc && newSrc && oldSrc !== newSrc) this.injector.get(NgZone).runOutsideAngular(() => {
					this.lcpObserver.updateImage(oldSrc, newSrc);
				});
			}
		}
		if (ngDevMode && changes["placeholder"]?.currentValue && true) assertPlaceholderDimensions(this, this.imgElement);
	}
	callImageLoader(configWithoutCustomParams) {
		let augmentedConfig = configWithoutCustomParams;
		if (this.loaderParams) augmentedConfig.loaderParams = this.loaderParams;
		return this.imageLoader(augmentedConfig);
	}
	getLoadingBehavior() {
		if (!this.priority && this.loading !== void 0) return this.loading;
		return this.priority ? "eager" : "lazy";
	}
	getFetchPriority() {
		return this.priority ? "high" : "auto";
	}
	getDecoding() {
		if (this.priority) return "sync";
		return this.decoding ?? "auto";
	}
	getRewrittenSrc() {
		if (!this._renderedSrc) {
			const imgConfig = { src: this.ngSrc };
			this._renderedSrc = this.callImageLoader(imgConfig);
		}
		return this._renderedSrc;
	}
	getRewrittenSrcset() {
		const widthSrcSet = VALID_WIDTH_DESCRIPTOR_SRCSET.test(this.ngSrcset);
		return this.ngSrcset.split(",").filter((src) => src !== "").map((srcStr) => {
			srcStr = srcStr.trim();
			const width = widthSrcSet ? parseFloat(srcStr) : parseFloat(srcStr) * this.width;
			return `${this.callImageLoader({
				src: this.ngSrc,
				width
			})} ${srcStr}`;
		}).join(", ");
	}
	getAutomaticSrcset() {
		if (this.sizes) return this.getResponsiveSrcset();
		else return this.getFixedSrcset();
	}
	getResponsiveSrcset() {
		const { breakpoints } = this.config;
		let filteredBreakpoints = breakpoints;
		if (this.sizes?.trim() === "100vw") filteredBreakpoints = breakpoints.filter((bp) => bp >= VIEWPORT_BREAKPOINT_CUTOFF);
		return filteredBreakpoints.map((bp) => `${this.callImageLoader({
			src: this.ngSrc,
			width: bp
		})} ${bp}w`).join(", ");
	}
	updateSrcAndSrcset(forceSrcRecalc = false) {
		if (forceSrcRecalc) this._renderedSrc = null;
		const rewrittenSrc = this.getRewrittenSrc();
		this.setHostAttribute("src", rewrittenSrc);
		let rewrittenSrcset = void 0;
		if (this.ngSrcset) rewrittenSrcset = this.getRewrittenSrcset();
		else if (this.shouldGenerateAutomaticSrcset()) rewrittenSrcset = this.getAutomaticSrcset();
		if (rewrittenSrcset) this.setHostAttribute("srcset", rewrittenSrcset);
		return rewrittenSrcset;
	}
	getFixedSrcset() {
		return DENSITY_SRCSET_MULTIPLIERS.map((multiplier) => `${this.callImageLoader({
			src: this.ngSrc,
			width: this.width * multiplier
		})} ${multiplier}x`).join(", ");
	}
	shouldGenerateAutomaticSrcset() {
		let oversizedImage = false;
		if (!this.sizes) oversizedImage = this.width > FIXED_SRCSET_WIDTH_LIMIT || this.height > FIXED_SRCSET_HEIGHT_LIMIT;
		return !this.disableOptimizedSrcset && !this.srcset && this.imageLoader !== noopImageLoader && !oversizedImage;
	}
	/**
	* Returns an image url formatted for use with the CSS background-image property. Expects one of:
	* * A base64 encoded image, which is wrapped and passed through.
	* * A boolean. If true, calls the image loader to generate a small placeholder url.
	*/
	generatePlaceholder(placeholderInput) {
		const { placeholderResolution } = this.config;
		if (placeholderInput === true) return `url("${escapeCssUrl(this.callImageLoader({
			src: this.ngSrc,
			width: placeholderResolution,
			isPlaceholder: true
		}))}")`;
		else if (typeof placeholderInput === "string") return `url("${escapeCssUrl(placeholderInput)}")`;
		return null;
	}
	/**
	* Determines if blur should be applied, based on an optional boolean
	* property `blur` within the optional configuration object `placeholderConfig`.
	*/
	shouldBlurPlaceholder(placeholderConfig) {
		if (!placeholderConfig || !placeholderConfig.hasOwnProperty("blur")) return true;
		return Boolean(placeholderConfig.blur);
	}
	removePlaceholderOnLoad(img) {
		const callback = () => {
			const changeDetectorRef = this.injector.get(ChangeDetectorRef);
			removeLoadListenerFn();
			removeErrorListenerFn();
			this.placeholder = false;
			changeDetectorRef.markForCheck();
		};
		const removeLoadListenerFn = this.renderer.listen(img, "load", callback);
		const removeErrorListenerFn = this.renderer.listen(img, "error", callback);
		this.destroyRef.onDestroy(() => {
			removeLoadListenerFn();
			removeErrorListenerFn();
		});
		callOnLoadIfImageIsLoaded(img, callback);
	}
	setHostAttribute(name, value) {
		this.renderer.setAttribute(this.imgElement, name, value);
	}
	static ɵfac = function NgOptimizedImage_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || NgOptimizedImage)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: NgOptimizedImage,
		selectors: [[
			"img",
			"ngSrc",
			""
		]],
		hostVars: 18,
		hostBindings: function NgOptimizedImage_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵstyleProp("position", ctx.fill ? "absolute" : null)("width", ctx.fill ? "100%" : null)("height", ctx.fill ? "100%" : null)("inset", ctx.fill ? "0" : null)("background-size", ctx.placeholder ? "cover" : null)("background-position", ctx.placeholder ? "50% 50%" : null)("background-repeat", ctx.placeholder ? "no-repeat" : null)("background-image", ctx.placeholder ? ctx.generatePlaceholder(ctx.placeholder) : null)("filter", ctx.placeholder && ctx.shouldBlurPlaceholder(ctx.placeholderConfig) ? "blur(15px)" : null);
		},
		inputs: {
			ngSrc: [
				2,
				"ngSrc",
				"ngSrc",
				unwrapSafeUrl
			],
			ngSrcset: "ngSrcset",
			sizes: "sizes",
			width: [
				2,
				"width",
				"width",
				numberAttribute
			],
			height: [
				2,
				"height",
				"height",
				numberAttribute
			],
			decoding: "decoding",
			loading: "loading",
			priority: [
				2,
				"priority",
				"priority",
				booleanAttribute
			],
			loaderParams: "loaderParams",
			disableOptimizedSrcset: [
				2,
				"disableOptimizedSrcset",
				"disableOptimizedSrcset",
				booleanAttribute
			],
			fill: [
				2,
				"fill",
				"fill",
				booleanAttribute
			],
			placeholder: [
				2,
				"placeholder",
				"placeholder",
				booleanOrUrlAttribute
			],
			placeholderConfig: "placeholderConfig",
			src: "src",
			srcset: "srcset"
		},
		features: [ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptimizedImage, [{
		type: Directive,
		args: [{
			selector: "img[ngSrc]",
			host: {
				"[style.position]": "fill ? \"absolute\" : null",
				"[style.width]": "fill ? \"100%\" : null",
				"[style.height]": "fill ? \"100%\" : null",
				"[style.inset]": "fill ? \"0\" : null",
				"[style.background-size]": "placeholder ? \"cover\" : null",
				"[style.background-position]": "placeholder ? \"50% 50%\" : null",
				"[style.background-repeat]": "placeholder ? \"no-repeat\" : null",
				"[style.background-image]": "placeholder ? generatePlaceholder(placeholder) : null",
				"[style.filter]": "placeholder && shouldBlurPlaceholder(placeholderConfig) ? \"blur(15px)\" : null"
			}
		}]
	}], () => [], {
		ngSrc: [{
			type: Input,
			args: [{
				required: true,
				transform: unwrapSafeUrl
			}]
		}],
		ngSrcset: [{ type: Input }],
		sizes: [{ type: Input }],
		width: [{
			type: Input,
			args: [{ transform: numberAttribute }]
		}],
		height: [{
			type: Input,
			args: [{ transform: numberAttribute }]
		}],
		decoding: [{ type: Input }],
		loading: [{ type: Input }],
		priority: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		loaderParams: [{ type: Input }],
		disableOptimizedSrcset: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		fill: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		placeholder: [{
			type: Input,
			args: [{ transform: booleanOrUrlAttribute }]
		}],
		placeholderConfig: [{ type: Input }],
		src: [{ type: Input }],
		srcset: [{ type: Input }]
	});
})();
/***** Helpers *****/
/**
* Sorts provided config breakpoints and uses defaults.
*/
function processConfig(config) {
	let sortedBreakpoints = {};
	if (config.breakpoints) sortedBreakpoints.breakpoints = config.breakpoints.sort((a, b) => a - b);
	return Object.assign({}, IMAGE_CONFIG_DEFAULTS, config, sortedBreakpoints);
}
/***** Assert functions *****/
/**
* Verifies that there is no `src` set on a host element.
*/
function assertNoConflictingSrc(dir) {
	if (dir.src) throw new RuntimeError(2950, `${imgDirectiveDetails(dir.ngSrc)} both \`src\` and \`ngSrc\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`src\` itself based on the value of \`ngSrc\`. To fix this, please remove the \`src\` attribute.`);
}
/**
* Verifies that there is no `srcset` set on a host element.
*/
function assertNoConflictingSrcset(dir) {
	if (dir.srcset) throw new RuntimeError(2951, `${imgDirectiveDetails(dir.ngSrc)} both \`srcset\` and \`ngSrcset\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`srcset\` itself based on the value of \`ngSrcset\`. To fix this, please remove the \`srcset\` attribute.`);
}
/**
* Verifies that the `ngSrc` is not a Base64-encoded image.
*/
function assertNotBase64Image(dir) {
	let ngSrc = dir.ngSrc.trim();
	if (ngSrc.startsWith("data:")) {
		if (ngSrc.length > BASE64_IMG_MAX_LENGTH_IN_ERROR) ngSrc = ngSrc.substring(0, BASE64_IMG_MAX_LENGTH_IN_ERROR) + "...";
		throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`ngSrc\` is a Base64-encoded string (${ngSrc}). NgOptimizedImage does not support Base64-encoded strings. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a standard \`src\` attribute instead.`);
	}
}
/**
* Verifies that the 'sizes' only includes responsive values.
*/
function assertNoComplexSizes(dir) {
	if (dir.sizes?.match(/((\)|,)\s|^)\d+px/)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`sizes\` was set to a string including pixel values. For automatic \`srcset\` generation, \`sizes\` must only include responsive values, such as \`sizes="50vw"\` or \`sizes="(min-width: 768px) 50vw, 100vw"\`. To fix this, modify the \`sizes\` attribute, or provide your own \`ngSrcset\` value directly.`);
}
function assertValidPlaceholder(dir, imageLoader) {
	assertNoPlaceholderConfigWithoutPlaceholder(dir);
	assertNoRelativePlaceholderWithoutLoader(dir, imageLoader);
	assertNoOversizedDataUrl(dir);
}
/**
* Verifies that placeholderConfig isn't being used without placeholder
*/
function assertNoPlaceholderConfigWithoutPlaceholder(dir) {
	if (dir.placeholderConfig && !dir.placeholder) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`placeholderConfig\` options were provided for an image that does not use the \`placeholder\` attribute, and will have no effect.`);
}
/**
* Warns if a relative URL placeholder is specified, but no loader is present to provide the small
* image.
*/
function assertNoRelativePlaceholderWithoutLoader(dir, imageLoader) {
	if (dir.placeholder === true && imageLoader === noopImageLoader) throw new RuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to true but no image loader is configured (i.e. the default one is being used), which would result in the same image being used for the primary image and its placeholder. To fix this, provide a loader or remove the \`placeholder\` attribute from the image.`);
}
/**
* Warns or throws an error if an oversized dataURL placeholder is provided.
*/
function assertNoOversizedDataUrl(dir) {
	if (dir.placeholder && typeof dir.placeholder === "string" && dir.placeholder.startsWith("data:")) {
		if (dir.placeholder.length > DATA_URL_ERROR_LIMIT) throw new RuntimeError(2965, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer than ${DATA_URL_ERROR_LIMIT} characters. This is strongly discouraged, as large inline placeholders directly increase the bundle size of Angular and hurt page load performance. To fix this, generate a smaller data URL placeholder.`);
		if (dir.placeholder.length > DATA_URL_WARN_LIMIT) console.warn(formatRuntimeError(2965, `${imgDirectiveDetails(dir.ngSrc)} the \`placeholder\` attribute is set to a data URL which is longer than ${DATA_URL_WARN_LIMIT} characters. This is discouraged, as large inline placeholders directly increase the bundle size of Angular and hurt page load performance. For better loading performance, generate a smaller data URL placeholder.`));
	}
}
/**
* Verifies that the `ngSrc` is not a Blob URL.
*/
function assertNotBlobUrl(dir) {
	const ngSrc = dir.ngSrc.trim();
	if (ngSrc.startsWith("blob:")) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrc\` was set to a blob URL (${ngSrc}). Blob URLs are not supported by the NgOptimizedImage directive. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a regular \`src\` attribute instead.`);
}
/**
* Verifies that the input is set to a non-empty string.
*/
function assertNonEmptyInput(dir, name, value) {
	const isString = typeof value === "string";
	const isEmptyString = isString && value.trim() === "";
	if (!isString || isEmptyString) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`${name}\` has an invalid value (\`${value}\`). To fix this, change the value to a non-empty string.`);
}
/**
* Verifies that the `ngSrcset` is in a valid format, e.g. "100w, 200w" or "1x, 2x".
*/
function assertValidNgSrcset(dir, value) {
	if (value == null) return;
	assertNonEmptyInput(dir, "ngSrcset", value);
	const stringVal = value;
	const isValidWidthDescriptor = VALID_WIDTH_DESCRIPTOR_SRCSET.test(stringVal);
	const isValidDensityDescriptor = VALID_DENSITY_DESCRIPTOR_SRCSET.test(stringVal);
	if (isValidDensityDescriptor) assertUnderDensityCap(dir, stringVal);
	if (!(isValidWidthDescriptor || isValidDensityDescriptor)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrcset\` has an invalid value (\`${value}\`). To fix this, supply \`ngSrcset\` using a comma-separated list of one or more width descriptors (e.g. "100w, 200w") or density descriptors (e.g. "1x, 2x").`);
}
function assertUnderDensityCap(dir, value) {
	if (!value.split(",").every((num) => num === "" || parseFloat(num) <= ABSOLUTE_SRCSET_DENSITY_CAP)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` contains an unsupported image density:\`${value}\`. NgOptimizedImage generally recommends a max image density of ${RECOMMENDED_SRCSET_DENSITY_CAP}x but supports image densities up to ${ABSOLUTE_SRCSET_DENSITY_CAP}x. The human eye cannot distinguish between image densities greater than ${RECOMMENDED_SRCSET_DENSITY_CAP}x - which makes them unnecessary for most use cases. Images that will be pinch-zoomed are typically the primary use case for ${ABSOLUTE_SRCSET_DENSITY_CAP}x images. Please remove the high density descriptor and try again.`);
}
/**
* Creates a `RuntimeError` instance to represent a situation when an input is set after
* the directive has initialized.
*/
function postInitInputChangeError(dir, inputName) {
	let reason;
	if (inputName === "width" || inputName === "height") reason = `Changing \`${inputName}\` may result in different attribute value applied to the underlying image element and cause layout shifts on a page.`;
	else reason = `Changing the \`${inputName}\` would have no effect on the underlying image element, because the resource loading has already occurred.`;
	return new RuntimeError(2953, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` was updated after initialization. The NgOptimizedImage directive will not react to this input change. ${reason} To fix this, either switch \`${inputName}\` to a static value or wrap the image element in an @if that is gated on the necessary value.`);
}
/**
* Verify that none of the listed inputs has changed.
*/
function assertNoPostInitInputChange(dir, changes, inputs) {
	inputs.forEach((input) => {
		if (changes.hasOwnProperty(input) && !changes[input].isFirstChange()) {
			if (input === "ngSrc") dir = { ngSrc: changes[input].previousValue };
			throw postInitInputChangeError(dir, input);
		}
	});
}
/**
* Verifies that a specified input is a number greater than 0.
*/
function assertGreaterThanZero(dir, inputValue, inputName) {
	const validNumber = typeof inputValue === "number" && inputValue > 0;
	const validString = typeof inputValue === "string" && /^\d+$/.test(inputValue.trim()) && parseInt(inputValue) > 0;
	if (!validNumber && !validString) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` has an invalid value. To fix this, provide \`${inputName}\` as a number greater than 0.`);
}
/**
* Verifies that the rendered image is not visually distorted. Effectively this is checking:
* - Whether the "width" and "height" attributes reflect the actual dimensions of the image.
* - Whether image styling is "correct" (see below for a longer explanation).
*/
function assertNoImageDistortion(dir, img, renderer, destroyRef) {
	const callback = () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
		const computedStyle = window.getComputedStyle(img);
		let renderedWidth = parseFloat(computedStyle.getPropertyValue("width"));
		let renderedHeight = parseFloat(computedStyle.getPropertyValue("height"));
		if (computedStyle.getPropertyValue("box-sizing") === "border-box") {
			const paddingTop = computedStyle.getPropertyValue("padding-top");
			const paddingRight = computedStyle.getPropertyValue("padding-right");
			const paddingBottom = computedStyle.getPropertyValue("padding-bottom");
			const paddingLeft = computedStyle.getPropertyValue("padding-left");
			renderedWidth -= parseFloat(paddingRight) + parseFloat(paddingLeft);
			renderedHeight -= parseFloat(paddingTop) + parseFloat(paddingBottom);
		}
		const renderedAspectRatio = renderedWidth / renderedHeight;
		const nonZeroRenderedDimensions = renderedWidth !== 0 && renderedHeight !== 0;
		const intrinsicWidth = img.naturalWidth;
		const intrinsicHeight = img.naturalHeight;
		const intrinsicAspectRatio = intrinsicWidth / intrinsicHeight;
		const suppliedWidth = dir.width;
		const suppliedHeight = dir.height;
		const suppliedAspectRatio = suppliedWidth / suppliedHeight;
		const inaccurateDimensions = Math.abs(suppliedAspectRatio - intrinsicAspectRatio) > ASPECT_RATIO_TOLERANCE;
		const stylingDistortion = nonZeroRenderedDimensions && Math.abs(intrinsicAspectRatio - renderedAspectRatio) > ASPECT_RATIO_TOLERANCE;
		if (inaccurateDimensions) console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the image does not match the aspect ratio indicated by the width and height attributes. \nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h (aspect-ratio: ${round(intrinsicAspectRatio)}). \nSupplied width and height attributes: ${suppliedWidth}w x ${suppliedHeight}h (aspect-ratio: ${round(suppliedAspectRatio)}). \nTo fix this, update the width and height attributes.`));
		else if (stylingDistortion) console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the rendered image does not match the image's intrinsic aspect ratio. \nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h (aspect-ratio: ${round(intrinsicAspectRatio)}). \nRendered image size: ${renderedWidth}w x ${renderedHeight}h (aspect-ratio: ${round(renderedAspectRatio)}). \nThis issue can occur if "width" and "height" attributes are added to an image without updating the corresponding image styling. To fix this, adjust image styling. In most cases, adding "height: auto" or "width: auto" to the image styling will fix this issue.`));
		else if (!dir.ngSrcset && nonZeroRenderedDimensions) {
			const recommendedWidth = RECOMMENDED_SRCSET_DENSITY_CAP * renderedWidth;
			const recommendedHeight = RECOMMENDED_SRCSET_DENSITY_CAP * renderedHeight;
			const oversizedWidth = intrinsicWidth - recommendedWidth >= OVERSIZED_IMAGE_TOLERANCE;
			const oversizedHeight = intrinsicHeight - recommendedHeight >= OVERSIZED_IMAGE_TOLERANCE;
			if (oversizedWidth || oversizedHeight) console.warn(formatRuntimeError(2960, `${imgDirectiveDetails(dir.ngSrc)} the intrinsic image is significantly larger than necessary. \nRendered image size: ${renderedWidth}w x ${renderedHeight}h. \nIntrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h. \nRecommended intrinsic image size: ${recommendedWidth}w x ${recommendedHeight}h. \nNote: Recommended intrinsic image size is calculated assuming a maximum DPR of ${RECOMMENDED_SRCSET_DENSITY_CAP}. To improve loading time, resize the image or consider using the "ngSrcset" and "sizes" attributes.`));
		}
	};
	const removeLoadListenerFn = renderer.listen(img, "load", callback);
	const removeErrorListenerFn = renderer.listen(img, "error", () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	destroyRef.onDestroy(() => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	callOnLoadIfImageIsLoaded(img, callback);
}
/**
* Verifies that a specified input is set.
*/
function assertNonEmptyWidthAndHeight(dir) {
	let missingAttributes = [];
	if (dir.width === void 0) missingAttributes.push("width");
	if (dir.height === void 0) missingAttributes.push("height");
	if (missingAttributes.length > 0) throw new RuntimeError(2954, `${imgDirectiveDetails(dir.ngSrc)} these required attributes are missing: ${missingAttributes.map((attr) => `"${attr}"`).join(", ")}. Including "width" and "height" attributes will prevent image-related layout shifts. To fix this, include "width" and "height" attributes on the image tag or turn on "fill" mode with the \`fill\` attribute.`);
}
/**
* Verifies that width and height are not set. Used in fill mode, where those attributes don't make
* sense.
*/
function assertEmptyWidthAndHeight(dir) {
	if (dir.width || dir.height) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the attributes \`height\` and/or \`width\` are present along with the \`fill\` attribute. Because \`fill\` mode causes an image to fill its containing element, the size attributes have no effect and should be removed.`);
}
/**
* Verifies that the rendered image has a nonzero height. If the image is in fill mode, provides
* guidance that this can be caused by the containing element's CSS position property.
*/
function assertNonZeroRenderedHeight(dir, img, renderer, destroyRef) {
	const callback = () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
		const renderedHeight = img.clientHeight;
		if (dir.fill && renderedHeight === 0) console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the height of the fill-mode image is zero. This is likely because the containing element does not have the CSS 'position' property set to one of the following: "relative", "fixed", or "absolute". To fix this problem, make sure the container element has the CSS 'position' property defined and the height of the element is not zero.`));
	};
	const removeLoadListenerFn = renderer.listen(img, "load", callback);
	const removeErrorListenerFn = renderer.listen(img, "error", () => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	destroyRef.onDestroy(() => {
		removeLoadListenerFn();
		removeErrorListenerFn();
	});
	callOnLoadIfImageIsLoaded(img, callback);
}
/**
* Verifies that the `loading` attribute is set to a valid input &
* is not used on priority images.
*/
function assertValidLoadingInput(dir) {
	if (dir.loading && dir.priority) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute was used on an image that was marked "priority". Setting \`loading\` on priority images is not allowed because these images will always be eagerly loaded. To fix this, remove the “loading” attribute from the priority image.`);
	if (typeof dir.loading === "string" && ![
		"auto",
		"eager",
		"lazy"
	].includes(dir.loading)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute has an invalid value (\`${dir.loading}\`). To fix this, provide a valid value ("lazy", "eager", or "auto").`);
}
/**
* Verifies that the `decoding` attribute is set to a valid input.
*/
function assertValidDecodingInput(dir) {
	if (typeof dir.decoding === "string" && ![
		"sync",
		"async",
		"auto"
	].includes(dir.decoding)) throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`decoding\` attribute has an invalid value (\`${dir.decoding}\`). To fix this, provide a valid value ("sync", "async", or "auto").`);
}
/**
* Warns if NOT using a loader (falling back to the generic loader) and
* the image appears to be hosted on one of the image CDNs for which
* we do have a built-in image loader. Suggests switching to the
* built-in loader.
*
* @param ngSrc Value of the ngSrc attribute
* @param imageLoader ImageLoader provided
*/
function assertNotMissingBuiltInLoader(ngSrc, imageLoader) {
	if (imageLoader === noopImageLoader) {
		let builtInLoaderName = "";
		for (const loader of BUILT_IN_LOADERS) if (loader.testUrl(ngSrc)) {
			builtInLoaderName = loader.name;
			break;
		}
		if (builtInLoaderName) console.warn(formatRuntimeError(2962, `NgOptimizedImage: It looks like your images may be hosted on the ${builtInLoaderName} CDN, but your app is not using Angular's built-in loader for that CDN. We recommend switching to use the built-in by calling \`provide${builtInLoaderName}Loader()\` in your \`providers\` and passing it your instance's base URL. If you don't want to use the built-in loader, define a custom loader function using IMAGE_LOADER to silence this warning.`));
	}
}
/**
* Warns if ngSrcset is present and no loader is configured (i.e. the default one is being used).
*/
function assertNoNgSrcsetWithoutLoader(dir, imageLoader) {
	if (dir.ngSrcset && imageLoader === noopImageLoader) console.warn(formatRuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` attribute is present but no image loader is configured (i.e. the default one is being used), which would result in the same image being used for all configured sizes. To fix this, provide a loader or remove the \`ngSrcset\` attribute from the image.`));
}
/**
* Warns if loaderParams is present and no loader is configured (i.e. the default one is being
* used).
*/
function assertNoLoaderParamsWithoutLoader(dir, imageLoader) {
	if (dir.loaderParams && imageLoader === noopImageLoader) console.warn(formatRuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`loaderParams\` attribute is present but no image loader is configured (i.e. the default one is being used), which means that the loaderParams data will not be consumed and will not affect the URL. To fix this, provide a custom loader or remove the \`loaderParams\` attribute from the image.`));
}
/**
* Warns if the priority attribute is used too often on page load
*/
async function assetPriorityCountBelowThreshold(appRef) {
	if (IMGS_WITH_PRIORITY_ATTR_COUNT === 0) {
		IMGS_WITH_PRIORITY_ATTR_COUNT++;
		await appRef.whenStable();
		if (IMGS_WITH_PRIORITY_ATTR_COUNT > PRIORITY_COUNT_THRESHOLD) console.warn(formatRuntimeError(2966, `NgOptimizedImage: The "priority" attribute is set to true more than ${PRIORITY_COUNT_THRESHOLD} times (${IMGS_WITH_PRIORITY_ATTR_COUNT} times). Marking too many images as "high" priority can hurt your application's LCP (https://web.dev/lcp). "Priority" should only be set on the image expected to be the page's LCP element.`));
	} else IMGS_WITH_PRIORITY_ATTR_COUNT++;
}
/**
* Warns if placeholder's dimension are over a threshold.
*
* This assert function is meant to only run on the browser.
*/
function assertPlaceholderDimensions(dir, imgElement) {
	const computedStyle = window.getComputedStyle(imgElement);
	let renderedWidth = parseFloat(computedStyle.getPropertyValue("width"));
	let renderedHeight = parseFloat(computedStyle.getPropertyValue("height"));
	if (renderedWidth > PLACEHOLDER_DIMENSION_LIMIT || renderedHeight > PLACEHOLDER_DIMENSION_LIMIT) console.warn(formatRuntimeError(2967, `${imgDirectiveDetails(dir.ngSrc)} it uses a placeholder image, but at least one of the dimensions attribute (height or width) exceeds the limit of ${PLACEHOLDER_DIMENSION_LIMIT}px. To fix this, use a smaller image as a placeholder.`));
}
function callOnLoadIfImageIsLoaded(img, callback) {
	if (img.complete && img.naturalWidth) callback();
}
function round(input) {
	return Number.isInteger(input) ? input : input.toFixed(2);
}
function unwrapSafeUrl(value) {
	if (typeof value === "string") return value;
	return unwrapSafeValue(value);
}
function escapeCssUrl(input) {
	return input.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
function booleanOrUrlAttribute(value) {
	if (typeof value === "string" && value !== "true" && value !== "false" && value !== "") return value;
	return booleanAttribute(value);
}
//#endregion
//#region node_modules/@angular/platform-browser/fesm2022/dom_renderer.mjs
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
/**
* The plugin definition for the `EventManager` class
*
* It can be used as a base class to create custom manager plugins, i.e. you can create your own
* class that extends the `EventManagerPlugin` one.
*
* @see [Extend event handling](guide/templates/event-listeners#extend-event-handling)
*
* @publicApi
*/
var EventManagerPlugin = class {
	_doc;
	constructor(_doc) {
		this._doc = _doc;
	}
	manager;
};
var DomEventsPlugin = class DomEventsPlugin extends EventManagerPlugin {
	constructor(doc) {
		super(doc);
	}
	supports(eventName) {
		return true;
	}
	addEventListener(element, eventName, handler, options) {
		element.addEventListener(eventName, handler, options);
		return () => this.removeEventListener(element, eventName, handler, options);
	}
	removeEventListener(target, eventName, callback, options) {
		return target.removeEventListener(eventName, callback, options);
	}
	static ɵfac = function DomEventsPlugin_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DomEventsPlugin)(ɵɵinject(DOCUMENT));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: DomEventsPlugin,
		factory: DomEventsPlugin.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomEventsPlugin, [{ type: Injectable }], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}], null);
})();
/**
* The injection token for plugins of the `EventManager` service.
*
* @see [Extend event handling](guide/templates/event-listeners#extend-event-handling)
*
* @publicApi
*/
var EVENT_MANAGER_PLUGINS = new InjectionToken(ngDevMode ? "EventManagerPlugins" : "");
/**
* An injectable service that provides event management for Angular
* through a browser plug-in.
*
* @publicApi
*/
var EventManager = class EventManager {
	_zone;
	_plugins;
	_eventNameToPlugin = /* @__PURE__ */ new Map();
	/**
	* Initializes an instance of the event-manager service.
	*/
	constructor(plugins, _zone) {
		this._zone = _zone;
		plugins.forEach((plugin) => {
			plugin.manager = this;
		});
		const otherPlugins = plugins.filter((p) => !(p instanceof DomEventsPlugin));
		this._plugins = otherPlugins.slice().reverse();
		const domEventPlugin = plugins.find((p) => p instanceof DomEventsPlugin);
		if (domEventPlugin) this._plugins.push(domEventPlugin);
	}
	/**
	* Registers a handler for a specific element and event.
	*
	* @param element The HTML element to receive event notifications.
	* @param eventName The name of the event to listen for.
	* @param handler A function to call when the notification occurs. Receives the
	* event object as an argument.
	* @param options Options that configure how the event listener is bound.
	* @returns  A callback function that can be used to remove the handler.
	*/
	addEventListener(element, eventName, handler, options) {
		return this._findPluginFor(eventName).addEventListener(element, eventName, handler, options);
	}
	/**
	* Retrieves the compilation zone in which event listeners are registered.
	*/
	getZone() {
		return this._zone;
	}
	/** @internal */
	_findPluginFor(eventName) {
		let plugin = this._eventNameToPlugin.get(eventName);
		if (plugin) return plugin;
		plugin = this._plugins.find((plugin) => plugin.supports(eventName));
		if (!plugin) throw new RuntimeError(5101, (typeof ngDevMode === "undefined" || ngDevMode) && `No event manager plugin found for event ${eventName}`);
		this._eventNameToPlugin.set(eventName, plugin);
		return plugin;
	}
	static ɵfac = function EventManager_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || EventManager)(ɵɵinject(EVENT_MANAGER_PLUGINS), ɵɵinject(NgZone));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: EventManager,
		factory: EventManager.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventManager, [{ type: Injectable }], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [EVENT_MANAGER_PLUGINS]
		}]
	}, { type: NgZone }], null);
})();
/** The style elements attribute name used to set value of `APP_ID` token. */
var APP_ID_ATTRIBUTE_NAME = "ng-app-id";
/**
* Removes all provided elements from the document.
* @param elements An array of HTML Elements.
*/
function removeElements(elements) {
	for (const element of elements) element.remove();
}
/**
* Creates a `style` element with the provided inline style content.
* @param style A string of the inline style content.
* @param doc A DOM Document to use to create the element.
* @returns An HTMLStyleElement instance.
*/
function createStyleElement(style, doc) {
	const styleElement = doc.createElement("style");
	styleElement.textContent = style;
	return styleElement;
}
/**
* Searches a DOM document's head element for style elements with a matching application
* identifier attribute (`ng-app-id`) to the provide identifier and adds usage records for each.
* @param doc An HTML DOM document instance.
* @param appId A string containing an Angular application identifer.
* @param inline A Map object for tracking inline (defined via `styles` in component decorator) style usage.
* @param external A Map object for tracking external (defined via `styleUrls` in component decorator) style usage.
*/
function addServerStyles(doc, appId, inline, external) {
	const elements = doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${appId}"],link[${APP_ID_ATTRIBUTE_NAME}="${appId}"]`);
	if (elements) for (const styleElement of elements) {
		styleElement.removeAttribute(APP_ID_ATTRIBUTE_NAME);
		if (styleElement instanceof HTMLLinkElement) external.set(styleElement.href.slice(styleElement.href.lastIndexOf("/") + 1), {
			usage: 0,
			elements: [styleElement]
		});
		else if (styleElement.textContent) inline.set(styleElement.textContent, {
			usage: 0,
			elements: [styleElement]
		});
	}
}
/**
* Creates a `link` element for the provided external style URL.
* @param url A string of the URL for the stylesheet.
* @param doc A DOM Document to use to create the element.
* @returns An HTMLLinkElement instance.
*/
function createLinkElement(url, doc) {
	const linkElement = doc.createElement("link");
	linkElement.setAttribute("rel", "stylesheet");
	linkElement.setAttribute("href", url);
	return linkElement;
}
var SharedStylesHost = class SharedStylesHost {
	doc;
	appId;
	nonce;
	/**
	* Provides usage information for active inline style content and associated HTML <style> elements.
	* Embedded styles typically originate from the `styles` metadata of a rendered component.
	*/
	inline = /* @__PURE__ */ new Map();
	/**
	* Provides usage information for active external style URLs and the associated HTML <link> elements.
	* External styles typically originate from the `ɵɵExternalStylesFeature` of a rendered component.
	*/
	external = /* @__PURE__ */ new Map();
	/**
	* Set of host DOM nodes that will have styles attached.
	*/
	hosts = /* @__PURE__ */ new Set();
	constructor(doc, appId, nonce, platformId = {}) {
		this.doc = doc;
		this.appId = appId;
		this.nonce = nonce;
		addServerStyles(doc, appId, this.inline, this.external);
		this.hosts.add(doc.head);
	}
	/**
	* Adds embedded styles to the DOM via HTML `style` elements.
	* @param styles An array of style content strings.
	*/
	addStyles(styles, urls) {
		for (const value of styles) this.addUsage(value, this.inline, createStyleElement);
		urls?.forEach((value) => this.addUsage(value, this.external, createLinkElement));
	}
	/**
	* Removes embedded styles from the DOM that were added as HTML `style` elements.
	* @param styles An array of style content strings.
	*/
	removeStyles(styles, urls) {
		for (const value of styles) this.removeUsage(value, this.inline);
		urls?.forEach((value) => this.removeUsage(value, this.external));
	}
	addUsage(value, usages, creator) {
		const record = usages.get(value);
		if (record) {
			if ((typeof ngDevMode === "undefined" || ngDevMode) && record.usage === 0) record.elements.forEach((element) => element.setAttribute("ng-style-reused", ""));
			record.usage++;
		} else usages.set(value, {
			usage: 1,
			elements: [...this.hosts].map((host) => this.addElement(host, creator(value, this.doc)))
		});
	}
	removeUsage(value, usages) {
		const record = usages.get(value);
		if (record) {
			record.usage--;
			if (record.usage <= 0) {
				removeElements(record.elements);
				usages.delete(value);
			}
		}
	}
	ngOnDestroy() {
		for (const [, { elements }] of [...this.inline, ...this.external]) removeElements(elements);
		this.hosts.clear();
	}
	/**
	* Adds a host node to the set of style hosts and adds all existing style usage to
	* the newly added host node.
	*
	* This is currently only used for Shadow DOM encapsulation mode.
	*/
	addHost(hostNode) {
		this.hosts.add(hostNode);
		for (const [style, { elements }] of this.inline) elements.push(this.addElement(hostNode, createStyleElement(style, this.doc)));
		for (const [url, { elements }] of this.external) elements.push(this.addElement(hostNode, createLinkElement(url, this.doc)));
	}
	removeHost(hostNode) {
		this.hosts.delete(hostNode);
	}
	addElement(host, element) {
		if (this.nonce) element.setAttribute("nonce", this.nonce);
		return host.appendChild(element);
	}
	static ɵfac = function SharedStylesHost_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || SharedStylesHost)(ɵɵinject(DOCUMENT), ɵɵinject(APP_ID), ɵɵinject(CSP_NONCE, 8), ɵɵinject(PLATFORM_ID));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: SharedStylesHost,
		factory: SharedStylesHost.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedStylesHost, [{ type: Injectable }], () => [
		{
			type: Document,
			decorators: [{
				type: Inject,
				args: [DOCUMENT]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [APP_ID]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [CSP_NONCE]
			}, { type: Optional }]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [PLATFORM_ID]
			}]
		}
	], null);
})();
var NAMESPACE_URIS = {
	"svg": "http://www.w3.org/2000/svg",
	"xhtml": "http://www.w3.org/1999/xhtml",
	"xlink": "http://www.w3.org/1999/xlink",
	"xml": "http://www.w3.org/XML/1998/namespace",
	"xmlns": "http://www.w3.org/2000/xmlns/",
	"math": "http://www.w3.org/1998/Math/MathML"
};
var COMPONENT_REGEX = /%COMP%/g;
var SOURCEMAP_URL_REGEXP = /\/\*#\s*sourceMappingURL=(.+?)\s*\*\//;
var PROTOCOL_REGEXP = /^https?:/;
var COMPONENT_VARIABLE = "%COMP%";
var HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
var CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
/**
* The default value for the `REMOVE_STYLES_ON_COMPONENT_DESTROY` DI token.
*/
var REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
/**
* A DI token that indicates whether styles
* of destroyed components should be removed from DOM.
*
* By default, the value is set to `true`.
* @publicApi
*/
var REMOVE_STYLES_ON_COMPONENT_DESTROY = new InjectionToken(ngDevMode ? "RemoveStylesOnCompDestroy" : "", {
	providedIn: "root",
	factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
	return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
	return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
	return styles.map((s) => s.replace(COMPONENT_REGEX, compId));
}
/**
* Prepends a baseHref to the `sourceMappingURL` within the provided CSS content.
* If the `sourceMappingURL` contains an inline (encoded) map, the function skips processing.
*
* @note For inline stylesheets, the `sourceMappingURL` is relative to the page's origin
* and not the provided baseHref. This function is needed as when accessing the page with a URL
* containing two or more segments.
* For example, if the baseHref is set to `/`, and you visit a URL like `http://localhost/foo/bar`,
* the map would be requested from `http://localhost/foo/bar/comp.css.map` instead of what you'd expect,
* which is `http://localhost/comp.css.map`. This behavior is corrected by modifying the `sourceMappingURL`
* to ensure external source maps are loaded relative to the baseHref.
*

* @param baseHref - The base URL to prepend to the `sourceMappingURL`.
* @param styles - An array of CSS content strings, each potentially containing a `sourceMappingURL`.
* @returns The updated array of CSS content strings with modified `sourceMappingURL` values,
* or the original content if no modification is needed.
*/
function addBaseHrefToCssSourceMap(baseHref, styles) {
	if (!baseHref) return styles;
	const absoluteBaseHrefUrl = new URL(baseHref, "http://localhost");
	return styles.map((cssContent) => {
		if (!cssContent.includes("sourceMappingURL=")) return cssContent;
		return cssContent.replace(SOURCEMAP_URL_REGEXP, (_, sourceMapUrl) => {
			if (sourceMapUrl[0] === "/" || sourceMapUrl.startsWith("data:") || PROTOCOL_REGEXP.test(sourceMapUrl)) return `/*# sourceMappingURL=${sourceMapUrl} */`;
			const { pathname: resolvedSourceMapUrl } = new URL(sourceMapUrl, absoluteBaseHrefUrl);
			return `/*# sourceMappingURL=${resolvedSourceMapUrl} */`;
		});
	});
}
var DomRendererFactory2 = class DomRendererFactory2 {
	eventManager;
	sharedStylesHost;
	appId;
	removeStylesOnCompDestroy;
	doc;
	ngZone;
	nonce;
	tracingService;
	rendererByCompId = /* @__PURE__ */ new Map();
	defaultRenderer;
	platformIsServer;
	constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, ngZone, nonce = null, tracingService = null) {
		this.eventManager = eventManager;
		this.sharedStylesHost = sharedStylesHost;
		this.appId = appId;
		this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
		this.doc = doc;
		this.ngZone = ngZone;
		this.nonce = nonce;
		this.tracingService = tracingService;
		this.platformIsServer = false;
		this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer, this.tracingService);
	}
	createRenderer(element, type) {
		if (!element || !type) return this.defaultRenderer;
		const renderer = this.getOrCreateRenderer(element, type);
		if (renderer instanceof EmulatedEncapsulationDomRenderer2) renderer.applyToHost(element);
		else if (renderer instanceof NoneEncapsulationDomRenderer) renderer.applyStyles();
		return renderer;
	}
	getOrCreateRenderer(element, type) {
		const rendererByCompId = this.rendererByCompId;
		let renderer = rendererByCompId.get(type.id);
		if (!renderer) {
			const doc = this.doc;
			const ngZone = this.ngZone;
			const eventManager = this.eventManager;
			const sharedStylesHost = this.sharedStylesHost;
			const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
			const platformIsServer = this.platformIsServer;
			const tracingService = this.tracingService;
			switch (type.encapsulation) {
				case ViewEncapsulation.Emulated:
					renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService);
					break;
				case ViewEncapsulation.ShadowDom: return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer, tracingService);
				default: renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService);
			}
			rendererByCompId.set(type.id, renderer);
		}
		return renderer;
	}
	ngOnDestroy() {
		this.rendererByCompId.clear();
	}
	/**
	* Used during HMR to clear any cached data about a component.
	* @param componentId ID of the component that is being replaced.
	*/
	componentReplaced(componentId) {
		this.rendererByCompId.delete(componentId);
	}
	static ɵfac = function DomRendererFactory2_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DomRendererFactory2)(ɵɵinject(EventManager), ɵɵinject(SharedStylesHost), ɵɵinject(APP_ID), ɵɵinject(REMOVE_STYLES_ON_COMPONENT_DESTROY), ɵɵinject(DOCUMENT), ɵɵinject(NgZone), ɵɵinject(CSP_NONCE), ɵɵinject(TracingService, 8));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: DomRendererFactory2,
		factory: DomRendererFactory2.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomRendererFactory2, [{ type: Injectable }], () => [
		{ type: EventManager },
		{ type: SharedStylesHost },
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [APP_ID]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
			}]
		},
		{
			type: Document,
			decorators: [{
				type: Inject,
				args: [DOCUMENT]
			}]
		},
		{ type: NgZone },
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [CSP_NONCE]
			}]
		},
		{
			type: TracingService,
			decorators: [{
				type: Inject,
				args: [TracingService]
			}, { type: Optional }]
		}
	], null);
})();
var DefaultDomRenderer2 = class {
	eventManager;
	doc;
	ngZone;
	platformIsServer;
	tracingService;
	data = Object.create(null);
	/**
	* By default this renderer throws when encountering synthetic properties
	* This can be disabled for example by the AsyncAnimationRendererFactory
	*/
	throwOnSyntheticProps = true;
	constructor(eventManager, doc, ngZone, platformIsServer, tracingService) {
		this.eventManager = eventManager;
		this.doc = doc;
		this.ngZone = ngZone;
		this.platformIsServer = platformIsServer;
		this.tracingService = tracingService;
	}
	destroy() {}
	destroyNode = null;
	createElement(name, namespace) {
		if (namespace) return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
		return this.doc.createElement(name);
	}
	createComment(value) {
		return this.doc.createComment(value);
	}
	createText(value) {
		return this.doc.createTextNode(value);
	}
	appendChild(parent, newChild) {
		(isTemplateNode(parent) ? parent.content : parent).appendChild(newChild);
	}
	insertBefore(parent, newChild, refChild) {
		if (parent) (isTemplateNode(parent) ? parent.content : parent).insertBefore(newChild, refChild);
	}
	removeChild(_parent, oldChild) {
		oldChild.remove();
	}
	selectRootElement(selectorOrNode, preserveContent) {
		let el = typeof selectorOrNode === "string" ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
		if (!el) throw new RuntimeError(-5104, (typeof ngDevMode === "undefined" || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
		if (!preserveContent) el.textContent = "";
		return el;
	}
	parentNode(node) {
		return node.parentNode;
	}
	nextSibling(node) {
		return node.nextSibling;
	}
	setAttribute(el, name, value, namespace) {
		if (namespace) {
			name = namespace + ":" + name;
			const namespaceUri = NAMESPACE_URIS[namespace];
			if (namespaceUri) el.setAttributeNS(namespaceUri, name, value);
			else el.setAttribute(name, value);
		} else el.setAttribute(name, value);
	}
	removeAttribute(el, name, namespace) {
		if (namespace) {
			const namespaceUri = NAMESPACE_URIS[namespace];
			if (namespaceUri) el.removeAttributeNS(namespaceUri, name);
			else el.removeAttribute(`${namespace}:${name}`);
		} else el.removeAttribute(name);
	}
	addClass(el, name) {
		el.classList.add(name);
	}
	removeClass(el, name) {
		el.classList.remove(name);
	}
	setStyle(el, style, value, flags) {
		if (flags & (RendererStyleFlags2.DashCase | RendererStyleFlags2.Important)) el.style.setProperty(style, value, flags & RendererStyleFlags2.Important ? "important" : "");
		else el.style[style] = value;
	}
	removeStyle(el, style, flags) {
		if (flags & RendererStyleFlags2.DashCase) el.style.removeProperty(style);
		else el.style[style] = "";
	}
	setProperty(el, name, value) {
		if (el == null) return;
		(typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, "property");
		el[name] = value;
	}
	setValue(node, value) {
		node.nodeValue = value;
	}
	listen(target, event, callback, options) {
		(typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, "listener");
		if (typeof target === "string") {
			target = getDOM().getGlobalEventTarget(this.doc, target);
			if (!target) throw new RuntimeError(5102, (typeof ngDevMode === "undefined" || ngDevMode) && `Unsupported event target ${target} for event ${event}`);
		}
		let wrappedCallback = this.decoratePreventDefault(callback);
		if (this.tracingService?.wrapEventListener) wrappedCallback = this.tracingService.wrapEventListener(target, event, wrappedCallback);
		return this.eventManager.addEventListener(target, event, wrappedCallback, options);
	}
	decoratePreventDefault(eventHandler) {
		return (event) => {
			if (event === "__ngUnwrap__") return eventHandler;
			if (eventHandler(event) === false) event.preventDefault();
		};
	}
};
var AT_CHARCODE = (() => "@".charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
	if (name.charCodeAt(0) === AT_CHARCODE) throw new RuntimeError(5105, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Make sure \`provideAnimationsAsync()\`, \`provideAnimations()\` or \`provideNoopAnimations()\` call was added to a list of providers used to bootstrap an application.
  - There is a corresponding animation configuration named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.dev/api/core/Component#animations).`);
}
function isTemplateNode(node) {
	return node.tagName === "TEMPLATE" && node.content !== void 0;
}
var ShadowDomRenderer = class extends DefaultDomRenderer2 {
	sharedStylesHost;
	hostEl;
	shadowRoot;
	constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer, tracingService) {
		super(eventManager, doc, ngZone, platformIsServer, tracingService);
		this.sharedStylesHost = sharedStylesHost;
		this.hostEl = hostEl;
		this.shadowRoot = hostEl.attachShadow({ mode: "open" });
		this.sharedStylesHost.addHost(this.shadowRoot);
		let styles = component.styles;
		if (ngDevMode) styles = addBaseHrefToCssSourceMap(getDOM().getBaseHref(doc) ?? "", styles);
		styles = shimStylesContent(component.id, styles);
		for (const style of styles) {
			const styleEl = document.createElement("style");
			if (nonce) styleEl.setAttribute("nonce", nonce);
			styleEl.textContent = style;
			this.shadowRoot.appendChild(styleEl);
		}
		const styleUrls = component.getExternalStyles?.();
		if (styleUrls) for (const styleUrl of styleUrls) {
			const linkEl = createLinkElement(styleUrl, doc);
			if (nonce) linkEl.setAttribute("nonce", nonce);
			this.shadowRoot.appendChild(linkEl);
		}
	}
	nodeOrShadowRoot(node) {
		return node === this.hostEl ? this.shadowRoot : node;
	}
	appendChild(parent, newChild) {
		return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
	}
	insertBefore(parent, newChild, refChild) {
		return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
	}
	removeChild(_parent, oldChild) {
		return super.removeChild(null, oldChild);
	}
	parentNode(node) {
		return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
	}
	destroy() {
		this.sharedStylesHost.removeHost(this.shadowRoot);
	}
};
var NoneEncapsulationDomRenderer = class extends DefaultDomRenderer2 {
	sharedStylesHost;
	removeStylesOnCompDestroy;
	styles;
	styleUrls;
	constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService, compId) {
		super(eventManager, doc, ngZone, platformIsServer, tracingService);
		this.sharedStylesHost = sharedStylesHost;
		this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
		let styles = component.styles;
		if (ngDevMode) styles = addBaseHrefToCssSourceMap(getDOM().getBaseHref(doc) ?? "", styles);
		this.styles = compId ? shimStylesContent(compId, styles) : styles;
		this.styleUrls = component.getExternalStyles?.(compId);
	}
	applyStyles() {
		this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
	}
	destroy() {
		if (!this.removeStylesOnCompDestroy) return;
		if (allLeavingAnimations.size === 0) this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
	}
};
var EmulatedEncapsulationDomRenderer2 = class extends NoneEncapsulationDomRenderer {
	contentAttr;
	hostAttr;
	constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService) {
		const compId = appId + "-" + component.id;
		super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService, compId);
		this.contentAttr = shimContentAttribute(compId);
		this.hostAttr = shimHostAttribute(compId);
	}
	applyToHost(element) {
		this.applyStyles();
		this.setAttribute(element, this.hostAttr, "");
	}
	createElement(parent, name) {
		const el = super.createElement(parent, name);
		super.setAttribute(el, this.contentAttr, "");
		return el;
	}
};
//#endregion
//#region node_modules/@angular/platform-browser/fesm2022/browser.mjs
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
/**
* A `DomAdapter` powered by full browser DOM APIs.
*
* @security Tread carefully! Interacting with the DOM directly is dangerous and
* can introduce XSS risks.
*/
var BrowserDomAdapter = class BrowserDomAdapter extends DomAdapter {
	supportsDOMEvents = true;
	static makeCurrent() {
		setRootDomAdapter(new BrowserDomAdapter());
	}
	onAndCancel(el, evt, listener, options) {
		el.addEventListener(evt, listener, options);
		return () => {
			el.removeEventListener(evt, listener, options);
		};
	}
	dispatchEvent(el, evt) {
		el.dispatchEvent(evt);
	}
	remove(node) {
		node.remove();
	}
	createElement(tagName, doc) {
		doc = doc || this.getDefaultDocument();
		return doc.createElement(tagName);
	}
	createHtmlDocument() {
		return document.implementation.createHTMLDocument("fakeTitle");
	}
	getDefaultDocument() {
		return document;
	}
	isElementNode(node) {
		return node.nodeType === Node.ELEMENT_NODE;
	}
	isShadowRoot(node) {
		return node instanceof DocumentFragment;
	}
	/** @deprecated No longer being used in Ivy code. To be removed in version 14. */
	getGlobalEventTarget(doc, target) {
		if (target === "window") return window;
		if (target === "document") return doc;
		if (target === "body") return doc.body;
		return null;
	}
	getBaseHref(doc) {
		const href = getBaseElementHref();
		return href == null ? null : relativePath(href);
	}
	resetBaseElement() {
		baseElement = null;
	}
	getUserAgent() {
		return window.navigator.userAgent;
	}
	getCookie(name) {
		return parseCookieValue(document.cookie, name);
	}
};
var baseElement = null;
function getBaseElementHref() {
	baseElement = baseElement || document.head.querySelector("base");
	return baseElement ? baseElement.getAttribute("href") : null;
}
function relativePath(url) {
	return new URL(url, document.baseURI).pathname;
}
var BrowserGetTestability = class {
	addToWindow(registry) {
		_global["getAngularTestability"] = (elem, findInAncestors = true) => {
			const testability = registry.findTestabilityInTree(elem, findInAncestors);
			if (testability == null) throw new RuntimeError(5103, (typeof ngDevMode === "undefined" || ngDevMode) && "Could not find testability for element.");
			return testability;
		};
		_global["getAllAngularTestabilities"] = () => registry.getAllTestabilities();
		_global["getAllAngularRootElements"] = () => registry.getAllRootElements();
		const whenAllStable = (callback) => {
			const testabilities = _global["getAllAngularTestabilities"]();
			let count = testabilities.length;
			const decrement = function() {
				count--;
				if (count == 0) callback();
			};
			testabilities.forEach((testability) => {
				testability.whenStable(decrement);
			});
		};
		if (!_global["frameworkStabilizers"]) _global["frameworkStabilizers"] = [];
		_global["frameworkStabilizers"].push(whenAllStable);
	}
	findTestabilityInTree(registry, elem, findInAncestors) {
		if (elem == null) return null;
		const t = registry.getTestability(elem);
		if (t != null) return t;
		else if (!findInAncestors) return null;
		if (getDOM().isShadowRoot(elem)) return this.findTestabilityInTree(registry, elem.host, true);
		return this.findTestabilityInTree(registry, elem.parentElement, true);
	}
};
/**
* A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
*/
var BrowserXhr = class BrowserXhr {
	build() {
		return new XMLHttpRequest();
	}
	static ɵfac = function BrowserXhr_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BrowserXhr)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: BrowserXhr,
		factory: BrowserXhr.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserXhr, [{ type: Injectable }], null, null);
})();
/**
* Defines supported modifiers for key events.
*/
var MODIFIER_KEYS = [
	"alt",
	"control",
	"meta",
	"shift"
];
var _keyMap = {
	"\b": "Backspace",
	"	": "Tab",
	"": "Delete",
	"\x1B": "Escape",
	"Del": "Delete",
	"Esc": "Escape",
	"Left": "ArrowLeft",
	"Right": "ArrowRight",
	"Up": "ArrowUp",
	"Down": "ArrowDown",
	"Menu": "ContextMenu",
	"Scroll": "ScrollLock",
	"Win": "OS"
};
/**
* Retrieves modifiers from key-event objects.
*/
var MODIFIER_KEY_GETTERS = {
	"alt": (event) => event.altKey,
	"control": (event) => event.ctrlKey,
	"meta": (event) => event.metaKey,
	"shift": (event) => event.shiftKey
};
/**
* A browser plug-in that provides support for handling of key events in Angular.
*/
var KeyEventsPlugin = class KeyEventsPlugin extends EventManagerPlugin {
	/**
	* Initializes an instance of the browser plug-in.
	* @param doc The document in which key events will be detected.
	*/
	constructor(doc) {
		super(doc);
	}
	/**
	* Reports whether a named key event is supported.
	* @param eventName The event name to query.
	* @return True if the named key event is supported.
	*/
	supports(eventName) {
		return KeyEventsPlugin.parseEventName(eventName) != null;
	}
	/**
	* Registers a handler for a specific element and key event.
	* @param element The HTML element to receive event notifications.
	* @param eventName The name of the key event to listen for.
	* @param handler A function to call when the notification occurs. Receives the
	* event object as an argument.
	* @returns The key event that was registered.
	*/
	addEventListener(element, eventName, handler, options) {
		const parsedEvent = KeyEventsPlugin.parseEventName(eventName);
		const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent["fullKey"], handler, this.manager.getZone());
		return this.manager.getZone().runOutsideAngular(() => {
			return getDOM().onAndCancel(element, parsedEvent["domEventName"], outsideHandler, options);
		});
	}
	/**
	* Parses the user provided full keyboard event definition and normalizes it for
	* later internal use. It ensures the string is all lowercase, converts special
	* characters to a standard spelling, and orders all the values consistently.
	*
	* @param eventName The name of the key event to listen for.
	* @returns an object with the full, normalized string, and the dom event name
	* or null in the case when the event doesn't match a keyboard event.
	*/
	static parseEventName(eventName) {
		const parts = eventName.toLowerCase().split(".");
		const domEventName = parts.shift();
		if (parts.length === 0 || !(domEventName === "keydown" || domEventName === "keyup")) return null;
		const key = KeyEventsPlugin._normalizeKey(parts.pop());
		let fullKey = "";
		let codeIX = parts.indexOf("code");
		if (codeIX > -1) {
			parts.splice(codeIX, 1);
			fullKey = "code.";
		}
		MODIFIER_KEYS.forEach((modifierName) => {
			const index = parts.indexOf(modifierName);
			if (index > -1) {
				parts.splice(index, 1);
				fullKey += modifierName + ".";
			}
		});
		fullKey += key;
		if (parts.length != 0 || key.length === 0) return null;
		const result = {};
		result["domEventName"] = domEventName;
		result["fullKey"] = fullKey;
		return result;
	}
	/**
	* Determines whether the actual keys pressed match the configured key code string.
	* The `fullKeyCode` event is normalized in the `parseEventName` method when the
	* event is attached to the DOM during the `addEventListener` call. This is unseen
	* by the end user and is normalized for internal consistency and parsing.
	*
	* @param event The keyboard event.
	* @param fullKeyCode The normalized user defined expected key event string
	* @returns boolean.
	*/
	static matchEventFullKeyCode(event, fullKeyCode) {
		let keycode = _keyMap[event.key] || event.key;
		let key = "";
		if (fullKeyCode.indexOf("code.") > -1) {
			keycode = event.code;
			key = "code.";
		}
		if (keycode == null || !keycode) return false;
		keycode = keycode.toLowerCase();
		if (keycode === " ") keycode = "space";
		else if (keycode === ".") keycode = "dot";
		MODIFIER_KEYS.forEach((modifierName) => {
			if (modifierName !== keycode) {
				const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
				if (modifierGetter(event)) key += modifierName + ".";
			}
		});
		key += keycode;
		return key === fullKeyCode;
	}
	/**
	* Configures a handler callback for a key event.
	* @param fullKey The event name that combines all simultaneous keystrokes.
	* @param handler The function that responds to the key event.
	* @param zone The zone in which the event occurred.
	* @returns A callback function.
	*/
	static eventCallback(fullKey, handler, zone) {
		return (event) => {
			if (KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) zone.runGuarded(() => handler(event));
		};
	}
	/** @internal */
	static _normalizeKey(keyName) {
		return keyName === "esc" ? "escape" : keyName;
	}
	static ɵfac = function KeyEventsPlugin_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || KeyEventsPlugin)(ɵɵinject(DOCUMENT));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: KeyEventsPlugin,
		factory: KeyEventsPlugin.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyEventsPlugin, [{ type: Injectable }], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}], null);
})();
/**
* Bootstraps an instance of an Angular application and renders a standalone component as the
* application's root component. More information about standalone components can be found in [this
* guide](guide/components/importing).
*
* @usageNotes
* The root component passed into this function *must* be a standalone one (should have the
* `standalone: true` flag in the `@Component` decorator config).
*
* ```angular-ts
* @Component({
*   standalone: true,
*   template: 'Hello world!'
* })
* class RootComponent {}
*
* const appRef: ApplicationRef = await bootstrapApplication(RootComponent);
* ```
*
* You can add the list of providers that should be available in the application injector by
* specifying the `providers` field in an object passed as the second argument:
*
* ```ts
* await bootstrapApplication(RootComponent, {
*   providers: [
*     {provide: BACKEND_URL, useValue: 'https://yourdomain.com/api'}
*   ]
* });
* ```
*
* The `importProvidersFrom` helper method can be used to collect all providers from any
* existing NgModule (and transitively from all NgModules that it imports):
*
* ```ts
* await bootstrapApplication(RootComponent, {
*   providers: [
*     importProvidersFrom(SomeNgModule)
*   ]
* });
* ```
*
* Note: the `bootstrapApplication` method doesn't include [Testability](api/core/Testability) by
* default. You can add [Testability](api/core/Testability) by getting the list of necessary
* providers using `provideProtractorTestingSupport()` function and adding them into the `providers`
* array, for example:
*
* ```ts
* import {provideProtractorTestingSupport} from '@angular/platform-browser';
*
* await bootstrapApplication(RootComponent, {providers: [provideProtractorTestingSupport()]});
* ```
*
* @param rootComponent A reference to a standalone component that should be rendered.
* @param options Extra configuration for the bootstrap operation, see `ApplicationConfig` for
*     additional info.
* @param context Optional context object that can be used to provide a pre-existing
*     platform injector. This is useful for advanced use-cases, for example, server-side
*     rendering, where the platform is created for each request.
* @returns A promise that returns an `ApplicationRef` instance once resolved.
*
* @publicApi
*/
function bootstrapApplication(rootComponent, options, context) {
	const config = {
		rootComponent,
		platformRef: context?.platformRef,
		...createProvidersConfig(options)
	};
	return internalCreateApplication(config);
}
/**
* Create an instance of an Angular application without bootstrapping any components. This is useful
* for the situation where one wants to decouple application environment creation (a platform and
* associated injectors) from rendering components on a screen. Components can be subsequently
* bootstrapped on the returned `ApplicationRef`.
*
* @param options Extra configuration for the application environment, see `ApplicationConfig` for
*     additional info.
* @returns A promise that returns an `ApplicationRef` instance once resolved.
*
* @publicApi
*/
function createApplication(options) {
	return internalCreateApplication(createProvidersConfig(options));
}
function createProvidersConfig(options) {
	return {
		appProviders: [...BROWSER_MODULE_PROVIDERS, ...options?.providers ?? []],
		platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
	};
}
/**
* Returns a set of providers required to setup [Testability](api/core/Testability) for an
* application bootstrapped using the `bootstrapApplication` function. The set of providers is
* needed to support testing an application with Protractor (which relies on the Testability APIs
* to be present).
*
* @returns An array of providers required to setup Testability for an application and make it
*     available for testing using Protractor.
*
* @publicApi
*/
function provideProtractorTestingSupport() {
	return [...TESTABILITY_PROVIDERS];
}
function initDomAdapter() {
	BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
	return new ErrorHandler();
}
function _document() {
	setDocument(document);
	return document;
}
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
	{
		provide: PLATFORM_ID,
		useValue: PLATFORM_BROWSER_ID
	},
	{
		provide: PLATFORM_INITIALIZER,
		useValue: initDomAdapter,
		multi: true
	},
	{
		provide: DOCUMENT,
		useFactory: _document
	}
];
/**
* A factory function that returns a `PlatformRef` instance associated with browser service
* providers.
*
* @publicApi
*/
var platformBrowser = createPlatformFactory(platformCore, "browser", INTERNAL_BROWSER_PLATFORM_PROVIDERS);
/**
* Internal marker to signal whether providers from the `BrowserModule` are already present in DI.
* This is needed to avoid loading `BrowserModule` providers twice. We can't rely on the
* `BrowserModule` presence itself, since the standalone-based bootstrap just imports
* `BrowserModule` providers without referencing the module itself.
*/
var BROWSER_MODULE_PROVIDERS_MARKER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "BrowserModule Providers Marker" : "");
var TESTABILITY_PROVIDERS = [
	{
		provide: TESTABILITY_GETTER,
		useClass: BrowserGetTestability
	},
	{
		provide: TESTABILITY,
		useClass: Testability,
		deps: [
			NgZone,
			TestabilityRegistry,
			TESTABILITY_GETTER
		]
	},
	{
		provide: Testability,
		useClass: Testability,
		deps: [
			NgZone,
			TestabilityRegistry,
			TESTABILITY_GETTER
		]
	}
];
var BROWSER_MODULE_PROVIDERS = [
	{
		provide: INJECTOR_SCOPE,
		useValue: "root"
	},
	{
		provide: ErrorHandler,
		useFactory: errorHandler
	},
	{
		provide: EVENT_MANAGER_PLUGINS,
		useClass: DomEventsPlugin,
		multi: true,
		deps: [DOCUMENT]
	},
	{
		provide: EVENT_MANAGER_PLUGINS,
		useClass: KeyEventsPlugin,
		multi: true,
		deps: [DOCUMENT]
	},
	DomRendererFactory2,
	SharedStylesHost,
	EventManager,
	{
		provide: RendererFactory2,
		useExisting: DomRendererFactory2
	},
	{
		provide: XhrFactory,
		useClass: BrowserXhr
	},
	typeof ngDevMode === "undefined" || ngDevMode ? {
		provide: BROWSER_MODULE_PROVIDERS_MARKER,
		useValue: true
	} : []
];
/**
* Exports required infrastructure for all Angular apps.
* Included by default in all Angular apps created with the CLI
* `new` command.
* Re-exports `CommonModule` and `ApplicationModule`, making their
* exports and providers available to all apps.
*
* @publicApi
*/
var BrowserModule = class BrowserModule {
	constructor() {
		if (typeof ngDevMode === "undefined" || ngDevMode) {
			if (inject(BROWSER_MODULE_PROVIDERS_MARKER, {
				optional: true,
				skipSelf: true
			})) throw new RuntimeError(5100, "Providers from the `BrowserModule` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the `CommonModule` instead.");
		}
	}
	static ɵfac = function BrowserModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BrowserModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: BrowserModule,
		exports: [CommonModule, ApplicationModule]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({
		providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
		imports: [CommonModule, ApplicationModule]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserModule, [{
		type: NgModule,
		args: [{
			providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
			exports: [CommonModule, ApplicationModule]
		}]
	}], () => [], null);
})();
//#endregion
//#region node_modules/@angular/common/fesm2022/module.mjs
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
/**
* Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
* `HttpResponse`.
*
* `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
* first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
* `HttpBackend`.
*
* In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
*
* @publicApi
*/
var HttpHandler = class {};
/**
* A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
*
* Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
*
* When injected, `HttpBackend` dispatches requests directly to the backend, without going
* through the interceptor chain.
*
* @publicApi
*/
var HttpBackend = class {};
/**
* Represents the header configuration options for an HTTP request.
* Instances are immutable. Modifying methods return a cloned
* instance with the change. The original object is never changed.
*
* @see [Setting request headers](guide/http/making-requests#setting-request-headers)
*
* @publicApi
*/
var HttpHeaders = class HttpHeaders {
	/**
	* Internal map of lowercase header names to values.
	*/
	headers;
	/**
	* Internal map of lowercased header names to the normalized
	* form of the name (the form seen first).
	*/
	normalizedNames = /* @__PURE__ */ new Map();
	/**
	* Complete the lazy initialization of this object (needed before reading).
	*/
	lazyInit;
	/**
	* Queued updates to be materialized the next initialization.
	*/
	lazyUpdate = null;
	/**  Constructs a new HTTP header object with the given values.*/
	constructor(headers) {
		if (!headers) this.headers = /* @__PURE__ */ new Map();
		else if (typeof headers === "string") this.lazyInit = () => {
			this.headers = /* @__PURE__ */ new Map();
			headers.split("\n").forEach((line) => {
				const index = line.indexOf(":");
				if (index > 0) {
					const name = line.slice(0, index);
					const value = line.slice(index + 1).trim();
					this.addHeaderEntry(name, value);
				}
			});
		};
		else if (typeof Headers !== "undefined" && headers instanceof Headers) {
			this.headers = /* @__PURE__ */ new Map();
			headers.forEach((value, name) => {
				this.addHeaderEntry(name, value);
			});
		} else this.lazyInit = () => {
			if (typeof ngDevMode === "undefined" || ngDevMode) assertValidHeaders(headers);
			this.headers = /* @__PURE__ */ new Map();
			Object.entries(headers).forEach(([name, values]) => {
				this.setHeaderEntries(name, values);
			});
		};
	}
	/**
	* Checks for existence of a given header.
	*
	* @param name The header name to check for existence.
	*
	* @returns True if the header exists, false otherwise.
	*/
	has(name) {
		this.init();
		return this.headers.has(name.toLowerCase());
	}
	/**
	* Retrieves the first value of a given header.
	*
	* @param name The header name.
	*
	* @returns The value string if the header exists, null otherwise
	*/
	get(name) {
		this.init();
		const values = this.headers.get(name.toLowerCase());
		return values && values.length > 0 ? values[0] : null;
	}
	/**
	* Retrieves the names of the headers.
	*
	* @returns A list of header names.
	*/
	keys() {
		this.init();
		return Array.from(this.normalizedNames.values());
	}
	/**
	* Retrieves a list of values for a given header.
	*
	* @param name The header name from which to retrieve values.
	*
	* @returns A string of values if the header exists, null otherwise.
	*/
	getAll(name) {
		this.init();
		return this.headers.get(name.toLowerCase()) || null;
	}
	/**
	* Appends a new value to the existing set of values for a header
	* and returns them in a clone of the original instance.
	*
	* @param name The header name for which to append the values.
	* @param value The value to append.
	*
	* @returns A clone of the HTTP headers object with the value appended to the given header.
	*/
	append(name, value) {
		return this.clone({
			name,
			value,
			op: "a"
		});
	}
	/**
	* Sets or modifies a value for a given header in a clone of the original instance.
	* If the header already exists, its value is replaced with the given value
	* in the returned object.
	*
	* @param name The header name.
	* @param value The value or values to set or override for the given header.
	*
	* @returns A clone of the HTTP headers object with the newly set header value.
	*/
	set(name, value) {
		return this.clone({
			name,
			value,
			op: "s"
		});
	}
	/**
	* Deletes values for a given header in a clone of the original instance.
	*
	* @param name The header name.
	* @param value The value or values to delete for the given header.
	*
	* @returns A clone of the HTTP headers object with the given value deleted.
	*/
	delete(name, value) {
		return this.clone({
			name,
			value,
			op: "d"
		});
	}
	maybeSetNormalizedName(name, lcName) {
		if (!this.normalizedNames.has(lcName)) this.normalizedNames.set(lcName, name);
	}
	init() {
		if (!!this.lazyInit) {
			if (this.lazyInit instanceof HttpHeaders) this.copyFrom(this.lazyInit);
			else this.lazyInit();
			this.lazyInit = null;
			if (!!this.lazyUpdate) {
				this.lazyUpdate.forEach((update) => this.applyUpdate(update));
				this.lazyUpdate = null;
			}
		}
	}
	copyFrom(other) {
		other.init();
		for (const [key, values] of other.headers.entries()) {
			this.headers.set(key, values);
			this.normalizedNames.set(key, other.normalizedNames.get(key));
		}
	}
	clone(update) {
		const clone = new HttpHeaders();
		clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
		clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
		return clone;
	}
	applyUpdate(update) {
		const key = update.name.toLowerCase();
		switch (update.op) {
			case "a":
			case "s":
				let value = update.value;
				if (typeof value === "string") value = [value];
				if (value.length === 0) return;
				this.maybeSetNormalizedName(update.name, key);
				const base = update.op === "a" ? (this.headers.get(key) || []).slice() : [];
				base.push(...value);
				this.headers.set(key, base);
				break;
			case "d":
				const toDelete = update.value;
				if (toDelete === void 0) {
					this.headers.delete(key);
					this.normalizedNames.delete(key);
				} else {
					const valuesToDelete = Array.isArray(toDelete) ? toDelete : [toDelete];
					let existing = this.headers.get(key);
					if (!existing) return;
					existing = existing.filter((value) => valuesToDelete.indexOf(value) === -1);
					if (existing.length === 0) {
						this.headers.delete(key);
						this.normalizedNames.delete(key);
					} else this.headers.set(key, existing);
				}
		}
	}
	addHeaderEntry(name, value) {
		const key = name.toLowerCase();
		this.maybeSetNormalizedName(name, key);
		if (this.headers.has(key)) this.headers.get(key).push(value);
		else this.headers.set(key, [value]);
	}
	setHeaderEntries(name, values) {
		const headerValues = (Array.isArray(values) ? values : [values]).map((value) => value.toString());
		const key = name.toLowerCase();
		this.headers.set(key, headerValues);
		this.maybeSetNormalizedName(name, key);
	}
	/**
	* @internal
	*/
	forEach(fn) {
		this.init();
		Array.from(this.normalizedNames.keys()).forEach((key) => fn(this.normalizedNames.get(key), this.headers.get(key)));
	}
};
/**
* Verifies that the headers object has the right shape: the values
* must be either strings, numbers or arrays. Throws an error if an invalid
* header value is present.
*/
function assertValidHeaders(headers) {
	for (const [key, value] of Object.entries(headers)) if (!(typeof value === "string" || typeof value === "number") && !Array.isArray(value)) throw new Error(`Unexpected value of the \`${key}\` header provided. Expecting either a string, a number or an array, but got: \`${value}\`.`);
}
/**
* Provides encoding and decoding of URL parameter and query-string values.
*
* Serializes and parses URL parameter keys and values to encode and decode them.
* If you pass URL query parameters without encoding,
* the query parameters can be misinterpreted at the receiving end.
*
*
* @publicApi
*/
var HttpUrlEncodingCodec = class {
	/**
	* Encodes a key name for a URL parameter or query-string.
	* @param key The key name.
	* @returns The encoded key name.
	*/
	encodeKey(key) {
		return standardEncoding(key);
	}
	/**
	* Encodes the value of a URL parameter or query-string.
	* @param value The value.
	* @returns The encoded value.
	*/
	encodeValue(value) {
		return standardEncoding(value);
	}
	/**
	* Decodes an encoded URL parameter or query-string key.
	* @param key The encoded key name.
	* @returns The decoded key name.
	*/
	decodeKey(key) {
		return decodeURIComponent(key);
	}
	/**
	* Decodes an encoded URL parameter or query-string value.
	* @param value The encoded value.
	* @returns The decoded value.
	*/
	decodeValue(value) {
		return decodeURIComponent(value);
	}
};
function paramParser(rawParams, codec) {
	const map = /* @__PURE__ */ new Map();
	if (rawParams.length > 0) rawParams.replace(/^\?/, "").split("&").forEach((param) => {
		const eqIdx = param.indexOf("=");
		const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ""] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
		const list = map.get(key) || [];
		list.push(val);
		map.set(key, list);
	});
	return map;
}
/**
* Encode input string with standard encodeURIComponent and then un-encode specific characters.
*/
var STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
var STANDARD_ENCODING_REPLACEMENTS = {
	"40": "@",
	"3A": ":",
	"24": "$",
	"2C": ",",
	"3B": ";",
	"3D": "=",
	"3F": "?",
	"2F": "/"
};
function standardEncoding(v) {
	return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
	return `${value}`;
}
/**
* An HTTP request/response body that represents serialized parameters,
* per the MIME type `application/x-www-form-urlencoded`.
*
* This class is immutable; all mutation operations return a new instance.
*
* @see [Setting URL parameters](guide/http/making-requests#setting-url-parameters)
*
* @publicApi
*/
var HttpParams = class HttpParams {
	map;
	encoder;
	updates = null;
	cloneFrom = null;
	constructor(options = {}) {
		this.encoder = options.encoder || new HttpUrlEncodingCodec();
		if (options.fromString) {
			if (options.fromObject) throw new RuntimeError(2805, ngDevMode && "Cannot specify both fromString and fromObject.");
			this.map = paramParser(options.fromString, this.encoder);
		} else if (!!options.fromObject) {
			this.map = /* @__PURE__ */ new Map();
			Object.keys(options.fromObject).forEach((key) => {
				const value = options.fromObject[key];
				const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
				this.map.set(key, values);
			});
		} else this.map = null;
	}
	/**
	* Reports whether the body includes one or more values for a given parameter.
	* @param param The parameter name.
	* @returns True if the parameter has one or more values,
	* false if it has no value or is not present.
	*/
	has(param) {
		this.init();
		return this.map.has(param);
	}
	/**
	* Retrieves the first value for a parameter.
	* @param param The parameter name.
	* @returns The first value of the given parameter,
	* or `null` if the parameter is not present.
	*/
	get(param) {
		this.init();
		const res = this.map.get(param);
		return !!res ? res[0] : null;
	}
	/**
	* Retrieves all values for a  parameter.
	* @param param The parameter name.
	* @returns All values in a string array,
	* or `null` if the parameter not present.
	*/
	getAll(param) {
		this.init();
		return this.map.get(param) || null;
	}
	/**
	* Retrieves all the parameters for this body.
	* @returns The parameter names in a string array.
	*/
	keys() {
		this.init();
		return Array.from(this.map.keys());
	}
	/**
	* Appends a new value to existing values for a parameter.
	* @param param The parameter name.
	* @param value The new value to add.
	* @return A new body with the appended value.
	*/
	append(param, value) {
		return this.clone({
			param,
			value,
			op: "a"
		});
	}
	/**
	* Constructs a new body with appended values for the given parameter name.
	* @param params parameters and values
	* @return A new body with the new value.
	*/
	appendAll(params) {
		const updates = [];
		Object.keys(params).forEach((param) => {
			const value = params[param];
			if (Array.isArray(value)) value.forEach((_value) => {
				updates.push({
					param,
					value: _value,
					op: "a"
				});
			});
			else updates.push({
				param,
				value,
				op: "a"
			});
		});
		return this.clone(updates);
	}
	/**
	* Replaces the value for a parameter.
	* @param param The parameter name.
	* @param value The new value.
	* @return A new body with the new value.
	*/
	set(param, value) {
		return this.clone({
			param,
			value,
			op: "s"
		});
	}
	/**
	* Removes a given value or all values from a parameter.
	* @param param The parameter name.
	* @param value The value to remove, if provided.
	* @return A new body with the given value removed, or with all values
	* removed if no value is specified.
	*/
	delete(param, value) {
		return this.clone({
			param,
			value,
			op: "d"
		});
	}
	/**
	* Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
	* separated by `&`s.
	*/
	toString() {
		this.init();
		return this.keys().map((key) => {
			const eKey = this.encoder.encodeKey(key);
			return this.map.get(key).map((value) => eKey + "=" + this.encoder.encodeValue(value)).join("&");
		}).filter((param) => param !== "").join("&");
	}
	clone(update) {
		const clone = new HttpParams({ encoder: this.encoder });
		clone.cloneFrom = this.cloneFrom || this;
		clone.updates = (this.updates || []).concat(update);
		return clone;
	}
	init() {
		if (this.map === null) this.map = /* @__PURE__ */ new Map();
		if (this.cloneFrom !== null) {
			this.cloneFrom.init();
			for (const [key, values] of this.cloneFrom.map.entries()) this.map.set(key, values);
			this.updates.forEach((update) => {
				switch (update.op) {
					case "a":
					case "s":
						const base = update.op === "a" ? (this.map.get(update.param) || []).slice() : [];
						base.push(valueToString(update.value));
						this.map.set(update.param, base);
						break;
					case "d": if (update.value !== void 0) {
						const base = (this.map.get(update.param) || []).slice();
						const idx = base.indexOf(valueToString(update.value));
						if (idx !== -1) base.splice(idx, 1);
						if (base.length > 0) this.map.set(update.param, base);
						else this.map.delete(update.param);
					} else {
						this.map.delete(update.param);
						break;
					}
				}
			});
			this.cloneFrom = this.updates = null;
		}
	}
};
/**
* Http context stores arbitrary user defined values and ensures type safety without
* actually knowing the types. It is backed by a `Map` and guarantees that keys do not clash.
*
* This context is mutable and is shared between cloned requests unless explicitly specified.
*
* @usageNotes
*
* ### Usage Example
*
* ```ts
* // inside cache.interceptors.ts
* export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
*
* export class CacheInterceptor implements HttpInterceptor {
*
*   intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
*     if (req.context.get(IS_CACHE_ENABLED) === true) {
*       return ...;
*     }
*     return delegate.handle(req);
*   }
* }
*
* // inside a service
*
* this.httpClient.get('/api/weather', {
*   context: new HttpContext().set(IS_CACHE_ENABLED, true)
* }).subscribe(...);
* ```
*
* @see [Request and response metadata](guide/http/interceptors#request-and-response-metadata)
*
* @publicApi
*/
var HttpContext = class {
	map = /* @__PURE__ */ new Map();
	/**
	* Store a value in the context. If a value is already present it will be overwritten.
	*
	* @param token The reference to an instance of `HttpContextToken`.
	* @param value The value to store.
	*
	* @returns A reference to itself for easy chaining.
	*/
	set(token, value) {
		this.map.set(token, value);
		return this;
	}
	/**
	* Retrieve the value associated with the given token.
	*
	* @param token The reference to an instance of `HttpContextToken`.
	*
	* @returns The stored value or default if one is defined.
	*/
	get(token) {
		if (!this.map.has(token)) this.map.set(token, token.defaultValue());
		return this.map.get(token);
	}
	/**
	* Delete the value associated with the given token.
	*
	* @param token The reference to an instance of `HttpContextToken`.
	*
	* @returns A reference to itself for easy chaining.
	*/
	delete(token) {
		this.map.delete(token);
		return this;
	}
	/**
	* Checks for existence of a given token.
	*
	* @param token The reference to an instance of `HttpContextToken`.
	*
	* @returns True if the token exists, false otherwise.
	*/
	has(token) {
		return this.map.has(token);
	}
	/**
	* @returns a list of tokens currently stored in the context.
	*/
	keys() {
		return this.map.keys();
	}
};
/**
* Determine whether the given HTTP method may include a body.
*/
function mightHaveBody(method) {
	switch (method) {
		case "DELETE":
		case "GET":
		case "HEAD":
		case "OPTIONS":
		case "JSONP": return false;
		default: return true;
	}
}
/**
* Safely assert whether the given value is an ArrayBuffer.
*
* In some execution environments ArrayBuffer is not defined.
*/
function isArrayBuffer(value) {
	return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
}
/**
* Safely assert whether the given value is a Blob.
*
* In some execution environments Blob is not defined.
*/
function isBlob(value) {
	return typeof Blob !== "undefined" && value instanceof Blob;
}
/**
* Safely assert whether the given value is a FormData instance.
*
* In some execution environments FormData is not defined.
*/
function isFormData(value) {
	return typeof FormData !== "undefined" && value instanceof FormData;
}
/**
* Safely assert whether the given value is a URLSearchParams instance.
*
* In some execution environments URLSearchParams is not defined.
*/
function isUrlSearchParams(value) {
	return typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams;
}
/**
* `Content-Type` is an HTTP header used to indicate the media type
* (also known as MIME type) of the resource being sent to the client
* or received from the server.
*/
var CONTENT_TYPE_HEADER = "Content-Type";
/**
* The `Accept` header is an HTTP request header that indicates the media types
* (or content types) the client is willing to receive from the server.
*/
var ACCEPT_HEADER = "Accept";
/**
* `X-Request-URL` is a custom HTTP header used in older browser versions,
* including Firefox (< 32), Chrome (< 37), Safari (< 8), and Internet Explorer,
* to include the full URL of the request in cross-origin requests.
*/
var X_REQUEST_URL_HEADER = "X-Request-URL";
/**
* `text/plain` is a content type used to indicate that the content being
* sent is plain text with no special formatting or structured data
* like HTML, XML, or JSON.
*/
var TEXT_CONTENT_TYPE = "text/plain";
/**
* `application/json` is a content type used to indicate that the content
* being sent is in the JSON format.
*/
var JSON_CONTENT_TYPE = "application/json";
/**
* `application/json, text/plain, *\/*` is a content negotiation string often seen in the
* Accept header of HTTP requests. It indicates the types of content the client is willing
* to accept from the server, with a preference for `application/json` and `text/plain`,
* but also accepting any other type (*\/*).
*/
var ACCEPT_HEADER_VALUE = `${JSON_CONTENT_TYPE}, ${TEXT_CONTENT_TYPE}, */*`;
/**
* An outgoing HTTP request with an optional typed body.
*
* `HttpRequest` represents an outgoing request, including URL, method,
* headers, body, and other request configuration options. Instances should be
* assumed to be immutable. To modify a `HttpRequest`, the `clone`
* method should be used.
*
* @publicApi
*/
var HttpRequest = class HttpRequest {
	url;
	/**
	* The request body, or `null` if one isn't set.
	*
	* Bodies are not enforced to be immutable, as they can include a reference to any
	* user-defined data type. However, interceptors should take care to preserve
	* idempotence by treating them as such.
	*/
	body = null;
	/**
	* Outgoing headers for this request.
	*/
	headers;
	/**
	* Shared and mutable context that can be used by interceptors
	*/
	context;
	/**
	* Whether this request should be made in a way that exposes progress events.
	*
	* Progress events are expensive (change detection runs on each event) and so
	* they should only be requested if the consumer intends to monitor them.
	*
	* Note: The `FetchBackend` doesn't support progress report on uploads.
	*/
	reportProgress = false;
	/**
	* Whether this request should be sent with outgoing credentials (cookies).
	*/
	withCredentials = false;
	/**
	*  The credentials mode of the request, which determines how cookies and HTTP authentication are handled.
	*  This can affect whether cookies are sent with the request, and how authentication is handled.
	*/
	credentials;
	/**
	* When using the fetch implementation and set to `true`, the browser will not abort the associated request if the page that initiated it is unloaded before the request is complete.
	*/
	keepalive = false;
	/**
	* Controls how the request will interact with the browser's HTTP cache.
	* This affects whether a response is retrieved from the cache, how it is stored, or if it bypasses the cache altogether.
	*/
	cache;
	/**
	* Indicates the relative priority of the request. This may be used by the browser to decide the order in which requests are dispatched and resources fetched.
	*/
	priority;
	/**
	* The mode of the request, which determines how the request will interact with the browser's security model.
	* This can affect things like CORS (Cross-Origin Resource Sharing) and same-origin policies.
	*/
	mode;
	/**
	* The redirect mode of the request, which determines how redirects are handled.
	* This can affect whether the request follows redirects automatically, or if it fails when a redirect occurs.
	*/
	redirect;
	/**
	* The referrer of the request, which can be used to indicate the origin of the request.
	* This is useful for security and analytics purposes.
	* Value is a same-origin URL, "about:client", or the empty string, to set request's referrer.
	*/
	referrer;
	/**
	* The integrity metadata of the request, which can be used to ensure the request is made with the expected content.
	* A cryptographic hash of the resource to be fetched by request
	*/
	integrity;
	/**
	* The expected response type of the server.
	*
	* This is used to parse the response appropriately before returning it to
	* the requestee.
	*/
	responseType = "json";
	/**
	* The outgoing HTTP request method.
	*/
	method;
	/**
	* Outgoing URL parameters.
	*
	* To pass a string representation of HTTP parameters in the URL-query-string format,
	* the `HttpParamsOptions`' `fromString` may be used. For example:
	*
	* ```ts
	* new HttpParams({fromString: 'angular=awesome'})
	* ```
	*/
	params;
	/**
	* The outgoing URL with all URL parameters set.
	*/
	urlWithParams;
	/**
	* The HttpTransferCache option for the request
	*/
	transferCache;
	/**
	* The timeout for the backend HTTP request in ms.
	*/
	timeout;
	constructor(method, url, third, fourth) {
		this.url = url;
		this.method = method.toUpperCase();
		let options;
		if (mightHaveBody(this.method) || !!fourth) {
			this.body = third !== void 0 ? third : null;
			options = fourth;
		} else options = third;
		if (options) {
			this.reportProgress = !!options.reportProgress;
			this.withCredentials = !!options.withCredentials;
			this.keepalive = !!options.keepalive;
			if (!!options.responseType) this.responseType = options.responseType;
			if (options.headers) this.headers = options.headers;
			if (options.context) this.context = options.context;
			if (options.params) this.params = options.params;
			if (options.priority) this.priority = options.priority;
			if (options.cache) this.cache = options.cache;
			if (options.credentials) this.credentials = options.credentials;
			if (typeof options.timeout === "number") {
				if (options.timeout < 1 || !Number.isInteger(options.timeout)) throw new RuntimeError(2822, ngDevMode ? "`timeout` must be a positive integer value" : "");
				this.timeout = options.timeout;
			}
			if (options.mode) this.mode = options.mode;
			if (options.redirect) this.redirect = options.redirect;
			if (options.integrity) this.integrity = options.integrity;
			if (options.referrer !== void 0) this.referrer = options.referrer;
			this.transferCache = options.transferCache;
		}
		this.headers ??= new HttpHeaders();
		this.context ??= new HttpContext();
		if (!this.params) {
			this.params = new HttpParams();
			this.urlWithParams = url;
		} else {
			const params = this.params.toString();
			if (params.length === 0) this.urlWithParams = url;
			else {
				const qIdx = url.indexOf("?");
				const sep = qIdx === -1 ? "?" : qIdx < url.length - 1 ? "&" : "";
				this.urlWithParams = url + sep + params;
			}
		}
	}
	/**
	* Transform the free-form body into a serialized format suitable for
	* transmission to the server.
	*/
	serializeBody() {
		if (this.body === null) return null;
		if (typeof this.body === "string" || isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body)) return this.body;
		if (this.body instanceof HttpParams) return this.body.toString();
		if (typeof this.body === "object" || typeof this.body === "boolean" || Array.isArray(this.body)) return JSON.stringify(this.body);
		return this.body.toString();
	}
	/**
	* Examine the body and attempt to infer an appropriate MIME type
	* for it.
	*
	* If no such type can be inferred, this method will return `null`.
	*/
	detectContentTypeHeader() {
		if (this.body === null) return null;
		if (isFormData(this.body)) return null;
		if (isBlob(this.body)) return this.body.type || null;
		if (isArrayBuffer(this.body)) return null;
		if (typeof this.body === "string") return TEXT_CONTENT_TYPE;
		if (this.body instanceof HttpParams) return "application/x-www-form-urlencoded;charset=UTF-8";
		if (typeof this.body === "object" || typeof this.body === "number" || typeof this.body === "boolean") return JSON_CONTENT_TYPE;
		return null;
	}
	clone(update = {}) {
		const method = update.method || this.method;
		const url = update.url || this.url;
		const responseType = update.responseType || this.responseType;
		const keepalive = update.keepalive ?? this.keepalive;
		const priority = update.priority || this.priority;
		const cache = update.cache || this.cache;
		const mode = update.mode || this.mode;
		const redirect = update.redirect || this.redirect;
		const credentials = update.credentials || this.credentials;
		const referrer = update.referrer ?? this.referrer;
		const integrity = update.integrity || this.integrity;
		const transferCache = update.transferCache ?? this.transferCache;
		const timeout = update.timeout ?? this.timeout;
		const body = update.body !== void 0 ? update.body : this.body;
		const withCredentials = update.withCredentials ?? this.withCredentials;
		const reportProgress = update.reportProgress ?? this.reportProgress;
		let headers = update.headers || this.headers;
		let params = update.params || this.params;
		const context = update.context ?? this.context;
		if (update.setHeaders !== void 0) headers = Object.keys(update.setHeaders).reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
		if (update.setParams) params = Object.keys(update.setParams).reduce((params, param) => params.set(param, update.setParams[param]), params);
		return new HttpRequest(method, url, body, {
			params,
			headers,
			context,
			reportProgress,
			responseType,
			withCredentials,
			transferCache,
			keepalive,
			cache,
			priority,
			timeout,
			mode,
			redirect,
			credentials,
			referrer,
			integrity
		});
	}
};
/**
* Type enumeration for the different kinds of `HttpEvent`.
*
* @see [Receiving raw progress event](guide/http/making-requests#receiving-raw-progress-events)
*
* @publicApi
*/
var HttpEventType;
(function(HttpEventType) {
	/**
	* The request was sent out over the wire.
	*/
	HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
	/**
	* An upload progress event was received.
	*
	* Note: The `FetchBackend` doesn't support progress report on uploads.
	*/
	HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
	/**
	* The response status code and headers were received.
	*/
	HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
	/**
	* A download progress event was received.
	*/
	HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
	/**
	* The full response including the body was received.
	*/
	HttpEventType[HttpEventType["Response"] = 4] = "Response";
	/**
	* A custom event from an interceptor or a backend.
	*/
	HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
* Base class for both `HttpResponse` and `HttpHeaderResponse`.
*
* @publicApi
*/
var HttpResponseBase = class {
	/**
	* All response headers.
	*/
	headers;
	/**
	* Response status code.
	*/
	status;
	/**
	* Textual description of response status code, defaults to OK.
	*
	* Do not depend on this.
	*/
	statusText;
	/**
	* URL of the resource retrieved, or null if not available.
	*/
	url;
	/**
	* Whether the status code falls in the 2xx range.
	*/
	ok;
	/**
	* Type of the response, narrowed to either the full response or the header.
	*/
	type;
	/**
	* Indicates whether the HTTP response was redirected during the request.
	* This property is only available when using the Fetch API using `withFetch()`
	* When using the default XHR Request this property will be `undefined`
	*/
	redirected;
	/**
	* Super-constructor for all responses.
	*
	* The single parameter accepted is an initialization hash. Any properties
	* of the response passed there will override the default values.
	*/
	constructor(init, defaultStatus = 200, defaultStatusText = "OK") {
		this.headers = init.headers || new HttpHeaders();
		this.status = init.status !== void 0 ? init.status : defaultStatus;
		this.statusText = init.statusText || defaultStatusText;
		this.url = init.url || null;
		this.redirected = init.redirected;
		this.ok = this.status >= 200 && this.status < 300;
	}
};
/**
* A partial HTTP response which only includes the status and header data,
* but no response body.
*
* `HttpHeaderResponse` is a `HttpEvent` available on the response
* event stream, only when progress events are requested.
*
* @see [Receiving raw progress events](guide/http/making-requests#receiving-raw-progress-events)
*
* @publicApi
*/
var HttpHeaderResponse = class HttpHeaderResponse extends HttpResponseBase {
	/**
	* Create a new `HttpHeaderResponse` with the given parameters.
	*/
	constructor(init = {}) {
		super(init);
	}
	type = HttpEventType.ResponseHeader;
	/**
	* Copy this `HttpHeaderResponse`, overriding its contents with the
	* given parameter hash.
	*/
	clone(update = {}) {
		return new HttpHeaderResponse({
			headers: update.headers || this.headers,
			status: update.status !== void 0 ? update.status : this.status,
			statusText: update.statusText || this.statusText,
			url: update.url || this.url || void 0
		});
	}
};
/**
* A full HTTP response, including a typed response body (which may be `null`
* if one was not returned).
*
* `HttpResponse` is a `HttpEvent` available on the response event
* stream.
*
* @see [Interacting with the server response events](guide/http/making-requests#interacting-with-the-server-response-events)
*
* @publicApi
*/
var HttpResponse = class HttpResponse extends HttpResponseBase {
	/**
	* The response body, or `null` if one was not returned.
	*/
	body;
	/**
	* Construct a new `HttpResponse`.
	*/
	constructor(init = {}) {
		super(init);
		this.body = init.body !== void 0 ? init.body : null;
	}
	type = HttpEventType.Response;
	clone(update = {}) {
		return new HttpResponse({
			body: update.body !== void 0 ? update.body : this.body,
			headers: update.headers || this.headers,
			status: update.status !== void 0 ? update.status : this.status,
			statusText: update.statusText || this.statusText,
			url: update.url || this.url || void 0,
			redirected: update.redirected ?? this.redirected
		});
	}
};
/**
* A response that represents an error or failure, either from a
* non-successful HTTP status, an error while executing the request,
* or some other failure which occurred during the parsing of the response.
*
* Any error returned on the `Observable` response stream will be
* wrapped in an `HttpErrorResponse` to provide additional context about
* the state of the HTTP layer when the error occurred. The error property
* will contain either a wrapped Error object or the error response returned
* from the server.
*
* @see [Handling request failure](guide/http/making-requests#handling-request-failure)
*
* @publicApi
*/
var HttpErrorResponse = class extends HttpResponseBase {
	name = "HttpErrorResponse";
	message;
	error;
	/**
	* Errors are never okay, even when the status code is in the 2xx success range.
	*/
	ok = false;
	constructor(init) {
		super(init, 0, "Unknown Error");
		if (this.status >= 200 && this.status < 300) this.message = `Http failure during parsing for ${init.url || "(unknown url)"}`;
		else this.message = `Http failure response for ${init.url || "(unknown url)"}: ${init.status} ${init.statusText}`;
		this.error = init.error || null;
	}
};
/**
* We use these constant to prevent pulling the whole HttpStatusCode enum
* Those are the only ones referenced directly by the framework
*/
var HTTP_STATUS_CODE_OK = 200;
var HTTP_STATUS_CODE_NO_CONTENT = 204;
/**
* Http status codes.
* As per https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
* @publicApi
*/
var HttpStatusCode;
(function(HttpStatusCode) {
	HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
	HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
	HttpStatusCode[HttpStatusCode["Processing"] = 102] = "Processing";
	HttpStatusCode[HttpStatusCode["EarlyHints"] = 103] = "EarlyHints";
	HttpStatusCode[HttpStatusCode["Ok"] = 200] = "Ok";
	HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
	HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
	HttpStatusCode[HttpStatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
	HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
	HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
	HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
	HttpStatusCode[HttpStatusCode["MultiStatus"] = 207] = "MultiStatus";
	HttpStatusCode[HttpStatusCode["AlreadyReported"] = 208] = "AlreadyReported";
	HttpStatusCode[HttpStatusCode["ImUsed"] = 226] = "ImUsed";
	HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
	HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
	HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
	HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
	HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
	HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
	HttpStatusCode[HttpStatusCode["Unused"] = 306] = "Unused";
	HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
	HttpStatusCode[HttpStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
	HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
	HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
	HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
	HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
	HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
	HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
	HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
	HttpStatusCode[HttpStatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
	HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
	HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
	HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
	HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
	HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
	HttpStatusCode[HttpStatusCode["PayloadTooLarge"] = 413] = "PayloadTooLarge";
	HttpStatusCode[HttpStatusCode["UriTooLong"] = 414] = "UriTooLong";
	HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
	HttpStatusCode[HttpStatusCode["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
	HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
	HttpStatusCode[HttpStatusCode["ImATeapot"] = 418] = "ImATeapot";
	HttpStatusCode[HttpStatusCode["MisdirectedRequest"] = 421] = "MisdirectedRequest";
	HttpStatusCode[HttpStatusCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
	HttpStatusCode[HttpStatusCode["Locked"] = 423] = "Locked";
	HttpStatusCode[HttpStatusCode["FailedDependency"] = 424] = "FailedDependency";
	HttpStatusCode[HttpStatusCode["TooEarly"] = 425] = "TooEarly";
	HttpStatusCode[HttpStatusCode["UpgradeRequired"] = 426] = "UpgradeRequired";
	HttpStatusCode[HttpStatusCode["PreconditionRequired"] = 428] = "PreconditionRequired";
	HttpStatusCode[HttpStatusCode["TooManyRequests"] = 429] = "TooManyRequests";
	HttpStatusCode[HttpStatusCode["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
	HttpStatusCode[HttpStatusCode["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
	HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
	HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
	HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
	HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
	HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
	HttpStatusCode[HttpStatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
	HttpStatusCode[HttpStatusCode["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
	HttpStatusCode[HttpStatusCode["InsufficientStorage"] = 507] = "InsufficientStorage";
	HttpStatusCode[HttpStatusCode["LoopDetected"] = 508] = "LoopDetected";
	HttpStatusCode[HttpStatusCode["NotExtended"] = 510] = "NotExtended";
	HttpStatusCode[HttpStatusCode["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(HttpStatusCode || (HttpStatusCode = {}));
/**
* Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
* the given `body`. This function clones the object and adds the body.
*
* Note that the `responseType` *options* value is a String that identifies the
* single data type of the response.
* A single overload version of the method handles each response type.
* The value of `responseType` cannot be a union, as the combined signature could imply.
*
*/
function addBody(options, body) {
	return {
		body,
		headers: options.headers,
		context: options.context,
		observe: options.observe,
		params: options.params,
		reportProgress: options.reportProgress,
		responseType: options.responseType,
		withCredentials: options.withCredentials,
		credentials: options.credentials,
		transferCache: options.transferCache,
		timeout: options.timeout,
		keepalive: options.keepalive,
		priority: options.priority,
		cache: options.cache,
		mode: options.mode,
		redirect: options.redirect,
		integrity: options.integrity,
		referrer: options.referrer
	};
}
/**
* Performs HTTP requests.
* This service is available as an injectable class, with methods to perform HTTP requests.
* Each request method has multiple signatures, and the return type varies based on
* the signature that is called (mainly the values of `observe` and `responseType`).
*
* Note that the `responseType` *options* value is a String that identifies the
* single data type of the response.
* A single overload version of the method handles each response type.
* The value of `responseType` cannot be a union, as the combined signature could imply.
*
* @usageNotes
*
* ### HTTP Request Example
*
* ```ts
*  // GET heroes whose name contains search term
* searchHeroes(term: string): observable<Hero[]>{
*
*  const params = new HttpParams({fromString: 'name=term'});
*    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
* }
* ```
*
* Alternatively, the parameter string can be used without invoking HttpParams
* by directly joining to the URL.
* ```ts
* this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
* ```
*
*
* ### JSONP Example
* ```ts
* requestJsonp(url, callback = 'callback') {
*  return this.httpClient.jsonp(this.heroesURL, callback);
* }
* ```
*
* ### PATCH Example
* ```ts
* // PATCH one of the heroes' name
* patchHero (id: number, heroName: string): Observable<{}> {
* const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
*  return this.httpClient.patch(url, {name: heroName}, httpOptions)
*    .pipe(catchError(this.handleError('patchHero')));
* }
* ```
*
* @see [HTTP Guide](guide/http)
* @see [HTTP Request](api/common/http/HttpRequest)
*
* @publicApi
*/
var HttpClient = class HttpClient {
	handler;
	constructor(handler) {
		this.handler = handler;
	}
	/**
	* Constructs an observable for a generic HTTP request that, when subscribed,
	* fires the request through the chain of registered interceptors and on to the
	* server.
	*
	* You can pass an `HttpRequest` directly as the only parameter. In this case,
	* the call returns an observable of the raw `HttpEvent` stream.
	*
	* Alternatively you can pass an HTTP method as the first parameter,
	* a URL string as the second, and an options hash containing the request body as the third.
	* See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
	* type of returned observable.
	*   * The `responseType` value determines how a successful response body is parsed.
	*   * If `responseType` is the default `json`, you can pass a type interface for the resulting
	* object as a type parameter to the call.
	*
	* The `observe` value determines the return type, according to what you are interested in
	* observing.
	*   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
	* progress events by default.
	*   * An `observe` value of response returns an observable of `HttpResponse<T>`,
	* where the `T` parameter depends on the `responseType` and any optionally provided type
	* parameter.
	*   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
	*
	*/
	request(first, url, options = {}) {
		let req;
		if (first instanceof HttpRequest) req = first;
		else {
			let headers = void 0;
			if (options.headers instanceof HttpHeaders) headers = options.headers;
			else headers = new HttpHeaders(options.headers);
			let params = void 0;
			if (!!options.params) {
				if (options.params instanceof HttpParams) params = options.params;
				else params = new HttpParams({ fromObject: options.params });
			}
			req = new HttpRequest(first, url, options.body !== void 0 ? options.body : null, {
				headers,
				context: options.context,
				params,
				reportProgress: options.reportProgress,
				responseType: options.responseType || "json",
				withCredentials: options.withCredentials,
				transferCache: options.transferCache,
				keepalive: options.keepalive,
				priority: options.priority,
				cache: options.cache,
				mode: options.mode,
				redirect: options.redirect,
				credentials: options.credentials,
				referrer: options.referrer,
				integrity: options.integrity,
				timeout: options.timeout
			});
		}
		const events$ = of(req).pipe(concatMap((req) => this.handler.handle(req)));
		if (first instanceof HttpRequest || options.observe === "events") return events$;
		const res$ = events$.pipe(filter((event) => event instanceof HttpResponse));
		switch (options.observe || "body") {
			case "body": switch (req.responseType) {
				case "arraybuffer": return res$.pipe(map((res) => {
					if (res.body !== null && !(res.body instanceof ArrayBuffer)) throw new RuntimeError(2806, ngDevMode && "Response is not an ArrayBuffer.");
					return res.body;
				}));
				case "blob": return res$.pipe(map((res) => {
					if (res.body !== null && !(res.body instanceof Blob)) throw new RuntimeError(2807, ngDevMode && "Response is not a Blob.");
					return res.body;
				}));
				case "text": return res$.pipe(map((res) => {
					if (res.body !== null && typeof res.body !== "string") throw new RuntimeError(2808, ngDevMode && "Response is not a string.");
					return res.body;
				}));
				default: return res$.pipe(map((res) => res.body));
			}
			case "response": return res$;
			default: throw new RuntimeError(2809, ngDevMode && `Unreachable: unhandled observe type ${options.observe}}`);
		}
	}
	/**
	* Constructs an observable that, when subscribed, causes the configured
	* `DELETE` request to execute on the server. See the individual overloads for
	* details on the return type.
	*
	* @param url     The endpoint URL.
	* @param options The HTTP options to send with the request.
	*
	*/
	delete(url, options = {}) {
		return this.request("DELETE", url, options);
	}
	/**
	* Constructs an observable that, when subscribed, causes the configured
	* `GET` request to execute on the server. See the individual overloads for
	* details on the return type.
	*/
	get(url, options = {}) {
		return this.request("GET", url, options);
	}
	/**
	* Constructs an observable that, when subscribed, causes the configured
	* `HEAD` request to execute on the server. The `HEAD` method returns
	* meta information about the resource without transferring the
	* resource itself. See the individual overloads for
	* details on the return type.
	*/
	head(url, options = {}) {
		return this.request("HEAD", url, options);
	}
	/**
	* Constructs an `Observable` that, when subscribed, causes a request with the special method
	* `JSONP` to be dispatched via the interceptor pipeline.
	* The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
	* API endpoints that don't support newer,
	* and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
	* JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
	* requests even if the API endpoint is not located on the same domain (origin) as the client-side
	* application making the request.
	* The endpoint API must support JSONP callback for JSONP requests to work.
	* The resource API returns the JSON response wrapped in a callback function.
	* You can pass the callback function name as one of the query parameters.
	* Note that JSONP requests can only be used with `GET` requests.
	*
	* @param url The resource URL.
	* @param callbackParam The callback function name.
	*
	*/
	jsonp(url, callbackParam) {
		return this.request("JSONP", url, {
			params: new HttpParams().append(callbackParam, "JSONP_CALLBACK"),
			observe: "body",
			responseType: "json"
		});
	}
	/**
	* Constructs an `Observable` that, when subscribed, causes the configured
	* `OPTIONS` request to execute on the server. This method allows the client
	* to determine the supported HTTP methods and other capabilities of an endpoint,
	* without implying a resource action. See the individual overloads for
	* details on the return type.
	*/
	options(url, options = {}) {
		return this.request("OPTIONS", url, options);
	}
	/**
	* Constructs an observable that, when subscribed, causes the configured
	* `PATCH` request to execute on the server. See the individual overloads for
	* details on the return type.
	*/
	patch(url, body, options = {}) {
		return this.request("PATCH", url, addBody(options, body));
	}
	/**
	* Constructs an observable that, when subscribed, causes the configured
	* `POST` request to execute on the server. The server responds with the location of
	* the replaced resource. See the individual overloads for
	* details on the return type.
	*/
	post(url, body, options = {}) {
		return this.request("POST", url, addBody(options, body));
	}
	/**
	* Constructs an observable that, when subscribed, causes the configured
	* `PUT` request to execute on the server. The `PUT` method replaces an existing resource
	* with a new set of values.
	* See the individual overloads for details on the return type.
	*/
	put(url, body, options = {}) {
		return this.request("PUT", url, addBody(options, body));
	}
	static ɵfac = function HttpClient_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpClient)(ɵɵinject(HttpHandler));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: HttpClient,
		factory: HttpClient.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClient, [{ type: Injectable }], () => [{ type: HttpHandler }], null);
})();
var XSSI_PREFIX$1 = /^\)\]\}',?\n/;
/**
* Determine an appropriate URL for the response, by checking either
* response url or the X-Request-URL header.
*/
function getResponseUrl$1(response) {
	if (response.url) return response.url;
	const xRequestUrl = X_REQUEST_URL_HEADER.toLocaleLowerCase();
	return response.headers.get(xRequestUrl);
}
/**
* An internal injection token to reference `FetchBackend` implementation
* in a tree-shakable way.
*/
var FETCH_BACKEND = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "FETCH_BACKEND" : "");
/**
* Uses `fetch` to send requests to a backend server.
*
* This `FetchBackend` requires the support of the
* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) which is available on all
* supported browsers and on Node.js v18 or later.
*
* @see {@link HttpHandler}
*
* @publicApi
*/
var FetchBackend = class FetchBackend {
	fetchImpl = inject(FetchFactory, { optional: true })?.fetch ?? ((...args) => globalThis.fetch(...args));
	ngZone = inject(NgZone);
	destroyRef = inject(DestroyRef);
	handle(request) {
		return new Observable((observer) => {
			const aborter = new AbortController();
			this.doRequest(request, aborter.signal, observer).then(noop, (error) => observer.error(new HttpErrorResponse({ error })));
			let timeoutId;
			if (request.timeout) timeoutId = this.ngZone.runOutsideAngular(() => setTimeout(() => {
				if (!aborter.signal.aborted) aborter.abort(new DOMException("signal timed out", "TimeoutError"));
			}, request.timeout));
			return () => {
				if (timeoutId !== void 0) clearTimeout(timeoutId);
				aborter.abort();
			};
		});
	}
	async doRequest(request, signal, observer) {
		const init = this.createRequestInit(request);
		let response;
		try {
			const fetchPromise = this.ngZone.runOutsideAngular(() => this.fetchImpl(request.urlWithParams, {
				signal,
				...init
			}));
			silenceSuperfluousUnhandledPromiseRejection(fetchPromise);
			observer.next({ type: HttpEventType.Sent });
			response = await fetchPromise;
		} catch (error) {
			observer.error(new HttpErrorResponse({
				error,
				status: error.status ?? 0,
				statusText: error.statusText,
				url: request.urlWithParams,
				headers: error.headers
			}));
			return;
		}
		const headers = new HttpHeaders(response.headers);
		const statusText = response.statusText;
		const url = getResponseUrl$1(response) ?? request.urlWithParams;
		let status = response.status;
		let body = null;
		if (request.reportProgress) observer.next(new HttpHeaderResponse({
			headers,
			status,
			statusText,
			url
		}));
		if (response.body) {
			const contentLength = response.headers.get("content-length");
			const chunks = [];
			const reader = response.body.getReader();
			let receivedLength = 0;
			let decoder;
			let partialText;
			const reqZone = typeof Zone !== "undefined" && Zone.current;
			let canceled = false;
			await this.ngZone.runOutsideAngular(async () => {
				while (true) {
					if (this.destroyRef.destroyed) {
						await reader.cancel();
						canceled = true;
						break;
					}
					const { done, value } = await reader.read();
					if (done) break;
					chunks.push(value);
					receivedLength += value.length;
					if (request.reportProgress) {
						partialText = request.responseType === "text" ? (partialText ?? "") + (decoder ??= new TextDecoder()).decode(value, { stream: true }) : void 0;
						const reportProgress = () => observer.next({
							type: HttpEventType.DownloadProgress,
							total: contentLength ? +contentLength : void 0,
							loaded: receivedLength,
							partialText
						});
						reqZone ? reqZone.run(reportProgress) : reportProgress();
					}
				}
			});
			if (canceled) {
				observer.complete();
				return;
			}
			const chunksAll = this.concatChunks(chunks, receivedLength);
			try {
				const contentType = response.headers.get(CONTENT_TYPE_HEADER) ?? "";
				body = this.parseBody(request, chunksAll, contentType, status);
			} catch (error) {
				observer.error(new HttpErrorResponse({
					error,
					headers: new HttpHeaders(response.headers),
					status: response.status,
					statusText: response.statusText,
					url: getResponseUrl$1(response) ?? request.urlWithParams
				}));
				return;
			}
		}
		if (status === 0) status = body ? HTTP_STATUS_CODE_OK : 0;
		const ok = status >= 200 && status < 300;
		const redirected = response.redirected;
		if (ok) {
			observer.next(new HttpResponse({
				body,
				headers,
				status,
				statusText,
				url,
				redirected
			}));
			observer.complete();
		} else observer.error(new HttpErrorResponse({
			error: body,
			headers,
			status,
			statusText,
			url,
			redirected
		}));
	}
	parseBody(request, binContent, contentType, status) {
		switch (request.responseType) {
			case "json":
				const text = new TextDecoder().decode(binContent).replace(XSSI_PREFIX$1, "");
				if (text === "") return null;
				try {
					return JSON.parse(text);
				} catch (e) {
					if (status < 200 || status >= 300) return text;
					throw e;
				}
			case "text": return new TextDecoder().decode(binContent);
			case "blob": return new Blob([binContent], { type: contentType });
			case "arraybuffer": return binContent.buffer;
		}
	}
	createRequestInit(req) {
		const headers = {};
		let credentials;
		credentials = req.credentials;
		if (req.withCredentials) {
			(typeof ngDevMode === "undefined" || ngDevMode) && warningOptionsMessage(req);
			credentials = "include";
		}
		req.headers.forEach((name, values) => headers[name] = values.join(","));
		if (!req.headers.has(ACCEPT_HEADER)) headers[ACCEPT_HEADER] = ACCEPT_HEADER_VALUE;
		if (!req.headers.has(CONTENT_TYPE_HEADER)) {
			const detectedType = req.detectContentTypeHeader();
			if (detectedType !== null) headers[CONTENT_TYPE_HEADER] = detectedType;
		}
		return {
			body: req.serializeBody(),
			method: req.method,
			headers,
			credentials,
			keepalive: req.keepalive,
			cache: req.cache,
			priority: req.priority,
			mode: req.mode,
			redirect: req.redirect,
			referrer: req.referrer,
			integrity: req.integrity
		};
	}
	concatChunks(chunks, totalLength) {
		const chunksAll = new Uint8Array(totalLength);
		let position = 0;
		for (const chunk of chunks) {
			chunksAll.set(chunk, position);
			position += chunk.length;
		}
		return chunksAll;
	}
	static ɵfac = function FetchBackend_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FetchBackend)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: FetchBackend,
		factory: FetchBackend.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FetchBackend, [{ type: Injectable }], null, null);
})();
/**
* Abstract class to provide a mocked implementation of `fetch()`
*/
var FetchFactory = class {};
function noop() {}
function warningOptionsMessage(req) {
	if (req.credentials && req.withCredentials) console.warn(formatRuntimeError(2819, `Angular detected that a \`HttpClient\` request has both \`withCredentials: true\` and \`credentials: '${req.credentials}'\` options. The \`withCredentials\` option is overriding the explicit \`credentials\` setting to 'include'. Consider removing \`withCredentials\` and using \`credentials: '${req.credentials}'\` directly for clarity.`));
}
/**
* Zone.js treats a rejected promise that has not yet been awaited
* as an unhandled error. This function adds a noop `.then` to make
* sure that Zone.js doesn't throw an error if the Promise is rejected
* synchronously.
*/
function silenceSuperfluousUnhandledPromiseRejection(promise) {
	promise.then(noop, noop);
}
function interceptorChainEndFn(req, finalHandlerFn) {
	return finalHandlerFn(req);
}
/**
* Constructs a `ChainedInterceptorFn` which adapts a legacy `HttpInterceptor` to the
* `ChainedInterceptorFn` interface.
*/
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
	return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, { handle: (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn) });
}
/**
* Constructs a `ChainedInterceptorFn` which wraps and invokes a functional interceptor in the given
* injector.
*/
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
	return (initialRequest, finalHandlerFn) => runInInjectionContext(injector, () => interceptorFn(initialRequest, (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)));
}
/**
* A multi-provider token that represents the array of registered
* `HttpInterceptor` objects.
*
* @see [HTTP Guide](guide/http/interceptors)
*
* @publicApi
*/
var HTTP_INTERCEPTORS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTORS" : "");
/**
* A multi-provided token of `HttpInterceptorFn`s.
*/
var HTTP_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTOR_FNS" : "");
/**
* A multi-provided token of `HttpInterceptorFn`s that are only set in root.
*/
var HTTP_ROOT_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_ROOT_INTERCEPTOR_FNS" : "");
var REQUESTS_CONTRIBUTE_TO_STABILITY = new InjectionToken(ngDevMode ? "REQUESTS_CONTRIBUTE_TO_STABILITY" : "", {
	providedIn: "root",
	factory: () => true
});
/**
* Creates an `HttpInterceptorFn` which lazily initializes an interceptor chain from the legacy
* class-based interceptors and runs the request through it.
*/
function legacyInterceptorFnFactory() {
	let chain = null;
	return (req, handler) => {
		if (chain === null) chain = (inject(HTTP_INTERCEPTORS, { optional: true }) ?? []).reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
		const pendingTasks = inject(PendingTasks);
		if (inject(REQUESTS_CONTRIBUTE_TO_STABILITY)) {
			const removeTask = pendingTasks.add();
			return chain(req, handler).pipe(finalize(removeTask));
		} else return chain(req, handler);
	};
}
var HttpInterceptorHandler = class HttpInterceptorHandler extends HttpHandler {
	backend;
	injector;
	chain = null;
	pendingTasks = inject(PendingTasks);
	contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
	constructor(backend, injector) {
		super();
		this.backend = backend;
		this.injector = injector;
		if ((typeof ngDevMode === "undefined" || ngDevMode) && true) this.backend.isTestingBackend;
	}
	handle(initialRequest) {
		if (this.chain === null) {
			const parentHandler = this.injector.get(HttpHandler, null, { skipSelf: true });
			const isDelegating = parentHandler !== null && this.backend === parentHandler;
			const rootInterceptorFns = this.injector.get(HTTP_ROOT_INTERCEPTOR_FNS, [], isDelegating ? { self: true } : void 0);
			const dedupedInterceptorFns = Array.from(/* @__PURE__ */ new Set([...this.injector.get(HTTP_INTERCEPTOR_FNS), ...rootInterceptorFns]));
			this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
		}
		if (this.contributeToStability) {
			const removeTask = this.pendingTasks.add();
			return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest)).pipe(finalize(removeTask));
		} else return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest));
	}
	static ɵfac = function HttpInterceptorHandler_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpInterceptorHandler)(ɵɵinject(HttpBackend), ɵɵinject(EnvironmentInjector));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: HttpInterceptorHandler,
		factory: HttpInterceptorHandler.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpInterceptorHandler, [{ type: Injectable }], () => [{ type: HttpBackend }, { type: EnvironmentInjector }], null);
})();
var nextRequestId = 0;
/**
* When a pending <script> is unsubscribed we'll move it to this document, so it won't be
* executed.
*/
var foreignDocument;
var JSONP_ERR_NO_CALLBACK = "JSONP injected script did not invoke callback.";
var JSONP_ERR_WRONG_METHOD = "JSONP requests must use JSONP request method.";
var JSONP_ERR_WRONG_RESPONSE_TYPE = "JSONP requests must use Json response type.";
var JSONP_ERR_HEADERS_NOT_SUPPORTED = "JSONP requests do not support headers.";
var JSONP_ERR_UNSAFE_URL = "JSONP requests only support absolute URLs with HTTP(S) protocols.";
/**
* DI token/abstract type representing a map of JSONP callbacks.
*
* In the browser, this should always be the `window` object.
*
*
*/
var JsonpCallbackContext = class {};
/**
* Factory function that determines where to store JSONP callbacks.
*
* Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
* in test environments. In that case, callbacks are stored on an anonymous object instead.
*
*
*/
function jsonpCallbackContext() {
	if (typeof window === "object") return window;
	return {};
}
/**
* Processes an `HttpRequest` with the JSONP method,
* by performing JSONP style requests.
* @see {@link HttpHandler}
* @see {@link HttpXhrBackend}
*
* @publicApi
*/
var JsonpClientBackend = class JsonpClientBackend {
	callbackMap;
	document;
	/**
	* A resolved promise that can be used to schedule microtasks in the event handlers.
	*/
	resolvedPromise = Promise.resolve();
	constructor(callbackMap, document) {
		this.callbackMap = callbackMap;
		this.document = document;
	}
	/**
	* Get the name of the next callback method, by incrementing the global `nextRequestId`.
	*/
	nextCallback() {
		return `ng_jsonp_callback_${nextRequestId++}`;
	}
	/**
	* Processes a JSONP request and returns an event stream of the results.
	* @param req The request object.
	* @returns An observable of the response events.
	*
	*/
	handle(req) {
		if (req.method !== "JSONP") throw new RuntimeError(2810, ngDevMode && JSONP_ERR_WRONG_METHOD);
		else if (req.responseType !== "json") throw new RuntimeError(2811, ngDevMode && JSONP_ERR_WRONG_RESPONSE_TYPE);
		if (req.headers.keys().length > 0) throw new RuntimeError(2812, ngDevMode && JSONP_ERR_HEADERS_NOT_SUPPORTED);
		if (!this.isAllowedJsonpUrl(req.urlWithParams)) throw new RuntimeError(2826, ngDevMode && JSONP_ERR_UNSAFE_URL);
		return new Observable((observer) => {
			const callback = this.nextCallback();
			const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
			const node = this.document.createElement("script");
			node.src = url;
			let body = null;
			let finished = false;
			this.callbackMap[callback] = (data) => {
				delete this.callbackMap[callback];
				body = data;
				finished = true;
			};
			const cleanup = () => {
				node.removeEventListener("load", onLoad);
				node.removeEventListener("error", onError);
				node.remove();
				delete this.callbackMap[callback];
			};
			const onLoad = () => {
				this.resolvedPromise.then(() => {
					cleanup();
					if (!finished) {
						observer.error(new HttpErrorResponse({
							url,
							status: 0,
							statusText: "JSONP Error",
							error: /* @__PURE__ */ new Error(JSONP_ERR_NO_CALLBACK)
						}));
						return;
					}
					observer.next(new HttpResponse({
						body,
						status: HTTP_STATUS_CODE_OK,
						statusText: "OK",
						url
					}));
					observer.complete();
				});
			};
			const onError = (error) => {
				cleanup();
				observer.error(new HttpErrorResponse({
					error,
					status: 0,
					statusText: "JSONP Error",
					url
				}));
			};
			node.addEventListener("load", onLoad);
			node.addEventListener("error", onError);
			this.document.body.appendChild(node);
			observer.next({ type: HttpEventType.Sent });
			return () => {
				if (!finished) this.removeListeners(node);
				cleanup();
			};
		});
	}
	removeListeners(script) {
		foreignDocument ??= this.document.implementation.createHTMLDocument();
		foreignDocument.adoptNode(script);
	}
	isAllowedJsonpUrl(url) {
		return /^https?:\/\//i.test(url);
	}
	static ɵfac = function JsonpClientBackend_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || JsonpClientBackend)(ɵɵinject(JsonpCallbackContext), ɵɵinject(DOCUMENT));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: JsonpClientBackend,
		factory: JsonpClientBackend.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonpClientBackend, [{ type: Injectable }], () => [{ type: JsonpCallbackContext }, {
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}], null);
})();
/**
* Identifies requests with the method JSONP and shifts them to the `JsonpClientBackend`.
*/
function jsonpInterceptorFn(req, next) {
	if (req.method === "JSONP") return inject(JsonpClientBackend).handle(req);
	return next(req);
}
/**
* Identifies requests with the method JSONP and
* shifts them to the `JsonpClientBackend`.
*
* @see {@link HttpInterceptor}
*
* @publicApi
*/
var JsonpInterceptor = class JsonpInterceptor {
	injector;
	constructor(injector) {
		this.injector = injector;
	}
	/**
	* Identifies and handles a given JSONP request.
	* @param initialRequest The outgoing request object to handle.
	* @param next The next interceptor in the chain, or the backend
	* if no interceptors remain in the chain.
	* @returns An observable of the event stream.
	*/
	intercept(initialRequest, next) {
		return runInInjectionContext(this.injector, () => jsonpInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
	}
	static ɵfac = function JsonpInterceptor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || JsonpInterceptor)(ɵɵinject(EnvironmentInjector));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: JsonpInterceptor,
		factory: JsonpInterceptor.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonpInterceptor, [{ type: Injectable }], () => [{ type: EnvironmentInjector }], null);
})();
var XSSI_PREFIX = /^\)\]\}',?\n/;
var X_REQUEST_URL_REGEXP = RegExp(`^${X_REQUEST_URL_HEADER}:`, "m");
/**
* Determine an appropriate URL for the response, by checking either
* XMLHttpRequest.responseURL or the X-Request-URL header.
*/
function getResponseUrl(xhr) {
	if ("responseURL" in xhr && xhr.responseURL) return xhr.responseURL;
	if (X_REQUEST_URL_REGEXP.test(xhr.getAllResponseHeaders())) return xhr.getResponseHeader(X_REQUEST_URL_HEADER);
	return null;
}
/**
* Validates whether the request is compatible with the XHR backend.
* Show a warning if the request contains options that are not supported by XHR.
*/
function validateXhrCompatibility(req) {
	for (const { property, errorCode } of [
		{
			property: "keepalive",
			errorCode: 2813
		},
		{
			property: "cache",
			errorCode: 2814
		},
		{
			property: "priority",
			errorCode: 2815
		},
		{
			property: "mode",
			errorCode: 2816
		},
		{
			property: "redirect",
			errorCode: 2817
		},
		{
			property: "credentials",
			errorCode: 2818
		},
		{
			property: "integrity",
			errorCode: 2820
		},
		{
			property: "referrer",
			errorCode: 2821
		}
	]) if (req[property]) console.warn(formatRuntimeError(errorCode, `Angular detected that a \`HttpClient\` request with the \`${property}\` option was sent using XHR, which does not support it. To use the \`${property}\` option, enable Fetch API support by passing \`withFetch()\` as an argument to \`provideHttpClient()\`.`));
}
/**
* Uses `XMLHttpRequest` to send requests to a backend server.
* @see {@link HttpHandler}
* @see {@link JsonpClientBackend}
*
* @publicApi
*/
var HttpXhrBackend = class HttpXhrBackend {
	xhrFactory;
	constructor(xhrFactory) {
		this.xhrFactory = xhrFactory;
	}
	/**
	* Processes a request and returns a stream of response events.
	* @param req The request object.
	* @returns An observable of the response events.
	*/
	handle(req) {
		if (req.method === "JSONP") throw new RuntimeError(-2800, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot make a JSONP request without JSONP support. To fix the problem, either add the \`withJsonpSupport()\` call (if \`provideHttpClient()\` is used) or import the \`HttpClientJsonpModule\` in the root NgModule.`);
		ngDevMode && validateXhrCompatibility(req);
		const xhrFactory = this.xhrFactory;
		return of(null).pipe(switchMap(() => {
			return new Observable((observer) => {
				const xhr = xhrFactory.build();
				xhr.open(req.method, req.urlWithParams);
				if (req.withCredentials) xhr.withCredentials = true;
				req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(",")));
				if (!req.headers.has(ACCEPT_HEADER)) xhr.setRequestHeader(ACCEPT_HEADER, ACCEPT_HEADER_VALUE);
				if (!req.headers.has(CONTENT_TYPE_HEADER)) {
					const detectedType = req.detectContentTypeHeader();
					if (detectedType !== null) xhr.setRequestHeader(CONTENT_TYPE_HEADER, detectedType);
				}
				if (req.timeout) xhr.timeout = req.timeout;
				if (req.responseType) {
					const responseType = req.responseType.toLowerCase();
					xhr.responseType = responseType !== "json" ? responseType : "text";
				}
				const reqBody = req.serializeBody();
				let headerResponse = null;
				const partialFromXhr = () => {
					if (headerResponse !== null) return headerResponse;
					const statusText = xhr.statusText || "OK";
					const headers = new HttpHeaders(xhr.getAllResponseHeaders());
					const url = getResponseUrl(xhr) || req.url;
					headerResponse = new HttpHeaderResponse({
						headers,
						status: xhr.status,
						statusText,
						url
					});
					return headerResponse;
				};
				const onLoad = () => {
					let { headers, status, statusText, url } = partialFromXhr();
					let body = null;
					if (status !== HTTP_STATUS_CODE_NO_CONTENT) body = typeof xhr.response === "undefined" ? xhr.responseText : xhr.response;
					if (status === 0) status = !!body ? HTTP_STATUS_CODE_OK : 0;
					let ok = status >= 200 && status < 300;
					if (req.responseType === "json" && typeof body === "string") {
						const originalBody = body;
						body = body.replace(XSSI_PREFIX, "");
						try {
							body = body !== "" ? JSON.parse(body) : null;
						} catch (error) {
							body = originalBody;
							if (ok) {
								ok = false;
								body = {
									error,
									text: body
								};
							}
						}
					}
					if (ok) {
						observer.next(new HttpResponse({
							body,
							headers,
							status,
							statusText,
							url: url || void 0
						}));
						observer.complete();
					} else observer.error(new HttpErrorResponse({
						error: body,
						headers,
						status,
						statusText,
						url: url || void 0
					}));
				};
				const onError = (error) => {
					const { url } = partialFromXhr();
					const res = new HttpErrorResponse({
						error,
						status: xhr.status || 0,
						statusText: xhr.statusText || "Unknown Error",
						url: url || void 0
					});
					observer.error(res);
				};
				let onTimeout = onError;
				if (req.timeout) onTimeout = (_) => {
					const { url } = partialFromXhr();
					const res = new HttpErrorResponse({
						error: new DOMException("Request timed out", "TimeoutError"),
						status: xhr.status || 0,
						statusText: xhr.statusText || "Request timeout",
						url: url || void 0
					});
					observer.error(res);
				};
				let sentHeaders = false;
				const onDownProgress = (event) => {
					if (!sentHeaders) {
						observer.next(partialFromXhr());
						sentHeaders = true;
					}
					let progressEvent = {
						type: HttpEventType.DownloadProgress,
						loaded: event.loaded
					};
					if (event.lengthComputable) progressEvent.total = event.total;
					if (req.responseType === "text" && !!xhr.responseText) progressEvent.partialText = xhr.responseText;
					observer.next(progressEvent);
				};
				const onUpProgress = (event) => {
					let progress = {
						type: HttpEventType.UploadProgress,
						loaded: event.loaded
					};
					if (event.lengthComputable) progress.total = event.total;
					observer.next(progress);
				};
				xhr.addEventListener("load", onLoad);
				xhr.addEventListener("error", onError);
				xhr.addEventListener("timeout", onTimeout);
				xhr.addEventListener("abort", onError);
				if (req.reportProgress) {
					xhr.addEventListener("progress", onDownProgress);
					if (reqBody !== null && xhr.upload) xhr.upload.addEventListener("progress", onUpProgress);
				}
				xhr.send(reqBody);
				observer.next({ type: HttpEventType.Sent });
				return () => {
					xhr.removeEventListener("error", onError);
					xhr.removeEventListener("abort", onError);
					xhr.removeEventListener("load", onLoad);
					xhr.removeEventListener("timeout", onTimeout);
					if (req.reportProgress) {
						xhr.removeEventListener("progress", onDownProgress);
						if (reqBody !== null && xhr.upload) xhr.upload.removeEventListener("progress", onUpProgress);
					}
					if (xhr.readyState !== xhr.DONE) xhr.abort();
				};
			});
		}));
	}
	static ɵfac = function HttpXhrBackend_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpXhrBackend)(ɵɵinject(XhrFactory));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: HttpXhrBackend,
		factory: HttpXhrBackend.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXhrBackend, [{ type: Injectable }], () => [{ type: XhrFactory }], null);
})();
var XSRF_ENABLED = new InjectionToken(ngDevMode ? "XSRF_ENABLED" : "");
var XSRF_DEFAULT_COOKIE_NAME = "XSRF-TOKEN";
var XSRF_COOKIE_NAME = new InjectionToken(ngDevMode ? "XSRF_COOKIE_NAME" : "", {
	providedIn: "root",
	factory: () => XSRF_DEFAULT_COOKIE_NAME
});
var XSRF_DEFAULT_HEADER_NAME = "X-XSRF-TOKEN";
var XSRF_HEADER_NAME = new InjectionToken(ngDevMode ? "XSRF_HEADER_NAME" : "", {
	providedIn: "root",
	factory: () => XSRF_DEFAULT_HEADER_NAME
});
/**
* Retrieves the current XSRF token to use with the next outgoing request.
*
* @publicApi
*/
var HttpXsrfTokenExtractor = class {};
/**
* `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
*/
var HttpXsrfCookieExtractor = class HttpXsrfCookieExtractor {
	doc;
	cookieName;
	lastCookieString = "";
	lastToken = null;
	/**
	* @internal for testing
	*/
	parseCount = 0;
	constructor(doc, cookieName) {
		this.doc = doc;
		this.cookieName = cookieName;
	}
	getToken() {
		const cookieString = this.doc.cookie || "";
		if (cookieString !== this.lastCookieString) {
			this.parseCount++;
			this.lastToken = parseCookieValue(cookieString, this.cookieName);
			this.lastCookieString = cookieString;
		}
		return this.lastToken;
	}
	static ɵfac = function HttpXsrfCookieExtractor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpXsrfCookieExtractor)(ɵɵinject(DOCUMENT), ɵɵinject(XSRF_COOKIE_NAME));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: HttpXsrfCookieExtractor,
		factory: HttpXsrfCookieExtractor.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXsrfCookieExtractor, [{ type: Injectable }], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}, {
		type: void 0,
		decorators: [{
			type: Inject,
			args: [XSRF_COOKIE_NAME]
		}]
	}], null);
})();
/**
* Regex to match absolute URLs, including protocol-relative URLs.
*/
var ABSOLUTE_URL_REGEX = /^(?:https?:)?\/\//i;
function xsrfInterceptorFn(req, next) {
	if (!inject(XSRF_ENABLED) || req.method === "GET" || req.method === "HEAD" || ABSOLUTE_URL_REGEX.test(req.url)) return next(req);
	const token = inject(HttpXsrfTokenExtractor).getToken();
	const headerName = inject(XSRF_HEADER_NAME);
	if (token != null && !req.headers.has(headerName)) req = req.clone({ headers: req.headers.set(headerName, token) });
	return next(req);
}
/**
* `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
*/
var HttpXsrfInterceptor = class HttpXsrfInterceptor {
	injector;
	constructor(injector) {
		this.injector = injector;
	}
	intercept(initialRequest, next) {
		return runInInjectionContext(this.injector, () => xsrfInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
	}
	static ɵfac = function HttpXsrfInterceptor_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpXsrfInterceptor)(ɵɵinject(EnvironmentInjector));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: HttpXsrfInterceptor,
		factory: HttpXsrfInterceptor.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXsrfInterceptor, [{ type: Injectable }], () => [{ type: EnvironmentInjector }], null);
})();
/**
* Identifies a particular kind of `HttpFeature`.
*
* @publicApi
*/
var HttpFeatureKind;
(function(HttpFeatureKind) {
	HttpFeatureKind[HttpFeatureKind["Interceptors"] = 0] = "Interceptors";
	HttpFeatureKind[HttpFeatureKind["LegacyInterceptors"] = 1] = "LegacyInterceptors";
	HttpFeatureKind[HttpFeatureKind["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
	HttpFeatureKind[HttpFeatureKind["NoXsrfProtection"] = 3] = "NoXsrfProtection";
	HttpFeatureKind[HttpFeatureKind["JsonpSupport"] = 4] = "JsonpSupport";
	HttpFeatureKind[HttpFeatureKind["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
	HttpFeatureKind[HttpFeatureKind["Fetch"] = 6] = "Fetch";
})(HttpFeatureKind || (HttpFeatureKind = {}));
function makeHttpFeature(kind, providers) {
	return {
		ɵkind: kind,
		ɵproviders: providers
	};
}
/**
* Configures Angular's `HttpClient` service to be available for injection.
*
* By default, `HttpClient` will be configured for injection with its default options for XSRF
* protection of outgoing requests. Additional configuration options can be provided by passing
* feature functions to `provideHttpClient`. For example, HTTP interceptors can be added using the
* `withInterceptors(...)` feature.
*
* <div class="docs-alert docs-alert-helpful">
*
* It's strongly recommended to enable
* [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for applications that use
* Server-Side Rendering for better performance and compatibility. To enable `fetch`, add
* `withFetch()` feature to the `provideHttpClient()` call at the root of the application:
*
* ```ts
* provideHttpClient(withFetch());
* ```
*
* </div>
* @see [HTTP Client](guide/http/setup)
* @see {@link withInterceptors}
* @see {@link withInterceptorsFromDi}
* @see {@link withXsrfConfiguration}
* @see {@link withNoXsrfProtection}
* @see {@link withJsonpSupport}
* @see {@link withRequestsMadeViaParent}
* @see {@link withFetch}
*/
function provideHttpClient(...features) {
	if (ngDevMode) {
		const featureKinds = new Set(features.map((f) => f.ɵkind));
		if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) throw new Error(`Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.`);
		if (featureKinds.has(HttpFeatureKind.RequestsMadeViaParent) && featureKinds.has(HttpFeatureKind.Fetch)) throw new Error(`Configuration error: withRequestsMadeViaParent() cannot be combined with withFetch() in the same call to provideHttpClient().`);
	}
	const providers = [
		HttpClient,
		HttpXhrBackend,
		HttpInterceptorHandler,
		{
			provide: HttpHandler,
			useExisting: HttpInterceptorHandler
		},
		{
			provide: HttpBackend,
			useFactory: () => {
				return inject(FETCH_BACKEND, { optional: true }) ?? inject(HttpXhrBackend);
			}
		},
		{
			provide: HTTP_INTERCEPTOR_FNS,
			useValue: xsrfInterceptorFn,
			multi: true
		},
		{
			provide: XSRF_ENABLED,
			useValue: true
		},
		{
			provide: HttpXsrfTokenExtractor,
			useClass: HttpXsrfCookieExtractor
		}
	];
	for (const feature of features) providers.push(...feature.ɵproviders);
	return makeEnvironmentProviders(providers);
}
var LEGACY_INTERCEPTOR_FN = new InjectionToken(ngDevMode ? "LEGACY_INTERCEPTOR_FN" : "");
/**
* Includes class-based interceptors configured using a multi-provider in the current injector into
* the configured `HttpClient` instance.
*
* Prefer `withInterceptors` and functional interceptors instead, as support for DI-provided
* interceptors may be phased out in a later release.
*
* @see {@link HttpInterceptor}
* @see {@link HTTP_INTERCEPTORS}
* @see {@link provideHttpClient}
*/
function withInterceptorsFromDi() {
	return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [{
		provide: LEGACY_INTERCEPTOR_FN,
		useFactory: legacyInterceptorFnFactory
	}, {
		provide: HTTP_INTERCEPTOR_FNS,
		useExisting: LEGACY_INTERCEPTOR_FN,
		multi: true
	}]);
}
/**
* Customizes the XSRF protection for the configuration of the current `HttpClient` instance.
*
* This feature is incompatible with the `withNoXsrfProtection` feature.
*
* @see {@link provideHttpClient}
*/
function withXsrfConfiguration({ cookieName, headerName }) {
	const providers = [];
	if (cookieName !== void 0) providers.push({
		provide: XSRF_COOKIE_NAME,
		useValue: cookieName
	});
	if (headerName !== void 0) providers.push({
		provide: XSRF_HEADER_NAME,
		useValue: headerName
	});
	return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
/**
* Disables XSRF protection in the configuration of the current `HttpClient` instance.
*
* This feature is incompatible with the `withXsrfConfiguration` feature.
*
* @see {@link provideHttpClient}
*/
function withNoXsrfProtection() {
	return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [{
		provide: XSRF_ENABLED,
		useValue: false
	}]);
}
/**
* Add JSONP support to the configuration of the current `HttpClient` instance.
*
* @see {@link provideHttpClient}
*/
function withJsonpSupport() {
	return makeHttpFeature(HttpFeatureKind.JsonpSupport, [
		JsonpClientBackend,
		{
			provide: JsonpCallbackContext,
			useFactory: jsonpCallbackContext
		},
		{
			provide: HTTP_INTERCEPTOR_FNS,
			useValue: jsonpInterceptorFn,
			multi: true
		}
	]);
}
/**
* Configures XSRF protection support for outgoing requests.
*
* For a server that supports a cookie-based XSRF protection system,
* use directly to configure XSRF protection with the correct
* cookie and header names.
*
* If no names are supplied, the default cookie name is `XSRF-TOKEN`
* and the default header name is `X-XSRF-TOKEN`.
*
* @publicApi
* @deprecated Use withXsrfConfiguration({cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN'}) as
*     providers instead or `withNoXsrfProtection` if you want to disabled XSRF protection.
*/
var HttpClientXsrfModule = class HttpClientXsrfModule {
	/**
	* Disable the default XSRF protection.
	*/
	static disable() {
		return {
			ngModule: HttpClientXsrfModule,
			providers: [withNoXsrfProtection().ɵproviders]
		};
	}
	/**
	* Configure XSRF protection.
	* @param options An object that can specify either or both
	* cookie name or header name.
	* - Cookie name default is `XSRF-TOKEN`.
	* - Header name default is `X-XSRF-TOKEN`.
	*
	*/
	static withOptions(options = {}) {
		return {
			ngModule: HttpClientXsrfModule,
			providers: withXsrfConfiguration(options).ɵproviders
		};
	}
	static ɵfac = function HttpClientXsrfModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpClientXsrfModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({ type: HttpClientXsrfModule });
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ providers: [
		HttpXsrfInterceptor,
		{
			provide: HTTP_INTERCEPTORS,
			useExisting: HttpXsrfInterceptor,
			multi: true
		},
		{
			provide: HttpXsrfTokenExtractor,
			useClass: HttpXsrfCookieExtractor
		},
		withXsrfConfiguration({
			cookieName: XSRF_DEFAULT_COOKIE_NAME,
			headerName: XSRF_DEFAULT_HEADER_NAME
		}).ɵproviders,
		{
			provide: XSRF_ENABLED,
			useValue: true
		}
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientXsrfModule, [{
		type: NgModule,
		args: [{ providers: [
			HttpXsrfInterceptor,
			{
				provide: HTTP_INTERCEPTORS,
				useExisting: HttpXsrfInterceptor,
				multi: true
			},
			{
				provide: HttpXsrfTokenExtractor,
				useClass: HttpXsrfCookieExtractor
			},
			withXsrfConfiguration({
				cookieName: XSRF_DEFAULT_COOKIE_NAME,
				headerName: XSRF_DEFAULT_HEADER_NAME
			}).ɵproviders,
			{
				provide: XSRF_ENABLED,
				useValue: true
			}
		] }]
	}], null, null);
})();
/**
* Configures the dependency injector for `HttpClient`
* with supporting services for XSRF. Automatically imported by `HttpClientModule`.
*
* You can add interceptors to the chain behind `HttpClient` by binding them to the
* multiprovider for built-in DI token `HTTP_INTERCEPTORS`.
*
* @publicApi
* @deprecated use `provideHttpClient(withInterceptorsFromDi())` as providers instead
*/
var HttpClientModule = class HttpClientModule {
	static ɵfac = function HttpClientModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpClientModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({ type: HttpClientModule });
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ providers: [provideHttpClient(withInterceptorsFromDi())] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientModule, [{
		type: NgModule,
		args: [{ 
		/**
		* Configures the dependency injector where it is imported
		* with supporting services for HTTP communications.
		*/
providers: [provideHttpClient(withInterceptorsFromDi())] }]
	}], null, null);
})();
/**
* Configures the dependency injector for `HttpClient`
* with supporting services for JSONP.
* Without this module, Jsonp requests reach the backend
* with method JSONP, where they are rejected.
*
* @publicApi
* @deprecated `withJsonpSupport()` as providers instead
*/
var HttpClientJsonpModule = class HttpClientJsonpModule {
	static ɵfac = function HttpClientJsonpModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HttpClientJsonpModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({ type: HttpClientJsonpModule });
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ providers: [withJsonpSupport().ɵproviders] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientJsonpModule, [{
		type: NgModule,
		args: [{ providers: [withJsonpSupport().ɵproviders] }]
	}], null, null);
})();
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
(() => {
	const jsonFn = makeHttpResourceFn("json");
	jsonFn.arrayBuffer = makeHttpResourceFn("arraybuffer");
	jsonFn.blob = makeHttpResourceFn("blob");
	jsonFn.text = makeHttpResourceFn("text");
	return jsonFn;
})();
function makeHttpResourceFn(responseType) {
	return function httpResource(request, options) {
		if (ngDevMode && !options?.injector) assertInInjectionContext(httpResource);
		return new HttpResourceImpl(options?.injector ?? inject(Injector), () => normalizeRequest(request, responseType), options?.defaultValue, options?.parse, options?.equal);
	};
}
function normalizeRequest(request, responseType) {
	let unwrappedRequest = typeof request === "function" ? request() : request;
	if (unwrappedRequest === void 0) return;
	else if (typeof unwrappedRequest === "string") unwrappedRequest = { url: unwrappedRequest };
	const headers = unwrappedRequest.headers instanceof HttpHeaders ? unwrappedRequest.headers : new HttpHeaders(unwrappedRequest.headers);
	const params = unwrappedRequest.params instanceof HttpParams ? unwrappedRequest.params : new HttpParams({ fromObject: unwrappedRequest.params });
	return new HttpRequest(unwrappedRequest.method ?? "GET", unwrappedRequest.url, unwrappedRequest.body ?? null, {
		headers,
		params,
		reportProgress: unwrappedRequest.reportProgress,
		withCredentials: unwrappedRequest.withCredentials,
		keepalive: unwrappedRequest.keepalive,
		cache: unwrappedRequest.cache,
		priority: unwrappedRequest.priority,
		mode: unwrappedRequest.mode,
		redirect: unwrappedRequest.redirect,
		responseType,
		context: unwrappedRequest.context,
		transferCache: unwrappedRequest.transferCache,
		credentials: unwrappedRequest.credentials,
		referrer: unwrappedRequest.referrer,
		integrity: unwrappedRequest.integrity,
		timeout: unwrappedRequest.timeout
	});
}
var HttpResourceImpl = class extends ResourceImpl {
	client;
	_headers = linkedSignal(...ngDevMode ? [{
		debugName: "_headers",
		source: this.extRequest,
		computation: () => void 0
	}] : [{
		source: this.extRequest,
		computation: () => void 0
	}]);
	_progress = linkedSignal(...ngDevMode ? [{
		debugName: "_progress",
		source: this.extRequest,
		computation: () => void 0
	}] : [{
		source: this.extRequest,
		computation: () => void 0
	}]);
	_statusCode = linkedSignal(...ngDevMode ? [{
		debugName: "_statusCode",
		source: this.extRequest,
		computation: () => void 0
	}] : [{
		source: this.extRequest,
		computation: () => void 0
	}]);
	headers = computed(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0, ...ngDevMode ? [{ debugName: "headers" }] : []);
	progress = this._progress.asReadonly();
	statusCode = this._statusCode.asReadonly();
	constructor(injector, request, defaultValue, parse, equal) {
		super(request, ({ params: request, abortSignal }) => {
			let sub;
			const onAbort = () => sub.unsubscribe();
			abortSignal.addEventListener("abort", onAbort);
			const stream = signal({ value: void 0 }, ...ngDevMode ? [{ debugName: "stream" }] : []);
			let resolve;
			const promise = new Promise((r) => resolve = r);
			const send = (value) => {
				stream.set(value);
				resolve?.(stream);
				resolve = void 0;
			};
			sub = this.client.request(request).subscribe({
				next: (event) => {
					switch (event.type) {
						case HttpEventType.Response:
							this._headers.set(event.headers);
							this._statusCode.set(event.status);
							try {
								send({ value: parse ? parse(event.body) : event.body });
							} catch (error) {
								send({ error: encapsulateResourceError(error) });
							}
							break;
						case HttpEventType.DownloadProgress: this._progress.set(event);
					}
				},
				error: (error) => {
					if (error instanceof HttpErrorResponse) {
						this._headers.set(error.headers);
						this._statusCode.set(error.status);
					}
					send({ error });
					abortSignal.removeEventListener("abort", onAbort);
				},
				complete: () => {
					if (resolve) send({ error: new RuntimeError(991, ngDevMode && "Resource completed before producing a value") });
					abortSignal.removeEventListener("abort", onAbort);
				}
			});
			return promise;
		}, defaultValue, equal, injector);
		this.client = injector.get(HttpClient);
	}
	set(value) {
		super.set(value);
		this._headers.set(void 0);
		this._progress.set(void 0);
		this._statusCode.set(void 0);
	}
};
/**
* If your application uses different HTTP origins to make API calls (via `HttpClient`) on the server and
* on the client, the `HTTP_TRANSFER_CACHE_ORIGIN_MAP` token allows you to establish a mapping
* between those origins, so that `HttpTransferCache` feature can recognize those requests as the same
* ones and reuse the data cached on the server during hydration on the client.
*
* **Important note**: the `HTTP_TRANSFER_CACHE_ORIGIN_MAP` token should *only* be provided in
* the *server* code of your application (typically in the `app.server.config.ts` script). Angular throws an
* error if it detects that the token is defined while running on the client.
*
* @usageNotes
*
* When the same API endpoint is accessed via `http://internal-domain.com:8080` on the server and
* via `https://external-domain.com` on the client, you can use the following configuration:
* ```ts
* // in app.server.config.ts
* {
*     provide: HTTP_TRANSFER_CACHE_ORIGIN_MAP,
*     useValue: {
*         'http://internal-domain.com:8080': 'https://external-domain.com'
*     }
* }
* ```
*
* @publicApi
*/
var HTTP_TRANSFER_CACHE_ORIGIN_MAP = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_CACHE_ORIGIN_MAP" : "");
/**
* Keys within cached response data structure.
*/
var BODY = "b";
var HEADERS = "h";
var STATUS = "s";
var STATUS_TEXT = "st";
var REQ_URL = "u";
var RESPONSE_TYPE = "rt";
var CACHE_OPTIONS = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_STATE_CACHE_OPTIONS" : "");
/**
* A list of allowed HTTP methods to cache.
*/
var ALLOWED_METHODS = ["GET", "HEAD"];
function transferCacheInterceptorFn(req, next) {
	const { isCacheActive, ...globalOptions } = inject(CACHE_OPTIONS);
	const { transferCache: requestOptions, method: requestMethod } = req;
	if (!isCacheActive || requestOptions === false || hasOutgoingCredentials(req) || requestMethod === "POST" && !globalOptions.includePostRequests && !requestOptions || requestMethod !== "POST" && !ALLOWED_METHODS.includes(requestMethod) || !globalOptions.includeRequestsWithAuthHeaders && hasAuthHeaders(req) || hasUncacheableCacheControl(req.headers) || isNonCacheableRequest(req.cache) || globalOptions.filter?.(req) === false) return next(req);
	const transferState = inject(TransferState);
	if (inject(HTTP_TRANSFER_CACHE_ORIGIN_MAP, { optional: true })) throw new RuntimeError(2803, ngDevMode && "Angular detected that the `HTTP_TRANSFER_CACHE_ORIGIN_MAP` token is configured and present in the client side code. Please ensure that this token is only provided in the server code of the application.");
	const requestUrl = req.url;
	const storeKey = makeCacheKey(req, requestUrl);
	const response = transferState.get(storeKey, null);
	let headersToInclude = globalOptions.includeHeaders;
	if (typeof requestOptions === "object" && requestOptions.includeHeaders) headersToInclude = requestOptions.includeHeaders;
	if (response) {
		const { [BODY]: undecodedBody, [RESPONSE_TYPE]: responseType, [HEADERS]: httpHeaders, [STATUS]: status, [STATUS_TEXT]: statusText, [REQ_URL]: url } = response;
		let body = undecodedBody;
		switch (responseType) {
			case "arraybuffer":
				body = new TextEncoder().encode(undecodedBody).buffer;
				break;
			case "blob": body = new Blob([undecodedBody]);
		}
		let headers = new HttpHeaders(httpHeaders);
		if (typeof ngDevMode === "undefined" || ngDevMode) headers = appendMissingHeadersDetection(req.url, headers, headersToInclude ?? []);
		return of(new HttpResponse({
			body,
			headers,
			status,
			statusText,
			url
		}));
	}
	return next(req);
}
/** @returns true when the request contains authentication or cookie headers. */
function hasAuthHeaders(req) {
	return req.headers.has("authorization") || req.headers.has("proxy-authorization") || req.headers.has("cookie");
}
var UNCACHEABLE_CACHE_CONTROL_DIRECTIVES = /* @__PURE__ */ new Set([
	"no-store",
	"private",
	"no-cache"
]);
function hasUncacheableCacheControl(headers) {
	const cacheControl = headers.get("cache-control");
	if (!cacheControl) return false;
	return cacheControl.split(",").some((directive) => {
		const directiveName = directive.split("=", 1)[0].trim().toLowerCase();
		return UNCACHEABLE_CACHE_CONTROL_DIRECTIVES.has(directiveName);
	});
}
function isNonCacheableRequest(cache) {
	return cache === "no-cache" || cache === "no-store";
}
function hasOutgoingCredentials(req) {
	return req.withCredentials || req.credentials === "include" || req.credentials === "same-origin";
}
function sortAndConcatParams(params) {
	const searchParams = new URLSearchParams(params instanceof URLSearchParams ? params : params.toString());
	searchParams.sort();
	return searchParams.toString();
}
function makeCacheKey(request, mappedRequestUrl) {
	const { params, method, responseType } = request;
	const encodedParams = sortAndConcatParams(params);
	let serializedBody = request.serializeBody();
	if (serializedBody instanceof URLSearchParams) serializedBody = sortAndConcatParams(serializedBody);
	else if (typeof serializedBody !== "string") serializedBody = "";
	const hash = generateHash([
		method,
		responseType,
		mappedRequestUrl,
		serializedBody,
		encodedParams
	].join("|"));
	return makeStateKey(hash);
}
/**
* SHA-256 Constants (first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311):
*/
var SHA256_ROUND_CONSTANTS = /* @__PURE__ */ new Uint32Array([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]);
var textEncoder;
/**
* Generates a SHA-256 hash representation of a string.
*
* Note: A custom synchronous SHA-256 implementation is used here because the Web Crypto API
* (`crypto.subtle.digest`) is strictly asynchronous (Promise-based), whereas the transfer cache
* state lookup and interceptor flow must operate synchronously due to the HttpResource API.
*
* The previous DJB2 hashing logic was vulnerable to pre-image and second-preimage attacks due to
* its small 64-bit keyspace and mathematical simplicity. An attacker could craft colliding request
* inputs to poison the cache, potentially causing a CDN or the application to serve the wrong
* cached response to legitimate users. SHA-256 provides strong cryptographic collision resistance,
* preventing cache key collision attacks.
*/
function generateHash(value) {
	textEncoder ??= new TextEncoder();
	const inputBytes = textEncoder.encode(value);
	let hashState0 = 1779033703;
	let hashState1 = 3144134277;
	let hashState2 = 1013904242;
	let hashState3 = 2773480762;
	let hashState4 = 1359893119;
	let hashState5 = 2600822924;
	let hashState6 = 528734635;
	let hashState7 = 1541459225;
	const messageLengthInBits = inputBytes.length * 8;
	const paddedLengthInBytes = (inputBytes.length + 8 >> 6) + 1 << 6;
	const paddedBytes = new Uint8Array(paddedLengthInBytes);
	paddedBytes.set(inputBytes);
	paddedBytes[inputBytes.length] = 128;
	const paddedBytesView = new DataView(paddedBytes.buffer);
	const lowBits = messageLengthInBits >>> 0;
	const highBits = messageLengthInBits / 4294967296 >>> 0;
	paddedBytesView.setUint32(paddedLengthInBytes - 8, highBits, false);
	paddedBytesView.setUint32(paddedLengthInBytes - 4, lowBits, false);
	const messageSchedule = /* @__PURE__ */ new Uint32Array(64);
	for (let chunkOffset = 0; chunkOffset < paddedLengthInBytes; chunkOffset += 64) {
		for (let i = 0; i < 16; i++) messageSchedule[i] = paddedBytesView.getUint32(chunkOffset + i * 4, false);
		for (let i = 16; i < 64; i++) {
			const prevWord15 = messageSchedule[i - 15];
			const sigma0 = ((prevWord15 >>> 7 | prevWord15 << 25) ^ (prevWord15 >>> 18 | prevWord15 << 14) ^ prevWord15 >>> 3) >>> 0;
			const prevWord2 = messageSchedule[i - 2];
			const sigma1 = ((prevWord2 >>> 17 | prevWord2 << 15) ^ (prevWord2 >>> 19 | prevWord2 << 13) ^ prevWord2 >>> 10) >>> 0;
			messageSchedule[i] = messageSchedule[i - 16] + sigma0 + messageSchedule[i - 7] + sigma1 >>> 0;
		}
		let workingStateA = hashState0;
		let workingStateB = hashState1;
		let workingStateC = hashState2;
		let workingStateD = hashState3;
		let workingStateE = hashState4;
		let workingStateF = hashState5;
		let workingStateG = hashState6;
		let workingStateH = hashState7;
		for (let i = 0; i < 64; i++) {
			const capitalSigma1 = ((workingStateE >>> 6 | workingStateE << 26) ^ (workingStateE >>> 11 | workingStateE << 21) ^ (workingStateE >>> 25 | workingStateE << 7)) >>> 0;
			const chFunction = (workingStateE & workingStateF ^ ~workingStateE & workingStateG) >>> 0;
			const temp1 = workingStateH + capitalSigma1 + chFunction + SHA256_ROUND_CONSTANTS[i] + messageSchedule[i] >>> 0;
			const temp2 = (((workingStateA >>> 2 | workingStateA << 30) ^ (workingStateA >>> 13 | workingStateA << 19) ^ (workingStateA >>> 22 | workingStateA << 10)) >>> 0) + ((workingStateA & workingStateB ^ workingStateA & workingStateC ^ workingStateB & workingStateC) >>> 0) >>> 0;
			workingStateH = workingStateG;
			workingStateG = workingStateF;
			workingStateF = workingStateE;
			workingStateE = workingStateD + temp1 >>> 0;
			workingStateD = workingStateC;
			workingStateC = workingStateB;
			workingStateB = workingStateA;
			workingStateA = temp1 + temp2 >>> 0;
		}
		hashState0 = hashState0 + workingStateA >>> 0;
		hashState1 = hashState1 + workingStateB >>> 0;
		hashState2 = hashState2 + workingStateC >>> 0;
		hashState3 = hashState3 + workingStateD >>> 0;
		hashState4 = hashState4 + workingStateE >>> 0;
		hashState5 = hashState5 + workingStateF >>> 0;
		hashState6 = hashState6 + workingStateG >>> 0;
		hashState7 = hashState7 + workingStateH >>> 0;
	}
	return [
		hashState0,
		hashState1,
		hashState2,
		hashState3,
		hashState4,
		hashState5,
		hashState6,
		hashState7
	].map((x) => x.toString(16).padStart(8, "0")).join("");
}
/**
* Returns the DI providers needed to enable HTTP transfer cache.
*
* By default, when using server rendering, requests are performed twice: once on the server and
* other one on the browser.
*
* When these providers are added, requests performed on the server are cached and reused during the
* bootstrapping of the application in the browser thus avoiding duplicate requests and reducing
* load time.
*
* @see [Caching data when using HttpClient](guide/ssr#configuring-the-caching-options)
*
*/
function withHttpTransferCache(cacheOptions) {
	return [
		{
			provide: CACHE_OPTIONS,
			useFactory: () => {
				performanceMarkFeature("NgHttpTransferCache");
				return {
					isCacheActive: true,
					...cacheOptions
				};
			}
		},
		{
			provide: HTTP_ROOT_INTERCEPTOR_FNS,
			useValue: transferCacheInterceptorFn,
			multi: true
		},
		{
			provide: APP_BOOTSTRAP_LISTENER,
			multi: true,
			useFactory: () => {
				const appRef = inject(ApplicationRef);
				const cacheState = inject(CACHE_OPTIONS);
				return () => {
					appRef.whenStable().then(() => {
						cacheState.isCacheActive = false;
					});
				};
			}
		}
	];
}
/**
* This function will add a proxy to an HttpHeader to intercept calls to get/has
* and log a warning if the header entry requested has been removed
*/
function appendMissingHeadersDetection(url, headers, headersToInclude) {
	const warningProduced = /* @__PURE__ */ new Set();
	return new Proxy(headers, { get(target, prop) {
		const value = Reflect.get(target, prop);
		if (typeof value !== "function" || !(/* @__PURE__ */ new Set([
			"get",
			"has",
			"getAll"
		])).has(prop)) return value;
		return (headerName) => {
			const key = (prop + ":" + headerName).toLowerCase();
			if (!headersToInclude.includes(headerName) && !warningProduced.has(key)) {
				warningProduced.add(key);
				const truncatedUrl = truncateMiddle(url);
				console.warn(formatRuntimeError(-2802, `Angular detected that the \`${headerName}\` header is accessed, but the value of the header was not transferred from the server to the client by the HttpTransferCache. To include the value of the \`${headerName}\` header for the \`${truncatedUrl}\` request, use the \`includeHeaders\` list. The \`includeHeaders\` can be defined either on a request level by adding the \`transferCache\` parameter, or on an application level by adding the \`httpCacheTransfer.includeHeaders\` argument to the \`provideClientHydration()\` call. `));
			}
			return value.apply(target, [headerName]);
		};
	} });
}
//#endregion
//#region node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
/**
* A service for managing HTML `<meta>` tags.
*
* Properties of the `MetaDefinition` object match the attributes of the
* HTML `<meta>` tag. These tags define document metadata that is important for
* things like configuring a Content Security Policy, defining browser compatibility
* and security settings, setting HTTP Headers, defining rich content for social sharing,
* and Search Engine Optimization (SEO).
*
* To identify specific `<meta>` tags in a document, use an attribute selection
* string in the format `"tag_attribute='value string'"`.
* For example, an `attrSelector` value of `"name='description'"` matches a tag
* whose `name` attribute has the value `"description"`.
* Selectors are used with the `querySelector()` Document method,
* in the format `meta[{attrSelector}]`.
*
* @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
* @see [Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
*
*
* @publicApi
*/
var Meta = class Meta {
	_doc;
	_dom;
	constructor(_doc) {
		this._doc = _doc;
		this._dom = getDOM();
	}
	/**
	* Retrieves or creates a specific `<meta>` tag element in the current HTML document.
	* In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
	* values in the provided tag definition, and verifies that all other attribute values are equal.
	* If an existing element is found, it is returned and is not modified in any way.
	* @param tag The definition of a `<meta>` element to match or create.
	* @param forceCreation True to create a new element without checking whether one already exists.
	* @returns The existing element with the same attributes and values if found,
	* the new element if no match is found, or `null` if the tag parameter is not defined.
	*/
	addTag(tag, forceCreation = false) {
		if (!tag) return null;
		return this._getOrCreateElement(tag, forceCreation);
	}
	/**
	* Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
	* In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
	* values in the provided tag definition, and verifies that all other attribute values are equal.
	* @param tags An array of tag definitions to match or create.
	* @param forceCreation True to create new elements without checking whether they already exist.
	* @returns The matching elements if found, or the new elements.
	*/
	addTags(tags, forceCreation = false) {
		if (!tags) return [];
		return tags.reduce((result, tag) => {
			if (tag) result.push(this._getOrCreateElement(tag, forceCreation));
			return result;
		}, []);
	}
	/**
	* Retrieves a `<meta>` tag element in the current HTML document.
	* @param attrSelector The tag attribute and value to match against, in the format
	* `"tag_attribute='value string'"`.
	* @returns The matching element, if any.
	*/
	getTag(attrSelector) {
		if (!attrSelector) return null;
		const meta = this._doc.querySelector(`meta[${attrSelector}]`);
		return meta?.nodeName.toLowerCase() === "meta" ? meta : null;
	}
	/**
	* Retrieves a set of `<meta>` tag elements in the current HTML document.
	* @param attrSelector The tag attribute and value to match against, in the format
	* `"tag_attribute='value string'"`.
	* @returns The matching elements, if any.
	*/
	getTags(attrSelector) {
		if (!attrSelector) return [];
		const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
		return list ? [].slice.call(list).filter((elem) => elem.nodeName.toLowerCase() === "meta") : [];
	}
	/**
	* Modifies an existing `<meta>` tag element in the current HTML document.
	* @param tag The tag description with which to replace the existing tag content.
	* @param selector A tag attribute and value to match against, to identify
	* an existing tag. A string in the format `"tag_attribute=`value string`"`.
	* If not supplied, matches a tag with the same `name` or `property` attribute value as the
	* replacement tag.
	* @return The modified element.
	*/
	updateTag(tag, selector) {
		if (!tag) return null;
		this._validateMetaDefinition(tag);
		selector = selector || this._parseSelector(tag);
		const meta = this.getTag(selector);
		if (meta) return this._setMetaElementAttributes(tag, meta);
		return this._getOrCreateElement(tag, true);
	}
	/**
	* Removes an existing `<meta>` tag element from the current HTML document.
	* @param attrSelector A tag attribute and value to match against, to identify
	* an existing tag. A string in the format `"tag_attribute=`value string`"`.
	*/
	removeTag(attrSelector) {
		this.removeTagElement(this.getTag(attrSelector));
	}
	/**
	* Removes an existing `<meta>` tag element from the current HTML document.
	* @param meta The tag definition to match against to identify an existing tag.
	*/
	removeTagElement(meta) {
		if (meta) this._dom.remove(meta);
	}
	_getOrCreateElement(meta, forceCreation = false) {
		this._validateMetaDefinition(meta);
		if (!forceCreation) {
			const selector = this._parseSelector(meta);
			const elem = this.getTags(selector).filter((elem) => this._containsAttributes(meta, elem))[0];
			if (elem !== void 0) return elem;
		}
		const element = this._dom.createElement("meta");
		this._setMetaElementAttributes(meta, element);
		this._doc.getElementsByTagName("head")[0].appendChild(element);
		return element;
	}
	_setMetaElementAttributes(tag, el) {
		Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
		return el;
	}
	_parseSelector(tag) {
		const attr = tag.name ? "name" : "property";
		return `${attr}=${this._escapeSelectorValue(String(tag[attr]))}`;
	}
	_escapeSelectorValue(value) {
		return `"${value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`;
	}
	_validateMetaDefinition(tag) {
		for (const prop of Object.keys(tag)) {
			const attributeName = this._getMetaKeyMap(prop);
			if (attributeName.toLowerCase().startsWith("on")) throw new RuntimeError(5203, (typeof ngDevMode === "undefined" || ngDevMode) && `The Meta service does not allow setting event handler attribute '${attributeName}' for security reasons.`);
		}
	}
	_containsAttributes(tag, elem) {
		return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
	}
	_getMetaKeyMap(prop) {
		return Object.hasOwn(META_KEYS_MAP, prop) ? META_KEYS_MAP[prop] : prop;
	}
	static ɵfac = function Meta_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Meta)(ɵɵinject(DOCUMENT));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: Meta,
		factory: Meta.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Meta, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}], null);
})();
/**
* Mapping for MetaDefinition properties with their correct meta attribute names
*/
var META_KEYS_MAP = { httpEquiv: "http-equiv" };
/**
* A service that can be used to get and set the title of a current HTML document.
*
* Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
* it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
* (representing the `<title>` tag). Instead, this service can be used to set and get the current
* title value.
*
* @publicApi
*/
var Title = class Title {
	_doc;
	constructor(_doc) {
		this._doc = _doc;
	}
	/**
	* Get the title of the current HTML document.
	*/
	getTitle() {
		return this._doc.title;
	}
	/**
	* Set the title of the current HTML document.
	* @param newTitle
	*/
	setTitle(newTitle) {
		this._doc.title = newTitle || "";
	}
	static ɵfac = function Title_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Title)(ɵɵinject(DOCUMENT));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: Title,
		factory: Title.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Title, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}], null);
})();
/**
* Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
* `name` is `'probe'`.
* @param name Name under which it will be exported. Keep in mind this will be a property of the
* global `ng` object.
* @param value The value to export.
*/
function exportNgVar(name, value) {
	if (typeof COMPILED === "undefined" || !COMPILED) {
		const ng = _global["ng"] = _global["ng"] || {};
		ng[name] = value;
	}
}
var ChangeDetectionPerfRecord = class {
	msPerTick;
	numTicks;
	constructor(msPerTick, numTicks) {
		this.msPerTick = msPerTick;
		this.numTicks = numTicks;
	}
};
/**
* Entry point for all Angular profiling-related debug tools. This object
* corresponds to the `ng.profiler` in the dev console.
*/
var AngularProfiler = class {
	appRef;
	constructor(ref) {
		this.appRef = ref.injector.get(ApplicationRef);
	}
	/**
	* Exercises change detection in a loop and then prints the average amount of
	* time in milliseconds how long a single round of change detection takes for
	* the current state of the UI. It runs a minimum of 5 rounds for a minimum
	* of 500 milliseconds.
	*
	* Optionally, a user may pass a `config` parameter containing a map of
	* options. Supported options are:
	*
	* `record` (boolean) - causes the profiler to record a CPU profile while
	* it exercises the change detector. Example:
	*
	* ```ts
	* ng.profiler.timeChangeDetection({record: true})
	* ```
	*/
	timeChangeDetection(config) {
		const record = config && config["record"];
		const profileName = "Change Detection";
		if (record && "profile" in console && typeof console.profile === "function") console.profile(profileName);
		const start = performance.now();
		let numTicks = 0;
		while (numTicks < 5 || performance.now() - start < 500) {
			this.appRef.tick();
			numTicks++;
		}
		const end = performance.now();
		if (record && "profileEnd" in console && typeof console.profileEnd === "function") console.profileEnd(profileName);
		const msPerTick = (end - start) / numTicks;
		console.log(`ran ${numTicks} change detection cycles`);
		console.log(`${msPerTick.toFixed(2)} ms per check`);
		return new ChangeDetectionPerfRecord(msPerTick, numTicks);
	}
};
var PROFILER_GLOBAL_NAME = "profiler";
/**
* Enabled Angular debug tools that are accessible via your browser's
* developer console.
*
* Usage:
*
* 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
* 1. Type `ng.` (usually the console will show auto-complete suggestion)
* 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
*    then hit Enter.
*
* @publicApi
*/
function enableDebugTools(ref) {
	exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
	return ref;
}
/**
* Disables Angular tools.
*
* @publicApi
*/
function disableDebugTools() {
	exportNgVar(PROFILER_GLOBAL_NAME, null);
}
/**
* Predicates for use with {@link DebugElement}'s query functions.
*
* @publicApi
*/
var By = class {
	/**
	* Match all nodes.
	*
	* @usageNotes
	* ### Example
	*
	* {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
	*/
	static all() {
		return () => true;
	}
	/**
	* Match elements by the given CSS selector.
	*
	* @usageNotes
	* ### Example
	*
	* {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
	*/
	static css(selector) {
		return (debugElement) => {
			return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
		};
	}
	/**
	* Match nodes that have the given directive present.
	*
	* @usageNotes
	* ### Example
	*
	* {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
	*/
	static directive(type) {
		return (debugNode) => debugNode.providerTokens.indexOf(type) !== -1;
	}
};
function elementMatches(n, selector) {
	if (getDOM().isElementNode(n)) return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
	return false;
}
/**
* Supported HammerJS recognizer event names.
*/
var EVENT_NAMES = {
	"pan": true,
	"panstart": true,
	"panmove": true,
	"panend": true,
	"pancancel": true,
	"panleft": true,
	"panright": true,
	"panup": true,
	"pandown": true,
	"pinch": true,
	"pinchstart": true,
	"pinchmove": true,
	"pinchend": true,
	"pinchcancel": true,
	"pinchin": true,
	"pinchout": true,
	"press": true,
	"pressup": true,
	"rotate": true,
	"rotatestart": true,
	"rotatemove": true,
	"rotateend": true,
	"rotatecancel": true,
	"swipe": true,
	"swipeleft": true,
	"swiperight": true,
	"swipeup": true,
	"swipedown": true,
	"tap": true,
	"doubletap": true
};
/**
* DI token for providing [HammerJS](https://hammerjs.github.io/) support to Angular.
* @see {@link HammerGestureConfig}
*
* @ngModule HammerModule
* @publicApi
*
* @deprecated The HammerJS integration is deprecated. Replace it by your own implementation.
*/
var HAMMER_GESTURE_CONFIG = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerGestureConfig" : "");
/**
* Injection token used to provide a HammerLoader to Angular.
*
* @see {@link HammerLoader}
*
* @publicApi
*
* @deprecated The HammerJS integration is deprecated. Replace it by your own implementation.
*/
var HAMMER_LOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerLoader" : "");
/**
* An injectable [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
* for gesture recognition. Configures specific event recognition.
* @publicApi
*
* @deprecated The HammerJS integration is deprecated. Replace it by your own implementation.
*/
var HammerGestureConfig = class HammerGestureConfig {
	/**
	* A set of supported event names for gestures to be used in Angular.
	* Angular supports all built-in recognizers, as listed in
	* [HammerJS documentation](https://hammerjs.github.io/).
	*/
	events = [];
	/**
	* Maps gesture event names to a set of configuration options
	* that specify overrides to the default values for specific properties.
	*
	* The key is a supported event name to be configured,
	* and the options object contains a set of properties, with override values
	* to be applied to the named recognizer event.
	* For example, to disable recognition of the rotate event, specify
	*  `{"rotate": {"enable": false}}`.
	*
	* Properties that are not present take the HammerJS default values.
	* For information about which properties are supported for which events,
	* and their allowed and default values, see
	* [HammerJS documentation](https://hammerjs.github.io/).
	*
	*/
	overrides = {};
	/**
	* Properties whose default values can be overridden for a given event.
	* Different sets of properties apply to different events.
	* For information about which properties are supported for which events,
	* and their allowed and default values, see
	* [HammerJS documentation](https://hammerjs.github.io/).
	*/
	options;
	/**
	* Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
	* and attaches it to a given HTML element.
	* @param element The element that will recognize gestures.
	* @returns A HammerJS event-manager object.
	*/
	buildHammer(element) {
		const mc = new Hammer(element, this.options);
		mc.get("pinch").set({ enable: true });
		mc.get("rotate").set({ enable: true });
		for (const eventName in this.overrides) mc.get(eventName).set(this.overrides[eventName]);
		return mc;
	}
	static ɵfac = function HammerGestureConfig_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HammerGestureConfig)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: HammerGestureConfig,
		factory: HammerGestureConfig.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGestureConfig, [{ type: Injectable }], null, null);
})();
/**
* Event plugin that adds Hammer support to an application.
*
* @ngModule HammerModule
*/
var HammerGesturesPlugin = class HammerGesturesPlugin extends EventManagerPlugin {
	_config;
	_injector;
	loader;
	_loaderPromise = null;
	constructor(doc, _config, _injector, loader) {
		super(doc);
		this._config = _config;
		this._injector = _injector;
		this.loader = loader;
	}
	supports(eventName) {
		if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) return false;
		if (!window.Hammer && !this.loader) {
			if (typeof ngDevMode === "undefined" || ngDevMode) this._injector.get(Console).warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
			return false;
		}
		return true;
	}
	addEventListener(element, eventName, handler) {
		const zone = this.manager.getZone();
		eventName = eventName.toLowerCase();
		if (!window.Hammer && this.loader) {
			this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
			let cancelRegistration = false;
			let deregister = () => {
				cancelRegistration = true;
			};
			zone.runOutsideAngular(() => this._loaderPromise.then(() => {
				if (!window.Hammer) {
					if (typeof ngDevMode === "undefined" || ngDevMode) this._injector.get(Console).warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
					deregister = () => {};
					return;
				}
				if (!cancelRegistration) deregister = this.addEventListener(element, eventName, handler);
			}).catch(() => {
				if (typeof ngDevMode === "undefined" || ngDevMode) this._injector.get(Console).warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
				deregister = () => {};
			}));
			return () => {
				deregister();
			};
		}
		return zone.runOutsideAngular(() => {
			const mc = this._config.buildHammer(element);
			const callback = function(eventObj) {
				zone.runGuarded(function() {
					handler(eventObj);
				});
			};
			mc.on(eventName, callback);
			return () => {
				mc.off(eventName, callback);
				if (typeof mc.destroy === "function") mc.destroy();
			};
		});
	}
	isCustomEvent(eventName) {
		return this._config.events.indexOf(eventName) > -1;
	}
	static ɵfac = function HammerGesturesPlugin_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HammerGesturesPlugin)(ɵɵinject(DOCUMENT), ɵɵinject(HAMMER_GESTURE_CONFIG), ɵɵinject(Injector), ɵɵinject(HAMMER_LOADER, 8));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: HammerGesturesPlugin,
		factory: HammerGesturesPlugin.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGesturesPlugin, [{ type: Injectable }], () => [
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [DOCUMENT]
			}]
		},
		{
			type: HammerGestureConfig,
			decorators: [{
				type: Inject,
				args: [HAMMER_GESTURE_CONFIG]
			}]
		},
		{ type: Injector },
		{
			type: void 0,
			decorators: [{ type: Optional }, {
				type: Inject,
				args: [HAMMER_LOADER]
			}]
		}
	], null);
})();
/**
* Adds support for HammerJS.
*
* Import this module at the root of your application so that Angular can work with
* HammerJS to detect gesture events.
*
* Note that applications still need to include the HammerJS script itself. This module
* simply sets up the coordination layer between HammerJS and Angular's `EventManager`.
*
* @publicApi
*
* @deprecated The hammer integration is deprecated. Replace it by your own implementation.
*/
var HammerModule = class HammerModule {
	static ɵfac = function HammerModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || HammerModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({ type: HammerModule });
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ providers: [{
		provide: EVENT_MANAGER_PLUGINS,
		useClass: HammerGesturesPlugin,
		multi: true,
		deps: [
			DOCUMENT,
			HAMMER_GESTURE_CONFIG,
			Injector,
			[new Optional(), HAMMER_LOADER]
		]
	}, {
		provide: HAMMER_GESTURE_CONFIG,
		useClass: HammerGestureConfig
	}] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerModule, [{
		type: NgModule,
		args: [{ providers: [{
			provide: EVENT_MANAGER_PLUGINS,
			useClass: HammerGesturesPlugin,
			multi: true,
			deps: [
				DOCUMENT,
				HAMMER_GESTURE_CONFIG,
				Injector,
				[new Optional(), HAMMER_LOADER]
			]
		}, {
			provide: HAMMER_GESTURE_CONFIG,
			useClass: HammerGestureConfig
		}] }]
	}], null, null);
})();
/**
* DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
* values to be safe to use in the different DOM contexts.
*
* For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
* sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
* the website.
*
* In specific situations, it might be necessary to disable sanitization, for example if the
* application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
* Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
* methods, and then binding to that value from the template.
*
* These situations should be very rare, and extraordinary care must be taken to avoid creating a
* Cross Site Scripting (XSS) security bug!
*
* When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
* close as possible to the source of the value, to make it easy to verify no security bug is
* created by its use.
*
* It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
* does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
* code. The sanitizer leaves safe values intact.
*
* @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
* sanitization for the value passed in. Carefully check and audit all values and code paths going
* into this call. Make sure any user data is appropriately escaped for this security context.
* For more detail, see the [Security Guide](https://g.co/ng/security).
*
* @publicApi
*/
var DomSanitizer = class DomSanitizer {
	static ɵfac = function DomSanitizer_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DomSanitizer)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: DomSanitizer,
		factory: function DomSanitizer_Factory(__ngFactoryType__) {
			let __ngConditionalFactory__ = null;
			if (__ngFactoryType__) __ngConditionalFactory__ = new (__ngFactoryType__ || DomSanitizer)();
			else __ngConditionalFactory__ = ɵɵinject(DomSanitizerImpl);
			return __ngConditionalFactory__;
		},
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizer, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useExisting: forwardRef(() => DomSanitizerImpl)
		}]
	}], null, null);
})();
var DomSanitizerImpl = class DomSanitizerImpl extends DomSanitizer {
	_doc;
	constructor(_doc) {
		super();
		this._doc = _doc;
	}
	sanitize(ctx, value) {
		if (value == null) return null;
		switch (ctx) {
			case SecurityContext.NONE: return value;
			case SecurityContext.HTML:
				if (allowSanitizationBypassAndThrow(value, "HTML")) return unwrapSafeValue(value);
				return _sanitizeHtml(this._doc, String(value)).toString();
			case SecurityContext.STYLE:
				if (allowSanitizationBypassAndThrow(value, "Style")) return unwrapSafeValue(value);
				return value;
			case SecurityContext.SCRIPT:
				if (allowSanitizationBypassAndThrow(value, "Script")) return unwrapSafeValue(value);
				throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
			case SecurityContext.URL:
				if (allowSanitizationBypassAndThrow(value, "URL")) return unwrapSafeValue(value);
				return _sanitizeUrl(String(value));
			case SecurityContext.RESOURCE_URL:
				if (allowSanitizationBypassAndThrow(value, "ResourceURL")) return unwrapSafeValue(value);
				throw new RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss)`);
			default: throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss)`);
		}
	}
	bypassSecurityTrustHtml(value) {
		return bypassSanitizationTrustHtml(value);
	}
	bypassSecurityTrustStyle(value) {
		return bypassSanitizationTrustStyle(value);
	}
	bypassSecurityTrustScript(value) {
		return bypassSanitizationTrustScript(value);
	}
	bypassSecurityTrustUrl(value) {
		return bypassSanitizationTrustUrl(value);
	}
	bypassSecurityTrustResourceUrl(value) {
		return bypassSanitizationTrustResourceUrl(value);
	}
	static ɵfac = function DomSanitizerImpl_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DomSanitizerImpl)(ɵɵinject(DOCUMENT));
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: DomSanitizerImpl,
		factory: DomSanitizerImpl.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizerImpl, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [{
		type: void 0,
		decorators: [{
			type: Inject,
			args: [DOCUMENT]
		}]
	}], null);
})();
/**
* The list of features as an enum to uniquely type each `HydrationFeature`.
* @see {@link HydrationFeature}
*
* @publicApi
*/
var HydrationFeatureKind;
(function(HydrationFeatureKind) {
	HydrationFeatureKind[HydrationFeatureKind["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
	HydrationFeatureKind[HydrationFeatureKind["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
	HydrationFeatureKind[HydrationFeatureKind["I18nSupport"] = 2] = "I18nSupport";
	HydrationFeatureKind[HydrationFeatureKind["EventReplay"] = 3] = "EventReplay";
	HydrationFeatureKind[HydrationFeatureKind["IncrementalHydration"] = 4] = "IncrementalHydration";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));
/**
* Helper function to create an object that represents a Hydration feature.
*/
function hydrationFeature(ɵkind, ɵproviders = [], ɵoptions = {}) {
	return {
		ɵkind,
		ɵproviders
	};
}
/**
* Disables HTTP transfer cache. Effectively causes HTTP requests to be performed twice: once on the
* server and other one on the browser.
*
* @see [Disabling Caching](guide/ssr#disabling-caching)
*
* @publicApi
*/
function withNoHttpTransferCache() {
	return hydrationFeature(HydrationFeatureKind.NoHttpTransferCache);
}
/**
* The function accepts an object, which allows to configure cache parameters,
* such as which headers should be included (no headers are included by default),
* whether POST requests should be cached or a callback function to determine if a
* particular request should be cached.
*
* @see [Configuring HTTP transfer cache options](guide/ssr#caching-data-when-using-httpclient)
*
* @publicApi
*/
function withHttpTransferCacheOptions(options) {
	return hydrationFeature(HydrationFeatureKind.HttpTransferCacheOptions, withHttpTransferCache(options));
}
/**
* Enables support for hydrating i18n blocks.
*
* @publicApi 20.0
*/
function withI18nSupport() {
	return hydrationFeature(HydrationFeatureKind.I18nSupport, withI18nSupport$1());
}
/**
* Enables support for replaying user events (e.g. `click`s) that happened on a page
* before hydration logic has completed. Once an application is hydrated, all captured
* events are replayed and relevant event listeners are executed.
*
* @usageNotes
*
* Basic example of how you can enable event replay in your application when
* `bootstrapApplication` function is used:
* ```ts
* bootstrapApplication(AppComponent, {
*   providers: [provideClientHydration(withEventReplay())]
* });
* ```
* @publicApi
* @see {@link provideClientHydration}
*/
function withEventReplay() {
	return hydrationFeature(HydrationFeatureKind.EventReplay, withEventReplay$1());
}
/**
* Enables support for incremental hydration using the `hydrate` trigger syntax.
*
* @usageNotes
*
* Basic example of how you can enable incremental hydration in your application when
* the `bootstrapApplication` function is used:
* ```ts
* bootstrapApplication(AppComponent, {
*   providers: [provideClientHydration(withIncrementalHydration())]
* });
* ```
* @publicApi 20.0
* @see {@link provideClientHydration}
*/
function withIncrementalHydration() {
	return hydrationFeature(HydrationFeatureKind.IncrementalHydration, withIncrementalHydration$1());
}
/**
* Returns an `ENVIRONMENT_INITIALIZER` token setup with a function
* that verifies whether compatible ZoneJS was used in an application
* and logs a warning in a console if it's not the case.
*/
function provideZoneJsCompatibilityDetector() {
	return [{
		provide: ENVIRONMENT_INITIALIZER,
		useValue: () => {
			const ngZone = inject(NgZone);
			if (!inject(ZONELESS_ENABLED) && ngZone.constructor !== NgZone) {
				const console = inject(Console);
				const message = formatRuntimeError(-5e3, "Angular detected that hydration was enabled for an application that uses a custom or a noop Zone.js implementation. This is not yet a fully supported configuration.");
				console.warn(message);
			}
		},
		multi: true
	}];
}
/**
* Returns an `ENVIRONMENT_INITIALIZER` token setup with a function
* that verifies whether enabledBlocking initial navigation is used in an application
* and logs a warning in a console if it's not compatible with hydration.
*/
function provideEnabledBlockingInitialNavigationDetector() {
	return [{
		provide: ENVIRONMENT_INITIALIZER,
		useValue: () => {
			if (inject(IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, { optional: true })) {
				const console = inject(Console);
				const message = formatRuntimeError(5001, "Configuration error: found both hydration and enabledBlocking initial navigation in the same application, which is a contradiction.");
				console.warn(message);
			}
		},
		multi: true
	}];
}
/**
* Sets up providers necessary to enable hydration functionality for the application.
*
* By default, the function enables the recommended set of features for the optimal
* performance for most of the applications. It includes the following features:
*
* * Reconciling DOM hydration. Learn more about it [here](guide/hydration).
* * [`HttpClient`](api/common/http/HttpClient) response caching while running on the server and
* transferring this cache to the client to avoid extra HTTP requests. Learn more about data caching
* [here](guide/ssr#caching-data-when-using-httpclient).
*
* These functions allow you to disable some of the default features or enable new ones:
*
* * {@link withNoHttpTransferCache} to disable HTTP transfer cache
* * {@link withHttpTransferCacheOptions} to configure some HTTP transfer cache options
* * {@link withI18nSupport} to enable hydration support for i18n blocks
* * {@link withEventReplay} to enable support for replaying user events
*
* @usageNotes
*
* Basic example of how you can enable hydration in your application when
* `bootstrapApplication` function is used:
* ```ts
* bootstrapApplication(AppComponent, {
*   providers: [provideClientHydration()]
* });
* ```
*
* Alternatively if you are using NgModules, you would add `provideClientHydration`
* to your root app module's provider list.
* ```ts
* @NgModule({
*   declarations: [RootCmp],
*   bootstrap: [RootCmp],
*   providers: [provideClientHydration()],
* })
* export class AppModule {}
* ```
*
* @see {@link withNoHttpTransferCache}
* @see {@link withHttpTransferCacheOptions}
* @see {@link withI18nSupport}
* @see {@link withEventReplay}
*
* @param features Optional features to configure additional hydration behaviors.
* @returns A set of providers to enable hydration.
*
* @publicApi 17.0
*/
function provideClientHydration(...features) {
	const providers = [];
	const featuresKind = /* @__PURE__ */ new Set();
	for (const { ɵproviders, ɵkind } of features) {
		featuresKind.add(ɵkind);
		if (ɵproviders.length) providers.push(ɵproviders);
	}
	const hasHttpTransferCacheOptions = featuresKind.has(HydrationFeatureKind.HttpTransferCacheOptions);
	if (typeof ngDevMode !== "undefined" && ngDevMode && featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) && hasHttpTransferCacheOptions) throw new RuntimeError(5001, "Configuration error: found both withHttpTransferCacheOptions() and withNoHttpTransferCache() in the same call to provideClientHydration(), which is a contradiction.");
	return makeEnvironmentProviders([
		typeof ngDevMode !== "undefined" && ngDevMode ? provideZoneJsCompatibilityDetector() : [],
		typeof ngDevMode !== "undefined" && ngDevMode ? provideEnabledBlockingInitialNavigationDetector() : [],
		withDomHydration(),
		featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) || hasHttpTransferCacheOptions ? [] : withHttpTransferCache({}),
		providers
	]);
}
/**
* @module
* @description
* Entry point for all public APIs of the platform-browser package.
*/
/**
* @publicApi
*/
var VERSION = /* @__PURE__ */ new Version("20.3.33");
//#endregion
export { PathLocationStrategy as $, createApplication as A, ViewportScroller as B, HttpClientModule as C, BrowserModule as D, BrowserGetTestability as E, EVENT_MANAGER_PLUGINS as F, HashLocationStrategy as G, isPlatformServer as H, EventManager as I, NgIf as J, NgClass as K, EventManagerPlugin as L, provideProtractorTestingSupport as M, DomEventsPlugin as N, KeyEventsPlugin as O, DomRendererFactory2 as P, LocationStrategy as Q, REMOVE_STYLES_ON_COMPONENT_DESTROY as R, HttpClient as S, BrowserDomAdapter as T, AsyncPipe as U, isPlatformBrowser as V, CommonModule as W, LOCATION_INITIALIZED as X, NgTemplateOutlet as Y, Location as Z, withHttpTransferCacheOptions as _, HAMMER_LOADER as a, mergeMap as at, withNoHttpTransferCache as b, HammerModule as c, executeSchedule as ct, Title as d, popNumber as dt, getDOM as et, VERSION as f, popResultSelector as ft, withEventReplay as g, provideClientHydration as h, HAMMER_GESTURE_CONFIG as i, filter as it, platformBrowser as j, bootstrapApplication as k, HydrationFeatureKind as l, innerFrom as lt, enableDebugTools as m, isScheduler as mt, DomSanitizer as n, finalize as nt, HammerGestureConfig as o, of as ot, disableDebugTools as p, popScheduler as pt, NgForOf as q, DomSanitizerImpl as r, concatMap as rt, HammerGesturesPlugin as s, from as st, By as t, switchMap as tt, Meta as u, isArrayLike as ut, withI18nSupport as v, HttpRequest as w, HTTP_INTERCEPTORS as x, withIncrementalHydration as y, SharedStylesHost as z };
