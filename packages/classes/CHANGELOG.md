# Changelog for @tvkitchen/base-classes

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Package now specifies Node 10.x or above.

## [2.0.0-alpha.1] - 2021-04-16
### Changed
- `Payload` and `AvroPayload` now has an `originTimestamp` attribute.
- `Payload` and `AvroPayload` no longer has a `timestamp` attribute.
- `PayloadArray` has replaced `getTimestamp()` with `getOrigin()`.
- Class methods are no longer arrow functions.

## [1.4.0-alpha.2] - 2021-04-07
### Added
- `Payload` now has two helper methods for setting and accessing `String` and `Object` data that has been stored in the `data` attribute.
- `PayloadArray` now has several methods making it easier to access the position, timestamp, and duration represented by the collection of Payloads contained.

## [1.4.0-alpha.1] - 2020-09-09
### Added
- `AvroPayload` to serialize and deserialize binary data.

[1.3.0] - 2020-07-12
### Added
- A static `isPayload` method to the `Payload` class.
- A static `isPayloadArray` method to the `PayloadArray` class.

### Changed
- Update `PayloadArray` to use the `isPayload` method for validation.
- Update the default value for Payload's `createdAt` to be the current time.

## [1.2.1] - 2020-06-23
Re-release of [1.2.0] due to accidental unpublishing.

## [1.2.0] - 2020-06-23
### Added
- A sortedArray `sortedIndexBy` utility method.
- Definition of the `PayloadArray` class.

### Changed
- Cleanup of `Payload` unit test names.

## [1.1.0] - 2020-06-05
### Added
- Added time attributes to `Payload`.
- Added documentation for `Payload`.

### Changed
- Improved package description.

## [1.0.0] - 2020-05-27
### Added
- Definition of the `Payload` class.
- Initial setup.

[Unreleased]: https://github.com/tvkitchen/base/compare/@tvkitchen/base-classes@2.0.0-alpha.1...HEAD
[2.0.0-alpha.1]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-classes@2.0.0-alpha.1
[1.4.0-alpha.2]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-classes@1.4.0-alpha.2
[1.4.0-alpha.1]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-classes@1.4.0-alpha.1
[1.3.0]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-classes@1.3.0
[1.2.1]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-classes@1.2.1
[1.2.0]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-classes@1.2.0
[1.1.0]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-classes@1.1.0
[1.0.0]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-classes@1.0.0
