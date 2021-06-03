const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spacexClone', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

// const Roadster = require('./models/roadster');
const Dragons = require('./models/dragons');

// // const createRoadster = async (obj) => {
// //     Roadster.create(obj, (err, roadster) => {
// //         console.log(roadster);
// //     });
// // }

// let roadsterOne = `{
//         "name": "Elon Musk's Tesla Roadster",
//         "launch_date_utc": "2018-02-06T20:45:00.000Z",
//         "launch_date_unix": 1517949900,
//         "launch_mass_kg": 1350,
//         "launch_mass_lbs": 2976,
//         "norad_id": 43205,
//         "epoch_jd": 2459365.187337963,
//         "orbit_type": "heliocentric",
//         "apoapsis_au": 1.664463098340991,
//         "periapsis_au": 0.9857837639927796,
//         "semi_major_axis_au": 63.03387626319803,
//         "eccentricity": 0.2560815537578172,
//         "inclination": 1.075784869680417,
//         "longitude": 316.9253625836428,
//         "periapsis_arg": 177.6872773741898,
//         "period_days": 557.1638451242845,
//         "speed_kph": 7453.521809848619,
//         "speed_mph": 4631.402300507447,
//         "earth_distance_km": 74300972.02818942,
//         "earth_distance_mi": 46168469.29012809,
//         "mars_distance_km": 309731249.9491183,
//         "mars_distance_mi": 192458016.5121336,
//         "wikipedia": "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
//         "video": "https://youtu.be/wbSwFU6tY1c",
//         "details": "Jordan Wright's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space.",
//         "id": "5eb75f0842fea42237d7f3f4"

// }`

// let obj = JSON.parse(roadsterOne);

// // createRoadster(obj)

// const fetchRoadster = (_id) => {
//     Roadster.findOne({ _id }, (err, roadster) => {
//         if(err) console.log(err);
//         console.log(roadster);
//     })
// }

// fetchRoadster("60b8e2edb09df186c6c2060c")


// const fetchRoadsters = async () => {
//     Roadster.find({}, (err, roadsters) => {
//         if (err)console.log(err);
//         console.log(roadsters)
//     });
// }

// fetchRoadsters();


// const updateRoadster = async (_id, name) => {
//     Roadster.findOneAndUpdate({ _id }, { name } , { new:true }, (err, roadster) => {
//     console.log(roadster)
//     })
// }

// updateRoadster('60b8e2edb09df186c6c2060c', 'Vinny Tesla Roadster');
// // const createDragons = async (obj) => {
// //     Dragons.create(obj, (err, dragons) => {
// //         console.log(dragons);
// //     });
// // }

// const deleteRoadster = async (_id) => {
//     Roadster.remove({_id});
//     console.log('Deleted!');
// }

// deleteRoadster('60b8e2edb09df186c6c2060c')




let dragonsOne = `{
    "heat_shield": {
        "material": "PICA-X",
        "size_meters": 3.6,
        "temp_degrees": 3000,
        "dev_partner": "NASA"
    },
    "launch_payload_mass": {
        "kg": 6000,
        "lb": 13228
    },
    "launch_payload_vol": {
        "cubic_meters": 25,
        "cubic_feet": 883
    },
    "return_payload_mass": {
        "kg": 3000,
        "lb": 6614
    },
    "return_payload_vol": {
        "cubic_meters": 11,
        "cubic_feet": 388
    },
    "pressurized_capsule": {
        "payload_volume": {
            "cubic_meters": 11,
            "cubic_feet": 388
        }
    },
    "trunk": {
        "trunk_volume": {
            "cubic_meters": 14,
            "cubic_feet": 494
        },
        "cargo": {
            "solar_array": 2,
            "unpressurized_cargo": true
        }
    },
    "height_w_trunk": {
        "meters": 7.2,
        "feet": 23.6
    },
    "diameter": {
        "meters": 3.7,
        "feet": 12
    },
    "first_flight": "2010-12-08",
    "name": "Dragon 1",
    "type": "capsule",
    "active": true,
    "crew_capacity": 0,
    "sidewall_angle_deg": 15,
    "orbit_duration_yr": 2,
    "dry_mass_kg": 4200,
    "dry_mass_lb": 9300,
    "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Dragon",
    "description": "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).",
    "id": "5e9d058759b1ff74a7ad5f8f"
}`

let obj2 = JSON.parse(dragonsOne);

const createDragons = async (obj2) => {
    Dragons.create(obj2, (err, dragons) => {
        console.log(dragons);
    });
}

createDragons(obj2)
