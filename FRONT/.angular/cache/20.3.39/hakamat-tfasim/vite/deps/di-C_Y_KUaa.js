//#region node_modules/@angular/core/fesm2022/not_found.mjs
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
/**
* Current injector value used by `inject`.
* - `undefined`: it is an error to call `inject`
* - `null`: `inject` can be called but there is no injector (limp-mode).
* - Injector instance: Use the injector for resolution.
*/
var _currentInjector = void 0;
function getCurrentInjector() {
	return _currentInjector;
}
function setCurrentInjector(injector) {
	const former = _currentInjector;
	_currentInjector = injector;
	return former;
}
function inject(token, options) {
	const currentInjector = getCurrentInjector();
	if (!currentInjector) throw new Error("Current injector is not set.");
	if (!token.ɵprov) throw new Error("Token is not an injectable");
	return currentInjector.retrieve(token, options);
}
/**
* Value returned if the key-value pair couldn't be found in the context
* hierarchy.
*/
var NOT_FOUND = Symbol("NotFound");
/**
* Error thrown when the key-value pair couldn't be found in the context
* hierarchy. Context can be attached below.
*/
var NotFoundError = class extends Error {
	name = "ɵNotFound";
	constructor(message) {
		super(message);
	}
};
/**
* Type guard for checking if an unknown value is a NotFound.
*/
function isNotFound(e) {
	return e === NOT_FOUND || e?.name === "ɵNotFound";
}
//#endregion
//#region node_modules/@angular/core/fesm2022/primitives/di.mjs
/**
* @license Angular v20.3.33
* (c) 2010-2025 Google LLC. https://angular.dev/
* License: MIT
*/
function defineInjectable(opts) {
	return {
		token: opts.token,
		providedIn: opts.providedIn || null,
		factory: opts.factory,
		value: void 0
	};
}
function registerInjectable(ctor, declaration) {
	ctor.ɵprov = declaration;
	return ctor;
}
//#endregion
export { getCurrentInjector as a, setCurrentInjector as c, NotFoundError as i, registerInjectable as n, inject as o, NOT_FOUND as r, isNotFound as s, defineInjectable as t };
