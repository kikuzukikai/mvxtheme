    <link rel="canonical" href="{{ site.url }}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="dns-prefetch" href="//www.kikuzukikai.org">
    <link rel="dns-prefetch" href="//www.google.com">
    {% if page.url == '/docs/contact.html' %}
    <script src="//www.google.com/recaptcha/api.js" async defer></script>
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
