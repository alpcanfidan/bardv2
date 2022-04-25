const Discord =require('discord.js')

const client= new Discord.Client();

const ytdl=require('ytdl-core')

const servers={

}
let server=undefined;

const play=async(connection,message)=>{
    const server=servers[message.guild.id];
    const stream=ytdl(server.queue[0],{
        filter:"audioonly",
        quality:"highestaudio"
    })
    server.dispatcher = connection.play(stream);
    let song=await (await ytdl.getInfo(server.queue[0])).videoDetails.title;
    server.dispatcher.on("finish",()=>{
        server.queue.shift();
        if(server.queue[0]){
            message.channel.send("Şarkı çalınıyor: "+song)
            play(connection,message)
        }
        else connection.disconnect();
    })
}

client.on("message",message=>{
    console.log("gelen mesaj: "+message.content)

    const parsedMessage=message.content.split(" ") //!oynat URL

    switch (parsedMessage[0]) {
        case "b!tavern":
            if(!message.member.voice.channel){
            message.channel.send("Where!")
                return;
            }
            if(!servers[message.guild.id])
        servers[message.guild.id]={
            queue:[]
        }

        server=servers[message.guild.id]
        if(server.queue.length<=1)
        try{
            message.member.voice.channel.join().then(message.channel.send("b!play https://youtu.be/pgLjYsVP4H0").then(message.channel.send("b!play https://youtu.be/roABNwbjZf4").then(message.channel.send("b!play https://youtu.be/uGJKyPX0XT8").then(message.channel.send("b!play https://youtu.be/fIuO3RpMvHg").then(message.channel.send("b!play https://youtu.be/WUhMLw6vq8g").then(message.channel.send("b!play https://youtu.be/XbS3tPO9sUs").then(message.channel.send("b!play https://www.youtube.com/watch?v=4bhceZgdWFM").then(message.channel.send("b!play https://youtu.be/rcbCkQbQxdY").then(message.channel.send("b!play https://youtu.be/8GYL6c_GTE0"))))))))))
        }catch(e){
            console.log("hata oluştu"+e)
        }
        break;
        case "b!play":
            if(!parsedMessage[1]){
            message.channel.send("Link !!!")
            return;
            }

            if(!message.member.voice.channel){
            message.channel.send("Where !!!")
                return;
            }

            if(!servers[message.guild.id])
            servers[message.guild.id]={
                queue:[]
            }

            server=servers[message.guild.id]
            server.queue.push(parsedMessage[1])

            if(server.queue.length<=1)
            try{
                message.member.voice.channel.join().then(connection=>{
                    play(connection,message)
                })
            }catch(e){
                console.log("hata oluştu"+e)
            }
            break;
        case "b!skip":
            if(server.dispatcher)server.dispatcher.end();
            break;
        case "b!stop":
            if(message.guild.voice.channel){
                server.dispatcher.end()
                console.log("kuyruk durduruldu")
            }
            if(message.guild.connection)
            message.guild.voice.connection.disconnect();
            break;
        default:
            break;
    }
})




client.login("OTU5NzQ4OTc2OTQ3NjM0MTc2.YkgZ4w.XqnU48HjGcklOrJ4AlQ2ej3xF_U")