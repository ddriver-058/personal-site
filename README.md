## Demo & Summary
[LINK](https://scaeangate.io)

This repository houses my personal website, built in Vue 3 and deployed via a Helm chart.

## Repository Structure
The repository consists of code (in the app folder) and a Helm chart deployment (in the app-chart folder).

While this is a public branch with generic values, in my personal setup, I have ArgoCD running in a minkube syncing the 'dev' branch of a private repo, and ArgoCD pointed at my produciton cluster syncing the 'prd' branch, creating a multicluster build pipeline.

