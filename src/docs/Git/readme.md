# Git

在线练习:

[Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN)

## 基础篇

设置全局账号信息

```sh
# 设置全局的用户名称
git config --global user.name "tangseng"

# 设置全局的邮箱地址
git config --global user.email "tangseng@bjpowernode.com"

# 查看全局配置信息
git config --list
```

创建本地仓库

```sh
git init
```

添加到暂存区(.git 文件夹)

```sh
git add 文件名称
```

查看文件状态

```sh
git status
```

> 红色代表没有被 git 管理的文件，即使是已经管理过，但是修改后，也是红色的状态
>
> 绿色代表添加到暂存区的文件
>
> 已暂存：文件被管理到暂存区，绿色
>
> 未修改：文件还没有被管理到暂存区，红色
>
> 已提交：文件已经交给 git 仓库进行管理了

提交修改

```sh
git commit -m "日志信息"
```

查看分支

```sh
git branch
```

创建分支

```sh
git branch <name>
```

创建一个分支 `bugFix`

```sh
git branch <bugFix>
```

切换分支

```sh
git checkout <name>
```

或

```sh
git switch <name>
```

删除分支

> 创建出的分支如果没有被修改，可以通过普通的方式进行删除
>
> 创建出的分支如果被修改过，那么就必须强制删除了

```sh
 # 普通删除
 git branch -d 分支名称

 # 强制删除
 git branch -D 分支名称
```

::: tip

_在 Git 2.23 版本中，引入了一个名为 `git switch` 的新命令，最终会取代 `git checkout`，因为 `checkout` 作为单个命令有点超载（它承载了很多独立的功能）。_

:::

多个分支是在提交后才会创建出来

![image-20221104141331080](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211041413130.png)

### 分支与合并

将不同分支的修改合并到一起

merge 合并

```sh
git merge <name>
```

把 `bugFix` 的提交合并到 `main` 里

```sh
# 先切换到 bugFix 分支
git switch bugFix
# 将该分支的提交合并到 main
git merge main
```

rebase 合并

优势就是可以创造更线性的提交历史

> 理解为将当前分支的提交复制一份到目标分支的子节点

```sh
git rebase <name>
```

将 `bugFix` 的提交使用 `rebase` 合并到 `main` 分支

```sh
git switch bugFix
git rebase main
git switch main
git rebase bugFix
```

冲突的产生和解决

> 冲突的产生原因就是两个或多个人或两个分支，修改了同一个文件的相同或相邻的几行，那么导致 git 在合并代码时，不知道以谁为主，这就产生了冲突
>
> 解决冲突也非常简单，删除标记 `<<<<<<<<<` `===========` `>>>>>>>>>>>>`，保留代码，提交到本地仓库即可，同时也可以推送到远程仓库

## 高级篇

查看日志信息

```sh
# 查看本地日志信息
git log
# 查看本地日志信息，简介模式
git log --oneline
# 查看历史日志信息
git reflog
```

查看提交的文件内容

```sh
# 查看此次提交的文件列表
git ls-tree commit 唯一标识

# 查看文件列表中的文件内容
git cat-file blob 文件的唯一标识
```

文件内容比较

```sh
# 比较的是本地仓库的工作目录的文件差异
git diff 文件名称

# 其他版本的文件比较，比较的是其他版本的本地仓库的内容和当前的文件的差异
git diff 版本标识 文件名称
```

文件删除

```sh
# 如果文件没有被本地仓库管理，那么可以直接删除
# 如果文件已经被本地仓库管理，那么直接删除，本地仓库中还是包含这个文件的
# 先删除文件，再添加到暂存区，然后提交到本地仓库中
rm -rf 文件名称

git add .

git commit -m "日志信息"
```

### HEAD 引用

HEAD 是一个对当前检出记录的符号引用 —— 也就是指向你正在其基础上进行工作的提交记录。

HEAD 总是指向当前分支上最近一次提交记录。大多数修改提交树的 Git 命令都是从改变 HEAD 的指向开始的。

#### 分离的 HEAD

分离的 HEAD 就是让其指向了某个具体的**提交记录**而不是分支名。在命令执行之前的状态如下所示：

