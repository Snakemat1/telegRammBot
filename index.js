const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()

const text = require('./const')
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name}` + ", ты можешь воспользоваться командой /help что бы узнать о командах бота"))
bot.help((ctx) => ctx.reply(text.commands))

bot.command('language', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Языки</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('javascript', 'btn_1'), Markup.button.callback('python', 'btn_2')],
                [Markup.button.callback('java', 'btn_3'), Markup.button.callback('C++', 'btn_4')]




            ]

        ))
    } catch (e) {
        console.error(e)
    }
})

bot.command('channelCRS', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Каналы</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('javascriptCRS', 'btn_5'), Markup.button.callback('pythonCRS', 'btn_6')],
                [Markup.button.callback('javaCRS', 'btn_7'), Markup.button.callback('C++CRS', 'btn_8')]




            ]

        ))
    } catch (e) {
        console.error(e)
    }
})

function addActionBot(name, text) {
    bot.action(name, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            if (src !== false) {
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML(text, {
                disable_web_page_previe: true
            })



        } catch (e) {
            console.error(e)

        }
    })

}
addActionBot('btn_1', text.text1)
addActionBot('btn_2', text.text2)
addActionBot('btn_3', text.text3)
addActionBot('btn_4', text.text4)
addActionBot('btn_5', text.text5)
addActionBot('btn_6', text.text6)
addActionBot('btn_7', text.text7)
addActionBot('btn_8', text.text8)








bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))