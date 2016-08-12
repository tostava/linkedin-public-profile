'use strict';
/* eslint max-len: 0 */

const agents = [
  'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6',
  'Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.1 (KHTML, like Gecko) Ubuntu/11.04 Chromium/14.0.825.0 Chrome/14.0.825.0 Safari/535.1',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.824.0 Safari/535.1',
  'Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))',
  'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.2; Trident/4.0; Media Center PC 4.0; SLCC1; .NET CLR 3.0.04320)',
  'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
  'Mozilla/5.0 (compatible; Konqueror/4.5; FreeBSD) KHTML/4.5.4 (like Gecko)',
  'Opera/9.80 (Windows NT 6.1; U; es-ES) Presto/2.9.181 Version/12.00',
  'Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50',
];


function randomAgent() {
  const agent = agents[Math.floor(Math.random() * agents.length)];
  console.log(agent);
  return agent;
}

module.exports = { randomAgent };
