# week2


 # 字符集

  # ASCII
  # Unicode 
  # UTF-8


# InputElement
  * WhiteSpace 
    - Tab：制表符（打字机时代：制表时隔开数字很方便）
    - VT：纵向制表符
    - FF: FormFeed
    - SP: Space
    - NBSP: NO-BREAK SPACE（和 SP 的区别在于不会断开、不会合并）
  
  * LineTerminator 换行符
   - LF - `\n`
   - CR - `\r`
   ...

  * Comment 注释 
   - //
   - /**/

  * Token 一切有效的输入
   - Punctuator:符号 eg：`><?:{`
   -  Keywords:关键字  eg：`await default`
   - IdentifierName
      -  Identifier:标识符
          - 变量名 
          - 属性
    - Literal: 直接量
      - Number
        - IEE754
        - 浮点数比较最小精度 Number.MAX_SAFE_INTEGER
        - 进制
          - 十进制  HEX 
          - 八进制  DEC 0o
          - 十六进制 OCT 0x
          - 二进制  BIN 0b
      - String       
      - Boolean
      - Null
      - Unddifined
      - Symbol