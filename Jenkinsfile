 pipeline {
     agent any 	// 사용 가능한 에이전트에서 이 파이프라인 또는 해당 단계를 실행

     stages {
         stage('Prepare') {
             steps {
                 git branch: 'develop',
                     url: 'https://github.com/CSlOl/cs101.git',
                     credentialsId: 'junpark36'
             }

             post {
                 success {
                     sh 'echo "Successfully Cloned Repository"'
                 }
                 failure {
                     sh 'echo "Fail Cloned Repository"'
                 }
             }
         }

         stage('Build') {
             steps {
                 sh 'chmod +x gradlew'
                 sh  'backend/gradlew clean build'


                 sh 'ls -al backend/build'
             }
             post {
                 success {
                     echo 'gradle build success'
                 }

                 failure {
                     echo 'gradle build failed'
                 }
             }
         }
         stage('Test') {
             steps {
                 echo  '테스트 단계와 관련된 몇 가지 단계를 수행합니다.'
             }
         }
         stage('Docker Rm') {
             steps {
                 sh 'echo "Docker Rm Start"'
                 sh """
                 docker stop jjoon0306/cs101-be
                 docker rm jjoon0306/cs101-be
                 docker rmi -f jjoon0306/cs101-be
                 """
             }

             post {
                 success {
                     sh 'echo "Docker Rm Success"'
                 }
                 failure {
                     sh 'echo "Docker Rm Fail"'
                 }
             }
         }

         stage('Dockerizing'){
             steps{
                 sh 'echo " Image Bulid Start"'
                 sh 'docker buildx build —platform=linux/amd64 -t jjoon0306/cs101-be backend'
             }
             post {
                 success {
                     sh 'echo "Bulid Docker Image Success"'
                 }

                 failure {
                     sh 'echo "Bulid Docker Image Fail"'
                 }
             }
         }

         stage('Deploy') {
             steps {
                 sh 'docker run -p 8080:80 jjoon0306/cs101-be'
             }

             post {
                 success {
                     echo 'success'
                 }

                 failure {
                     echo 'failed'
                 }
             }
         }
     }
 }