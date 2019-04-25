import react from "react";
import Router from "next/router";

class Index extends react.Component {
  render() {
    return (
      <div>
        <div>
          Click{" "}
          <span className="link" onClick={() => Router.push("/notification")}>
            here
          </span>{" "}
          to notification page
          <header className="header">
            <div className="btn-icon-group">
              <button type="button" className="btn-icon btn-filter" />
              <button type="button" className="btn-icon btn-noti" />
            </div>
          </header>
          <main className="main">
            <article className="clearfix">
              <h1 className="page-heading">요청내역</h1>
              <div className="wrapper-dropdown">
                <span className="btn-dropdown">
                  전체 요청서
                  <i className="icon-down" />
                </span>
                <ul className="dropdown">
                  <li>전체 요청서</li>
                  <li>미응답 요청서</li>
                  <li>응답 요청서</li>
                  <li>서비스 요청서</li>
                </ul>
              </div>
              <p className="data-heading">9월 19일 오늘</p>
              <ul className="list">
                <li className="item">
                  <h3>PC / 노트북</h3>
                  <time>7:00 PM</time>
                  <p className="item-brief waiting">
                    견적서를 기다리고 있습니다.
                  </p>
                </li>
                <li className="item">
                  <h3>iPhone</h3>
                  <time>7:00 PM</time>
                  <p className="item-brief">2건의 견적서가 도착했습니다.</p>
                  <button className="btn btn-basic">수리요청</button>
                </li>
              </ul>
              <p className="data-heading">8월 14일 금요일</p>
              <ul className="list">
                <li className="item">
                  <h3>PC / 노트북</h3>
                  <time>7:00 PM</time>
                  <p className="item-brief">ooo에게 수리완료했습니다.</p>
                  <button className="btn btn-active">결제하기</button>
                </li>
                <li className="item">
                  <h3>iPhone</h3>
                  <time>7:00 PM</time>
                  <p className="item-brief">ooo에게 수리완료했습니다.</p>
                  <button className="btn btn-basic">서비스평 작성</button>
                </li>
              </ul>
            </article>
            <article className="clearfix">
              <h2 className="year-heading">2017년</h2>
              <p className="data-heading">4월 14일 목요일</p>
              <ul className="list">
                <li className="item">
                  <h3>iPhone</h3>
                  <time>7:00 PM</time>
                  <p className="item-brief">ooo에게 수리완료했습니다.</p>
                  <button className="btn btn-basic">서비스평 작성</button>
                </li>
                <li className="item">
                  <h3>iPhone</h3>
                  <time>7:00 PM</time>
                  <p className="item-brief">ooo에게 수리완료했습니다.</p>
                  <button className="btn btn-basic">서비스평 작성</button>
                </li>
              </ul>
            </article>
          </main>
        </div>
        <style jsx>{`
          .link {
            color: blue;
          }

          /* 스타일 초기화*/
          html,
          body,
          div,
          span,
          applet,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 1em;
            font: inherit;
            vertical-align: baseline;
          }

          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section,
          main {
            display: block;
          }

          ul {
            list-style-type: none;
          }

          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          .clearfix::after {
            content: "";
            display: block;
            clear: both;
          }

          /* 숨김 콘텐츠 */
          .readable-hidden,
          legend {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            margin: -1px;
            clip: rect(0, 0, 0, 0);
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          header {
            padding: 1rem;
            background: #fff;
            color: #101010;
          }

          .btn-icon-group {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            position: relative;
          }

          .btn-icon {
            cursor: pointer;
            text-indent: 30px;
            white-space: nowrap;
            width: 30px;
            height: 30px;
            border: 0;
            margin-right: 1rem;
          }

          .btn-icon:last-child {
            margin-right: 0;
          }

          .btn-filter {
            background: transparent
              url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21tb24g%0D%0ALyBpY29uLWZpbHRlci1ibGFjazwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNo%0D%0ALjwvZGVzYz4KICAgIDxnIGlkPSJDb21tb24tLy1pY29uLWZpbHRlci1ibGFjayIgc3Ryb2tlPSJu%0D%0Ab25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAg%0D%0AICAgICAgPHBhdGggZD0iTTE0LDIwLjUgQzEyLjg5NTUsMjAuNSAxMiwxOS42MDQ1IDEyLDE4LjUg%0D%0AQzEyLDE3LjM5NTUgMTIuODk1NSwxNi41IDE0LDE2LjUgQzE1LjEwNDUsMTYuNSAxNiwxNy4zOTU1%0D%0AIDE2LDE4LjUgQzE2LDE5LjYwNDUgMTUuMTA0NSwyMC41IDE0LDIwLjUgWiIgaWQ9IkZpbGwtNSIg%0D%0AZmlsbD0iIzExMTExMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuMDAwMDAwLCAxOC41MDAwMDAp%0D%0AIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTE0LjAwMDAwMCwgLTE4LjUwMDAwMCkgIj48%0D%0AL3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTcsMTQgQzUuODk1NSwxNCA1LDEzLjEwNDUgNSwxMiBD%0D%0ANSwxMC44OTU1IDUuODk1NSwxMCA3LDEwIEM4LjEwNDUsMTAgOSwxMC44OTU1IDksMTIgQzksMTMu%0D%0AMTA0NSA4LjEwNDUsMTQgNywxNCBaIiBpZD0iRmlsbC03IiBmaWxsPSIjMTExMTExIj48L3BhdGg+%0D%0ACiAgICAgICAgPHBhdGggZD0iTTE4LDcuNSBDMTYuODk1NSw3LjUgMTYsNi42MDQ1IDE2LDUuNSBD%0D%0AMTYsNC4zOTU1IDE2Ljg5NTUsMy41IDE4LDMuNSBDMTkuMTA0NSwzLjUgMjAsNC4zOTU1IDIwLDUu%0D%0ANSBDMjAsNi42MDQ1IDE5LjEwNDUsNy41IDE4LDcuNSBaIiBpZD0iRmlsbC05IiBmaWxsPSIjMTEx%0D%0AMTExIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTIsNS41IEwyMiw1LjUiIGlkPSJQYXRoLTIw%0D%0AIiBzdHJva2U9IiMxMTExMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPgogICAgICAg%0D%0AIDxwYXRoIGQ9Ik0yLDE4LjUgTDIyLDE4LjUiIGlkPSJQYXRoLTIwLUNvcHktMiIgc3Ryb2tlPSIj%0D%0AMTExMTExIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJN%0D%0AMiwxMiBMMjIsMTIiIGlkPSJQYXRoLTIwLUNvcHkiIHN0cm9rZT0iIzExMTExMSIgc3Ryb2tlLWxp%0D%0AbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==")
              no-repeat;
          }

          .btn-noti {
            background: transparent
              url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21tb24g%0D%0ALyBpY29uLW5vdGktYmxhY2s8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48%0D%0AL2Rlc2M+CiAgICA8ZyBpZD0iTGlicmFyeSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEi%0D%0AIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4K%0D%0AICAgICAgICA8ZyBpZD0iQ29tbW9uLS8taWNvbi1ub3RpLW5vciIgc3Ryb2tlPSIjMTExMTExIj4K%0D%0AICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjAwMDAwMCwg%0D%0AMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LjUsMjIgQzkuMTU2ODU0MjUs%0D%0AMjIgMTAuNSwyMC42NTY4NTQyIDEwLjUsMTkgQzEwLjUsMTcuMzQzMTQ1OCA5LjE1Njg1NDI1LDE2%0D%0AIDcuNSwxNiIgaWQ9Ik92YWwtNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4wMDAwMDAsIDE5LjAw%0D%0AMDAwMCkgcm90YXRlKC0yNzAuMDAwMDAwKSB0cmFuc2xhdGUoLTkuMDAwMDAwLCAtMTkuMDAwMDAw%0D%0AKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LDAgTDksMCBDMTIuODY1OTkz%0D%0AMiwtNy4xMDE3MTQzOWUtMTYgMTYsMy4xMzQwMDY3NSAxNiw3IEwxNiwxMyBMMTcuOTA0NDk3Miwx%0D%0ANi4yNDcwMzUyIEMxOC4wNDQyMDU4LDE2LjQ4NTIyODYgMTcuOTY0MzY4MSwxNi43OTE1Nzg4IDE3%0D%0ALjcyNjE3NDYsMTYuOTMxMjg3NCBDMTcuNjQ5NDY0MywxNi45NzYyODA2IDE3LjU2MjE0MTcsMTcg%0D%0AMTcuNDczMjA5OCwxNyBMMC41MjY3MTUzNDcsMTcgQzAuMjUwNTcyOTcyLDE3IDAuMDI2NzE1MzQ3%0D%0AMSwxNi43NzYxNDI0IDAuMDI2NzE1MzQ3MSwxNi41IEMwLjAyNjcxNTM0NzEsMTYuNDExMDY1MyAw%0D%0ALjA1MDQzNjI2MTgsMTYuMzIzNzM5OSAwLjA5NTQzMjI5OTksMTYuMjQ3MDI3OCBMMiwxMyBMMiw3%0D%0AIEMyLDMuMTM0MDA2NzUgNS4xMzQwMDY3NSw3LjEwMTcxNDM5ZS0xNiA5LDAgWiIgaWQ9Ikljb25C%0D%0AdXR0b24uTm90aV9CbGFjayI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgog%0D%0AICAgPC9nPgo8L3N2Zz4=")
              no-repeat;
            position: relative;
          }

          .btn-arrow-left {
            background: transparent
              url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21tb24g%0D%0ALyBpY29uLWFycm93LWxlZnQtMnB4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0%0D%0AY2guPC9kZXNjPgogICAgPGcgaWQ9IkNvbW1vbi0vLWljb24tYXJyb3ctbGVmdC0ycHgiIHN0cm9r%0D%0AZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQi%0D%0AIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgPHBvbHlsaW5lIGlkPSJJY29uQnV0dG9u%0D%0ALkFycm93X0xlZnRfQmxhY2siIHN0cm9rZT0iIzExMTExMSIgc3Ryb2tlLXdpZHRoPSIyIiBwb2lu%0D%0AdHM9IjEyIDIgMiAxMiAxMiAyMiI+PC9wb2x5bGluZT4KICAgIDwvZz4KPC9zdmc+")
              no-repeat;
          }

          .btn-noti::after {
            display: block;
            position: absolute;
            content: "9+";
            background: #ef0d36;
            color: white;
            border-radius: 16px;
            bottom: calc(100% - 10px);
            left: calc(100% - 15px);
            font-size: 12px;
            padding: 2px 2px;
            height: 20px;
            width: 30px;
            text-indent: 0;
          }

          .main {
            padding: 0 20px;
          }

          article {
            position: relative;
          }

          .page-heading {
            font-size: 26px;
            font-weight: 700;
          }

          .data-heading {
            color: #727272;
            font-size: 16px;
            margin: 10px 0;
          }

          .year-heading {
            font-size: 20px;
            font-weight: 700;
          }

          .list {
            margin-bottom: 40px;
            z-index: 1;
          }

          .list .item {
            border-top: 1px solid #ddd;
            padding: 8px 0;
            position: relative;
          }

          .item .waiting {
            color: #ef0d36;
          }

          .item h3 {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 2px;
          }

          .item time {
            color: #979797;
          }

          .item .item-brief {
            margin: 2px 0;
          }

          /* button */
          .btn {
            padding: 8px 14px;
            font-size: 16px;
            font-weight: 700;
            border-radius: 5px;
            position: absolute;
            top: 20px;
            right: 0;
            font-stretch: condensed;
            cursor: pointer;
          }

          .btn-basic {
            border: 1px solid #a6a6a6;
            background-color: #fff;
          }

          .btn-active {
            border: 0;
            background-color: #ef0d36;
            color: #fff;
          }

          /* dropdown */
          .wrapper-dropdown {
            position: absolute;
            right: 0;
            top: 5px;
            z-index: 100;
          }

          .btn-dropdown {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }

          .icon-down {
            overflow: hidden;
            width: 20px;
            height: 25px;
            margin-left: 5px;
            display: inline-block;
            background: transparent
              url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21tb24g%0D%0ALyBpY29uLWRvd24tYmxhY2s8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48%0D%0AL2Rlc2M+CiAgICA8ZyBpZD0iQ29tbW9uLS8taWNvbi1kb3duLWJsYWNrIiBzdHJva2U9Im5vbmUi%0D%0AIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAg%0D%0AICA8cG9seWdvbiBpZD0iVHJpYW5nbGUtMiIgZmlsbD0iIzExMTExMSIgdHJhbnNmb3JtPSJ0cmFu%0D%0Ac2xhdGUoMTIuMDAwMDAwLCAxMy4wMDAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTEyLjAw%0D%0AMDAwMCwgLTEzLjAwMDAwMCkgIiBwb2ludHM9IjEyIDkgMTggMTcgNiAxNyI+PC9wb2x5Z29uPgog%0D%0AICAgPC9nPgo8L3N2Zz4=")
              no-repeat;
          }

          .dropdown {
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(0, 0, 0, 0.1);
            background: #fff;
            color: #1d1d1d;
            border-radius: 4px;
            width: 160px;
          }

          .dropdown li {
            padding: 15px 12px;
            text-align: left;
          }

          .dropdown li:hover {
            background: #f5f5f5;
          }

          .dropdown li:focus {
            color: #ef0d36;
            font-weight: 700;
          }

          .img-box {
            width: 40px;
            height: 40px;
            background: #eee;
            border: 1px solid #e2e2e2;
            border-radius: 5px;
            position: absolute;
          }

          .img-box img {
            display: block;
            width: 32px;
            margin: 0px auto;
            line-height: 40px;
            height: 40px;
          }

          .noti-list li {
            padding: 10px 0;
            height: 60px;
          }

          .noti-list li:first-child {
            border-top: 1px solid #ddd;
          }

          .noti-list .item-brief {
            margin-left: 60px;
            line-height: 30px;
            color: #4a4a4a;
          }

          .noti-list .item {
            position: relative;
          }

          .item-brief-area {
            margin-left: 60px;
          }

          .item-brief-area p {
            color: #4a4a4a;
          }

          .item-brief-area h4 {
            font-weight: 500;
          }

          .icon-card {
            border: 0;
            overflow: hidden;
            width: 20px;
            height: 25px;
            margin-left: 5px;
            display: inline-block;
            background: transparent
              url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21tb24g%0D%0ALyBpY29uLXBheW1lbnQtbm9yPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2gu%0D%0APC9kZXNjPgogICAgPGcgaWQ9IkNvbW1vbi0vLWljb24tcGF5bWVudC1ub3IiIHN0cm9rZT0ibm9u%0D%0AZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAg%0D%0AICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiMxMTExMTEiIHg9IjIiIHk9IjgiIHdpZHRo%0D%0APSIyMCIgaGVpZ2h0PSIyIj48L3JlY3Q+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5%0D%0AIiBzdHJva2U9IiMxMTExMTEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFu%0D%0Ac2xhdGUoMTIuMDAwMDAwLCAxMi4wMDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRl%0D%0AKC0xMi4wMDAwMDAsIC0xMi4wMDAwMDApICIgeD0iNSIgeT0iMiIgd2lkdGg9IjE0IiBoZWlnaHQ9%0D%0AIjIwIiByeD0iMiI+PC9yZWN0PgogICAgPC9nPgo8L3N2Zz4=")
              no-repeat;
          }

          .icon-repairer::after {
            display: block;
            position: absolute;
            content: "";
            border-radius: 16px;
            bottom: -5px;
            left: 30px;
            font-size: 12px;
            padding: 2px 2px;
            height: 20px;
            width: 20px;
            text-indent: 5px;
            background: #ef0d36
              url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21tb24g%0D%0ALyBpY29uLXBhcGVyLWJsYWNrLWxpbmU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNr%0D%0AZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQ29tbW9uLS8taWNvbi1wYXBlci1ibGFjay1saW5lIiBz%0D%0AdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVu%0D%0Ab2RkIj4KICAgICAgICA8cmVjdCBpZD0iSWNvbkJ1dHRvbi5NZW51X0JsYWNrIiBmaWxsLW9wYWNp%0D%0AdHk9IjAiIGZpbGw9IiNlZjBkMzYiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+%0D%0APC9yZWN0PgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wMDAw%0D%0AMDAsIDIuMDAwMDAwKSIgc3Ryb2tlPSIjZWYwZDM2IiBzdHJva2UtbGluZWNhcD0icm91bmQiPgog%0D%0AICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTYiIGhl%0D%0AaWdodD0iMjAiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDQgTDEzLDQi%0D%0AIGlkPSJQYXRoLTMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMsOCBMMTMsOCIgaWQ9%0D%0AIlBhdGgtMy1Db3B5Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04LDE2IEwxMywxNiIg%0D%0AaWQ9IlBhdGgtMy1Db3B5Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDEyIEwxMywx%0D%0AMiIgaWQ9IlBhdGgtMy1Db3B5LTIiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3Zn%0D%0APg==")
              no-repeat;
            background-size: 80%;
            background-origin: content-box;
            background-position: center;
          }

          .icon-repair::after {
            display: block;
            position: absolute;
            content: "";
            border-radius: 16px;
            bottom: -5px;
            left: 30px;
            font-size: 12px;
            padding: 2px 2px;
            height: 20px;
            width: 20px;
            text-indent: 5px;
            background: #ef0d36
              url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21tb24g%0D%0ALyBpY29uLXJlcGFpci1ibGFjay0xcHg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNr%0D%0AZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQ29tbW9uLS8taWNvbi1yZXBhaXItYmxhY2stMXB4IiBz%0D%0AdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVu%0D%0Ab2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAg%0D%0AICAgIDxwYXRoIGQ9Ik0xMi40OTUzODE5LDkuMDg2Mzk1MDggTDIyLjI5Mzk3NTcsMTguODg0OTg4%0D%0AOCBDMjMuMjM1MzQxNCwxOS44MjYzNTQ2IDIzLjIzNTM0MTQsMjEuMzUyNjEgMjIuMjkzOTc1Nywy%0D%0AMi4yOTM5NzU3IEMyMS4zNTI2MSwyMy4yMzUzNDE0IDE5LjgyNjM1NDYsMjMuMjM1MzQxNCAxOC44%0D%0AODQ5ODg4LDIyLjI5Mzk3NTcgTDkuMDg2Mzk1MDgsMTIuNDk1MzgxOSBDOC44Nzk1NDI5MywxMi41%0D%0ANzgyMTA2IDguNjY3MDA2MzMsMTIuNjUwMjEyNiA4LjQ0OTQ2OTg0LDEyLjcxMDcwMzQgTDguMzk0%0D%0AOTIwMDgsMTIuNzI1ODcyMiBDNi4zNjg0OTQxNCwxMy4yODkzNjQ2IDQuMTk1NjM4MzIsMTIuNzE4%0D%0AMTA1NSAyLjcwODM3MTQxLDExLjIzMDgzODYgQzEuMjIxMTA0NSw5Ljc0MzU3MTY2IDAuNjQ5ODQ1%0D%0ANDMyLDcuNTcwNzE1ODQgMS4yMTMzMzc4LDUuNTQ0Mjg5OTEgTDEuNDEzOTMxMTUsNC44MjI5MTgw%0D%0AMSBMNS42OTExNzkxNCw5LjEwMDE2NjAxIEw4LjI0NzkxOTI5LDguMjQ3OTE5MjkgTDkuMTAwMTY2%0D%0AMDEsNS42OTExNzkxNCBMNC44MjI5MTgwMSwxLjQxMzkzMTE1IEw1LjU0NDI4OTkxLDEuMjEzMzM3%0D%0AOCBDNy41NzA3MTU4NCwwLjY0OTg0NTQzMiA5Ljc0MzU3MTY2LDEuMjIxMTA0NSAxMS4yMzA4Mzg2%0D%0ALDIuNzA4MzcxNDEgQzEyLjcxODEwNTUsNC4xOTU2MzgzMiAxMy4yODkzNjQ2LDYuMzY4NDk0MTQg%0D%0AMTIuNzI1ODcyMiw4LjM5NDkyMDA4IEwxMi43MTA3MDM0LDguNDQ5NDY5ODQgQzEyLjY1MDIxMjYs%0D%0AOC42NjcwMDYzMyAxMi41NzgyMTA2LDguODc5NTQyOTMgMTIuNDk1MzgxOSw5LjA4NjM5NTA4IFoi%0D%0AIGlkPSJDb21iaW5lZC1TaGFwZS1Db3B5LTkiIHN0cm9rZT0iI2ZmZiI+PC9wYXRoPgogICAgPC9n%0D%0APgo8L3N2Zz4=")
              no-repeat;
            background-size: 80%;
            background-origin: content-box;
            background-position: center;
          }

          .icon-payment::after {
            display: block;
            position: absolute;
            content: "";
            border-radius: 16px;
            bottom: -5px;
            left: 30px;
            font-size: 12px;
            padding: 2px 2px;
            height: 20px;
            width: 20px;
            text-indent: 5px;
            background: #ef0d36
              url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21tb24g%0D%0ALyBpY29uLXBheW1lbnQtbm9yPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2gu%0D%0APC9kZXNjPgogICAgPGcgaWQ9IkNvbW1vbi0vLWljb24tcGF5bWVudC1ub3IiIHN0cm9rZT0ibm9u%0D%0AZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAg%0D%0AICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNlZjBkMzYiIHg9IjIiIHk9IjgiIHdpZHRo%0D%0APSIyMCIgaGVpZ2h0PSIyIj48L3JlY3Q+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5%0D%0AIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xh%0D%0AdGUoMTIuMDAwMDAwLCAxMi4wMDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC0x%0D%0AMi4wMDAwMDAsIC0xMi4wMDAwMDApICIgeD0iNSIgeT0iMiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjIw%0D%0AIiByeD0iMiI+PC9yZWN0PgogICAgPC9nPgo8L3N2Zz4=")
              no-repeat;
            background-size: 80%;
            background-origin: content-box;
            background-position: center;
          }

          .footer {
            box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.4);
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 24px 20px;
          }

          .btn-group-area {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .btn-toolbox {
            background: transparent
              url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21tb24g%0D%0ALyBpYy10b29sYm94LW5vcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwv%0D%0AZGVzYz4KICAgIDxnIGlkPSJDb21tb24tLy1pYy10b29sYm94LW5vciIgc3Ryb2tlPSJub25lIiBz%0D%0AdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAg%0D%0APGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApIj4K%0D%0AICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xMyIgc3Ryb2tlPSIjMTExMTExIiB4PSIw%0D%0AIiB5PSIzIiB3aWR0aD0iMjAiIGhlaWdodD0iNiIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAg%0D%0APHBhdGggZD0iTTEsOSBMMTksOSBMMTksMTkgQzE5LDE5LjU1MjI4NDcgMTguNTUyMjg0NywyMCAx%0D%0AOCwyMCBMMiwyMCBDMS40NDc3MTUyNSwyMCAxLDE5LjU1MjI4NDcgMSwxOSBMMSw5IFoiIGlkPSJS%0D%0AZWN0YW5nbGUtMTMtQ29weSIgc3Ryb2tlPSIjMTExMTExIj48L3BhdGg+CiAgICAgICAgICAgIDxy%0D%0AZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiMxMTExMTEiIHg9IjQiIHk9IjciIHdpZHRoPSIyIiBo%0D%0AZWlnaHQ9IjYiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUt%0D%0AQ29weSIgZmlsbD0iIzExMTExMSIgeD0iMTQiIHk9IjciIHdpZHRoPSIyIiBoZWlnaHQ9IjYiIHJ4%0D%0APSIxIj48L3JlY3Q+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01LDMuNSBMNSwxLjUgQzUsMC45NDc3%0D%0AMTUyNSA1LjQ0NzcxNTI1LDAuNSA2LDAuNSBMMTQsMC41IEMxNC41NTIyODQ3LDAuNSAxNSwwLjk0%0D%0ANzcxNTI1IDE1LDEuNSBMMTUsMy41IiBpZD0iUGF0aC0xMSIgc3Ryb2tlPSIjMTExMTExIj48L3Bh%0D%0AdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=")
              no-repeat;
          }

          .btn-request {
            position: relative;
            background: transparent
              url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21tb24g%0D%0ALyBpY29uLXJlcXVlc3Qtc2VsPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2gu%0D%0APC9kZXNjPgogICAgPGcgaWQ9IkNvbW1vbi0vLWljb24tcmVxdWVzdC1zZWwiIHN0cm9rZT0ibm9u%0D%0AZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAg%0D%0AICAgIDxnIGlkPSJHcm91cCIgZmlsbD0iIzExMTExMSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik05%0D%0ALjYxNjIzOTY2LDEuNSBMMjEsMS41IEMyMS44Mjg0MjcxLDEuNSAyMi41LDIuMTcxNTcyODggMjIu%0D%0ANSwzIEwyMi41LDIxIEMyMi41LDIxLjgyODQyNzEgMjEuODI4NDI3MSwyMi41IDIxLDIyLjUgTDgu%0D%0AMjM2MTA2NTEsMjIuNSBDNy42ODY3ODU5NSwyMy4xMTM3NDk0IDYuODg4NDk5ODEsMjMuNSA2LDIz%0D%0ALjUgQzQuMzQzMTQ1NzUsMjMuNSAzLDIyLjE1Njg1NDIgMywyMC41IEwzLDEwLjU3ODUxNTMgQzEu%0D%0ANDQ3MTgwMjUsOS41NDg5MTY0OSAwLjUsNy43NDUyODczMSAwLjUsNS44MDA4ODM0IEMwLjUsMy43%0D%0ANzM2MTAxOCAxLjUyOTYzNzIxLDEuODk5MzY2ODYgMy4yMDE4MTQ1MywwLjg5NTg3NTgyMyBDMy42%0D%0AMzYwMDQ1MiwwLjYzNTMxMzg4NyA0LjA2OTkxNzAxLDAuNSA0LjUsMC41IEw1LDAuNSBMNSw1LjUg%0D%0AQzUsNi4xMjY1NDg1NSA1LjQyMDEzMjg4LDYuNSA2LDYuNSBDNi41Nzk4NjcxMiw2LjUgNyw2LjEy%0D%0ANjU0ODU1IDcsNS41IEw3LDAuNSBMNy41LDAuNSBDNy45MzAwODI5OSwwLjUgOC4zNjM5OTU0OCww%0D%0ALjYzNTMxMzg4NyA4Ljc5ODE4NTQ3LDAuODk1ODc1ODIzIEM5LjA5MTMwOTM2LDEuMDcxNzgyNTMg%0D%0AOS4zNjQ2ODkxMywxLjI3NDQ0NTkyIDkuNjE2MjM5NjYsMS41IFogTTE1LDcgTDE5LDcgQzE5LjI3%0D%0ANjE0MjQsNyAxOS41LDYuNzc2MTQyMzcgMTkuNSw2LjUgQzE5LjUsNi4yMjM4NTc2MyAxOS4yNzYx%0D%0ANDI0LDYgMTksNiBMMTUsNiBDMTQuNzIzODU3Niw2IDE0LjUsNi4yMjM4NTc2MyAxNC41LDYuNSBD%0D%0AMTQuNSw2Ljc3NjE0MjM3IDE0LjcyMzg1NzYsNyAxNSw3IFogTTEzLDE4LjUgTDE5LDE4LjUgQzE5%0D%0ALjI3NjE0MjQsMTguNSAxOS41LDE4LjI3NjE0MjQgMTkuNSwxOCBDMTkuNSwxNy43MjM4NTc2IDE5%0D%0ALjI3NjE0MjQsMTcuNSAxOSwxNy41IEwxMywxNy41IEMxMi43MjM4NTc2LDE3LjUgMTIuNSwxNy43%0D%0AMjM4NTc2IDEyLjUsMTggQzEyLjUsMTguMjc2MTQyNCAxMi43MjM4NTc2LDE4LjUgMTMsMTguNSBa%0D%0AIE0xMywxMi41IEwxOSwxMi41IEMxOS4yNzYxNDI0LDEyLjUgMTkuNSwxMi4yNzYxNDI0IDE5LjUs%0D%0AMTIgQzE5LjUsMTEuNzIzODU3NiAxOS4yNzYxNDI0LDExLjUgMTksMTEuNSBMMTMsMTEuNSBDMTIu%0D%0ANzIzODU3NiwxMS41IDEyLjUsMTEuNzIzODU3NiAxMi41LDEyIEMxMi41LDEyLjI3NjE0MjQgMTIu%0D%0ANzIzODU3NiwxMi41IDEzLDEyLjUgWiBNMy43MTYzNzk5MSwxLjc1MzMyNjk3IEMyLjM0OTYyNywy%0D%0ALjU3MzUyOTY0IDEuNSw0LjEyMDEwMTI5IDEuNSw1LjgwMDg4MzQgQzEuNSw3LjQ4MTY2NTUxIDIu%0D%0AMzQ5NjI3LDkuMDI4MjM3MTYgMy43MTYzNzk5MSw5Ljg0ODQzOTgzIEwzLjc1NzI4MjY5LDkuODcy%0D%0AOTg2MDEgTDMuNzYzOTUxMTYsOS44NzY5ODAwNSBMNC4wMjk2MDcwNCwxMC4wMzU3ODM1IEw0LjAw%0D%0ANTk0MDYzLDEwLjM0NDM3OTUgQzQuMDAxOTg4MDMsMTAuMzk1OTE5MSA0LDEwLjQ0NzgxNCA0LDEw%0D%0ALjUgTDQsMjAuNSBDNCwyMS42MDQ1Njk1IDQuODk1NDMwNSwyMi41IDYsMjIuNSBDNy4xMDQ1Njk1%0D%0ALDIyLjUgOCwyMS42MDQ1Njk1IDgsMjAuNSBMOCwxMC41IEM4LDEwLjQ0NzgxNCA3Ljk5ODAxMTk3%0D%0ALDEwLjM5NTkxOTEgNy45OTQwNTkzNywxMC4zNDQzNzk1IEw3Ljk3MDM5Mjk2LDEwLjAzNTc4MzUg%0D%0ATDguMjM2MDQ4ODQsOS44NzY5ODAwNiBMOC4yNDI3MTczMSw5Ljg3Mjk4NjAxIEw4LjI4MzYyMDA5%0D%0ALDkuODQ4NDM5ODMgQzkuNjUwMzczLDkuMDI4MjM3MTYgMTAuNSw3LjQ4MTY2NTUxIDEwLjUsNS44%0D%0AMDA4ODM0IEMxMC41LDQuMTIwMTAxMjkgOS42NTAzNzMsMi41NzM1Mjk2NCA4LjI4MzYyMDA5LDEu%0D%0ANzUzMzI2OTcgQzguMTg2MDA0NSwxLjY5NDc0Njg0IDguMDkxNTExMDUsMS42NDY3MTA2NiA4LDEu%0D%0ANjA4ODIyNDMgTDgsNS41IEM4LDYuNzA2Nzg0NzggNy4xMDc2MzI4OCw3LjUgNiw3LjUgQzQuODky%0D%0AMzY3MTIsNy41IDQsNi43MDY3ODQ3OCA0LDUuNSBMNCwxLjYwODgyMjQzIEMzLjkwODQ4ODk1LDEu%0D%0ANjQ2NzEwNjYgMy44MTM5OTU1LDEuNjk0NzQ2ODQgMy43MTYzNzk5MSwxLjc1MzMyNjk3IFoiIGlk%0D%0APSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+")
              no-repeat;
          }

          .btn-profile {
            position: relative;
            background: transparent
              url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21tb24g%0D%0ALyBpYy1wcm9maWxlLW5vcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwv%0D%0AZGVzYz4KICAgIDxnIGlkPSJDb21tb24tLy1pYy1wcm9maWxlLW5vciIgc3Ryb2tlPSJub25lIiBz%0D%0AdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxp%0D%0AbmVjYXA9InJvdW5kIj4KICAgICAgICA8cGF0aCBkPSJNNyw3IEM3LDQuMjQyNzc3NzggOS4yNDI3%0D%0ANzc3OCwyIDEyLDIgQzE0Ljc1NzIyMjIsMiAxNyw0LjI0Mjc3Nzc4IDE3LDcgQzE3LDkuNzU3MjIy%0D%0AMjIgMTQuNzU3MjIyMiwxMiAxMiwxMiBDOS4yNDI3Nzc3OCwxMiA3LDkuNzU3MjIyMjIgNyw3IFog%0D%0ATTIwLjE3MDQ1NDUsMjIgTDMuODI5NTQ1NDUsMjIgQzIuODE5MTE1NCwyMiAyLDIxLjE4MDg4NDYg%0D%0AMiwyMC4xNzA0NTQ1IEMyLDE3LjY3NjI2NyA2LjI5ODk0NzM3LDE1IDEyLDE1IEMxNy43MDEwNTI2%0D%0ALDE1IDIyLDE3LjY3NjI2NyAyMiwyMC4xNzA0NTQ1IEMyMiwyMS4xODA4ODQ2IDIxLjE4MDg4NDYs%0D%0AMjIgMjAuMTcwNDU0NSwyMiBaIiBpZD0iSWNvbkJ1dHRvbi5NeWNvdXBhbmdfQmxhY2siIHN0cm9r%0D%0AZT0iIzExMTExMSI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=")
              no-repeat;
          }

          .btn-request::after {
            display: block;
            position: absolute;
            content: "9+";
            background: #ef0d36;
            color: white;
            border-radius: 16px;
            bottom: calc(100% - 10px);
            left: calc(100% - 15px);
            font-size: 12px;
            padding: 2px 2px;
            height: 20px;
            width: 30px;
            text-indent: 0;
          }

          .btn-profile::after {
            display: block;
            position: absolute;
            content: "";
            background: #ef0d36;
            color: white;
            border-radius: 5px;
            bottom: calc(100% - 0px);
            left: calc(100% - 8px);
            height: 5px;
            width: 5px;
            text-indent: 0;
          }

          .btn-plus {
            position: absolute;
            bottom: 50px;
            z-index: 100;
            left: 45%;
            width: 60px;
            height: 60px;
            background: #ef0d36;
            border-radius: 50px;
          }

          .btn-plus::after {
            content: "+";
            font-size: 30px;
            color: #fff;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
