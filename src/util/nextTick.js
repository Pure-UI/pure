/*
 * MIT license
 * https://github.com/vuejs/vue
 */

const noop = () => {}
const UA = window.navigator.userAgent.toLowerCase()
const isIOS = /iphone|ipad|ipod|ios/.test(UA)
const isNative = Ctor => /native code/.test(Ctor.toString())

const nextTick = (function () {
	const callbacks = []
	let pending = false
	let timerFunc

	function nextTickHandler() {
		pending = false;
		const copies = callbacks.slice(0);
		callbacks.length = 0;
		for (let i = 0; i < copies.length; i++) {
			copies[i]();
		}
	}

	// the nextTick behavior leverages the microtask queue, which can be accessed
	// via either native Promise.then or MutationObserver.
	// MutationObserver has wider support, however it is seriously bugged in
	// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	// completely stops working after triggering a few times... so, if native
	// Promise is available, we will use it:
	if (typeof Promise !== 'undefined' && isNative(Promise)) {
		var p = Promise.resolve()
		timerFunc = () => {
			p.then(nextTickHandler)
			// in problematic UIWebViews, Promise.then doesn't completely break, but
			// it can get stuck in a weird state where callbacks are pushed into the
			// microtask queue but the queue isn't being flushed, until the browser
			// needs to do some other work, e.g. handle a timer. Therefore we can
			// "force" the microtask queue to be flushed by adding an empty timer.
			if (isIOS) setTimeout(noop)
		}
	} else if (typeof MutationObserver !== 'undefined' && (
		isNative(MutationObserver) ||
		// PhantomJS and iOS 7.x
		MutationObserver.toString() === '[object MutationObserverConstructor]'
	)) {
		// use MutationObserver where native Promise is not available,
		// e.g. PhantomJS IE11, iOS7, Android 4.4
		var counter = 1
		var observer = new MutationObserver(nextTickHandler)
		var textNode = document.createTextNode(String(counter))
		observer.observe(textNode, {
			characterData: true
		})
		timerFunc = () => {
			counter = (counter + 1) % 2
			textNode.data = String(counter)
		}
	} else {
		// fallback to setTimeout
		/* istanbul ignore next */
		timerFunc = setTimeout
	}

	return function queueNextTick (cb, ctx) {
		const func = ctx
			? function () { cb.call(ctx) }
			: cb
		callbacks.push(func)
		if (!pending) {
			pending = true
			timerFunc(nextTickHandler, 0)
		}
	}
})();

export default nextTick;
