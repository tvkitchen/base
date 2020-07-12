# Appliance Events

The following events will be emitted by `IAppliance` instances:

* **'starting'**: Emitted when the appliance has been told to start.
* **'ready'**: Emitted when the appliance is ready to start invoking on new data.
* **'error'**: Emitted when the appliance has faced a problem. Event includes the error.
* **'payload'**: Emitted when the appliance has created a new payload. Event includes the payload.
* **'stopping'**: Emitted when the appliance has been told to shut down.
* **'stopped'**: Emitted when the appliance has finished shutting down.
