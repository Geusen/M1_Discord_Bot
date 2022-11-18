const { Client, Intents } = require('discord.js'); //discord.js からClientとIntentsを読み込む

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]});  //clientインスタンスを作成する

client.once('ready', () => { //ここにボットが起動した際のコードを書く(一度のみ実行)
	console.log('set up'); //黒い画面(コンソール)に「起動完了」と表示させる
});

client.login('トークン'); //ログインする
