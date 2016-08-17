'use strict';

import request from 'request-promise';
import userAgents from './useragents';
import linkedInUrl from './linkedInUrl';
import metaheaders from './headers';
const method = 'GET';
const gzip = true;

export default function retrieve(link) {
  const url = linkedInUrl.build(link);
  const headers = Object.assign({}, metaheaders, {
    'User-Agent': userAgents.randomAgent(),
  });
  return request({ url, method, headers, gzip });
}
