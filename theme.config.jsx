import Image from "next/image";
import Link from "next/link";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";
const Placeholder = () => {
  return <>搜索文档</>;
};
export default {
  //搜索引擎优化选项
  useNextSeoProps() {
    return {
      titleTemplate: "%s - JiangBan's Site",
    };
  },
  head: (
    <>
      <link rel="icon" href="/favicon.ico" type="/favicon.ico" />
    </>
  ),

  logo: <Image src="/favicon.ico" width={40} height={40} alt="logo" />,
  earch: { placeholder: Placeholder },
/*   project: {
    link: "https://github.com/qinjiangban",
  },
  chat: {
    link: "https://twitter.com/qinjiangban",
    icon: (
      <FaSquareXTwitter
        alt="Xlogo"
        style={{ width: "27.5px", height: "27.5px" }}
      />
    ),
  }, */

  //自定义导航栏
  navbar: {
    extraContent: (
      < >
        <Link href="https://github.com/qinjiangban" target="_blank">
          <FaGithub
            alt="Github"
            style={{ width: "27.5px", height: "27.5px" }}
          />
        </Link>
        <Link href="https://twitter.com/qinjiangban" target="_blank">
          <FaSquareXTwitter
            alt="X"
            style={{ width: "27.5px", height: "27.5px" }}
          />
        </Link>
      </>
    ),
  },

  //指向文档存储库的链接字符串
  docsRepositoryBase: "https://github.com/Qiancset/Qiancset-Site/tree/dev",

  //侧边栏
  sidebar: {
    defaultMenuCollapseLevel: 2, //指定默认情况下折叠左侧菜单的文件夹级别。
    autoCollapse: false, //自动折叠非活动文件夹
    toggleButton: true, //侧边栏隐藏按钮
  },

  //目录侧边栏
  toc: {
    title: "页面目录", //标题
    //backToTop: true //添加“滚动到顶部”链接
  },

  //页脚
  footer: {
    text: <div className="版权">Copyright © 2023 Qiancset 千赛特 版权所有</div>,
  },
};
