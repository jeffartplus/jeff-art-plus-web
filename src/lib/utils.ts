import { languageTag } from '$lib/paraglide/runtime';
import { i18n } from './i18n';

type a = {
	value: string;
	_key: string;
	_type: string;
};

export const getText = (arrayString: a[]) => {
	let defaultString = '';
	const tag = languageTag();
	let finded;

	for (const s of arrayString) {
		if (s._key === i18n.config.defaultLanguageTag) {
			defaultString = s.value;
		}
		if (s._key === tag) {
			finded = s.value;
		}
		if (defaultString && finded) {
			break;
		}
	}

	return finded ?? defaultString;
};

export const getRangeDateString = (
	startDate: Date,
	endDate: Date,
	lTag: string = languageTag()
) => {
	let options = { day: 'numeric', month: 'short', year: 'numeric' };

	const endDateString = endDate.toLocaleDateString(lTag, options);

	if (startDate.getFullYear() == endDate.getFullYear()) {
		options = {
			day: 'numeric',
			month: 'short'
		};
	}

	const startDateString = startDate.toLocaleDateString(lTag, options);

	return `${startDateString} - ${endDateString}`;
};
