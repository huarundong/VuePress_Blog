**1. iView组件**

```html
<Form :model="form" :label-width="100">
    <FormItem label="快捷查看类型">
        <Select v-model="form.quickViewType" size="large" style="width:100%">
            <Option value="oftenLawContract">常法合同</Option>
            <Option value="lawyersManual">客户外部律师手册</Option>
            <Option value="specialRates">优惠费率</Option>
            <Option value="specialConsiderations">特殊注意事项</Option>
            <Option value="rivalList">竞争对手名单</Option>
        </Select>
    </FormItem>
    <FormItem label="文件上传">
        <Upload
            :before-upload="handleUpload"
            action="/"
            :accept="uploadFormat">
            <Button type="ghost" icon="ios-cloud-upload-outline">请选择文件</Button>
        </Upload>
        <div v-if="uploadFile !== null">
            {{ uploadFile.name }} 
            <!-- <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button> -->
        </div>
    </FormItem>
    <FormItem>
        <Button type="primary" @click="addFile">新增</Button>
        <Button type="ghost" style="margin-left: 8px" @click="cancel">取消</Button>
    </FormItem>
</Form>
```
**2. JS**

```js
// 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
handleUpload (file) {
    this.uploadFile = file
    this.formData.append('file', file)
    return false
},
// 上传文件数据
addFile(){
    let config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    this.$http.post(// api,
        this.formData,config
    ).then(res => {
        if (res.data.status === 0) {
            this.uploadFile = null
            this.$Message.success('新增成功！')
        }
        if (res.data.status === 1) {
            this.$Message.error('新增失败！')
        }
    })
}
```