> HEAD -> main -> C1

执行命令

```sh
git switch C1
```

现在变成了

> HEAD -> C1

::: tip

提交记录实际是以哈希值的方式存储, 在实际应用时，不得不用 `git log` 来查查看提交记录的哈希值。

Git 对哈希的处理很智能。你只需要提供能够唯一标识提交记录的前几个字符即可。

`fed2da64c0efc5293610bdd892f82a58e8cbc5d8`

可以仅输入 `fed2` 而不是上面的一长串字符。

:::

### 相对引用

使用 `^` 向上移动 1 个提交记录

`main^` 相当于 “`main` 的父节点”

`main^^` 是 `main` 的第二个父节点

```sh
git switch main^^
```

也可以将 `HEAD` 作为相对引用的参照

```sh
# 分离 HEAD
git switch C3
# 移动到父节点
git switch HEAD^
```

使用 `~<num>` 向上移动多个提交记录，如 `~3`

```sh
git switch HEAD~3
```

#### 强制修改分支位置

使用 `-f` 选项让分支指向另一个提交

```sh
git branch -f main HEAD~3
```

上面的命令会将 main 分支强制指向 HEAD 的第 3 级父提交。

也可以指定具体提交记录的哈希值。

### 撤销变更

reset 撤销

```sh
git reset --hard 版本唯一标识
```

通过把分支记录回退几个提交记录来实现撤销改动。

```sh
git reset HEAD~1
```

把 main 分支移回到 `C1`；在 reset 后， `C2` 所做的变更还在，但是处于未加入暂存区状态。

![image-20221104162309805](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211041623843.png)

revert 撤销

`git reset` 只能在本地分支使用, 远程分支无效

```sh
git revert HEAD
```

在我们要撤销的提交记录后面会多一个新提交, 这是因为新提交记录 `C2'` 引入了**更改** —— 这些更改刚好是用来撤销 `C2` 这个提交的。也就是说 `C2'` 的状态与 `C1` 是相同的。

![image-20221104162709263](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211041627300.png)

文件找回

> 通过撤销的命令，切换到没有删除的提交当中即可，保存好你当前的代码，再去操作

## 其他

### 整理提交记录

cherry-pick

```sh
git cherry-pick <提交号>...
```

将被目标提交记录抓过来追加到当前分支下。

将另外一个分支的 `C2` 和 `C4` 的提交记录抓到当前分支 `main` 下

```sh
git cherry-pick C2 C4
```

### 交互式的 rebase

交互式 rebase 指的是使用带参数 `--interactive` 的 rebase 命令，简写为 `-i`

如果你在命令后增加了这个选项，Git 会打开一个 UI 界面并列出将要被复制到目标分支的备选提交记录，它还会显示每个提交记录的哈希值和提交说明，提交说明有助于你理解这个提交进行了哪些更改。

当 rebase UI 界面打开时，你能做 3 件事:

- 调整提交记录的顺序
- 删除你不想要的提交（通过切换 `pick` 的状态来完成，关闭就意味着你不想要这个提交记录）
- 合并提交。

```sh
git rebase -i C1 C5
```

该命令会把 `C2` 到 `C5` 的提交记录显示出来

### 标签

标签不会随着分支的提交而前进, 可以标记一些大版本的版本更新之类的

```sh
git tag v1 C1
```

将这个标签命名为 `v1`，并且明确地让它指向提交记录 `C1`，如果你不指定提交记录，Git 会用 `HEAD` 所指向的位置。

### 锚点

由于标签在代码库中起着 “锚点” 的作用，Git 还为此专门设计了一个命令用来**描述**离你最近的锚点（也就是标签），它就是 `git describe`！

Git Describe 能帮你在提交历史中移动了多次以后找到方向；当你用 `git bisect`（一个查找产生 Bug 的提交记录的指令）找到某个提交记录时，或者是当你坐在你那刚刚度假回来的同事的电脑前时，可能会用到这个命令。

```sh
git describe <ref>
```

