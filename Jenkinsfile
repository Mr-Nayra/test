pipeline {
environment {
//declaring enviornment variables for the Jenkinsfile
appName = "UptrainServer"
projectPath = "/jenkins/data/workspace/Uptrain"
}

agent any

//stages for the Jenkins pipeline
stages {
stage('Build Image') {
steps {
script {
//building image based on the current timestamp
TimeStamp = currentBuild.getTimeInMillis().toString()
TimeStamp="uptrain-"+TimeStamp
dockerImage = docker.build TimeStamp
}
}
}

stage('Compress Image')
{
steps{
script{
//Using the Docker plugin to compress the image as a tar file
sh """
docker save -o ${TimeStamp}.tar ${TimeStamp}
"""
}
}
}

stage('Copy image to remote server') {
steps {
script {
// Set up SSH credentials for remote server
sshagent(credentials: ['UptrainProd']) {
// Copy Docker image to remote server using SCP
sh """
scp -o StrictHostKeyChecking=no ${TimeStamp}.tar ubuntu@65.2.63.83:/home/ubuntu/${TimeStamp}.tar
ssh ubuntu@65.2.63.83 'docker load < ${TimeStamp}.tar && export image_build=${TimeStamp} && docker-compose up -d --build && find . -name 'uptrain*.tar' -delete && docker image prune -a -f'
"""
}
}
}
}
stage('Garbage Collection')
{
steps{
script{
//remove docker images and tar files
sh "docker image prune -a -f"
sh "find . -name 'uptrain*.tar' -delete"   
}
}
}
}
}
