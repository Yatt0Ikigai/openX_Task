import { getTwoMostDistantUsers } from "../functions";
import { oneUser, zeroUsers, typicalUsers, sameGeolocationUsers } from "../data/RequestData";

test('getTwoMostDistantUsers One User ', () => {
    expect(getTwoMostDistantUsers(oneUser)).toEqual(null);
})

test('getTwoMostDistantUsers Zero Users', () => {
    expect(getTwoMostDistantUsers(zeroUsers)).toEqual(null);
})


test('getMostDistantUsers Typical Data', () => {
    expect(getTwoMostDistantUsers(typicalUsers)).toStrictEqual([
        {
            address: {
                geolocation: {
                    lat: "-37.3159",
                    long: "81.1496"
                },
                city: 'kilcoole',
                street: 'new road',
                number: 7682,
                zipcode: '12926-3874'
            },
            id: 1,
            email: 'john@gmail.com',
            username: 'johnd',
            password: 'm38rmF$',
            name: { firstname: 'john', lastname: 'doe' },
            phone: '1-570-236-7033',
            __v: 0
        },
        {
            address: {
                geolocation: {
                    lat: "40.3467",
                    long: "-40.1310"
                },
                city: 'san Antonio',
                street: 'adams St',
                number: 245,
                zipcode: '80796-1234'
            },
            id: 5,
            email: 'derek@gmail.com',
            username: 'derek',
            password: 'jklg*_56',
            name: { firstname: 'derek', lastname: 'powell' },
            phone: '1-956-001-1945',
            __v: 0
        }
    ])
})

test('getTwoMostDistantUsers Same Location', () => {
    expect(getTwoMostDistantUsers(sameGeolocationUsers)).toEqual([
        {
            "address": {
                "geolocation": {
                    "lat": "50.3467",
                    "long": "-20.1310"
                },
                "city": "San Antonio",
                "street": "Hunters Creek Dr",
                "number": 6454,
                "zipcode": "98234-1734"
            },
            "id": 4,
            "email": "don@gmail.com",
            "username": "donero",
            "password": "ewedon",
            "name": {
                "firstname": "don",
                "lastname": "romer"
            },
            "phone": "1-765-789-6734",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "50.3467",
                    "long": "-20.1310"
                },
                "city": "san Antonio",
                "street": "adams St",
                "number": 245,
                "zipcode": "80796-1234"
            },
            "id": 5,
            "email": "derek@gmail.com",
            "username": "derek",
            "password": "jklg*_56",
            "name": {
                "firstname": "derek",
                "lastname": "powell"
            },
            "phone": "1-956-001-1945",
            "__v": 0
        }
    ])
})