const readline = require('readline-sync') 
const robots = {
	text: require('./robots/text.js')
}
//Iniciar
function start(){
	//criar content
	const content = {}

	//adicionar 
	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()
	content.language = askAndReturnLanguage()
	robots.text(content)

	function askAndReturnSearchTerm(){
		return readline.question('Type a Wikipedia search term: ')

	}

	function askAndReturnPrefix(){
		const prefixes = ['Who is', 'What is', 'The history of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes,'Choose one option')
		const selectedPrefixText = prefixes[selectedPrefixIndex]
		
		return selectedPrefixText
	}

	function askAndReturnLanguage(){
		const languages = ['pt', 'en', 'es']
		const selectedLanguageIndex = readline.keyInSelect(languages,'Choose one option')
		const selectedLanguageText = languages[selectedLanguageIndex]
		
		return selectedLanguageText
	}

	console.log(content);
}

start()