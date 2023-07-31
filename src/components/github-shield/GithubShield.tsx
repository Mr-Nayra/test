import React from 'react';

const GithubShield = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="135" height="30">
      <style>
        {`
          a:hover #llink{fill:url(#b);stroke:#ccc}
          a:hover #rlink{fill:#4183c4}
        `}
      </style>
      <linearGradient id="a" x2="0" y2="100%">
        <stop offset="0" stopColor="#fcfcfc" stopOpacity="0" />
        <stop offset="1" stopOpacity=".1" />
      </linearGradient>
      <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stopColor="#ccc" stopOpacity=".1" />
        <stop offset="1" stopOpacity=".1" />
      </linearGradient>
      <g stroke="#d5d5d5">
        <rect stroke="none" fill="#fcfcfc" x="0.75" y="0.75" width="81" height="28.5" rx="2" />
        <rect x="90.75" y="0.75" width="43.5" height="28.5" rx="2" fill="#fafafa" />
        <rect x="90" y="11.25" width="0.75" height="7.5" stroke="#fafafa" />
        <path d="M90.75 9.75 l-4.5 4.5v0.75 l4.5 4.5" stroke="d5d5d5" fill="#fafafa" />
      </g>
      <image x="7.5" y="4.5" width="21" height="21" xlinkHref="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTgxNzE3IiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViPC90aXRsZT48cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9zdmc+" />
      <g
        aria-hidden="false"
        fill="#333"
        textAnchor="middle"
        fontFamily="Helvetica Neue,Helvetica,Arial,sans-serif"
        textRendering="geometricPrecision"
        fontWeight="700"
        fontSize="165px"
        line-height="21px"
      >
        <a target="_blank" href="https://github.com/uptrain-ai/uptrain">
          <text aria-hidden="true" x="532.5" y="225" fill="#fff" transform="scale(.1)" textLength="405">
            Stars
          </text>
          <text x="532.5" y="210" transform="scale(.1)" textLength="405">
            Stars
          </text>
          <rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".75" y=".75" width="81" height="28.5" rx="2" />
        </a>
        <a target="_blank" href="https://github.com/uptrain-ai/uptrain/stargazers">
          <rect width="64.5" x="90" height="30" fill="rgba(0,0,0,0)" />
          <text aria-hidden="true" x="1117.5" y="225" fill="#fff" transform="scale(.1)" textLength="315">
            1.6k
          </text>
          <text id="rlink" x="1117.5" y="210" transform="scale(.1)" textLength="315">
            1.6k
          </text>
        </a>
      </g>
    </svg>
  );
};

export default GithubShield;
