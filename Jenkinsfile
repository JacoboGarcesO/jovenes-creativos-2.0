pipeline {
    agent any
    
    tools {
        nodejs "NodeJS"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Build Microfrontends') {
            steps {
                // Build shared library first
                sh 'npm run build shared'
                
                // Build home microfrontend
                sh 'npm run build home'
                
                // Build main application last
                sh 'npm run build main --configuration production'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker cp $(pwd)/dist/main/browser/. nginx:/usr/share/nginx/html/'
                sh 'docker exec nginx nginx -s reload'
            }
        }
    }
    
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}