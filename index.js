const TelegramApi = require('node-telegram-bot-api')

const token = '5546637037:AAHJOpqw5FYH8hnxtlM1kF1eaT_bE5GASqY'

const bot = new TelegramApi(token, { polling: true })

const start = () => {
	bot.setMyCommands([
		{ command: '/start', description: 'Начальное приветствие' },
		{ command: '/info', description: 'Информация о пользователе' },
	])

	bot.on('message', async msg => {
		const chatId = msg.chat.id
		const text = msg.text
		//console.log(msg)

		if (text === '/start') {
			await bot.sendSticker(
				chatId,
				'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/11.webp'
			)
			return bot.sendMessage(chatId, 'Добро пожаловать!')
		}

		if (text === '/info') {
			await bot.sendSticker(
				chatId,
				'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp'
			)
			return bot.sendMessage(
				chatId,
				`Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`
			)
		}
		return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй ещё раз!')
	})
}
start()
