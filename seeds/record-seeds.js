const { Record } = require('../models');

const vinylData = [
    {
        title: 'Enter the Wu-Tang (36 Chambers)',
        artist: 'Wu-Tang Clan',
        filename: '36Chambers.jpg',
        user_id: '1'
    },
    {
        title: '3 Feet High and Rising',
        artist: 'De La Soul',
        filename: '3FeetAnd.jpg',
        user_id: '2'
    },
    {
        title: 'Dicovery',
        artist: 'Daft Punk',
        filename: 'discovery.jpg',
        //user_id: //user id here
    },
    {
        title: 'Now & Then',
        artist: 'The Carpenters',
        filename: 'now&then.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Sinatras Swingin Session!!!',
        artist: 'Frank Sinatra',
        filename: 'sinatra.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Best of Chopin Vol.2',
        artist: 'Various',
        filename: 'chopin-essentials.jpg',
        //user_id: // John
    }, 
    {
        title: 'Good Faith',
        artist: 'Madeon',
        filename: 'goodfaith.jpg',
        //user_id: //Mihir
    }, 
    {
        title: 'Alive',
        artist: 'Daft Punk',
        filename: 'daftpunkalive.jpg',
        //user_id: //Mihir
    }, 
    {
        title: 'Worlds',
        artist: 'Porter Robinson',
        filename: 'porterrob.jpg',
        //user_id: //Mihir
    }, 
    {
        title: 'The Mouse and The Mask',
        artist: 'Danger Doom',
        filename: 'mouseandmask.jpg',
        //user_id: //Chris
    }, 
    {
        title: 'Demon Days',
        artist: 'Gorillaz',
        filename: 'Demondays.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Self-titled',
        artist: 'Santana',
        filename: 'santana.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Live in San Francisco',
        artist: 'King Gizzard and the Lizard Wizard',
        filename: 'kingGiz.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Funerals',
        artist: 'Arcade Fire',
        filename: 'arcadefire.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Bitches Brew',
        artist: 'Miles Davis',
        filename: 'bitchesbrew.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Dark Side of the Moon',
        artist: 'Pink Floyd',
        filename: 'darkside.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'A Deeper Understanding',
        artist: 'the War on Drugs',
        filename: 'deeperunderstanding.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Hallelujah Anyhow',
        artist: 'Hiss Golden Messanger',
        filename: 'hallelujah.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Only Built 4 Cuban Linx',
        artist: 'Chef Raekwon',
        filename: 'cubanlinx.jpg',
        //user_id: //Chris
    }, 
    {
        title: 'Purple Rain',
        artist: 'Prince',
        filename: 'purplerain.jpg',
        //user_id: //Lunice
    }, 
    {
        title: 'Call Me if you Get Lost',
        artist: 'Tyler the Creator',
        filename: 'callmeif.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Planet Her',
        artist: 'Doja Cat',
        filename: 'planether.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Man on the Moon: End of Day',
        artist: 'Kid Cudi',
        filename:'Manonthemoon.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Back to Black',
        artist: 'Amy Winehoue',
        filename: 'amy-winehouse-back-to-black-Cover-Art.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Dawn FM',
        artist: 'The Weeknd',
        filename: 'dawnFM.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Experience Hendrix: The Best of Jimi Hendrix',
        artist: 'Jimi Hendrix',
        filename: 'bestofJimi.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'The Homecoming: Live',
        artist: 'Beyonce',
        filename: 'homecoming.jpg',
        //user_id: //user id here
    }, 
    {
        title: 'Good Kid M.A.A.D. City',
        artist: 'Kendrick Lamar',
        filename: 'goodkidmaadcity.jpg',
        //user_id: //Lunice
    }, 
         
];

const seedRecord = () => Record.bulkCreate(vinylData);
module.exports = seedRecord;