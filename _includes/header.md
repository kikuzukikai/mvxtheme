<div id="wrap">
<header class="header" role="banner" aria-label="Header">
<a href="{{ '/' | relative_url }}" class="logo" role="link" aria-label="Home">
    <font size="5">&nbsp;{{ site.title }}</font>
</a>
<a href="javascript:void(0);" onclick="hamburgerMenu();" class="hamburger-button" role="link" aria-label="Hamburger menu button">
    <i class="fa fa-bars fa-fw" aria-hidden="true"></i>
</a>
    <nav class="navigation" role="navigation" aria-label="Navigation">
        <ul role="menu" aria-hidden="true" aria-label="Navigation menu">
            <li role="menuitem" aria-label="Navigation menu item">
                <a href="{{ '/' | relative_url }}" class="logo" role="menuitem" aria-label="Home">
                    <font size="5">&nbsp;{{ site.title }}</font>
                </a>
            </li>
            {% for item in site.menu %}
            <li role="menuitem"><a href="{{ item.url | relative_url }}" role="menuitem" aria-label="{{ item.title | escape }}">{{ item.title | escape }}</a></li>
            {% endfor %}
        </ul>
    </nav>
</header>
<nav id="hamburger-menu" role="navigation" aria-label="Hamburger menu">
    <div class="doc-nav" role="navigation" aria-label="Site navigation">
        <ul class="menu" role="menu" aria-hidden="true" aria-label="Navigation menu">
        <li role="presentation" aria-label="Category name"><a href="{{ '/blog/' | relative_url }}" class="doc-link" role="link" aria-label="Blog">ブログ記事</a></li>
        <li role="presentation" aria-label="Category name"><a href="{{ '/docs/' | relative_url }}" class="doc-link" role="link" aria-label="Docs">団体概要</a></li>
        <ul class="sub-menu" role="menu" aria-hidden="true" aria-label="Navigation menu">
        {% for item in site.docs %}
        <li role="menuitem" aria-label="Navigation menu item"><a href="{{ item.url | relative_url }}" class="doc-link" role="link" aria-label="{{ item.title }}">{{ item.title }}</a></li>
        {% endfor %}
        </ul>
        <li role="presentation" aria-label="Category name"><a href="{{ '/special/' | relative_url }}" class="doc-link" role="link" aria-label="Special">特設ページ</a></li>
        <ul class="sub-menu" role="menu" aria-hidden="true" aria-label="Navigation menu">
        {% for item in site.special %}
        <li role="menuitem" aria-label="Navigation menu item"><a href="{{ item.url | relative_url }}" class="doc-link" role="link" aria-label="{{ item.title }}">{{ item.title }}</a></li>
        {% endfor %}
        </ul>
        </ul>
    </div>
</nav>
