pipeline {
    agent any 	// 사용 가능한 에이전트에서 이 파이프라인 또는 해당 단계를 실행

    stages {
        stage('Clone') {
            steps {
                cleanWs()
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
                    sh  './gradlew clean build'
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

        stage('Docker Cleanup') {
            steps {
                def containerExists = sh(script: 'docker ps -f "name=cs101-be"', returnStdout: true) == 0

                if (!containerExists) {
                    sh 'echo "Docker Cleanup Start"'
                    sh 'docker stop cs101-be'
                    sh 'docker rmi jjoon0306/cs101-be'
                }
            }

            post {
                success {
                    sh 'echo "Docker Cleanup Success"'
                }
                failure {
                    sh 'echo "Docker Cleanup Fail"'
                }
            }
        }

        stage('Dockerizing'){
            steps{
                dir('backend'){
                    sh 'echo "Backend Image Bulid Start"'
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
                sh 'docker run -d --rm -p 8080:80 -e CS101_DB_URL=$CS101_DB_URL -e CS101_DB_USERNAME=$CS101_DB_USERNAME -e CS101_DB_PASSWORD=$CS101_DB_PASSWORD --name cs101-be jjoon0306/cs101-be'
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

    post {
        success {
            echo 'deploy success'
        }
        failure {
            echo 'deploy failed'
        }
    }
}