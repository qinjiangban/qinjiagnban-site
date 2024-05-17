教程：1.首先先写好你要快捷生成的代码片段，比如：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${TM_FILENAME_BASE}</title>
    <script src="../js/vue.js"></script>
  </head>
  <body>
    <div id="root">$0</div>
    <script>
      Vue.config.productionTip = false;
      const vm = new Vue({
        el: '#root',
        data: {
          $1, //光标出现的第一个位置
        },
      });
</script>
  </body>
</html>
```

注意这里的$1,$2……$0，这是你代码快捷生成之后鼠标光标的所在位置，光标会首先定位在$1,按Tab键切换到$2的位置，以此类推，光标最后会定位在$0的位置。还有其他语法，在这里一并讲解：

1. 占位符

占位符是带有值的制表符，如 .将插入并选择占位符文本，以便可以轻松更改。说白了占位符${1:foo}就是在$1的基础上，光标跳到$1位置的同时会自动生成并选中foo，同样按Tab键切换到$2的位置。占位符可以嵌套，如 。${1:foo}${1:another ${2:placeholder}}

2. 选择

占位符可以作为有选择的值。语法是以逗号分隔的值的枚举，用竖线字符括起来，例如 。插入代码段并选择占位符时，选项将提示用户选取其中一个值。${1|one,two,three|}

3. 变量

插入变量的值。如果未设置变量，则插入其默认值或空字符串。当变量未知（即未定义其名称）时，将插入变量的名称并将其转换为占位符。$name${name:default}可以使用以下变量：

`TM_SELECTED_TEXT`当前选定的文本或空字符串

`TM_CURRENT_LINE`当前行的内容

`TM_CURRENT_WORD`光标下单词的内容或空字符串

`TM_LINE_INDEX`基于零索引的行号

`TM_LINE_NUMBER`基于一个索引的行号

`TM_FILENAME`当前文档的文件名

`TM_FILENAME_BASE`不带扩展名的当前文档的文件名

`TM_DIRECTORY`当前文档的目录

`TM_FILEPATH`当前文档的完整文件路径

`RELATIVE_FILEPATH`当前文档的相对（相对于打开的工作空间或文件夹）文件路径

`CLIPBOARD`剪贴板的内容

`WORKSPACE_NAME`打开的工作区或文件夹的名称

`WORKSPACE_FOLDER`打开的工作区或文件夹的路径



要插入当前日期和时间：
`CURRENT_YEAR`本年度

`CURRENT_YEAR_SHORT`本年度的最后两位数

`CURRENT_MONTH`以两位数字表示的月份（例如"02"）

`CURRENT_MONTH_NAME`月份的全名（例如"七月"）

`CURRENT_MONTH_NAME_SHORT`月份的短名称（例如"Jul"）

`CURRENT_DATE`以两位数字表示的月份中的某一天（例如"08"）

`CURRENT_DAY_NAME`日期的名称（例如"星期一"）

`CURRENT_DAY_NAME_SHORT`日期的短名称（例如"星期一"）

`CURRENT_HOUR24` 小时制格式的当前小时

`CURRENT_MINUTE`当前分钟为两位数

`CURRENT_SECOND`当前第二位为两位数

`CURRENT_SECONDS_UNIX`自 Unix 纪元以来的秒数
