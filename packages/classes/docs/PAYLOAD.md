# Payload

Payloads provide a consistent structured format for TV data. If you are using or contributing to the TV Kitchen you are probably going to be working with Payloads.

For example:

- `Appliances` can consume Payloads, invoke their transformation or other process, and emit Payloads with new types of data.
- `The Countertop` announces new Payloads as they are generated.
- The TV Kitchen stream API emits Payloads as they are announced by `The Countertop`. 

## Attributes

Payloads have the following attributes:

- `data` (Buffer): The data contained by the Payload.
- `type` (String): The [type](https://github.com/tvkitchen/base/blob/master/packages/constants/src/dataTypes.js) of Payload.
- `createdAt` (String): The ISO 8601 timestamp that the Payload was created.
- `origin` (String): The ISO 8601 timestamp that specifies what time, in absolute terms, is associated with position `0`.
- `duration` (Number): The number of milliseconds that the Payload's data represents within the stream.
- `position` (Number): The number of milliseconds into the stream where the Payload's data starts.

For example, if a stream started at 12:00 GMT on March 15th, 2020, a Payload containing 1 second of captions from 2 minutes into the stream might have the following values:

```json
{
	"data": {"type":"Buffer","data":[65,32,99,97,112,116,105,111,110,46]},
	"type": "TEXT.BLOB",
	"createdAt": "2020-03-15T12:02:00.501Z",
	"origin": "2020-03-15T12:00:00.000Z",
	"duration": 1000,
	"position": 120000,
}
```

## Methods

Payload data is a buffer, but can contain more meaningful data (e.g. a `String` or `JSON Stringified Object`). To make accessing this kind of data easier, Payload has two helper getters.  These can be called on payloads whose types are documented to include that data.

- `getDataObject`: Extracts and returns an object that has been stringified within the payload data.
- `getDataString`: Extracts and returns a string value from payload data.

There are also setters for these types.

- `setDataObject`: Converts a simple object to a buffer and assigns it to payload data.
- `setDataString`: Converts a string to a buffer and assigns it to the payload data.
