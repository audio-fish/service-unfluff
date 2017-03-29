'use strict';

const Bluebird = require('bluebird');
const request = Bluebird.promisify(require('request'));
const extractor = require('unfluff');

const DEFAULT_LANG = 'en';


function unfluff(params) {

	const lang = params.lang || DEFAULT_LANG;

	if (params.url) {
		return request(params.url)
			.then(x => extractor(x.body, lang));
	}

	return { error: 'no url provided to unfluff :('};
}

function fromHTML(params) {

	const lang = params.lang || DEFAULT_LANG;

	if (params.html) {
		return extractor(params.html, lang);
	}

	return { error: 'no html provided to unfluff :('};
}

exports.unfluff = unfluff;
exports.fromHTML = fromHTML;
