# Introduction

First off, thank you for considering contributing to this project. It's people like you that make `cowin-slots` such a great tool!

---

# Contribution Guide

#### Creating issues

  <ul>
    <li>Make sure that there are no duplicate issues by first checking the <a href="https://github.com/manigedit/cowin-slots/issues">Issues</a> tab</li>
    <li>
      The title should follow the following pattern: <code>[TYPE]: &ltshort-description&gt</code>, where <code>TYPE</code> is one of <code>feat</code> | <code>fix</code> | <code>docs</code> | <code>build</code> | <code>ci/cd</code>
    </li>
    <li>
      Explain, in detail, what the issue is about and if it's a bug, add steps to reproduce it.
    </li>
  </ul>

#### Setup

  <ul>
  <li>Fork this repo and then clone the forked repo (<code>https://github.com/&ltyour-username&gt/cowin-slots.git</code>)</li>
  <li>Run <code>yarn</code> inside the root directory to install all the required dependencies</li>
  <li>Scripts
  <ul>
    <li><code>start</code>: Run the app in the development mode.  Open http://localhost:3000 to view it in the browser.  The page will reload if you make edits.  You will also see any lint errors in the console.</li>
    <li><code>build</code>: Builds the app for production to the <code>build</code> folder. It correctly bundles React in production mode and optimizes the build for the best performance.  The build is minified and the filenames include the hashes. Your app is ready to be deployed!  See the section about <a href="https://facebook.github.io/create-react-app/docs/deployment">deployment</a> for more information.</li>
    <li><code>eject</code>: <br><i>Note: this is a one-way operation. Once you <code>eject</code>, you can’t go back!</i><br>If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.  You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.</li>
    <li><code>lint</code>: Run <a href="https://npmjs.com/prettier"><code>prettier</code></a> across all files
    <li><code>test</code>: Run tests using Jest
    </ul>
</li>
  <li>Create an issue branch using this pattern: <code>type/issue-{issue-number}</code> (fe: <code>feat/issue-12</code>, <code>fix/issue-87</code>)
  <li>After completing your work on the issue, push the changes to your forked repo using <code>git cz</code></li>
  </ul>
</details>
