<script>
  import { onMount } from "svelte";
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
        console.log(files[0]);
        const formData = new FormData();
        formData.append("files", files[0]);

        console.log("여기서 콜백은 맞아?!?!?!?!?");
        console.log(quill);

        const range = quill.getSelection();
        quill.insertEmbed(
          range.index,
          "image",
          "http://127.0.0.1:8002/image/testimage.jpg"
        );
      };
    }
  });

  function testFunc(e) {
    console.log("어떻게 할까나~~~ ㅎㅎ");
  }
</script>

<div class="main_container">
  <div class="editor-wrapper">
    <div bind:this={editor} />
  </div>

  <div>
    <button on:click={testFunc}>ㄴㅇㄹㄴㅇㄹㄴㅇㄹ</button>
  </div>
</div>

<style>
  @import "https://cdn.quilljs.com/1.3.6/quill.snow.css";
</style>
