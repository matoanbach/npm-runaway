# DeepFood Frontend

DeepFood Frontend is part of our hackathon project for a Data Analytics + POS SaaS solution. Designed for restaurants, catering services, supermarkets, grocery chains, and food manufacturers, this cloud-based platform integrates with various ERP systems (e.g., SAP, Oracle, Microsoft Dynamics, Odoo) to deliver real-time inventory monitoring, sales analytics, demand forecasting, and more.

---

## Prerequisites

- `Node.js`: v23.1.0 or v22.x (ensure one of these versions is installed)
- `Docker`: (if you plan to run the project in a containerized environment)

---

## Running the Project Locally

### 1. Clone the Repository

- For joining an existing project: `git clone [repository_url]`

- For building from scratch using the Shadcn template: `git clone https://github.com/salimi-my/shadcn-ui-sidebar?tab=readme-ov-file`

### 2. Install Dependencies

Navigate to the project directory and run: `npm install`

Note: If you encounter multiple warnings or errors, try running: `npm install --force`

### 3. Start the Development Server

Launch the development environment with: `npm run dev`

### 4. Build and Run a Production Release

To create a production build: `npm run build`

Then start the application: `npm run start`

---

## Running the Project with Docker

### 1. Dockerize the Project

#### Understanding Docker Concepts

- Image: A template used to create containers.
- Container: A runtime instance of an image. Multiple containers can be created from a single image.

#### Dockerfile

Here’s an example Dockerfile:

```Dockerfile
FROM node:23-alpine

WORKDIR /app

COPY package\*.json ./
RUN npm install

COPY . .
RUN npm run build

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "run", "start"]
```

#### Build the Docker Image

From the project directory, run: `docker build -t toan/deepfood-frontend:0.1 .`

Example output details the steps and final image creation.

#### Verify the Docker Image

List your Docker images with: `docker images`

#### Run the Docker Container

To run the image as a container: `docker run -p 3000:3000 [IMAGE_NAME_OR_ID]`

Replace [IMAGE_NAME_OR_ID] with your image tag or ID (e.g., eda1c746beab).

#### Manage Docker Containers

- List Running Containers: `docker ps`

- List All Containers (including stopped ones): `docker ps -a`

- Remove a Container: `docker rm [CONTAINER_ID]`

- Run in Detached Mode: `docker run -d -p 3000:3000 [IMAGE_NAME_OR_ID]`

- Remove an Image: `docker rmi [IMAGE_ID]`

### 2. Pushing the Docker Image to the Cloud

#### Setting Up Credentials

Ensure you have the necessary AWS ECR credentials. If your repository is pre-configured, your team should provide the secret keys.

### 3. Pulling the Docker Image from the Cloud

#### Configure AWS Credentials

Set up your AWS credentials (typically in the `~/.aws/credentials` file):

```yaml
[default]
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY

[github]
aws_access_key_id = YOUR_GITHUB_ACCESS_KEY
aws_secret_access_key = YOUR_GITHUB_SECRET_KEY
```

#### Authenticate with AWS CLI

For Linux/MacOS: `aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 160885278762.dkr.ecr.us-east-2.amazonaws.com`

For Windows: `aws ecr list-images --repository-name npm-runaway --region us-east-2`

#### Pull the Image

Download the image with: `docker image pull 160885278762.dkr.ecr.us-east-2.amazonaws.com/npm-runaway:latest`

#### Run the Container

Start the container: `docker run -d -p 3000:3000 [IMAGE_NAME_OR_ID]`

---

## Continuous Integration with GitHub Actions

### Setting Up Secret Keys

1. Go to your GitHub repository.
2. Navigate to `Settings` > `Secrets and Variables` > `Actions`.
3. Add the required keys:

```bash
AWS_ACCESS_KEY=...
AWS_SECRET_ACCESS_KEY=...
AWS_ROOT_ACCESS_KEY=...
AWS_ROOT_SECRET_ACCESS_KEY=...
```

### GitHub Actions Workflow Configuration

Create a file at .github/workflows/deploy.yaml with the following content:

name: Deploy to Production

```yaml
name: Deploy to production

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

jobs:
  test:
    name: Build image
    runs-on: ubuntu-latest
    permissions:
      id-token: write # ✅ Required for OIDC authentication
      contents: read # ✅ Allows reading repository content

    steps:
      # First step
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4 # More information on this action can be found below in the 'AWS Credentials' section
        with:
          aws-access-key-id: ${{ secrets.AWS_ROOT_ACCESS_KEY }}
          aws-secret-access-key: ${{ secrets.AWS_ROOT_SECRET_ACCESS_KEY }}
          aws-region: us-east-2

      # Second step
      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v2

      - name: Build, tag, and push docker image to Amazon ECR
        env:
          REGISTRY: ${{ steps.login-ecr.outputs.registry }}
          REPOSITORY: npm-runaway
          IMAGE_TAG: ${{ github.sha }}
        run: |
          docker build -t $REGISTRY/$REPOSITORY:$IMAGE_TAG -t $REGISTRY/$REPOSITORY:latest .
          docker push -a $REGISTRY/$REPOSITORY
```

---

For further information or support, please refer to the project documentation or contact the development team.
