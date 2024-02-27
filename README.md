
# MeetHub - Backend API

This API is used in our "MeetHub" Project for NoCountry.

Technologies used in this proyect:
* Node JS
* MongoDB
* Express
## API Usage

### Events

#### Get an event by ID

```http
  GET /api/events/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of event to fetch |

#### Expected response:
```json
{"_id":"65dbc9f38ef614f925397f6a",
"creatorUserId":"01255551455x5vf2df45d5",
"title":"Title",
"description":"Description",
"image":"img6.png",
"type":"onSuite",
"category":1,
"address":"http://",
"city":"CDMX, Mexico",
"date":"29-04-2023",
"attendees":
  ["65d7b9c19a8877d26c9d1632"
  "65d7b9c19a8877d26c9d1631"
  "65d7b9c19a8877d26c9d1630"],
  "createdAt":"2024-02-25T23:14:59.962Z",
  "updatedAt":"2024-02-25T23:14:59.962Z",
  "__v":0}
```



#### Post event
```http
  POST /api/events/
```
#### Body
```json
{
    "title": ${title},
    "description": ${description},
    "image": ${image},
    "date": ${date},
    "type": ${type},
    "creatorUserId": ${creatorUserId},
    "maxUsers": ${maxUsers},
    "place": ${place},
    "participants": ${participants}
}
```



| Parameter | Type     | Description                       |
| :-------- | :------- | :---------------- |
| `title`      | `string` | **Required**. Title of the event | 
| `description`      | `string` | **Required**. Description of the event | 
| `image`      | `string` |  Image to show in event | 
| `date`      | `string` | **Required**. Date, time and timezone of the event | 
| `type`      | `string` | **Required**. Either "online" or "presencial" | 
| `creatorUserId`      | `string (MongoDB ID)` | **Required**. User ID from the creator of the event | 
| `maxUsers`      | `uint16` | **Required**. Maximum capacity of the event | 
| `place`      | `string` | **Required** Physical Adress of the event  | 
| `participants`      | `array` | Array containing the userID from every attendee  |

#### Edit an event
```http
PUT /api/events/{$id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of event to fetch |

#### Body example
```json
// Parameters to change
{"title": "New Title",
"description": "New Description"}
```

#### Delete an event
```http
DELETE /api/events/{$id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of event to fetch |


### Users

#### Get an user by ID

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Expected response:
```json
{"_id":"65db546ed6410de357b71205",
"firstName":"Levi",
"lastName":"Ackerman",
"email":"levi@ackerman.com",
"image":"https://www.svgrepo.com/show/105517/user-icon.svg",
"password":"password",
"__v":0}
```



#### Create a new user
```http
  POST /api/users/
```
#### Body
```json
{"firstName":${firstName},
"lastName":${lastName},
"email":${email},
"image":${image},
"password":${password}}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :--- |
| `firstName`      | `string` | **Required**. First name of the user |
| `lastName`      | `string` | **Required**. Last name of the user | 
| `email`      | `string` |  **Required**. Email of the user | 
| `image`      | `string` | Image to be used in user's profile| 
| `password`      | `string` | **Required**. Password of the user |






#### Edit an user 
```http
PUT /api/users/{$id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Body example
```json
// Parameters to change
{"email": "New Email",
"image": "New image"}
```

#### Delete an user
```http
DELETE /api/users/{$id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |


## License

[GNU General Public License](https://choosealicense.com/licenses/gpl-3.0/)

