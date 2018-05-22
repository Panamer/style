代理： 
Api.js：localhost和本地ip都行，
LINK = "http://localhost:8080"


Index.js：
proxyTable: {
'/app': {
target: 'http://10.134.202.14:8080/service.do/',
changeOrigin:true,
secure: false
}
},
在mockjs里是/app/GFSMOBILE009
掉接口的时：
$http('/app/GFSMOBILE009', {"adSiteId": "10"}, this.getImage);



可以简写如下：
Api.js：
LINK = "http://localhost:8080/service.do/"
index.js：
proxyTable: {
'/service.do': {
target: 'http://10.134.202.14:8080/',
changeOrigin:true,
secure: false
}
},
在mockjs里是/GFSMOBILE009
掉接口的时：
$http('GFSMOBILE009', {"adSiteId": "10"}, this.getImage);
也可以代理到老街口地址，不过要改成post请求


