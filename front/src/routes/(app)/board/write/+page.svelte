<script>
    import fastapi from "../../../../lib/api";

    let question = {};
    let content = "";

    // function get_question() {
    //     fastapi("get", "/api/testpost", {}, (json) => {
    //         question = json;
    //     });
    // }

    function post_answer(event) {
        event.preventDefault();
        let url = "/api/testpost";
        let params = {
            content: content,
        };
        fastapi("post", url, params, (json) => {
            content = "";
            get_question();
        });
    }

    // get_question();
</script>

<div class="main_container suit-font">
    <form method="post">
        <textarea
            name=""
            id=""
            rows="10"
            class="border border-zinc-700 w-full rounded-lg"
            bind:value={content}
        />
        <div class="text-right">
            <input
                type="submit"
                class="bg-red-400 py-2 px-7 rounded-xl text-white"
                on:click={post_answer}
            />
            글 발행하기
        </div>
    </form>
</div>
