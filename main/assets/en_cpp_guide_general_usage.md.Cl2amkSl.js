import{_ as t,c as a,al as o,o as i}from"./chunks/framework.BVh3rIuO.js";const p=JSON.parse('{"title":"MAVSDK Paradigms/Usage","description":"","frontmatter":{"github_branch":"main"},"headers":[],"relativePath":"en/cpp/guide/general_usage.md","filePath":"en/cpp/guide/general_usage.md"}'),s={name:"en/cpp/guide/general_usage.md"};function n(r,e,d,c,l,h){return i(),a("div",null,e[0]||(e[0]=[o('<h1 id="mavsdk-paradigms-usage" tabindex="-1">MAVSDK Paradigms/Usage <a class="header-anchor" href="#mavsdk-paradigms-usage" aria-label="Permalink to &quot;MAVSDK Paradigms/Usage&quot;">​</a></h1><p>This topic provides general/overview information about how the MAVSDK is used, designed and some limitations.</p><h2 id="object-management" tabindex="-1">Object Management <a class="header-anchor" href="#object-management" aria-label="Permalink to &quot;Object Management&quot;">​</a></h2><p><a href="./../api_reference/classmavsdk_1_1_mavsdk.html">Mavsdk</a> is the main library class. Applications must create a <code>Mavsdk</code> object and destroy it during application shut down. The object is usually created as an automatic variable that is cleaned up when it goes out of scope (you can also dynamically create/destroy the object using <code>new</code>/<code>delete</code>).</p><p>API consumers use <a href="./../api_reference/classmavsdk_1_1_mavsdk.html">Mavsdk</a> to discover and connect to <a href="./../api_reference/classmavsdk_1_1_system.html">System</a> objects (vehicles/cameras etc.).</p><p>Access to drone information and control objects are provided <a href="./../guide/using_plugins.html">by plugins</a> (e.g. Telemetry, Action, Mission etc.). Plugin objects are instantiated with a <em>specific</em> <code>System</code> object (a plugin instance must be created for every system that needs it).</p><p>Plugin objects are created as shared pointers that will be destroyed when all associated handles are out of scope. All objects are automatically cleaned up when the parent <code>Mavsdk</code> object is destroyed.</p><h2 id="error-handling" tabindex="-1">Error Handling <a class="header-anchor" href="#error-handling" aria-label="Permalink to &quot;Error Handling&quot;">​</a></h2><p>MAVSDK APIs do not raise exceptions! Instead, methods that can fail return success or an error reason as <code>enum</code> values.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The error code usually reflects acknowledgment from the vehicle that it will perform the requested action (or not). The operation itself may not yet have completed (e.g. taking off).</p></div><p>The various classes also all provide stream operators for getting human readable strings from their associated result enum. You can see how these are used in the example code.</p><h2 id="callbacks" tabindex="-1">Callbacks <a class="header-anchor" href="#callbacks" aria-label="Permalink to &quot;Callbacks&quot;">​</a></h2><p>Some of the APIs use callbacks, e.g. subscriptions to a stream like <a href="./../api_reference/classmavsdk_1_1_telemetry.html#classmavsdk_1_1_telemetry_1a61bda57b3ca47000ea7e4758b2a33134">Telemetry::subscribe_position(PositionCallback callback)</a> or async functions like <a href="./../api_reference/classmavsdk_1_1_action.html#classmavsdk_1_1_action_1ab658d938970326db41709d83e02b41e6">Action::takeoff_async(ResultCallback callback)</a>.</p><p>All user callbacks are called from one thread. Users must not do anything inside a callback that takes a long time to complete, as this will stall subsequent callbacks. For more information on how to work with and debug callbacks see <a href="./../troubleshooting.html#user_callbacks">Troubleshooting</a>.</p><h2 id="shared-vehicle-control" tabindex="-1">Shared Vehicle Control <a class="header-anchor" href="#shared-vehicle-control" aria-label="Permalink to &quot;Shared Vehicle Control&quot;">​</a></h2><p>A vehicle can receive commands from multiple sources, including a Ground Control Station, or other MAVLink applications.</p><p>SDK applications, which are running in environments where it is possible, can explicitly monitor for changes in flight mode (outside application control) and change behaviour appropriately (e.g. using <a href="./../api_reference/classmavsdk_1_1_telemetry.html#classmavsdk_1_1_telemetry_1a53db5fb36bf10fbc7ac004a3be9100a4">Telemetry::subscribe_flight_mode()</a>).</p><h2 id="api-limitations-behaviour" tabindex="-1">API Limitations/Behaviour <a class="header-anchor" href="#api-limitations-behaviour" aria-label="Permalink to &quot;API Limitations/Behaviour&quot;">​</a></h2><h3 id="supported-vehicles" tabindex="-1">Supported Vehicles <a class="header-anchor" href="#supported-vehicles" aria-label="Permalink to &quot;Supported Vehicles&quot;">​</a></h3><p>The SDK has been designed to manage <em>aircraft</em> that use the PX4 autopilot. It has primarily been tested for use with multicopters, but also has basic support for fixed wing and <a href="./../guide/vtol.html">VTOL</a>.</p><p>The APIs include methods that do not make sense for other vehicle types - including &quot;takeoff&quot; and &quot;land&quot;. While ground vehicles may work, they are not supported and are untested. Similarly, other autopilots may well work, but, they are not explicitly supported and are untested.</p><h3 id="connection_string" tabindex="-1">Connection Strings <a class="header-anchor" href="#connection_string" aria-label="Permalink to &quot;Connection Strings {#connection_string}&quot;">​</a></h3><p>MAVSDK monitors a specified port for vehicles (for the C++ API see <a href="./../guide/connections.html">Connecting to Systems (Vehicles)</a>). All programming language libraries reference this port using a <em>connection string</em> with the following format:</p><table tabindex="0"><thead><tr><th>Connection</th><th>URL Format</th></tr></thead><tbody><tr><td>UDP</td><td><code>udp://[Bind_host][:Bind_port]</code></td></tr><tr><td>TCP</td><td><code>tcp://[Server_host][:Server_port]</code></td></tr><tr><td>Serial</td><td><code>serial://[Dev_Node][:Baudrate]</code></td></tr></tbody></table><p>Concrete examples are for different platforms are:</p><table tabindex="0"><thead><tr><th>Connection type</th><th>String</th><th>Example</th></tr></thead><tbody><tr><td>Windows connected to the vehicle via USB (includes USB-connected Telemetry radios).</td><td><code>serial:///COMn</code>, where <code>n</code> = the COM port. Note: <code>///</code> will change to <code>//</code> in a future release (incorrect on Windows).</td><td><code>serial:///COM1</code></td></tr><tr><td>Linux (e.g Raspberry Pi) connected to the vehicle via Serial port</td><td><code>serial:///dev/ttyACMn</code>, where <code>n</code> = the port</td><td><code>serial:///dev/ttyACM0</code></td></tr><tr><td>Linux connected to the vehicle via USB</td><td><code>serial:///dev/ttyUSBn</code>, where <code>n</code> = the port</td><td><code>serial:///dev/ttyUSB0</code></td></tr><tr><td>macOS connected to the vehicle via Serial port</td><td><code>serial:///dev/tty.usbserial-n</code>, where <code>n</code> = the USB device id</td><td><code>serial:///dev/tty.usbserial-DA00AG57</code></td></tr><tr><td>macOS connected to the vehicle via USB</td><td><code>serial:///dev/tty.usbmodem-n</code>, where <code>n</code> = the USB device id</td><td><code>serial:///dev/tty.usbmodem--DA00AG57</code></td></tr><tr><td>SITL connected to the vehicle via UDP</td><td><code>udp://:14540</code></td><td></td></tr></tbody></table><h3 id="connection-status" tabindex="-1">Connection Status <a class="header-anchor" href="#connection-status" aria-label="Permalink to &quot;Connection Status&quot;">​</a></h3><p>A system is considered to be disconnected (timed-out) if its heartbeat message is not detected within 3 seconds.</p><h3 id="telemetry-information" tabindex="-1">Telemetry/Information <a class="header-anchor" href="#telemetry-information" aria-label="Permalink to &quot;Telemetry/Information&quot;">​</a></h3><p>The SDK gets and stores vehicle state/telemetry information from received MAVLink messages. The information is supplied to callback subscribers as soon as message updates are received. Clients can also query the API synchronously, and will get the information from the last received message (depending on channel latency, this information will become increasingly &quot;stale&quot; between messages).</p><p>The rate at which update messages are sent by the vehicle can be specified using the API (but will be limited by the bandwidth of the channel). Developers need to use a channel and a message update rate that allows their desired control algorithm to be effective - there is no point trying to use computer vision over an unreliable high-latency link.</p><p><code>Info</code> information does not change for a particular vehicle, so will be accurate whenever read.</p><h3 id="actions-offboard" tabindex="-1">Actions/Offboard <a class="header-anchor" href="#actions-offboard" aria-label="Permalink to &quot;Actions/Offboard&quot;">​</a></h3><p><code>Action</code> methods (and any other &quot;vehicle instructions&quot;) return when the vehicle has confirmed that the message was received and will be acted on (or not). The methods do not wait for the commanded action to complete.</p><p>So, for example, the <a href="./../api_reference/classmavsdk_1_1_action.html#classmavsdk_1_1_action_1af6429e1bdb2875deebfe98ed53da3d41">Action::land()</a> method returns as soon as the vehicle confirms it will land, but will actually land at some later point.</p><p>The implication is that developers will need to separately monitor the completion of the requested actions, if this is important to the application.</p><h3 id="missions" tabindex="-1">Missions <a class="header-anchor" href="#missions" aria-label="Permalink to &quot;Missions&quot;">​</a></h3><p>The <code>Mission</code> and <code>MissionItem</code> APIs provide a the most useful <em>subset</em> of MAVLink mission commands as a developer-friendly API.</p><p>Not every mission command behaviour supported by the protocol and PX4 will be supported by MAVSDK. For example, at time of writing the API does not allow you to specify commands that jump back to previous mission items.</p><p>The API allows you to download/import missions. Note however that this will fail if the mission contains a command that is not supported by the API.</p>',40)]))}const u=t(s,[["render",n]]);export{p as __pageData,u as default};