`<ref>` 可以是任何能被 Git 识别成提交记录的引用，如果你没有指定的话，Git 会以你目前所检出的位置（`HEAD`）。

它输出的结果是这样的：

```sh
<tag>_<numCommits>_g<hash>
```

`tag` 表示的是离 `ref` 最近的标签， `numCommits` 是表示这个 `ref` 与 `tag` 相差有多少个提交记录， `hash` 表示的是你所给定的 `ref` 所表示的提交记录哈希值的前几位。

当 `ref` 提交记录上有某个标签时，则只输出标签名称

### 选择父提交记录

操作符 `^` 与 `~` 符一样，后面也可以跟一个数字。

但是该操作符后面的数字与 `~` 后面的不同，并不是用来指定向上返回几代，而是指定合并提交记录的某个父提交。

Git 默认选择合并提交的 “第一个” 父提交，在操作符 `^` 后跟一个数字可以改变这一默认行为。

如果不加数字修改符直接检出 `main^`，会回到第一个父提交记录。

```sh
git switch main^
```

回到另外一个父分支

```sh
git switch main^2
```

![image-20221104175600633](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211041756674.png)

这些操作符还支持链式操作

```sh
git switch HEAD~^2~2
```

![image-20221104175814614](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211041758651.png)

![image-20221104175828009](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211041758045.png)

## 远程仓库

### 注册远程账号

- Gitee `[推荐]`
  - 服务器在国内，中文
  - <https://gitee.com>
- Github
  - 服务器在国外，网络不稳定， 英文
  - <https://github.com>

### 关联远程仓库

将本地仓库与远程仓库建立关联关系

```sh
# 建立远程仓库的关联关系，可以建立多个
git remote add 关联名称 仓库地址

# 查询当前本地仓库关联的远程仓库关系
git remote -v
```

### 删除关联关系

```sh
git remote remove 关联名称
```

### 克隆

`git clone` 命令在真实的环境下的作用是在**本地**创建一个远程仓库的拷贝（比如从 github.com）。

```sh
git clone
```

### 远程分支

克隆完成后本地仓库会多一个名为 `o/main` 的分支，这种类型的分支就叫**远程**分支。由于远程分支的特性导致其拥有一些特殊属性。

远程分支反映了远程仓库 (在你上次和它通信时) 的**状态**。这会有助于你理解本地的工作与公共工作的差别 —— 这是你与别人分享工作成果前至关重要的一步.

远程分支有一个特别的属性，在你检出时自动进入分离 HEAD 状态。Git 这么做是出于不能直接在这些分支上进行操作的原因，你必须在别的地方完成你的工作，（更新了远程分支之后）再用远程分享你的工作成果。

#### 为什么有 `o/`？

远程分支有一个命名规范 —— 它们的格式是:

```sh
<remote name>/<branch name>
```

因此，如果你看到一个名为 `o/main` 的分支，那么这个分支就叫 `main`，远程仓库的名称就是 `o`。

大多数的开发人员会将它们主要的远程仓库命名为 `origin`，并不是 `o`。这是因为当你用 `git clone` 某个仓库时，Git 已经帮你把远程仓库的名称设置为 `origin` 了

### 删除远程分支

除了远程仓库的默认分支外，其余分支都可以被删除掉

```sh
git push -d 远程分支名称
```

### 从远程仓库获取数据

```sh
git fetch
```

当我们从远程仓库获取数据时，远程分支也会更新以反映最新的远程仓库。

`git fetch` 完成了仅有的但是很重要的两步:

- 从远程仓库下载本地仓库中缺失的提交记录
- 更新远程分支指针 (如 `o/main`)

`git fetch` 并不会改变你本地仓库的状态。它不会更新你的 `main` 分支，也不会修改你磁盘上的文件。

理解这一点很重要，因为许多开发人员误以为执行了 `git fetch` 以后，他们本地仓库就与远程仓库同步了。它可能已经将进行这一操作所需的所有数据都下载了下来，但是**并没有**修改你本地的文件

### 合并数据

可以像合并本地分支那样来合并远程分支。

```sh
git cherry-pick o/main
git rebase o/main
git merge o/main
```

