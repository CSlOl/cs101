pipeline {
    agent any 	// 사용 가능한 에이전트에서 이 파이프라인 또는 해당 단계를 실행

    stages {
        stage('Clone') {
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
                dir('backend'){
                    sh 'chmod +x gradlew'
                    sh  './gradlew clean build'

                    sh 'ls -al ./build'
                }
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

        stage('Dockerizing'){
            steps{
                dir('backend'){
                    sh 'echo " Image Bulid Start"'
                    sh 'docker build -t jjoon0306/cs101-be .'
                }
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