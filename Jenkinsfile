pipeline{
    agent any
    tools{
        nodejs 'node-jenkins-demo-v22.18.0'
    }
    stages{
        stage('Checkout'){
            steps{
                echo "Checkout the code"
            }
        }
        stage('Install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Test'){
            steps{
                sh 'npm test'
            }
        }
        stage('Build'){
            steps{
                echo "Build the code"
            }
        }
    }
    post{
        success{
            echo 'Pipeline Successful'
        }
        failure{
            echo 'Pipeline Failed'
        }
    }

}
