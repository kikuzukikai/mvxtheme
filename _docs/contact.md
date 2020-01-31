---
layout: docs
title: お問い合わせフォーム
---

**駆逐艦菊月会では、駆逐艦菊月の元乗組員、またそのご遺族を探しております。**

- 匿名でのお問い合わせにもお答えできるようになりました。

原則、匿名でのお問い合わせとその回答はこのページに公開いたします。

非公開や返信を希望される場合は、「お問い合わせ内容」欄に返信先を記入いただくか、[トップページ]({{ site.url }})掲載のアドレス(contact@kikuzuki<span class="obfuscate">-</span>kai.org)にメールをお送りください。

また、お問い合わせの内容によっては回答までにお時間を頂く場合がございますので、予めご了承ください。

<div align="center">
<form name="contact" action="{{ site.url }}" method="POST" netlify-honeypot="bot-field" netlify>
  <div class="form-group hidden">
    <input name="bot-field" />
  </div>
  <div class="form-group">
    <textarea class="controls" name="inquiry" placeholder="お問い合わせ内容" rows="3" required></textarea>
  </div>
  <button type="submit" class="button">送信</button>
</form>
</div>
