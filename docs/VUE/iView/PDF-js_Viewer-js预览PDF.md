# PDF.js + Viewer.js预览PDF文件
1. 需要到官网下载源码：https://mozilla.github.io/pdf.js/
2. 将下载的代码放到vue项目的static目录下

        ├── build/  
        │   ├── pdf.js                             - display layer  
        │   └── pdf.worker.js                      - core layer     
        └── web/    
            ├── cmaps/                             - character maps(required by core)   
            ├── compressed.tracemonkey-pldi-09.pdf - test pdf   
            ├── debugger.js                        - helpful pdf debugging features     
            ├── images/                            - images for the viewer and annotation icons  
            ├── l10n.js                            - localization
            ├── locale/                            - translation files
            ├── viewer.css                         - viewer style sheet
            ├── viewer.html                        - viewer html
            └── viewer.js                          - viewer layer
            
3. 改动viewer.js ，需要将DEFAULT_URL  默认值去掉，改动如下：


```js
// var DEFAULT_URL = 'compressed.tracemonkey-pldi-09.pdf';
    
    var DEFAULT_URL = ''
```

4. 预览


```html
// 页面
<Button type="primary" @click="view">预览</Button>
```
```js
// js 调用函数传入viewer.html路径
view(){
    this.pdfurl = 'http://localhost:8080' + this.$api.viewFile + '?filePath=' + params.row.filePath.replace(/\\/g, '/') + '.pdf'
    window.open('/static/pdf/web/viewer.html?file='+encodeURIComponent(this.pdfurl))
}
```

5. Java后台
        
        这里打开viewer.html页面  ，因为设计到跨域访问pdf的问题，我们将pdf以文件流的方式传入 ，所以需要后台代码处理 ，如下：

```java

@ApiOperation(value="文件预览",notes="文件预览")
@RequestMapping(path="/api/file/viewFile",method = RequestMethod.GET)
@ResponseBody
public void viewFile(@ApiParam(value="filePath")String filePath, HttpServletRequest request, HttpServletResponse response){
	response.setStatus(HttpServletResponse.SC_OK);  
	response.setContentType("application/pdf;charset=UTF-8"); 
	File file = new File(filePath);
    byte[] data = null;
    try {
        FileInputStream input = new FileInputStream(file);
        data = new byte[input.available()];
        input.read(data);
        response.getOutputStream().write(data);
        input.close();
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```