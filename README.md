# Ajay Ummadi: portfolio

The source of my portfolio site, live at **https://makerworkslab.in/ajayummadi/**.

I am co-founder and managing partner of [MakerWorks Lab](https://makerworkslab.in/), a robotics and Physical AI maker space in Mumbai. The site shows my projects:

- **SO-101 Teleoperation Studio**: a web dashboard and 3D digital twin for LeRobot SO-101 arms
- **LeRobot SO-101 arms**: an interactive 3D exploded view of the arm I assembled
- **Open-ear wired earbuds**: 3D-printed earphones around a salvaged driver, with an interactive 3D view
- **Reachy Mini Companion**: multilingual Gemini Live voice app for Reachy Mini, published on Hugging Face
- **LeRobot Training Monitor** and **MakerWorks Lab**
- My book, *Getting Started with Micro:bit*

## How it is built

A static site in plain HTML, CSS and JavaScript, served with GitHub Pages. The 3D viewers use [Three.js](https://threejs.org/) and load lightweight meshes from each project's `model/` folder.

```
index.html            home page
style.css, site.js    shared styles and scripts
projects/<name>/      one folder per project page
copyright/            copyright and credits page
sitemap.xml, robots.txt, llms.txt   search and AI-crawler files
```

To run it locally, serve the folder with any static server, for example `python3 -m http.server`.

## Copyright and credits

Unless stated otherwise, the text, photos, screenshots, designs and 3D models are copyright 2026 Ajay Ummadi. All rights reserved. See the [copyright and credits page](https://makerworkslab.in/ajayummadi/copyright/) for details, including third-party credits (LeRobot, SO-ARM100, Three.js) and licenses of my open-source projects.
