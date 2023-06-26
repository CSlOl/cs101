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
                    echo 'Clone Success'
                }
                failure {
                    echo 'Clone Failed'
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
                    echo 'Gradle Build Success'
                }
                failure {
                    echo 'Gradle Build Failed'
                }
            }
        }

        stage('Docker Cleanup') {
            steps {
                echo 'Docker Cleanup Start'

                try {
                    sh 'docker stop cs101-be'
                }
                catch (exc) {
                    echo 'Container Not Found'
                }

                try {
                    sh 'docker rmi cs101-be'
                }
                catch (exc) {
                    echo 'Delete Image Failed'
                }
            }

            post {
                success {
                    echo 'Docker Cleanup Success'
                }
                failure {
                    echo "Docker Cleanup Failed'
                }
            }
        }


        stage('Dockerizing'){
            steps{
                dir('backend'){
                    echo 'Backend Image Bulid Start'
                    sh 'docker build -t cs101-be .'
                }
            }

            post {
                success {
                    echo 'Bulid Docker Image Success'
                }
                failure {
                    echo 'Bulid Docker Image Failed'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d --rm -p 8080:80 -e CS101_DB_URL=$CS101_DB_URL -e CS101_DB_USERNAME=$CS101_DB_USERNAME -e CS101_DB_PASSWORD=$CS101_DB_PASSWORD -e SALT=$SALT --name cs101-be cs101-be'
            }

            post {
                success {
                    echo 'Deploy Success'
                }
                failure {
                    echo 'Deploy Failed'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline Success'
        }
        failure {
            echo 'Pipeline Failed'
        }
    }
}