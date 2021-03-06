'use strict';
/* eslint no-useless-escape: 0*/

const urlpattern = '^((https|http|ftp|rtsp|mms)?://)'
  + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?"
  + '(([0-9]{1,3}\.){3}[0-9]{1,3}'
  + '|'
  + "([0-9a-z_!~*'()-]+\.)*"
  + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.'
  + '[a-z]{2,6})'
  + '(:[0-9]{1,4})?'
  + '((/?)|'
  + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
const urlRegex = new RegExp(urlpattern);

export default function isURL(param) {
  return urlRegex.test(param);
}
