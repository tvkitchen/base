# Log Levels

In order to promote consistent logging across the TV Kitchen ecosystem, the following log levels should be used as described when logging:

- **fatal:** Any error that is forcing a shutdown of the service or application to prevent data loss (or further data loss). Reserve these only for the most heinous errors and situations where there is guaranteed to have been data corruption or loss.

- **error:** Any error which is fatal to the operation, but not the service or application (can't open a required file, missing data, etc.). These errors will force user (administrator, or direct user) intervention. These are usually reserved for incorrect connection strings, missing services, etc.

- **warn:** Anything that can potentially cause application oddities, but for which you are automatically recovering. (Such as switching from a primary to backup server, retrying an operation, missing secondary data, etc.)

- **info:** Generally useful information to log (service start/stop, configuration assumptions, etc). Info that one should always have available but usually won't be relevant under normal circumstances. This is the out-of-the-box config level.

- **debug:** Information that is diagnostically helpful to people more than just developers (IT, sysadmins, etc.).

- **trace:** Used only for "tracing" the code and trying to find one part of a function specifically.


*These levels and descriptions borrowed and slightly modified [from this StackOverflow answer](https://stackoverflow.com/questions/2031163/when-to-use-the-different-log-levels)*
