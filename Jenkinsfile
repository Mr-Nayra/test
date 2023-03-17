pipeline {
 environment {
  appName = "UptrainServer"
  projectPath = "/jenkins/data/workspace/Uptrain"
 }

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
                        scp -o StrictHostKeyChecking=no /jenkins/data/workspace/Uptrain/${OutputFile} ubuntu@65.2.63.83:/home/ubuntu/${OutputFile}
                        """
                    }
                }
            }
        }

// stage('Packing AMI')
// {
//     steps {
//       script{
//         withAWS(credentials:'aws-key',region:'us-east-1'){
//         sh """
//         packer build ./Iaas/packer.json
//         """
//         EC2_AMI_ID = sh(returnStdout: true, script: "cat manifest.json | jq -r '.builds[-1].artifact_id' | cut -d: -f2").trim()
//         sh """
//         echo ${EC2_AMI_ID}
//         """
//         }
//         }
//       }
// }
//   // stage('DeployToProd')
//   // {
//   //   steps{
//   //     script{
//   // sshagent(credentials : ['prod1']) {

//   // def release="${params.RELEASE_TAG}"
//   // sh '''
//   // ssh -t -t api@54.85.69.14 -o StrictHostKeyChecking=no "./prodDeploy.sh $registry:"'''+release+'''""
//   // '''
//   //    }
//   //     }
//   //   }
//   // }
//    stage('Deploy to EC2') {
//       steps {
//         script {
//            withAWS(credentials:'aws-key',region:'us-east-1'){
//     InstanceId=sh(returnStdout:true,script:"cat InstanceDetails.json | jq -r '.Instances[0].InstanceId'").trim()
//     sh """
//     aws ec2 terminate-instances --instance-ids ${InstanceId}
//     """
//     sh """
//      aws ec2 run-instances \
//     --image-id ${EC2_AMI_ID} \
//     --count 1 \
//     --instance-type t2.micro \
//     --key-name prod \
//     --security-group-ids sg-03c91b5cba5bc22fe \
//     --subnet-id subnet-0602ea70b8096f0c5 \
//     --block-device-mappings [{\\"DeviceName\\":\\"/dev/sdf\\",\\"Ebs\\":{\\"VolumeSize\\":10,\\"DeleteOnTermination\\":false}}] \
//     --tag-specifications \'ResourceType=instance,Tags=[{Key=Name,Value=production}]\' \'ResourceType=volume,Tags=[{Key=Name,Value=demo-server-disk}]\' > InstanceDetails.json
//           """
//           }
//         }
//       }
//     }
  // stage('Garbage Collection') {
  //  steps {
  //   sh "docker rmi $registry:${params.RELEASE_TAG}"
  //   sh "docker image prune -a -f"
  //  }
  // }
 }


}