由于先抓取更新再合并到本地分支这个流程很常用，因此 Git 提供了一个专门的命令来完成这两个操作。

使用 `git pull`

拉取本地已有的分支代码，更新代码

拉取本地没有的代码，更新分支

```sh
# 将当前远程分支代码更新到本地所处分支
git pull 关联名称 远程分支名称

# 将远程仓库的分支更新下来
git pull 关联名称 远程分支名称:本地分支名称

# 如果强制的要求远程分支和本地分支进行合并需要指定参数--allow-unrelated-histories
git pull 关联名称 远程分支名称 --allow-unrelated-histories
```

### 推送本地代码到远程仓库中

第一次推送代码时，会输入用户名和密码

如果密码输入错误，清理 windows 的 git 凭证，重新推送，输入用户名和密码

```sh
git push 关联名称 本地仓库分支名称
```

### 历史偏离

假设你周一克隆了一个仓库，然后开始研发某个新功能。到周五时，你新功能开发测试完毕，可以发布了。但是 —— 天啊！你的同事这周写了一堆代码，还改了许多你的功能中使用的 API，这些变动会导致你新开发的功能变得不可用。但是他们已经将那些提交推送到远程仓库了，因此你的工作就变成了基于项目**旧版**的代码，与远程仓库最新的代码不匹配了。

因为这情况（历史偏离）有许多的不确定性，Git 是不会允许你 `push` 变更的。实际上它会强制你先合并远程最新的代码，然后才能分享你的工作。

**解决办法:**

1. 用 `rebase`, 用 `git fetch` 更新本地仓库中的远程分支，然后用 rebase 将我们的工作移动到最新的提交记录下，最后再用 `git push` 推送到远程仓库。

   ```sh
   git fetch; git rebase o/main; git push;
   ```

2. 用 `merge`, 尽管 `git merge` 不会移动你的工作（它会创建新的合并提交），但是它会告诉 Git 你已经合并了远程仓库的所有变更。这是因为远程分支现在是你本地分支的祖先，也就是说你的提交已经包含了远程分支的所有变化。

   用 `git fetch` 更新了本地仓库中的远程分支，然后**合并**了新变更到我们的本地分支（为了包含远程仓库的变更），最后我们用 `git push` 把工作推送到远程仓库

   ```sh
   git fetch; git merge o/main; git push;
   ```

3. 用 `git pull --rebase`, `git pull --rebase` 是 fetch 和 rebase 的简写！

   ```sh
   git pull --rebase; git push;
   ```

## 远程服务器拒绝

如果你是在一个大的合作团队中工作，很可能是 main 被锁定了，需要一些 Pull Request 流程来合并修改。如果你直接提交 (commit) 到本地 main, 然后试图推送 (push) 修改，你将会收到这样类似的信息:

```shell
! [远程服务器拒绝] main -> main (TF402455: 不允许推送(push)这个分支; 你必须使用pull request来更新这个分支.)
```

### 为什么会被拒绝？

远程服务器拒绝直接推送 (push) 提交到 main, 因为策略配置要求 pull requests 来提交更新.

### 解决办法

新建一个分支 feature, 推送到远程服务器。然后 reset 你的 main 分支和远程服务器保持一致，否则下次你 pull 并且他人的提交和你冲突的时候就会有问题.

## 公司多人合作项目 Git 基本操作流程

### 前言

一般我们进到公司，公司的代码库已经是创建好了的，我们只需要拉取代码到本地即可。所以就不讲解仓库初始化的操作了。

大部分公司现在都使用的是 **GitLab** 搭建的私服来作为公司的 Git 服务器，**GitLab，GitHub，Gitee** 本质使用的都是 **Git** 工具，所以操作方法也是大同小异，下面具体给大家讲解一下刚进公司的 **Git** 使用方法。

### Git 工具下载

一般公司电脑都会安装好 Git，如果没有安装，或者自己电脑没装可以使用下面的链接下载安装，推荐使用淘宝的 CDN 镜像，下载速度更快！

> 1 官网下载：<https://git-scm.com/download/win> 2. 国内淘宝镜像（速度更快）：<https://registry.npmmirror.com/binary.html?path=git-for-windows/>

