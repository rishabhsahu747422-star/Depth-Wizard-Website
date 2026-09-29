# DepthWizard — Single-View Height Estimation & 3D Terrain Reconstruction

Research website for DepthWizard: recovering physical terrain height from a single
optical image and reconstructing it as a navigable 3D model.

Plain semantic HTML5, CSS3, and vanilla JavaScript. No build step, no framework,
no backend required to view the site — works directly via `file:///` or any
static host (GitHub Pages).

## Structure
```
/
├── index.html           # Home — executive summary, problem, objectives
├── research.html        # Background, prior work, research gaps
├── methodology.html    # Data engineering, architecture, training, calibration, uncertainty
├── results.html         # Metrics, quantitative results, ablation history, open issues
├── conclusions.html     # Key findings, limitations, future work
├── documentation.html  # Data dictionary, environment, pipeline walkthrough, API reference
├── css/style.css
├── js/
│   ├── navigation.js    # Responsive navigation and header behavior
│   ├── main.js          # Reading progress, back-to-top, documentation helpers
│   └── ui.js            # Tabs and documentation scroll spy
└── assets/images/
    ├── README.md
    └── placeholder-figure.svg  # Placeholder for pending project figures
```

## Content policy

Every technical claim on this site is checked against the actual project code
and training records before it's written — no placeholder numbers dressed up
as real results. Where a result is genuinely pending (e.g. a fine-tuning run
still in progress), the page says so explicitly rather than estimating.

## Hosting on GitHub Pages

Deployed via `.github/workflows/static.yml` on push to the default branch —
no build step, the whole repo is served as-is. `.nojekyll` is present so
GitHub Pages serves files exactly as committed.
