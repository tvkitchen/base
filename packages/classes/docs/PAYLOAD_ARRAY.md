# Payload Array

PayloadArrays provide a set of convenient mechanisms for storing and filtering Payloads. This is useful any time a series of Payloads are being stored in memory or processed at one time.

For example:

- `Appliances` use PayloadArrays to store Payloads and ultimately pass them to the Appliance's `invoke` method.

## Attributes

PayloadArrays have the following attributes:

- `length` (Number): The number of Payloads stored in the PayloadArray.

## Methods

PayloadArrays have the following methods:

- `insert(payload)`: Insert a Payload into the PayloadArray while maintaining position order.
- `indexOfPosition(position, returnHighest)`: Find the index to which a payload with a given position would be inserted.
- `filterByType(type)`: Create a new PayloadArray containing only Payloads of the specified type.
- `filterByPosition(start, end?)`: Create a new PayloadArray containing only Payloads that exist within a specified duration.
- `toArray()`: Copy the content of the PayloadArray to a vanilla Array.
- `empty()`: Remove all payloads from the PayloadArray.
- `getPosition()`: Get the earliest position represented in this PayloadArray.
- `getOrigin()`: Get the origin (ISO timestamp) of the data represented in this PayloadArray.
- `getDuration()`: Get the duration represented by this PayloadArray.