淘宝镜像这个选择好版本之后点击进入文件夹，然后选择对应的 64 位.exe 就行了

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/7761e215eb134bb98c3b550d935caefd.png)
![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/a9f81021f7c3451ca4c618552951956b.png)

安装过程过于简单，省略啦。。。（双击安装程序，下一步下一步就好啦）

安装记得勾选 git bash 的选项，就可以在桌面或者目录直接右键打开 git 命令行了。

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/22ed097279124e6391852bc7604a3e4c.png)

已安装的可以输入一下命令查看 Git 版本：

```bash
git version
```

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/761e2054c4314eb09bef6517c56e369a.png)

看到上面的信息就说明 Git 安装成功了，可以继续下面的操作了

### 配置 Git 用户信息

有的童鞋看到 Git 已安装好就直接开始进行 clone - 修改 - add - commit 一系列操作了（就比如在下），这是不对的，安装好的 Git 虽然可以直接使用，但是很重要的用户信息没有配置，就会导致提交代码的时候显示别人的名字。正确的步骤是要先检查一边当前配置的用户信息。

使用下面的命令来查看当前的用户名和邮箱

```bash
git config --global --list # global查看全局配置
```

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/234e459986bd4704b0d9e0de3f72191c.png)

如果发现上面的邮箱和用户名不是自己的，可以使用下面的命令修改成自己的：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
# 或者直接在VIM编辑器直接编辑：
git config --global -e
```

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/537183b379b04f4fae62ef992e8eac2d.png)

配置完成后就可以开开心心的拉代码了。

### 重点

#### 一、拉取远程代码（Gitee）

开始接触项目后，公式领导或者同事就会将你拉人项目组，这个时候会给你 Git 地址，或者让你注册 GItHub、GitLab、Gitee 的账号，注册过程就不解释了，下面直接进入到拉取项目的环节。

下面以 Gitee 为例：
注册登录成功之后，点击屏幕中间的 **我的** 查看自己的仓库，公司项目组里面的项目可能在里面。

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/cd75c5d218124ca1842fd5b201b9f572.png)

下面假设 我们公司的项目是这个[汤臣亿品（springboot+vue 智慧社区管理系统）](https://gitee.com/iuoly/tomson-yipin)

首先点击仓库名进入

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/5353de789680496dbdf73615912ce92e.png)

如果是单人项目的话，可以直接点击 **克隆 / 下载** 按钮获取仓库的地址，然后克隆到本地，但是公司多人开发可以不用这样，我们先创建一个自己的分支（命名按照公司的要求），具体步骤如下：

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/b5a72662438c427caccba0f9da06b140.png)
![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/448c29a7bd7b452aa985f48ec7481c29.png)

回到首页看到分支里面有自己的分支就可以开始下面的操作啦。

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/d40cfed484034ce0b3d84b59730b3b54.png)

复制仓库地址

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/ebae8da63d9c43c8aeacaf10a11ecffc.png)

可以在 Git 命令行直接输入下面的代码来克隆项目，显得很专业

```bash
git clone https://gitee.com/iuoly/tomson-yipin.git
```

然后将克隆好的项目在 IDEA 开发工具中打开。这边推荐一个更便捷的方法：

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/48f7241b78eb46c7a637ed3227a5d96e.png)
![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/91f64fa3414348ce91eda3992a63cc7a.png)

点击 clone 按钮，项目就会自动克隆下来并打开。（超级方便）

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/ff8e98f1862d4e3bb37afeeef7dd0dbe.png)

这个时候，大家是不是就要直接开始写代码了，不对，还有一件事要做，那就是把本地的分支也切换到你创建的远程分支，不建议直接在 master 分支上面直接进行改动。（我又踩坑)

具体步骤是：

点击下方的工具栏中的 master

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/583d506a346441328e5d2f2e0b60e22c.png)

选择自己创建的远程分支，点击 checkout ，切换到自己的分支。

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/641f88e7aafd4c43a77fbcf380fe5345.png)

返回就可以查看分支变化啦。

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/f58c4aa21f4c41ab9f932e142bc64d79.png)

#### 二、本地代码提交

在自己的分支上开发完成后，需要提交代码的时候，可以直接使用命令行来操作，但是也更推荐直接使用 IDEA 上面的 Git 工具。

提交前，先 pull 更新一下代码，防止有其他同事修改的代码没有同步到本地

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/de32a89f02b34fce88dda27e389f88da.png)

然后点击下面的分支，选择远程的 master 分支， 将远程 master 分支上面的改动合并到自己的分支中，这个时候如果发生了冲突需要自己手动合并。

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/a275628f2b9e4ea3aa5de0355d9ab544.png)

没有冲突的话，就可以直接提交自己的代码啦！

点击上方工具栏中的 √

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/36b7d865a3e4446891029b745f710624.png)

上面查看是否是自己改动的文件，确认无误在下面写上提交的备注信息，一般用于解释自己这次提交的改动。

然后点击 commitAndPush 就可以自动提交并推送到远程

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/bcd810c7b8a2484c813aba276f1758d7.png)

推送前查看远程分支名是否正确。

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/dbc52128a68f4408b879e945e713b5e5.png)

点击 PUSH 之后， 就可以在 Gitee 上面查看到提交的信息了。

但是这个时候我们知识把自己的代码提交到自己的远程分支上面了，怎么和大家的代码合到一起呢？

继续往下：

#### 三、Pull Request

我们在自己的分支上面进行了开发，这个时候就要用到 Pull Request 来创建合并请求，将我们的代码合并到主分支上面去，如何操作嗯？
在 Gitee 上面进入仓库， 点击中间的 + Pull Request

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/df5238c19ed74370bbbf0a965f8fddc4.png)

选择源分支为我们自己的分支，目标分支位 master 主分支。

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/9e8635dabc034b8abc2f863aaf55f5cc.png)

因为我是这个项目的管理员，所以这边显示可自动合并，实际工作中我们是没有合并的权限的，需要在右边指定审查人员，并且在左边框内填写提交信息让其他人知道目的。然后将这个合并请求提交给有权限的人（一般是项目经理）

左边可以配置其他选项，可自行了解。

底部可以继续查看提交记录和文件改动。

确保万无一失之后就可以点击创建 Pull Request 按钮来创建合并请求。

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/17e9816c252a49c2b82c19cea94e23ac.png)

管理员看到之后就可以帮你合并代码啦。

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051710220.png)
![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051710135.png)
![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/65e6581dbc7c47a1b054db9e79eb0973.png)

这个时候查看主分支，也会有你修改的记录，你的本次开发代码就成功加入到组织里啦。

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051710366.png)

后面要继续进行修改，步骤从头再来一遍就好了。但是要记得拉取代码之后将主分支代码合并到本地自己分支。

#### GitHub

Github 的操作和 Git 大同小异，就不具体讲解了，贴一下具体操作的位置图

在这里插入图片描述

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/f1ea545847d6408b93290a635a9e1ad0.png)

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/86ba3727dcaf40f39801ede2538a0704.png)

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/262c881969934a638b954449ea12645d.png)

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/ca1df48b8e8443e9b46871345d350ca5.png)

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/44a8ee18fd0e4dcfbbea917d2cf5a05e.png)

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/a730a4e3f625483fb3a52a96079881ab.png)

#### GitLab

对于一些保密要求较高的企业来说，将代码存放在 Gitee 、获取 Github 等开源网站上不是一个很好的选择，所以就有了 GitLab 这个可以自己搭建的开源代码仓库私服，一般用于企业内部代码版本控制，操作流程和 Gitee/Github 也差不多：

仓库位置：

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/904c252f2d5d4e20b0c7cca9000192d5.png)

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/21c764534d5742909aea82c358d34e1d.png)

创建分支

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/10075dabd75046caae53b37daa9d2eb9.png)

合并请求位置，或者在提交改动后会有弹窗按钮

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/aeea29f6c91e45cfbf3e07ae85015c80.png)

选择分支

![在这里插入图片描述](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/403ce7d8db204602a91f36f3e8b08732.png)
