module.exports = {
        TOKEN: 'OTU5NzQ4OTc2OTQ3NjM0MTc2.YkgZ4w.Q1YbKp0JbG7wg2hJxsZl7NSOHb4',
        px: 'b!',
    

    opt: {
        DJ: {
            enabled: false,
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume','tavern']
        },
        selfDeaf: false,
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25 
            }
        }
    }
};
