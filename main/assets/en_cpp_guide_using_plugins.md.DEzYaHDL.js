import{_ as s,c as i,al as t,o as a}from"./chunks/framework.BVh3rIuO.js";const g=JSON.parse('{"title":"Managing Systems/Vehicles (Using Plugins)","description":"","frontmatter":{"github_branch":"main"},"headers":[],"relativePath":"en/cpp/guide/using_plugins.md","filePath":"en/cpp/guide/using_plugins.md"}'),n={name:"en/cpp/guide/using_plugins.md"};function l(o,e,p,c,d,h){return a(),i("div",null,e[0]||(e[0]=[t('<h1 id="managing-systems-vehicles-using-plugins" tabindex="-1">Managing Systems/Vehicles (Using Plugins) <a class="header-anchor" href="#managing-systems-vehicles-using-plugins" aria-label="Permalink to &quot;Managing Systems/Vehicles (Using Plugins)&quot;">​</a></h1><p>Access to drone information, telemetry and control objects are provided by a number of different <em>plugins</em>. For example, the <a href="./../api_reference/classmavsdk_1_1_action.html">Action</a> plugin is used to arm, takeoff and land the vehicle, while the <a href="./../guide/telemetry.html">Telemetry</a> plugin can be used to query the vehicle GPS status, flight mode, etc. A separate plugin instance must be created for each system that needs it.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>All plugins are declared/used in the same way. This topic uses the <code>Action</code> plugin for the purposes of the demonstration.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Plugins are named using the convention <strong>mavsdk_<em>plugin_name</em>.so</strong>. For more information see <a href="./../guide/toolchain.html">Building C++ Apps</a></p></div><p>In the application source code:</p><ol><li><code>#include</code> the header file for the plugin.<div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;mavsdk/plugins/action/action.h&gt;</span></span></code></pre></div></li><li><a href="./../guide/connections.html">Create a connection</a> to a <code>System</code> object (below named: <code>system</code>).</li><li>Create the plugin instance, specifying the <code>System</code> it is to be used with:<div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> action </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Action{system};</span></span></code></pre></div></li><li>The pointer can then be used to invoke actions on the specified system. For example, to takeoff you would call the API as shown:<div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">action.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">takeoff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div></li></ol>',6)]))}const u=s(n,[["render",l]]);export{g as __pageData,u as default};
