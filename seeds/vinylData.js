const { Record } = require('../models');

const vinyldata = [
    {
        title: 'Enter the Wu-Tang (36 Chambers)',
        artist: 'Wu-Tang Clan',
        filename: 'public/css/images/36Chambers.jpg',
        user_id: '1'
    },
    {
        title: '3 Feet High and Rising',
        artist: 'De La Soul',
        filename: 'public/css/images/3FeetAnd.jpg',
        user_id: '2'
    },
    // {
    //     title: 'Dicovery',
    //     artist: 'Daft Punk',
    //     filename: 'public\css\images\discovery.jpg',
    //     user_id: //user id here,
    // },
    // {
    //     title: 'Now & Then',
    //     artist: 'The Carpenters',
    //     filename: 'public\css\images\now&then.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Sinatras Swingin Session!!!',
    //     artist: 'Frank Sinatra',
    //     filename: 'public\css\images\sinatra.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Best of Chopin Vol.2',
    //     artist: 'Various',
    //     filename: 'public\css\images\chopin-essentials.jpg',
    //     user_id: // John
    // },
    // {
    //     title: 'Good Faith',
    //     artist: 'Madeon',
    //     filename: 'public\css\images\goodfaith.jpg',
    //     user_id: //Mihir
    // },
    // {
    //     title: 'Alive',
    //     artist: 'Daft Punk',
    //     filename: 'public\css\images\daftpunkalive.jpg',
    //     user_id: //Mihir
    // },
    // {
    //     title: 'Worlds',
    //     artist: 'Porter Robinson',
    //     filename: 'public\css\images\porterrob.jpg',
    //     user_id: //Mihir
    // },
    // {
    //     title: 'The Mouse and The Mask',
    //     artist: 'Danger Doom',
    //     filename: 'public\css\images\mouseandmask.jpg',
    //     user_id: //Chris
    // },
    // {
    //     title: 'Demon Days',
    //     artist: 'Gorillaz',
    //     filename: 'public\css\images\Demondays.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Self-titled',
    //     artist: 'Santana',
    //     filename: 'public\css\images\santana.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Live in San Francisco',
    //     artist: 'King Gizzard and the Lizard Wizard',
    //     filename: 'public\css\images\kingGiz.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Funerals',
    //     artist: 'Arcade Fire',
    //     filename: 'public\css\images\arcadefire.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Bitches Brew',
    //     artist: 'Miles Davis',
    //     filename: 'public\css\images\bitchesbrew.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Dark Side of the Moon',
    //     artist: 'Pink Floyd',
    //     filename: 'public\css\images\darkside.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'A Deeper Understanding',
    //     artist: 'the War on Drugs',
    //     filename: 'public\css\images\deeperunderstanding.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Hallelujah Anyhow',
    //     artist: 'Hiss Golden Messanger',
    //     filename: 'public\css\images\hallelujah.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Only Built 4 Cuban Linx',
    //     artist: 'Chef Raekwon',
    //     filename: 'public\css\images\cubanlinx.jpg',
    //     user_id: //Chris
    // },
    // {
    //     title: 'Purple Rain',
    //     artist: 'Prince',
    //     filename: 'public\css\images\purplerain.jpg',
    //     user_id: //Lunice
    // },
    // {
    //     title: 'Call Me if you Get Lost',
    //     artist: 'Tyler the Creator',
    //     filename: 'public\css\images\callmeif.jpg',
    //     user_id: // John
    // },
    // {
    //     title: 'Planet Her',
    //     artist: 'Doja Cat',
    //     filename: 'public\css\images\planether.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Man on the Moon: End of Day',
    //     artist: 'Kid Cudi',
    //     filename: 'public\css\images\Manonthemoon.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Back to Black',
    //     artist: 'Amy Winehoue',
    //     filename: 'public\css\images\amy-winehouse-back-to-black-Cover-Art.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Dawn FM',
    //     artist: 'The Weeknd',
    //     filename: 'public\css\images\dawnFM.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Experience Hendrix: The Best of Jimi Hendrix',
    //     artist: 'Jimi Hendrix',
    //     filename: 'public\css\images\bestofJimi.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'The Homecoming: Live',
    //     artist: 'Beyonce',
    //     filename: 'public\css\images\homecoming.jpg',
    //     user_id: //user id here
    // },
    // {
    //     title: 'Good Kid M.A.A.D. City',
    //     artist: 'Kendrick Lamar',
    //     filename: 'public\css\images\goodkidmaadcity.jpg',
    //     user_id: //Lunice
    // },

];

const seedRecord = () => Record.bulkCreate(vinylData);
module.exports = seedRecord;