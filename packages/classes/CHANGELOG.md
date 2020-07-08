# Changelog for @tvkitchen/base-classes

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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

[Unreleased]: https://github.com/tvkitchen/base/compare/@tvkitchen/base-classes@1.2.0...HEAD
[1.2.0]: https://github.com/tvkitchen/base/compare/@tvkitchen/base-classes@1.1.0...1.2.0
[1.1.0]: https://github.com/tvkitchen/base/compare/@tvkitchen/base-classes@1.0.0...@tvkitchen/base-classes@1.1.0
[1.0.0]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-classes@1.0.0
