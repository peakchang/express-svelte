<script>
    import { get } from "svelte/store";

    import axios from "axios";
    let get_free_board = [];

    axios
        .get("http://127.0.0.1:8002/api/testiii", {})
        .then((res) => {
            // console.log(res);
            console.log('sssss');
            get_free_board = res.data.get_free_board;
        })
        .catch((err) => {});
</script>

<div class="main_container suit-font">
    <table class="border-collapse border border-slate-400 w-full text-center">
        <tr>
            <th class="border border-slate-300 w-1/2">제목</th>
            <th class="border border-slate-300 w-1/2">내용</th>
        </tr>

        {#each get_free_board as list}
            <tr>
                <td class="border border-slate-300 py-1">
                    {list.wr_subject}
                </td>
                <td class="border border-slate-300 py-1">
                    {list.wr_content}
                </td>
            </tr>
        {/each}
    </table>
</div>
