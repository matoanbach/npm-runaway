# Lets build this

## prequisite to run locally: node - v23.1.0 or v22^

## download template down: - Shadcn template: https://github.com/salimi-my/shadcn-ui-sidebar?tab=readme-ov-file

```bash
npm install
```

## Note if too many warnings and errors, run "npm install --force"

```bash
npm run dev
```

## Build a new release for the project

```bash
rpm run build
```

```bash
rpm run start
```

## Dockerize the project

### Hold on, what's image and what's container

- `Image` is a template to make a `Container`.
- A `Container` is an instance of an `Image` or created by an `Image`. Hear me out: you can make many containers with one image.
- We don't move containers around to different machines, but we do for an Image. A developer on Mars will download that image and make a container running their own machine

### Dockerfile

```Dockerfile
FROM node:23-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start"]
```

### Build an image

```bash
docker build -t [TAG]:[RELEASE_VERSION] .
# e.g:
docker build -t toan/deepfood-frontend:0.1 .
```

```bash
# output:
(base) tieuma@Tieus-MacBook-Pro deepfood-frontend % docker build -t toan/deepfood-frontend:0.1 .
[+] Building 80.3s (12/12) FINISHED                                                                docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                               0.0s
 => => transferring dockerfile: 198B                                                                               0.0s
 => [internal] load metadata for docker.io/library/node:23-alpine                                                  1.0s
 => [auth] library/node:pull token for registry-1.docker.io                                                        0.0s
 => [internal] load .dockerignore                                                                                  0.0s
 => => transferring context: 2B                                                                                    0.0s
 => [1/6] FROM docker.io/library/node:23-alpine@sha256:35e9e23734fdf61fc9315889c2993bb1a94ae5886cf5c025f27103e2b  10.9s
 => => resolve docker.io/library/node:23-alpine@sha256:35e9e23734fdf61fc9315889c2993bb1a94ae5886cf5c025f27103e2b0  0.0s
 => => sha256:d7c3ad73eddeaa776d97ee4d4e479c888ffecc982faf879ed2a97d7648cd26e5 1.26MB / 1.26MB                     0.4s
 => => sha256:f20af421d4b24027e2d9ce13922e93fa6f8afdae4da20928818b8e888bb6afe3 50.76MB / 50.76MB                   9.9s
 => => sha256:6c1430d52e2c98af0e97b0c47a4802594c54820997c634edd58a36788488f184 445B / 445B                         0.4s
 => => extracting sha256:f20af421d4b24027e2d9ce13922e93fa6f8afdae4da20928818b8e888bb6afe3                          0.7s
 => => extracting sha256:d7c3ad73eddeaa776d97ee4d4e479c888ffecc982faf879ed2a97d7648cd26e5                          0.1s
 => => extracting sha256:6c1430d52e2c98af0e97b0c47a4802594c54820997c634edd58a36788488f184                          0.0s
 => [internal] load build context                                                                                  4.2s
 => => transferring context: 351.18MB                                                                              3.9s
 => [2/6] WORKDIR /app                                                                                             0.4s
 => [3/6] COPY package*.json ./                                                                                    0.1s
 => [4/6] RUN npm install                                                                                         22.2s
 => [5/6] COPY . .                                                                                                 3.7s
 => [6/6] RUN npm run build                                                                                       18.6s
 => exporting to image                                                                                            23.2s
 => => exporting layers                                                                                           16.1s
 => => exporting manifest sha256:6397f447f713db34b9a24ab3232aad4a239b2a0e4c9a890d9b21ee8e5cd4a12e                  0.0s
 => => exporting config sha256:4114900deb58071299810951809c27533baf1319c10ec9b5533193a46e510373                    0.0s
 => => exporting attestation manifest sha256:9a0a0fe9300fce343ee2342004908241bea3a6ec4855d5e6d04998bf7528f24e      0.0s
 => => exporting manifest list sha256:eda1c746beab759a25768ff87fe2994183580a8667b06795ced9e200252a39b8             0.0s
 => => naming to docker.io/toan/deepfood-frontend:0.1                                                              0.0s
 => => unpacking to docker.io/toan/deepfood-frontend:0.1                                                           6.9s

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/nrq2f6mq0yirtb9gpkf434qfw
```

### Find the image on your machine

```bash
(base) tieuma@Tieus-MacBook-Pro deepfood-frontend % docker images
REPOSITORY               TAG         IMAGE ID       CREATED          SIZE
toan/deepfood-frontend   0.1         eda1c746beab   28 seconds ago   1.85GB
simplebank               1.0         bc5d67956890   2 weeks ago      34.5MB
postgres                 17-alpine   c4c3cded2248   3 weeks ago      385MB
```

### Run the image

**Note:**: when we run an image, we just made a container

```bash
docker run -p [MACHINE_PORT]:[CONTAINER_PORT] [IMAGE NAME/ID]
# e.g:
docker run -p 3000:3000 eda1c746beab
```

### Find the container

```bash
docker ps
# or
docker ps -a
```

### Remove a container

```bash
docker rm [CONTAINER_ID]
# e.g:
docker rm 1a669d7d0052
```

### Run the image in `DETACH` mode

```bash
docker run -d -p [MACHINE_PORT]:[CONTAINER_PORT] [IMAGE NAME/ID]
# e.g:
docker run -d -p 3000:3000 eda1c746beab
```

### Remove a container

```bash
docker rm [IMAGE_ID]
# e.g:
docker rm asdq1231asd
```

## Cloud for docker (Lets try Amazon ECR this time)

**Note:** Assume your team has ECR set up, so we just need to authenticate and then push the images from our local machine to Amazon ECR repository.

### Set up credential keys -

**Note:** If the repository is already there, we assume the secrets are set up for us already, so `ignore` this part.

**Note:** Ask your team to give you this.

## Set up Github Actions

### Set up secret keys

1. Go to the `github repository` of this project
2. Go to `settings` > `Secrets & Variables` > `Actions`
3. Copy and paste all the neccessary secret keys for `Github Actions` here

```bash
AWS_ACCESS_KEY=... # optional
AWS_SECRET_ACCESS_KEY=... # optional
AWS_ROOT_ACCESS_KEY=...
AWS_ROOT_SECRET_ACCESS_KEY=...
```

### Github Actions config file

```yaml
# put this this file in your_app/.github/deploy.yaml
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
