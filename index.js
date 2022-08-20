const Discord = require("discord.js");
const bot = new Discord.Client();
const { prefix, token } = require("./config.json");
const path = require("path");

bot.on("message", async message => {

	if (message.content.startsWith(prefix)) {
		const command = message.content.slice(prefix.length + 1).toLowerCase();

		if (!command) 
			message.channel.send('?');

		// Chaud au cul
		else if (command == "ça va ?")
			message.reply("rah putain j'ai chaud au cul");
		
		// Mouchage en vocal
		else if (command == "viens") {
			voiceChannel = message.member.voice.channel;
			
			if (!voiceChannel) {
				message.channel.send("hein ? où ça ?");
				return;
			}

			const connection = await voiceChannel.join();
			const dispatcher = connection.play(path.join(__dirname, "media/mouchage.mp3"));

			dispatcher.on("finish", () => {
				voiceChannel.leave();
				message.channel.send("aaah");
			});

			dispatcher.on("error", console.error);
		}
	}

	else if (message.content.includes("baba"))
		message.channel.send("ferme ta gueule sale fils de pute");

	else {
		// Pokébapt
		if (message.content.includes("pokébapt")) {
			message.author
				.send("euh... excuse-moi, tu pourrais arrêter avec \"pokébapt\" ? nan parce que ça commence vraiment à être très chiant en fait.")
				.catch(error => {
					console.error("Could not send DM to this user");
					//message.react('😠');
				});
			if (!message.author.bot)
				message.channel.send('😠');
		}

		// Le "gros bâti"
		else if (message.content.includes("gros"))
			message.channel.send('🤨');

		// Émote "baba"
		else if (message.content == "<:baba:799624681761144852>" && !message.author.bot)
			message.channel.send("<:baba:799624681761144852>");

		else if (message.content == "nez")
			message.channel.send("nez");
	}
});

bot.login(token);