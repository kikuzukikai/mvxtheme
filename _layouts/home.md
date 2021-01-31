---
layout: default
---
<article class="home" role="article">
    <section class="landing" role="document">
<h1>{{ site.tagline }}</h1>
<p>{{ site.description }}</p>
<p>お問い合わせはこちらへどうぞ: contact@kikuzuki<span class="obfuscate">-</span>kai.org</p>
<p><a href="{{site.url}}/docs/contact.html">匿名でのお問い合わせはこちらから</a></p>
    </section>
    <section class="backers" role="document">
<h1>掲示板</h1>
{% include_cached bulletin.md %}
    </section>
</article>
