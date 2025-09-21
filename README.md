# Log Plotter

This project provides an interactive visualization of **common camera
log encoding curves** using [Plotly.js](https://plotly.com/javascript/).
It allows you to explore how different log transfer functions map linear
scene exposures into their respective log-encoded values.

## ✨ Features

-   📈 Interactive plot rendered with **Plotly.js**\
-   🎥 Includes formulas for many popular log curves, such as:
    -   **ACEScc / ACEScct**
    -   **Apple Log**
    -   **ARRI LogC3 / LogC4**
    -   **Blackmagic Film Gen 5**
    -   **Canon CLog2 / CLog3**
    -   **DaVinci Intermediate**
    -   **DJI D-Log**
    -   **Filmlight T-Log**
    -   **Fujifilm F-Log / F-Log2**
    -   **JPLog2**
    -   **Kodak Cineon Log**
    -   **Leica L-Log**
    -   **Nikon N-Log**
    -   **Panasonic V-Log**
    -   **REDLog3G10**
    -   **Sony S-Log2 / S-Log3**
-   ⚡ Real-time comparison across different log curves
-   🖥️ Responsive design for desktop and mobile

## 📁 Project Contents
- `index.html` — Main entry point. Loads Plotly.js, defines exposure ranges, applies the log functions, and renders the interactive chart.
- `formulas.js` — Collection of JavaScript functions implementing common log encoding curves (ACES, ARRI, Canon, Sony, etc.).
- `README.md` — Project documentation and usage guide.


## ⚙️ How It Works

1.  **Exposures** are generated relative to **18% gray** across a range
    of `-10` to `+12` stops.\
2.  Each **log function** is implemented in JavaScript (ported from
    official specs sources).\
3.  A **Plotly line chart** is created with all curves overlaid for
    visual comparison.

The X-axis represents **stops above/below 18% gray**, and the Y-axis
represents the **normalized log-encoded value** (0--1).

## 🌐 Live Demo (GitHub Pages)

This site is hosted with **GitHub Pages**.  
👉 https://kagankerimoglu.github.io/logplotter/


## 📜 License / Usage

This project is provided **for educational and research purposes only**.
Log curve implementations are based on publicly available specifications.
