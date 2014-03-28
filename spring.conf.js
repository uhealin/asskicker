var owner="smartken";
var repo="asskicker";
var desc=owner+ " <br/> 上帝说：大部分人认为是对的，基本上都是错的  \n[Fork zhaoda on GitHub](https://github.com/zhaoda/spring)";
document.title=desc;
$.extend(spring.config, {
  // my blog title
  title: repo,
  // my blog description
  desc: desc,
  // my github username
  owner: owner,
  // creator's username
  creator:owner,
  // the repository name on github for writting issues
  repo: repo,
  // custom page
  pages: [
    {name: 'About Spring', number: 1},
    {name: 'Quick Start', number: 2}
  ]
})
