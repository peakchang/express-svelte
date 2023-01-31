<script>
    import "../../app.css";
    import "../../basic.css";
    import axios from "axios";
</script>

<svelte:head>
    <!-- SUIT 폰트 CSS -->
    <link
        href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
        rel="stylesheet"
    />
</svelte:head>
<div
    class="container flex justify-between items-center suit-font main_container"
>
    <div class="flex">
        <div class="mr-7">
            <a href="/">LOGO</a>
        </div>
        <nav>
            <ul class="flex">
                <li
                    class="ml-4 relative flex flex-wrap justify-center items-center"
                >
                    리스트
                </li>
                <li
                    class="ml-4 relative flex flex-wrap justify-center items-center"
                >
                    <a href="/board/write2">글쓰기</a>
                </li>
                <li
                    class="ml-4 relative flex flex-wrap justify-center items-center"
                >
                    테스트1
                </li>
                <li
                    class="ml-4 relative flex flex-wrap justify-center items-center"
                >
                    테스트2
                </li>
            </ul>
        </nav>
    </div>

    <div class="py-3">
        <div class="relative">
            <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
                <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    /></svg
                >
            </div>
            <input
                type="search"
                id="search"
                class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="검색어를 입력하세요"
                required
            />
        </div>
    </div>

    <div class="flex">
        <ul class="flex items-center">
            <li>로그인</li>

            <li class="ml-4">회원가입</li>
        </ul>
        <button class="w-24 ml-4 bg-teal-500 text-white py-2 rounded-md"
            >판매자가입</button
        >
    </div>
</div>

<slot />
