(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{484:function(a,e,t){"use strict";t.r(e);var s=t(1),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"安装相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装相关"}},[a._v("#")]),a._v(" 安装相关")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker Desktop for Windows"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/54147784#:~:text=windows%E7%89%88docker%E9%9C%80%E8%A6%81Microsoft%20Hyper-V%E7%9A%84%E6%94%AF%E6%8C%81%EF%BC%8C%E5%8D%B3windows%E5%86%85%E7%BD%AE%E7%9A%84%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%BC%95%E6%93%8E%EF%BC%8C%E4%BB%8Ewin10%E5%BC%80%E5%A7%8B%E6%94%AF%E6%8C%81%EF%BC%8Cdocker%E5%9C%A8%E5%AE%89%E8%A3%85%E7%9A%84%E6%97%B6%E5%80%99%E4%BC%9A%E8%87%AA%E5%8A%A8%E5%BC%80%E5%90%AF%EF%BC%8C%E9%9C%80%E8%A6%81%E9%87%8D%E5%90%AF%E7%94%B5%E8%84%91%E3%80%82%20%E5%8F%8C%E5%87%BB%20Docker,for%20Windows%20Installer.exe%20%E7%84%B6%E5%90%8E%E4%B8%80%E8%B7%AF%E4%B8%8B%E4%B8%80%E6%AD%A5%EF%BC%8C%E5%AE%89%E8%A3%85%E5%AE%8C%E6%88%90%EF%BC%81%20%E5%AE%89%E8%A3%85%E5%AE%8C%E6%88%90%E5%90%8Edocker%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%8A%A8%E8%BF%90%E8%A1%8C%EF%BC%8C%E6%90%9C%E7%B4%A2docker%E7%82%B9%E5%87%BB%E8%BF%90%E8%A1%8C%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[a._v("史上最全（全平台）docker安装方法"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package",target:"_blank",rel:"noopener noreferrer"}},[a._v("【Windows】旧版 WSL 的手动安装步骤（不装 Docker Desktop 会启动失败）"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"常用后台服务挂载命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用后台服务挂载命令"}},[a._v("#")]),a._v(" 常用后台服务挂载命令")]),a._v(" "),e("h3",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[a._v("#")]),a._v(" Redis")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" redis "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6379")]),a._v(":6379 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always redis\n")])])]),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/huanglu0314/article/details/112244022?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&utm_relevant_index=5",target:"_blank",rel:"noopener noreferrer"}},[a._v("docker 安装 redis 并配置 redis.conf(默认没有)"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"rabbitmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[a._v("#")]),a._v(" Rabbitmq")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" rabbitmq "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5672")]),a._v(":5672 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("15672")]),a._v(":15672 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always rabbitmq\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" rabbitmq_management "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("15672")]),a._v(":15672 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5672")]),a._v(":5672 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RABBITMQ_DEFAULT_USER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("guest "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RABBITMQ_DEFAULT_PASS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("guest rabbitmq:management "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这个可以进ui界面")]),a._v("\n")])])]),e("h3",{attrs:{id:"zookeeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[a._v("#")]),a._v(" Zookeeper")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" zookeeper "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2181")]),a._v(":2181 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always zookeeper\n")])])]),e("h3",{attrs:{id:"emqx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emqx"}},[a._v("#")]),a._v(" Emqx")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" emqx "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1883")]),a._v(":1883 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v(":8081 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8083")]),a._v(":8083 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8883")]),a._v(":8883 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8084")]),a._v(":8084 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("18083")]),a._v(":18083 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always emqx/emqx:latest\n")])])]),e("h3",{attrs:{id:"mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[a._v("#")]),a._v(" Mongodb")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mongo "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(":27017 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /Users/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("YourUsername"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("/db:/data/db "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always mongo\n")])])]),e("h2",{attrs:{id:"docker-基本命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-基本命令"}},[a._v("#")]),a._v(" Docker 基本命令")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_45408390/article/details/120264264",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker基础篇 - （二）Docker的常用命令"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/docker/",target:"_blank",rel:"noopener noreferrer"}},[a._v("docker | Docker Documentation"),e("OutboundLink")],1)]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" version    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示docker的版本信息。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" info       "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示docker的系统信息，包括镜像和容器的数量")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("命令"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 帮助命令")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看所有镜像")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" search "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 搜索镜像")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载镜像")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除镜像")]),a._v("\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##### 以下是容器运行（基于镜像）命令，先有镜像才有容器")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("可选参数"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" image\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("###### 参数说明")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Name"')]),a._v("    容器名字  tomcat01，tomcat02,用来区分容器\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("                 后台方式运行\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v("                使用交互方式运行，进入容器查看区分\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v("                 指定容器的端口 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("：8080\n    "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" ip:主机端口：容器端口\n    "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" 主机端口：容器端口"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("常用"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" 容器端口\n    容器端口\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v("                 随机指定端口\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("######")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 列出所有容器")]),a._v("\n\n")])])]),e("hr"),a._v(" "),e("h3",{attrs:{id:"docker-清理容器日志脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-清理容器日志脚本"}},[a._v("#")]),a._v(" Docker 清理容器日志脚本")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('#!/bin/bash\nlogs=$(find /vol/docker/containers/ -name *-json.log)\nfor log in $logs\ndo\n        echo "clean logs : $log"\n        cat /dev/null > $log\ndone\n\necho "======== end clean docker containers logs ========"\n~\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);