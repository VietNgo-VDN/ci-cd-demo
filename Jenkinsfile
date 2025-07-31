pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred') // Jenkins credential ID
        IMAGE_NAME = "your-dockerhub-username/ci-cd-demo"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/ci-cd-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $IMAGE_NAME:$BUILD_NUMBER .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
                    sh 'docker push $IMAGE_NAME:$BUILD_NUMBER'
                    sh 'docker tag $IMAGE_NAME:$BUILD_NUMBER $IMAGE_NAME:latest'
                    sh 'docker push $IMAGE_NAME:latest'
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh 'docker stop ci-cd-demo || true'
                    sh 'docker rm ci-cd-demo || true'
                    sh 'docker run -d --name ci-cd-demo -p 3000:3000 $IMAGE_NAME:latest'
                }
            }
        }
    }
}
