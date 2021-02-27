const prompt = require("prompt")
const fs = require('fs-extra')
const color = require('./color')
const path = require('path')

module.exports = {
    criacaoEnv: async ()=>{
        let schema = {
            properties: {
               numero_dono:{
                 description: color("Digite seu número de WhatsApp com o código do país incluído - ex: 55219xxxxxxxx.(O SEU NÚMERO E NÃO O DO BOT) "),
                 required: true
               },
            }
         }
         const {numero_dono} = await prompt.get(schema)
         const env = "# LEMBRE-SE SEU NÚMERO DE WHATSAPP E NÃO O DO BOT. (COM CÓDIGO DO PAÍS INCLUÍDO)\n"+
         "NUMERO_DONO="+numero_dono+"\n"+
         "# REMOVEBG - Coloque abaixo sua chave API do site remove.bg (REMOVER FUNDO DE IMAGENS)\n"+
         "API_REMOVE_BG=??????\n"+
         "# NEWSAPI- Coloque abaixo sua chave API do site newsapi.org (NOTICIAIS ATUAIS)\n"+
         "API_NEWS_ORG=??????\n"+
         "# RAPIDAPI - Coloque sua chave API do site rapidapi.com (PESQUISA IMAGENS/WEB/ETC)\n"+
         "API_RAPIDAPI=??????\n"+
         "# TWITTER - Coloque abaixo suas chaves do TWITTER (DOWNLOAD TWITTER)\n"+
         "twitter_consumer_key=myuYcxAkQMBnyXqjiTi1hdYfT\n"+
         "twitter_consumer_secret=o66oWiKugfxB9p1Qekdxi93ES4QOwOiSKeCQjMxQ1uUb5WXDD3\n"+
         "twitter_access_token=1120302751416819717-fpcidYCFgN9hUS17JxbhsLhilzeg6I\n"+
         "twitter_access_token_secret=wZSRdEpmSeopzuiq0sk8AXoeDCZl5QUOovCfT0KYHrUO3\n"+
         "# ACRCLOUD - Coloque abaixo suas chaves do ACRCloud (Reconhecimento de Músicas)\n"+
         "acr_host=??????\n"+
         "acr_access_key=??????\n"+
         "acr_access_secret=??????\n"
         await fs.writeFile(path.resolve('.env'), env , 'utf8')
    },

    verificarEnv:()=>{
        let resposta = {
            numero_dono : {
               resposta: (process.env.NUMERO_DONO == "55219xxxxxxxx") ? "O número do DONO ainda não foi configurado" : "✓ Número do DONO configurado.",
               cor_resposta: (process.env.NUMERO_DONO == "55219xxxxxxxx") ? "red" : false
            },
            removebg : {
              resposta: (process.env.API_REMOVE_BG == "??????") ? "A API do REMOVEBG ainda não foi configurada" : "✓ API REMOVEBG Configurada.",
              cor_resposta: (process.env.API_REMOVE_BG == "??????") ? "red" : false
            },
            newsapi : {
              resposta: (process.env.API_NEWS_ORG == "??????") ? "A API do NEWSAPI ainda não foi configurada" : "✓ API NEWSAPI Configurada.",
              cor_resposta: (process.env.API_NEWS_ORG == "??????") ? "red" : false
            },
            rapidapi : {
              resposta: (process.env.API_RAPIDAPI == "??????") ? "A API do RAPIDAPI ainda não foi configurada" : "✓ API RAPIDAPI Configurada.",
              cor_resposta: (process.env.API_RAPIDAPI == "??????") ? "red" : false
            },
            twitter :{
              resposta: (process.env.twitter_consumer_key == "??????" || process.env.twitter_consumer_secret == "??????" || process.env.twitter_access_token == "??????" || process.env.twitter_access_token_secret == "??????" )
               ? "A API do Twitter ainda não foi configurada corretamente" : "✓ API Twitter Configurada.",
              cor_resposta: (process.env.twitter_consumer_key == "??????" || process.env.twitter_consumer_secret == "??????" || process.env.twitter_access_token == "??????" || process.env.twitter_access_token_secret == "??????" )
              ? "red" : false
            },
            acrcloud :{
              resposta: (process.env.acr_host == "??????" || process.env.acr_access_key== "??????" || process.env.acr_access_secret == "??????")
               ? "A API do ACRCloud ainda não foi configurada corretamente" : "✓ API ACRCloud Configurada.",
              cor_resposta: (process.env.acr_host == "??????" || process.env.acr_access_key== "??????" || process.env.acr_access_secret == "??????")
              ? "red" : false
            }
          }
      
          console.log("[ENV]", color(resposta.numero_dono.resposta, resposta.numero_dono.cor_resposta))
          console.log("[ENV]", color(resposta.removebg.resposta, resposta.removebg.cor_resposta))
          console.log("[ENV]", color(resposta.newsapi.resposta, resposta.newsapi.cor_resposta))
          console.log("[ENV]", color(resposta.rapidapi.resposta, resposta.rapidapi.cor_resposta))
          console.log("[ENV]", color(resposta.twitter.resposta, resposta.twitter.cor_resposta))
          console.log("[ENV]", color(resposta.acrcloud.resposta, resposta.acrcloud.cor_resposta))
    }
}