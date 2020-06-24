# Changelog for @tvkitchen/base-interfaces

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- (MINOR): Modification of `invoke` (`IAppliance`) to consume a PayloadArray.
- (MAJOR): Modification of `invoke` (`IAppliance`) to return a PayloadArray.

### Added
- (MINOR): Added an `audit` method to `IAppliance`.
- `setup` and `teardown` abstract methods to IAppliance.
- (MINOR): Added a logger to the IAppliance API.

## [1.0.1] - 2020-06-05

### Changed
- Improved package description.

## [1.0.0] - 2020-05-27

### Added
- `IAppliance` core interface.
- Initial setup.

[Unreleased]: https://github.com/tvkitchen/base/compare/@tvkitchen/base-interfaces@1.0.1...HEAD
[1.0.1]: https://github.com/tvkitchen/base/compare/@tvkitchen/base-interfaces@1.0.0...@tvkitchen/base-interfaces@1.0.1
[1.0.0]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-interfaces@1.0.0
