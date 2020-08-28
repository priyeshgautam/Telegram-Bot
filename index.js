//const Telegrapf = require ('telegraf')  //import file

//BOT_TOKEN='1162946665:AAGzFwQ9NJpFVDqZb-n6dWbHFzypANG9al4'
//heroku YourAppId = fierce-beyond-66067
//heroku BOT_DOMAIN=https://fierce-beyond-66067.herokuapp.com

//heroku config:set --app fierce-beyond-66067 BOT_TOKEN='1162946665:AAGzFwQ9NJpFVDqZb-n6dWbHFzypANG9al4'
//heroku config:set --app fierce-beyond-66067 BOT_DOMAIN='https://fierce-beyond-66067.herokuapp.com'


const { Composer } = require('micro-bot')
const axios = require ('axios')

BOT_TOKEN='1162946665:AAGzFwQ9NJpFVDqZb-n6dWbHFzypANG9al4'
OMDB_API_KEY='6ba081c5'
//const bot = new Telegrapf(BOT_TOKEN) 
const bot = new Composer

bot.start((ctx) =>{                                         //start
    ctx.reply(`The bot has started !! Say hello to bot ,for available commands type
-/help `)
})
bot.help((ctx)=> {                                         //help
    ctx.reply("Help incoming ! \n - /start\n - /help\n - /fortune\n - /joke\n - /profile \n -/covid_status  \n -/photourl  \n -/photolocal \n -/location")
})
bot.on('sticker',(ctx)=> {                              //on intercepting sticker
    ctx.reply("cool sticker")
})
bot.hears('Hello',(ctx)=> {                             //on intercepting hello
    ctx.reply("have a nice day")
})
bot.command('fortune',(ctx)=> {                         //fortune
    url="http://yerkee.com//api/fortune"
    axios.get(url)
    .then((res)=>{
        //console.log(res.data.fortune)
        ctx.reply(res.data.fortune)
    })
})
bot.command('photolocal',(ctx)=>{                       //photo local
    ctx.telegram.sendChatAction(ctx.chat.id,'upload photo')
    ctx.telegram.sendPhoto(ctx.chat.id,{source:"resources/4.jpeg"},{"reply_to_message_id":ctx.message.message_id})
})
bot.command('photourl',(ctx)=>{                         //photo on url
    ctx.telegram.sendPhoto(ctx.chat.id,'https://images.pexels.com/photos/1820567/pexels-photo-1820567.jpeg?cs=srgb&dl=pexels-engin-akyurt-1820567.jpg&fm=jpg',{"reply_to_message_id":ctx.message.message_id})
})

bot.command('joke',(ctx)=> {                            //joke
    url="https://api.chucknorris.io/jokes/random"

    axios.get(url)
    .then((res)=>{
        //console.log(res.data.value)
        ctx.reply(res.data.value)
    })
})
bot.command('profile',(ctx)=> {                           //profile
    ctx.telegram.sendMessage(ctx.chat.id,'Profile incomming',
    {
        reply_markup:
        {
            inline_keyboard:[
                [{text:"Instagram",url:"www.instagram.com/priyesh__gautam"},{text:"FB",url:"https://www.facebook.com/priyeshgautam8"}],
                [{text:"Twitter",url:"https://twitter.com/priyesh__gautam"},{text:"Other",url:"https://www.google.com/search?q=priyesh+gautam"}],
                [{text:"MY Location",callback_data:"location"}]
            ]
        }

    })
})
bot.action('location',(ctx)=>{
    ctx.deleteMessage()
    ctx.telegram.sendLocation(ctx.chat.id,17.3850,78.4867)
})




bot.command('covid_status',(ctx)=> {                                    //covid tracker
    ctx.telegram.sendMessage(ctx.chat.id,'Corona incomming',
    {
        reply_markup:
        {
            inline_keyboard:[
                [{text:"Total",callback_data:"TT"}],
                [{text:"Delhi",callback_data:"DL"},{text:"Maharashtra",callback_data:"MH"}],
                [{text:"Andhra Pradesh",callback_data:"AP"},{text:"Tamil Nadu",callback_data:"TN"}],
                [{text:"Karnataka",callback_data:"KA"},{text:"Jharkhand",callback_data:"JH"}],
                [{text:"Uttar Pradesh",callback_data:"UP"},{text:"Chhattisgarh",callback_data:"CT"}],
                [{text:"West Bengal",callback_data:"WB"},{text:"Uttarakhand",callback_data:"UT"}],
                [{text:"Bihar",callback_data:"BR"},{text:"Goa",callback_data:"GA"}],
                [{text:"Telangana",callback_data:"TG"},{text:"Tripura",callback_data:"TR"}],
                [{text:"Gujarat",callback_data:"GJ"},{text:"Puducherry",callback_data:"PY"}],
                [{text:"Assam",callback_data:"AS"},{text:"Manipur",callback_data:"MN"}],
                [{text:"Rajasthan",callback_data:"RJ"},{text:"Himachal Pradesh",callback_data:"HP"}],
                [{text:"Odisha",callback_data:"OR"},{text:"Nagaland",callback_data:"NL"}],
                [{text:"Haryana",callback_data:"HR"},{text:"Arunachal Pradesh",callback_data:"AR"}],
                [{text:"Madhya Pradesh",callback_data:"MP"},{text:"Andaman and Nicobar Islands",callback_data:"AN"}],
                [{text:"Kerala",callback_data:"KL"},{text:"Ladakh",callback_data:"LA"}],
                [{text:"Punjab",callback_data:"PB"},{text:"Chandigarh",callback_data:"CH"}],
                [{text:"Jammu and Kashmir",callback_data:"JK"},{text:"Dadra and Nagar Haveli and Daman and Diu",callback_data:"DN"}],
                [{text:"Meghalaya",callback_data:"ML"},{text:"Mizoram",callback_data:"MZ"}],
                [{text:"Sikkim",callback_data:"SK"},{text:"Lakshadeep",callback_data:"LD"}]

            ]
        }

    })
})

