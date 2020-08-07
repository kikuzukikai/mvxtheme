<head>
    <title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.title }}{% if page.title %}{% else %} | {{ site.tagline }}{% endif %}</title>
    <meta name="description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">
    <link rel="canonical" href="{{ site.url }}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="dns-prefetch" href="https://www.kikuzukikai.org">
    <link rel="dns-prefetch" href="https://www.google.com">
    {% if page.url == "/docs/contact.html" %}
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script>
      $("contact").submit(function() {
        grecaptcha.execute();
      });
      function onSubmit(token) {
        document.getElementById("contact").submit();
      }
    </script>
    {% endif %}
    <!-- favicon -->
    <link rel="icon" href="{{ '/assets/svg/favicon.svg' | relative_url }}" type="image/svg+xml">
    <!-- rss -->
    <link rel="alternate" type="application/rss+xml" title="{{ site.title | escape }}" href="{{ '/feed.xml' | relative_url }}">
    <!-- stylesheet -->
    {% capture main %}
    {% include css/main.scss %}
    {% endcapture %}
    <style>
    {{ main | scssify }}
    </style>
</head>
