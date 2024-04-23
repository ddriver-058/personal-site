import yaml from 'js-yaml';

const readConfig = () => {
  return yaml.load(`
    Routes:
      - path: ""
        import: MeSummary
      - path: skills-and-experience
        import: SkillsAndExperience
      - path: accomplishments-and-accreditations
        import: AccomplishmentsAndAccreditations
      - path: argonaut-cluster
        import: ArgonautCluster
      - path: greek-sculptor
        import: GreekSculptor
      - path: personal-life
        import: PersonalLife
    Sidebar:
      "/": 
        text: About Me
        icon: person
      "/skills-and-experience":
        text: Skills & Experience
        icon: rocket_launch
      "/accomplishments-and-accreditations":
        text: Accomplishments & Accreditations
        icon: star
      "/argonaut-cluster":
        text: Argonaut Cluster
        icon: view_in_ar
      "/greek-sculptor":
        text: Greek Sculptor
        icon: payments
      "/personal-life":
        text: Personal Life
        icon: music_note
    MeSummary:
    - type: header
      data: David Driver
    - type: text-with-headshot
      data: >
        Welcome to my personal site, powered by a Kubernetes cluster hosted right from my home setup.
    - type: text 
      data: >
        I am a technology professional who focuses on dev ops, infrastructure, web development, and data analysis. As an employee,
        I greenfielded a production Kubernetes cluster on Google Cloud, designed a microservices deployment architecture based on Gitea, ArgoCD, and Knative, as well
        as authored and deployed over a dozen applications in R Shiny. I have worked for organizations ranging from medium-size local businesses to global powerhouses.
    - type: text
      data: >
        I have also contributed open-source projects, such as Argonaut Cluster, which lets you easily control VMs across a local cluster according to IaC principles.
        It is built in node.js with a Vue 3 frontend. I also used Python to build GreekSculptor, an educational options trading tool that uses linear programming
        to find optimal selections from the options chain of a US stock symbol.
    - type: text 
      data: >
        After earning my degree in mathematics from Ohio University, my love of technology flourished through my work as a data analyst. Data and dashboarding evolved
        into web development and the infrastructure that powers it. I would love to find opportunities to leverage my holistic understanding
        of technology and my love of both infrastructure and software development.
    - type: text 
      data: >
        Named after the famous main gate of Troy, this site is like a gateway to my hometown of Troy, OH. The sidebar will direct you to information about my skills, 
        accomplishments, projects, and more.
    SkillsAndExperience:
      "Infrastructure":
        - skill: Tools
          experience: >
            Kubernetes, GKE, GCE, Terraform, Velero, Ansible, RKE, k3s, Clonezilla, PXE, Knative, nginx, cert-manager, Vagrant
        - skill: Design & administration of Google Kubernetes Engine (GKE) clusters
          experience: Greenfielded a GKE cluster during employment as a scalability advancement from existing Docker Compose architecture
        - skill: Infrastructure as Code with Terraform
          experience: Used Terraform running on a GCE instance to manage GKE
        - skill: Regular GKE backups with Velero
          experience: Configured regular 7d TTL backups of a GKE cluster
        - skill: Imperative node management via Ansible
          experience: Authored Argonaut Cluster, which uses Ansible to manage VMs across a local cluster
        - skill: Local Kubernetes deployment via RKE and k3s
          experience: Designed a local bare-metal k8s via RKE, and used Argonaut Cluster to design a virtualized local k3s cluster
        - skill: Automated imaging with Clonezilla
          experience: As part of the bare-metal RKE design, I used Clonezilla paired with an R plumber HTTP server for a fully automated, MAC-responsive PXE imaging process
        - skill: Kubernetes microservices via Knative
          experience: Configured Knative for a GKE cluster
        - skill: Configuring nginx as a reverse proxy in front of a Google Cloud load balancer
          experience: Achieved efficient use of cloud resources by routing all GKE cluster traffic through a single LB
        - skill: Private ingress configuration via IP whitelisting
          experience: Disallowed traffic from outside the company network from reaching apps via nginx IP whitelisting
        - skill: Automated certificate management via cert-manager
          experience: Obtained authorized TLS certificates for all apps and auto-rotated them via cert-manager
        - skill: Declarative VM configuration via Vagrant
          experience: Authored Argonaut Cluster, which extends Vagrant to coordinate VMs across a physical cluster
      "DevOps":
        - skill: Tools
          experience: ArgoCD, Argo Workflows, Knative, Prometheus, git, Gitea, Docker registry, telepresence, Docker Compose, VSCode
        - skill: Continuous, declarative deployment via ArgoCD
          experience: Deployed over a dozen apps and services, including my own R plumber microservices and a Shiny app, to GKE via ArgoCD and Gitea
        - skill: Process automation via Argo Workflows
          experience: Defined complex data querying processes as Argo Workflow dependency graphs and bundled them with the app's helm chart
        - skill: Tuning Knative microservices via Prometheus metrics
          experience: Tuned Knative microservice scaling parameters based on observed concurrency metrics
        - skill: Source code management via Gitea
          experience: Deployed a Gitea instance as a private source of truth for the organization
        - skill: Versioned deployment via a private Docker registry
          experience: Configured a secure Docker registry and used it for version-tagged Helm deployments
        - skill: Easy access to cluster resources via telepresence
          experience: Used telepresence to debug a complex microservices environment
        - skill: Containerized local development environments via Docker Compose & VSCode
          experience: Used Docker Compose along with in-browser IDE (RStudio Server) and 'Attach to Running Container' for local conainerized development
        - skill: Multi-cluster build pipelines with ArgoCD
          experience: Deployed dev branch of personal website repo to minikube, and the prd branch to a public-facing k3s cluster, merging changes between branches
      "Web Development":
        - skill: Tools
          experience: node.js, Koa, Vue 3, Pinia, Quasar, Python, Flask, R, Plumber, Microservices, WebSockets, Request mimicking, YAML
        - skill: API development with R plumber, node.js Koa, and Python Flask
          experience: Authored over a dozen microservices during employment with R, used Koa for the Argonaut Cluster API server, and Flask for GreekSculptor
        - skill: Vue 3 web applications via Quasar
          experience: Used Quasar to build Argonaut Cluster's UI and this site
        - skill: Vue 3 state management via Pinia
          experience: Used pinia stores extensively to share data between components in Argonaut Cluster's UI
        - skill: Separating code and configuration via YAML
          experience: Centralized app configuration via YAML imports (such as this site's readConfig.js)
        - skill: Automation via API calls and reverse-engineered request mimicking
          experience: Built and maintained a codebase of dozens of automations powered by the ServiceTitan front-end and backend (reverse-engineered) APIs
        - skill: IPC via WebSockets
          experience: Served wss:// to transfer process logs from Ansible / SSH to Argonaut Cluster's UI
      "Data Analysis":
        - skill: Tools
          experience: R Shiny, R Markdown, Python Dash, Selenium, Puppeteer, Plotly, tidyverse, data.table, lodash, dataForge
        - skill: Dashboarding in Shiny
          experience: Authored and deployed over a dozen reporting and operational SPAs in R
        - skill: Dashboarding in Python
          experience: Authored GreekSculptor, an interactive options trading dashboard in Python
        - skill: Data mart development
          experience: Built a unified front-end to pull data from multiple sources, allowing users to build custom queries and schedule email reports
        - skill: PDF report rendering with R Markdown
          experience: Defined .Rmd files and deployed a Shiny application that let users render employee scorecards based on input parameters, then download as a PDF
        - skill: Automated advanced queries with Selenium and Puppeteer
          experience: Built and maintained daily data pull scripts using browser automation for sites with no readily available data export
        - skill: Statistical employee performance benchmarks via simulation and Student's t-test
          experience: Simulated possible employee outcomes and used Student's t-test to find the point where the underlying distribution was likely to have changed
        - skill: Data visualization with R plotly
          experience: Used Plotly to build bar, line, waterfall, etc. charts for Shiny apps
        - skill: Advanced data processing with R tidyverse, data.table and JS lodash, dataForge
          experience: Used tidyverse extensively for automation and app backends, JS lodash and dataForge for Argonaut cluster
    AccomplishmentsAndAccreditations:
      - type: header
        data: Educational
      - type: text
        data: Bachelors of Science, Mathematics from Ohio University (3.98 GPA)
      - type: text
        data: Minor, Computer Science (4.00 GPA in relevant courses)
      - type: header
        data: Projects
      - type: text
        data: Built and managed an R codebase of over 50 automations and data pulls, plus over a dozen Shiny SPA's
      - type: text
        data: Greenfielded a production Kubernetes cluster in Google Kubernetes Engine managed via Terraform
      - type: text
        data: >
          Deployed, backed up, and managed a complex set of production applications in k8s, including an IT ticketing system, an IT 
          inventory system, and a private Git repository server
      - type: text
        data: Built Argonaut Cluster, a convenient interface for declarative VM control across a physical cluster
      - type: text
        data: Hosted personal site from a home setup via a local virtualized k3s cluster

    ArgonautCluster:
      - type: header
        data: Demo
      - type: video
      - type: header
        data: What & Why
      - type: text
        data: >
          Argonaut Cluster enables you to control VMs declaratively and effortlessly across a physical cluster. It is designed to make declarative local
          VM deployments scalable. It consists of a node.js Koa API that uses Ansible to configure and execute Vagrant commands to control VMs across your
          cluster. It presents a Vue 3 frontend for easy definition, syncing, and backup.
      - type: header
        data: Motivation
      - type: text
        data: > 
          After experimenting with a bare-metal Rancher Kubernetes Engine (RKE) cluster in my home lab, I decided a virtualized setup
          would be far easier to manage due to the features of providers like VirtualBox (such as snapshots, machine suspension, etc.)
          and the ease of defining the whole lifecycle of the environment as code.
      - type: text
        data: >
          With the goal of defining a VM cluster as code, I started looking into existing tools. While
          the libvirt terraform module succeeds in providing declarative control of VMs, configuring a robust setup with libvirt is
          a complex task. There is already an open tool that makes it easy to declaratively control VMs -- Vagrant.
      - type: text
        data: >
          However, Vagrant is only intended to operate on one physical node at a time. Still, I reasoned that it would be straightforward to
          extend the setup to multiple nodes by controlling the Vagrantfiles of each node from a central configuration. Hence, the idea
          for Argonaut Cluster was born.
      - type: text
        data: >
          The idea of creating a k8s-like control loop to manage the VMs seemed like taking on too much, so I opted for an imperative approach
          powered by Ansible. The plan was clear -- create a central configuration from which to template Ansible and Vagrant configuration, 
          then use Ansible to populate the files and run Vagrant commands. 
      - type: header
        data: Development
      - type: text
        data: >
          I ultimately decided to implement the API server in node.js with Koa, and to supply a Vue 3 frontend. I had to decide on a variety
          of techniques: how to pass data to the playbooks, how to stream playbook process logs to the app, the simplest / most secure way
          to pass the host's SSH configuration to a Docker container, and more. 
      - type: text
        data: >
          There were also user experience challenges: how to make my custom argonaut_cluster.yaml templating easy to test and validate,
          how to visualize the cluster, how to handle selection mechanics on the cluster graph in the context of VM management, and so on.
      - type: text
        data: >
          While complex, there was nothing that seemed insurmountable for my first large Javascript project. Bit by bit, these problems were 
          solved by implementing technologies like WebSocket, SSH agent forwarding, temporary variable files,
          cascading selection, and an editor interface with click-to-render, so that most of the initial goals for the project were achieved.
      - type: header
        data: Launch and moving forward
      - type: text
        data: >
          With that, I published the project on GitHub. In addition, I started making use of the tool to manage a k3s cluster, which is
          what is being used to host this site. As time permits, I want to address issues from the community, as well as test the
          tool on other platforms leading up to a full release.
      - type: text
        data: >
          If you would like to view the source code and documentation, you can do so here: https://github.com/ddriver-058/argonaut-cluster
    GreekSculptor:
      - type: header
        data: Python Linear Programming
      - type: text
        data: >
          GreekSculptor is an application built in Python Dash, backed by a Flask API, that finds optimal selections from the option chain of
          a chosen US stock symbol. Users can input their optimization criteria, (e.g., maximize vega such that delta = 0), and then the 
          optimizer will return a selection vector specifying the portfolio of options satisfying the objective and constraints.
      - type: link
      - type: text
        data: >
          This tool was built after some initial experiments I made to apply linear programming to options trading in R. I thought the results
          were interesting enough that I wanted to share the technique by building an application that is easy to use and lets users quickly
          inspect the optimization results.
      - type: text
        data: >
          As the "About this App" page in GreekSculptor mentions, this app is for educational and entertainment purposes only. It does not
          constitute financial advice.
    PersonalLife:
      - type: header
        data: Hobbies
      - type: text
        data: >
          I'm a big fan of music and enjoy genres within the realms of electronic, jazz, and rock. I also produce music
          out of my bedroom with Ableton Live and VCV Rack -- most recently, I've been making fantasy synth. Occasionally, I'll fire up
          Blender to make 3D art to pair with it. My music often reflects my love of retro gaming and emulation, so I enjoy making
          3D art in the style of 90s computer graphics.
      - type: text
        data: >
          When I want to socialize, I am usually playing Magic: the Gathering with my friends or at a local game store. We typically play
          the Legacy, Commander, and Dandân formats. My favorite playstyle is combo.
      - type: text
        data: >
          I enjoy spending time outdoors by going on walks and hammocking in my back yard. I'm also happy working in my yard, where I have a penchant
          for using manual and electric tools to save energy.
        
  `);
};

export {
  readConfig
};