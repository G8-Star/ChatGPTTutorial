import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '96d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'a35'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c8b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fdd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '0ac'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '83a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '90b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '571'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '655'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '709'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'fe9'),
    exact: true
  },
  {
    path: '/blog/tags/feature',
    component: ComponentCreator('/blog/tags/feature', '5ff'),
    exact: true
  },
  {
    path: '/blog/tags/release',
    component: ComponentCreator('/blog/tags/release', '640'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '28c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4ab'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '6ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/红杉资本-生成式人工智能-创造一个全新的世界',
        component: ComponentCreator('/docs/参考文档合集/红杉资本-生成式人工智能-创造一个全新的世界', '1a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/强烈推荐-通向AGI之路-大型语言模型-LLM-技术精要',
        component: ComponentCreator('/docs/参考文档合集/强烈推荐-通向AGI之路-大型语言模型-LLM-技术精要', 'b37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/强烈推荐-GPT-GPT-2-GPT-3-论文精读',
        component: ComponentCreator('/docs/参考文档合集/强烈推荐-GPT-GPT-2-GPT-3-论文精读', '183'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/数据挖掘-机器学习-自然语言处理这三者是什么关系-这几个怎么入门啊',
        component: ComponentCreator('/docs/参考文档合集/数据挖掘-机器学习-自然语言处理这三者是什么关系-这几个怎么入门啊', '2fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/Ben-Lutkevich-自然语言处理-NLP',
        component: ComponentCreator('/docs/参考文档合集/Ben-Lutkevich-自然语言处理-NLP', '403'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/google-chain-of-thought-paper',
        component: ComponentCreator('/docs/参考文档合集/google-chain-of-thought-paper', '515'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/NLP-模型发展简要史-从-bags-of-words-到-Transformer-家族',
        component: ComponentCreator('/docs/参考文档合集/NLP-模型发展简要史-从-bags-of-words-到-Transformer-家族', 'bd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/OpenAI-CEO-Sam-Altman-2022-07-采访',
        component: ComponentCreator('/docs/参考文档合集/OpenAI-CEO-Sam-Altman-2022-07-采访', '934'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/pdf-emergent-abilities-of-large-language-models',
        component: ComponentCreator('/docs/参考文档合集/pdf-emergent-abilities-of-large-language-models', 'fdf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/pdf-sparks-of-artificial-general-intelligence-early-experiments-with-gpt-4',
        component: ComponentCreator('/docs/参考文档合集/pdf-sparks-of-artificial-general-intelligence-early-experiments-with-gpt-4', '631'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/Transformer-论文逐段精度',
        component: ComponentCreator('/docs/参考文档合集/Transformer-论文逐段精度', 'b85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/参考文档合集/Wolfram：ChatGPT在做什么...以及它为什么有效',
        component: ComponentCreator('/docs/参考文档合集/Wolfram：ChatGPT在做什么...以及它为什么有效', '07b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/底层技术理解/2.1.-小白向的详细原理解释',
        component: ComponentCreator('/docs/底层技术理解/2.1.-小白向的详细原理解释', '6fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/底层技术理解/2.2.-自然语言处理',
        component: ComponentCreator('/docs/底层技术理解/2.2.-自然语言处理', 'e4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/底层技术理解/2.3.-从-GPT1-到-GPT4',
        component: ComponentCreator('/docs/底层技术理解/2.3.-从-GPT1-到-GPT4', 'c9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/底层技术理解/2.4.-新范式时代',
        component: ComponentCreator('/docs/底层技术理解/2.4.-新范式时代', 'e0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/底层技术理解/QA-常见问题与回答',
        component: ComponentCreator('/docs/底层技术理解/QA-常见问题与回答', '54e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/基础概念/1.1.-chatgpt',
        component: ComponentCreator('/docs/基础概念/1.1.-chatgpt', 'aa8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/基础概念/1.2.-功能简介及市场反响',
        component: ComponentCreator('/docs/基础概念/1.2.-功能简介及市场反响', '0f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/基础概念/1.3.-开始使用',
        component: ComponentCreator('/docs/基础概念/1.3.-开始使用', '8cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/基础概念/QA-常见问题与回答',
        component: ComponentCreator('/docs/基础概念/QA-常见问题与回答', '2c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/其他/6.1.-名词解释',
        component: ComponentCreator('/docs/其他/6.1.-名词解释', '7b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/其他/6.2.-实用链接',
        component: ComponentCreator('/docs/其他/6.2.-实用链接', '837'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/实操技巧/5.1.-Prompt-gong-cheng/',
        component: ComponentCreator('/docs/实操技巧/5.1.-Prompt-gong-cheng/', '397'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/实操技巧/5.1.-Prompt-gong-cheng/-advanced-skills',
        component: ComponentCreator('/docs/实操技巧/5.1.-Prompt-gong-cheng/-advanced-skills', '84b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/实操技巧/5.1.-Prompt-gong-cheng/-basic-prompt-introduction',
        component: ComponentCreator('/docs/实操技巧/5.1.-Prompt-gong-cheng/-basic-prompt-introduction', 'c04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/实操技巧/5.1.-Prompt-gong-cheng/-chain-of-thought-prompting',
        component: ComponentCreator('/docs/实操技巧/5.1.-Prompt-gong-cheng/-chain-of-thought-prompting', '5ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/实操技巧/5.1.-Prompt-gong-cheng/-prompt-skills',
        component: ComponentCreator('/docs/实操技巧/5.1.-Prompt-gong-cheng/-prompt-skills', 'e6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/实操技巧/5.1.-Prompt-gong-cheng/-zero-few-shot-prompting',
        component: ComponentCreator('/docs/实操技巧/5.1.-Prompt-gong-cheng/-zero-few-shot-prompting', '294'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/实操技巧/5.2.-langchain-gpt-index',
        component: ComponentCreator('/docs/实操技巧/5.2.-langchain-gpt-index', '465'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/实操技巧/5.3.-插件',
        component: ComponentCreator('/docs/实操技巧/5.3.-插件', '8d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/行业观察/3.1.-最新新闻-每日更新',
        component: ComponentCreator('/docs/行业观察/3.1.-最新新闻-每日更新', 'ccc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/行业观察/3.2.-行业概览与发展历程',
        component: ComponentCreator('/docs/行业观察/3.2.-行业概览与发展历程', 'de5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/行业观察/3.3.-chan-ye-lian-ji-xiang-guan-gong-si/',
        component: ComponentCreator('/docs/行业观察/3.3.-chan-ye-lian-ji-xiang-guan-gong-si/', 'e9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/行业观察/3.3.-chan-ye-lian-ji-xiang-guan-gong-si/上游-算力与数据',
        component: ComponentCreator('/docs/行业观察/3.3.-chan-ye-lian-ji-xiang-guan-gong-si/上游-算力与数据', '2ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/行业观察/3.3.-chan-ye-lian-ji-xiang-guan-gong-si/下游-场景落地',
        component: ComponentCreator('/docs/行业观察/3.3.-chan-ye-lian-ji-xiang-guan-gong-si/下游-场景落地', '2e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/行业观察/3.3.-chan-ye-lian-ji-xiang-guan-gong-si/中游-模型',
        component: ComponentCreator('/docs/行业观察/3.3.-chan-ye-lian-ji-xiang-guan-gong-si/中游-模型', 'b1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/行业观察/3.4.-更多视角',
        component: ComponentCreator('/docs/行业观察/3.4.-更多视角', 'b56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/行业观察/QA-常见问题与回答',
        component: ComponentCreator('/docs/行业观察/QA-常见问题与回答', 'f68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/应用场景/4.1.-官方应用/',
        component: ComponentCreator('/docs/应用场景/4.1.-官方应用/', 'fb1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/应用场景/4.1.-官方应用/4.1.1.-官网应用',
        component: ComponentCreator('/docs/应用场景/4.1.-官方应用/4.1.1.-官网应用', '384'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/应用场景/4.2.-民间热门应用',
        component: ComponentCreator('/docs/应用场景/4.2.-民间热门应用', 'c27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/应用场景/4.3-更多场景展望',
        component: ComponentCreator('/docs/应用场景/4.3-更多场景展望', '35e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/应用场景/QA-常见问题与回答',
        component: ComponentCreator('/docs/应用场景/QA-常见问题与回答', '4c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/1-基础概念',
        component: ComponentCreator('/docs/category/1-基础概念', '0aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/2-底层技术理解',
        component: ComponentCreator('/docs/category/2-底层技术理解', '42e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/3-行业观察',
        component: ComponentCreator('/docs/category/3-行业观察', 'c42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/4-应用场景',
        component: ComponentCreator('/docs/category/4-应用场景', '04e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/5-实操技巧',
        component: ComponentCreator('/docs/category/5-实操技巧', 'a14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/6-其他',
        component: ComponentCreator('/docs/category/6-其他', '614'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '488'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
