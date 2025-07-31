# CI/CD Demo Project

This is a demo Node.js application with a Dockerfile and Jenkins pipeline for CI/CD.

## Features:
- Node.js app with Express
- Dockerfile for containerization
- Jenkinsfile for pipeline:
  - Build Docker image
  - Push to Docker Hub
  - Deploy container

## How to run locally:
```bash
docker build -t ci-cd-demo .
docker run -d -p 3000:3000 ci-cd-demo
```
