
### 参与开发
``` bash
git clone git@github.com:cuiyifan-1/vue3-demo.git

cd vue3-demo 

yarn install 

yarn serve
```


## 项目注意事项：


### 一、此项目采用包管理工具 yarn

#### 1、禁止使用其他工具，否则会报错，可以在scripts/preinstall.js 处修改

### 二、此项目采用yarn commit提交，代替commit形式

#### 1、git add 后运行 yarn commit 命令，选择提交类型，类型如下：
``` bash
# feat： 新增feature
# fix: 修复bug
# docs: 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
# style: 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
# refactor: 代码重构，没有加新功能或者修复bug
# perf: 优化相关，比如提升性能、体验
# test: 测试用例，包括单元测试、集成测试等
# chore: 改变构建流程、或者增加依赖库、工具等
# revert: 回滚到上一个版本
```

#### 2、根据提示填写提交信息，提示依次如下：
``` bash
# 1、What is the scope of this change: 填写更改的文件目录（可直接回车）
# 2、Write a short, imperative tense description of the change: 填写提交描述
# 3、Provide a longer description of the change: 填写更具体的描述（可直接回车）
# 4、Are there any breaking changes? (y/N)：是否有突破性进展，默认是NO（可直接回车）
# 5、Does this change affect any open issues：是否影响其他问题，默认是NO（可直接回车）
```

#### 3、进行后续的正常git提交流程，如git pull、git push等操作

### 三、此项目其他配置

#### 1、 eslint校验
``` bash
  执行 yarn lint:eslint 进行校验，如有不符合处会有错误提示，修改之后才可进行提交
``` 
#### 2、代码格式化配置 lint:prettier
``` bash
  在代码提交时，会自动执行，所以在最后push之后，记得检查一下是否有格式化文件需要二次提交
``` 

### 四、prettier配置
```bash
# "printWidth": 100,//每行最多显示的字符数
# "tabWidth": 2,//tab的宽度 2个字符
# "useTabs": true,//使用tab代替空格
# "semi": true,//结尾使用分号
# "singleQuote": true,//使用单引号代替双引号
# "trailingComma": "none",//结尾是否添加逗号
# "bracketSpacing": true,//对象括号俩边是否用空格隔开
# "bracketSameLine": true,//组件最后的尖括号不另起一行
# "arrowParens": "always",//箭头函数参数始终添加括号
# "htmlWhitespaceSensitivity": "ignore",//html存在空格是不敏感的
# "vueIndentScriptAndStyle": false,//vue 的script和style的内容是否缩进
# "endOfLine": "auto",//行结尾形式 mac和linux是\n windows是\r\n
# "singleAttributePerLine": false //组件或者标签的属性是否控制一行只显示一个属性
```


