<template>
  <div>
    <div class="file-desc">
      <div class="file-preview">
        <img :src="imgSrc" alt="img" v-if="hasImg" class="img-pre">
      </div>
      <div class="file-info">
        <div>
          <span>文件名字：</span>
          <span>{{ fileName }}</span>
        </div>
        <div>
          <span>文件大小：</span>
          <span>{{ fileSize }}</span>
        </div>
        <div>
          <span>文件类型：</span>
          <span>{{ fileType }}</span>
        </div>
      </div>
    </div>
    <a href="javascript:;" class="base-ui-upload">
      <input type="file" @change="change">选择文件
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileSize: 0,
      fileName: '',
      fileType: '',
      imgSrc: '',
      hasImg: false,
    };
  },
  methods: {
    change(e) {
      console.log(e.target.files[0]);
      this.getFileInfo(e.target.files[0]);
      this.checkFile(e.target.files[0]);
    },
    getFileInfo(file) {
      if (file) {
        if (file.size > (1024 * 1024)) {
          this.fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
        } else {
          this.fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
        }

        this.fileName = file.name;
        this.fileType = file.type;
      }
    },

    uploadFile(file) {
      var xhr = new XMLHttpRequest();
      xhr.upload.addEventListener('progress', this.uploadProgress, false);
      xhr.addEventListener("load", uploadComplete, false);
      xhr.addEventListener("error", uploadFailed, false);
      xhr.addEventListener("abort", uploadCanceled, false);
      xhr.open("POST", "", true);//修改成自己的接口
    },

    uploadProgress(evt) {
      if (evt.lengthComputable) {
        var percentComplete = Math.round(evt.loaded * 100 / evt.total);
      }
    },

    uploadComplete(evt) {
      /* 服务器端返回响应时候触发event事件*/
      console.log(evt);
    },

    uploadFailed(evt) {
      // this.$alert()
    },

    uploadCanceled(evt) {

    },

    // 图片处理
    checkFile(file) {
      var vm = this;
      vm.hasImg = false;
      var reader = new FileReader();
      if (!/image\/\w+/.test(file.type)) {
        return false;
      }
      vm.hasImg = true;

      // onload是异步操作
      reader.onload = function(e) {
        console.log(e.target);
        vm.imgSrc = e.target.result;
      }
      reader.readAsDataURL(file);
    },
  },
}
</script>

<style scoped>
/*自定义选择文件按钮样式*/

.base-ui-upload {
  position: relative;
  display: inline-block;
  background: #D0EEFF;
  border: 1px solid #99D3F5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #1E88C7;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}

.base-ui-upload input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}

.base-ui-upload:hover {
  background: #AADFFD;
  border-color: #78C3F3;
  color: #004974;
  text-decoration: none;
}

.file-desc {
  height: 200px;
}

.file-preview {
  width: 70%;
  height: 100%;
  float: left;
}

.file-info {
  width: 30%;
  height: 100%;
  float: left;
  font-size: 12px;
  text-align: left;
}

.img-pre {
  width: 80px;
  height: 100px;
}
</style>

