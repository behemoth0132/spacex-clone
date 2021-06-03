const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spacexClone', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

const Roadster = require('./models/roadster');
const Dragons = require('./models/dragons');

const createRoadster = async (obj) => {
    Roadster.create(obj, (err, roadster) => {
        console.log(roadster);
    });
}

let roadsterOne = `{
        "name": "Elon Musk's Tesla Roadster",
        "launch_date_utc": "2018-02-06T20:45:00.000Z",
        "launch_date_unix": 1517949900,
        "launch_mass_kg": 1350,
        "launch_mass_lbs": 2976,
        "norad_id": 43205,
        "epoch_jd": 2459365.187337963,
        "orbit_type": "heliocentric",
        "apoapsis_au": 1.664463098340991,
        "periapsis_au": 0.9857837639927796,
        "semi_major_axis_au": 63.03387626319803,
        "eccentricity": 0.2560815537578172,
        "inclination": 1.075784869680417,
        "longitude": 316.9253625836428,
        "periapsis_arg": 177.6872773741898,
        "period_days": 557.1638451242845,
        "speed_kph": 7453.521809848619,
        "speed_mph": 4631.402300507447,
        "earth_distance_km": 74300972.02818942,
        "earth_distance_mi": 46168469.29012809,
        "mars_distance_km": 309731249.9491183,
        "mars_distance_mi": 192458016.5121336,
        "wikipedia": "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
        "video": "https://youtu.be/wbSwFU6tY1c",
        "details": "Jordan Wright's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space.",
        "id": "5eb75f0842fea42237d7f3f4"

}`

let obj = JSON.parse(roadsterOne);

createRoadster(obj)


const createDragons = async (obj) => {
    Dragons.create(obj, (err, dragons) => {
        console.log(dragons);
    });
}

let dragonsOne = `{
    [
        {
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
            "flickr_images": [
                "https://i.imgur.com/9fWdwNv.jpg",
                "https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg",
                "https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg",
                "https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg"
            ],
            "name": "Dragon 1",
            "type": "capsule",
            "active": true,
            "crew_capacity": 0,
            "sidewall_angle_deg": 15,
            "orbit_duration_yr": 2,
            "dry_mass_kg": 4200,
            "dry_mass_lb": 9300,
            "thrusters": [
                {
                    "type": "Draco",
                    "amount": 18,
                    "pods": 4,
                    "fuel_1": "nitrogen tetroxide",
                    "fuel_2": "monomethylhydrazine",
                    "isp": 300,
                    "thrust": {
                        "kN": 0.4,
                        "lbf": 90
                    }
                }
            ],
            "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_Dragon",
            "description": "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).",
            "id": "5e9d058759b1ff74a7ad5f8f"
        },
        {
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
            "first_flight": "2019-03-02",
            "flickr_images": [
                "https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg",
                "https://farm1.staticflickr.com/780/21119686299_c88f63e350_b.jpg",
                "https://farm9.staticflickr.com/8588/16661791299_a236e2f5dc_b.jpg"
            ],
            "name": "Dragon 2",
            "type": "capsule",
            "active": true,
            "crew_capacity": 7,
            "sidewall_angle_deg": 15,
            "orbit_duration_yr": 2,
            "dry_mass_kg": 6350,
            "dry_mass_lb": 14000,
            "thrusters": [
                {
                    "type": "Draco",
                    "amount": 18,
                    "pods": 4,
                    "fuel_1": "nitrogen tetroxide",
                    "fuel_2": "monomethylhydrazine",
                    "isp": 300,
                    "thrust": {
                        "kN": 0.4,
                        "lbf": 90
                    }
                },
                {
                    "type": "SuperDraco",
                    "amount": 8,
                    "pods": 4,
                    "fuel_1": "dinitrogen tetroxide",
                    "fuel_2": "monomethylhydrazine",
                    "isp": 235,
                    "thrust": {
                        "kN": 71,
                        "lbf": 16000
                    }
                }
            ],
            "wikipedia": "https://en.wikipedia.org/wiki/Dragon_2",
            "description": "Dragon 2 (also Crew Dragon, Dragon V2, or formerly DragonRider) is the second version of the SpaceX Dragon spacecraft, which will be a human-rated vehicle. It includes a set of four side-mounted thruster pods with two SuperDraco engines each, which can serve as a launch escape system or launch abort system (LAS). In addition, it has much larger windows, new flight computers and avionics, and redesigned solar arrays, and a modified outer mold line from the initial cargo Dragon that has been flying for several years.",
            "id": "5e9d058859b1ffd8e2ad5f90"
        }
    ]

}`

let obj2 = JSON.parse(dragonsOne);

createDragons(obj2)
