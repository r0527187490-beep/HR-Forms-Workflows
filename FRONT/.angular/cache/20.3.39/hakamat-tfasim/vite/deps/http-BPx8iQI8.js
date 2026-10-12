import { Ac as formatRuntimeError, Bc as makeEnvironmentProviders, Ct as computed, Dl as __asyncValues, Dt as linkedSignal, El as __asyncGenerator, Fc as inject, Ja as ɵɵdefineNgModule, Kc as signal, Mt as APP_BOOTSTRAP_LISTENER, Ol as __await, Pl as __values, Qc as ɵɵdefineInjector, Qs as DestroyRef, Ri as setClassMetadata, Rn as NgModule, Si as performanceMarkFeature, St as ResourceImpl, Tc as assertInInjectionContext, Tl as isFunction, Tn as Injectable, Tt as encapsulateResourceError, Wc as runInInjectionContext, Wn as NgZone, Yc as truncateMiddle, Zc as ɵɵdefineInjectable, Zs as DOCUMENT, _i as makeStateKey, fl as createOperatorSubscriber, hc as PendingTasks, hl as Observable, jl as __generator, kl as __awaiter, ll as map, ml as operate, oc as InjectionToken, sc as Injector, tc as EnvironmentInjector, tl as ɵɵinject, vc as RuntimeError, vl as observable, wn as Inject, xl as reportUnhandledError, yr as TransferState, zt as ApplicationRef } from "./core-8NkJZpmB.js";
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
* A token used to manipulate and access values stored in `HttpContext`.
*
* @see [Request and response metadata](guide/http/interceptors#request-and-response-metadata)
*
* @publicApi
*/
var HttpContextToken = class {
	defaultValue;
	constructor(defaultValue) {
		this.defaultValue = defaultValue;
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
/**
* Adds one or more functional-style HTTP interceptors to the configuration of the `HttpClient`
* instance.
*
* @see {@link HttpInterceptorFn}
* @see {@link provideHttpClient}
* @publicApi
*/
function withInterceptors(interceptorFns) {
	return makeHttpFeature(HttpFeatureKind.Interceptors, interceptorFns.map((interceptorFn) => {
		return {
			provide: HTTP_INTERCEPTOR_FNS,
			useValue: interceptorFn,
			multi: true
		};
	}));
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
* Configures the current `HttpClient` instance to make requests via the parent injector's
* `HttpClient` instead of directly.
*
* By default, `provideHttpClient` configures `HttpClient` in its injector to be an independent
* instance. For example, even if `HttpClient` is configured in the parent injector with
* one or more interceptors, they will not intercept requests made via this instance.
*
* With this option enabled, once the request has passed through the current injector's
* interceptors, it will be delegated to the parent injector's `HttpClient` chain instead of
* dispatched directly, and interceptors in the parent configuration will be applied to the request.
*
* If there are several `HttpClient` instances in the injector hierarchy, it's possible for
* `withRequestsMadeViaParent` to be used at multiple levels, which will cause the request to
* "bubble up" until either reaching the root level or an `HttpClient` which was not configured with
* this option.
*
* This feature cannot be combined with `withFetch` in the same `provideHttpClient()` call.
*
* @see [HTTP client setup](guide/http/setup#withrequestsmadeviaparent)
* @see {@link provideHttpClient}
* @publicApi 19.0
*/
function withRequestsMadeViaParent() {
	return makeHttpFeature(HttpFeatureKind.RequestsMadeViaParent, [{
		provide: HttpBackend,
		useFactory: () => {
			const handlerFromParent = inject(HttpHandler, {
				skipSelf: true,
				optional: true
			});
			if (ngDevMode && handlerFromParent === null) throw new Error("withRequestsMadeViaParent() can only be used when the parent injector also configures HttpClient");
			return handlerFromParent;
		}
	}]);
}
/**
* Configures the current `HttpClient` instance to make requests using the fetch API.
*
* Note: The Fetch API doesn't support progress report on uploads.
*
* @see [Advanced fetch Options](guide/http/making-requests#advanced-fetch-options)
*
* @publicApi
*/
function withFetch() {
	return makeHttpFeature(HttpFeatureKind.Fetch, [
		FetchBackend,
		{
			provide: FETCH_BACKEND,
			useExisting: FetchBackend
		},
		{
			provide: HttpBackend,
			useExisting: FetchBackend
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
//#endregion
//#region node_modules/@angular/common/fesm2022/http.mjs
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
/**
* `httpResource` makes a reactive HTTP request and exposes the request status and response value as
* a `WritableResource`. By default, it assumes that the backend will return JSON data. To make a
* request that expects a different kind of data, you can use a sub-constructor of `httpResource`,
* such as `httpResource.text`.
*
* @experimental 19.2
* @initializerApiFunction
*/
var httpResource = (() => {
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
export { popResultSelector as $, JsonpInterceptor as A, XhrFactory as B, HttpResponse as C, HttpXhrBackend as D, HttpUrlEncodingCodec as E, withInterceptorsFromDi as F, filter as G, switchMap as H, withJsonpSupport as I, from as J, mergeMap as K, withNoXsrfProtection as L, provideHttpClient as M, withFetch as N, HttpXsrfTokenExtractor as O, withInterceptors as P, popNumber as Q, withRequestsMadeViaParent as R, HttpRequest as S, HttpStatusCode as T, finalize as U, parseCookieValue as V, concatMap as W, innerFrom as X, executeSchedule as Y, isArrayLike as Z, HttpHandler as _, HTTP_INTERCEPTORS as a, HttpInterceptorHandler as b, HttpClient as c, HttpClientXsrfModule as d, popScheduler as et, HttpContext as f, HttpFeatureKind as g, HttpEventType as h, FetchBackend as i, REQUESTS_CONTRIBUTE_TO_STABILITY as j, JsonpClientBackend as k, HttpClientJsonpModule as l, HttpErrorResponse as m, httpResource as n, HTTP_ROOT_INTERCEPTOR_FNS as o, HttpContextToken as p, of as q, withHttpTransferCache as r, HttpBackend as s, HTTP_TRANSFER_CACHE_ORIGIN_MAP as t, isScheduler as tt, HttpClientModule as u, HttpHeaderResponse as v, HttpResponseBase as w, HttpParams as x, HttpHeaders as y, withXsrfConfiguration as z };
