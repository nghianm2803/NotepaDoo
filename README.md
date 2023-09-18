<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/nghianm2803/NotepaDoo">
    <img src="client/public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">NotepaDoo</h3>

  <p align="center">
    <a href="https://notepadoo.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/nghianm2803/NotepaDoo/issues">Report Bug</a>
    ·
    <a href="https://github.com/nghianm2803/NotepaDoo/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
I'm tired of a bunch of ads on notes out there. So I created one for myself.

### Built With

##### Frontend:

[![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://material-ui.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

##### Backend:

[![Node.js](https://img.shields.io/badge/nodejs-20232A?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDb.com](https://img.shields.io/badge/mongodb-20232A?style=for-the-badge&logo=mongodb)](https://mongodb.com/)

## Getting Started

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/nghianm2803/NotepaDoo.git
   ```
#### Server

1. Install NPM packages
   ```sh
   npm install
   ```

2. Make an ``.env`` file using this template below
  MONGO_URI="Your MongoDB"

3. Run the server on your local:
   ```sh
   npm start
   ``` 

#### Client

1. Install NPM packages
   ```sh
   npm install
   ```
2. Change const in `constants.js` file using this template below
   ```js
   GRAPHQL_SERVER = "http://localhost:4000";
   GRAPHQL_SUBSCRIPTION_ENDPOINT = "wss:http://localhost:4000/graphql";
   ```
3. Run the client on your local:
   ```sh
   npm start
   ```
<!-- CONTACT -->

## Contact

Nguyen Minh Nghia - [@LinkedIn](https://www.linkedin.com/in/nghianm2803) - nghianm2803@gmail.com

Project Link: [https://github.com/nghianm2803/NotepaDoo](https://github.com/nghianm2803/NotepaDoo)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/nghianm2803/NotepaDoo.svg?style=for-the-badge
[contributors-url]: https://github.com/nghianm2803/NotepaDoo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nghianm2803/NotepaDoo.svg?style=for-the-badge
[forks-url]: https://github.com/nghianm2803/NotepaDoo/network/members
[stars-shield]: https://img.shields.io/github/stars/nghianm2803/NotepaDoo.svg?style=for-the-badge
[stars-url]: https://github.com/nghianm2803/NotepaDoo/stargazers
[issues-shield]: https://img.shields.io/github/issues/nghianm2803/NotepaDoo.svg?style=for-the-badge
[issues-url]: https://github.com/nghianm2803/NotepaDoo/issues
[license-shield]: https://img.shields.io/github/license/nghianm2803/NotepaDoo.svg?style=for-the-badge
[license-url]: https://github.com/nghianm2803/NotepaDoo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nghianm2803
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/nodejs-20232A?style=for-the-badge&logo=node.js
[Node-url]: https://nodejs.org/
[MongoDb.com]: https://img.shields.io/badge/mongodb-20232A?style=for-the-badge&logo=mongodb
[MongoDb-url]: https://mongodb.com
