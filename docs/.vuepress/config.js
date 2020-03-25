module.exports = {
  title: 'Start FE',
  dest: 'dist',
  base: '/',
  description: 'FrontEnd 시작하기',
  cache: false,
  port: 8087,
  themeConfig: {
    repo: 'https://github.com/advanced-webapps-class/start-fe',
    docsDir: 'docs',
    editLinkText: '✏️ Edit',
    editLinks: true,
    sidebar: [
      {
        title: '준비하기',
        collapsable: true,
        children: [
          '/ready/',
          '/ready/chrome',
          '/ready/vscode',
          '/ready/git',
          '/ready/nodejs',
          '/ready/html',
        ],
      },
      {
        title: 'JS 기본',
        collapsable: true,
        children: [
          '/js/',
          '/js/variable',
          '/js/comment',
          '/js/datatype',
          '/js/operator',
          '/js/object',
          '/js/array',
          '/js/array-method',
          '/js/type-conversion',
          '/js/global',
          '/js/statement',
          '/js/scope',
          '/js/function',
          '/js/literal',
          '/js/regexp',
          '/js/feature',
          '/js/closure',
          '/js/this',
          '/js/class',
        ],
      },
      {
        title: 'DOM',
        collapsable: true,
        children: [
          '/dom/',
          '/dom/dom',
          '/dom/bom',
          '/dom/selector',
          '/dom/create',
          '/dom/insert',
          '/dom/remove',
          '/dom/event',
        ],
      },
      {
        title: 'ECMA스크립트',
        collapsable: true,
        children: [
          '/es/',
          '/es/let-const',
          '/es/template',
          '/es/default-parameters',
          '/es/arrow-function',
          '/es/spread-operator',
          '/es/rest-parameter',
          '/es/destructuring-assignment',
          '/es/enhanced-object-literal',
          '/es/promise',
          '/es/generator',
          '/es/async',
          // '/es/array',
          // '/es/object'
        ],
      },
      {
        title: 'HTTP',
        collapsable: true,
        children: [
          '/http/',
          '/http/url',
          '/http/server',
          '/http/method',
          '/http/message',
          // '/http/cookie',
          '/http/caching',
          '/http/status-code',
          '/http/curl',
        ],
      },
      {
        title: 'Ajax',
        collapsable: true,
        children: [
          '/ajax/',
          '/ajax/xml-http-request',
          '/ajax/fetch',
          '/ajax/json',
          '/ajax/jsonp',
          '/ajax/axios',
          '/ajax/cors',
        ],
      },
      {
        title: 'Node.js',
        collapsable: true,
        children: [
          '/nodejs/',
          '/nodejs/npm',
          '/nodejs/module',
          '/nodejs/tool',
          '/nodejs/gulp',
          '/nodejs/babel',
          '/nodejs/webpack',
        ],
      },
      {
        title: '보안',
        collapsable: true,
        children: ['/security/', '/security/xss', '/security/csrf'],
      },
      {
        title: 'HTML,CSS',
        collapsable: true,
        children: [
          '/html/',
          '/html/html5',
          '/html/animation',
          '/html/media-query',
        ],
      },
      {
        title: '라이브러리',
        collapsable: true,
        children: [
          '/library/',
          '/library/jquery',
          '/library/react',
          '/library/sass',
          '/library/jq',
        ],
      },
      {
        title: '크롬 개발자도구',
        collapsable: true,
        children: ['/chrome/', '/chrome/extension', '/chrome/console'],
      },
      {
        title: '성능 최적화',
        collapsable: true,
        children: ['/perf/', '/perf/code', '/perf/web'],
      },
      // {
      //   title: 'GIT',
      //   collapsable: true,
      //   children: ['/git/', '/git/basic'],
      // },
    ],
    nav: [
      {
        text: '의견',
        link: 'https://github.com/advanced-webapps-class/start-fe/issues',
      },
    ],
  },
};
