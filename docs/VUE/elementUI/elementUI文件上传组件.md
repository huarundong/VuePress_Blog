# elementUI（Upload组件）上传文件到本地

``` java
// ------ upload组件 ------
<el-upload
class="upload-demo"
ref="upload"
action="aa"
:before-upload="beforeUpload"
:http-request="httpRequest"
:file-list="fileList"
:auto-upload="false">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload()">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip"></div>
</el-upload>

/**
    ------------------ methods ------------------
*/
// 添加文件，使用FormData()模拟表单提交文件
beforeUpload(file,fileList){
  this.formData.append('file', file)
},
// http-request	覆盖默认的上传行为，可以自定义上传的实现
httpRequest(){
    this.formData.append('path', this.$store.state.template.path)
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    // axios请求后台
    this.$http.post(this.$api.uploadFile, this.formData, config)
    .then(res => {
      // 上传后处理逻辑
    })
},
// 提交
submitUpload() {  
  this.$refs.upload.submit()
}

/**
    ------------------- java后台 --------------------
*/

//单文件上传
@ApiOperation(value = "单个文件上传", notes = "单个文件上传")
@RequestMapping(value = "/api/uploadFile", method = RequestMethod.POST)
public ApiResponse<String> uploadFile( @RequestParam MultipartFile file, @RequestParam String path ) {
    ApiResponse<String> api = new ApiResponse<String>();
    if (file.isEmpty()) {
			api.setData("文件为空");
			api.setStatus(2);
	}
	// 获取文件名
	String fileName = file.getOriginalFilename();
	logger.info("上传的文件名为：" + fileName);
	// 获取文件的后缀名
	String suffixName = fileName.substring(fileName.lastIndexOf("."));
	logger.info("上传的后缀名为：" + suffixName);
	// 文件上传后的路径
	String filePath = path;
	// 解决中文问题，liunx下中文路径，图片显示问题
	// fileName = UUID.randomUUID() + suffixName;
	File dest = new File(filePath + fileName);
	// 检测是否存在目录
	if (!dest.getParentFile().exists()) {
		dest.getParentFile().mkdirs();
	}
	try {
		file.transferTo(dest);
	} catch (IOException e) {
		api.setData("上传失败");
		api.setStatus(1);
		e.printStackTrace();
	}
  	return api;
}
```