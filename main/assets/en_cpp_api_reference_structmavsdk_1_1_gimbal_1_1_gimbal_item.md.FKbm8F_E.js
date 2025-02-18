import{_ as i,c as s,al as e,o as t}from"./chunks/framework.BVh3rIuO.js";const k=JSON.parse('{"title":"mavsdk::Gimbal::GimbalItem Struct Reference","description":"","frontmatter":{"github_branch":"main"},"headers":[],"relativePath":"en/cpp/api_reference/structmavsdk_1_1_gimbal_1_1_gimbal_item.md","filePath":"en/cpp/api_reference/structmavsdk_1_1_gimbal_1_1_gimbal_item.md"}'),l={name:"en/cpp/api_reference/structmavsdk_1_1_gimbal_1_1_gimbal_item.md"};function d(_,a,n,m,p,h){return t(),s("div",null,a[0]||(a[0]=[e('<h1 id="mavsdk-gimbal-gimbalitem-struct-reference" tabindex="-1">mavsdk::Gimbal::GimbalItem Struct Reference <a class="header-anchor" href="#mavsdk-gimbal-gimbalitem-struct-reference" aria-label="Permalink to &quot;mavsdk::Gimbal::GimbalItem Struct Reference&quot;">​</a></h1><p><code>#include: gimbal.h</code></p><hr><p><a href="./classmavsdk_1_1_gimbal.html">Gimbal</a> list item.</p><h2 id="data-fields" tabindex="-1">Data Fields <a class="header-anchor" href="#data-fields" aria-label="Permalink to &quot;Data Fields&quot;">​</a></h2><p>int32_t <a href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a9424d6672c7ce15ba1e76f7dba72c398">gimbal_id</a> {} - ID to address it, starting at 1 (0 means all gimbals)</p><p>std::string <a href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a4f242d74e738cf807770c8d45340edcb">vendor_name</a> {} - Vendor name.</p><p>std::string <a href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a7429465ade39f000358ba6597dd21c07">model_name</a> {} - Model name.</p><p>std::string <a href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a495511db3d00aa170512dbe3f862a919">custom_name</a> {} - Custom name name.</p><p>int32_t <a href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a9b378bec4973e834803917c341b6832d">gimbal_manager_component_id</a> {} - MAVLink component of gimbal manager, for debugging purposes.</p><p>int32_t <a href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a6c6ed15759db38636774ca244367dafd">gimbal_device_id</a> {} - MAVLink component of gimbal device.</p><h2 id="field-documentation" tabindex="-1">Field Documentation <a class="header-anchor" href="#field-documentation" aria-label="Permalink to &quot;Field Documentation&quot;">​</a></h2><h3 id="structmavsdk_1_1_gimbal_1_1_gimbal_item_1a9424d6672c7ce15ba1e76f7dba72c398" tabindex="-1">gimbal_id <a class="header-anchor" href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a9424d6672c7ce15ba1e76f7dba72c398" aria-label="Permalink to &quot;gimbal_id {#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a9424d6672c7ce15ba1e76f7dba72c398}&quot;">​</a></h3><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int32_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mavsdk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Gimbal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GimbalItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::gimbal_id {}</span></span></code></pre></div><p>ID to address it, starting at 1 (0 means all gimbals)</p><h3 id="structmavsdk_1_1_gimbal_1_1_gimbal_item_1a4f242d74e738cf807770c8d45340edcb" tabindex="-1">vendor_name <a class="header-anchor" href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a4f242d74e738cf807770c8d45340edcb" aria-label="Permalink to &quot;vendor_name {#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a4f242d74e738cf807770c8d45340edcb}&quot;">​</a></h3><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::string </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mavsdk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Gimbal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GimbalItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::vendor_name {}</span></span></code></pre></div><p>Vendor name.</p><h3 id="structmavsdk_1_1_gimbal_1_1_gimbal_item_1a7429465ade39f000358ba6597dd21c07" tabindex="-1">model_name <a class="header-anchor" href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a7429465ade39f000358ba6597dd21c07" aria-label="Permalink to &quot;model_name {#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a7429465ade39f000358ba6597dd21c07}&quot;">​</a></h3><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::string </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mavsdk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Gimbal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GimbalItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::model_name {}</span></span></code></pre></div><p>Model name.</p><h3 id="structmavsdk_1_1_gimbal_1_1_gimbal_item_1a495511db3d00aa170512dbe3f862a919" tabindex="-1">custom_name <a class="header-anchor" href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a495511db3d00aa170512dbe3f862a919" aria-label="Permalink to &quot;custom_name {#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a495511db3d00aa170512dbe3f862a919}&quot;">​</a></h3><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::string </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mavsdk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Gimbal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GimbalItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::custom_name {}</span></span></code></pre></div><p>Custom name name.</p><h3 id="structmavsdk_1_1_gimbal_1_1_gimbal_item_1a9b378bec4973e834803917c341b6832d" tabindex="-1">gimbal_manager_component_id <a class="header-anchor" href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a9b378bec4973e834803917c341b6832d" aria-label="Permalink to &quot;gimbal_manager_component_id {#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a9b378bec4973e834803917c341b6832d}&quot;">​</a></h3><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int32_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mavsdk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Gimbal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GimbalItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::gimbal_manager_component_id {}</span></span></code></pre></div><p>MAVLink component of gimbal manager, for debugging purposes.</p><h3 id="structmavsdk_1_1_gimbal_1_1_gimbal_item_1a6c6ed15759db38636774ca244367dafd" tabindex="-1">gimbal_device_id <a class="header-anchor" href="#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a6c6ed15759db38636774ca244367dafd" aria-label="Permalink to &quot;gimbal_device_id {#structmavsdk_1_1_gimbal_1_1_gimbal_item_1a6c6ed15759db38636774ca244367dafd}&quot;">​</a></h3><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int32_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mavsdk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Gimbal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GimbalItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::gimbal_device_id {}</span></span></code></pre></div><p>MAVLink component of gimbal device.</p>',30)]))}const r=i(l,[["render",d]]);export{k as __pageData,r as default};
