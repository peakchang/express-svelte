<script>
    import Nested from "./Nested.svelte";
    let src =
        "https://www.sciencetimes.co.kr/wp-content/uploads/2017/09/1_%EC%9C%A0%EB%9F%BD%ED%86%A0%EB%81%BC.jpg";

    let count = 0;
    $: doubled = count * 2;
    function incrementCount() {
        count += 1;
    }

    function resetCount() {
        count = 0
    }
</script>

<p>This is a paragraph.</p>
<Nested />
<img {src} alt="A man dances." />

<button on:click={incrementCount}>
    Clicked {count}
    {count === 1 ? "time" : "times"}
</button>

<button on:click={resetCount}>
reset count!!
</button>

<p>{doubled}</p>
