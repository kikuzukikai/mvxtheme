{% assign docs_by_category = site.documentation | group_by: "category" %}
<div id="footer" class="footer" role="contentinfo" aria-label="Site footer">
    <div class="navigation" role="navigation" aria-label="Footer links">
        <ul role="menubar" aria-label="Footer links menubar" class="horizontal-list">
            <li role="menuitem" aria-label="Blog" class="item">
<h2>新着記事</h2>
                <ul role="menu" aria-hidden="true" aria-label="Blog link">
                    {% for post in site.posts limit:3 %}
<li role="listitem" aria-label="Blog link item"><a href="{{ post.url | relative_url }}" role="link" aria-label="{{ post.title | escape }}">{{ post.title | escape }}</a></li>
                    {% endfor %}
<li role="listitem" aria-label="Blog link item"><a href="{{ '/blog' | relative_url }}" role="link" aria-label="Read more">&raquo; 続きを読み込む</a></li>
                </ul>
            </li>
            <li role="menuitem" aria-label="Organization" class="item">
<h2>団体概要</h2>
                <ul role="menu" aria-hidden="true" aria-label="Organization link">
<li role="listitem" aria-label="Organization link item"><a href="{{ site.url }}{{ '/docs/rules.html' | relative_url }}" role="link" aria-label="Rules">会則</a></li>
<li role="listitem" aria-label="Organization link item"><a href="https://kikuzukikai.booth.pm" target="_blank" rel="noopener" role="link" aria-label="Store">オンラインストア</a></li>
<li role="listitem" aria-label="Organization link item"><a href="{{ site.url }}{{ '/docs/faq.html' | relative_url }}" role="link" aria-label="FAQ">よくある質問</a></li>
<li role="listitem" aria-label="Organization link item"><a href="{{ site.github.repository_url }}" target="_blank" rel="noopener" role="link" aria-label="GitHub">ソースコード</a></li>
                </ul>
            </li>
            <li role="menuitem" aria-label="Connect" class="item">
<h2>リンク集</h2>
                <ul role="menu" aria-hidden="true" aria-label="Connect link">

<li role="listitem" aria-label="Connect link item"><a href="https://gunkanmusashikai.org/" target="_blank" rel="noopener" role="link">軍艦武藏会</a></li>
<li role="listitem" aria-label="Connect link item"><a href="https://ddmlabo014.wixsite.com/ddmlabo" target="_blank" rel="noopener" role="link">駆逐艦模型研究室</a></li>
<li role="listitem" aria-label="Connect link item"><a href="https://web.medjed.com/ja/" target="_blank" rel="noopener" role="link">Medjed.com</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="socials"  role="navigation" aria-label="Social links">
        <ul role="menu" aria-hidden="true" aria-label="Social link">
<li role="listitem" aria-label="Social link item"><a href="https://www.blockchain.com/btc/address/{{ site.bitcoin_address }}" target="_blank" rel="noopener" role="link" aria-label="Bitcoin"><i class="fab fa-bitcoin fa-2x"></i></a></li>
<li role="listitem" aria-label="Social link item"><a href="https://twitter.com/{{ site.github.owner_name }}" target="_blank" rel="noopener" role="link" aria-label="Twitter"><i class="fab fa-twitter fa-2x"></i></a></li>
<li role="listitem" aria-label="Social link item"><a href="https://www.facebook.com/{{ site.github.owner_name }}" target="_blank" rel="noopener" role="link" aria-label="Facebook"><i class="fab fa-facebook fa-2x"></i></a></li>
<li role="listitem" aria-label="Social link item"><a href="https://www.instagram.com/{{ site.github.owner_name }}" target="_blank" rel="noopener" role="link" aria-label="Instagram"><i class="fab fa-instagram fa-2x"></i></a></li>
<li role="listitem" aria-label="Social link item"><a href="{{ site.github.owner_url }}" target="_blank" rel="noopener" role="link" aria-label="GitHub"><i class="fab fa-github fa-2x"></i></a></li>
        </ul>
    </div>
    <div class="copyright" role="contentinfo" aria-label="Copyright"><copyright></copyright>
        <div class="right">
<a href="{{ '/sitemap.xml' | relative_url }}" target="_blank" rel="noopener" role="link" aria-label="Site map">サイトマップ</a>
&nbsp;&bull;&nbsp;
<a href="{{ site.github.repository_url }}/commits/master.atom" target="_blank" rel="noopener" role="link" aria-label="Atom">Atom</a>
&nbsp;&bull;&nbsp;
法人番号&nbsp;<a href="https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo={{ site.corporate_number }}" target="_blank" rel="noopener" role="link" aria-label="Corporate number">{{ site.corporate_number }}</a>
        </div>
    </div>
</div>
