pipeline {
  agent any
  stages {
    stage('Build Image') {
      steps {
        script {
          TimeStamp = currentBuild.getTimeInMillis().toString()
          TimeStamp="uptrain-"+TimeStamp
          dockerImage = docker.build TimeStamp
        }

      }
    }

    stage('Compress Image') {
      steps {
        script {
          sh """
          docker save -o ${TimeStamp}.tar ${TimeStamp}
          """
        }

      }
    }

    stage('Copy image to remote server') {
      steps {
        script {
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

    stage('Garbage Collection') {
      steps {
        script {
          sh "docker image prune -a -f"
          sh "find . -name 'uptrain*.tar' -delete"
        }

      }
    }

  }
  environment {
    appName = 'UptrainServer'
    projectPath = '/jenkins/data/workspace/Uptrain'
  }
}