bot.action('DL',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('TT',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('TN',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('AP',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('KA',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('UP',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('WB',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('BR',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('TG',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('GJ',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('AS',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('RJ',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('OR',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('HR',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('MP',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('KL',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('PB',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('JK',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('JH',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('CT',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('UT',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('GA',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('TR',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('PY',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('MN',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('HP',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('NL',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('AR',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('AN',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('LA',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('CH',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('DN',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('ML',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('SK',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('MZ',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('LD',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }
    })
})
})
bot.action('MH',(ctx)=>{
    ctx.deleteMessage()
    statecode=ctx.match
    getdata(statecode)
    .then((result)=>{
        ctx.telegram.sendMessage(ctx.chat.id,result,
    {
        reply_markup:
        {
            inline_keyboard:
            [
                [{text:"BACK",callback_data:"back"}]
            ]
        }

    })
})
})
bot.action('back',(ctx)=>{
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id,'Corona incomming',
    {
        reply_markup:
        {
            inline_keyboard:[
                [{text:"Total",callback_data:"TT"}],
                [{text:"Delhi",callback_data:"DL"},{text:"Maharashtra",callback_data:"MH"}],
                [{text:"Andhra Pradesh",callback_data:"AP"},{text:"Tamil Nadu",callback_data:"TN"}],
                [{text:"Karnataka",callback_data:"KA"},{text:"Jharkhand",callback_data:"JH"}],
                [{text:"Uttar Pradesh",callback_data:"UP"},{text:"Chhattisgarh",callback_data:"CT"}],
                [{text:"West Bengal",callback_data:"WB"},{text:"Uttarakhand",callback_data:"UT"}],
                [{text:"Bihar",callback_data:"BR"},{text:"Goa",callback_data:"GA"}],
                [{text:"Telangana",callback_data:"TG"},{text:"Tripura",callback_data:"TR"}],
                [{text:"Gujarat",callback_data:"GJ"},{text:"Puducherry",callback_data:"PY"}],
                [{text:"Assam",callback_data:"AS"},{text:"Manipur",callback_data:"MN"}],
                [{text:"Rajasthan",callback_data:"RJ"},{text:"Himachal Pradesh",callback_data:"HP"}],
                [{text:"Odisha",callback_data:"OR"},{text:"Nagaland",callback_data:"NL"}],
                [{text:"Haryana",callback_data:"HR"},{text:"Arunachal Pradesh",callback_data:"AR"}],
                [{text:"Madhya Pradesh",callback_data:"MP"},{text:"Andaman and Nicobar Islands",callback_data:"AN"}],
                [{text:"Kerala",callback_data:"KL"},{text:"Ladakh",callback_data:"LA"}],
                [{text:"Punjab",callback_data:"PB"},{text:"Chandigarh",callback_data:"CH"}],
                [{text:"Jammu and Kashmir",callback_data:"JK"},{text:"Dadra and Nagar Haveli and Daman and Diu",callback_data:"DN"}],
                [{text:"Meghalaya",callback_data:"ML"},{text:"Mizoram",callback_data:"MZ"}],
                [{text:"Sikkim",callback_data:"SK"},{text:"Lakshadeep",callback_data:"LD"}]

            ]
        }
    })
})
async function getdata(statecode){
    url='https://api.covid19india.org/data.json'
    let res=await axios.get(url)
    stateDataArr = res.data.statewise
    dataState=stateDataArr.filter((elem)=>{return elem.statecode == statecode})
    cases=dataState[0]
    results =`Cases in ${cases.state}:
    Confirmed Cases : ${cases.confirmed}
    Active Cases : ${cases.active}
    Recovered Cases :${cases.recovered}
    Death Cases:${cases.deaths}`

    console.log(results)
    return results
}





/* 
bot.on('inline_query',(ctx)=>{                                          //inline query
    query=ctx.inlineQuery.query
    url='https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}'
    if(query.length>0){
        console.log(query)
        axios.get(url)
        .then((res)=>{
            data=res.data
            searchArr=data.Search
        
            if(searchArr){
                result = searchArr.map((elem,index)=>{
                    return{
                        type:'photo',
                        id:index,
                        photo_url:elem.Poster,
                        thumb_url:elem.Poster,
                        caption:`Title:${elem.Title} \n Year:${elem.Year}\n IMDB URL:http:www.imdb.com/title/${elem.imdbID}`
                    }
                })
            }
    })

    }
    
}) */

//bot.launch()
module.exports=bot