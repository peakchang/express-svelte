<script>
  import { onMount } from "svelte";
  import testFuncOne from "$lib/test";
  let editor;

  onMount(async () => {
    const { default: Quill } = await import("quill");
    let quill = new Quill(editor, {
      modules: {
        toolbar: {
          container: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image", "code-block"],
          ],
          handlers: {
            image: imageHandler,
          },
        },
      },

      theme: "snow",
      placeholder: "Write your story...",
    });
    // var toolbar = quill.getModule("toolbar");
    // toolbar.addHandler("image", showImageUI);

    function imageHandler() {
      // input file tag 생성
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", ".png,.jpg,.jpeg");
      input.click();

      // input change
      input.onchange = (e) => {
        const files = e.target.files;
        console.log(files);

        // 이미지 미리보기
        console.log(URL.createObjectURL(files[0]));
        document.querySelector(".test_img").src = URL.createObjectURL(files[0]);
        var testImg = URL.createObjectURL(files[0]);
        // URL.revokeObjectURL(files[0]);

        var img = document.createElement("img");
        img.src = URL.createObjectURL(files[0]);

        const testImgRe = getThumbFile(img);
        console.log(testImgRe);

        document.querySelector(".test_img2").src = URL.createObjectURL(testImgRe);
      };
    }
  });

  function getThumbFile(_IMG) {
    //canvas에 이미지 객체를 리사이징해서 담는 과정
    var canvas = document.createElement("canvas");
    var MAX_WIDTH = 400;
    var MAX_HEIGHT = 400;
    var width = _IMG.width;
    var height = _IMG.height;
    canvas.getContext("2d").drawImage(_IMG, 0, 0, 400, 500);

    //canvas의 dataurl를 blob(file)화 하는 과정
    var dataURL = canvas.toDataURL("image/png"); //png => jpg 등으로 변환 가능
    console.log(dataURL);
    var byteString = atob(dataURL.split(",")[1]);

    var mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    //리사이징된 file 객체
    var tmpThumbFile = new Blob([ab], { type: mimeString });
    console.log(tmpThumbFile);

    return tmpThumbFile;
  }

  function testFunc(e) {
    console.log("어떻게 할까나~~~ ㅎㅎ");
  }

  // function testimage(file) {
  //   console.log(file);
  //   let rawImage = new Image();

  //   let canvas = document.createElement("canvas");
  //   let ctx = canvas.getContext("2d");
  //   console.log(rawImage);
  //   rawImage.onload = function () {
  //     console.log('온로드 함수 실행!!');
  //   }
  // }
</script>

<div class="main_container">
  <div class="editor-wrapper">
    <div bind:this={editor} />
  </div>

  <img class="test_img" src="" alt="" />
  <img class="test_img2" src="" alt="" />

  <div>
    <button on:click={testFuncOne}>ㄴㅇㄹㄴㅇㄹㄴㅇㄹ</button>
  </div>
</div>

<style>
  @import "https://cdn.quilljs.com/1.3.6/quill.snow.css";
</style>
