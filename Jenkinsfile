pipeline {
  agent none
  stages {
    stage('Checkout') {
      steps {
        script {
          checkout scm
        }
      }
    }

    stage('Install Deps') {
      steps {
        withEnv(['HOME=.']) {
          sh 'npm install'
        }
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
        dir('./dist') {
          stash includes: '*', name: 'artifacts'
        }
      }
    }
  }
}