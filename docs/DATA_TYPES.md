# TV Kitchen Data Types

The [dataTypes.js](src/constants/dataTypes.js) constant file contains the list of standard types of data that the TV Kitchen and its appliances can produce.

Someone creating a new appliance **is not bound to this list** and can invent new data types that their network of appliances might work with, it just won't be considered a standard data type unless it appears in this constants list.

To suggest a new data type please open a [discussion issue](https://github.com/tvkitchen/base/issues/new?assignees=&labels=discussion&template=discussion.md) in the base repository.

## Naming Data Types

Data type constants have some naming (and value) rules.

* Data type buckets must have an `ALL` attribute.
* Data type bucket names can only consist of `A-Za-z0-9` and `_`.
* Data type bucket names cannot be longer than 16 characters.
* Data type constant names can only consist of `A-Za-z0-9` and `_`.
* Data type constant names cannot be longer than 32 characters.
* Data type constant values must match the following pattern: `{BUCKETNAME}.{CONSTANTNAME}`.

## The Data Types

### STREAM

STREAM content is generally pulled from an Ingestion Engine and passed to the countertop.

* `STREAM.ALL` - Any type of stream data.
* `STREAM.DATA` - Buffers representing a portion of data stream.

### TEXT
* `TEXT.ALL` - Any type of text data.
* `TEXT.ATOM` - The smallest possible chunk of text (e.g. a character, EOF, emoji).
* `TEXT.WORD` - Complete, single words.
* `TEXT.SENTENCE` - Complete sentences.
* `TEXT.BLOB` - Arbitrary text of arbitrary length.
