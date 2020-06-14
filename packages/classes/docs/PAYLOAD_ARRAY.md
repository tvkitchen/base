# Payload Array

PayloadArrays provide a set of convenient mechanisms for storing and filtering Payloads. This is useful any time sets of Payloads are being stored in memory or processed at one time.

For example:

- `Appliances` use PayloadArrays to store Payloads and ultimately pass them to the Appliance's `invoke` method.

## Attributes

PayloadArrays have the following attributes:

- `length` (Number): The number of Payloads stored in the PayloadArray.

## Methods

PayloadArrays have the following methods:

- `insert(payload)`: Insert a Payload into the PayloadArray while maintaining position order.
- `indexOfPosition(position)`: Find the index of the first Payload whose position is greater than or equal to this one.
- `filterByType(type)`: Filter out the Payloads of the specified type (does not modify the PayloadArray).
- `filterByPosition(start, end?)`: Filter out the Payloads that exist within a specified duration.
- `toArray()`: Convert the PayloadArray to a vanilla Array.
