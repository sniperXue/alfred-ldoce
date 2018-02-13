/* eslint camelcase: ["error", {properties: "never"}] */
const os = require('os');

const user = os.userInfo();
const {pathToAnkiMedia} = process.env;
console.log(user);

module.exports = {
	concurrency: 10,
	input: './src/input/header.json',
	body: './src/input/body.json',
	fields: {
		headword: 'Headword',
		// frequency: 'Frequency',
		audio: 'Audio',
		translation: 'Translation',
		example: 'Example',
		image: 'Image',
		verb_table: 'Verb_table',
		tag: 'Tag'
	},
	get mediaDir() {
		return user.homedir + pathToAnkiMedia;
	}
};
