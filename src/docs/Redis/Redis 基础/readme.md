# 安装 Redis

大多数企业都是基于 Linux 服务器来部署项目，而且 Redis 官方也没有提供 Windows 版本的安装包。

此处选择的 Linux 版本为 CentOS 7.

## 依赖库

Redis 是基于 C 语言编写的，因此首先需要安装 Redis 所需要的 gcc 依赖：

```shell
yum install -y gcc tcl
```

## 下载并解压

Redis 的官方网站地址：https: /redis.io/

解压命令

```shell
tar -zxvf redis-6.2.6.tar.gz
```

## 编译

```shell
# 进入解压目录
cd redis-6.2.6
# 编译并安装
make && make install
```

## 安装目录

默认的安装路径是在 /usr/local/bin 目录下.

该目录已经默认配置到环境变量，因此可以在任意目录下运行这些命令。其中：

> redis-cli：是 redis 提供的命令行客户端
>
> redis-server：是 redis 的服务端启动脚本
>
> redis-sentinel：是 redis 的哨兵启动脚本

指定安装目录

```shell
make install PREFIX=/usr/local/redis
```

## 启动 redis 服务

### 直接启动(了解)

```shell
# 进入redis安装目录
cd /usr/local/redis/bin/
# 启动服务
./redis-server
```

### 通过守护进程方式启动

```shell
# 第一步：从 redis 的源码目录中复制 redis.conf 到 redis 的安装目录
cp /root/redis-6.2.6/redis.conf /usr/local/redis/bin/
# 第二步：修改redis.conf配置文件
cd /usr/local/redis/bin/
vi redis.conf
# 修改内容如下：
# daemonize 的值从 no 修改成 yes
# 第三步：启动服务
./redis-server redis.conf
# 第四步：查看进程来确定redis是否启动成功，非必须
ps -ef |grep redis
```

远程连接和密码

```shell
# 允许访问的地址，默认是127.0.0.1，会导致只能在本地访问。
# 修改为0.0.0.0则可以在任意IP访问，生产环境不要设置为0.0.0.0
bind 0.0.0.0
# 守护进程，修改为yes后即可后台运行
daemonize yes
# 密码，设置后访问Redis必须输入密码
requirepass 123321
```

其他配置

```shell
# 监听的端口
port 6379
# 工作目录，默认是当前目录，也就是运行redis-server时的命令，日志、持久化
等文件会保存在这个目录
dir .
# 数据库数量，设置为1，代表只使用1个库，默认有16个库，编号0~15
databases 1
# 设置redis能够使用的最大内存
maxmemory 512mb
# 日志文件，默认为空，不记录日志，可以指定日志文件名
logfile "redis.log"
```

### 停止服务

```shell
# 利用redis-cli来执行 shutdown 命令，即可停止 Redis 服务，
# 因为之前配置了密码，因此需要通过 -u 来指定密码
redis-cli -u 123321 shutdown
```

## 开机自启

切换到 /lib/systemd/system/ 目录，创建 redis.service 文件。命令如下：

```shell
cd /lib/systemd/system/
vim redis.service
```

内容如下：

```shell
[Unit]
Description=redis-server
After=network.target

[Service]
Type=forking
# ExecStart需要按照实际情况修改成自己的地址
ExecStart=/usr/local/redis/bin/redis-server /usr/local/redis/bin/redis.conf
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

然后重载系统服务：

```shell
systemctl daemon-reload
```

设置开启自动启动:

```shell
# 开机自动启动
systemctl enable redis.service
# 启动redis服务
systemctl start redis.service
# 查看服务状态
systemctl status redis.service
# 停止服务
systemctl stop redis.service
# 取消开机自动启动(卸载服务)
systemctl disabled redis.service
```

## Redis 桌面客户端

安装完成 Redis，我们就可以操作 Redis，实现数据的 CRUD 了。这需要用到 Redis 客户端，包括：

- 命令行客户端

- 图形化桌面客户端

- 编程客户端

### Redis 命令行客户端

Redis 安装完成后就自带了命令行客户端：redis-cli，使用方式如下：

```shell
redis-cli [options] [commonds]
```

其中常见的 options 有：

`-h 127.0.0.1`：指定要连接的 redis 节点的 IP 地址，默认是 127.0.0.1

`-p 6379`：指定要连接的 redis 节点的端口，默认是 6379

`-a 123321`：指定 redis 的访问密码

其中的 commonds 就是 Redis 的操作命令，例如：

`ping`：与 redis 服务端做心跳测试，服务端正常会返回 `pong` 不指定 commond 时，会进入 `redis-cli` 的交互控制台.

### .图形化桌面客户端

[RedisDesktopManager](https://github.com/uglide/RedisDesktopManager/releases/tag/2022.5)

Redis 默认有 16 个仓库，编号从 0 至 15. 通过配置文件可以设置仓库数量，但是不超过 16，并且不能自定义仓库名称。 如果是基于 redis-cli 连接 Redis 服务，可以通过 select 命令来选择数据库：

```shell
# 选择 0号库
select 0
```
