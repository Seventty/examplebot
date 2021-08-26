const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv').config();

const token = TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bconsole.log(msg);
});