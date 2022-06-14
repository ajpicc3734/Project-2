const { Record } = require('../models');

const vinylData = [
    {
        title: 'Enter the Wu-Tang (36 Chambers)',
        artist: 'Wu-Tang Clan',
        filename: '/css/images/36Chambers.jpg',
        user_id: '1'
    },
    {
        title: '3 Feet High and Rising',
        artist: 'De La Soul',
        filename: '/css/images/3FeetAnd.jpg',
        user_id: '2'
    },
    {
        title: 'Dicovery',
        artist: 'Daft Punk',
        filename: '/css/images/discovery.jpg',
        //user_id: //user id here
    },
    {
        title: 'Now & Then',
        artist: 'The Carpenters',
        filename: '/css/images/now&then.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Sinatras Swingin Session!!!',
        artist: 'Frank Sinatra',
        filename: '/css/images/sinatra.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Best of Chopin Vol.2',
        artist: 'Various',
        filename: '/css/images/chopin-essentials.jpg',
        //user_id: // John
    }, 
    {
        title: 'Good Faith',
        artist: 'Madeon',
        filename: '/css/images/goodfaith.jpg',
        //user_id: //Mihir
    }, 
    {
        title: 'Alive',
        artist: 'Daft Punk',
        filename: '/css/images/daftpunkalive.jpg',
        //user_id: //Mihir
    }, 
    {
        title: 'Worlds',
        artist: 'Porter Robinson',
        filename: '/css/images/porterrob.jpg',
        //user_id: //Mihir
    }, 
    {
        title: 'The Mouse and The Mask',
        artist: 'Danger Doom',
        filename: '/css/images/mouseandmask.jpg',
        //user_id: //Chris
    }, 
    {
        title: 'Demon Days',
        artist: 'Gorillaz',
        filename: '/css/images/Demondays.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Self-titled',
        artist: 'Santana',
        filename: '/css/images/santana.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Live in San Francisco',
        artist: 'King Gizzard and the Lizard Wizard',
        filename: '/css/images/kingGiz.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Funerals',
        artist: 'Arcade Fire',
        filename: '/css/images/arcadefire.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Bitches Brew',
        artist: 'Miles Davis',
        filename: '/css/images/bitchesbrew.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Dark Side of the Moon',
        artist: 'Pink Floyd',
        filename: '/css/images/darkside.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'A Deeper Understanding',
        artist: 'the War on Drugs',
        filename: '/css/images/deeperunderstanding.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Hallelujah Anyhow',
        artist: 'Hiss Golden Messanger',
        filename: '/css/images/hallelujah.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Only Built 4 Cuban Linx',
        artist: 'Chef Raekwon',
        filename: '/css/images/cubanlinx.jpg',
        //user_id: //Chris
    }, 
    {
        title: 'Purple Rain',
        artist: 'Prince',
        filename: '/css/images/purplerain.jpg',
        //user_id: //Lunice
    }, 
    {
        title: 'Call Me if you Get Lost',
        artist: 'Tyler the Creator',
        filename: '/css/images/callmeif.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Planet Her',
        artist: 'Doja Cat',
        filename: '/css/images/planether.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Man on the Moon: End of Day',
        artist: 'Kid Cudi',
        filename:'/css/images/Manonthemoon.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Back to Black',
        artist: 'Amy Winehoue',
        filename: '/css/images/amy-winehouse-back-to-black-Cover-Art.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Dawn FM',
        artist: 'The Weeknd',
        filename: '/css/images/dawnFM.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Experience Hendrix: The Best of Jimi Hendrix',
        artist: 'Jimi Hendrix',
        filename: '/css/images/bestofJimi.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'The Homecoming: Live',
        artist: 'Beyonce',
        filename: '/css/images/homecoming.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Good Kid M.A.A.D. City',
        artist: 'Kendrick Lamar',
        filename: '/css/images/goodkidmaadcity.jpg',
        //user_id: //Lunice
    }, 
         
];

const seedRecord = () => Record.bulkCreate(vinylData);
module.exports = seedRecord;