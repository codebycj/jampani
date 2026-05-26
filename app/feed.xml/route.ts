import { getAllWriting } from "@/lib/content";

const siteUrl = "https://jampani.dev";

export async function GET() {
  const posts = getAllWriting();

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/writing/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/writing/${post.slug}</guid>
      <description><![CDATA[${post.summary}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Chaitanya Jampani — Writing</title>
    <link>${siteUrl}</link>
    <description>Notes on frontend architecture, accessibility, and building for regulated industries.</description>
    <language>en-CA</language>
    <managingEditor>chaitanya@jampani.dev (Chaitanya Jampani)</managingEditor>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
