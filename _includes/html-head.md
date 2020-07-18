    <link rel="canonical" href="{{ site.url }}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{% if site.google_site_verification %}}
    <meta name="google-site-verification" content="{{ site.google_site_verification }}">
    {{% endif %}}
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
