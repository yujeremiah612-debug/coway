const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) redirectUrl = 'https://www.cowaydallas.com' + redirectUrl;
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function scrape() {
  const res = await fetchUrl('https://www.cowaydallas.com/');
  console.log('Status:', res.statusCode, 'Data length:', res.data.length);
  fs.writeFileSync('coway_home.html', res.data);

  // Search for sitemap or robots.txt
  try {
    const robots = await fetchUrl('https://www.cowaydallas.com/robots.txt');
    console.log('Robots.txt:\n', robots.data);
  } catch (e) {}

  try {
    const sitemap = await fetchUrl('https://www.cowaydallas.com/sitemap.xml');
    console.log('Sitemap.xml length:\n', sitemap.data.length);
    fs.writeFileSync('sitemap.xml', sitemap.data);
    const locs = sitemap.data.match(/<loc>(.*?)<\/loc>/g);
    console.log('Sitemap URLs:', locs ? locs.map(l => l.replace(/<\/?loc>/g, '')) : 'none');
  } catch (e) {}
}

scrape();
