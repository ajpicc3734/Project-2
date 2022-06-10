const { Record } = require('../models');

const vinyldata = [
    {
        title: 'Enter the Wu-Tang (36 Chambers)',
        artist: 'Wu-Tang Clan',
        filename: //img file here
        user_id: // John
    },
    {
        title: '3 Feet High and Rising',
        artist: 'De La Soul'
        filename: //img file here
        user_id: // John
    },
    {
        title: 'Dicovery',
        artist: 'Daft Punk',
        filename: //img file here
        user_id: //user id here
    },
    {
        title: 'Now & Then',
        artist: 'The Carpenters',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Sinatras Swingin Session!!!',
        artist: 'Frank Sinatra',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Best of Chopin Vol.2',
        artist: 'Various',
        filename: //img file here
        user_id: // John
    }, 
    {
        title: 'Good Faith',
        artist: 'Madeon',
        filename: //img file here
        user_id: //Mihir
    }, 
    {
        title: 'Alive',
        artist: 'Daft Punk',
        filename: //img file here
        user_id: //Mihir
    }, 
    {
        title: 'Worlds',
        artist: 'Porter Robinson',
        filename: //img file here
        user_id: //Mihir
    }, 
    {
        title: 'The Mouse and The Mask',
        artist: 'Danger Doom',
        filename: //img file here
        user_id: //Chris
    }, 
    {
        title: 'Demon Days',
        artist: 'Gorillaz',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Self-titled',
        artist: 'Santana',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Live in San Francisco',
        artist: 'King Gizzard and the Lizard Wizard',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Funerals',
        artist: 'Arcade Fire',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Bitches Brew',
        artist: 'Miles Davis'
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Dark Side of the Moon',
        artist: 'Pink Floyd',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'A Deeper Understanding',
        artist: 'the War on Drugs',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Hallelujah Anyhow',
        artist: 'Hiss Golden Messanger',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Only Built 4 Cuban Linx',
        artist: 'Chef Raekwon',
        filename: //img file here
        user_id: //Chris
    }, 
    {
        title: 'Purple Rain',
        artist: 'Prince',
        filename: //img file here
        user_id: //Lunice
    }, 
    {
        title: 'Call Me if you Get Lost',
        artist: 'Tyler the Creator',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Planet Her',
        artist: 'Doja Cat',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Man on the Moon: End of Day',
        artist: 'Kid Cudi',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Back to Black',
        artist: 'Amy Winehoue',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Dawn FM',
        artist: 'The Weeknd',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Experience Hendrix: The Best of Jimi Hendrix',
        artist: 'Jimi Hendrix',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'The Homecoming: Live',
        artist: 'Beyonce',
        filename: //img file here
        user_id: //user id here
    }, 
    {
        title: 'Good Kid M.A.A.D. City',
        artist: 'Kendrick Lamar',
        filename: //img file here
        user_id: //Lunice
    }, 
         
];

const seedRecord = () => Record.bulkCreate(vinylData);
module.exports = seedRecord;