# 取单双引号ascⅡ码
TAG= ' / "
`\U00${new Number(TAG.charCodeAt())}`

' => \u0027
" => \u0022
# 取汉字/字符串/数字
\u4E00-\u9FA5A-Za-z0-9

[\u0027]|[\u0022]|[\u4E00-\u9FA5A-Za-z0-9]