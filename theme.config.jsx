import Image from "next/image";
import Link from "next/link";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";
const Placeholder = () => {
  return "搜索文档";
};

const Feedback = () => {
  return "反馈问题↗";
};
const EditLink = ({ filePath, className }) => {
  return (
    <a
      href={`https://github.com/qinjiangban/qinjiangban-site/tree/main/${filePath}`}
      className={className}
      target='_blank'>
      编辑此页↗
    </a>
  );
};
const GitTimestamp = ({ timestamp }) => {
  return <>更新时间:{timestamp.toLocaleString()}</>;
};

export default {
  //搜索引擎优化选项
  useNextSeoProps() {
    return {
      titleTemplate: "%s - JiangBan Site",
    };
  },
  head: (
    <>
      <link rel='icon' href='/favicon.ico' type='/favicon.ico' />
    </>
  ),

  logo: <Image src='/favicon.ico' width={40} height={40} alt='logo' style={{borderRadius:'50%'}}/>,
  search: { placeholder: Placeholder },
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
    extraContent: < ></>,
  },

  //指向文档存储库的链接字符串
  docsRepositoryBase: "https://github.com/qinjiangban/qinjiangban-site",

  //侧边栏
  sidebar: {
    defaultMenuCollapseLevel: 1, //指定默认情况下折叠左侧菜单的文件夹级别。
    autoCollapse: false, //自动折叠非活动文件夹
    toggleButton: true, //侧边栏隐藏按钮
  },

  //目录侧边栏
  toc: {
    title: "页面目录", //标题
    //backToTop: true //添加“滚动到顶部”链接
  },
  //反馈链接
  feedback: { content: Feedback },
  //编辑链接
  editLink: { component: EditLink },
  //呈现上次更新日期的函数
  gitTimestamp: GitTimestamp,

  //页脚
  footer: {},
};
