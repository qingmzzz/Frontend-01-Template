# 字符串转uft-8

split拆分字符串
=>
map遍历
=>
取 charCodeAt()
=>
转16进制 toSting(16)
=>
转stirng join

let utf8Encoding= (str)=>{
  return str.split(').map(e=>"\\u"+e.charCodeAt().toString(16)).join('')
}