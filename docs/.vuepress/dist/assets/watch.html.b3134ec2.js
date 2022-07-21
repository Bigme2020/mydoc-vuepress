import{_ as n,o as s,c as a,d as t}from"./app.9ed2ff16.js";const p={},e=t(`<h1 id="watch\u5168\u5BB6\u6876" tabindex="-1"><a class="header-anchor" href="#watch\u5168\u5BB6\u6876" aria-hidden="true">#</a> Watch\u5168\u5BB6\u6876</h1><h2 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>watch</code>\u53EA\u80FD\u76D1\u542C\u54CD\u5E94\u5F0F\u6570\u636E</p></div><p><code>watch</code> \u7684\u7528\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> refName <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;sjy&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> refAge <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;sjy&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  refName<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>refName<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">watch</span><span class="token punctuation">(</span>refName<span class="token punctuation">,</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// vue3 watch\u57FA\u7840\u7528\u6CD5 \u53EA\u80FD\u76D1\u542C\u54CD\u5E94\u5F0F\u6570\u636E</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>refName<span class="token punctuation">,</span> refAge<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// \u76D1\u542C\u591A\u4E2A\uFF0C\u8FD4\u56DE\u7684newValue\u548ColdValue\u4E5F\u662F\u6570\u7EC4</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6CE8\u610F\uFF1A\u5728\u76D1\u542C\u6DF1\u5C42\u6B21\u7684\u503C\u65F6 <code>reactive</code> \u80FD\u81EA\u52A8\u76D1\u542C\u5230\uFF0C\u800C <code>ref</code> \u9700\u8981\u5728 <code>watch</code> \u4E2D\u52A0\u5165\u7B2C\u4E09\u4E2A\u53C2\u6570\u6765\u8FDB\u884C\u6DF1\u5EA6\u76D1\u542C</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>BUG\uFF1Avue3 \u7684 <code>watch</code> \u5728\u8FDB\u884C\u6DF1\u5C42\u6B21\u76D1\u542C\u65F6\u65E0\u8BBA\u662F <code>ref</code> \u8FD8\u662F <code>reactive</code> \u90FD\u4F1A\u53D1\u751F newValue \u548C oldValue \u662F\u4E00\u6837\u7684\u503C\u7684BUG</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> objRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  property<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;sjy&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> objReactive <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  property<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;sjy&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  objRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>property<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
  objReactive<span class="token punctuation">.</span>property<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;abcReactive&#39;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;objRef&#39;</span><span class="token punctuation">,</span> objRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;objReactive&#39;</span><span class="token punctuation">,</span> objReactive<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">watch</span><span class="token punctuation">(</span>objRef<span class="token punctuation">,</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// old \u548C new \u662F\u4E00\u6837\u7684</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;old&#39;</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token string">&#39;new&#39;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  deep<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>objReactive<span class="token punctuation">,</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// old \u548C new \u662F\u4E00\u6837\u7684</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;old&#39;</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token string">&#39;new&#39;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6CE8\u610F\uFF1Avue3\u7684watch\u5728\u8FDB\u884C\u6DF1\u5C42\u6B21\u76D1\u542C\u65F6\u65E0\u8BBA\u662Fref\u8FD8\u662Freactive\u90FD\u4F1A\u53D1\u751FnewValue\u548ColdValue\u662F\u4E00\u6837\u7684\u503C\u7684BUG</span>
<span class="token comment">// \u5728\u52A0\u5165immediate:true\u540E\u7B2C\u4E00\u6B21\u8FDB\u5165\u65F6\u7684\u76D1\u542C\u8C03\u7528\u6CA1\u6709BUG\uFF0ColdValue\u59CB\u7EC8\u662Fundefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6CE8\u610F\uFF1A\u8FD8\u53EF\u4EE5\u901A\u8FC7\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u51FD\u6570\u7684\u65B9\u5F0F\u6765\u6307\u5B9A\u76D1\u542C\u5BF9\u8C61\u5185\u7684\u67D0\u4E00\u4E2A\u5C5E\u6027\uFF0C\u4E5F\u53EA\u6709\u8FD9\u4E00\u4E2A\u65B9\u5F0F\u80FD\u76D1\u542C\u5BF9\u8C61\u5185\u6307\u5B9A\u5C5E\u6027</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> objReactive <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  property<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;sjy&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  objReactive<span class="token punctuation">.</span>property<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;abcReactive&#39;</span>
  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;objReactive&#39;</span><span class="token punctuation">,</span> objReactive<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53EF\u4EE5\u76D1\u542C\u5BF9\u8C61\u67D0\u4E00\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u6570\u7EC4\u67D0\u4E00\u7D22\u5F15...</span>
<span class="token comment">// \u5728\u4EE5\u51FD\u6570\u76D1\u542C\u7684\u65F6\u5019\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u4E0A\u9762\u7684newValue\u548ColdValue\u76F8\u7B49\u7684BUG</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> objReactive<span class="token punctuation">.</span>property<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// old sjy new abcReactive</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;old&#39;</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token string">&#39;new&#39;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// old 1 new 0</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;old&#39;</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token string">&#39;new&#39;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect" aria-hidden="true">#</a> watchEffect</h2><p><code>watchEffect</code> \u7684\u7528\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;\u98DE\u673A&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u7528\u6765\u624B\u52A8\u505C\u6B62\u6E05\u9664\u76D1\u542C\u5668\uFF0C\u4EE5\u9632\u5185\u5B58\u6CC4\u6F0F</span>
<span class="token comment">// \u503C\u5F97\u6CE8\u610F\uFF1A\u540C\u6B65\u6267\u884C\u7684\u76D1\u542C\u5668\u662F\u4F1A\u5728\u7EC4\u4EF6\u9500\u6BC1\u65F6\u81EA\u52A8\u6E05\u9664\u7684\uFF0C\u800C\u5F02\u6B65\u751F\u6210\u7684\u76D1\u542C\u5668\u662F\u9700\u8981\u624B\u52A8\u6E05\u9664\u7684\uFF0C\u5177\u4F53\u770B\u5B98\u65B9\u6587\u6863</span>
<span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span>oninvalidate<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ipt<span class="token operator">:</span> HTMLInputElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#ipt&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLInputElement
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ipt<span class="token punctuation">,</span> <span class="token string">&#39;elllllllllllllll&#39;</span><span class="token punctuation">)</span>
    
    <span class="token comment">// \u8FD9\u4E2A\u56DE\u8C03\u4F1A\u5728\u7B2C\u4E8C\u6B21\u4EE5\u53CA\u4E4B\u540E\u7684\u4E00\u5F00\u59CB\u8C03\u7528</span>
    <span class="token function">oninvalidate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;before&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","watch.html.vue"]]);export{k as default};