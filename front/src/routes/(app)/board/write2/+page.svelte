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
            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
            // [{ list: "ordered" }, { list: "bullet" }],
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
        const maxWidth = 1200;
        const file = e.target.files[0];
        console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (r) {
          const img = new Image();
          img.src = r.target.result;
          img.onload = function (e) {
            if (img.width >= maxWidth) {
              var share = img.width / maxWidth;
              var setHeight = Math.floor(img.height / share);
              var setWidth = maxWidth;
            } else {
              var setWidth = img.width;
              var setHeight = img.height;
            }

            var canvas = document.createElement("canvas");
            canvas.width = setWidth;
            canvas.height = setHeight;
            canvas.getContext("2d").drawImage(img, 0, 0, setWidth, setHeight);

            var getReImgUrl = canvas.toDataURL("image/webp");

            const range = quill.getSelection();
            quill.insertEmbed(range.index, "image", getReImgUrl);

            const resultImage = dataURItoBlob(getReImgUrl);
            console.log(resultImage);
          };
        };
      };
    }
  });

  function testFunc(e) {
    console.log("어떻게 할까나~~~ ㅎㅎ");
  }

  const dataURItoBlob = (dataURI) => {
    const bytes =
      dataURI.split(",")[0].indexOf("base64") >= 0
        ? atob(dataURI.split(",")[1])
        : unescape(dataURI.split(",")[1]);
    const mime = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const max = bytes.length;
    const ia = new Uint8Array(max);
    for (let i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i);
    return new Blob([ia], { type: mime });
  };
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
