# Changelog for @tvkitchen/base-interfaces

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Updated the minimum version of `@tvkitchen/base-constants` to `1.1.1`.

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

[Unreleased]: https://github.com/tvkitchen/base/compare/@tvkitchen/base-interfaces@3.0.0...HEAD
[3.0.0]: https://github.com/tvkitchen/base/compare/@tvkitchen/base-interfaces@2.0.0...@tvkitchen/base-interfaces@3.0.0
[2.0.0]: https://github.com/tvkitchen/base/compare/@tvkitchen/base-interfaces@1.0.1...@tvkitchen/base-interfaces@2.0.0
[1.0.1]: https://github.com/tvkitchen/base/compare/@tvkitchen/base-interfaces@1.0.0...@tvkitchen/base-interfaces@1.0.1
[1.0.0]: https://github.com/tvkitchen/base/releases/tag/@tvkitchen/base-interfaces@1.0.0
