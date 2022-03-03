# Changelog for @tvkitchen/base-interfaces

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Package now specifies Node 10.x or above.

### Fixed
- Fixed a bug where stream callback was being called by NodeJS directly, resulting in duplicate callback errors ([Issue #124](https://github.com/tvkitchen/base/issues/124))

## [4.0.0-alpha.4] - 2021-04-16
### Changed
- `IAppliance` class methods are no longer properties / arrow functions.

## [4.0.0-alpha.3]
### Removed
- `IAppliance` no longer has a functioning logger, just a reference to the need for a logger.

### Changed
- `IAppliance` now extends NodeJS's `stream.Transform`, which means Appliances function as streams instead of simple event emitters.

## [4.0.0-alpha.2]
### Changed
- Renamed `setup` to `start` and changed its return type.
- Renamed `teardown` to `stop` and changed its return type.

## [4.0.0-alpha.1]
### Changed
- Updated the minimum version of `@tvkitchen/base-constants` to `1.1.1`.
- Removed the unnecessarily required `emitResult` method from `IAppliance`.
- Made the `IAppliance` `getInputTypes` and `getOutputTypes` methods static.

### Added
- Create `isIAppliance` duck type method to IAppliance.

## [3.0.0] - 2020-06-23
### Changed
- `audit` method turned to an async method.

## [2.0.0] - 2020-06-23
### Changed
- `invoke` (`IAppliance`) to consume a PayloadArray.
- `invoke` (`IAppliance`) to return a PayloadArray.

### Added
- `audit` method to `IAppliance`.
- `setup` and `teardown` abstract methods to IAppliance.
- logger to the IAppliance API.

## [1.0.1] - 2020-06-05

### Changed
- Improved package description.

## [1.0.0] - 2020-05-27

### Added
- `IAppliance` core interface.
- Initial setup.

[Unreleased]: https://github.com/tvkitchen/base/compare/@tvkitchen/base-interfaces@4.0.0-alpha.4...HEAD
[4.0.0-alpha.4]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-interfaces@4.0.0-alpha.4
[4.0.0-alpha.3]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-interfaces@4.0.0-alpha.3
[4.0.0-alpha.2]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-interfaces@4.0.0-alpha.2
[4.0.0-alpha.1]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-interfaces@4.0.0-alpha.1
[3.0.0]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-interfaces@3.0.0
[2.0.0]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-interfaces@2.0.0
[1.0.1]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-interfaces@1.0.1
[1.0.0]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-interfaces@1.0.0
