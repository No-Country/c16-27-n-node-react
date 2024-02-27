
# MeetHub - Backend API

This API is used in our "MeetHub" Project for NoCountry.

Technologies used in this proyect:
* Node JS
* MongoDB
* Express
* Mongoose
* dotenv


## API Examples

#### Get an event by ID

```http
  GET /api/events/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of event to fetch |


#### Post event
```http
  POST /api/events/
```
#### Body
```json
{
    "title": {$title},
    "description": {$description},
    "image": {$image},
    "date": {$date},
    "type": {$type},
    "creatorUserId": {$creatorUserId},
    "maxUsers": {$maxUsers},
    "place": {$place},
    "participants": {$participants}
}
```



| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of the event | | :-------- | :------- | :-------------------------------- |
| `description`      | `string` | **Required**. Description of the event | | :-------- | :------- | :-------------------------------- |
| `image`      | `string` |  Image to show in event | | :-------- | :------- | :-------------------------------- |
| `date`      | `string` | **Required**. Date, time and timezone of the event | | :-------- | :------- | :-------------------------------- |
| `type`      | `string` | **Required**. Either "online" or "presencial" | | :-------- | :------- | :-------------------------------- |
| `creatorUserId`      | `string (MongoDB ID)` | **Required**. User ID from the creator of the event | | :-------- | :------- | :-------------------------------- |
| `maxUsers`      | `uint16` | **Required**. Maximum capacity of the event | | :-------- | :------- | :-------------------------------- |
| `place`      | `string` | **Required** Physical Adress of the event  | | :-------- | :------- | :-------------------------------- |
| `participants`      | `array` | Array containing the userID from every attendee  |

## License

[GNU General Public License](https://choosealicense.com/licenses/gpl-3.0/)

